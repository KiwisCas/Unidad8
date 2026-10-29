# Sinfonías Resonantes

Experiencia audiovisual interactiva para navegador. Un lienzo de acuarela atraviesa una
ruptura tecnológica y termina en un tercer lenguaje, nacido de la interacción entre ambos.

> *No tenemos que destruir lo que fuimos para descubrir lo que podemos llegar a ser.*

## Ejecutar

Requisitos: Node 18+ y un navegador de escritorio con WebGL2 (Chrome, Edge, Firefox, Safari 16+).

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # versión de producción en dist/
npm run preview    # sirve dist/
```

Dependencias: `three@0.169.0` (render, geometría, shaders) y `vite@5.4.10` (servidor de desarrollo).
No se usa p5.js: la simulación de pigmento corre en GLSL sobre texturas de Three.js, y el sonido
usa Web Audio API directamente.

## Controles

| Acción | Comportamiento |
|---|---|
| Clic en la pantalla de inicio | Comienza la obra y activa el sonido |
| Mover el mouse (fase I) | Pinceladas de acuarela: despacio = concentradas, rápido = anchas, aguadas, con salpicaduras |
| Giro brusco del trazo | Acumulación de pigmento en el giro |
| Clic breve (fase I) | Gota de agua limpia: floración sobre el pigmento |
| Mantener clic ~1 s sin moverse (fase I) | Señal de tensión → **ruptura** (si sueltas antes, se disipa) |
| Mover el mouse (fase II) | Lento: el enjambre y la red se acercan y orbitan · rápido: se dispersan y salen ondas · giros: vórtices que remueven el cuadro |
| Clic breve (fase II/III) | Perturbación localizada (onda + vórtice) |
| Mantener clic ~1 s en zona libre (fase II) | **Encuentro**. En zonas densas la carga es más lenta. Durante la apertura, mover despacio orienta la expansión |
| Mover el mouse (fase III) | Marcas híbridas: la red y el enjambre nacen sobre el trazo y lo acompañan, un eco en canon responde y los bordes brotan en ramas |
| Llenar el lienzo (fase III) | Cambio de paleta en un frente que sale del último gesto |
| Quieto | La obra sigue: el agua seca, las estructuras respiran, nuevas ramas brotan solas (fase III) |
| `R` (dos veces) | Reiniciar |
| `H` | Mostrar / ocultar las indicaciones |
| `M` o botón "sonido" | Silenciar / activar |

## Estructura

```
index.html
src/
  main.js                         arranque, intro, botón de sonido
  style.css                       capa tipográfica mínima
  palette.js                      pigmentos y colores digitales como absorbancias
  core/
    ExperienceController.js       coordinación por cuadro (entrada → narrativa → sistemas → render)
    TransitionController.js       fases, carga del umbral, progreso de transiciones
    PerformanceMonitor.js         degradación progresiva de calidad
  input/
    InputController.js            vocabulario de intenciones (pointer / hold / tap / key)
    MouseInputSource.js           fuente mouse (eventos agrupados)
    PoseInputSource.js            punto de extensión para MediaPipe / ml5 (no se carga)
  systems/
    WatercolorSystem.js           simulación de pigmento en GPU (MRT ping-pong)
    Brush.js                      gesto → depósitos de pigmento
    FieldSystem.js                campo vectorial compartido + máscara híbrida + zonas elevadas
    RegionAnalyzer.js             lectura reducida del lienzo y segmentación en zonas
    DigitalStructureSystem.js     pliegues, ondas, ramificaciones de la fase III
    PhysarumSystem.js             red de physarum (agentes + mapa de rastro en GPU)
    SwarmSystem.js                enjambre 3D con steering behaviours (GPGPU)
    PaletteController.js          paletas y frente de cambio de color
    HybridSystem.js               interacción bidireccional (fase III)
    structures/                   Structure (3 modos de dibujo), Branches
  visual/VisualComposition.js     cámara, luz, superficie del lienzo, huellas cenitales
  audio/AudioController.js        síntesis procedural
  shaders/                        GLSL: common, passes, canvas, structures, physarum, swarm
```

## Decisiones técnicas

**Pigmento como absorbancia.** Cada pigmento se guarda como absorbancia (−ln reflectancia).
Superponer es sumar, y el color final es `papel · exp(−A)` (Beer–Lambert): las veladuras se mezclan
de forma sustractiva — ultramar sobre amarillo oscurece hacia verde-gris en lugar de aclararse.

**Difusión húmeda.** Dos texturas en coma flotante: agua + pigmento en suspensión, y pigmento
depositado + humedad del papel. En cada subpaso el agua fluye entre 8 vecinos según la diferencia
de nivel y la permeabilidad del papel (textura procedural de encolado + relieve + fibras). Al
avanzar sobre papel seco el agua sólo cruza si la lámina vecina supera un umbral local, así que el
frente se detiene de forma desigual: bordes duros, prolongaciones y frentes irregulares, no un
círculo que crece. El pigmento viaja aguas abajo con el agua.

**Bordes de marea.** La evaporación es más rápida donde la lámina es delgada (el perímetro); el
agua del centro fluye hacia el borde para compensar y arrastra pigmento que se deposita allí al
secarse. No todos los bordes salen iguales porque depende de la carga, el agua y el papel.
La sedimentación es mayor en los valles del papel (granulación), y el agua nueva levanta parte
del pigmento seco (floraciones al pintar sobre zonas húmedas o con la gota del clic).

**Pincelada.** Cada tramo es una cápsula con dominio deformado por ruido escalado a su radio,
carga desigual a un lado del trazo y densidad variable; los giros dejan acumulaciones y la
velocidad genera salpicaduras satélite.

**Lenguaje tecnológico (fase II).** La ruptura no añade objetos ajenos: hace que lo pintado
empiece a comportarse de otra manera.
- *Marmolado*: el campo vectorial arrastra también el pigmento seco, así que el cuadro se remueve
  como tinta en agua. El gesto lo remueve todavía más (vórtices en los giros, ondas en los barridos).
- *Noche y relieve*: el papel se apaga y el pigmento emite su propio tono; la densidad se eleva como
  topografía 3D con luz rasante, con curvas de nivel y una ligera separación de canales cromáticos.
- *Physarum* (65 536 agentes en GPU, modelo de Jones): nacen sobre las manchas, usan el pigmento como
  alimento y tejen una red luminosa que conecta los trazos. El cursor lento los atrae.
- *Enjambre 3D* (16 384 agentes, GPGPU con MRT): escamas que conservan el color de la mancha donde
  nacieron y navegan con *steering behaviours*: siguen un flow field 3D (rotacional de ruido),
  mantienen una banda de altura, buscan y orbitan el cursor lento, huyen del rápido.
- *Pliegues* del lienzo siguiendo el eje de las manchas dominantes.

**Encuentro (fase III).** El frente de integración se expande desde el punto elegido. Dentro de él:
- el papel recupera la luz y la red de physarum se vuelve tinta que rellena los huecos entre manchas;
- los agentes nacen sobre el trazo reciente; el enjambre *sigue su trayectoria* en carriles paralelos,
  se posa y una parte deja pigmento complementario;
- cada trazo recibe una respuesta en *canon*: un eco espejado 1,3 s después, en color armónico
  (el tipo de espejo cambia con cada paleta);
- los bordes del trazo brotan en ramificaciones pigmentadas;
- el campo guía la difusión y el pigmento curva el campo (bucle de retroalimentación);
- **cuando el lienzo supera ~42 % de cobertura**, un frente sale del último gesto y traslada toda la
  obra a la siguiente paleta (papel → marea → nocturno → tinta → brasas), aclarando lo anterior para
  abrir espacio. Las paletas son bitonos sobre la absorbancia, por lo que siempre son armónicas.

**Sonido.** Fase I: aire filtrado y resonancias, con tonos orgánicos cuya altura depende de la
posición y su timbre de la densidad del pigmento. Fase II: pulso de diente de sierra con filtro
resonante que responde a la agitación, clúster con batidos de segunda menor, ticks de precisión.
Fase III: el clúster se resuelve, los tonos del trazo se cuantizan al pulso como campanas FM.
El sonido empieza tras el clic inicial (política de autoplay).

**Rendimiento.** Sin asignaciones por cuadro en el bucle de render; simulación a ≤1100 px,
campo a 192 px, análisis a 144 px sólo en eventos. Techo de saturación del pigmento y vida limitada
de las ramas de la fase III (se reciclan). Si el cuadro baja de ~42 fps, se reduce resolución de
render y simulación conservando la pintura. Reiniciar libera geometrías y materiales.

## Alternativas a una simulación física completa

No es un solucionador de Navier–Stokes de aguas someras (Curtis et al.). Es una aproximación por
flujos entre vecinos con permeabilidad y umbrales de frente, que reproduce los fenómenos visibles
(bordes duros, marea, floraciones, granulación, veladuras) a 60 fps. La "topología" de las
estructuras no cambia en tiempo real: los cambios de forma se simulan con crecimiento por tiempo de
nacimiento, deformación por vértices y transiciones de aspecto.

## Seguimiento corporal (futuro)

`InputController` sólo expone intenciones. `PoseInputSource.js` muestra el mapeo: muñeca → pincel,
brazos abiertos sostenidos → umbral. Basta añadir la fuente con `input.addSource(...)`.
