"use strict";(self.webpackChunkparticle_auth_cra=self.webpackChunkparticle_auth_cra||[]).push([[8111],{28344:(e,t,r)=>{r.d(t,{NC:()=>a,kv:()=>l});var n=r(92776),o=r(55786);function i(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return new Promise(((t,r)=>{e&&setTimeout((()=>{const t=new Error("Request did not complete within ".concat(e," ms"));t.name="TimeoutError",r(t)}),e)}))}const s={supported:void 0};class a{static create(e){return"function"===typeof(null===e||void 0===e?void 0:e.handle)?e:new a(e)}constructor(e){"function"===typeof e?this.configProvider=e().then((e=>e||{})):(this.config=null!==e&&void 0!==e?e:{},this.configProvider=Promise.resolve(this.config)),void 0===s.supported&&(s.supported=Boolean("undefined"!==typeof Request&&"keepalive"in new Request("https://[::1]")))}destroy(){}async handle(e){var t;let{abortSignal:r}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.config||(this.config=await this.configProvider);const a=this.config.requestTimeout,c=!0===this.config.keepAlive,l=this.config.credentials;if(null!==r&&void 0!==r&&r.aborted){const e=new Error("Request aborted");return e.name="AbortError",Promise.reject(e)}let d=e.path;const u=function(e){const t=[];for(let r of Object.keys(e).sort()){const n=e[r];if(r=(0,o.o)(r),Array.isArray(n))for(let e=0,i=n.length;e<i;e++)t.push("".concat(r,"=").concat((0,o.o)(n[e])));else{let e=r;(n||"string"===typeof n)&&(e+="=".concat((0,o.o)(n))),t.push(e)}}return t.join("&")}(e.query||{});u&&(d+="?".concat(u)),e.fragment&&(d+="#".concat(e.fragment));let f="";if(null!=e.username||null!=e.password){var h,p;const t=null!==(h=e.username)&&void 0!==h?h:"",r=null!==(p=e.password)&&void 0!==p?p:"";f="".concat(t,":").concat(r,"@")}const{port:m,method:y}=e,g="".concat(e.protocol,"//").concat(f).concat(e.hostname).concat(m?":".concat(m):"").concat(d),w="GET"===y||"HEAD"===y?void 0:e.body,v={body:w,headers:new Headers(e.headers),method:y,credentials:l};null!==(t=this.config)&&void 0!==t&&t.cache&&(v.cache=this.config.cache),w&&(v.duplex="half"),"undefined"!==typeof AbortController&&(v.signal=r),s.supported&&(v.keepalive=c),"function"===typeof this.config.requestInit&&Object.assign(v,this.config.requestInit(e));let b=()=>{};const E=new Request(g,v),C=[fetch(E).then((e=>{const t=e.headers,r={};for(const n of t.entries())r[n[0]]=n[1];return void 0!=e.body?{response:new n.cS({headers:r,reason:e.statusText,statusCode:e.status,body:e.body})}:e.blob().then((t=>({response:new n.cS({headers:r,reason:e.statusText,statusCode:e.status,body:t})})))})),i(a)];return r&&C.push(new Promise(((e,t)=>{const n=()=>{const e=new Error("Request aborted");e.name="AbortError",t(e)};if("function"===typeof r.addEventListener){const e=r;e.addEventListener("abort",n,{once:!0}),b=()=>e.removeEventListener("abort",n)}else r.onabort=n}))),Promise.race(C).finally(b)}updateHttpClientConfig(e,t){this.config=void 0,this.configProvider=this.configProvider.then((r=>(r[e]=t,r)))}httpHandlerConfigs(){var e;return null!==(e=this.config)&&void 0!==e?e:{}}}var c=r(85189);const l=e=>"function"===typeof Blob&&e instanceof Blob?async function(e){const t=await function(e){return new Promise(((t,r)=>{const n=new FileReader;n.onloadend=()=>{var e;if(2!==n.readyState)return r(new Error("Reader aborted too early"));const o=null!==(e=n.result)&&void 0!==e?e:"",i=o.indexOf(","),s=i>-1?i+1:o.length;t(o.substring(s))},n.onabort=()=>r(new Error("Read aborted")),n.onerror=()=>r(n.error),n.readAsDataURL(e)}))}(e),r=(0,c.E)(t);return new Uint8Array(r)}(e):async function(e){const t=[],r=e.getReader();let n=!1,o=0;for(;!n;){const{done:e,value:i}=await r.read();i&&(t.push(i),o+=i.length),n=e}const i=new Uint8Array(o);let s=0;for(const a of t)i.set(a,s),s+=a.length;return i}(e)},43419:(e,t,r)=>{r.d(t,{C1:()=>o,Bj:()=>i});class n extends Error{constructor(e){var t,r;let o,i=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],s=!0;if("boolean"===typeof i)o=void 0,s=i;else if(null!=i&&"object"===typeof i){var a;o=i.logger,s=null===(a=i.tryNextLink)||void 0===a||a}super(e),this.name="ProviderError",this.tryNextLink=s,Object.setPrototypeOf(this,n.prototype),null===(t=o)||void 0===t||null===(r=t.debug)||void 0===r||r.call(t,"@smithy/property-provider ".concat(s?"->":"(!)"," ").concat(e))}static from(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return Object.assign(new this(e.message,t),e)}}class o extends n{constructor(e){super(e,!(arguments.length>1&&void 0!==arguments[1])||arguments[1]),this.name="CredentialsProviderError",Object.setPrototypeOf(this,o.prototype)}}const i=(e,t,r)=>{let n,o,i,s=!1;const a=async()=>{o||(o=e());try{n=await o,i=!0,s=!1}finally{o=void 0}return n};return void 0===t?async e=>((!i||null!==e&&void 0!==e&&e.forceRefresh)&&(n=await a()),n):async e=>((!i||null!==e&&void 0!==e&&e.forceRefresh)&&(n=await a()),s?n:r&&!r(n)?(s=!0,n):t(n)?(await a(),n):n)}},92776:(e,t,r)=>{r.d(t,{Kd:()=>i,cS:()=>s,eS:()=>n,jt:()=>o});const n=e=>{let t=e.httpHandler;return{setHttpHandler(e){t=e},httpHandler:()=>t,updateHttpClientConfig(e,r){t.updateHttpClientConfig(e,r)},httpHandlerConfigs:()=>t.httpHandlerConfigs()}},o=e=>({httpHandler:e.httpHandler()});r(28935);class i{constructor(e){this.method=e.method||"GET",this.hostname=e.hostname||"localhost",this.port=e.port,this.query=e.query||{},this.headers=e.headers||{},this.body=e.body,this.protocol=e.protocol?":"!==e.protocol.slice(-1)?"".concat(e.protocol,":"):e.protocol:"https:",this.path=e.path?"/"!==e.path.charAt(0)?"/".concat(e.path):e.path:"/",this.username=e.username,this.password=e.password,this.fragment=e.fragment}static clone(e){const t=new i({...e,headers:{...e.headers}});var r;return t.query&&(t.query=(r=t.query,Object.keys(r).reduce(((e,t)=>{const n=r[t];return{...e,[t]:Array.isArray(n)?[...n]:n}}),{}))),t}static isInstance(e){if(!e)return!1;const t=e;return"method"in t&&"protocol"in t&&"hostname"in t&&"path"in t&&"object"===typeof t.query&&"object"===typeof t.headers}clone(){return i.clone(this)}}class s{constructor(e){this.statusCode=e.statusCode,this.reason=e.reason,this.headers=e.headers||{},this.body=e.body}static isInstance(e){if(!e)return!1;const t=e;return"number"===typeof t.statusCode&&"object"===typeof t.headers}}},20889:(e,t,r)=>{r.d(t,{Kj:()=>c,uB:()=>f,N4:()=>le,$H:()=>p,TJ:()=>K,Ss:()=>pe,Px:()=>d,J1:()=>m,Mw:()=>Y,ak:()=>y,ET:()=>E,Y0:()=>A,r$:()=>g,lK:()=>_,$6:()=>ee,xA:()=>ie,rm:()=>ae,lT:()=>X,l3:()=>U,EI:()=>H,t_:()=>F,uv:()=>se,xW:()=>M,s:()=>de,jr:()=>G});const n=(e,t)=>{const r=[];if(e&&r.push(e),t)for(const n of t)r.push(n);return r},o=(e,t)=>"".concat(e||"anonymous").concat(t&&t.length>0?" (a.k.a. ".concat(t.join(","),")"):""),i=()=>{let e=[],t=[],r=!1;const c=new Set,l=r=>{var n;return e.forEach((e=>{r.add(e.middleware,{...e})})),t.forEach((e=>{r.addRelativeTo(e.middleware,{...e})})),null===(n=r.identifyOnResolve)||void 0===n||n.call(r,f.identifyOnResolve()),r},d=e=>{const t=[];return e.before.forEach((e=>{0===e.before.length&&0===e.after.length?t.push(e):t.push(...d(e))})),t.push(e),e.after.reverse().forEach((e=>{0===e.before.length&&0===e.after.length?t.push(e):t.push(...d(e))})),t},u=function(){let r=arguments.length>0&&void 0!==arguments[0]&&arguments[0];const i=[],c=[],l={};e.forEach((e=>{const t={...e,before:[],after:[]};for(const r of n(t.name,t.aliases))l[r]=t;i.push(t)})),t.forEach((e=>{const t={...e,before:[],after:[]};for(const r of n(t.name,t.aliases))l[r]=t;c.push(t)})),c.forEach((e=>{if(e.toMiddleware){const t=l[e.toMiddleware];if(void 0===t){if(r)return;throw new Error("".concat(e.toMiddleware," is not found when adding ")+"".concat(o(e.name,e.aliases)," ")+"middleware ".concat(e.relation," ").concat(e.toMiddleware))}"after"===e.relation&&t.after.push(e),"before"===e.relation&&t.before.push(e)}}));var u;return(u=i,u.sort(((e,t)=>s[t.step]-s[e.step]||a[t.priority||"normal"]-a[e.priority||"normal"]))).map(d).reduce(((e,t)=>(e.push(...t),e)),[])},f={add:function(t){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{name:i,override:s,aliases:a}=r,l={step:"initialize",priority:"normal",middleware:t,...r},d=n(i,a);if(d.length>0){if(d.some((e=>c.has(e)))){if(!s)throw new Error("Duplicate middleware name '".concat(o(i,a),"'"));for(const t of d){const r=e.findIndex((e=>{var r;return e.name===t||(null===(r=e.aliases)||void 0===r?void 0:r.some((e=>e===t)))}));if(-1===r)continue;const n=e[r];if(n.step!==l.step||l.priority!==n.priority)throw new Error('"'.concat(o(n.name,n.aliases),'" middleware with ')+"".concat(n.priority," priority in ").concat(n.step," step cannot ")+'be overridden by "'.concat(o(i,a),'" middleware with ')+"".concat(l.priority," priority in ").concat(l.step," step."));e.splice(r,1)}}for(const e of d)c.add(e)}e.push(l)},addRelativeTo:(e,r)=>{const{name:i,override:s,aliases:a}=r,l={middleware:e,...r},d=n(i,a);if(d.length>0){if(d.some((e=>c.has(e)))){if(!s)throw new Error("Duplicate middleware name '".concat(o(i,a),"'"));for(const e of d){const r=t.findIndex((t=>{var r;return t.name===e||(null===(r=t.aliases)||void 0===r?void 0:r.some((t=>t===e)))}));if(-1===r)continue;const n=t[r];if(n.toMiddleware!==l.toMiddleware||n.relation!==l.relation)throw new Error('"'.concat(o(n.name,n.aliases),'" middleware ')+"".concat(n.relation,' "').concat(n.toMiddleware,'" middleware cannot be overridden ')+'by "'.concat(o(i,a),'" middleware ').concat(l.relation," ")+'"'.concat(l.toMiddleware,'" middleware.'));t.splice(r,1)}}for(const e of d)c.add(e)}t.push(l)},clone:()=>l(i()),use:e=>{e.applyToStack(f)},remove:r=>"string"===typeof r?(r=>{let o=!1;const i=e=>{const t=n(e.name,e.aliases);if(t.includes(r)){o=!0;for(const e of t)c.delete(e);return!1}return!0};return e=e.filter(i),t=t.filter(i),o})(r):(r=>{let o=!1;const i=e=>{if(e.middleware===r){o=!0;for(const t of n(e.name,e.aliases))c.delete(t);return!1}return!0};return e=e.filter(i),t=t.filter(i),o})(r),removeByTag:r=>{let o=!1;const i=e=>{const{tags:t,name:i,aliases:s}=e;if(t&&t.includes(r)){const e=n(i,s);for(const t of e)c.delete(t);return o=!0,!1}return!0};return e=e.filter(i),t=t.filter(i),o},concat:e=>{var t,n;const o=l(i());return o.use(e),o.identifyOnResolve(r||o.identifyOnResolve()||null!==(t=null===(n=e.identifyOnResolve)||void 0===n?void 0:n.call(e))&&void 0!==t&&t),o},applyToStack:l,identify:()=>u(!0).map((e=>{var t;const r=null!==(t=e.step)&&void 0!==t?t:e.relation+" "+e.toMiddleware;return o(e.name,e.aliases)+" - "+r})),identifyOnResolve:e=>("boolean"===typeof e&&(r=e),r),resolve:(e,t)=>{for(const r of u().map((e=>e.middleware)).reverse())e=r(e,t);return r&&console.log(f.identify()),e}};return f},s={initialize:5,serialize:4,build:3,finalizeRequest:2,deserialize:1},a={high:3,normal:2,low:1};class c{constructor(e){this.config=e,this.middlewareStack=i()}send(e,t,r){const n="function"!==typeof t?t:void 0,o="function"===typeof t?t:r;let i;if(void 0===n&&!0===this.config.cacheMiddleware){this.handlers||(this.handlers=new WeakMap);const t=this.handlers;t.has(e.constructor)?i=t.get(e.constructor):(i=e.resolveMiddleware(this.middlewareStack,this.config,n),t.set(e.constructor,i))}else delete this.handlers,i=e.resolveMiddleware(this.middlewareStack,this.config,n);if(!o)return i(e).then((e=>e.output));i(e).then((e=>o(null,e.output)),(e=>o(e))).catch((()=>{}))}destroy(){var e,t;null===(e=this.config)||void 0===e||null===(e=e.requestHandler)||void 0===e||null===(t=e.destroy)||void 0===t||t.call(e),delete this.handlers}}var l=r(56346);const d=async function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Uint8Array,t=arguments.length>1?arguments[1]:void 0;if(e instanceof Uint8Array)return l.Mu.mutate(e);if(!e)return l.Mu.mutate(new Uint8Array);const r=t.streamCollector(e);return l.Mu.mutate(await r)};var u=r(28935);class f{constructor(){this.middlewareStack=i()}static classBuilder(){return new h}resolveMiddlewareWithContext(e,t,r,n){let{middlewareFn:o,clientName:i,commandName:s,inputFilterSensitiveLog:a,outputFilterSensitiveLog:c,smithyContext:l,additionalContext:d,CommandCtor:f}=n;for(const u of o.bind(this)(f,e,t,r))this.middlewareStack.use(u);const h=e.concat(this.middlewareStack),{logger:p}=t,m={logger:p,clientName:i,commandName:s,inputFilterSensitiveLog:a,outputFilterSensitiveLog:c,[u.Vf]:{commandInstance:this,...l},...d},{requestHandler:y}=t;return h.resolve((e=>y.handle(e.request,r||{})),m)}}class h{constructor(){this._init=()=>{},this._ep={},this._middlewareFn=()=>[],this._commandName="",this._clientName="",this._additionalContext={},this._smithyContext={},this._inputFilterSensitiveLog=e=>e,this._outputFilterSensitiveLog=e=>e,this._serializer=null,this._deserializer=null}init(e){this._init=e}ep(e){return this._ep=e,this}m(e){return this._middlewareFn=e,this}s(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this._smithyContext={service:e,operation:t,...r},this}c(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this._additionalContext=e,this}n(e,t){return this._clientName=e,this._commandName=t,this}f(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e=>e,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e=>e;return this._inputFilterSensitiveLog=e,this._outputFilterSensitiveLog=t,this}ser(e){return this._serializer=e,this}de(e){return this._deserializer=e,this}build(){const e=this;let t;return t=class extends f{static getEndpointParameterInstructions(){return e._ep}constructor(){for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];let[o]=r;super(),this.serialize=e._serializer,this.deserialize=e._deserializer,this.input=null!==o&&void 0!==o?o:{},e._init(this)}resolveMiddleware(r,n,o){return this.resolveMiddlewareWithContext(r,n,o,{CommandCtor:t,middlewareFn:e._middlewareFn,clientName:e._clientName,commandName:e._commandName,inputFilterSensitiveLog:e._inputFilterSensitiveLog,outputFilterSensitiveLog:e._outputFilterSensitiveLog,smithyContext:e._smithyContext,additionalContext:e._additionalContext})}}}}const p="***SensitiveInformation***",m=(e,t)=>{for(const r of Object.keys(e)){const n=e[r],o=async function(e,t,r){const o=new n(e);if("function"===typeof t)this.send(o,t);else{if("function"!==typeof r)return this.send(o,t);if("object"!==typeof t)throw new Error("Expected http options but got ".concat(typeof t));this.send(o,t||{},r)}},i=(r[0].toLowerCase()+r.slice(1)).replace(/Command$/,"");t.prototype[i]=o}},y=e=>{if(null!==e&&void 0!==e){if("number"===typeof e){if(0!==e&&1!==e||I.warn(j("Expected boolean, got ".concat(typeof e,": ").concat(e))),0===e)return!1;if(1===e)return!0}if("string"===typeof e){const t=e.toLowerCase();if("false"!==t&&"true"!==t||I.warn(j("Expected boolean, got ".concat(typeof e,": ").concat(e))),"false"===t)return!1;if("true"===t)return!0}if("boolean"===typeof e)return e;throw new TypeError("Expected boolean, got ".concat(typeof e,": ").concat(e))}},g=e=>{if(null!==e&&void 0!==e){if("string"===typeof e){const t=parseFloat(e);if(!Number.isNaN(t))return String(t)!==String(e)&&I.warn(j("Expected number but observed string: ".concat(e))),t}if("number"===typeof e)return e;throw new TypeError("Expected number, got ".concat(typeof e,": ").concat(e))}},w=Math.ceil(2**127*(2-2**-23)),v=e=>{const t=g(e);if(void 0!==t&&!Number.isNaN(t)&&t!==1/0&&t!==-1/0&&Math.abs(t)>w)throw new TypeError("Expected 32-bit float, got ".concat(e));return t},b=e=>{if(null!==e&&void 0!==e){if(Number.isInteger(e)&&!Number.isNaN(e))return e;throw new TypeError("Expected integer, got ".concat(typeof e,": ").concat(e))}},E=e=>x(e,32),C=e=>x(e,16),S=e=>x(e,8),x=(e,t)=>{const r=b(e);if(void 0!==r&&T(r,t)!==r)throw new TypeError("Expected ".concat(t,"-bit integer, got ").concat(e));return r},T=(e,t)=>{switch(t){case 32:return Int32Array.of(e)[0];case 16:return Int16Array.of(e)[0];case 8:return Int8Array.of(e)[0]}},A=(e,t)=>{if(null===e||void 0===e){if(t)throw new TypeError("Expected a non-null value for ".concat(t));throw new TypeError("Expected a non-null value")}return e},_=e=>{if(null!==e&&void 0!==e){if("string"===typeof e)return e;if(["boolean","number","bigint"].includes(typeof e))return I.warn(j("Expected string, got ".concat(typeof e,": ").concat(e))),String(e);throw new TypeError("Expected string, got ".concat(typeof e,": ").concat(e))}},R=e=>g("string"==typeof e?N(e):e),k=/(-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+-]?\d+)?)|(-?Infinity)|(NaN)/g,N=e=>{const t=e.match(k);if(null===t||t[0].length!==e.length)throw new TypeError("Expected real number, got implicit NaN");return parseFloat(e)},M=e=>E("string"===typeof e?N(e):e),O=e=>C("string"===typeof e?N(e):e),j=e=>String(new TypeError(e).stack||e).split("\n").slice(0,5).filter((e=>!e.includes("stackTraceWarning"))).join("\n"),I={warn:console.warn},P=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];const q=new RegExp(/^(\d{4})-(\d{2})-(\d{2})[tT](\d{2}):(\d{2}):(\d{2})(?:\.(\d+))?[zZ]$/),H=e=>{if(null===e||void 0===e)return;if("string"!==typeof e)throw new TypeError("RFC-3339 date-times must be expressed as strings");const t=q.exec(e);if(!t)throw new TypeError("Invalid RFC-3339 date-time value");const[r,n,o,i,s,a,c,l]=t,d=O(Z(n)),u=W(o,"month",1,12),f=W(i,"day",1,31);return z(d,u,f,{hours:s,minutes:a,seconds:c,fractionalMilliseconds:l})},L=new RegExp(/^(\d{4})-(\d{2})-(\d{2})[tT](\d{2}):(\d{2}):(\d{2})(?:\.(\d+))?(([-+]\d{2}\:\d{2})|[zZ])$/),F=e=>{if(null===e||void 0===e)return;if("string"!==typeof e)throw new TypeError("RFC-3339 date-times must be expressed as strings");const t=L.exec(e);if(!t)throw new TypeError("Invalid RFC-3339 date-time value");const[r,n,o,i,s,a,c,l,d]=t,u=O(Z(n)),f=W(o,"month",1,12),h=W(i,"day",1,31),p=z(u,f,h,{hours:s,minutes:a,seconds:c,fractionalMilliseconds:l});return"Z"!=d.toUpperCase()&&p.setTime(p.getTime()-V(d)),p},U=e=>{if(null===e||void 0===e)return;let t;if("number"===typeof e)t=e;else if("string"===typeof e)t=R(e);else{if("object"!==typeof e||1!==e.tag)throw new TypeError("Epoch timestamps must be expressed as floating point numbers or their string representation");t=e.value}if(Number.isNaN(t)||t===1/0||t===-1/0)throw new TypeError("Epoch timestamps must be valid, non-Infinite, non-NaN numerics");return new Date(Math.round(1e3*t))},z=(e,t,r,n)=>{const o=t-1;return D(e,o,r),new Date(Date.UTC(e,o,r,W(n.hours,"hour",0,23),W(n.minutes,"minute",0,59),W(n.seconds,"seconds",0,60),J(n.fractionalMilliseconds)))},B=[31,28,31,30,31,30,31,31,30,31,30,31],D=(e,t,r)=>{let n=B[t];if(1===t&&$(e)&&(n=29),r>n)throw new TypeError("Invalid day for ".concat(P[t]," in ").concat(e,": ").concat(r))},$=e=>e%4===0&&(e%100!==0||e%400===0),W=(e,t,r,n)=>{const o=(e=>S("string"===typeof e?N(e):e))(Z(e));if(o<r||o>n)throw new TypeError("".concat(t," must be between ").concat(r," and ").concat(n,", inclusive"));return o},J=e=>null===e||void 0===e?0:1e3*(e=>v("string"==typeof e?N(e):e))("0."+e),V=e=>{const t=e[0];let r=1;if("+"==t)r=1;else{if("-"!=t)throw new TypeError("Offset direction, ".concat(t,', must be "+" or "-"'));r=-1}return r*(60*Number(e.substring(1,3))+Number(e.substring(4,6)))*60*1e3},Z=e=>{let t=0;for(;t<e.length-1&&"0"===e.charAt(t);)t++;return 0===t?e:e.slice(t)};class K extends Error{constructor(e){super(e.message),Object.setPrototypeOf(this,K.prototype),this.name=e.name,this.$fault=e.$fault,this.$metadata=e.$metadata}}const Y=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};Object.entries(t).filter((e=>{let[,t]=e;return void 0!==t})).forEach((t=>{let[r,n]=t;void 0!=e[r]&&""!==e[r]||(e[r]=n)}));const r=e.message||e.Message||"UnknownError";return e.message=r,delete e.Message,e},G=e=>t=>{let{output:r,parsedBody:n,errorCode:o}=t;(e=>{let{output:t,parsedBody:r,exceptionCtor:n,errorCode:o}=e;const i=Q(t),s=i.httpStatusCode?i.httpStatusCode+"":void 0,a=new n({name:(null===r||void 0===r?void 0:r.code)||(null===r||void 0===r?void 0:r.Code)||o||s||"UnknownError",$fault:"client",$metadata:i});throw Y(a,r)})({output:r,parsedBody:n,exceptionCtor:e,errorCode:o})},Q=e=>{var t,r;return{httpStatusCode:e.statusCode,requestId:null!==(t=null!==(r=e.headers["x-amzn-requestid"])&&void 0!==r?r:e.headers["x-amzn-request-id"])&&void 0!==t?t:e.headers["x-amz-request-id"],extendedRequestId:e.headers["x-amz-id-2"],cfId:e.headers["x-amz-cf-id"]}},X=e=>{switch(e){case"standard":case"cross-region":return{retryMode:"standard",connectionTimeout:3100};case"in-region":return{retryMode:"standard",connectionTimeout:1100};case"mobile":return{retryMode:"standard",connectionTimeout:3e4};default:return{}}};function ee(e){return encodeURIComponent(e).replace(/[!'()*]/g,(function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()}))}const te=e=>{const t=[];for(const r in u.dB){const n=u.dB[r];void 0!==e[n]&&t.push({algorithmId:()=>n,checksumConstructor:()=>e[n]})}return{_checksumAlgorithms:t,addChecksumAlgorithm(e){this._checksumAlgorithms.push(e)},checksumAlgorithms(){return this._checksumAlgorithms}}},re=e=>{const t={};return e.checksumAlgorithms().forEach((e=>{t[e.algorithmId()]=e.checksumConstructor()})),t},ne=e=>{let t=e.retryStrategy;return{setRetryStrategy(e){t=e},retryStrategy:()=>t}},oe=e=>{const t={};return t.retryStrategy=e.retryStrategy(),t},ie=e=>({...te(e),...ne(e)}),se=e=>({...re(e),...oe(e)}),ae=e=>{const t="#text";for(const r in e)e.hasOwnProperty(r)&&void 0!==e[r][t]?e[r]=e[r][t]:"object"===typeof e[r]&&null!==e[r]&&(e[r]=ae(e[r]));return e},ce=function(){const e=Object.getPrototypeOf(this).constructor,t=new(Function.bind.apply(String,[null,...arguments]));return Object.setPrototypeOf(t,e.prototype),t};ce.prototype=Object.create(String.prototype,{constructor:{value:ce,enumerable:!1,writable:!0,configurable:!0}}),Object.setPrototypeOf(ce,String);class le{trace(){}debug(){}info(){}warn(){}error(){}}const de=(e,t)=>{const r={};for(const n in t)ue(r,e,t,n);return r},ue=(e,t,r,n)=>{if(null!==t){let o=r[n];"function"===typeof o&&(o=[,o]);const[i=fe,s=he,a=n]=o;return void(("function"===typeof i&&i(t[a])||"function"!==typeof i&&i)&&(e[n]=s(t[a])))}let[o,i]=r[n];if("function"===typeof i){let t;const r=void 0===o&&null!=(t=i()),s="function"===typeof o&&!!o(void 0)||"function"!==typeof o&&!!o;r?e[n]=t:s&&(e[n]=i())}else{const t=void 0===o&&null!=i,r="function"===typeof o&&!!o(i)||"function"!==typeof o&&!!o;(t||r)&&(e[n]=i)}},fe=e=>null!=e,he=e=>e,pe=e=>{if(null==e)return{};if(Array.isArray(e))return e.filter((e=>null!=e)).map(pe);if("object"===typeof e){const t={};for(const r of Object.keys(e))null!=e[r]&&(t[r]=pe(e[r]));return t}return e}},28935:(e,t,r)=>{var n,o,i,s;r.d(t,{dB:()=>s,Ue:()=>i,Vf:()=>c}),function(e){e.HEADER="header",e.QUERY="query"}(n||(n={})),function(e){e.HEADER="header",e.QUERY="query"}(o||(o={})),function(e){e.HTTP="http",e.HTTPS="https"}(i||(i={})),function(e){e.MD5="md5",e.CRC32="crc32",e.CRC32C="crc32c",e.SHA1="sha1",e.SHA256="sha256"}(s||(s={}));var a;!function(e){e[e.HEADER=0]="HEADER",e[e.TRAILER=1]="TRAILER"}(a||(a={}));const c="__smithy_context";var l,d;!function(e){e.PROFILE="profile",e.SSO_SESSION="sso-session",e.SERVICES="services"}(l||(l={})),function(e){e.HTTP_0_9="http/0.9",e.HTTP_1_0="http/1.0",e.TDS_8_0="tds/8.0"}(d||(d={}))},85189:(e,t,r)=>{r.d(t,{E:()=>c,n:()=>d});const n={},o=new Array(64);for(let u=0,f="A".charCodeAt(0),h="Z".charCodeAt(0);u+f<=h;u++){const e=String.fromCharCode(u+f);n[e]=u,o[u]=e}for(let u=0,f="a".charCodeAt(0),h="z".charCodeAt(0);u+f<=h;u++){const e=String.fromCharCode(u+f),t=u+26;n[e]=t,o[t]=e}for(let u=0;u<10;u++){n[u.toString(10)]=u+52;const e=u.toString(10),t=u+52;n[e]=t,o[t]=e}n["+"]=62,o[62]="+",n["/"]=63,o[63]="/";const i=6,s=8,a=63,c=e=>{let t=e.length/4*3;"=="===e.slice(-2)?t-=2:"="===e.slice(-1)&&t--;const r=new ArrayBuffer(t),o=new DataView(r);for(let a=0;a<e.length;a+=4){let t=0,r=0;for(let o=a,s=a+3;o<=s;o++)if("="!==e[o]){if(!(e[o]in n))throw new TypeError("Invalid character ".concat(e[o]," in base64 string."));t|=n[e[o]]<<(s-o)*i,r+=i}else t>>=i;const c=a/4*3;t>>=r%s;const l=Math.floor(r/s);for(let e=0;e<l;e++){const r=(l-e-1)*s;o.setUint8(c+e,(t&255<<r)>>r)}}return new Uint8Array(r)};var l=r(39152);function d(e){let t;t="string"===typeof e?(0,l.a)(e):e;const r="object"===typeof t&&"number"===typeof t.length,n="object"===typeof t&&"number"===typeof t.byteOffset&&"number"===typeof t.byteLength;if(!r&&!n)throw new Error("@smithy/util-base64: toBase64 encoder function only accepts string | Uint8Array.");let c="";for(let l=0;l<t.length;l+=3){let e=0,r=0;for(let o=l,i=Math.min(l+3,t.length);o<i;o++)e|=t[o]<<(i-o-1)*s,r+=s;const n=Math.ceil(r/i);e<<=n*i-r;for(let t=1;t<=n;t++){const r=(n-t)*i;c+=o[(e&a<<r)>>r]}c+="==".slice(0,4-n)}return c}},21547:(e,t,r)=>{r.d(t,{a:()=>i,n:()=>s});const n={},o={};for(let a=0;a<256;a++){let e=a.toString(16).toLowerCase();1===e.length&&(e="0".concat(e)),n[a]=e,o[e]=a}function i(e){if(e.length%2!==0)throw new Error("Hex encoded strings must have an even number length");const t=new Uint8Array(e.length/2);for(let r=0;r<e.length;r+=2){const n=e.slice(r,r+2).toLowerCase();if(!(n in o))throw new Error("Cannot decode unrecognized sequence ".concat(n," as hexadecimal"));t[r/2]=o[n]}return t}function s(e){let t="";for(let r=0;r<e.byteLength;r++)t+=n[e[r]];return t}},56346:(e,t,r)=>{r.d(t,{Mu:()=>s,c9:()=>u});var n=r(85189),o=r(30893),i=r(39152);class s extends Uint8Array{static fromString(e){if("string"===typeof e)return function(e,t){return"base64"===t?s.mutate((0,n.E)(e)):s.mutate((0,i.a)(e))}(e,arguments.length>1&&void 0!==arguments[1]?arguments[1]:"utf-8");throw new Error("Unsupported conversion from ".concat(typeof e," to Uint8ArrayBlobAdapter."))}static mutate(e){return Object.setPrototypeOf(e,s.prototype),e}transformToString(){return function(e){return"base64"===(arguments.length>1&&void 0!==arguments[1]?arguments[1]:"utf-8")?(0,n.n)(e):(0,o.P)(e)}(this,arguments.length>0&&void 0!==arguments[0]?arguments[0]:"utf-8")}}var a=r(28344),c=r(21547);const l=e=>{var t;return"function"===typeof ReadableStream&&((null===e||void 0===e||null===(t=e.constructor)||void 0===t?void 0:t.name)===ReadableStream.name||e instanceof ReadableStream)},d="The stream has already been transformed.",u=e=>{if(!f(e)&&!l(e)){var t;const r=(null===e||void 0===e||null===(t=e.__proto__)||void 0===t||null===(t=t.constructor)||void 0===t?void 0:t.name)||e;throw new Error("Unexpected stream implementation, expect Blob or ReadableStream, got ".concat(r))}let r=!1;const i=async()=>{if(r)throw new Error(d);return r=!0,await(0,a.kv)(e)};return Object.assign(e,{transformToByteArray:i,transformToString:async e=>{const t=await i();if("base64"===e)return(0,n.n)(t);if("hex"===e)return(0,c.n)(t);if(void 0===e||"utf8"===e||"utf-8"===e)return(0,o.P)(t);if("function"===typeof TextDecoder)return new TextDecoder(e).decode(t);throw new Error("TextDecoder is not available, please make sure polyfill is provided.")},transformToWebStream:()=>{if(r)throw new Error(d);if(r=!0,f(e))return(e=>{if("function"!==typeof e.stream)throw new Error("Cannot transform payload Blob to web stream. Please make sure the Blob.stream() is polyfilled.\nIf you are using React Native, this API is not yet supported, see: https://react-native.canny.io/feature-requests/p/fetch-streaming-body");return e.stream()})(e);if(l(e))return e;throw new Error("Cannot transform payload to web stream, got ".concat(e))}})},f=e=>"function"===typeof Blob&&e instanceof Blob},55786:(e,t,r)=>{r.d(t,{o:()=>n});const n=e=>encodeURIComponent(e).replace(/[!'()*]/g,o),o=e=>"%".concat(e.charCodeAt(0).toString(16).toUpperCase())},39152:(e,t,r)=>{r.d(t,{a:()=>n});const n=e=>(new TextEncoder).encode(e)},30893:(e,t,r)=>{r.d(t,{P:()=>n});const n=e=>{if("string"===typeof e)return e;if("object"!==typeof e||"number"!==typeof e.byteOffset||"number"!==typeof e.byteLength)throw new Error("@smithy/util-utf8: toUtf8 encoder function only accepts string | Uint8Array.");return new TextDecoder("utf-8").decode(e)}}}]);
//# sourceMappingURL=8111.d4e0188d.chunk.js.map