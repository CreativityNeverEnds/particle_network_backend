(self.webpackChunkparticle_auth_cra=self.webpackChunkparticle_auth_cra||[]).push([[3887],{44510:(n,e,t)=>{"use strict";t.d(e,{A:()=>d});var a=t(6326),o=t(79889),i=t.n(o),c=t(65043),r=t(25529),l=t(39010),u=t(81228),s=t(26431);const d=function(n,e){var t;s.A&&((0,u.Tn)(n)||console.error("useThrottleFn expected parameter is a function, got ".concat(typeof n)));var o=(0,r.A)(n),d=null!==(t=null===e||void 0===e?void 0:e.wait)&&void 0!==t?t:1e3,g=(0,c.useMemo)((function(){return i()((function(){for(var n=[],e=0;e<arguments.length;e++)n[e]=arguments[e];return o.current.apply(o,(0,a.fX)([],(0,a.zs)(n),!1))}),d,e)}),[]);return(0,l.A)((function(){g.cancel()})),{run:g,cancel:g.cancel,flush:g.flush}}},48365:(n,e,t)=>{"use strict";t.d(e,{A:()=>i});var a=t(65043),o=function(n){return function(e,t){var o=(0,a.useRef)(!1);n((function(){return function(){o.current=!1}}),[]),n((function(){if(o.current)return e();o.current=!0}),t)}};const i=o(a.useEffect)},61141:(n,e,t)=>{var a=t(10143),o=/^\s+/;n.exports=function(n){return n?n.slice(0,a(n)+1).replace(o,""):n}},10143:n=>{var e=/\s/;n.exports=function(n){for(var t=n.length;t--&&e.test(n.charAt(t)););return t}},93950:(n,e,t)=>{var a=t(24305),o=t(4757),i=t(40801),c=Math.max,r=Math.min;n.exports=function(n,e,t){var l,u,s,d,g,m,p=0,f=!1,v=!1,h=!0;if("function"!=typeof n)throw new TypeError("Expected a function");function A(e){var t=l,a=u;return l=u=void 0,p=e,d=n.apply(a,t)}function y(n){var t=n-m;return void 0===m||t>=e||t<0||v&&n-p>=s}function x(){var n=o();if(y(n))return w(n);g=setTimeout(x,function(n){var t=e-(n-m);return v?r(t,s-(n-p)):t}(n))}function w(n){return g=void 0,h&&l?A(n):(l=u=void 0,d)}function b(){var n=o(),t=y(n);if(l=arguments,u=this,m=n,t){if(void 0===g)return function(n){return p=n,g=setTimeout(x,e),f?A(n):d}(m);if(v)return clearTimeout(g),g=setTimeout(x,e),A(m)}return void 0===g&&(g=setTimeout(x,e)),d}return e=i(e)||0,a(t)&&(f=!!t.leading,s=(v="maxWait"in t)?c(i(t.maxWait)||0,e):s,h="trailing"in t?!!t.trailing:h),b.cancel=function(){void 0!==g&&clearTimeout(g),p=0,l=m=u=g=void 0},b.flush=function(){return void 0===g?d:w(o())},b}},24305:n=>{n.exports=function(n){var e=typeof n;return null!=n&&("object"==e||"function"==e)}},4757:(n,e,t)=>{var a=t(56552);n.exports=function(){return a.Date.now()}},79889:(n,e,t)=>{var a=t(93950),o=t(24305);n.exports=function(n,e,t){var i=!0,c=!0;if("function"!=typeof n)throw new TypeError("Expected a function");return o(t)&&(i="leading"in t?!!t.leading:i,c="trailing"in t?!!t.trailing:c),a(n,e,{leading:i,maxWait:e,trailing:c})}},40801:(n,e,t)=>{var a=t(61141),o=t(24305),i=t(19841),c=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,l=/^0o[0-7]+$/i,u=parseInt;n.exports=function(n){if("number"==typeof n)return n;if(i(n))return NaN;if(o(n)){var e="function"==typeof n.valueOf?n.valueOf():n;n=o(e)?e+"":e}if("string"!=typeof n)return 0===n?n:+n;n=a(n);var t=r.test(n);return t||l.test(n)?u(n.slice(2),t?2:8):c.test(n)?NaN:+n}},80686:(n,e,t)=>{"use strict";t.d(e,{a:()=>a});var a="data:image/png;base64,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"},19104:(n,e,t)=>{"use strict";t.d(e,{a:()=>i});var a=t(46686),o=t(65043),i=()=>{let{authCoreModal:n}=(0,a.pa)(),e=(0,o.useMemo)((()=>n.rootModalContainer),[n]),t=(0,o.useCallback)((function(n){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";var a;let o=document.createElement("div");o.className="ant-message-notice";let i=document.createElement("div");i.className="ant-message-notice-content";let c=document.createElement("div");c.className="ant-message-custom-content";let r=document.createElement("span");r.setAttribute("role","img"),r.setAttribute("aria-label","check-circle"),r.className="anticon anticon-check-circle";let l=document.createElement("svg");"success"===n?(c.className+=" ant-message-success",l.innerHTML='<svg viewBox="64 64 896 896" focusable="false" data-icon="check-circle" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"></path></svg>'):"error"===n?(c.className+=" ant-message-error",l.innerHTML='<svg viewBox="64 64 896 896" focusable="false" data-icon="close-circle" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm165.4 618.2l-66-.3L512 563.4l-99.3 118.4-66.1.3c-4.4 0-8-3.5-8-8 0-1.9.7-3.7 1.9-5.2l130.1-155L340.5 359a8.32 8.32 0 01-1.9-5.2c0-4.4 3.6-8 8-8l66.1.3L512 464.6l99.3-118.4 66-.3c4.4 0 8 3.5 8 8 0 1.9-.7 3.7-1.9 5.2L553.5 514l130 155c1.2 1.5 1.9 3.3 1.9 5.2 0 4.4-3.6 8-8 8z"></path></svg>'):"info"===n?(c.className+=" ant-message-info",l.innerHTML='<svg viewBox="64 64 896 896" focusable="false" data-icon="info-circle" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 010-96 48.01 48.01 0 010 96z"></path></svg>'):"warning"===n&&(c.className+=" ant-message-warning",l.innerHTML='<svg viewBox="64 64 896 896" focusable="false" data-icon="exclamation-circle" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 010-96 48.01 48.01 0 010 96z"></path></svg>');let u=document.createElement("span");return u.textContent=t,r.appendChild(l),c.appendChild(r),c.appendChild(u),i.appendChild(c),o.appendChild(i),null==(a=null==e?void 0:e.querySelector(".ant-message"))||a.appendChild(o),o}),[e]),i=(0,o.useCallback)((n=>{let a=t("error",n);setTimeout((()=>{var n;null==(n=null==e?void 0:e.querySelector(".ant-message"))||n.removeChild(a)}),2e3)}),[t]),c=(0,o.useCallback)((n=>{let a=t("info",n);setTimeout((()=>{var n;null==(n=null==e?void 0:e.querySelector(".ant-message"))||n.removeChild(a)}),2e3)}),[t]),r=(0,o.useCallback)((n=>{let a=t("success",n);setTimeout((()=>{var n;null==(n=null==e?void 0:e.querySelector(".ant-message"))||n.removeChild(a)}),2e3)}),[t]),l=(0,o.useCallback)((n=>{let a=t("warning",n);setTimeout((()=>{var n;null==(n=null==e?void 0:e.querySelector(".ant-message"))||n.removeChild(a)}),2e3)}),[t]);return(0,o.useEffect)((()=>{if(e){if(e.querySelector(".ant-message"))return;let n=document.createElement("div");n.className="ant-message",n.style.zIndex="999999999999999999999999",e.appendChild(n)}}),[e]),{error:i,info:c,success:r,warning:l}}},41484:(n,e,t)=>{"use strict";t.d(e,{a:()=>c});var a=t(59377),o=t(46686),i=t(65043),c=n=>{var e,t;let{children:c,leftContent:r,rightContent:l,onBack:u}=n,{displayBackBtn:s=!1}=n,d=(0,o.ra)(),{customRouter:g}=(0,o.qa)();return u&&(s=!0),(r||(null!=(t=null==(e=null==g?void 0:g.history)?void 0:e.length)?t:0)<=1)&&(s=!1),i.createElement("div",{className:"width-100"},i.createElement("style",null,".p-auth-header {\n  position: sticky;\n  z-index: 99;\n  top: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  min-height: 60px;\n  font-weight: 500;\n  font-size: 18px;\n  text-align: center;\n  color: var(--text-color);\n  background-color: var(--theme-background-color);\n  opacity: 0.97;\n}\n.p-auth-header .left {\n  position: absolute;\n  left: 0;\n  min-width: 60px;\n  height: 100%;\n}\n.p-auth-header .left .header-back-btn {\n  position: absolute;\n  z-index: 100;\n  top: 16px;\n  left: 16px;\n  font-size: 28px;\n}\n.p-auth-header .middle .info-request {\n  position: initial;\n  width: auto;\n}\n.p-auth-header .middle .info-title {\n  padding-top: 0;\n  margin-top: 4px;\n}\n.p-auth-header .middle .info-address {\n  justify-content: center;\n  align-items: center;\n  width: 140px;\n  padding-top: 2px;\n  margin: auto;\n  margin-top: 10px;\n  text-align: center;\n}\n.p-auth-header .middle .info-address .copy-icon {\n  position: relative;\n  top: 1px;\n}\n.p-auth-header .right {\n  position: absolute;\n  right: 0;\n  min-width: 60px;\n  height: 100%;\n}\n@media (min-width: 600px) {\n  .p-auth-header {\n    width: calc(100 * var(--vw));\n  }\n}\n"),i.createElement("div",{className:"p-auth-header"},i.createElement("div",{className:"left"},i.createElement(i.Fragment,null,s&&i.createElement(a.b,{className:"header-back-btn",name:"circle_back",onClick:()=>{u?u():d(-1)}}),r)),i.createElement("div",{className:"middle"},c),i.createElement("div",{className:"right"},l)))}},43505:(n,e,t)=>{"use strict";t.d(e,{a:()=>p,b:()=>f,c:()=>v});var a,o=t(19104),i=t(41484),c=t(59377),r=t(43290),l=t(46686),u=t(25001),s=t(44510),d=t(8417),g=t(65043),m=t(74117),p=n=>{let{userInfo:e,t:t}=n;return[{type:u.hT.phone,icon:l.q,name:t("account.mobile"),value:e.phone,id:void 0,isOriginal:!1},{type:u.hT.email,icon:l.i,name:t("account.email"),value:e.email,id:void 0,isOriginal:!1},{type:u.hT.google,icon:l.l,name:t("login.google"),value:e.google_email,id:e.google_id,isOriginal:!1},{type:u.hT.facebook,icon:l.j,name:t("login.facebook"),value:e.facebook_email,id:e.facebook_id,isOriginal:!1},{type:u.hT.twitter,icon:l.s,name:t("login.twitter"),value:e.twitter_email,id:e.twitter_id,isOriginal:!1}]},f=n=>{var e,t,a,o;let i=null==n?void 0:n.replace(" ","");if(!i)return i;if(null!=(e=null==i?void 0:i.includes)&&e.call(i,"@"))i="".concat(i.split("@")[0].substr(0,3),"****@").concat(i.split("@")[1]);else if(null!=(t=null==i?void 0:i.includes)&&t.call(i,"+")){let n=(0,d.L)(i),e=n.nationalNumber.toString();i="+".concat(n.countryCallingCode," ").concat(null==(a=null==e?void 0:e.substr)?void 0:a.call(e,0,3),"****").concat(null==(o=null==e?void 0:e.substr)?void 0:o.call(e,-4))}else i&&(i="".concat(i.substr(0,3),"****").concat(i.substr(-4)));return i},v=()=>{let{t:n}=(0,m.Bd)(),e=(0,l.ra)(),{userInfo:t,showSelectSecurityAccount:u}=(0,l.oa)(),d=(0,o.a)(),{run:v}=(0,s.A)((n=>{e("/account/verify",{state:{account:n.account,authType:a,pageType:"verify_security_account_bind_login_account"}})}),{wait:3e3}),h=(0,g.useMemo)((()=>p({userInfo:t,t:n})),[t]);return g.createElement("div",{className:"login-account-box"},g.createElement("style",null,".login-account-box {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  color: var(--text-color);\n}\n.login-account-box .login-account-title {\n  font-weight: 500;\n  font-size: 18px;\n}\n.login-account-box .login-account-description {\n  margin: 32px 18px 40px;\n  font-weight: 400;\n  font-size: 13px;\n  color: var(--secondary-text-color);\n}\n.login-account-box .account-list {\n  width: 100%;\n  padding: 0 18px;\n}\n.login-account-box .account-list .login-account-item {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  width: 100%;\n  height: 60px;\n  padding: 0 12px 0 14px;\n  margin-bottom: 10px;\n  border-radius: var(--card-border-radius);\n  background: var(--card-unclickable-background-color);\n  cursor: pointer;\n}\n.login-account-box .account-list .login-account-item img {\n  width: 35px;\n  height: 35px;\n  border-radius: 50%;\n  background-color: white;\n}\n.login-account-box .account-list .login-account-item .login-account-name {\n  flex-grow: 1;\n  margin-left: 8px;\n  font-weight: 500;\n  font-size: 14px;\n}\n.login-account-box .account-list .login-account-item .login-account-value {\n  flex-grow: 2;\n  max-width: 180px;\n  margin-right: 8px;\n  overflow: hidden;\n  text-align: right;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  color: var(--text-color);\n}\n.login-account-box .account-list .login-account-item .login-account-value[data-no-linked='true'] {\n  color: var(--secondary-text-color);\n}\n.login-account-box .account-list .login-account-item:hover {\n  opacity: var(--hover-opacity);\n}\n.login-account-box .account-list .arrow-right-icon {\n  color: var(--text-color);\n}\n.login-account-box .account-list .arrow-right-icon svg {\n  width: 12px;\n  height: 12px;\n}\n.login-account-box .footer-box {\n  position: absolute;\n  bottom: 0;\n}\n"),g.createElement(i.a,{displayBackBtn:!0},n("account.login_account")),g.createElement("div",{className:"scroll-content"},g.createElement("div",{className:"login-account-description"},n("account.login_account_hint")),g.createElement("div",{className:"account-list"},null==h?void 0:h.map(((o,i)=>g.createElement("div",{className:"login-account-item",onClick:()=>{a=o.type,(n=>{var o,i,c,r,l,s;n.value||n.id?e("/login-account/bind",{state:{authType:n.type}}):null!=(o=null==t?void 0:t.security_account)&&o.email||null!=(i=null==t?void 0:t.security_account)&&i.phone?(null==(c=null==t?void 0:t.security_account)?void 0:c.email)&&(null==(r=null==t?void 0:t.security_account)?void 0:r.phone)?u(!0,{authType:a,pageType:"verify_security_account_bind_login_account"}):v({account:(null==(l=null==t?void 0:t.security_account)?void 0:l.email)||(null==(s=null==t?void 0:t.security_account)?void 0:s.phone)}):d.error("Please bind security account first.")})(o)},key:i},g.createElement("img",{src:o.icon}),g.createElement("div",{className:"login-account-name"},o.name),g.createElement("div",{className:"login-account-value","data-no-linked":!(o.value||o.id)},f(o.value||o.id)||n("account.not_linked")),g.createElement(c.b,{className:"arrow-right-icon",name:"arrow_right_icon"})))))),g.createElement(r.a,{className:"footer-box-v2"}))}},33887:(n,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>b});var a=t(80686),o=t(43505),i=t(19104),c=t(41484),r=t(46686),l=t(25001),u=t(6326),s=t(65043),d=t(93950),g=t.n(d),m=t(25529),p=t(39010),f=t(81228),v=t(26431);const h=function(n,e){var t;v.A&&((0,f.Tn)(n)||console.error("useDebounceFn expected parameter is a function, got ".concat(typeof n)));var a=(0,m.A)(n),o=null!==(t=null===e||void 0===e?void 0:e.wait)&&void 0!==t?t:1e3,i=(0,s.useMemo)((function(){return g()((function(){for(var n=[],e=0;e<arguments.length;e++)n[e]=arguments[e];return a.current.apply(a,(0,u.fX)([],(0,u.zs)(n),!1))}),o,e)}),[]);return(0,p.A)((function(){i.cancel()})),{run:i,cancel:i.cancel,flush:i.flush}};var A=t(48365);const y=function(n,e,t){var a=(0,u.zs)((0,s.useState)({}),2),o=a[0],i=a[1],c=h((function(){i({})}),t).run;(0,s.useEffect)((function(){return c()}),e),(0,A.A)(n,[o])};var x=t(89421),w=t(74117),b=n=>{let e=n,{authType:t="google",verifyToken:u,code:d}=e,g=(0,r.ra)(),{modalOptions:m}=(0,r.oa)(),{t:p}=(0,w.Bd)(),[f,v]=(0,s.useState)(!0),{userInfo:h}=(0,r.fa)(),A=(0,i.a)(),b=(0,s.useMemo)((()=>(0,o.a)({userInfo:h,t:p})),[h]),C=(0,s.useMemo)((()=>({...b.find((n=>n.type.replace(/v1$/,"")==t))||{}})),[b,e]);return y((()=>{t&&u&&(0,l.kO)({provider:t,thirdparty_code:d,security_account_verify_token:u,version:"v2"}).then((n=>{v(!1)})).catch((n=>{let e=n.message;if(20109===(null==n?void 0:n.error_code)){let n="error.server_".concat(t,"_20109"),a=p(n);a&&a!=n&&(e=a)}A.error(e),setTimeout((()=>{g("/account/security",{replace:!0})}))}))}),[t,u],{wait:50}),s.createElement("div",{className:"account-bind-container"},s.createElement("style",null,".account-bind-container {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n.account-bind-container .particle-connect-form-contaier {\n  flex: 1;\n}\n.account-bind-container .particle-loading,\n.account-bind-container .result-content {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  padding-bottom: 100px;\n  font-size: 18px;\n  color: var(--text-color);\n  position: relative;\n}\n.account-bind-container .particle-loading .loading-wrap,\n.account-bind-container .result-content .loading-wrap {\n  position: relative;\n}\n.account-bind-container .particle-loading .loading-wrap .logo-img,\n.account-bind-container .result-content .loading-wrap .logo-img {\n  width: 100px;\n  height: 100px;\n  font-size: 110px;\n}\n.account-bind-container .particle-loading .loading-wrap .particle-loading-img,\n.account-bind-container .result-content .loading-wrap .particle-loading-img {\n  width: 100%;\n  height: 100%;\n  animation: loading-inner 1.5s linear infinite;\n}\n.account-bind-container .particle-loading .loading-wrap h3,\n.account-bind-container .result-content .loading-wrap h3 {\n  color: var(--text-color);\n}\n.account-bind-container .particle-loading .loading-wrap p,\n.account-bind-container .result-content .loading-wrap p {\n  font-size: 14px;\n  color: var(--secondary-text-color);\n  position: absolute;\n  width: 110%;\n  height: 110%;\n  margin: 0;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n.account-bind-container .link_btn {\n  width: auto;\n  height: 32px;\n  font-size: 14px;\n}\n.account-bind-container .result-content .back {\n  margin-top: 40px;\n}\n.account-bind-container .result-content .back button {\n  display: flex;\n  align-items: center;\n}\n@keyframes loading-inner {\n  0% {\n    transform: rotate(0deg);\n  }\n  50% {\n    transform: rotate(180deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n"),s.createElement(c.a,{displayBackBtn:!0}),s.createElement("div",{className:"particle-connect-form-contaier center-center flex-column"},f?s.createElement("div",{className:"particle-loading"},s.createElement("div",{className:"loading-wrap"},s.createElement("img",{src:(0,r.A)(m.themeType)[t]||"",className:"logo-img logo-img-2",alt:"logo"}),s.createElement("p",null,s.createElement("img",{className:"particle-loading-img",src:a.a,alt:""})))):s.createElement("div",{className:"result-content resultsuccess"},s.createElement("img",{src:null==C?void 0:C.icon,alt:""}),s.createElement("div",{className:"info"},"Binding succeeded\uff01"),s.createElement("div",{className:"back"},s.createElement(x.A,{type:"primary",onClick:()=>{g("/account/security",{replace:!0})}},"Back")))))}}}]);
//# sourceMappingURL=3887.5f66c5c1.chunk.js.map