"use strict";(self.webpackChunkparticle_auth_cra=self.webpackChunkparticle_auth_cra||[]).push([[4515],{14515:(n,o,a)=>{a.r(o),a.d(o,{default:()=>t});var t=".particle-auth-core-shadow-root {\n  overflow: hidden;\n  font-family: var(--auth-core-font-family);\n  color: var(--text-color);\n}\n.particle-auth-core-shadow-root input:-webkit-autofill,\n.particle-auth-core-shadow-root input:-webkit-autofill:hover,\n.particle-auth-core-shadow-root input:-webkit-autofill:focus,\n.particle-auth-core-shadow-root textarea:-webkit-autofill,\n.particle-auth-core-shadow-root textarea:-webkit-autofill:hover,\n.particle-auth-core-shadow-root textarea:-webkit-autofill:focus,\n.particle-auth-core-shadow-root select:-webkit-autofill,\n.particle-auth-core-shadow-root select:-webkit-autofill:hover,\n.particle-auth-core-shadow-root select:-webkit-autofill:focus {\n  font-size: 15px;\n  box-shadow: 0 0 0 100px transparent inset;\n  transition: background-color 5000s ease-in-out 0s;\n  caret-color: var(--text-color);\n  -webkit-text-fill-color: var(--text-color);\n}\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: var(--auth-core-font-family);\n}\n\n.icon-navigation-back {\n  position: absolute;\n  z-index: 99;\n  top: 16px;\n  left: 16px;\n  font-size: 28px;\n}\n\n.close-iframe {\n  position: absolute;\n  z-index: 100;\n  top: 16px;\n  right: 16px;\n}\n.close-iframe.top-hint {\n  top: 75px;\n}\n\n.ant-btn {\n  padding: 3px 15px;\n  border: none;\n  border-radius: var(--primary-btn-border-radius);\n  font-weight: 600 !important;\n  font-size: var(--primary-btn-font-size);\n  color: var(--primary-btn-color);\n  background: var(--primary-btn-background-color);\n}\n.ant-btn:hover {\n  border: none;\n  opacity: var(--hover-opacity);\n}\n.ant-btn:active .ant-btn:focus {\n  border: none;\n}\n.ant-btn:disabled {\n  opacity: var(--disable-opacity);\n  pointer-events: none;\n}\n.ant-btn:disabled span {\n  opacity: var(--disable-opacity);\n}\n\n.ant-modal-confirm-btns .ant-btn {\n  padding-right: 18px;\n  padding-left: 18px;\n  border: none;\n  border-radius: var(--primary-btn-border-radius);\n  color: var(--primary-btn-color);\n  background: var(--primary-btn-background-color);\n}\n\n.ant-modal-content {\n  border: none !important;\n  border-radius: var(--modal-border-radius) !important;\n  background-color: var(--modal-background-color) !important;\n}\n.ant-modal-content .ant-modal-header {\n  background: none;\n}\n.ant-modal-content .ant-modal-confirm-title {\n  color: var(--text-color) !important;\n}\n\n.ant-modal-confirm-body .ant-modal-confirm-content {\n  color: var(--text-color);\n}\n\n.ant-drawer-content-wrapper {\n  width: 100%;\n  max-width: 100% !important;\n  box-shadow: none !important;\n}\n\n.ant-drawer-content {\n  border-radius: var(--modal-border-radius) var(--modal-border-radius) 0 0;\n  background-color: var(--theme-background-color) !important;\n}\n\n.ant-form {\n  color: var(--text-color);\n}\n\n.ant-form-item-explain-error {\n  color: var(--error-color);\n}\n\n.ant-input-status-error:not(.ant-input-disabled, .ant-input-borderless).ant-input,\n.ant-input-status-error:not(.ant-input-disabled, .ant-input-borderless).ant-input:hover {\n  border-color: var(--error-color);\n}\n\n.ant-message {\n  z-index: 9999999;\n}\n\n.ant-message-notice-content {\n  padding: 0;\n  border-radius: var(--primary-btn-border-radius);\n  overflow: hidden;\n  font-weight: 500;\n  box-shadow: 0 1px 15px rgba(0, 0, 0, 0.15);\n}\n.ant-message-notice-content .ant-message-custom-content {\n  padding: 10px 16px;\n  color: #fff;\n}\n\n.particle-auth-core-shadow-root.dark {\n  color: var(--text-color);\n}\n.particle-auth-core-shadow-root.dark .info-sign .btn-box {\n  background-color: var(--card-unclickable-background-color);\n}\n.particle-auth-core-shadow-root.dark .info-sign .risk-reminder {\n  background-color: var(--card-unclickable-background-color);\n}\n.particle-auth-core-shadow-root.dark .ant-message-notice-content {\n  color: var(--text-color);\n  background: var(--modal-background-color);\n}\n\n.hidden {\n  display: none;\n}\n\n.pre-wrap {\n  white-space: pre-wrap;\n}\n\n.hide-hover {\n  --hover-opacity: 1 !important;\n}\n\n::selection {\n  color: #fff;\n  background-color: var(--accent-color);\n}\n\n.react-input-code {\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.react-input-code .input-code-item {\n  width: 44px;\n  height: 44px;\n  padding: 0;\n  margin-right: 6px;\n  margin-left: 6px;\n  border: transparent;\n  border-radius: 12px;\n  font-size: 20px;\n  text-align: center;\n  text-transform: uppercase;\n  color: var(--text-color);\n  background-clip: padding-box;\n  background-color: var(--input-background-color);\n  caret-color: var(--text-color);\n}\n.react-input-code .input-code-item:focus {\n  appearance: none;\n  outline: 0;\n}\n.react-input-code .input-code-item:not(:placeholder-shown) {\n  appearance: none;\n  outline: 0;\n}\n.react-input-code input:-webkit-autofill,\n.react-input-code input:-webkit-autofill:hover,\n.react-input-code input:-webkit-autofill:focus,\n.react-input-code input:-webkit-autofill:active {\n  box-shadow: 0 0 0 60px var(--input-background-color) inset !important;\n  -webkit-text-fill-color: var(--text-color) !important;\n}\n.react-input-code .input-code-mask {\n  position: absolute;\n  z-index: 1;\n  width: 100%;\n  height: 100%;\n}\n\n.primary-antd-btn {\n  width: 100%;\n  height: 47px;\n  border: none;\n  border-radius: var(--primary-btn-border-radius);\n  outline: none;\n  font-size: var(--primary-btn-font-size);\n  line-height: 22px;\n  color: var(--primary-btn-color);\n  background: var(--primary-btn-background-color);\n}\n.primary-antd-btn:focus, .primary-antd-btn:active {\n  color: var(--primary-btn-color);\n  background: var(--primary-btn-background-color);\n}\n.primary-antd-btn:hover {\n  color: var(--primary-btn-color);\n  background: var(--primary-btn-background-color);\n  opacity: var(--hover-opacity);\n}\n.primary-antd-btn:disabled {\n  color: var(--primary-btn-color);\n  background: var(--primary-btn-background-color);\n  opacity: var(--disable-opacity);\n}\n.primary-antd-btn:disabled span {\n  opacity: var(--disable-opacity);\n}\n.primary-antd-btn.danger {\n  color: white !important;\n  background: var(--error-color) !important;\n}\n.primary-antd-btn.secondary {\n  color: var(--secondary-btn-color);\n  background: var(--secondary-btn-background-color);\n}\n.primary-antd-btn span {\n  font-weight: 500;\n}\n\n.accent-antd-btn {\n  width: 100%;\n  height: 47px;\n  border: none;\n  border-radius: var(--primary-btn-border-radius);\n  outline: none;\n  font-size: var(--primary-btn-font-size);\n  line-height: 22px;\n  color: white;\n  background-color: var(--accent-color);\n}\n.accent-antd-btn:focus, .accent-antd-btn:active {\n  color: white;\n  background-color: var(--accent-color);\n}\n.accent-antd-btn:hover {\n  color: white;\n  background-color: var(--accent-color);\n  opacity: var(--hover-opacity);\n}\n.accent-antd-btn:disabled {\n  color: white;\n  background-color: var(--accent-color);\n  opacity: var(--disable-opacity);\n}\n.accent-antd-btn span {\n  font-weight: 500;\n}\n\n.theme-font-icon {\n  color: var(--text-color);\n}\n.theme-font-icon:hover {\n  opacity: var(--hover-opacity);\n}\n\n.no-number {\n  appearance: textfield !important;\n}\n\n.ant-input-affix-wrapper:focus,\n.ant-input-affix-wrapper-focused,\n.ant-input:focus,\n.ant-radio-input:focus + .ant-radio-inner,\n.ant-input-focused {\n  box-shadow: none;\n}\n\n.ant-radio-inner {\n  border-width: 2px !important;\n  border-color: var(--accent-color) !important;\n  background: none;\n}\n.ant-radio-inner::after {\n  width: 14px;\n  height: 14px;\n  margin-top: -7px;\n  margin-left: -7px;\n}\n\n.ant-radio-wrapper:hover .ant-radio,\n.ant-radio:hover .ant-radio-inner,\n.ant-radio-input:focus + .ant-radio-inner {\n  border-color: var(--accent-color) !important;\n}\n\n.ant-message-error {\n  background: var(--error-color);\n}\n.ant-message-error .anticon {\n  color: #fff;\n}\n\n.ant-message-success {\n  border: 1px solid var(--green-color);\n  overflow: hidden;\n  background: var(--green-color);\n}\n.ant-message-success .anticon {\n  color: #fff;\n}\n\n.color-scheme-dark {\n  color-scheme: dark;\n}\n.color-scheme-dark iframe {\n  color-scheme: none;\n}\n\n.m-warning-modal .ant-modal-confirm-btns {\n  display: none;\n}\n.m-warning-modal .content {\n  margin-top: 26px;\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 20px;\n  text-align: center;\n  color: var(--text-color);\n}\n.m-warning-modal .anticon-exclamation-circle {\n  display: none;\n}\n.m-warning-modal .anticon-close {\n  color: var(--secondary-text-color);\n}\n.m-warning-modal .footer-btns {\n  column-gap: 18px;\n  display: flex;\n  justify-content: flex-end;\n  margin-top: 30px;\n}\n.m-warning-modal .footer-btns .ant-btn {\n  display: flex;\n  flex: 1;\n  justify-content: center;\n  align-items: center;\n  height: 47px;\n  font-weight: 500;\n  font-size: 17px;\n  line-height: 22px;\n  text-align: center;\n  color: var(--background-color);\n  box-shadow: none !important;\n}\n.m-warning-modal .footer-btns .ant-btn:first-child {\n  color: var(--secondary-btn-color);\n  background-color: var(--secondary-btn-background-color);\n}\n.m-warning-modal .footer-btns .ant-btn::after {\n  display: none !important;\n}\n.m-warning-modal .footer-btns .confirm-btn:hover,\n.m-warning-modal .footer-btns .confirm-btn:focus,\n.m-warning-modal .footer-btns .confirm-btn:active {\n  color: var(--primary-btn-color);\n  background-color: var(--primary-btn-background-color);\n}\n\n.ant-input {\n  padding-right: 14px;\n  padding-left: 14px;\n}\n.ant-input:focus {\n  border: 1px solid var(--accent-color) !important;\n}\n\n.ant-input,\n.input_email,\n.ant-input-number-input,\n.account-input-box input {\n  border: 1px solid var(--input-background-color);\n  border-radius: var(--primary-btn-border-radius);\n  transition: none !important;\n}\n.ant-input:focus,\n.input_email:focus,\n.ant-input-number-input:focus,\n.account-input-box input:focus {\n  border: 1px solid var(--accent-color) !important;\n}\n\n.ant-btn-primary {\n  background-color: var(--primary-btn-background-color);\n  box-shadow: none !important;\n}\n.ant-btn-primary:hover {\n  background-color: var(--primary-btn-background-color);\n}\n\n.ant-tabs .ant-tabs-tab .ant-tabs-tab-btn {\n  font-size: 16px;\n}\n.ant-tabs .ant-tabs-ink-bar {\n  display: none;\n}\n\n.more-text-btn {\n  color: var(--accent-color) !important;\n}\n\ninput::placeholder {\n  color: var(--input-placeholder-color) !important;\n}\n\n.ant-btn-loading {\n  opacity: var(--disable-opacity);\n}\n.ant-btn-loading span {\n  opacity: var(--disable-opacity);\n}\n.ant-btn-loading::before {\n  display: none !important;\n}\n.ant-btn-loading .ant-btn-loading-icon {\n  position: relative;\n  top: 3px;\n  left: -3px;\n  width: 19px !important;\n  height: 19px !important;\n  background-image: var(--loading-icon);\n  background-size: 19px 19px;\n  opacity: 1;\n  transition: initial !important;\n  animation: none !important;\n}\n.ant-btn-loading .ant-btn-loading-icon .anticon {\n  display: none;\n}\n\n.ant-modal {\n  width: 90%;\n  max-width: 340px;\n}\n.ant-modal > [aria-hidden=true] {\n  display: none;\n  pointer-events: none;\n}\n.ant-modal .ant-modal-body {\n  padding: 18px;\n}\n.ant-modal .ant-modal-close-x {\n  background: var(--close-icon);\n  background-position: 12px 12px;\n  background-repeat: no-repeat;\n}\n.ant-modal .ant-modal-close-x .anticon {\n  display: none;\n}\n.ant-modal .ant-btn span {\n  font-size: var(--primary-btn-font-size);\n}\n\ninput {\n  caret-color: var(--accent-color);\n}\n\n.root-particle-modal-container {\n  color: var(--text-color);\n  position: fixed !important;\n}\n.root-particle-modal-container .ant-modal-close {\n  z-index: 999;\n}\n.root-particle-modal-container .ant-modal-close .ant-modal-close-x {\n  position: relative;\n  top: 1px;\n}\n.root-particle-modal-container > .ant-modal > .ant-modal-content {\n  width: 100%;\n  height: 100%;\n  border: none !important;\n  border-radius: var(--modal-border-radius) !important;\n  overflow: hidden;\n  color: var(--text-color);\n  background-color: var(--theme-background-color) !important;\n}\n.root-particle-modal-container > .ant-modal > .ant-modal-content > .ant-modal-body {\n  width: 100%;\n  height: 100%;\n  padding: 0;\n  color: var(--text-color);\n}\n.root-particle-modal-container > .ant-modal > .ant-modal-content > .ant-modal-body > div[data-path] {\n  width: 100%;\n  height: 100%;\n}\n.root-particle-modal-container > .ant-modal > .ant-modal-content > .ant-modal-body > div[data-path] .lazy-loaing-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n}\n.root-particle-modal-container > .ant-modal > .ant-modal-content > .ant-modal-body .ant-drawer {\n  width: 100%;\n  height: 100%;\n}\n.root-particle-modal-container > .ant-modal > .ant-modal-content > .ant-modal-body .ant-drawer .ant-drawer-content-wrapper {\n  width: 100% !important;\n}\n@media (min-width: 600px) {\n  .root-particle-modal-container > .ant-modal > .ant-modal-content > .ant-modal-body .ant-drawer {\n    position: absolute;\n  }\n}\n.root-particle-modal-container .ant-drawer-content-wrapper * {\n  overscroll-behavior-y: none;\n}\n.root-particle-modal-container .ant-drawer-content-wrapper .ant-drawer-content {\n  padding: 0;\n  overflow: hidden;\n}\n.root-particle-modal-container .ant-drawer-content-wrapper .ant-drawer-content .ant-drawer-body {\n  padding: 0;\n  padding-top: 17px;\n}\n.root-particle-modal-container .ant-drawer-content-wrapper .ant-drawer-content .ant-drawer-body .particle-drawer-content {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n.root-particle-modal-container .ant-drawer-content-wrapper .ant-drawer-content .ant-drawer-body .particle-drawer-content .particle-close-btn + div {\n  flex: 1;\n  overflow: hidden;\n}\n@media (max-width: 600px) {\n  .root-particle-modal-container .ant-drawer-content-wrapper .ant-drawer-content .ant-drawer-body {\n    padding-top: 0;\n  }\n}\n.root-particle-modal-container .ant-modal-wrap.auth-core-modal-error > .ant-modal,\n.root-particle-modal-container .ant-modal-wrap.auth-core-modal-warning > .ant-modal {\n  display: block;\n}\n.root-particle-modal-container .ant-modal-wrap.auth-core-modal-error .ant-modal-confirm-error,\n.root-particle-modal-container .ant-modal-wrap.auth-core-modal-warning .ant-modal-confirm-error {\n  top: 100px;\n  display: block;\n  margin: auto;\n}\n.root-particle-modal-container .ant-modal-wrap.auth-core-modal-error .ant-modal-confirm-error .ant-modal-content .ant-modal-body,\n.root-particle-modal-container .ant-modal-wrap.auth-core-modal-warning .ant-modal-confirm-error .ant-modal-content .ant-modal-body {\n  padding: 18px;\n}\n\n.width-100 {\n  width: 100%;\n}\n\n.still-confirm {\n  color: white !important;\n  background: var(--error-color) !important;\n}\n\n.ant-modal-wrap {\n  position: absolute;\n}\n\n.footer-box-v2 {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: var(--footer-height);\n  margin: 0 !important;\n  background: var(--theme-background-color);\n}\n.footer-box-v2 img {\n  width: 167px;\n  margin: 0;\n}\n\n.scroll-content {\n  flex: 1;\n  width: 100%;\n  overflow-y: auto;\n}\n\n.height-100 {\n  height: 100%;\n}\n\n@media (max-width: 600px) {\n  .m-margin-top-40 {\n    margin-top: 40px !important;\n  }\n}\n\n@media (max-width: 600px) {\n  .m-margin-top-20 {\n    margin-top: 20px !important;\n  }\n}\n\n.padding-top-16 {\n  padding-top: 16px !important;\n}"}}]);
//# sourceMappingURL=4515.168cbdec.chunk.js.map