(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2cb15ca2"],{4184:function(t,e,n){},6427:function(t,e,n){"use strict";var r=n("4184"),a=n.n(r);a.a},"90e7":function(t,e,n){"use strict";n.d(e,"l",(function(){return a})),n.d(e,"g",(function(){return o})),n.d(e,"U",(function(){return i})),n.d(e,"T",(function(){return u})),n.d(e,"f",(function(){return s})),n.d(e,"a",(function(){return c})),n.d(e,"B",(function(){return l})),n.d(e,"H",(function(){return d})),n.d(e,"I",(function(){return f})),n.d(e,"A",(function(){return m})),n.d(e,"J",(function(){return h})),n.d(e,"L",(function(){return p})),n.d(e,"v",(function(){return g})),n.d(e,"K",(function(){return b})),n.d(e,"j",(function(){return O})),n.d(e,"h",(function(){return v})),n.d(e,"i",(function(){return j})),n.d(e,"k",(function(){return w})),n.d(e,"E",(function(){return _})),n.d(e,"F",(function(){return y})),n.d(e,"C",(function(){return k})),n.d(e,"D",(function(){return I})),n.d(e,"x",(function(){return x})),n.d(e,"q",(function(){return S})),n.d(e,"t",(function(){return C})),n.d(e,"s",(function(){return $})),n.d(e,"n",(function(){return T})),n.d(e,"u",(function(){return M})),n.d(e,"p",(function(){return R})),n.d(e,"r",(function(){return V})),n.d(e,"o",(function(){return L})),n.d(e,"m",(function(){return P})),n.d(e,"w",(function(){return E})),n.d(e,"e",(function(){return F})),n.d(e,"b",(function(){return D})),n.d(e,"c",(function(){return G})),n.d(e,"V",(function(){return W})),n.d(e,"W",(function(){return z})),n.d(e,"X",(function(){return U})),n.d(e,"G",(function(){return q})),n.d(e,"M",(function(){return B})),n.d(e,"y",(function(){return J})),n.d(e,"O",(function(){return N})),n.d(e,"N",(function(){return A})),n.d(e,"P",(function(){return H})),n.d(e,"Q",(function(){return K})),n.d(e,"R",(function(){return Q})),n.d(e,"S",(function(){return X})),n.d(e,"Y",(function(){return Y})),n.d(e,"Z",(function(){return Z})),n.d(e,"z",(function(){return tt})),n.d(e,"d",(function(){return et}));var r=n("6b6c");function a(t){return Object(r["a"])({url:"setting/config/header_basics",method:"get",params:t})}function o(t){return Object(r["a"])({url:"/setting/config/edit_basics",method:"get",params:t})}function i(t){return Object(r["a"])({url:t.url,method:"get",params:t.data})}function u(){return Object(r["a"])({url:"notify/sms/temp/create",method:"get"})}function s(t){return Object(r["a"])({url:"notify/sms/config",method:"post",data:t})}function c(t){return Object(r["a"])({url:"notify/sms/captcha",method:"post",data:t})}function l(t){return Object(r["a"])({url:"notify/sms/register",method:"post",data:t})}function d(){return Object(r["a"])({url:"notify/sms/number",method:"get"})}function f(){return Object(r["a"])({url:"notify/sms/price",method:"get"})}function m(t){return Object(r["a"])({url:"notify/sms/pay_code",method:"post",data:t})}function h(t){return Object(r["a"])({url:"notify/sms/record",method:"get",params:t})}function p(){return Object(r["a"])({url:"merchant/store",method:"GET"})}function g(){return Object(r["a"])({url:"merchant/store/address",method:"GET"})}function b(t){return Object(r["a"])({url:"merchant/store/".concat(t.id),method:"POST",data:t})}function O(t){return Object(r["a"])({url:"freight/express",method:"get",params:t})}function v(){return Object(r["a"])({url:"/freight/express/create",method:"get"})}function j(t){return Object(r["a"])({url:"freight/express/".concat(t,"/edit"),method:"get"})}function w(t){return Object(r["a"])({url:"freight/express/set_status/".concat(t.id,"/").concat(t.status),method:"PUT"})}function _(t){return Object(r["a"])({url:"setting/role",method:"GET",params:t})}function y(t){return Object(r["a"])({url:"setting/role/set_status/".concat(t.id,"/").concat(t.status),method:"PUT"})}function k(t){return Object(r["a"])({url:"setting/role/".concat(t.id),method:"post",data:t})}function I(t){return Object(r["a"])({url:"setting/role/".concat(t,"/edit"),method:"get"})}function x(){return Object(r["a"])({url:"setting/role/create",method:"get"})}function S(t){return Object(r["a"])({url:"app/wechat/kefu",method:"get",params:t})}function C(t){return Object(r["a"])({url:"app/wechat/kefu/create",method:"get",params:t})}function $(){return Object(r["a"])({url:"app/wechat/kefu/add",method:"get"})}function T(t){return Object(r["a"])({url:"app/wechat/kefu",method:"post",data:t})}function M(t){return Object(r["a"])({url:"app/wechat/kefu/set_status/".concat(t.id,"/").concat(t.status),method:"PUT"})}function R(t){return Object(r["a"])({url:"app/wechat/kefu/".concat(t,"/edit"),method:"GET"})}function V(t,e){return Object(r["a"])({url:"app/wechat/kefu/record/".concat(e),method:"GET",params:t})}function L(t){return Object(r["a"])({url:"app/wechat/kefu/chat_list",method:"GET",params:t})}function P(){return Object(r["a"])({url:"notify/sms/is_login",method:"GET"})}function E(){return Object(r["a"])({url:"notify/sms/logout",method:"GET"})}function F(t){return Object(r["a"])({url:"setting/city/list/".concat(t),method:"get"})}function D(t){return Object(r["a"])({url:"setting/city/add/".concat(t),method:"get"})}function G(t){return Object(r["a"])({url:"setting/city/".concat(t,"/edit"),method:"get"})}function W(t){return Object(r["a"])({url:"setting/shipping_templates/list",method:"get",params:t})}function z(t){return Object(r["a"])({url:"setting/shipping_templates/city_list",method:"get"})}function U(t,e){return Object(r["a"])({url:"setting/shipping_templates/save/".concat(t),method:"post",data:e})}function q(t){return Object(r["a"])({url:"setting/shipping_templates/".concat(t,"/edit"),method:"get"})}function B(){return Object(r["a"])({url:"merchant/store/get_header",method:"get"})}function J(t){return Object(r["a"])({url:"merchant/store",method:"get",params:t})}function N(t,e){return Object(r["a"])({url:"merchant/store/set_show/".concat(t,"/").concat(e),method:"put"})}function A(t){return Object(r["a"])({url:"merchant/store/get_info/".concat(t),method:"get"})}function H(t){return Object(r["a"])({url:"merchant/store_staff",method:"get",params:t})}function K(){return Object(r["a"])({url:"merchant/store_staff/create",method:"get"})}function Q(t){return Object(r["a"])({url:"merchant/store_staff/".concat(t,"/edit"),method:"get"})}function X(t,e){return Object(r["a"])({url:"merchant/store_staff/set_show/".concat(t,"/").concat(e),method:"put"})}function Y(t){return Object(r["a"])({url:"merchant/verify_order",method:"get",params:t})}function Z(t){return Object(r["a"])({url:"merchant/verify/spread_info/".concat(t),method:"get"})}function tt(){return Object(r["a"])({url:"merchant/store_list",method:"get"})}function et(){return Object(r["a"])({url:"setting/city/clean_cache",method:"get"})}},ffd0:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"i-layout-page-header"},[n("div",{staticClass:"i-layout-page-header"},[n("span",{staticClass:"ivu-page-header-title"},[t._v(t._s(t.$route.meta.title))])])]),n("Card",{staticClass:"ivu-mt",attrs:{bordered:!1,"dis-hover":""}},[n("Form",{ref:"formValidate",attrs:{model:t.formValidate,"label-width":t.labelWidth,"label-position":t.labelPosition},nativeOn:{submit:function(t){t.preventDefault()}}},[n("Row",{attrs:{type:"flex",gutter:24}},[n("Col",t._b({},"Col",t.grid,!1),[n("FormItem",{attrs:{label:"状态：","label-for":"status"}},[n("Select",{attrs:{placeholder:"请选择",clearable:""},on:{"on-change":t.userSearchs},model:{value:t.formValidate.status,callback:function(e){t.$set(t.formValidate,"status",e)},expression:"formValidate.status"}},[n("Option",{attrs:{value:"1"}},[t._v("显示")]),n("Option",{attrs:{value:"0"}},[t._v("不显示")])],1)],1)],1),n("Col",t._b({},"Col",t.grid,!1),[n("FormItem",{attrs:{label:"身份昵称：","label-for":"role_name"}},[n("Input",{attrs:{search:"","enter-button":"",placeholder:"请输入身份昵称"},on:{"on-search":t.userSearchs},model:{value:t.formValidate.role_name,callback:function(e){t.$set(t.formValidate,"role_name",e)},expression:"formValidate.role_name"}})],1)],1)],1),n("Row",{attrs:{type:"flex"}},[n("Col",t._b({},"Col",t.grid,!1),[n("Button",{directives:[{name:"auth",rawName:"v-auth",value:["setting-system_role-add"],expression:"['setting-system_role-add']"}],attrs:{type:"primary",icon:"md-add"},on:{click:function(e){return t.add("添加")}}},[t._v("添加身份")])],1)],1)],1),n("Table",{ref:"table",staticClass:"mt25",attrs:{columns:t.columns1,data:t.tableList,loading:t.loading,"highlight-row":"","no-userFrom-text":"暂无数据","no-filtered-userFrom-text":"暂无筛选结果"},scopedSlots:t._u([{key:"is_shows",fn:function(e){var r=e.row;e.index;return[n("i-switch",{attrs:{value:r.status,"true-value":1,"false-value":0,size:"large"},on:{"on-change":function(e){return t.onchangeIsShow(r)}},model:{value:r.status,callback:function(e){t.$set(r,"status",e)},expression:"row.status"}},[n("span",{attrs:{slot:"open"},slot:"open"},[t._v("显示")]),n("span",{attrs:{slot:"close"},slot:"close"},[t._v("隐藏")])])]}},{key:"action",fn:function(e){var r=e.row,a=e.index;return[n("a",{on:{click:function(e){return t.edit(r,"编辑")}}},[t._v("编辑")]),n("Divider",{attrs:{type:"vertical"}}),n("a",{on:{click:function(e){return t.del(r,"删除",a)}}},[t._v("删除")])]}}])}),n("div",{staticClass:"acea-row row-right page"},[n("Page",{attrs:{total:t.total,current:t.formValidate.page,"show-elevator":"","show-total":"","page-size":t.formValidate.limit},on:{"on-change":t.pageChange}})],1)],1),n("Modal",{attrs:{scrollable:"","footer-hide":"",closable:"",title:t.modelTit+"身份","mask-closable":!1,width:"600"},on:{"on-cancel":t.onCancel},model:{value:t.modals,callback:function(e){t.modals=e},expression:"modals"}},[n("Form",{ref:"formInline",attrs:{model:t.formInline,rules:t.ruleValidate,"label-width":100,"label-position":t.labelPosition2},nativeOn:{submit:function(t){t.preventDefault()}}},[n("FormItem",{attrs:{label:"身份名称：","label-for":"role_name",prop:"role_name"}},[n("Input",{attrs:{placeholder:"请输入身份昵称"},model:{value:t.formInline.role_name,callback:function(e){t.$set(t.formInline,"role_name",e)},expression:"formInline.role_name"}})],1),n("FormItem",{attrs:{label:"是否开启：",prop:"status"}},[n("RadioGroup",{model:{value:t.formInline.status,callback:function(e){t.$set(t.formInline,"status",e)},expression:"formInline.status"}},[n("Radio",{attrs:{label:1}},[t._v("开启")]),n("Radio",{attrs:{label:0}},[t._v("关闭")])],1)],1),n("FormItem",{attrs:{label:"权限："}},[n("div",{staticClass:"trees-coadd"},[n("div",{staticClass:"scollhide"},[n("div",{staticClass:"iconlist"},[n("Tree",{ref:"tree",attrs:{data:t.menusList,"show-checkbox":""}})],1)])])]),t.spinShow?n("Spin",{attrs:{size:"large",fix:""}}):t._e(),n("Button",{attrs:{type:"primary",size:"large",long:""},on:{click:function(e){return t.handleSubmit("formInline")}}},[t._v("提交")])],1)],1)],1)},a=[],o=(n("8e6e"),n("ac6a"),n("456d"),n("7f7f"),n("96cf"),n("1da1")),i=n("ade3"),u=n("2f62"),s=n("90e7");function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach((function(e){Object(i["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var d={name:"systemrRole",data:function(){return{spinShow:!1,modals:!1,total:0,grid:{xl:7,lg:7,md:12,sm:24,xs:24},loading:!1,formValidate:{status:"",role_name:"",page:1,limit:20},columns1:[{title:"ID",key:"id",width:80},{title:"身份昵称",key:"role_name",minWidth:120},{title:"权限",key:"rules",tooltip:!0,width:1e3},{title:"状态",slot:"is_shows",minWidth:120},{title:"操作",slot:"action",fixed:"right",minWidth:120}],tableList:[],formInline:{role_name:"",status:0,checked_menus:[],id:0},menusList:[],modelTit:"",ruleValidate:{role_name:[{required:!0,message:"请输入身份昵称",trigger:"blur"}],status:[{required:!0,type:"number",message:"请选择是否开启",trigger:"change"}]}}},computed:l(l({},Object(u["e"])("media",["isMobile"])),{},{labelWidth:function(){return this.isMobile?void 0:75},labelPosition:function(){return this.isMobile?"top":"left"},labelPosition2:function(){return this.isMobile?"top":"right"}}),created:function(){this.getList()},methods:{add:function(t){this.modelTit=t,this.modals=!0,this.getmenusList()},del:function(t,e,n){var r=this,a={title:e,num:n,url:"setting/role/".concat(t.id),method:"DELETE",ids:""};this.$modalSure(a).then((function(t){r.$Message.success(t.msg),r.tableList.splice(n,1)})).catch((function(t){r.$Message.error(t.msg)}))},onchangeIsShow:function(t){var e=this,n={id:t.id,status:t.status};Object(s["F"])(n).then(function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(n){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.$Message.success(n.msg);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){e.$Message.error(t.msg)}))},getList:function(){var t=this;this.loading=!0,this.formValidate.status=this.formValidate.status||"",Object(s["E"])(this.formValidate).then(function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(n){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:r=n.data,t.tableList=r.list,t.total=n.data.count,t.loading=!1;case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){t.loading=!1,t.$Message.error(e.msg)}))},pageChange:function(t){this.formValidate.page=t,this.getList()},userSearchs:function(){this.formValidate.page=1,this.getList()},edit:function(t,e){this.modelTit=e,this.formInline.id=t.id,this.modals=!0,this.rows=t,this.getIofo(t)},getmenusList:function(){var t=this;this.spinShow=!0,Object(s["x"])().then(function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(n){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:r=n.data,t.menusList=r.menus,t.menusList.map((function(t,e){t.expand=!1})),t.spinShow=!1;case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){t.spinShow=!1,t.$Message.error(e.msg)}))},getIofo:function(t){var e=this;this.spinShow=!0,Object(s["D"])(t.id).then(function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(n){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:r=n.data,e.formInline=r.role||e.formInline,e.formInline.checked_menus=e.formInline.rules,e.tidyRes(r.menus),e.spinShow=!1;case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){e.spinShow=!1,e.$Message.error(t.msg)}))},tidyRes:function(t){var e=this,n=[];t.map((function(t){n.push(e.initMenu(t))})),this.$set(this,"menusList",n)},initMenu:function(t){var e=this,n={},r=","+this.formInline.checked_menus+",";return n.title=t.title,n.id=t.id,t.children&&t.children.length>0?(n.children=[],t.children.map((function(t){n.children.push(e.initMenu(t))}))):(n.checked=-1!==r.indexOf(String(","+n.id+",")),n.expand=!n.checked),n},handleSubmit:function(t){var e=this;this.$refs[t].validate((function(n){return!!n&&(e.formInline.checked_menus=[],e.$refs.tree.getCheckedAndIndeterminateNodes().map((function(t){e.formInline.checked_menus.push(t.id)})),0===e.formInline.checked_menus.length?e.$Message.warning("请至少选择一个权限"):void Object(s["C"])(e.formInline).then(function(){var n=Object(o["a"])(regeneratorRuntime.mark((function n(r){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:e.$Message.success(r.msg),e.modals=!1,e.getList(),e.$refs[t].resetFields(),e.formInline.checked_menus=[];case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()).catch((function(t){e.$Message.error(t.msg)})))}))},onCancel:function(){this.$refs["formInline"].resetFields(),this.formInline.checked_menus=[]}}},f=d,m=(n("6427"),n("2877")),h=Object(m["a"])(f,r,a,!1,null,"1ba65511",null);e["default"]=h.exports}}]);