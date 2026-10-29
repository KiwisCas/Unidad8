(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Js="169",dl=0,xa=1,fl=2,Eo=1,pl=2,nn=3,Tn=0,St=1,Xt=2,xn=0,oi=1,Ma=2,Sa=3,ya=4,Qs=5,sn=100,ml=101,gl=102,vl=103,_l=104,xl=200,on=201,Ml=202,Sl=203,ls=204,cs=205,yl=206,El=207,Tl=208,Al=209,bl=210,wl=211,Rl=212,Cl=213,Pl=214,us=0,hs=1,ds=2,hi=3,fs=4,ps=5,ms=6,gs=7,To=0,Dl=1,Ll=2,Mn=0,Ul=1,Il=2,Nl=3,Fl=4,Ol=5,Bl=6,zl=7,Ao=300,di=301,fi=302,vs=303,_s=304,yr=306,xs=1e3,Fn=1001,Ms=1002,ft=1003,Gl=1004,Bi=1005,Qe=1006,Dr=1007,On=1008,kt=1009,bo=1010,wo=1011,Ci=1012,ea=1013,zn=1014,qt=1015,Hn=1016,ta=1017,na=1018,pi=1020,Ro=35902,Co=1021,Po=1022,Lt=1023,Do=1024,Lo=1025,li=1026,mi=1027,Uo=1028,ia=1029,Io=1030,ra=1031,sa=1033,lr=33776,cr=33777,ur=33778,hr=33779,Ss=35840,ys=35841,Es=35842,Ts=35843,As=36196,bs=37492,ws=37496,Rs=37808,Cs=37809,Ps=37810,Ds=37811,Ls=37812,Us=37813,Is=37814,Ns=37815,Fs=37816,Os=37817,Bs=37818,zs=37819,Gs=37820,Hs=37821,dr=36492,ks=36494,Vs=36495,No=36283,Ws=36284,Xs=36285,qs=36286,Hl=3200,kl=3201,Vl=0,Wl=1,_n="",Vt="srgb",An="srgb-linear",aa="display-p3",Er="display-p3-linear",mr="linear",Je="srgb",gr="rec709",vr="p3",Vn=7680,Ea=519,Xl=512,ql=513,Yl=514,Fo=515,Kl=516,$l=517,Zl=518,jl=519,Ta=35044,_r="300 es",ln=2e3,xr=2001;class vi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const ht=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Aa=1234567;const wi=Math.PI/180,Pi=180/Math.PI;function _i(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ht[i&255]+ht[i>>8&255]+ht[i>>16&255]+ht[i>>24&255]+"-"+ht[e&255]+ht[e>>8&255]+"-"+ht[e>>16&15|64]+ht[e>>24&255]+"-"+ht[t&63|128]+ht[t>>8&255]+"-"+ht[t>>16&255]+ht[t>>24&255]+ht[n&255]+ht[n>>8&255]+ht[n>>16&255]+ht[n>>24&255]).toLowerCase()}function gt(i,e,t){return Math.max(e,Math.min(t,i))}function oa(i,e){return(i%e+e)%e}function Jl(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function Ql(i,e,t){return i!==e?(t-i)/(e-i):0}function Ri(i,e,t){return(1-t)*i+t*e}function ec(i,e,t,n){return Ri(i,e,1-Math.exp(-t*n))}function tc(i,e=1){return e-Math.abs(oa(i,e*2)-e)}function nc(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function ic(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function rc(i,e){return i+Math.floor(Math.random()*(e-i+1))}function sc(i,e){return i+Math.random()*(e-i)}function ac(i){return i*(.5-Math.random())}function oc(i){i!==void 0&&(Aa=i);let e=Aa+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function lc(i){return i*wi}function cc(i){return i*Pi}function uc(i){return(i&i-1)===0&&i!==0}function hc(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function dc(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function fc(i,e,t,n,r){const s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+n)/2),d=a((e+n)/2),p=s((e-n)/2),f=a((e-n)/2),h=s((n-e)/2),g=a((n-e)/2);switch(r){case"XYX":i.set(o*d,l*p,l*f,o*c);break;case"YZY":i.set(l*f,o*d,l*p,o*c);break;case"ZXZ":i.set(l*p,l*f,o*d,o*c);break;case"XZX":i.set(o*d,l*g,l*h,o*c);break;case"YXY":i.set(l*h,o*d,l*g,o*c);break;case"ZYZ":i.set(l*g,l*h,o*d,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function ri(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function pt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Lr={DEG2RAD:wi,RAD2DEG:Pi,generateUUID:_i,clamp:gt,euclideanModulo:oa,mapLinear:Jl,inverseLerp:Ql,lerp:Ri,damp:ec,pingpong:tc,smoothstep:nc,smootherstep:ic,randInt:rc,randFloat:sc,randFloatSpread:ac,seededRandom:oc,degToRad:lc,radToDeg:cc,isPowerOfTwo:uc,ceilPowerOfTwo:hc,floorPowerOfTwo:dc,setQuaternionFromProperEuler:fc,normalize:pt,denormalize:ri};class Le{constructor(e=0,t=0){Le.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(gt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ce{constructor(e,t,n,r,s,a,o,l,c){Ce.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,l,c)}set(e,t,n,r,s,a,o,l,c){const d=this.elements;return d[0]=e,d[1]=r,d[2]=o,d[3]=t,d[4]=s,d[5]=l,d[6]=n,d[7]=a,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],d=n[4],p=n[7],f=n[2],h=n[5],g=n[8],_=r[0],u=r[3],m=r[6],E=r[1],y=r[4],A=r[7],U=r[2],w=r[5],b=r[8];return s[0]=a*_+o*E+l*U,s[3]=a*u+o*y+l*w,s[6]=a*m+o*A+l*b,s[1]=c*_+d*E+p*U,s[4]=c*u+d*y+p*w,s[7]=c*m+d*A+p*b,s[2]=f*_+h*E+g*U,s[5]=f*u+h*y+g*w,s[8]=f*m+h*A+g*b,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8];return t*a*d-t*o*c-n*s*d+n*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8],p=d*a-o*c,f=o*l-d*s,h=c*s-a*l,g=t*p+n*f+r*h;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=p*_,e[1]=(r*c-d*n)*_,e[2]=(o*n-r*a)*_,e[3]=f*_,e[4]=(d*t-r*l)*_,e[5]=(r*s-o*t)*_,e[6]=h*_,e[7]=(n*l-c*t)*_,e[8]=(a*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Ur.makeScale(e,t)),this}rotate(e){return this.premultiply(Ur.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ur.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ur=new Ce;function Oo(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Mr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function pc(){const i=Mr("canvas");return i.style.display="block",i}const ba={};function fr(i){i in ba||(ba[i]=!0,console.warn(i))}function mc(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}function gc(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function vc(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const wa=new Ce().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Ra=new Ce().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Mi={[An]:{transfer:mr,primaries:gr,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[Vt]:{transfer:Je,primaries:gr,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Er]:{transfer:mr,primaries:vr,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(Ra),fromReference:i=>i.applyMatrix3(wa)},[aa]:{transfer:Je,primaries:vr,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(Ra),fromReference:i=>i.applyMatrix3(wa).convertLinearToSRGB()}},_c=new Set([An,Er]),We={enabled:!0,_workingColorSpace:An,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!_c.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=Mi[e].toReference,r=Mi[t].fromReference;return r(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return Mi[i].primaries},getTransfer:function(i){return i===_n?mr:Mi[i].transfer},getLuminanceCoefficients:function(i,e=this._workingColorSpace){return i.fromArray(Mi[e].luminanceCoefficients)}};function ci(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ir(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Wn;class xc{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Wn===void 0&&(Wn=Mr("canvas")),Wn.width=e.width,Wn.height=e.height;const n=Wn.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Wn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Mr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=ci(s[a]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ci(t[n]/255)*255):t[n]=ci(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Mc=0;class Bo{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Mc++}),this.uuid=_i(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Nr(r[a].image)):s.push(Nr(r[a]))}else s=Nr(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function Nr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?xc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Sc=0;class vt extends vi{constructor(e=vt.DEFAULT_IMAGE,t=vt.DEFAULT_MAPPING,n=Fn,r=Fn,s=Qe,a=On,o=Lt,l=kt,c=vt.DEFAULT_ANISOTROPY,d=_n){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Sc++}),this.uuid=_i(),this.name="",this.source=new Bo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Le(0,0),this.repeat=new Le(1,1),this.center=new Le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ce,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ao)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case xs:e.x=e.x-Math.floor(e.x);break;case Fn:e.x=e.x<0?0:1;break;case Ms:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case xs:e.y=e.y-Math.floor(e.y);break;case Fn:e.y=e.y<0?0:1;break;case Ms:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}vt.DEFAULT_IMAGE=null;vt.DEFAULT_MAPPING=Ao;vt.DEFAULT_ANISOTROPY=1;class Pe{constructor(e=0,t=0,n=0,r=1){Pe.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const l=e.elements,c=l[0],d=l[4],p=l[8],f=l[1],h=l[5],g=l[9],_=l[2],u=l[6],m=l[10];if(Math.abs(d-f)<.01&&Math.abs(p-_)<.01&&Math.abs(g-u)<.01){if(Math.abs(d+f)<.1&&Math.abs(p+_)<.1&&Math.abs(g+u)<.1&&Math.abs(c+h+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(c+1)/2,A=(h+1)/2,U=(m+1)/2,w=(d+f)/4,b=(p+_)/4,L=(g+u)/4;return y>A&&y>U?y<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(y),r=w/n,s=b/n):A>U?A<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(A),n=w/r,s=L/r):U<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(U),n=b/s,r=L/s),this.set(n,r,s,t),this}let E=Math.sqrt((u-g)*(u-g)+(p-_)*(p-_)+(f-d)*(f-d));return Math.abs(E)<.001&&(E=1),this.x=(u-g)/E,this.y=(p-_)/E,this.z=(f-d)/E,this.w=Math.acos((c+h+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class yc extends vi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Pe(0,0,e,t),this.scissorTest=!1,this.viewport=new Pe(0,0,e,t);const r={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Qe,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new vt(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Bo(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class at extends yc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class zo extends vt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=ft,this.minFilter=ft,this.wrapR=Fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ec extends vt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=ft,this.minFilter=ft,this.wrapR=Fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Di{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,o){let l=n[r+0],c=n[r+1],d=n[r+2],p=n[r+3];const f=s[a+0],h=s[a+1],g=s[a+2],_=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=d,e[t+3]=p;return}if(o===1){e[t+0]=f,e[t+1]=h,e[t+2]=g,e[t+3]=_;return}if(p!==_||l!==f||c!==h||d!==g){let u=1-o;const m=l*f+c*h+d*g+p*_,E=m>=0?1:-1,y=1-m*m;if(y>Number.EPSILON){const U=Math.sqrt(y),w=Math.atan2(U,m*E);u=Math.sin(u*w)/U,o=Math.sin(o*w)/U}const A=o*E;if(l=l*u+f*A,c=c*u+h*A,d=d*u+g*A,p=p*u+_*A,u===1-o){const U=1/Math.sqrt(l*l+c*c+d*d+p*p);l*=U,c*=U,d*=U,p*=U}}e[t]=l,e[t+1]=c,e[t+2]=d,e[t+3]=p}static multiplyQuaternionsFlat(e,t,n,r,s,a){const o=n[r],l=n[r+1],c=n[r+2],d=n[r+3],p=s[a],f=s[a+1],h=s[a+2],g=s[a+3];return e[t]=o*g+d*p+l*h-c*f,e[t+1]=l*g+d*f+c*p-o*h,e[t+2]=c*g+d*h+o*f-l*p,e[t+3]=d*g-o*p-l*f-c*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),d=o(r/2),p=o(s/2),f=l(n/2),h=l(r/2),g=l(s/2);switch(a){case"XYZ":this._x=f*d*p+c*h*g,this._y=c*h*p-f*d*g,this._z=c*d*g+f*h*p,this._w=c*d*p-f*h*g;break;case"YXZ":this._x=f*d*p+c*h*g,this._y=c*h*p-f*d*g,this._z=c*d*g-f*h*p,this._w=c*d*p+f*h*g;break;case"ZXY":this._x=f*d*p-c*h*g,this._y=c*h*p+f*d*g,this._z=c*d*g+f*h*p,this._w=c*d*p-f*h*g;break;case"ZYX":this._x=f*d*p-c*h*g,this._y=c*h*p+f*d*g,this._z=c*d*g-f*h*p,this._w=c*d*p+f*h*g;break;case"YZX":this._x=f*d*p+c*h*g,this._y=c*h*p+f*d*g,this._z=c*d*g-f*h*p,this._w=c*d*p-f*h*g;break;case"XZY":this._x=f*d*p-c*h*g,this._y=c*h*p-f*d*g,this._z=c*d*g+f*h*p,this._w=c*d*p+f*h*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],d=t[6],p=t[10],f=n+o+p;if(f>0){const h=.5/Math.sqrt(f+1);this._w=.25/h,this._x=(d-l)*h,this._y=(s-c)*h,this._z=(a-r)*h}else if(n>o&&n>p){const h=2*Math.sqrt(1+n-o-p);this._w=(d-l)/h,this._x=.25*h,this._y=(r+a)/h,this._z=(s+c)/h}else if(o>p){const h=2*Math.sqrt(1+o-n-p);this._w=(s-c)/h,this._x=(r+a)/h,this._y=.25*h,this._z=(l+d)/h}else{const h=2*Math.sqrt(1+p-n-o);this._w=(a-r)/h,this._x=(s+c)/h,this._y=(l+d)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(gt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,d=t._w;return this._x=n*d+a*o+r*c-s*l,this._y=r*d+a*l+s*o-n*c,this._z=s*d+a*c+n*l-r*o,this._w=a*d-n*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+n*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const h=1-t;return this._w=h*a+t*this._w,this._x=h*n+t*this._x,this._y=h*r+t*this._y,this._z=h*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),d=Math.atan2(c,o),p=Math.sin((1-t)*d)/c,f=Math.sin(t*d)/c;return this._w=a*p+this._w*f,this._x=n*p+this._x*f,this._y=r*p+this._y*f,this._z=s*p+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(e=0,t=0,n=0){N.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ca.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ca.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*n),d=2*(o*t-s*r),p=2*(s*n-a*t);return this.x=t+l*c+a*p-o*d,this.y=n+l*d+o*c-s*p,this.z=r+l*p+s*d-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-n*l,this.z=n*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Fr.copy(this).projectOnVector(e),this.sub(Fr)}reflect(e){return this.sub(Fr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(gt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Fr=new N,Ca=new Di;class Li{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Nt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Nt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Nt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Nt):Nt.fromBufferAttribute(s,a),Nt.applyMatrix4(e.matrixWorld),this.expandByPoint(Nt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),zi.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),zi.copy(n.boundingBox)),zi.applyMatrix4(e.matrixWorld),this.union(zi)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Nt),Nt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Si),Gi.subVectors(this.max,Si),Xn.subVectors(e.a,Si),qn.subVectors(e.b,Si),Yn.subVectors(e.c,Si),hn.subVectors(qn,Xn),dn.subVectors(Yn,qn),Rn.subVectors(Xn,Yn);let t=[0,-hn.z,hn.y,0,-dn.z,dn.y,0,-Rn.z,Rn.y,hn.z,0,-hn.x,dn.z,0,-dn.x,Rn.z,0,-Rn.x,-hn.y,hn.x,0,-dn.y,dn.x,0,-Rn.y,Rn.x,0];return!Or(t,Xn,qn,Yn,Gi)||(t=[1,0,0,0,1,0,0,0,1],!Or(t,Xn,qn,Yn,Gi))?!1:(Hi.crossVectors(hn,dn),t=[Hi.x,Hi.y,Hi.z],Or(t,Xn,qn,Yn,Gi))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Nt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Nt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Zt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Zt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Zt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Zt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Zt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Zt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Zt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Zt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Zt),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Zt=[new N,new N,new N,new N,new N,new N,new N,new N],Nt=new N,zi=new Li,Xn=new N,qn=new N,Yn=new N,hn=new N,dn=new N,Rn=new N,Si=new N,Gi=new N,Hi=new N,Cn=new N;function Or(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){Cn.fromArray(i,s);const o=r.x*Math.abs(Cn.x)+r.y*Math.abs(Cn.y)+r.z*Math.abs(Cn.z),l=e.dot(Cn),c=t.dot(Cn),d=n.dot(Cn);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>o)return!1}return!0}const Tc=new Li,yi=new N,Br=new N;class Tr{constructor(e=new N,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Tc.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;yi.subVectors(e,this.center);const t=yi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(yi,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Br.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(yi.copy(e.center).add(Br)),this.expandByPoint(yi.copy(e.center).sub(Br))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const jt=new N,zr=new N,ki=new N,fn=new N,Gr=new N,Vi=new N,Hr=new N;class la{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,jt)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=jt.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(jt.copy(this.origin).addScaledVector(this.direction,t),jt.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){zr.copy(e).add(t).multiplyScalar(.5),ki.copy(t).sub(e).normalize(),fn.copy(this.origin).sub(zr);const s=e.distanceTo(t)*.5,a=-this.direction.dot(ki),o=fn.dot(this.direction),l=-fn.dot(ki),c=fn.lengthSq(),d=Math.abs(1-a*a);let p,f,h,g;if(d>0)if(p=a*l-o,f=a*o-l,g=s*d,p>=0)if(f>=-g)if(f<=g){const _=1/d;p*=_,f*=_,h=p*(p+a*f+2*o)+f*(a*p+f+2*l)+c}else f=s,p=Math.max(0,-(a*f+o)),h=-p*p+f*(f+2*l)+c;else f=-s,p=Math.max(0,-(a*f+o)),h=-p*p+f*(f+2*l)+c;else f<=-g?(p=Math.max(0,-(-a*s+o)),f=p>0?-s:Math.min(Math.max(-s,-l),s),h=-p*p+f*(f+2*l)+c):f<=g?(p=0,f=Math.min(Math.max(-s,-l),s),h=f*(f+2*l)+c):(p=Math.max(0,-(a*s+o)),f=p>0?s:Math.min(Math.max(-s,-l),s),h=-p*p+f*(f+2*l)+c);else f=a>0?-s:s,p=Math.max(0,-(a*f+o)),h=-p*p+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,p),r&&r.copy(zr).addScaledVector(ki,f),h}intersectSphere(e,t){jt.subVectors(e.center,this.origin);const n=jt.dot(this.direction),r=jt.dot(jt)-n*n,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,o,l;const c=1/this.direction.x,d=1/this.direction.y,p=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),d>=0?(s=(e.min.y-f.y)*d,a=(e.max.y-f.y)*d):(s=(e.max.y-f.y)*d,a=(e.min.y-f.y)*d),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),p>=0?(o=(e.min.z-f.z)*p,l=(e.max.z-f.z)*p):(o=(e.max.z-f.z)*p,l=(e.min.z-f.z)*p),n>l||o>r)||((o>n||n!==n)&&(n=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,jt)!==null}intersectTriangle(e,t,n,r,s){Gr.subVectors(t,e),Vi.subVectors(n,e),Hr.crossVectors(Gr,Vi);let a=this.direction.dot(Hr),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;fn.subVectors(this.origin,e);const l=o*this.direction.dot(Vi.crossVectors(fn,Vi));if(l<0)return null;const c=o*this.direction.dot(Gr.cross(fn));if(c<0||l+c>a)return null;const d=-o*fn.dot(Hr);return d<0?null:this.at(d/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class tt{constructor(e,t,n,r,s,a,o,l,c,d,p,f,h,g,_,u){tt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,l,c,d,p,f,h,g,_,u)}set(e,t,n,r,s,a,o,l,c,d,p,f,h,g,_,u){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=r,m[1]=s,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=d,m[10]=p,m[14]=f,m[3]=h,m[7]=g,m[11]=_,m[15]=u,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new tt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/Kn.setFromMatrixColumn(e,0).length(),s=1/Kn.setFromMatrixColumn(e,1).length(),a=1/Kn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(r),c=Math.sin(r),d=Math.cos(s),p=Math.sin(s);if(e.order==="XYZ"){const f=a*d,h=a*p,g=o*d,_=o*p;t[0]=l*d,t[4]=-l*p,t[8]=c,t[1]=h+g*c,t[5]=f-_*c,t[9]=-o*l,t[2]=_-f*c,t[6]=g+h*c,t[10]=a*l}else if(e.order==="YXZ"){const f=l*d,h=l*p,g=c*d,_=c*p;t[0]=f+_*o,t[4]=g*o-h,t[8]=a*c,t[1]=a*p,t[5]=a*d,t[9]=-o,t[2]=h*o-g,t[6]=_+f*o,t[10]=a*l}else if(e.order==="ZXY"){const f=l*d,h=l*p,g=c*d,_=c*p;t[0]=f-_*o,t[4]=-a*p,t[8]=g+h*o,t[1]=h+g*o,t[5]=a*d,t[9]=_-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const f=a*d,h=a*p,g=o*d,_=o*p;t[0]=l*d,t[4]=g*c-h,t[8]=f*c+_,t[1]=l*p,t[5]=_*c+f,t[9]=h*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const f=a*l,h=a*c,g=o*l,_=o*c;t[0]=l*d,t[4]=_-f*p,t[8]=g*p+h,t[1]=p,t[5]=a*d,t[9]=-o*d,t[2]=-c*d,t[6]=h*p+g,t[10]=f-_*p}else if(e.order==="XZY"){const f=a*l,h=a*c,g=o*l,_=o*c;t[0]=l*d,t[4]=-p,t[8]=c*d,t[1]=f*p+_,t[5]=a*d,t[9]=h*p-g,t[2]=g*p-h,t[6]=o*d,t[10]=_*p+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ac,e,bc)}lookAt(e,t,n){const r=this.elements;return bt.subVectors(e,t),bt.lengthSq()===0&&(bt.z=1),bt.normalize(),pn.crossVectors(n,bt),pn.lengthSq()===0&&(Math.abs(n.z)===1?bt.x+=1e-4:bt.z+=1e-4,bt.normalize(),pn.crossVectors(n,bt)),pn.normalize(),Wi.crossVectors(bt,pn),r[0]=pn.x,r[4]=Wi.x,r[8]=bt.x,r[1]=pn.y,r[5]=Wi.y,r[9]=bt.y,r[2]=pn.z,r[6]=Wi.z,r[10]=bt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],d=n[1],p=n[5],f=n[9],h=n[13],g=n[2],_=n[6],u=n[10],m=n[14],E=n[3],y=n[7],A=n[11],U=n[15],w=r[0],b=r[4],L=r[8],Y=r[12],v=r[1],S=r[5],k=r[9],B=r[13],V=r[2],$=r[6],H=r[10],Z=r[14],G=r[3],oe=r[7],le=r[11],ge=r[15];return s[0]=a*w+o*v+l*V+c*G,s[4]=a*b+o*S+l*$+c*oe,s[8]=a*L+o*k+l*H+c*le,s[12]=a*Y+o*B+l*Z+c*ge,s[1]=d*w+p*v+f*V+h*G,s[5]=d*b+p*S+f*$+h*oe,s[9]=d*L+p*k+f*H+h*le,s[13]=d*Y+p*B+f*Z+h*ge,s[2]=g*w+_*v+u*V+m*G,s[6]=g*b+_*S+u*$+m*oe,s[10]=g*L+_*k+u*H+m*le,s[14]=g*Y+_*B+u*Z+m*ge,s[3]=E*w+y*v+A*V+U*G,s[7]=E*b+y*S+A*$+U*oe,s[11]=E*L+y*k+A*H+U*le,s[15]=E*Y+y*B+A*Z+U*ge,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],d=e[2],p=e[6],f=e[10],h=e[14],g=e[3],_=e[7],u=e[11],m=e[15];return g*(+s*l*p-r*c*p-s*o*f+n*c*f+r*o*h-n*l*h)+_*(+t*l*h-t*c*f+s*a*f-r*a*h+r*c*d-s*l*d)+u*(+t*c*p-t*o*h-s*a*p+n*a*h+s*o*d-n*c*d)+m*(-r*o*d-t*l*p+t*o*f+r*a*p-n*a*f+n*l*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8],p=e[9],f=e[10],h=e[11],g=e[12],_=e[13],u=e[14],m=e[15],E=p*u*c-_*f*c+_*l*h-o*u*h-p*l*m+o*f*m,y=g*f*c-d*u*c-g*l*h+a*u*h+d*l*m-a*f*m,A=d*_*c-g*p*c+g*o*h-a*_*h-d*o*m+a*p*m,U=g*p*l-d*_*l-g*o*f+a*_*f+d*o*u-a*p*u,w=t*E+n*y+r*A+s*U;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/w;return e[0]=E*b,e[1]=(_*f*s-p*u*s-_*r*h+n*u*h+p*r*m-n*f*m)*b,e[2]=(o*u*s-_*l*s+_*r*c-n*u*c-o*r*m+n*l*m)*b,e[3]=(p*l*s-o*f*s-p*r*c+n*f*c+o*r*h-n*l*h)*b,e[4]=y*b,e[5]=(d*u*s-g*f*s+g*r*h-t*u*h-d*r*m+t*f*m)*b,e[6]=(g*l*s-a*u*s-g*r*c+t*u*c+a*r*m-t*l*m)*b,e[7]=(a*f*s-d*l*s+d*r*c-t*f*c-a*r*h+t*l*h)*b,e[8]=A*b,e[9]=(g*p*s-d*_*s-g*n*h+t*_*h+d*n*m-t*p*m)*b,e[10]=(a*_*s-g*o*s+g*n*c-t*_*c-a*n*m+t*o*m)*b,e[11]=(d*o*s-a*p*s-d*n*c+t*p*c+a*n*h-t*o*h)*b,e[12]=U*b,e[13]=(d*_*r-g*p*r+g*n*f-t*_*f-d*n*u+t*p*u)*b,e[14]=(g*o*r-a*_*r-g*n*l+t*_*l+a*n*u-t*o*u)*b,e[15]=(a*p*r-d*o*r+d*n*l-t*p*l-a*n*f+t*o*f)*b,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,d=s*o;return this.set(c*a+n,c*o-r*l,c*l+r*o,0,c*o+r*l,d*o+n,d*l-r*a,0,c*l-r*o,d*l+r*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,d=a+a,p=o+o,f=s*c,h=s*d,g=s*p,_=a*d,u=a*p,m=o*p,E=l*c,y=l*d,A=l*p,U=n.x,w=n.y,b=n.z;return r[0]=(1-(_+m))*U,r[1]=(h+A)*U,r[2]=(g-y)*U,r[3]=0,r[4]=(h-A)*w,r[5]=(1-(f+m))*w,r[6]=(u+E)*w,r[7]=0,r[8]=(g+y)*b,r[9]=(u-E)*b,r[10]=(1-(f+_))*b,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=Kn.set(r[0],r[1],r[2]).length();const a=Kn.set(r[4],r[5],r[6]).length(),o=Kn.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Ft.copy(this);const c=1/s,d=1/a,p=1/o;return Ft.elements[0]*=c,Ft.elements[1]*=c,Ft.elements[2]*=c,Ft.elements[4]*=d,Ft.elements[5]*=d,Ft.elements[6]*=d,Ft.elements[8]*=p,Ft.elements[9]*=p,Ft.elements[10]*=p,t.setFromRotationMatrix(Ft),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,r,s,a,o=ln){const l=this.elements,c=2*s/(t-e),d=2*s/(n-r),p=(t+e)/(t-e),f=(n+r)/(n-r);let h,g;if(o===ln)h=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===xr)h=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=p,l[12]=0,l[1]=0,l[5]=d,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=h,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,a,o=ln){const l=this.elements,c=1/(t-e),d=1/(n-r),p=1/(a-s),f=(t+e)*c,h=(n+r)*d;let g,_;if(o===ln)g=(a+s)*p,_=-2*p;else if(o===xr)g=s*p,_=-1*p;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-h,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Kn=new N,Ft=new tt,Ac=new N(0,0,0),bc=new N(1,1,1),pn=new N,Wi=new N,bt=new N,Pa=new tt,Da=new Di;class cn{constructor(e=0,t=0,n=0,r=cn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],d=r[9],p=r[2],f=r[6],h=r[10];switch(t){case"XYZ":this._y=Math.asin(gt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,h),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-gt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-p,s),this._z=0);break;case"ZXY":this._x=Math.asin(gt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-p,h),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-gt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(f,h),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(gt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-p,s)):(this._x=0,this._y=Math.atan2(o,h));break;case"XZY":this._z=Math.asin(-gt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-d,h),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Pa.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Pa,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Da.setFromEuler(this),this.setFromQuaternion(Da,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}cn.DEFAULT_ORDER="XYZ";class ca{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let wc=0;const La=new N,$n=new Di,Jt=new tt,Xi=new N,Ei=new N,Rc=new N,Cc=new Di,Ua=new N(1,0,0),Ia=new N(0,1,0),Na=new N(0,0,1),Fa={type:"added"},Pc={type:"removed"},Zn={type:"childadded",child:null},kr={type:"childremoved",child:null};class yt extends vi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:wc++}),this.uuid=_i(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=yt.DEFAULT_UP.clone();const e=new N,t=new cn,n=new Di,r=new N(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new tt},normalMatrix:{value:new Ce}}),this.matrix=new tt,this.matrixWorld=new tt,this.matrixAutoUpdate=yt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ca,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return $n.setFromAxisAngle(e,t),this.quaternion.multiply($n),this}rotateOnWorldAxis(e,t){return $n.setFromAxisAngle(e,t),this.quaternion.premultiply($n),this}rotateX(e){return this.rotateOnAxis(Ua,e)}rotateY(e){return this.rotateOnAxis(Ia,e)}rotateZ(e){return this.rotateOnAxis(Na,e)}translateOnAxis(e,t){return La.copy(e).applyQuaternion(this.quaternion),this.position.add(La.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ua,e)}translateY(e){return this.translateOnAxis(Ia,e)}translateZ(e){return this.translateOnAxis(Na,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Jt.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Xi.copy(e):Xi.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Ei.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Jt.lookAt(Ei,Xi,this.up):Jt.lookAt(Xi,Ei,this.up),this.quaternion.setFromRotationMatrix(Jt),r&&(Jt.extractRotation(r.matrixWorld),$n.setFromRotationMatrix(Jt),this.quaternion.premultiply($n.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Fa),Zn.child=e,this.dispatchEvent(Zn),Zn.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Pc),kr.child=e,this.dispatchEvent(kr),kr.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Jt.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Jt.multiply(e.parent.matrixWorld)),e.applyMatrix4(Jt),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Fa),Zn.child=e,this.dispatchEvent(Zn),Zn.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ei,e,Rc),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ei,Cc,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const p=l[c];s(e.shapes,p)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),d=a(e.images),p=a(e.shapes),f=a(e.skeletons),h=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),d.length>0&&(n.images=d),p.length>0&&(n.shapes=p),f.length>0&&(n.skeletons=f),h.length>0&&(n.animations=h),g.length>0&&(n.nodes=g)}return n.object=r,n;function a(o){const l=[];for(const c in o){const d=o[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}yt.DEFAULT_UP=new N(0,1,0);yt.DEFAULT_MATRIX_AUTO_UPDATE=!0;yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ot=new N,Qt=new N,Vr=new N,en=new N,jn=new N,Jn=new N,Oa=new N,Wr=new N,Xr=new N,qr=new N,Yr=new Pe,Kr=new Pe,$r=new Pe;class Gt{constructor(e=new N,t=new N,n=new N){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Ot.subVectors(e,t),r.cross(Ot);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Ot.subVectors(r,t),Qt.subVectors(n,t),Vr.subVectors(e,t);const a=Ot.dot(Ot),o=Ot.dot(Qt),l=Ot.dot(Vr),c=Qt.dot(Qt),d=Qt.dot(Vr),p=a*c-o*o;if(p===0)return s.set(0,0,0),null;const f=1/p,h=(c*l-o*d)*f,g=(a*d-o*l)*f;return s.set(1-h-g,g,h)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,en)===null?!1:en.x>=0&&en.y>=0&&en.x+en.y<=1}static getInterpolation(e,t,n,r,s,a,o,l){return this.getBarycoord(e,t,n,r,en)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,en.x),l.addScaledVector(a,en.y),l.addScaledVector(o,en.z),l)}static getInterpolatedAttribute(e,t,n,r,s,a){return Yr.setScalar(0),Kr.setScalar(0),$r.setScalar(0),Yr.fromBufferAttribute(e,t),Kr.fromBufferAttribute(e,n),$r.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Yr,s.x),a.addScaledVector(Kr,s.y),a.addScaledVector($r,s.z),a}static isFrontFacing(e,t,n,r){return Ot.subVectors(n,t),Qt.subVectors(e,t),Ot.cross(Qt).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ot.subVectors(this.c,this.b),Qt.subVectors(this.a,this.b),Ot.cross(Qt).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Gt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Gt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return Gt.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return Gt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Gt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let a,o;jn.subVectors(r,n),Jn.subVectors(s,n),Wr.subVectors(e,n);const l=jn.dot(Wr),c=Jn.dot(Wr);if(l<=0&&c<=0)return t.copy(n);Xr.subVectors(e,r);const d=jn.dot(Xr),p=Jn.dot(Xr);if(d>=0&&p<=d)return t.copy(r);const f=l*p-d*c;if(f<=0&&l>=0&&d<=0)return a=l/(l-d),t.copy(n).addScaledVector(jn,a);qr.subVectors(e,s);const h=jn.dot(qr),g=Jn.dot(qr);if(g>=0&&h<=g)return t.copy(s);const _=h*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(Jn,o);const u=d*g-h*p;if(u<=0&&p-d>=0&&h-g>=0)return Oa.subVectors(s,r),o=(p-d)/(p-d+(h-g)),t.copy(r).addScaledVector(Oa,o);const m=1/(u+_+f);return a=_*m,o=f*m,t.copy(n).addScaledVector(jn,a).addScaledVector(Jn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Go={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},mn={h:0,s:0,l:0},qi={h:0,s:0,l:0};function Zr(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Ye{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Vt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,We.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=We.workingColorSpace){return this.r=e,this.g=t,this.b=n,We.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=We.workingColorSpace){if(e=oa(e,1),t=gt(t,0,1),n=gt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=Zr(a,s,e+1/3),this.g=Zr(a,s,e),this.b=Zr(a,s,e-1/3)}return We.toWorkingColorSpace(this,r),this}setStyle(e,t=Vt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Vt){const n=Go[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ci(e.r),this.g=ci(e.g),this.b=ci(e.b),this}copyLinearToSRGB(e){return this.r=Ir(e.r),this.g=Ir(e.g),this.b=Ir(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Vt){return We.fromWorkingColorSpace(dt.copy(this),e),Math.round(gt(dt.r*255,0,255))*65536+Math.round(gt(dt.g*255,0,255))*256+Math.round(gt(dt.b*255,0,255))}getHexString(e=Vt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=We.workingColorSpace){We.fromWorkingColorSpace(dt.copy(this),t);const n=dt.r,r=dt.g,s=dt.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let l,c;const d=(o+a)/2;if(o===a)l=0,c=0;else{const p=a-o;switch(c=d<=.5?p/(a+o):p/(2-a-o),a){case n:l=(r-s)/p+(r<s?6:0);break;case r:l=(s-n)/p+2;break;case s:l=(n-r)/p+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,t=We.workingColorSpace){return We.fromWorkingColorSpace(dt.copy(this),t),e.r=dt.r,e.g=dt.g,e.b=dt.b,e}getStyle(e=Vt){We.fromWorkingColorSpace(dt.copy(this),e);const t=dt.r,n=dt.g,r=dt.b;return e!==Vt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(mn),this.setHSL(mn.h+e,mn.s+t,mn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(mn),e.getHSL(qi);const n=Ri(mn.h,qi.h,t),r=Ri(mn.s,qi.s,t),s=Ri(mn.l,qi.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const dt=new Ye;Ye.NAMES=Go;let Dc=0;class Ui extends vi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Dc++}),this.uuid=_i(),this.name="",this.type="Material",this.blending=oi,this.side=Tn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ls,this.blendDst=cs,this.blendEquation=sn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ye(0,0,0),this.blendAlpha=0,this.depthFunc=hi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ea,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Vn,this.stencilZFail=Vn,this.stencilZPass=Vn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==oi&&(n.blending=this.blending),this.side!==Tn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ls&&(n.blendSrc=this.blendSrc),this.blendDst!==cs&&(n.blendDst=this.blendDst),this.blendEquation!==sn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==hi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ea&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Vn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Vn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Vn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Ho extends Ui{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cn,this.combine=To,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const rt=new N,Yi=new Le;class st{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ta,this.updateRanges=[],this.gpuType=qt,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Yi.fromBufferAttribute(this,t),Yi.applyMatrix3(e),this.setXY(t,Yi.x,Yi.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)rt.fromBufferAttribute(this,t),rt.applyMatrix3(e),this.setXYZ(t,rt.x,rt.y,rt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)rt.fromBufferAttribute(this,t),rt.applyMatrix4(e),this.setXYZ(t,rt.x,rt.y,rt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)rt.fromBufferAttribute(this,t),rt.applyNormalMatrix(e),this.setXYZ(t,rt.x,rt.y,rt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)rt.fromBufferAttribute(this,t),rt.transformDirection(e),this.setXYZ(t,rt.x,rt.y,rt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ri(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=pt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ri(t,this.array)),t}setX(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ri(t,this.array)),t}setY(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ri(t,this.array)),t}setZ(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ri(t,this.array)),t}setW(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array),r=pt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array),r=pt(r,this.array),s=pt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ta&&(e.usage=this.usage),e}}class ko extends st{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Vo extends st{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Bn extends st{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Lc=0;const Pt=new tt,jr=new yt,Qn=new N,wt=new Li,Ti=new Li,ct=new N;class Kt extends vi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Lc++}),this.uuid=_i(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Oo(e)?Vo:ko)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ce().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Pt.makeRotationFromQuaternion(e),this.applyMatrix4(Pt),this}rotateX(e){return Pt.makeRotationX(e),this.applyMatrix4(Pt),this}rotateY(e){return Pt.makeRotationY(e),this.applyMatrix4(Pt),this}rotateZ(e){return Pt.makeRotationZ(e),this.applyMatrix4(Pt),this}translate(e,t,n){return Pt.makeTranslation(e,t,n),this.applyMatrix4(Pt),this}scale(e,t,n){return Pt.makeScale(e,t,n),this.applyMatrix4(Pt),this}lookAt(e){return jr.lookAt(e),jr.updateMatrix(),this.applyMatrix4(jr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Qn).negate(),this.translate(Qn.x,Qn.y,Qn.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Bn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Li);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];wt.setFromBufferAttribute(s),this.morphTargetsRelative?(ct.addVectors(this.boundingBox.min,wt.min),this.boundingBox.expandByPoint(ct),ct.addVectors(this.boundingBox.max,wt.max),this.boundingBox.expandByPoint(ct)):(this.boundingBox.expandByPoint(wt.min),this.boundingBox.expandByPoint(wt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Tr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(e){const n=this.boundingSphere.center;if(wt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Ti.setFromBufferAttribute(o),this.morphTargetsRelative?(ct.addVectors(wt.min,Ti.min),wt.expandByPoint(ct),ct.addVectors(wt.max,Ti.max),wt.expandByPoint(ct)):(wt.expandByPoint(Ti.min),wt.expandByPoint(Ti.max))}wt.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)ct.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(ct));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,d=o.count;c<d;c++)ct.fromBufferAttribute(o,c),l&&(Qn.fromBufferAttribute(e,c),ct.add(Qn)),r=Math.max(r,n.distanceToSquared(ct))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new st(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let L=0;L<n.count;L++)o[L]=new N,l[L]=new N;const c=new N,d=new N,p=new N,f=new Le,h=new Le,g=new Le,_=new N,u=new N;function m(L,Y,v){c.fromBufferAttribute(n,L),d.fromBufferAttribute(n,Y),p.fromBufferAttribute(n,v),f.fromBufferAttribute(s,L),h.fromBufferAttribute(s,Y),g.fromBufferAttribute(s,v),d.sub(c),p.sub(c),h.sub(f),g.sub(f);const S=1/(h.x*g.y-g.x*h.y);isFinite(S)&&(_.copy(d).multiplyScalar(g.y).addScaledVector(p,-h.y).multiplyScalar(S),u.copy(p).multiplyScalar(h.x).addScaledVector(d,-g.x).multiplyScalar(S),o[L].add(_),o[Y].add(_),o[v].add(_),l[L].add(u),l[Y].add(u),l[v].add(u))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let L=0,Y=E.length;L<Y;++L){const v=E[L],S=v.start,k=v.count;for(let B=S,V=S+k;B<V;B+=3)m(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const y=new N,A=new N,U=new N,w=new N;function b(L){U.fromBufferAttribute(r,L),w.copy(U);const Y=o[L];y.copy(Y),y.sub(U.multiplyScalar(U.dot(Y))).normalize(),A.crossVectors(w,Y);const S=A.dot(l[L])<0?-1:1;a.setXYZW(L,y.x,y.y,y.z,S)}for(let L=0,Y=E.length;L<Y;++L){const v=E[L],S=v.start,k=v.count;for(let B=S,V=S+k;B<V;B+=3)b(e.getX(B+0)),b(e.getX(B+1)),b(e.getX(B+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new st(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,h=n.count;f<h;f++)n.setXYZ(f,0,0,0);const r=new N,s=new N,a=new N,o=new N,l=new N,c=new N,d=new N,p=new N;if(e)for(let f=0,h=e.count;f<h;f+=3){const g=e.getX(f+0),_=e.getX(f+1),u=e.getX(f+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),a.fromBufferAttribute(t,u),d.subVectors(a,s),p.subVectors(r,s),d.cross(p),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,u),o.add(d),l.add(d),c.add(d),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(u,c.x,c.y,c.z)}else for(let f=0,h=t.count;f<h;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),d.subVectors(a,s),p.subVectors(r,s),d.cross(p),n.setXYZ(f+0,d.x,d.y,d.z),n.setXYZ(f+1,d.x,d.y,d.z),n.setXYZ(f+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)ct.fromBufferAttribute(e,t),ct.normalize(),e.setXYZ(t,ct.x,ct.y,ct.z)}toNonIndexed(){function e(o,l){const c=o.array,d=o.itemSize,p=o.normalized,f=new c.constructor(l.length*d);let h=0,g=0;for(let _=0,u=l.length;_<u;_++){o.isInterleavedBufferAttribute?h=l[_]*o.data.stride+o.offset:h=l[_]*d;for(let m=0;m<d;m++)f[g++]=c[h++]}return new st(f,d,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Kt,n=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let d=0,p=c.length;d<p;d++){const f=c[d],h=e(f,n);l.push(h)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let p=0,f=c.length;p<f;p++){const h=c[p];d.push(h.toJSON(e.data))}d.length>0&&(r[l]=d,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const c in r){const d=r[c];this.setAttribute(c,d.clone(t))}const s=e.morphAttributes;for(const c in s){const d=[],p=s[c];for(let f=0,h=p.length;f<h;f++)d.push(p[f].clone(t));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,d=a.length;c<d;c++){const p=a[c];this.addGroup(p.start,p.count,p.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ba=new tt,Pn=new la,Ki=new Tr,za=new N,$i=new N,Zi=new N,ji=new N,Jr=new N,Ji=new N,Ga=new N,Qi=new N;class Ut extends yt{constructor(e=new Kt,t=new Ho){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Ji.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const d=o[l],p=s[l];d!==0&&(Jr.fromBufferAttribute(p,e),a?Ji.addScaledVector(Jr,d):Ji.addScaledVector(Jr.sub(t),d))}t.add(Ji)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ki.copy(n.boundingSphere),Ki.applyMatrix4(s),Pn.copy(e.ray).recast(e.near),!(Ki.containsPoint(Pn.origin)===!1&&(Pn.intersectSphere(Ki,za)===null||Pn.origin.distanceToSquared(za)>(e.far-e.near)**2))&&(Ba.copy(s).invert(),Pn.copy(e.ray).applyMatrix4(Ba),!(n.boundingBox!==null&&Pn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Pn)))}_computeIntersections(e,t,n){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,d=s.attributes.uv1,p=s.attributes.normal,f=s.groups,h=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const u=f[g],m=a[u.materialIndex],E=Math.max(u.start,h.start),y=Math.min(o.count,Math.min(u.start+u.count,h.start+h.count));for(let A=E,U=y;A<U;A+=3){const w=o.getX(A),b=o.getX(A+1),L=o.getX(A+2);r=er(this,m,e,n,c,d,p,w,b,L),r&&(r.faceIndex=Math.floor(A/3),r.face.materialIndex=u.materialIndex,t.push(r))}}else{const g=Math.max(0,h.start),_=Math.min(o.count,h.start+h.count);for(let u=g,m=_;u<m;u+=3){const E=o.getX(u),y=o.getX(u+1),A=o.getX(u+2);r=er(this,a,e,n,c,d,p,E,y,A),r&&(r.faceIndex=Math.floor(u/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const u=f[g],m=a[u.materialIndex],E=Math.max(u.start,h.start),y=Math.min(l.count,Math.min(u.start+u.count,h.start+h.count));for(let A=E,U=y;A<U;A+=3){const w=A,b=A+1,L=A+2;r=er(this,m,e,n,c,d,p,w,b,L),r&&(r.faceIndex=Math.floor(A/3),r.face.materialIndex=u.materialIndex,t.push(r))}}else{const g=Math.max(0,h.start),_=Math.min(l.count,h.start+h.count);for(let u=g,m=_;u<m;u+=3){const E=u,y=u+1,A=u+2;r=er(this,a,e,n,c,d,p,E,y,A),r&&(r.faceIndex=Math.floor(u/3),t.push(r))}}}}function Uc(i,e,t,n,r,s,a,o){let l;if(e.side===St?l=n.intersectTriangle(a,s,r,!0,o):l=n.intersectTriangle(r,s,a,e.side===Tn,o),l===null)return null;Qi.copy(o),Qi.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Qi);return c<t.near||c>t.far?null:{distance:c,point:Qi.clone(),object:i}}function er(i,e,t,n,r,s,a,o,l,c){i.getVertexPosition(o,$i),i.getVertexPosition(l,Zi),i.getVertexPosition(c,ji);const d=Uc(i,e,t,n,$i,Zi,ji,Ga);if(d){const p=new N;Gt.getBarycoord(Ga,$i,Zi,ji,p),r&&(d.uv=Gt.getInterpolatedAttribute(r,o,l,c,p,new Le)),s&&(d.uv1=Gt.getInterpolatedAttribute(s,o,l,c,p,new Le)),a&&(d.normal=Gt.getInterpolatedAttribute(a,o,l,c,p,new N),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new N,materialIndex:0};Gt.getNormal($i,Zi,ji,f.normal),d.face=f,d.barycoord=p}return d}class Ii extends Kt{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],d=[],p=[];let f=0,h=0;g("z","y","x",-1,-1,n,t,e,a,s,0),g("z","y","x",1,-1,n,t,-e,a,s,1),g("x","z","y",1,1,e,n,t,r,a,2),g("x","z","y",1,-1,e,n,-t,r,a,3),g("x","y","z",1,-1,e,t,n,r,s,4),g("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new Bn(c,3)),this.setAttribute("normal",new Bn(d,3)),this.setAttribute("uv",new Bn(p,2));function g(_,u,m,E,y,A,U,w,b,L,Y){const v=A/b,S=U/L,k=A/2,B=U/2,V=w/2,$=b+1,H=L+1;let Z=0,G=0;const oe=new N;for(let le=0;le<H;le++){const ge=le*S-B;for(let Ge=0;Ge<$;Ge++){const Xe=Ge*v-k;oe[_]=Xe*E,oe[u]=ge*y,oe[m]=V,c.push(oe.x,oe.y,oe.z),oe[_]=0,oe[u]=0,oe[m]=w>0?1:-1,d.push(oe.x,oe.y,oe.z),p.push(Ge/b),p.push(1-le/L),Z+=1}}for(let le=0;le<L;le++)for(let ge=0;ge<b;ge++){const Ge=f+ge+$*le,Xe=f+ge+$*(le+1),W=f+(ge+1)+$*(le+1),J=f+(ge+1)+$*le;l.push(Ge,Xe,J),l.push(Xe,W,J),G+=6}o.addGroup(h,G,Y),h+=G,f+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ii(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function gi(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function mt(i){const e={};for(let t=0;t<i.length;t++){const n=gi(i[t]);for(const r in n)e[r]=n[r]}return e}function Ic(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Wo(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:We.workingColorSpace}const Nc={clone:gi,merge:mt};var Fc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Oc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Rt extends Ui{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Fc,this.fragmentShader=Oc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=gi(e.uniforms),this.uniformsGroups=Ic(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Xo extends yt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new tt,this.projectionMatrix=new tt,this.projectionMatrixInverse=new tt,this.coordinateSystem=ln}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const gn=new N,Ha=new Le,ka=new Le;class Dt extends Xo{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Pi*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(wi*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Pi*2*Math.atan(Math.tan(wi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){gn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(gn.x,gn.y).multiplyScalar(-e/gn.z),gn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(gn.x,gn.y).multiplyScalar(-e/gn.z)}getViewSize(e,t){return this.getViewBounds(e,Ha,ka),t.subVectors(ka,Ha)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(wi*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*n/c,r*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ei=-90,ti=1;class Bc extends yt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Dt(ei,ti,e,t);r.layers=this.layers,this.add(r);const s=new Dt(ei,ti,e,t);s.layers=this.layers,this.add(s);const a=new Dt(ei,ti,e,t);a.layers=this.layers,this.add(a);const o=new Dt(ei,ti,e,t);o.layers=this.layers,this.add(o);const l=new Dt(ei,ti,e,t);l.layers=this.layers,this.add(l);const c=new Dt(ei,ti,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===ln)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===xr)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,d]=this.children,p=e.getRenderTarget(),f=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,a),e.setRenderTarget(n,2,r),e.render(t,o),e.setRenderTarget(n,3,r),e.render(t,l),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,r),e.render(t,d),e.setRenderTarget(p,f,h),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class qo extends vt{constructor(e,t,n,r,s,a,o,l,c,d){e=e!==void 0?e:[],t=t!==void 0?t:di,super(e,t,n,r,s,a,o,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class zc extends at{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new qo(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Qe}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ii(5,5,5),s=new Rt({name:"CubemapFromEquirect",uniforms:gi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:St,blending:xn});s.uniforms.tEquirect.value=t;const a=new Ut(r,s),o=t.minFilter;return t.minFilter===On&&(t.minFilter=Qe),new Bc(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}}const Qr=new N,Gc=new N,Hc=new Ce;class vn{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=Qr.subVectors(n,t).cross(Gc.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Qr),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Hc.getNormalMatrix(e),r=this.coplanarPoint(Qr).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Dn=new Tr,tr=new N;class Yo{constructor(e=new vn,t=new vn,n=new vn,r=new vn,s=new vn,a=new vn){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ln){const n=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],d=r[5],p=r[6],f=r[7],h=r[8],g=r[9],_=r[10],u=r[11],m=r[12],E=r[13],y=r[14],A=r[15];if(n[0].setComponents(l-s,f-c,u-h,A-m).normalize(),n[1].setComponents(l+s,f+c,u+h,A+m).normalize(),n[2].setComponents(l+a,f+d,u+g,A+E).normalize(),n[3].setComponents(l-a,f-d,u-g,A-E).normalize(),n[4].setComponents(l-o,f-p,u-_,A-y).normalize(),t===ln)n[5].setComponents(l+o,f+p,u+_,A+y).normalize();else if(t===xr)n[5].setComponents(o,p,_,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Dn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Dn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Dn)}intersectsSprite(e){return Dn.center.set(0,0,0),Dn.radius=.7071067811865476,Dn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Dn)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(tr.x=r.normal.x>0?e.max.x:e.min.x,tr.y=r.normal.y>0?e.max.y:e.min.y,tr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(tr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ko(){let i=null,e=!1,t=null,n=null;function r(s,a){t(s,a),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function kc(i){const e=new WeakMap;function t(o,l){const c=o.array,d=o.usage,p=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,d),o.onUploadCallback();let h;if(c instanceof Float32Array)h=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?h=i.HALF_FLOAT:h=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)h=i.SHORT;else if(c instanceof Uint32Array)h=i.UNSIGNED_INT;else if(c instanceof Int32Array)h=i.INT;else if(c instanceof Int8Array)h=i.BYTE;else if(c instanceof Uint8Array)h=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)h=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:h,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:p}}function n(o,l,c){const d=l.array,p=l.updateRanges;if(i.bindBuffer(c,o),p.length===0)i.bufferSubData(c,0,d);else{p.sort((h,g)=>h.start-g.start);let f=0;for(let h=1;h<p.length;h++){const g=p[f],_=p[h];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,p[f]=_)}p.length=f+1;for(let h=0,g=p.length;h<g;h++){const _=p[h];i.bufferSubData(c,_.start*d.BYTES_PER_ELEMENT,d,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const d=e.get(o);(!d||d.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}class Gn extends Kt{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(r),c=o+1,d=l+1,p=e/o,f=t/l,h=[],g=[],_=[],u=[];for(let m=0;m<d;m++){const E=m*f-a;for(let y=0;y<c;y++){const A=y*p-s;g.push(A,-E,0),_.push(0,0,1),u.push(y/o),u.push(1-m/l)}}for(let m=0;m<l;m++)for(let E=0;E<o;E++){const y=E+c*m,A=E+c*(m+1),U=E+1+c*(m+1),w=E+1+c*m;h.push(y,A,w),h.push(A,U,w)}this.setIndex(h),this.setAttribute("position",new Bn(g,3)),this.setAttribute("normal",new Bn(_,3)),this.setAttribute("uv",new Bn(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gn(e.width,e.height,e.widthSegments,e.heightSegments)}}var Vc=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Wc=`#ifdef USE_ALPHAHASH
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
#endif`,Xc=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,qc=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Yc=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Kc=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,$c=`#ifdef USE_AOMAP
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
#endif`,Zc=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,jc=`#ifdef USE_BATCHING
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
#endif`,Jc=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Qc=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,eu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,tu=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,nu=`#ifdef USE_IRIDESCENCE
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
#endif`,iu=`#ifdef USE_BUMPMAP
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
#endif`,ru=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,su=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,au=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ou=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,lu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,cu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,uu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,hu=`#if defined( USE_COLOR_ALPHA )
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
#endif`,du=`#define PI 3.141592653589793
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
} // validated`,fu=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,pu=`vec3 transformedNormal = objectNormal;
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
#endif`,mu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,gu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,vu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,_u=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,xu="gl_FragColor = linearToOutputTexel( gl_FragColor );",Mu=`
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
}`,Su=`#ifdef USE_ENVMAP
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
#endif`,yu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Eu=`#ifdef USE_ENVMAP
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
#endif`,Tu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Au=`#ifdef USE_ENVMAP
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
#endif`,bu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,wu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ru=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Cu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Pu=`#ifdef USE_GRADIENTMAP
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
}`,Du=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Lu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Uu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Iu=`uniform bool receiveShadow;
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
#endif`,Nu=`#ifdef USE_ENVMAP
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
#endif`,Fu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ou=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Bu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,zu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Gu=`PhysicalMaterial material;
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
#endif`,Hu=`struct PhysicalMaterial {
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
}`,ku=`
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
#endif`,Vu=`#if defined( RE_IndirectDiffuse )
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
#endif`,Wu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Xu=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,qu=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Yu=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ku=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,$u=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Zu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ju=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ju=`#if defined( USE_POINTS_UV )
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
#endif`,Qu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,eh=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,th=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,nh=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ih=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rh=`#ifdef USE_MORPHTARGETS
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
#endif`,sh=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ah=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,oh=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,lh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ch=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,uh=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,hh=`#ifdef USE_NORMALMAP
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
#endif`,dh=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,fh=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ph=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,mh=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,gh=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,vh=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,_h=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,xh=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Mh=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Sh=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,yh=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Eh=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Th=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ah=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,bh=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,wh=`float getShadowMask() {
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
}`,Rh=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ch=`#ifdef USE_SKINNING
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
#endif`,Ph=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Dh=`#ifdef USE_SKINNING
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
#endif`,Lh=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Uh=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ih=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Nh=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Fh=`#ifdef USE_TRANSMISSION
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
#endif`,Oh=`#ifdef USE_TRANSMISSION
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
#endif`,Bh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Gh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Hh=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const kh=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Vh=`uniform sampler2D t2D;
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
}`,Wh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Xh=`#ifdef ENVMAP_TYPE_CUBE
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
}`,qh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Yh=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kh=`#include <common>
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
}`,$h=`#if DEPTH_PACKING == 3200
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
}`,Zh=`#define DISTANCE
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
}`,jh=`#define DISTANCE
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
}`,Jh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Qh=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ed=`uniform float scale;
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
}`,td=`uniform vec3 diffuse;
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
}`,nd=`#include <common>
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
}`,id=`uniform vec3 diffuse;
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
}`,rd=`#define LAMBERT
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
}`,sd=`#define LAMBERT
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
}`,ad=`#define MATCAP
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
}`,od=`#define MATCAP
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
}`,ld=`#define NORMAL
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
}`,cd=`#define NORMAL
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
}`,ud=`#define PHONG
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
}`,hd=`#define PHONG
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
}`,dd=`#define STANDARD
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
}`,fd=`#define STANDARD
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
}`,pd=`#define TOON
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
}`,md=`#define TOON
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
}`,gd=`uniform float size;
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
}`,vd=`uniform vec3 diffuse;
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
}`,_d=`#include <common>
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
}`,xd=`uniform vec3 color;
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
}`,Md=`uniform float rotation;
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
}`,Sd=`uniform vec3 diffuse;
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
}`,De={alphahash_fragment:Vc,alphahash_pars_fragment:Wc,alphamap_fragment:Xc,alphamap_pars_fragment:qc,alphatest_fragment:Yc,alphatest_pars_fragment:Kc,aomap_fragment:$c,aomap_pars_fragment:Zc,batching_pars_vertex:jc,batching_vertex:Jc,begin_vertex:Qc,beginnormal_vertex:eu,bsdfs:tu,iridescence_fragment:nu,bumpmap_pars_fragment:iu,clipping_planes_fragment:ru,clipping_planes_pars_fragment:su,clipping_planes_pars_vertex:au,clipping_planes_vertex:ou,color_fragment:lu,color_pars_fragment:cu,color_pars_vertex:uu,color_vertex:hu,common:du,cube_uv_reflection_fragment:fu,defaultnormal_vertex:pu,displacementmap_pars_vertex:mu,displacementmap_vertex:gu,emissivemap_fragment:vu,emissivemap_pars_fragment:_u,colorspace_fragment:xu,colorspace_pars_fragment:Mu,envmap_fragment:Su,envmap_common_pars_fragment:yu,envmap_pars_fragment:Eu,envmap_pars_vertex:Tu,envmap_physical_pars_fragment:Nu,envmap_vertex:Au,fog_vertex:bu,fog_pars_vertex:wu,fog_fragment:Ru,fog_pars_fragment:Cu,gradientmap_pars_fragment:Pu,lightmap_pars_fragment:Du,lights_lambert_fragment:Lu,lights_lambert_pars_fragment:Uu,lights_pars_begin:Iu,lights_toon_fragment:Fu,lights_toon_pars_fragment:Ou,lights_phong_fragment:Bu,lights_phong_pars_fragment:zu,lights_physical_fragment:Gu,lights_physical_pars_fragment:Hu,lights_fragment_begin:ku,lights_fragment_maps:Vu,lights_fragment_end:Wu,logdepthbuf_fragment:Xu,logdepthbuf_pars_fragment:qu,logdepthbuf_pars_vertex:Yu,logdepthbuf_vertex:Ku,map_fragment:$u,map_pars_fragment:Zu,map_particle_fragment:ju,map_particle_pars_fragment:Ju,metalnessmap_fragment:Qu,metalnessmap_pars_fragment:eh,morphinstance_vertex:th,morphcolor_vertex:nh,morphnormal_vertex:ih,morphtarget_pars_vertex:rh,morphtarget_vertex:sh,normal_fragment_begin:ah,normal_fragment_maps:oh,normal_pars_fragment:lh,normal_pars_vertex:ch,normal_vertex:uh,normalmap_pars_fragment:hh,clearcoat_normal_fragment_begin:dh,clearcoat_normal_fragment_maps:fh,clearcoat_pars_fragment:ph,iridescence_pars_fragment:mh,opaque_fragment:gh,packing:vh,premultiplied_alpha_fragment:_h,project_vertex:xh,dithering_fragment:Mh,dithering_pars_fragment:Sh,roughnessmap_fragment:yh,roughnessmap_pars_fragment:Eh,shadowmap_pars_fragment:Th,shadowmap_pars_vertex:Ah,shadowmap_vertex:bh,shadowmask_pars_fragment:wh,skinbase_vertex:Rh,skinning_pars_vertex:Ch,skinning_vertex:Ph,skinnormal_vertex:Dh,specularmap_fragment:Lh,specularmap_pars_fragment:Uh,tonemapping_fragment:Ih,tonemapping_pars_fragment:Nh,transmission_fragment:Fh,transmission_pars_fragment:Oh,uv_pars_fragment:Bh,uv_pars_vertex:zh,uv_vertex:Gh,worldpos_vertex:Hh,background_vert:kh,background_frag:Vh,backgroundCube_vert:Wh,backgroundCube_frag:Xh,cube_vert:qh,cube_frag:Yh,depth_vert:Kh,depth_frag:$h,distanceRGBA_vert:Zh,distanceRGBA_frag:jh,equirect_vert:Jh,equirect_frag:Qh,linedashed_vert:ed,linedashed_frag:td,meshbasic_vert:nd,meshbasic_frag:id,meshlambert_vert:rd,meshlambert_frag:sd,meshmatcap_vert:ad,meshmatcap_frag:od,meshnormal_vert:ld,meshnormal_frag:cd,meshphong_vert:ud,meshphong_frag:hd,meshphysical_vert:dd,meshphysical_frag:fd,meshtoon_vert:pd,meshtoon_frag:md,points_vert:gd,points_frag:vd,shadow_vert:_d,shadow_frag:xd,sprite_vert:Md,sprite_frag:Sd},te={common:{diffuse:{value:new Ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ce},alphaMap:{value:null},alphaMapTransform:{value:new Ce},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ce}},envmap:{envMap:{value:null},envMapRotation:{value:new Ce},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ce}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ce}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ce},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ce},normalScale:{value:new Le(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ce},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ce}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ce}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ce}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ce},alphaTest:{value:0},uvTransform:{value:new Ce}},sprite:{diffuse:{value:new Ye(16777215)},opacity:{value:1},center:{value:new Le(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ce},alphaMap:{value:null},alphaMapTransform:{value:new Ce},alphaTest:{value:0}}},Wt={basic:{uniforms:mt([te.common,te.specularmap,te.envmap,te.aomap,te.lightmap,te.fog]),vertexShader:De.meshbasic_vert,fragmentShader:De.meshbasic_frag},lambert:{uniforms:mt([te.common,te.specularmap,te.envmap,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.fog,te.lights,{emissive:{value:new Ye(0)}}]),vertexShader:De.meshlambert_vert,fragmentShader:De.meshlambert_frag},phong:{uniforms:mt([te.common,te.specularmap,te.envmap,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.fog,te.lights,{emissive:{value:new Ye(0)},specular:{value:new Ye(1118481)},shininess:{value:30}}]),vertexShader:De.meshphong_vert,fragmentShader:De.meshphong_frag},standard:{uniforms:mt([te.common,te.envmap,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.roughnessmap,te.metalnessmap,te.fog,te.lights,{emissive:{value:new Ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:De.meshphysical_vert,fragmentShader:De.meshphysical_frag},toon:{uniforms:mt([te.common,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.gradientmap,te.fog,te.lights,{emissive:{value:new Ye(0)}}]),vertexShader:De.meshtoon_vert,fragmentShader:De.meshtoon_frag},matcap:{uniforms:mt([te.common,te.bumpmap,te.normalmap,te.displacementmap,te.fog,{matcap:{value:null}}]),vertexShader:De.meshmatcap_vert,fragmentShader:De.meshmatcap_frag},points:{uniforms:mt([te.points,te.fog]),vertexShader:De.points_vert,fragmentShader:De.points_frag},dashed:{uniforms:mt([te.common,te.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:De.linedashed_vert,fragmentShader:De.linedashed_frag},depth:{uniforms:mt([te.common,te.displacementmap]),vertexShader:De.depth_vert,fragmentShader:De.depth_frag},normal:{uniforms:mt([te.common,te.bumpmap,te.normalmap,te.displacementmap,{opacity:{value:1}}]),vertexShader:De.meshnormal_vert,fragmentShader:De.meshnormal_frag},sprite:{uniforms:mt([te.sprite,te.fog]),vertexShader:De.sprite_vert,fragmentShader:De.sprite_frag},background:{uniforms:{uvTransform:{value:new Ce},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:De.background_vert,fragmentShader:De.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ce}},vertexShader:De.backgroundCube_vert,fragmentShader:De.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:De.cube_vert,fragmentShader:De.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:De.equirect_vert,fragmentShader:De.equirect_frag},distanceRGBA:{uniforms:mt([te.common,te.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:De.distanceRGBA_vert,fragmentShader:De.distanceRGBA_frag},shadow:{uniforms:mt([te.lights,te.fog,{color:{value:new Ye(0)},opacity:{value:1}}]),vertexShader:De.shadow_vert,fragmentShader:De.shadow_frag}};Wt.physical={uniforms:mt([Wt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ce},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ce},clearcoatNormalScale:{value:new Le(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ce},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ce},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ce},sheen:{value:0},sheenColor:{value:new Ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ce},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ce},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ce},transmissionSamplerSize:{value:new Le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ce},attenuationDistance:{value:0},attenuationColor:{value:new Ye(0)},specularColor:{value:new Ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ce},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ce},anisotropyVector:{value:new Le},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ce}}]),vertexShader:De.meshphysical_vert,fragmentShader:De.meshphysical_frag};const nr={r:0,b:0,g:0},Ln=new cn,yd=new tt;function Ed(i,e,t,n,r,s,a){const o=new Ye(0);let l=s===!0?0:1,c,d,p=null,f=0,h=null;function g(E){let y=E.isScene===!0?E.background:null;return y&&y.isTexture&&(y=(E.backgroundBlurriness>0?t:e).get(y)),y}function _(E){let y=!1;const A=g(E);A===null?m(o,l):A&&A.isColor&&(m(A,1),y=!0);const U=i.xr.getEnvironmentBlendMode();U==="additive"?n.buffers.color.setClear(0,0,0,1,a):U==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function u(E,y){const A=g(y);A&&(A.isCubeTexture||A.mapping===yr)?(d===void 0&&(d=new Ut(new Ii(1,1,1),new Rt({name:"BackgroundCubeMaterial",uniforms:gi(Wt.backgroundCube.uniforms),vertexShader:Wt.backgroundCube.vertexShader,fragmentShader:Wt.backgroundCube.fragmentShader,side:St,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(U,w,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),Ln.copy(y.backgroundRotation),Ln.x*=-1,Ln.y*=-1,Ln.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(Ln.y*=-1,Ln.z*=-1),d.material.uniforms.envMap.value=A,d.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(yd.makeRotationFromEuler(Ln)),d.material.toneMapped=We.getTransfer(A.colorSpace)!==Je,(p!==A||f!==A.version||h!==i.toneMapping)&&(d.material.needsUpdate=!0,p=A,f=A.version,h=i.toneMapping),d.layers.enableAll(),E.unshift(d,d.geometry,d.material,0,0,null)):A&&A.isTexture&&(c===void 0&&(c=new Ut(new Gn(2,2),new Rt({name:"BackgroundMaterial",uniforms:gi(Wt.background.uniforms),vertexShader:Wt.background.vertexShader,fragmentShader:Wt.background.fragmentShader,side:Tn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=A,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=We.getTransfer(A.colorSpace)!==Je,A.matrixAutoUpdate===!0&&A.updateMatrix(),c.material.uniforms.uvTransform.value.copy(A.matrix),(p!==A||f!==A.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,p=A,f=A.version,h=i.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function m(E,y){E.getRGB(nr,Wo(i)),n.buffers.color.setClear(nr.r,nr.g,nr.b,y,a)}return{getClearColor:function(){return o},setClearColor:function(E,y=1){o.set(E),l=y,m(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,m(o,l)},render:_,addToRenderList:u}}function Td(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=f(null);let s=r,a=!1;function o(v,S,k,B,V){let $=!1;const H=p(B,k,S);s!==H&&(s=H,c(s.object)),$=h(v,B,k,V),$&&g(v,B,k,V),V!==null&&e.update(V,i.ELEMENT_ARRAY_BUFFER),($||a)&&(a=!1,A(v,S,k,B),V!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function l(){return i.createVertexArray()}function c(v){return i.bindVertexArray(v)}function d(v){return i.deleteVertexArray(v)}function p(v,S,k){const B=k.wireframe===!0;let V=n[v.id];V===void 0&&(V={},n[v.id]=V);let $=V[S.id];$===void 0&&($={},V[S.id]=$);let H=$[B];return H===void 0&&(H=f(l()),$[B]=H),H}function f(v){const S=[],k=[],B=[];for(let V=0;V<t;V++)S[V]=0,k[V]=0,B[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:S,enabledAttributes:k,attributeDivisors:B,object:v,attributes:{},index:null}}function h(v,S,k,B){const V=s.attributes,$=S.attributes;let H=0;const Z=k.getAttributes();for(const G in Z)if(Z[G].location>=0){const le=V[G];let ge=$[G];if(ge===void 0&&(G==="instanceMatrix"&&v.instanceMatrix&&(ge=v.instanceMatrix),G==="instanceColor"&&v.instanceColor&&(ge=v.instanceColor)),le===void 0||le.attribute!==ge||ge&&le.data!==ge.data)return!0;H++}return s.attributesNum!==H||s.index!==B}function g(v,S,k,B){const V={},$=S.attributes;let H=0;const Z=k.getAttributes();for(const G in Z)if(Z[G].location>=0){let le=$[G];le===void 0&&(G==="instanceMatrix"&&v.instanceMatrix&&(le=v.instanceMatrix),G==="instanceColor"&&v.instanceColor&&(le=v.instanceColor));const ge={};ge.attribute=le,le&&le.data&&(ge.data=le.data),V[G]=ge,H++}s.attributes=V,s.attributesNum=H,s.index=B}function _(){const v=s.newAttributes;for(let S=0,k=v.length;S<k;S++)v[S]=0}function u(v){m(v,0)}function m(v,S){const k=s.newAttributes,B=s.enabledAttributes,V=s.attributeDivisors;k[v]=1,B[v]===0&&(i.enableVertexAttribArray(v),B[v]=1),V[v]!==S&&(i.vertexAttribDivisor(v,S),V[v]=S)}function E(){const v=s.newAttributes,S=s.enabledAttributes;for(let k=0,B=S.length;k<B;k++)S[k]!==v[k]&&(i.disableVertexAttribArray(k),S[k]=0)}function y(v,S,k,B,V,$,H){H===!0?i.vertexAttribIPointer(v,S,k,V,$):i.vertexAttribPointer(v,S,k,B,V,$)}function A(v,S,k,B){_();const V=B.attributes,$=k.getAttributes(),H=S.defaultAttributeValues;for(const Z in $){const G=$[Z];if(G.location>=0){let oe=V[Z];if(oe===void 0&&(Z==="instanceMatrix"&&v.instanceMatrix&&(oe=v.instanceMatrix),Z==="instanceColor"&&v.instanceColor&&(oe=v.instanceColor)),oe!==void 0){const le=oe.normalized,ge=oe.itemSize,Ge=e.get(oe);if(Ge===void 0)continue;const Xe=Ge.buffer,W=Ge.type,J=Ge.bytesPerElement,pe=W===i.INT||W===i.UNSIGNED_INT||oe.gpuType===ea;if(oe.isInterleavedBufferAttribute){const ce=oe.data,we=ce.stride,Se=oe.offset;if(ce.isInstancedInterleavedBuffer){for(let Ne=0;Ne<G.locationSize;Ne++)m(G.location+Ne,ce.meshPerAttribute);v.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let Ne=0;Ne<G.locationSize;Ne++)u(G.location+Ne);i.bindBuffer(i.ARRAY_BUFFER,Xe);for(let Ne=0;Ne<G.locationSize;Ne++)y(G.location+Ne,ge/G.locationSize,W,le,we*J,(Se+ge/G.locationSize*Ne)*J,pe)}else{if(oe.isInstancedBufferAttribute){for(let ce=0;ce<G.locationSize;ce++)m(G.location+ce,oe.meshPerAttribute);v.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let ce=0;ce<G.locationSize;ce++)u(G.location+ce);i.bindBuffer(i.ARRAY_BUFFER,Xe);for(let ce=0;ce<G.locationSize;ce++)y(G.location+ce,ge/G.locationSize,W,le,ge*J,ge/G.locationSize*ce*J,pe)}}else if(H!==void 0){const le=H[Z];if(le!==void 0)switch(le.length){case 2:i.vertexAttrib2fv(G.location,le);break;case 3:i.vertexAttrib3fv(G.location,le);break;case 4:i.vertexAttrib4fv(G.location,le);break;default:i.vertexAttrib1fv(G.location,le)}}}}E()}function U(){L();for(const v in n){const S=n[v];for(const k in S){const B=S[k];for(const V in B)d(B[V].object),delete B[V];delete S[k]}delete n[v]}}function w(v){if(n[v.id]===void 0)return;const S=n[v.id];for(const k in S){const B=S[k];for(const V in B)d(B[V].object),delete B[V];delete S[k]}delete n[v.id]}function b(v){for(const S in n){const k=n[S];if(k[v.id]===void 0)continue;const B=k[v.id];for(const V in B)d(B[V].object),delete B[V];delete k[v.id]}}function L(){Y(),a=!0,s!==r&&(s=r,c(s.object))}function Y(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:L,resetDefaultState:Y,dispose:U,releaseStatesOfGeometry:w,releaseStatesOfProgram:b,initAttributes:_,enableAttribute:u,disableUnusedAttributes:E}}function Ad(i,e,t){let n;function r(c){n=c}function s(c,d){i.drawArrays(n,c,d),t.update(d,n,1)}function a(c,d,p){p!==0&&(i.drawArraysInstanced(n,c,d,p),t.update(d,n,p))}function o(c,d,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,d,0,p);let h=0;for(let g=0;g<p;g++)h+=d[g];t.update(h,n,1)}function l(c,d,p,f){if(p===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let g=0;g<c.length;g++)a(c[g],d[g],f[g]);else{h.multiDrawArraysInstancedWEBGL(n,c,0,d,0,f,0,p);let g=0;for(let _=0;_<p;_++)g+=d[_];for(let _=0;_<f.length;_++)t.update(g,n,f[_])}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function bd(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(b){return!(b!==Lt&&n.convert(b)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(b){const L=b===Hn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(b!==kt&&n.convert(b)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==qt&&!L)}function l(b){if(b==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const d=l(c);d!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const p=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(f===!0){const b=e.get("EXT_clip_control");b.clipControlEXT(b.LOWER_LEFT_EXT,b.ZERO_TO_ONE_EXT)}const h=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),u=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),E=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),A=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),U=g>0,w=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:p,reverseDepthBuffer:f,maxTextures:h,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:u,maxAttributes:m,maxVertexUniforms:E,maxVaryings:y,maxFragmentUniforms:A,vertexTextures:U,maxSamples:w}}function wd(i){const e=this;let t=null,n=0,r=!1,s=!1;const a=new vn,o=new Ce,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,f){const h=p.length!==0||f||n!==0||r;return r=f,n=p.length,h},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(p,f){t=d(p,f,0)},this.setState=function(p,f,h){const g=p.clippingPlanes,_=p.clipIntersection,u=p.clipShadows,m=i.get(p);if(!r||g===null||g.length===0||s&&!u)s?d(null):c();else{const E=s?0:n,y=E*4;let A=m.clippingState||null;l.value=A,A=d(g,f,y,h);for(let U=0;U!==y;++U)A[U]=t[U];m.clippingState=A,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(p,f,h,g){const _=p!==null?p.length:0;let u=null;if(_!==0){if(u=l.value,g!==!0||u===null){const m=h+_*4,E=f.matrixWorldInverse;o.getNormalMatrix(E),(u===null||u.length<m)&&(u=new Float32Array(m));for(let y=0,A=h;y!==_;++y,A+=4)a.copy(p[y]).applyMatrix4(E,o),a.normal.toArray(u,A),u[A+3]=a.constant}l.value=u,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,u}}function Rd(i){let e=new WeakMap;function t(a,o){return o===vs?a.mapping=di:o===_s&&(a.mapping=fi),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===vs||o===_s)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new zc(l.height);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",r),t(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class Ar extends Xo{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const si=4,Va=[.125,.215,.35,.446,.526,.582],Nn=20,es=new Ar,Wa=new Ye;let ts=null,ns=0,is=0,rs=!1;const In=(1+Math.sqrt(5))/2,ni=1/In,Xa=[new N(-In,ni,0),new N(In,ni,0),new N(-ni,0,In),new N(ni,0,In),new N(0,In,-ni),new N(0,In,ni),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)];class qa{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){ts=this._renderer.getRenderTarget(),ns=this._renderer.getActiveCubeFace(),is=this._renderer.getActiveMipmapLevel(),rs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=$a(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ka(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ts,ns,is),this._renderer.xr.enabled=rs,e.scissorTest=!1,ir(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===di||e.mapping===fi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ts=this._renderer.getRenderTarget(),ns=this._renderer.getActiveCubeFace(),is=this._renderer.getActiveMipmapLevel(),rs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Qe,minFilter:Qe,generateMipmaps:!1,type:Hn,format:Lt,colorSpace:An,depthBuffer:!1},r=Ya(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ya(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Cd(s)),this._blurMaterial=Pd(s,e,t)}return r}_compileMaterial(e){const t=new Ut(this._lodPlanes[0],e);this._renderer.compile(t,es)}_sceneToCubeUV(e,t,n,r){const o=new Dt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,p=d.autoClear,f=d.toneMapping;d.getClearColor(Wa),d.toneMapping=Mn,d.autoClear=!1;const h=new Ho({name:"PMREM.Background",side:St,depthWrite:!1,depthTest:!1}),g=new Ut(new Ii,h);let _=!1;const u=e.background;u?u.isColor&&(h.color.copy(u),e.background=null,_=!0):(h.color.copy(Wa),_=!0);for(let m=0;m<6;m++){const E=m%3;E===0?(o.up.set(0,l[m],0),o.lookAt(c[m],0,0)):E===1?(o.up.set(0,0,l[m]),o.lookAt(0,c[m],0)):(o.up.set(0,l[m],0),o.lookAt(0,0,c[m]));const y=this._cubeSize;ir(r,E*y,m>2?y:0,y,y),d.setRenderTarget(r),_&&d.render(g,o),d.render(e,o)}g.geometry.dispose(),g.material.dispose(),d.toneMapping=f,d.autoClear=p,e.background=u}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===di||e.mapping===fi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=$a()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ka());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new Ut(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;ir(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,es)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Xa[(r-s-1)%Xa.length];this._blur(e,s-1,s,a,o)}t.autoClear=n}_blur(e,t,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,"latitudinal",s),this._halfBlur(a,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,p=new Ut(this._lodPlanes[r],c),f=c.uniforms,h=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*h):2*Math.PI/(2*Nn-1),_=s/g,u=isFinite(s)?1+Math.floor(d*_):Nn;u>Nn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${u} samples when the maximum is set to ${Nn}`);const m=[];let E=0;for(let b=0;b<Nn;++b){const L=b/_,Y=Math.exp(-L*L/2);m.push(Y),b===0?E+=Y:b<u&&(E+=2*Y)}for(let b=0;b<m.length;b++)m[b]=m[b]/E;f.envMap.value=e.texture,f.samples.value=u,f.weights.value=m,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:y}=this;f.dTheta.value=g,f.mipInt.value=y-n;const A=this._sizeLods[r],U=3*A*(r>y-si?r-y+si:0),w=4*(this._cubeSize-A);ir(t,U,w,3*A,2*A),l.setRenderTarget(t),l.render(p,es)}}function Cd(i){const e=[],t=[],n=[];let r=i;const s=i-si+1+Va.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let l=1/o;a>i-si?l=Va[a-i+si-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),d=-c,p=1+c,f=[d,d,p,d,p,p,d,d,p,p,d,p],h=6,g=6,_=3,u=2,m=1,E=new Float32Array(_*g*h),y=new Float32Array(u*g*h),A=new Float32Array(m*g*h);for(let w=0;w<h;w++){const b=w%3*2/3-1,L=w>2?0:-1,Y=[b,L,0,b+2/3,L,0,b+2/3,L+1,0,b,L,0,b+2/3,L+1,0,b,L+1,0];E.set(Y,_*g*w),y.set(f,u*g*w);const v=[w,w,w,w,w,w];A.set(v,m*g*w)}const U=new Kt;U.setAttribute("position",new st(E,_)),U.setAttribute("uv",new st(y,u)),U.setAttribute("faceIndex",new st(A,m)),e.push(U),r>si&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Ya(i,e,t){const n=new at(i,e,t);return n.texture.mapping=yr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ir(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function Pd(i,e,t){const n=new Float32Array(Nn),r=new N(0,1,0);return new Rt({name:"SphericalGaussianBlur",defines:{n:Nn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ua(),fragmentShader:`

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
		`,blending:xn,depthTest:!1,depthWrite:!1})}function Ka(){return new Rt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ua(),fragmentShader:`

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
		`,blending:xn,depthTest:!1,depthWrite:!1})}function $a(){return new Rt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ua(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:xn,depthTest:!1,depthWrite:!1})}function ua(){return`

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
	`}function Dd(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===vs||l===_s,d=l===di||l===fi;if(c||d){let p=e.get(o);const f=p!==void 0?p.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new qa(i)),p=c?t.fromEquirectangular(o,p):t.fromCubemap(o,p),p.texture.pmremVersion=o.pmremVersion,e.set(o,p),p.texture;if(p!==void 0)return p.texture;{const h=o.image;return c&&h&&h.height>0||d&&h&&r(h)?(t===null&&(t=new qa(i)),p=c?t.fromEquirectangular(o):t.fromCubemap(o),p.texture.pmremVersion=o.pmremVersion,e.set(o,p),o.addEventListener("dispose",s),p.texture):null}}}return o}function r(o){let l=0;const c=6;for(let d=0;d<c;d++)o[d]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Ld(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&fr("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function Ud(i,e,t,n){const r={},s=new WeakMap;function a(p){const f=p.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);for(const g in f.morphAttributes){const _=f.morphAttributes[g];for(let u=0,m=_.length;u<m;u++)e.remove(_[u])}f.removeEventListener("dispose",a),delete r[f.id];const h=s.get(f);h&&(e.remove(h),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(p,f){return r[f.id]===!0||(f.addEventListener("dispose",a),r[f.id]=!0,t.memory.geometries++),f}function l(p){const f=p.attributes;for(const g in f)e.update(f[g],i.ARRAY_BUFFER);const h=p.morphAttributes;for(const g in h){const _=h[g];for(let u=0,m=_.length;u<m;u++)e.update(_[u],i.ARRAY_BUFFER)}}function c(p){const f=[],h=p.index,g=p.attributes.position;let _=0;if(h!==null){const E=h.array;_=h.version;for(let y=0,A=E.length;y<A;y+=3){const U=E[y+0],w=E[y+1],b=E[y+2];f.push(U,w,w,b,b,U)}}else if(g!==void 0){const E=g.array;_=g.version;for(let y=0,A=E.length/3-1;y<A;y+=3){const U=y+0,w=y+1,b=y+2;f.push(U,w,w,b,b,U)}}else return;const u=new(Oo(f)?Vo:ko)(f,1);u.version=_;const m=s.get(p);m&&e.remove(m),s.set(p,u)}function d(p){const f=s.get(p);if(f){const h=p.index;h!==null&&f.version<h.version&&c(p)}else c(p);return s.get(p)}return{get:o,update:l,getWireframeAttribute:d}}function Id(i,e,t){let n;function r(f){n=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function l(f,h){i.drawElements(n,h,s,f*a),t.update(h,n,1)}function c(f,h,g){g!==0&&(i.drawElementsInstanced(n,h,s,f*a,g),t.update(h,n,g))}function d(f,h,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,s,f,0,g);let u=0;for(let m=0;m<g;m++)u+=h[m];t.update(u,n,1)}function p(f,h,g,_){if(g===0)return;const u=e.get("WEBGL_multi_draw");if(u===null)for(let m=0;m<f.length;m++)c(f[m]/a,h[m],_[m]);else{u.multiDrawElementsInstancedWEBGL(n,h,0,s,f,0,_,0,g);let m=0;for(let E=0;E<g;E++)m+=h[E];for(let E=0;E<_.length;E++)t.update(m,n,_[E])}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=p}function Nd(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(s/3);break;case i.LINES:t.lines+=o*(s/2);break;case i.LINE_STRIP:t.lines+=o*(s-1);break;case i.LINE_LOOP:t.lines+=o*s;break;case i.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function Fd(i,e,t){const n=new WeakMap,r=new Pe;function s(a,o,l){const c=a.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=d!==void 0?d.length:0;let f=n.get(o);if(f===void 0||f.count!==p){let v=function(){L.dispose(),n.delete(o),o.removeEventListener("dispose",v)};var h=v;f!==void 0&&f.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,u=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],E=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let A=0;g===!0&&(A=1),_===!0&&(A=2),u===!0&&(A=3);let U=o.attributes.position.count*A,w=1;U>e.maxTextureSize&&(w=Math.ceil(U/e.maxTextureSize),U=e.maxTextureSize);const b=new Float32Array(U*w*4*p),L=new zo(b,U,w,p);L.type=qt,L.needsUpdate=!0;const Y=A*4;for(let S=0;S<p;S++){const k=m[S],B=E[S],V=y[S],$=U*w*4*S;for(let H=0;H<k.count;H++){const Z=H*Y;g===!0&&(r.fromBufferAttribute(k,H),b[$+Z+0]=r.x,b[$+Z+1]=r.y,b[$+Z+2]=r.z,b[$+Z+3]=0),_===!0&&(r.fromBufferAttribute(B,H),b[$+Z+4]=r.x,b[$+Z+5]=r.y,b[$+Z+6]=r.z,b[$+Z+7]=0),u===!0&&(r.fromBufferAttribute(V,H),b[$+Z+8]=r.x,b[$+Z+9]=r.y,b[$+Z+10]=r.z,b[$+Z+11]=V.itemSize===4?r.w:1)}}f={count:p,texture:L,size:new Le(U,w)},n.set(o,f),o.addEventListener("dispose",v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let g=0;for(let u=0;u<c.length;u++)g+=c[u];const _=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:s}}function Od(i,e,t,n){let r=new WeakMap;function s(l){const c=n.render.frame,d=l.geometry,p=e.get(l,d);if(r.get(p)!==c&&(e.update(p),r.set(p,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return p}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}class $o extends vt{constructor(e,t,n,r,s,a,o,l,c,d=li){if(d!==li&&d!==mi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&d===li&&(n=zn),n===void 0&&d===mi&&(n=pi),super(null,r,s,a,o,l,d,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:ft,this.minFilter=l!==void 0?l:ft,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Zo=new vt,Za=new $o(1,1),jo=new zo,Jo=new Ec,Qo=new qo,ja=[],Ja=[],Qa=new Float32Array(16),eo=new Float32Array(9),to=new Float32Array(4);function xi(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=ja[r];if(s===void 0&&(s=new Float32Array(r),ja[r]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(s,o)}return s}function ot(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function lt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function br(i,e){let t=Ja[e];t===void 0&&(t=new Int32Array(e),Ja[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Bd(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function zd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ot(t,e))return;i.uniform2fv(this.addr,e),lt(t,e)}}function Gd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ot(t,e))return;i.uniform3fv(this.addr,e),lt(t,e)}}function Hd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ot(t,e))return;i.uniform4fv(this.addr,e),lt(t,e)}}function kd(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ot(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),lt(t,e)}else{if(ot(t,n))return;to.set(n),i.uniformMatrix2fv(this.addr,!1,to),lt(t,n)}}function Vd(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ot(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),lt(t,e)}else{if(ot(t,n))return;eo.set(n),i.uniformMatrix3fv(this.addr,!1,eo),lt(t,n)}}function Wd(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ot(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),lt(t,e)}else{if(ot(t,n))return;Qa.set(n),i.uniformMatrix4fv(this.addr,!1,Qa),lt(t,n)}}function Xd(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function qd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ot(t,e))return;i.uniform2iv(this.addr,e),lt(t,e)}}function Yd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ot(t,e))return;i.uniform3iv(this.addr,e),lt(t,e)}}function Kd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ot(t,e))return;i.uniform4iv(this.addr,e),lt(t,e)}}function $d(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Zd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ot(t,e))return;i.uniform2uiv(this.addr,e),lt(t,e)}}function jd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ot(t,e))return;i.uniform3uiv(this.addr,e),lt(t,e)}}function Jd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ot(t,e))return;i.uniform4uiv(this.addr,e),lt(t,e)}}function Qd(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(Za.compareFunction=Fo,s=Za):s=Zo,t.setTexture2D(e||s,r)}function ef(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Jo,r)}function tf(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Qo,r)}function nf(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||jo,r)}function rf(i){switch(i){case 5126:return Bd;case 35664:return zd;case 35665:return Gd;case 35666:return Hd;case 35674:return kd;case 35675:return Vd;case 35676:return Wd;case 5124:case 35670:return Xd;case 35667:case 35671:return qd;case 35668:case 35672:return Yd;case 35669:case 35673:return Kd;case 5125:return $d;case 36294:return Zd;case 36295:return jd;case 36296:return Jd;case 35678:case 36198:case 36298:case 36306:case 35682:return Qd;case 35679:case 36299:case 36307:return ef;case 35680:case 36300:case 36308:case 36293:return tf;case 36289:case 36303:case 36311:case 36292:return nf}}function sf(i,e){i.uniform1fv(this.addr,e)}function af(i,e){const t=xi(e,this.size,2);i.uniform2fv(this.addr,t)}function of(i,e){const t=xi(e,this.size,3);i.uniform3fv(this.addr,t)}function lf(i,e){const t=xi(e,this.size,4);i.uniform4fv(this.addr,t)}function cf(i,e){const t=xi(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function uf(i,e){const t=xi(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function hf(i,e){const t=xi(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function df(i,e){i.uniform1iv(this.addr,e)}function ff(i,e){i.uniform2iv(this.addr,e)}function pf(i,e){i.uniform3iv(this.addr,e)}function mf(i,e){i.uniform4iv(this.addr,e)}function gf(i,e){i.uniform1uiv(this.addr,e)}function vf(i,e){i.uniform2uiv(this.addr,e)}function _f(i,e){i.uniform3uiv(this.addr,e)}function xf(i,e){i.uniform4uiv(this.addr,e)}function Mf(i,e,t){const n=this.cache,r=e.length,s=br(t,r);ot(n,s)||(i.uniform1iv(this.addr,s),lt(n,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||Zo,s[a])}function Sf(i,e,t){const n=this.cache,r=e.length,s=br(t,r);ot(n,s)||(i.uniform1iv(this.addr,s),lt(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Jo,s[a])}function yf(i,e,t){const n=this.cache,r=e.length,s=br(t,r);ot(n,s)||(i.uniform1iv(this.addr,s),lt(n,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Qo,s[a])}function Ef(i,e,t){const n=this.cache,r=e.length,s=br(t,r);ot(n,s)||(i.uniform1iv(this.addr,s),lt(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||jo,s[a])}function Tf(i){switch(i){case 5126:return sf;case 35664:return af;case 35665:return of;case 35666:return lf;case 35674:return cf;case 35675:return uf;case 35676:return hf;case 5124:case 35670:return df;case 35667:case 35671:return ff;case 35668:case 35672:return pf;case 35669:case 35673:return mf;case 5125:return gf;case 36294:return vf;case 36295:return _f;case 36296:return xf;case 35678:case 36198:case 36298:case 36306:case 35682:return Mf;case 35679:case 36299:case 36307:return Sf;case 35680:case 36300:case 36308:case 36293:return yf;case 36289:case 36303:case 36311:case 36292:return Ef}}class Af{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=rf(t.type)}}class bf{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Tf(t.type)}}class wf{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],n)}}}const ss=/(\w+)(\])?(\[|\.)?/g;function no(i,e){i.seq.push(e),i.map[e.id]=e}function Rf(i,e,t){const n=i.name,r=n.length;for(ss.lastIndex=0;;){const s=ss.exec(n),a=ss.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){no(t,c===void 0?new Af(o,i,e):new bf(o,i,e));break}else{let p=t.map[o];p===void 0&&(p=new wf(o),no(t,p)),t=p}}}class pr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);Rf(s,a,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&n.push(a)}return n}}function io(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Cf=37297;let Pf=0;function Df(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function Lf(i){const e=We.getPrimaries(We.workingColorSpace),t=We.getPrimaries(i);let n;switch(e===t?n="":e===vr&&t===gr?n="LinearDisplayP3ToLinearSRGB":e===gr&&t===vr&&(n="LinearSRGBToLinearDisplayP3"),i){case An:case Er:return[n,"LinearTransferOETF"];case Vt:case aa:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function ro(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+Df(i.getShaderSource(e),a)}else return r}function Uf(i,e){const t=Lf(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function If(i,e){let t;switch(e){case Ul:t="Linear";break;case Il:t="Reinhard";break;case Nl:t="Cineon";break;case Fl:t="ACESFilmic";break;case Bl:t="AgX";break;case zl:t="Neutral";break;case Ol:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const rr=new N;function Nf(){We.getLuminanceCoefficients(rr);const i=rr.x.toFixed(4),e=rr.y.toFixed(4),t=rr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ff(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(bi).join(`
`)}function Of(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Bf(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function bi(i){return i!==""}function so(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ao(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const zf=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ys(i){return i.replace(zf,Hf)}const Gf=new Map;function Hf(i,e){let t=De[e];if(t===void 0){const n=Gf.get(e);if(n!==void 0)t=De[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Ys(t)}const kf=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function oo(i){return i.replace(kf,Vf)}function Vf(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function lo(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function Wf(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Eo?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===pl?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===nn&&(e="SHADOWMAP_TYPE_VSM"),e}function Xf(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case di:case fi:e="ENVMAP_TYPE_CUBE";break;case yr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function qf(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case fi:e="ENVMAP_MODE_REFRACTION";break}return e}function Yf(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case To:e="ENVMAP_BLENDING_MULTIPLY";break;case Dl:e="ENVMAP_BLENDING_MIX";break;case Ll:e="ENVMAP_BLENDING_ADD";break}return e}function Kf(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function $f(i,e,t,n){const r=i.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=Wf(t),c=Xf(t),d=qf(t),p=Yf(t),f=Kf(t),h=Ff(t),g=Of(s),_=r.createProgram();let u,m,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(u=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(bi).join(`
`),u.length>0&&(u+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(bi).join(`
`),m.length>0&&(m+=`
`)):(u=[lo(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(bi).join(`
`),m=[lo(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",t.envMap?"#define "+p:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Mn?"#define TONE_MAPPING":"",t.toneMapping!==Mn?De.tonemapping_pars_fragment:"",t.toneMapping!==Mn?If("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",De.colorspace_pars_fragment,Uf("linearToOutputTexel",t.outputColorSpace),Nf(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(bi).join(`
`)),a=Ys(a),a=so(a,t),a=ao(a,t),o=Ys(o),o=so(o,t),o=ao(o,t),a=oo(a),o=oo(o),t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,u=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+u,m=["#define varying in",t.glslVersion===_r?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===_r?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const y=E+u+a,A=E+m+o,U=io(r,r.VERTEX_SHADER,y),w=io(r,r.FRAGMENT_SHADER,A);r.attachShader(_,U),r.attachShader(_,w),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function b(S){if(i.debug.checkShaderErrors){const k=r.getProgramInfoLog(_).trim(),B=r.getShaderInfoLog(U).trim(),V=r.getShaderInfoLog(w).trim();let $=!0,H=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if($=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,_,U,w);else{const Z=ro(r,U,"vertex"),G=ro(r,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+S.name+`
Material Type: `+S.type+`

Program Info Log: `+k+`
`+Z+`
`+G)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(B===""||V==="")&&(H=!1);H&&(S.diagnostics={runnable:$,programLog:k,vertexShader:{log:B,prefix:u},fragmentShader:{log:V,prefix:m}})}r.deleteShader(U),r.deleteShader(w),L=new pr(r,_),Y=Bf(r,_)}let L;this.getUniforms=function(){return L===void 0&&b(this),L};let Y;this.getAttributes=function(){return Y===void 0&&b(this),Y};let v=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=r.getProgramParameter(_,Cf)),v},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Pf++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=U,this.fragmentShader=w,this}let Zf=0;class jf{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Jf(e),t.set(e,n)),n}}class Jf{constructor(e){this.id=Zf++,this.code=e,this.usedTimes=0}}function Qf(i,e,t,n,r,s,a){const o=new ca,l=new jf,c=new Set,d=[],p=r.logarithmicDepthBuffer,f=r.reverseDepthBuffer,h=r.vertexTextures;let g=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function u(v){return c.add(v),v===0?"uv":`uv${v}`}function m(v,S,k,B,V){const $=B.fog,H=V.geometry,Z=v.isMeshStandardMaterial?B.environment:null,G=(v.isMeshStandardMaterial?t:e).get(v.envMap||Z),oe=G&&G.mapping===yr?G.image.height:null,le=_[v.type];v.precision!==null&&(g=r.getMaxPrecision(v.precision),g!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",g,"instead."));const ge=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Ge=ge!==void 0?ge.length:0;let Xe=0;H.morphAttributes.position!==void 0&&(Xe=1),H.morphAttributes.normal!==void 0&&(Xe=2),H.morphAttributes.color!==void 0&&(Xe=3);let W,J,pe,ce;if(le){const xt=Wt[le];W=xt.vertexShader,J=xt.fragmentShader}else W=v.vertexShader,J=v.fragmentShader,l.update(v),pe=l.getVertexShaderID(v),ce=l.getFragmentShaderID(v);const we=i.getRenderTarget(),Se=V.isInstancedMesh===!0,Ne=V.isBatchedMesh===!0,Ke=!!v.map,Fe=!!v.matcap,R=!!G,Et=!!v.aoMap,Ue=!!v.lightMap,Be=!!v.bumpMap,Ee=!!v.normalMap,Ze=!!v.displacementMap,be=!!v.emissiveMap,T=!!v.metalnessMap,x=!!v.roughnessMap,I=v.anisotropy>0,q=v.clearcoat>0,j=v.dispersion>0,X=v.iridescence>0,ve=v.sheen>0,ne=v.transmission>0,ue=I&&!!v.anisotropyMap,ze=q&&!!v.clearcoatMap,Q=q&&!!v.clearcoatNormalMap,he=q&&!!v.clearcoatRoughnessMap,Te=X&&!!v.iridescenceMap,Ae=X&&!!v.iridescenceThicknessMap,de=ve&&!!v.sheenColorMap,Ie=ve&&!!v.sheenRoughnessMap,Re=!!v.specularMap,$e=!!v.specularColorMap,C=!!v.specularIntensityMap,se=ne&&!!v.transmissionMap,z=ne&&!!v.thicknessMap,K=!!v.gradientMap,ie=!!v.alphaMap,ae=v.alphaTest>0,Oe=!!v.alphaHash,it=!!v.extensions;let _t=Mn;v.toneMapped&&(we===null||we.isXRRenderTarget===!0)&&(_t=i.toneMapping);const He={shaderID:le,shaderType:v.type,shaderName:v.name,vertexShader:W,fragmentShader:J,defines:v.defines,customVertexShaderID:pe,customFragmentShaderID:ce,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:g,batching:Ne,batchingColor:Ne&&V._colorsTexture!==null,instancing:Se,instancingColor:Se&&V.instanceColor!==null,instancingMorph:Se&&V.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:we===null?i.outputColorSpace:we.isXRRenderTarget===!0?we.texture.colorSpace:An,alphaToCoverage:!!v.alphaToCoverage,map:Ke,matcap:Fe,envMap:R,envMapMode:R&&G.mapping,envMapCubeUVHeight:oe,aoMap:Et,lightMap:Ue,bumpMap:Be,normalMap:Ee,displacementMap:h&&Ze,emissiveMap:be,normalMapObjectSpace:Ee&&v.normalMapType===Wl,normalMapTangentSpace:Ee&&v.normalMapType===Vl,metalnessMap:T,roughnessMap:x,anisotropy:I,anisotropyMap:ue,clearcoat:q,clearcoatMap:ze,clearcoatNormalMap:Q,clearcoatRoughnessMap:he,dispersion:j,iridescence:X,iridescenceMap:Te,iridescenceThicknessMap:Ae,sheen:ve,sheenColorMap:de,sheenRoughnessMap:Ie,specularMap:Re,specularColorMap:$e,specularIntensityMap:C,transmission:ne,transmissionMap:se,thicknessMap:z,gradientMap:K,opaque:v.transparent===!1&&v.blending===oi&&v.alphaToCoverage===!1,alphaMap:ie,alphaTest:ae,alphaHash:Oe,combine:v.combine,mapUv:Ke&&u(v.map.channel),aoMapUv:Et&&u(v.aoMap.channel),lightMapUv:Ue&&u(v.lightMap.channel),bumpMapUv:Be&&u(v.bumpMap.channel),normalMapUv:Ee&&u(v.normalMap.channel),displacementMapUv:Ze&&u(v.displacementMap.channel),emissiveMapUv:be&&u(v.emissiveMap.channel),metalnessMapUv:T&&u(v.metalnessMap.channel),roughnessMapUv:x&&u(v.roughnessMap.channel),anisotropyMapUv:ue&&u(v.anisotropyMap.channel),clearcoatMapUv:ze&&u(v.clearcoatMap.channel),clearcoatNormalMapUv:Q&&u(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:he&&u(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Te&&u(v.iridescenceMap.channel),iridescenceThicknessMapUv:Ae&&u(v.iridescenceThicknessMap.channel),sheenColorMapUv:de&&u(v.sheenColorMap.channel),sheenRoughnessMapUv:Ie&&u(v.sheenRoughnessMap.channel),specularMapUv:Re&&u(v.specularMap.channel),specularColorMapUv:$e&&u(v.specularColorMap.channel),specularIntensityMapUv:C&&u(v.specularIntensityMap.channel),transmissionMapUv:se&&u(v.transmissionMap.channel),thicknessMapUv:z&&u(v.thicknessMap.channel),alphaMapUv:ie&&u(v.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(Ee||I),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!H.attributes.uv&&(Ke||ie),fog:!!$,useFog:v.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:p,reverseDepthBuffer:f,skinning:V.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:Ge,morphTextureStride:Xe,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&k.length>0,shadowMapType:i.shadowMap.type,toneMapping:_t,decodeVideoTexture:Ke&&v.map.isVideoTexture===!0&&We.getTransfer(v.map.colorSpace)===Je,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Xt,flipSided:v.side===St,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:it&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(it&&v.extensions.multiDraw===!0||Ne)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return He.vertexUv1s=c.has(1),He.vertexUv2s=c.has(2),He.vertexUv3s=c.has(3),c.clear(),He}function E(v){const S=[];if(v.shaderID?S.push(v.shaderID):(S.push(v.customVertexShaderID),S.push(v.customFragmentShaderID)),v.defines!==void 0)for(const k in v.defines)S.push(k),S.push(v.defines[k]);return v.isRawShaderMaterial===!1&&(y(S,v),A(S,v),S.push(i.outputColorSpace)),S.push(v.customProgramCacheKey),S.join()}function y(v,S){v.push(S.precision),v.push(S.outputColorSpace),v.push(S.envMapMode),v.push(S.envMapCubeUVHeight),v.push(S.mapUv),v.push(S.alphaMapUv),v.push(S.lightMapUv),v.push(S.aoMapUv),v.push(S.bumpMapUv),v.push(S.normalMapUv),v.push(S.displacementMapUv),v.push(S.emissiveMapUv),v.push(S.metalnessMapUv),v.push(S.roughnessMapUv),v.push(S.anisotropyMapUv),v.push(S.clearcoatMapUv),v.push(S.clearcoatNormalMapUv),v.push(S.clearcoatRoughnessMapUv),v.push(S.iridescenceMapUv),v.push(S.iridescenceThicknessMapUv),v.push(S.sheenColorMapUv),v.push(S.sheenRoughnessMapUv),v.push(S.specularMapUv),v.push(S.specularColorMapUv),v.push(S.specularIntensityMapUv),v.push(S.transmissionMapUv),v.push(S.thicknessMapUv),v.push(S.combine),v.push(S.fogExp2),v.push(S.sizeAttenuation),v.push(S.morphTargetsCount),v.push(S.morphAttributeCount),v.push(S.numDirLights),v.push(S.numPointLights),v.push(S.numSpotLights),v.push(S.numSpotLightMaps),v.push(S.numHemiLights),v.push(S.numRectAreaLights),v.push(S.numDirLightShadows),v.push(S.numPointLightShadows),v.push(S.numSpotLightShadows),v.push(S.numSpotLightShadowsWithMaps),v.push(S.numLightProbes),v.push(S.shadowMapType),v.push(S.toneMapping),v.push(S.numClippingPlanes),v.push(S.numClipIntersection),v.push(S.depthPacking)}function A(v,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),v.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reverseDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.alphaToCoverage&&o.enable(20),v.push(o.mask)}function U(v){const S=_[v.type];let k;if(S){const B=Wt[S];k=Nc.clone(B.uniforms)}else k=v.uniforms;return k}function w(v,S){let k;for(let B=0,V=d.length;B<V;B++){const $=d[B];if($.cacheKey===S){k=$,++k.usedTimes;break}}return k===void 0&&(k=new $f(i,S,v,s),d.push(k)),k}function b(v){if(--v.usedTimes===0){const S=d.indexOf(v);d[S]=d[d.length-1],d.pop(),v.destroy()}}function L(v){l.remove(v)}function Y(){l.dispose()}return{getParameters:m,getProgramCacheKey:E,getUniforms:U,acquireProgram:w,releaseProgram:b,releaseShaderCache:L,programs:d,dispose:Y}}function ep(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function r(a,o,l){i.get(a)[o]=l}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function tp(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function co(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function uo(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function a(p,f,h,g,_,u){let m=i[e];return m===void 0?(m={id:p.id,object:p,geometry:f,material:h,groupOrder:g,renderOrder:p.renderOrder,z:_,group:u},i[e]=m):(m.id=p.id,m.object=p,m.geometry=f,m.material=h,m.groupOrder=g,m.renderOrder=p.renderOrder,m.z=_,m.group=u),e++,m}function o(p,f,h,g,_,u){const m=a(p,f,h,g,_,u);h.transmission>0?n.push(m):h.transparent===!0?r.push(m):t.push(m)}function l(p,f,h,g,_,u){const m=a(p,f,h,g,_,u);h.transmission>0?n.unshift(m):h.transparent===!0?r.unshift(m):t.unshift(m)}function c(p,f){t.length>1&&t.sort(p||tp),n.length>1&&n.sort(f||co),r.length>1&&r.sort(f||co)}function d(){for(let p=e,f=i.length;p<f;p++){const h=i[p];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:o,unshift:l,finish:d,sort:c}}function np(){let i=new WeakMap;function e(n,r){const s=i.get(n);let a;return s===void 0?(a=new uo,i.set(n,[a])):r>=s.length?(a=new uo,s.push(a)):a=s[r],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function ip(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new N,color:new Ye};break;case"SpotLight":t={position:new N,direction:new N,color:new Ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new Ye,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new Ye,groundColor:new Ye};break;case"RectAreaLight":t={color:new Ye,position:new N,halfWidth:new N,halfHeight:new N};break}return i[e.id]=t,t}}}function rp(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let sp=0;function ap(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function op(i){const e=new ip,t=rp(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new N);const r=new N,s=new tt,a=new tt;function o(c){let d=0,p=0,f=0;for(let Y=0;Y<9;Y++)n.probe[Y].set(0,0,0);let h=0,g=0,_=0,u=0,m=0,E=0,y=0,A=0,U=0,w=0,b=0;c.sort(ap);for(let Y=0,v=c.length;Y<v;Y++){const S=c[Y],k=S.color,B=S.intensity,V=S.distance,$=S.shadow&&S.shadow.map?S.shadow.map.texture:null;if(S.isAmbientLight)d+=k.r*B,p+=k.g*B,f+=k.b*B;else if(S.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(S.sh.coefficients[H],B);b++}else if(S.isDirectionalLight){const H=e.get(S);if(H.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){const Z=S.shadow,G=t.get(S);G.shadowIntensity=Z.intensity,G.shadowBias=Z.bias,G.shadowNormalBias=Z.normalBias,G.shadowRadius=Z.radius,G.shadowMapSize=Z.mapSize,n.directionalShadow[h]=G,n.directionalShadowMap[h]=$,n.directionalShadowMatrix[h]=S.shadow.matrix,E++}n.directional[h]=H,h++}else if(S.isSpotLight){const H=e.get(S);H.position.setFromMatrixPosition(S.matrixWorld),H.color.copy(k).multiplyScalar(B),H.distance=V,H.coneCos=Math.cos(S.angle),H.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),H.decay=S.decay,n.spot[_]=H;const Z=S.shadow;if(S.map&&(n.spotLightMap[U]=S.map,U++,Z.updateMatrices(S),S.castShadow&&w++),n.spotLightMatrix[_]=Z.matrix,S.castShadow){const G=t.get(S);G.shadowIntensity=Z.intensity,G.shadowBias=Z.bias,G.shadowNormalBias=Z.normalBias,G.shadowRadius=Z.radius,G.shadowMapSize=Z.mapSize,n.spotShadow[_]=G,n.spotShadowMap[_]=$,A++}_++}else if(S.isRectAreaLight){const H=e.get(S);H.color.copy(k).multiplyScalar(B),H.halfWidth.set(S.width*.5,0,0),H.halfHeight.set(0,S.height*.5,0),n.rectArea[u]=H,u++}else if(S.isPointLight){const H=e.get(S);if(H.color.copy(S.color).multiplyScalar(S.intensity),H.distance=S.distance,H.decay=S.decay,S.castShadow){const Z=S.shadow,G=t.get(S);G.shadowIntensity=Z.intensity,G.shadowBias=Z.bias,G.shadowNormalBias=Z.normalBias,G.shadowRadius=Z.radius,G.shadowMapSize=Z.mapSize,G.shadowCameraNear=Z.camera.near,G.shadowCameraFar=Z.camera.far,n.pointShadow[g]=G,n.pointShadowMap[g]=$,n.pointShadowMatrix[g]=S.shadow.matrix,y++}n.point[g]=H,g++}else if(S.isHemisphereLight){const H=e.get(S);H.skyColor.copy(S.color).multiplyScalar(B),H.groundColor.copy(S.groundColor).multiplyScalar(B),n.hemi[m]=H,m++}}u>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=te.LTC_FLOAT_1,n.rectAreaLTC2=te.LTC_FLOAT_2):(n.rectAreaLTC1=te.LTC_HALF_1,n.rectAreaLTC2=te.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=p,n.ambient[2]=f;const L=n.hash;(L.directionalLength!==h||L.pointLength!==g||L.spotLength!==_||L.rectAreaLength!==u||L.hemiLength!==m||L.numDirectionalShadows!==E||L.numPointShadows!==y||L.numSpotShadows!==A||L.numSpotMaps!==U||L.numLightProbes!==b)&&(n.directional.length=h,n.spot.length=_,n.rectArea.length=u,n.point.length=g,n.hemi.length=m,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=A,n.spotShadowMap.length=A,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=A+U-w,n.spotLightMap.length=U,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=b,L.directionalLength=h,L.pointLength=g,L.spotLength=_,L.rectAreaLength=u,L.hemiLength=m,L.numDirectionalShadows=E,L.numPointShadows=y,L.numSpotShadows=A,L.numSpotMaps=U,L.numLightProbes=b,n.version=sp++)}function l(c,d){let p=0,f=0,h=0,g=0,_=0;const u=d.matrixWorldInverse;for(let m=0,E=c.length;m<E;m++){const y=c[m];if(y.isDirectionalLight){const A=n.directional[p];A.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),A.direction.sub(r),A.direction.transformDirection(u),p++}else if(y.isSpotLight){const A=n.spot[h];A.position.setFromMatrixPosition(y.matrixWorld),A.position.applyMatrix4(u),A.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),A.direction.sub(r),A.direction.transformDirection(u),h++}else if(y.isRectAreaLight){const A=n.rectArea[g];A.position.setFromMatrixPosition(y.matrixWorld),A.position.applyMatrix4(u),a.identity(),s.copy(y.matrixWorld),s.premultiply(u),a.extractRotation(s),A.halfWidth.set(y.width*.5,0,0),A.halfHeight.set(0,y.height*.5,0),A.halfWidth.applyMatrix4(a),A.halfHeight.applyMatrix4(a),g++}else if(y.isPointLight){const A=n.point[f];A.position.setFromMatrixPosition(y.matrixWorld),A.position.applyMatrix4(u),f++}else if(y.isHemisphereLight){const A=n.hemi[_];A.direction.setFromMatrixPosition(y.matrixWorld),A.direction.transformDirection(u),_++}}}return{setup:o,setupView:l,state:n}}function ho(i){const e=new op(i),t=[],n=[];function r(d){c.camera=d,t.length=0,n.length=0}function s(d){t.push(d)}function a(d){n.push(d)}function o(){e.setup(t)}function l(d){e.setupView(t,d)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function lp(i){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new ho(i),e.set(r,[o])):s>=a.length?(o=new ho(i),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}class cp extends Ui{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Hl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class up extends Ui{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const hp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,dp=`uniform sampler2D shadow_pass;
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
}`;function fp(i,e,t){let n=new Yo;const r=new Le,s=new Le,a=new Pe,o=new cp({depthPacking:kl}),l=new up,c={},d=t.maxTextureSize,p={[Tn]:St,[St]:Tn,[Xt]:Xt},f=new Rt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Le},radius:{value:4}},vertexShader:hp,fragmentShader:dp}),h=f.clone();h.defines.HORIZONTAL_PASS=1;const g=new Kt;g.setAttribute("position",new st(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Ut(g,f),u=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Eo;let m=this.type;this.render=function(w,b,L){if(u.enabled===!1||u.autoUpdate===!1&&u.needsUpdate===!1||w.length===0)return;const Y=i.getRenderTarget(),v=i.getActiveCubeFace(),S=i.getActiveMipmapLevel(),k=i.state;k.setBlending(xn),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const B=m!==nn&&this.type===nn,V=m===nn&&this.type!==nn;for(let $=0,H=w.length;$<H;$++){const Z=w[$],G=Z.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;r.copy(G.mapSize);const oe=G.getFrameExtents();if(r.multiply(oe),s.copy(G.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/oe.x),r.x=s.x*oe.x,G.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/oe.y),r.y=s.y*oe.y,G.mapSize.y=s.y)),G.map===null||B===!0||V===!0){const ge=this.type!==nn?{minFilter:ft,magFilter:ft}:{};G.map!==null&&G.map.dispose(),G.map=new at(r.x,r.y,ge),G.map.texture.name=Z.name+".shadowMap",G.camera.updateProjectionMatrix()}i.setRenderTarget(G.map),i.clear();const le=G.getViewportCount();for(let ge=0;ge<le;ge++){const Ge=G.getViewport(ge);a.set(s.x*Ge.x,s.y*Ge.y,s.x*Ge.z,s.y*Ge.w),k.viewport(a),G.updateMatrices(Z,ge),n=G.getFrustum(),A(b,L,G.camera,Z,this.type)}G.isPointLightShadow!==!0&&this.type===nn&&E(G,L),G.needsUpdate=!1}m=this.type,u.needsUpdate=!1,i.setRenderTarget(Y,v,S)};function E(w,b){const L=e.update(_);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,h.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,h.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new at(r.x,r.y)),f.uniforms.shadow_pass.value=w.map.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(b,null,L,f,_,null),h.uniforms.shadow_pass.value=w.mapPass.texture,h.uniforms.resolution.value=w.mapSize,h.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(b,null,L,h,_,null)}function y(w,b,L,Y){let v=null;const S=L.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(S!==void 0)v=S;else if(v=L.isPointLight===!0?l:o,i.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const k=v.uuid,B=b.uuid;let V=c[k];V===void 0&&(V={},c[k]=V);let $=V[B];$===void 0&&($=v.clone(),V[B]=$,b.addEventListener("dispose",U)),v=$}if(v.visible=b.visible,v.wireframe=b.wireframe,Y===nn?v.side=b.shadowSide!==null?b.shadowSide:b.side:v.side=b.shadowSide!==null?b.shadowSide:p[b.side],v.alphaMap=b.alphaMap,v.alphaTest=b.alphaTest,v.map=b.map,v.clipShadows=b.clipShadows,v.clippingPlanes=b.clippingPlanes,v.clipIntersection=b.clipIntersection,v.displacementMap=b.displacementMap,v.displacementScale=b.displacementScale,v.displacementBias=b.displacementBias,v.wireframeLinewidth=b.wireframeLinewidth,v.linewidth=b.linewidth,L.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const k=i.properties.get(v);k.light=L}return v}function A(w,b,L,Y,v){if(w.visible===!1)return;if(w.layers.test(b.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&v===nn)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,w.matrixWorld);const B=e.update(w),V=w.material;if(Array.isArray(V)){const $=B.groups;for(let H=0,Z=$.length;H<Z;H++){const G=$[H],oe=V[G.materialIndex];if(oe&&oe.visible){const le=y(w,oe,Y,v);w.onBeforeShadow(i,w,b,L,B,le,G),i.renderBufferDirect(L,null,B,le,w,G),w.onAfterShadow(i,w,b,L,B,le,G)}}}else if(V.visible){const $=y(w,V,Y,v);w.onBeforeShadow(i,w,b,L,B,$,null),i.renderBufferDirect(L,null,B,$,w,null),w.onAfterShadow(i,w,b,L,B,$,null)}}const k=w.children;for(let B=0,V=k.length;B<V;B++)A(k[B],b,L,Y,v)}function U(w){w.target.removeEventListener("dispose",U);for(const L in c){const Y=c[L],v=w.target.uuid;v in Y&&(Y[v].dispose(),delete Y[v])}}}const pp={[us]:hs,[ds]:ms,[fs]:gs,[hi]:ps,[hs]:us,[ms]:ds,[gs]:fs,[ps]:hi};function mp(i){function e(){let C=!1;const se=new Pe;let z=null;const K=new Pe(0,0,0,0);return{setMask:function(ie){z!==ie&&!C&&(i.colorMask(ie,ie,ie,ie),z=ie)},setLocked:function(ie){C=ie},setClear:function(ie,ae,Oe,it,_t){_t===!0&&(ie*=it,ae*=it,Oe*=it),se.set(ie,ae,Oe,it),K.equals(se)===!1&&(i.clearColor(ie,ae,Oe,it),K.copy(se))},reset:function(){C=!1,z=null,K.set(-1,0,0,0)}}}function t(){let C=!1,se=!1,z=null,K=null,ie=null;return{setReversed:function(ae){se=ae},setTest:function(ae){ae?pe(i.DEPTH_TEST):ce(i.DEPTH_TEST)},setMask:function(ae){z!==ae&&!C&&(i.depthMask(ae),z=ae)},setFunc:function(ae){if(se&&(ae=pp[ae]),K!==ae){switch(ae){case us:i.depthFunc(i.NEVER);break;case hs:i.depthFunc(i.ALWAYS);break;case ds:i.depthFunc(i.LESS);break;case hi:i.depthFunc(i.LEQUAL);break;case fs:i.depthFunc(i.EQUAL);break;case ps:i.depthFunc(i.GEQUAL);break;case ms:i.depthFunc(i.GREATER);break;case gs:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}K=ae}},setLocked:function(ae){C=ae},setClear:function(ae){ie!==ae&&(i.clearDepth(ae),ie=ae)},reset:function(){C=!1,z=null,K=null,ie=null}}}function n(){let C=!1,se=null,z=null,K=null,ie=null,ae=null,Oe=null,it=null,_t=null;return{setTest:function(He){C||(He?pe(i.STENCIL_TEST):ce(i.STENCIL_TEST))},setMask:function(He){se!==He&&!C&&(i.stencilMask(He),se=He)},setFunc:function(He,xt,$t){(z!==He||K!==xt||ie!==$t)&&(i.stencilFunc(He,xt,$t),z=He,K=xt,ie=$t)},setOp:function(He,xt,$t){(ae!==He||Oe!==xt||it!==$t)&&(i.stencilOp(He,xt,$t),ae=He,Oe=xt,it=$t)},setLocked:function(He){C=He},setClear:function(He){_t!==He&&(i.clearStencil(He),_t=He)},reset:function(){C=!1,se=null,z=null,K=null,ie=null,ae=null,Oe=null,it=null,_t=null}}}const r=new e,s=new t,a=new n,o=new WeakMap,l=new WeakMap;let c={},d={},p=new WeakMap,f=[],h=null,g=!1,_=null,u=null,m=null,E=null,y=null,A=null,U=null,w=new Ye(0,0,0),b=0,L=!1,Y=null,v=null,S=null,k=null,B=null;const V=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,H=0;const Z=i.getParameter(i.VERSION);Z.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(Z)[1]),$=H>=1):Z.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),$=H>=2);let G=null,oe={};const le=i.getParameter(i.SCISSOR_BOX),ge=i.getParameter(i.VIEWPORT),Ge=new Pe().fromArray(le),Xe=new Pe().fromArray(ge);function W(C,se,z,K){const ie=new Uint8Array(4),ae=i.createTexture();i.bindTexture(C,ae),i.texParameteri(C,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(C,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Oe=0;Oe<z;Oe++)C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY?i.texImage3D(se,0,i.RGBA,1,1,K,0,i.RGBA,i.UNSIGNED_BYTE,ie):i.texImage2D(se+Oe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ie);return ae}const J={};J[i.TEXTURE_2D]=W(i.TEXTURE_2D,i.TEXTURE_2D,1),J[i.TEXTURE_CUBE_MAP]=W(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[i.TEXTURE_2D_ARRAY]=W(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),J[i.TEXTURE_3D]=W(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),a.setClear(0),pe(i.DEPTH_TEST),s.setFunc(hi),Ue(!1),Be(xa),pe(i.CULL_FACE),R(xn);function pe(C){c[C]!==!0&&(i.enable(C),c[C]=!0)}function ce(C){c[C]!==!1&&(i.disable(C),c[C]=!1)}function we(C,se){return d[C]!==se?(i.bindFramebuffer(C,se),d[C]=se,C===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=se),C===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=se),!0):!1}function Se(C,se){let z=f,K=!1;if(C){z=p.get(se),z===void 0&&(z=[],p.set(se,z));const ie=C.textures;if(z.length!==ie.length||z[0]!==i.COLOR_ATTACHMENT0){for(let ae=0,Oe=ie.length;ae<Oe;ae++)z[ae]=i.COLOR_ATTACHMENT0+ae;z.length=ie.length,K=!0}}else z[0]!==i.BACK&&(z[0]=i.BACK,K=!0);K&&i.drawBuffers(z)}function Ne(C){return h!==C?(i.useProgram(C),h=C,!0):!1}const Ke={[sn]:i.FUNC_ADD,[ml]:i.FUNC_SUBTRACT,[gl]:i.FUNC_REVERSE_SUBTRACT};Ke[vl]=i.MIN,Ke[_l]=i.MAX;const Fe={[xl]:i.ZERO,[on]:i.ONE,[Ml]:i.SRC_COLOR,[ls]:i.SRC_ALPHA,[bl]:i.SRC_ALPHA_SATURATE,[Tl]:i.DST_COLOR,[yl]:i.DST_ALPHA,[Sl]:i.ONE_MINUS_SRC_COLOR,[cs]:i.ONE_MINUS_SRC_ALPHA,[Al]:i.ONE_MINUS_DST_COLOR,[El]:i.ONE_MINUS_DST_ALPHA,[wl]:i.CONSTANT_COLOR,[Rl]:i.ONE_MINUS_CONSTANT_COLOR,[Cl]:i.CONSTANT_ALPHA,[Pl]:i.ONE_MINUS_CONSTANT_ALPHA};function R(C,se,z,K,ie,ae,Oe,it,_t,He){if(C===xn){g===!0&&(ce(i.BLEND),g=!1);return}if(g===!1&&(pe(i.BLEND),g=!0),C!==Qs){if(C!==_||He!==L){if((u!==sn||y!==sn)&&(i.blendEquation(i.FUNC_ADD),u=sn,y=sn),He)switch(C){case oi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ma:i.blendFunc(i.ONE,i.ONE);break;case Sa:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ya:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}else switch(C){case oi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ma:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Sa:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ya:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}m=null,E=null,A=null,U=null,w.set(0,0,0),b=0,_=C,L=He}return}ie=ie||se,ae=ae||z,Oe=Oe||K,(se!==u||ie!==y)&&(i.blendEquationSeparate(Ke[se],Ke[ie]),u=se,y=ie),(z!==m||K!==E||ae!==A||Oe!==U)&&(i.blendFuncSeparate(Fe[z],Fe[K],Fe[ae],Fe[Oe]),m=z,E=K,A=ae,U=Oe),(it.equals(w)===!1||_t!==b)&&(i.blendColor(it.r,it.g,it.b,_t),w.copy(it),b=_t),_=C,L=!1}function Et(C,se){C.side===Xt?ce(i.CULL_FACE):pe(i.CULL_FACE);let z=C.side===St;se&&(z=!z),Ue(z),C.blending===oi&&C.transparent===!1?R(xn):R(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),s.setFunc(C.depthFunc),s.setTest(C.depthTest),s.setMask(C.depthWrite),r.setMask(C.colorWrite);const K=C.stencilWrite;a.setTest(K),K&&(a.setMask(C.stencilWriteMask),a.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),a.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),Ze(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?pe(i.SAMPLE_ALPHA_TO_COVERAGE):ce(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ue(C){Y!==C&&(C?i.frontFace(i.CW):i.frontFace(i.CCW),Y=C)}function Be(C){C!==dl?(pe(i.CULL_FACE),C!==v&&(C===xa?i.cullFace(i.BACK):C===fl?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ce(i.CULL_FACE),v=C}function Ee(C){C!==S&&($&&i.lineWidth(C),S=C)}function Ze(C,se,z){C?(pe(i.POLYGON_OFFSET_FILL),(k!==se||B!==z)&&(i.polygonOffset(se,z),k=se,B=z)):ce(i.POLYGON_OFFSET_FILL)}function be(C){C?pe(i.SCISSOR_TEST):ce(i.SCISSOR_TEST)}function T(C){C===void 0&&(C=i.TEXTURE0+V-1),G!==C&&(i.activeTexture(C),G=C)}function x(C,se,z){z===void 0&&(G===null?z=i.TEXTURE0+V-1:z=G);let K=oe[z];K===void 0&&(K={type:void 0,texture:void 0},oe[z]=K),(K.type!==C||K.texture!==se)&&(G!==z&&(i.activeTexture(z),G=z),i.bindTexture(C,se||J[C]),K.type=C,K.texture=se)}function I(){const C=oe[G];C!==void 0&&C.type!==void 0&&(i.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function q(){try{i.compressedTexImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function j(){try{i.compressedTexImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function X(){try{i.texSubImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ve(){try{i.texSubImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ne(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ue(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ze(){try{i.texStorage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Q(){try{i.texStorage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function he(){try{i.texImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Te(){try{i.texImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Ae(C){Ge.equals(C)===!1&&(i.scissor(C.x,C.y,C.z,C.w),Ge.copy(C))}function de(C){Xe.equals(C)===!1&&(i.viewport(C.x,C.y,C.z,C.w),Xe.copy(C))}function Ie(C,se){let z=l.get(se);z===void 0&&(z=new WeakMap,l.set(se,z));let K=z.get(C);K===void 0&&(K=i.getUniformBlockIndex(se,C.name),z.set(C,K))}function Re(C,se){const K=l.get(se).get(C);o.get(se)!==K&&(i.uniformBlockBinding(se,K,C.__bindingPointIndex),o.set(se,K))}function $e(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),c={},G=null,oe={},d={},p=new WeakMap,f=[],h=null,g=!1,_=null,u=null,m=null,E=null,y=null,A=null,U=null,w=new Ye(0,0,0),b=0,L=!1,Y=null,v=null,S=null,k=null,B=null,Ge.set(0,0,i.canvas.width,i.canvas.height),Xe.set(0,0,i.canvas.width,i.canvas.height),r.reset(),s.reset(),a.reset()}return{buffers:{color:r,depth:s,stencil:a},enable:pe,disable:ce,bindFramebuffer:we,drawBuffers:Se,useProgram:Ne,setBlending:R,setMaterial:Et,setFlipSided:Ue,setCullFace:Be,setLineWidth:Ee,setPolygonOffset:Ze,setScissorTest:be,activeTexture:T,bindTexture:x,unbindTexture:I,compressedTexImage2D:q,compressedTexImage3D:j,texImage2D:he,texImage3D:Te,updateUBOMapping:Ie,uniformBlockBinding:Re,texStorage2D:ze,texStorage3D:Q,texSubImage2D:X,texSubImage3D:ve,compressedTexSubImage2D:ne,compressedTexSubImage3D:ue,scissor:Ae,viewport:de,reset:$e}}function fo(i,e,t,n){const r=gp(n);switch(t){case Co:return i*e;case Do:return i*e;case Lo:return i*e*2;case Uo:return i*e/r.components*r.byteLength;case ia:return i*e/r.components*r.byteLength;case Io:return i*e*2/r.components*r.byteLength;case ra:return i*e*2/r.components*r.byteLength;case Po:return i*e*3/r.components*r.byteLength;case Lt:return i*e*4/r.components*r.byteLength;case sa:return i*e*4/r.components*r.byteLength;case lr:case cr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ur:case hr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ys:case Ts:return Math.max(i,16)*Math.max(e,8)/4;case Ss:case Es:return Math.max(i,8)*Math.max(e,8)/2;case As:case bs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ws:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Rs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Cs:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Ps:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Ds:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Ls:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Us:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Is:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Ns:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Fs:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Os:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Bs:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case zs:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Gs:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Hs:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case dr:case ks:case Vs:return Math.ceil(i/4)*Math.ceil(e/4)*16;case No:case Ws:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Xs:case qs:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function gp(i){switch(i){case kt:case bo:return{byteLength:1,components:1};case Ci:case wo:case Hn:return{byteLength:2,components:1};case ta:case na:return{byteLength:2,components:4};case zn:case ea:case qt:return{byteLength:4,components:1};case Ro:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function vp(i,e,t,n,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Le,d=new WeakMap;let p;const f=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,x){return h?new OffscreenCanvas(T,x):Mr("canvas")}function _(T,x,I){let q=1;const j=be(T);if((j.width>I||j.height>I)&&(q=I/Math.max(j.width,j.height)),q<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const X=Math.floor(q*j.width),ve=Math.floor(q*j.height);p===void 0&&(p=g(X,ve));const ne=x?g(X,ve):p;return ne.width=X,ne.height=ve,ne.getContext("2d").drawImage(T,0,0,X,ve),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+X+"x"+ve+")."),ne}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),T;return T}function u(T){return T.generateMipmaps&&T.minFilter!==ft&&T.minFilter!==Qe}function m(T){i.generateMipmap(T)}function E(T,x,I,q,j=!1){if(T!==null){if(i[T]!==void 0)return i[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let X=x;if(x===i.RED&&(I===i.FLOAT&&(X=i.R32F),I===i.HALF_FLOAT&&(X=i.R16F),I===i.UNSIGNED_BYTE&&(X=i.R8)),x===i.RED_INTEGER&&(I===i.UNSIGNED_BYTE&&(X=i.R8UI),I===i.UNSIGNED_SHORT&&(X=i.R16UI),I===i.UNSIGNED_INT&&(X=i.R32UI),I===i.BYTE&&(X=i.R8I),I===i.SHORT&&(X=i.R16I),I===i.INT&&(X=i.R32I)),x===i.RG&&(I===i.FLOAT&&(X=i.RG32F),I===i.HALF_FLOAT&&(X=i.RG16F),I===i.UNSIGNED_BYTE&&(X=i.RG8)),x===i.RG_INTEGER&&(I===i.UNSIGNED_BYTE&&(X=i.RG8UI),I===i.UNSIGNED_SHORT&&(X=i.RG16UI),I===i.UNSIGNED_INT&&(X=i.RG32UI),I===i.BYTE&&(X=i.RG8I),I===i.SHORT&&(X=i.RG16I),I===i.INT&&(X=i.RG32I)),x===i.RGB_INTEGER&&(I===i.UNSIGNED_BYTE&&(X=i.RGB8UI),I===i.UNSIGNED_SHORT&&(X=i.RGB16UI),I===i.UNSIGNED_INT&&(X=i.RGB32UI),I===i.BYTE&&(X=i.RGB8I),I===i.SHORT&&(X=i.RGB16I),I===i.INT&&(X=i.RGB32I)),x===i.RGBA_INTEGER&&(I===i.UNSIGNED_BYTE&&(X=i.RGBA8UI),I===i.UNSIGNED_SHORT&&(X=i.RGBA16UI),I===i.UNSIGNED_INT&&(X=i.RGBA32UI),I===i.BYTE&&(X=i.RGBA8I),I===i.SHORT&&(X=i.RGBA16I),I===i.INT&&(X=i.RGBA32I)),x===i.RGB&&I===i.UNSIGNED_INT_5_9_9_9_REV&&(X=i.RGB9_E5),x===i.RGBA){const ve=j?mr:We.getTransfer(q);I===i.FLOAT&&(X=i.RGBA32F),I===i.HALF_FLOAT&&(X=i.RGBA16F),I===i.UNSIGNED_BYTE&&(X=ve===Je?i.SRGB8_ALPHA8:i.RGBA8),I===i.UNSIGNED_SHORT_4_4_4_4&&(X=i.RGBA4),I===i.UNSIGNED_SHORT_5_5_5_1&&(X=i.RGB5_A1)}return(X===i.R16F||X===i.R32F||X===i.RG16F||X===i.RG32F||X===i.RGBA16F||X===i.RGBA32F)&&e.get("EXT_color_buffer_float"),X}function y(T,x){let I;return T?x===null||x===zn||x===pi?I=i.DEPTH24_STENCIL8:x===qt?I=i.DEPTH32F_STENCIL8:x===Ci&&(I=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===zn||x===pi?I=i.DEPTH_COMPONENT24:x===qt?I=i.DEPTH_COMPONENT32F:x===Ci&&(I=i.DEPTH_COMPONENT16),I}function A(T,x){return u(T)===!0||T.isFramebufferTexture&&T.minFilter!==ft&&T.minFilter!==Qe?Math.log2(Math.max(x.width,x.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?x.mipmaps.length:1}function U(T){const x=T.target;x.removeEventListener("dispose",U),b(x),x.isVideoTexture&&d.delete(x)}function w(T){const x=T.target;x.removeEventListener("dispose",w),Y(x)}function b(T){const x=n.get(T);if(x.__webglInit===void 0)return;const I=T.source,q=f.get(I);if(q){const j=q[x.__cacheKey];j.usedTimes--,j.usedTimes===0&&L(T),Object.keys(q).length===0&&f.delete(I)}n.remove(T)}function L(T){const x=n.get(T);i.deleteTexture(x.__webglTexture);const I=T.source,q=f.get(I);delete q[x.__cacheKey],a.memory.textures--}function Y(T){const x=n.get(T);if(T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(x.__webglFramebuffer[q]))for(let j=0;j<x.__webglFramebuffer[q].length;j++)i.deleteFramebuffer(x.__webglFramebuffer[q][j]);else i.deleteFramebuffer(x.__webglFramebuffer[q]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[q])}else{if(Array.isArray(x.__webglFramebuffer))for(let q=0;q<x.__webglFramebuffer.length;q++)i.deleteFramebuffer(x.__webglFramebuffer[q]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let q=0;q<x.__webglColorRenderbuffer.length;q++)x.__webglColorRenderbuffer[q]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[q]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const I=T.textures;for(let q=0,j=I.length;q<j;q++){const X=n.get(I[q]);X.__webglTexture&&(i.deleteTexture(X.__webglTexture),a.memory.textures--),n.remove(I[q])}n.remove(T)}let v=0;function S(){v=0}function k(){const T=v;return T>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+r.maxTextures),v+=1,T}function B(T){const x=[];return x.push(T.wrapS),x.push(T.wrapT),x.push(T.wrapR||0),x.push(T.magFilter),x.push(T.minFilter),x.push(T.anisotropy),x.push(T.internalFormat),x.push(T.format),x.push(T.type),x.push(T.generateMipmaps),x.push(T.premultiplyAlpha),x.push(T.flipY),x.push(T.unpackAlignment),x.push(T.colorSpace),x.join()}function V(T,x){const I=n.get(T);if(T.isVideoTexture&&Ee(T),T.isRenderTargetTexture===!1&&T.version>0&&I.__version!==T.version){const q=T.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Xe(I,T,x);return}}t.bindTexture(i.TEXTURE_2D,I.__webglTexture,i.TEXTURE0+x)}function $(T,x){const I=n.get(T);if(T.version>0&&I.__version!==T.version){Xe(I,T,x);return}t.bindTexture(i.TEXTURE_2D_ARRAY,I.__webglTexture,i.TEXTURE0+x)}function H(T,x){const I=n.get(T);if(T.version>0&&I.__version!==T.version){Xe(I,T,x);return}t.bindTexture(i.TEXTURE_3D,I.__webglTexture,i.TEXTURE0+x)}function Z(T,x){const I=n.get(T);if(T.version>0&&I.__version!==T.version){W(I,T,x);return}t.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+x)}const G={[xs]:i.REPEAT,[Fn]:i.CLAMP_TO_EDGE,[Ms]:i.MIRRORED_REPEAT},oe={[ft]:i.NEAREST,[Gl]:i.NEAREST_MIPMAP_NEAREST,[Bi]:i.NEAREST_MIPMAP_LINEAR,[Qe]:i.LINEAR,[Dr]:i.LINEAR_MIPMAP_NEAREST,[On]:i.LINEAR_MIPMAP_LINEAR},le={[Xl]:i.NEVER,[jl]:i.ALWAYS,[ql]:i.LESS,[Fo]:i.LEQUAL,[Yl]:i.EQUAL,[Zl]:i.GEQUAL,[Kl]:i.GREATER,[$l]:i.NOTEQUAL};function ge(T,x){if(x.type===qt&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===Qe||x.magFilter===Dr||x.magFilter===Bi||x.magFilter===On||x.minFilter===Qe||x.minFilter===Dr||x.minFilter===Bi||x.minFilter===On)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,G[x.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,G[x.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,G[x.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,oe[x.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,oe[x.minFilter]),x.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,le[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===ft||x.minFilter!==Bi&&x.minFilter!==On||x.type===qt&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const I=e.get("EXT_texture_filter_anisotropic");i.texParameterf(T,I.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function Ge(T,x){let I=!1;T.__webglInit===void 0&&(T.__webglInit=!0,x.addEventListener("dispose",U));const q=x.source;let j=f.get(q);j===void 0&&(j={},f.set(q,j));const X=B(x);if(X!==T.__cacheKey){j[X]===void 0&&(j[X]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,I=!0),j[X].usedTimes++;const ve=j[T.__cacheKey];ve!==void 0&&(j[T.__cacheKey].usedTimes--,ve.usedTimes===0&&L(x)),T.__cacheKey=X,T.__webglTexture=j[X].texture}return I}function Xe(T,x,I){let q=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(q=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(q=i.TEXTURE_3D);const j=Ge(T,x),X=x.source;t.bindTexture(q,T.__webglTexture,i.TEXTURE0+I);const ve=n.get(X);if(X.version!==ve.__version||j===!0){t.activeTexture(i.TEXTURE0+I);const ne=We.getPrimaries(We.workingColorSpace),ue=x.colorSpace===_n?null:We.getPrimaries(x.colorSpace),ze=x.colorSpace===_n||ne===ue?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ze);let Q=_(x.image,!1,r.maxTextureSize);Q=Ze(x,Q);const he=s.convert(x.format,x.colorSpace),Te=s.convert(x.type);let Ae=E(x.internalFormat,he,Te,x.colorSpace,x.isVideoTexture);ge(q,x);let de;const Ie=x.mipmaps,Re=x.isVideoTexture!==!0,$e=ve.__version===void 0||j===!0,C=X.dataReady,se=A(x,Q);if(x.isDepthTexture)Ae=y(x.format===mi,x.type),$e&&(Re?t.texStorage2D(i.TEXTURE_2D,1,Ae,Q.width,Q.height):t.texImage2D(i.TEXTURE_2D,0,Ae,Q.width,Q.height,0,he,Te,null));else if(x.isDataTexture)if(Ie.length>0){Re&&$e&&t.texStorage2D(i.TEXTURE_2D,se,Ae,Ie[0].width,Ie[0].height);for(let z=0,K=Ie.length;z<K;z++)de=Ie[z],Re?C&&t.texSubImage2D(i.TEXTURE_2D,z,0,0,de.width,de.height,he,Te,de.data):t.texImage2D(i.TEXTURE_2D,z,Ae,de.width,de.height,0,he,Te,de.data);x.generateMipmaps=!1}else Re?($e&&t.texStorage2D(i.TEXTURE_2D,se,Ae,Q.width,Q.height),C&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Q.width,Q.height,he,Te,Q.data)):t.texImage2D(i.TEXTURE_2D,0,Ae,Q.width,Q.height,0,he,Te,Q.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Re&&$e&&t.texStorage3D(i.TEXTURE_2D_ARRAY,se,Ae,Ie[0].width,Ie[0].height,Q.depth);for(let z=0,K=Ie.length;z<K;z++)if(de=Ie[z],x.format!==Lt)if(he!==null)if(Re){if(C)if(x.layerUpdates.size>0){const ie=fo(de.width,de.height,x.format,x.type);for(const ae of x.layerUpdates){const Oe=de.data.subarray(ae*ie/de.data.BYTES_PER_ELEMENT,(ae+1)*ie/de.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,z,0,0,ae,de.width,de.height,1,he,Oe,0,0)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,z,0,0,0,de.width,de.height,Q.depth,he,de.data,0,0)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,z,Ae,de.width,de.height,Q.depth,0,de.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Re?C&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,z,0,0,0,de.width,de.height,Q.depth,he,Te,de.data):t.texImage3D(i.TEXTURE_2D_ARRAY,z,Ae,de.width,de.height,Q.depth,0,he,Te,de.data)}else{Re&&$e&&t.texStorage2D(i.TEXTURE_2D,se,Ae,Ie[0].width,Ie[0].height);for(let z=0,K=Ie.length;z<K;z++)de=Ie[z],x.format!==Lt?he!==null?Re?C&&t.compressedTexSubImage2D(i.TEXTURE_2D,z,0,0,de.width,de.height,he,de.data):t.compressedTexImage2D(i.TEXTURE_2D,z,Ae,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Re?C&&t.texSubImage2D(i.TEXTURE_2D,z,0,0,de.width,de.height,he,Te,de.data):t.texImage2D(i.TEXTURE_2D,z,Ae,de.width,de.height,0,he,Te,de.data)}else if(x.isDataArrayTexture)if(Re){if($e&&t.texStorage3D(i.TEXTURE_2D_ARRAY,se,Ae,Q.width,Q.height,Q.depth),C)if(x.layerUpdates.size>0){const z=fo(Q.width,Q.height,x.format,x.type);for(const K of x.layerUpdates){const ie=Q.data.subarray(K*z/Q.data.BYTES_PER_ELEMENT,(K+1)*z/Q.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,K,Q.width,Q.height,1,he,Te,ie)}x.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,he,Te,Q.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ae,Q.width,Q.height,Q.depth,0,he,Te,Q.data);else if(x.isData3DTexture)Re?($e&&t.texStorage3D(i.TEXTURE_3D,se,Ae,Q.width,Q.height,Q.depth),C&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,he,Te,Q.data)):t.texImage3D(i.TEXTURE_3D,0,Ae,Q.width,Q.height,Q.depth,0,he,Te,Q.data);else if(x.isFramebufferTexture){if($e)if(Re)t.texStorage2D(i.TEXTURE_2D,se,Ae,Q.width,Q.height);else{let z=Q.width,K=Q.height;for(let ie=0;ie<se;ie++)t.texImage2D(i.TEXTURE_2D,ie,Ae,z,K,0,he,Te,null),z>>=1,K>>=1}}else if(Ie.length>0){if(Re&&$e){const z=be(Ie[0]);t.texStorage2D(i.TEXTURE_2D,se,Ae,z.width,z.height)}for(let z=0,K=Ie.length;z<K;z++)de=Ie[z],Re?C&&t.texSubImage2D(i.TEXTURE_2D,z,0,0,he,Te,de):t.texImage2D(i.TEXTURE_2D,z,Ae,he,Te,de);x.generateMipmaps=!1}else if(Re){if($e){const z=be(Q);t.texStorage2D(i.TEXTURE_2D,se,Ae,z.width,z.height)}C&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,he,Te,Q)}else t.texImage2D(i.TEXTURE_2D,0,Ae,he,Te,Q);u(x)&&m(q),ve.__version=X.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function W(T,x,I){if(x.image.length!==6)return;const q=Ge(T,x),j=x.source;t.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+I);const X=n.get(j);if(j.version!==X.__version||q===!0){t.activeTexture(i.TEXTURE0+I);const ve=We.getPrimaries(We.workingColorSpace),ne=x.colorSpace===_n?null:We.getPrimaries(x.colorSpace),ue=x.colorSpace===_n||ve===ne?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ue);const ze=x.isCompressedTexture||x.image[0].isCompressedTexture,Q=x.image[0]&&x.image[0].isDataTexture,he=[];for(let K=0;K<6;K++)!ze&&!Q?he[K]=_(x.image[K],!0,r.maxCubemapSize):he[K]=Q?x.image[K].image:x.image[K],he[K]=Ze(x,he[K]);const Te=he[0],Ae=s.convert(x.format,x.colorSpace),de=s.convert(x.type),Ie=E(x.internalFormat,Ae,de,x.colorSpace),Re=x.isVideoTexture!==!0,$e=X.__version===void 0||q===!0,C=j.dataReady;let se=A(x,Te);ge(i.TEXTURE_CUBE_MAP,x);let z;if(ze){Re&&$e&&t.texStorage2D(i.TEXTURE_CUBE_MAP,se,Ie,Te.width,Te.height);for(let K=0;K<6;K++){z=he[K].mipmaps;for(let ie=0;ie<z.length;ie++){const ae=z[ie];x.format!==Lt?Ae!==null?Re?C&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ie,0,0,ae.width,ae.height,Ae,ae.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ie,Ie,ae.width,ae.height,0,ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Re?C&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ie,0,0,ae.width,ae.height,Ae,de,ae.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ie,Ie,ae.width,ae.height,0,Ae,de,ae.data)}}}else{if(z=x.mipmaps,Re&&$e){z.length>0&&se++;const K=be(he[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,se,Ie,K.width,K.height)}for(let K=0;K<6;K++)if(Q){Re?C&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,he[K].width,he[K].height,Ae,de,he[K].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Ie,he[K].width,he[K].height,0,Ae,de,he[K].data);for(let ie=0;ie<z.length;ie++){const Oe=z[ie].image[K].image;Re?C&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ie+1,0,0,Oe.width,Oe.height,Ae,de,Oe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ie+1,Ie,Oe.width,Oe.height,0,Ae,de,Oe.data)}}else{Re?C&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Ae,de,he[K]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Ie,Ae,de,he[K]);for(let ie=0;ie<z.length;ie++){const ae=z[ie];Re?C&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ie+1,0,0,Ae,de,ae.image[K]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ie+1,Ie,Ae,de,ae.image[K])}}}u(x)&&m(i.TEXTURE_CUBE_MAP),X.__version=j.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function J(T,x,I,q,j,X){const ve=s.convert(I.format,I.colorSpace),ne=s.convert(I.type),ue=E(I.internalFormat,ve,ne,I.colorSpace);if(!n.get(x).__hasExternalTextures){const Q=Math.max(1,x.width>>X),he=Math.max(1,x.height>>X);j===i.TEXTURE_3D||j===i.TEXTURE_2D_ARRAY?t.texImage3D(j,X,ue,Q,he,x.depth,0,ve,ne,null):t.texImage2D(j,X,ue,Q,he,0,ve,ne,null)}t.bindFramebuffer(i.FRAMEBUFFER,T),Be(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,q,j,n.get(I).__webglTexture,0,Ue(x)):(j===i.TEXTURE_2D||j>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,q,j,n.get(I).__webglTexture,X),t.bindFramebuffer(i.FRAMEBUFFER,null)}function pe(T,x,I){if(i.bindRenderbuffer(i.RENDERBUFFER,T),x.depthBuffer){const q=x.depthTexture,j=q&&q.isDepthTexture?q.type:null,X=y(x.stencilBuffer,j),ve=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ne=Ue(x);Be(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ne,X,x.width,x.height):I?i.renderbufferStorageMultisample(i.RENDERBUFFER,ne,X,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,X,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ve,i.RENDERBUFFER,T)}else{const q=x.textures;for(let j=0;j<q.length;j++){const X=q[j],ve=s.convert(X.format,X.colorSpace),ne=s.convert(X.type),ue=E(X.internalFormat,ve,ne,X.colorSpace),ze=Ue(x);I&&Be(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ze,ue,x.width,x.height):Be(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ze,ue,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,ue,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ce(T,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,T),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),V(x.depthTexture,0);const q=n.get(x.depthTexture).__webglTexture,j=Ue(x);if(x.depthTexture.format===li)Be(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,q,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,q,0);else if(x.depthTexture.format===mi)Be(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,q,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,q,0);else throw new Error("Unknown depthTexture format")}function we(T){const x=n.get(T),I=T.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==T.depthTexture){const q=T.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),q){const j=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,q.removeEventListener("dispose",j)};q.addEventListener("dispose",j),x.__depthDisposeCallback=j}x.__boundDepthTexture=q}if(T.depthTexture&&!x.__autoAllocateDepthBuffer){if(I)throw new Error("target.depthTexture not supported in Cube render targets");ce(x.__webglFramebuffer,T)}else if(I){x.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[q]),x.__webglDepthbuffer[q]===void 0)x.__webglDepthbuffer[q]=i.createRenderbuffer(),pe(x.__webglDepthbuffer[q],T,!1);else{const j=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,X=x.__webglDepthbuffer[q];i.bindRenderbuffer(i.RENDERBUFFER,X),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,X)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),pe(x.__webglDepthbuffer,T,!1);else{const q=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,j=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,j),i.framebufferRenderbuffer(i.FRAMEBUFFER,q,i.RENDERBUFFER,j)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Se(T,x,I){const q=n.get(T);x!==void 0&&J(q.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),I!==void 0&&we(T)}function Ne(T){const x=T.texture,I=n.get(T),q=n.get(x);T.addEventListener("dispose",w);const j=T.textures,X=T.isWebGLCubeRenderTarget===!0,ve=j.length>1;if(ve||(q.__webglTexture===void 0&&(q.__webglTexture=i.createTexture()),q.__version=x.version,a.memory.textures++),X){I.__webglFramebuffer=[];for(let ne=0;ne<6;ne++)if(x.mipmaps&&x.mipmaps.length>0){I.__webglFramebuffer[ne]=[];for(let ue=0;ue<x.mipmaps.length;ue++)I.__webglFramebuffer[ne][ue]=i.createFramebuffer()}else I.__webglFramebuffer[ne]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){I.__webglFramebuffer=[];for(let ne=0;ne<x.mipmaps.length;ne++)I.__webglFramebuffer[ne]=i.createFramebuffer()}else I.__webglFramebuffer=i.createFramebuffer();if(ve)for(let ne=0,ue=j.length;ne<ue;ne++){const ze=n.get(j[ne]);ze.__webglTexture===void 0&&(ze.__webglTexture=i.createTexture(),a.memory.textures++)}if(T.samples>0&&Be(T)===!1){I.__webglMultisampledFramebuffer=i.createFramebuffer(),I.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,I.__webglMultisampledFramebuffer);for(let ne=0;ne<j.length;ne++){const ue=j[ne];I.__webglColorRenderbuffer[ne]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,I.__webglColorRenderbuffer[ne]);const ze=s.convert(ue.format,ue.colorSpace),Q=s.convert(ue.type),he=E(ue.internalFormat,ze,Q,ue.colorSpace,T.isXRRenderTarget===!0),Te=Ue(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,Te,he,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ne,i.RENDERBUFFER,I.__webglColorRenderbuffer[ne])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(I.__webglDepthRenderbuffer=i.createRenderbuffer(),pe(I.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(X){t.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture),ge(i.TEXTURE_CUBE_MAP,x);for(let ne=0;ne<6;ne++)if(x.mipmaps&&x.mipmaps.length>0)for(let ue=0;ue<x.mipmaps.length;ue++)J(I.__webglFramebuffer[ne][ue],T,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ue);else J(I.__webglFramebuffer[ne],T,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0);u(x)&&m(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ve){for(let ne=0,ue=j.length;ne<ue;ne++){const ze=j[ne],Q=n.get(ze);t.bindTexture(i.TEXTURE_2D,Q.__webglTexture),ge(i.TEXTURE_2D,ze),J(I.__webglFramebuffer,T,ze,i.COLOR_ATTACHMENT0+ne,i.TEXTURE_2D,0),u(ze)&&m(i.TEXTURE_2D)}t.unbindTexture()}else{let ne=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ne=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ne,q.__webglTexture),ge(ne,x),x.mipmaps&&x.mipmaps.length>0)for(let ue=0;ue<x.mipmaps.length;ue++)J(I.__webglFramebuffer[ue],T,x,i.COLOR_ATTACHMENT0,ne,ue);else J(I.__webglFramebuffer,T,x,i.COLOR_ATTACHMENT0,ne,0);u(x)&&m(ne),t.unbindTexture()}T.depthBuffer&&we(T)}function Ke(T){const x=T.textures;for(let I=0,q=x.length;I<q;I++){const j=x[I];if(u(j)){const X=T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,ve=n.get(j).__webglTexture;t.bindTexture(X,ve),m(X),t.unbindTexture()}}}const Fe=[],R=[];function Et(T){if(T.samples>0){if(Be(T)===!1){const x=T.textures,I=T.width,q=T.height;let j=i.COLOR_BUFFER_BIT;const X=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ve=n.get(T),ne=x.length>1;if(ne)for(let ue=0;ue<x.length;ue++)t.bindFramebuffer(i.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ve.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ve.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ve.__webglFramebuffer);for(let ue=0;ue<x.length;ue++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(j|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(j|=i.STENCIL_BUFFER_BIT)),ne){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ve.__webglColorRenderbuffer[ue]);const ze=n.get(x[ue]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ze,0)}i.blitFramebuffer(0,0,I,q,0,0,I,q,j,i.NEAREST),l===!0&&(Fe.length=0,R.length=0,Fe.push(i.COLOR_ATTACHMENT0+ue),T.depthBuffer&&T.resolveDepthBuffer===!1&&(Fe.push(X),R.push(X),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,R)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Fe))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ne)for(let ue=0;ue<x.length;ue++){t.bindFramebuffer(i.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.RENDERBUFFER,ve.__webglColorRenderbuffer[ue]);const ze=n.get(x[ue]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ve.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.TEXTURE_2D,ze,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ve.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){const x=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function Ue(T){return Math.min(r.maxSamples,T.samples)}function Be(T){const x=n.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Ee(T){const x=a.render.frame;d.get(T)!==x&&(d.set(T,x),T.update())}function Ze(T,x){const I=T.colorSpace,q=T.format,j=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||I!==An&&I!==_n&&(We.getTransfer(I)===Je?(q!==Lt||j!==kt)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",I)),x}function be(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=S,this.setTexture2D=V,this.setTexture2DArray=$,this.setTexture3D=H,this.setTextureCube=Z,this.rebindTextures=Se,this.setupRenderTarget=Ne,this.updateRenderTargetMipmap=Ke,this.updateMultisampleRenderTarget=Et,this.setupDepthRenderbuffer=we,this.setupFrameBufferTexture=J,this.useMultisampledRTT=Be}function _p(i,e){function t(n,r=_n){let s;const a=We.getTransfer(r);if(n===kt)return i.UNSIGNED_BYTE;if(n===ta)return i.UNSIGNED_SHORT_4_4_4_4;if(n===na)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Ro)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===bo)return i.BYTE;if(n===wo)return i.SHORT;if(n===Ci)return i.UNSIGNED_SHORT;if(n===ea)return i.INT;if(n===zn)return i.UNSIGNED_INT;if(n===qt)return i.FLOAT;if(n===Hn)return i.HALF_FLOAT;if(n===Co)return i.ALPHA;if(n===Po)return i.RGB;if(n===Lt)return i.RGBA;if(n===Do)return i.LUMINANCE;if(n===Lo)return i.LUMINANCE_ALPHA;if(n===li)return i.DEPTH_COMPONENT;if(n===mi)return i.DEPTH_STENCIL;if(n===Uo)return i.RED;if(n===ia)return i.RED_INTEGER;if(n===Io)return i.RG;if(n===ra)return i.RG_INTEGER;if(n===sa)return i.RGBA_INTEGER;if(n===lr||n===cr||n===ur||n===hr)if(a===Je)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===lr)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===cr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ur)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===hr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===lr)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===cr)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ur)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===hr)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ss||n===ys||n===Es||n===Ts)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Ss)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ys)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Es)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ts)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===As||n===bs||n===ws)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===As||n===bs)return a===Je?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===ws)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Rs||n===Cs||n===Ps||n===Ds||n===Ls||n===Us||n===Is||n===Ns||n===Fs||n===Os||n===Bs||n===zs||n===Gs||n===Hs)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Rs)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Cs)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ps)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ds)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ls)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Us)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Is)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ns)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Fs)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Os)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Bs)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===zs)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Gs)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Hs)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===dr||n===ks||n===Vs)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===dr)return a===Je?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ks)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Vs)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===No||n===Ws||n===Xs||n===qs)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===dr)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Ws)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Xs)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===qs)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===pi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class xp extends Dt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ai extends yt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Mp={type:"move"};class as{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ai,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ai,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ai,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const _ of e.hand.values()){const u=t.getJointPose(_,n),m=this._getHandJoint(c,_);u!==null&&(m.matrix.fromArray(u.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=u.radius),m.visible=u!==null}const d=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],f=d.position.distanceTo(p.position),h=.02,g=.005;c.inputState.pinching&&f>h+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=h-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Mp)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new ai;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Sp=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,yp=`
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

}`;class Ep{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const r=new vt,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Rt({vertexShader:Sp,fragmentShader:yp,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ut(new Gn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Tp extends vi{constructor(e,t){super();const n=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,d=null,p=null,f=null,h=null,g=null;const _=new Ep,u=t.getContextAttributes();let m=null,E=null;const y=[],A=[],U=new Le;let w=null;const b=new Dt;b.layers.enable(1),b.viewport=new Pe;const L=new Dt;L.layers.enable(2),L.viewport=new Pe;const Y=[b,L],v=new xp;v.layers.enable(1),v.layers.enable(2);let S=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let J=y[W];return J===void 0&&(J=new as,y[W]=J),J.getTargetRaySpace()},this.getControllerGrip=function(W){let J=y[W];return J===void 0&&(J=new as,y[W]=J),J.getGripSpace()},this.getHand=function(W){let J=y[W];return J===void 0&&(J=new as,y[W]=J),J.getHandSpace()};function B(W){const J=A.indexOf(W.inputSource);if(J===-1)return;const pe=y[J];pe!==void 0&&(pe.update(W.inputSource,W.frame,c||a),pe.dispatchEvent({type:W.type,data:W.inputSource}))}function V(){r.removeEventListener("select",B),r.removeEventListener("selectstart",B),r.removeEventListener("selectend",B),r.removeEventListener("squeeze",B),r.removeEventListener("squeezestart",B),r.removeEventListener("squeezeend",B),r.removeEventListener("end",V),r.removeEventListener("inputsourceschange",$);for(let W=0;W<y.length;W++){const J=A[W];J!==null&&(A[W]=null,y[W].disconnect(J))}S=null,k=null,_.reset(),e.setRenderTarget(m),h=null,f=null,p=null,r=null,E=null,Xe.stop(),n.isPresenting=!1,e.setPixelRatio(w),e.setSize(U.width,U.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){s=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){o=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return p},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(W){if(r=W,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",B),r.addEventListener("selectstart",B),r.addEventListener("selectend",B),r.addEventListener("squeeze",B),r.addEventListener("squeezestart",B),r.addEventListener("squeezeend",B),r.addEventListener("end",V),r.addEventListener("inputsourceschange",$),u.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(U),r.renderState.layers===void 0){const J={antialias:u.antialias,alpha:!0,depth:u.depth,stencil:u.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(r,t,J),r.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),E=new at(h.framebufferWidth,h.framebufferHeight,{format:Lt,type:kt,colorSpace:e.outputColorSpace,stencilBuffer:u.stencil})}else{let J=null,pe=null,ce=null;u.depth&&(ce=u.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,J=u.stencil?mi:li,pe=u.stencil?pi:zn);const we={colorFormat:t.RGBA8,depthFormat:ce,scaleFactor:s};p=new XRWebGLBinding(r,t),f=p.createProjectionLayer(we),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),E=new at(f.textureWidth,f.textureHeight,{format:Lt,type:kt,depthTexture:new $o(f.textureWidth,f.textureHeight,pe,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:u.stencil,colorSpace:e.outputColorSpace,samples:u.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),Xe.setContext(r),Xe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function $(W){for(let J=0;J<W.removed.length;J++){const pe=W.removed[J],ce=A.indexOf(pe);ce>=0&&(A[ce]=null,y[ce].disconnect(pe))}for(let J=0;J<W.added.length;J++){const pe=W.added[J];let ce=A.indexOf(pe);if(ce===-1){for(let Se=0;Se<y.length;Se++)if(Se>=A.length){A.push(pe),ce=Se;break}else if(A[Se]===null){A[Se]=pe,ce=Se;break}if(ce===-1)break}const we=y[ce];we&&we.connect(pe)}}const H=new N,Z=new N;function G(W,J,pe){H.setFromMatrixPosition(J.matrixWorld),Z.setFromMatrixPosition(pe.matrixWorld);const ce=H.distanceTo(Z),we=J.projectionMatrix.elements,Se=pe.projectionMatrix.elements,Ne=we[14]/(we[10]-1),Ke=we[14]/(we[10]+1),Fe=(we[9]+1)/we[5],R=(we[9]-1)/we[5],Et=(we[8]-1)/we[0],Ue=(Se[8]+1)/Se[0],Be=Ne*Et,Ee=Ne*Ue,Ze=ce/(-Et+Ue),be=Ze*-Et;if(J.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(be),W.translateZ(Ze),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),we[10]===-1)W.projectionMatrix.copy(J.projectionMatrix),W.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{const T=Ne+Ze,x=Ke+Ze,I=Be-be,q=Ee+(ce-be),j=Fe*Ke/x*T,X=R*Ke/x*T;W.projectionMatrix.makePerspective(I,q,j,X,T,x),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function oe(W,J){J===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(J.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(r===null)return;let J=W.near,pe=W.far;_.texture!==null&&(_.depthNear>0&&(J=_.depthNear),_.depthFar>0&&(pe=_.depthFar)),v.near=L.near=b.near=J,v.far=L.far=b.far=pe,(S!==v.near||k!==v.far)&&(r.updateRenderState({depthNear:v.near,depthFar:v.far}),S=v.near,k=v.far);const ce=W.parent,we=v.cameras;oe(v,ce);for(let Se=0;Se<we.length;Se++)oe(we[Se],ce);we.length===2?G(v,b,L):v.projectionMatrix.copy(b.projectionMatrix),le(W,v,ce)};function le(W,J,pe){pe===null?W.matrix.copy(J.matrixWorld):(W.matrix.copy(pe.matrixWorld),W.matrix.invert(),W.matrix.multiply(J.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(J.projectionMatrix),W.projectionMatrixInverse.copy(J.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=Pi*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(f===null&&h===null))return l},this.setFoveation=function(W){l=W,f!==null&&(f.fixedFoveation=W),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=W)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(v)};let ge=null;function Ge(W,J){if(d=J.getViewerPose(c||a),g=J,d!==null){const pe=d.views;h!==null&&(e.setRenderTargetFramebuffer(E,h.framebuffer),e.setRenderTarget(E));let ce=!1;pe.length!==v.cameras.length&&(v.cameras.length=0,ce=!0);for(let Se=0;Se<pe.length;Se++){const Ne=pe[Se];let Ke=null;if(h!==null)Ke=h.getViewport(Ne);else{const R=p.getViewSubImage(f,Ne);Ke=R.viewport,Se===0&&(e.setRenderTargetTextures(E,R.colorTexture,f.ignoreDepthValues?void 0:R.depthStencilTexture),e.setRenderTarget(E))}let Fe=Y[Se];Fe===void 0&&(Fe=new Dt,Fe.layers.enable(Se),Fe.viewport=new Pe,Y[Se]=Fe),Fe.matrix.fromArray(Ne.transform.matrix),Fe.matrix.decompose(Fe.position,Fe.quaternion,Fe.scale),Fe.projectionMatrix.fromArray(Ne.projectionMatrix),Fe.projectionMatrixInverse.copy(Fe.projectionMatrix).invert(),Fe.viewport.set(Ke.x,Ke.y,Ke.width,Ke.height),Se===0&&(v.matrix.copy(Fe.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),ce===!0&&v.cameras.push(Fe)}const we=r.enabledFeatures;if(we&&we.includes("depth-sensing")){const Se=p.getDepthInformation(pe[0]);Se&&Se.isValid&&Se.texture&&_.init(e,Se,r.renderState)}}for(let pe=0;pe<y.length;pe++){const ce=A[pe],we=y[pe];ce!==null&&we!==void 0&&we.update(ce,J,c||a)}ge&&ge(W,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),g=null}const Xe=new Ko;Xe.setAnimationLoop(Ge),this.setAnimationLoop=function(W){ge=W},this.dispose=function(){}}}const Un=new cn,Ap=new tt;function bp(i,e){function t(u,m){u.matrixAutoUpdate===!0&&u.updateMatrix(),m.value.copy(u.matrix)}function n(u,m){m.color.getRGB(u.fogColor.value,Wo(i)),m.isFog?(u.fogNear.value=m.near,u.fogFar.value=m.far):m.isFogExp2&&(u.fogDensity.value=m.density)}function r(u,m,E,y,A){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(u,m):m.isMeshToonMaterial?(s(u,m),p(u,m)):m.isMeshPhongMaterial?(s(u,m),d(u,m)):m.isMeshStandardMaterial?(s(u,m),f(u,m),m.isMeshPhysicalMaterial&&h(u,m,A)):m.isMeshMatcapMaterial?(s(u,m),g(u,m)):m.isMeshDepthMaterial?s(u,m):m.isMeshDistanceMaterial?(s(u,m),_(u,m)):m.isMeshNormalMaterial?s(u,m):m.isLineBasicMaterial?(a(u,m),m.isLineDashedMaterial&&o(u,m)):m.isPointsMaterial?l(u,m,E,y):m.isSpriteMaterial?c(u,m):m.isShadowMaterial?(u.color.value.copy(m.color),u.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(u,m){u.opacity.value=m.opacity,m.color&&u.diffuse.value.copy(m.color),m.emissive&&u.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(u.map.value=m.map,t(m.map,u.mapTransform)),m.alphaMap&&(u.alphaMap.value=m.alphaMap,t(m.alphaMap,u.alphaMapTransform)),m.bumpMap&&(u.bumpMap.value=m.bumpMap,t(m.bumpMap,u.bumpMapTransform),u.bumpScale.value=m.bumpScale,m.side===St&&(u.bumpScale.value*=-1)),m.normalMap&&(u.normalMap.value=m.normalMap,t(m.normalMap,u.normalMapTransform),u.normalScale.value.copy(m.normalScale),m.side===St&&u.normalScale.value.negate()),m.displacementMap&&(u.displacementMap.value=m.displacementMap,t(m.displacementMap,u.displacementMapTransform),u.displacementScale.value=m.displacementScale,u.displacementBias.value=m.displacementBias),m.emissiveMap&&(u.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,u.emissiveMapTransform)),m.specularMap&&(u.specularMap.value=m.specularMap,t(m.specularMap,u.specularMapTransform)),m.alphaTest>0&&(u.alphaTest.value=m.alphaTest);const E=e.get(m),y=E.envMap,A=E.envMapRotation;y&&(u.envMap.value=y,Un.copy(A),Un.x*=-1,Un.y*=-1,Un.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Un.y*=-1,Un.z*=-1),u.envMapRotation.value.setFromMatrix4(Ap.makeRotationFromEuler(Un)),u.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,u.reflectivity.value=m.reflectivity,u.ior.value=m.ior,u.refractionRatio.value=m.refractionRatio),m.lightMap&&(u.lightMap.value=m.lightMap,u.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,u.lightMapTransform)),m.aoMap&&(u.aoMap.value=m.aoMap,u.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,u.aoMapTransform))}function a(u,m){u.diffuse.value.copy(m.color),u.opacity.value=m.opacity,m.map&&(u.map.value=m.map,t(m.map,u.mapTransform))}function o(u,m){u.dashSize.value=m.dashSize,u.totalSize.value=m.dashSize+m.gapSize,u.scale.value=m.scale}function l(u,m,E,y){u.diffuse.value.copy(m.color),u.opacity.value=m.opacity,u.size.value=m.size*E,u.scale.value=y*.5,m.map&&(u.map.value=m.map,t(m.map,u.uvTransform)),m.alphaMap&&(u.alphaMap.value=m.alphaMap,t(m.alphaMap,u.alphaMapTransform)),m.alphaTest>0&&(u.alphaTest.value=m.alphaTest)}function c(u,m){u.diffuse.value.copy(m.color),u.opacity.value=m.opacity,u.rotation.value=m.rotation,m.map&&(u.map.value=m.map,t(m.map,u.mapTransform)),m.alphaMap&&(u.alphaMap.value=m.alphaMap,t(m.alphaMap,u.alphaMapTransform)),m.alphaTest>0&&(u.alphaTest.value=m.alphaTest)}function d(u,m){u.specular.value.copy(m.specular),u.shininess.value=Math.max(m.shininess,1e-4)}function p(u,m){m.gradientMap&&(u.gradientMap.value=m.gradientMap)}function f(u,m){u.metalness.value=m.metalness,m.metalnessMap&&(u.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,u.metalnessMapTransform)),u.roughness.value=m.roughness,m.roughnessMap&&(u.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,u.roughnessMapTransform)),m.envMap&&(u.envMapIntensity.value=m.envMapIntensity)}function h(u,m,E){u.ior.value=m.ior,m.sheen>0&&(u.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),u.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(u.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,u.sheenColorMapTransform)),m.sheenRoughnessMap&&(u.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,u.sheenRoughnessMapTransform))),m.clearcoat>0&&(u.clearcoat.value=m.clearcoat,u.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(u.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,u.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(u.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,u.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(u.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,u.clearcoatNormalMapTransform),u.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===St&&u.clearcoatNormalScale.value.negate())),m.dispersion>0&&(u.dispersion.value=m.dispersion),m.iridescence>0&&(u.iridescence.value=m.iridescence,u.iridescenceIOR.value=m.iridescenceIOR,u.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],u.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(u.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,u.iridescenceMapTransform)),m.iridescenceThicknessMap&&(u.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,u.iridescenceThicknessMapTransform))),m.transmission>0&&(u.transmission.value=m.transmission,u.transmissionSamplerMap.value=E.texture,u.transmissionSamplerSize.value.set(E.width,E.height),m.transmissionMap&&(u.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,u.transmissionMapTransform)),u.thickness.value=m.thickness,m.thicknessMap&&(u.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,u.thicknessMapTransform)),u.attenuationDistance.value=m.attenuationDistance,u.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(u.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(u.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,u.anisotropyMapTransform))),u.specularIntensity.value=m.specularIntensity,u.specularColor.value.copy(m.specularColor),m.specularColorMap&&(u.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,u.specularColorMapTransform)),m.specularIntensityMap&&(u.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,u.specularIntensityMapTransform))}function g(u,m){m.matcap&&(u.matcap.value=m.matcap)}function _(u,m){const E=e.get(m).light;u.referencePosition.value.setFromMatrixPosition(E.matrixWorld),u.nearDistance.value=E.shadow.camera.near,u.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function wp(i,e,t,n){let r={},s={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,y){const A=y.program;n.uniformBlockBinding(E,A)}function c(E,y){let A=r[E.id];A===void 0&&(g(E),A=d(E),r[E.id]=A,E.addEventListener("dispose",u));const U=y.program;n.updateUBOMapping(E,U);const w=e.render.frame;s[E.id]!==w&&(f(E),s[E.id]=w)}function d(E){const y=p();E.__bindingPointIndex=y;const A=i.createBuffer(),U=E.__size,w=E.usage;return i.bindBuffer(i.UNIFORM_BUFFER,A),i.bufferData(i.UNIFORM_BUFFER,U,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,A),A}function p(){for(let E=0;E<o;E++)if(a.indexOf(E)===-1)return a.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(E){const y=r[E.id],A=E.uniforms,U=E.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let w=0,b=A.length;w<b;w++){const L=Array.isArray(A[w])?A[w]:[A[w]];for(let Y=0,v=L.length;Y<v;Y++){const S=L[Y];if(h(S,w,Y,U)===!0){const k=S.__offset,B=Array.isArray(S.value)?S.value:[S.value];let V=0;for(let $=0;$<B.length;$++){const H=B[$],Z=_(H);typeof H=="number"||typeof H=="boolean"?(S.__data[0]=H,i.bufferSubData(i.UNIFORM_BUFFER,k+V,S.__data)):H.isMatrix3?(S.__data[0]=H.elements[0],S.__data[1]=H.elements[1],S.__data[2]=H.elements[2],S.__data[3]=0,S.__data[4]=H.elements[3],S.__data[5]=H.elements[4],S.__data[6]=H.elements[5],S.__data[7]=0,S.__data[8]=H.elements[6],S.__data[9]=H.elements[7],S.__data[10]=H.elements[8],S.__data[11]=0):(H.toArray(S.__data,V),V+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,k,S.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(E,y,A,U){const w=E.value,b=y+"_"+A;if(U[b]===void 0)return typeof w=="number"||typeof w=="boolean"?U[b]=w:U[b]=w.clone(),!0;{const L=U[b];if(typeof w=="number"||typeof w=="boolean"){if(L!==w)return U[b]=w,!0}else if(L.equals(w)===!1)return L.copy(w),!0}return!1}function g(E){const y=E.uniforms;let A=0;const U=16;for(let b=0,L=y.length;b<L;b++){const Y=Array.isArray(y[b])?y[b]:[y[b]];for(let v=0,S=Y.length;v<S;v++){const k=Y[v],B=Array.isArray(k.value)?k.value:[k.value];for(let V=0,$=B.length;V<$;V++){const H=B[V],Z=_(H),G=A%U,oe=G%Z.boundary,le=G+oe;A+=oe,le!==0&&U-le<Z.storage&&(A+=U-le),k.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=A,A+=Z.storage}}}const w=A%U;return w>0&&(A+=U-w),E.__size=A,E.__cache={},this}function _(E){const y={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(y.boundary=4,y.storage=4):E.isVector2?(y.boundary=8,y.storage=8):E.isVector3||E.isColor?(y.boundary=16,y.storage=12):E.isVector4?(y.boundary=16,y.storage=16):E.isMatrix3?(y.boundary=48,y.storage=48):E.isMatrix4?(y.boundary=64,y.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),y}function u(E){const y=E.target;y.removeEventListener("dispose",u);const A=a.indexOf(y.__bindingPointIndex);a.splice(A,1),i.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function m(){for(const E in r)i.deleteBuffer(r[E]);a=[],r={},s={}}return{bind:l,update:c,dispose:m}}class Rp{constructor(e={}){const{canvas:t=pc(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:p=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;const h=new Uint32Array(4),g=new Int32Array(4);let _=null,u=null;const m=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Vt,this.toneMapping=Mn,this.toneMappingExposure=1;const y=this;let A=!1,U=0,w=0,b=null,L=-1,Y=null;const v=new Pe,S=new Pe;let k=null;const B=new Ye(0);let V=0,$=t.width,H=t.height,Z=1,G=null,oe=null;const le=new Pe(0,0,$,H),ge=new Pe(0,0,$,H);let Ge=!1;const Xe=new Yo;let W=!1,J=!1;const pe=new tt,ce=new tt,we=new N,Se=new Pe,Ne={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ke=!1;function Fe(){return b===null?Z:1}let R=n;function Et(M,P){return t.getContext(M,P)}try{const M={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Js}`),t.addEventListener("webglcontextlost",K,!1),t.addEventListener("webglcontextrestored",ie,!1),t.addEventListener("webglcontextcreationerror",ae,!1),R===null){const P="webgl2";if(R=Et(P,M),R===null)throw Et(P)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let Ue,Be,Ee,Ze,be,T,x,I,q,j,X,ve,ne,ue,ze,Q,he,Te,Ae,de,Ie,Re,$e,C;function se(){Ue=new Ld(R),Ue.init(),Re=new _p(R,Ue),Be=new bd(R,Ue,e,Re),Ee=new mp(R),Be.reverseDepthBuffer&&Ee.buffers.depth.setReversed(!0),Ze=new Nd(R),be=new ep,T=new vp(R,Ue,Ee,be,Be,Re,Ze),x=new Rd(y),I=new Dd(y),q=new kc(R),$e=new Td(R,q),j=new Ud(R,q,Ze,$e),X=new Od(R,j,q,Ze),Ae=new Fd(R,Be,T),Q=new wd(be),ve=new Qf(y,x,I,Ue,Be,$e,Q),ne=new bp(y,be),ue=new np,ze=new lp(Ue),Te=new Ed(y,x,I,Ee,X,f,l),he=new fp(y,X,Be),C=new wp(R,Ze,Be,Ee),de=new Ad(R,Ue,Ze),Ie=new Id(R,Ue,Ze),Ze.programs=ve.programs,y.capabilities=Be,y.extensions=Ue,y.properties=be,y.renderLists=ue,y.shadowMap=he,y.state=Ee,y.info=Ze}se();const z=new Tp(y,R);this.xr=z,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const M=Ue.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=Ue.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(M){M!==void 0&&(Z=M,this.setSize($,H,!1))},this.getSize=function(M){return M.set($,H)},this.setSize=function(M,P,F=!0){if(z.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=M,H=P,t.width=Math.floor(M*Z),t.height=Math.floor(P*Z),F===!0&&(t.style.width=M+"px",t.style.height=P+"px"),this.setViewport(0,0,M,P)},this.getDrawingBufferSize=function(M){return M.set($*Z,H*Z).floor()},this.setDrawingBufferSize=function(M,P,F){$=M,H=P,Z=F,t.width=Math.floor(M*F),t.height=Math.floor(P*F),this.setViewport(0,0,M,P)},this.getCurrentViewport=function(M){return M.copy(v)},this.getViewport=function(M){return M.copy(le)},this.setViewport=function(M,P,F,O){M.isVector4?le.set(M.x,M.y,M.z,M.w):le.set(M,P,F,O),Ee.viewport(v.copy(le).multiplyScalar(Z).round())},this.getScissor=function(M){return M.copy(ge)},this.setScissor=function(M,P,F,O){M.isVector4?ge.set(M.x,M.y,M.z,M.w):ge.set(M,P,F,O),Ee.scissor(S.copy(ge).multiplyScalar(Z).round())},this.getScissorTest=function(){return Ge},this.setScissorTest=function(M){Ee.setScissorTest(Ge=M)},this.setOpaqueSort=function(M){G=M},this.setTransparentSort=function(M){oe=M},this.getClearColor=function(M){return M.copy(Te.getClearColor())},this.setClearColor=function(){Te.setClearColor.apply(Te,arguments)},this.getClearAlpha=function(){return Te.getClearAlpha()},this.setClearAlpha=function(){Te.setClearAlpha.apply(Te,arguments)},this.clear=function(M=!0,P=!0,F=!0){let O=0;if(M){let D=!1;if(b!==null){const ee=b.texture.format;D=ee===sa||ee===ra||ee===ia}if(D){const ee=b.texture.type,re=ee===kt||ee===zn||ee===Ci||ee===pi||ee===ta||ee===na,fe=Te.getClearColor(),me=Te.getClearAlpha(),Me=fe.r,ye=fe.g,_e=fe.b;re?(h[0]=Me,h[1]=ye,h[2]=_e,h[3]=me,R.clearBufferuiv(R.COLOR,0,h)):(g[0]=Me,g[1]=ye,g[2]=_e,g[3]=me,R.clearBufferiv(R.COLOR,0,g))}else O|=R.COLOR_BUFFER_BIT}P&&(O|=R.DEPTH_BUFFER_BIT,R.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),F&&(O|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",K,!1),t.removeEventListener("webglcontextrestored",ie,!1),t.removeEventListener("webglcontextcreationerror",ae,!1),ue.dispose(),ze.dispose(),be.dispose(),x.dispose(),I.dispose(),X.dispose(),$e.dispose(),C.dispose(),ve.dispose(),z.dispose(),z.removeEventListener("sessionstart",ha),z.removeEventListener("sessionend",da),wn.stop()};function K(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function ie(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const M=Ze.autoReset,P=he.enabled,F=he.autoUpdate,O=he.needsUpdate,D=he.type;se(),Ze.autoReset=M,he.enabled=P,he.autoUpdate=F,he.needsUpdate=O,he.type=D}function ae(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Oe(M){const P=M.target;P.removeEventListener("dispose",Oe),it(P)}function it(M){_t(M),be.remove(M)}function _t(M){const P=be.get(M).programs;P!==void 0&&(P.forEach(function(F){ve.releaseProgram(F)}),M.isShaderMaterial&&ve.releaseShaderCache(M))}this.renderBufferDirect=function(M,P,F,O,D,ee){P===null&&(P=Ne);const re=D.isMesh&&D.matrixWorld.determinant()<0,fe=ll(M,P,F,O,D);Ee.setMaterial(O,re);let me=F.index,Me=1;if(O.wireframe===!0){if(me=j.getWireframeAttribute(F),me===void 0)return;Me=2}const ye=F.drawRange,_e=F.attributes.position;let qe=ye.start*Me,je=(ye.start+ye.count)*Me;ee!==null&&(qe=Math.max(qe,ee.start*Me),je=Math.min(je,(ee.start+ee.count)*Me)),me!==null?(qe=Math.max(qe,0),je=Math.min(je,me.count)):_e!=null&&(qe=Math.max(qe,0),je=Math.min(je,_e.count));const et=je-qe;if(et<0||et===1/0)return;$e.setup(D,O,fe,F,me);let Tt,ke=de;if(me!==null&&(Tt=q.get(me),ke=Ie,ke.setIndex(Tt)),D.isMesh)O.wireframe===!0?(Ee.setLineWidth(O.wireframeLinewidth*Fe()),ke.setMode(R.LINES)):ke.setMode(R.TRIANGLES);else if(D.isLine){let xe=O.linewidth;xe===void 0&&(xe=1),Ee.setLineWidth(xe*Fe()),D.isLineSegments?ke.setMode(R.LINES):D.isLineLoop?ke.setMode(R.LINE_LOOP):ke.setMode(R.LINE_STRIP)}else D.isPoints?ke.setMode(R.POINTS):D.isSprite&&ke.setMode(R.TRIANGLES);if(D.isBatchedMesh)if(D._multiDrawInstances!==null)ke.renderMultiDrawInstances(D._multiDrawStarts,D._multiDrawCounts,D._multiDrawCount,D._multiDrawInstances);else if(Ue.get("WEBGL_multi_draw"))ke.renderMultiDraw(D._multiDrawStarts,D._multiDrawCounts,D._multiDrawCount);else{const xe=D._multiDrawStarts,ut=D._multiDrawCounts,Ve=D._multiDrawCount,It=me?q.get(me).bytesPerElement:1,kn=be.get(O).currentProgram.getUniforms();for(let At=0;At<Ve;At++)kn.setValue(R,"_gl_DrawID",At),ke.render(xe[At]/It,ut[At])}else if(D.isInstancedMesh)ke.renderInstances(qe,et,D.count);else if(F.isInstancedBufferGeometry){const xe=F._maxInstanceCount!==void 0?F._maxInstanceCount:1/0,ut=Math.min(F.instanceCount,xe);ke.renderInstances(qe,et,ut)}else ke.render(qe,et)};function He(M,P,F){M.transparent===!0&&M.side===Xt&&M.forceSinglePass===!1?(M.side=St,M.needsUpdate=!0,Oi(M,P,F),M.side=Tn,M.needsUpdate=!0,Oi(M,P,F),M.side=Xt):Oi(M,P,F)}this.compile=function(M,P,F=null){F===null&&(F=M),u=ze.get(F),u.init(P),E.push(u),F.traverseVisible(function(D){D.isLight&&D.layers.test(P.layers)&&(u.pushLight(D),D.castShadow&&u.pushShadow(D))}),M!==F&&M.traverseVisible(function(D){D.isLight&&D.layers.test(P.layers)&&(u.pushLight(D),D.castShadow&&u.pushShadow(D))}),u.setupLights();const O=new Set;return M.traverse(function(D){if(!(D.isMesh||D.isPoints||D.isLine||D.isSprite))return;const ee=D.material;if(ee)if(Array.isArray(ee))for(let re=0;re<ee.length;re++){const fe=ee[re];He(fe,F,D),O.add(fe)}else He(ee,F,D),O.add(ee)}),E.pop(),u=null,O},this.compileAsync=function(M,P,F=null){const O=this.compile(M,P,F);return new Promise(D=>{function ee(){if(O.forEach(function(re){be.get(re).currentProgram.isReady()&&O.delete(re)}),O.size===0){D(M);return}setTimeout(ee,10)}Ue.get("KHR_parallel_shader_compile")!==null?ee():setTimeout(ee,10)})};let xt=null;function $t(M){xt&&xt(M)}function ha(){wn.stop()}function da(){wn.start()}const wn=new Ko;wn.setAnimationLoop($t),typeof self<"u"&&wn.setContext(self),this.setAnimationLoop=function(M){xt=M,z.setAnimationLoop(M),M===null?wn.stop():wn.start()},z.addEventListener("sessionstart",ha),z.addEventListener("sessionend",da),this.render=function(M,P){if(P!==void 0&&P.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),P.parent===null&&P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),z.enabled===!0&&z.isPresenting===!0&&(z.cameraAutoUpdate===!0&&z.updateCamera(P),P=z.getCamera()),M.isScene===!0&&M.onBeforeRender(y,M,P,b),u=ze.get(M,E.length),u.init(P),E.push(u),ce.multiplyMatrices(P.projectionMatrix,P.matrixWorldInverse),Xe.setFromProjectionMatrix(ce),J=this.localClippingEnabled,W=Q.init(this.clippingPlanes,J),_=ue.get(M,m.length),_.init(),m.push(_),z.enabled===!0&&z.isPresenting===!0){const ee=y.xr.getDepthSensingMesh();ee!==null&&wr(ee,P,-1/0,y.sortObjects)}wr(M,P,0,y.sortObjects),_.finish(),y.sortObjects===!0&&_.sort(G,oe),Ke=z.enabled===!1||z.isPresenting===!1||z.hasDepthSensing()===!1,Ke&&Te.addToRenderList(_,M),this.info.render.frame++,W===!0&&Q.beginShadows();const F=u.state.shadowsArray;he.render(F,M,P),W===!0&&Q.endShadows(),this.info.autoReset===!0&&this.info.reset();const O=_.opaque,D=_.transmissive;if(u.setupLights(),P.isArrayCamera){const ee=P.cameras;if(D.length>0)for(let re=0,fe=ee.length;re<fe;re++){const me=ee[re];pa(O,D,M,me)}Ke&&Te.render(M);for(let re=0,fe=ee.length;re<fe;re++){const me=ee[re];fa(_,M,me,me.viewport)}}else D.length>0&&pa(O,D,M,P),Ke&&Te.render(M),fa(_,M,P);b!==null&&(T.updateMultisampleRenderTarget(b),T.updateRenderTargetMipmap(b)),M.isScene===!0&&M.onAfterRender(y,M,P),$e.resetDefaultState(),L=-1,Y=null,E.pop(),E.length>0?(u=E[E.length-1],W===!0&&Q.setGlobalState(y.clippingPlanes,u.state.camera)):u=null,m.pop(),m.length>0?_=m[m.length-1]:_=null};function wr(M,P,F,O){if(M.visible===!1)return;if(M.layers.test(P.layers)){if(M.isGroup)F=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(P);else if(M.isLight)u.pushLight(M),M.castShadow&&u.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||Xe.intersectsSprite(M)){O&&Se.setFromMatrixPosition(M.matrixWorld).applyMatrix4(ce);const re=X.update(M),fe=M.material;fe.visible&&_.push(M,re,fe,F,Se.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||Xe.intersectsObject(M))){const re=X.update(M),fe=M.material;if(O&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Se.copy(M.boundingSphere.center)):(re.boundingSphere===null&&re.computeBoundingSphere(),Se.copy(re.boundingSphere.center)),Se.applyMatrix4(M.matrixWorld).applyMatrix4(ce)),Array.isArray(fe)){const me=re.groups;for(let Me=0,ye=me.length;Me<ye;Me++){const _e=me[Me],qe=fe[_e.materialIndex];qe&&qe.visible&&_.push(M,re,qe,F,Se.z,_e)}}else fe.visible&&_.push(M,re,fe,F,Se.z,null)}}const ee=M.children;for(let re=0,fe=ee.length;re<fe;re++)wr(ee[re],P,F,O)}function fa(M,P,F,O){const D=M.opaque,ee=M.transmissive,re=M.transparent;u.setupLightsView(F),W===!0&&Q.setGlobalState(y.clippingPlanes,F),O&&Ee.viewport(v.copy(O)),D.length>0&&Fi(D,P,F),ee.length>0&&Fi(ee,P,F),re.length>0&&Fi(re,P,F),Ee.buffers.depth.setTest(!0),Ee.buffers.depth.setMask(!0),Ee.buffers.color.setMask(!0),Ee.setPolygonOffset(!1)}function pa(M,P,F,O){if((F.isScene===!0?F.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[O.id]===void 0&&(u.state.transmissionRenderTarget[O.id]=new at(1,1,{generateMipmaps:!0,type:Ue.has("EXT_color_buffer_half_float")||Ue.has("EXT_color_buffer_float")?Hn:kt,minFilter:On,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:We.workingColorSpace}));const ee=u.state.transmissionRenderTarget[O.id],re=O.viewport||v;ee.setSize(re.z,re.w);const fe=y.getRenderTarget();y.setRenderTarget(ee),y.getClearColor(B),V=y.getClearAlpha(),V<1&&y.setClearColor(16777215,.5),y.clear(),Ke&&Te.render(F);const me=y.toneMapping;y.toneMapping=Mn;const Me=O.viewport;if(O.viewport!==void 0&&(O.viewport=void 0),u.setupLightsView(O),W===!0&&Q.setGlobalState(y.clippingPlanes,O),Fi(M,F,O),T.updateMultisampleRenderTarget(ee),T.updateRenderTargetMipmap(ee),Ue.has("WEBGL_multisampled_render_to_texture")===!1){let ye=!1;for(let _e=0,qe=P.length;_e<qe;_e++){const je=P[_e],et=je.object,Tt=je.geometry,ke=je.material,xe=je.group;if(ke.side===Xt&&et.layers.test(O.layers)){const ut=ke.side;ke.side=St,ke.needsUpdate=!0,ma(et,F,O,Tt,ke,xe),ke.side=ut,ke.needsUpdate=!0,ye=!0}}ye===!0&&(T.updateMultisampleRenderTarget(ee),T.updateRenderTargetMipmap(ee))}y.setRenderTarget(fe),y.setClearColor(B,V),Me!==void 0&&(O.viewport=Me),y.toneMapping=me}function Fi(M,P,F){const O=P.isScene===!0?P.overrideMaterial:null;for(let D=0,ee=M.length;D<ee;D++){const re=M[D],fe=re.object,me=re.geometry,Me=O===null?re.material:O,ye=re.group;fe.layers.test(F.layers)&&ma(fe,P,F,me,Me,ye)}}function ma(M,P,F,O,D,ee){M.onBeforeRender(y,P,F,O,D,ee),M.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),D.onBeforeRender(y,P,F,O,M,ee),D.transparent===!0&&D.side===Xt&&D.forceSinglePass===!1?(D.side=St,D.needsUpdate=!0,y.renderBufferDirect(F,P,O,D,M,ee),D.side=Tn,D.needsUpdate=!0,y.renderBufferDirect(F,P,O,D,M,ee),D.side=Xt):y.renderBufferDirect(F,P,O,D,M,ee),M.onAfterRender(y,P,F,O,D,ee)}function Oi(M,P,F){P.isScene!==!0&&(P=Ne);const O=be.get(M),D=u.state.lights,ee=u.state.shadowsArray,re=D.state.version,fe=ve.getParameters(M,D.state,ee,P,F),me=ve.getProgramCacheKey(fe);let Me=O.programs;O.environment=M.isMeshStandardMaterial?P.environment:null,O.fog=P.fog,O.envMap=(M.isMeshStandardMaterial?I:x).get(M.envMap||O.environment),O.envMapRotation=O.environment!==null&&M.envMap===null?P.environmentRotation:M.envMapRotation,Me===void 0&&(M.addEventListener("dispose",Oe),Me=new Map,O.programs=Me);let ye=Me.get(me);if(ye!==void 0){if(O.currentProgram===ye&&O.lightsStateVersion===re)return va(M,fe),ye}else fe.uniforms=ve.getUniforms(M),M.onBeforeCompile(fe,y),ye=ve.acquireProgram(fe,me),Me.set(me,ye),O.uniforms=fe.uniforms;const _e=O.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(_e.clippingPlanes=Q.uniform),va(M,fe),O.needsLights=ul(M),O.lightsStateVersion=re,O.needsLights&&(_e.ambientLightColor.value=D.state.ambient,_e.lightProbe.value=D.state.probe,_e.directionalLights.value=D.state.directional,_e.directionalLightShadows.value=D.state.directionalShadow,_e.spotLights.value=D.state.spot,_e.spotLightShadows.value=D.state.spotShadow,_e.rectAreaLights.value=D.state.rectArea,_e.ltc_1.value=D.state.rectAreaLTC1,_e.ltc_2.value=D.state.rectAreaLTC2,_e.pointLights.value=D.state.point,_e.pointLightShadows.value=D.state.pointShadow,_e.hemisphereLights.value=D.state.hemi,_e.directionalShadowMap.value=D.state.directionalShadowMap,_e.directionalShadowMatrix.value=D.state.directionalShadowMatrix,_e.spotShadowMap.value=D.state.spotShadowMap,_e.spotLightMatrix.value=D.state.spotLightMatrix,_e.spotLightMap.value=D.state.spotLightMap,_e.pointShadowMap.value=D.state.pointShadowMap,_e.pointShadowMatrix.value=D.state.pointShadowMatrix),O.currentProgram=ye,O.uniformsList=null,ye}function ga(M){if(M.uniformsList===null){const P=M.currentProgram.getUniforms();M.uniformsList=pr.seqWithValue(P.seq,M.uniforms)}return M.uniformsList}function va(M,P){const F=be.get(M);F.outputColorSpace=P.outputColorSpace,F.batching=P.batching,F.batchingColor=P.batchingColor,F.instancing=P.instancing,F.instancingColor=P.instancingColor,F.instancingMorph=P.instancingMorph,F.skinning=P.skinning,F.morphTargets=P.morphTargets,F.morphNormals=P.morphNormals,F.morphColors=P.morphColors,F.morphTargetsCount=P.morphTargetsCount,F.numClippingPlanes=P.numClippingPlanes,F.numIntersection=P.numClipIntersection,F.vertexAlphas=P.vertexAlphas,F.vertexTangents=P.vertexTangents,F.toneMapping=P.toneMapping}function ll(M,P,F,O,D){P.isScene!==!0&&(P=Ne),T.resetTextureUnits();const ee=P.fog,re=O.isMeshStandardMaterial?P.environment:null,fe=b===null?y.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:An,me=(O.isMeshStandardMaterial?I:x).get(O.envMap||re),Me=O.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,ye=!!F.attributes.tangent&&(!!O.normalMap||O.anisotropy>0),_e=!!F.morphAttributes.position,qe=!!F.morphAttributes.normal,je=!!F.morphAttributes.color;let et=Mn;O.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(et=y.toneMapping);const Tt=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,ke=Tt!==void 0?Tt.length:0,xe=be.get(O),ut=u.state.lights;if(W===!0&&(J===!0||M!==Y)){const Ct=M===Y&&O.id===L;Q.setState(O,M,Ct)}let Ve=!1;O.version===xe.__version?(xe.needsLights&&xe.lightsStateVersion!==ut.state.version||xe.outputColorSpace!==fe||D.isBatchedMesh&&xe.batching===!1||!D.isBatchedMesh&&xe.batching===!0||D.isBatchedMesh&&xe.batchingColor===!0&&D.colorTexture===null||D.isBatchedMesh&&xe.batchingColor===!1&&D.colorTexture!==null||D.isInstancedMesh&&xe.instancing===!1||!D.isInstancedMesh&&xe.instancing===!0||D.isSkinnedMesh&&xe.skinning===!1||!D.isSkinnedMesh&&xe.skinning===!0||D.isInstancedMesh&&xe.instancingColor===!0&&D.instanceColor===null||D.isInstancedMesh&&xe.instancingColor===!1&&D.instanceColor!==null||D.isInstancedMesh&&xe.instancingMorph===!0&&D.morphTexture===null||D.isInstancedMesh&&xe.instancingMorph===!1&&D.morphTexture!==null||xe.envMap!==me||O.fog===!0&&xe.fog!==ee||xe.numClippingPlanes!==void 0&&(xe.numClippingPlanes!==Q.numPlanes||xe.numIntersection!==Q.numIntersection)||xe.vertexAlphas!==Me||xe.vertexTangents!==ye||xe.morphTargets!==_e||xe.morphNormals!==qe||xe.morphColors!==je||xe.toneMapping!==et||xe.morphTargetsCount!==ke)&&(Ve=!0):(Ve=!0,xe.__version=O.version);let It=xe.currentProgram;Ve===!0&&(It=Oi(O,P,D));let kn=!1,At=!1,Rr=!1;const nt=It.getUniforms(),un=xe.uniforms;if(Ee.useProgram(It.program)&&(kn=!0,At=!0,Rr=!0),O.id!==L&&(L=O.id,At=!0),kn||Y!==M){Be.reverseDepthBuffer?(pe.copy(M.projectionMatrix),gc(pe),vc(pe),nt.setValue(R,"projectionMatrix",pe)):nt.setValue(R,"projectionMatrix",M.projectionMatrix),nt.setValue(R,"viewMatrix",M.matrixWorldInverse);const Ct=nt.map.cameraPosition;Ct!==void 0&&Ct.setValue(R,we.setFromMatrixPosition(M.matrixWorld)),Be.logarithmicDepthBuffer&&nt.setValue(R,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&nt.setValue(R,"isOrthographic",M.isOrthographicCamera===!0),Y!==M&&(Y=M,At=!0,Rr=!0)}if(D.isSkinnedMesh){nt.setOptional(R,D,"bindMatrix"),nt.setOptional(R,D,"bindMatrixInverse");const Ct=D.skeleton;Ct&&(Ct.boneTexture===null&&Ct.computeBoneTexture(),nt.setValue(R,"boneTexture",Ct.boneTexture,T))}D.isBatchedMesh&&(nt.setOptional(R,D,"batchingTexture"),nt.setValue(R,"batchingTexture",D._matricesTexture,T),nt.setOptional(R,D,"batchingIdTexture"),nt.setValue(R,"batchingIdTexture",D._indirectTexture,T),nt.setOptional(R,D,"batchingColorTexture"),D._colorsTexture!==null&&nt.setValue(R,"batchingColorTexture",D._colorsTexture,T));const Cr=F.morphAttributes;if((Cr.position!==void 0||Cr.normal!==void 0||Cr.color!==void 0)&&Ae.update(D,F,It),(At||xe.receiveShadow!==D.receiveShadow)&&(xe.receiveShadow=D.receiveShadow,nt.setValue(R,"receiveShadow",D.receiveShadow)),O.isMeshGouraudMaterial&&O.envMap!==null&&(un.envMap.value=me,un.flipEnvMap.value=me.isCubeTexture&&me.isRenderTargetTexture===!1?-1:1),O.isMeshStandardMaterial&&O.envMap===null&&P.environment!==null&&(un.envMapIntensity.value=P.environmentIntensity),At&&(nt.setValue(R,"toneMappingExposure",y.toneMappingExposure),xe.needsLights&&cl(un,Rr),ee&&O.fog===!0&&ne.refreshFogUniforms(un,ee),ne.refreshMaterialUniforms(un,O,Z,H,u.state.transmissionRenderTarget[M.id]),pr.upload(R,ga(xe),un,T)),O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(pr.upload(R,ga(xe),un,T),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&nt.setValue(R,"center",D.center),nt.setValue(R,"modelViewMatrix",D.modelViewMatrix),nt.setValue(R,"normalMatrix",D.normalMatrix),nt.setValue(R,"modelMatrix",D.matrixWorld),O.isShaderMaterial||O.isRawShaderMaterial){const Ct=O.uniformsGroups;for(let Pr=0,hl=Ct.length;Pr<hl;Pr++){const _a=Ct[Pr];C.update(_a,It),C.bind(_a,It)}}return It}function cl(M,P){M.ambientLightColor.needsUpdate=P,M.lightProbe.needsUpdate=P,M.directionalLights.needsUpdate=P,M.directionalLightShadows.needsUpdate=P,M.pointLights.needsUpdate=P,M.pointLightShadows.needsUpdate=P,M.spotLights.needsUpdate=P,M.spotLightShadows.needsUpdate=P,M.rectAreaLights.needsUpdate=P,M.hemisphereLights.needsUpdate=P}function ul(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(M,P,F){be.get(M.texture).__webglTexture=P,be.get(M.depthTexture).__webglTexture=F;const O=be.get(M);O.__hasExternalTextures=!0,O.__autoAllocateDepthBuffer=F===void 0,O.__autoAllocateDepthBuffer||Ue.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),O.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(M,P){const F=be.get(M);F.__webglFramebuffer=P,F.__useDefaultFramebuffer=P===void 0},this.setRenderTarget=function(M,P=0,F=0){b=M,U=P,w=F;let O=!0,D=null,ee=!1,re=!1;if(M){const me=be.get(M);if(me.__useDefaultFramebuffer!==void 0)Ee.bindFramebuffer(R.FRAMEBUFFER,null),O=!1;else if(me.__webglFramebuffer===void 0)T.setupRenderTarget(M);else if(me.__hasExternalTextures)T.rebindTextures(M,be.get(M.texture).__webglTexture,be.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const _e=M.depthTexture;if(me.__boundDepthTexture!==_e){if(_e!==null&&be.has(_e)&&(M.width!==_e.image.width||M.height!==_e.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(M)}}const Me=M.texture;(Me.isData3DTexture||Me.isDataArrayTexture||Me.isCompressedArrayTexture)&&(re=!0);const ye=be.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(ye[P])?D=ye[P][F]:D=ye[P],ee=!0):M.samples>0&&T.useMultisampledRTT(M)===!1?D=be.get(M).__webglMultisampledFramebuffer:Array.isArray(ye)?D=ye[F]:D=ye,v.copy(M.viewport),S.copy(M.scissor),k=M.scissorTest}else v.copy(le).multiplyScalar(Z).floor(),S.copy(ge).multiplyScalar(Z).floor(),k=Ge;if(Ee.bindFramebuffer(R.FRAMEBUFFER,D)&&O&&Ee.drawBuffers(M,D),Ee.viewport(v),Ee.scissor(S),Ee.setScissorTest(k),ee){const me=be.get(M.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+P,me.__webglTexture,F)}else if(re){const me=be.get(M.texture),Me=P||0;R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,me.__webglTexture,F||0,Me)}L=-1},this.readRenderTargetPixels=function(M,P,F,O,D,ee,re){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let fe=be.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&re!==void 0&&(fe=fe[re]),fe){Ee.bindFramebuffer(R.FRAMEBUFFER,fe);try{const me=M.texture,Me=me.format,ye=me.type;if(!Be.textureFormatReadable(Me)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Be.textureTypeReadable(ye)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}P>=0&&P<=M.width-O&&F>=0&&F<=M.height-D&&R.readPixels(P,F,O,D,Re.convert(Me),Re.convert(ye),ee)}finally{const me=b!==null?be.get(b).__webglFramebuffer:null;Ee.bindFramebuffer(R.FRAMEBUFFER,me)}}},this.readRenderTargetPixelsAsync=async function(M,P,F,O,D,ee,re){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let fe=be.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&re!==void 0&&(fe=fe[re]),fe){const me=M.texture,Me=me.format,ye=me.type;if(!Be.textureFormatReadable(Me))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Be.textureTypeReadable(ye))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(P>=0&&P<=M.width-O&&F>=0&&F<=M.height-D){Ee.bindFramebuffer(R.FRAMEBUFFER,fe);const _e=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,_e),R.bufferData(R.PIXEL_PACK_BUFFER,ee.byteLength,R.STREAM_READ),R.readPixels(P,F,O,D,Re.convert(Me),Re.convert(ye),0);const qe=b!==null?be.get(b).__webglFramebuffer:null;Ee.bindFramebuffer(R.FRAMEBUFFER,qe);const je=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await mc(R,je,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,_e),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,ee),R.deleteBuffer(_e),R.deleteSync(je),ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(M,P=null,F=0){M.isTexture!==!0&&(fr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),P=arguments[0]||null,M=arguments[1]);const O=Math.pow(2,-F),D=Math.floor(M.image.width*O),ee=Math.floor(M.image.height*O),re=P!==null?P.x:0,fe=P!==null?P.y:0;T.setTexture2D(M,0),R.copyTexSubImage2D(R.TEXTURE_2D,F,0,0,re,fe,D,ee),Ee.unbindTexture()},this.copyTextureToTexture=function(M,P,F=null,O=null,D=0){M.isTexture!==!0&&(fr("WebGLRenderer: copyTextureToTexture function signature has changed."),O=arguments[0]||null,M=arguments[1],P=arguments[2],D=arguments[3]||0,F=null);let ee,re,fe,me,Me,ye;F!==null?(ee=F.max.x-F.min.x,re=F.max.y-F.min.y,fe=F.min.x,me=F.min.y):(ee=M.image.width,re=M.image.height,fe=0,me=0),O!==null?(Me=O.x,ye=O.y):(Me=0,ye=0);const _e=Re.convert(P.format),qe=Re.convert(P.type);T.setTexture2D(P,0),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,P.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,P.unpackAlignment);const je=R.getParameter(R.UNPACK_ROW_LENGTH),et=R.getParameter(R.UNPACK_IMAGE_HEIGHT),Tt=R.getParameter(R.UNPACK_SKIP_PIXELS),ke=R.getParameter(R.UNPACK_SKIP_ROWS),xe=R.getParameter(R.UNPACK_SKIP_IMAGES),ut=M.isCompressedTexture?M.mipmaps[D]:M.image;R.pixelStorei(R.UNPACK_ROW_LENGTH,ut.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,ut.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,fe),R.pixelStorei(R.UNPACK_SKIP_ROWS,me),M.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,D,Me,ye,ee,re,_e,qe,ut.data):M.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,D,Me,ye,ut.width,ut.height,_e,ut.data):R.texSubImage2D(R.TEXTURE_2D,D,Me,ye,ee,re,_e,qe,ut),R.pixelStorei(R.UNPACK_ROW_LENGTH,je),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,et),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Tt),R.pixelStorei(R.UNPACK_SKIP_ROWS,ke),R.pixelStorei(R.UNPACK_SKIP_IMAGES,xe),D===0&&P.generateMipmaps&&R.generateMipmap(R.TEXTURE_2D),Ee.unbindTexture()},this.copyTextureToTexture3D=function(M,P,F=null,O=null,D=0){M.isTexture!==!0&&(fr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),F=arguments[0]||null,O=arguments[1]||null,M=arguments[2],P=arguments[3],D=arguments[4]||0);let ee,re,fe,me,Me,ye,_e,qe,je;const et=M.isCompressedTexture?M.mipmaps[D]:M.image;F!==null?(ee=F.max.x-F.min.x,re=F.max.y-F.min.y,fe=F.max.z-F.min.z,me=F.min.x,Me=F.min.y,ye=F.min.z):(ee=et.width,re=et.height,fe=et.depth,me=0,Me=0,ye=0),O!==null?(_e=O.x,qe=O.y,je=O.z):(_e=0,qe=0,je=0);const Tt=Re.convert(P.format),ke=Re.convert(P.type);let xe;if(P.isData3DTexture)T.setTexture3D(P,0),xe=R.TEXTURE_3D;else if(P.isDataArrayTexture||P.isCompressedArrayTexture)T.setTexture2DArray(P,0),xe=R.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,P.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,P.unpackAlignment);const ut=R.getParameter(R.UNPACK_ROW_LENGTH),Ve=R.getParameter(R.UNPACK_IMAGE_HEIGHT),It=R.getParameter(R.UNPACK_SKIP_PIXELS),kn=R.getParameter(R.UNPACK_SKIP_ROWS),At=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,et.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,et.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,me),R.pixelStorei(R.UNPACK_SKIP_ROWS,Me),R.pixelStorei(R.UNPACK_SKIP_IMAGES,ye),M.isDataTexture||M.isData3DTexture?R.texSubImage3D(xe,D,_e,qe,je,ee,re,fe,Tt,ke,et.data):P.isCompressedArrayTexture?R.compressedTexSubImage3D(xe,D,_e,qe,je,ee,re,fe,Tt,et.data):R.texSubImage3D(xe,D,_e,qe,je,ee,re,fe,Tt,ke,et),R.pixelStorei(R.UNPACK_ROW_LENGTH,ut),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,Ve),R.pixelStorei(R.UNPACK_SKIP_PIXELS,It),R.pixelStorei(R.UNPACK_SKIP_ROWS,kn),R.pixelStorei(R.UNPACK_SKIP_IMAGES,At),D===0&&P.generateMipmaps&&R.generateMipmap(xe),Ee.unbindTexture()},this.initRenderTarget=function(M){be.get(M).__webglFramebuffer===void 0&&T.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?T.setTextureCube(M,0):M.isData3DTexture?T.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?T.setTexture2DArray(M,0):T.setTexture2D(M,0),Ee.unbindTexture()},this.resetState=function(){U=0,w=0,b=null,Ee.reset(),$e.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ln}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===aa?"display-p3":"srgb",t.unpackColorSpace=We.workingColorSpace===Er?"display-p3":"srgb"}}class Sr extends yt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new cn,this.environmentIntensity=1,this.environmentRotation=new cn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class el extends vt{constructor(e=null,t=1,n=1,r,s,a,o,l,c=ft,d=ft,p,f){super(null,a,o,l,c,d,r,s,p,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Cp extends Ui{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ye(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const po=new tt,Ks=new la,sr=new Tr,ar=new N;class Pp extends yt{constructor(e=new Kt,t=new Cp){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),sr.copy(n.boundingSphere),sr.applyMatrix4(r),sr.radius+=s,e.ray.intersectsSphere(sr)===!1)return;po.copy(r).invert(),Ks.copy(e.ray).applyMatrix4(po);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,p=n.attributes.position;if(c!==null){const f=Math.max(0,a.start),h=Math.min(c.count,a.start+a.count);for(let g=f,_=h;g<_;g++){const u=c.getX(g);ar.fromBufferAttribute(p,u),mo(ar,u,l,r,e,t,this)}}else{const f=Math.max(0,a.start),h=Math.min(p.count,a.start+a.count);for(let g=f,_=h;g<_;g++)ar.fromBufferAttribute(p,g),mo(ar,g,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function mo(i,e,t,n,r,s,a){const o=Ks.distanceSqToPoint(i);if(o<t){const l=new N;Ks.closestPointToPoint(i,l),l.applyMatrix4(n);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class tl extends Rt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}const go=new tt;class Dp{constructor(e,t,n=0,r=1/0){this.ray=new la(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new ca,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return go.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(go),this}intersectObject(e,t=!0,n=[]){return $s(e,this,n,t),n.sort(vo),n}intersectObjects(e,t=!0,n=[]){for(let r=0,s=e.length;r<s;r++)$s(e[r],this,n,t);return n.sort(vo),n}}function vo(i,e){return i.distance-e.distance}function $s(i,e,t,n){let r=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(r=!1),r===!0&&n===!0){const s=i.children;for(let a=0,o=s.length;a<o;a++)$s(s[a],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Js}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Js);const bn=`
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
`,nl=`
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
`,Lp=`
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
`,il=`
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
`,rl=`
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
`,Up=`
vec3 rdHueA(float s){
  vec3 a = vec3(1.83, 1.51, 0.46), b = vec3(0.80, 1.31, 0.48);
  vec3 c = vec3(0.30, 1.70, 0.90), d = vec3(0.20, 0.48, 1.14);
  s = clamp(s, 0.0, 1.0)*3.0;
  return s < 1.0 ? mix(a, b, s) : s < 2.0 ? mix(b, c, s - 1.0) : mix(c, d, s - 2.0);
}
`,Ip=`
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
`,sl=`
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
`,Np=sl+bn+il+rl+`
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
`,Fp=sl+bn+nl+rl+Lp+Up+`
uniform vec2 uPaperTexel;
varying vec2 vUv;
varying vec2 vGradOther;
varying vec3 vWorld;

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

  float vig = length(vUv - 0.5)*1.25;
  col *= 1.0 - mix(0.16, 0.45, night)*pow(vig, 2.2);
  gl_FragColor = vec4(col, 1.0);
}
`,Bt=(i,e,t)=>[-Math.log(i),-Math.log(e),-Math.log(t)],rn=[{name:"ultramar",A:Bt(.16,.22,.63)},{name:"cerúleo",A:Bt(.22,.55,.74)},{name:"violeta",A:Bt(.45,.27,.62)},{name:"magenta",A:Bt(.8,.22,.55)},{name:"carmín",A:Bt(.74,.14,.24)},{name:"ocre",A:Bt(.82,.62,.32)},{name:"amarillo cálido",A:Bt(.97,.8,.28)}],Ht=[{name:"cian eléctrico",A:Bt(.2,.8,.92)},{name:"azul profundo",A:Bt(.1,.16,.48)},{name:"violeta",A:Bt(.5,.36,.92)},{name:"magenta",A:Bt(.88,.3,.78)}];function ui(i,e,t,n=[0,0,0]){for(let r=0;r<3;r++)n[r]=i[r]+(e[r]-i[r])*t;return n}const _o=[1,0,0,0,1,0,0,0,1];function os(i,e=.35){const t=(i[0]+i[1]+i[2])/3,n=i.map(s=>s/t),r=[];for(let s=0;s<3;s++)for(let a=0;a<3;a++)r.push((s===a?e:0)+(1-e)*n[s]/3);return r}const ii=[{name:"papel",M:_o,paper:[.955,.94,.905],ground:[.025,.03,.07],night:0,ink:Ht[2].A},{name:"terracota",M:os([.35,.95,1.25],.45),paper:[.965,.945,.915],ground:[.04,.03,.035],night:0,ink:Ht[1].A},{name:"nocturno",M:_o,paper:[.955,.94,.905],ground:[.018,.026,.065],night:1,ink:Ht[0].A},{name:"tinta",M:os([1.55,1.25,.35]),paper:[.97,.945,.885],ground:[.03,.03,.06],night:0,ink:Ht[3].A},{name:"brasas",M:os([.2,.85,1.6],.4),paper:[.95,.93,.92],ground:[.05,.022,.045],night:1,ink:Ht[3].A}];class Op{constructor(e){this.shared=e,Object.assign(e,{uPalM0:{value:new Ce},uPalM1:{value:new Ce},uPaper0:{value:new N},uPaper1:{value:new N},uGround0:{value:new N},uGround1:{value:new N},uNight0:{value:0},uNight1:{value:0},uPalWave:{value:new Pe(0,0,0,0)}}),this.dissolve=new Pe(0,0,0,0),this.reset()}set(e,t){const n=this.shared;n["uPalM"+e].value.set(...t.M),n["uPaper"+e].value.fromArray(t.paper),n["uGround"+e].value.fromArray(t.ground),n["uNight"+e].value=t.night}reset(){this.index=0,this.set(0,ii[0]),this.set(1,ii[0]),this.shared.uPalWave.value.set(0,0,0,0),this.dissolve.set(0,0,0,0),this.active=!1,this.shifts=0}get current(){return ii[this.index]}get transitioning(){return this.active}shift(e){if(this.active)return!1;const t=(this.index+1)%ii.length;return this.set(1,ii[t]),this.next=t,this.radius=0,this.origin=e.slice(),this.active=!0,this.shifts++,!0}update(e,t){if(!this.active){this.dissolve.w=0;return}this.radius+=e*.32,this.shared.uPalWave.value.set(this.origin[0],this.origin[1],this.radius,1),this.dissolve.set(this.origin[0],this.origin[1],this.radius,.8),this.radius>Math.hypot(t,1)+.3&&(this.index=this.next,this.set(0,ii[this.index]),this.shared.uPalWave.value.w=0,this.dissolve.w=0,this.active=!1)}}const tn=10,xo=.93;class Bp{constructor(e){this.renderer=new Rp({canvas:e,antialias:!0,alpha:!1,powerPreference:"high-performance"}),this.renderer.setClearColor(15328472,1),this.scene=new Sr,this.camera=new Dt(30,1,.1,200),this.camDist=tn*xo*.5/Math.tan(Lr.degToRad(15)),this.camera.position.set(0,0,this.camDist),this.shared={uTime:{value:0},uAspect:{value:1},uScale:{value:tn},uTech:{value:0},uHybrid:{value:0},uAgitation:{value:0},uWave:{value:Array.from({length:8},()=>new Pe(0,0,0,0))},uFold:{value:Array.from({length:6},()=>new Pe(0,0,0,0))},uFoldB:{value:Array.from({length:6},()=>new Pe(0,0,0,0))},uCharge:{value:new Pe(0,0,0,0)},uLight:{value:new N(-.45,.55,.7).normalize()},tWet:{value:null},tDry:{value:null},tField:{value:null},tPaper:{value:null},tTrail:{value:null},uRelief:{value:0},uNetGlow:{value:0},tRD:{value:null},uRDTexel:{value:new Le(1/560,1/330)},uRDVis:{value:0}},this.palette=new Op(this.shared),this.canvasUniforms={...this.shared,uPaperTexel:{value:new Le}},this.canvasMat=new Rt({vertexShader:Np,fragmentShader:Fp,uniforms:this.canvasUniforms}),this.canvasMesh=new Ut(new Gn(1,1),this.canvasMat),this.canvasMesh.frustumCulled=!1,this.canvasMesh.renderOrder=0,this.scene.add(this.canvasMesh),this.shadowGroup=new ai,this.structGroup=new ai,this.scene.add(this.shadowGroup,this.structGroup),this.footScene=new Sr,this.footCamera=new Ar(-1,1,1,-1,-50,50),this.raycaster=new Dp,this.plane=new vn(new N(0,0,1),0),this.ndc=new Le,this.hit=new N,this.drift=new Le,this.lookTarget=new N}resize(e,t,n){this.renderer.setPixelRatio(n),this.renderer.setSize(e,t,!1),this.width=e,this.height=t,this.aspect=e/t,this.shared.uAspect.value=this.aspect,this.camera.aspect=this.aspect,this.camera.updateProjectionMatrix(),this.canvasMesh.geometry.dispose(),this.canvasMesh.geometry=new Gn(this.aspect*tn,tn,300,180);const r=this.aspect*tn/2,s=tn/2;return Object.assign(this.footCamera,{left:-r,right:r,top:s,bottom:-s}),this.footCamera.position.set(0,0,10),this.footCamera.updateProjectionMatrix(),this.aspect}setPaper(e,t,n){this.shared.tPaper.value=e,this.canvasUniforms.uPaperTexel.value.set(1/t,1/n)}screenToQ(e,t,n=[0,0]){return this.ndc.set(e/this.width*2-1,-(t/this.height)*2+1),this.raycaster.setFromCamera(this.ndc,this.camera),this.raycaster.ray.intersectPlane(this.plane,this.hit)?(n[0]=this.hit.x/tn+this.aspect/2,n[1]=this.hit.y/tn+.5,n):null}updateCamera(e,t,n,r){const s=(1-xo)*.5*tn*1.4,a=s*Math.min(1,this.aspect),o=s*Math.min(1,1/this.aspect),l=Lr.clamp((Math.sin(t*.071)*.35+(r?r[0]*.25:0))*n,-a,a),c=Lr.clamp((Math.sin(t*.053+1.3)*.25+(r?r[1]*.18:0))*n,-o,o),d=Math.min(1,e*.8);this.drift.x+=(l-this.drift.x)*d,this.drift.y+=(c-this.drift.y)*d,this.camera.position.set(this.drift.x,this.drift.y,this.camDist),this.lookTarget.set(this.drift.x*.6,this.drift.y*.6,0),this.camera.lookAt(this.lookTarget)}renderFootprint(e){const t=this.renderer;t.setRenderTarget(e),t.setClearColor(0,0),t.clear(!0,!1,!1),t.render(this.footScene,this.footCamera),t.setClearColor(15328472,1),t.setRenderTarget(null)}render(){this.renderer.setRenderTarget(null),this.renderer.render(this.scene,this.camera)}}const zp=`
precision highp float;
in vec3 position;
in vec2 uv;
out vec2 vUv;
void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }
`,Gp=new Gn(2,2);function Sn(i,e){return new tl({glslVersion:_r,vertexShader:zp,fragmentShader:i,uniforms:e,depthTest:!1,depthWrite:!1})}class yn{constructor(e){this.material=e,this.mesh=new Ut(Gp,e),this.mesh.frustumCulled=!1,this.scene=new Sr,this.scene.add(this.mesh),this.camera=new Ar(-1,1,1,-1,0,1)}render(e,t){e.setRenderTarget(t),e.render(this.scene,this.camera)}dispose(){this.material.dispose()}}function Yt(i,e){i.setRenderTarget(e),i.setClearColor(0,0),i.clear(!0,!1,!1)}const an=16,Ni=`
precision highp float;
precision highp sampler2D;
in vec2 vUv;
`,Hp=Ni+`
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
`,kp=Ni+`
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
`,Vp=Ni+`
layout(location = 0) out vec4 oWet;
layout(location = 1) out vec4 oDry;
uniform sampler2D tWet;
uniform sampler2D tDry;
void main(){ oWet = texture(tWet, vUv); oDry = texture(tDry, vUv); }
`,Wp=Ni+`
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
`,Xp=Ni+`
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
`;class qp{constructor(e,t){this.renderer=e,this.type=t,this.segs=Array.from({length:an},()=>new Pe(0,0,0,0)),this.segP=Array.from({length:an},()=>new Pe(0,0,0,0)),this.segC=Array.from({length:an},()=>new Pe(0,0,0,0)),this.segCount=0,this.drop=new Pe(0,0,0,0),this.blank=new el(new Uint8Array(4),1,1),this.blank.needsUpdate=!0,this.u={tWet:{value:null},tDry:{value:null},tField:{value:this.blank},tPaper:{value:null},tDeposit:{value:this.blank},uTexel:{value:new Le},uAspect:{value:1},uDt:{value:.016},uAdvect:{value:0},uAniso:{value:0},uDepositAmt:{value:0},uSegCount:{value:0},uSeg:{value:this.segs},uSegP:{value:this.segP},uSegC:{value:this.segC},uDrop:{value:this.drop},tTrail:{value:this.blank},uDryAdvect:{value:0},uNetDeposit:{value:0},uNetA:{value:new N(1,1,1)},uDissolve:{value:new Pe(0,0,0,0)},tRD:{value:this.blank},uRDDeposit:{value:0}},this.simPass=new yn(Sn(kp,this.u)),this.paperU={uAspect:{value:1}},this.paperPass=new yn(Sn(Hp,this.paperU)),this.copyU={tWet:{value:null},tDry:{value:null}},this.copyPass=new yn(Sn(Vp,this.copyU)),this.read=null,this.write=null,this.paperRT=null}makeRT(e,t){return new at(e,t,{count:2,type:this.type,format:Lt,minFilter:Qe,magFilter:Qe,depthBuffer:!1,stencilBuffer:!1,generateMipmaps:!1})}resize(e,t,n,r){const s=this.makeRT(t,n),a=this.makeRT(t,n);this.read?(this.copyU.tWet.value=this.read.textures[0],this.copyU.tDry.value=this.read.textures[1],this.copyPass.render(this.renderer,s),this.read.dispose(),this.write.dispose()):Yt(this.renderer,s),Yt(this.renderer,a),this.read=s,this.write=a,this.u.uTexel.value.set(1/t,1/n),this.u.uAspect.value=e,this.width=t,this.height=n,this.paperRT&&this.paperRT.dispose();const o=Math.round(r),l=Math.round(r/e);this.paperRT=new at(o,l,{type:kt,minFilter:Qe,magFilter:Qe,depthBuffer:!1,generateMipmaps:!1}),this.paperU.uAspect.value=e,this.paperPass.render(this.renderer,this.paperRT),this.u.tPaper.value=this.paperRT.texture,this.renderer.setRenderTarget(null)}get wet(){return this.read.textures[0]}get dry(){return this.read.textures[1]}get paper(){return this.paperRT.texture}addSegment(e,t,n,r,s,a,o,l,c,d){if(this.segCount>=an)return!1;const p=this.segCount++;return this.segs[p].set(e,t,n,r),this.segP[p].set(s,a,o,d),this.segC[p].set(l[0],l[1],l[2],c),!0}get freeSegments(){return an-this.segCount}addDrop(e,t,n,r){this.drop.set(e,t,n,r)}step(e,t,n,r,s){const a=this.u;a.uDt.value=e/s,a.tField.value=t||this.blank,a.tDeposit.value=n||this.blank,a.uAdvect.value=r.advect,a.uAniso.value=r.aniso,a.uDryAdvect.value=r.dryAdvect||0,a.uNetDeposit.value=r.netDeposit||0,a.tTrail.value=r.trail||this.blank,a.tRD.value=r.rd||this.blank,a.uRDDeposit.value=r.rdDeposit||0,r.netA&&a.uNetA.value.fromArray(r.netA),r.dissolve?a.uDissolve.value.copy(r.dissolve):a.uDissolve.value.w=0;for(let o=0;o<s;o++){a.uSegCount.value=o===0?this.segCount:0,a.uDepositAmt.value=o===0?r.depositAmt:0,o>0&&(this.drop.w=0),a.tWet.value=this.read.textures[0],a.tDry.value=this.read.textures[1],this.simPass.render(this.renderer,this.write);const l=this.read;this.read=this.write,this.write=l}this.segCount=0,this.drop.w=0}clear(){Yt(this.renderer,this.read),Yt(this.renderer,this.write),this.segCount=0,this.drop.w=0}dispose(){this.read?.dispose(),this.write?.dispose(),this.paperRT?.dispose(),this.simPass.dispose(),this.paperPass.dispose(),this.copyPass.dispose(),this.blank.dispose()}}class Yp{constructor(e,t){this.renderer=e,this.type=t,this.vortices=Array.from({length:8},()=>new Pe(0,0,0,0)),this.vortexCount=0,this.regions=Array.from({length:16},()=>new Pe(0,0,0,0)),this.u={tField:{value:null},tDry:{value:null},tWet:{value:null},uTexel:{value:new Le},uAspect:{value:1},uDt:{value:.016},uTime:{value:0},uTech:{value:0},uHybrid:{value:0},uMouse:{value:new Pe(0,0,0,0)},uMouseGain:{value:0},uVortex:{value:this.vortices},uVortexCount:{value:0},uCharge:{value:new Pe(0,0,0,0)},uRegions:{value:this.regions},uRegionCount:{value:0},uHyb:{value:new Pe(0,0,0,0)},uHybDir:{value:new N(1,0,0)}},this.pass=new yn(Sn(Wp,this.u))}resize(e){const n=Math.max(48,Math.round(192/e));this.read?.dispose(),this.write?.dispose();const r={type:this.type,minFilter:Qe,magFilter:Qe,depthBuffer:!1,generateMipmaps:!1};this.read=new at(192,n,r),this.write=new at(192,n,r),this.clear(),this.u.uTexel.value.set(1/192,1/n),this.u.uAspect.value=e}get texture(){return this.read.texture}addVortex(e,t,n,r){this.vortexCount>=8||this.vortices[this.vortexCount++].set(e,t,n,r)}setRegions(e){const t=Math.min(16,e.length);for(let n=0;n<t;n++)this.regions[n].set(e[n].x,e[n].y,e[n].r,e[n].p);this.u.uRegionCount.value=t}step(e,t,n){const r=this.u;r.uDt.value=e,r.tField.value=this.read.texture,r.tWet.value=t,r.tDry.value=n,r.uVortexCount.value=this.vortexCount,this.pass.render(this.renderer,this.write);const s=this.read;this.read=this.write,this.write=s,this.vortexCount=0}clear(){Yt(this.renderer,this.read),Yt(this.renderer,this.write),this.u.uRegionCount.value=0,this.u.uHyb.value.set(0,0,0,0)}}class Kp{constructor(e){this.renderer=e,this.u={tWet:{value:null},tDry:{value:null},uTexel:{value:new Le}},this.pass=new yn(Sn(Xp,this.u)),this.rt=null}ensure(e){const n=Math.max(40,Math.round(144/e));this.rt&&this.rt.width===144&&this.rt.height===n||(this.rt?.dispose(),this.rt=new at(144,n,{type:kt,minFilter:Qe,magFilter:Qe,depthBuffer:!1,generateMipmaps:!1}),this.buf=new Uint8Array(144*n*4))}analyze(e,t,n){this.ensure(n);const{width:r,height:s}=this.rt;this.u.tWet.value=e,this.u.tDry.value=t,this.u.uTexel.value.set(1/r,1/s),this.pass.render(this.renderer,this.rt),this.renderer.readRenderTargetPixels(this.rt,0,0,r,s,this.buf),this.renderer.setRenderTarget(null);const a=r*s,o=new Float32Array(a),l=new Float32Array(a*3);for(let c=0;c<a;c++)l[c*3]=this.buf[c*4]/255*4,l[c*3+1]=this.buf[c*4+1]/255*4,l[c*3+2]=this.buf[c*4+2]/255*4,o[c]=this.buf[c*4+3]/255*2;return new $p(r,s,n,o,l)}}class $p{constructor(e,t,n,r,s){this.gw=e,this.gh=t,this.aspect=n,this.dens=r,this.absb=s,this.zoneId=new Int16Array(e*t).fill(-1),this.zones=[],this.computeZones()}cell(e,t){const n=Math.min(this.gw-1,Math.max(0,Math.floor(e/this.aspect*this.gw)));return Math.min(this.gh-1,Math.max(0,Math.floor(t*this.gh)))*this.gw+n}cellQ(e,t){return[(e+.5)/this.gw*this.aspect,(t+.5)/this.gh]}densAt(e,t){return this.dens[this.cell(e,t)]}zoneAt(e,t){return this.zoneId[this.cell(e,t)]}absAt(e,t){const n=this.cell(e,t)*3;return[this.absb[n],this.absb[n+1],this.absb[n+2]]}totalDensity(){let e=0;for(const t of this.dens)e+=t;return e/this.dens.length}coverage(e=.12){let t=0;for(const n of this.dens)n>e&&t++;return t/this.dens.length}gradAt(e,t,n=[0,0]){const r=this.aspect/this.gw,s=1/this.gh;return n[0]=(this.densAt(e+r,t)-this.densAt(e-r,t))/(2*r),n[1]=(this.densAt(e,t+s)-this.densAt(e,t-s))/(2*s),n}computeZones(){const{gw:e,gh:t,dens:n}=this,r=.09,s=new Float32Array(e*t);for(let h=0;h<t;h++)for(let g=0;g<e;g++){let _=0,u=0;for(let m=-1;m<=1;m++)for(let E=-1;E<=1;E++){const y=g+E,A=h+m;y<0||A<0||y>=e||A>=t||(_+=n[A*e+y],u++)}s[h*e+g]=_/u}const a=[];for(let h=0;h<e*t;h++)s[h]>r*1.5&&a.push(h);a.sort((h,g)=>s[g]-s[h]);const o=Math.max(5,Math.round(e*.05)),l=[];for(const h of a){const g=h%e,_=h/e|0;if(l.every(u=>(u[0]-g)**2+(u[1]-_)**2>o*o)&&l.push([g,_]),l.length>=14)break}if(!l.length)return;const c=l.map(()=>({count:0,sx:0,sy:0,sxx:0,syy:0,sxy:0,A:[0,0,0],d:0,ds:[]})),d=(o*3.5)**2;for(let h=0;h<t;h++)for(let g=0;g<e;g++){const _=h*e+g;if(n[_]<r)continue;let u=-1,m=d;for(let U=0;U<l.length;U++){const w=(l[U][0]-g)**2+(l[U][1]-h)**2;w<m&&(m=w,u=U)}if(u<0)continue;this.zoneId[_]=u;const E=c[u],[y,A]=this.cellQ(g,h);E.count++,E.sx+=y,E.sy+=A,E.sxx+=y*y,E.syy+=A*A,E.sxy+=y*A,E.A[0]+=this.absb[_*3],E.A[1]+=this.absb[_*3+1],E.A[2]+=this.absb[_*3+2],E.d+=n[_],E.ds.push(n[_])}const p=this.aspect/e*(1/t),f=[0,0];c.forEach((h,g)=>{if(h.count<6){for(let Y=0;Y<this.zoneId.length;Y++)this.zoneId[Y]===g&&(this.zoneId[Y]=-1);return}const _=h.sx/h.count,u=h.sy/h.count,m=h.sxx/h.count-_*_,E=h.syy/h.count-u*u,y=h.sxy/h.count-_*u,A=m+E,U=m*E-y*y,w=A/2+Math.sqrt(Math.max(0,A*A/4-U)),b=Math.max(1e-6,A-w);h.ds.sort((Y,v)=>Y-v);const L={id:g,center:[_,u],count:h.count,area:h.count*p,axis:.5*Math.atan2(2*y,m-E),major:Math.sqrt(w)*2,minor:Math.sqrt(b)*2,A:h.A.map(Y=>Y/h.count),meanDens:h.d/h.count,shardThr:h.ds[Math.floor(h.ds.length*.45)],radius:0,boundary:[]};for(let Y=0;Y<t;Y++)for(let v=0;v<e;v++){const S=Y*e+v;if(this.zoneId[S]!==g)continue;const[k,B]=this.cellQ(v,Y);if(L.radius=Math.max(L.radius,Math.hypot(k-_,B-u)),v>0&&n[S-1]<r||v<e-1&&n[S+1]<r||Y>0&&n[S-e]<r||Y<t-1&&n[S+e]<r){this.gradAt(k,B,f);const $=Math.hypot(f[0],f[1])||1;L.boundary.push([k,B,-f[0]/$,-f[1]/$])}}this.zones.push(L)})}}class Zp{constructor(e,t,n,r,{renderOrder:s=2,depthWrite:a=!1}={}){const o={vertexShader:t,fragmentShader:n,uniforms:r,transparent:!0,side:Xt};this.materials=[new Rt({...o,defines:{MODE:0},depthWrite:a}),new Rt({...o,defines:{MODE:1},depthWrite:!1,depthTest:!1}),new Rt({...o,defines:{MODE:2},depthWrite:!1,depthTest:!1,blending:Qs,blendEquation:sn,blendSrc:on,blendDst:on,blendSrcAlpha:on,blendDstAlpha:on})],this.geometry=e,this.uniforms=r,this.meshes=this.materials.map(l=>{const c=new Ut(e,l);return c.frustumCulled=!1,c}),this.meshes[0].renderOrder=s,this.meshes[1].renderOrder=1}attach(e){e.main.add(this.meshes[0]),e.shadow.add(this.meshes[1]),e.foot.add(this.meshes[2])}dispose(){for(const e of this.meshes)e.parent?.remove(e);for(const e of this.materials)e.dispose();this.geometry.dispose()}}const jp=`
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
`,Jp=`
vec4 projectShadow(vec3 world){
  vec3 L = normalize(uLight);
  world.xy -= L.xy/L.z*world.z;
  world.z = 0.01;
  return projectionMatrix*viewMatrix*vec4(world, 1.0);
}
`,al=jp+bn+nl+il,Qp=al+Jp,em=Qp+`
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
`,tm=al+`
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
`,Mt=(i,e,t)=>Math.min(t,Math.max(e,i)),zt=(i,e,t)=>i+(e-i)*t,En=(i,e,t)=>{const n=Mt((t-i)/(e-i),0,1);return n*n*(3-2*n)},Zs=i=>(i=Mt(i,0,1),i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2);function Mo(i){let e=i>>>0;return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}function or(i,e){let t=i*374761393+e*668265263|0;return t=Math.imul(t^t>>>13,1274126177),((t^t>>>16)>>>0)/4294967296}function js(i,e){const t=Math.floor(i),n=Math.floor(e),r=i-t,s=e-n,a=r*r*(3-2*r),o=s*s*(3-2*s),l=or(t,n),c=or(t+1,n),d=or(t,n+1),p=or(t+1,n+1);return zt(zt(l,c,a),zt(d,p,a),o)}const nm=i=>js(i,.5);function im(i,e,t=[0,0]){const r=(s,a)=>js(s,a)*.67+js(s*2.1+5.3,a*2.1)*.33;return t[0]=(r(i,e+.05)-r(i,e-.05))/(2*.05),t[1]=-(r(i+.05,e)-r(i-.05,e))/(2*.05),t}function rm(i,e,t,n,r,s=[]){const a=[0,0],o=[0,0],l=(c,d,p,f,h,g)=>{const _=[c.slice()],u=[h],m=[g],E=Math.round(t.steps*Math.pow(.72,f)*(.75+n()*.5)),y=t.step*(1-.12*f);let[A,U]=d,[w,b]=c;for(let v=0;v<E;v++){r?r.gradAt(w,b,a):a[0]=a[1]=0,im(w*t.curlScale+t.seed,b*t.curlScale,o);const S=Math.hypot(o[0],o[1])||1;A+=-a[0]*t.avoid*.02+o[0]/S*t.wander+(n()-.5)*.12,U+=-a[1]*t.avoid*.02+o[1]/S*t.wander+(n()-.5)*.12;const k=Math.hypot(A,U)||1;if(A/=k,U/=k,w+=A*y,b+=U*y,h+=y,w<.01||b<.01||w>t.aspect-.01||b>.99)break;if(_.push([w,b]),u.push(h),m.push(g+(h-u[0])/t.speed),f<t.maxDepth&&v>1&&v<E-2&&n()<t.branchProb){const V=(n()<.5?-1:1)*(.45+n()*.45),$=Math.cos(V),H=Math.sin(V);l([w,b],[A*$-U*H,A*H+U*$],p*.62,f+1,h,m[m.length-1]);const Z=Math.cos(-V*.35),G=Math.sin(-V*.35);[A,U]=[A*Z-U*G,A*G+U*Z]}}const L=_.length;if(L<2)return;const Y=_.map((v,S)=>p*Math.pow(1-S/L,.75));s.push({pts:_,width:Y,arc:u,birth:m,depth:f,pig:t.pig})};return l(i,e,t.width,0,0,t.delay),s}function sm(i){let e=0,t=0;for(const _ of i)e+=_.pts.length*2,t+=(_.pts.length-1)*6;const n=new Float32Array(e*3),r=new Float32Array(e*2),s=new Float32Array(e),a=new Float32Array(e),o=new Float32Array(e),l=new Float32Array(e),c=new Float32Array(e),d=new Float32Array(e*3),p=new Uint32Array(t);let f=0,h=0;for(const _ of i){const u=_.pts.length,m=f;for(let E=0;E<u;E++){const y=_.pts[Math.max(0,E-1)],A=_.pts[Math.min(u-1,E+1)];let U=A[0]-y[0],w=A[1]-y[1];const b=Math.hypot(U,w)||1;U/=b,w/=b;for(let L=0;L<2;L++)n[f*3]=_.pts[E][0],n[f*3+1]=_.pts[E][1],n[f*3+2]=0,r[f*2]=U,r[f*2+1]=w,s[f]=L===0?-1:1,a[f]=_.width[E],o[f]=_.birth[E],l[f]=_.arc[E],c[f]=_.depth,d[f*3]=_.pig[0],d[f*3+1]=_.pig[1],d[f*3+2]=_.pig[2],f++}for(let E=0;E<u-1;E++){const y=m+E*2;p[h++]=y,p[h++]=y+1,p[h++]=y+2,p[h++]=y+1,p[h++]=y+3,p[h++]=y+2}}const g=new Kt;return g.setAttribute("position",new st(n,3)),g.setAttribute("aTan",new st(r,2)),g.setAttribute("aSide",new st(s,1)),g.setAttribute("aWidth",new st(a,1)),g.setAttribute("aBirth",new st(o,1)),g.setAttribute("aArc",new st(l,1)),g.setAttribute("aDepth",new st(c,1)),g.setAttribute("aPig",new st(d,3)),g.setIndex(new st(p,1)),g}class am extends Zp{constructor(e,t,n,r=0){const s={uStart:{value:n},uFade:{value:1},uShed:{value:.4},uLookBias:{value:r}};super(sm(t),em,tm,{...e,...s},{renderOrder:3}),this.own=s,this.polys=t}}class om{constructor(e){this.comp=e,this.shared=e.shared,this.groups={main:e.structGroup,shadow:e.shadowGroup,foot:e.footScene},this.structures=[],this.trees=[],this.folds=[],this.forest=null,this.waveIdx=0,this.lastHybridStart=1/0}addWave(e,t,n,r){this.shared.uWave.value[this.waveIdx].set(e,t,r,n),this.waveIdx=(this.waveIdx+1)%8}add(e){return e.attach(this.groups),this.structures.push(e),e}buildRupture(e,t,n,r){const s=Mo(n*1e3|0),a=e.zones.map(c=>{const d=Math.hypot(c.center[0]-t[0],c.center[1]-t[1]);return{...c,distO:d,delay:.35+d*2.4}}),o=c=>c.area*c.meanDens,l=[...a].sort((c,d)=>o(d)-o(c));this.folds=[],this.folds.push({cx:t[0],cy:t[1],angle:s()*Math.PI,amp0:.014,width:.16,halfLen:.7,delay:0,phase:s()*6,extra:0,start:n});for(const c of l.slice(0,4))this.folds.push({cx:c.center[0],cy:c.center[1],angle:c.axis+(s()<.5?0:Math.PI/2),amp0:(s()<.5?-1:1)*(.01+s()*.012),width:.1+s()*.1,halfLen:Mt(c.major*1.5+.15,.25,.8),delay:c.delay+.2,phase:s()*6,extra:0,start:n});return this.addWave(t[0],t[1],.012,n),{zones:a.length}}spawnTree(e,t,n,r,s,a,o=1){const l=Mo(Math.random()*1e9|0),c=rm(e,t,{steps:Math.round(18*o),step:.008,maxDepth:3,branchProb:.2,speed:.09,avoid:.25,wander:.45,curlScale:4,aspect:a,width:.0034*o,delay:0,seed:l()*50,pig:n},l,s);if(!c.length)return null;const p={forest:this.add(new am(this.shared,c,r,.65)),polys:c,start:r,life:45+Math.random()*15,injected:0};if(this.trees.push(p),this.trees.length>18){const f=this.trees.find(h=>h.life>r-h.start+6);f&&(f.life=r-f.start+5)}return p}get active(){return this.folds.length>0||this.structures.length>0}update(e,t,n){const{mouse:r,vel:s,speed:a,hybrid:o}=n,l=this.shared.uFold.value,c=this.shared.uFoldB.value,d=En(.02,.1,a)*(1-En(.5,1.2,a)),p=Math.hypot(s[0],s[1])||1;for(let f=0;f<6;f++){const h=this.folds[f];if(!h){l[f].set(0,0,0,0);continue}if(r){const u=Math.cos(h.angle),m=Math.sin(h.angle),E=r[0]-h.cx,y=r[1]-h.cy,A=-E*m+y*u,U=E*u+y*m,w=Math.exp(-((A/(h.width*1.5))**2))*(Math.abs(U)<h.halfLen?1:.3),b=Mt((-s[0]*m+s[1]*u)*3,-1,1)*w*d;h.extra+=(b-h.extra)*Math.min(1,e*1.2)*w,h.angle+=e*.3*w*d*((u*s[1]-m*s[0])/p)}h.extra*=Math.exp(-e*.15);const g=Zs((t-h.start-h.delay)/3),_=h.amp0*g*(1+.15*Math.sin(t*.21+h.phase))*(1+.7*h.extra)*(1-.5*o);l[f].set(h.cx,h.cy,h.angle,_),c[f].set(h.width,h.halfLen,0,0)}for(let f=this.trees.length-1;f>=0;f--){const h=this.trees[f],g=t-h.start;h.forest.own.uFade.value=1-En(h.life-6,h.life,g),h.forest.own.uShed.value=Math.exp(-g/20)}for(let f=this.structures.length-1;f>=0;f--){const h=this.structures[f];if(h.own.uFade&&h.own.uFade.value<=0){h.dispose(),this.structures.splice(f,1);const g=this.trees.findIndex(_=>_.forest===h);g>=0&&this.trees.splice(g,1)}}}clear(){for(const e of this.structures)e.dispose();this.structures=[],this.trees=[],this.folds=[],this.forest=null,this.lastHybridStart=1/0;for(const e of this.shared.uWave.value)e.set(0,0,0,0);for(const e of this.shared.uFold.value)e.set(0,0,0,0)}}class lm{constructor(e){this.exp=e,this.reset()}reset(){this.active=!1,this.origin=[0,0],this.radius=0,this.dir=[1,0],this.stretch=0,this.strokeTravel=0,this.side=1,this.ambientT=0,this.echo=[],this.echoMode=0}nextEchoMode(){this.echoMode=(this.echoMode+1)%3}record(e,t){if(!(!e||!e.segs||!e.A)){for(const n of e.segs)this.echo.push({seg:n,A:e.A.slice(),t});this.echo.length>400&&this.echo.splice(0,this.echo.length-400)}}emitEcho(e){const t=this.exp.watercolor,n=this.exp.aspect,r=1.3;for(;this.echo.length&&this.echo[0].t+r+2.5<e;)this.echo.shift();let s=Math.min(3,t.freeSegments-1);const a=Ht[(this.echoMode+1)%Ht.length].A,o=this.echoMode===0?(l,c)=>[n-l,c]:this.echoMode===1?(l,c)=>[n-l,1-c]:(l,c)=>[l,1-c];for(;s>0&&this.echo.length&&this.echo[0].t+r<=e;){const{seg:l,A:c}=this.echo.shift(),[d,p,f,h,g,_,u]=l;t.addSegment(...o(d,p),...o(f,h),g*.75,_*.8,u*.5,ui(c,a,.45),.9,Math.random()*40),s--}}begin(e,t){this.active=!0,this.origin=e.slice(),this.radius=.04,this.start=t,this.exp.digital.lastHybridStart=t}insideFront(e,t){const n=e-this.origin[0],r=t-this.origin[1],s=n*this.dir[0]+r*this.dir[1],a=-n*this.dir[1]+r*this.dir[0];return Math.hypot(s/(1+this.stretch*(s>0?1:0)),a)<this.radius-.05}update(e,t,n,r){const s=this.exp.field;if(!this.active){s.u.uHyb.value.w=0;return}const a=this.exp.transition,o=this.exp.watercolor;if(a.transitioning&&n){const f=n[0]-this.origin[0],h=n[1]-this.origin[1],g=Math.hypot(f,h);if(g>.02){const _=Math.min(1,e*1.5);this.dir[0]+=(f/g-this.dir[0])*_,this.dir[1]+=(h/g-this.dir[1])*_;const u=Math.hypot(this.dir[0],this.dir[1])||1;this.dir[0]/=u,this.dir[1]/=u,this.stretch+=(Mt(g*3,0,1.6)-this.stretch)*_}}this.radius+=e*(a.transitioning?.2:.12),s.u.uHyb.value.set(this.origin[0],this.origin[1],this.radius,1),s.u.uHybDir.value.set(this.dir[0],this.dir[1],this.stretch);const l=a.hybrid,c=this.exp.analysis,d=this.exp.aspect;if(r&&r.A&&l>.3){this.strokeTravel+=r.total;const f=r.speed;if(this.strokeTravel>.16&&f>.08&&f<1.8&&this.insideFront(r.pos[0],r.pos[1])){this.strokeTravel=0,this.side=-this.side;const h=-r.dir[1]*this.side,g=r.dir[0]*this.side,_=[r.pos[0]+h*.012,r.pos[1]+g*.012],u=ui(r.A,Ht[Math.floor(Math.random()*Ht.length)].A,.35),m=.8+Math.random()*.5;this.exp.digital.spawnTree(_,[h*.8+r.dir[0]*.2,g*.8+r.dir[1]*.2],u,t,c,d,m),this.exp.audio.bloom()}}l>.5&&(this.record(r,t),this.emitEcho(t));let p=Math.min(6,o.freeSegments-2);for(const f of this.exp.digital.trees){if(p<=0)break;const h=t-f.start;for(const g of f.polys){if(p<=0)break;for(let _=Math.max(1,g.done||1);_<g.pts.length&&!(g.birth[_]>h);_++){if(g.done=_+1,_%2)continue;const u=g.pts[_-1],m=g.pts[_];if(o.addSegment(u[0],u[1],m[0],m[1],Math.max(.003,g.width[_]*.9),.06,.05,g.pig,.9,Math.random()*40),--p<=0)break}}}if(this.ambientT+=e*(r?.3:1),l>.8&&this.ambientT>7&&c){this.ambientT=0;const f=c.zones.filter(h=>h.boundary.length);if(f.length){const h=f[Math.floor(Math.random()*f.length)],g=h.boundary[Math.floor(Math.random()*h.boundary.length)],_=ui(h.A.map(u=>u/Math.max(.3,(h.A[0]+h.A[1]+h.A[2])/3)),rn[Math.floor(Math.random()*rn.length)].A,.3);this.exp.digital.spawnTree([g[0],g[1]],[g[2],g[3]],_,t,c,d,1.1)}}}get depositAmount(){return this.active?En(.1,.8,this.exp.transition.hybrid):0}}class cm{constructor(){this.pi=Math.floor(Math.random()*rn.length),this.cur=rn[this.pi].A.slice(),this.target=this.cur.slice(),this.tmp=[0,0,0],this.digitalIdx=0,this.last=null,this.lastDir=null,this.speed=0,this.idle=10,this.travel=0,this.t=0,this.seed=Math.random()*100,this.side=1}reset(){this.last=null,this.lastDir=null,this.idle=10,this.speed=0}newStroke(e){const t=rn.length,n=(Math.random()<.6?1:2)*(Math.random()<.35?-1:1);this.pi=(this.pi+n+t)%t,ui(this.cur,rn[this.pi].A,.9,this.cur),this.target=rn[this.pi].A.slice(),e>.3&&(this.digitalIdx=(this.digitalIdx+1)%Ht.length),this.seed=Math.random()*100}update(e,t,n,r){if(this.t+=e,!t.length)return this.idle+=e,this.speed*=Math.exp(-e*8),null;if(!this.last)return this.last=t[t.length-1].slice(),null;const s=[this.last],a=Math.max(1,Math.ceil(t.length/4));for(let w=a-1;w<t.length;w+=a)s.push(t[w]);s[s.length-1]!==t[t.length-1]&&s.push(t[t.length-1]);let o=0;for(let w=1;w<s.length;w++)o+=Math.hypot(s[w][0]-s[w-1][0],s[w][1]-s[w-1][1]);const l=o/Math.max(e,.001);this.speed+=(l-this.speed)*Math.min(1,e*10);const c=s[0],d=s[s.length-1];if(this.last=d.slice(),o<1e-5)return this.idle+=e,null;this.idle>.7&&this.newStroke(n.hybrid),this.idle=0;const p=[(d[0]-c[0])/o,(d[1]-c[1])/o];let f=0;if(this.lastDir){const w=this.lastDir[0]*p[1]-this.lastDir[1]*p[0],b=this.lastDir[0]*p[0]+this.lastDir[1]*p[1];f=Math.atan2(w,b)}if(this.lastDir=p,this.travel+=o,this.travel>.9){this.travel=0;const w=rn.length;this.target=rn[(this.pi+(Math.random()<.5?1:w-1))%w].A.slice()}ui(this.cur,this.target,Math.min(1,e*.5),this.cur);const h={pos:d,dir:p,speed:this.speed,turn:f,total:o},g=n.amount;if(g<=.002)return h;let _=this.cur;if(n.hybrid>0){const w=.5+.5*Math.sin(this.t*.7+d[0]*6);_=ui(this.cur,Ht[this.digitalIdx].A,n.hybrid*(.25+.45*w),this.tmp)}h.A=_;const u=En(.06,1.5,this.speed),m=Math.min(e*60,2.5),E=zt(.0075,.03,u)*(.85+.3*nm(this.t*1.7+this.seed)),y=zt(.2,.55,u)*m,A=zt(.3,.11,u)*g*m,U=zt(.35,1,u);h.segs=[];for(let w=1;w<s.length;w++){const b=s[w-1],L=s[w],Y=Math.hypot(L[0]-b[0],L[1]-b[1])/o;if(Y<=0)continue;const v=[b[0],b[1],L[0],L[1],E,y*Math.max(Y,.35),A*Math.max(Y,.35)];r.addSegment(...v,_,U,this.seed+w*.37),h.segs.push(v)}if(Math.abs(f)>.75&&this.speed>.1&&(r.addSegment(c[0],c[1],c[0]+p[0]*E*.4,c[1]+p[1]*E*.4,E*1.35,y*.7,A*1.9,_,.8,this.seed+3.1),h.accent=!0),u>.45&&Math.random()<.55){const w=u>.8?2:1;for(let b=0;b<w;b++){const L=Math.random();this.side=-this.side;const Y=E*(1.5+Math.random()*2.4)*this.side,v=zt(c[0],d[0],L)-p[1]*Y,S=zt(c[1],d[1],L)+p[0]*Y;r.addSegment(v,S,v+p[0]*E*.7,S+p[1]*E*.7,E*(.25+Math.random()*.25),.5*m,A*.8,_,1,Math.random()*50)}}return h}}const ol=`
precision highp float;
precision highp sampler2D;
in vec2 vUv;
`,um=ol+`
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
uniform float uStrokeSpawn;
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
  if (a.w <= 0.0){
    oAgent = a;
    if (uActive < 0.5 || hash12(vUv*311.7 + t*1.37) > uSpawnRate) return;
    vec2 cand = vec2(hash12(vUv*53.1 + t), hash12(vUv*91.7 - t*0.7))*vec2(uAspect, 1.0);
    bool fromStroke = false;
    if (uStrokeCount > 0 && hash12(vUv*7.3 + t*2.1) < uStrokeSpawn){
      int k = int(floor(hash12(vUv*19.1 + t)*float(uStrokeCount)));
      cand = uStroke[k].xy + (vec2(hash12(vUv*3.7 + t), hash12(vUv*8.9 - t)) - 0.5)*0.04;
      fromStroke = true;
    }
    bool inside = length(cand - uOrigin) < uGrowR;
    if (fromStroke || (inside && (food(cand) > 0.08 || hash12(vUv*3.3 + t) < 0.04)))
      oAgent = vec4(cand, hash12(vUv + t)*6.2831853, 1.0);
    return;
  }
  vec2 p = a.xy;
  float ang = a.z;
  float sa = uSA, ra = uRA*min(uDt*60.0, 2.0);
  float sF = sense(p + vec2(cos(ang), sin(ang))*uSD);
  float sL = sense(p + vec2(cos(ang + sa), sin(ang + sa))*uSD);
  float sR = sense(p + vec2(cos(ang - sa), sin(ang - sa))*uSD);
  float rnd = hash12(vUv*131.1 + t*3.7);
  if (sF > sL && sF > sR) ang += (rnd - 0.5)*0.1;
  else if (sF < sL && sF < sR) ang += (rnd - 0.5)*2.0*ra;
  else if (sL > sR) ang += ra;
  else ang -= ra;
  vec2 F = texture(tField, toUv(p)).rg;
  p += (vec2(cos(ang), sin(ang))*uSpeed + F*0.5)*uDt;
  if (p.x < 0.003 || p.x > uAspect - 0.003){ ang = 3.14159265 - ang; p.x = clamp(p.x, 0.003, uAspect - 0.003); }
  if (p.y < 0.003 || p.y > 0.997){ ang = -ang; p.y = clamp(p.y, 0.003, 0.997); }
  float life = a.w - uDt*0.012;
  if (uActive < 0.5) life -= uDt*0.6;
  // Renovación lenta: la red nunca se congela.
  if (hash12(vUv*77.7 + t*0.91) < 0.0015) life = 0.0;
  oAgent = vec4(p, ang, life);
}
`,hm=ol+`
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
`,dm=`
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
`,fm=`
precision highp float;
in float vAlive;
out vec4 oTrail;
uniform float uDeposit;
void main(){ oTrail = vec4(uDeposit*min(vAlive*4.0, 1.0), 0.0, 0.0, 0.0); }
`;class pm{constructor(e,t,n=256){this.renderer=e,this.size=n;const r={type:t,minFilter:ft,magFilter:ft,depthBuffer:!1,generateMipmaps:!1};this.agents=[new at(n,n,r),new at(n,n,r)],this.blank=new el(new Uint8Array(4),1,1),this.blank.needsUpdate=!0,this.strokes=Array.from({length:16},()=>new Pe(0,0,0,0)),this.u={tAgent:{value:null},tTrail:{value:null},tDry:{value:null},tWet:{value:null},tField:{value:null},uAspect:{value:1},uDt:{value:.016},uTime:{value:0},uActive:{value:0},uGrowR:{value:0},uOrigin:{value:new Le},uHybrid:{value:0},uSpawnRate:{value:.03},uStrokeSpawn:{value:0},uMouse:{value:new Pe(-9,-9,0,0)},uStroke:{value:this.strokes},uStrokeCount:{value:0},uSA:{value:.62},uRA:{value:.38},uSD:{value:.011},uSpeed:{value:.085}},this.agentPass=new yn(Sn(um,this.u)),this.trailU={tTrail:{value:null},uTexel:{value:new Le},uDecay:{value:.95}},this.trailPass=new yn(Sn(hm,this.trailU));const s=n*n,a=new Kt;a.setAttribute("position",new st(new Float32Array(s*3),3)),this.depU={tAgent:{value:null},uSize:{value:n},uAspect:this.u.uAspect,uDeposit:{value:.35}};const o=new tl({glslVersion:_r,vertexShader:dm,fragmentShader:fm,uniforms:this.depU,depthTest:!1,depthWrite:!1,transparent:!0,blending:Qs,blendEquation:sn,blendSrc:on,blendDst:on,blendSrcAlpha:on,blendDstAlpha:on});this.points=new Pp(a,o),this.points.frustumCulled=!1,this.depScene=new Sr,this.depScene.add(this.points),this.depCam=new Ar(-1,1,1,-1,0,1),this.trails=null,this.reset()}resize(e){const n=Math.max(160,Math.round(640/e));this.trails?.forEach(s=>s.dispose());const r={type:Hn,minFilter:Qe,magFilter:Qe,depthBuffer:!1,generateMipmaps:!1};this.trails=[new at(640,n,r),new at(640,n,r)],this.trails.forEach(s=>Yt(this.renderer,s)),this.trailU.uTexel.value.set(1/640,1/n),this.u.uAspect.value=e}reset(){this.agents.forEach(e=>Yt(this.renderer,e)),this.trails?.forEach(e=>Yt(this.renderer,e)),this.active=!1,this.alive=0}get trail(){return this.trails[0].texture}setStrokes(e){const t=Math.min(16,e.length);for(let n=0;n<t;n++)this.strokes[n].set(e[n][0],e[n][1],0,0);this.u.uStrokeCount.value=t}update(e,t){if(!t.active&&!this.active)return;this.active=t.active||this.alive>0,this.alive=t.active?1:Math.max(0,this.alive-e*.5);const n=this.u;n.uDt.value=e,n.uTime.value=t.time,n.uActive.value=t.active?1:0,n.uGrowR.value=t.growR,n.uOrigin.value.set(t.origin[0],t.origin[1]),n.uHybrid.value=t.hybrid,n.uSpawnRate.value=t.spawnRate,n.uStrokeSpawn.value=t.strokeSpawn,n.uMouse.value.copy(t.mouse),n.tDry.value=t.dry,n.tWet.value=t.wet,n.tField.value=t.field,n.tTrail.value=this.trails[0].texture,n.tAgent.value=this.agents[0].texture,this.agentPass.render(this.renderer,this.agents[1]),this.agents.reverse(),this.trailU.tTrail.value=this.trails[0].texture,this.trailU.uDecay.value=Math.pow(.9,e*60),this.trailPass.render(this.renderer,this.trails[1]),this.depU.tAgent.value=this.agents[0].texture;const r=this.renderer;r.autoClear=!1,r.setRenderTarget(this.trails[1]),r.render(this.depScene,this.depCam),r.autoClear=!0,r.setRenderTarget(null),this.trails.reverse()}}class mm{constructor(e,t){this.renderer=e,this.type=t,this.strokes=Array.from({length:16},()=>new Pe(0,0,0,0)),this.u={tState:{value:null},tDry:{value:null},tWet:{value:null},tField:{value:null},uTexel:{value:new Le},uAspect:{value:1},uTime:{value:0},uAdvect:{value:0},uStepDt:{value:.45},uIterSec:{value:0},uActive:{value:0},uGrowR:{value:0},uOrigin:{value:new Le},uSeedRate:{value:0},uMouse:{value:new Pe(-9,-9,0,0)},uStroke:{value:this.strokes},uStrokeCount:{value:0}},this.pass=new yn(Sn(Ip,this.u)),this.rts=null,this.alive=0}resize(e){const n=Math.max(200,Math.round(720/e));this.rts?.forEach(s=>s.dispose());const r={type:this.type,minFilter:Qe,magFilter:Qe,depthBuffer:!1,generateMipmaps:!1};this.rts=[new at(720,n,r),new at(720,n,r)],this.reset(),this.u.uTexel.value.set(1/720,1/n),this.u.uAspect.value=e,this.texel=[1/720,1/n]}reset(){this.rts?.forEach(e=>Yt(this.renderer,e)),this.alive=0}get texture(){return this.rts[0].texture}setStrokes(e){const t=Math.min(16,e.length);for(let n=0;n<t;n++)this.strokes[n].set(e[n][0],e[n][1],0,0);this.u.uStrokeCount.value=t}update(e,t,n){if(this.alive=t.active?4:this.alive-e,this.alive<=0)return;const r=this.u;r.uTime.value=t.time,r.uActive.value=t.active?1:0,r.uGrowR.value=t.growR,r.uOrigin.value.set(t.origin[0],t.origin[1]),r.uSeedRate.value=t.seedRate,r.uMouse.value.copy(t.mouse),r.uAdvect.value=e/n*.8,r.uIterSec.value=e/n,r.tDry.value=t.dry,r.tWet.value=t.wet,r.tField.value=t.field;for(let s=0;s<n;s++)r.tState.value=this.rts[0].texture,this.pass.render(this.renderer,this.rts[1]),this.rts.reverse(),s===0&&(r.uStrokeCount.value=0,r.uMouse.value.w=0);this.renderer.setRenderTarget(null)}}const gm=1.1,vm=7,_m=10;class xm{constructor(){this.listeners={},this.reset()}on(e,t){var n;((n=this.listeners)[e]||(n[e]=[])).push(t)}emit(e,...t){(this.listeners[e]||[]).forEach(n=>n(...t))}reset(){this.phase=1,this.charge=0,this.holding=!1,this.holdPos=[0,0],this.rate=1,this.trans=null,this.tech=0,this.hybrid=0}get transitioning(){return!!this.trans}beginHold(e,t=0){return this.trans||this.phase===3?!1:(this.holding=!0,this.holdPos=e.slice(),this.rate=this.phase===2?Mt(1.25-t*1.4,.35,1):1,!0)}moveHold(e){this.holding&&(this.holdPos=e.slice())}endHold(){this.holding=!1}update(e,t){if(this.holding&&!this.trans){if(this.charge+=e/gm*this.rate,this.charge>=1){this.charge=1,this.holding=!1;const n=this.phase+1;this.trans={to:n,start:t,duration:n===2?vm:_m,origin:this.holdPos.slice()},this.phase=n,this.emit("trigger",n,this.holdPos.slice(),t)}}else this.charge=Math.max(0,this.charge-e*(this.trans?.6:1.4));if(this.trans){const n=Mt((t-this.trans.start)/this.trans.duration,0,1);this.trans.to===2?this.tech=Zs(n):this.hybrid=Zs(Mt(n*1.6,0,1)),n>=1&&(this.emit("complete",this.trans.to,t),this.trans=null)}this.progress=this.trans?Mt((t-this.trans.start)/this.trans.duration,0,1):1}}class Mm{constructor(e){this.onChange=e,this.tier=0,this.avg=1/60,this.slowFor=0,this.cooldown=4}sample(e){this.avg+=(e-this.avg)*.05,this.cooldown-=e,!(this.cooldown>0)&&(this.avg>1/42?this.slowFor+=e:this.slowFor=Math.max(0,this.slowFor-e),this.slowFor>2.5&&this.tier<2&&(this.tier++,this.slowFor=0,this.cooldown=5,this.onChange(this.tier)))}}const So=[{pixelRatio:2,simMax:1100,substeps:2,footEvery:2,rdIterations:4},{pixelRatio:1.5,simMax:860,substeps:2,footEvery:3,rdIterations:3},{pixelRatio:1,simMax:680,substeps:1,footEvery:4,rdIterations:3}];class Sm{constructor(e,t){this.el=e,this.input=t,this.onMove=n=>{const r=n.getCoalescedEvents?n.getCoalescedEvents():null;if(r&&r.length)for(const s of r)t.injectPointer(s.clientX,s.clientY);else t.injectPointer(n.clientX,n.clientY)},this.onDown=n=>{n.button===0&&(e.setPointerCapture?.(n.pointerId),t.injectPointer(n.clientX,n.clientY),t.injectDown(n.clientX,n.clientY))},this.onUp=n=>{n.button===0&&t.injectUp(n.clientX,n.clientY)},this.onLeave=()=>t.injectLeave(),this.onKey=n=>{if(n.repeat||n.ctrlKey||n.metaKey||n.altKey)return;const r=n.key.toLowerCase();(r==="r"||r==="h"||r==="m")&&t.injectKey(r)},this.onContext=n=>n.preventDefault(),e.addEventListener("pointermove",this.onMove),e.addEventListener("pointerdown",this.onDown),e.addEventListener("pointerup",this.onUp),e.addEventListener("pointercancel",this.onUp),e.addEventListener("pointerleave",this.onLeave),e.addEventListener("contextmenu",this.onContext),window.addEventListener("keydown",this.onKey)}dispose(){const e=this.el;e.removeEventListener("pointermove",this.onMove),e.removeEventListener("pointerdown",this.onDown),e.removeEventListener("pointerup",this.onUp),e.removeEventListener("pointercancel",this.onUp),e.removeEventListener("pointerleave",this.onLeave),e.removeEventListener("contextmenu",this.onContext),window.removeEventListener("keydown",this.onKey)}}class ym{constructor(e){this.listeners={},this.samples=[],this.pointer={x:0,y:0,inside:!1,down:!1},this.press=null,this.HOLD_BREAK_PX=14,this.TAP_MAX_S=.25,this.sources=[new Sm(e,this)]}on(e,t){var n;((n=this.listeners)[e]||(n[e]=[])).push(t)}emit(e,...t){(this.listeners[e]||[]).forEach(n=>n(...t))}addSource(e){this.sources.push(e)}injectPointer(e,t){this.pointer.x=e,this.pointer.y=t,this.pointer.inside=!0,this.samples.push([e,t]),this.press&&!this.press.broken&&Math.hypot(e-this.press.x,t-this.press.y)>this.HOLD_BREAK_PX&&(this.press.broken=!0,this.emit("hold:end",{broken:!0}))}injectLeave(){this.pointer.inside=!1}injectDown(e,t){this.pointer.down=!0,this.press={x:e,y:t,t:performance.now(),broken:!1},this.emit("hold:start",{x:e,y:t})}injectUp(e,t){this.pointer.down=!1;const n=this.press;if(this.press=null,!n)return;n.broken||this.emit("hold:end",{broken:!1});const r=(performance.now()-n.t)/1e3;!n.broken&&r<this.TAP_MAX_S&&this.emit("tap",{x:e,y:t})}injectKey(e){this.emit("key",e)}consumeSamples(){const e=this.samples;return this.samples=[],e}}const Ai=[220,246.94,261.63,329.63,392,440,493.88,523.25,659.25,783.99,880],yo=[880,932.33,1318.51,1396.91],Em=[880,987.77,1318.51,1174.66],Tm=112;class Am{constructor(){this.ctx=null,this.muted=!1,this.lastPluck=0,this.queue=[],this.step=0,this.state={tech:0,hybrid:0,agitation:0}}start(){if(this.ctx){this.ctx.resume();return}const e=window.AudioContext||window.webkitAudioContext;if(!e)return;const t=this.ctx=new e,n=t.currentTime;this.master=t.createGain(),this.master.gain.setValueAtTime(0,n),this.master.gain.linearRampToValueAtTime(this.muted?0:.9,n+3);const r=t.createDynamicsCompressor();r.threshold.value=-20,r.ratio.value=3,r.attack.value=.01,r.release.value=.3,this.master.connect(r).connect(t.destination),this.reverb=t.createConvolver(),this.reverb.buffer=this.impulse(3.6);const s=t.createGain();s.gain.value=.55,this.reverb.connect(s).connect(this.master),this.dry=t.createGain(),this.dry.connect(this.master),this.send=t.createGain(),this.send.connect(this.reverb),this.noise=this.noiseBuffer(4);const a=t.createBufferSource();a.buffer=this.noise,a.loop=!0,this.bedBP=t.createBiquadFilter(),this.bedBP.type="bandpass",this.bedBP.frequency.value=700,this.bedBP.Q.value=.9;const o=t.createBiquadFilter();o.type="lowpass",o.frequency.value=2600,this.bedGain=t.createGain(),this.bedGain.gain.value=0,a.connect(this.bedBP).connect(o).connect(this.bedGain),this.out(this.bedGain,.5,.8),a.start(),this.drones=[110,164.81,246.94].map((l,c)=>{const d=t.createOscillator();d.type=c===2?"triangle":"sine",d.frequency.value=l;const p=t.createGain();return p.gain.value=0,d.connect(p),this.out(p,.6,.7),d.start(),p}),this.pulseOsc=t.createOscillator(),this.pulseOsc.type="sawtooth",this.pulseOsc.frequency.value=55,this.pulseFilt=t.createBiquadFilter(),this.pulseFilt.type="lowpass",this.pulseFilt.Q.value=9,this.pulseFilt.frequency.value=300,this.pulseVCA=t.createGain(),this.pulseVCA.gain.value=0,this.synthBus=t.createGain(),this.synthBus.gain.value=0,this.pulseOsc.connect(this.pulseFilt).connect(this.pulseVCA).connect(this.synthBus),this.out(this.synthBus,.8,.3),this.pulseOsc.start(),this.clusterBus=t.createGain(),this.clusterBus.gain.value=0,this.out(this.clusterBus,.5,.6),this.cluster=yo.map(l=>{const c=t.createOscillator();c.type="sine",c.frequency.value=l;const d=t.createGain();return d.gain.value=.25,c.connect(d).connect(this.clusterBus),c.start(),c}),this.chargeOsc=t.createOscillator(),this.chargeOsc.type="sine",this.chargeOsc.frequency.value=160,this.chargeOsc2=t.createOscillator(),this.chargeOsc2.type="triangle",this.chargeOsc2.frequency.value=161.5,this.chargeGain=t.createGain(),this.chargeGain.gain.value=0,this.chargeOsc.connect(this.chargeGain),this.chargeOsc2.connect(this.chargeGain),this.out(this.chargeGain,.5,.9),this.chargeOsc.start(),this.chargeOsc2.start(),this.nextStep=t.currentTime+.1}out(e,t,n){const r=this.ctx.createGain();r.gain.value=t,e.connect(r).connect(this.dry);const s=this.ctx.createGain();s.gain.value=n,e.connect(s).connect(this.send)}impulse(e){const t=this.ctx,n=Math.floor(t.sampleRate*e),r=t.createBuffer(2,n,t.sampleRate);for(let s=0;s<2;s++){const a=r.getChannelData(s);for(let o=0;o<n;o++)a[o]=(Math.random()*2-1)*Math.pow(1-o/n,2.6)}return r}noiseBuffer(e){const t=this.ctx,n=Math.floor(t.sampleRate*e),r=t.createBuffer(1,n,t.sampleRate),s=r.getChannelData(0);let a=0,o=0,l=0;for(let c=0;c<n;c++){const d=Math.random()*2-1;a=.99765*a+d*.099,o=.963*o+d*.2965,l=.57*l+d*1.0526,s[c]=(a+o+l+d*.1848)*.18}return r}setMuted(e){this.muted=e,this.ctx&&(this.master.gain.cancelScheduledValues(this.ctx.currentTime),this.master.gain.setTargetAtTime(e?0:.9,this.ctx.currentTime,.3))}update(e,t){if(!this.ctx)return;this.state=t;const n=this.ctx.currentTime,{tech:r,hybrid:s,speed:a,charge:o,agitation:l}=t,c=Mt(a/1.5,0,1);this.bedGain.gain.setTargetAtTime(.05*(1-.55*r+.4*s)+c*.09,n,.15),this.bedBP.frequency.setTargetAtTime(450+1600*c+200*Math.sin(n*.13),n,.2),this.drones.forEach((f,h)=>f.gain.setTargetAtTime((.016-h*.004)*(1-.6*r+.5*s),n,.8)),this.synthBus.gain.setTargetAtTime(.55*r*(1-.35*s),n,.4),this.pulseFilt.frequency.setTargetAtTime(220+2e3*l*(1-.5*s)+300*s,n,.15),this.clusterBus.gain.setTargetAtTime(.03*r*(1-.4*s)*(.5+.5*l),n,.5),this.cluster.forEach((f,h)=>f.frequency.setTargetAtTime(zt(yo[h],Em[h],s),n,1.2)),this.chargeGain.gain.setTargetAtTime(o*.05,n,.05),this.chargeOsc.frequency.setTargetAtTime(160+o*o*420,n,.05),this.chargeOsc2.frequency.setTargetAtTime(161.5+o*o*425+o*6,n,.05);const p=60/Tm/4;for(;this.nextStep<n+.12;)this.tick(this.nextStep,this.step),this.nextStep+=p,this.step=(this.step+1)%16}tick(e,t){const{tech:n,hybrid:r,agitation:s}=this.state;if(n>.05&&t%2===0){const a=t%8===0?1:t%4===0?.6:.35,o=this.pulseVCA.gain;o.setValueAtTime(1e-4,e),o.linearRampToValueAtTime(.32*a,e+.008),o.exponentialRampToValueAtTime(1e-4,e+.12+.18*r)}if(n>.2&&Math.random()<s*.5*n*(1-.5*r)&&this.click(e),r>.3&&t%2===0&&this.queue.length){const a=this.queue.shift();this.pluck(e,a.freq,a.vel,a.pan,!0)}}click(e){const t=this.ctx,n=t.createBufferSource();n.buffer=this.noise;const r=t.createBiquadFilter();r.type="bandpass",r.frequency.value=3500+Math.random()*3e3,r.Q.value=6;const s=t.createGain();s.gain.setValueAtTime(1e-4,e),s.gain.linearRampToValueAtTime(.05,e+.002),s.gain.exponentialRampToValueAtTime(1e-4,e+.04),n.connect(r).connect(s),this.out(s,.6,.4),n.start(e,Math.random()*3,.06)}stroke({speed:e,x:t,y:n,density:r,accent:s}){if(!this.ctx)return;const a=this.ctx.currentTime,o=zt(.55,.11,Mt(e/1.4,0,1));if(!s&&a-this.lastPluck<o)return;this.lastPluck=a;const l=Mt(Math.floor(n*Ai.length),0,Ai.length-1),c=Ai[l]*(Math.random()<.15?.5:1),d=Mt(.25+e*.3+(s?.3:0),0,.9)*(.6+Math.min(r,1)*.4),p=Mt(t*2-1,-.9,.9);this.state.hybrid>.3?this.queue.length<4&&this.queue.push({freq:c,vel:d,pan:p}):this.state.tech<.5&&this.pluck(a,c,d,p,!1,r)}pluck(e,t,n,r,s,a=.3){const o=this.ctx,l=o.createOscillator();l.frequency.value=t;const c=o.createOscillator();c.frequency.value=t*(s?3.5:1);const d=o.createGain(),p=t*(s?1.8:.3+a*.8);d.gain.setValueAtTime(p,e),d.gain.exponentialRampToValueAtTime(p*.05+.01,e+(s?1.4:.8)),c.connect(d).connect(l.frequency);const f=o.createGain();f.gain.setValueAtTime(1e-4,e),f.gain.linearRampToValueAtTime(.06*n,e+(s?.004:.02)),f.gain.exponentialRampToValueAtTime(1e-4,e+(s?2.6:2));const h=o.createStereoPanner();h.pan.value=r,l.connect(f).connect(h),this.out(h,.45,.9),l.start(e),c.start(e),l.stop(e+2.8),c.stop(e+2.8)}wave(e=1){if(!this.ctx)return;const t=this.ctx,n=t.currentTime,r=t.createOscillator();r.type="sine",r.frequency.setValueAtTime(190,n),r.frequency.exponentialRampToValueAtTime(45,n+.7);const s=t.createGain();s.gain.setValueAtTime(1e-4,n),s.gain.linearRampToValueAtTime(.12*e,n+.02),s.gain.exponentialRampToValueAtTime(1e-4,n+.9),r.connect(s),this.out(s,.8,.4),r.start(n),r.stop(n+1),this.whoosh(n,.6,1800,300,.05*e)}whoosh(e,t,n,r,s){const a=this.ctx,o=a.createBufferSource();o.buffer=this.noise;const l=a.createBiquadFilter();l.type="bandpass",l.Q.value=2,l.frequency.setValueAtTime(n,e),l.frequency.exponentialRampToValueAtTime(r,e+t);const c=a.createGain();c.gain.setValueAtTime(1e-4,e),c.gain.linearRampToValueAtTime(s,e+t*.3),c.gain.exponentialRampToValueAtTime(1e-4,e+t),o.connect(l).connect(c),this.out(c,.4,.9),o.start(e,Math.random()*2,t+.1)}drop(){if(!this.ctx)return;const e=this.ctx,t=e.currentTime,n=e.createOscillator();n.type="sine",n.frequency.setValueAtTime(1300,t),n.frequency.exponentialRampToValueAtTime(520,t+.18);const r=e.createGain();r.gain.setValueAtTime(1e-4,t),r.gain.linearRampToValueAtTime(.05,t+.005),r.gain.exponentialRampToValueAtTime(1e-4,t+.5),n.connect(r),this.out(r,.3,1),n.start(t),n.stop(t+.6)}bloom(){if(!this.ctx)return;const e=Ai[Math.floor(Math.random()*Ai.length)]*2;this.queue.length<4&&this.queue.push({freq:e,vel:.35,pan:Math.random()*1.2-.6})}paletteShift(){if(!this.ctx)return;const e=this.ctx,t=e.currentTime,n=[220,246.94,261.63,196][Math.floor(Math.random()*4)];[1,1.5,2,2.25,3].forEach((r,s)=>{const a=e.createOscillator();a.type=s%2?"triangle":"sine",a.frequency.value=n*r;const o=e.createGain();o.gain.setValueAtTime(1e-4,t+s*.18),o.gain.linearRampToValueAtTime(.03,t+1.2+s*.25),o.gain.exponentialRampToValueAtTime(1e-4,t+7);const l=e.createStereoPanner();l.pan.value=s/4*1.4-.7,a.connect(o).connect(l),this.out(l,.3,1),a.start(t),a.stop(t+7.5)}),this.whoosh(t,4,250,3e3,.04)}phaseStart(e){if(!this.ctx)return;const t=this.ctx,n=t.currentTime;if(e===2){const r=t.createOscillator();r.type="sine",r.frequency.setValueAtTime(70,n),r.frequency.exponentialRampToValueAtTime(32,n+3);const s=t.createGain();s.gain.setValueAtTime(1e-4,n),s.gain.linearRampToValueAtTime(.25,n+.05),s.gain.exponentialRampToValueAtTime(1e-4,n+4),r.connect(s),this.out(s,.9,.5),r.start(n),r.stop(n+4.2),this.whoosh(n,5,300,4200,.06)}else e===3?[220,329.63,493.88,659.25,987.77].forEach((r,s)=>{const a=t.createOscillator();a.type=s%2?"triangle":"sine",a.frequency.value=r;const o=t.createGain();o.gain.setValueAtTime(1e-4,n),o.gain.linearRampToValueAtTime(.035,n+2.5+s*.4),o.gain.exponentialRampToValueAtTime(1e-4,n+9),a.connect(o),this.out(o,.3,1),a.start(n),a.stop(n+9.5)}):e===1&&(this.queue=[])}}const bm="No tenemos que destruir lo que fuimos para descubrir lo que podemos llegar a ser.";class wm{constructor(e,t){this.canvas=e,this.overlay=t,this.composition=new Bp(e);const n=this.composition.renderer,r=n.extensions,s=r.has("EXT_color_buffer_float")&&r.has("OES_texture_float_linear");this.floatType=s?qt:Hn,this.watercolor=new qp(n,this.floatType),this.field=new Yp(n,this.floatType),this.analyzer=new Kp(n),this.digital=new om(this.composition),this.hybrid=new lm(this),this.transition=new xm,this.input=new ym(e),this.audio=new Am,this.brush=new cm,this.physarum=new pm(n,this.floatType),this.reaction=new mm(n,this.floatType),this.palette=this.composition.palette,this.perf=new Mm(()=>this.resize()),this.started=!1,this.time=0,this.frame=0,this.last=performance.now(),this.analysis=null,this.analysisTime=-99,this.pointerQ=[0,0],this.ndc=[0,0],this.mouse={vel:[0,0],speed:0,agitation:0,lastWave:-9,idle:0},this.ambientT=0,this.resetArmed=-99,this.strokePts=[],this.strokeTravel=0,this.coverageT=0,this.lastShift=-99,this.rupture={origin:[0,0],start:0},this.agentMouse=new Pe(-9,-9,0,0),this.wireEvents(),this.resize();let a=0;window.addEventListener("resize",()=>{clearTimeout(a),a=setTimeout(()=>this.resize(),150)}),this.loop=this.loop.bind(this),requestAnimationFrame(this.loop)}begin(){this.started||(this.started=!0,this.audio.start(),this.overlay.hideIntro(),this.overlay.setPhase(1),this.brush.reset())}toggleMute(){this.audio.setMuted(!this.audio.muted),this.overlay.setSound(!this.audio.muted)}wireEvents(){const e=this.input,t=this.transition;e.on("hold:start",({x:n,y:r})=>{if(!this.started)return;const s=this.composition.screenToQ(n,r,[0,0]);if(!s)return;let a=0;t.phase===2&&(this.refreshAnalysis(),a=this.analysis.densAt(s[0],s[1])),t.beginHold(s,a)}),e.on("hold:end",()=>t.endHold()),e.on("tap",({x:n,y:r})=>{if(!this.started)return;const s=this.composition.screenToQ(n,r,[0,0]);s&&this.handleTap(s)}),e.on("key",n=>{n==="h"?this.overlay.toggleHints():n==="m"?this.toggleMute():n==="r"&&this.started&&(this.time-this.resetArmed<3?this.reset():(this.resetArmed=this.time,this.overlay.toast("pulsa R otra vez para reiniciar",3e3)))}),t.on("trigger",(n,r,s)=>{n===2?(this.refreshAnalysis(),this.digital.buildRupture(this.analysis,r,s,this.aspect),this.rupture={origin:r.slice(),start:s},this.audio.phaseStart(2),this.overlay.setPhase(2)):n===3&&(this.hybrid.begin(r,s),this.digital.addWave(r[0],r[1],.006,s),this.audio.phaseStart(3),this.overlay.setPhase(3),setTimeout(()=>this.overlay.toast(bm,8e3,"quote"),3500))})}refreshAnalysis(){this.analysis=this.analyzer.analyze(this.watercolor.wet,this.watercolor.dry,this.aspect),this.analysisTime=this.time}handleTap(e){this.transition.phase===1?(this.watercolor.addDrop(e[0],e[1],.035,.55),this.audio.drop()):(this.digital.addWave(e[0],e[1],.008,this.time),this.field.addVortex(e[0],e[1],(Math.random()<.5?-1:1)*.08,.06),this.audio.wave(.8))}reset(){this.watercolor.clear(),this.field.clear(),this.digital.clear(),this.hybrid.reset(),this.physarum.reset(),this.reaction.reset(),this.palette.reset(),this.strokePts=[],this.transition.reset(),this.brush.reset(),this.analysis=null,this.resetArmed=-99,this.audio.phaseStart(1),this.overlay.setPhase(1),this.overlay.toast("lienzo nuevo",1800)}resize(){const e=Math.max(1,window.innerWidth),t=Math.max(1,window.innerHeight),n=So[this.perf.tier],r=Math.min(window.devicePixelRatio||1,n.pixelRatio),s=this.composition.resize(e,t,r);this.aspect=s;const a=s>=1?n.simMax:Math.round(n.simMax*s),o=s>=1?Math.round(n.simMax/s):n.simMax,l=Math.min(2560,Math.round(e*r));this.watercolor.resize(s,a,o,l),this.composition.setPaper(this.watercolor.paper,l,Math.round(l/s)),this.field.resize(s),this.physarum.resize(s),this.reaction.resize(s),this.composition.shared.uRDTexel.value.fromArray(this.reaction.texel),this.footRT?.dispose(),this.footRT=new at(Math.round(a/2),Math.round(o/2),{type:this.floatType,minFilter:Qe,magFilter:Qe,depthBuffer:!1,generateMipmaps:!1})}ambient(e,t){const n=this.transition;if(!this.started||n.phase!==1||this.mouse.idle<6){this.ambientT=0;return}if(this.ambientT+=e,this.ambientT<11)return;this.ambientT=0,this.refreshAnalysis();const r=this.analysis.zones.filter(o=>o.boundary.length);if(!r.length)return;const s=r[Math.floor(Math.random()*r.length)],a=s.boundary[Math.floor(Math.random()*s.boundary.length)];this.watercolor.addDrop(a[0]-a[2]*.01,a[1]-a[3]*.01,.028,.3)}updateStrokeTrail(e,t,n){const r=this.strokePts;for(t&&n>=2&&(this.strokeTravel+=t.total,(!r.length||this.strokeTravel>.025)&&(this.strokeTravel=0,r.push([t.pos[0],t.pos[1],this.time]),r.length>16&&r.shift()));r.length&&this.time-r[0][2]>2.5;)r.shift();this.physarum.setStrokes(r),this.reaction.setStrokes(r)}loop(e){requestAnimationFrame(this.loop);const t=Math.min(.05,Math.max(.001,(e-this.last)/1e3));this.last=e,this.time+=t;const n=this.time;this.perf.sample(t);const r=this.composition,s=r.shared,a=this.transition,o=this.watercolor,l=So[this.perf.tier],c=[];for(const v of this.input.consumeSamples()){const S=r.screenToQ(v[0],v[1],[0,0]);S&&c.push(S)}const d=this.input.pointer,p=d.inside?r.screenToQ(d.x,d.y,this.pointerQ):null;this.ndc[0]=d.x/r.width*2-1,this.ndc[1]=-(d.y/r.height)*2+1,a.holding&&p&&a.moveHold(p),a.update(t,n);const{tech:f,hybrid:h,phase:g}=a;let _=null;if(this.started){const v=g===1?1:g===2?Math.max(0,1-f*2.5):h;_=this.brush.update(t,c,{amount:v,hybrid:g===3?h:0},o)}const u=this.mouse;if(_){const v=Math.min(1,t*8);u.vel[0]+=(_.dir[0]*_.speed-u.vel[0])*v,u.vel[1]+=(_.dir[1]*_.speed-u.vel[1])*v,u.idle=0}else{const v=Math.exp(-t*4);u.vel[0]*=v,u.vel[1]*=v,u.idle+=t}u.speed=this.brush.speed;const m=En(.05,1.2,u.speed);if(u.agitation+=(m-u.agitation)*Math.min(1,t*(m>u.agitation?4:.6)),_&&g>=2){const[v,S]=_.pos;_.speed>1.1&&n-u.lastWave>.4&&(this.digital.addWave(v,S,.004+.003*Math.min(_.speed-1.1,2),n),this.audio.wave(.35+.25*Math.min(_.speed-1.1,1.5)),u.lastWave=n),Math.abs(_.turn)>.6&&_.speed>.2&&this.field.addVortex(v,S,Math.sign(_.turn)*.05*Math.min(_.speed,2),.07)}if(_&&this.started){const v=this.analysis?this.analysis.densAt(_.pos[0],_.pos[1]):.3;this.audio.stroke({speed:_.speed,x:_.pos[0]/this.aspect,y:_.pos[1],density:v,accent:_.accent})}const E=Math.pow(a.charge,1.4);s.uTime.value=n,s.uTech.value=f,s.uHybrid.value=h,s.uAgitation.value=u.agitation,s.uCharge.value.set(a.holdPos[0],a.holdPos[1],E,0);const y=this.field.u;y.uTime.value=n,y.uTech.value=f,y.uHybrid.value=h,y.uMouse.value.set(p?p[0]:-9,p?p[1]:-9,u.vel[0],u.vel[1]),y.uMouseGain.value=g===2?1:g===3?.5:0,y.uCharge.value.copy(s.uCharge.value),g===3&&n-this.analysisTime>10&&this.refreshAnalysis(),this.hybrid.update(t,n,p,_),this.field.step(t,o.wet,o.dry),this.digital.active&&this.digital.update(t,n,{mouse:p,vel:u.vel,speed:u.speed,hybrid:h}),this.ambient(t,n),this.updateStrokeTrail(t,_,g);const A=g>=2,U=!p||u.idle>.4?0:u.speed>.9?-1:u.speed>.02?1:0;this.agentMouse.set(p?p[0]:-9,p?p[1]:-9,u.speed,U);const w=A?(n-this.rupture.start)*.28:0,b={time:n,active:A,growR:w,origin:this.rupture.origin,hybrid:h,mouse:this.agentMouse,wet:o.wet,dry:o.dry,field:this.field.texture};if(this.physarum.update(t,{...b,spawnRate:.04,strokeSpawn:g===3&&_?.12:0}),this.reaction.update(t,{...b,seedRate:g===3?.001:.003},l.rdIterations),s.tRD.value=this.reaction.alive>0?this.reaction.texture:null,s.uRDVis.value=En(.2,1,f)*(1-.35*h),s.uNetGlow.value=En(.1,.8,f),s.uRelief.value=f*.034*(1-.65*h),s.tTrail.value=this.physarum.trails?this.physarum.trail:null,this.palette.update(t,this.aspect),g===3&&h>.95&&(this.coverageT+=t,this.coverageT>2.5&&!this.palette.transitioning&&n-this.lastShift>14&&(this.coverageT=0,this.refreshAnalysis(),this.analysis.coverage()>.42))){const v=this.strokePts.length?this.strokePts[this.strokePts.length-1]:[this.aspect/2,.5];this.palette.shift(v),this.hybrid.nextEchoMode(),this.lastShift=n,this.audio.paletteShift()}s.tWet.value=o.wet,s.tDry.value=o.dry,s.tField.value=this.field.texture;let L=null,Y=0;this.hybrid.active&&this.frame%l.footEvery===0&&(r.renderFootprint(this.footRT),L=this.footRT.texture,Y=this.hybrid.depositAmount*l.footEvery*Math.min(t*60,2)),o.step(t,this.field.texture,L,{advect:h*.22,aniso:h*.6,depositAmt:Y,dryAdvect:f*.4*(1-.7*h),trail:this.physarum.trails?this.physarum.trail:null,netDeposit:h,netA:this.palette.current.ink,rd:null,rdDeposit:0,dissolve:this.palette.transitioning?this.palette.dissolve:null},l.substeps),s.tWet.value=o.wet,s.tDry.value=o.dry,r.updateCamera(t,n,Math.max(f,h),d.inside?this.ndc:null),r.render(),this.overlay.moveCursor(d.x,d.y,a.charge,d.inside&&this.started),this.audio.update(t,{tech:f,hybrid:h,speed:u.speed,charge:a.charge,agitation:u.agitation}),this.frame++}}const Rm={1:["mueve el cursor para pintar","despacio concentra · rápido dispersa · clic breve: agua","mantén pulsado para abrir la ruptura"],2:["despacio: siembras vetas y atraes la red · rápido: las disuelves","remueve el cuadro como tinta en agua · clic breve: perturbación","mantén pulsado en una zona libre para el encuentro"],3:["pinta: vetas, red y un eco en canon responden a tu trazo","mientras se abre, guía la expansión con el cursor","cuando el lienzo se llene, cambiará de color"]};class Cm{constructor(){this.intro=document.getElementById("intro"),this.hint=document.getElementById("hint"),this.toastEl=document.getElementById("toast"),this.soundBtn=document.getElementById("sound"),this.cursor=document.getElementById("cursor"),this.hintsOn=!0,this.hintTimer=0,this.toastTimer=0}hideIntro(){this.intro.classList.add("gone")}setPhase(e){this.hint.innerHTML=Rm[e].map(t=>`<span>${t}</span>`).join(""),this.showHints(10)}showHints(e){this.hintsOn&&(this.hint.classList.add("on"),clearTimeout(this.hintTimer),this.hintTimer=setTimeout(()=>this.hint.classList.remove("on"),e*1e3))}toggleHints(){this.hintsOn=!this.hintsOn,clearTimeout(this.hintTimer),this.hint.classList.toggle("on",this.hintsOn)}toast(e,t=3e3,n=""){this.toastEl.textContent=e,this.toastEl.className="on "+n,clearTimeout(this.toastTimer),this.toastTimer=setTimeout(()=>this.toastEl.className=n,t)}setSound(e){this.soundBtn.textContent=e?"sonido · sí":"sonido · no"}moveCursor(e,t,n,r){const s=this.cursor;s.style.transform=`translate(${e}px, ${t}px) scale(${1-n*.55})`,s.style.opacity=r?String(.55+n*.45):"0",s.style.setProperty("--charge",n.toFixed(3))}}const Pm=document.getElementById("stage"),Dm=new Cm;try{const i=new wm(Pm,Dm),e=document.getElementById("intro"),t=()=>i.begin();e.addEventListener("click",t),e.addEventListener("keydown",n=>{(n.key==="Enter"||n.key===" ")&&t()}),document.getElementById("sound").addEventListener("click",()=>i.toggleMute())}catch(i){console.error(i);const e=document.getElementById("fatal");e.textContent="Esta obra necesita WebGL2 con texturas de coma flotante. Prueba con un navegador de escritorio actualizado.",e.classList.add("on")}
