"use strict";(self.webpackChunkparticle_auth_cra=self.webpackChunkparticle_auth_cra||[]).push([[3662],{60266:(e,n,t)=>{t.d(n,{a:()=>p});var r=t(59377),a=t(46686),o=t(41653),l=t(65043),i=".icon-eye {\n  display: block;\n  margin: auto;\n  font-size: 23px;\n}\n",c=()=>l.createElement(l.Fragment,null,l.createElement("style",null,i),l.createElement(r.b,{className:"icon-eye",name:"eye_open"})),m=()=>l.createElement(l.Fragment,null,l.createElement("style",null,i),l.createElement(r.b,{className:"icon-eye",name:"eye_close"})),p=e=>{let n=l.useRef(null);return l.createElement(l.Fragment,null,l.createElement("style",null,".password-input {\n  position: relative;\n  width: 100%;\n  height: 47px;\n  min-height: 47px;\n  padding: 0;\n  border: none !important;\n  border-radius: var(--primary-btn-border-radius);\n  overflow: hidden;\n  background: none;\n}\n.password-input input {\n  width: 100%;\n  height: 45px;\n  padding: 0 8px;\n  padding-left: 16px !important;\n  font-weight: 500;\n  font-size: 15px;\n  color: var(--text-color);\n  background-color: var(--input-background-color);\n}\n.password-input .ant-input-suffix {\n  position: absolute;\n  z-index: 1;\n  top: 12px;\n  right: 14px;\n  cursor: pointer;\n}\n"),l.createElement(o.A.Password,{ref:n,className:"password-input"+(null!=e&&e.className?" ".concat(null==e?void 0:e.className):""),iconRender:e=>e?l.createElement("div",null,l.createElement(c,null)):l.createElement("div",null,l.createElement(m,null)),onChange:n=>{var t;null!=e&&e.onChange&&(null==(t=null==e?void 0:e.onChange)||t.call(e,n.target.value))},defaultValue:null==e?void 0:e.defaultValue,maxLength:(null==e?void 0:e.maxLength)||20,onPressEnter:n=>{var t;return null==(t=null==e?void 0:e.onPressEnter)?void 0:t.call(e,n)},onBlur:n=>{var t;return null==(t=null==e?void 0:e.onBlur)?void 0:t.call(e,n)},autoFocus:!(!(0,a.Q)(null==e?void 0:e.autoFocus)||!(0,a.y)())||(null==e?void 0:e.autoFocus)}))}},3662:(e,n,t)=>{t.r(n),t.d(n,{default:()=>g});var r=t(60266),a=t(19104),o=t(43290),l=t(46686),i=t(35478),c=t(25001),m=t(97683),p=t(27478),s=t(5725),u=t(64435),d=t(89421),f=t(65043),v=t(74117),g=e=>{let{Text:n,Link:t}=p.A,g=(0,l.ra)(),[h,x]=(0,f.useState)(!1),{t:y}=(0,v.Bd)(),{loginVerifyMasterPassword:E}=e||{},w=f.useRef(null),[b,_]=(0,f.useState)(!0),{loginSuccessRedirectToApp:N}=(0,l.oa)(),A=(0,a.a)(),{run:k,loading:S}=(0,m.A)(c.UB,{manual:!0,onBefore:()=>{(0,c.qD)({record_type:i.ee.PAGE_MASTER_PASSWORD_VERIFY})},onSuccess:e=>{e?((0,c.qD)({record_type:i.ee.PAGE_MASTER_PASSWORD_VERIFY_SUCCESS}),E?N():g(-1)):x(!0)},onError:e=>{A.error((null==e?void 0:e.message)||"check master password error")}});return(0,f.useEffect)((()=>{setTimeout((()=>{var e,n;null==(n=null==(e=w.current)?void 0:e.querySelector(".password-input input"))||n.focus()}),200)}),[]),f.createElement("div",{className:"mp-verify-container",ref:w},f.createElement("style",null,".mp-verify-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  height: 100%;\n  overflow: auto;\n  font-size: 14px;\n  color: var(--text-color);\n  background-color: var(--theme-background-color);\n}\n.mp-verify-container .ant-form {\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  width: 100%;\n  max-width: 800px;\n  min-height: 360px;\n}\n.mp-verify-container .ant-form .scroll-content {\n  flex: 1;\n  width: 100%;\n  padding-left: 18px;\n  padding-right: 18px;\n}\n.mp-verify-container .ant-form-item {\n  margin-bottom: 0;\n}\n.mp-verify-container .mp-verify-title {\n  margin-top: 16px;\n  font-weight: 500;\n  font-size: 18px;\n  line-height: 28px;\n  color: var(--text-color);\n}\n.mp-verify-container .mp-input-name {\n  align-self: flex-start;\n  margin-top: 30px;\n  font-weight: 400;\n}\n.mp-verify-container .mp-input {\n  margin-top: 6px;\n}\n.mp-verify-container .mp-input-error {\n  align-self: flex-start;\n  margin-top: 8px;\n  color: var(--error-color);\n}\n.mp-verify-container .mp-tip-space {\n  width: 100%;\n  margin-top: 25px;\n  margin-bottom: 110px;\n  line-height: 20px;\n}\n.mp-verify-container .mp-tip-space span {\n  color: var(--text-color);\n}\n.mp-verify-container .bottom-container {\n  width: 100%;\n}\n.mp-verify-container .bottom-container.footer {\n  padding-left: 18px;\n  padding-right: 18px;\n}\n.mp-verify-container .bottom-container .mp-next {\n  position: relative;\n  display: block;\n  width: 100%;\n  max-width: 800px;\n  margin: auto;\n}\n.mp-verify-container .bottom-container .footer-box {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: var(--footer-height);\n  margin: 0;\n}\n.mp-verify-container .bottom-container .footer-box img {\n  margin: 0;\n}\n"),f.createElement("div",{className:"mp-verify-title"},y("account.restore_wallet")),f.createElement(s.A,{layout:"vertical",onFinish:e=>{let{password:n}=e;(null==n?void 0:n.length)>=6&&(null==n?void 0:n.length)<=20?(x(!1),k(n)):x(!0)},onValuesChange:e=>{let{password:n}=e;x(!1),_(!n)}},f.createElement("div",{className:"scroll-content"},f.createElement("div",{className:"mp-input-name padding-top-16"},y("account.master_password")),f.createElement(s.A.Item,{name:"password"},f.createElement(r.a,{className:"mp-input"})),h&&f.createElement("div",{className:"mp-input-error"},y("account.password_error")),f.createElement(u.A,{direction:"vertical",className:"mp-tip-space"},f.createElement(n,null,y("account.mpc_tss_intro")),f.createElement(n,null,y("account.input_decrypt_hint")," ",f.createElement(t,{onClick:()=>{g("/account/master-password/description")},className:"more-text-btn"},y("account.learn_more_period"))))),f.createElement(s.A.Item,null,f.createElement("div",{className:"bottom-container footer"},f.createElement(d.A,{className:"primary-antd-btn mp-next",htmlType:"submit",loading:S,disabled:b},y("common.confirm")),f.createElement(o.a,{className:"footer-box-v2"})))))}}}]);
//# sourceMappingURL=3662.7aaddf05.chunk.js.map