import{d as xe,g as ke,o as Ne,c as Ce,h as q,i as Ie,v as _e}from"./index-76b1212c.js";import{E as Ye,V as A,M as k,T as N,Q as z,S as he,a as T,b as He,c as ze,P as Ke,d as Ue,A as Ze,e as Fe,D as Xe,f as qe,g as We,h as Ve,i as Be,j as fe,k as Ge,W as Qe,C as Je}from"./three.module-135d146a.js";const me={type:"change"},X={type:"start"},pe={type:"end"};class $e extends Ye{constructor(c,l){super(),this.object=c,this.domElement=l,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new A,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:k.ROTATE,MIDDLE:k.DOLLY,RIGHT:k.PAN},this.touches={ONE:N.ROTATE,TWO:N.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return i.phi},this.getAzimuthalAngle=function(){return i.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(t){t.addEventListener("keydown",ce),this._domElementKeyEvents=t},this.saveState=function(){e.target0.copy(e.target),e.position0.copy(e.object.position),e.zoom0=e.object.zoom},this.reset=function(){e.target.copy(e.target0),e.object.position.copy(e.position0),e.object.zoom=e.zoom0,e.object.updateProjectionMatrix(),e.dispatchEvent(me),e.update(),r=o.NONE},this.update=function(){const t=new A,n=new z().setFromUnitVectors(c.up,new A(0,1,0)),d=n.clone().invert(),h=new A,E=new z,x=2*Math.PI;return function(){const ue=e.object.position;t.copy(ue).sub(e.target),t.applyQuaternion(n),i.setFromVector3(t),e.autoRotate&&r===o.NONE&&C(ge()),e.enableDamping?(i.theta+=u.theta*e.dampingFactor,i.phi+=u.phi*e.dampingFactor):(i.theta+=u.theta,i.phi+=u.phi);let v=e.minAzimuthAngle,D=e.maxAzimuthAngle;return isFinite(v)&&isFinite(D)&&(v<-Math.PI?v+=x:v>Math.PI&&(v-=x),D<-Math.PI?D+=x:D>Math.PI&&(D-=x),v<=D?i.theta=Math.max(v,Math.min(D,i.theta)):i.theta=i.theta>(v+D)/2?Math.max(v,i.theta):Math.min(D,i.theta)),i.phi=Math.max(e.minPolarAngle,Math.min(e.maxPolarAngle,i.phi)),i.makeSafe(),i.radius*=y,i.radius=Math.max(e.minDistance,Math.min(e.maxDistance,i.radius)),e.enableDamping===!0?e.target.addScaledVector(f,e.dampingFactor):e.target.add(f),t.setFromSpherical(i),t.applyQuaternion(d),ue.copy(e.target).add(t),e.object.lookAt(e.target),e.enableDamping===!0?(u.theta*=1-e.dampingFactor,u.phi*=1-e.dampingFactor,f.multiplyScalar(1-e.dampingFactor)):(u.set(0,0,0),f.set(0,0,0)),y=1,O||h.distanceToSquared(e.object.position)>s||8*(1-E.dot(e.object.quaternion))>s?(e.dispatchEvent(me),h.copy(e.object.position),E.copy(e.object.quaternion),O=!1,!0):!1}}(),this.dispose=function(){e.domElement.removeEventListener("contextmenu",re),e.domElement.removeEventListener("pointerdown",ie),e.domElement.removeEventListener("pointercancel",ae),e.domElement.removeEventListener("wheel",se),e.domElement.removeEventListener("pointermove",U),e.domElement.removeEventListener("pointerup",Z),e._domElementKeyEvents!==null&&e._domElementKeyEvents.removeEventListener("keydown",ce)};const e=this,o={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=o.NONE;const s=1e-6,i=new he,u=new he;let y=1;const f=new A;let O=!1;const p=new T,g=new T,b=new T,P=new T,m=new T,L=new T,w=new T,S=new T,R=new T,a=[],I={};function ge(){return 2*Math.PI/60/60*e.autoRotateSpeed}function _(){return Math.pow(.95,e.zoomSpeed)}function C(t){u.theta-=t}function Y(t){u.phi-=t}const W=function(){const t=new A;return function(d,h){t.setFromMatrixColumn(h,0),t.multiplyScalar(-d),f.add(t)}}(),V=function(){const t=new A;return function(d,h){e.screenSpacePanning===!0?t.setFromMatrixColumn(h,1):(t.setFromMatrixColumn(h,0),t.crossVectors(e.object.up,t)),t.multiplyScalar(d),f.add(t)}}(),j=function(){const t=new A;return function(d,h){const E=e.domElement;if(e.object.isPerspectiveCamera){const x=e.object.position;t.copy(x).sub(e.target);let H=t.length();H*=Math.tan(e.object.fov/2*Math.PI/180),W(2*d*H/E.clientHeight,e.object.matrix),V(2*h*H/E.clientHeight,e.object.matrix)}else e.object.isOrthographicCamera?(W(d*(e.object.right-e.object.left)/e.object.zoom/E.clientWidth,e.object.matrix),V(h*(e.object.top-e.object.bottom)/e.object.zoom/E.clientHeight,e.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),e.enablePan=!1)}}();function K(t){e.object.isPerspectiveCamera?y/=t:e.object.isOrthographicCamera?(e.object.zoom=Math.max(e.minZoom,Math.min(e.maxZoom,e.object.zoom*t)),e.object.updateProjectionMatrix(),O=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),e.enableZoom=!1)}function B(t){e.object.isPerspectiveCamera?y*=t:e.object.isOrthographicCamera?(e.object.zoom=Math.max(e.minZoom,Math.min(e.maxZoom,e.object.zoom/t)),e.object.updateProjectionMatrix(),O=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),e.enableZoom=!1)}function G(t){p.set(t.clientX,t.clientY)}function be(t){w.set(t.clientX,t.clientY)}function Q(t){P.set(t.clientX,t.clientY)}function we(t){g.set(t.clientX,t.clientY),b.subVectors(g,p).multiplyScalar(e.rotateSpeed);const n=e.domElement;C(2*Math.PI*b.x/n.clientHeight),Y(2*Math.PI*b.y/n.clientHeight),p.copy(g),e.update()}function Ee(t){S.set(t.clientX,t.clientY),R.subVectors(S,w),R.y>0?K(_()):R.y<0&&B(_()),w.copy(S),e.update()}function ye(t){m.set(t.clientX,t.clientY),L.subVectors(m,P).multiplyScalar(e.panSpeed),j(L.x,L.y),P.copy(m),e.update()}function Oe(t){t.deltaY<0?B(_()):t.deltaY>0&&K(_()),e.update()}function Pe(t){let n=!1;switch(t.code){case e.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?Y(2*Math.PI*e.rotateSpeed/e.domElement.clientHeight):j(0,e.keyPanSpeed),n=!0;break;case e.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?Y(-2*Math.PI*e.rotateSpeed/e.domElement.clientHeight):j(0,-e.keyPanSpeed),n=!0;break;case e.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?C(2*Math.PI*e.rotateSpeed/e.domElement.clientHeight):j(e.keyPanSpeed,0),n=!0;break;case e.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?C(-2*Math.PI*e.rotateSpeed/e.domElement.clientHeight):j(-e.keyPanSpeed,0),n=!0;break}n&&(t.preventDefault(),e.update())}function J(){if(a.length===1)p.set(a[0].pageX,a[0].pageY);else{const t=.5*(a[0].pageX+a[1].pageX),n=.5*(a[0].pageY+a[1].pageY);p.set(t,n)}}function $(){if(a.length===1)P.set(a[0].pageX,a[0].pageY);else{const t=.5*(a[0].pageX+a[1].pageX),n=.5*(a[0].pageY+a[1].pageY);P.set(t,n)}}function ee(){const t=a[0].pageX-a[1].pageX,n=a[0].pageY-a[1].pageY,d=Math.sqrt(t*t+n*n);w.set(0,d)}function Te(){e.enableZoom&&ee(),e.enablePan&&$()}function Me(){e.enableZoom&&ee(),e.enableRotate&&J()}function te(t){if(a.length==1)g.set(t.pageX,t.pageY);else{const d=F(t),h=.5*(t.pageX+d.x),E=.5*(t.pageY+d.y);g.set(h,E)}b.subVectors(g,p).multiplyScalar(e.rotateSpeed);const n=e.domElement;C(2*Math.PI*b.x/n.clientHeight),Y(2*Math.PI*b.y/n.clientHeight),p.copy(g)}function ne(t){if(a.length===1)m.set(t.pageX,t.pageY);else{const n=F(t),d=.5*(t.pageX+n.x),h=.5*(t.pageY+n.y);m.set(d,h)}L.subVectors(m,P).multiplyScalar(e.panSpeed),j(L.x,L.y),P.copy(m)}function oe(t){const n=F(t),d=t.pageX-n.x,h=t.pageY-n.y,E=Math.sqrt(d*d+h*h);S.set(0,E),R.set(0,Math.pow(S.y/w.y,e.zoomSpeed)),K(R.y),w.copy(S)}function ve(t){e.enableZoom&&oe(t),e.enablePan&&ne(t)}function De(t){e.enableZoom&&oe(t),e.enableRotate&&te(t)}function ie(t){e.enabled!==!1&&(a.length===0&&(e.domElement.setPointerCapture(t.pointerId),e.domElement.addEventListener("pointermove",U),e.domElement.addEventListener("pointerup",Z)),je(t),t.pointerType==="touch"?Se(t):Ae(t))}function U(t){e.enabled!==!1&&(t.pointerType==="touch"?Re(t):Le(t))}function Z(t){le(t),a.length===0&&(e.domElement.releasePointerCapture(t.pointerId),e.domElement.removeEventListener("pointermove",U),e.domElement.removeEventListener("pointerup",Z)),e.dispatchEvent(pe),r=o.NONE}function ae(t){le(t)}function Ae(t){let n;switch(t.button){case 0:n=e.mouseButtons.LEFT;break;case 1:n=e.mouseButtons.MIDDLE;break;case 2:n=e.mouseButtons.RIGHT;break;default:n=-1}switch(n){case k.DOLLY:if(e.enableZoom===!1)return;be(t),r=o.DOLLY;break;case k.ROTATE:if(t.ctrlKey||t.metaKey||t.shiftKey){if(e.enablePan===!1)return;Q(t),r=o.PAN}else{if(e.enableRotate===!1)return;G(t),r=o.ROTATE}break;case k.PAN:if(t.ctrlKey||t.metaKey||t.shiftKey){if(e.enableRotate===!1)return;G(t),r=o.ROTATE}else{if(e.enablePan===!1)return;Q(t),r=o.PAN}break;default:r=o.NONE}r!==o.NONE&&e.dispatchEvent(X)}function Le(t){switch(r){case o.ROTATE:if(e.enableRotate===!1)return;we(t);break;case o.DOLLY:if(e.enableZoom===!1)return;Ee(t);break;case o.PAN:if(e.enablePan===!1)return;ye(t);break}}function se(t){e.enabled===!1||e.enableZoom===!1||r!==o.NONE||(t.preventDefault(),e.dispatchEvent(X),Oe(t),e.dispatchEvent(pe))}function ce(t){e.enabled===!1||e.enablePan===!1||Pe(t)}function Se(t){switch(de(t),a.length){case 1:switch(e.touches.ONE){case N.ROTATE:if(e.enableRotate===!1)return;J(),r=o.TOUCH_ROTATE;break;case N.PAN:if(e.enablePan===!1)return;$(),r=o.TOUCH_PAN;break;default:r=o.NONE}break;case 2:switch(e.touches.TWO){case N.DOLLY_PAN:if(e.enableZoom===!1&&e.enablePan===!1)return;Te(),r=o.TOUCH_DOLLY_PAN;break;case N.DOLLY_ROTATE:if(e.enableZoom===!1&&e.enableRotate===!1)return;Me(),r=o.TOUCH_DOLLY_ROTATE;break;default:r=o.NONE}break;default:r=o.NONE}r!==o.NONE&&e.dispatchEvent(X)}function Re(t){switch(de(t),r){case o.TOUCH_ROTATE:if(e.enableRotate===!1)return;te(t),e.update();break;case o.TOUCH_PAN:if(e.enablePan===!1)return;ne(t),e.update();break;case o.TOUCH_DOLLY_PAN:if(e.enableZoom===!1&&e.enablePan===!1)return;ve(t),e.update();break;case o.TOUCH_DOLLY_ROTATE:if(e.enableZoom===!1&&e.enableRotate===!1)return;De(t),e.update();break;default:r=o.NONE}}function re(t){e.enabled!==!1&&t.preventDefault()}function je(t){a.push(t)}function le(t){delete I[t.pointerId];for(let n=0;n<a.length;n++)if(a[n].pointerId==t.pointerId){a.splice(n,1);return}}function de(t){let n=I[t.pointerId];n===void 0&&(n=new T,I[t.pointerId]=n),n.set(t.pageX,t.pageY)}function F(t){const n=t.pointerId===a[0].pointerId?a[1]:a[0];return I[n.pointerId]}e.domElement.addEventListener("contextmenu",re),e.domElement.addEventListener("pointerdown",ie),e.domElement.addEventListener("pointercancel",ae),e.domElement.addEventListener("wheel",se,{passive:!1}),this.update()}}function et(M){const c=this;this.object=M,this.object.rotation.reorder("YXZ"),this.enabled=!0,this.deviceOrientation=null,this.screenOrientation=0,this.alphaOffset=0,this.initialOffset=null;const l=function({alpha:s,beta:i,gamma:u}){c.initialOffset===null&&(c.initialOffset=s),console.log(s,"alpha值"),s=s-c.initialOffset,s<0&&(s+=360),c.deviceOrientation={alpha:s,beta:i,gamma:u}},e=function(){c.screenOrientation=window.orientation||0},o=function(){window.addEventListener("orientationchange",e,!1),window.addEventListener("deviceorientation",l,!1)}.bind(this),r=function(){const s=new A(0,0,1),i=new He,u=new z,y=new z(-Math.sqrt(.5),0,0,Math.sqrt(.5));return function(f,O,p,g,b){i.set(p,O,-g,"YXZ"),f.setFromEuler(i),f.multiply(y),f.multiply(u.setFromAxisAngle(s,-b))}}();this.connect=function(){e(),window.DeviceOrientationEvent!==void 0&&typeof window.DeviceOrientationEvent.requestPermission=="function"?window.DeviceOrientationEvent.requestPermission().then(function(s){s=="granted"&&(console.log("点击确认"),o())}).catch(function(s){console.error("THREE.DeviceOrientationControls: Unable to use DeviceOrientation API:",s)}):o(),c.enabled=!0},this.disconnect=function(){window.removeEventListener("orientationchange",e,!1),window.removeEventListener("deviceorientation",l,!1),c.enabled=!1,c.deviceOrientation=null,c.initialOffset=null},this.update=function({theta:s=0}={theta:0}){if(c.enabled===!1)return;const i=c.deviceOrientation;if(i){const u=i.alpha?(void 0).degToRad(i.alpha)+c.alphaOffset:0,y=i.beta?(void 0).degToRad(i.beta):0,f=i.gamma?(void 0).degToRad(i.gamma):0,O=c.screenOrientation?(void 0).degToRad(c.screenOrientation):0;r(c.object.quaternion,u+s,y,f,O)}},this.dispose=function(){c.disconnect()},this.getAlpha=function(){const{deviceOrientation:s}=c;return s&&s.alpha?(void 0).degToRad(s.alpha)+c.alphaOffset:0},this.getBeta=function(){const{deviceOrientation:s}=c;return s&&s.beta?(void 0).degToRad(s.beta):0}}const tt=async()=>{let M;const c=new Je,l=new ze,e=new Ke(75,window.innerWidth/window.innerHeight,.1,1e3);e.position.set(100,100,100);const o=document.querySelector("#container"),r=document.querySelector("#box");document.createElement("video");const s=document.querySelector("video");console.log("开始初始化摄像头"),await nt(s),console.log("获取摄像头数据完成,开始播放");const i=new Ue(s);l.background=i;const u=new Ze(5e3);l.add(u);const y=new Fe(16777215);l.add(y);const f=new Xe(16777215,1);f.position.set(5,0,10).normalize(),l.add(f);const O=new qe(108,71),p=new We(100,30,30),g=new Ve({color:"blue",side:Be}),b=new fe(O,g),P=new fe(p,new Ge({color:"red"}));b.position.set(100,0,400),P.position.set(0,0,0),l.add(b),l.add(P);const m=new Qe;m.setSize(window.innerWidth,window.innerHeight),r==null||r.appendChild(m.domElement);const L=new et(e);console.log("模拟点击");const w=document.createElement("div");w.onclick=L.connect,w.style.display="none",o.appendChild(w),w.click(),M=new $e(e,m.domElement),window.addEventListener("resize",S);function S(){e.aspect=window.innerWidth/window.innerHeight,e.updateProjectionMatrix(),m.setSize(window.innerWidth,window.innerHeight)}function R(){requestAnimationFrame(R),M.update(c.getDelta()),m.render(l,e)}R()},nt=M=>new Promise(async(c,l)=>{console.log("开始打开摄像头");const e=await navigator.mediaDevices.getUserMedia({video:{width:500,height:400,facingMode:"environment"}});if(e)if(!M)l(new Error("not find el"));else{let o=M;o.srcObject=e,console.log(o.srcObject),o.play(),console.log("开始播放"),c(1)}else alert("摄像头开启失败")}),ot={id:"container"},it={width:"500",height:"400",muted:"",playsinline:"",controls:!1,"webkit-playsinline":"","x5-video-player-type":"",autoplay:""},at=q("div",{id:"box"},null,-1),rt=xe({__name:"Model",setup(M){ke(async()=>{await tt()});const c=function(){window.DeviceOrientationEvent&&window.DeviceOrientationEvent.requestPermission&&window.DeviceOrientationEvent.requestPermission().then(l=>{l==="granted"?(window.addEventListener("orientationchange",function(e){console.log("牛逼orientationchange",e)},!1),window.addEventListener("deviceorientation",function(e){console.log("deviceorientation",e)},!1)):l==="denied"&&console.warn("用户拒绝授权。")})};return(l,e)=>(Ne(),Ce("div",ot,[q("div",{onClick:c},"点击"),Ie(q("video",it,null,512),[[_e,!1]]),at]))}});export{rt as default};
