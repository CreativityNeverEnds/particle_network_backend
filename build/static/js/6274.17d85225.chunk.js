"use strict";(self.webpackChunkparticle_auth_cra=self.webpackChunkparticle_auth_cra||[]).push([[6274],{86274:(e,t,l)=>{l.r(t),l.d(t,{default:()=>u});var n=l(46686),a=l(25001),r=l(65043),u=()=>{let{provider:e}=(0,n.ga)(),{wallet:t}=(0,n.ia)(),{openAccountAndSecurity:l}=(0,n.F)(),{modalOptions:u}=(0,n.sa)(),{connected:c}=(0,n.G)(),{walletEntryPlugin:i}=(0,n.oa)(),o=(0,r.useCallback)((async e=>{if("open-account-and-security"===e)l();else if("get-user-info"===e)return(0,a.ug)()}),[l]);return(0,r.useEffect)((()=>{var l,n,r;if(!1!==u.wallet&&i){let c={...u.wallet,erc4337:u.erc4337,language:u.language,customStyle:{...u.customStyle,supportChains:null==(l=u.chains)?void 0:l.map((e=>{var t;return{id:e.id,name:e.name,chainType:(null==(t=null==e?void 0:e.custom)?void 0:t.chainType)||"evm"}}))}};i.init({projectId:u.projectId,clientKey:u.clientKey,appId:u.appId},c);let d=()=>{i.walletEntryCreate()},s=()=>{i.walletEntryDestroy()};return"undefined"!=typeof window&&(null==(n=window.particleAuth)||n.on(a.q2.ParticleAuthDisconnect,s),null==(r=window.particleAuth)||r.on(a.q2.ParticleAuthConnect,d)),(0,a.UJ)()&&(i.setWalletCore({ethereum:e,solana:t,customEventHandler:o}),i.walletEntryCreate()),()=>{var e,t;"undefined"!=typeof window&&(null==(e=window.particleAuth)||e.off(a.q2.ParticleAuthDisconnect,s),null==(t=window.particleAuth)||t.off(a.q2.ParticleAuthConnect,d))}}}),[u,e,t,o,i]),(0,r.useEffect)((()=>{c&&!1!==u.wallet&&i&&i.setWalletCore({ethereum:e,solana:t,customEventHandler:o})}),[c,e,t,u.wallet,o,i]),r.createElement("div",{id:"auth-core-modal-wallet-plugin",style:{display:"none"}},"Wallet Plugin")}}}]);
//# sourceMappingURL=6274.17d85225.chunk.js.map