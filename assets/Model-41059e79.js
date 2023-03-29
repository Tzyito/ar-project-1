import{d as ke,g as Re,o as Ie,c as _e,h as X,i as ve,v as Ce}from"./index-822441dd.js";import{E as Ye,V as T,M as j,T as k,Q as ue,S as he,a as m,b as He,P as ze,c as Ke,A as Ue,d as Ze,D as Fe,e as Xe,f as We,g as Ve,h as qe,i as pe,j as Be,W as Ge,C as Qe}from"./three.module-5a70fd9f.js";const me={type:"change"},F={type:"start"},fe={type:"end"};class Je extends Ye{constructor(P,l){super(),this.object=P,this.domElement=l,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new T,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:j.ROTATE,MIDDLE:j.DOLLY,RIGHT:j.PAN},this.touches={ONE:k.ROTATE,TWO:k.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return s.phi},this.getAzimuthalAngle=function(){return s.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(t){t.addEventListener("keydown",se),this._domElementKeyEvents=t},this.saveState=function(){e.target0.copy(e.target),e.position0.copy(e.object.position),e.zoom0=e.object.zoom},this.reset=function(){e.target.copy(e.target0),e.object.position.copy(e.position0),e.object.zoom=e.zoom0,e.object.updateProjectionMatrix(),e.dispatchEvent(me),e.update(),i=o.NONE},this.update=function(){const t=new T,n=new ue().setFromUnitVectors(P.up,new T(0,1,0)),r=n.clone().invert(),c=new T,h=new ue,N=2*Math.PI;return function(){const de=e.object.position;t.copy(de).sub(e.target),t.applyQuaternion(n),s.setFromVector3(t),e.autoRotate&&i===o.NONE&&I(be()),e.enableDamping?(s.theta+=u.theta*e.dampingFactor,s.phi+=u.phi*e.dampingFactor):(s.theta+=u.theta,s.phi+=u.phi);let E=e.minAzimuthAngle,w=e.maxAzimuthAngle;return isFinite(E)&&isFinite(w)&&(E<-Math.PI?E+=N:E>Math.PI&&(E-=N),w<-Math.PI?w+=N:w>Math.PI&&(w-=N),E<=w?s.theta=Math.max(E,Math.min(w,s.theta)):s.theta=s.theta>(E+w)/2?Math.max(E,s.theta):Math.min(w,s.theta)),s.phi=Math.max(e.minPolarAngle,Math.min(e.maxPolarAngle,s.phi)),s.makeSafe(),s.radius*=A,s.radius=Math.max(e.minDistance,Math.min(e.maxDistance,s.radius)),e.enableDamping===!0?e.target.addScaledVector(O,e.dampingFactor):e.target.add(O),t.setFromSpherical(s),t.applyQuaternion(r),de.copy(e.target).add(t),e.object.lookAt(e.target),e.enableDamping===!0?(u.theta*=1-e.dampingFactor,u.phi*=1-e.dampingFactor,O.multiplyScalar(1-e.dampingFactor)):(u.set(0,0,0),O.set(0,0,0)),A=1,D||c.distanceToSquared(e.object.position)>_||8*(1-h.dot(e.object.quaternion))>_?(e.dispatchEvent(me),c.copy(e.object.position),h.copy(e.object.quaternion),D=!1,!0):!1}}(),this.dispose=function(){e.domElement.removeEventListener("contextmenu",re),e.domElement.removeEventListener("pointerdown",oe),e.domElement.removeEventListener("pointercancel",ae),e.domElement.removeEventListener("wheel",ie),e.domElement.removeEventListener("pointermove",K),e.domElement.removeEventListener("pointerup",U),e._domElementKeyEvents!==null&&e._domElementKeyEvents.removeEventListener("keydown",se)};const e=this,o={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let i=o.NONE;const _=1e-6,s=new he,u=new he;let A=1;const O=new T;let D=!1;const f=new m,p=new m,b=new m,d=new m,g=new m,y=new m,L=new m,S=new m,R=new m,a=[],v={};function be(){return 2*Math.PI/60/60*e.autoRotateSpeed}function C(){return Math.pow(.95,e.zoomSpeed)}function I(t){u.theta-=t}function Y(t){u.phi-=t}const W=function(){const t=new T;return function(r,c){t.setFromMatrixColumn(c,0),t.multiplyScalar(-r),O.add(t)}}(),V=function(){const t=new T;return function(r,c){e.screenSpacePanning===!0?t.setFromMatrixColumn(c,1):(t.setFromMatrixColumn(c,0),t.crossVectors(e.object.up,t)),t.multiplyScalar(r),O.add(t)}}(),x=function(){const t=new T;return function(r,c){const h=e.domElement;if(e.object.isPerspectiveCamera){const N=e.object.position;t.copy(N).sub(e.target);let H=t.length();H*=Math.tan(e.object.fov/2*Math.PI/180),W(2*r*H/h.clientHeight,e.object.matrix),V(2*c*H/h.clientHeight,e.object.matrix)}else e.object.isOrthographicCamera?(W(r*(e.object.right-e.object.left)/e.object.zoom/h.clientWidth,e.object.matrix),V(c*(e.object.top-e.object.bottom)/e.object.zoom/h.clientHeight,e.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),e.enablePan=!1)}}();function z(t){e.object.isPerspectiveCamera?A/=t:e.object.isOrthographicCamera?(e.object.zoom=Math.max(e.minZoom,Math.min(e.maxZoom,e.object.zoom*t)),e.object.updateProjectionMatrix(),D=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),e.enableZoom=!1)}function q(t){e.object.isPerspectiveCamera?A*=t:e.object.isOrthographicCamera?(e.object.zoom=Math.max(e.minZoom,Math.min(e.maxZoom,e.object.zoom/t)),e.object.updateProjectionMatrix(),D=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),e.enableZoom=!1)}function B(t){f.set(t.clientX,t.clientY)}function ge(t){L.set(t.clientX,t.clientY)}function G(t){d.set(t.clientX,t.clientY)}function ye(t){p.set(t.clientX,t.clientY),b.subVectors(p,f).multiplyScalar(e.rotateSpeed);const n=e.domElement;I(2*Math.PI*b.x/n.clientHeight),Y(2*Math.PI*b.y/n.clientHeight),f.copy(p),e.update()}function Ee(t){S.set(t.clientX,t.clientY),R.subVectors(S,L),R.y>0?z(C()):R.y<0&&q(C()),L.copy(S),e.update()}function we(t){g.set(t.clientX,t.clientY),y.subVectors(g,d).multiplyScalar(e.panSpeed),x(y.x,y.y),d.copy(g),e.update()}function Pe(t){t.deltaY<0?q(C()):t.deltaY>0&&z(C()),e.update()}function Oe(t){let n=!1;switch(t.code){case e.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?Y(2*Math.PI*e.rotateSpeed/e.domElement.clientHeight):x(0,e.keyPanSpeed),n=!0;break;case e.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?Y(-2*Math.PI*e.rotateSpeed/e.domElement.clientHeight):x(0,-e.keyPanSpeed),n=!0;break;case e.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?I(2*Math.PI*e.rotateSpeed/e.domElement.clientHeight):x(e.keyPanSpeed,0),n=!0;break;case e.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?I(-2*Math.PI*e.rotateSpeed/e.domElement.clientHeight):x(-e.keyPanSpeed,0),n=!0;break}n&&(t.preventDefault(),e.update())}function Q(){if(a.length===1)f.set(a[0].pageX,a[0].pageY);else{const t=.5*(a[0].pageX+a[1].pageX),n=.5*(a[0].pageY+a[1].pageY);f.set(t,n)}}function J(){if(a.length===1)d.set(a[0].pageX,a[0].pageY);else{const t=.5*(a[0].pageX+a[1].pageX),n=.5*(a[0].pageY+a[1].pageY);d.set(t,n)}}function $(){const t=a[0].pageX-a[1].pageX,n=a[0].pageY-a[1].pageY,r=Math.sqrt(t*t+n*n);L.set(0,r)}function Te(){e.enableZoom&&$(),e.enablePan&&J()}function Me(){e.enableZoom&&$(),e.enableRotate&&Q()}function ee(t){if(a.length==1)p.set(t.pageX,t.pageY);else{const r=Z(t),c=.5*(t.pageX+r.x),h=.5*(t.pageY+r.y);p.set(c,h)}b.subVectors(p,f).multiplyScalar(e.rotateSpeed);const n=e.domElement;I(2*Math.PI*b.x/n.clientHeight),Y(2*Math.PI*b.y/n.clientHeight),f.copy(p)}function te(t){if(a.length===1)g.set(t.pageX,t.pageY);else{const n=Z(t),r=.5*(t.pageX+n.x),c=.5*(t.pageY+n.y);g.set(r,c)}y.subVectors(g,d).multiplyScalar(e.panSpeed),x(y.x,y.y),d.copy(g)}function ne(t){const n=Z(t),r=t.pageX-n.x,c=t.pageY-n.y,h=Math.sqrt(r*r+c*c);S.set(0,h),R.set(0,Math.pow(S.y/L.y,e.zoomSpeed)),z(R.y),L.copy(S)}function Ae(t){e.enableZoom&&ne(t),e.enablePan&&te(t)}function De(t){e.enableZoom&&ne(t),e.enableRotate&&ee(t)}function oe(t){e.enabled!==!1&&(a.length===0&&(e.domElement.setPointerCapture(t.pointerId),e.domElement.addEventListener("pointermove",K),e.domElement.addEventListener("pointerup",U)),je(t),t.pointerType==="touch"?xe(t):Le(t))}function K(t){e.enabled!==!1&&(t.pointerType==="touch"?Ne(t):Se(t))}function U(t){ce(t),a.length===0&&(e.domElement.releasePointerCapture(t.pointerId),e.domElement.removeEventListener("pointermove",K),e.domElement.removeEventListener("pointerup",U)),e.dispatchEvent(fe),i=o.NONE}function ae(t){ce(t)}function Le(t){let n;switch(t.button){case 0:n=e.mouseButtons.LEFT;break;case 1:n=e.mouseButtons.MIDDLE;break;case 2:n=e.mouseButtons.RIGHT;break;default:n=-1}switch(n){case j.DOLLY:if(e.enableZoom===!1)return;ge(t),i=o.DOLLY;break;case j.ROTATE:if(t.ctrlKey||t.metaKey||t.shiftKey){if(e.enablePan===!1)return;G(t),i=o.PAN}else{if(e.enableRotate===!1)return;B(t),i=o.ROTATE}break;case j.PAN:if(t.ctrlKey||t.metaKey||t.shiftKey){if(e.enableRotate===!1)return;B(t),i=o.ROTATE}else{if(e.enablePan===!1)return;G(t),i=o.PAN}break;default:i=o.NONE}i!==o.NONE&&e.dispatchEvent(F)}function Se(t){switch(i){case o.ROTATE:if(e.enableRotate===!1)return;ye(t);break;case o.DOLLY:if(e.enableZoom===!1)return;Ee(t);break;case o.PAN:if(e.enablePan===!1)return;we(t);break}}function ie(t){e.enabled===!1||e.enableZoom===!1||i!==o.NONE||(t.preventDefault(),e.dispatchEvent(F),Pe(t),e.dispatchEvent(fe))}function se(t){e.enabled===!1||e.enablePan===!1||Oe(t)}function xe(t){switch(le(t),a.length){case 1:switch(e.touches.ONE){case k.ROTATE:if(e.enableRotate===!1)return;Q(),i=o.TOUCH_ROTATE;break;case k.PAN:if(e.enablePan===!1)return;J(),i=o.TOUCH_PAN;break;default:i=o.NONE}break;case 2:switch(e.touches.TWO){case k.DOLLY_PAN:if(e.enableZoom===!1&&e.enablePan===!1)return;Te(),i=o.TOUCH_DOLLY_PAN;break;case k.DOLLY_ROTATE:if(e.enableZoom===!1&&e.enableRotate===!1)return;Me(),i=o.TOUCH_DOLLY_ROTATE;break;default:i=o.NONE}break;default:i=o.NONE}i!==o.NONE&&e.dispatchEvent(F)}function Ne(t){switch(le(t),i){case o.TOUCH_ROTATE:if(e.enableRotate===!1)return;ee(t),e.update();break;case o.TOUCH_PAN:if(e.enablePan===!1)return;te(t),e.update();break;case o.TOUCH_DOLLY_PAN:if(e.enableZoom===!1&&e.enablePan===!1)return;Ae(t),e.update();break;case o.TOUCH_DOLLY_ROTATE:if(e.enableZoom===!1&&e.enableRotate===!1)return;De(t),e.update();break;default:i=o.NONE}}function re(t){e.enabled!==!1&&t.preventDefault()}function je(t){a.push(t)}function ce(t){delete v[t.pointerId];for(let n=0;n<a.length;n++)if(a[n].pointerId==t.pointerId){a.splice(n,1);return}}function le(t){let n=v[t.pointerId];n===void 0&&(n=new m,v[t.pointerId]=n),n.set(t.pageX,t.pageY)}function Z(t){const n=t.pointerId===a[0].pointerId?a[1]:a[0];return v[n.pointerId]}e.domElement.addEventListener("contextmenu",re),e.domElement.addEventListener("pointerdown",oe),e.domElement.addEventListener("pointercancel",ae),e.domElement.addEventListener("wheel",ie,{passive:!1}),this.update()}}const $e=async()=>{let M;const P=new Qe,l=new He,e=new ze(75,window.innerWidth/window.innerHeight,.1,5e3);e.position.set(100,100,100),document.querySelector("#container");const o=document.querySelector("#box");document.createElement("video");const i=document.querySelector("video");console.log("开始初始化摄像头"),await et(i),console.log("获取摄像头数据完成,开始播放");const _=new Ke(i);l.background=_;const s=new Ue(5e4);l.add(s);const u=new Ze(16777215);l.add(u);const A=new Fe(16777215,1);A.position.set(5,0,10).normalize(),l.add(A);const O=new Xe(108,71),D=new We(100,30,30),f=new Ve({color:"blue",side:qe}),p=new pe(O,f),b=new pe(D,new Be({color:"red"}));p.position.set(100,0,400),b.position.set(0,0,0),l.add(p),l.add(b);const d=new Ge({alpha:!0});d.setSize(window.innerWidth,window.innerHeight),o==null||o.appendChild(d.domElement),M=new Je(e,d.domElement),window.addEventListener("resize",g);function g(){e.aspect=window.innerWidth/window.innerHeight,e.updateProjectionMatrix(),d.setSize(window.innerWidth,window.innerHeight)}function y(){requestAnimationFrame(y),M.update(P.getDelta()),d.render(l,e)}y()},et=M=>new Promise(async(P,l)=>{console.log("开始打开摄像头");const e=await navigator.mediaDevices.getUserMedia({video:{width:500,height:400,facingMode:"environment"}});if(e)if(!M)l(new Error("not find el"));else{let o=M;o.srcObject=e,console.log(o.srcObject),o.play(),console.log("开始播放"),P(1)}else alert("摄像头开启失败")}),tt={id:"container"},nt={width:"500",height:"400",muted:"",playsinline:"",controls:!1,"webkit-playsinline":"","x5-video-player-type":"",autoplay:""},ot=X("div",{id:"box"},null,-1),st=ke({__name:"Model",setup(M){Re(async()=>{await $e()});const P=function(){window.DeviceOrientationEvent&&window.DeviceOrientationEvent.requestPermission&&window.DeviceOrientationEvent.requestPermission().then(l=>{l==="granted"?(window.addEventListener("orientationchange",function(e){console.log("牛逼orientationchange",e)},!1),window.addEventListener("deviceorientation",function(e){console.log("deviceorientation",e)},!1)):l==="denied"&&console.warn("用户拒绝授权。")})};return(l,e)=>(Ie(),_e("div",tt,[X("div",{onClick:P},"点击"),ve(X("video",nt,null,512),[[Ce,!1]]),ot]))}});export{st as default};