(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[0],{"+xwo":function(e,t,r){},0:function(e,t,r){e.exports=r("LzkT")},"63GV":function(e,t,r){"use strict";var a=r("npr3"),o=r.n(a);o.a},"A0++":function(e,t,r){"use strict";var a=r("+xwo"),o=r.n(a);o.a},CClS:function(e,t,r){},H5P1:function(e,t,r){"use strict";var a=r("CClS"),o=r.n(a);o.a},Hl11:function(e,t,r){},LzkT:function(e,t,r){"use strict";r.r(t);r("rGqo"),r("oRQL"),r("0UuB"),r("Hl11"),r("fm0S");var a=r("Kw5r"),o=r("6E/o"),n=r("cFFF"),i=r("IEC1"),s=r("zxLP"),l=r("Rqni"),c=r("MqH6"),u=r("8wy3"),p=r("zmdN"),d=r("SC7v"),f=r("UrUt"),m=r("EYBb"),v=r("HlXa"),h=r("UG+o"),w=r("uNnR"),b=r("fUOT"),g=r("9vvi"),q=r("eelU"),y=r("XYut"),$=r("dkar"),_=r("ZYCo"),P=r("MFSH"),Q=r("bduK"),S=r("OggR"),k=r("lBN4"),E=r("RIeW"),x=r("xWPs"),R=r("FSbK"),U=r("Ezub");a["a"].use(o["a"],{config:{},components:{QLayout:n["a"],QLayoutHeader:i["a"],QLayoutDrawer:s["a"],QPageContainer:l["a"],QPage:c["a"],QToolbar:u["a"],QToolbarTitle:p["a"],QBtn:d["a"],QIcon:f["a"],QList:m["a"],QListHeader:v["a"],QItem:h["a"],QItemMain:w["a"],QItemSide:b["a"],QColorPicker:g["a"],QField:q["a"],QInput:y["a"],QCard:$["a"],QCardTitle:_["a"],QCardSeparator:P["a"],QCardActions:Q["a"],QCardMain:S["a"],QRouteTab:k["a"],QLayoutFooter:E["a"],QTabs:x["a"]},directives:{Ripple:R["a"]},plugins:{Notify:U["a"]}});var I=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"q-app"}},[r("router-view")],1)},L=[];I._withStripped=!0;var C={name:"App"},A=C,D=(r("A0++"),r("KHd+")),F=Object(D["a"])(A,I,L,!1,null,null,null);F.options.__file="App.vue";var j=F.exports,H=r("L2JU"),O={},T=r("pwlE"),V=r("jW8M"),z=r("V4F6"),W={namespaced:!0,state:O,getters:T,mutations:V,actions:z};a["a"].use(H["a"]);var B=function(){var e=new H["a"].Store({modules:{example:W}});return e},K=r("jE9Z"),G=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("q-layout",[r("q-layout-header",[r("q-toolbar",[r("q-btn",{attrs:{flat:"",round:"",dense:"",icon:"menu"},on:{click:function(t){e.leftDrawer=!e.leftDrawer}}}),r("q-toolbar-title",[r("span",{attrs:{slot:"subtitle"},slot:"subtitle"},[e._v("JOIN US")])])],1),r("q-tabs",[r("q-route-tab",{attrs:{slot:"title",icon:"map",to:"/signup",replace:"",label:"Sign Up"},slot:"title"}),r("q-route-tab",{attrs:{slot:"title",icon:"assignment",to:"/signin",replace:"",label:"Sign In"},slot:"title"})],1)],1),r("q-layout-drawer",{attrs:{side:"left"},model:{value:e.leftDrawer,callback:function(t){e.leftDrawer=t},expression:"leftDrawer"}}),r("q-page-container",[r("router-view")],1)],1)},M=[];G._withStripped=!0;var N={name:"User",data:function(){return{leftDrawer:!0}}},J=N,Y=(r("63GV"),Object(D["a"])(J,G,M,!1,null,null,null));Y.options.__file="User.vue";var X=Y.exports,Z=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("q-page",{attrs:{padding:""}},[r("q-page",{attrs:{padding:""}},[r("q-card",[r("q-card-title",[e._v("\n       New Here? Sign Up, Please\n      ")]),r("q-card-separator"),r("q-card-main",[r("q-field",{attrs:{icon:"mail",label:"Email","label-width":"3",error:e.$v.form.email.$error,helper:"Enter your registered email address to Sign Up","error-label":"Please type a valid email address"},on:{blur:e.$v.form.email.$touch}},[r("q-input",{attrs:{type:"email"},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}})],1),r("q-field",{attrs:{icon:"vpn_key",label:"Password","label-width":"3",helper:"Enter your password",error:e.$v.form.email.$error,"error-label":"Please type a valid password"}},[r("q-input",{attrs:{type:"password"},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}})],1),r("q-field",{attrs:{icon:"vpn_key",label:"RePassword","label-width":"3",helper:"Enter your password again",error:e.$v.form.email.$error,"error-label":"Please type a valid password"}},[r("q-input",{attrs:{type:"password"},model:{value:e.form.retypePassword,callback:function(t){e.$set(e.form,"retypePassword",t)},expression:"form.retypePassword"}})],1)],1),r("q-card-separator"),r("q-card-actions",{attrs:{align:"center"}},[r("q-btn",{attrs:{color:"primary",align:"center",label:"Log In"},on:{click:function(t){e.submit()}}})],1)],1)],1),r("transition",{attrs:{"enter-active-class":"animated bounceInLeft","leave-active-class":"animated bounceOutRight",appear:""}},[e.visible?r("q-alert",{staticClass:"q-mb-sm",attrs:{color:"secondary",icon:"cloud",appear:"",actions:[{label:"Dismiss",handler:function(){e.visible=!1}}]}},[e._v("\n     You have created an account\n    ")]):e._e()],1)],1)},ee=[];Z._withStripped=!0;var te=r("ta7f"),re={data:function(){return{form:{email:"",password:"",retypePassword:""},visible:!1}},validations:{form:{email:{required:te["required"],email:te["email"]},password:{required:te["required"]}}},methods:{submit:function(){var e=this;this.$v.form.$touch();var t=this.form.email,r=this.form.password;r===this.form.retypePassword?this.$auth.createUserWithEmailAndPassword(t,r).then(function(){e.$q.notify({message:"You have Successfully created an account",timeout:3e3,type:"positive",position:"top-right",actions:[{label:"Dismiss",handler:function(){console.log("dismissed")}}]}),window.location="#/signin"}).catch(function(e){var t=e.code,r=e.message;"auth/weak-password"===t?alert("The password is too weak."):alert(r),console.log(e)}):this.$q.notify({message:"Passwords didnot matched",timeout:3e3,type:"negative",icon:"warning",position:"top-right",actions:[{label:"Dismiss",handler:function(){console.log("dismissed")}}]})}}},ae=re,oe=(r("H5P1"),Object(D["a"])(ae,Z,ee,!1,null,null,null));oe.options.__file="SignUp.vue";var ne=oe.exports,ie=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("q-page",{attrs:{padding:""}},[r("q-page",{attrs:{padding:""}},[r("q-card",[r("q-card-title",[e._v("\n        Already a user? Sign In To DanceApp!\n      ")]),r("q-card-separator"),r("q-card-main",[r("q-field",{attrs:{icon:"mail",label:"Email","label-width":"3",error:e.$v.form.email.$error,helper:"Enter your registered email address to Log in","error-label":"Please type a valid email address"},on:{blur:e.$v.form.email.$touch}},[r("q-input",{attrs:{type:"email"},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}})],1),r("q-field",{attrs:{icon:"vpn_key",label:"Password","label-width":"3",helper:"Enter your password",error:e.$v.form.email.$error,"error-label":"Please type a valid password"}},[r("q-input",{attrs:{type:"password"},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}})],1)],1),r("q-card-separator"),r("q-card-actions",{attrs:{align:"center"}},[r("q-btn",{attrs:{color:"primary",align:"center",label:"Log In"},on:{click:function(t){e.submit()}}})],1)],1)],1)],1)},se=[];ie._withStripped=!0;var le={data:function(){return{form:{email:"",password:""}}},validations:{form:{email:{required:te["required"],email:te["email"]},password:{required:te["required"]}}},methods:{submit:function(){this.$v.form.$touch();var e=this.form.email,t=this.form.password;this.$auth.signInWithEmailAndPassword(e,t).then(function(){window.location="#/welcome"}).catch(function(e){alert({title:"Error",message:e})})}}},ce=le,ue=(r("gUPr"),Object(D["a"])(ce,ie,se,!1,null,null,null));ue.options.__file="SignIn.vue";var pe=ue.exports,de=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("q-page",{attrs:{padding:""}},[r("div",[r("h1",[e._v("Welcome to the app")])])])},fe=[];de._withStripped=!0;var me={data:function(){return{form:{email:"",password:""}}},methods:{}},ve=me,he=Object(D["a"])(ve,de,fe,!1,null,null,null);he.options.__file="welcome.vue";var we=he.exports,be=[{path:"/",component:X,children:[{path:"signup",component:ne},{path:"signin",component:pe},{path:"welcome",component:we}]}];be.push({path:"*",component:function(){return r.e(1).then(r.bind(null,"5R6h"))}});var ge=be;a["a"].use(K["a"]);var qe=function(){var e=new K["a"]({scrollBehavior:function(){return{y:0}},routes:ge,mode:"hash",base:""});return e},ye=function(){var e="function"===typeof B?B():B,t="function"===typeof qe?qe({store:e}):qe;e.$router=t;var r={el:"#q-app",router:t,store:e,render:function(e){return e(j)}};return{app:r,store:e,router:t}},$e=r("vDqi"),_e=r.n($e),Pe=function(e){var t=e.Vue;t.prototype.$axios=_e.a},Qe=r("Hc5T"),Se=r.n(Qe),ke=function(e){e.app,e.router;var t=e.Vue;t.use(Se.a)},Ee=r("iqUP"),xe={apiKey:"AIzaSyABxiLnyi6KG936dGtKAlbnqJjXu2b_j18",authDomain:"syndicateapp-4e18d.firebaseapp.com",databaseURL:"https://syndicateapp-4e18d.firebaseio.com",projectId:"syndicateapp-4e18d",storageBucket:"syndicateapp-4e18d.appspot.com",messagingSenderId:"1038909489969"},Re=Ee["initializeApp"](xe),Ue=Re.auth(),Ie=function(e){e.app,e.router;var t=e.Vue;t.prototype.$auth=Ue},Le=r("kv6+"),Ce=function(e){e.app,e.router;var t=e.Vue;t.use(Le["a"])},Ae=(r("VRzm"),r("yt8O"),r("RW0V"),"function"===typeof j.preFetch);function De(e,t){var r=e?e.matched?e:t.resolve(e).route:t.currentRoute;return r?[].concat.apply([],r.matched.map(function(e){return Object.keys(e.components).map(function(t){return{path:e.path,c:e.components[t]}})})):[]}function Fe(e,t){e.beforeResolve(function(r,a,o){var n=De(r,e),i=De(a,e),s=!1,l=n.filter(function(e,t){return s||(s=!i[t]||i[t].c!==e.c||e.path.indexOf("/:")>-1)}).filter(function(e){return e.c&&"function"===typeof e.c.preFetch}).map(function(e){return e.c});if(Ae&&(Ae=!1,l.unshift(j)),!l.length)return o();var c=!0,u=function(e){c=!1,o(e)},p=function(){c&&o()};l.filter(function(e){return e&&e.preFetch}).reduce(function(e,o){return e.then(function(){return c&&o.preFetch({store:t,currentRoute:r,previousRoute:a,redirect:u})})},Promise.resolve()).then(p).catch(function(e){console.error(e),p()})})}var je=ye(),He=je.app,Oe=je.store,Te=je.router;[Pe,ke,Ie,Ce].forEach(function(e){e({app:He,router:Te,store:Oe,Vue:a["a"],ssrContext:null})}),Fe(Te,Oe),new a["a"](He)},V4F6:function(e,t){},fm0S:function(e,t,r){},gUPr:function(e,t,r){"use strict";var a=r("s9aR"),o=r.n(a);o.a},jW8M:function(e,t){},npr3:function(e,t,r){},pwlE:function(e,t){},s9aR:function(e,t,r){}},[[0,3,2]]]);