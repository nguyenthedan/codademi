(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["dashboard"],{cf04:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-row",{attrs:{justify:"center"}},[a("v-card",{attrs:{width:"100%"}},[a("v-app-bar",{attrs:{text:"",dense:"",color:"transparent",elevation:"0"}},[a("v-toolbar-title",[a("h4",[t._v("List Project")])]),a("v-spacer"),a("v-btn",{attrs:{color:"primary"},on:{click:function(e){return t.handleNewProject()}}},[t._v("New")])],1),a("v-divider"),a("v-card-text",{staticClass:"pa-0"},[a("v-list",{staticClass:"pa-0",attrs:{"two-line":""}},[t._l(t.projects,(function(e,r){return[e.header?a("v-subheader",{key:e.header},[t._v(t._s(e.header))]):e.divider?a("v-divider",{key:r}):a("v-list-item",{key:e.title,on:{click:function(a){return t.handleClick(e.id)}}},[a("v-list-item-avatar",{attrs:{color:e.color}},[a("v-icon",{attrs:{dark:""}},[t._v(t._s(e.icon))])],1),a("v-list-item-content",[a("v-list-item-subtitle",{domProps:{innerHTML:t._s(e.name)}})],1),a("v-list-item-action",{staticClass:"caption"},[t._v(t._s(e.timeLabel))])],1)]}))],2)],1)],1)],1)],1)},i=[],n=(a("4160"),a("b0c0"),a("159b"),a("277f")),s=a("1543"),o={data:function(){return{items:n["a"],projects:[]}},created:function(){this.$store.commit("setMenu",[{header:"Apps"},{text:"akacon",icon:"dashboard",to:"/dashboard"}]),this.getProjects()},methods:{handleClick:function(t){this.$router.push("/".concat(t,"/function/list"))},handleNewProject:function(){this.$router.push("/newproject")},getProjects:function(){var t=this;s["b"].ref("/projects/"+this.$store.state.currentUser.uid).once("value").then((function(e){e.forEach((function(e){var a={};a.name=e.val().name,a.id=e.key,t.projects.push(a)}))}))}}},c=o,d=a("2877"),l=a("6544"),u=a.n(l),v=a("40dc"),h=a("8336"),p=a("b0af"),f=a("99d9"),b=a("a523"),m=a("ce7e"),V=a("132d"),w=a("8860"),j=a("da13"),k=a("1800"),_=a("8270"),C=a("5d23"),L=a("0fd9"),y=a("2fa4"),I=a("e0c7"),P=a("2a7f"),x=Object(d["a"])(c,r,i,!1,null,null,null);e["default"]=x.exports;u()(x,{VAppBar:v["a"],VBtn:h["a"],VCard:p["a"],VCardText:f["c"],VContainer:b["a"],VDivider:m["a"],VIcon:V["a"],VList:w["a"],VListItem:j["a"],VListItemAction:k["a"],VListItemAvatar:_["a"],VListItemContent:C["a"],VListItemSubtitle:C["b"],VRow:L["a"],VSpacer:y["a"],VSubheader:I["a"],VToolbarTitle:P["b"]})}}]);
//# sourceMappingURL=dashboard.2eb54385.js.map