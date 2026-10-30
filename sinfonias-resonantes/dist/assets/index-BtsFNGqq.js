(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Qr="169",xl=0,Ma=1,Ml=2,Co=1,Sl=2,sn=3,Tn=0,St=1,qt=2,Mn=0,oi=1,Sa=2,ya=3,Ea=4,ea=5,rn=100,yl=101,El=102,Tl=103,Al=104,bl=200,on=201,wl=202,Rl=203,cr=204,hr=205,Cl=206,Pl=207,Dl=208,Ll=209,Ul=210,Il=211,Nl=212,Fl=213,Ol=214,ur=0,dr=1,fr=2,ui=3,pr=4,mr=5,gr=6,vr=7,Po=0,Bl=1,zl=2,Sn=0,kl=1,Hl=2,Gl=3,Vl=4,Wl=5,ql=6,Xl=7,Do=300,di=301,fi=302,_r=303,xr=304,ys=306,Mr=1e3,Fn=1001,Sr=1002,ft=1003,Yl=1004,Oi=1005,Qe=1006,Ds=1007,On=1008,Gt=1009,Lo=1010,Uo=1011,Ri=1012,ta=1013,zn=1014,Yt=1015,Hn=1016,na=1017,ia=1018,pi=1020,Io=35902,No=1021,Fo=1022,Lt=1023,Oo=1024,Bo=1025,li=1026,mi=1027,zo=1028,sa=1029,ko=1030,ra=1031,aa=1033,ls=33776,cs=33777,hs=33778,us=33779,yr=35840,Er=35841,Tr=35842,Ar=35843,br=36196,wr=37492,Rr=37496,Cr=37808,Pr=37809,Dr=37810,Lr=37811,Ur=37812,Ir=37813,Nr=37814,Fr=37815,Or=37816,Br=37817,zr=37818,kr=37819,Hr=37820,Gr=37821,ds=36492,Vr=36494,Wr=36495,Ho=36283,qr=36284,Xr=36285,Yr=36286,Kl=3200,jl=3201,$l=0,Zl=1,xn="",Vt="srgb",An="srgb-linear",oa="display-p3",Es="display-p3-linear",ms="linear",Je="srgb",gs="rec709",vs="p3",Vn=7680,Ta=519,Jl=512,Ql=513,ec=514,Go=515,tc=516,nc=517,ic=518,sc=519,Aa=35044,_s="300 es",ln=2e3,xs=2001;class vi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const ut=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ba=1234567;const bi=Math.PI/180,Ci=180/Math.PI;function _i(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ut[i&255]+ut[i>>8&255]+ut[i>>16&255]+ut[i>>24&255]+"-"+ut[e&255]+ut[e>>8&255]+"-"+ut[e>>16&15|64]+ut[e>>24&255]+"-"+ut[t&63|128]+ut[t>>8&255]+"-"+ut[t>>16&255]+ut[t>>24&255]+ut[n&255]+ut[n>>8&255]+ut[n>>16&255]+ut[n>>24&255]).toLowerCase()}function gt(i,e,t){return Math.max(e,Math.min(t,i))}function la(i,e){return(i%e+e)%e}function rc(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function ac(i,e,t){return i!==e?(t-i)/(e-i):0}function wi(i,e,t){return(1-t)*i+t*e}function oc(i,e,t,n){return wi(i,e,1-Math.exp(-t*n))}function lc(i,e=1){return e-Math.abs(la(i,e*2)-e)}function cc(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function hc(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function uc(i,e){return i+Math.floor(Math.random()*(e-i+1))}function dc(i,e){return i+Math.random()*(e-i)}function fc(i){return i*(.5-Math.random())}function pc(i){i!==void 0&&(ba=i);let e=ba+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function mc(i){return i*bi}function gc(i){return i*Ci}function vc(i){return(i&i-1)===0&&i!==0}function _c(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function xc(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Mc(i,e,t,n,s){const r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),h=a((e+n)/2),f=r((e-n)/2),p=a((e-n)/2),d=r((n-e)/2),g=a((n-e)/2);switch(s){case"XYX":i.set(o*h,l*f,l*p,o*c);break;case"YZY":i.set(l*p,o*h,l*f,o*c);break;case"ZXZ":i.set(l*f,l*p,o*h,o*c);break;case"XZX":i.set(o*h,l*g,l*d,o*c);break;case"YXY":i.set(l*d,o*h,l*g,o*c);break;case"ZYZ":i.set(l*g,l*d,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function si(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function pt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Ls={DEG2RAD:bi,RAD2DEG:Ci,generateUUID:_i,clamp:gt,euclideanModulo:la,mapLinear:rc,inverseLerp:ac,lerp:wi,damp:oc,pingpong:lc,smoothstep:cc,smootherstep:hc,randInt:uc,randFloat:dc,randFloatSpread:fc,seededRandom:pc,degToRad:mc,radToDeg:gc,isPowerOfTwo:vc,ceilPowerOfTwo:_c,floorPowerOfTwo:xc,setQuaternionFromProperEuler:Mc,normalize:pt,denormalize:si};class Le{constructor(e=0,t=0){Le.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(gt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Pe{constructor(e,t,n,s,r,a,o,l,c){Pe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],f=n[7],p=n[2],d=n[5],g=n[8],_=s[0],u=s[3],m=s[6],T=s[1],y=s[4],E=s[7],L=s[2],w=s[5],b=s[8];return r[0]=a*_+o*T+l*L,r[3]=a*u+o*y+l*w,r[6]=a*m+o*E+l*b,r[1]=c*_+h*T+f*L,r[4]=c*u+h*y+f*w,r[7]=c*m+h*E+f*b,r[2]=p*_+d*T+g*L,r[5]=p*u+d*y+g*w,r[8]=p*m+d*E+g*b,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],f=h*a-o*c,p=o*l-h*r,d=c*r-a*l,g=t*f+n*p+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=f*_,e[1]=(s*c-h*n)*_,e[2]=(o*n-s*a)*_,e[3]=p*_,e[4]=(h*t-s*l)*_,e[5]=(s*r-o*t)*_,e[6]=d*_,e[7]=(n*l-c*t)*_,e[8]=(a*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Us.makeScale(e,t)),this}rotate(e){return this.premultiply(Us.makeRotation(-e)),this}translate(e,t){return this.premultiply(Us.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Us=new Pe;function Vo(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Ms(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Sc(){const i=Ms("canvas");return i.style.display="block",i}const wa={};function fs(i){i in wa||(wa[i]=!0,console.warn(i))}function yc(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function Ec(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Tc(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Ra=new Pe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Ca=new Pe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Mi={[An]:{transfer:ms,primaries:gs,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[Vt]:{transfer:Je,primaries:gs,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Es]:{transfer:ms,primaries:vs,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(Ca),fromReference:i=>i.applyMatrix3(Ra)},[oa]:{transfer:Je,primaries:vs,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(Ca),fromReference:i=>i.applyMatrix3(Ra).convertLinearToSRGB()}},Ac=new Set([An,Es]),We={enabled:!0,_workingColorSpace:An,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Ac.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=Mi[e].toReference,s=Mi[t].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return Mi[i].primaries},getTransfer:function(i){return i===xn?ms:Mi[i].transfer},getLuminanceCoefficients:function(i,e=this._workingColorSpace){return i.fromArray(Mi[e].luminanceCoefficients)}};function ci(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Is(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Wn;class bc{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Wn===void 0&&(Wn=Ms("canvas")),Wn.width=e.width,Wn.height=e.height;const n=Wn.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Wn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ms("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=ci(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ci(t[n]/255)*255):t[n]=ci(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let wc=0;class Wo{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:wc++}),this.uuid=_i(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Ns(s[a].image)):r.push(Ns(s[a]))}else r=Ns(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function Ns(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?bc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Rc=0;class _t extends vi{constructor(e=_t.DEFAULT_IMAGE,t=_t.DEFAULT_MAPPING,n=Fn,s=Fn,r=Qe,a=On,o=Lt,l=Gt,c=_t.DEFAULT_ANISOTROPY,h=xn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Rc++}),this.uuid=_i(),this.name="",this.source=new Wo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Le(0,0),this.repeat=new Le(1,1),this.center=new Le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Pe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Do)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Mr:e.x=e.x-Math.floor(e.x);break;case Fn:e.x=e.x<0?0:1;break;case Sr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Mr:e.y=e.y-Math.floor(e.y);break;case Fn:e.y=e.y<0?0:1;break;case Sr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}_t.DEFAULT_IMAGE=null;_t.DEFAULT_MAPPING=Do;_t.DEFAULT_ANISOTROPY=1;class we{constructor(e=0,t=0,n=0,s=1){we.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const l=e.elements,c=l[0],h=l[4],f=l[8],p=l[1],d=l[5],g=l[9],_=l[2],u=l[6],m=l[10];if(Math.abs(h-p)<.01&&Math.abs(f-_)<.01&&Math.abs(g-u)<.01){if(Math.abs(h+p)<.1&&Math.abs(f+_)<.1&&Math.abs(g+u)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(c+1)/2,E=(d+1)/2,L=(m+1)/2,w=(h+p)/4,b=(f+_)/4,U=(g+u)/4;return y>E&&y>L?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=w/n,r=b/n):E>L?E<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(E),n=w/s,r=U/s):L<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(L),n=b/r,s=U/r),this.set(n,s,r,t),this}let T=Math.sqrt((u-g)*(u-g)+(f-_)*(f-_)+(p-h)*(p-h));return Math.abs(T)<.001&&(T=1),this.x=(u-g)/T,this.y=(f-_)/T,this.z=(p-h)/T,this.w=Math.acos((c+d+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Cc extends vi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new we(0,0,e,t),this.scissorTest=!1,this.viewport=new we(0,0,e,t);const s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Qe,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new _t(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Wo(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class at extends Cc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class qo extends _t{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=ft,this.minFilter=ft,this.wrapR=Fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Pc extends _t{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=ft,this.minFilter=ft,this.wrapR=Fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Pi{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],f=n[s+3];const p=r[a+0],d=r[a+1],g=r[a+2],_=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=f;return}if(o===1){e[t+0]=p,e[t+1]=d,e[t+2]=g,e[t+3]=_;return}if(f!==_||l!==p||c!==d||h!==g){let u=1-o;const m=l*p+c*d+h*g+f*_,T=m>=0?1:-1,y=1-m*m;if(y>Number.EPSILON){const L=Math.sqrt(y),w=Math.atan2(L,m*T);u=Math.sin(u*w)/L,o=Math.sin(o*w)/L}const E=o*T;if(l=l*u+p*E,c=c*u+d*E,h=h*u+g*E,f=f*u+_*E,u===1-o){const L=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=L,c*=L,h*=L,f*=L}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],f=r[a],p=r[a+1],d=r[a+2],g=r[a+3];return e[t]=o*g+h*f+l*d-c*p,e[t+1]=l*g+h*p+c*f-o*d,e[t+2]=c*g+h*d+o*p-l*f,e[t+3]=h*g-o*f-l*p-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),f=o(r/2),p=l(n/2),d=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=p*h*f+c*d*g,this._y=c*d*f-p*h*g,this._z=c*h*g+p*d*f,this._w=c*h*f-p*d*g;break;case"YXZ":this._x=p*h*f+c*d*g,this._y=c*d*f-p*h*g,this._z=c*h*g-p*d*f,this._w=c*h*f+p*d*g;break;case"ZXY":this._x=p*h*f-c*d*g,this._y=c*d*f+p*h*g,this._z=c*h*g+p*d*f,this._w=c*h*f-p*d*g;break;case"ZYX":this._x=p*h*f-c*d*g,this._y=c*d*f+p*h*g,this._z=c*h*g-p*d*f,this._w=c*h*f+p*d*g;break;case"YZX":this._x=p*h*f+c*d*g,this._y=c*d*f+p*h*g,this._z=c*h*g-p*d*f,this._w=c*h*f-p*d*g;break;case"XZY":this._x=p*h*f-c*d*g,this._y=c*d*f-p*h*g,this._z=c*h*g+p*d*f,this._w=c*h*f+p*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],f=t[10],p=n+o+f;if(p>0){const d=.5/Math.sqrt(p+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(a-s)*d}else if(n>o&&n>f){const d=2*Math.sqrt(1+n-o-f);this._w=(h-l)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+c)/d}else if(o>f){const d=2*Math.sqrt(1+o-n-f);this._w=(r-c)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(l+h)/d}else{const d=2*Math.sqrt(1+f-n-o);this._w=(a-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(gt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const d=1-t;return this._w=d*a+t*this._w,this._x=d*n+t*this._x,this._y=d*s+t*this._y,this._z=d*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),f=Math.sin((1-t)*h)/c,p=Math.sin(t*h)/c;return this._w=a*f+this._w*p,this._x=n*f+this._x*p,this._y=s*f+this._y*p,this._z=r*f+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(e=0,t=0,n=0){F.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Pa.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Pa.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),h=2*(o*t-r*s),f=2*(r*n-a*t);return this.x=t+l*c+a*f-o*h,this.y=n+l*h+o*c-r*f,this.z=s+l*f+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Fs.copy(this).projectOnVector(e),this.sub(Fs)}reflect(e){return this.sub(Fs.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(gt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Fs=new F,Pa=new Pi;class Di{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Nt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Nt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Nt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Nt):Nt.fromBufferAttribute(r,a),Nt.applyMatrix4(e.matrixWorld),this.expandByPoint(Nt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Bi.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Bi.copy(n.boundingBox)),Bi.applyMatrix4(e.matrixWorld),this.union(Bi)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Nt),Nt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Si),zi.subVectors(this.max,Si),qn.subVectors(e.a,Si),Xn.subVectors(e.b,Si),Yn.subVectors(e.c,Si),dn.subVectors(Xn,qn),fn.subVectors(Yn,Xn),Rn.subVectors(qn,Yn);let t=[0,-dn.z,dn.y,0,-fn.z,fn.y,0,-Rn.z,Rn.y,dn.z,0,-dn.x,fn.z,0,-fn.x,Rn.z,0,-Rn.x,-dn.y,dn.x,0,-fn.y,fn.x,0,-Rn.y,Rn.x,0];return!Os(t,qn,Xn,Yn,zi)||(t=[1,0,0,0,1,0,0,0,1],!Os(t,qn,Xn,Yn,zi))?!1:(ki.crossVectors(dn,fn),t=[ki.x,ki.y,ki.z],Os(t,qn,Xn,Yn,zi))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Nt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Nt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Zt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Zt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Zt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Zt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Zt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Zt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Zt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Zt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Zt),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Zt=[new F,new F,new F,new F,new F,new F,new F,new F],Nt=new F,Bi=new Di,qn=new F,Xn=new F,Yn=new F,dn=new F,fn=new F,Rn=new F,Si=new F,zi=new F,ki=new F,Cn=new F;function Os(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Cn.fromArray(i,r);const o=s.x*Math.abs(Cn.x)+s.y*Math.abs(Cn.y)+s.z*Math.abs(Cn.z),l=e.dot(Cn),c=t.dot(Cn),h=n.dot(Cn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Dc=new Di,yi=new F,Bs=new F;class Ts{constructor(e=new F,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Dc.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;yi.subVectors(e,this.center);const t=yi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(yi,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Bs.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(yi.copy(e.center).add(Bs)),this.expandByPoint(yi.copy(e.center).sub(Bs))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Jt=new F,zs=new F,Hi=new F,pn=new F,ks=new F,Gi=new F,Hs=new F;class ca{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Jt)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Jt.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Jt.copy(this.origin).addScaledVector(this.direction,t),Jt.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){zs.copy(e).add(t).multiplyScalar(.5),Hi.copy(t).sub(e).normalize(),pn.copy(this.origin).sub(zs);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Hi),o=pn.dot(this.direction),l=-pn.dot(Hi),c=pn.lengthSq(),h=Math.abs(1-a*a);let f,p,d,g;if(h>0)if(f=a*l-o,p=a*o-l,g=r*h,f>=0)if(p>=-g)if(p<=g){const _=1/h;f*=_,p*=_,d=f*(f+a*p+2*o)+p*(a*f+p+2*l)+c}else p=r,f=Math.max(0,-(a*p+o)),d=-f*f+p*(p+2*l)+c;else p=-r,f=Math.max(0,-(a*p+o)),d=-f*f+p*(p+2*l)+c;else p<=-g?(f=Math.max(0,-(-a*r+o)),p=f>0?-r:Math.min(Math.max(-r,-l),r),d=-f*f+p*(p+2*l)+c):p<=g?(f=0,p=Math.min(Math.max(-r,-l),r),d=p*(p+2*l)+c):(f=Math.max(0,-(a*r+o)),p=f>0?r:Math.min(Math.max(-r,-l),r),d=-f*f+p*(p+2*l)+c);else p=a>0?-r:r,f=Math.max(0,-(a*p+o)),d=-f*f+p*(p+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(zs).addScaledVector(Hi,p),d}intersectSphere(e,t){Jt.subVectors(e.center,this.origin);const n=Jt.dot(this.direction),s=Jt.dot(Jt)-n*n,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,p=this.origin;return c>=0?(n=(e.min.x-p.x)*c,s=(e.max.x-p.x)*c):(n=(e.max.x-p.x)*c,s=(e.min.x-p.x)*c),h>=0?(r=(e.min.y-p.y)*h,a=(e.max.y-p.y)*h):(r=(e.max.y-p.y)*h,a=(e.min.y-p.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(e.min.z-p.z)*f,l=(e.max.z-p.z)*f):(o=(e.max.z-p.z)*f,l=(e.min.z-p.z)*f),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Jt)!==null}intersectTriangle(e,t,n,s,r){ks.subVectors(t,e),Gi.subVectors(n,e),Hs.crossVectors(ks,Gi);let a=this.direction.dot(Hs),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;pn.subVectors(this.origin,e);const l=o*this.direction.dot(Gi.crossVectors(pn,Gi));if(l<0)return null;const c=o*this.direction.dot(ks.cross(pn));if(c<0||l+c>a)return null;const h=-o*pn.dot(Hs);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class tt{constructor(e,t,n,s,r,a,o,l,c,h,f,p,d,g,_,u){tt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,h,f,p,d,g,_,u)}set(e,t,n,s,r,a,o,l,c,h,f,p,d,g,_,u){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=h,m[10]=f,m[14]=p,m[3]=d,m[7]=g,m[11]=_,m[15]=u,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new tt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/Kn.setFromMatrixColumn(e,0).length(),r=1/Kn.setFromMatrixColumn(e,1).length(),a=1/Kn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){const p=a*h,d=a*f,g=o*h,_=o*f;t[0]=l*h,t[4]=-l*f,t[8]=c,t[1]=d+g*c,t[5]=p-_*c,t[9]=-o*l,t[2]=_-p*c,t[6]=g+d*c,t[10]=a*l}else if(e.order==="YXZ"){const p=l*h,d=l*f,g=c*h,_=c*f;t[0]=p+_*o,t[4]=g*o-d,t[8]=a*c,t[1]=a*f,t[5]=a*h,t[9]=-o,t[2]=d*o-g,t[6]=_+p*o,t[10]=a*l}else if(e.order==="ZXY"){const p=l*h,d=l*f,g=c*h,_=c*f;t[0]=p-_*o,t[4]=-a*f,t[8]=g+d*o,t[1]=d+g*o,t[5]=a*h,t[9]=_-p*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const p=a*h,d=a*f,g=o*h,_=o*f;t[0]=l*h,t[4]=g*c-d,t[8]=p*c+_,t[1]=l*f,t[5]=_*c+p,t[9]=d*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const p=a*l,d=a*c,g=o*l,_=o*c;t[0]=l*h,t[4]=_-p*f,t[8]=g*f+d,t[1]=f,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=d*f+g,t[10]=p-_*f}else if(e.order==="XZY"){const p=a*l,d=a*c,g=o*l,_=o*c;t[0]=l*h,t[4]=-f,t[8]=c*h,t[1]=p*f+_,t[5]=a*h,t[9]=d*f-g,t[2]=g*f-d,t[6]=o*h,t[10]=_*f+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Lc,e,Uc)}lookAt(e,t,n){const s=this.elements;return bt.subVectors(e,t),bt.lengthSq()===0&&(bt.z=1),bt.normalize(),mn.crossVectors(n,bt),mn.lengthSq()===0&&(Math.abs(n.z)===1?bt.x+=1e-4:bt.z+=1e-4,bt.normalize(),mn.crossVectors(n,bt)),mn.normalize(),Vi.crossVectors(bt,mn),s[0]=mn.x,s[4]=Vi.x,s[8]=bt.x,s[1]=mn.y,s[5]=Vi.y,s[9]=bt.y,s[2]=mn.z,s[6]=Vi.z,s[10]=bt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],f=n[5],p=n[9],d=n[13],g=n[2],_=n[6],u=n[10],m=n[14],T=n[3],y=n[7],E=n[11],L=n[15],w=s[0],b=s[4],U=s[8],Y=s[12],v=s[1],S=s[5],z=s[9],I=s[13],V=s[2],j=s[6],G=s[10],$=s[14],H=s[3],oe=s[7],le=s[11],ge=s[15];return r[0]=a*w+o*v+l*V+c*H,r[4]=a*b+o*S+l*j+c*oe,r[8]=a*U+o*z+l*G+c*le,r[12]=a*Y+o*I+l*$+c*ge,r[1]=h*w+f*v+p*V+d*H,r[5]=h*b+f*S+p*j+d*oe,r[9]=h*U+f*z+p*G+d*le,r[13]=h*Y+f*I+p*$+d*ge,r[2]=g*w+_*v+u*V+m*H,r[6]=g*b+_*S+u*j+m*oe,r[10]=g*U+_*z+u*G+m*le,r[14]=g*Y+_*I+u*$+m*ge,r[3]=T*w+y*v+E*V+L*H,r[7]=T*b+y*S+E*j+L*oe,r[11]=T*U+y*z+E*G+L*le,r[15]=T*Y+y*I+E*$+L*ge,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],f=e[6],p=e[10],d=e[14],g=e[3],_=e[7],u=e[11],m=e[15];return g*(+r*l*f-s*c*f-r*o*p+n*c*p+s*o*d-n*l*d)+_*(+t*l*d-t*c*p+r*a*p-s*a*d+s*c*h-r*l*h)+u*(+t*c*f-t*o*d-r*a*f+n*a*d+r*o*h-n*c*h)+m*(-s*o*h-t*l*f+t*o*p+s*a*f-n*a*p+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],f=e[9],p=e[10],d=e[11],g=e[12],_=e[13],u=e[14],m=e[15],T=f*u*c-_*p*c+_*l*d-o*u*d-f*l*m+o*p*m,y=g*p*c-h*u*c-g*l*d+a*u*d+h*l*m-a*p*m,E=h*_*c-g*f*c+g*o*d-a*_*d-h*o*m+a*f*m,L=g*f*l-h*_*l-g*o*p+a*_*p+h*o*u-a*f*u,w=t*T+n*y+s*E+r*L;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/w;return e[0]=T*b,e[1]=(_*p*r-f*u*r-_*s*d+n*u*d+f*s*m-n*p*m)*b,e[2]=(o*u*r-_*l*r+_*s*c-n*u*c-o*s*m+n*l*m)*b,e[3]=(f*l*r-o*p*r-f*s*c+n*p*c+o*s*d-n*l*d)*b,e[4]=y*b,e[5]=(h*u*r-g*p*r+g*s*d-t*u*d-h*s*m+t*p*m)*b,e[6]=(g*l*r-a*u*r-g*s*c+t*u*c+a*s*m-t*l*m)*b,e[7]=(a*p*r-h*l*r+h*s*c-t*p*c-a*s*d+t*l*d)*b,e[8]=E*b,e[9]=(g*f*r-h*_*r-g*n*d+t*_*d+h*n*m-t*f*m)*b,e[10]=(a*_*r-g*o*r+g*n*c-t*_*c-a*n*m+t*o*m)*b,e[11]=(h*o*r-a*f*r-h*n*c+t*f*c+a*n*d-t*o*d)*b,e[12]=L*b,e[13]=(h*_*s-g*f*s+g*n*p-t*_*p-h*n*u+t*f*u)*b,e[14]=(g*o*s-a*_*s-g*n*l+t*_*l+a*n*u-t*o*u)*b,e[15]=(a*f*s-h*o*s+h*n*l-t*f*l-a*n*p+t*o*p)*b,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,f=o+o,p=r*c,d=r*h,g=r*f,_=a*h,u=a*f,m=o*f,T=l*c,y=l*h,E=l*f,L=n.x,w=n.y,b=n.z;return s[0]=(1-(_+m))*L,s[1]=(d+E)*L,s[2]=(g-y)*L,s[3]=0,s[4]=(d-E)*w,s[5]=(1-(p+m))*w,s[6]=(u+T)*w,s[7]=0,s[8]=(g+y)*b,s[9]=(u-T)*b,s[10]=(1-(p+_))*b,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=Kn.set(s[0],s[1],s[2]).length();const a=Kn.set(s[4],s[5],s[6]).length(),o=Kn.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Ft.copy(this);const c=1/r,h=1/a,f=1/o;return Ft.elements[0]*=c,Ft.elements[1]*=c,Ft.elements[2]*=c,Ft.elements[4]*=h,Ft.elements[5]*=h,Ft.elements[6]*=h,Ft.elements[8]*=f,Ft.elements[9]*=f,Ft.elements[10]*=f,t.setFromRotationMatrix(Ft),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=ln){const l=this.elements,c=2*r/(t-e),h=2*r/(n-s),f=(t+e)/(t-e),p=(n+s)/(n-s);let d,g;if(o===ln)d=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===xs)d=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=h,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=ln){const l=this.elements,c=1/(t-e),h=1/(n-s),f=1/(a-r),p=(t+e)*c,d=(n+s)*h;let g,_;if(o===ln)g=(a+r)*f,_=-2*f;else if(o===xs)g=r*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-p,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Kn=new F,Ft=new tt,Lc=new F(0,0,0),Uc=new F(1,1,1),mn=new F,Vi=new F,bt=new F,Da=new tt,La=new Pi;class hn{constructor(e=0,t=0,n=0,s=hn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],f=s[2],p=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(gt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(p,c),this._z=0);break;case"YXZ":this._x=Math.asin(-gt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(gt(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-gt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(p,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(gt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-gt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(p,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Da.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Da,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return La.setFromEuler(this),this.setFromQuaternion(La,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}hn.DEFAULT_ORDER="XYZ";class ha{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Ic=0;const Ua=new F,jn=new Pi,Qt=new tt,Wi=new F,Ei=new F,Nc=new F,Fc=new Pi,Ia=new F(1,0,0),Na=new F(0,1,0),Fa=new F(0,0,1),Oa={type:"added"},Oc={type:"removed"},$n={type:"childadded",child:null},Gs={type:"childremoved",child:null};class yt extends vi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ic++}),this.uuid=_i(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=yt.DEFAULT_UP.clone();const e=new F,t=new hn,n=new Pi,s=new F(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new tt},normalMatrix:{value:new Pe}}),this.matrix=new tt,this.matrixWorld=new tt,this.matrixAutoUpdate=yt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ha,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return jn.setFromAxisAngle(e,t),this.quaternion.multiply(jn),this}rotateOnWorldAxis(e,t){return jn.setFromAxisAngle(e,t),this.quaternion.premultiply(jn),this}rotateX(e){return this.rotateOnAxis(Ia,e)}rotateY(e){return this.rotateOnAxis(Na,e)}rotateZ(e){return this.rotateOnAxis(Fa,e)}translateOnAxis(e,t){return Ua.copy(e).applyQuaternion(this.quaternion),this.position.add(Ua.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ia,e)}translateY(e){return this.translateOnAxis(Na,e)}translateZ(e){return this.translateOnAxis(Fa,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Qt.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Wi.copy(e):Wi.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Ei.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Qt.lookAt(Ei,Wi,this.up):Qt.lookAt(Wi,Ei,this.up),this.quaternion.setFromRotationMatrix(Qt),s&&(Qt.extractRotation(s.matrixWorld),jn.setFromRotationMatrix(Qt),this.quaternion.premultiply(jn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Oa),$n.child=e,this.dispatchEvent($n),$n.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Oc),Gs.child=e,this.dispatchEvent(Gs),Gs.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Qt.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Qt.multiply(e.parent.matrixWorld)),e.applyMatrix4(Qt),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Oa),$n.child=e,this.dispatchEvent($n),$n.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ei,e,Nc),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ei,Fc,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),f=a(e.shapes),p=a(e.skeletons),d=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),p.length>0&&(n.skeletons=p),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}yt.DEFAULT_UP=new F(0,1,0);yt.DEFAULT_MATRIX_AUTO_UPDATE=!0;yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ot=new F,en=new F,Vs=new F,tn=new F,Zn=new F,Jn=new F,Ba=new F,Ws=new F,qs=new F,Xs=new F,Ys=new we,Ks=new we,js=new we;class Ht{constructor(e=new F,t=new F,n=new F){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Ot.subVectors(e,t),s.cross(Ot);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Ot.subVectors(s,t),en.subVectors(n,t),Vs.subVectors(e,t);const a=Ot.dot(Ot),o=Ot.dot(en),l=Ot.dot(Vs),c=en.dot(en),h=en.dot(Vs),f=a*c-o*o;if(f===0)return r.set(0,0,0),null;const p=1/f,d=(c*l-o*h)*p,g=(a*h-o*l)*p;return r.set(1-d-g,g,d)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,tn)===null?!1:tn.x>=0&&tn.y>=0&&tn.x+tn.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,tn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,tn.x),l.addScaledVector(a,tn.y),l.addScaledVector(o,tn.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return Ys.setScalar(0),Ks.setScalar(0),js.setScalar(0),Ys.fromBufferAttribute(e,t),Ks.fromBufferAttribute(e,n),js.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Ys,r.x),a.addScaledVector(Ks,r.y),a.addScaledVector(js,r.z),a}static isFrontFacing(e,t,n,s){return Ot.subVectors(n,t),en.subVectors(e,t),Ot.cross(en).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ot.subVectors(this.c,this.b),en.subVectors(this.a,this.b),Ot.cross(en).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ht.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ht.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return Ht.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return Ht.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ht.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let a,o;Zn.subVectors(s,n),Jn.subVectors(r,n),Ws.subVectors(e,n);const l=Zn.dot(Ws),c=Jn.dot(Ws);if(l<=0&&c<=0)return t.copy(n);qs.subVectors(e,s);const h=Zn.dot(qs),f=Jn.dot(qs);if(h>=0&&f<=h)return t.copy(s);const p=l*f-h*c;if(p<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(Zn,a);Xs.subVectors(e,r);const d=Zn.dot(Xs),g=Jn.dot(Xs);if(g>=0&&d<=g)return t.copy(r);const _=d*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(Jn,o);const u=h*g-d*f;if(u<=0&&f-h>=0&&d-g>=0)return Ba.subVectors(r,s),o=(f-h)/(f-h+(d-g)),t.copy(s).addScaledVector(Ba,o);const m=1/(u+_+p);return a=_*m,o=p*m,t.copy(n).addScaledVector(Zn,a).addScaledVector(Jn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Xo={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},gn={h:0,s:0,l:0},qi={h:0,s:0,l:0};function $s(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Ye{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Vt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,We.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=We.workingColorSpace){return this.r=e,this.g=t,this.b=n,We.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=We.workingColorSpace){if(e=la(e,1),t=gt(t,0,1),n=gt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=$s(a,r,e+1/3),this.g=$s(a,r,e),this.b=$s(a,r,e-1/3)}return We.toWorkingColorSpace(this,s),this}setStyle(e,t=Vt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Vt){const n=Xo[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ci(e.r),this.g=ci(e.g),this.b=ci(e.b),this}copyLinearToSRGB(e){return this.r=Is(e.r),this.g=Is(e.g),this.b=Is(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Vt){return We.fromWorkingColorSpace(dt.copy(this),e),Math.round(gt(dt.r*255,0,255))*65536+Math.round(gt(dt.g*255,0,255))*256+Math.round(gt(dt.b*255,0,255))}getHexString(e=Vt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=We.workingColorSpace){We.fromWorkingColorSpace(dt.copy(this),t);const n=dt.r,s=dt.g,r=dt.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=h<=.5?f/(a+o):f/(2-a-o),a){case n:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-n)/f+2;break;case r:l=(n-s)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=We.workingColorSpace){return We.fromWorkingColorSpace(dt.copy(this),t),e.r=dt.r,e.g=dt.g,e.b=dt.b,e}getStyle(e=Vt){We.fromWorkingColorSpace(dt.copy(this),e);const t=dt.r,n=dt.g,s=dt.b;return e!==Vt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(gn),this.setHSL(gn.h+e,gn.s+t,gn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(gn),e.getHSL(qi);const n=wi(gn.h,qi.h,t),s=wi(gn.s,qi.s,t),r=wi(gn.l,qi.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const dt=new Ye;Ye.NAMES=Xo;let Bc=0;class Li extends vi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Bc++}),this.uuid=_i(),this.name="",this.type="Material",this.blending=oi,this.side=Tn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=cr,this.blendDst=hr,this.blendEquation=rn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ye(0,0,0),this.blendAlpha=0,this.depthFunc=ui,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ta,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Vn,this.stencilZFail=Vn,this.stencilZPass=Vn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==oi&&(n.blending=this.blending),this.side!==Tn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==cr&&(n.blendSrc=this.blendSrc),this.blendDst!==hr&&(n.blendDst=this.blendDst),this.blendEquation!==rn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ui&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ta&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Vn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Vn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Vn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Yo extends Li{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hn,this.combine=Po,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const st=new F,Xi=new Le;class rt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Aa,this.updateRanges=[],this.gpuType=Yt,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Xi.fromBufferAttribute(this,t),Xi.applyMatrix3(e),this.setXY(t,Xi.x,Xi.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)st.fromBufferAttribute(this,t),st.applyMatrix3(e),this.setXYZ(t,st.x,st.y,st.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)st.fromBufferAttribute(this,t),st.applyMatrix4(e),this.setXYZ(t,st.x,st.y,st.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)st.fromBufferAttribute(this,t),st.applyNormalMatrix(e),this.setXYZ(t,st.x,st.y,st.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)st.fromBufferAttribute(this,t),st.transformDirection(e),this.setXYZ(t,st.x,st.y,st.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=si(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=pt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=si(t,this.array)),t}setX(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=si(t,this.array)),t}setY(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=si(t,this.array)),t}setZ(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=si(t,this.array)),t}setW(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array),s=pt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array),s=pt(s,this.array),r=pt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Aa&&(e.usage=this.usage),e}}class Ko extends rt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class jo extends rt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Bn extends rt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let zc=0;const Pt=new tt,Zs=new yt,Qn=new F,wt=new Di,Ti=new Di,ct=new F;class jt extends vi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:zc++}),this.uuid=_i(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Vo(e)?jo:Ko)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Pe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Pt.makeRotationFromQuaternion(e),this.applyMatrix4(Pt),this}rotateX(e){return Pt.makeRotationX(e),this.applyMatrix4(Pt),this}rotateY(e){return Pt.makeRotationY(e),this.applyMatrix4(Pt),this}rotateZ(e){return Pt.makeRotationZ(e),this.applyMatrix4(Pt),this}translate(e,t,n){return Pt.makeTranslation(e,t,n),this.applyMatrix4(Pt),this}scale(e,t,n){return Pt.makeScale(e,t,n),this.applyMatrix4(Pt),this}lookAt(e){return Zs.lookAt(e),Zs.updateMatrix(),this.applyMatrix4(Zs.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Qn).negate(),this.translate(Qn.x,Qn.y,Qn.z),this}setFromPoints(e){const t=[];for(let n=0,s=e.length;n<s;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Bn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Di);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];wt.setFromBufferAttribute(r),this.morphTargetsRelative?(ct.addVectors(this.boundingBox.min,wt.min),this.boundingBox.expandByPoint(ct),ct.addVectors(this.boundingBox.max,wt.max),this.boundingBox.expandByPoint(ct)):(this.boundingBox.expandByPoint(wt.min),this.boundingBox.expandByPoint(wt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ts);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(e){const n=this.boundingSphere.center;if(wt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Ti.setFromBufferAttribute(o),this.morphTargetsRelative?(ct.addVectors(wt.min,Ti.min),wt.expandByPoint(ct),ct.addVectors(wt.max,Ti.max),wt.expandByPoint(ct)):(wt.expandByPoint(Ti.min),wt.expandByPoint(Ti.max))}wt.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)ct.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(ct));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)ct.fromBufferAttribute(o,c),l&&(Qn.fromBufferAttribute(e,c),ct.add(Qn)),s=Math.max(s,n.distanceToSquared(ct))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new rt(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let U=0;U<n.count;U++)o[U]=new F,l[U]=new F;const c=new F,h=new F,f=new F,p=new Le,d=new Le,g=new Le,_=new F,u=new F;function m(U,Y,v){c.fromBufferAttribute(n,U),h.fromBufferAttribute(n,Y),f.fromBufferAttribute(n,v),p.fromBufferAttribute(r,U),d.fromBufferAttribute(r,Y),g.fromBufferAttribute(r,v),h.sub(c),f.sub(c),d.sub(p),g.sub(p);const S=1/(d.x*g.y-g.x*d.y);isFinite(S)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(f,-d.y).multiplyScalar(S),u.copy(f).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(S),o[U].add(_),o[Y].add(_),o[v].add(_),l[U].add(u),l[Y].add(u),l[v].add(u))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let U=0,Y=T.length;U<Y;++U){const v=T[U],S=v.start,z=v.count;for(let I=S,V=S+z;I<V;I+=3)m(e.getX(I+0),e.getX(I+1),e.getX(I+2))}const y=new F,E=new F,L=new F,w=new F;function b(U){L.fromBufferAttribute(s,U),w.copy(L);const Y=o[U];y.copy(Y),y.sub(L.multiplyScalar(L.dot(Y))).normalize(),E.crossVectors(w,Y);const S=E.dot(l[U])<0?-1:1;a.setXYZW(U,y.x,y.y,y.z,S)}for(let U=0,Y=T.length;U<Y;++U){const v=T[U],S=v.start,z=v.count;for(let I=S,V=S+z;I<V;I+=3)b(e.getX(I+0)),b(e.getX(I+1)),b(e.getX(I+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new rt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let p=0,d=n.count;p<d;p++)n.setXYZ(p,0,0,0);const s=new F,r=new F,a=new F,o=new F,l=new F,c=new F,h=new F,f=new F;if(e)for(let p=0,d=e.count;p<d;p+=3){const g=e.getX(p+0),_=e.getX(p+1),u=e.getX(p+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,u),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,u),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(u,c.x,c.y,c.z)}else for(let p=0,d=t.count;p<d;p+=3)s.fromBufferAttribute(t,p+0),r.fromBufferAttribute(t,p+1),a.fromBufferAttribute(t,p+2),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),n.setXYZ(p+0,h.x,h.y,h.z),n.setXYZ(p+1,h.x,h.y,h.z),n.setXYZ(p+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)ct.fromBufferAttribute(e,t),ct.normalize(),e.setXYZ(t,ct.x,ct.y,ct.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,f=o.normalized,p=new c.constructor(l.length*h);let d=0,g=0;for(let _=0,u=l.length;_<u;_++){o.isInterleavedBufferAttribute?d=l[_]*o.data.stride+o.offset:d=l[_]*h;for(let m=0;m<h;m++)p[g++]=c[d++]}return new rt(p,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new jt,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=e(l,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,f=c.length;h<f;h++){const p=c[h],d=e(p,n);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let f=0,p=c.length;f<p;f++){const d=c[f];h.push(d.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],f=r[c];for(let p=0,d=f.length;p<d;p++)h.push(f[p].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const za=new tt,Pn=new ca,Yi=new Ts,ka=new F,Ki=new F,ji=new F,$i=new F,Js=new F,Zi=new F,Ha=new F,Ji=new F;class Ut extends yt{constructor(e=new jt,t=new Yo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){Zi.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],f=r[l];h!==0&&(Js.fromBufferAttribute(f,e),a?Zi.addScaledVector(Js,h):Zi.addScaledVector(Js.sub(t),h))}t.add(Zi)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Yi.copy(n.boundingSphere),Yi.applyMatrix4(r),Pn.copy(e.ray).recast(e.near),!(Yi.containsPoint(Pn.origin)===!1&&(Pn.intersectSphere(Yi,ka)===null||Pn.origin.distanceToSquared(ka)>(e.far-e.near)**2))&&(za.copy(r).invert(),Pn.copy(e.ray).applyMatrix4(za),!(n.boundingBox!==null&&Pn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Pn)))}_computeIntersections(e,t,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,p=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=p.length;g<_;g++){const u=p[g],m=a[u.materialIndex],T=Math.max(u.start,d.start),y=Math.min(o.count,Math.min(u.start+u.count,d.start+d.count));for(let E=T,L=y;E<L;E+=3){const w=o.getX(E),b=o.getX(E+1),U=o.getX(E+2);s=Qi(this,m,e,n,c,h,f,w,b,U),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=u.materialIndex,t.push(s))}}else{const g=Math.max(0,d.start),_=Math.min(o.count,d.start+d.count);for(let u=g,m=_;u<m;u+=3){const T=o.getX(u),y=o.getX(u+1),E=o.getX(u+2);s=Qi(this,a,e,n,c,h,f,T,y,E),s&&(s.faceIndex=Math.floor(u/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=p.length;g<_;g++){const u=p[g],m=a[u.materialIndex],T=Math.max(u.start,d.start),y=Math.min(l.count,Math.min(u.start+u.count,d.start+d.count));for(let E=T,L=y;E<L;E+=3){const w=E,b=E+1,U=E+2;s=Qi(this,m,e,n,c,h,f,w,b,U),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=u.materialIndex,t.push(s))}}else{const g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let u=g,m=_;u<m;u+=3){const T=u,y=u+1,E=u+2;s=Qi(this,a,e,n,c,h,f,T,y,E),s&&(s.faceIndex=Math.floor(u/3),t.push(s))}}}}function kc(i,e,t,n,s,r,a,o){let l;if(e.side===St?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===Tn,o),l===null)return null;Ji.copy(o),Ji.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Ji);return c<t.near||c>t.far?null:{distance:c,point:Ji.clone(),object:i}}function Qi(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,Ki),i.getVertexPosition(l,ji),i.getVertexPosition(c,$i);const h=kc(i,e,t,n,Ki,ji,$i,Ha);if(h){const f=new F;Ht.getBarycoord(Ha,Ki,ji,$i,f),s&&(h.uv=Ht.getInterpolatedAttribute(s,o,l,c,f,new Le)),r&&(h.uv1=Ht.getInterpolatedAttribute(r,o,l,c,f,new Le)),a&&(h.normal=Ht.getInterpolatedAttribute(a,o,l,c,f,new F),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const p={a:o,b:l,c,normal:new F,materialIndex:0};Ht.getNormal(Ki,ji,$i,p.normal),h.face=p,h.barycoord=f}return h}class Ui extends jt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],f=[];let p=0,d=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,s,a,2),g("x","z","y",1,-1,e,n,-t,s,a,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Bn(c,3)),this.setAttribute("normal",new Bn(h,3)),this.setAttribute("uv",new Bn(f,2));function g(_,u,m,T,y,E,L,w,b,U,Y){const v=E/b,S=L/U,z=E/2,I=L/2,V=w/2,j=b+1,G=U+1;let $=0,H=0;const oe=new F;for(let le=0;le<G;le++){const ge=le*S-I;for(let ke=0;ke<j;ke++){const qe=ke*v-z;oe[_]=qe*T,oe[u]=ge*y,oe[m]=V,c.push(oe.x,oe.y,oe.z),oe[_]=0,oe[u]=0,oe[m]=w>0?1:-1,h.push(oe.x,oe.y,oe.z),f.push(ke/b),f.push(1-le/U),$+=1}}for(let le=0;le<U;le++)for(let ge=0;ge<b;ge++){const ke=p+ge+j*le,qe=p+ge+j*(le+1),W=p+(ge+1)+j*(le+1),J=p+(ge+1)+j*le;l.push(ke,qe,J),l.push(qe,W,J),H+=6}o.addGroup(d,H,Y),d+=H,p+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ui(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function gi(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function mt(i){const e={};for(let t=0;t<i.length;t++){const n=gi(i[t]);for(const s in n)e[s]=n[s]}return e}function Hc(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function $o(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:We.workingColorSpace}const Gc={clone:gi,merge:mt};var Vc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Wc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Rt extends Li{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Vc,this.fragmentShader=Wc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=gi(e.uniforms),this.uniformsGroups=Hc(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Zo extends yt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new tt,this.projectionMatrix=new tt,this.projectionMatrixInverse=new tt,this.coordinateSystem=ln}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const vn=new F,Ga=new Le,Va=new Le;class Dt extends Zo{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ci*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(bi*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ci*2*Math.atan(Math.tan(bi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){vn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(vn.x,vn.y).multiplyScalar(-e/vn.z),vn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(vn.x,vn.y).multiplyScalar(-e/vn.z)}getViewSize(e,t){return this.getViewBounds(e,Ga,Va),t.subVectors(Va,Ga)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(bi*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ei=-90,ti=1;class qc extends yt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Dt(ei,ti,e,t);s.layers=this.layers,this.add(s);const r=new Dt(ei,ti,e,t);r.layers=this.layers,this.add(r);const a=new Dt(ei,ti,e,t);a.layers=this.layers,this.add(a);const o=new Dt(ei,ti,e,t);o.layers=this.layers,this.add(o);const l=new Dt(ei,ti,e,t);l.layers=this.layers,this.add(l);const c=new Dt(ei,ti,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===ln)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===xs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,f=e.getRenderTarget(),p=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(f,p,d),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Jo extends _t{constructor(e,t,n,s,r,a,o,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:di,super(e,t,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Xc extends at{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Jo(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Qe}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Ui(5,5,5),r=new Rt({name:"CubemapFromEquirect",uniforms:gi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:St,blending:Mn});r.uniforms.tEquirect.value=t;const a=new Ut(s,r),o=t.minFilter;return t.minFilter===On&&(t.minFilter=Qe),new qc(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,s){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}}const Qs=new F,Yc=new F,Kc=new Pe;class _n{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=Qs.subVectors(n,t).cross(Yc.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Qs),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Kc.getNormalMatrix(e),s=this.coplanarPoint(Qs).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Dn=new Ts,es=new F;class Qo{constructor(e=new _n,t=new _n,n=new _n,s=new _n,r=new _n,a=new _n){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ln){const n=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],f=s[6],p=s[7],d=s[8],g=s[9],_=s[10],u=s[11],m=s[12],T=s[13],y=s[14],E=s[15];if(n[0].setComponents(l-r,p-c,u-d,E-m).normalize(),n[1].setComponents(l+r,p+c,u+d,E+m).normalize(),n[2].setComponents(l+a,p+h,u+g,E+T).normalize(),n[3].setComponents(l-a,p-h,u-g,E-T).normalize(),n[4].setComponents(l-o,p-f,u-_,E-y).normalize(),t===ln)n[5].setComponents(l+o,p+f,u+_,E+y).normalize();else if(t===xs)n[5].setComponents(o,f,_,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Dn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Dn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Dn)}intersectsSprite(e){return Dn.center.set(0,0,0),Dn.radius=.7071067811865476,Dn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Dn)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(es.x=s.normal.x>0?e.max.x:e.min.x,es.y=s.normal.y>0?e.max.y:e.min.y,es.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(es)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function el(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function jc(i){const e=new WeakMap;function t(o,l){const c=o.array,h=o.usage,f=c.byteLength,p=i.createBuffer();i.bindBuffer(l,p),i.bufferData(l,c,h),o.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:p,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,l,c){const h=l.array,f=l.updateRanges;if(i.bindBuffer(c,o),f.length===0)i.bufferSubData(c,0,h);else{f.sort((d,g)=>d.start-g.start);let p=0;for(let d=1;d<f.length;d++){const g=f[p],_=f[d];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++p,f[p]=_)}f.length=p+1;for(let d=0,g=f.length;d<g;d++){const _=f[d];i.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}class kn extends jt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,f=e/o,p=t/l,d=[],g=[],_=[],u=[];for(let m=0;m<h;m++){const T=m*p-a;for(let y=0;y<c;y++){const E=y*f-r;g.push(E,-T,0),_.push(0,0,1),u.push(y/o),u.push(1-m/l)}}for(let m=0;m<l;m++)for(let T=0;T<o;T++){const y=T+c*m,E=T+c*(m+1),L=T+1+c*(m+1),w=T+1+c*m;d.push(y,E,w),d.push(E,L,w)}this.setIndex(d),this.setAttribute("position",new Bn(g,3)),this.setAttribute("normal",new Bn(_,3)),this.setAttribute("uv",new Bn(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new kn(e.width,e.height,e.widthSegments,e.heightSegments)}}var $c=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Zc=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Jc=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Qc=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,eh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,th=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,nh=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,ih=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,sh=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,rh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ah=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,oh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,lh=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,ch=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,hh=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,uh=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,dh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,fh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ph=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,mh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,gh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,vh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,_h=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,xh=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Mh=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Sh=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,yh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Eh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Th=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ah=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,bh="gl_FragColor = linearToOutputTexel( gl_FragColor );",wh=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Rh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Ch=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ph=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Dh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Lh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Uh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ih=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Nh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Fh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Oh=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Bh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,zh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,kh=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Hh=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Gh=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Vh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Wh=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,qh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Xh=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Yh=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Kh=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,jh=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,$h=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Zh=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Jh=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Qh=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,eu=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tu=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,nu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,iu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,su=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,ru=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,au=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ou=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,lu=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,cu=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,hu=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,uu=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,du=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,fu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,pu=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,mu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,_u=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,xu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Mu=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Su=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,yu=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Eu=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Tu=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Au=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,bu=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,wu=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ru=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Cu=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Pu=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Du=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Lu=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Uu=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Iu=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Nu=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Fu=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Ou=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Bu=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,zu=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ku=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Hu=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Gu=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Vu=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Wu=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,qu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Xu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Yu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Ku=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ju=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,$u=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ju=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ed=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,td=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,nd=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,id=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,sd=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,rd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ad=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,od=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ld=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,cd=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,hd=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ud=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,dd=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fd=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,pd=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,md=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,gd=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,vd=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_d=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xd=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Md=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sd=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yd=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ed=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Td=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ad=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bd=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,wd=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Rd=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,De={alphahash_fragment:$c,alphahash_pars_fragment:Zc,alphamap_fragment:Jc,alphamap_pars_fragment:Qc,alphatest_fragment:eh,alphatest_pars_fragment:th,aomap_fragment:nh,aomap_pars_fragment:ih,batching_pars_vertex:sh,batching_vertex:rh,begin_vertex:ah,beginnormal_vertex:oh,bsdfs:lh,iridescence_fragment:ch,bumpmap_pars_fragment:hh,clipping_planes_fragment:uh,clipping_planes_pars_fragment:dh,clipping_planes_pars_vertex:fh,clipping_planes_vertex:ph,color_fragment:mh,color_pars_fragment:gh,color_pars_vertex:vh,color_vertex:_h,common:xh,cube_uv_reflection_fragment:Mh,defaultnormal_vertex:Sh,displacementmap_pars_vertex:yh,displacementmap_vertex:Eh,emissivemap_fragment:Th,emissivemap_pars_fragment:Ah,colorspace_fragment:bh,colorspace_pars_fragment:wh,envmap_fragment:Rh,envmap_common_pars_fragment:Ch,envmap_pars_fragment:Ph,envmap_pars_vertex:Dh,envmap_physical_pars_fragment:Gh,envmap_vertex:Lh,fog_vertex:Uh,fog_pars_vertex:Ih,fog_fragment:Nh,fog_pars_fragment:Fh,gradientmap_pars_fragment:Oh,lightmap_pars_fragment:Bh,lights_lambert_fragment:zh,lights_lambert_pars_fragment:kh,lights_pars_begin:Hh,lights_toon_fragment:Vh,lights_toon_pars_fragment:Wh,lights_phong_fragment:qh,lights_phong_pars_fragment:Xh,lights_physical_fragment:Yh,lights_physical_pars_fragment:Kh,lights_fragment_begin:jh,lights_fragment_maps:$h,lights_fragment_end:Zh,logdepthbuf_fragment:Jh,logdepthbuf_pars_fragment:Qh,logdepthbuf_pars_vertex:eu,logdepthbuf_vertex:tu,map_fragment:nu,map_pars_fragment:iu,map_particle_fragment:su,map_particle_pars_fragment:ru,metalnessmap_fragment:au,metalnessmap_pars_fragment:ou,morphinstance_vertex:lu,morphcolor_vertex:cu,morphnormal_vertex:hu,morphtarget_pars_vertex:uu,morphtarget_vertex:du,normal_fragment_begin:fu,normal_fragment_maps:pu,normal_pars_fragment:mu,normal_pars_vertex:gu,normal_vertex:vu,normalmap_pars_fragment:_u,clearcoat_normal_fragment_begin:xu,clearcoat_normal_fragment_maps:Mu,clearcoat_pars_fragment:Su,iridescence_pars_fragment:yu,opaque_fragment:Eu,packing:Tu,premultiplied_alpha_fragment:Au,project_vertex:bu,dithering_fragment:wu,dithering_pars_fragment:Ru,roughnessmap_fragment:Cu,roughnessmap_pars_fragment:Pu,shadowmap_pars_fragment:Du,shadowmap_pars_vertex:Lu,shadowmap_vertex:Uu,shadowmask_pars_fragment:Iu,skinbase_vertex:Nu,skinning_pars_vertex:Fu,skinning_vertex:Ou,skinnormal_vertex:Bu,specularmap_fragment:zu,specularmap_pars_fragment:ku,tonemapping_fragment:Hu,tonemapping_pars_fragment:Gu,transmission_fragment:Vu,transmission_pars_fragment:Wu,uv_pars_fragment:qu,uv_pars_vertex:Xu,uv_vertex:Yu,worldpos_vertex:Ku,background_vert:ju,background_frag:$u,backgroundCube_vert:Zu,backgroundCube_frag:Ju,cube_vert:Qu,cube_frag:ed,depth_vert:td,depth_frag:nd,distanceRGBA_vert:id,distanceRGBA_frag:sd,equirect_vert:rd,equirect_frag:ad,linedashed_vert:od,linedashed_frag:ld,meshbasic_vert:cd,meshbasic_frag:hd,meshlambert_vert:ud,meshlambert_frag:dd,meshmatcap_vert:fd,meshmatcap_frag:pd,meshnormal_vert:md,meshnormal_frag:gd,meshphong_vert:vd,meshphong_frag:_d,meshphysical_vert:xd,meshphysical_frag:Md,meshtoon_vert:Sd,meshtoon_frag:yd,points_vert:Ed,points_frag:Td,shadow_vert:Ad,shadow_frag:bd,sprite_vert:wd,sprite_frag:Rd},te={common:{diffuse:{value:new Ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Pe},alphaMap:{value:null},alphaMapTransform:{value:new Pe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Pe}},envmap:{envMap:{value:null},envMapRotation:{value:new Pe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Pe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Pe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Pe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Pe},normalScale:{value:new Le(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Pe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Pe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Pe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Pe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Pe},alphaTest:{value:0},uvTransform:{value:new Pe}},sprite:{diffuse:{value:new Ye(16777215)},opacity:{value:1},center:{value:new Le(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Pe},alphaMap:{value:null},alphaMapTransform:{value:new Pe},alphaTest:{value:0}}},Wt={basic:{uniforms:mt([te.common,te.specularmap,te.envmap,te.aomap,te.lightmap,te.fog]),vertexShader:De.meshbasic_vert,fragmentShader:De.meshbasic_frag},lambert:{uniforms:mt([te.common,te.specularmap,te.envmap,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.fog,te.lights,{emissive:{value:new Ye(0)}}]),vertexShader:De.meshlambert_vert,fragmentShader:De.meshlambert_frag},phong:{uniforms:mt([te.common,te.specularmap,te.envmap,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.fog,te.lights,{emissive:{value:new Ye(0)},specular:{value:new Ye(1118481)},shininess:{value:30}}]),vertexShader:De.meshphong_vert,fragmentShader:De.meshphong_frag},standard:{uniforms:mt([te.common,te.envmap,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.roughnessmap,te.metalnessmap,te.fog,te.lights,{emissive:{value:new Ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:De.meshphysical_vert,fragmentShader:De.meshphysical_frag},toon:{uniforms:mt([te.common,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.gradientmap,te.fog,te.lights,{emissive:{value:new Ye(0)}}]),vertexShader:De.meshtoon_vert,fragmentShader:De.meshtoon_frag},matcap:{uniforms:mt([te.common,te.bumpmap,te.normalmap,te.displacementmap,te.fog,{matcap:{value:null}}]),vertexShader:De.meshmatcap_vert,fragmentShader:De.meshmatcap_frag},points:{uniforms:mt([te.points,te.fog]),vertexShader:De.points_vert,fragmentShader:De.points_frag},dashed:{uniforms:mt([te.common,te.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:De.linedashed_vert,fragmentShader:De.linedashed_frag},depth:{uniforms:mt([te.common,te.displacementmap]),vertexShader:De.depth_vert,fragmentShader:De.depth_frag},normal:{uniforms:mt([te.common,te.bumpmap,te.normalmap,te.displacementmap,{opacity:{value:1}}]),vertexShader:De.meshnormal_vert,fragmentShader:De.meshnormal_frag},sprite:{uniforms:mt([te.sprite,te.fog]),vertexShader:De.sprite_vert,fragmentShader:De.sprite_frag},background:{uniforms:{uvTransform:{value:new Pe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:De.background_vert,fragmentShader:De.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Pe}},vertexShader:De.backgroundCube_vert,fragmentShader:De.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:De.cube_vert,fragmentShader:De.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:De.equirect_vert,fragmentShader:De.equirect_frag},distanceRGBA:{uniforms:mt([te.common,te.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:De.distanceRGBA_vert,fragmentShader:De.distanceRGBA_frag},shadow:{uniforms:mt([te.lights,te.fog,{color:{value:new Ye(0)},opacity:{value:1}}]),vertexShader:De.shadow_vert,fragmentShader:De.shadow_frag}};Wt.physical={uniforms:mt([Wt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Pe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Pe},clearcoatNormalScale:{value:new Le(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Pe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Pe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Pe},sheen:{value:0},sheenColor:{value:new Ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Pe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Pe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Pe},transmissionSamplerSize:{value:new Le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Pe},attenuationDistance:{value:0},attenuationColor:{value:new Ye(0)},specularColor:{value:new Ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Pe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Pe},anisotropyVector:{value:new Le},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Pe}}]),vertexShader:De.meshphysical_vert,fragmentShader:De.meshphysical_frag};const ts={r:0,b:0,g:0},Ln=new hn,Cd=new tt;function Pd(i,e,t,n,s,r,a){const o=new Ye(0);let l=r===!0?0:1,c,h,f=null,p=0,d=null;function g(T){let y=T.isScene===!0?T.background:null;return y&&y.isTexture&&(y=(T.backgroundBlurriness>0?t:e).get(y)),y}function _(T){let y=!1;const E=g(T);E===null?m(o,l):E&&E.isColor&&(m(E,1),y=!0);const L=i.xr.getEnvironmentBlendMode();L==="additive"?n.buffers.color.setClear(0,0,0,1,a):L==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function u(T,y){const E=g(y);E&&(E.isCubeTexture||E.mapping===ys)?(h===void 0&&(h=new Ut(new Ui(1,1,1),new Rt({name:"BackgroundCubeMaterial",uniforms:gi(Wt.backgroundCube.uniforms),vertexShader:Wt.backgroundCube.vertexShader,fragmentShader:Wt.backgroundCube.fragmentShader,side:St,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(L,w,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Ln.copy(y.backgroundRotation),Ln.x*=-1,Ln.y*=-1,Ln.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Ln.y*=-1,Ln.z*=-1),h.material.uniforms.envMap.value=E,h.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Cd.makeRotationFromEuler(Ln)),h.material.toneMapped=We.getTransfer(E.colorSpace)!==Je,(f!==E||p!==E.version||d!==i.toneMapping)&&(h.material.needsUpdate=!0,f=E,p=E.version,d=i.toneMapping),h.layers.enableAll(),T.unshift(h,h.geometry,h.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new Ut(new kn(2,2),new Rt({name:"BackgroundMaterial",uniforms:gi(Wt.background.uniforms),vertexShader:Wt.background.vertexShader,fragmentShader:Wt.background.fragmentShader,side:Tn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=We.getTransfer(E.colorSpace)!==Je,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(f!==E||p!==E.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,f=E,p=E.version,d=i.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null))}function m(T,y){T.getRGB(ts,$o(i)),n.buffers.color.setClear(ts.r,ts.g,ts.b,y,a)}return{getClearColor:function(){return o},setClearColor:function(T,y=1){o.set(T),l=y,m(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(T){l=T,m(o,l)},render:_,addToRenderList:u}}function Dd(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=p(null);let r=s,a=!1;function o(v,S,z,I,V){let j=!1;const G=f(I,z,S);r!==G&&(r=G,c(r.object)),j=d(v,I,z,V),j&&g(v,I,z,V),V!==null&&e.update(V,i.ELEMENT_ARRAY_BUFFER),(j||a)&&(a=!1,E(v,S,z,I),V!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function l(){return i.createVertexArray()}function c(v){return i.bindVertexArray(v)}function h(v){return i.deleteVertexArray(v)}function f(v,S,z){const I=z.wireframe===!0;let V=n[v.id];V===void 0&&(V={},n[v.id]=V);let j=V[S.id];j===void 0&&(j={},V[S.id]=j);let G=j[I];return G===void 0&&(G=p(l()),j[I]=G),G}function p(v){const S=[],z=[],I=[];for(let V=0;V<t;V++)S[V]=0,z[V]=0,I[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:S,enabledAttributes:z,attributeDivisors:I,object:v,attributes:{},index:null}}function d(v,S,z,I){const V=r.attributes,j=S.attributes;let G=0;const $=z.getAttributes();for(const H in $)if($[H].location>=0){const le=V[H];let ge=j[H];if(ge===void 0&&(H==="instanceMatrix"&&v.instanceMatrix&&(ge=v.instanceMatrix),H==="instanceColor"&&v.instanceColor&&(ge=v.instanceColor)),le===void 0||le.attribute!==ge||ge&&le.data!==ge.data)return!0;G++}return r.attributesNum!==G||r.index!==I}function g(v,S,z,I){const V={},j=S.attributes;let G=0;const $=z.getAttributes();for(const H in $)if($[H].location>=0){let le=j[H];le===void 0&&(H==="instanceMatrix"&&v.instanceMatrix&&(le=v.instanceMatrix),H==="instanceColor"&&v.instanceColor&&(le=v.instanceColor));const ge={};ge.attribute=le,le&&le.data&&(ge.data=le.data),V[H]=ge,G++}r.attributes=V,r.attributesNum=G,r.index=I}function _(){const v=r.newAttributes;for(let S=0,z=v.length;S<z;S++)v[S]=0}function u(v){m(v,0)}function m(v,S){const z=r.newAttributes,I=r.enabledAttributes,V=r.attributeDivisors;z[v]=1,I[v]===0&&(i.enableVertexAttribArray(v),I[v]=1),V[v]!==S&&(i.vertexAttribDivisor(v,S),V[v]=S)}function T(){const v=r.newAttributes,S=r.enabledAttributes;for(let z=0,I=S.length;z<I;z++)S[z]!==v[z]&&(i.disableVertexAttribArray(z),S[z]=0)}function y(v,S,z,I,V,j,G){G===!0?i.vertexAttribIPointer(v,S,z,V,j):i.vertexAttribPointer(v,S,z,I,V,j)}function E(v,S,z,I){_();const V=I.attributes,j=z.getAttributes(),G=S.defaultAttributeValues;for(const $ in j){const H=j[$];if(H.location>=0){let oe=V[$];if(oe===void 0&&($==="instanceMatrix"&&v.instanceMatrix&&(oe=v.instanceMatrix),$==="instanceColor"&&v.instanceColor&&(oe=v.instanceColor)),oe!==void 0){const le=oe.normalized,ge=oe.itemSize,ke=e.get(oe);if(ke===void 0)continue;const qe=ke.buffer,W=ke.type,J=ke.bytesPerElement,pe=W===i.INT||W===i.UNSIGNED_INT||oe.gpuType===ta;if(oe.isInterleavedBufferAttribute){const ce=oe.data,Re=ce.stride,Se=oe.offset;if(ce.isInstancedInterleavedBuffer){for(let Ne=0;Ne<H.locationSize;Ne++)m(H.location+Ne,ce.meshPerAttribute);v.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let Ne=0;Ne<H.locationSize;Ne++)u(H.location+Ne);i.bindBuffer(i.ARRAY_BUFFER,qe);for(let Ne=0;Ne<H.locationSize;Ne++)y(H.location+Ne,ge/H.locationSize,W,le,Re*J,(Se+ge/H.locationSize*Ne)*J,pe)}else{if(oe.isInstancedBufferAttribute){for(let ce=0;ce<H.locationSize;ce++)m(H.location+ce,oe.meshPerAttribute);v.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let ce=0;ce<H.locationSize;ce++)u(H.location+ce);i.bindBuffer(i.ARRAY_BUFFER,qe);for(let ce=0;ce<H.locationSize;ce++)y(H.location+ce,ge/H.locationSize,W,le,ge*J,ge/H.locationSize*ce*J,pe)}}else if(G!==void 0){const le=G[$];if(le!==void 0)switch(le.length){case 2:i.vertexAttrib2fv(H.location,le);break;case 3:i.vertexAttrib3fv(H.location,le);break;case 4:i.vertexAttrib4fv(H.location,le);break;default:i.vertexAttrib1fv(H.location,le)}}}}T()}function L(){U();for(const v in n){const S=n[v];for(const z in S){const I=S[z];for(const V in I)h(I[V].object),delete I[V];delete S[z]}delete n[v]}}function w(v){if(n[v.id]===void 0)return;const S=n[v.id];for(const z in S){const I=S[z];for(const V in I)h(I[V].object),delete I[V];delete S[z]}delete n[v.id]}function b(v){for(const S in n){const z=n[S];if(z[v.id]===void 0)continue;const I=z[v.id];for(const V in I)h(I[V].object),delete I[V];delete z[v.id]}}function U(){Y(),a=!0,r!==s&&(r=s,c(r.object))}function Y(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:U,resetDefaultState:Y,dispose:L,releaseStatesOfGeometry:w,releaseStatesOfProgram:b,initAttributes:_,enableAttribute:u,disableUnusedAttributes:T}}function Ld(i,e,t){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),t.update(h,n,1)}function a(c,h,f){f!==0&&(i.drawArraysInstanced(n,c,h,f),t.update(h,n,f))}function o(c,h,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,f);let d=0;for(let g=0;g<f;g++)d+=h[g];t.update(d,n,1)}function l(c,h,f,p){if(f===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)a(c[g],h[g],p[g]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,h,0,p,0,f);let g=0;for(let _=0;_<f;_++)g+=h[_];for(let _=0;_<p.length;_++)t.update(g,n,p[_])}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Ud(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(b){return!(b!==Lt&&n.convert(b)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(b){const U=b===Hn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(b!==Gt&&n.convert(b)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==Yt&&!U)}function l(b){if(b==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const f=t.logarithmicDepthBuffer===!0,p=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(p===!0){const b=e.get("EXT_clip_control");b.clipControlEXT(b.LOWER_LEFT_EXT,b.ZERO_TO_ONE_EXT)}const d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),u=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),T=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),E=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),L=g>0,w=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:p,maxTextures:d,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:u,maxAttributes:m,maxVertexUniforms:T,maxVaryings:y,maxFragmentUniforms:E,vertexTextures:L,maxSamples:w}}function Id(i){const e=this;let t=null,n=0,s=!1,r=!1;const a=new _n,o=new Pe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,p){const d=f.length!==0||p||n!==0||s;return s=p,n=f.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,p){t=h(f,p,0)},this.setState=function(f,p,d){const g=f.clippingPlanes,_=f.clipIntersection,u=f.clipShadows,m=i.get(f);if(!s||g===null||g.length===0||r&&!u)r?h(null):c();else{const T=r?0:n,y=T*4;let E=m.clippingState||null;l.value=E,E=h(g,p,y,d);for(let L=0;L!==y;++L)E[L]=t[L];m.clippingState=E,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(f,p,d,g){const _=f!==null?f.length:0;let u=null;if(_!==0){if(u=l.value,g!==!0||u===null){const m=d+_*4,T=p.matrixWorldInverse;o.getNormalMatrix(T),(u===null||u.length<m)&&(u=new Float32Array(m));for(let y=0,E=d;y!==_;++y,E+=4)a.copy(f[y]).applyMatrix4(T,o),a.normal.toArray(u,E),u[E+3]=a.constant}l.value=u,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,u}}function Nd(i){let e=new WeakMap;function t(a,o){return o===_r?a.mapping=di:o===xr&&(a.mapping=fi),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===_r||o===xr)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Xc(l.height);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class As extends Zo{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ri=4,Wa=[.125,.215,.35,.446,.526,.582],Nn=20,er=new As,qa=new Ye;let tr=null,nr=0,ir=0,sr=!1;const In=(1+Math.sqrt(5))/2,ni=1/In,Xa=[new F(-In,ni,0),new F(In,ni,0),new F(-ni,0,In),new F(ni,0,In),new F(0,In,-ni),new F(0,In,ni),new F(-1,1,-1),new F(1,1,-1),new F(-1,1,1),new F(1,1,1)];class Ya{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){tr=this._renderer.getRenderTarget(),nr=this._renderer.getActiveCubeFace(),ir=this._renderer.getActiveMipmapLevel(),sr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=$a(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ja(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(tr,nr,ir),this._renderer.xr.enabled=sr,e.scissorTest=!1,ns(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===di||e.mapping===fi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),tr=this._renderer.getRenderTarget(),nr=this._renderer.getActiveCubeFace(),ir=this._renderer.getActiveMipmapLevel(),sr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Qe,minFilter:Qe,generateMipmaps:!1,type:Hn,format:Lt,colorSpace:An,depthBuffer:!1},s=Ka(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ka(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Fd(r)),this._blurMaterial=Od(r,e,t)}return s}_compileMaterial(e){const t=new Ut(this._lodPlanes[0],e);this._renderer.compile(t,er)}_sceneToCubeUV(e,t,n,s){const o=new Dt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,p=h.toneMapping;h.getClearColor(qa),h.toneMapping=Sn,h.autoClear=!1;const d=new Yo({name:"PMREM.Background",side:St,depthWrite:!1,depthTest:!1}),g=new Ut(new Ui,d);let _=!1;const u=e.background;u?u.isColor&&(d.color.copy(u),e.background=null,_=!0):(d.color.copy(qa),_=!0);for(let m=0;m<6;m++){const T=m%3;T===0?(o.up.set(0,l[m],0),o.lookAt(c[m],0,0)):T===1?(o.up.set(0,0,l[m]),o.lookAt(0,c[m],0)):(o.up.set(0,l[m],0),o.lookAt(0,0,c[m]));const y=this._cubeSize;ns(s,T*y,m>2?y:0,y,y),h.setRenderTarget(s),_&&h.render(g,o),h.render(e,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=p,h.autoClear=f,e.background=u}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===di||e.mapping===fi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=$a()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ja());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new Ut(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;ns(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,er)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Xa[(s-r-1)%Xa.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,f=new Ut(this._lodPlanes[s],c),p=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Nn-1),_=r/g,u=isFinite(r)?1+Math.floor(h*_):Nn;u>Nn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${u} samples when the maximum is set to ${Nn}`);const m=[];let T=0;for(let b=0;b<Nn;++b){const U=b/_,Y=Math.exp(-U*U/2);m.push(Y),b===0?T+=Y:b<u&&(T+=2*Y)}for(let b=0;b<m.length;b++)m[b]=m[b]/T;p.envMap.value=e.texture,p.samples.value=u,p.weights.value=m,p.latitudinal.value=a==="latitudinal",o&&(p.poleAxis.value=o);const{_lodMax:y}=this;p.dTheta.value=g,p.mipInt.value=y-n;const E=this._sizeLods[s],L=3*E*(s>y-ri?s-y+ri:0),w=4*(this._cubeSize-E);ns(t,L,w,3*E,2*E),l.setRenderTarget(t),l.render(f,er)}}function Fd(i){const e=[],t=[],n=[];let s=i;const r=i-ri+1+Wa.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);t.push(o);let l=1/o;a>i-ri?l=Wa[a-i+ri-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,f=1+c,p=[h,h,f,h,f,f,h,h,f,f,h,f],d=6,g=6,_=3,u=2,m=1,T=new Float32Array(_*g*d),y=new Float32Array(u*g*d),E=new Float32Array(m*g*d);for(let w=0;w<d;w++){const b=w%3*2/3-1,U=w>2?0:-1,Y=[b,U,0,b+2/3,U,0,b+2/3,U+1,0,b,U,0,b+2/3,U+1,0,b,U+1,0];T.set(Y,_*g*w),y.set(p,u*g*w);const v=[w,w,w,w,w,w];E.set(v,m*g*w)}const L=new jt;L.setAttribute("position",new rt(T,_)),L.setAttribute("uv",new rt(y,u)),L.setAttribute("faceIndex",new rt(E,m)),e.push(L),s>ri&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Ka(i,e,t){const n=new at(i,e,t);return n.texture.mapping=ys,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ns(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Od(i,e,t){const n=new Float32Array(Nn),s=new F(0,1,0);return new Rt({name:"SphericalGaussianBlur",defines:{n:Nn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:ua(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Mn,depthTest:!1,depthWrite:!1})}function ja(){return new Rt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ua(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Mn,depthTest:!1,depthWrite:!1})}function $a(){return new Rt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ua(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Mn,depthTest:!1,depthWrite:!1})}function ua(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Bd(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===_r||l===xr,h=l===di||l===fi;if(c||h){let f=e.get(o);const p=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==p)return t===null&&(t=new Ya(i)),f=c?t.fromEquirectangular(o,f):t.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),f.texture;if(f!==void 0)return f.texture;{const d=o.image;return c&&d&&d.height>0||h&&d&&s(d)?(t===null&&(t=new Ya(i)),f=c?t.fromEquirectangular(o):t.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),o.addEventListener("dispose",r),f.texture):null}}}return o}function s(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function zd(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&fs("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function kd(i,e,t,n){const s={},r=new WeakMap;function a(f){const p=f.target;p.index!==null&&e.remove(p.index);for(const g in p.attributes)e.remove(p.attributes[g]);for(const g in p.morphAttributes){const _=p.morphAttributes[g];for(let u=0,m=_.length;u<m;u++)e.remove(_[u])}p.removeEventListener("dispose",a),delete s[p.id];const d=r.get(p);d&&(e.remove(d),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function o(f,p){return s[p.id]===!0||(p.addEventListener("dispose",a),s[p.id]=!0,t.memory.geometries++),p}function l(f){const p=f.attributes;for(const g in p)e.update(p[g],i.ARRAY_BUFFER);const d=f.morphAttributes;for(const g in d){const _=d[g];for(let u=0,m=_.length;u<m;u++)e.update(_[u],i.ARRAY_BUFFER)}}function c(f){const p=[],d=f.index,g=f.attributes.position;let _=0;if(d!==null){const T=d.array;_=d.version;for(let y=0,E=T.length;y<E;y+=3){const L=T[y+0],w=T[y+1],b=T[y+2];p.push(L,w,w,b,b,L)}}else if(g!==void 0){const T=g.array;_=g.version;for(let y=0,E=T.length/3-1;y<E;y+=3){const L=y+0,w=y+1,b=y+2;p.push(L,w,w,b,b,L)}}else return;const u=new(Vo(p)?jo:Ko)(p,1);u.version=_;const m=r.get(f);m&&e.remove(m),r.set(f,u)}function h(f){const p=r.get(f);if(p){const d=f.index;d!==null&&p.version<d.version&&c(f)}else c(f);return r.get(f)}return{get:o,update:l,getWireframeAttribute:h}}function Hd(i,e,t){let n;function s(p){n=p}let r,a;function o(p){r=p.type,a=p.bytesPerElement}function l(p,d){i.drawElements(n,d,r,p*a),t.update(d,n,1)}function c(p,d,g){g!==0&&(i.drawElementsInstanced(n,d,r,p*a,g),t.update(d,n,g))}function h(p,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,p,0,g);let u=0;for(let m=0;m<g;m++)u+=d[m];t.update(u,n,1)}function f(p,d,g,_){if(g===0)return;const u=e.get("WEBGL_multi_draw");if(u===null)for(let m=0;m<p.length;m++)c(p[m]/a,d[m],_[m]);else{u.multiDrawElementsInstancedWEBGL(n,d,0,r,p,0,_,0,g);let m=0;for(let T=0;T<g;T++)m+=d[T];for(let T=0;T<_.length;T++)t.update(m,n,_[T])}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=f}function Gd(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Vd(i,e,t){const n=new WeakMap,s=new we;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0;let p=n.get(o);if(p===void 0||p.count!==f){let v=function(){U.dispose(),n.delete(o),o.removeEventListener("dispose",v)};var d=v;p!==void 0&&p.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,u=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],T=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let E=0;g===!0&&(E=1),_===!0&&(E=2),u===!0&&(E=3);let L=o.attributes.position.count*E,w=1;L>e.maxTextureSize&&(w=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);const b=new Float32Array(L*w*4*f),U=new qo(b,L,w,f);U.type=Yt,U.needsUpdate=!0;const Y=E*4;for(let S=0;S<f;S++){const z=m[S],I=T[S],V=y[S],j=L*w*4*S;for(let G=0;G<z.count;G++){const $=G*Y;g===!0&&(s.fromBufferAttribute(z,G),b[j+$+0]=s.x,b[j+$+1]=s.y,b[j+$+2]=s.z,b[j+$+3]=0),_===!0&&(s.fromBufferAttribute(I,G),b[j+$+4]=s.x,b[j+$+5]=s.y,b[j+$+6]=s.z,b[j+$+7]=0),u===!0&&(s.fromBufferAttribute(V,G),b[j+$+8]=s.x,b[j+$+9]=s.y,b[j+$+10]=s.z,b[j+$+11]=V.itemSize===4?s.w:1)}}p={count:f,texture:U,size:new Le(L,w)},n.set(o,p),o.addEventListener("dispose",v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let g=0;for(let u=0;u<c.length;u++)g+=c[u];const _=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",p.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}return{update:r}}function Wd(i,e,t,n){let s=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,f=e.get(l,h);if(s.get(f)!==c&&(e.update(f),s.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const p=l.skeleton;s.get(p)!==c&&(p.update(),s.set(p,c))}return f}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}class tl extends _t{constructor(e,t,n,s,r,a,o,l,c,h=li){if(h!==li&&h!==mi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===li&&(n=zn),n===void 0&&h===mi&&(n=pi),super(null,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:ft,this.minFilter=l!==void 0?l:ft,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const nl=new _t,Za=new tl(1,1),il=new qo,sl=new Pc,rl=new Jo,Ja=[],Qa=[],eo=new Float32Array(16),to=new Float32Array(9),no=new Float32Array(4);function xi(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=Ja[s];if(r===void 0&&(r=new Float32Array(s),Ja[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function ot(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function lt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function bs(i,e){let t=Qa[e];t===void 0&&(t=new Int32Array(e),Qa[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function qd(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Xd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ot(t,e))return;i.uniform2fv(this.addr,e),lt(t,e)}}function Yd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ot(t,e))return;i.uniform3fv(this.addr,e),lt(t,e)}}function Kd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ot(t,e))return;i.uniform4fv(this.addr,e),lt(t,e)}}function jd(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ot(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),lt(t,e)}else{if(ot(t,n))return;no.set(n),i.uniformMatrix2fv(this.addr,!1,no),lt(t,n)}}function $d(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ot(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),lt(t,e)}else{if(ot(t,n))return;to.set(n),i.uniformMatrix3fv(this.addr,!1,to),lt(t,n)}}function Zd(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ot(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),lt(t,e)}else{if(ot(t,n))return;eo.set(n),i.uniformMatrix4fv(this.addr,!1,eo),lt(t,n)}}function Jd(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Qd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ot(t,e))return;i.uniform2iv(this.addr,e),lt(t,e)}}function ef(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ot(t,e))return;i.uniform3iv(this.addr,e),lt(t,e)}}function tf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ot(t,e))return;i.uniform4iv(this.addr,e),lt(t,e)}}function nf(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function sf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ot(t,e))return;i.uniform2uiv(this.addr,e),lt(t,e)}}function rf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ot(t,e))return;i.uniform3uiv(this.addr,e),lt(t,e)}}function af(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ot(t,e))return;i.uniform4uiv(this.addr,e),lt(t,e)}}function of(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Za.compareFunction=Go,r=Za):r=nl,t.setTexture2D(e||r,s)}function lf(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||sl,s)}function cf(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||rl,s)}function hf(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||il,s)}function uf(i){switch(i){case 5126:return qd;case 35664:return Xd;case 35665:return Yd;case 35666:return Kd;case 35674:return jd;case 35675:return $d;case 35676:return Zd;case 5124:case 35670:return Jd;case 35667:case 35671:return Qd;case 35668:case 35672:return ef;case 35669:case 35673:return tf;case 5125:return nf;case 36294:return sf;case 36295:return rf;case 36296:return af;case 35678:case 36198:case 36298:case 36306:case 35682:return of;case 35679:case 36299:case 36307:return lf;case 35680:case 36300:case 36308:case 36293:return cf;case 36289:case 36303:case 36311:case 36292:return hf}}function df(i,e){i.uniform1fv(this.addr,e)}function ff(i,e){const t=xi(e,this.size,2);i.uniform2fv(this.addr,t)}function pf(i,e){const t=xi(e,this.size,3);i.uniform3fv(this.addr,t)}function mf(i,e){const t=xi(e,this.size,4);i.uniform4fv(this.addr,t)}function gf(i,e){const t=xi(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function vf(i,e){const t=xi(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function _f(i,e){const t=xi(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function xf(i,e){i.uniform1iv(this.addr,e)}function Mf(i,e){i.uniform2iv(this.addr,e)}function Sf(i,e){i.uniform3iv(this.addr,e)}function yf(i,e){i.uniform4iv(this.addr,e)}function Ef(i,e){i.uniform1uiv(this.addr,e)}function Tf(i,e){i.uniform2uiv(this.addr,e)}function Af(i,e){i.uniform3uiv(this.addr,e)}function bf(i,e){i.uniform4uiv(this.addr,e)}function wf(i,e,t){const n=this.cache,s=e.length,r=bs(t,s);ot(n,r)||(i.uniform1iv(this.addr,r),lt(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||nl,r[a])}function Rf(i,e,t){const n=this.cache,s=e.length,r=bs(t,s);ot(n,r)||(i.uniform1iv(this.addr,r),lt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||sl,r[a])}function Cf(i,e,t){const n=this.cache,s=e.length,r=bs(t,s);ot(n,r)||(i.uniform1iv(this.addr,r),lt(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||rl,r[a])}function Pf(i,e,t){const n=this.cache,s=e.length,r=bs(t,s);ot(n,r)||(i.uniform1iv(this.addr,r),lt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||il,r[a])}function Df(i){switch(i){case 5126:return df;case 35664:return ff;case 35665:return pf;case 35666:return mf;case 35674:return gf;case 35675:return vf;case 35676:return _f;case 5124:case 35670:return xf;case 35667:case 35671:return Mf;case 35668:case 35672:return Sf;case 35669:case 35673:return yf;case 5125:return Ef;case 36294:return Tf;case 36295:return Af;case 36296:return bf;case 35678:case 36198:case 36298:case 36306:case 35682:return wf;case 35679:case 36299:case 36307:return Rf;case 35680:case 36300:case 36308:case 36293:return Cf;case 36289:case 36303:case 36311:case 36292:return Pf}}class Lf{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=uf(t.type)}}class Uf{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Df(t.type)}}class If{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],n)}}}const rr=/(\w+)(\])?(\[|\.)?/g;function io(i,e){i.seq.push(e),i.map[e.id]=e}function Nf(i,e,t){const n=i.name,s=n.length;for(rr.lastIndex=0;;){const r=rr.exec(n),a=rr.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){io(t,c===void 0?new Lf(o,i,e):new Uf(o,i,e));break}else{let f=t.map[o];f===void 0&&(f=new If(o),io(t,f)),t=f}}}class ps{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);Nf(r,a,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&n.push(a)}return n}}function so(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Ff=37297;let Of=0;function Bf(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function zf(i){const e=We.getPrimaries(We.workingColorSpace),t=We.getPrimaries(i);let n;switch(e===t?n="":e===vs&&t===gs?n="LinearDisplayP3ToLinearSRGB":e===gs&&t===vs&&(n="LinearSRGBToLinearDisplayP3"),i){case An:case Es:return[n,"LinearTransferOETF"];case Vt:case oa:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function ro(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+Bf(i.getShaderSource(e),a)}else return s}function kf(i,e){const t=zf(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Hf(i,e){let t;switch(e){case kl:t="Linear";break;case Hl:t="Reinhard";break;case Gl:t="Cineon";break;case Vl:t="ACESFilmic";break;case ql:t="AgX";break;case Xl:t="Neutral";break;case Wl:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const is=new F;function Gf(){We.getLuminanceCoefficients(is);const i=is.x.toFixed(4),e=is.y.toFixed(4),t=is.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Vf(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ai).join(`
`)}function Wf(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function qf(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Ai(i){return i!==""}function ao(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function oo(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Xf=/^[ \t]*#include +<([\w\d./]+)>/gm;function Kr(i){return i.replace(Xf,Kf)}const Yf=new Map;function Kf(i,e){let t=De[e];if(t===void 0){const n=Yf.get(e);if(n!==void 0)t=De[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Kr(t)}const jf=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function lo(i){return i.replace(jf,$f)}function $f(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function co(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Zf(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Co?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Sl?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===sn&&(e="SHADOWMAP_TYPE_VSM"),e}function Jf(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case di:case fi:e="ENVMAP_TYPE_CUBE";break;case ys:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Qf(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case fi:e="ENVMAP_MODE_REFRACTION";break}return e}function ep(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Po:e="ENVMAP_BLENDING_MULTIPLY";break;case Bl:e="ENVMAP_BLENDING_MIX";break;case zl:e="ENVMAP_BLENDING_ADD";break}return e}function tp(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function np(i,e,t,n){const s=i.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=Zf(t),c=Jf(t),h=Qf(t),f=ep(t),p=tp(t),d=Vf(t),g=Wf(r),_=s.createProgram();let u,m,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(u=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ai).join(`
`),u.length>0&&(u+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ai).join(`
`),m.length>0&&(m+=`
`)):(u=[co(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ai).join(`
`),m=[co(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Sn?"#define TONE_MAPPING":"",t.toneMapping!==Sn?De.tonemapping_pars_fragment:"",t.toneMapping!==Sn?Hf("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",De.colorspace_pars_fragment,kf("linearToOutputTexel",t.outputColorSpace),Gf(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ai).join(`
`)),a=Kr(a),a=ao(a,t),a=oo(a,t),o=Kr(o),o=ao(o,t),o=oo(o,t),a=lo(a),o=lo(o),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,u=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+u,m=["#define varying in",t.glslVersion===_s?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===_s?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const y=T+u+a,E=T+m+o,L=so(s,s.VERTEX_SHADER,y),w=so(s,s.FRAGMENT_SHADER,E);s.attachShader(_,L),s.attachShader(_,w),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function b(S){if(i.debug.checkShaderErrors){const z=s.getProgramInfoLog(_).trim(),I=s.getShaderInfoLog(L).trim(),V=s.getShaderInfoLog(w).trim();let j=!0,G=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(j=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,L,w);else{const $=ro(s,L,"vertex"),H=ro(s,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+S.name+`
Material Type: `+S.type+`

Program Info Log: `+z+`
`+$+`
`+H)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(I===""||V==="")&&(G=!1);G&&(S.diagnostics={runnable:j,programLog:z,vertexShader:{log:I,prefix:u},fragmentShader:{log:V,prefix:m}})}s.deleteShader(L),s.deleteShader(w),U=new ps(s,_),Y=qf(s,_)}let U;this.getUniforms=function(){return U===void 0&&b(this),U};let Y;this.getAttributes=function(){return Y===void 0&&b(this),Y};let v=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=s.getProgramParameter(_,Ff)),v},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Of++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=L,this.fragmentShader=w,this}let ip=0;class sp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new rp(e),t.set(e,n)),n}}class rp{constructor(e){this.id=ip++,this.code=e,this.usedTimes=0}}function ap(i,e,t,n,s,r,a){const o=new ha,l=new sp,c=new Set,h=[],f=s.logarithmicDepthBuffer,p=s.reverseDepthBuffer,d=s.vertexTextures;let g=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function u(v){return c.add(v),v===0?"uv":`uv${v}`}function m(v,S,z,I,V){const j=I.fog,G=V.geometry,$=v.isMeshStandardMaterial?I.environment:null,H=(v.isMeshStandardMaterial?t:e).get(v.envMap||$),oe=H&&H.mapping===ys?H.image.height:null,le=_[v.type];v.precision!==null&&(g=s.getMaxPrecision(v.precision),g!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",g,"instead."));const ge=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,ke=ge!==void 0?ge.length:0;let qe=0;G.morphAttributes.position!==void 0&&(qe=1),G.morphAttributes.normal!==void 0&&(qe=2),G.morphAttributes.color!==void 0&&(qe=3);let W,J,pe,ce;if(le){const Mt=Wt[le];W=Mt.vertexShader,J=Mt.fragmentShader}else W=v.vertexShader,J=v.fragmentShader,l.update(v),pe=l.getVertexShaderID(v),ce=l.getFragmentShaderID(v);const Re=i.getRenderTarget(),Se=V.isInstancedMesh===!0,Ne=V.isBatchedMesh===!0,Ke=!!v.map,Fe=!!v.matcap,R=!!H,Et=!!v.aoMap,Ue=!!v.lightMap,Be=!!v.bumpMap,Ee=!!v.normalMap,$e=!!v.displacementMap,be=!!v.emissiveMap,A=!!v.metalnessMap,x=!!v.roughnessMap,N=v.anisotropy>0,X=v.clearcoat>0,Z=v.dispersion>0,q=v.iridescence>0,ve=v.sheen>0,ne=v.transmission>0,he=N&&!!v.anisotropyMap,ze=X&&!!v.clearcoatMap,Q=X&&!!v.clearcoatNormalMap,ue=X&&!!v.clearcoatRoughnessMap,Te=q&&!!v.iridescenceMap,Ae=q&&!!v.iridescenceThicknessMap,de=ve&&!!v.sheenColorMap,Ie=ve&&!!v.sheenRoughnessMap,Ce=!!v.specularMap,je=!!v.specularColorMap,C=!!v.specularIntensityMap,re=ne&&!!v.transmissionMap,k=ne&&!!v.thicknessMap,K=!!v.gradientMap,ie=!!v.alphaMap,ae=v.alphaTest>0,Oe=!!v.alphaHash,it=!!v.extensions;let xt=Sn;v.toneMapped&&(Re===null||Re.isXRRenderTarget===!0)&&(xt=i.toneMapping);const He={shaderID:le,shaderType:v.type,shaderName:v.name,vertexShader:W,fragmentShader:J,defines:v.defines,customVertexShaderID:pe,customFragmentShaderID:ce,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:g,batching:Ne,batchingColor:Ne&&V._colorsTexture!==null,instancing:Se,instancingColor:Se&&V.instanceColor!==null,instancingMorph:Se&&V.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:Re===null?i.outputColorSpace:Re.isXRRenderTarget===!0?Re.texture.colorSpace:An,alphaToCoverage:!!v.alphaToCoverage,map:Ke,matcap:Fe,envMap:R,envMapMode:R&&H.mapping,envMapCubeUVHeight:oe,aoMap:Et,lightMap:Ue,bumpMap:Be,normalMap:Ee,displacementMap:d&&$e,emissiveMap:be,normalMapObjectSpace:Ee&&v.normalMapType===Zl,normalMapTangentSpace:Ee&&v.normalMapType===$l,metalnessMap:A,roughnessMap:x,anisotropy:N,anisotropyMap:he,clearcoat:X,clearcoatMap:ze,clearcoatNormalMap:Q,clearcoatRoughnessMap:ue,dispersion:Z,iridescence:q,iridescenceMap:Te,iridescenceThicknessMap:Ae,sheen:ve,sheenColorMap:de,sheenRoughnessMap:Ie,specularMap:Ce,specularColorMap:je,specularIntensityMap:C,transmission:ne,transmissionMap:re,thicknessMap:k,gradientMap:K,opaque:v.transparent===!1&&v.blending===oi&&v.alphaToCoverage===!1,alphaMap:ie,alphaTest:ae,alphaHash:Oe,combine:v.combine,mapUv:Ke&&u(v.map.channel),aoMapUv:Et&&u(v.aoMap.channel),lightMapUv:Ue&&u(v.lightMap.channel),bumpMapUv:Be&&u(v.bumpMap.channel),normalMapUv:Ee&&u(v.normalMap.channel),displacementMapUv:$e&&u(v.displacementMap.channel),emissiveMapUv:be&&u(v.emissiveMap.channel),metalnessMapUv:A&&u(v.metalnessMap.channel),roughnessMapUv:x&&u(v.roughnessMap.channel),anisotropyMapUv:he&&u(v.anisotropyMap.channel),clearcoatMapUv:ze&&u(v.clearcoatMap.channel),clearcoatNormalMapUv:Q&&u(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ue&&u(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Te&&u(v.iridescenceMap.channel),iridescenceThicknessMapUv:Ae&&u(v.iridescenceThicknessMap.channel),sheenColorMapUv:de&&u(v.sheenColorMap.channel),sheenRoughnessMapUv:Ie&&u(v.sheenRoughnessMap.channel),specularMapUv:Ce&&u(v.specularMap.channel),specularColorMapUv:je&&u(v.specularColorMap.channel),specularIntensityMapUv:C&&u(v.specularIntensityMap.channel),transmissionMapUv:re&&u(v.transmissionMap.channel),thicknessMapUv:k&&u(v.thicknessMap.channel),alphaMapUv:ie&&u(v.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(Ee||N),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!G.attributes.uv&&(Ke||ie),fog:!!j,useFog:v.fog===!0,fogExp2:!!j&&j.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:p,skinning:V.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:ke,morphTextureStride:qe,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&z.length>0,shadowMapType:i.shadowMap.type,toneMapping:xt,decodeVideoTexture:Ke&&v.map.isVideoTexture===!0&&We.getTransfer(v.map.colorSpace)===Je,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===qt,flipSided:v.side===St,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:it&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(it&&v.extensions.multiDraw===!0||Ne)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return He.vertexUv1s=c.has(1),He.vertexUv2s=c.has(2),He.vertexUv3s=c.has(3),c.clear(),He}function T(v){const S=[];if(v.shaderID?S.push(v.shaderID):(S.push(v.customVertexShaderID),S.push(v.customFragmentShaderID)),v.defines!==void 0)for(const z in v.defines)S.push(z),S.push(v.defines[z]);return v.isRawShaderMaterial===!1&&(y(S,v),E(S,v),S.push(i.outputColorSpace)),S.push(v.customProgramCacheKey),S.join()}function y(v,S){v.push(S.precision),v.push(S.outputColorSpace),v.push(S.envMapMode),v.push(S.envMapCubeUVHeight),v.push(S.mapUv),v.push(S.alphaMapUv),v.push(S.lightMapUv),v.push(S.aoMapUv),v.push(S.bumpMapUv),v.push(S.normalMapUv),v.push(S.displacementMapUv),v.push(S.emissiveMapUv),v.push(S.metalnessMapUv),v.push(S.roughnessMapUv),v.push(S.anisotropyMapUv),v.push(S.clearcoatMapUv),v.push(S.clearcoatNormalMapUv),v.push(S.clearcoatRoughnessMapUv),v.push(S.iridescenceMapUv),v.push(S.iridescenceThicknessMapUv),v.push(S.sheenColorMapUv),v.push(S.sheenRoughnessMapUv),v.push(S.specularMapUv),v.push(S.specularColorMapUv),v.push(S.specularIntensityMapUv),v.push(S.transmissionMapUv),v.push(S.thicknessMapUv),v.push(S.combine),v.push(S.fogExp2),v.push(S.sizeAttenuation),v.push(S.morphTargetsCount),v.push(S.morphAttributeCount),v.push(S.numDirLights),v.push(S.numPointLights),v.push(S.numSpotLights),v.push(S.numSpotLightMaps),v.push(S.numHemiLights),v.push(S.numRectAreaLights),v.push(S.numDirLightShadows),v.push(S.numPointLightShadows),v.push(S.numSpotLightShadows),v.push(S.numSpotLightShadowsWithMaps),v.push(S.numLightProbes),v.push(S.shadowMapType),v.push(S.toneMapping),v.push(S.numClippingPlanes),v.push(S.numClipIntersection),v.push(S.depthPacking)}function E(v,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),v.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reverseDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.alphaToCoverage&&o.enable(20),v.push(o.mask)}function L(v){const S=_[v.type];let z;if(S){const I=Wt[S];z=Gc.clone(I.uniforms)}else z=v.uniforms;return z}function w(v,S){let z;for(let I=0,V=h.length;I<V;I++){const j=h[I];if(j.cacheKey===S){z=j,++z.usedTimes;break}}return z===void 0&&(z=new np(i,S,v,r),h.push(z)),z}function b(v){if(--v.usedTimes===0){const S=h.indexOf(v);h[S]=h[h.length-1],h.pop(),v.destroy()}}function U(v){l.remove(v)}function Y(){l.dispose()}return{getParameters:m,getProgramCacheKey:T,getUniforms:L,acquireProgram:w,releaseProgram:b,releaseShaderCache:U,programs:h,dispose:Y}}function op(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function lp(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function ho(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function uo(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(f,p,d,g,_,u){let m=i[e];return m===void 0?(m={id:f.id,object:f,geometry:p,material:d,groupOrder:g,renderOrder:f.renderOrder,z:_,group:u},i[e]=m):(m.id=f.id,m.object=f,m.geometry=p,m.material=d,m.groupOrder=g,m.renderOrder=f.renderOrder,m.z=_,m.group=u),e++,m}function o(f,p,d,g,_,u){const m=a(f,p,d,g,_,u);d.transmission>0?n.push(m):d.transparent===!0?s.push(m):t.push(m)}function l(f,p,d,g,_,u){const m=a(f,p,d,g,_,u);d.transmission>0?n.unshift(m):d.transparent===!0?s.unshift(m):t.unshift(m)}function c(f,p){t.length>1&&t.sort(f||lp),n.length>1&&n.sort(p||ho),s.length>1&&s.sort(p||ho)}function h(){for(let f=e,p=i.length;f<p;f++){const d=i[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function cp(){let i=new WeakMap;function e(n,s){const r=i.get(n);let a;return r===void 0?(a=new uo,i.set(n,[a])):s>=r.length?(a=new uo,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function hp(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new F,color:new Ye};break;case"SpotLight":t={position:new F,direction:new F,color:new Ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new Ye,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new Ye,groundColor:new Ye};break;case"RectAreaLight":t={color:new Ye,position:new F,halfWidth:new F,halfHeight:new F};break}return i[e.id]=t,t}}}function up(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let dp=0;function fp(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function pp(i){const e=new hp,t=up(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new F);const s=new F,r=new tt,a=new tt;function o(c){let h=0,f=0,p=0;for(let Y=0;Y<9;Y++)n.probe[Y].set(0,0,0);let d=0,g=0,_=0,u=0,m=0,T=0,y=0,E=0,L=0,w=0,b=0;c.sort(fp);for(let Y=0,v=c.length;Y<v;Y++){const S=c[Y],z=S.color,I=S.intensity,V=S.distance,j=S.shadow&&S.shadow.map?S.shadow.map.texture:null;if(S.isAmbientLight)h+=z.r*I,f+=z.g*I,p+=z.b*I;else if(S.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(S.sh.coefficients[G],I);b++}else if(S.isDirectionalLight){const G=e.get(S);if(G.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){const $=S.shadow,H=t.get(S);H.shadowIntensity=$.intensity,H.shadowBias=$.bias,H.shadowNormalBias=$.normalBias,H.shadowRadius=$.radius,H.shadowMapSize=$.mapSize,n.directionalShadow[d]=H,n.directionalShadowMap[d]=j,n.directionalShadowMatrix[d]=S.shadow.matrix,T++}n.directional[d]=G,d++}else if(S.isSpotLight){const G=e.get(S);G.position.setFromMatrixPosition(S.matrixWorld),G.color.copy(z).multiplyScalar(I),G.distance=V,G.coneCos=Math.cos(S.angle),G.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),G.decay=S.decay,n.spot[_]=G;const $=S.shadow;if(S.map&&(n.spotLightMap[L]=S.map,L++,$.updateMatrices(S),S.castShadow&&w++),n.spotLightMatrix[_]=$.matrix,S.castShadow){const H=t.get(S);H.shadowIntensity=$.intensity,H.shadowBias=$.bias,H.shadowNormalBias=$.normalBias,H.shadowRadius=$.radius,H.shadowMapSize=$.mapSize,n.spotShadow[_]=H,n.spotShadowMap[_]=j,E++}_++}else if(S.isRectAreaLight){const G=e.get(S);G.color.copy(z).multiplyScalar(I),G.halfWidth.set(S.width*.5,0,0),G.halfHeight.set(0,S.height*.5,0),n.rectArea[u]=G,u++}else if(S.isPointLight){const G=e.get(S);if(G.color.copy(S.color).multiplyScalar(S.intensity),G.distance=S.distance,G.decay=S.decay,S.castShadow){const $=S.shadow,H=t.get(S);H.shadowIntensity=$.intensity,H.shadowBias=$.bias,H.shadowNormalBias=$.normalBias,H.shadowRadius=$.radius,H.shadowMapSize=$.mapSize,H.shadowCameraNear=$.camera.near,H.shadowCameraFar=$.camera.far,n.pointShadow[g]=H,n.pointShadowMap[g]=j,n.pointShadowMatrix[g]=S.shadow.matrix,y++}n.point[g]=G,g++}else if(S.isHemisphereLight){const G=e.get(S);G.skyColor.copy(S.color).multiplyScalar(I),G.groundColor.copy(S.groundColor).multiplyScalar(I),n.hemi[m]=G,m++}}u>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=te.LTC_FLOAT_1,n.rectAreaLTC2=te.LTC_FLOAT_2):(n.rectAreaLTC1=te.LTC_HALF_1,n.rectAreaLTC2=te.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=p;const U=n.hash;(U.directionalLength!==d||U.pointLength!==g||U.spotLength!==_||U.rectAreaLength!==u||U.hemiLength!==m||U.numDirectionalShadows!==T||U.numPointShadows!==y||U.numSpotShadows!==E||U.numSpotMaps!==L||U.numLightProbes!==b)&&(n.directional.length=d,n.spot.length=_,n.rectArea.length=u,n.point.length=g,n.hemi.length=m,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=E,n.spotShadowMap.length=E,n.directionalShadowMatrix.length=T,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=E+L-w,n.spotLightMap.length=L,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=b,U.directionalLength=d,U.pointLength=g,U.spotLength=_,U.rectAreaLength=u,U.hemiLength=m,U.numDirectionalShadows=T,U.numPointShadows=y,U.numSpotShadows=E,U.numSpotMaps=L,U.numLightProbes=b,n.version=dp++)}function l(c,h){let f=0,p=0,d=0,g=0,_=0;const u=h.matrixWorldInverse;for(let m=0,T=c.length;m<T;m++){const y=c[m];if(y.isDirectionalLight){const E=n.directional[f];E.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(u),f++}else if(y.isSpotLight){const E=n.spot[d];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(u),E.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(u),d++}else if(y.isRectAreaLight){const E=n.rectArea[g];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(u),a.identity(),r.copy(y.matrixWorld),r.premultiply(u),a.extractRotation(r),E.halfWidth.set(y.width*.5,0,0),E.halfHeight.set(0,y.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),g++}else if(y.isPointLight){const E=n.point[p];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(u),p++}else if(y.isHemisphereLight){const E=n.hemi[_];E.direction.setFromMatrixPosition(y.matrixWorld),E.direction.transformDirection(u),_++}}}return{setup:o,setupView:l,state:n}}function fo(i){const e=new pp(i),t=[],n=[];function s(h){c.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function a(h){n.push(h)}function o(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function mp(i){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new fo(i),e.set(s,[o])):r>=a.length?(o=new fo(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}class gp extends Li{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Kl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class vp extends Li{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const _p=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,xp=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Mp(i,e,t){let n=new Qo;const s=new Le,r=new Le,a=new we,o=new gp({depthPacking:jl}),l=new vp,c={},h=t.maxTextureSize,f={[Tn]:St,[St]:Tn,[qt]:qt},p=new Rt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Le},radius:{value:4}},vertexShader:_p,fragmentShader:xp}),d=p.clone();d.defines.HORIZONTAL_PASS=1;const g=new jt;g.setAttribute("position",new rt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Ut(g,p),u=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Co;let m=this.type;this.render=function(w,b,U){if(u.enabled===!1||u.autoUpdate===!1&&u.needsUpdate===!1||w.length===0)return;const Y=i.getRenderTarget(),v=i.getActiveCubeFace(),S=i.getActiveMipmapLevel(),z=i.state;z.setBlending(Mn),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const I=m!==sn&&this.type===sn,V=m===sn&&this.type!==sn;for(let j=0,G=w.length;j<G;j++){const $=w[j],H=$.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);const oe=H.getFrameExtents();if(s.multiply(oe),r.copy(H.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/oe.x),s.x=r.x*oe.x,H.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/oe.y),s.y=r.y*oe.y,H.mapSize.y=r.y)),H.map===null||I===!0||V===!0){const ge=this.type!==sn?{minFilter:ft,magFilter:ft}:{};H.map!==null&&H.map.dispose(),H.map=new at(s.x,s.y,ge),H.map.texture.name=$.name+".shadowMap",H.camera.updateProjectionMatrix()}i.setRenderTarget(H.map),i.clear();const le=H.getViewportCount();for(let ge=0;ge<le;ge++){const ke=H.getViewport(ge);a.set(r.x*ke.x,r.y*ke.y,r.x*ke.z,r.y*ke.w),z.viewport(a),H.updateMatrices($,ge),n=H.getFrustum(),E(b,U,H.camera,$,this.type)}H.isPointLightShadow!==!0&&this.type===sn&&T(H,U),H.needsUpdate=!1}m=this.type,u.needsUpdate=!1,i.setRenderTarget(Y,v,S)};function T(w,b){const U=e.update(_);p.defines.VSM_SAMPLES!==w.blurSamples&&(p.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,p.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new at(s.x,s.y)),p.uniforms.shadow_pass.value=w.map.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(b,null,U,p,_,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(b,null,U,d,_,null)}function y(w,b,U,Y){let v=null;const S=U.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(S!==void 0)v=S;else if(v=U.isPointLight===!0?l:o,i.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const z=v.uuid,I=b.uuid;let V=c[z];V===void 0&&(V={},c[z]=V);let j=V[I];j===void 0&&(j=v.clone(),V[I]=j,b.addEventListener("dispose",L)),v=j}if(v.visible=b.visible,v.wireframe=b.wireframe,Y===sn?v.side=b.shadowSide!==null?b.shadowSide:b.side:v.side=b.shadowSide!==null?b.shadowSide:f[b.side],v.alphaMap=b.alphaMap,v.alphaTest=b.alphaTest,v.map=b.map,v.clipShadows=b.clipShadows,v.clippingPlanes=b.clippingPlanes,v.clipIntersection=b.clipIntersection,v.displacementMap=b.displacementMap,v.displacementScale=b.displacementScale,v.displacementBias=b.displacementBias,v.wireframeLinewidth=b.wireframeLinewidth,v.linewidth=b.linewidth,U.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const z=i.properties.get(v);z.light=U}return v}function E(w,b,U,Y,v){if(w.visible===!1)return;if(w.layers.test(b.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&v===sn)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,w.matrixWorld);const I=e.update(w),V=w.material;if(Array.isArray(V)){const j=I.groups;for(let G=0,$=j.length;G<$;G++){const H=j[G],oe=V[H.materialIndex];if(oe&&oe.visible){const le=y(w,oe,Y,v);w.onBeforeShadow(i,w,b,U,I,le,H),i.renderBufferDirect(U,null,I,le,w,H),w.onAfterShadow(i,w,b,U,I,le,H)}}}else if(V.visible){const j=y(w,V,Y,v);w.onBeforeShadow(i,w,b,U,I,j,null),i.renderBufferDirect(U,null,I,j,w,null),w.onAfterShadow(i,w,b,U,I,j,null)}}const z=w.children;for(let I=0,V=z.length;I<V;I++)E(z[I],b,U,Y,v)}function L(w){w.target.removeEventListener("dispose",L);for(const U in c){const Y=c[U],v=w.target.uuid;v in Y&&(Y[v].dispose(),delete Y[v])}}}const Sp={[ur]:dr,[fr]:gr,[pr]:vr,[ui]:mr,[dr]:ur,[gr]:fr,[vr]:pr,[mr]:ui};function yp(i){function e(){let C=!1;const re=new we;let k=null;const K=new we(0,0,0,0);return{setMask:function(ie){k!==ie&&!C&&(i.colorMask(ie,ie,ie,ie),k=ie)},setLocked:function(ie){C=ie},setClear:function(ie,ae,Oe,it,xt){xt===!0&&(ie*=it,ae*=it,Oe*=it),re.set(ie,ae,Oe,it),K.equals(re)===!1&&(i.clearColor(ie,ae,Oe,it),K.copy(re))},reset:function(){C=!1,k=null,K.set(-1,0,0,0)}}}function t(){let C=!1,re=!1,k=null,K=null,ie=null;return{setReversed:function(ae){re=ae},setTest:function(ae){ae?pe(i.DEPTH_TEST):ce(i.DEPTH_TEST)},setMask:function(ae){k!==ae&&!C&&(i.depthMask(ae),k=ae)},setFunc:function(ae){if(re&&(ae=Sp[ae]),K!==ae){switch(ae){case ur:i.depthFunc(i.NEVER);break;case dr:i.depthFunc(i.ALWAYS);break;case fr:i.depthFunc(i.LESS);break;case ui:i.depthFunc(i.LEQUAL);break;case pr:i.depthFunc(i.EQUAL);break;case mr:i.depthFunc(i.GEQUAL);break;case gr:i.depthFunc(i.GREATER);break;case vr:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}K=ae}},setLocked:function(ae){C=ae},setClear:function(ae){ie!==ae&&(i.clearDepth(ae),ie=ae)},reset:function(){C=!1,k=null,K=null,ie=null}}}function n(){let C=!1,re=null,k=null,K=null,ie=null,ae=null,Oe=null,it=null,xt=null;return{setTest:function(He){C||(He?pe(i.STENCIL_TEST):ce(i.STENCIL_TEST))},setMask:function(He){re!==He&&!C&&(i.stencilMask(He),re=He)},setFunc:function(He,Mt,$t){(k!==He||K!==Mt||ie!==$t)&&(i.stencilFunc(He,Mt,$t),k=He,K=Mt,ie=$t)},setOp:function(He,Mt,$t){(ae!==He||Oe!==Mt||it!==$t)&&(i.stencilOp(He,Mt,$t),ae=He,Oe=Mt,it=$t)},setLocked:function(He){C=He},setClear:function(He){xt!==He&&(i.clearStencil(He),xt=He)},reset:function(){C=!1,re=null,k=null,K=null,ie=null,ae=null,Oe=null,it=null,xt=null}}}const s=new e,r=new t,a=new n,o=new WeakMap,l=new WeakMap;let c={},h={},f=new WeakMap,p=[],d=null,g=!1,_=null,u=null,m=null,T=null,y=null,E=null,L=null,w=new Ye(0,0,0),b=0,U=!1,Y=null,v=null,S=null,z=null,I=null;const V=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let j=!1,G=0;const $=i.getParameter(i.VERSION);$.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec($)[1]),j=G>=1):$.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),j=G>=2);let H=null,oe={};const le=i.getParameter(i.SCISSOR_BOX),ge=i.getParameter(i.VIEWPORT),ke=new we().fromArray(le),qe=new we().fromArray(ge);function W(C,re,k,K){const ie=new Uint8Array(4),ae=i.createTexture();i.bindTexture(C,ae),i.texParameteri(C,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(C,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Oe=0;Oe<k;Oe++)C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY?i.texImage3D(re,0,i.RGBA,1,1,K,0,i.RGBA,i.UNSIGNED_BYTE,ie):i.texImage2D(re+Oe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ie);return ae}const J={};J[i.TEXTURE_2D]=W(i.TEXTURE_2D,i.TEXTURE_2D,1),J[i.TEXTURE_CUBE_MAP]=W(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[i.TEXTURE_2D_ARRAY]=W(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),J[i.TEXTURE_3D]=W(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),a.setClear(0),pe(i.DEPTH_TEST),r.setFunc(ui),Ue(!1),Be(Ma),pe(i.CULL_FACE),R(Mn);function pe(C){c[C]!==!0&&(i.enable(C),c[C]=!0)}function ce(C){c[C]!==!1&&(i.disable(C),c[C]=!1)}function Re(C,re){return h[C]!==re?(i.bindFramebuffer(C,re),h[C]=re,C===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=re),C===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=re),!0):!1}function Se(C,re){let k=p,K=!1;if(C){k=f.get(re),k===void 0&&(k=[],f.set(re,k));const ie=C.textures;if(k.length!==ie.length||k[0]!==i.COLOR_ATTACHMENT0){for(let ae=0,Oe=ie.length;ae<Oe;ae++)k[ae]=i.COLOR_ATTACHMENT0+ae;k.length=ie.length,K=!0}}else k[0]!==i.BACK&&(k[0]=i.BACK,K=!0);K&&i.drawBuffers(k)}function Ne(C){return d!==C?(i.useProgram(C),d=C,!0):!1}const Ke={[rn]:i.FUNC_ADD,[yl]:i.FUNC_SUBTRACT,[El]:i.FUNC_REVERSE_SUBTRACT};Ke[Tl]=i.MIN,Ke[Al]=i.MAX;const Fe={[bl]:i.ZERO,[on]:i.ONE,[wl]:i.SRC_COLOR,[cr]:i.SRC_ALPHA,[Ul]:i.SRC_ALPHA_SATURATE,[Dl]:i.DST_COLOR,[Cl]:i.DST_ALPHA,[Rl]:i.ONE_MINUS_SRC_COLOR,[hr]:i.ONE_MINUS_SRC_ALPHA,[Ll]:i.ONE_MINUS_DST_COLOR,[Pl]:i.ONE_MINUS_DST_ALPHA,[Il]:i.CONSTANT_COLOR,[Nl]:i.ONE_MINUS_CONSTANT_COLOR,[Fl]:i.CONSTANT_ALPHA,[Ol]:i.ONE_MINUS_CONSTANT_ALPHA};function R(C,re,k,K,ie,ae,Oe,it,xt,He){if(C===Mn){g===!0&&(ce(i.BLEND),g=!1);return}if(g===!1&&(pe(i.BLEND),g=!0),C!==ea){if(C!==_||He!==U){if((u!==rn||y!==rn)&&(i.blendEquation(i.FUNC_ADD),u=rn,y=rn),He)switch(C){case oi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Sa:i.blendFunc(i.ONE,i.ONE);break;case ya:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ea:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}else switch(C){case oi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Sa:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case ya:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ea:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}m=null,T=null,E=null,L=null,w.set(0,0,0),b=0,_=C,U=He}return}ie=ie||re,ae=ae||k,Oe=Oe||K,(re!==u||ie!==y)&&(i.blendEquationSeparate(Ke[re],Ke[ie]),u=re,y=ie),(k!==m||K!==T||ae!==E||Oe!==L)&&(i.blendFuncSeparate(Fe[k],Fe[K],Fe[ae],Fe[Oe]),m=k,T=K,E=ae,L=Oe),(it.equals(w)===!1||xt!==b)&&(i.blendColor(it.r,it.g,it.b,xt),w.copy(it),b=xt),_=C,U=!1}function Et(C,re){C.side===qt?ce(i.CULL_FACE):pe(i.CULL_FACE);let k=C.side===St;re&&(k=!k),Ue(k),C.blending===oi&&C.transparent===!1?R(Mn):R(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),r.setFunc(C.depthFunc),r.setTest(C.depthTest),r.setMask(C.depthWrite),s.setMask(C.colorWrite);const K=C.stencilWrite;a.setTest(K),K&&(a.setMask(C.stencilWriteMask),a.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),a.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),$e(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?pe(i.SAMPLE_ALPHA_TO_COVERAGE):ce(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ue(C){Y!==C&&(C?i.frontFace(i.CW):i.frontFace(i.CCW),Y=C)}function Be(C){C!==xl?(pe(i.CULL_FACE),C!==v&&(C===Ma?i.cullFace(i.BACK):C===Ml?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ce(i.CULL_FACE),v=C}function Ee(C){C!==S&&(j&&i.lineWidth(C),S=C)}function $e(C,re,k){C?(pe(i.POLYGON_OFFSET_FILL),(z!==re||I!==k)&&(i.polygonOffset(re,k),z=re,I=k)):ce(i.POLYGON_OFFSET_FILL)}function be(C){C?pe(i.SCISSOR_TEST):ce(i.SCISSOR_TEST)}function A(C){C===void 0&&(C=i.TEXTURE0+V-1),H!==C&&(i.activeTexture(C),H=C)}function x(C,re,k){k===void 0&&(H===null?k=i.TEXTURE0+V-1:k=H);let K=oe[k];K===void 0&&(K={type:void 0,texture:void 0},oe[k]=K),(K.type!==C||K.texture!==re)&&(H!==k&&(i.activeTexture(k),H=k),i.bindTexture(C,re||J[C]),K.type=C,K.texture=re)}function N(){const C=oe[H];C!==void 0&&C.type!==void 0&&(i.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function X(){try{i.compressedTexImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Z(){try{i.compressedTexImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function q(){try{i.texSubImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ve(){try{i.texSubImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ne(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function he(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ze(){try{i.texStorage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Q(){try{i.texStorage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ue(){try{i.texImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Te(){try{i.texImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Ae(C){ke.equals(C)===!1&&(i.scissor(C.x,C.y,C.z,C.w),ke.copy(C))}function de(C){qe.equals(C)===!1&&(i.viewport(C.x,C.y,C.z,C.w),qe.copy(C))}function Ie(C,re){let k=l.get(re);k===void 0&&(k=new WeakMap,l.set(re,k));let K=k.get(C);K===void 0&&(K=i.getUniformBlockIndex(re,C.name),k.set(C,K))}function Ce(C,re){const K=l.get(re).get(C);o.get(re)!==K&&(i.uniformBlockBinding(re,K,C.__bindingPointIndex),o.set(re,K))}function je(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),c={},H=null,oe={},h={},f=new WeakMap,p=[],d=null,g=!1,_=null,u=null,m=null,T=null,y=null,E=null,L=null,w=new Ye(0,0,0),b=0,U=!1,Y=null,v=null,S=null,z=null,I=null,ke.set(0,0,i.canvas.width,i.canvas.height),qe.set(0,0,i.canvas.width,i.canvas.height),s.reset(),r.reset(),a.reset()}return{buffers:{color:s,depth:r,stencil:a},enable:pe,disable:ce,bindFramebuffer:Re,drawBuffers:Se,useProgram:Ne,setBlending:R,setMaterial:Et,setFlipSided:Ue,setCullFace:Be,setLineWidth:Ee,setPolygonOffset:$e,setScissorTest:be,activeTexture:A,bindTexture:x,unbindTexture:N,compressedTexImage2D:X,compressedTexImage3D:Z,texImage2D:ue,texImage3D:Te,updateUBOMapping:Ie,uniformBlockBinding:Ce,texStorage2D:ze,texStorage3D:Q,texSubImage2D:q,texSubImage3D:ve,compressedTexSubImage2D:ne,compressedTexSubImage3D:he,scissor:Ae,viewport:de,reset:je}}function po(i,e,t,n){const s=Ep(n);switch(t){case No:return i*e;case Oo:return i*e;case Bo:return i*e*2;case zo:return i*e/s.components*s.byteLength;case sa:return i*e/s.components*s.byteLength;case ko:return i*e*2/s.components*s.byteLength;case ra:return i*e*2/s.components*s.byteLength;case Fo:return i*e*3/s.components*s.byteLength;case Lt:return i*e*4/s.components*s.byteLength;case aa:return i*e*4/s.components*s.byteLength;case ls:case cs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case hs:case us:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Er:case Ar:return Math.max(i,16)*Math.max(e,8)/4;case yr:case Tr:return Math.max(i,8)*Math.max(e,8)/2;case br:case wr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Rr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Cr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Pr:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Dr:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Lr:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Ur:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Ir:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Nr:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Fr:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Or:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Br:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case zr:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case kr:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Hr:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Gr:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case ds:case Vr:case Wr:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Ho:case qr:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Xr:case Yr:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Ep(i){switch(i){case Gt:case Lo:return{byteLength:1,components:1};case Ri:case Uo:case Hn:return{byteLength:2,components:1};case na:case ia:return{byteLength:2,components:4};case zn:case ta:case Yt:return{byteLength:4,components:1};case Io:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Tp(i,e,t,n,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Le,h=new WeakMap;let f;const p=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,x){return d?new OffscreenCanvas(A,x):Ms("canvas")}function _(A,x,N){let X=1;const Z=be(A);if((Z.width>N||Z.height>N)&&(X=N/Math.max(Z.width,Z.height)),X<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const q=Math.floor(X*Z.width),ve=Math.floor(X*Z.height);f===void 0&&(f=g(q,ve));const ne=x?g(q,ve):f;return ne.width=q,ne.height=ve,ne.getContext("2d").drawImage(A,0,0,q,ve),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+q+"x"+ve+")."),ne}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),A;return A}function u(A){return A.generateMipmaps&&A.minFilter!==ft&&A.minFilter!==Qe}function m(A){i.generateMipmap(A)}function T(A,x,N,X,Z=!1){if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let q=x;if(x===i.RED&&(N===i.FLOAT&&(q=i.R32F),N===i.HALF_FLOAT&&(q=i.R16F),N===i.UNSIGNED_BYTE&&(q=i.R8)),x===i.RED_INTEGER&&(N===i.UNSIGNED_BYTE&&(q=i.R8UI),N===i.UNSIGNED_SHORT&&(q=i.R16UI),N===i.UNSIGNED_INT&&(q=i.R32UI),N===i.BYTE&&(q=i.R8I),N===i.SHORT&&(q=i.R16I),N===i.INT&&(q=i.R32I)),x===i.RG&&(N===i.FLOAT&&(q=i.RG32F),N===i.HALF_FLOAT&&(q=i.RG16F),N===i.UNSIGNED_BYTE&&(q=i.RG8)),x===i.RG_INTEGER&&(N===i.UNSIGNED_BYTE&&(q=i.RG8UI),N===i.UNSIGNED_SHORT&&(q=i.RG16UI),N===i.UNSIGNED_INT&&(q=i.RG32UI),N===i.BYTE&&(q=i.RG8I),N===i.SHORT&&(q=i.RG16I),N===i.INT&&(q=i.RG32I)),x===i.RGB_INTEGER&&(N===i.UNSIGNED_BYTE&&(q=i.RGB8UI),N===i.UNSIGNED_SHORT&&(q=i.RGB16UI),N===i.UNSIGNED_INT&&(q=i.RGB32UI),N===i.BYTE&&(q=i.RGB8I),N===i.SHORT&&(q=i.RGB16I),N===i.INT&&(q=i.RGB32I)),x===i.RGBA_INTEGER&&(N===i.UNSIGNED_BYTE&&(q=i.RGBA8UI),N===i.UNSIGNED_SHORT&&(q=i.RGBA16UI),N===i.UNSIGNED_INT&&(q=i.RGBA32UI),N===i.BYTE&&(q=i.RGBA8I),N===i.SHORT&&(q=i.RGBA16I),N===i.INT&&(q=i.RGBA32I)),x===i.RGB&&N===i.UNSIGNED_INT_5_9_9_9_REV&&(q=i.RGB9_E5),x===i.RGBA){const ve=Z?ms:We.getTransfer(X);N===i.FLOAT&&(q=i.RGBA32F),N===i.HALF_FLOAT&&(q=i.RGBA16F),N===i.UNSIGNED_BYTE&&(q=ve===Je?i.SRGB8_ALPHA8:i.RGBA8),N===i.UNSIGNED_SHORT_4_4_4_4&&(q=i.RGBA4),N===i.UNSIGNED_SHORT_5_5_5_1&&(q=i.RGB5_A1)}return(q===i.R16F||q===i.R32F||q===i.RG16F||q===i.RG32F||q===i.RGBA16F||q===i.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function y(A,x){let N;return A?x===null||x===zn||x===pi?N=i.DEPTH24_STENCIL8:x===Yt?N=i.DEPTH32F_STENCIL8:x===Ri&&(N=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===zn||x===pi?N=i.DEPTH_COMPONENT24:x===Yt?N=i.DEPTH_COMPONENT32F:x===Ri&&(N=i.DEPTH_COMPONENT16),N}function E(A,x){return u(A)===!0||A.isFramebufferTexture&&A.minFilter!==ft&&A.minFilter!==Qe?Math.log2(Math.max(x.width,x.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?x.mipmaps.length:1}function L(A){const x=A.target;x.removeEventListener("dispose",L),b(x),x.isVideoTexture&&h.delete(x)}function w(A){const x=A.target;x.removeEventListener("dispose",w),Y(x)}function b(A){const x=n.get(A);if(x.__webglInit===void 0)return;const N=A.source,X=p.get(N);if(X){const Z=X[x.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&U(A),Object.keys(X).length===0&&p.delete(N)}n.remove(A)}function U(A){const x=n.get(A);i.deleteTexture(x.__webglTexture);const N=A.source,X=p.get(N);delete X[x.__cacheKey],a.memory.textures--}function Y(A){const x=n.get(A);if(A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(x.__webglFramebuffer[X]))for(let Z=0;Z<x.__webglFramebuffer[X].length;Z++)i.deleteFramebuffer(x.__webglFramebuffer[X][Z]);else i.deleteFramebuffer(x.__webglFramebuffer[X]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[X])}else{if(Array.isArray(x.__webglFramebuffer))for(let X=0;X<x.__webglFramebuffer.length;X++)i.deleteFramebuffer(x.__webglFramebuffer[X]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let X=0;X<x.__webglColorRenderbuffer.length;X++)x.__webglColorRenderbuffer[X]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[X]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const N=A.textures;for(let X=0,Z=N.length;X<Z;X++){const q=n.get(N[X]);q.__webglTexture&&(i.deleteTexture(q.__webglTexture),a.memory.textures--),n.remove(N[X])}n.remove(A)}let v=0;function S(){v=0}function z(){const A=v;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),v+=1,A}function I(A){const x=[];return x.push(A.wrapS),x.push(A.wrapT),x.push(A.wrapR||0),x.push(A.magFilter),x.push(A.minFilter),x.push(A.anisotropy),x.push(A.internalFormat),x.push(A.format),x.push(A.type),x.push(A.generateMipmaps),x.push(A.premultiplyAlpha),x.push(A.flipY),x.push(A.unpackAlignment),x.push(A.colorSpace),x.join()}function V(A,x){const N=n.get(A);if(A.isVideoTexture&&Ee(A),A.isRenderTargetTexture===!1&&A.version>0&&N.__version!==A.version){const X=A.image;if(X===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{qe(N,A,x);return}}t.bindTexture(i.TEXTURE_2D,N.__webglTexture,i.TEXTURE0+x)}function j(A,x){const N=n.get(A);if(A.version>0&&N.__version!==A.version){qe(N,A,x);return}t.bindTexture(i.TEXTURE_2D_ARRAY,N.__webglTexture,i.TEXTURE0+x)}function G(A,x){const N=n.get(A);if(A.version>0&&N.__version!==A.version){qe(N,A,x);return}t.bindTexture(i.TEXTURE_3D,N.__webglTexture,i.TEXTURE0+x)}function $(A,x){const N=n.get(A);if(A.version>0&&N.__version!==A.version){W(N,A,x);return}t.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+x)}const H={[Mr]:i.REPEAT,[Fn]:i.CLAMP_TO_EDGE,[Sr]:i.MIRRORED_REPEAT},oe={[ft]:i.NEAREST,[Yl]:i.NEAREST_MIPMAP_NEAREST,[Oi]:i.NEAREST_MIPMAP_LINEAR,[Qe]:i.LINEAR,[Ds]:i.LINEAR_MIPMAP_NEAREST,[On]:i.LINEAR_MIPMAP_LINEAR},le={[Jl]:i.NEVER,[sc]:i.ALWAYS,[Ql]:i.LESS,[Go]:i.LEQUAL,[ec]:i.EQUAL,[ic]:i.GEQUAL,[tc]:i.GREATER,[nc]:i.NOTEQUAL};function ge(A,x){if(x.type===Yt&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===Qe||x.magFilter===Ds||x.magFilter===Oi||x.magFilter===On||x.minFilter===Qe||x.minFilter===Ds||x.minFilter===Oi||x.minFilter===On)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,H[x.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,H[x.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,H[x.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,oe[x.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,oe[x.minFilter]),x.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,le[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===ft||x.minFilter!==Oi&&x.minFilter!==On||x.type===Yt&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const N=e.get("EXT_texture_filter_anisotropic");i.texParameterf(A,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function ke(A,x){let N=!1;A.__webglInit===void 0&&(A.__webglInit=!0,x.addEventListener("dispose",L));const X=x.source;let Z=p.get(X);Z===void 0&&(Z={},p.set(X,Z));const q=I(x);if(q!==A.__cacheKey){Z[q]===void 0&&(Z[q]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,N=!0),Z[q].usedTimes++;const ve=Z[A.__cacheKey];ve!==void 0&&(Z[A.__cacheKey].usedTimes--,ve.usedTimes===0&&U(x)),A.__cacheKey=q,A.__webglTexture=Z[q].texture}return N}function qe(A,x,N){let X=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(X=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(X=i.TEXTURE_3D);const Z=ke(A,x),q=x.source;t.bindTexture(X,A.__webglTexture,i.TEXTURE0+N);const ve=n.get(q);if(q.version!==ve.__version||Z===!0){t.activeTexture(i.TEXTURE0+N);const ne=We.getPrimaries(We.workingColorSpace),he=x.colorSpace===xn?null:We.getPrimaries(x.colorSpace),ze=x.colorSpace===xn||ne===he?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ze);let Q=_(x.image,!1,s.maxTextureSize);Q=$e(x,Q);const ue=r.convert(x.format,x.colorSpace),Te=r.convert(x.type);let Ae=T(x.internalFormat,ue,Te,x.colorSpace,x.isVideoTexture);ge(X,x);let de;const Ie=x.mipmaps,Ce=x.isVideoTexture!==!0,je=ve.__version===void 0||Z===!0,C=q.dataReady,re=E(x,Q);if(x.isDepthTexture)Ae=y(x.format===mi,x.type),je&&(Ce?t.texStorage2D(i.TEXTURE_2D,1,Ae,Q.width,Q.height):t.texImage2D(i.TEXTURE_2D,0,Ae,Q.width,Q.height,0,ue,Te,null));else if(x.isDataTexture)if(Ie.length>0){Ce&&je&&t.texStorage2D(i.TEXTURE_2D,re,Ae,Ie[0].width,Ie[0].height);for(let k=0,K=Ie.length;k<K;k++)de=Ie[k],Ce?C&&t.texSubImage2D(i.TEXTURE_2D,k,0,0,de.width,de.height,ue,Te,de.data):t.texImage2D(i.TEXTURE_2D,k,Ae,de.width,de.height,0,ue,Te,de.data);x.generateMipmaps=!1}else Ce?(je&&t.texStorage2D(i.TEXTURE_2D,re,Ae,Q.width,Q.height),C&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Q.width,Q.height,ue,Te,Q.data)):t.texImage2D(i.TEXTURE_2D,0,Ae,Q.width,Q.height,0,ue,Te,Q.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Ce&&je&&t.texStorage3D(i.TEXTURE_2D_ARRAY,re,Ae,Ie[0].width,Ie[0].height,Q.depth);for(let k=0,K=Ie.length;k<K;k++)if(de=Ie[k],x.format!==Lt)if(ue!==null)if(Ce){if(C)if(x.layerUpdates.size>0){const ie=po(de.width,de.height,x.format,x.type);for(const ae of x.layerUpdates){const Oe=de.data.subarray(ae*ie/de.data.BYTES_PER_ELEMENT,(ae+1)*ie/de.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,k,0,0,ae,de.width,de.height,1,ue,Oe,0,0)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,k,0,0,0,de.width,de.height,Q.depth,ue,de.data,0,0)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,k,Ae,de.width,de.height,Q.depth,0,de.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ce?C&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,k,0,0,0,de.width,de.height,Q.depth,ue,Te,de.data):t.texImage3D(i.TEXTURE_2D_ARRAY,k,Ae,de.width,de.height,Q.depth,0,ue,Te,de.data)}else{Ce&&je&&t.texStorage2D(i.TEXTURE_2D,re,Ae,Ie[0].width,Ie[0].height);for(let k=0,K=Ie.length;k<K;k++)de=Ie[k],x.format!==Lt?ue!==null?Ce?C&&t.compressedTexSubImage2D(i.TEXTURE_2D,k,0,0,de.width,de.height,ue,de.data):t.compressedTexImage2D(i.TEXTURE_2D,k,Ae,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ce?C&&t.texSubImage2D(i.TEXTURE_2D,k,0,0,de.width,de.height,ue,Te,de.data):t.texImage2D(i.TEXTURE_2D,k,Ae,de.width,de.height,0,ue,Te,de.data)}else if(x.isDataArrayTexture)if(Ce){if(je&&t.texStorage3D(i.TEXTURE_2D_ARRAY,re,Ae,Q.width,Q.height,Q.depth),C)if(x.layerUpdates.size>0){const k=po(Q.width,Q.height,x.format,x.type);for(const K of x.layerUpdates){const ie=Q.data.subarray(K*k/Q.data.BYTES_PER_ELEMENT,(K+1)*k/Q.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,K,Q.width,Q.height,1,ue,Te,ie)}x.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,ue,Te,Q.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ae,Q.width,Q.height,Q.depth,0,ue,Te,Q.data);else if(x.isData3DTexture)Ce?(je&&t.texStorage3D(i.TEXTURE_3D,re,Ae,Q.width,Q.height,Q.depth),C&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,ue,Te,Q.data)):t.texImage3D(i.TEXTURE_3D,0,Ae,Q.width,Q.height,Q.depth,0,ue,Te,Q.data);else if(x.isFramebufferTexture){if(je)if(Ce)t.texStorage2D(i.TEXTURE_2D,re,Ae,Q.width,Q.height);else{let k=Q.width,K=Q.height;for(let ie=0;ie<re;ie++)t.texImage2D(i.TEXTURE_2D,ie,Ae,k,K,0,ue,Te,null),k>>=1,K>>=1}}else if(Ie.length>0){if(Ce&&je){const k=be(Ie[0]);t.texStorage2D(i.TEXTURE_2D,re,Ae,k.width,k.height)}for(let k=0,K=Ie.length;k<K;k++)de=Ie[k],Ce?C&&t.texSubImage2D(i.TEXTURE_2D,k,0,0,ue,Te,de):t.texImage2D(i.TEXTURE_2D,k,Ae,ue,Te,de);x.generateMipmaps=!1}else if(Ce){if(je){const k=be(Q);t.texStorage2D(i.TEXTURE_2D,re,Ae,k.width,k.height)}C&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ue,Te,Q)}else t.texImage2D(i.TEXTURE_2D,0,Ae,ue,Te,Q);u(x)&&m(X),ve.__version=q.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function W(A,x,N){if(x.image.length!==6)return;const X=ke(A,x),Z=x.source;t.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+N);const q=n.get(Z);if(Z.version!==q.__version||X===!0){t.activeTexture(i.TEXTURE0+N);const ve=We.getPrimaries(We.workingColorSpace),ne=x.colorSpace===xn?null:We.getPrimaries(x.colorSpace),he=x.colorSpace===xn||ve===ne?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,he);const ze=x.isCompressedTexture||x.image[0].isCompressedTexture,Q=x.image[0]&&x.image[0].isDataTexture,ue=[];for(let K=0;K<6;K++)!ze&&!Q?ue[K]=_(x.image[K],!0,s.maxCubemapSize):ue[K]=Q?x.image[K].image:x.image[K],ue[K]=$e(x,ue[K]);const Te=ue[0],Ae=r.convert(x.format,x.colorSpace),de=r.convert(x.type),Ie=T(x.internalFormat,Ae,de,x.colorSpace),Ce=x.isVideoTexture!==!0,je=q.__version===void 0||X===!0,C=Z.dataReady;let re=E(x,Te);ge(i.TEXTURE_CUBE_MAP,x);let k;if(ze){Ce&&je&&t.texStorage2D(i.TEXTURE_CUBE_MAP,re,Ie,Te.width,Te.height);for(let K=0;K<6;K++){k=ue[K].mipmaps;for(let ie=0;ie<k.length;ie++){const ae=k[ie];x.format!==Lt?Ae!==null?Ce?C&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ie,0,0,ae.width,ae.height,Ae,ae.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ie,Ie,ae.width,ae.height,0,ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ce?C&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ie,0,0,ae.width,ae.height,Ae,de,ae.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ie,Ie,ae.width,ae.height,0,Ae,de,ae.data)}}}else{if(k=x.mipmaps,Ce&&je){k.length>0&&re++;const K=be(ue[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,re,Ie,K.width,K.height)}for(let K=0;K<6;K++)if(Q){Ce?C&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,ue[K].width,ue[K].height,Ae,de,ue[K].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Ie,ue[K].width,ue[K].height,0,Ae,de,ue[K].data);for(let ie=0;ie<k.length;ie++){const Oe=k[ie].image[K].image;Ce?C&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ie+1,0,0,Oe.width,Oe.height,Ae,de,Oe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ie+1,Ie,Oe.width,Oe.height,0,Ae,de,Oe.data)}}else{Ce?C&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Ae,de,ue[K]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Ie,Ae,de,ue[K]);for(let ie=0;ie<k.length;ie++){const ae=k[ie];Ce?C&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ie+1,0,0,Ae,de,ae.image[K]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ie+1,Ie,Ae,de,ae.image[K])}}}u(x)&&m(i.TEXTURE_CUBE_MAP),q.__version=Z.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function J(A,x,N,X,Z,q){const ve=r.convert(N.format,N.colorSpace),ne=r.convert(N.type),he=T(N.internalFormat,ve,ne,N.colorSpace);if(!n.get(x).__hasExternalTextures){const Q=Math.max(1,x.width>>q),ue=Math.max(1,x.height>>q);Z===i.TEXTURE_3D||Z===i.TEXTURE_2D_ARRAY?t.texImage3D(Z,q,he,Q,ue,x.depth,0,ve,ne,null):t.texImage2D(Z,q,he,Q,ue,0,ve,ne,null)}t.bindFramebuffer(i.FRAMEBUFFER,A),Be(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,X,Z,n.get(N).__webglTexture,0,Ue(x)):(Z===i.TEXTURE_2D||Z>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,X,Z,n.get(N).__webglTexture,q),t.bindFramebuffer(i.FRAMEBUFFER,null)}function pe(A,x,N){if(i.bindRenderbuffer(i.RENDERBUFFER,A),x.depthBuffer){const X=x.depthTexture,Z=X&&X.isDepthTexture?X.type:null,q=y(x.stencilBuffer,Z),ve=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ne=Ue(x);Be(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ne,q,x.width,x.height):N?i.renderbufferStorageMultisample(i.RENDERBUFFER,ne,q,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,q,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ve,i.RENDERBUFFER,A)}else{const X=x.textures;for(let Z=0;Z<X.length;Z++){const q=X[Z],ve=r.convert(q.format,q.colorSpace),ne=r.convert(q.type),he=T(q.internalFormat,ve,ne,q.colorSpace),ze=Ue(x);N&&Be(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ze,he,x.width,x.height):Be(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ze,he,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,he,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ce(A,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,A),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),V(x.depthTexture,0);const X=n.get(x.depthTexture).__webglTexture,Z=Ue(x);if(x.depthTexture.format===li)Be(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,X,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,X,0);else if(x.depthTexture.format===mi)Be(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,X,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,X,0);else throw new Error("Unknown depthTexture format")}function Re(A){const x=n.get(A),N=A.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==A.depthTexture){const X=A.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),X){const Z=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,X.removeEventListener("dispose",Z)};X.addEventListener("dispose",Z),x.__depthDisposeCallback=Z}x.__boundDepthTexture=X}if(A.depthTexture&&!x.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");ce(x.__webglFramebuffer,A)}else if(N){x.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[X]),x.__webglDepthbuffer[X]===void 0)x.__webglDepthbuffer[X]=i.createRenderbuffer(),pe(x.__webglDepthbuffer[X],A,!1);else{const Z=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,q=x.__webglDepthbuffer[X];i.bindRenderbuffer(i.RENDERBUFFER,q),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,q)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),pe(x.__webglDepthbuffer,A,!1);else{const X=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Z=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Z),i.framebufferRenderbuffer(i.FRAMEBUFFER,X,i.RENDERBUFFER,Z)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Se(A,x,N){const X=n.get(A);x!==void 0&&J(X.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),N!==void 0&&Re(A)}function Ne(A){const x=A.texture,N=n.get(A),X=n.get(x);A.addEventListener("dispose",w);const Z=A.textures,q=A.isWebGLCubeRenderTarget===!0,ve=Z.length>1;if(ve||(X.__webglTexture===void 0&&(X.__webglTexture=i.createTexture()),X.__version=x.version,a.memory.textures++),q){N.__webglFramebuffer=[];for(let ne=0;ne<6;ne++)if(x.mipmaps&&x.mipmaps.length>0){N.__webglFramebuffer[ne]=[];for(let he=0;he<x.mipmaps.length;he++)N.__webglFramebuffer[ne][he]=i.createFramebuffer()}else N.__webglFramebuffer[ne]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){N.__webglFramebuffer=[];for(let ne=0;ne<x.mipmaps.length;ne++)N.__webglFramebuffer[ne]=i.createFramebuffer()}else N.__webglFramebuffer=i.createFramebuffer();if(ve)for(let ne=0,he=Z.length;ne<he;ne++){const ze=n.get(Z[ne]);ze.__webglTexture===void 0&&(ze.__webglTexture=i.createTexture(),a.memory.textures++)}if(A.samples>0&&Be(A)===!1){N.__webglMultisampledFramebuffer=i.createFramebuffer(),N.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let ne=0;ne<Z.length;ne++){const he=Z[ne];N.__webglColorRenderbuffer[ne]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,N.__webglColorRenderbuffer[ne]);const ze=r.convert(he.format,he.colorSpace),Q=r.convert(he.type),ue=T(he.internalFormat,ze,Q,he.colorSpace,A.isXRRenderTarget===!0),Te=Ue(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,Te,ue,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ne,i.RENDERBUFFER,N.__webglColorRenderbuffer[ne])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(N.__webglDepthRenderbuffer=i.createRenderbuffer(),pe(N.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(q){t.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture),ge(i.TEXTURE_CUBE_MAP,x);for(let ne=0;ne<6;ne++)if(x.mipmaps&&x.mipmaps.length>0)for(let he=0;he<x.mipmaps.length;he++)J(N.__webglFramebuffer[ne][he],A,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,he);else J(N.__webglFramebuffer[ne],A,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0);u(x)&&m(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ve){for(let ne=0,he=Z.length;ne<he;ne++){const ze=Z[ne],Q=n.get(ze);t.bindTexture(i.TEXTURE_2D,Q.__webglTexture),ge(i.TEXTURE_2D,ze),J(N.__webglFramebuffer,A,ze,i.COLOR_ATTACHMENT0+ne,i.TEXTURE_2D,0),u(ze)&&m(i.TEXTURE_2D)}t.unbindTexture()}else{let ne=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ne=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ne,X.__webglTexture),ge(ne,x),x.mipmaps&&x.mipmaps.length>0)for(let he=0;he<x.mipmaps.length;he++)J(N.__webglFramebuffer[he],A,x,i.COLOR_ATTACHMENT0,ne,he);else J(N.__webglFramebuffer,A,x,i.COLOR_ATTACHMENT0,ne,0);u(x)&&m(ne),t.unbindTexture()}A.depthBuffer&&Re(A)}function Ke(A){const x=A.textures;for(let N=0,X=x.length;N<X;N++){const Z=x[N];if(u(Z)){const q=A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,ve=n.get(Z).__webglTexture;t.bindTexture(q,ve),m(q),t.unbindTexture()}}}const Fe=[],R=[];function Et(A){if(A.samples>0){if(Be(A)===!1){const x=A.textures,N=A.width,X=A.height;let Z=i.COLOR_BUFFER_BIT;const q=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ve=n.get(A),ne=x.length>1;if(ne)for(let he=0;he<x.length;he++)t.bindFramebuffer(i.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+he,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ve.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+he,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ve.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ve.__webglFramebuffer);for(let he=0;he<x.length;he++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(Z|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(Z|=i.STENCIL_BUFFER_BIT)),ne){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ve.__webglColorRenderbuffer[he]);const ze=n.get(x[he]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ze,0)}i.blitFramebuffer(0,0,N,X,0,0,N,X,Z,i.NEAREST),l===!0&&(Fe.length=0,R.length=0,Fe.push(i.COLOR_ATTACHMENT0+he),A.depthBuffer&&A.resolveDepthBuffer===!1&&(Fe.push(q),R.push(q),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,R)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Fe))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ne)for(let he=0;he<x.length;he++){t.bindFramebuffer(i.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+he,i.RENDERBUFFER,ve.__webglColorRenderbuffer[he]);const ze=n.get(x[he]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ve.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+he,i.TEXTURE_2D,ze,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ve.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){const x=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function Ue(A){return Math.min(s.maxSamples,A.samples)}function Be(A){const x=n.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Ee(A){const x=a.render.frame;h.get(A)!==x&&(h.set(A,x),A.update())}function $e(A,x){const N=A.colorSpace,X=A.format,Z=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||N!==An&&N!==xn&&(We.getTransfer(N)===Je?(X!==Lt||Z!==Gt)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",N)),x}function be(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=S,this.setTexture2D=V,this.setTexture2DArray=j,this.setTexture3D=G,this.setTextureCube=$,this.rebindTextures=Se,this.setupRenderTarget=Ne,this.updateRenderTargetMipmap=Ke,this.updateMultisampleRenderTarget=Et,this.setupDepthRenderbuffer=Re,this.setupFrameBufferTexture=J,this.useMultisampledRTT=Be}function Ap(i,e){function t(n,s=xn){let r;const a=We.getTransfer(s);if(n===Gt)return i.UNSIGNED_BYTE;if(n===na)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ia)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Io)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Lo)return i.BYTE;if(n===Uo)return i.SHORT;if(n===Ri)return i.UNSIGNED_SHORT;if(n===ta)return i.INT;if(n===zn)return i.UNSIGNED_INT;if(n===Yt)return i.FLOAT;if(n===Hn)return i.HALF_FLOAT;if(n===No)return i.ALPHA;if(n===Fo)return i.RGB;if(n===Lt)return i.RGBA;if(n===Oo)return i.LUMINANCE;if(n===Bo)return i.LUMINANCE_ALPHA;if(n===li)return i.DEPTH_COMPONENT;if(n===mi)return i.DEPTH_STENCIL;if(n===zo)return i.RED;if(n===sa)return i.RED_INTEGER;if(n===ko)return i.RG;if(n===ra)return i.RG_INTEGER;if(n===aa)return i.RGBA_INTEGER;if(n===ls||n===cs||n===hs||n===us)if(a===Je)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ls)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===cs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===hs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===us)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ls)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===cs)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===hs)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===us)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===yr||n===Er||n===Tr||n===Ar)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===yr)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Er)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Tr)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ar)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===br||n===wr||n===Rr)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===br||n===wr)return a===Je?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Rr)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Cr||n===Pr||n===Dr||n===Lr||n===Ur||n===Ir||n===Nr||n===Fr||n===Or||n===Br||n===zr||n===kr||n===Hr||n===Gr)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Cr)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Pr)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Dr)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Lr)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ur)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ir)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Nr)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Fr)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Or)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Br)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===zr)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===kr)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Hr)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Gr)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ds||n===Vr||n===Wr)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===ds)return a===Je?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Vr)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Wr)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ho||n===qr||n===Xr||n===Yr)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===ds)return r.COMPRESSED_RED_RGTC1_EXT;if(n===qr)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Xr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Yr)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===pi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class bp extends Dt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ai extends yt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const wp={type:"move"};class ar{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ai,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ai,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ai,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const _ of e.hand.values()){const u=t.getJointPose(_,n),m=this._getHandJoint(c,_);u!==null&&(m.matrix.fromArray(u.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=u.radius),m.visible=u!==null}const h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],p=h.position.distanceTo(f.position),d=.02,g=.005;c.inputState.pinching&&p>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&p<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(wp)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new ai;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Rp=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Cp=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Pp{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const s=new _t,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Rt({vertexShader:Rp,fragmentShader:Cp,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ut(new kn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Dp extends vi{constructor(e,t){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,f=null,p=null,d=null,g=null;const _=new Pp,u=t.getContextAttributes();let m=null,T=null;const y=[],E=[],L=new Le;let w=null;const b=new Dt;b.layers.enable(1),b.viewport=new we;const U=new Dt;U.layers.enable(2),U.viewport=new we;const Y=[b,U],v=new bp;v.layers.enable(1),v.layers.enable(2);let S=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let J=y[W];return J===void 0&&(J=new ar,y[W]=J),J.getTargetRaySpace()},this.getControllerGrip=function(W){let J=y[W];return J===void 0&&(J=new ar,y[W]=J),J.getGripSpace()},this.getHand=function(W){let J=y[W];return J===void 0&&(J=new ar,y[W]=J),J.getHandSpace()};function I(W){const J=E.indexOf(W.inputSource);if(J===-1)return;const pe=y[J];pe!==void 0&&(pe.update(W.inputSource,W.frame,c||a),pe.dispatchEvent({type:W.type,data:W.inputSource}))}function V(){s.removeEventListener("select",I),s.removeEventListener("selectstart",I),s.removeEventListener("selectend",I),s.removeEventListener("squeeze",I),s.removeEventListener("squeezestart",I),s.removeEventListener("squeezeend",I),s.removeEventListener("end",V),s.removeEventListener("inputsourceschange",j);for(let W=0;W<y.length;W++){const J=E[W];J!==null&&(E[W]=null,y[W].disconnect(J))}S=null,z=null,_.reset(),e.setRenderTarget(m),d=null,p=null,f=null,s=null,T=null,qe.stop(),n.isPresenting=!1,e.setPixelRatio(w),e.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){r=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){o=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return p!==null?p:d},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(W){if(s=W,s!==null){if(m=e.getRenderTarget(),s.addEventListener("select",I),s.addEventListener("selectstart",I),s.addEventListener("selectend",I),s.addEventListener("squeeze",I),s.addEventListener("squeezestart",I),s.addEventListener("squeezeend",I),s.addEventListener("end",V),s.addEventListener("inputsourceschange",j),u.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(L),s.renderState.layers===void 0){const J={antialias:u.antialias,alpha:!0,depth:u.depth,stencil:u.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,J),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),T=new at(d.framebufferWidth,d.framebufferHeight,{format:Lt,type:Gt,colorSpace:e.outputColorSpace,stencilBuffer:u.stencil})}else{let J=null,pe=null,ce=null;u.depth&&(ce=u.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,J=u.stencil?mi:li,pe=u.stencil?pi:zn);const Re={colorFormat:t.RGBA8,depthFormat:ce,scaleFactor:r};f=new XRWebGLBinding(s,t),p=f.createProjectionLayer(Re),s.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),T=new at(p.textureWidth,p.textureHeight,{format:Lt,type:Gt,depthTexture:new tl(p.textureWidth,p.textureHeight,pe,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:u.stencil,colorSpace:e.outputColorSpace,samples:u.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),qe.setContext(s),qe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function j(W){for(let J=0;J<W.removed.length;J++){const pe=W.removed[J],ce=E.indexOf(pe);ce>=0&&(E[ce]=null,y[ce].disconnect(pe))}for(let J=0;J<W.added.length;J++){const pe=W.added[J];let ce=E.indexOf(pe);if(ce===-1){for(let Se=0;Se<y.length;Se++)if(Se>=E.length){E.push(pe),ce=Se;break}else if(E[Se]===null){E[Se]=pe,ce=Se;break}if(ce===-1)break}const Re=y[ce];Re&&Re.connect(pe)}}const G=new F,$=new F;function H(W,J,pe){G.setFromMatrixPosition(J.matrixWorld),$.setFromMatrixPosition(pe.matrixWorld);const ce=G.distanceTo($),Re=J.projectionMatrix.elements,Se=pe.projectionMatrix.elements,Ne=Re[14]/(Re[10]-1),Ke=Re[14]/(Re[10]+1),Fe=(Re[9]+1)/Re[5],R=(Re[9]-1)/Re[5],Et=(Re[8]-1)/Re[0],Ue=(Se[8]+1)/Se[0],Be=Ne*Et,Ee=Ne*Ue,$e=ce/(-Et+Ue),be=$e*-Et;if(J.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(be),W.translateZ($e),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),Re[10]===-1)W.projectionMatrix.copy(J.projectionMatrix),W.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{const A=Ne+$e,x=Ke+$e,N=Be-be,X=Ee+(ce-be),Z=Fe*Ke/x*A,q=R*Ke/x*A;W.projectionMatrix.makePerspective(N,X,Z,q,A,x),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function oe(W,J){J===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(J.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(s===null)return;let J=W.near,pe=W.far;_.texture!==null&&(_.depthNear>0&&(J=_.depthNear),_.depthFar>0&&(pe=_.depthFar)),v.near=U.near=b.near=J,v.far=U.far=b.far=pe,(S!==v.near||z!==v.far)&&(s.updateRenderState({depthNear:v.near,depthFar:v.far}),S=v.near,z=v.far);const ce=W.parent,Re=v.cameras;oe(v,ce);for(let Se=0;Se<Re.length;Se++)oe(Re[Se],ce);Re.length===2?H(v,b,U):v.projectionMatrix.copy(b.projectionMatrix),le(W,v,ce)};function le(W,J,pe){pe===null?W.matrix.copy(J.matrixWorld):(W.matrix.copy(pe.matrixWorld),W.matrix.invert(),W.matrix.multiply(J.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(J.projectionMatrix),W.projectionMatrixInverse.copy(J.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=Ci*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(p===null&&d===null))return l},this.setFoveation=function(W){l=W,p!==null&&(p.fixedFoveation=W),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=W)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(v)};let ge=null;function ke(W,J){if(h=J.getViewerPose(c||a),g=J,h!==null){const pe=h.views;d!==null&&(e.setRenderTargetFramebuffer(T,d.framebuffer),e.setRenderTarget(T));let ce=!1;pe.length!==v.cameras.length&&(v.cameras.length=0,ce=!0);for(let Se=0;Se<pe.length;Se++){const Ne=pe[Se];let Ke=null;if(d!==null)Ke=d.getViewport(Ne);else{const R=f.getViewSubImage(p,Ne);Ke=R.viewport,Se===0&&(e.setRenderTargetTextures(T,R.colorTexture,p.ignoreDepthValues?void 0:R.depthStencilTexture),e.setRenderTarget(T))}let Fe=Y[Se];Fe===void 0&&(Fe=new Dt,Fe.layers.enable(Se),Fe.viewport=new we,Y[Se]=Fe),Fe.matrix.fromArray(Ne.transform.matrix),Fe.matrix.decompose(Fe.position,Fe.quaternion,Fe.scale),Fe.projectionMatrix.fromArray(Ne.projectionMatrix),Fe.projectionMatrixInverse.copy(Fe.projectionMatrix).invert(),Fe.viewport.set(Ke.x,Ke.y,Ke.width,Ke.height),Se===0&&(v.matrix.copy(Fe.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),ce===!0&&v.cameras.push(Fe)}const Re=s.enabledFeatures;if(Re&&Re.includes("depth-sensing")){const Se=f.getDepthInformation(pe[0]);Se&&Se.isValid&&Se.texture&&_.init(e,Se,s.renderState)}}for(let pe=0;pe<y.length;pe++){const ce=E[pe],Re=y[pe];ce!==null&&Re!==void 0&&Re.update(ce,J,c||a)}ge&&ge(W,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),g=null}const qe=new el;qe.setAnimationLoop(ke),this.setAnimationLoop=function(W){ge=W},this.dispose=function(){}}}const Un=new hn,Lp=new tt;function Up(i,e){function t(u,m){u.matrixAutoUpdate===!0&&u.updateMatrix(),m.value.copy(u.matrix)}function n(u,m){m.color.getRGB(u.fogColor.value,$o(i)),m.isFog?(u.fogNear.value=m.near,u.fogFar.value=m.far):m.isFogExp2&&(u.fogDensity.value=m.density)}function s(u,m,T,y,E){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(u,m):m.isMeshToonMaterial?(r(u,m),f(u,m)):m.isMeshPhongMaterial?(r(u,m),h(u,m)):m.isMeshStandardMaterial?(r(u,m),p(u,m),m.isMeshPhysicalMaterial&&d(u,m,E)):m.isMeshMatcapMaterial?(r(u,m),g(u,m)):m.isMeshDepthMaterial?r(u,m):m.isMeshDistanceMaterial?(r(u,m),_(u,m)):m.isMeshNormalMaterial?r(u,m):m.isLineBasicMaterial?(a(u,m),m.isLineDashedMaterial&&o(u,m)):m.isPointsMaterial?l(u,m,T,y):m.isSpriteMaterial?c(u,m):m.isShadowMaterial?(u.color.value.copy(m.color),u.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(u,m){u.opacity.value=m.opacity,m.color&&u.diffuse.value.copy(m.color),m.emissive&&u.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(u.map.value=m.map,t(m.map,u.mapTransform)),m.alphaMap&&(u.alphaMap.value=m.alphaMap,t(m.alphaMap,u.alphaMapTransform)),m.bumpMap&&(u.bumpMap.value=m.bumpMap,t(m.bumpMap,u.bumpMapTransform),u.bumpScale.value=m.bumpScale,m.side===St&&(u.bumpScale.value*=-1)),m.normalMap&&(u.normalMap.value=m.normalMap,t(m.normalMap,u.normalMapTransform),u.normalScale.value.copy(m.normalScale),m.side===St&&u.normalScale.value.negate()),m.displacementMap&&(u.displacementMap.value=m.displacementMap,t(m.displacementMap,u.displacementMapTransform),u.displacementScale.value=m.displacementScale,u.displacementBias.value=m.displacementBias),m.emissiveMap&&(u.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,u.emissiveMapTransform)),m.specularMap&&(u.specularMap.value=m.specularMap,t(m.specularMap,u.specularMapTransform)),m.alphaTest>0&&(u.alphaTest.value=m.alphaTest);const T=e.get(m),y=T.envMap,E=T.envMapRotation;y&&(u.envMap.value=y,Un.copy(E),Un.x*=-1,Un.y*=-1,Un.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Un.y*=-1,Un.z*=-1),u.envMapRotation.value.setFromMatrix4(Lp.makeRotationFromEuler(Un)),u.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,u.reflectivity.value=m.reflectivity,u.ior.value=m.ior,u.refractionRatio.value=m.refractionRatio),m.lightMap&&(u.lightMap.value=m.lightMap,u.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,u.lightMapTransform)),m.aoMap&&(u.aoMap.value=m.aoMap,u.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,u.aoMapTransform))}function a(u,m){u.diffuse.value.copy(m.color),u.opacity.value=m.opacity,m.map&&(u.map.value=m.map,t(m.map,u.mapTransform))}function o(u,m){u.dashSize.value=m.dashSize,u.totalSize.value=m.dashSize+m.gapSize,u.scale.value=m.scale}function l(u,m,T,y){u.diffuse.value.copy(m.color),u.opacity.value=m.opacity,u.size.value=m.size*T,u.scale.value=y*.5,m.map&&(u.map.value=m.map,t(m.map,u.uvTransform)),m.alphaMap&&(u.alphaMap.value=m.alphaMap,t(m.alphaMap,u.alphaMapTransform)),m.alphaTest>0&&(u.alphaTest.value=m.alphaTest)}function c(u,m){u.diffuse.value.copy(m.color),u.opacity.value=m.opacity,u.rotation.value=m.rotation,m.map&&(u.map.value=m.map,t(m.map,u.mapTransform)),m.alphaMap&&(u.alphaMap.value=m.alphaMap,t(m.alphaMap,u.alphaMapTransform)),m.alphaTest>0&&(u.alphaTest.value=m.alphaTest)}function h(u,m){u.specular.value.copy(m.specular),u.shininess.value=Math.max(m.shininess,1e-4)}function f(u,m){m.gradientMap&&(u.gradientMap.value=m.gradientMap)}function p(u,m){u.metalness.value=m.metalness,m.metalnessMap&&(u.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,u.metalnessMapTransform)),u.roughness.value=m.roughness,m.roughnessMap&&(u.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,u.roughnessMapTransform)),m.envMap&&(u.envMapIntensity.value=m.envMapIntensity)}function d(u,m,T){u.ior.value=m.ior,m.sheen>0&&(u.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),u.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(u.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,u.sheenColorMapTransform)),m.sheenRoughnessMap&&(u.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,u.sheenRoughnessMapTransform))),m.clearcoat>0&&(u.clearcoat.value=m.clearcoat,u.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(u.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,u.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(u.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,u.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(u.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,u.clearcoatNormalMapTransform),u.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===St&&u.clearcoatNormalScale.value.negate())),m.dispersion>0&&(u.dispersion.value=m.dispersion),m.iridescence>0&&(u.iridescence.value=m.iridescence,u.iridescenceIOR.value=m.iridescenceIOR,u.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],u.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(u.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,u.iridescenceMapTransform)),m.iridescenceThicknessMap&&(u.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,u.iridescenceThicknessMapTransform))),m.transmission>0&&(u.transmission.value=m.transmission,u.transmissionSamplerMap.value=T.texture,u.transmissionSamplerSize.value.set(T.width,T.height),m.transmissionMap&&(u.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,u.transmissionMapTransform)),u.thickness.value=m.thickness,m.thicknessMap&&(u.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,u.thicknessMapTransform)),u.attenuationDistance.value=m.attenuationDistance,u.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(u.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(u.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,u.anisotropyMapTransform))),u.specularIntensity.value=m.specularIntensity,u.specularColor.value.copy(m.specularColor),m.specularColorMap&&(u.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,u.specularColorMapTransform)),m.specularIntensityMap&&(u.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,u.specularIntensityMapTransform))}function g(u,m){m.matcap&&(u.matcap.value=m.matcap)}function _(u,m){const T=e.get(m).light;u.referencePosition.value.setFromMatrixPosition(T.matrixWorld),u.nearDistance.value=T.shadow.camera.near,u.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Ip(i,e,t,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(T,y){const E=y.program;n.uniformBlockBinding(T,E)}function c(T,y){let E=s[T.id];E===void 0&&(g(T),E=h(T),s[T.id]=E,T.addEventListener("dispose",u));const L=y.program;n.updateUBOMapping(T,L);const w=e.render.frame;r[T.id]!==w&&(p(T),r[T.id]=w)}function h(T){const y=f();T.__bindingPointIndex=y;const E=i.createBuffer(),L=T.__size,w=T.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,L,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,E),E}function f(){for(let T=0;T<o;T++)if(a.indexOf(T)===-1)return a.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(T){const y=s[T.id],E=T.uniforms,L=T.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let w=0,b=E.length;w<b;w++){const U=Array.isArray(E[w])?E[w]:[E[w]];for(let Y=0,v=U.length;Y<v;Y++){const S=U[Y];if(d(S,w,Y,L)===!0){const z=S.__offset,I=Array.isArray(S.value)?S.value:[S.value];let V=0;for(let j=0;j<I.length;j++){const G=I[j],$=_(G);typeof G=="number"||typeof G=="boolean"?(S.__data[0]=G,i.bufferSubData(i.UNIFORM_BUFFER,z+V,S.__data)):G.isMatrix3?(S.__data[0]=G.elements[0],S.__data[1]=G.elements[1],S.__data[2]=G.elements[2],S.__data[3]=0,S.__data[4]=G.elements[3],S.__data[5]=G.elements[4],S.__data[6]=G.elements[5],S.__data[7]=0,S.__data[8]=G.elements[6],S.__data[9]=G.elements[7],S.__data[10]=G.elements[8],S.__data[11]=0):(G.toArray(S.__data,V),V+=$.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,z,S.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(T,y,E,L){const w=T.value,b=y+"_"+E;if(L[b]===void 0)return typeof w=="number"||typeof w=="boolean"?L[b]=w:L[b]=w.clone(),!0;{const U=L[b];if(typeof w=="number"||typeof w=="boolean"){if(U!==w)return L[b]=w,!0}else if(U.equals(w)===!1)return U.copy(w),!0}return!1}function g(T){const y=T.uniforms;let E=0;const L=16;for(let b=0,U=y.length;b<U;b++){const Y=Array.isArray(y[b])?y[b]:[y[b]];for(let v=0,S=Y.length;v<S;v++){const z=Y[v],I=Array.isArray(z.value)?z.value:[z.value];for(let V=0,j=I.length;V<j;V++){const G=I[V],$=_(G),H=E%L,oe=H%$.boundary,le=H+oe;E+=oe,le!==0&&L-le<$.storage&&(E+=L-le),z.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=E,E+=$.storage}}}const w=E%L;return w>0&&(E+=L-w),T.__size=E,T.__cache={},this}function _(T){const y={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(y.boundary=4,y.storage=4):T.isVector2?(y.boundary=8,y.storage=8):T.isVector3||T.isColor?(y.boundary=16,y.storage=12):T.isVector4?(y.boundary=16,y.storage=16):T.isMatrix3?(y.boundary=48,y.storage=48):T.isMatrix4?(y.boundary=64,y.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),y}function u(T){const y=T.target;y.removeEventListener("dispose",u);const E=a.indexOf(y.__bindingPointIndex);a.splice(E,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function m(){for(const T in s)i.deleteBuffer(s[T]);a=[],s={},r={}}return{bind:l,update:c,dispose:m}}class Np{constructor(e={}){const{canvas:t=Sc(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;const d=new Uint32Array(4),g=new Int32Array(4);let _=null,u=null;const m=[],T=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Vt,this.toneMapping=Sn,this.toneMappingExposure=1;const y=this;let E=!1,L=0,w=0,b=null,U=-1,Y=null;const v=new we,S=new we;let z=null;const I=new Ye(0);let V=0,j=t.width,G=t.height,$=1,H=null,oe=null;const le=new we(0,0,j,G),ge=new we(0,0,j,G);let ke=!1;const qe=new Qo;let W=!1,J=!1;const pe=new tt,ce=new tt,Re=new F,Se=new we,Ne={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ke=!1;function Fe(){return b===null?$:1}let R=n;function Et(M,P){return t.getContext(M,P)}try{const M={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Qr}`),t.addEventListener("webglcontextlost",K,!1),t.addEventListener("webglcontextrestored",ie,!1),t.addEventListener("webglcontextcreationerror",ae,!1),R===null){const P="webgl2";if(R=Et(P,M),R===null)throw Et(P)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let Ue,Be,Ee,$e,be,A,x,N,X,Z,q,ve,ne,he,ze,Q,ue,Te,Ae,de,Ie,Ce,je,C;function re(){Ue=new zd(R),Ue.init(),Ce=new Ap(R,Ue),Be=new Ud(R,Ue,e,Ce),Ee=new yp(R),Be.reverseDepthBuffer&&Ee.buffers.depth.setReversed(!0),$e=new Gd(R),be=new op,A=new Tp(R,Ue,Ee,be,Be,Ce,$e),x=new Nd(y),N=new Bd(y),X=new jc(R),je=new Dd(R,X),Z=new kd(R,X,$e,je),q=new Wd(R,Z,X,$e),Ae=new Vd(R,Be,A),Q=new Id(be),ve=new ap(y,x,N,Ue,Be,je,Q),ne=new Up(y,be),he=new cp,ze=new mp(Ue),Te=new Pd(y,x,N,Ee,q,p,l),ue=new Mp(y,q,Be),C=new Ip(R,$e,Be,Ee),de=new Ld(R,Ue,$e),Ie=new Hd(R,Ue,$e),$e.programs=ve.programs,y.capabilities=Be,y.extensions=Ue,y.properties=be,y.renderLists=he,y.shadowMap=ue,y.state=Ee,y.info=$e}re();const k=new Dp(y,R);this.xr=k,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const M=Ue.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=Ue.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(M){M!==void 0&&($=M,this.setSize(j,G,!1))},this.getSize=function(M){return M.set(j,G)},this.setSize=function(M,P,O=!0){if(k.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}j=M,G=P,t.width=Math.floor(M*$),t.height=Math.floor(P*$),O===!0&&(t.style.width=M+"px",t.style.height=P+"px"),this.setViewport(0,0,M,P)},this.getDrawingBufferSize=function(M){return M.set(j*$,G*$).floor()},this.setDrawingBufferSize=function(M,P,O){j=M,G=P,$=O,t.width=Math.floor(M*O),t.height=Math.floor(P*O),this.setViewport(0,0,M,P)},this.getCurrentViewport=function(M){return M.copy(v)},this.getViewport=function(M){return M.copy(le)},this.setViewport=function(M,P,O,B){M.isVector4?le.set(M.x,M.y,M.z,M.w):le.set(M,P,O,B),Ee.viewport(v.copy(le).multiplyScalar($).round())},this.getScissor=function(M){return M.copy(ge)},this.setScissor=function(M,P,O,B){M.isVector4?ge.set(M.x,M.y,M.z,M.w):ge.set(M,P,O,B),Ee.scissor(S.copy(ge).multiplyScalar($).round())},this.getScissorTest=function(){return ke},this.setScissorTest=function(M){Ee.setScissorTest(ke=M)},this.setOpaqueSort=function(M){H=M},this.setTransparentSort=function(M){oe=M},this.getClearColor=function(M){return M.copy(Te.getClearColor())},this.setClearColor=function(){Te.setClearColor.apply(Te,arguments)},this.getClearAlpha=function(){return Te.getClearAlpha()},this.setClearAlpha=function(){Te.setClearAlpha.apply(Te,arguments)},this.clear=function(M=!0,P=!0,O=!0){let B=0;if(M){let D=!1;if(b!==null){const ee=b.texture.format;D=ee===aa||ee===ra||ee===sa}if(D){const ee=b.texture.type,se=ee===Gt||ee===zn||ee===Ri||ee===pi||ee===na||ee===ia,fe=Te.getClearColor(),me=Te.getClearAlpha(),Me=fe.r,ye=fe.g,_e=fe.b;se?(d[0]=Me,d[1]=ye,d[2]=_e,d[3]=me,R.clearBufferuiv(R.COLOR,0,d)):(g[0]=Me,g[1]=ye,g[2]=_e,g[3]=me,R.clearBufferiv(R.COLOR,0,g))}else B|=R.COLOR_BUFFER_BIT}P&&(B|=R.DEPTH_BUFFER_BIT,R.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),O&&(B|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",K,!1),t.removeEventListener("webglcontextrestored",ie,!1),t.removeEventListener("webglcontextcreationerror",ae,!1),he.dispose(),ze.dispose(),be.dispose(),x.dispose(),N.dispose(),q.dispose(),je.dispose(),C.dispose(),ve.dispose(),k.dispose(),k.removeEventListener("sessionstart",da),k.removeEventListener("sessionend",fa),wn.stop()};function K(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function ie(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const M=$e.autoReset,P=ue.enabled,O=ue.autoUpdate,B=ue.needsUpdate,D=ue.type;re(),$e.autoReset=M,ue.enabled=P,ue.autoUpdate=O,ue.needsUpdate=B,ue.type=D}function ae(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Oe(M){const P=M.target;P.removeEventListener("dispose",Oe),it(P)}function it(M){xt(M),be.remove(M)}function xt(M){const P=be.get(M).programs;P!==void 0&&(P.forEach(function(O){ve.releaseProgram(O)}),M.isShaderMaterial&&ve.releaseShaderCache(M))}this.renderBufferDirect=function(M,P,O,B,D,ee){P===null&&(P=Ne);const se=D.isMesh&&D.matrixWorld.determinant()<0,fe=ml(M,P,O,B,D);Ee.setMaterial(B,se);let me=O.index,Me=1;if(B.wireframe===!0){if(me=Z.getWireframeAttribute(O),me===void 0)return;Me=2}const ye=O.drawRange,_e=O.attributes.position;let Xe=ye.start*Me,Ze=(ye.start+ye.count)*Me;ee!==null&&(Xe=Math.max(Xe,ee.start*Me),Ze=Math.min(Ze,(ee.start+ee.count)*Me)),me!==null?(Xe=Math.max(Xe,0),Ze=Math.min(Ze,me.count)):_e!=null&&(Xe=Math.max(Xe,0),Ze=Math.min(Ze,_e.count));const et=Ze-Xe;if(et<0||et===1/0)return;je.setup(D,B,fe,O,me);let Tt,Ge=de;if(me!==null&&(Tt=X.get(me),Ge=Ie,Ge.setIndex(Tt)),D.isMesh)B.wireframe===!0?(Ee.setLineWidth(B.wireframeLinewidth*Fe()),Ge.setMode(R.LINES)):Ge.setMode(R.TRIANGLES);else if(D.isLine){let xe=B.linewidth;xe===void 0&&(xe=1),Ee.setLineWidth(xe*Fe()),D.isLineSegments?Ge.setMode(R.LINES):D.isLineLoop?Ge.setMode(R.LINE_LOOP):Ge.setMode(R.LINE_STRIP)}else D.isPoints?Ge.setMode(R.POINTS):D.isSprite&&Ge.setMode(R.TRIANGLES);if(D.isBatchedMesh)if(D._multiDrawInstances!==null)Ge.renderMultiDrawInstances(D._multiDrawStarts,D._multiDrawCounts,D._multiDrawCount,D._multiDrawInstances);else if(Ue.get("WEBGL_multi_draw"))Ge.renderMultiDraw(D._multiDrawStarts,D._multiDrawCounts,D._multiDrawCount);else{const xe=D._multiDrawStarts,ht=D._multiDrawCounts,Ve=D._multiDrawCount,It=me?X.get(me).bytesPerElement:1,Gn=be.get(B).currentProgram.getUniforms();for(let At=0;At<Ve;At++)Gn.setValue(R,"_gl_DrawID",At),Ge.render(xe[At]/It,ht[At])}else if(D.isInstancedMesh)Ge.renderInstances(Xe,et,D.count);else if(O.isInstancedBufferGeometry){const xe=O._maxInstanceCount!==void 0?O._maxInstanceCount:1/0,ht=Math.min(O.instanceCount,xe);Ge.renderInstances(Xe,et,ht)}else Ge.render(Xe,et)};function He(M,P,O){M.transparent===!0&&M.side===qt&&M.forceSinglePass===!1?(M.side=St,M.needsUpdate=!0,Fi(M,P,O),M.side=Tn,M.needsUpdate=!0,Fi(M,P,O),M.side=qt):Fi(M,P,O)}this.compile=function(M,P,O=null){O===null&&(O=M),u=ze.get(O),u.init(P),T.push(u),O.traverseVisible(function(D){D.isLight&&D.layers.test(P.layers)&&(u.pushLight(D),D.castShadow&&u.pushShadow(D))}),M!==O&&M.traverseVisible(function(D){D.isLight&&D.layers.test(P.layers)&&(u.pushLight(D),D.castShadow&&u.pushShadow(D))}),u.setupLights();const B=new Set;return M.traverse(function(D){if(!(D.isMesh||D.isPoints||D.isLine||D.isSprite))return;const ee=D.material;if(ee)if(Array.isArray(ee))for(let se=0;se<ee.length;se++){const fe=ee[se];He(fe,O,D),B.add(fe)}else He(ee,O,D),B.add(ee)}),T.pop(),u=null,B},this.compileAsync=function(M,P,O=null){const B=this.compile(M,P,O);return new Promise(D=>{function ee(){if(B.forEach(function(se){be.get(se).currentProgram.isReady()&&B.delete(se)}),B.size===0){D(M);return}setTimeout(ee,10)}Ue.get("KHR_parallel_shader_compile")!==null?ee():setTimeout(ee,10)})};let Mt=null;function $t(M){Mt&&Mt(M)}function da(){wn.stop()}function fa(){wn.start()}const wn=new el;wn.setAnimationLoop($t),typeof self<"u"&&wn.setContext(self),this.setAnimationLoop=function(M){Mt=M,k.setAnimationLoop(M),M===null?wn.stop():wn.start()},k.addEventListener("sessionstart",da),k.addEventListener("sessionend",fa),this.render=function(M,P){if(P!==void 0&&P.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),P.parent===null&&P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),k.enabled===!0&&k.isPresenting===!0&&(k.cameraAutoUpdate===!0&&k.updateCamera(P),P=k.getCamera()),M.isScene===!0&&M.onBeforeRender(y,M,P,b),u=ze.get(M,T.length),u.init(P),T.push(u),ce.multiplyMatrices(P.projectionMatrix,P.matrixWorldInverse),qe.setFromProjectionMatrix(ce),J=this.localClippingEnabled,W=Q.init(this.clippingPlanes,J),_=he.get(M,m.length),_.init(),m.push(_),k.enabled===!0&&k.isPresenting===!0){const ee=y.xr.getDepthSensingMesh();ee!==null&&ws(ee,P,-1/0,y.sortObjects)}ws(M,P,0,y.sortObjects),_.finish(),y.sortObjects===!0&&_.sort(H,oe),Ke=k.enabled===!1||k.isPresenting===!1||k.hasDepthSensing()===!1,Ke&&Te.addToRenderList(_,M),this.info.render.frame++,W===!0&&Q.beginShadows();const O=u.state.shadowsArray;ue.render(O,M,P),W===!0&&Q.endShadows(),this.info.autoReset===!0&&this.info.reset();const B=_.opaque,D=_.transmissive;if(u.setupLights(),P.isArrayCamera){const ee=P.cameras;if(D.length>0)for(let se=0,fe=ee.length;se<fe;se++){const me=ee[se];ma(B,D,M,me)}Ke&&Te.render(M);for(let se=0,fe=ee.length;se<fe;se++){const me=ee[se];pa(_,M,me,me.viewport)}}else D.length>0&&ma(B,D,M,P),Ke&&Te.render(M),pa(_,M,P);b!==null&&(A.updateMultisampleRenderTarget(b),A.updateRenderTargetMipmap(b)),M.isScene===!0&&M.onAfterRender(y,M,P),je.resetDefaultState(),U=-1,Y=null,T.pop(),T.length>0?(u=T[T.length-1],W===!0&&Q.setGlobalState(y.clippingPlanes,u.state.camera)):u=null,m.pop(),m.length>0?_=m[m.length-1]:_=null};function ws(M,P,O,B){if(M.visible===!1)return;if(M.layers.test(P.layers)){if(M.isGroup)O=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(P);else if(M.isLight)u.pushLight(M),M.castShadow&&u.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||qe.intersectsSprite(M)){B&&Se.setFromMatrixPosition(M.matrixWorld).applyMatrix4(ce);const se=q.update(M),fe=M.material;fe.visible&&_.push(M,se,fe,O,Se.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||qe.intersectsObject(M))){const se=q.update(M),fe=M.material;if(B&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Se.copy(M.boundingSphere.center)):(se.boundingSphere===null&&se.computeBoundingSphere(),Se.copy(se.boundingSphere.center)),Se.applyMatrix4(M.matrixWorld).applyMatrix4(ce)),Array.isArray(fe)){const me=se.groups;for(let Me=0,ye=me.length;Me<ye;Me++){const _e=me[Me],Xe=fe[_e.materialIndex];Xe&&Xe.visible&&_.push(M,se,Xe,O,Se.z,_e)}}else fe.visible&&_.push(M,se,fe,O,Se.z,null)}}const ee=M.children;for(let se=0,fe=ee.length;se<fe;se++)ws(ee[se],P,O,B)}function pa(M,P,O,B){const D=M.opaque,ee=M.transmissive,se=M.transparent;u.setupLightsView(O),W===!0&&Q.setGlobalState(y.clippingPlanes,O),B&&Ee.viewport(v.copy(B)),D.length>0&&Ni(D,P,O),ee.length>0&&Ni(ee,P,O),se.length>0&&Ni(se,P,O),Ee.buffers.depth.setTest(!0),Ee.buffers.depth.setMask(!0),Ee.buffers.color.setMask(!0),Ee.setPolygonOffset(!1)}function ma(M,P,O,B){if((O.isScene===!0?O.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[B.id]===void 0&&(u.state.transmissionRenderTarget[B.id]=new at(1,1,{generateMipmaps:!0,type:Ue.has("EXT_color_buffer_half_float")||Ue.has("EXT_color_buffer_float")?Hn:Gt,minFilter:On,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:We.workingColorSpace}));const ee=u.state.transmissionRenderTarget[B.id],se=B.viewport||v;ee.setSize(se.z,se.w);const fe=y.getRenderTarget();y.setRenderTarget(ee),y.getClearColor(I),V=y.getClearAlpha(),V<1&&y.setClearColor(16777215,.5),y.clear(),Ke&&Te.render(O);const me=y.toneMapping;y.toneMapping=Sn;const Me=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),u.setupLightsView(B),W===!0&&Q.setGlobalState(y.clippingPlanes,B),Ni(M,O,B),A.updateMultisampleRenderTarget(ee),A.updateRenderTargetMipmap(ee),Ue.has("WEBGL_multisampled_render_to_texture")===!1){let ye=!1;for(let _e=0,Xe=P.length;_e<Xe;_e++){const Ze=P[_e],et=Ze.object,Tt=Ze.geometry,Ge=Ze.material,xe=Ze.group;if(Ge.side===qt&&et.layers.test(B.layers)){const ht=Ge.side;Ge.side=St,Ge.needsUpdate=!0,ga(et,O,B,Tt,Ge,xe),Ge.side=ht,Ge.needsUpdate=!0,ye=!0}}ye===!0&&(A.updateMultisampleRenderTarget(ee),A.updateRenderTargetMipmap(ee))}y.setRenderTarget(fe),y.setClearColor(I,V),Me!==void 0&&(B.viewport=Me),y.toneMapping=me}function Ni(M,P,O){const B=P.isScene===!0?P.overrideMaterial:null;for(let D=0,ee=M.length;D<ee;D++){const se=M[D],fe=se.object,me=se.geometry,Me=B===null?se.material:B,ye=se.group;fe.layers.test(O.layers)&&ga(fe,P,O,me,Me,ye)}}function ga(M,P,O,B,D,ee){M.onBeforeRender(y,P,O,B,D,ee),M.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),D.onBeforeRender(y,P,O,B,M,ee),D.transparent===!0&&D.side===qt&&D.forceSinglePass===!1?(D.side=St,D.needsUpdate=!0,y.renderBufferDirect(O,P,B,D,M,ee),D.side=Tn,D.needsUpdate=!0,y.renderBufferDirect(O,P,B,D,M,ee),D.side=qt):y.renderBufferDirect(O,P,B,D,M,ee),M.onAfterRender(y,P,O,B,D,ee)}function Fi(M,P,O){P.isScene!==!0&&(P=Ne);const B=be.get(M),D=u.state.lights,ee=u.state.shadowsArray,se=D.state.version,fe=ve.getParameters(M,D.state,ee,P,O),me=ve.getProgramCacheKey(fe);let Me=B.programs;B.environment=M.isMeshStandardMaterial?P.environment:null,B.fog=P.fog,B.envMap=(M.isMeshStandardMaterial?N:x).get(M.envMap||B.environment),B.envMapRotation=B.environment!==null&&M.envMap===null?P.environmentRotation:M.envMapRotation,Me===void 0&&(M.addEventListener("dispose",Oe),Me=new Map,B.programs=Me);let ye=Me.get(me);if(ye!==void 0){if(B.currentProgram===ye&&B.lightsStateVersion===se)return _a(M,fe),ye}else fe.uniforms=ve.getUniforms(M),M.onBeforeCompile(fe,y),ye=ve.acquireProgram(fe,me),Me.set(me,ye),B.uniforms=fe.uniforms;const _e=B.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(_e.clippingPlanes=Q.uniform),_a(M,fe),B.needsLights=vl(M),B.lightsStateVersion=se,B.needsLights&&(_e.ambientLightColor.value=D.state.ambient,_e.lightProbe.value=D.state.probe,_e.directionalLights.value=D.state.directional,_e.directionalLightShadows.value=D.state.directionalShadow,_e.spotLights.value=D.state.spot,_e.spotLightShadows.value=D.state.spotShadow,_e.rectAreaLights.value=D.state.rectArea,_e.ltc_1.value=D.state.rectAreaLTC1,_e.ltc_2.value=D.state.rectAreaLTC2,_e.pointLights.value=D.state.point,_e.pointLightShadows.value=D.state.pointShadow,_e.hemisphereLights.value=D.state.hemi,_e.directionalShadowMap.value=D.state.directionalShadowMap,_e.directionalShadowMatrix.value=D.state.directionalShadowMatrix,_e.spotShadowMap.value=D.state.spotShadowMap,_e.spotLightMatrix.value=D.state.spotLightMatrix,_e.spotLightMap.value=D.state.spotLightMap,_e.pointShadowMap.value=D.state.pointShadowMap,_e.pointShadowMatrix.value=D.state.pointShadowMatrix),B.currentProgram=ye,B.uniformsList=null,ye}function va(M){if(M.uniformsList===null){const P=M.currentProgram.getUniforms();M.uniformsList=ps.seqWithValue(P.seq,M.uniforms)}return M.uniformsList}function _a(M,P){const O=be.get(M);O.outputColorSpace=P.outputColorSpace,O.batching=P.batching,O.batchingColor=P.batchingColor,O.instancing=P.instancing,O.instancingColor=P.instancingColor,O.instancingMorph=P.instancingMorph,O.skinning=P.skinning,O.morphTargets=P.morphTargets,O.morphNormals=P.morphNormals,O.morphColors=P.morphColors,O.morphTargetsCount=P.morphTargetsCount,O.numClippingPlanes=P.numClippingPlanes,O.numIntersection=P.numClipIntersection,O.vertexAlphas=P.vertexAlphas,O.vertexTangents=P.vertexTangents,O.toneMapping=P.toneMapping}function ml(M,P,O,B,D){P.isScene!==!0&&(P=Ne),A.resetTextureUnits();const ee=P.fog,se=B.isMeshStandardMaterial?P.environment:null,fe=b===null?y.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:An,me=(B.isMeshStandardMaterial?N:x).get(B.envMap||se),Me=B.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,ye=!!O.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),_e=!!O.morphAttributes.position,Xe=!!O.morphAttributes.normal,Ze=!!O.morphAttributes.color;let et=Sn;B.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(et=y.toneMapping);const Tt=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,Ge=Tt!==void 0?Tt.length:0,xe=be.get(B),ht=u.state.lights;if(W===!0&&(J===!0||M!==Y)){const Ct=M===Y&&B.id===U;Q.setState(B,M,Ct)}let Ve=!1;B.version===xe.__version?(xe.needsLights&&xe.lightsStateVersion!==ht.state.version||xe.outputColorSpace!==fe||D.isBatchedMesh&&xe.batching===!1||!D.isBatchedMesh&&xe.batching===!0||D.isBatchedMesh&&xe.batchingColor===!0&&D.colorTexture===null||D.isBatchedMesh&&xe.batchingColor===!1&&D.colorTexture!==null||D.isInstancedMesh&&xe.instancing===!1||!D.isInstancedMesh&&xe.instancing===!0||D.isSkinnedMesh&&xe.skinning===!1||!D.isSkinnedMesh&&xe.skinning===!0||D.isInstancedMesh&&xe.instancingColor===!0&&D.instanceColor===null||D.isInstancedMesh&&xe.instancingColor===!1&&D.instanceColor!==null||D.isInstancedMesh&&xe.instancingMorph===!0&&D.morphTexture===null||D.isInstancedMesh&&xe.instancingMorph===!1&&D.morphTexture!==null||xe.envMap!==me||B.fog===!0&&xe.fog!==ee||xe.numClippingPlanes!==void 0&&(xe.numClippingPlanes!==Q.numPlanes||xe.numIntersection!==Q.numIntersection)||xe.vertexAlphas!==Me||xe.vertexTangents!==ye||xe.morphTargets!==_e||xe.morphNormals!==Xe||xe.morphColors!==Ze||xe.toneMapping!==et||xe.morphTargetsCount!==Ge)&&(Ve=!0):(Ve=!0,xe.__version=B.version);let It=xe.currentProgram;Ve===!0&&(It=Fi(B,P,D));let Gn=!1,At=!1,Rs=!1;const nt=It.getUniforms(),un=xe.uniforms;if(Ee.useProgram(It.program)&&(Gn=!0,At=!0,Rs=!0),B.id!==U&&(U=B.id,At=!0),Gn||Y!==M){Be.reverseDepthBuffer?(pe.copy(M.projectionMatrix),Ec(pe),Tc(pe),nt.setValue(R,"projectionMatrix",pe)):nt.setValue(R,"projectionMatrix",M.projectionMatrix),nt.setValue(R,"viewMatrix",M.matrixWorldInverse);const Ct=nt.map.cameraPosition;Ct!==void 0&&Ct.setValue(R,Re.setFromMatrixPosition(M.matrixWorld)),Be.logarithmicDepthBuffer&&nt.setValue(R,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&nt.setValue(R,"isOrthographic",M.isOrthographicCamera===!0),Y!==M&&(Y=M,At=!0,Rs=!0)}if(D.isSkinnedMesh){nt.setOptional(R,D,"bindMatrix"),nt.setOptional(R,D,"bindMatrixInverse");const Ct=D.skeleton;Ct&&(Ct.boneTexture===null&&Ct.computeBoneTexture(),nt.setValue(R,"boneTexture",Ct.boneTexture,A))}D.isBatchedMesh&&(nt.setOptional(R,D,"batchingTexture"),nt.setValue(R,"batchingTexture",D._matricesTexture,A),nt.setOptional(R,D,"batchingIdTexture"),nt.setValue(R,"batchingIdTexture",D._indirectTexture,A),nt.setOptional(R,D,"batchingColorTexture"),D._colorsTexture!==null&&nt.setValue(R,"batchingColorTexture",D._colorsTexture,A));const Cs=O.morphAttributes;if((Cs.position!==void 0||Cs.normal!==void 0||Cs.color!==void 0)&&Ae.update(D,O,It),(At||xe.receiveShadow!==D.receiveShadow)&&(xe.receiveShadow=D.receiveShadow,nt.setValue(R,"receiveShadow",D.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(un.envMap.value=me,un.flipEnvMap.value=me.isCubeTexture&&me.isRenderTargetTexture===!1?-1:1),B.isMeshStandardMaterial&&B.envMap===null&&P.environment!==null&&(un.envMapIntensity.value=P.environmentIntensity),At&&(nt.setValue(R,"toneMappingExposure",y.toneMappingExposure),xe.needsLights&&gl(un,Rs),ee&&B.fog===!0&&ne.refreshFogUniforms(un,ee),ne.refreshMaterialUniforms(un,B,$,G,u.state.transmissionRenderTarget[M.id]),ps.upload(R,va(xe),un,A)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(ps.upload(R,va(xe),un,A),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&nt.setValue(R,"center",D.center),nt.setValue(R,"modelViewMatrix",D.modelViewMatrix),nt.setValue(R,"normalMatrix",D.normalMatrix),nt.setValue(R,"modelMatrix",D.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){const Ct=B.uniformsGroups;for(let Ps=0,_l=Ct.length;Ps<_l;Ps++){const xa=Ct[Ps];C.update(xa,It),C.bind(xa,It)}}return It}function gl(M,P){M.ambientLightColor.needsUpdate=P,M.lightProbe.needsUpdate=P,M.directionalLights.needsUpdate=P,M.directionalLightShadows.needsUpdate=P,M.pointLights.needsUpdate=P,M.pointLightShadows.needsUpdate=P,M.spotLights.needsUpdate=P,M.spotLightShadows.needsUpdate=P,M.rectAreaLights.needsUpdate=P,M.hemisphereLights.needsUpdate=P}function vl(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(M,P,O){be.get(M.texture).__webglTexture=P,be.get(M.depthTexture).__webglTexture=O;const B=be.get(M);B.__hasExternalTextures=!0,B.__autoAllocateDepthBuffer=O===void 0,B.__autoAllocateDepthBuffer||Ue.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),B.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(M,P){const O=be.get(M);O.__webglFramebuffer=P,O.__useDefaultFramebuffer=P===void 0},this.setRenderTarget=function(M,P=0,O=0){b=M,L=P,w=O;let B=!0,D=null,ee=!1,se=!1;if(M){const me=be.get(M);if(me.__useDefaultFramebuffer!==void 0)Ee.bindFramebuffer(R.FRAMEBUFFER,null),B=!1;else if(me.__webglFramebuffer===void 0)A.setupRenderTarget(M);else if(me.__hasExternalTextures)A.rebindTextures(M,be.get(M.texture).__webglTexture,be.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const _e=M.depthTexture;if(me.__boundDepthTexture!==_e){if(_e!==null&&be.has(_e)&&(M.width!==_e.image.width||M.height!==_e.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(M)}}const Me=M.texture;(Me.isData3DTexture||Me.isDataArrayTexture||Me.isCompressedArrayTexture)&&(se=!0);const ye=be.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(ye[P])?D=ye[P][O]:D=ye[P],ee=!0):M.samples>0&&A.useMultisampledRTT(M)===!1?D=be.get(M).__webglMultisampledFramebuffer:Array.isArray(ye)?D=ye[O]:D=ye,v.copy(M.viewport),S.copy(M.scissor),z=M.scissorTest}else v.copy(le).multiplyScalar($).floor(),S.copy(ge).multiplyScalar($).floor(),z=ke;if(Ee.bindFramebuffer(R.FRAMEBUFFER,D)&&B&&Ee.drawBuffers(M,D),Ee.viewport(v),Ee.scissor(S),Ee.setScissorTest(z),ee){const me=be.get(M.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+P,me.__webglTexture,O)}else if(se){const me=be.get(M.texture),Me=P||0;R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,me.__webglTexture,O||0,Me)}U=-1},this.readRenderTargetPixels=function(M,P,O,B,D,ee,se){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let fe=be.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&se!==void 0&&(fe=fe[se]),fe){Ee.bindFramebuffer(R.FRAMEBUFFER,fe);try{const me=M.texture,Me=me.format,ye=me.type;if(!Be.textureFormatReadable(Me)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Be.textureTypeReadable(ye)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}P>=0&&P<=M.width-B&&O>=0&&O<=M.height-D&&R.readPixels(P,O,B,D,Ce.convert(Me),Ce.convert(ye),ee)}finally{const me=b!==null?be.get(b).__webglFramebuffer:null;Ee.bindFramebuffer(R.FRAMEBUFFER,me)}}},this.readRenderTargetPixelsAsync=async function(M,P,O,B,D,ee,se){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let fe=be.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&se!==void 0&&(fe=fe[se]),fe){const me=M.texture,Me=me.format,ye=me.type;if(!Be.textureFormatReadable(Me))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Be.textureTypeReadable(ye))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(P>=0&&P<=M.width-B&&O>=0&&O<=M.height-D){Ee.bindFramebuffer(R.FRAMEBUFFER,fe);const _e=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,_e),R.bufferData(R.PIXEL_PACK_BUFFER,ee.byteLength,R.STREAM_READ),R.readPixels(P,O,B,D,Ce.convert(Me),Ce.convert(ye),0);const Xe=b!==null?be.get(b).__webglFramebuffer:null;Ee.bindFramebuffer(R.FRAMEBUFFER,Xe);const Ze=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await yc(R,Ze,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,_e),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,ee),R.deleteBuffer(_e),R.deleteSync(Ze),ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(M,P=null,O=0){M.isTexture!==!0&&(fs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),P=arguments[0]||null,M=arguments[1]);const B=Math.pow(2,-O),D=Math.floor(M.image.width*B),ee=Math.floor(M.image.height*B),se=P!==null?P.x:0,fe=P!==null?P.y:0;A.setTexture2D(M,0),R.copyTexSubImage2D(R.TEXTURE_2D,O,0,0,se,fe,D,ee),Ee.unbindTexture()},this.copyTextureToTexture=function(M,P,O=null,B=null,D=0){M.isTexture!==!0&&(fs("WebGLRenderer: copyTextureToTexture function signature has changed."),B=arguments[0]||null,M=arguments[1],P=arguments[2],D=arguments[3]||0,O=null);let ee,se,fe,me,Me,ye;O!==null?(ee=O.max.x-O.min.x,se=O.max.y-O.min.y,fe=O.min.x,me=O.min.y):(ee=M.image.width,se=M.image.height,fe=0,me=0),B!==null?(Me=B.x,ye=B.y):(Me=0,ye=0);const _e=Ce.convert(P.format),Xe=Ce.convert(P.type);A.setTexture2D(P,0),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,P.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,P.unpackAlignment);const Ze=R.getParameter(R.UNPACK_ROW_LENGTH),et=R.getParameter(R.UNPACK_IMAGE_HEIGHT),Tt=R.getParameter(R.UNPACK_SKIP_PIXELS),Ge=R.getParameter(R.UNPACK_SKIP_ROWS),xe=R.getParameter(R.UNPACK_SKIP_IMAGES),ht=M.isCompressedTexture?M.mipmaps[D]:M.image;R.pixelStorei(R.UNPACK_ROW_LENGTH,ht.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,ht.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,fe),R.pixelStorei(R.UNPACK_SKIP_ROWS,me),M.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,D,Me,ye,ee,se,_e,Xe,ht.data):M.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,D,Me,ye,ht.width,ht.height,_e,ht.data):R.texSubImage2D(R.TEXTURE_2D,D,Me,ye,ee,se,_e,Xe,ht),R.pixelStorei(R.UNPACK_ROW_LENGTH,Ze),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,et),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Tt),R.pixelStorei(R.UNPACK_SKIP_ROWS,Ge),R.pixelStorei(R.UNPACK_SKIP_IMAGES,xe),D===0&&P.generateMipmaps&&R.generateMipmap(R.TEXTURE_2D),Ee.unbindTexture()},this.copyTextureToTexture3D=function(M,P,O=null,B=null,D=0){M.isTexture!==!0&&(fs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),O=arguments[0]||null,B=arguments[1]||null,M=arguments[2],P=arguments[3],D=arguments[4]||0);let ee,se,fe,me,Me,ye,_e,Xe,Ze;const et=M.isCompressedTexture?M.mipmaps[D]:M.image;O!==null?(ee=O.max.x-O.min.x,se=O.max.y-O.min.y,fe=O.max.z-O.min.z,me=O.min.x,Me=O.min.y,ye=O.min.z):(ee=et.width,se=et.height,fe=et.depth,me=0,Me=0,ye=0),B!==null?(_e=B.x,Xe=B.y,Ze=B.z):(_e=0,Xe=0,Ze=0);const Tt=Ce.convert(P.format),Ge=Ce.convert(P.type);let xe;if(P.isData3DTexture)A.setTexture3D(P,0),xe=R.TEXTURE_3D;else if(P.isDataArrayTexture||P.isCompressedArrayTexture)A.setTexture2DArray(P,0),xe=R.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,P.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,P.unpackAlignment);const ht=R.getParameter(R.UNPACK_ROW_LENGTH),Ve=R.getParameter(R.UNPACK_IMAGE_HEIGHT),It=R.getParameter(R.UNPACK_SKIP_PIXELS),Gn=R.getParameter(R.UNPACK_SKIP_ROWS),At=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,et.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,et.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,me),R.pixelStorei(R.UNPACK_SKIP_ROWS,Me),R.pixelStorei(R.UNPACK_SKIP_IMAGES,ye),M.isDataTexture||M.isData3DTexture?R.texSubImage3D(xe,D,_e,Xe,Ze,ee,se,fe,Tt,Ge,et.data):P.isCompressedArrayTexture?R.compressedTexSubImage3D(xe,D,_e,Xe,Ze,ee,se,fe,Tt,et.data):R.texSubImage3D(xe,D,_e,Xe,Ze,ee,se,fe,Tt,Ge,et),R.pixelStorei(R.UNPACK_ROW_LENGTH,ht),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,Ve),R.pixelStorei(R.UNPACK_SKIP_PIXELS,It),R.pixelStorei(R.UNPACK_SKIP_ROWS,Gn),R.pixelStorei(R.UNPACK_SKIP_IMAGES,At),D===0&&P.generateMipmaps&&R.generateMipmap(xe),Ee.unbindTexture()},this.initRenderTarget=function(M){be.get(M).__webglFramebuffer===void 0&&A.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?A.setTextureCube(M,0):M.isData3DTexture?A.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?A.setTexture2DArray(M,0):A.setTexture2D(M,0),Ee.unbindTexture()},this.resetState=function(){L=0,w=0,b=null,Ee.reset(),je.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ln}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===oa?"display-p3":"srgb",t.unpackColorSpace=We.workingColorSpace===Es?"display-p3":"srgb"}}class Ss extends yt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new hn,this.environmentIntensity=1,this.environmentRotation=new hn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class al extends _t{constructor(e=null,t=1,n=1,s,r,a,o,l,c=ft,h=ft,f,p){super(null,a,o,l,c,h,s,r,f,p),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Fp extends Li{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ye(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const mo=new tt,jr=new ca,ss=new Ts,rs=new F;class Op extends yt{constructor(e=new jt,t=new Fp){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ss.copy(n.boundingSphere),ss.applyMatrix4(s),ss.radius+=r,e.ray.intersectsSphere(ss)===!1)return;mo.copy(s).invert(),jr.copy(e.ray).applyMatrix4(mo);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,f=n.attributes.position;if(c!==null){const p=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);for(let g=p,_=d;g<_;g++){const u=c.getX(g);rs.fromBufferAttribute(f,u),go(rs,u,l,s,e,t,this)}}else{const p=Math.max(0,a.start),d=Math.min(f.count,a.start+a.count);for(let g=p,_=d;g<_;g++)rs.fromBufferAttribute(f,g),go(rs,g,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function go(i,e,t,n,s,r,a){const o=jr.distanceSqToPoint(i);if(o<t){const l=new F;jr.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class ol extends Rt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}const vo=new tt;class Bp{constructor(e,t,n=0,s=1/0){this.ray=new ca(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new ha,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return vo.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(vo),this}intersectObject(e,t=!0,n=[]){return $r(e,this,n,t),n.sort(_o),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)$r(e[s],this,n,t);return n.sort(_o),n}}function _o(i,e){return i.distance-e.distance}function $r(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let a=0,o=r.length;a<o;a++)$r(r[a],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Qr}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Qr);const bn=`
float hash12(vec2 p){
  vec3 p3 = fract(vec3(p.xyx) * 0.1031);
  p3 += dot(p3, p3.yzx + 33.33);
  return fract((p3.x + p3.y) * p3.z);
}
float vnoise(vec2 p){
  vec2 i = floor(p); vec2 f = fract(p);
  vec2 u = f*f*(3.0 - 2.0*f);
  float a = hash12(i), b = hash12(i + vec2(1.0, 0.0));
  float c = hash12(i + vec2(0.0, 1.0)), d = hash12(i + vec2(1.0, 1.0));
  return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
}
const mat2 ROT_FBM = mat2(1.6, 1.2, -1.2, 1.6);
float fbm2(vec2 p){ return 0.6667*vnoise(p) + 0.3333*vnoise(ROT_FBM*p + 5.3); }
float fbm4(vec2 p){
  float s = 0.0, a = 0.5;
  for (int i = 0; i < 4; i++){ s += a*vnoise(p); p = ROT_FBM*p + 3.7; a *= 0.5; }
  return s/0.9375;
}
`,ll=`
const vec3 PAPER = vec3(0.955, 0.940, 0.905);
// Rotación alrededor del eje acromático: desplaza el tono de una absorbancia
// sin cambiar su densidad total.
vec3 hueRotate(vec3 c, float a){
  const vec3 k = vec3(0.57735);
  float ca = cos(a), sa = sin(a);
  return c*ca + cross(k, c)*sa + k*dot(k, c)*(1.0 - ca);
}
// Banda cromática digital acotada (cian -> violeta -> magenta) en absorbancia.
vec3 digitalA(float s){
  s = clamp(s, 0.0, 1.0);
  vec3 c = vec3(1.6, 0.22, 0.08), v = vec3(0.69, 1.02, 0.09), m = vec3(0.13, 1.2, 0.25);
  return s < 0.5 ? mix(c, v, s*2.0) : mix(v, m, s*2.0 - 1.0);
}
// Desplaza un pigmento hacia la banda digital conservando su densidad:
// produce intermedios (azul-violeta, magenta-cian) sin derivar a verdes.
vec3 hybridTint(vec3 A, float s, float k){
  float d = dot(A, vec3(0.3333));
  vec3 T = digitalA(s);
  T *= d/dot(T, vec3(0.3333));
  return mix(A, T, k);
}
`,zp=`
uniform mat3 uPalM0;
uniform mat3 uPalM1;
uniform vec3 uPaper0;
uniform vec3 uPaper1;
uniform vec3 uGround0;
uniform vec3 uGround1;
uniform float uNight0;
uniform float uNight1;
uniform vec4 uPalWave;
float paletteK(vec2 q){
  if (uPalWave.w < 0.5) return 0.0;
  float d = length(q - uPalWave.xy) + (vnoise(q*6.0) - 0.5)*0.14;
  return 1.0 - smoothstep(uPalWave.z - 0.2, uPalWave.z, d);
}
vec3 palApply(vec3 A, float k){ return max(mix(uPalM0*A, uPalM1*A, k), 0.0); }
vec3 palPaper(float k){ return mix(uPaper0, uPaper1, k); }
vec3 palGround(float k){ return mix(uGround0, uGround1, k); }
float palNight(float k){ return mix(uNight0, uNight1, k); }
// Tono saturado de un pigmento, independiente de su densidad.
vec3 pigHue(vec3 A){ float d = max(dot(A, vec3(0.3333)), 0.04); return exp(-A/d*0.85); }
// Día: papel que absorbe. Noche: el pigmento emite su propio tono sobre un fondo de tinta.
vec3 renderPigment(vec3 A, float night, float k, float paperTex){
  vec3 day = palPaper(k)*paperTex*exp(-A);
  float dens = dot(A, vec3(0.3333));
  float cov = 1.0 - exp(-dens*2.6);
  vec3 glow = pigHue(A)*(0.45 + 0.8*cov);
  vec3 nightC = palGround(k)*(0.85 + 0.3*paperTex) + glow*cov*1.15;
  return mix(day, nightC, night);
}
`,cl=`
float waveZ(vec2 q){
  float z = 0.0;
  for (int i = 0; i < 8; i++){
    vec4 w = uWave[i];
    if (w.w == 0.0) continue;
    float age = uTime - w.z;
    if (age < 0.0 || age > 5.0) continue;
    float r = length(q - w.xy);
    float x = r - age*0.32;
    z += w.w*sin(x*55.0)*exp(-x*x*110.0)*exp(-age*0.75);
  }
  return z;
}
`,hl=`
float foldHeight(vec2 q, out float crease){
  float z = 0.0; crease = 0.0;
  for (int i = 0; i < 6; i++){
    vec4 f = uFold[i];
    if (abs(f.w) < 1e-5) continue;
    vec4 b = uFoldB[i];
    vec2 dir = vec2(cos(f.z), sin(f.z));
    vec2 r = q - f.xy;
    float d = dot(r, vec2(-dir.y, dir.x));
    float t = dot(r, dir);
    float along = 1.0 - smoothstep(b.y*0.55, b.y, abs(t));
    float prof = pow(max(0.0, 1.0 - sqrt(d*d + 1e-6)/b.x), 1.5);
    z += f.w*along*prof;
    crease = max(crease, along*(1.0 - smoothstep(0.0006, 0.0022, abs(d)))*smoothstep(0.0, 0.004, abs(f.w)));
  }
  return z;
}
`,kp=`
vec3 rdHueA(float s){
  vec3 a = vec3(1.83, 1.51, 0.46), b = vec3(0.80, 1.31, 0.48);
  vec3 c = vec3(0.30, 1.70, 0.90), d = vec3(0.20, 0.48, 1.14);
  s = clamp(s, 0.0, 1.0)*3.0;
  return s < 1.0 ? mix(a, b, s) : s < 2.0 ? mix(b, c, s - 1.0) : mix(c, d, s - 2.0);
}
`,Hp=`
precision highp float;
precision highp sampler2D;
in vec2 vUv;
out vec4 oRD;
uniform sampler2D tState;
uniform sampler2D tDry;
uniform sampler2D tWet;
uniform sampler2D tField;
uniform vec2 uTexel;
uniform float uAspect;
uniform float uTime;
uniform float uAdvect;
uniform float uStepDt;
uniform float uIterSec;
uniform float uActive;
uniform float uGrowR;
uniform vec2 uOrigin;
uniform float uSeedRate;
uniform vec4 uMouse;
uniform vec4 uStroke[16];
uniform int uStrokeCount;
${bn}
const vec2 OFF[8] = vec2[8](vec2(1.0, 0.0), vec2(-1.0, 0.0), vec2(0.0, 1.0), vec2(0.0, -1.0),
                            vec2(1.0, 1.0), vec2(-1.0, 1.0), vec2(1.0, -1.0), vec2(-1.0, -1.0));
const float WT[8] = float[8](0.2, 0.2, 0.2, 0.2, 0.05, 0.05, 0.05, 0.05);

void main(){
  vec2 q = vUv*vec2(uAspect, 1.0);
  vec2 vel = texture(tField, vUv).rg;
  vec2 uv = vUv - vel*uAdvect/vec2(uAspect, 1.0);
  vec4 c = texture(tState, uv);
  float U = 1.0 - c.r, V = c.g, age = c.b, hue = c.a;

  // Orientación: el campo compartido más una corriente lenta propia, para que
  // las vetas fluyan incluso donde el campo está en calma.
  float th = vnoise(q*1.3 + uTime*0.004)*6.2831853;
  vec2 fdir = normalize(vel*8.0 + vec2(cos(th), sin(th))*0.15 + 1e-5);
  float an = 0.45;

  // Laplaciano anisótropo: difunde más a lo largo del flujo que a través de él.
  vec2 lap = vec2(0.0);
  float wsum = 0.0, hueW = 0.0, hueS = 0.0;
  for (int i = 0; i < 8; i++){
    vec4 n = texture(tState, uv + OFF[i]*uTexel);
    float al = dot(normalize(OFF[i]), fdir);
    float w = WT[i]*(1.0 + an*(2.0*al*al - 1.0));
    lap += w*vec2(1.0 - n.r - U, n.g - V);
    wsum += w;
    hueS += n.a*n.g*WT[i];
    hueW += n.g*WT[i];
  }
  lap /= wsum;

  vec3 A = texture(tDry, vUv).rgb + texture(tWet, vUv).rgb;
  float d = dot(A, vec3(0.3333));
  float food = smoothstep(0.03, 0.25, d);

  // Régimen variable por zonas (laberinto <-> huella dactilar); el pigmento nutre.
  float z = vnoise(q*1.7 + 3.1);
  // Sobre papel desnudo hay menos alimento: el frente avanza desde las manchas, despacio.
  float F = mix(0.029, 0.039, z) + food*0.004 - (1.0 - food)*0.002;
  float K = mix(0.057, 0.0595, z) + food*0.0005;
  // Envejecimiento: tras ~40-60 s la zona se retira y deja espacio para regenerarse.
  K += smoothstep(40.0, 60.0, age)*0.012;
  K += (1.0 - uActive)*0.03;

  float r = U*V*V;
  // Escala del patrón variable por zonas: vetas anchas y finas conviven.
  float ds = mix(0.65, 1.3, vnoise(q*0.9 + 7.7));
  // El tiempo corre más despacio sobre el papel: el patrón se adentra poco a poco.
  float ts = uStepDt*mix(0.3, 1.0, food);
  U += ts*(ds*lap.x - r + F*(1.0 - U));
  V += ts*(0.5*ds*lap.y + r - (F + K)*V);

  age = V > 0.15 ? age + uIterSec : max(0.0, age - uIterSec*3.0);
  // El tono viaja con el crecimiento y se tiñe del pigmento que atraviesa.
  float sPig = clamp(0.5 + (A.b - A.r)*0.45/max(d, 0.05), 0.0, 1.0);
  hue = hueW > 1e-3 ? mix(hue, hueS/hueW, 0.25) : hue;
  hue = mix(hue, sPig, 0.04*food);

  if (uActive > 0.5){
    float dist = length(q - uOrigin);
    float front = 1.0 - smoothstep(0.0, 0.1, abs(dist - uGrowR));
    float blob = vnoise(q*60.0 + floor(uTime*0.5)*13.7);
    // Semillas suaves (manchas de ruido, no píxeles) donde hay pigmento.
    if (dist < uGrowR && blob > 1.0 - (0.08*front + uSeedRate)*food){ V = max(V, 0.5); hue = sPig; age = 0.0; }
    for (int i = 0; i < 16; i++){
      if (i >= uStrokeCount) break;
      if (length(q - uStroke[i].xy) < 0.01){ V = max(V, 0.5); hue = sPig; age = 0.0; }
    }
    float dm = length(q - uMouse.xy);
    if (uMouse.w > 0.5 && dm < 0.014){ V = max(V, 0.45); age = 0.0; }
    if (uMouse.w < -0.5) V *= mix(1.0, 0.85, exp(-dm*dm/0.0025));
  }
  oRD = vec4(clamp(1.0 - U, 0.0, 1.0), clamp(V, 0.0, 1.0), age, hue);
}
`,ul=`
uniform float uAspect;
uniform float uScale;
uniform float uTime;
uniform float uTech;
uniform float uHybrid;
uniform float uAgitation;
uniform float uRelief;
uniform float uNetGlow;
uniform vec4 uFold[6];
uniform vec4 uFoldB[6];
uniform vec4 uWave[8];
uniform vec4 uCharge;
uniform vec3 uLight;
uniform sampler2D tWet;
uniform sampler2D tDry;
uniform sampler2D tField;
uniform sampler2D tPaper;
uniform sampler2D tTrail;
uniform sampler2D tRD;
uniform vec2 uRDTexel;
uniform float uRDVis;
uniform float uRupT;
uniform vec2 uRupO;
`,Gp=ul+bn+cl+hl+`
varying vec2 vUv;
varying vec2 vGradOther;
varying vec3 vWorld;

float densAt(vec2 q){
  vec2 uv = q/vec2(uAspect, 1.0);
  return dot(texture(tDry, uv).rgb + texture(tWet, uv).rgb, vec3(0.3333));
}

// Desplazamientos que no son pliegues (los pliegues se sombrean por píxel).
float otherDisp(vec2 q){
  float z = waveZ(q)*(0.25 + 0.75*uTech);
  vec2 dc = q - uCharge.xy;
  z -= uCharge.z*0.012*exp(-dot(dc, dc)/0.003);
  vec2 uv = q/vec2(uAspect, 1.0);
  if (uRelief > 0.0){
    // El cuadro se eleva: la densidad de pigmento se vuelve topografía.
    const float r = 0.006;
    float d = densAt(q)*0.4 + (densAt(q + vec2(r, 0.0)) + densAt(q - vec2(r, 0.0)) + densAt(q + vec2(0.0, r)) + densAt(q - vec2(0.0, r)))*0.15;
    z += (1.0 - exp(-d*1.6))*uRelief;
    z += (1.0 - exp(-texture(tTrail, uv).r*0.04))*uRelief*0.18;
    // Los patrones de reacción-difusión se graban en relieve sobre la mancha.
    z += smoothstep(0.15, 0.4, texture(tRD, uv).g)*uRelief*0.1*uRDVis;
  }
  float hyb = texture(tField, uv).b*uHybrid;
  z += hyb*densAt(q)*0.006;
  return z;
}

void main(){
  vUv = uv;
  vec2 q = uv*vec2(uAspect, 1.0);
  float cr;
  float zf = foldHeight(q, cr);
  float e = 0.004;
  float z0 = otherDisp(q);
  float zx = otherDisp(q + vec2(e, 0.0));
  float zy = otherDisp(q + vec2(0.0, e));
  vGradOther = vec2(zx - z0, zy - z0)/e;
  vec3 world = vec3(position.xy, (zf + z0)*uScale);
  vWorld = world;
  gl_Position = projectionMatrix*modelViewMatrix*vec4(world, 1.0);
}
`,Vp=ul+bn+ll+hl+zp+kp+`
uniform vec2 uPaperTexel;
varying vec2 vUv;
varying vec2 vGradOther;
varying vec3 vWorld;

// Voronoi (distancia al borde de celda + identificador): las grietas de la ruptura.
vec2 hash22(vec2 p){ return vec2(hash12(p), hash12(p + 17.31)); }
vec2 voronoiCrack(vec2 x){
  vec2 n = floor(x), f = fract(x), mg = vec2(0.0), mr = vec2(0.0);
  float md = 8.0;
  for (int j = -1; j <= 1; j++) for (int i = -1; i <= 1; i++){
    vec2 g = vec2(float(i), float(j));
    vec2 r = g + hash22(n + g) - f;
    float d = dot(r, r);
    if (d < md){ md = d; mr = r; mg = g; }
  }
  md = 8.0;
  for (int j = -2; j <= 2; j++) for (int i = -2; i <= 2; i++){
    vec2 g = mg + vec2(float(i), float(j));
    vec2 r = g + hash22(n + g) - f;
    if (dot(mr - r, mr - r) > 1e-5) md = min(md, dot(0.5*(mr + r), normalize(r - mr)));
  }
  return vec2(md, hash12(n + mg));
}

void main(){
  vec2 q0 = vUv*vec2(uAspect, 1.0);
  vec4 F = texture(tField, vUv);
  float hyb = F.b*uHybrid;
  float pk = paletteK(q0);

  // Fase II: el campo deforma las marcas y separa los canales del pigmento.
  float deform = uTech*(1.0 - 0.6*hyb);
  vec2 q = q0 + F.rg*0.07*deform;
  vec2 dc = q - uCharge.xy;
  float gc = exp(-dot(dc, dc)/0.006)*uCharge.z;
  q -= dc*gc*0.45;
  q += vec2(-dc.y, dc.x)*gc*0.7;

  // RUPTURA — digitalización forzada. Implosión, impacto, grietas que irradian,
  // fragmentos desplazados, pixelado creciente, color que se escurre y apagón.
  float rs = uRupT;
  bool rup = rs >= 0.0 && rs < 8.0;
  float crack = 0.0, crackFresh = 0.0, drain = 0.0, vanish = 0.0, flash = 0.0;
  if (rup){
    vec2 rel = q0 - uRupO;
    float rd = length(rel);
    float implode = smoothstep(0.0, 0.55, rs)*(1.0 - smoothstep(0.6, 0.8, rs));
    q -= rel*implode*0.22*exp(-rd*1.2);
    vec2 vc = voronoiCrack(q0*vec2(7.0, 9.0) + 3.7);
    float cid = vc.y;
    float front = max(0.0, rs - 0.6)*1.15;
    float reached = 1.0 - smoothstep(front - 0.06, front, rd);
    float shatter = smoothstep(0.6, 1.1, rs)*(1.0 - smoothstep(5.0, 7.0, rs))*reached;
    vec2 away = rel/max(rd, 1e-3);
    q -= (away*(0.006 + 0.03*cid) + vec2(0.0, -0.05*cid*smoothstep(1.5, 5.0, rs)))*shatter;
    float pix = smoothstep(1.0, 3.2, rs)*(1.0 - smoothstep(5.2, 7.2, rs))*reached;
    float bs = 0.03*(0.4 + cid)*pix;
    if (bs > 0.0015) q = (floor(q/bs) + 0.5)*bs;
    float tear = smoothstep(0.6, 0.68, rs)*(1.0 - smoothstep(0.7, 1.9, rs));
    float band = floor(q0.y*70.0);
    q.x += (hash12(vec2(band, floor(rs*24.0))) - 0.5)*0.07*tear*step(0.72, hash12(vec2(band, 3.0)));
    crack = (1.0 - smoothstep(0.0, 0.012, vc.x))*reached*(1.0 - smoothstep(6.0, 7.5, rs));
    crackFresh = exp(-max(front - rd, 0.0)*7.0)*step(0.6, rs);
    drain = smoothstep(0.7, 2.4, rs)*(1.0 - smoothstep(5.6, 7.5, rs));
    vanish = smoothstep(2.4 + cid*2.2, 3.0 + cid*2.2, rs)*(1.0 - smoothstep(5.8, 7.5, rs))*reached;
    flash = step(0.6, rs)*(1.0 - smoothstep(0.6, 1.1, rs))*exp(-rd*2.0);
  }
  vec2 uv = q/vec2(uAspect, 1.0);
  vec2 split = F.rg*0.022*deform/vec2(uAspect, 1.0) + vec2(0.0012, 0.0)*deform;
  vec4 W = texture(tWet, uv);
  vec3 A;
  A.r = texture(tDry, uv + split).r + texture(tWet, uv + split).r;
  A.g = texture(tDry, uv).g + W.g;
  A.b = texture(tDry, uv - split).b + texture(tWet, uv - split).b;

  vec4 P = texture(tPaper, vUv);
  float hx = texture(tPaper, vUv + vec2(uPaperTexel.x, 0.0)).r - texture(tPaper, vUv - vec2(uPaperTexel.x, 0.0)).r;
  float hy = texture(tPaper, vUv + vec2(0.0, uPaperTexel.y)).r - texture(tPaper, vUv - vec2(0.0, uPaperTexel.y)).r;

  float dens = dot(A, vec3(0.3333));
  float gran = 0.3 + 0.6*clamp((A.r - A.b)*0.5, 0.0, 1.0);
  A *= 1.0 + gran*(0.5 - P.r)*1.2*smoothstep(0.03, 0.5, dens);

  float ang = atan(F.g, F.r + 1e-6);
  A = hybridTint(A, 0.5 + 0.5*sin(ang*2.0 + uTime*0.1), hyb*0.28);
  A = palApply(A, pk);
  dens = dot(A, vec3(0.3333));

  // Noche: la tecnología apaga el papel y el pigmento emite; el encuentro devuelve la luz.
  float night = max(uTech*(1.0 - hyb), palNight(pk));
  float paperTex = 0.975 + 0.035*P.a;
  vec3 col = renderPigment(A, night, pk, paperTex);
  if (rup){
    // El color se escurre y los fragmentos se apagan uno a uno hacia la oscuridad.
    float g = dot(col, vec3(0.299, 0.587, 0.114));
    col = mix(col, vec3(g)*vec3(0.92, 0.95, 1.05), drain*0.85);
    col = mix(col, vec3(0.02, 0.025, 0.05), vanish*0.92);
  }

  vec3 L = normalize(uLight);
  vec3 pn = normalize(vec3(-hx*0.9, -hy*0.9, 1.0));
  float relief = dot(pn, L) - L.z;
  col *= 1.0 + relief*0.22*(0.3 + 0.7*exp(-dens*2.5))*(1.0 - 0.6*night);

  float wet = smoothstep(0.03, 0.5, W.a);
  col *= 1.0 - 0.05*wet*(1.0 - night);
  col += wet*0.035*smoothstep(0.02, 0.08, relief);

  // Reacción-difusión: vetas finas que fluyen desde las manchas hacia el papel,
  // con el tono que transportan desde su origen. Emiten de noche, entintan de día.
  vec4 RDs = texture(tRD, uv);
  float rv = RDs.g;
  float pat = smoothstep(0.18, 0.42, rv)*uRDVis;
  vec2 rg = vec2(texture(tRD, uv + vec2(uRDTexel.x, 0.0)).g - texture(tRD, uv - vec2(uRDTexel.x, 0.0)).g,
                 texture(tRD, uv + vec2(0.0, uRDTexel.y)).g - texture(tRD, uv - vec2(0.0, uRDTexel.y)).g);
  float rEdge = smoothstep(0.05, 0.3, length(rg))*uRDVis;
  // Las zonas viejas se desvanecen antes de retirarse.
  float rLife = 1.0 - smoothstep(35.0, 58.0, RDs.b);
  vec3 rA = mix(palApply(rdHueA(RDs.a), pk), A/max(dens, 0.05)*0.9, 0.35*smoothstep(0.05, 0.3, dens));
  vec3 rHue = pigHue(rA);
  vec3 rNight = col + rHue*(pat*0.22 + rEdge*0.45)*rLife;
  vec3 rDay = col*exp(-rA*(pat*0.28 + rEdge*0.18)*rLife);
  col = mix(rDay, rNight, night);

  // Pliegues + relieve: luz rasante, más dramática de noche.
  float crease, cx, cy;
  float fe = 0.0015;
  float f0 = foldHeight(q0, crease);
  float fx = foldHeight(q0 + vec2(fe, 0.0), cx);
  float fy = foldHeight(q0 + vec2(0.0, fe), cy);
  vec2 fg = vec2(fx - f0, fy - f0)/fe;
  vec3 n = normalize(vec3(-(fg + vGradOther), 1.0));
  float sh = dot(n, L) - L.z;
  col *= clamp(1.0 + sh*mix(0.75, 1.5, night), 0.5, 1.2);
  vec3 hue = pigHue(A + vec3(0.03));
  col += night*max(sh, 0.0)*hue*0.35*smoothstep(0.05, 0.4, dens);
  col = mix(col, vec3(0.86, 0.97, 1.0), crease*mix(0.45, 0.12, night)*uTech*(1.0 - 0.6*uHybrid));

  // Red de physarum: filamentos luminosos de noche, tinta de día.
  float tr = texture(tTrail, vUv).r;
  float net = (1.0 - exp(-tr*0.09))*uNetGlow;
  float core = smoothstep(4.0, 30.0, tr)*uNetGlow;
  vec3 netGlow = (mix(vec3(0.3, 0.62, 0.95), hue*1.2, 0.8*smoothstep(0.02, 0.3, dens))*net + vec3(0.85, 0.94, 1.0)*core*0.22)*0.8;
  vec3 inkA = palApply(digitalA(0.5 + 0.5*sin(q0.x*3.0 + q0.y*2.0 + uTime*0.05)), pk);
  vec3 dayNet = col*exp(-inkA*net*0.9);
  col = mix(dayNet, col + netGlow, night);

  // Lectura algorítmica: curvas de nivel del pigmento (topografía luminosa de noche).
  float lev = dens*6.0;
  float fw = max(fwidth(lev), 1e-4);
  float dl = min(fract(lev), 1.0 - fract(lev))/fw;
  float line = 1.0 - smoothstep(0.5, 1.5, dl);
  float mask = uTech*0.45*smoothstep(0.05, 0.15, dens);
  vec3 lineCol = mix(mix(vec3(0.72, 0.93, 1.0), col*0.55, hyb), hue*1.4 + 0.08, night);
  col = mix(col, lineCol, line*mask*(0.55 + 0.25*(1.0 - uAgitation)));

  if (rup){
    vec3 crackCol = mix(vec3(0.02, 0.02, 0.04), vec3(0.85, 0.95, 1.0), crackFresh);
    col = mix(col, crackCol, crack*(0.65 + 0.35*crackFresh));
    col += vec3(0.9, 0.95, 1.0)*flash*0.6;
  }

  // Señal de umbral (ratón o manos): hacia la ruptura el mundo se enfría y se apaga
  // a latidos; hacia el encuentro amanece una luz cálida.
  float cz = uCharge.z;
  if (cz > 0.0){
    float beat = 0.7 + 0.3*sin(uTime*(5.0 + cz*7.0));
    float far = smoothstep(0.1, 1.0, length(q0 - uCharge.xy));
    if (uCharge.w < 1.5){
      float g = dot(col, vec3(0.299, 0.587, 0.114));
      col = mix(col, vec3(g)*vec3(0.75, 0.8, 0.95), cz*0.6);
      col *= 1.0 - cz*0.5*far*beat;
    } else {
      col = mix(col, col*vec3(1.12, 1.0, 0.8) + vec3(0.14, 0.1, 0.05)*(1.0 - far), cz*0.65*beat);
      col += vec3(0.55, 0.4, 0.22)*cz*cz*(1.0 - far)*0.55*beat;
    }
  }

  float vig = length(vUv - 0.5)*1.25;
  col *= 1.0 - mix(0.16, 0.45, night)*pow(vig, 2.2);
  gl_FragColor = vec4(col, 1.0);
}
`,Bt=(i,e,t)=>[-Math.log(i),-Math.log(e),-Math.log(t)],zt=[{name:"ultramar",A:Bt(.16,.22,.63)},{name:"cerúleo",A:Bt(.22,.55,.74)},{name:"violeta",A:Bt(.45,.27,.62)},{name:"magenta",A:Bt(.8,.22,.55)},{name:"carmín",A:Bt(.74,.14,.24)},{name:"ocre",A:Bt(.82,.62,.32)},{name:"amarillo cálido",A:Bt(.97,.8,.28)}],Xt=[{name:"cian eléctrico",A:Bt(.2,.8,.92)},{name:"azul profundo",A:Bt(.1,.16,.48)},{name:"violeta",A:Bt(.5,.36,.92)},{name:"magenta",A:Bt(.88,.3,.78)}];function hi(i,e,t,n=[0,0,0]){for(let s=0;s<3;s++)n[s]=i[s]+(e[s]-i[s])*t;return n}const xo=[1,0,0,0,1,0,0,0,1];function or(i,e=.35){const t=(i[0]+i[1]+i[2])/3,n=i.map(r=>r/t),s=[];for(let r=0;r<3;r++)for(let a=0;a<3;a++)s.push((r===a?e:0)+(1-e)*n[r]/3);return s}const ii=[{name:"papel",M:xo,paper:[.955,.94,.905],ground:[.025,.03,.07],night:0,ink:Xt[2].A},{name:"terracota",M:or([.35,.95,1.25],.45),paper:[.965,.945,.915],ground:[.04,.03,.035],night:0,ink:Xt[1].A},{name:"nocturno",M:xo,paper:[.955,.94,.905],ground:[.018,.026,.065],night:1,ink:Xt[0].A},{name:"tinta",M:or([1.55,1.25,.35]),paper:[.97,.945,.885],ground:[.03,.03,.06],night:0,ink:Xt[3].A},{name:"brasas",M:or([.2,.85,1.6],.4),paper:[.95,.93,.92],ground:[.05,.022,.045],night:1,ink:Xt[3].A}];class Wp{constructor(e){this.shared=e,Object.assign(e,{uPalM0:{value:new Pe},uPalM1:{value:new Pe},uPaper0:{value:new F},uPaper1:{value:new F},uGround0:{value:new F},uGround1:{value:new F},uNight0:{value:0},uNight1:{value:0},uPalWave:{value:new we(0,0,0,0)}}),this.dissolve=new we(0,0,0,0),this.reset()}set(e,t){const n=this.shared;n["uPalM"+e].value.set(...t.M),n["uPaper"+e].value.fromArray(t.paper),n["uGround"+e].value.fromArray(t.ground),n["uNight"+e].value=t.night}reset(){this.index=0,this.set(0,ii[0]),this.set(1,ii[0]),this.shared.uPalWave.value.set(0,0,0,0),this.dissolve.set(0,0,0,0),this.active=!1,this.shifts=0}get current(){return ii[this.index]}get transitioning(){return this.active}shift(e){if(this.active)return!1;const t=(this.index+1)%ii.length;return this.set(1,ii[t]),this.next=t,this.radius=0,this.origin=e.slice(),this.active=!0,this.shifts++,!0}update(e,t){if(!this.active){this.dissolve.w=0;return}this.radius+=e*.32,this.shared.uPalWave.value.set(this.origin[0],this.origin[1],this.radius,1),this.dissolve.set(this.origin[0],this.origin[1],this.radius,.8),this.radius>Math.hypot(t,1)+.3&&(this.index=this.next,this.set(0,ii[this.index]),this.shared.uPalWave.value.w=0,this.dissolve.w=0,this.active=!1)}}const nn=10,Mo=.93;class qp{constructor(e){this.renderer=new Np({canvas:e,antialias:!0,alpha:!1,powerPreference:"high-performance"}),this.renderer.setClearColor(15328472,1),this.scene=new Ss,this.camera=new Dt(30,1,.1,200),this.camDist=nn*Mo*.5/Math.tan(Ls.degToRad(15)),this.camera.position.set(0,0,this.camDist),this.shared={uTime:{value:0},uAspect:{value:1},uScale:{value:nn},uTech:{value:0},uHybrid:{value:0},uAgitation:{value:0},uWave:{value:Array.from({length:8},()=>new we(0,0,0,0))},uFold:{value:Array.from({length:6},()=>new we(0,0,0,0))},uFoldB:{value:Array.from({length:6},()=>new we(0,0,0,0))},uCharge:{value:new we(0,0,0,0)},uLight:{value:new F(-.45,.55,.7).normalize()},tWet:{value:null},tDry:{value:null},tField:{value:null},tPaper:{value:null},tTrail:{value:null},uRelief:{value:0},uNetGlow:{value:0},uRupT:{value:-1},uRupO:{value:new Le},tRD:{value:null},uRDTexel:{value:new Le(1/560,1/330)},uRDVis:{value:0}},this.palette=new Wp(this.shared),this.canvasUniforms={...this.shared,uPaperTexel:{value:new Le}},this.canvasMat=new Rt({vertexShader:Gp,fragmentShader:Vp,uniforms:this.canvasUniforms}),this.canvasMesh=new Ut(new kn(1,1),this.canvasMat),this.canvasMesh.frustumCulled=!1,this.canvasMesh.renderOrder=0,this.scene.add(this.canvasMesh),this.shadowGroup=new ai,this.structGroup=new ai,this.scene.add(this.shadowGroup,this.structGroup),this.footScene=new Ss,this.footCamera=new As(-1,1,1,-1,-50,50),this.raycaster=new Bp,this.plane=new _n(new F(0,0,1),0),this.ndc=new Le,this.hit=new F,this.drift=new Le,this.lookTarget=new F}resize(e,t,n){this.renderer.setPixelRatio(n),this.renderer.setSize(e,t,!1),this.width=e,this.height=t,this.aspect=e/t,this.shared.uAspect.value=this.aspect,this.camera.aspect=this.aspect,this.camera.updateProjectionMatrix(),this.canvasMesh.geometry.dispose(),this.canvasMesh.geometry=new kn(this.aspect*nn,nn,300,180);const s=this.aspect*nn/2,r=nn/2;return Object.assign(this.footCamera,{left:-s,right:s,top:r,bottom:-r}),this.footCamera.position.set(0,0,10),this.footCamera.updateProjectionMatrix(),this.aspect}setPaper(e,t,n){this.shared.tPaper.value=e,this.canvasUniforms.uPaperTexel.value.set(1/t,1/n)}screenToQ(e,t,n=[0,0]){return this.ndc.set(e/this.width*2-1,-(t/this.height)*2+1),this.raycaster.setFromCamera(this.ndc,this.camera),this.raycaster.ray.intersectPlane(this.plane,this.hit)?(n[0]=this.hit.x/nn+this.aspect/2,n[1]=this.hit.y/nn+.5,n):null}updateCamera(e,t,n,s,r=0){const a=(1-Mo)*.5*nn*1.4,o=a*Math.min(1,this.aspect),l=a*Math.min(1,1/this.aspect),c=Ls.clamp((Math.sin(t*.071)*.35+(s?s[0]*.25:0))*n,-o,o),h=Ls.clamp((Math.sin(t*.053+1.3)*.25+(s?s[1]*.18:0))*n,-l,l),f=Math.min(1,e*.8);this.drift.x+=(c-this.drift.x)*f,this.drift.y+=(h-this.drift.y)*f;const p=r*(Math.sin(t*71.3)*.6+Math.sin(t*43.7+1.1)*.4)*.12,d=r*(Math.sin(t*63.1+2.3)*.6+Math.sin(t*37.9)*.4)*.12;this.camera.position.set(this.drift.x+p,this.drift.y+d,this.camDist),this.lookTarget.set(this.drift.x*.6+p*.3,this.drift.y*.6+d*.3,0),this.camera.lookAt(this.lookTarget)}renderFootprint(e){const t=this.renderer;t.setRenderTarget(e),t.setClearColor(0,0),t.clear(!0,!1,!1),t.render(this.footScene,this.footCamera),t.setClearColor(15328472,1),t.setRenderTarget(null)}render(){this.renderer.setRenderTarget(null),this.renderer.render(this.scene,this.camera)}}const Xp=`
precision highp float;
in vec3 position;
in vec2 uv;
out vec2 vUv;
void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }
`,Yp=new kn(2,2);function yn(i,e){return new ol({glslVersion:_s,vertexShader:Xp,fragmentShader:i,uniforms:e,depthTest:!1,depthWrite:!1})}class En{constructor(e){this.material=e,this.mesh=new Ut(Yp,e),this.mesh.frustumCulled=!1,this.scene=new Ss,this.scene.add(this.mesh),this.camera=new As(-1,1,1,-1,0,1)}render(e,t){e.setRenderTarget(t),e.render(this.scene,this.camera)}dispose(){this.material.dispose()}}function Kt(i,e){i.setRenderTarget(e),i.setClearColor(0,0),i.clear(!0,!1,!1)}const an=16,Ii=`
precision highp float;
precision highp sampler2D;
in vec2 vUv;
`,Kp=Ii+`
out vec4 oPaper;
uniform float uAspect;
${bn}
void main(){
  vec2 q = vec2(vUv.x*uAspect, vUv.y);
  float cells = fbm4(q*140.0);
  float f1 = vnoise(mat2(0.8, -0.6, 0.6, 0.8)*q*vec2(1100.0, 70.0));
  float f2 = vnoise(mat2(0.28, 0.96, -0.96, 0.28)*q*vec2(900.0, 60.0));
  float fiber = smoothstep(0.55, 0.95, f1)*0.6 + smoothstep(0.6, 0.95, f2)*0.5;
  float h = clamp(cells*0.8 + fiber*0.3 + vnoise(q*700.0)*0.15 - 0.12, 0.0, 1.0);
  float absb = fbm4(q*22.0 + 4.1)*0.72 + vnoise(q*75.0)*0.28;
  float tone = fbm4(q*3.0 + 9.0);
  oPaper = vec4(h, absb, fiber, tone);
}
`,jp=Ii+`
layout(location = 0) out vec4 oWet;
layout(location = 1) out vec4 oDry;
uniform sampler2D tWet;
uniform sampler2D tDry;
uniform sampler2D tField;
uniform sampler2D tPaper;
uniform sampler2D tDeposit;
uniform vec2 uTexel;
uniform float uAspect;
uniform float uDt;
uniform float uAdvect;
uniform float uAniso;
uniform float uDepositAmt;
uniform int uSegCount;
uniform vec4 uSeg[${an}];
uniform vec4 uSegP[${an}];
uniform vec4 uSegC[${an}];
uniform vec4 uDrop;
uniform sampler2D tTrail;
uniform float uDryAdvect;
uniform float uNetDeposit;
uniform vec3 uNetA;
uniform vec4 uDissolve;
uniform sampler2D tRD;
uniform float uRDDeposit;
uniform vec4 uBlot;
${bn}
const vec2 OFF[8] = vec2[8](vec2(1.0, 0.0), vec2(-1.0, 0.0), vec2(0.0, 1.0), vec2(0.0, -1.0),
                            vec2(1.0, 1.0), vec2(-1.0, 1.0), vec2(1.0, -1.0), vec2(-1.0, -1.0));
const float WT[8] = float[8](1.0, 1.0, 1.0, 1.0, 0.7071, 0.7071, 0.7071, 0.7071);

float perm(vec4 pp, float damp){
  float a = pp.g*0.86 + pp.r*0.14;
  return mix(0.16 + 0.84*smoothstep(0.32, 0.7, a), 1.0, damp*0.85);
}

void main(){
  vec2 q = vec2(vUv.x*uAspect, vUv.y);
  vec4 F = texture(tField, vUv);
  vec2 vel = F.rg;
  float fl = length(vel);
  vec2 fdir = fl > 1e-5 ? vel/fl : vec2(1.0, 0.0);
  float an = uAniso*F.b*smoothstep(0.004, 0.05, fl);
  vec2 uv0 = vUv - vel*uAdvect*uDt*vec2(1.0/uAspect, 1.0);

  vec4 C = texture(tWet, uv0);
  // Marmolado (fase II): el campo arrastra también el pigmento seco.
  vec4 D = texture(tDry, vUv - vel*uDryAdvect*uDt*vec2(1.0/uAspect, 1.0));
  vec4 Pp = texture(tPaper, vUv);
  float w = C.a;
  float pC = perm(Pp, D.a);
  vec3 cC = min(C.rgb/max(w, 0.02), vec3(12.0));

  vec3 dP = vec3(0.0);
  float dW = 0.0;
  for (int i = 0; i < 8; i++){
    vec2 o = OFF[i]*uTexel;
    vec4 N = texture(tWet, uv0 + o);
    float pN = perm(texture(tPaper, vUv + o), texture(tDry, vUv + o).a);
    float al = abs(dot(normalize(OFF[i]), fdir));
    float g = WT[i]*mix(1.0, 0.4 + 1.2*al*al, an);
    float f = 0.055*0.5*(pC + pN)*g*(N.a - w);
    f *= smoothstep(0.003, 0.04, max(N.a, w));
    // Frente húmedo sobre papel seco: el agua sólo cruza si la lámina vecina
    // supera un umbral que depende de la absorción local -> bordes duros e irregulares.
    if (f > 0.0 && w < 0.012) f *= smoothstep(0.05 + 0.3*(1.0 - pC), 0.1 + 0.3*(1.0 - pC), N.a);
    if (f < 0.0 && N.a < 0.012) f *= smoothstep(0.05 + 0.3*(1.0 - pN), 0.1 + 0.3*(1.0 - pN), w);
    vec3 cN = min(N.rgb/max(N.a, 0.02), vec3(12.0));
    dP += f > 0.0 ? f*cN : f*cC;
    dW += f;
    dP += 0.02*g*(N.rgb - C.rgb)*smoothstep(0.02, 0.2, min(N.a, w));
  }

  vec3 P = max(C.rgb + dP, 0.0);
  float wn = w + dW;
  float thin = 1.0 - smoothstep(0.02, 0.25, wn);
  wn -= uDt*(0.010 + 0.05*thin);

  // Sedimentación: más rápida cuando el agua se agota y en los valles del papel (granulación).
  float h = Pp.r;
  float settle = uDt*(0.05 + 1.6*(1.0 - smoothstep(0.0, 0.08, wn)))*(1.3 - 0.75*h);
  vec3 dep = P*clamp(settle, 0.0, 1.0);
  if (wn < 0.002) dep = P;
  // Re-humectación: el agua nueva levanta parte del pigmento seco (floraciones).
  vec3 lift = D.rgb*uDt*0.02*smoothstep(0.25, 0.9, wn);

  // Depósito del pincel: cápsulas deformadas por dominio, carga desigual.
  vec3 pAdd = vec3(0.0);
  float wAdd = 0.0;
  for (int i = 0; i < ${an}; i++){
    if (i >= uSegCount) break;
    vec4 s = uSeg[i]; vec4 sp = uSegP[i]; vec4 sc = uSegC[i];
    float r = sp.x;
    vec2 ba = s.zw - s.xy;
    float L2 = dot(ba, ba);
    vec2 pa0 = q - s.xy;
    float t0 = L2 > 1e-10 ? clamp(dot(pa0, ba)/L2, 0.0, 1.0) : 0.0;
    if (length(pa0 - ba*t0) > r*1.9) continue;
    float seed = sp.w;
    float fq = 2.2/r;
    vec2 wq = q + (vec2(fbm2(q*fq + seed), fbm2(q*fq + seed + 17.1)) - 0.5)*r*(0.5 + 0.9*sc.a);
    vec2 pa = wq - s.xy;
    float t = L2 > 1e-10 ? clamp(dot(pa, ba)/L2, 0.0, 1.0) : 0.0;
    float d = length(pa - ba*t);
    float rr = r*(0.78 + 0.5*vnoise(q*(5.0/r) + seed*1.7));
    float m = 1.0 - smoothstep(rr*0.82, rr, d);
    if (m <= 0.0) continue;
    float side = L2 > 1e-10 ? (pa.x*ba.y - pa.y*ba.x)/(sqrt(L2)*r) : 0.0;
    float dens = (0.5 + 1.0*fbm2(q*(3.5/r) + seed*3.1))*(1.0 + 0.5*side*(fract(seed*7.13)*2.0 - 1.0));
    dens *= (0.85 + 0.3*vnoise(q*240.0))*(1.2 - 0.45*h);
    wAdd += m*sp.y;
    pAdd += m*sp.z*max(dens, 0.05)*sc.rgb;
  }
  if (uDrop.w > 0.0){
    float n = fbm2(q*(2.0/uDrop.z) + 3.0);
    float dd = length(q - uDrop.xy)*(0.75 + 0.5*n);
    wAdd += uDrop.w*(1.0 - smoothstep(uDrop.z*0.45, uDrop.z, dd));
  }
  // La red de physarum entinta los huecos entre las manchas (complementa, no tapa).
  if (uNetDeposit > 0.0){
    float tr = texture(tTrail, vUv).r;
    float net = 1.0 - exp(-tr*0.05);
    float dl = dot(D.rgb + P, vec3(0.3333));
    float tone = 0.5 + 0.5*sin(q.x*5.0 + q.y*3.0);
    pAdd += uNetA*(0.7 + 0.6*tone)*net*(1.0 - smoothstep(0.15, 0.7, dl))*uNetDeposit*F.b*0.0012;
  }
  // Fase III: los patrones se vuelven pigmento del mismo tono que la mancha que los aloja.
  if (uRDDeposit > 0.0){
    float rv = smoothstep(0.15, 0.4, texture(tRD, vUv).g);
    vec3 Ah = D.rgb + P;
    float dh = dot(Ah, vec3(0.3333));
    // Sólo refuerza dentro de manchas existentes: nunca las expande (evita el crecimiento desbocado).
    float inside = smoothstep(0.12, 0.25, dh)*(1.0 - smoothstep(0.6, 1.1, dh));
    pAdd += Ah/max(dh, 0.05)*rv*inside*uRDDeposit*F.b*0.0006;
  }
  vec4 dep4 = texture(tDeposit, vUv);
  pAdd += dep4.rgb*uDepositAmt;
  wAdd += dep4.a*uDepositAmt;
  // Techo de saturación: la obra no se ennegrece con el tiempo.
  float tot = dot(D.rgb + P, vec3(0.3333));
  pAdd *= 1.0 - smoothstep(1.6, 3.0, tot);

  vec3 Pn = max(P - dep + lift + pAdd, 0.0);
  wn = clamp(wn + wAdd, 0.0, 1.6);
  vec3 Dn = max(D.rgb + dep - lift, 0.0);
  // Papel secante (puño en la fase I): absorbe agua y pigmento húmedo, roza el seco.
  if (uBlot.w > 0.0){
    float bd = length(q - uBlot.xy)*(0.85 + 0.3*vnoise(q*60.0));
    float k = clamp((1.0 - smoothstep(uBlot.z*0.6, uBlot.z, bd))*uBlot.w*uDt, 0.0, 1.0);
    Pn *= 1.0 - k;
    wn *= 1.0 - k;
    Dn *= 1.0 - k*0.25;
  }
  // Cambio de paleta: tras el frente, el cuadro anterior se aclara y deja espacio.
  if (uDissolve.w > 0.0){
    float dd = length(q - uDissolve.xy);
    float band = smoothstep(uDissolve.z - 0.5, uDissolve.z - 0.3, dd)*(1.0 - smoothstep(uDissolve.z - 0.05, uDissolve.z, dd));
    float keep = 1.0 - clamp(band*uDissolve.w*uDt, 0.0, 1.0);
    Dn *= keep;
    Pn *= keep;
  }
  float damp = max(D.a - uDt*0.045, smoothstep(0.01, 0.12, wn));
  oWet = vec4(Pn, wn);
  oDry = vec4(Dn, damp);
}
`,$p=Ii+`
layout(location = 0) out vec4 oWet;
layout(location = 1) out vec4 oDry;
uniform sampler2D tWet;
uniform sampler2D tDry;
void main(){ oWet = texture(tWet, vUv); oDry = texture(tDry, vUv); }
`,Zp=Ii+`
out vec4 oField;
uniform sampler2D tField;
uniform sampler2D tDry;
uniform sampler2D tWet;
uniform vec2 uTexel;
uniform float uAspect;
uniform float uDt;
uniform float uTime;
uniform float uTech;
uniform float uHybrid;
uniform vec4 uMouse;
uniform float uMouseGain;
uniform vec4 uVortex[8];
uniform int uVortexCount;
uniform vec4 uCharge;
uniform vec4 uRegions[16];
uniform int uRegionCount;
uniform vec4 uHyb;
uniform vec3 uHybDir;
${bn}
vec2 curl(vec2 p){
  float e = 0.02;
  float a = fbm2(p + vec2(0.0, e)), b = fbm2(p - vec2(0.0, e));
  float c = fbm2(p + vec2(e, 0.0)), d = fbm2(p - vec2(e, 0.0));
  return vec2(a - b, -(c - d))/(2.0*e);
}
float dens(vec2 uv){ return dot(texture(tDry, uv).rgb + texture(tWet, uv).rgb, vec3(0.3333)); }
void main(){
  vec2 q = vec2(vUv.x*uAspect, vUv.y);
  vec4 cur = texture(tField, vUv);
  vec2 back = vUv - cur.rg*uDt*vec2(1.0/uAspect, 1.0);
  vec2 vel = texture(tField, back).rg*exp(-uDt*0.5);
  float act = max(uTech, uHybrid);

  // Flujo de base: ruido rotacional coherente, lento.
  vec2 base = curl(q*1.8 + vec2(uTime*0.015, -uTime*0.01))*0.035*act;
  vel += (base - vel)*min(uDt*0.4, 1.0);

  vec2 dm = q - uMouse.xy;
  vel += uMouse.zw*exp(-dot(dm, dm)/0.006)*uDt*4.0*uMouseGain;

  for (int i = 0; i < 8; i++){
    if (i >= uVortexCount) break;
    vec4 v = uVortex[i];
    vec2 d = q - v.xy;
    float r2 = dot(d, d);
    float rr = v.w*v.w;
    vel += v.z*vec2(-d.y, d.x)/sqrt(r2 + rr)*exp(-r2/(rr*3.0));
  }

  vec2 dc = uCharge.xy - q;
  float gc = exp(-dot(dc, dc)/0.03)*uCharge.z;
  vel += (dc*1.5 + vec2(-dc.y, dc.x)*3.0)*gc*uDt*act;

  // Retroalimentación: el pigmento curva el campo (fluye a lo largo de los contornos).
  float hyb = cur.b;
  vec2 e = uTexel*1.5;
  vec2 g = vec2(dens(vUv + vec2(e.x, 0.0)) - dens(vUv - vec2(e.x, 0.0)),
                dens(vUv + vec2(0.0, e.y)) - dens(vUv - vec2(0.0, e.y)));
  vel += (vec2(-g.y, g.x)*0.9 - g*0.3)*hyb*uHybrid*uDt*0.35;

  float L = length(vel);
  if (L > 0.45) vel *= 0.45/L;

  // Máscara del encuentro: frente orgánico, alargado hacia donde apunta el gesto.
  vec2 rel = q - uHyb.xy;
  float al = dot(rel, uHybDir.xy);
  float pe = dot(rel, vec2(-uHybDir.y, uHybDir.x));
  float da = length(vec2(al/(1.0 + uHybDir.z*step(0.0, al)), pe));
  float edge = uHyb.z + (fbm2(q*5.0 + uTime*0.05) - 0.5)*0.2;
  hyb = max(hyb, (1.0 - smoothstep(edge - 0.15, edge, da))*uHyb.w);

  float lift = 0.0;
  for (int i = 0; i < 16; i++){
    if (i >= uRegionCount) break;
    vec4 r = uRegions[i];
    float d = length(q - r.xy) + (fbm2(q*12.0 + float(i)*3.1) - 0.5)*r.z*0.6;
    lift = max(lift, (1.0 - smoothstep(r.z*0.55, r.z*1.1, d))*r.w);
  }
  oField = vec4(vel, hyb, lift);
}
`,Jp=Ii+`
out vec4 oDens;
uniform sampler2D tWet;
uniform sampler2D tDry;
uniform vec2 uTexel;
void main(){
  vec3 A = vec3(0.0);
  for (int j = 0; j < 2; j++) for (int i = 0; i < 2; i++){
    vec2 uv = vUv + (vec2(float(i), float(j)) - 0.5)*uTexel*0.5;
    A += texture(tDry, uv).rgb + texture(tWet, uv).rgb;
  }
  A *= 0.25;
  float d = dot(A, vec3(0.3333));
  oDens = vec4(clamp(A/4.0, 0.0, 1.0), clamp(d/2.0, 0.0, 1.0));
}
`;class Qp{constructor(e,t){this.renderer=e,this.type=t,this.segs=Array.from({length:an},()=>new we(0,0,0,0)),this.segP=Array.from({length:an},()=>new we(0,0,0,0)),this.segC=Array.from({length:an},()=>new we(0,0,0,0)),this.segCount=0,this.drop=new we(0,0,0,0),this.blank=new al(new Uint8Array(4),1,1),this.blank.needsUpdate=!0,this.u={tWet:{value:null},tDry:{value:null},tField:{value:this.blank},tPaper:{value:null},tDeposit:{value:this.blank},uTexel:{value:new Le},uAspect:{value:1},uDt:{value:.016},uAdvect:{value:0},uAniso:{value:0},uDepositAmt:{value:0},uSegCount:{value:0},uSeg:{value:this.segs},uSegP:{value:this.segP},uSegC:{value:this.segC},uDrop:{value:this.drop},tTrail:{value:this.blank},uDryAdvect:{value:0},uNetDeposit:{value:0},uNetA:{value:new F(1,1,1)},uDissolve:{value:new we(0,0,0,0)},tRD:{value:this.blank},uRDDeposit:{value:0},uBlot:{value:new we(0,0,0,0)}},this.simPass=new En(yn(jp,this.u)),this.paperU={uAspect:{value:1}},this.paperPass=new En(yn(Kp,this.paperU)),this.copyU={tWet:{value:null},tDry:{value:null}},this.copyPass=new En(yn($p,this.copyU)),this.read=null,this.write=null,this.paperRT=null}makeRT(e,t){return new at(e,t,{count:2,type:this.type,format:Lt,minFilter:Qe,magFilter:Qe,depthBuffer:!1,stencilBuffer:!1,generateMipmaps:!1})}resize(e,t,n,s){const r=this.makeRT(t,n),a=this.makeRT(t,n);this.read?(this.copyU.tWet.value=this.read.textures[0],this.copyU.tDry.value=this.read.textures[1],this.copyPass.render(this.renderer,r),this.read.dispose(),this.write.dispose()):Kt(this.renderer,r),Kt(this.renderer,a),this.read=r,this.write=a,this.u.uTexel.value.set(1/t,1/n),this.u.uAspect.value=e,this.width=t,this.height=n,this.paperRT&&this.paperRT.dispose();const o=Math.round(s),l=Math.round(s/e);this.paperRT=new at(o,l,{type:Gt,minFilter:Qe,magFilter:Qe,depthBuffer:!1,generateMipmaps:!1}),this.paperU.uAspect.value=e,this.paperPass.render(this.renderer,this.paperRT),this.u.tPaper.value=this.paperRT.texture,this.renderer.setRenderTarget(null)}get wet(){return this.read.textures[0]}get dry(){return this.read.textures[1]}get paper(){return this.paperRT.texture}addSegment(e,t,n,s,r,a,o,l,c,h){if(this.segCount>=an)return!1;const f=this.segCount++;return this.segs[f].set(e,t,n,s),this.segP[f].set(r,a,o,h),this.segC[f].set(l[0],l[1],l[2],c),!0}get freeSegments(){return an-this.segCount}addDrop(e,t,n,s){this.drop.set(e,t,n,s)}step(e,t,n,s,r){const a=this.u;a.uDt.value=e/r,a.tField.value=t||this.blank,a.tDeposit.value=n||this.blank,a.uAdvect.value=s.advect,a.uAniso.value=s.aniso,a.uDryAdvect.value=s.dryAdvect||0,a.uNetDeposit.value=s.netDeposit||0,a.tTrail.value=s.trail||this.blank,a.tRD.value=s.rd||this.blank,a.uRDDeposit.value=s.rdDeposit||0,s.blot?a.uBlot.value.copy(s.blot):a.uBlot.value.w=0,s.netA&&a.uNetA.value.fromArray(s.netA),s.dissolve?a.uDissolve.value.copy(s.dissolve):a.uDissolve.value.w=0;for(let o=0;o<r;o++){a.uSegCount.value=o===0?this.segCount:0,a.uDepositAmt.value=o===0?s.depositAmt:0,o>0&&(this.drop.w=0),a.tWet.value=this.read.textures[0],a.tDry.value=this.read.textures[1],this.simPass.render(this.renderer,this.write);const l=this.read;this.read=this.write,this.write=l}this.segCount=0,this.drop.w=0}clear(){Kt(this.renderer,this.read),Kt(this.renderer,this.write),this.segCount=0,this.drop.w=0}dispose(){this.read?.dispose(),this.write?.dispose(),this.paperRT?.dispose(),this.simPass.dispose(),this.paperPass.dispose(),this.copyPass.dispose(),this.blank.dispose()}}class em{constructor(e,t){this.renderer=e,this.type=t,this.vortices=Array.from({length:8},()=>new we(0,0,0,0)),this.vortexCount=0,this.regions=Array.from({length:16},()=>new we(0,0,0,0)),this.u={tField:{value:null},tDry:{value:null},tWet:{value:null},uTexel:{value:new Le},uAspect:{value:1},uDt:{value:.016},uTime:{value:0},uTech:{value:0},uHybrid:{value:0},uMouse:{value:new we(0,0,0,0)},uMouseGain:{value:0},uVortex:{value:this.vortices},uVortexCount:{value:0},uCharge:{value:new we(0,0,0,0)},uRegions:{value:this.regions},uRegionCount:{value:0},uHyb:{value:new we(0,0,0,0)},uHybDir:{value:new F(1,0,0)}},this.pass=new En(yn(Zp,this.u))}resize(e){const n=Math.max(48,Math.round(192/e));this.read?.dispose(),this.write?.dispose();const s={type:this.type,minFilter:Qe,magFilter:Qe,depthBuffer:!1,generateMipmaps:!1};this.read=new at(192,n,s),this.write=new at(192,n,s),this.clear(),this.u.uTexel.value.set(1/192,1/n),this.u.uAspect.value=e}get texture(){return this.read.texture}addVortex(e,t,n,s){this.vortexCount>=8||this.vortices[this.vortexCount++].set(e,t,n,s)}setRegions(e){const t=Math.min(16,e.length);for(let n=0;n<t;n++)this.regions[n].set(e[n].x,e[n].y,e[n].r,e[n].p);this.u.uRegionCount.value=t}step(e,t,n){const s=this.u;s.uDt.value=e,s.tField.value=this.read.texture,s.tWet.value=t,s.tDry.value=n,s.uVortexCount.value=this.vortexCount,this.pass.render(this.renderer,this.write);const r=this.read;this.read=this.write,this.write=r,this.vortexCount=0}clear(){Kt(this.renderer,this.read),Kt(this.renderer,this.write),this.u.uRegionCount.value=0,this.u.uHyb.value.set(0,0,0,0)}}class tm{constructor(e){this.renderer=e,this.u={tWet:{value:null},tDry:{value:null},uTexel:{value:new Le}},this.pass=new En(yn(Jp,this.u)),this.rt=null}ensure(e){const n=Math.max(40,Math.round(144/e));this.rt&&this.rt.width===144&&this.rt.height===n||(this.rt?.dispose(),this.rt=new at(144,n,{type:Gt,minFilter:Qe,magFilter:Qe,depthBuffer:!1,generateMipmaps:!1}),this.buf=new Uint8Array(144*n*4))}analyze(e,t,n){this.ensure(n);const{width:s,height:r}=this.rt;this.u.tWet.value=e,this.u.tDry.value=t,this.u.uTexel.value.set(1/s,1/r),this.pass.render(this.renderer,this.rt),this.renderer.readRenderTargetPixels(this.rt,0,0,s,r,this.buf),this.renderer.setRenderTarget(null);const a=s*r,o=new Float32Array(a),l=new Float32Array(a*3);for(let c=0;c<a;c++)l[c*3]=this.buf[c*4]/255*4,l[c*3+1]=this.buf[c*4+1]/255*4,l[c*3+2]=this.buf[c*4+2]/255*4,o[c]=this.buf[c*4+3]/255*2;return new nm(s,r,n,o,l)}}class nm{constructor(e,t,n,s,r){this.gw=e,this.gh=t,this.aspect=n,this.dens=s,this.absb=r,this.zoneId=new Int16Array(e*t).fill(-1),this.zones=[],this.computeZones()}cell(e,t){const n=Math.min(this.gw-1,Math.max(0,Math.floor(e/this.aspect*this.gw)));return Math.min(this.gh-1,Math.max(0,Math.floor(t*this.gh)))*this.gw+n}cellQ(e,t){return[(e+.5)/this.gw*this.aspect,(t+.5)/this.gh]}densAt(e,t){return this.dens[this.cell(e,t)]}zoneAt(e,t){return this.zoneId[this.cell(e,t)]}absAt(e,t){const n=this.cell(e,t)*3;return[this.absb[n],this.absb[n+1],this.absb[n+2]]}totalDensity(){let e=0;for(const t of this.dens)e+=t;return e/this.dens.length}coverage(e=.12){let t=0;for(const n of this.dens)n>e&&t++;return t/this.dens.length}gradAt(e,t,n=[0,0]){const s=this.aspect/this.gw,r=1/this.gh;return n[0]=(this.densAt(e+s,t)-this.densAt(e-s,t))/(2*s),n[1]=(this.densAt(e,t+r)-this.densAt(e,t-r))/(2*r),n}computeZones(){const{gw:e,gh:t,dens:n}=this,s=.09,r=new Float32Array(e*t);for(let d=0;d<t;d++)for(let g=0;g<e;g++){let _=0,u=0;for(let m=-1;m<=1;m++)for(let T=-1;T<=1;T++){const y=g+T,E=d+m;y<0||E<0||y>=e||E>=t||(_+=n[E*e+y],u++)}r[d*e+g]=_/u}const a=[];for(let d=0;d<e*t;d++)r[d]>s*1.5&&a.push(d);a.sort((d,g)=>r[g]-r[d]);const o=Math.max(5,Math.round(e*.05)),l=[];for(const d of a){const g=d%e,_=d/e|0;if(l.every(u=>(u[0]-g)**2+(u[1]-_)**2>o*o)&&l.push([g,_]),l.length>=14)break}if(!l.length)return;const c=l.map(()=>({count:0,sx:0,sy:0,sxx:0,syy:0,sxy:0,A:[0,0,0],d:0,ds:[]})),h=(o*3.5)**2;for(let d=0;d<t;d++)for(let g=0;g<e;g++){const _=d*e+g;if(n[_]<s)continue;let u=-1,m=h;for(let L=0;L<l.length;L++){const w=(l[L][0]-g)**2+(l[L][1]-d)**2;w<m&&(m=w,u=L)}if(u<0)continue;this.zoneId[_]=u;const T=c[u],[y,E]=this.cellQ(g,d);T.count++,T.sx+=y,T.sy+=E,T.sxx+=y*y,T.syy+=E*E,T.sxy+=y*E,T.A[0]+=this.absb[_*3],T.A[1]+=this.absb[_*3+1],T.A[2]+=this.absb[_*3+2],T.d+=n[_],T.ds.push(n[_])}const f=this.aspect/e*(1/t),p=[0,0];c.forEach((d,g)=>{if(d.count<6){for(let Y=0;Y<this.zoneId.length;Y++)this.zoneId[Y]===g&&(this.zoneId[Y]=-1);return}const _=d.sx/d.count,u=d.sy/d.count,m=d.sxx/d.count-_*_,T=d.syy/d.count-u*u,y=d.sxy/d.count-_*u,E=m+T,L=m*T-y*y,w=E/2+Math.sqrt(Math.max(0,E*E/4-L)),b=Math.max(1e-6,E-w);d.ds.sort((Y,v)=>Y-v);const U={id:g,center:[_,u],count:d.count,area:d.count*f,axis:.5*Math.atan2(2*y,m-T),major:Math.sqrt(w)*2,minor:Math.sqrt(b)*2,A:d.A.map(Y=>Y/d.count),meanDens:d.d/d.count,shardThr:d.ds[Math.floor(d.ds.length*.45)],radius:0,boundary:[]};for(let Y=0;Y<t;Y++)for(let v=0;v<e;v++){const S=Y*e+v;if(this.zoneId[S]!==g)continue;const[z,I]=this.cellQ(v,Y);if(U.radius=Math.max(U.radius,Math.hypot(z-_,I-u)),v>0&&n[S-1]<s||v<e-1&&n[S+1]<s||Y>0&&n[S-e]<s||Y<t-1&&n[S+e]<s){this.gradAt(z,I,p);const j=Math.hypot(p[0],p[1])||1;U.boundary.push([z,I,-p[0]/j,-p[1]/j])}}this.zones.push(U)})}}class im{constructor(e,t,n,s,{renderOrder:r=2,depthWrite:a=!1}={}){const o={vertexShader:t,fragmentShader:n,uniforms:s,transparent:!0,side:qt};this.materials=[new Rt({...o,defines:{MODE:0},depthWrite:a}),new Rt({...o,defines:{MODE:1},depthWrite:!1,depthTest:!1}),new Rt({...o,defines:{MODE:2},depthWrite:!1,depthTest:!1,blending:ea,blendEquation:rn,blendSrc:on,blendDst:on,blendSrcAlpha:on,blendDstAlpha:on})],this.geometry=e,this.uniforms=s,this.meshes=this.materials.map(l=>{const c=new Ut(e,l);return c.frustumCulled=!1,c}),this.meshes[0].renderOrder=r,this.meshes[1].renderOrder=1}attach(e){e.main.add(this.meshes[0]),e.shadow.add(this.meshes[1]),e.foot.add(this.meshes[2])}dispose(){for(const e of this.meshes)e.parent?.remove(e);for(const e of this.materials)e.dispose();this.geometry.dispose()}}const sm=`
uniform float uTime;
uniform float uAspect;
uniform float uScale;
uniform float uTech;
uniform float uHybrid;
uniform float uAgitation;
uniform vec4 uWave[8];
uniform vec3 uLight;
uniform sampler2D tWet;
uniform sampler2D tDry;
uniform sampler2D tField;
vec2 qToUv(vec2 q){ return q/vec2(uAspect, 1.0); }
vec3 toWorld(vec3 q){ return vec3((q.xy - vec2(uAspect*0.5, 0.5))*uScale, q.z*uScale); }
vec3 absAt(vec2 q){ vec2 uv = qToUv(q); return texture(tDry, uv).rgb + texture(tWet, uv).rgb; }
`,rm=`
vec4 projectShadow(vec3 world){
  vec3 L = normalize(uLight);
  world.xy -= L.xy/L.z*world.z;
  world.z = 0.01;
  return projectionMatrix*viewMatrix*vec4(world, 1.0);
}
`,dl=sm+bn+ll+cl,am=dl+rm,om=am+`
attribute vec2 aTan;
attribute float aSide;
attribute float aWidth;
attribute float aBirth;
attribute float aArc;
attribute float aDepth;
attribute vec3 aPig;
uniform float uStart;
uniform float uFade;
uniform float uLookBias;
varying float vSide;
varying float vGrow;
varying float vDepth;
varying float vArc;
varying float vLook;
varying vec2 vQ;
varying vec3 vPig;
void main(){
  float age = uTime - uStart;
  float grow = clamp((age - aBirth)*3.0, 0.0, 1.0);
  vec4 F = texture(tField, qToUv(position.xy));
  float look = clamp(F.b*uHybrid + uLookBias, 0.0, 1.0);
  // La curvatura inducida por el campo crece con la distancia a la raíz, acotada.
  vec2 bend = F.rg*min(aArc, 0.25)*0.7;
  vec2 p = position.xy + bend;
  vec2 tg = normalize(aTan + F.rg*min(aArc, 0.25)*3.0 + 1e-5);
  vec2 nr = vec2(-tg.y, tg.x);
  float w = max(aWidth, 0.0018)*grow*uFade;
  p += nr*aSide*w*0.5;
  float z = 0.002 + aArc*0.06*(1.0 - 0.7*look) + waveZ(position.xy)*0.5;
  vec3 world = toWorld(vec3(p, z));
  vSide = aSide; vGrow = grow; vDepth = aDepth; vArc = aArc; vLook = look; vQ = p; vPig = aPig;
#if MODE == 1
  gl_Position = projectShadow(world);
#else
  gl_Position = projectionMatrix*viewMatrix*vec4(world, 1.0);
#endif
}
`,lm=dl+`
uniform float uStart;
uniform float uFade;
uniform float uShed;
varying float vSide;
varying float vGrow;
varying float vDepth;
varying float vArc;
varying float vLook;
varying vec2 vQ;
varying vec3 vPig;
void main(){
  if (vGrow <= 0.0) discard;
  float s = abs(vSide);
#if MODE == 0
  // Nervadura plana: cuerpo índigo, filo cian fino y eje luminoso sólo en los troncos.
  vec3 deep = vec3(0.07, 0.1, 0.34);
  vec3 cy = vec3(0.42, 0.84, 0.96);
  vec3 dig = mix(deep, cy, smoothstep(0.62, 0.9, s)*0.7);
  float spine = (1.0 - smoothstep(0.0, 0.16, s))*(1.0 - smoothstep(0.0, 1.5, vDepth));
  dig = mix(dig, vec3(0.9, 0.98, 1.0), spine*0.7);
  float a = smoothstep(1.0, 0.82, s)*mix(0.9, 0.6, vDepth/3.0);
  // Aspecto pigmentado: borde irregular y marea más oscura en el perímetro.
  float rag = fbm2(vQ*500.0 + vArc*30.0);
  float sp = s + (rag - 0.5)*0.55*vLook;
  vec3 Ah = hybridTint(vPig, 0.5 + 0.5*sin(vArc*20.0 + vDepth), 0.35);
  vec3 pig = PAPER*exp(-Ah*(0.55 + 0.9*smoothstep(0.35, 0.95, sp)));
  vec3 col = mix(dig, pig, vLook);
  float ap = smoothstep(1.0, 0.8, sp)*0.88;
  a = mix(a, ap, vLook)*uFade*uTech;
  gl_FragColor = vec4(col, a);
#elif MODE == 1
  gl_FragColor = vec4(0.05, 0.05, 0.12, 0.13*smoothstep(1.0, 0.5, s)*uFade*uTech*(1.0 - 0.6*vLook));
#else
  float amt = vLook*uShed*uFade*smoothstep(1.0, 0.4, s)*(0.15 + uAgitation);
  gl_FragColor = vec4(vPig*0.004*amt, 0.0012*amt);
#endif
}
`,vt=(i,e,t)=>Math.min(t,Math.max(e,i)),kt=(i,e,t)=>i+(e-i)*t,cn=(i,e,t)=>{const n=vt((t-i)/(e-i),0,1);return n*n*(3-2*n)},Zr=i=>(i=vt(i,0,1),i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2);function So(i){let e=i>>>0;return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}function as(i,e){let t=i*374761393+e*668265263|0;return t=Math.imul(t^t>>>13,1274126177),((t^t>>>16)>>>0)/4294967296}function Jr(i,e){const t=Math.floor(i),n=Math.floor(e),s=i-t,r=e-n,a=s*s*(3-2*s),o=r*r*(3-2*r),l=as(t,n),c=as(t+1,n),h=as(t,n+1),f=as(t+1,n+1);return kt(kt(l,c,a),kt(h,f,a),o)}const cm=i=>Jr(i,.5);function hm(i,e,t=[0,0]){const s=(r,a)=>Jr(r,a)*.67+Jr(r*2.1+5.3,a*2.1)*.33;return t[0]=(s(i,e+.05)-s(i,e-.05))/(2*.05),t[1]=-(s(i+.05,e)-s(i-.05,e))/(2*.05),t}function um(i,e,t,n,s,r=[]){const a=[0,0],o=[0,0],l=(c,h,f,p,d,g)=>{const _=[c.slice()],u=[d],m=[g],T=Math.round(t.steps*Math.pow(.72,p)*(.75+n()*.5)),y=t.step*(1-.12*p);let[E,L]=h,[w,b]=c;for(let v=0;v<T;v++){s?s.gradAt(w,b,a):a[0]=a[1]=0,hm(w*t.curlScale+t.seed,b*t.curlScale,o);const S=Math.hypot(o[0],o[1])||1;E+=-a[0]*t.avoid*.02+o[0]/S*t.wander+(n()-.5)*.12,L+=-a[1]*t.avoid*.02+o[1]/S*t.wander+(n()-.5)*.12;const z=Math.hypot(E,L)||1;if(E/=z,L/=z,w+=E*y,b+=L*y,d+=y,w<.01||b<.01||w>t.aspect-.01||b>.99)break;if(_.push([w,b]),u.push(d),m.push(g+(d-u[0])/t.speed),p<t.maxDepth&&v>1&&v<T-2&&n()<t.branchProb){const V=(n()<.5?-1:1)*(.45+n()*.45),j=Math.cos(V),G=Math.sin(V);l([w,b],[E*j-L*G,E*G+L*j],f*.62,p+1,d,m[m.length-1]);const $=Math.cos(-V*.35),H=Math.sin(-V*.35);[E,L]=[E*$-L*H,E*H+L*$]}}const U=_.length;if(U<2)return;const Y=_.map((v,S)=>f*Math.pow(1-S/U,.75));r.push({pts:_,width:Y,arc:u,birth:m,depth:p,pig:t.pig})};return l(i,e,t.width,0,0,t.delay),r}function dm(i){let e=0,t=0;for(const _ of i)e+=_.pts.length*2,t+=(_.pts.length-1)*6;const n=new Float32Array(e*3),s=new Float32Array(e*2),r=new Float32Array(e),a=new Float32Array(e),o=new Float32Array(e),l=new Float32Array(e),c=new Float32Array(e),h=new Float32Array(e*3),f=new Uint32Array(t);let p=0,d=0;for(const _ of i){const u=_.pts.length,m=p;for(let T=0;T<u;T++){const y=_.pts[Math.max(0,T-1)],E=_.pts[Math.min(u-1,T+1)];let L=E[0]-y[0],w=E[1]-y[1];const b=Math.hypot(L,w)||1;L/=b,w/=b;for(let U=0;U<2;U++)n[p*3]=_.pts[T][0],n[p*3+1]=_.pts[T][1],n[p*3+2]=0,s[p*2]=L,s[p*2+1]=w,r[p]=U===0?-1:1,a[p]=_.width[T],o[p]=_.birth[T],l[p]=_.arc[T],c[p]=_.depth,h[p*3]=_.pig[0],h[p*3+1]=_.pig[1],h[p*3+2]=_.pig[2],p++}for(let T=0;T<u-1;T++){const y=m+T*2;f[d++]=y,f[d++]=y+1,f[d++]=y+2,f[d++]=y+1,f[d++]=y+3,f[d++]=y+2}}const g=new jt;return g.setAttribute("position",new rt(n,3)),g.setAttribute("aTan",new rt(s,2)),g.setAttribute("aSide",new rt(r,1)),g.setAttribute("aWidth",new rt(a,1)),g.setAttribute("aBirth",new rt(o,1)),g.setAttribute("aArc",new rt(l,1)),g.setAttribute("aDepth",new rt(c,1)),g.setAttribute("aPig",new rt(h,3)),g.setIndex(new rt(f,1)),g}class fm extends im{constructor(e,t,n,s=0){const r={uStart:{value:n},uFade:{value:1},uShed:{value:.4},uLookBias:{value:s}};super(dm(t),om,lm,{...e,...r},{renderOrder:3}),this.own=r,this.polys=t}}class pm{constructor(e){this.comp=e,this.shared=e.shared,this.groups={main:e.structGroup,shadow:e.shadowGroup,foot:e.footScene},this.structures=[],this.trees=[],this.folds=[],this.forest=null,this.waveIdx=0,this.lastHybridStart=1/0}addWave(e,t,n,s){this.shared.uWave.value[this.waveIdx].set(e,t,s,n),this.waveIdx=(this.waveIdx+1)%8}add(e){return e.attach(this.groups),this.structures.push(e),e}buildRupture(e,t,n,s){const r=So(n*1e3|0),a=e.zones.map(c=>{const h=Math.hypot(c.center[0]-t[0],c.center[1]-t[1]);return{...c,distO:h,delay:.35+h*2.4}}),o=c=>c.area*c.meanDens,l=[...a].sort((c,h)=>o(h)-o(c));this.folds=[],this.folds.push({cx:t[0],cy:t[1],angle:r()*Math.PI,amp0:.014,width:.16,halfLen:.7,delay:0,phase:r()*6,extra:0,start:n});for(const c of l.slice(0,4))this.folds.push({cx:c.center[0],cy:c.center[1],angle:c.axis+(r()<.5?0:Math.PI/2),amp0:(r()<.5?-1:1)*(.01+r()*.012),width:.1+r()*.1,halfLen:vt(c.major*1.5+.15,.25,.8),delay:c.delay+.2,phase:r()*6,extra:0,start:n});return this.addWave(t[0],t[1],.012,n),{zones:a.length}}spawnTree(e,t,n,s,r,a,o=1){const l=So(Math.random()*1e9|0),c=um(e,t,{steps:Math.round(18*o),step:.008,maxDepth:3,branchProb:.2,speed:.09,avoid:.25,wander:.45,curlScale:4,aspect:a,width:.0034*o,delay:0,seed:l()*50,pig:n},l,r);if(!c.length)return null;const f={forest:this.add(new fm(this.shared,c,s,.65)),polys:c,start:s,life:45+Math.random()*15,injected:0};if(this.trees.push(f),this.trees.length>18){const p=this.trees.find(d=>d.life>s-d.start+6);p&&(p.life=s-p.start+5)}return f}get active(){return this.folds.length>0||this.structures.length>0}update(e,t,n){const{mouse:s,vel:r,speed:a,hybrid:o}=n,l=this.shared.uFold.value,c=this.shared.uFoldB.value,h=cn(.02,.1,a)*(1-cn(.5,1.2,a)),f=Math.hypot(r[0],r[1])||1;for(let p=0;p<6;p++){const d=this.folds[p];if(!d){l[p].set(0,0,0,0);continue}if(s){const u=Math.cos(d.angle),m=Math.sin(d.angle),T=s[0]-d.cx,y=s[1]-d.cy,E=-T*m+y*u,L=T*u+y*m,w=Math.exp(-((E/(d.width*1.5))**2))*(Math.abs(L)<d.halfLen?1:.3),b=vt((-r[0]*m+r[1]*u)*3,-1,1)*w*h;d.extra+=(b-d.extra)*Math.min(1,e*1.2)*w,d.angle+=e*.3*w*h*((u*r[1]-m*r[0])/f)}d.extra*=Math.exp(-e*.15);const g=Zr((t-d.start-d.delay)/3),_=d.amp0*g*(1+.15*Math.sin(t*.21+d.phase))*(1+.7*d.extra)*(1-.5*o);l[p].set(d.cx,d.cy,d.angle,_),c[p].set(d.width,d.halfLen,0,0)}for(let p=this.trees.length-1;p>=0;p--){const d=this.trees[p],g=t-d.start;d.forest.own.uFade.value=1-cn(d.life-6,d.life,g),d.forest.own.uShed.value=Math.exp(-g/20)}for(let p=this.structures.length-1;p>=0;p--){const d=this.structures[p];if(d.own.uFade&&d.own.uFade.value<=0){d.dispose(),this.structures.splice(p,1);const g=this.trees.findIndex(_=>_.forest===d);g>=0&&this.trees.splice(g,1)}}}clear(){for(const e of this.structures)e.dispose();this.structures=[],this.trees=[],this.folds=[],this.forest=null,this.lastHybridStart=1/0;for(const e of this.shared.uWave.value)e.set(0,0,0,0);for(const e of this.shared.uFold.value)e.set(0,0,0,0)}}class mm{constructor(e){this.exp=e,this.reset()}reset(){this.active=!1,this.origin=[0,0],this.radius=0,this.dir=[1,0],this.stretch=0,this.echo=[],this.echoMode=0}nextEchoMode(){this.echoMode=(this.echoMode+1)%3}record(e,t){if(!(!e||!e.segs||!e.A)){for(const n of e.segs)this.echo.push({seg:n,A:e.A.slice(),t});this.echo.length>400&&this.echo.splice(0,this.echo.length-400)}}emitEcho(e){const t=this.exp.watercolor,n=this.exp.aspect,s=1.3;for(;this.echo.length&&this.echo[0].t+s+2.5<e;)this.echo.shift();let r=Math.min(3,t.freeSegments-1);const a=Xt[(this.echoMode+1)%Xt.length].A,o=this.echoMode===0?(l,c)=>[n-l,c]:this.echoMode===1?(l,c)=>[n-l,1-c]:(l,c)=>[l,1-c];for(;r>0&&this.echo.length&&this.echo[0].t+s<=e;){const{seg:l,A:c}=this.echo.shift(),[h,f,p,d,g,_,u]=l;t.addSegment(...o(h,f),...o(p,d),g*.75,_*.8,u*.5,hi(c,a,.45),.9,Math.random()*40),r--}}begin(e,t){this.active=!0,this.origin=e.slice(),this.radius=.04,this.start=t,this.exp.digital.lastHybridStart=t}insideFront(e,t){const n=e-this.origin[0],s=t-this.origin[1],r=n*this.dir[0]+s*this.dir[1],a=-n*this.dir[1]+s*this.dir[0];return Math.hypot(r/(1+this.stretch*(r>0?1:0)),a)<this.radius-.05}update(e,t,n,s){const r=this.exp.field;if(!this.active){r.u.uHyb.value.w=0;return}const a=this.exp.transition;if(this.exp.watercolor,a.transitioning&&n){const o=n[0]-this.origin[0],l=n[1]-this.origin[1],c=Math.hypot(o,l);if(c>.02){const h=Math.min(1,e*1.5);this.dir[0]+=(o/c-this.dir[0])*h,this.dir[1]+=(l/c-this.dir[1])*h;const f=Math.hypot(this.dir[0],this.dir[1])||1;this.dir[0]/=f,this.dir[1]/=f,this.stretch+=(vt(c*3,0,1.6)-this.stretch)*h}}this.radius+=e*(a.transitioning?.2:.12),r.u.uHyb.value.set(this.origin[0],this.origin[1],this.radius,1),r.u.uHybDir.value.set(this.dir[0],this.dir[1],this.stretch),a.hybrid>.5&&(this.record(s,t),this.emitEcho(t))}get depositAmount(){return this.active?cn(.1,.8,this.exp.transition.hybrid):0}}class gm{constructor(){this.pi=Math.floor(Math.random()*zt.length),this.cur=zt[this.pi].A.slice(),this.target=this.cur.slice(),this.tmp=[0,0,0],this.digitalIdx=0,this.last=null,this.lastDir=null,this.speed=0,this.idle=10,this.travel=0,this.t=0,this.seed=Math.random()*100,this.side=1}reset(){this.last=null,this.lastDir=null,this.idle=10,this.speed=0}newStroke(e){const t=zt.length,n=(Math.random()<.6?1:2)*(Math.random()<.35?-1:1);this.pi=(this.pi+n+t)%t,hi(this.cur,zt[this.pi].A,.9,this.cur),this.target=zt[this.pi].A.slice(),e>.3&&(this.digitalIdx=(this.digitalIdx+1)%Xt.length),this.seed=Math.random()*100}update(e,t,n,s){if(this.t+=e,!t.length)return this.idle+=e,this.speed*=Math.exp(-e*8),null;if(!this.last)return this.last=t[t.length-1].slice(),null;const r=[this.last],a=Math.max(1,Math.ceil(t.length/4));for(let b=a-1;b<t.length;b+=a)r.push(t[b]);r[r.length-1]!==t[t.length-1]&&r.push(t[t.length-1]);let o=0;for(let b=1;b<r.length;b++)o+=Math.hypot(r[b][0]-r[b-1][0],r[b][1]-r[b-1][1]);const l=o/Math.max(e,.001);this.speed+=(l-this.speed)*Math.min(1,e*10);const c=r[0],h=r[r.length-1];if(this.last=h.slice(),o<1e-5)return this.idle+=e,null;this.idle>.7&&this.newStroke(n.hybrid),this.idle=0;const f=[(h[0]-c[0])/o,(h[1]-c[1])/o];let p=0;if(this.lastDir){const b=this.lastDir[0]*f[1]-this.lastDir[1]*f[0],U=this.lastDir[0]*f[0]+this.lastDir[1]*f[1];p=Math.atan2(b,U)}if(this.lastDir=f,this.travel+=o,this.travel>.9){this.travel=0;const b=zt.length;this.target=zt[(this.pi+(Math.random()<.5?1:b-1))%b].A.slice()}hi(this.cur,this.target,Math.min(1,e*.5),this.cur);const d={pos:h,dir:f,speed:this.speed,turn:p,total:o},g=n.amount;if(g<=.002)return d;let _=this.cur;if(n.hybrid>0){const b=.5+.5*Math.sin(this.t*.7+h[0]*6);_=hi(this.cur,Xt[this.digitalIdx].A,n.hybrid*(.25+.45*b),this.tmp)}d.A=_;const u=cn(.06,1.5,this.speed),m=Math.min(e*60,2.5),T=n.fine?.35:1,y=kt(.0075,.03,u)*(.85+.3*cm(this.t*1.7+this.seed))*T,E=kt(.2,.55,u)*m,L=kt(.3,.11,u)*g*m*(n.fine?1.5:1),w=kt(.35,1,u);d.segs=[];for(let b=1;b<r.length;b++){const U=r[b-1],Y=r[b],v=Math.hypot(Y[0]-U[0],Y[1]-U[1])/o;if(v<=0)continue;const S=[U[0],U[1],Y[0],Y[1],y,E*Math.max(v,.35),L*Math.max(v,.35)];s.addSegment(...S,_,w,this.seed+b*.37),d.segs.push(S)}if(Math.abs(p)>.75&&this.speed>.1&&(s.addSegment(c[0],c[1],c[0]+f[0]*y*.4,c[1]+f[1]*y*.4,y*1.35,E*.7,L*1.9,_,.8,this.seed+3.1),d.accent=!0),u>.45&&Math.random()<.55){const b=u>.8?2:1;for(let U=0;U<b;U++){const Y=Math.random();this.side=-this.side;const v=y*(1.5+Math.random()*2.4)*this.side,S=kt(c[0],h[0],Y)-f[1]*v,z=kt(c[1],h[1],Y)+f[0]*v;s.addSegment(S,z,S+f[0]*y*.7,z+f[1]*y*.7,y*(.25+Math.random()*.25),.5*m,L*.8,_,1,Math.random()*50)}}return d}}const fl=`
precision highp float;
precision highp sampler2D;
in vec2 vUv;
`,vm=fl+`
out vec4 oAgent;
uniform sampler2D tAgent;
uniform sampler2D tTrail;
uniform sampler2D tDry;
uniform sampler2D tWet;
uniform sampler2D tField;
uniform float uAspect;
uniform float uDt;
uniform float uTime;
uniform float uActive;
uniform float uGrowR;
uniform vec2 uOrigin;
uniform float uHybrid;
uniform float uSpawnRate;
uniform float uStrokeSteal;
uniform vec4 uMouse;
uniform vec4 uStroke[16];
uniform int uStrokeCount;
uniform float uSA;
uniform float uRA;
uniform float uSD;
uniform float uSpeed;
${bn}
vec2 toUv(vec2 q){ return q/vec2(uAspect, 1.0); }
float food(vec2 q){
  vec2 uv = toUv(q);
  vec3 A = texture(tDry, uv).rgb + texture(tWet, uv).rgb*mix(1.0, 4.0, uHybrid);
  return dot(A, vec3(0.3333));
}
float sense(vec2 q){
  float t = texture(tTrail, toUv(q)).r;
  vec2 dm = q - uMouse.xy;
  return t + food(q)*2.2 + uMouse.w*10.0*exp(-dot(dm, dm)/0.006);
}
void main(){
  vec4 a = texture(tAgent, vUv);
  float t = uTime;
  // El gesto recluta agentes: nacen sobre el trazo con su misma dirección como
  // "caminantes jóvenes" (w > 1) que avanzan rectos y luego la red los absorbe.
  // uStroke: xy = posición, zw = dirección del gesto.
  if (uActive > 0.5 && uStrokeCount > 0 && hash12(vUv*7.3 + t*2.1) < uStrokeSteal){
    int k = int(floor(hash12(vUv*19.1 + t)*float(uStrokeCount)));
    vec4 st = uStroke[k];
    vec2 cand = st.xy + (vec2(hash12(vUv*3.7 + t), hash12(vUv*8.9 - t)) - 0.5)*0.008;
    float head = length(st.zw) > 1e-4 ? atan(st.w, st.z) : hash12(vUv + t)*6.2831853;
    oAgent = vec4(cand, head + (hash12(vUv*5.3 - t) - 0.5)*1.3, 2.0);
    return;
  }
  if (a.w <= 0.0){
    oAgent = a;
    if (uActive < 0.5 || hash12(vUv*311.7 + t*1.37) > uSpawnRate) return;
    vec2 cand = vec2(hash12(vUv*53.1 + t), hash12(vUv*91.7 - t*0.7))*vec2(uAspect, 1.0);
    bool inside = length(cand - uOrigin) < uGrowR;
    if (inside && (food(cand) > 0.08 || hash12(vUv*3.3 + t) < 0.04))
      oAgent = vec4(cand, hash12(vUv + t)*6.2831853, 1.0);
    return;
  }
  vec2 p = a.xy;
  float ang = a.z;
  float rnd = hash12(vUv*131.1 + t*3.7);
  bool young = a.w > 1.0;
  if (young){
    // Trazo propio: casi recto, con leve ondulación.
    ang += (rnd - 0.5)*0.12;
  } else {
    float sa = uSA, ra = uRA*min(uDt*60.0, 2.0);
    float sF = sense(p + vec2(cos(ang), sin(ang))*uSD);
    float sL = sense(p + vec2(cos(ang + sa), sin(ang + sa))*uSD);
    float sR = sense(p + vec2(cos(ang - sa), sin(ang - sa))*uSD);
    if (sF > sL && sF > sR) ang += (rnd - 0.5)*0.1;
    else if (sF < sL && sF < sR) ang += (rnd - 0.5)*2.0*ra;
    else if (sL > sR) ang += ra;
    else ang -= ra;
  }
  vec2 F = texture(tField, toUv(p)).rg;
  p += (vec2(cos(ang), sin(ang))*uSpeed*(young ? 1.6 : 1.0) + F*0.5)*uDt;
  if (p.x < 0.003 || p.x > uAspect - 0.003){ ang = 3.14159265 - ang; p.x = clamp(p.x, 0.003, uAspect - 0.003); }
  if (p.y < 0.003 || p.y > 0.997){ ang = -ang; p.y = clamp(p.y, 0.003, 0.997); }
  float life = young ? max(1.0, a.w - uDt*0.7) : a.w - uDt*0.012;
  if (uActive < 0.5) life -= uDt*0.6;
  // Renovación lenta: la red nunca se congela.
  if (!young && hash12(vUv*77.7 + t*0.91) < 0.0015) life = 0.0;
  oAgent = vec4(p, ang, life);
}
`,_m=fl+`
out vec4 oTrail;
uniform sampler2D tTrail;
uniform vec2 uTexel;
uniform float uDecay;
void main(){
  float c = texture(tTrail, vUv).r;
  float s = 0.0;
  for (int j = -1; j <= 1; j++) for (int i = -1; i <= 1; i++)
    s += texture(tTrail, vUv + vec2(float(i), float(j))*uTexel).r;
  oTrail = vec4(mix(c, s/9.0, 0.3)*uDecay, 0.0, 0.0, 1.0);
}
`,xm=`
precision highp float;
precision highp sampler2D;
in vec3 position;
uniform sampler2D tAgent;
uniform float uSize;
uniform float uAspect;
out float vAlive;
void main(){
  float id = float(gl_VertexID);
  vec2 ref = (vec2(mod(id, uSize), floor(id/uSize)) + 0.5)/uSize;
  vec4 a = texture(tAgent, ref);
  vAlive = a.w;
  gl_PointSize = 1.0;
  gl_Position = a.w > 0.0 ? vec4((a.xy/vec2(uAspect, 1.0))*2.0 - 1.0, 0.0, 1.0) : vec4(2.0, 2.0, 2.0, 1.0);
}
`,Mm=`
precision highp float;
in float vAlive;
out vec4 oTrail;
uniform float uDeposit;
void main(){ oTrail = vec4(uDeposit*min(vAlive*4.0, 1.0)*(vAlive > 1.0 ? 2.5 : 1.0), 0.0, 0.0, 0.0); }
`;class Sm{constructor(e,t,n=256){this.renderer=e,this.size=n;const s={type:t,minFilter:ft,magFilter:ft,depthBuffer:!1,generateMipmaps:!1};this.agents=[new at(n,n,s),new at(n,n,s)],this.blank=new al(new Uint8Array(4),1,1),this.blank.needsUpdate=!0,this.strokes=Array.from({length:16},()=>new we(0,0,0,0)),this.u={tAgent:{value:null},tTrail:{value:null},tDry:{value:null},tWet:{value:null},tField:{value:null},uAspect:{value:1},uDt:{value:.016},uTime:{value:0},uActive:{value:0},uGrowR:{value:0},uOrigin:{value:new Le},uHybrid:{value:0},uSpawnRate:{value:.03},uStrokeSteal:{value:0},uMouse:{value:new we(-9,-9,0,0)},uStroke:{value:this.strokes},uStrokeCount:{value:0},uSA:{value:.62},uRA:{value:.38},uSD:{value:.011},uSpeed:{value:.085}},this.agentPass=new En(yn(vm,this.u)),this.trailU={tTrail:{value:null},uTexel:{value:new Le},uDecay:{value:.95}},this.trailPass=new En(yn(_m,this.trailU));const r=n*n,a=new jt;a.setAttribute("position",new rt(new Float32Array(r*3),3)),this.depU={tAgent:{value:null},uSize:{value:n},uAspect:this.u.uAspect,uDeposit:{value:.35}};const o=new ol({glslVersion:_s,vertexShader:xm,fragmentShader:Mm,uniforms:this.depU,depthTest:!1,depthWrite:!1,transparent:!0,blending:ea,blendEquation:rn,blendSrc:on,blendDst:on,blendSrcAlpha:on,blendDstAlpha:on});this.points=new Op(a,o),this.points.frustumCulled=!1,this.depScene=new Ss,this.depScene.add(this.points),this.depCam=new As(-1,1,1,-1,0,1),this.trails=null,this.reset()}resize(e){const n=Math.max(160,Math.round(640/e));this.trails?.forEach(r=>r.dispose());const s={type:Hn,minFilter:Qe,magFilter:Qe,depthBuffer:!1,generateMipmaps:!1};this.trails=[new at(640,n,s),new at(640,n,s)],this.trails.forEach(r=>Kt(this.renderer,r)),this.trailU.uTexel.value.set(1/640,1/n),this.u.uAspect.value=e}reset(){this.agents.forEach(e=>Kt(this.renderer,e)),this.trails?.forEach(e=>Kt(this.renderer,e)),this.active=!1,this.alive=0}get trail(){return this.trails[0].texture}setStrokes(e){const t=Math.min(16,e.length);for(let n=0;n<t;n++)this.strokes[n].set(e[n][0],e[n][1],e[n][3]||0,e[n][4]||0);this.u.uStrokeCount.value=t}burst(e){this.pendingBurst=e}update(e,t){if(!t.active&&!this.active)return;this.active=t.active||this.alive>0,this.alive=t.active?1:Math.max(0,this.alive-e*.5);const n=this.u;if(n.uDt.value=e,n.uTime.value=t.time,n.uActive.value=t.active?1:0,n.uGrowR.value=t.growR,n.uOrigin.value.set(t.origin[0],t.origin[1]),n.uHybrid.value=t.hybrid,n.uSpawnRate.value=t.spawnRate,n.uStrokeSteal.value=t.strokeSteal,this.pendingBurst){const r=this.pendingBurst.slice(0,16);for(let a=0;a<r.length;a++)this.strokes[a].set(...r[a]);n.uStrokeCount.value=r.length,n.uStrokeSteal.value=.025,this.pendingBurst=null}n.uMouse.value.copy(t.mouse),n.tDry.value=t.dry,n.tWet.value=t.wet,n.tField.value=t.field,n.tTrail.value=this.trails[0].texture,n.tAgent.value=this.agents[0].texture,this.agentPass.render(this.renderer,this.agents[1]),this.agents.reverse(),this.trailU.tTrail.value=this.trails[0].texture,this.trailU.uDecay.value=Math.pow(.9,e*60),this.trailPass.render(this.renderer,this.trails[1]),this.depU.tAgent.value=this.agents[0].texture;const s=this.renderer;s.autoClear=!1,s.setRenderTarget(this.trails[1]),s.render(this.depScene,this.depCam),s.autoClear=!0,s.setRenderTarget(null),this.trails.reverse()}}class ym{constructor(e,t){this.renderer=e,this.type=t,this.strokes=Array.from({length:16},()=>new we(0,0,0,0)),this.u={tState:{value:null},tDry:{value:null},tWet:{value:null},tField:{value:null},uTexel:{value:new Le},uAspect:{value:1},uTime:{value:0},uAdvect:{value:0},uStepDt:{value:.45},uIterSec:{value:0},uActive:{value:0},uGrowR:{value:0},uOrigin:{value:new Le},uSeedRate:{value:0},uMouse:{value:new we(-9,-9,0,0)},uStroke:{value:this.strokes},uStrokeCount:{value:0}},this.pass=new En(yn(Hp,this.u)),this.rts=null,this.alive=0}resize(e){const n=Math.max(200,Math.round(720/e));this.rts?.forEach(r=>r.dispose());const s={type:this.type,minFilter:Qe,magFilter:Qe,depthBuffer:!1,generateMipmaps:!1};this.rts=[new at(720,n,s),new at(720,n,s)],this.reset(),this.u.uTexel.value.set(1/720,1/n),this.u.uAspect.value=e,this.texel=[1/720,1/n]}reset(){this.rts?.forEach(e=>Kt(this.renderer,e)),this.alive=0}get texture(){return this.rts[0].texture}setStrokes(e){const t=Math.min(16,e.length);for(let n=0;n<t;n++)this.strokes[n].set(e[n][0],e[n][1],0,0);this.u.uStrokeCount.value=t}update(e,t,n){if(this.alive=t.active?4:this.alive-e,this.alive<=0)return;const s=this.u;s.uTime.value=t.time,s.uActive.value=t.active?1:0,s.uGrowR.value=t.growR,s.uOrigin.value.set(t.origin[0],t.origin[1]),s.uSeedRate.value=t.seedRate,s.uMouse.value.copy(t.mouse),s.uAdvect.value=e/n*.8,s.uIterSec.value=e/n,s.tDry.value=t.dry,s.tWet.value=t.wet,s.tField.value=t.field;for(let r=0;r<n;r++)s.tState.value=this.rts[0].texture,this.pass.render(this.renderer,this.rts[1]),this.rts.reverse(),r===0&&(s.uStrokeCount.value=0,s.uMouse.value.w=0);this.renderer.setRenderTarget(null)}}const Em=1.1,Tm=7.5,yo=2.4,Am=10;class bm{constructor(){this.listeners={},this.reset()}on(e,t){var n;((n=this.listeners)[e]||(n[e]=[])).push(t)}emit(e,...t){(this.listeners[e]||[]).forEach(n=>n(...t))}reset(){this.phase=1,this.charge=0,this.holding=!1,this.holdPos=[0,0],this.rate=1,this.trans=null,this.tech=0,this.hybrid=0,this.ruptureT=-1}get transitioning(){return!!this.trans}beginHold(e,t=0,n=1){return this.trans||this.phase===3?!1:(this.holding=!0,this.holdPos=e.slice(),this.rate=(this.phase===2?vt(1.25-t*1.4,.35,1):1)*n,!0)}moveHold(e){this.holding&&(this.holdPos=e.slice())}endHold(){this.holding=!1}update(e,t){if(this.holding&&!this.trans){if(this.charge+=e/Em*this.rate,this.charge>=1){this.charge=1,this.holding=!1;const n=this.phase+1;this.trans={to:n,start:t,duration:n===2?Tm:Am,origin:this.holdPos.slice()},this.phase=n,this.emit("trigger",n,this.holdPos.slice(),t)}}else this.charge=Math.max(0,this.charge-e*(this.trans?.6:1.4));if(this.trans){const n=vt((t-this.trans.start)/this.trans.duration,0,1);this.trans.to===2?this.tech=Zr((t-this.trans.start-yo)/(this.trans.duration-yo-.5)):this.hybrid=Zr(vt(n*1.6,0,1)),n>=1&&(this.emit("complete",this.trans.to,t),this.trans=null)}this.progress=this.trans?vt((t-this.trans.start)/this.trans.duration,0,1):1,this.ruptureT=this.trans&&this.trans.to===2?t-this.trans.start:this.phase>=2?99:-1}}class wm{constructor(e){this.onChange=e,this.tier=0,this.avg=1/60,this.slowFor=0,this.cooldown=4}sample(e){this.avg+=(e-this.avg)*.05,this.cooldown-=e,!(this.cooldown>0)&&(this.avg>1/42?this.slowFor+=e:this.slowFor=Math.max(0,this.slowFor-e),this.slowFor>2.5&&this.tier<2&&(this.tier++,this.slowFor=0,this.cooldown=5,this.onChange(this.tier)))}}const Eo=[{pixelRatio:2,simMax:1100,substeps:2,footEvery:2,rdIterations:4},{pixelRatio:1.5,simMax:860,substeps:2,footEvery:3,rdIterations:3},{pixelRatio:1,simMax:680,substeps:1,footEvery:4,rdIterations:3}];class Rm{constructor(e,t){this.el=e,this.input=t,this.onMove=n=>{const s=n.getCoalescedEvents?n.getCoalescedEvents():null;if(s&&s.length)for(const r of s)t.injectPointer(r.clientX,r.clientY);else t.injectPointer(n.clientX,n.clientY)},this.onDown=n=>{n.button===0&&(e.setPointerCapture?.(n.pointerId),t.injectPointer(n.clientX,n.clientY),t.injectDown(n.clientX,n.clientY))},this.onUp=n=>{n.button===0&&t.injectUp(n.clientX,n.clientY)},this.onLeave=()=>t.injectLeave(),this.onKey=n=>{if(n.repeat||n.ctrlKey||n.metaKey||n.altKey)return;const s=n.key.toLowerCase();(s==="r"||s==="h"||s==="m"||s==="c")&&t.injectKey(s)},this.onContext=n=>n.preventDefault(),e.addEventListener("pointermove",this.onMove),e.addEventListener("pointerdown",this.onDown),e.addEventListener("pointerup",this.onUp),e.addEventListener("pointercancel",this.onUp),e.addEventListener("pointerleave",this.onLeave),e.addEventListener("contextmenu",this.onContext),window.addEventListener("keydown",this.onKey)}dispose(){const e=this.el;e.removeEventListener("pointermove",this.onMove),e.removeEventListener("pointerdown",this.onDown),e.removeEventListener("pointerup",this.onUp),e.removeEventListener("pointercancel",this.onUp),e.removeEventListener("pointerleave",this.onLeave),e.removeEventListener("contextmenu",this.onContext),window.removeEventListener("keydown",this.onKey)}}class Cm{constructor(e){this.listeners={},this.samples=[],this.pointer={x:0,y:0,inside:!1,down:!1,fine:!1},this.strokeBreak=!1,this.penWasDown=!1,this.press=null,this.HOLD_BREAK_PX=14,this.TAP_MAX_S=.25,this.sources=[new Rm(e,this)]}on(e,t){var n;((n=this.listeners)[e]||(n[e]=[])).push(t)}emit(e,...t){(this.listeners[e]||[]).forEach(n=>n(...t))}addSource(e){this.sources.push(e)}injectPointer(e,t){this.pointer.x=e,this.pointer.y=t,this.pointer.inside=!0,this.pointer.fine=!1,this.samples.push([e,t]),this.press&&!this.press.broken&&Math.hypot(e-this.press.x,t-this.press.y)>this.HOLD_BREAK_PX&&(this.press.broken=!0,this.emit("hold:end",{broken:!0}))}injectLeave(){this.pointer.inside=!1}injectCursor(e,t,n,s,r){r&&(this.pointer.x=e,this.pointer.y=t),this.pointer.inside=r,this.pointer.fine=s,n&&(this.penWasDown||(this.strokeBreak=!0),this.samples.push([e,t])),this.penWasDown=n}consumeBreak(){const e=this.strokeBreak;return this.strokeBreak=!1,e}injectDown(e,t){this.pointer.down=!0,this.press={x:e,y:t,t:performance.now(),broken:!1},this.emit("hold:start",{x:e,y:t})}injectUp(e,t){this.pointer.down=!1;const n=this.press;if(this.press=null,!n)return;n.broken||this.emit("hold:end",{broken:!1});const s=(performance.now()-n.t)/1e3;!n.broken&&s<this.TAP_MAX_S&&this.emit("tap",{x:e,y:t})}injectKey(e){this.emit("key",e)}consumeSamples(){const e=this.samples;return this.samples=[],e}}const Pm="modulepreload",Dm=function(i){return"/"+i},To={},Lm=function(e,t,n){let s=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),o=a?.nonce||a?.getAttribute("nonce");s=Promise.allSettled(t.map(l=>{if(l=Dm(l),l in To)return;To[l]=!0;const c=l.endsWith(".css"),h=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${h}`))return;const f=document.createElement("link");if(f.rel=c?"stylesheet":Pm,c||(f.as="script"),f.crossOrigin="",f.href=l,o&&f.setAttribute("nonce",o),document.head.appendChild(f),c)return new Promise((p,d)=>{f.addEventListener("load",p),f.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${l}`)))})}))}function r(a){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a}return s.then(a=>{for(const o of a||[])o.status==="rejected"&&r(o.reason);return e().catch(r)})},Um="0.10.14",Im=`https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@${Um}/wasm`,Nm="https://storage.googleapis.com/mediapipe-models/hand_landmarker/hand_landmarker/float16/1/hand_landmarker.task",Fm=[4,8,12,16,20],Ao=1.3,os=(i,e)=>Math.hypot(i.x-e.x,i.y-e.y);class Om{constructor(e){this.input=e,this.enabled=!1,this.landmarker=null,this.video=null,this.lastVideoTime=-1,this.state={},this.hands=[],this.pose=null}async enable(e){if(this.enabled)return;const{FilesetResolver:t,HandLandmarker:n}=await Lm(async()=>{const{FilesetResolver:o,HandLandmarker:l}=await import("./vision_bundle-B5dWli7Q.js");return{FilesetResolver:o,HandLandmarker:l}},[]),s=await navigator.mediaDevices.getUserMedia({video:{width:640,height:480,facingMode:"user"},audio:!1});this.video=e,e.srcObject=s,await e.play();const r=await t.forVisionTasks(Im),a=o=>({baseOptions:{modelAssetPath:Nm,delegate:o},runningMode:"VIDEO",numHands:2,minHandDetectionConfidence:.6,minHandPresenceConfidence:.5,minTrackingConfidence:.5});try{this.landmarker=await n.createFromOptions(r,a("GPU"))}catch{this.landmarker=await n.createFromOptions(r,a("CPU"))}this.enabled=!0}disable(){this.enabled=!1,this.video?.srcObject?.getTracks().forEach(e=>e.stop()),this.video&&(this.video.srcObject=null),this.landmarker?.close(),this.landmarker=null,this.hands=[],this.setPose(null),this.input.injectCursor(0,0,!1,!1,!1)}update(e){if(!this.enabled||!this.video||this.video.readyState<2||this.video.currentTime===this.lastVideoTime)return;this.lastVideoTime=this.video.currentTime;const t=this.landmarker.detectForVideo(this.video,e),n=(t.landmarks||[]).map((s,r)=>({lm:s,side:t.handednesses?.[r]?.[0]?.categoryName||(r?"B":"A")}));this.process(n,e/1e3)}toScreen(e){const t=window.innerWidth,n=window.innerHeight,s=(1-e.x-.5)*Ao+.5,r=(e.y-.5)*Ao+.5;return[Math.min(1,Math.max(0,s))*t,Math.min(1,Math.max(0,r))*n]}process(e,t){var o;const n=this.input,s=new Set;this.hands=[];for(const{lm:l,side:c}of e){s.add(c);const h=(o=this.state)[c]||(o[c]={closedAt:-9,open:!1,closed:!1,fist:!1,roll:null,rollV:0,pinch:!1}),f=[0,5,9,13,17].reduce((E,L)=>({x:E.x+l[L].x/5,y:E.y+l[L].y/5}),{x:0,y:0}),p=os(l[0],l[9])||.001,d=E=>os(l[E],f)/p,g=(d(8)+d(12)+d(16)+d(20))/4;h.open=h.open?g>.85:g>.95,h.closed=(h.closed?g<.65:g<.55)&&d(8)<.6,h.pinch=h.pinch?os(l[4],l[8])/p<.42:os(l[4],l[8])/p<.3;const _=d(8)>.85&&d(12)<.65&&d(16)<.65&&!h.pinch,u=Fm.map(E=>this.toScreen(l[E])),m=this.toScreen(f),T={side:c,tips:u,palm:m,pointing:_,pinch:h.pinch,open:h.open,closed:h.closed,openness:g};this.hands.push(T),h.closed&&(h.closedAt=t),h.open&&!h.wasOpen&&t-h.closedAt<.45&&n.emit("gesture",{type:"bloom",tips:u,palm:m}),h.wasOpen=h.open,h.closed&&!h.pinch?(h.closedFor=(h.closedFor||0)+(t-(h.lastT||t)),!h.fist&&h.closedFor>.35&&(h.fist=!0,n.emit("gesture",{type:"fist",stage:"start",palm:m})),h.fist&&n.emit("gesture",{type:"fist",stage:"hold",palm:m})):(h.closedFor=0,h.fist&&(h.fist=!1,n.emit("gesture",{type:"fist",stage:"end",palm:m})));const y=Math.atan2(l[17].y-l[5].y,l[17].x-l[5].x);if(h.roll!==null&&h.lastT!==void 0){let E=y-h.roll;E>Math.PI&&(E-=2*Math.PI),E<-Math.PI&&(E+=2*Math.PI);const L=E/Math.max(t-h.lastT,1/60);h.rollV+=(L-h.rollV)*.4}h.roll=y,h.lastT=t,Math.abs(h.rollV)>2.5&&g>.7&&n.emit("gesture",{type:"twist",palm:m,rate:-h.rollV})}for(const l of Object.keys(this.state))s.has(l)||delete this.state[l];let r=null;if(this.hands.length===2){const[l,c]=this.hands,h=Math.hypot(l.palm[0]-c.palm[0],l.palm[1]-c.palm[1])/window.innerWidth;h>.55&&l.openness>.8&&c.openness>.8?r="apart":h<.16&&(r="together"),this.poseMid=[(l.palm[0]+c.palm[0])/2,(l.palm[1]+c.palm[1])/2],this.poseSep=h}this.setPose(r);const a=r?null:this.hands.find(l=>l.pointing||l.pinch);if(a){const l=a.pinch?[(a.tips[0][0]+a.tips[1][0])/2,(a.tips[0][1]+a.tips[1][1])/2]:a.tips[1];n.injectCursor(l[0],l[1],!0,a.pinch,!0)}else this.hands.length?n.injectCursor(this.hands[0].tips[1][0],this.hands[0].tips[1][1],!1,!1,!0):n.injectCursor(0,0,!1,!1,!1);a&&a.pinch&&n.emit("gesture",{type:"pinch",pos:[(a.tips[0][0]+a.tips[1][0])/2,(a.tips[0][1]+a.tips[1][1])/2]})}setPose(e){e!==this.pose&&(this.pose=e,this.input.emit("pose",{pose:e,mid:this.poseMid}))}}class Bm{constructor(e){this.exp=e,this.blot=new we(0,0,0,0),this.reset()}reset(){this.swirl=0,this.blotT=0,this.well=null,this.wellT=0,this.repel=null,this.repelT=0,this.tint=0}q(e){return this.exp.composition.screenToQ(e[0],e[1],[0,0])}handle(e){const t=this.exp;if(!t.started)return;const n=t.transition.phase,s=e.palm?e.palm[0]/window.innerWidth:e.pos?e.pos[0]/window.innerWidth:.5;(e.type!=="fist"||e.stage==="start")&&t.audio.gesture(e.type,n,s),e.type==="bloom"?this.bloom(e,n):e.type==="twist"?this.twist(e,n):e.type==="pinch"?this.pinch(e,n):e.type==="fist"&&this.fist(e,n)}bloom(e,t){const n=this.exp,s=n.watercolor,r=this.q(e.palm),a=e.tips.map(o=>this.q(o)).filter(Boolean);if(!(!r||!a.length))if(t===1)a.forEach((o,l)=>{const c=zt[(this.tint+l*2)%zt.length].A;s.addSegment(o[0],o[1],o[0]+.002,o[1],.016+Math.random()*.008,.45,.32,c,1,Math.random()*50)}),this.tint+=1;else if(t===2){const o=[];for(const l of a){const c=Math.atan2(l[1]-r[1],l[0]-r[0]);for(const h of[-.35,0,.35])o.push([l[0],l[1],Math.cos(c+h),Math.sin(c+h)])}n.physarum.burst(o)}else{const o=n.palette.current.ink;a.forEach((l,c)=>{const h=hi(zt[(this.tint+c*2)%zt.length].A,o,.5);s.addSegment(l[0],l[1],l[0]+.002,l[1],.012,.3,.18,h,1,Math.random()*50),n.seedStroke(l,[l[0]-r[0],l[1]-r[1]])}),this.tint+=1}}twist(e,t){const n=this.q(e.palm);if(!n)return;const s=vt(Math.abs(e.rate)/4,.3,2)*Math.sign(e.rate),r=t===1?.07:t===2?.12:.09;this.exp.field.addVortex(n[0],n[1],s*r,t===2?.1:.07),t===1&&(this.swirl=1)}pinch(e,t){if(t!==2)return;const n=this.q(e.pos);n&&(this.well=n,this.wellT=.25)}fist(e,t){const n=this.exp,s=this.q(e.palm);if(s){if(t===1)e.stage!=="end"&&(this.blot.set(s[0],s[1],.06,2.5),this.blotT=.15);else if(t===2&&e.stage==="start")n.digital.addWave(s[0],s[1],.014,n.time),this.repel=s,this.repelT=.8;else if(t===3&&e.stage==="start"){const r=hi(n.palette.current.ink,Xt[2].A,.3);n.watercolor.addSegment(s[0],s[1],s[0]+.003,s[1],.035,.18,.45,r,1,Math.random()*50);for(let a=0;a<6;a++){const o=a/6*Math.PI*2;n.seedStroke([s[0]+Math.cos(o)*.03,s[1]+Math.sin(o)*.03],[Math.cos(o),Math.sin(o)])}}}}update(e){this.swirl=Math.max(0,this.swirl-e*1.2),this.blotT-=e,this.blotT<=0&&(this.blot.w=0),this.wellT-=e,this.wellT<=0&&(this.well=null),this.repelT-=e,this.repelT<=0&&(this.repel=null)}agentOverride(e){return this.well?(e.set(this.well[0],this.well[1],0,2),!0):this.repel?(e.set(this.repel[0],this.repel[1],0,-2.5),!0):!1}}const bo={1:[[220,261.63,329.63,493.88],[174.61,220,261.63,329.63],[130.81,196,329.63,392],[196,246.94,293.66,329.63]],2:[[110,116.54,164.81,174.61],[110,116.54,155.56,174.61]],3:[[146.83,185,220,329.63],[123.47,146.83,220,329.63],[98,146.83,185,246.94],[110,164.81,185,246.94]]},wo=[880,932.33,1318.51,1396.91],zm=[880,987.77,1318.51,1174.66],pl=112,lr=60/pl*16;class km{constructor(){this.ctx=null,this.muted=!1,this.lastPluck=0,this.queue=[],this.step=0,this.phase=1,this.chordIdx=0,this.lastGesture={},this.state={tech:0,hybrid:0,agitation:0,charge:0}}start(){if(this.ctx){this.ctx.resume();return}const e=window.AudioContext||window.webkitAudioContext;if(!e)return;const t=this.ctx=new e,n=t.currentTime;this.master=t.createGain(),this.master.gain.setValueAtTime(0,n),this.master.gain.linearRampToValueAtTime(this.muted?0:.9,n+3),this.duck=t.createGain();const s=t.createDynamicsCompressor();s.threshold.value=-20,s.ratio.value=3,s.attack.value=.01,s.release.value=.3,this.master.connect(this.duck).connect(s).connect(t.destination),this.reverb=t.createConvolver(),this.reverb.buffer=this.impulse(3.6);const r=t.createGain();r.gain.value=.55,this.reverb.connect(r).connect(this.master),this.dry=t.createGain(),this.dry.connect(this.master),this.send=t.createGain(),this.send.connect(this.reverb),this.noise=this.noiseBuffer(4);const a=t.createBufferSource();a.buffer=this.noise,a.loop=!0,this.bedBP=t.createBiquadFilter(),this.bedBP.type="bandpass",this.bedBP.frequency.value=700,this.bedBP.Q.value=.9;const o=t.createBiquadFilter();o.type="lowpass",o.frequency.value=2600,this.bedGain=t.createGain(),this.bedGain.gain.value=0,a.connect(this.bedBP).connect(o).connect(this.bedGain),this.out(this.bedGain,.5,.8),a.start(),this.padFilter=t.createBiquadFilter(),this.padFilter.type="lowpass",this.padFilter.frequency.value=900,this.padFilter.Q.value=.7,this.padGain=t.createGain(),this.padGain.gain.value=0,this.padFilter.connect(this.padGain),this.out(this.padGain,.35,1),this.padVoices=bo[1][0].map(l=>[-7,7].map((c,h)=>{const f=t.createOscillator();f.type=h?"triangle":"sawtooth",f.frequency.value=l,f.detune.value=c;const p=t.createGain();return p.gain.value=h?.6:.35,f.connect(p).connect(this.padFilter),f.start(),f})),this.pulseOsc=t.createOscillator(),this.pulseOsc.type="sawtooth",this.pulseOsc.frequency.value=55,this.pulseFilt=t.createBiquadFilter(),this.pulseFilt.type="lowpass",this.pulseFilt.Q.value=9,this.pulseFilt.frequency.value=300,this.pulseVCA=t.createGain(),this.pulseVCA.gain.value=0,this.synthBus=t.createGain(),this.synthBus.gain.value=0,this.pulseOsc.connect(this.pulseFilt).connect(this.pulseVCA).connect(this.synthBus),this.out(this.synthBus,.8,.3),this.pulseOsc.start(),this.clusterBus=t.createGain(),this.clusterBus.gain.value=0,this.out(this.clusterBus,.5,.6),this.cluster=wo.map(l=>{const c=t.createOscillator();c.type="sine",c.frequency.value=l;const h=t.createGain();return h.gain.value=.25,c.connect(h).connect(this.clusterBus),c.start(),c}),this.chargeOsc=t.createOscillator(),this.chargeOsc.type="sine",this.chargeOsc.frequency.value=160,this.chargeOsc2=t.createOscillator(),this.chargeOsc2.type="triangle",this.chargeOsc2.frequency.value=161.5,this.chargeGain=t.createGain(),this.chargeGain.gain.value=0,this.chargeOsc.connect(this.chargeGain),this.chargeOsc2.connect(this.chargeGain),this.out(this.chargeGain,.5,.9),this.chargeOsc.start(),this.chargeOsc2.start(),this.nextStep=t.currentTime+.1,this.nextChord=t.currentTime+lr}out(e,t,n){const s=this.ctx.createGain();s.gain.value=t,e.connect(s).connect(this.dry);const r=this.ctx.createGain();r.gain.value=n,e.connect(r).connect(this.send)}impulse(e){const t=this.ctx,n=Math.floor(t.sampleRate*e),s=t.createBuffer(2,n,t.sampleRate);for(let r=0;r<2;r++){const a=s.getChannelData(r);for(let o=0;o<n;o++)a[o]=(Math.random()*2-1)*Math.pow(1-o/n,2.6)}return s}noiseBuffer(e){const t=this.ctx,n=Math.floor(t.sampleRate*e),s=t.createBuffer(1,n,t.sampleRate),r=s.getChannelData(0);let a=0,o=0,l=0;for(let c=0;c<n;c++){const h=Math.random()*2-1;a=.99765*a+h*.099,o=.963*o+h*.2965,l=.57*l+h*1.0526,r[c]=(a+o+l+h*.1848)*.18}return s}setMuted(e){this.muted=e,this.ctx&&(this.master.gain.cancelScheduledValues(this.ctx.currentTime),this.master.gain.setTargetAtTime(e?0:this.level(),this.ctx.currentTime,.3))}level(){return .9*(1-.45*this.state.hybrid)}get chord(){const e=bo[this.phase];return e[this.chordIdx%e.length]}setChord(e){const t=this.chord;this.padVoices.forEach((n,s)=>n.forEach(r=>r.frequency.setTargetAtTime(t[s],e,1.6))),this.phase===3&&this.pulseOsc.frequency.setTargetAtTime(t[0]/2,e,.4)}update(e,t){if(!this.ctx)return;this.state=t;const n=this.ctx.currentTime,{tech:s,hybrid:r,speed:a,charge:o,agitation:l}=t,c=r>.05?3:s>.05?2:1;c!==this.phase&&(this.phase=c,this.chordIdx=0,this.setChord(n),this.nextChord=n+lr);const h=vt(a/1.5,0,1),f=.15;this.muted||this.master.gain.setTargetAtTime(this.level(),n,.8),this.bedGain.gain.setTargetAtTime(.05*(1-.55*s+.4*r)+h*.09,n,f),this.bedBP.frequency.setTargetAtTime(450+1600*h+200*Math.sin(n*.13),n,.2);const p=c===1?.03:c===2?.018:.024;this.padGain.gain.setTargetAtTime(p,n,1.2),this.padFilter.frequency.setTargetAtTime((c===2?380:850)+350*Math.sin(n*.09)+500*h,n,.5),this.synthBus.gain.setTargetAtTime(.55*s*(1-.4*r),n,.4),this.pulseFilt.frequency.setTargetAtTime(220+1600*l*(1-.5*r)+300*r,n,.15),this.clusterBus.gain.setTargetAtTime(.03*s*(1-.5*r)*(.5+.5*l),n,.5),this.cluster.forEach((g,_)=>g.frequency.setTargetAtTime(kt(wo[_],zm[_],r),n,1.2)),this.chargeGain.gain.setTargetAtTime(o*.05,n,.05),this.chargeOsc.frequency.setTargetAtTime(160+o*o*420,n,.05),this.chargeOsc2.frequency.setTargetAtTime(161.5+o*o*425+o*6,n,.05),n>this.nextChord&&(this.chordIdx++,this.setChord(n),this.nextChord=n+lr);const d=60/pl/4;for(;this.nextStep<n+.12;)this.tick(this.nextStep,this.step),this.nextStep+=d,this.step=(this.step+1)%16}tick(e,t){const{tech:n,hybrid:s,agitation:r,charge:a}=this.state;if(n>.05&&t%2===0){const o=t%8===0?1:t%4===0?.6:.35,l=this.pulseVCA.gain;l.setValueAtTime(1e-4,e),l.linearRampToValueAtTime(.3*o,e+.008),l.exponentialRampToValueAtTime(1e-4,e+.12+.18*s)}if(n>.2&&Math.random()<(.12+r*.35)*n*(1-.6*s)&&this.click(e,.03),a>.05&&(t===0||t===3||t===8||t===11)&&this.heartbeat(e,a*(t%8===0?1:.6)),s>.3&&t%2===0&&this.queue.length){const o=this.queue.shift();this.pluck(e,o.freq,o.vel,o.pan,!0)}}heartbeat(e,t){const n=this.ctx,s=n.createOscillator();s.type="sine",s.frequency.setValueAtTime(70,e),s.frequency.exponentialRampToValueAtTime(38,e+.18);const r=n.createGain();r.gain.setValueAtTime(1e-4,e),r.gain.linearRampToValueAtTime(.28*t,e+.01),r.gain.exponentialRampToValueAtTime(1e-4,e+.25),s.connect(r),this.out(r,.9,.2),s.start(e),s.stop(e+.3)}click(e,t=.05){const n=this.ctx,s=n.createBufferSource();s.buffer=this.noise;const r=n.createBiquadFilter();r.type="bandpass",r.frequency.value=3e3+Math.random()*4e3,r.Q.value=6;const a=n.createGain();a.gain.setValueAtTime(1e-4,e),a.gain.linearRampToValueAtTime(t,e+.002),a.gain.exponentialRampToValueAtTime(1e-4,e+.04);const o=n.createStereoPanner();o.pan.value=Math.random()*1.6-.8,s.connect(r).connect(a).connect(o),this.out(o,.6,.4),s.start(e,Math.random()*3,.06)}blip(e,t,n,s=.06,r="square"){const a=this.ctx,o=a.createOscillator();o.type=r,o.frequency.value=t;const l=a.createBiquadFilter();l.type="bandpass",l.frequency.value=t,l.Q.value=3;const c=a.createGain();c.gain.setValueAtTime(1e-4,e),c.gain.linearRampToValueAtTime(n,e+.004),c.gain.exponentialRampToValueAtTime(1e-4,e+s),o.connect(l).connect(c),this.out(c,.5,.5),o.start(e),o.stop(e+s+.05)}birth(){if(!this.ctx)return;const e=this.ctx.currentTime;if(e-(this.lastBirth||0)<.07)return;this.lastBirth=e,this.click(e,.06);const t=this.chord;this.blip(e,t[Math.floor(Math.random()*t.length)]*8,.02,.05)}stroke({speed:e,x:t,y:n,density:s,accent:r}){if(!this.ctx)return;const a=this.ctx.currentTime,o=kt(.55,.11,vt(e/1.4,0,1));if(!r&&a-this.lastPluck<o)return;this.lastPluck=a;const l=this.chord,c=n<.33?1:n<.66?2:4,h=l[Math.floor(Math.random()*l.length)]*c,f=vt(.25+e*.3+(r?.3:0),0,.9)*(.6+Math.min(s,1)*.4),p=vt(t*2-1,-.9,.9);this.state.hybrid>.3?this.queue.length<4&&this.queue.push({freq:h,vel:f,pan:p}):this.state.tech<.5&&this.pluck(a,h,f,p,!1,s)}pluck(e,t,n,s,r,a=.3){const o=this.ctx,l=o.createOscillator();l.frequency.value=t;const c=o.createOscillator();c.frequency.value=t*(r?3.5:1);const h=o.createGain(),f=t*(r?1.8:.3+a*.8);h.gain.setValueAtTime(f,e),h.gain.exponentialRampToValueAtTime(f*.05+.01,e+(r?1.4:.8)),c.connect(h).connect(l.frequency);const p=o.createGain();p.gain.setValueAtTime(1e-4,e),p.gain.linearRampToValueAtTime(.06*n,e+(r?.004:.02)),p.gain.exponentialRampToValueAtTime(1e-4,e+(r?2.6:2));const d=o.createStereoPanner();d.pan.value=s,l.connect(p).connect(d),this.out(d,.45,.9),l.start(e),c.start(e),l.stop(e+2.8),c.stop(e+2.8)}wave(e=1){if(!this.ctx)return;const t=this.ctx,n=t.currentTime;this.sweep(n,190,45,.9,.12*e),this.whoosh(n,.6,1800,300,.05*e)}sweep(e,t,n,s,r,a="sine"){const o=this.ctx,l=o.createOscillator();l.type=a,l.frequency.setValueAtTime(t,e),l.frequency.exponentialRampToValueAtTime(n,e+s*.8);const c=o.createGain();c.gain.setValueAtTime(1e-4,e),c.gain.linearRampToValueAtTime(r,e+.02),c.gain.exponentialRampToValueAtTime(1e-4,e+s),l.connect(c),this.out(c,.8,.4),l.start(e),l.stop(e+s+.1)}whoosh(e,t,n,s,r,a=2){const o=this.ctx,l=o.createBufferSource();l.buffer=this.noise;const c=o.createBiquadFilter();c.type="bandpass",c.Q.value=a,c.frequency.setValueAtTime(n,e),c.frequency.exponentialRampToValueAtTime(s,e+t);const h=o.createGain();h.gain.setValueAtTime(1e-4,e),h.gain.linearRampToValueAtTime(r,e+t*.3),h.gain.exponentialRampToValueAtTime(1e-4,e+t),l.connect(c).connect(h),this.out(h,.4,.9),l.start(e,Math.random()*2,t+.1)}drop(){if(!this.ctx)return;const e=this.ctx.currentTime;this.sweep(e,1300,520,.5,.05)}bloom(){if(!this.ctx)return;const e=this.chord;this.queue.length<4&&this.queue.push({freq:e[Math.floor(Math.random()*4)]*4,vel:.35,pan:Math.random()*1.2-.6})}gesture(e,t,n=.5){if(!this.ctx)return;const s=this.ctx.currentTime,r={bloom:.25,twist:.35,pinch:.18,fist:.3}[e]||.2;if(s-(this.lastGesture[e]||0)<r)return;this.lastGesture[e]=s;const a=this.chord,o=vt(n*2-1,-.9,.9);e==="bloom"?a.concat([a[0]*2]).forEach((l,c)=>{t===2?this.blip(s+c*.05,l*4,.025,.08):this.pluck(s+c*.06,l*2,.5,o,t===3)}):e==="twist"?this.whoosh(s,.7,t===2?2500:600,t===2?600:1800,.05,t===2?6:2):e==="pinch"?t===2?this.blip(s,a[1]*8,.012,.05,"sine"):this.click(s,.025):e==="fist"&&(t===1?this.whoosh(s,.5,400,150,.06,1):t===2?(this.sweep(s,120,30,1.2,.22),this.click(s,.1)):a.forEach((l,c)=>this.pluck(s+c*.02,l/2,.35,o,!1,.6)))}paletteShift(){if(!this.ctx)return;const e=this.ctx,t=e.currentTime;this.chord.concat([this.chord[0]*2]).forEach((n,s)=>{const r=e.createOscillator();r.type=s%2?"triangle":"sine",r.frequency.value=n*2;const a=e.createGain();a.gain.setValueAtTime(1e-4,t+s*.18),a.gain.linearRampToValueAtTime(.022,t+1.2+s*.25),a.gain.exponentialRampToValueAtTime(1e-4,t+7);const o=e.createStereoPanner();o.pan.value=s/4*1.4-.7,r.connect(a).connect(o),this.out(o,.3,1),r.start(t),r.stop(t+7.5)}),this.whoosh(t,4,250,3e3,.03)}phaseStart(e){if(!this.ctx)return;const t=this.ctx,n=t.currentTime;if(e===2){const s=t.createOscillator();s.type="sawtooth",s.frequency.setValueAtTime(70,n),s.frequency.exponentialRampToValueAtTime(240,n+.6);const r=t.createBiquadFilter();r.type="lowpass",r.Q.value=8,r.frequency.setValueAtTime(200,n),r.frequency.exponentialRampToValueAtTime(2400,n+.6);const a=t.createGain();a.gain.setValueAtTime(1e-4,n),a.gain.linearRampToValueAtTime(.12,n+.58),a.gain.setValueAtTime(1e-4,n+.61),s.connect(r).connect(a),this.out(a,.8,.3),s.start(n),s.stop(n+.7);const o=n+.6,l=t.createBufferSource();l.buffer=this.noise;const c=t.createBiquadFilter();c.type="highpass",c.frequency.value=1800;const h=t.createGain();h.gain.setValueAtTime(1e-4,o),h.gain.linearRampToValueAtTime(.4,o+.003),h.gain.exponentialRampToValueAtTime(1e-4,o+.35),l.connect(c).connect(h),this.out(h,.9,.8),l.start(o,.5,.4),this.sweep(o,75,26,3.2,.3);for(let f=0;f<18;f++){const p=1760*Math.pow(.86,f)*(1+(Math.random()-.5)*.04);this.blip(o+.2+f*.1,p,.04*(1-f/20),.07),f%3===0&&this.click(o+.25+f*.1,.05)}this.duck.gain.cancelScheduledValues(n),this.duck.gain.setValueAtTime(1,n),this.duck.gain.setValueAtTime(1,n+2.6),this.duck.gain.linearRampToValueAtTime(.12,n+3),this.duck.gain.setValueAtTime(.12,n+4.2),this.duck.gain.linearRampToValueAtTime(1,n+6.5),this.whoosh(n+4.3,3,60,220,.09,1)}else e===3?[220,329.63,493.88,659.25,987.77].forEach((s,r)=>{const a=t.createOscillator();a.type=r%2?"triangle":"sine",a.frequency.value=s;const o=t.createGain();o.gain.setValueAtTime(1e-4,n),o.gain.linearRampToValueAtTime(.022,n+2.5+r*.4),o.gain.exponentialRampToValueAtTime(1e-4,n+9),a.connect(o),this.out(o,.3,1),a.start(n),a.stop(n+9.5)}):e===1&&(this.queue=[],this.duck.gain.cancelScheduledValues(n),this.duck.gain.setValueAtTime(1,n))}}class Hm{constructor(e,t){this.canvas=e,this.overlay=t,this.composition=new qp(e);const n=this.composition.renderer,s=n.extensions,r=s.has("EXT_color_buffer_float")&&s.has("OES_texture_float_linear");this.floatType=r?Yt:Hn,this.watercolor=new Qp(n,this.floatType),this.field=new em(n,this.floatType),this.analyzer=new tm(n),this.digital=new pm(this.composition),this.hybrid=new mm(this),this.transition=new bm,this.input=new Cm(e),this.audio=new km,this.brush=new gm,this.physarum=new Sm(n,this.floatType),this.reaction=new ym(n,this.floatType),this.palette=this.composition.palette,this.perf=new wm(()=>this.resize()),this.hands=new Om(this.input),this.gestures=new Bm(this),this.poseHold=!1,this.started=!1,this.time=0,this.frame=0,this.last=performance.now(),this.analysis=null,this.analysisTime=-99,this.pointerQ=[0,0],this.ndc=[0,0],this.mouse={vel:[0,0],speed:0,agitation:0,lastWave:-9,idle:0},this.ambientT=0,this.resetArmed=-99,this.strokePts=[],this.strokeTravel=0,this.coverageT=0,this.lastShift=-99,this.rupture={origin:[0,0],start:0},this.agentMouse=new we(-9,-9,0,0),this.wireEvents(),this.resize();let a=0;window.addEventListener("resize",()=>{clearTimeout(a),a=setTimeout(()=>this.resize(),150)}),this.loop=this.loop.bind(this),requestAnimationFrame(this.loop)}begin(){this.started||(this.started=!0,this.audio.start(),this.overlay.hideIntro(),this.overlay.setPhase(1),this.brush.reset())}async toggleHands(){if(this.hands.enabled){this.hands.disable(),this.overlay.setHands("off");return}this.overlay.setHands("loading");try{await this.hands.enable(this.overlay.video),this.overlay.setHands("on"),this.overlay.toast("manos activas · separa las manos y mantenlas para la ruptura",4e3)}catch(e){console.warn(e),this.overlay.setHands("off"),this.overlay.toast("no se pudo activar la cámara",3e3)}}seedStroke(e,t=[0,0]){const n=Math.hypot(t[0],t[1])||1;this.strokePts.push([e[0],e[1],this.time,t[0]/n,t[1]/n]),this.strokePts.length>16&&this.strokePts.shift()}toggleMute(){this.audio.setMuted(!this.audio.muted),this.overlay.setSound(!this.audio.muted)}wireEvents(){const e=this.input,t=this.transition;e.on("hold:start",({x:n,y:s})=>{if(!this.started)return;const r=this.composition.screenToQ(n,s,[0,0]);if(!r)return;let a=0;t.phase===2&&(this.refreshAnalysis(),a=this.analysis.densAt(r[0],r[1])),t.beginHold(r,a)}),e.on("hold:end",()=>t.endHold()),e.on("tap",({x:n,y:s})=>{if(!this.started)return;const r=this.composition.screenToQ(n,s,[0,0]);r&&this.handleTap(r)}),e.on("gesture",n=>this.gestures.handle(n)),e.on("pose",({pose:n,mid:s})=>{if(!this.started)return;if((n==="apart"&&t.phase===1||n==="together"&&t.phase===2)&&s){const a=this.composition.screenToQ(s[0],s[1],[0,0]);a&&t.beginHold(a,0,1.1/1.5)&&(this.poseHold=!0)}else this.poseHold&&(t.endHold(),this.poseHold=!1)}),e.on("key",n=>{n==="c"?this.toggleHands():n==="h"?this.overlay.toggleHints():n==="m"?this.toggleMute():n==="r"&&this.started&&(this.time-this.resetArmed<3?this.reset():(this.resetArmed=this.time,this.overlay.toast("pulsa R otra vez para reiniciar",3e3)))}),t.on("trigger",(n,s,r)=>{n===2?(this.refreshAnalysis(),this.digital.buildRupture(this.analysis,s,r,this.aspect),this.rupture={origin:s.slice(),start:r},this.composition.shared.uRupO.value.set(s[0],s[1]),this.poseHold=!1,this.audio.phaseStart(2),this.overlay.setPhase(2)):n===3&&(this.hybrid.begin(s,r),this.digital.addWave(s[0],s[1],.006,r),this.audio.phaseStart(3),this.overlay.setPhase(3),this.poseHold=!1)})}refreshAnalysis(){this.analysis=this.analyzer.analyze(this.watercolor.wet,this.watercolor.dry,this.aspect),this.analysisTime=this.time}handleTap(e){this.transition.phase===1?(this.watercolor.addDrop(e[0],e[1],.035,.55),this.audio.drop()):(this.digital.addWave(e[0],e[1],.008,this.time),this.field.addVortex(e[0],e[1],(Math.random()<.5?-1:1)*.08,.06),this.audio.wave(.8))}reset(){this.watercolor.clear(),this.field.clear(),this.digital.clear(),this.hybrid.reset(),this.physarum.reset(),this.reaction.reset(),this.palette.reset(),this.strokePts=[],this.gestures.reset(),this.poseHold=!1,this.transition.reset(),this.brush.reset(),this.analysis=null,this.resetArmed=-99,this.audio.phaseStart(1),this.overlay.setPhase(1),this.overlay.toast("lienzo nuevo",1800)}resize(){const e=Math.max(1,window.innerWidth),t=Math.max(1,window.innerHeight),n=Eo[this.perf.tier],s=Math.min(window.devicePixelRatio||1,n.pixelRatio),r=this.composition.resize(e,t,s);this.aspect=r;const a=r>=1?n.simMax:Math.round(n.simMax*r),o=r>=1?Math.round(n.simMax/r):n.simMax,l=Math.min(2560,Math.round(e*s));this.watercolor.resize(r,a,o,l),this.composition.setPaper(this.watercolor.paper,l,Math.round(l/r)),this.field.resize(r),this.physarum.resize(r),this.reaction.resize(r),this.composition.shared.uRDTexel.value.fromArray(this.reaction.texel),this.footRT?.dispose(),this.footRT=new at(Math.round(a/2),Math.round(o/2),{type:this.floatType,minFilter:Qe,magFilter:Qe,depthBuffer:!1,generateMipmaps:!1})}ambient(e,t){const n=this.transition;if(!this.started||n.phase!==1||this.mouse.idle<6){this.ambientT=0;return}if(this.ambientT+=e,this.ambientT<11)return;this.ambientT=0,this.refreshAnalysis();const s=this.analysis.zones.filter(o=>o.boundary.length);if(!s.length)return;const r=s[Math.floor(Math.random()*s.length)],a=r.boundary[Math.floor(Math.random()*r.boundary.length)];this.watercolor.addDrop(a[0]-a[2]*.01,a[1]-a[3]*.01,.028,.3)}updateStrokeTrail(e,t,n){const s=this.strokePts;for(t&&n>=2&&(this.strokeTravel+=t.total,(!s.length||this.strokeTravel>.025)&&(this.strokeTravel=0,s.push([t.pos[0],t.pos[1],this.time,t.dir[0],t.dir[1]]),s.length>16&&s.shift()));s.length&&this.time-s[0][2]>2.5;)s.shift();this.physarum.setStrokes(s),this.reaction.setStrokes(s)}loop(e){requestAnimationFrame(this.loop);const t=Math.min(.05,Math.max(.001,(e-this.last)/1e3));this.last=e,this.time+=t;const n=this.time;this.perf.sample(t);const s=this.composition,r=s.shared,a=this.transition,o=this.watercolor,l=Eo[this.perf.tier];this.hands.update(e),this.input.consumeBreak()&&this.brush.reset();const c=[];for(const I of this.input.consumeSamples()){const V=s.screenToQ(I[0],I[1],[0,0]);V&&c.push(V)}const h=this.input.pointer,f=h.inside?s.screenToQ(h.x,h.y,this.pointerQ):null;if(this.ndc[0]=h.x/s.width*2-1,this.ndc[1]=-(h.y/s.height)*2+1,this.poseHold&&this.hands.poseMid){const I=s.screenToQ(this.hands.poseMid[0],this.hands.poseMid[1],[0,0]);I&&a.moveHold(I)}else a.holding&&f&&a.moveHold(f);a.update(t,n);const{tech:p,hybrid:d,phase:g}=a;let _=null;if(this.started){const I=g===1?1:g===2?Math.max(0,1-p*2.5):d;_=this.brush.update(t,c,{amount:I,hybrid:g===3?d:0,fine:this.input.pointer.fine},o)}const u=this.mouse;if(_){const I=Math.min(1,t*8);u.vel[0]+=(_.dir[0]*_.speed-u.vel[0])*I,u.vel[1]+=(_.dir[1]*_.speed-u.vel[1])*I,u.idle=0}else{const I=Math.exp(-t*4);u.vel[0]*=I,u.vel[1]*=I,u.idle+=t}u.speed=this.brush.speed;const m=cn(.05,1.2,u.speed);if(u.agitation+=(m-u.agitation)*Math.min(1,t*(m>u.agitation?4:.6)),_&&g===3){const[I,V]=_.pos;_.speed>1.1&&n-u.lastWave>.4&&(this.digital.addWave(I,V,.004+.003*Math.min(_.speed-1.1,2),n),this.audio.wave(.35+.25*Math.min(_.speed-1.1,1.5)),u.lastWave=n),Math.abs(_.turn)>.6&&_.speed>.2&&this.field.addVortex(I,V,Math.sign(_.turn)*.05*Math.min(_.speed,2),.07)}if(_&&this.started){const I=this.analysis?this.analysis.densAt(_.pos[0],_.pos[1]):.3;this.audio.stroke({speed:_.speed,x:_.pos[0]/this.aspect,y:_.pos[1],density:I,accent:_.accent})}const T=Math.pow(a.charge,1.4);r.uTime.value=n,r.uTech.value=p,r.uHybrid.value=d,r.uAgitation.value=u.agitation,r.uCharge.value.set(a.holdPos[0],a.holdPos[1],T,a.trans?a.trans.to-1:a.phase),r.uRupT.value=a.ruptureT;const y=this.field.u;y.uTime.value=n,y.uTech.value=p,y.uHybrid.value=d,y.uMouse.value.set(f?f[0]:-9,f?f[1]:-9,u.vel[0],u.vel[1]),y.uMouseGain.value=g===2?.15:g===3?.5:0,y.uCharge.value.copy(r.uCharge.value),g===3&&n-this.analysisTime>10&&this.refreshAnalysis(),this.hybrid.update(t,n,f,_),this.field.step(t,o.wet,o.dry),this.digital.active&&this.digital.update(t,n,{mouse:f,vel:u.vel,speed:u.speed,hybrid:d}),this.ambient(t,n),this.updateStrokeTrail(t,_,g);const E=g>=2,L=g!==3||!f||u.idle>.4?0:u.speed>.9?-1:u.speed>.02?1:0;this.agentMouse.set(f?f[0]:-9,f?f[1]:-9,u.speed,L),this.gestures.agentOverride(this.agentMouse);const w=E?Math.max(0,n-this.rupture.start-2.6)*.3:0,b={time:n,active:E,growR:w,origin:this.rupture.origin,hybrid:d,mouse:this.agentMouse,wet:o.wet,dry:o.dry,field:this.field.texture},U=a.ruptureT>2.6&&_?g===2?.0016:8e-4:0;if(this.physarum.update(t,{...b,spawnRate:.04,strokeSteal:U}),g===2&&U>0&&this.audio.birth(),this.reaction.update(t,{...b,seedRate:g===3?.001:.003},l.rdIterations),r.tRD.value=this.reaction.alive>0?this.reaction.texture:null,r.uRDVis.value=cn(.2,1,p)*(1-.35*d),r.uNetGlow.value=cn(.1,.8,p),r.uRelief.value=p*.034*(1-.65*d),r.tTrail.value=this.physarum.trails?this.physarum.trail:null,this.palette.update(t,this.aspect),g===3&&d>.95&&(this.coverageT+=t,this.coverageT>2.5&&!this.palette.transitioning&&n-this.lastShift>14&&(this.coverageT=0,this.refreshAnalysis(),this.analysis.coverage()>.42))){const I=this.strokePts.length?this.strokePts[this.strokePts.length-1]:[this.aspect/2,.5];this.palette.shift(I),this.hybrid.nextEchoMode(),this.lastShift=n,this.audio.paletteShift()}r.tWet.value=o.wet,r.tDry.value=o.dry,r.tField.value=this.field.texture;let Y=null,v=0;this.hybrid.active&&this.frame%l.footEvery===0&&(s.renderFootprint(this.footRT),Y=this.footRT.texture,v=this.hybrid.depositAmount*l.footEvery*Math.min(t*60,2)),o.step(t,this.field.texture,Y,{advect:Math.max(d*.22,this.gestures.swirl*.9),aniso:0,depositAmt:v,blot:this.gestures.blot.w>0?this.gestures.blot:null,dryAdvect:p*.4*(1-.7*d),trail:this.physarum.trails?this.physarum.trail:null,netDeposit:d,netA:this.palette.current.ink,rd:null,rdDeposit:0,dissolve:this.palette.transitioning?this.palette.dissolve:null},l.substeps),r.tWet.value=o.wet,r.tDry.value=o.dry;const S=a.ruptureT,z=S>=.6&&S<2.2?1-cn(.6,2.2,S):0;s.updateCamera(t,n,Math.max(p,d),h.inside?this.ndc:null,z*1.3+a.charge*a.charge*.6),s.render(),this.gestures.update(t),this.overlay.moveCursor(h.x,h.y,a.charge,h.inside&&this.started&&!this.hands.enabled),this.overlay.drawHands(this.hands,a.charge,this.poseHold),this.audio.update(t,{tech:p,hybrid:d,speed:u.speed,charge:a.charge,agitation:u.agitation}),this.frame++}}const Ro={1:["mueve el cursor para pintar","despacio concentra · rápido dispersa · clic breve: agua","mantén pulsado para abrir la ruptura"],2:["tu gesto ya no pinta: engendra líneas que la red absorbe","clic breve: perturbación","mantén pulsado en una zona libre para el encuentro"],3:["pinta: vetas, red y un eco en canon responden a tu trazo","mientras se abre, guía la expansión con el cursor","cuando el lienzo se llene, cambiará de color"],hands:["C: manos · índice = pincel · pinza = trazo fino","abrir la palma de golpe · girar la muñeca · puño","separa las manos para la ruptura · júntalas para el encuentro"]};class Gm{constructor(){this.intro=document.getElementById("intro"),this.hint=document.getElementById("hint"),this.toastEl=document.getElementById("toast"),this.soundBtn=document.getElementById("sound"),this.handsBtn=document.getElementById("handsBtn"),this.video=document.getElementById("cam"),this.handsEl=document.getElementById("hands"),this.ring=document.getElementById("ring"),this.tips=Array.from({length:10},()=>{const e=document.createElement("div");return e.className="tip",this.handsEl.appendChild(e),e}),this.cursor=document.getElementById("cursor"),this.hintsOn=!0,this.hintTimer=0,this.toastTimer=0}hideIntro(){this.intro.classList.add("gone")}setPhase(e){this.hint.innerHTML=Ro[e].map(t=>`<span>${t}</span>`).join(""),this.showHints(10)}showHints(e){this.hintsOn&&(this.hint.classList.add("on"),clearTimeout(this.hintTimer),this.hintTimer=setTimeout(()=>this.hint.classList.remove("on"),e*1e3))}toggleHints(){this.hintsOn=!this.hintsOn,clearTimeout(this.hintTimer),this.hint.classList.toggle("on",this.hintsOn)}toast(e,t=3e3,n=""){this.toastEl.textContent=e,this.toastEl.className="on "+n,clearTimeout(this.toastTimer),this.toastTimer=setTimeout(()=>this.toastEl.className=n,t)}setHands(e){this.handsBtn.textContent=e==="on"?"manos · sí":e==="loading"?"manos · …":"manos · no",this.video.classList.toggle("on",e==="on"),e==="on"&&(this.hint.innerHTML=Ro.hands.map(t=>`<span>${t}</span>`).join(""),this.showHints(12))}drawHands(e,t,n){const s=e.enabled?e.hands:[];let r=0;for(const a of s)a.tips.forEach((o,l)=>{const c=this.tips[r++];c&&(c.style.transform=`translate(${o[0]}px, ${o[1]}px)`,c.style.opacity="1",c.classList.toggle("pen",l===1&&(a.pointing||a.pinch)))});for(;r<this.tips.length;r++)this.tips[r].style.opacity="0";if(s.length===2&&e.poseMid){const a=Math.max(60,e.poseSep*window.innerWidth*.9),o=this.ring.style;o.width=o.height=`${a}px`,o.transform=`translate(${e.poseMid[0]-a/2}px, ${e.poseMid[1]-a/2}px)`,o.opacity=e.pose?"0.9":"0.18",this.ring.style.setProperty("--p",n?t.toFixed(3):"0"),this.ring.style.setProperty("--c",e.pose==="together"?"255, 215, 160":"200, 220, 255")}else this.ring.style.opacity="0"}setSound(e){this.soundBtn.textContent=e?"sonido · sí":"sonido · no"}moveCursor(e,t,n,s){const r=this.cursor;r.style.transform=`translate(${e}px, ${t}px) scale(${1-n*.55})`,r.style.opacity=s?String(.55+n*.45):"0",r.style.setProperty("--charge",n.toFixed(3))}}const Vm=document.getElementById("stage"),Wm=new Gm;try{const i=new Hm(Vm,Wm),e=document.getElementById("intro"),t=()=>i.begin();e.addEventListener("click",t),e.addEventListener("keydown",n=>{(n.key==="Enter"||n.key===" ")&&t()}),document.getElementById("sound").addEventListener("click",()=>i.toggleMute()),document.getElementById("handsBtn").addEventListener("click",()=>i.toggleHands())}catch(i){console.error(i);const e=document.getElementById("fatal");e.textContent="Esta obra necesita WebGL2 con texturas de coma flotante. Prueba con un navegador de escritorio actualizado.",e.classList.add("on")}
