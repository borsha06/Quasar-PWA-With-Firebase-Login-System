(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[5],{"2WpJ":function(e,n,t){"use strict";t.r(n);var a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"text-center"},[t("h1",[e._v("Hello "+e._s(e.name))])])},r=[];a._withStripped=!0;var o=t("iqUP"),s=t.n(o),u={data:function(){return{name:""}},beforeCreate:function(){var e=this,n=s.a.auth().currentUser.uid;return console.log(n),s.a.database().ref("/users/"+n).once("value").then(function(n){console.log(n),e.name=n.val()&&n.val().username||"Anonymous"})}},l=u,i=t("KHd+"),c=Object(i["a"])(l,a,r,!1,null,null,null);c.options.__file="MainPage.vue";n["default"]=c.exports}}]);