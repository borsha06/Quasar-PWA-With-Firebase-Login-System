(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{tJcI:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.error?n("div",[n("app-alert",{attrs:{text:t.error.message},on:{dismissed:t.onDismissed}})],1):t._e(),n("q-card",[n("div",{attrs:{id:"recaptcha-container"}}),n("q-card-title",[t._v("\n      Already a user? Sign In To DanceApp!\n    ")]),n("q-card-separator"),n("q-card-main",[n("q-field",{attrs:{name:"email",label:"Email",id:"email",type:"email",required:""}},[n("q-input",{attrs:{type:"email"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1),n("q-field",{attrs:{name:"password",label:"Password",id:"pass",required:""}},[n("q-input",{attrs:{type:"password"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1)],1),n("q-card-separator"),n("q-card-actions",{attrs:{align:"center"}},[n("q-btn",{attrs:{color:"primary",align:"center",label:"Sign In",disabled:t.loading,loading:t.loading},on:{click:function(e){t.onSignin()}}})],1),n("div",{staticClass:"text-xs-center row justify-center"},[n("q-btn",{attrs:{color:"primary",dark:"",disabled:t.loading,loading:t.loading},on:{click:function(e){return e.preventDefault(),t.onSigninFacebook(e)}}},[t._v("Login with Facebook\n        "),n("span",{staticClass:"custom-loader",attrs:{slot:"loader"},slot:"loader"},[n("q-icon",{attrs:{light:""}},[t._v("cached")])],1)])],1),n("div",{staticClass:"text-xs-center row justify-center"},[n("q-btn",{attrs:{color:"primary",dark:"",disabled:t.loading,loading:t.loading},on:{click:function(e){return e.preventDefault(),t.onSigninPhone(e)}}},[t._v("Login with Phone\n        "),n("span",{staticClass:"custom-loader",attrs:{slot:"loader"},slot:"loader"},[n("q-icon",{attrs:{light:""}},[t._v("cached")])],1)])],1),n("br")],1)],1)},a=[];i._withStripped=!0;var r=n("Kw5r"),s=function(){return n.e(6).then(n.bind(null,"7uz5"))};r["a"].component("app-alert",s);var o={data:function(){return{email:"",password:""}},computed:{user:function(){return this.$store.getters.user},error:function(){return this.$store.getters.error},loading:function(){return this.$store.getters.loading}},watch:{user:function(t){null!==t&&void 0!==t&&this.$router.push("/profile")}},methods:{onSignin:function(){this.$store.dispatch("signUserIn",{email:this.email,password:this.password})},onSigninFacebook:function(){this.$store.dispatch("signUserInFacebook")},onSigninPhone:function(){this.$store.dispatch("signUserInPhone")},onResetPassword:function(){if(""===this.email)return this.$store.dispatch("setError",{message:"Email can not be blank"});this.$store.dispatch("resetPasswordWithEmail",{email:this.email})},onDismissed:function(){this.$store.dispatch("clearError")}}},l=o,c=n("KHd+"),d=Object(c["a"])(l,i,a,!1,null,null,null);d.options.__file="Signin.vue";e["default"]=d.exports}}]);