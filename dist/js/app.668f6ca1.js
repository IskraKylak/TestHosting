(function(){"use strict";var t={8071:function(t,e,n){var i=n(9242),r=n(3396);const o=(0,r._)("div",{id:"message",class:"hidden-xs"},null,-1);function s(t,e,n,i,s,a){const u=(0,r.up)("router-link"),c=(0,r.up)("router-view");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("nav",null,[(0,r.Wm)(u,{to:"/"},{default:(0,r.w5)((()=>[(0,r.Uk)("Home")])),_:1}),(0,r.Uk)(" | "),(0,r.Wm)(u,{to:"/mytarifs"},{default:(0,r.w5)((()=>[(0,r.Uk)("MyTarif")])),_:1})]),(0,r.Wm)(c),o],64)}var a=n(65),u={methods:{...(0,a.nv)(["GET_TARIFS_FROM_API"])},mounted(){this.GET_TARIFS_FROM_API()}},c=n(89);const l=(0,c.Z)(u,[["render",s]]);var d=l,f=n(2483);const m={class:"table-container"};function p(t,e,n,i,o,s){const a=(0,r.up)("CTable");return(0,r.wg)(),(0,r.iD)("div",m,[(0,r.Wm)(a,{content:t.TARIFS,typePage:"Home",onAddTarif:s.addTarif},null,8,["content","onAddTarif"])])}n(7658);var h=n(4393),g={name:"Home",components:{CTable:h.Z},methods:{...(0,a.nv)(["ADD_MYTARIFS"]),message(){this.$message("Тариф был добавлен!"),this.$router.push({name:"mytarifs"})},addTarif(t){this.ADD_MYTARIFS(t),this.message()}},computed:{...(0,a.Se)(["TARIFS"])}};const T=(0,c.Z)(g,[["render",p]]);var E=T;const v=[{path:"/",name:"home",component:E},{path:"/mytarifs",name:"mytarifs",component:()=>n.e(847).then(n.bind(n,1847))}],y=(0,f.p7)({history:(0,f.r5)(),routes:v});var _=y,S={state:{traifs:[]},mutations:{SET_TARIFS(t,e){t.traifs=e}},actions:{SET_TARIFS({commit:t},e){t("SET_TARIFS",e)},GET_TARIFS_FROM_API({commit:t}){return fetch("./tarif.json").then((t=>t.json())).then((e=>(t("SET_TARIFS",e.post),e))).catch((t=>t))}},getters:{TARIFS(t){return t.traifs}},modules:{}},b={state:{mytarifs:[]},mutations:{ADD_MYTARIFS(t,e){t.mytarifs.push(e)},CHANGE_MYTARIFS(t,e){t.mytarifs[e.idx]=e.item},SET_MYTARIFS(t,e){t.mytarifs=e}},actions:{SET_MYTARIFS({commit:t},e){t("SET_MYTARIFS",e)},ADD_MYTARIFS({commit:t},e){t("ADD_MYTARIFS",e)},CHANGE_MYTARIFS({commit:t},e){t("CHANGE_MYTARIFS",e)}},getters:{MYTARIFS(t){return t.mytarifs}},modules:{}},A={state:{active:!1},mutations:{SET_MODAL_ACTIVE(t,e){t.active=e}},actions:{setModalActive({commit:t},e){t("SET_MODAL_ACTIVE",e)}},getters:{ACTIVEMODAL(t){return t.active}},modules:{}},C={state:{selected:null},mutations:{SET_SELECTED(t,e){t.selected=e}},actions:{SET_SELECTED({commit:t},e){t("SET_SELECTED",e)}},getters:{SELECTED(t){return t.selected}},modules:{}},w=(0,a.MT)({state:{},getters:{},mutations:{},actions:{},modules:{tarifs:S,mytarifs:b,modal:A,selectedtarif:C}});const k={install(t){t.config.globalProperties.$message=function(t){const e=document.createElement("div");e.setAttribute("id","message"),e.innerText=t,document.body.appendChild(e),setTimeout((function(){document.body.removeChild(e)}),3e3)}}};var D=k;(0,i.ri)(d).use(D).use(w).use(_).mount("#app")},4393:function(t,e,n){n.d(e,{Z:function(){return x}});var i=n(3396),r=n(7139);const o={class:"table is-striped is-fullwidth"},s={class:"name"},a={class:"cpu"},u={class:"ram"},c={class:"size"},l={key:0},d=["onClick"],f=(0,i._)("span",{class:"icon is-small"},[(0,i._)("i",{class:"fas fa-plus"})],-1),m=(0,i._)("span",null,"Add",-1),p=[f,m],h={key:1},g=["onClick"],T=(0,i._)("span",{class:"icon is-small"},[(0,i._)("i",{class:"fas fa-chevron-up"}),(0,i._)("i",{class:"fas fa-chevron-down"})],-1),E=(0,i._)("span",null,"downgrade/upgrade",-1),v=[T,E],y={key:2},_=["onClick"],S=(0,i._)("span",{class:"icon is-small"},[(0,i._)("i",{class:"fas fa-chevron-up"})],-1),b=(0,i._)("span",null,"upgrade",-1),A=[S,b],C=["onClick"],w=(0,i._)("span",{class:"icon is-small"},[(0,i._)("i",{class:"fas fa-chevron-down"})],-1),k=(0,i._)("span",null,"downgrade",-1),D=[w,k],M={key:2};function F(t,e,n,f,m,T){return(0,i.wg)(),(0,i.iD)("table",o,[(0,i._)("thead",null,[(0,i._)("tr",null,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(m.headers,((t,e)=>((0,i.wg)(),(0,i.iD)("th",{class:"has-text-centered",key:e},(0,r.zw)(t.text),1)))),128))])]),(0,i._)("tbody",null,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(n.content,((e,o)=>((0,i.wg)(),(0,i.iD)("tr",{key:e.id},[(0,i._)("td",null,[(0,i._)("span",s,(0,r.zw)(e.name),1)]),(0,i._)("td",null,[(0,i._)("span",a,(0,r.zw)(e.cpu),1),(0,i.Uk)(" CPU Units")]),(0,i._)("td",null,[(0,i._)("span",u,(0,r.zw)(e.ram),1),(0,i.Uk)("MB")]),(0,i._)("td",null,[(0,i._)("span",c,(0,r.zw)(e.size),1),(0,i.Uk)("GB SSD")]),"Home"===n.typePage?((0,i.wg)(),(0,i.iD)("td",l,[(0,i._)("button",{class:"button is-primary add-tarif-button",onClick:t=>this.$emit("addTarif",e)},p,8,d)])):(0,i.kq)("",!0),"MyTarifs"===n.typePage?((0,i.wg)(),(0,i.iD)("td",h,[(0,i._)("button",{class:"button is-primary select-tarif-button",onClick:t=>T.openModal(e,o)},v,8,g)])):(0,i.kq)("",!0),"Modal"===n.typePage&&t.SELECTED?((0,i.wg)(),(0,i.iD)("td",y,["up"===T.typeBtn(e)?((0,i.wg)(),(0,i.iD)("button",{key:0,class:"button is-primary upgrade-tarif-button",onClick:t=>T.upgrade(e)},A,8,_)):(0,i.kq)("",!0),"down"===T.typeBtn(e)?((0,i.wg)(),(0,i.iD)("button",{key:1,class:"button is-primary",onClick:t=>T.downgrade(e)},D,8,C)):(0,i.kq)("",!0),"your"===T.typeBtn(e)?((0,i.wg)(),(0,i.iD)("div",M," Your tarif ")):(0,i.kq)("",!0)])):(0,i.kq)("",!0)])))),128))])])}var I=n(65),R={name:"CTable",props:["content","typePage"],data(){return{headers:[{text:"Название"},{text:"CPU"},{text:"RAM"},{text:"Disk Size"}]}},methods:{upgrade(t){const e={idx:this.SELECTED.idx,item:t};this.$emit("cahngeTarif",e)},downgrade(t){t.size!==this.SELECTED.item.size?this.$message("Процедура разрешена лишь для тарифов с одинаĸовым размером дисĸов"):this.upgrade(t)},typeBtn(t){if(this.SELECTED){if(t.size>this.SELECTED.item.size)return"up";if(t.size<this.SELECTED.item.size)return"down";if(t.size==this.SELECTED.item.size)return t.id==this.SELECTED.item.id?"your":t.id>this.SELECTED.item.id?"up":"down"}},openModal(t,e){const n={idx:e,item:t};this.$emit("openModal",n)}},computed:{...(0,I.Se)(["SELECTED"])}},L=n(89);const O=(0,L.Z)(R,[["render",F]]);var x=O}},e={};function n(i){var r=e[i];if(void 0!==r)return r.exports;var o=e[i]={exports:{}};return t[i](o,o.exports,n),o.exports}n.m=t,function(){var t=[];n.O=function(e,i,r,o){if(!i){var s=1/0;for(l=0;l<t.length;l++){i=t[l][0],r=t[l][1],o=t[l][2];for(var a=!0,u=0;u<i.length;u++)(!1&o||s>=o)&&Object.keys(n.O).every((function(t){return n.O[t](i[u])}))?i.splice(u--,1):(a=!1,o<s&&(s=o));if(a){t.splice(l--,1);var c=r();void 0!==c&&(e=c)}}return e}o=o||0;for(var l=t.length;l>0&&t[l-1][2]>o;l--)t[l]=t[l-1];t[l]=[i,r,o]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var i in e)n.o(e,i)&&!n.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})}}(),function(){n.f={},n.e=function(t){return Promise.all(Object.keys(n.f).reduce((function(e,i){return n.f[i](t,e),e}),[]))}}(),function(){n.u=function(t){return"js/"+t+".7918db43.js"}}(),function(){n.miniCssF=function(t){return"css/"+t+".17bdc46b.css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="testing2:";n.l=function(i,r,o,s){if(t[i])t[i].push(r);else{var a,u;if(void 0!==o)for(var c=document.getElementsByTagName("script"),l=0;l<c.length;l++){var d=c[l];if(d.getAttribute("src")==i||d.getAttribute("data-webpack")==e+o){a=d;break}}a||(u=!0,a=document.createElement("script"),a.charset="utf-8",a.timeout=120,n.nc&&a.setAttribute("nonce",n.nc),a.setAttribute("data-webpack",e+o),a.src=i),t[i]=[r];var f=function(e,n){a.onerror=a.onload=null,clearTimeout(m);var r=t[i];if(delete t[i],a.parentNode&&a.parentNode.removeChild(a),r&&r.forEach((function(t){return t(n)})),e)return e(n)},m=setTimeout(f.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=f.bind(null,a.onerror),a.onload=f.bind(null,a.onload),u&&document.head.appendChild(a)}}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.p="/TestHosting/"}(),function(){if("undefined"!==typeof document){var t=function(t,e,n,i,r){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var s=function(n){if(o.onerror=o.onload=null,"load"===n.type)i();else{var s=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.href||e,u=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=s,u.request=a,o.parentNode&&o.parentNode.removeChild(o),r(u)}};return o.onerror=o.onload=s,o.href=e,n?n.parentNode.insertBefore(o,n.nextSibling):document.head.appendChild(o),o},e=function(t,e){for(var n=document.getElementsByTagName("link"),i=0;i<n.length;i++){var r=n[i],o=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(o===t||o===e))return r}var s=document.getElementsByTagName("style");for(i=0;i<s.length;i++){r=s[i],o=r.getAttribute("data-href");if(o===t||o===e)return r}},i=function(i){return new Promise((function(r,o){var s=n.miniCssF(i),a=n.p+s;if(e(s,a))return r();t(i,a,null,r,o)}))},r={143:0};n.f.miniCss=function(t,e){var n={847:1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=i(t).then((function(){r[t]=0}),(function(e){throw delete r[t],e})))}}}(),function(){var t={143:0};n.f.j=function(e,i){var r=n.o(t,e)?t[e]:void 0;if(0!==r)if(r)i.push(r[2]);else{var o=new Promise((function(n,i){r=t[e]=[n,i]}));i.push(r[2]=o);var s=n.p+n.u(e),a=new Error,u=function(i){if(n.o(t,e)&&(r=t[e],0!==r&&(t[e]=void 0),r)){var o=i&&("load"===i.type?"missing":i.type),s=i&&i.target&&i.target.src;a.message="Loading chunk "+e+" failed.\n("+o+": "+s+")",a.name="ChunkLoadError",a.type=o,a.request=s,r[1](a)}};n.l(s,u,"chunk-"+e,e)}},n.O.j=function(e){return 0===t[e]};var e=function(e,i){var r,o,s=i[0],a=i[1],u=i[2],c=0;if(s.some((function(e){return 0!==t[e]}))){for(r in a)n.o(a,r)&&(n.m[r]=a[r]);if(u)var l=u(n)}for(e&&e(i);c<s.length;c++)o=s[c],n.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return n.O(l)},i=self["webpackChunktesting2"]=self["webpackChunktesting2"]||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))}();var i=n.O(void 0,[998],(function(){return n(8071)}));i=n.O(i)})();
//# sourceMappingURL=app.668f6ca1.js.map