(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["dialog"],{"322d":function(t,o,n){"use strict";n.r(o);var e=function(){var t=this,o=t.$createElement,n=t._self._c||o;return n("article",{staticClass:"lbzui-components-dialog"},[n("h2",{staticClass:"lbz-typography--h5"},[t._v("# Alert dialog")]),n("h3",{staticClass:"lbz-typography--subtitle1"},[t._v(" $ [required]active.sync: true, false ")]),n("h3",{staticClass:"lbz-typography--subtitle1"},[t._v(" $ type: 'alert' (default), 'simple', 'confirmation', 'full-screen (mobile only)' ")]),n("lbz-button",{on:{click:function(o){o.stopPropagation(),t.valert0=!0}}},[t._v("Alert")]),n("lbz-dialog",{ref:"dialog",attrs:{active:t.valert0},on:{"update:active":function(o){t.valert0=o},open:t.fbeforeOpen,close:t.fbeforeClose},scopedSlots:t._u([{key:"center",fn:function(){return[t._v("Discard draft?")]},proxy:!0},{key:"end",fn:function(){return[n("lbz-button",{on:{click:function(o){return o.stopPropagation(),t.fcancel(o)}}},[t._v("Cancel")]),n("lbz-button",{on:{click:function(o){o.stopPropagation(),t.valert0=!1}}},[t._v("Discard")])]},proxy:!0}])}),n("h3",{staticClass:"lbz-typography--subtitle1"},[t._v(" $ stacked (['', 'alert', 'confirmation'].includes(type)): true, false (default) ")]),n("lbz-button",{on:{click:function(o){o.stopPropagation(),t.valert1=!0}}},[t._v("Stacked")]),n("lbz-dialog",{attrs:{active:t.valert1,stacked:""},on:{"update:active":function(o){t.valert1=o}},scopedSlots:t._u([{key:"center",fn:function(){return[t._v("Discard draft?")]},proxy:!0},{key:"end",fn:function(){return[n("lbz-button",{on:{click:function(o){o.stopPropagation(),t.valert1=!1}}},[t._v("Cancel")]),n("lbz-button",{on:{click:function(o){o.stopPropagation(),t.valert1=!1}}},[t._v("Discard")])]},proxy:!0}])}),n("h3",{staticClass:"lbz-typography--subtitle1"},[t._v("$ title: '' (default), 'x'")]),n("lbz-button",{on:{click:function(o){o.stopPropagation(),t.valert2=!0}}},[t._v("Title")]),n("lbz-dialog",{attrs:{active:t.valert2,title:"Dialog header"},on:{"update:active":function(o){t.valert2=o}},scopedSlots:t._u([{key:"center",fn:function(){return[t._v("Discard draft?")]},proxy:!0},{key:"end",fn:function(){return[n("lbz-button",{on:{click:function(o){o.stopPropagation(),t.valert2=!1}}},[t._v("Cancel")]),n("lbz-button",{on:{click:function(o){o.stopPropagation(),t.valert2=!1}}},[t._v("Discard")])]},proxy:!0}])}),n("h3",{staticClass:"lbz-typography--subtitle1"},[t._v(" $ height (type !== 'full-screen'): '' (default), 'x' ")]),n("lbz-button",{on:{click:function(o){o.stopPropagation(),t.valert3=!0}}},[t._v("Height")]),n("lbz-dialog",{attrs:{active:t.valert3,height:"180px"},on:{"update:active":function(o){t.valert3=o}},scopedSlots:t._u([{key:"center",fn:function(){return[t._v("Discard draft?")]},proxy:!0},{key:"end",fn:function(){return[n("lbz-button",{on:{click:function(o){o.stopPropagation(),t.valert3=!1}}},[t._v("Cancel")]),n("lbz-button",{on:{click:function(o){o.stopPropagation(),t.valert3=!1}}},[t._v("Discard")])]},proxy:!0}])}),n("h3",{staticClass:"lbz-typography--subtitle1"},[t._v(" $ append-to-body: true, false (default) ")]),n("lbz-button",{on:{click:function(o){o.stopPropagation(),t.valert4=!0}}},[t._v("Append to body")]),n("lbz-dialog",{attrs:{active:t.valert4,"append-to-body":""},on:{"update:active":function(o){t.valert4=o}},scopedSlots:t._u([{key:"center",fn:function(){return[t._v("Discard draft?")]},proxy:!0},{key:"end",fn:function(){return[n("lbz-button",{on:{click:function(o){o.stopPropagation(),t.valert4=!1}}},[t._v("Cancel")]),n("lbz-button",{on:{click:function(o){o.stopPropagation(),t.valert4=!1}}},[t._v("Discard")])]},proxy:!0}])}),n("h3",{staticClass:"lbz-typography--subtitle1"},[t._v(" $ lock-body-scroll: true (default), false ")]),n("lbz-button",{on:{click:function(o){o.stopPropagation(),t.valert5=!0}}},[t._v("Unlock body scroll")]),n("lbz-dialog",{attrs:{active:t.valert5,"lock-body-scroll":!1},on:{"update:active":function(o){t.valert5=o}},scopedSlots:t._u([{key:"center",fn:function(){return[t._v("Discard draft?")]},proxy:!0},{key:"end",fn:function(){return[n("lbz-button",{on:{click:function(o){o.stopPropagation(),t.valert5=!1}}},[t._v("Cancel")]),n("lbz-button",{on:{click:function(o){o.stopPropagation(),t.valert5=!1}}},[t._v("Discard")])]},proxy:!0}])}),n("h2",{staticClass:"lbz-typography--h5"},[t._v("# Simple dialog")]),n("h3",{staticClass:"lbz-typography--subtitle1"},[t._v(" $ [required]active.sync: true, false ")]),n("h3",{staticClass:"lbz-typography--subtitle1"},[t._v(" $ type: 'alert' (default), 'simple', 'confirmation', 'full-screen (mobile only)' ")]),n("h3",{staticClass:"lbz-typography--subtitle1"},[t._v("$ title: '' (default), 'x'")]),n("lbz-button",{on:{click:function(o){o.stopPropagation(),t.vsimple0=!0}}},[t._v("Simple")]),n("lbz-dialog",{attrs:{active:t.vsimple0,type:"simple",title:"Dialog header"},on:{"update:active":function(o){t.vsimple0=o}},scopedSlots:t._u([{key:"center",fn:function(){return[n("lbz-list",{attrs:{dense:""}},t._l(t.SIMPLELIST,(function(o,e){return n("lbz-list-item",{key:e,on:{click:function(o){o.stopPropagation(),t.vsimple0=!1}},scopedSlots:t._u([{key:"start",fn:function(){return[n("lbz-icon",{staticClass:"lbz-list-item__thumbnail"},[t._v(t._s(o.icon))])]},proxy:!0},{key:"center",fn:function(){return[t._v(t._s(o.label))]},proxy:!0}],null,!0)})})),1)]},proxy:!0}])}),n("h3",{staticClass:"lbz-typography--subtitle1"},[t._v(" $ height (type !== 'full-screen'): '' (default), 'x' ")]),n("lbz-button",{on:{click:function(o){o.stopPropagation(),t.vsimple1=!0}}},[t._v("Height")]),n("lbz-dialog",{attrs:{active:t.vsimple1,type:"simple",title:"Dialog header",height:"360px"},on:{"update:active":function(o){t.vsimple1=o}},scopedSlots:t._u([{key:"center",fn:function(){return[n("lbz-list",{attrs:{dense:""}},t._l(t.SIMPLELIST,(function(o,e){return n("lbz-list-item",{key:e,on:{click:function(o){o.stopPropagation(),t.vsimple1=!1}},scopedSlots:t._u([{key:"start",fn:function(){return[n("lbz-icon",{staticClass:"lbz-list-item__thumbnail"},[t._v(t._s(o.icon))])]},proxy:!0},{key:"center",fn:function(){return[t._v(t._s(o.label))]},proxy:!0}],null,!0)})})),1)]},proxy:!0}])}),n("h3",{staticClass:"lbz-typography--subtitle1"},[t._v(" $ append-to-body: true, false (default) ")]),n("lbz-button",{on:{click:function(o){o.stopPropagation(),t.vsimple2=!0}}},[t._v("Append to body")]),n("lbz-dialog",{attrs:{active:t.vsimple2,type:"simple",title:"Dialog header","append-to-body":""},on:{"update:active":function(o){t.vsimple2=o}},scopedSlots:t._u([{key:"center",fn:function(){return[n("lbz-list",{attrs:{dense:""}},t._l(t.SIMPLELIST,(function(o,e){return n("lbz-list-item",{key:e,on:{click:function(o){o.stopPropagation(),t.vsimple2=!1}},scopedSlots:t._u([{key:"start",fn:function(){return[n("lbz-icon",{staticClass:"lbz-list-item__thumbnail"},[t._v(t._s(o.icon))])]},proxy:!0},{key:"center",fn:function(){return[t._v(t._s(o.label))]},proxy:!0}],null,!0)})})),1)]},proxy:!0}])}),n("h3",{staticClass:"lbz-typography--subtitle1"},[t._v(" $ lock-body-scroll: true (default), false ")]),n("lbz-button",{on:{click:function(o){o.stopPropagation(),t.vsimple3=!0}}},[t._v("Unlock body scroll")]),n("lbz-dialog",{attrs:{active:t.vsimple3,type:"simple",title:"Dialog header","lock-body-scroll":!1},on:{"update:active":function(o){t.vsimple3=o}},scopedSlots:t._u([{key:"center",fn:function(){return[n("lbz-list",{attrs:{dense:""}},t._l(t.SIMPLELIST,(function(o,e){return n("lbz-list-item",{key:e,on:{click:function(o){o.stopPropagation(),t.vsimple3=!1}},scopedSlots:t._u([{key:"start",fn:function(){return[n("lbz-icon",{staticClass:"lbz-list-item__thumbnail"},[t._v(t._s(o.icon))])]},proxy:!0},{key:"center",fn:function(){return[t._v(t._s(o.label))]},proxy:!0}],null,!0)})})),1)]},proxy:!0}])}),n("h2",{staticClass:"lbz-typography--h5"},[t._v("# Confirmation dialog")]),n("h3",{staticClass:"lbz-typography--subtitle1"},[t._v(" $ [required]active.sync: true, false ")]),n("h3",{staticClass:"lbz-typography--subtitle1"},[t._v(" $ type: 'alert' (default), 'simple', 'confirmation', 'full-screen (mobile only)' ")]),n("h3",{staticClass:"lbz-typography--subtitle1"},[t._v("$ title: '' (default), 'x'")]),n("lbz-button",{on:{click:function(o){o.stopPropagation(),t.vconfirmation0=!0}}},[t._v("Confirmation")]),n("lbz-dialog",{attrs:{active:t.vconfirmation0,type:"confirmation",title:"Two-line dialog header"},on:{"update:active":function(o){t.vconfirmation0=o}},scopedSlots:t._u([{key:"center",fn:function(){return[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")]},proxy:!0},{key:"end",fn:function(){return[n("lbz-button",{on:{click:function(o){o.stopPropagation(),t.vconfirmation0=!1}}},[t._v("Action 1")]),n("lbz-button",{on:{click:function(o){o.stopPropagation(),t.vconfirmation0=!1}}},[t._v("Action 2")])]},proxy:!0}])}),n("h3",{staticClass:"lbz-typography--subtitle1"},[t._v(" $ scrollable (type === 'confirmation'): true, false (default) ")]),n("h3",{staticClass:"lbz-typography--subtitle1"},[t._v(" $ height (type !== 'full-screen'): '' (default), 'x' ")]),n("lbz-button",{on:{click:function(o){o.stopPropagation(),t.vconfirmation1=!0}}},[t._v("Scrollable & Height")]),n("lbz-dialog",{attrs:{active:t.vconfirmation1,type:"confirmation",scrollable:"",title:"Dialog header",height:"180px"},on:{"update:active":function(o){t.vconfirmation1=o}},scopedSlots:t._u([{key:"center",fn:function(){return[n("lbz-list",{attrs:{dense:""}},t._l(10,(function(o,e){return n("lbz-list-item",{key:e,on:{click:function(o){o.stopPropagation(),t.vradio=e}},scopedSlots:t._u([{key:"start",fn:function(){return[n("lbz-radio",{attrs:{value:e,color:"primary"},model:{value:t.vradio,callback:function(o){t.vradio=o},expression:"vradio"}})]},proxy:!0},{key:"center",fn:function(){return[t._v("Item "+t._s(o))]},proxy:!0}],null,!0)})})),1)]},proxy:!0},{key:"end",fn:function(){return[n("lbz-button",{on:{click:function(o){o.stopPropagation(),t.vconfirmation1=!1}}},[t._v("Action 1")]),n("lbz-button",{on:{click:function(o){o.stopPropagation(),t.vconfirmation1=!1}}},[t._v("Action 2")])]},proxy:!0}])}),n("h3",{staticClass:"lbz-typography--subtitle1"},[t._v(" $ stacked (['', 'alert', 'confirmation'].includes(type)): true, false (default) ")]),n("lbz-button",{on:{click:function(o){o.stopPropagation(),t.vconfirmation2=!0}}},[t._v("Stacked")]),n("lbz-dialog",{attrs:{active:t.vconfirmation2,type:"confirmation",stacked:"",title:"Two-line dialog header"},on:{"update:active":function(o){t.vconfirmation2=o}},scopedSlots:t._u([{key:"center",fn:function(){return[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")]},proxy:!0},{key:"end",fn:function(){return[n("lbz-button",{on:{click:function(o){o.stopPropagation(),t.vconfirmation2=!1}}},[t._v("Turn on speed boost")]),n("lbz-button",{on:{click:function(o){o.stopPropagation(),t.vconfirmation2=!1}}},[t._v("No thanks")])]},proxy:!0}])}),n("h3",{staticClass:"lbz-typography--subtitle1"},[t._v(" $ append-to-body: true, false (default) ")]),n("lbz-button",{on:{click:function(o){o.stopPropagation(),t.vconfirmation3=!0}}},[t._v("Append to body")]),n("lbz-dialog",{attrs:{active:t.vconfirmation3,type:"confirmation",title:"Two-line dialog header","append-to-body":""},on:{"update:active":function(o){t.vconfirmation3=o}},scopedSlots:t._u([{key:"center",fn:function(){return[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")]},proxy:!0},{key:"end",fn:function(){return[n("lbz-button",{on:{click:function(o){o.stopPropagation(),t.vconfirmation3=!1}}},[t._v("Action 1")]),n("lbz-button",{on:{click:function(o){o.stopPropagation(),t.vconfirmation3=!1}}},[t._v("Action 2")])]},proxy:!0}])}),n("h3",{staticClass:"lbz-typography--subtitle1"},[t._v(" $ lock-body-scroll: true (default), false ")]),n("lbz-button",{on:{click:function(o){o.stopPropagation(),t.vconfirmation4=!0}}},[t._v("Unlock body scroll")]),n("lbz-dialog",{attrs:{active:t.vconfirmation4,type:"confirmation",title:"Two-line dialog header","lock-body-scroll":!1},on:{"update:active":function(o){t.vconfirmation4=o}},scopedSlots:t._u([{key:"center",fn:function(){return[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")]},proxy:!0},{key:"end",fn:function(){return[n("lbz-button",{on:{click:function(o){o.stopPropagation(),t.vconfirmation4=!1}}},[t._v("Action 1")]),n("lbz-button",{on:{click:function(o){o.stopPropagation(),t.vconfirmation4=!1}}},[t._v("Action 2")])]},proxy:!0}])}),n("h2",{staticClass:"lbz-typography--h5"},[t._v("# Full-screen dialog (mobile only)")]),n("h3",{staticClass:"lbz-typography--subtitle1"},[t._v(" $ [required]active.sync: true, false ")]),n("h3",{staticClass:"lbz-typography--subtitle1"},[t._v(" $ type: 'alert' (default), 'simple', 'confirmation', 'full-screen (mobile only)' ")]),n("h3",{staticClass:"lbz-typography--subtitle1"},[t._v("$ title: '' (default), 'x'")]),n("h3",{staticClass:"lbz-typography--subtitle1"},[t._v(" $ append-to-body: true, false (default) ")]),n("h3",{staticClass:"lbz-typography--subtitle1"},[t._v(" $ lock-body-scroll: true (default), false ")]),n("lbz-button",{on:{click:function(o){o.stopPropagation(),t.vfullScreen0=!0}}},[t._v("Full-screen")]),n("lbz-dialog",{attrs:{active:t.vfullScreen0,type:"full-screen",title:"Page title","append-to-body":""},on:{"update:active":function(o){t.vfullScreen0=o}},scopedSlots:t._u([{key:"start",fn:function(){return[n("lbz-button",{on:{click:function(o){o.stopPropagation(),t.vfullScreen0=!1}}},[t._v("Action")])]},proxy:!0},{key:"center",fn:function(){return[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")]},proxy:!0}])})],1)},i=[],l=n("d4ec"),a=n("bee2"),c=n("262e"),r=n("2caf"),s=n("9ab4"),u=n("60a3"),p=function(t){Object(c["a"])(n,t);var o=Object(r["a"])(n);function n(){var t;return Object(l["a"])(this,n),t=o.apply(this,arguments),t.SIMPLELIST=[{icon:"person",label:"user1@gmail.com"},{icon:"person",label:"user2@gmail.com"},{icon:"add",label:"Add account"}],t.valert0=!1,t.valert1=!1,t.valert2=!1,t.valert3=!1,t.valert4=!1,t.valert5=!1,t.vsimple0=!1,t.vsimple1=!1,t.vsimple2=!1,t.vsimple3=!1,t.vconfirmation0=!1,t.vconfirmation1=!1,t.vradio=0,t.vconfirmation2=!1,t.vconfirmation3=!1,t.vconfirmation4=!1,t.vfullScreen0=!1,t}return Object(a["a"])(n,[{key:"fbeforeOpen",value:function(){console.log("Dialog will be opened")}},{key:"fbeforeClose",value:function(){console.log("Dialog will be closed")}},{key:"fcancel",value:function(){this.rdialog.fclose()}}]),n}(u["k"]);Object(s["a"])([Object(u["j"])("dialog")],p.prototype,"rdialog",void 0),p=Object(s["a"])([u["a"]],p);var f=p,d=f,b=n("2877"),v=Object(b["a"])(d,e,i,!1,null,null,null);o["default"]=v.exports}}]);
//# sourceMappingURL=dialog.0c21acaa.js.map