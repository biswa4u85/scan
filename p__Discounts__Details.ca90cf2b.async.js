(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[21],{dvFO:function(e,t,a){"use strict";var n=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("IzEo");var r=n(a("bx4M"));a("bP8k");var l=n(a("gFTJ"));a("+L6B");var u=n(a("2/Rp")),o=n(a("2Taf")),c=n(a("vZ4D")),i=n(a("MhPg")),f=n(a("l4Ni")),d=n(a("ujKo"));a("y8nQ");var s,p,m,y=n(a("Vl3Y")),v=k(a("q1tI")),g=a("MuoO"),h=n(a("wd/R")),D=n(a("3a4m")),b=n(a("zHco"));function E(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(E=function(e){return e?a:t})(e)}function k(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var a=E(t);if(a&&a.has(e))return a.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var u=r?Object.getOwnPropertyDescriptor(e,l):null;u&&(u.get||u.set)?Object.defineProperty(n,l,u):n[l]=e[l]}return n.default=e,a&&a.set(e,n),n}function w(e){var t=M();return function(){var a,n=(0,d.default)(e);if(t){var r=(0,d.default)(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return(0,f.default)(this,a)}}function M(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}a("91UR");var P={Expired:"red",Inactive:"gray",Active:"green"},O=(s=(0,g.connect)(function(e){var t=e.login,a=e.discounts,n=e.settings,r=e.loading;return{token:t.currentUser.Authorization,singleData:a.singleData?a.singleData:{},isAddEdit:a.isAddEdit,settings:n.data[0]?n.data[0]:{},submitting:r.effects["discounts/fetchSingleData"]}}),p=y.default.create(),s(m=p(m=function(e){(0,i.default)(a,e);var t=w(a);function a(){var e;(0,o.default)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return e=t.call.apply(t,[this].concat(r)),e.state={pagePath:null,pageType:null},e}return(0,c.default)(a,[{key:"componentDidMount",value:function(){var e=this.props,t=e.dispatch,a=e.token,n=e.match,r=n.params?n.params.id:null,l=n.params?n.params.type:null,u=n.path.split("/")[1];this.setState({pagePath:u,pageType:l}),t(r?{type:"discounts/fetchSingleData",payload:{id:r},token:a}:{type:"discounts/fetchSingleDataNull",payload:{id:r},token:a})}},{key:"render",value:function(){var e=this.props.singleData,t=this.state,a=t.pagePath,n=t.pageType;return v.default.createElement(b.default,{title:"View Details",content:v.default.createElement(u.default,{icon:"caret-left",type:"primary",onClick:function(){return D.default.push("/".concat(a,"/").concat(n))}},"Back")},v.default.createElement(r.default,{bordered:!1},v.default.createElement(l.default,{title:"",layout:"vertical",bordered:!0},v.default.createElement(l.default.Item,{label:"Discounts Name"},null===e||void 0===e?void 0:e.name),v.default.createElement(l.default.Item,{label:"Start Date"},e.startDate?(0,h.default)(e.startDate).format("DD/MM/YYYY"):""),v.default.createElement(l.default.Item,{label:"End Date"},e.endDate?(0,h.default)(e.endDate).format("DD/MM/YYYY"):""," ",e.phone),v.default.createElement(l.default.Item,{label:"Discounts Range"},e.range),v.default.createElement(l.default.Item,{label:"Status"},v.default.createElement("div",{style:{color:P[e.status]}},e.status)),v.default.createElement(l.default.Item,{label:"Notes"},e.notes),v.default.createElement(l.default.Item,{label:"Actions"},v.default.createElement(u.default,{type:"primary",onClick:function(){return D.default.push("/".concat(a,"/").concat(n,"/").concat(e._id))}},"Edit")))))}}]),a}(v.PureComponent))||m)||m),I=O;t.default=I}}]);