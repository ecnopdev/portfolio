(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-693f525c"],{"0160":function(e,t,n){},"0846":function(e,t,n){e.exports=n.p+"img/exp-abbott.795bcfc1.png"},"1d71":function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-container",[i("v-row",{attrs:{"no-gutters":""}},[i("v-col",{attrs:{cols:"12 pa-0 ma-0"}},[i("div",[i("v-timeline",{staticClass:"pa-0 ma-0",attrs:{dense:e.$vuetify.breakpoint.mobile}},e._l(e.experiences,(function(t,a){return i("v-timeline-item",{key:a,attrs:{color:t.color,small:t.isSmall},scopedSlots:e._u([{key:"icon",fn:function(){return[i("v-avatar",[i("v-img",{attrs:{src:n("287a")("./"+t.companyIcon)}})],1)]},proxy:!0},{key:"opposite",fn:function(){return[i("span",{class:"headline font-weight-bold "+t.color+"--text",domProps:{textContent:e._s(t.year)}})]},proxy:!0}],null,!0)},[i("v-card",{staticClass:"elevation-2",attrs:{dark:"",color:"green"}},[i("v-card-title",{staticClass:"company-name font-weight-bold text-title text-sm-h5"},[e._v(e._s(t.company)+" ")]),i("v-card-subtitle",{staticClass:"d-flex flex-column body-2"},[i("div",[e._v(e._s(t.position))]),i("div",{staticClass:"hidden-sm-and-up"},[e._v(e._s(t.year))])]),i("v-card-text",[e._v(e._s(t.description))]),i("v-card-actions",e._l(t.skills,(function(t,n){return i("v-icon",{key:n,staticClass:"mx-1",attrs:{size:"20",title:t.name}},[e._v(e._s(t.icon))])})),1)],1)],1)})),1)],1)])],1)],1)},a=[],o={name:"ExperienceTimeline",data:function(){return{experiences:[{color:"blue",year:"2014 - Present",company:"Singapore Press Holdings",companyIcon:"exp-sph.png",website:"https://sph.com.sg",position:"Software Engineer",description:"Design, develop and implement enterprise productivity tools and cloud-native applications for the newsroom. ",skills:[{icon:"fab fa-vuejs",name:"Vue.js, Vuetify"},{icon:"fab fa-node-js",name:"Node.js, Express"},{icon:"fab fa-google",name:"Google Cloud Platform, Google Apps Script, GSuite"},{icon:"fab fa-php",name:"Php"},{icon:"fab fa-jira",name:"Jira, Scrum"}],isSmall:!1},{color:"blue",year:"2013",company:"Orica Australia",companyIcon:"exp-orica.png",position:"Software Engineer",description:"Global applications developer and support for Lotus Domino applications.",skills:[{icon:"fab fa-java",name:"Java Server Faces (Xpages)"}],isSmall:!1},{color:"blue",year:"2011",company:"Sun Life of Canada Philippines",companyIcon:"exp-sun-life.png",position:"Software Engineer",description:"Design, develop, implement and maintain a multi-language policy contract generator.",skills:[{icon:"fab fa-java",name:"Java Server Faces (Xpages)"}],isSmall:!1},{color:"blue",year:"2011",company:"Abbott Laboratories",companyIcon:"exp-abbott.png",position:"Software Engineer",description:"Design, develop, implement and maintain workflow applications to support the parmaceutical operations.",skills:[{icon:"fab fa-java",name:"Java Server Faces (Xpages)"}],isSmall:!1},{color:"blue",year:"2008",company:"Softweb Consulting",companyIcon:"exp-softweb.png",position:"Software Engineer",description:"Design, develop and implement complex workflow applications for a wide-range of industries such as Manufacturing, Banking, Human Resources, and Education.",skills:[{icon:"fab fa-java",name:"Java Server Faces (Xpages)"},{icon:"fab fa-php",name:"Codeigniter"},{icon:"fab fa-jira",name:"Scrum"}],isSmall:!1},{color:"red",year:"2008",company:"De La Salle University - Manila",companyIcon:"exp-dlsu.png",position:"Bachelors of Science in Computer Science",description:"Graduated with a major in Software Technology.",skills:[],isSmall:!0}]}}},s=o,r=(n("edee"),n("2877")),c=n("6544"),l=n.n(c),p=n("8212"),d=n("b0af"),m=n("99d9"),u=n("62ad"),f=n("a523"),v=n("132d"),g=n("adda"),h=n("0fd9"),b=n("5530"),x=(n("0160"),n("58df")),y=n("7560"),_=Object(x["a"])(y["a"]).extend({name:"v-timeline",provide:function(){return{timeline:this}},props:{alignTop:Boolean,dense:Boolean,reverse:Boolean},computed:{classes:function(){return Object(b["a"])({"v-timeline--align-top":this.alignTop,"v-timeline--dense":this.dense,"v-timeline--reverse":this.reverse},this.themeClasses)}},render:function(e){return e("div",{staticClass:"v-timeline",class:this.classes},this.$slots.default)}}),C=(n("c96a"),n("9d26")),S=n("a9ad"),w=Object(x["a"])(S["a"],y["a"]),k=w.extend().extend({name:"v-timeline-item",inject:["timeline"],props:{color:{type:String,default:"primary"},fillDot:Boolean,hideDot:Boolean,icon:String,iconColor:String,large:Boolean,left:Boolean,right:Boolean,small:Boolean},computed:{hasIcon:function(){return!!this.icon||!!this.$slots.icon}},methods:{genBody:function(){return this.$createElement("div",{staticClass:"v-timeline-item__body"},this.$slots.default)},genIcon:function(){return this.$slots.icon?this.$slots.icon:this.$createElement(C["a"],{props:{color:this.iconColor,dark:!this.theme.isDark,small:this.small}},this.icon)},genInnerDot:function(){var e=this.setBackgroundColor(this.color);return this.$createElement("div",Object(b["a"])({staticClass:"v-timeline-item__inner-dot"},e),[this.hasIcon&&this.genIcon()])},genDot:function(){return this.$createElement("div",{staticClass:"v-timeline-item__dot",class:{"v-timeline-item__dot--small":this.small,"v-timeline-item__dot--large":this.large}},[this.genInnerDot()])},genDivider:function(){var e=[];return this.hideDot||e.push(this.genDot()),this.$createElement("div",{staticClass:"v-timeline-item__divider"},e)},genOpposite:function(){return this.$createElement("div",{staticClass:"v-timeline-item__opposite"},this.$slots.opposite)}},render:function(e){var t=[this.genBody(),this.genDivider()];return this.$slots.opposite&&t.push(this.genOpposite()),e("div",{staticClass:"v-timeline-item",class:Object(b["a"])({"v-timeline-item--fill-dot":this.fillDot,"v-timeline-item--before":this.timeline.reverse?this.right:this.left,"v-timeline-item--after":this.timeline.reverse?this.left:this.right},this.themeClasses)},t)}}),j=Object(r["a"])(s,i,a,!1,null,"2eecfcd4",null);t["default"]=j.exports;l()(j,{VAvatar:p["a"],VCard:d["a"],VCardActions:m["a"],VCardSubtitle:m["b"],VCardText:m["c"],VCardTitle:m["d"],VCol:u["a"],VContainer:f["a"],VIcon:v["a"],VImg:g["a"],VRow:h["a"],VTimeline:_,VTimelineItem:k})},"287a":function(e,t,n){var i={"./exp-abbott.png":"0846","./exp-dlsu.png":"c5ef","./exp-orica.png":"e68d","./exp-softweb.png":"645a","./exp-sph.png":"e89f","./exp-sun-life.png":"6da1","./exp-up.png":"6ca2"};function a(e){var t=o(e);return n(t)}function o(e){if(!n.o(i,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return i[e]}a.keys=function(){return Object.keys(i)},a.resolve=o,e.exports=a,a.id="287a"},"645a":function(e,t,n){e.exports=n.p+"img/exp-softweb.09159d66.png"},"6ca2":function(e,t,n){e.exports=n.p+"img/exp-up.d05dd188.png"},"6da1":function(e,t,n){e.exports=n.p+"img/exp-sun-life.46305fb2.png"},"961d":function(e,t,n){},"99d9":function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return s})),n.d(t,"c",(function(){return r})),n.d(t,"d",(function(){return c}));var i=n("b0af"),a=n("80d2"),o=Object(a["g"])("v-card__actions"),s=Object(a["g"])("v-card__subtitle"),r=Object(a["g"])("v-card__text"),c=Object(a["g"])("v-card__title");i["a"]},c5ef:function(e,t,n){e.exports=n.p+"img/exp-dlsu.ff840e30.png"},e68d:function(e,t,n){e.exports=n.p+"img/exp-orica.c19becbc.png"},e89f:function(e,t,n){e.exports=n.p+"img/exp-sph.68e42665.png"},edee:function(e,t,n){"use strict";var i=n("961d"),a=n.n(i);a.a}}]);
//# sourceMappingURL=chunk-693f525c.e903b0ab.js.map