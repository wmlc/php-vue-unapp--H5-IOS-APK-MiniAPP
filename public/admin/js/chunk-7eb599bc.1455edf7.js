(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7eb599bc"],{"0336":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"i-layout-page-header"},[n("div",{staticClass:"i-layout-page-header"},[n("span",{staticClass:"ivu-page-header-title"},[t._v(t._s(t.$route.meta.title))])])]),n("Card",{staticClass:"ivu-mt",attrs:{bordered:!1,"dis-hover":""}},[n("Form",{ref:"formValidate",attrs:{model:t.formValidate,"label-width":100},nativeOn:{submit:function(t){t.preventDefault()}}},[n("Row",{attrs:{gutter:24,type:"flex"}},[n("Col",{staticClass:"ivu-text-left",attrs:{span:"24"}},[n("FormItem",{attrs:{label:"核销日期："}},[n("RadioGroup",{staticClass:"mr",attrs:{type:"button"},model:{value:t.formValidate.data,callback:function(e){t.$set(t.formValidate,"data",e)},expression:"formValidate.data"}},t._l(t.fromList.fromTxt,(function(e,a){return n("Radio",{key:a,attrs:{label:e.val}},[t._v(t._s(e.text))])})),1),n("DatePicker",{staticStyle:{width:"200px"},attrs:{editable:!1,value:t.timeVal,format:"yyyy/MM/dd",type:"daterange",placement:"bottom-end",placeholder:"自定义时间"},on:{"on-change":t.onchangeTime}})],1)],1),n("Col",{staticClass:"ivu-text-left",attrs:{span:"12"}},[n("FormItem",{attrs:{label:"筛选条件："}},[n("Input",{staticStyle:{width:"90%"},attrs:{"enter-button":"",placeholder:"请输入姓名、电话、订单ID"},model:{value:t.formValidate.real_name,callback:function(e){t.$set(t.formValidate,"real_name",e)},expression:"formValidate.real_name"}})],1)],1),n("Col",{staticClass:"mr",attrs:{span:"12"}},[n("FormItem",{attrs:{label:"选择门店：","label-for":"store_name"}},[n("Select",{attrs:{"element-id":"store_id",clearable:""},on:{"on-change":t.userSearchs},model:{value:t.formValidate.store_id,callback:function(e){t.$set(t.formValidate,"store_id",e)},expression:"formValidate.store_id"}},t._l(t.storeSelectList,(function(e){return n("Option",{key:e.id,attrs:{value:e.id}},[t._v(t._s(e.name))])})),1)],1)],1),n("Col",{staticClass:"mr",attrs:{span:"12"}},[n("FormItem",{attrs:{label:"","label-for":"store_name"}},[n("Button",{staticClass:"mr15",attrs:{type:"primary"},on:{click:t.userSearchs}},[t._v("搜索")]),n("Button",{staticClass:"mr15",on:{click:t.refresh}},[t._v("刷新")])],1)],1)],1)],1)],1),t.cardLists.length>0?n("cards-data",{attrs:{cardLists:t.cardLists}}):t._e(),n("Card",{attrs:{bordered:!1,"dis-hover":""}},[n("Table",{ref:"table",staticClass:"orderData mt25",attrs:{columns:t.columns,data:t.orderList,loading:t.loading,"highlight-row":"","no-data-text":"暂无数据","no-filtered-data-text":"暂无筛选结果"},scopedSlots:t._u([{key:"name",fn:function(e){var n=e.row;e.index;return[t._v("\n                "+t._s(n.nickname)+"/"+t._s(n.uid)+"\n            ")]}},{key:"spread_nickname",fn:function(e){var a=e.row;e.index;return[n("a",{attrs:{href:"javascript:void(0);"},on:{click:function(e){return t.referenceInfo(a.uid)}}},[t._v(t._s(a.spread_nickname))])]}},{key:"info",fn:function(e){var a=e.row;e.index;return t._l(a._info,(function(e,a){return n("div",{key:a,staticClass:"tabBox"},[n("div",{staticClass:"tabBox_img"},[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.cart_info.productInfo.attrInfo?e.cart_info.productInfo.attrInfo.image:e.cart_info.productInfo.image,expression:"val.cart_info.productInfo.attrInfo?val.cart_info.productInfo.attrInfo.image:val.cart_info.productInfo.image"}]})]),n("span",{staticClass:"tabBox_tit"},[t._v(t._s(e.cart_info.productInfo.store_name+" | ")+t._s(e.cart_info.productInfo.attrInfo?e.cart_info.productInfo.attrInfo.suk:""))]),n("span",{staticClass:"tabBox_pice"},[t._v(t._s("￥"+e.cart_info.truePrice+" x "+e.cart_info.cart_num))])])}))}}])}),n("div",{staticClass:"acea-row row-right page"},[n("Page",{attrs:{total:t.total,current:t.formValidate.page,"show-elevator":"","show-total":"","page-size":t.formValidate.limit},on:{"on-change":t.pageChange}})],1)],1),n("referrer-info",{ref:"info"})],1)},r=[],i=n("90e7"),o=n("a584"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Modal",{attrs:{title:"推荐人信息",width:"45%"},on:{"on-cancel":t.cancel},model:{value:t.isTemplate,callback:function(e){t.isTemplate=e},expression:"isTemplate"}},[n("div",{staticClass:"Modals"},[n("div",{staticClass:"header acea-row row-middle"},[n("div",{staticClass:"pictrue"},[n("img",{attrs:{src:t.spread.avatar}})]),n("div",{staticClass:"name"},[t._v(t._s(t.spread.nickname))])]),n("div",{staticClass:"list"},[n("div",{staticClass:"item acea-row row-middle"},[n("div",{staticClass:"name money ivu-form-item-content"},[t._v("金额："),n("span",[t._v(t._s(t.spread.now_money))])]),n("div",{staticClass:"name ivu-form-item-content"},[t._v("UID："),n("span",[t._v(t._s(t.spread.uid))])])]),n("div",{staticClass:"item acea-row row-middle"},[n("div",{staticClass:"name commission ivu-form-item-content"},[t._v("佣金："),n("span",[t._v(t._s(t.spread.brokerage_pric))])]),n("div",{staticClass:"name ivu-form-item-content"},[t._v("真实姓名："),n("span",[t._v(t._s(t.spread.real_name))])])]),n("div",{staticClass:"item acea-row row-middle"},[n("div",{staticClass:"name ivu-form-item-content"},[t._v("身份证："),n("span",[t._v(t._s(t.spread.card_id))])]),n("div",{staticClass:"name ivu-form-item-content"},[t._v("手机号码："),n("span",[t._v(t._s(t.spread.phone))])])]),n("div",{staticClass:"item acea-row row-middle"},[n("div",{staticClass:"name ivu-form-item-content"},[t._v("生日："),n("span",[t._v(t._s(t.spread.birthday))])]),n("div",{staticClass:"name ivu-form-item-content"},[t._v("积分："),n("span",[t._v(t._s(t.spread.integral))])])]),n("div",{staticClass:"item acea-row row-middle"},[n("div",{staticClass:"name ivu-form-item-content"},[t._v("用户备注："),n("span",[t._v(t._s(t.spread.mark))])]),n("div",{staticClass:"name ivu-form-item-content"},[t._v("最后登录时间："),n("span",[t._v(t._s(t.spread.last_time))])])])])]),n("div",{attrs:{slot:"footer"},slot:"footer"}),t.spinShow?n("Spin",{attrs:{size:"large",fix:""}}):t._e()],1)],1)},c=[],u={name:"referrerInfo",data:function(){return{isTemplate:!1,spread:{},spinShow:!1}},mounted:function(){},methods:{verifySpreadInfo:function(t){var e=this;e.spinShow=!0,Object(i["Z"])(t).then((function(t){e.spinShow=!1,e.spread=t.data.spread})).catch((function(t){e.$Message.error(t.msg)}))},cancel:function(){}}},d=u,l=(n("bde0"),n("2877")),f=Object(l["a"])(d,s,c,!1,null,"55baf5c9",null),m=f.exports,p={name:"setting_order",components:{cardsData:o["a"],referrerInfo:m},data:function(){return{formValidate:{page:1,limit:15,data:"",real_name:"",store_id:""},fromList:{title:"选择时间",custom:!0,fromTxt:[{text:"全部",val:""},{text:"今天",val:"today"},{text:"昨天",val:"yesterday"},{text:"最近7天",val:"lately7"},{text:"最近30天",val:"lately30"},{text:"本月",val:"month"},{text:"本年",val:"year"}]},timeVal:[],storeSelectList:[],cardLists:[],columns:[{title:"订单号",key:"order_id",minWidth:180,sortable:!0},{title:"用户信息",slot:"name",minWidth:120},{title:"推荐人信息",slot:"spread_nickname",minWidth:120},{title:"商品信息",slot:"info",minWidth:360},{title:"实际支付",key:"pay_price",minWidth:90},{title:"核销员",key:"clerk_name",minWidth:90},{title:"核销门店",key:"store_name",minWidth:120},{title:"支付状态",key:"pay_type_name",minWidth:80},{title:"订单状态",key:"status_name",minWidth:80},{title:"下单时间",key:"add_time",minWidth:130,sortable:!0}],orderList:[],loading:!1,total:0}},mounted:function(){this.getList(),this.storeList()},methods:{getList:function(){var t=this;t.loading=!0,Object(i["Y"])(t.formValidate).then((function(e){t.loading=!1,t.orderList=e.data.data,t.total=e.data.count,t.cardLists=e.data.badge})).catch((function(e){t.$Message.error(e.msg)}))},userSearchs:function(){this.formValidate.page=1,this.getList()},onchangeTime:function(t){this.timeVal=t,this.formValidate.data=this.timeVal.join("-")},storeList:function(){var t=this;Object(i["z"])().then((function(e){t.storeSelectList=e.data})).catch((function(e){t.$Message.error(e.msg)}))},pageChange:function(t){this.formValidate.page=t,this.getList()},referenceInfo:function(t){this.$refs.info.isTemplate=!0,this.$refs.info.verifySpreadInfo(t)},refresh:function(){this.formValidate={page:1,limit:15,data:"",real_name:"",store_id:""},this.getList()}}},h=p,_=(n("af2c"),Object(l["a"])(h,a,r,!1,null,"0d8566d6",null));e["default"]=_.exports},"3a79":function(t,e,n){},"8aa9":function(t,e,n){},"8f1d":function(t,e,n){},"90e7":function(t,e,n){"use strict";n.d(e,"l",(function(){return r})),n.d(e,"g",(function(){return i})),n.d(e,"U",(function(){return o})),n.d(e,"T",(function(){return s})),n.d(e,"f",(function(){return c})),n.d(e,"a",(function(){return u})),n.d(e,"B",(function(){return d})),n.d(e,"H",(function(){return l})),n.d(e,"I",(function(){return f})),n.d(e,"A",(function(){return m})),n.d(e,"J",(function(){return p})),n.d(e,"L",(function(){return h})),n.d(e,"v",(function(){return _})),n.d(e,"K",(function(){return v})),n.d(e,"j",(function(){return g})),n.d(e,"h",(function(){return b})),n.d(e,"i",(function(){return y})),n.d(e,"k",(function(){return O})),n.d(e,"E",(function(){return j})),n.d(e,"F",(function(){return C})),n.d(e,"C",(function(){return w})),n.d(e,"D",(function(){return x})),n.d(e,"x",(function(){return k})),n.d(e,"q",(function(){return I})),n.d(e,"t",(function(){return V})),n.d(e,"s",(function(){return L})),n.d(e,"n",(function(){return T})),n.d(e,"u",(function(){return S})),n.d(e,"p",(function(){return E})),n.d(e,"r",(function(){return $})),n.d(e,"o",(function(){return W})),n.d(e,"m",(function(){return G})),n.d(e,"w",(function(){return P})),n.d(e,"e",(function(){return M})),n.d(e,"b",(function(){return B})),n.d(e,"c",(function(){return D})),n.d(e,"V",(function(){return z})),n.d(e,"W",(function(){return F})),n.d(e,"X",(function(){return R})),n.d(e,"G",(function(){return U})),n.d(e,"M",(function(){return J})),n.d(e,"y",(function(){return N})),n.d(e,"O",(function(){return A})),n.d(e,"N",(function(){return Y})),n.d(e,"P",(function(){return Z})),n.d(e,"Q",(function(){return q})),n.d(e,"R",(function(){return H})),n.d(e,"S",(function(){return K})),n.d(e,"Y",(function(){return Q})),n.d(e,"Z",(function(){return X})),n.d(e,"z",(function(){return tt})),n.d(e,"d",(function(){return et}));var a=n("6b6c");function r(t){return Object(a["a"])({url:"setting/config/header_basics",method:"get",params:t})}function i(t){return Object(a["a"])({url:"/setting/config/edit_basics",method:"get",params:t})}function o(t){return Object(a["a"])({url:t.url,method:"get",params:t.data})}function s(){return Object(a["a"])({url:"notify/sms/temp/create",method:"get"})}function c(t){return Object(a["a"])({url:"notify/sms/config",method:"post",data:t})}function u(t){return Object(a["a"])({url:"notify/sms/captcha",method:"post",data:t})}function d(t){return Object(a["a"])({url:"notify/sms/register",method:"post",data:t})}function l(){return Object(a["a"])({url:"notify/sms/number",method:"get"})}function f(){return Object(a["a"])({url:"notify/sms/price",method:"get"})}function m(t){return Object(a["a"])({url:"notify/sms/pay_code",method:"post",data:t})}function p(t){return Object(a["a"])({url:"notify/sms/record",method:"get",params:t})}function h(){return Object(a["a"])({url:"merchant/store",method:"GET"})}function _(){return Object(a["a"])({url:"merchant/store/address",method:"GET"})}function v(t){return Object(a["a"])({url:"merchant/store/".concat(t.id),method:"POST",data:t})}function g(t){return Object(a["a"])({url:"freight/express",method:"get",params:t})}function b(){return Object(a["a"])({url:"/freight/express/create",method:"get"})}function y(t){return Object(a["a"])({url:"freight/express/".concat(t,"/edit"),method:"get"})}function O(t){return Object(a["a"])({url:"freight/express/set_status/".concat(t.id,"/").concat(t.status),method:"PUT"})}function j(t){return Object(a["a"])({url:"setting/role",method:"GET",params:t})}function C(t){return Object(a["a"])({url:"setting/role/set_status/".concat(t.id,"/").concat(t.status),method:"PUT"})}function w(t){return Object(a["a"])({url:"setting/role/".concat(t.id),method:"post",data:t})}function x(t){return Object(a["a"])({url:"setting/role/".concat(t,"/edit"),method:"get"})}function k(){return Object(a["a"])({url:"setting/role/create",method:"get"})}function I(t){return Object(a["a"])({url:"app/wechat/kefu",method:"get",params:t})}function V(t){return Object(a["a"])({url:"app/wechat/kefu/create",method:"get",params:t})}function L(){return Object(a["a"])({url:"app/wechat/kefu/add",method:"get"})}function T(t){return Object(a["a"])({url:"app/wechat/kefu",method:"post",data:t})}function S(t){return Object(a["a"])({url:"app/wechat/kefu/set_status/".concat(t.id,"/").concat(t.status),method:"PUT"})}function E(t){return Object(a["a"])({url:"app/wechat/kefu/".concat(t,"/edit"),method:"GET"})}function $(t,e){return Object(a["a"])({url:"app/wechat/kefu/record/".concat(e),method:"GET",params:t})}function W(t){return Object(a["a"])({url:"app/wechat/kefu/chat_list",method:"GET",params:t})}function G(){return Object(a["a"])({url:"notify/sms/is_login",method:"GET"})}function P(){return Object(a["a"])({url:"notify/sms/logout",method:"GET"})}function M(t){return Object(a["a"])({url:"setting/city/list/".concat(t),method:"get"})}function B(t){return Object(a["a"])({url:"setting/city/add/".concat(t),method:"get"})}function D(t){return Object(a["a"])({url:"setting/city/".concat(t,"/edit"),method:"get"})}function z(t){return Object(a["a"])({url:"setting/shipping_templates/list",method:"get",params:t})}function F(t){return Object(a["a"])({url:"setting/shipping_templates/city_list",method:"get"})}function R(t,e){return Object(a["a"])({url:"setting/shipping_templates/save/".concat(t),method:"post",data:e})}function U(t){return Object(a["a"])({url:"setting/shipping_templates/".concat(t,"/edit"),method:"get"})}function J(){return Object(a["a"])({url:"merchant/store/get_header",method:"get"})}function N(t){return Object(a["a"])({url:"merchant/store",method:"get",params:t})}function A(t,e){return Object(a["a"])({url:"merchant/store/set_show/".concat(t,"/").concat(e),method:"put"})}function Y(t){return Object(a["a"])({url:"merchant/store/get_info/".concat(t),method:"get"})}function Z(t){return Object(a["a"])({url:"merchant/store_staff",method:"get",params:t})}function q(){return Object(a["a"])({url:"merchant/store_staff/create",method:"get"})}function H(t){return Object(a["a"])({url:"merchant/store_staff/".concat(t,"/edit"),method:"get"})}function K(t,e){return Object(a["a"])({url:"merchant/store_staff/set_show/".concat(t,"/").concat(e),method:"put"})}function Q(t){return Object(a["a"])({url:"merchant/verify_order",method:"get",params:t})}function X(t){return Object(a["a"])({url:"merchant/verify/spread_info/".concat(t),method:"get"})}function tt(){return Object(a["a"])({url:"merchant/store_list",method:"get"})}function et(){return Object(a["a"])({url:"setting/city/clean_cache",method:"get"})}},a584:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Row",{staticClass:"ivu-mt",attrs:{type:"flex",align:"middle",gutter:10}},t._l(t.cardLists,(function(e,a){return n("Col",{key:a,staticClass:"ivu-mb",attrs:{xl:e.col,lg:6,md:12,sm:24,xs:24}},[n("Card",{staticClass:"card_cent",attrs:{shadow:"",padding:0}},[n("div",{staticClass:"card_box"},[n("div",{staticClass:"card_box_cir",class:{one:a%5==0,two:a%5==1,three:a%5==2,four:a%5==3,five:a%5==4}},[n("div",{staticClass:"card_box_cir1",class:{one1:a%5==0,two1:a%5==1,three1:a%5==2,four1:a%5==3,five1:a%5==4}},[n("Icon",{attrs:{type:e.className}})],1)]),n("div",{staticClass:"card_box_txt"},[n("span",{staticClass:"sp1",domProps:{textContent:t._s(e.count||0)}}),n("span",{staticClass:"sp2",domProps:{textContent:t._s(e.name)}})])])])],1)})),1)],1)},r=[],i={name:"cards",data:function(){return{}},props:{cardLists:Array},methods:{},created:function(){}},o=i,s=(n("c65c"),n("2877")),c=Object(s["a"])(o,a,r,!1,null,"6f23132f",null);e["a"]=c.exports},af2c:function(t,e,n){"use strict";var a=n("8aa9"),r=n.n(a);r.a},bde0:function(t,e,n){"use strict";var a=n("8f1d"),r=n.n(a);r.a},c65c:function(t,e,n){"use strict";var a=n("3a79"),r=n.n(a);r.a}}]);