/*! For license information please see 296.e25d9489.chunk.js.LICENSE.txt */
(self.webpackChunkparticle_auth_cra=self.webpackChunkparticle_auth_cra||[]).push([[296],{80296:function(t,i,e){!function(i,n){t.exports?t.exports=n(i,e(20822),e(35170)):i.Draggabilly=n(i,i.getSize,i.Unidragger)}("undefined"!=typeof window?window:this,(function(t,i,e){let n=t.jQuery;function o(t,i){this.element="string"==typeof t?document.querySelector(t):t,n&&(this.$element=n(this.element)),this.options={},this.option(i),this._create()}let s=o.prototype=Object.create(e.prototype);s.option=function(t){this.options={...this.options,...t}};const r=["relative","absolute","fixed"];s._create=function(){this.position={},this._getPosition(),this.startPoint={x:0,y:0},this.dragPoint={x:0,y:0},this.startPosition={...this.position};let t=getComputedStyle(this.element);r.includes(t.position)||(this.element.style.position="relative"),this.on("pointerDown",this.handlePointerDown),this.on("pointerUp",this.handlePointerUp),this.on("dragStart",this.handleDragStart),this.on("dragMove",this.handleDragMove),this.on("dragEnd",this.handleDragEnd),this.setHandles(),this.enable()},s.setHandles=function(){let{handle:t}=this.options;"string"==typeof t?this.handles=this.element.querySelectorAll(t):"object"==typeof t&&t.length?this.handles=t:t instanceof HTMLElement?this.handles=[t]:this.handles=[this.element]};const h=["dragStart","dragMove","dragEnd"];let a=s.emitEvent;function d(t,i,e){return i?(e=e||"round",Math[e](t/i)*i):t}s.emitEvent=function(i,e){if(!this.isEnabled&&h.includes(i))return;a.call(this,i,e);let n,o=t.jQuery;if(!o||!this.$element)return;let s=e;e&&e[0]instanceof Event&&([n,...s]=e);let r=o.Event(n);r.type=i,this.$element.trigger(r,s)},s._getPosition=function(){let t=getComputedStyle(this.element),i=this._getPositionCoord(t.left,"width"),e=this._getPositionCoord(t.top,"height");this.position.x=isNaN(i)?0:i,this.position.y=isNaN(e)?0:e,this._addTransformPosition(t)},s._getPositionCoord=function(t,e){if(t.includes("%")){let n=i(this.element.parentNode);return n?parseFloat(t)/100*n[e]:0}return parseInt(t,10)},s._addTransformPosition=function(t){let i=t.transform;if(!i.startsWith("matrix"))return;let e=i.split(","),n=i.startsWith("matrix3d")?12:4,o=parseInt(e[n],10),s=parseInt(e[n+1],10);this.position.x+=o,this.position.y+=s},s.handlePointerDown=function(t,i){this.isEnabled&&(this.pointerDownPointer={pageX:i.pageX,pageY:i.pageY},t.preventDefault(),document.activeElement.blur(),this.bindActivePointerEvents(t),this.element.classList.add("is-pointer-down"))},s.handleDragStart=function(){this.isEnabled&&(this._getPosition(),this.measureContainment(),this.startPosition.x=this.position.x,this.startPosition.y=this.position.y,this.setLeftTop(),this.dragPoint.x=0,this.dragPoint.y=0,this.element.classList.add("is-dragging"),this.animate())},s.measureContainment=function(){let t=this.getContainer();if(!t)return;let e=i(this.element),n=i(t),{borderLeftWidth:o,borderRightWidth:s,borderTopWidth:r,borderBottomWidth:h}=n,a=this.element.getBoundingClientRect(),d=t.getBoundingClientRect(),l=o+s,c=r+h,u=this.relativeStartPosition={x:a.left-(d.left+o),y:a.top-(d.top+r)};this.containSize={width:n.width-l-u.x-e.width,height:n.height-c-u.y-e.height}},s.getContainer=function(){let t=this.options.containment;if(t)return t instanceof HTMLElement?t:"string"==typeof t?document.querySelector(t):this.element.parentNode},s.handleDragMove=function(t,i,e){if(!this.isEnabled)return;let n=e.x,o=e.y,s=this.options.grid,r=s&&s[0],h=s&&s[1];n=d(n,r),o=d(o,h),n=this.containDrag("x",n,r),o=this.containDrag("y",o,h),n="y"==this.options.axis?0:n,o="x"==this.options.axis?0:o,this.position.x=this.startPosition.x+n,this.position.y=this.startPosition.y+o,this.dragPoint.x=n,this.dragPoint.y=o},s.containDrag=function(t,i,e){if(!this.options.containment)return i;let n="x"==t?"width":"height",o=d(-this.relativeStartPosition[t],e,"ceil"),s=this.containSize[n];return s=d(s,e,"floor"),Math.max(o,Math.min(s,i))},s.handlePointerUp=function(){this.element.classList.remove("is-pointer-down")},s.handleDragEnd=function(){this.isEnabled&&(this.element.style.transform="",this.setLeftTop(),this.element.classList.remove("is-dragging"))},s.animate=function(){this.isDragging&&(this.positionDrag(),requestAnimationFrame((()=>this.animate())))},s.setLeftTop=function(){let{x:t,y:i}=this.position;this.element.style.left="".concat(t,"px"),this.element.style.top="".concat(i,"px")},s.positionDrag=function(){let{x:t,y:i}=this.dragPoint;this.element.style.transform="translate3d(".concat(t,"px, ").concat(i,"px, 0)")},s.setPosition=function(t,i){this.position.x=t,this.position.y=i,this.setLeftTop()},s.enable=function(){this.isEnabled||(this.isEnabled=!0,this.bindHandles())},s.disable=function(){this.isEnabled&&(this.isEnabled=!1,this.isDragging&&this.dragEnd(),this.unbindHandles())};const l=["transform","left","top","position"];return s.destroy=function(){this.disable(),l.forEach((t=>{this.element.style[t]=""})),this.unbindHandles(),this.$element&&this.$element.removeData("draggabilly")},s._init=function(){},n&&n.bridget&&n.bridget("draggabilly",o),o}))},7414:function(t){var i,e;i="undefined"!=typeof window?window:this,e=function(){function t(){}let i=t.prototype;return i.on=function(t,i){if(!t||!i)return this;let e=this._events=this._events||{},n=e[t]=e[t]||[];return n.includes(i)||n.push(i),this},i.once=function(t,i){if(!t||!i)return this;this.on(t,i);let e=this._onceEvents=this._onceEvents||{};return(e[t]=e[t]||{})[i]=!0,this},i.off=function(t,i){let e=this._events&&this._events[t];if(!e||!e.length)return this;let n=e.indexOf(i);return-1!=n&&e.splice(n,1),this},i.emitEvent=function(t,i){let e=this._events&&this._events[t];if(!e||!e.length)return this;e=e.slice(0),i=i||[];let n=this._onceEvents&&this._onceEvents[t];for(let o of e)n&&n[o]&&(this.off(t,o),delete n[o]),o.apply(this,i);return this},i.allOff=function(){return delete this._events,delete this._onceEvents,this},t},t.exports?t.exports=e():i.EvEmitter=e()},20822:t=>{!function(i,e){t.exports?t.exports=e():i.getSize=e()}(window,(function(){function t(t){let i=parseFloat(t);return-1==t.indexOf("%")&&!isNaN(i)&&i}let i=["paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"];i.length;return function(e){if("string"==typeof e&&(e=document.querySelector(e)),!(e&&"object"==typeof e&&e.nodeType))return;let n=getComputedStyle(e);if("none"==n.display)return function(){let t={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0};return i.forEach((i=>{t[i]=0})),t}();let o={};o.width=e.offsetWidth,o.height=e.offsetHeight;let s=o.isBorderBox="border-box"==n.boxSizing;i.forEach((t=>{let i=n[t],e=parseFloat(i);o[t]=isNaN(e)?0:e}));let r=o.paddingLeft+o.paddingRight,h=o.paddingTop+o.paddingBottom,a=o.marginLeft+o.marginRight,d=o.marginTop+o.marginBottom,l=o.borderLeftWidth+o.borderRightWidth,c=o.borderTopWidth+o.borderBottomWidth,u=t(n.width);!1!==u&&(o.width=u+(s?0:r+l));let p=t(n.height);return!1!==p&&(o.height=p+(s?0:h+c)),o.innerWidth=o.width-(r+l),o.innerHeight=o.height-(h+c),o.outerWidth=o.width+a,o.outerHeight=o.height+d,o}}))},35170:function(t,i,e){!function(i,n){t.exports?t.exports=n(i,e(7414)):i.Unidragger=n(i,i.EvEmitter)}("undefined"!=typeof window?window:this,(function(t,i){function e(){}let n,o,s=e.prototype=Object.create(i.prototype);s.handleEvent=function(t){let i="on"+t.type;this[i]&&this[i](t)},"ontouchstart"in t?(n="touchstart",o=["touchmove","touchend","touchcancel"]):t.PointerEvent?(n="pointerdown",o=["pointermove","pointerup","pointercancel"]):(n="mousedown",o=["mousemove","mouseup"]),s.touchActionValue="none",s.bindHandles=function(){this._bindHandles("addEventListener",this.touchActionValue)},s.unbindHandles=function(){this._bindHandles("removeEventListener","")},s._bindHandles=function(i,e){this.handles.forEach((o=>{o[i](n,this),o[i]("click",this),t.PointerEvent&&(o.style.touchAction=e)}))},s.bindActivePointerEvents=function(){o.forEach((i=>{t.addEventListener(i,this)}))},s.unbindActivePointerEvents=function(){o.forEach((i=>{t.removeEventListener(i,this)}))},s.withPointer=function(t,i){i.pointerId===this.pointerIdentifier&&this[t](i,i)},s.withTouch=function(t,i){let e;for(let n of i.changedTouches)n.identifier===this.pointerIdentifier&&(e=n);e&&this[t](i,e)},s.onmousedown=function(t){this.pointerDown(t,t)},s.ontouchstart=function(t){this.pointerDown(t,t.changedTouches[0])},s.onpointerdown=function(t){this.pointerDown(t,t)};const r=["TEXTAREA","INPUT","SELECT","OPTION"],h=["radio","checkbox","button","submit","image","file"];return s.pointerDown=function(t,i){let e=r.includes(t.target.nodeName),n=h.includes(t.target.type),o=!e||n;!this.isPointerDown&&!t.button&&o&&(this.isPointerDown=!0,this.pointerIdentifier=void 0!==i.pointerId?i.pointerId:i.identifier,this.pointerDownPointer={pageX:i.pageX,pageY:i.pageY},this.bindActivePointerEvents(),this.emitEvent("pointerDown",[t,i]))},s.onmousemove=function(t){this.pointerMove(t,t)},s.onpointermove=function(t){this.withPointer("pointerMove",t)},s.ontouchmove=function(t){this.withTouch("pointerMove",t)},s.pointerMove=function(t,i){let e={x:i.pageX-this.pointerDownPointer.pageX,y:i.pageY-this.pointerDownPointer.pageY};this.emitEvent("pointerMove",[t,i,e]),!this.isDragging&&this.hasDragStarted(e)&&this.dragStart(t,i),this.isDragging&&this.dragMove(t,i,e)},s.hasDragStarted=function(t){return Math.abs(t.x)>3||Math.abs(t.y)>3},s.dragStart=function(t,i){this.isDragging=!0,this.isPreventingClicks=!0,this.emitEvent("dragStart",[t,i])},s.dragMove=function(t,i,e){this.emitEvent("dragMove",[t,i,e])},s.onmouseup=function(t){this.pointerUp(t,t)},s.onpointerup=function(t){this.withPointer("pointerUp",t)},s.ontouchend=function(t){this.withTouch("pointerUp",t)},s.pointerUp=function(t,i){this.pointerDone(),this.emitEvent("pointerUp",[t,i]),this.isDragging?this.dragEnd(t,i):this.staticClick(t,i)},s.dragEnd=function(t,i){this.isDragging=!1,setTimeout((()=>delete this.isPreventingClicks)),this.emitEvent("dragEnd",[t,i])},s.pointerDone=function(){this.isPointerDown=!1,delete this.pointerIdentifier,this.unbindActivePointerEvents(),this.emitEvent("pointerDone")},s.onpointercancel=function(t){this.withPointer("pointerCancel",t)},s.ontouchcancel=function(t){this.withTouch("pointerCancel",t)},s.pointerCancel=function(t,i){this.pointerDone(),this.emitEvent("pointerCancel",[t,i])},s.onclick=function(t){this.isPreventingClicks&&t.preventDefault()},s.staticClick=function(t,i){let e="mouseup"===t.type;e&&this.isIgnoringMouseUp||(this.emitEvent("staticClick",[t,i]),e&&(this.isIgnoringMouseUp=!0,setTimeout((()=>{delete this.isIgnoringMouseUp}),400)))},e}))}}]);
//# sourceMappingURL=296.e25d9489.chunk.js.map