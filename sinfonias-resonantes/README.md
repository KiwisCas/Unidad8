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

## Publicar en GitHub Pages

El workflow `.github/workflows/deploy.yml` (en la raíz del repositorio) compila y publica la obra
en cada push a `main`, o a mano desde la pestaña *Actions* (*Run workflow*).

1. En GitHub: *Settings → Pages → Build and deployment → Source:* **GitHub Actions** (una sola vez).
2. Sube los cambios a `main`.
3. La obra queda en `https://<usuario>.github.io/<repositorio>/`.

El workflow pasa `BASE_PATH=/<repositorio>/` a Vite para que las rutas funcionen bajo esa
subcarpeta. Pages sirve por HTTPS, que es lo que exige el navegador para usar la cámara (manos).
`node_modules/` y `dist/` no se versionan: el workflow instala con `npm ci` y compila en cada
despliegue.

Para probar localmente el resultado tal como se publicará:

```bash
BASE_PATH=/Unidad8/ npm run build && npx vite preview --base /Unidad8/
```

## Controles

| Acción | Comportamiento |
|---|---|
| Clic en la pantalla de inicio | Comienza la obra y activa el sonido |
| Mover el mouse (fase I) | Pinceladas de acuarela: despacio = concentradas, rápido = anchas, aguadas, con salpicaduras |
| Giro brusco del trazo | Acumulación de pigmento en el giro |
| Clic breve (fase I) | Gota de agua limpia: floración sobre el pigmento |
| Mantener clic ~1 s sin moverse (fase I) | Señal de tensión → **ruptura** (si sueltas antes, se disipa) |
| Mover el mouse (fase II) | El gesto ya no pinta ni remueve: engendra líneas de physarum que siguen tu dirección y luego la red absorbe |
| Clic breve (fase II/III) | Perturbación localizada (onda + vórtice) |
| Mantener clic ~1 s en zona libre (fase II) | **Encuentro**. En zonas densas la carga es más lenta. Durante la apertura, mover despacio orienta la expansión |
| Mover el mouse (fase III) | Marcas híbridas: el trazo siembra vetas y red, y un eco en canon le responde |
| Llenar el lienzo (fase III) | Cambio de paleta en un frente que sale del último gesto |
| Quieto | La obra sigue: el agua seca, la red y las vetas crecen y se renuevan |
| `R` (dos veces) | Reiniciar |
| `H` | Mostrar / ocultar las indicaciones |
| `M` o botón "sonido" | Silenciar / activar |
| `C` o botón "manos" | Activar / desactivar las manos (cámara) |

### Manos (MediaPipe Hand Landmarker, hasta 2 manos)

La cámara se procesa en el propio equipo; no se envía nada. La primera vez descarga el modelo
(Google) y el motor WASM (jsDelivr), así que necesita conexión y permiso de cámara. El ratón sigue
funcionando a la vez. Las yemas aparecen como puntos de luz y hay una pequeña vista de la cámara.
Cada mano tiene su propio pincel, así que se puede pintar con las dos a la vez (y con el ratón).

Para que los gestos sean fiables:
- cada mano se sigue por su posición (no por la etiqueta izquierda/derecha de MediaPipe, que a veces
  se repite o se intercambia);
- los dedos se miden en 3D y en proporción a la propia mano, así que girar o inclinar la palma no cambia
  el gesto;
- cada gesto tiene histéresis, y una mano puede perderse ~0,3 s sin cortar su trazo ni la pose;
- el punto de pintura se suaviza con un filtro One Euro (menos temblor, sin retraso perceptible);
- abrir la palma admite hasta 0,8 s desde el puño, y el giro exige una rotación acumulada real.

| Gesto | Fase I · acuarela | Fase II · tecnología | Fase III · encuentro |
|---|---|---|---|
| Índice extendido | Pincel | Engendra líneas de la red | Pincel híbrido + red + eco |
| Abrir la palma de golpe (desde puño) | Una gota de tinte por yema | Estallido de líneas por yema | Vetas + tinte armónico por yema |
| Pinza pulgar–índice | Trazo fino | Pozo de gravedad para la red | Trazo fino híbrido |
| Girar la muñeca | Remolino en el agua húmeda | La red se enrosca en espiral | Remolino que mezcla con lo digital |
| Puño sostenido | Papel secante (levanta pigmento húmedo) | Onda de choque que dispersa la red | Condensa color y siembra vetas |
| **Separar mucho las manos ~1,5 s** | → **Ruptura** | — | — |
| **Juntar las manos ~1,5 s** | — | → **Encuentro** | — |

Mientras se sostiene una pose (o el clic) aparece un anillo de progreso entre las manos, la cámara
tiembla cada vez más, suena un latido con un tono ascendente y el fondo anticipa la fase siguiente:
se enfría y se apaga a latidos hacia la ruptura, amanece una luz cálida hacia el encuentro.

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
    HandInputSource.js            manos con MediaPipe: gestos, poses y pincel (carga diferida)
  systems/
    WatercolorSystem.js           simulación de pigmento en GPU (MRT ping-pong)
    Brush.js                      gesto → depósitos de pigmento
    FieldSystem.js                campo vectorial compartido + máscara híbrida + zonas elevadas
    RegionAnalyzer.js             lectura reducida del lienzo y segmentación en zonas
    DigitalStructureSystem.js     pliegues y ondas del lienzo
    PhysarumSystem.js             red de physarum (agentes + mapa de rastro en GPU)
    ReactionSystem.js             reacción-difusión Gray-Scott que crece desde el pigmento
    PaletteController.js          paletas y frente de cambio de color
    HybridSystem.js               interacción bidireccional (fase III)
    structures/                   Structure (3 modos de dibujo), Branches
  visual/VisualComposition.js     cámara, luz, superficie del lienzo, huellas cenitales
  audio/AudioController.js        síntesis procedural
  shaders/                        GLSL: common, passes, canvas, structures, physarum, reaction
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

**Ruptura: digitalización forzada (~7,5 s).** Lo manual convertido a la fuerza en datos:
el cuadro implosiona hacia el punto elegido (0–0,6 s); un impacto lo agrieta en fracturas de
Voronoi que irradian desde ahí, con desgarros horizontales y temblor de cámara; los fragmentos se
desplazan y caen mientras la pintura se cuantiza en bloques cada vez mayores y pierde el color
(0,6–4 s); los fragmentos se apagan uno a uno hasta el negro y, sólo entonces, de la oscuridad nace
la red (2,6 s en adelante). El sonido sigue la misma curva: zumbido, grieta y golpe grave, tonos
digitales que descienden, casi silencio y un retumbo del que surge la red.

**Lenguaje tecnológico (fase II).** Una tecnología con la que cuesta interactuar: el gesto ya no
pinta ni remueve el cuadro, sólo engendra líneas nuevas de la red (caminantes que avanzan rectos en
tu dirección y luego son absorbidos por el comportamiento colectivo).
- *Marmolado*: el campo vectorial arrastra lentamente el pigmento seco, como tinta en agua.
- *Noche y relieve*: el papel se apaga y el pigmento emite su propio tono; la densidad se eleva como
  topografía 3D con luz rasante, con curvas de nivel y una ligera separación de canales cromáticos.
- *Physarum* (65 536 agentes en GPU, modelo de Jones): nacen sobre las manchas, usan el pigmento como
  alimento y tejen una red luminosa que conecta los trazos.
- *Reacción-difusión* (Gray-Scott en régimen de laberinto / huella dactilar, 4 pasos lentos por
  cuadro): el frente de la ruptura siembra vetas en las manchas y desde ahí se extienden por el papel.
  La difusión se alinea con el flujo (vetas que fluyen), la escala varía por zonas, el pigmento
  nutre el crecimiento y el tiempo corre ~3× más despacio sobre papel desnudo, así que avanzan desde
  lo pintado de forma gradual. Llevan consigo el tono de la mancha donde nacieron y cada zona envejece
  y se retira tras 40–60 s: la obra crece y se renueva en ciclos sin llenarse nunca del todo.
- *Pliegues* del lienzo siguiendo el eje de las manchas dominantes.

**Encuentro (fase III).** El frente de integración se expande desde el punto elegido. Dentro de él:
- el papel recupera la luz y la red de physarum se vuelve tinta que rellena los huecos entre manchas;
- el trazo reciente siembra vetas de reacción-difusión de su color y atrae agentes de la red;
- cada trazo recibe una respuesta en *canon*: un eco espejado 1,3 s después, en color armónico
  (el tipo de espejo cambia con cada paleta);
- el campo guía la difusión y el pigmento curva el campo (bucle de retroalimentación);
- **cuando el lienzo supera ~42 % de cobertura**, un frente sale del último gesto y traslada toda la
  obra a la siguiente paleta (papel → terracota → nocturno → tinta → brasas), aclarando lo anterior para
  abrir espacio. Las paletas son bitonos sobre la absorbancia, por lo que siempre son armónicas.

**Sonido.** Un colchón armónico de cuatro voces cambia de acorde cada ~8,5 s.
Fase I: La menor (Am9 – Fmaj7 – C – G6), aire y agua, y los trazos tocan notas del acorde vigente.
Fase II: un bloque tenso con segundas menores, pulso grave, crepitar de la red y un chasquido cada
vez que el gesto engendra líneas. Fase III: la armonía se resuelve en Re mayor (Dmaj9 – Bm11 – Gmaj7
– A6sus), las notas se cuantizan al pulso como campanas FM y el volumen general baja ~45 %.
Cada gesto de mano tiene su sonido, y los umbrales llevan latido y tono ascendente.
El sonido empieza tras el clic inicial (política de autoplay).

**Rendimiento.** Sin asignaciones por cuadro en el bucle de render; simulación a ≤1100 px,
campo a 192 px, análisis a 144 px sólo en eventos. Techo de saturación del pigmento. Si el cuadro baja de ~42 fps, se reduce resolución de
render y simulación conservando la pintura. Reiniciar libera geometrías y materiales.

## Alternativas a una simulación física completa

No es un solucionador de Navier–Stokes de aguas someras (Curtis et al.). Es una aproximación por
flujos entre vecinos con permeabilidad y umbrales de frente, que reproduce los fenómenos visibles
(bordes duros, marea, floraciones, granulación, veladuras) a 60 fps. La "topología" de las
estructuras no cambia en tiempo real: los cambios de forma se simulan con crecimiento por tiempo de
nacimiento, deformación por vértices y transiciones de aspecto.

## Entradas

`InputController` sólo expone intenciones (cursor, umbral, toque, gesto, pose). El ratón y las manos
son dos fuentes del mismo vocabulario; los umbrales de los gestos están calibrados a las
proporciones reales de la mano (yemas / tamaño de palma) y conviene ajustarlos en sala.
