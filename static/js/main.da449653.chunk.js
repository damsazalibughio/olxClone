(this.webpackJsonpolx=this.webpackJsonpolx||[]).push([[0],{67:function(e,c,t){},72:function(e,c,t){"use strict";t.r(c);var s=t(5),a=t.n(s),n=t(37),l=t.n(n),r=(t(43),t(44),t(66),t(22)),i=t(11),j=(t(67),t(0));var d=function(){return Object(j.jsxs)("div",{className:"footer",children:[Object(j.jsxs)("div",{className:"olx-container d-flex justify-content-between mb-5",children:[Object(j.jsxs)("div",{className:"mt-4",children:[Object(j.jsx)("h6",{children:"POPULAR CATAGORIES"}),Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:"Cars"}),Object(j.jsx)("li",{children:"Flat for Rent"}),Object(j.jsx)("li",{children:"Mobile Phones"}),Object(j.jsx)("li",{children:"Jobs"})]})]}),Object(j.jsxs)("div",{className:"mt-4",children:[Object(j.jsx)("h6",{children:"POPULAR CATAGORIES"}),Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:"Cars"}),Object(j.jsx)("li",{children:"Flat for Rent"}),Object(j.jsx)("li",{children:"Mobile Phones"}),Object(j.jsx)("li",{children:"Jobs"})]})]}),Object(j.jsxs)("div",{className:"mt-4",children:[Object(j.jsx)("h6",{children:"POPULAR CATAGORIES"}),Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:"Cars"}),Object(j.jsx)("li",{children:"Flat for Rent"}),Object(j.jsx)("li",{children:"Mobile Phones"}),Object(j.jsx)("li",{children:"Jobs"})]})]}),Object(j.jsxs)("div",{className:"mt-4",children:[Object(j.jsx)("h6",{children:"POPULAR CATAGORIES"}),Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:"Cars"}),Object(j.jsx)("li",{children:"Flat for Rent"}),Object(j.jsx)("li",{children:"Mobile Phones"}),Object(j.jsx)("li",{children:"Jobs"})]})]})]}),Object(j.jsx)("div",{className:"d-flex flex-column  align-items-center",style:{backgroundColor:"#002f34"},children:Object(j.jsx)("p",{className:" align-self-end text-white mx-4",children:"Free Classifieds in Pakistan . \xa9 2006-2021 OLX"})})]})};var b=function(){return Object(j.jsx)("div",{children:Object(j.jsx)("button",{className:"btn  mx-2 btn-lg border-0 fw-bold",children:"login"})})},o=t(1),x=t.n(o),h=t(15),O=t(4),m=t(12),p=t(18),u=function(e,c){switch(c.type){case"getCat":return Object(h.a)(Object(h.a)({},e),{},{categories:[].concat(Object(p.a)(e.categories),[c.payload])});case"getLoc":return Object(h.a)(Object(h.a)({},e),{},{locations:[].concat(Object(p.a)(e.locations),[c.payload])});case"getProdDetails":return Object(h.a)(Object(h.a)({},e),{},{prodcutDetails:[].concat(Object(p.a)(e.prodcutDetails),[c.payload])});default:return e}},v=t(38),f=t(19),N=Object(v.a)({apiKey:"AIzaSyCFNuwRQQwG42m1ES_3bfSuM9xo4pYlab0",authDomain:"olx-app-b11b4.firebaseapp.com",projectId:"olx-app-b11b4",storageBucket:"olx-app-b11b4.appspot.com",messagingSenderId:"317942937490",appId:"1:317942937490:web:d8fe132b27281a4781734b"});console.log(N);var g=Object(f.d)(),w={categories:[],locations:[],prodcutDetails:[]},y=Object(s.createContext)(w),A=function(e){var c=e.children,t=Object(s.useReducer)(u,w),a=Object(m.a)(t,2),n=a[0],l=a[1],r=function(){var e=Object(O.a)(x.a.mark((function e(){var c;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=Object(f.b)(g,"categories"),e.next=3,Object(f.c)(c);case 3:e.sent.docs.map((function(e){return l({type:"getCat",payload:Object(h.a)(Object(h.a)({},e.data()),{},{id:e.id})})}));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=Object(O.a)(x.a.mark((function e(){var c;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=Object(f.b)(g,"locations"),e.next=3,Object(f.c)(c);case 3:e.sent.docs.map((function(e){l({type:"getLoc",payload:Object(h.a)(Object(h.a)({},e.data()),{},{id:e.id})})}));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),d=function(){var e=Object(O.a)(x.a.mark((function e(){var c;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=Object(f.b)(g,"productDetails"),e.next=3,Object(f.c)(c);case 3:e.sent.docs.map((function(e){l({type:"getProdDetails",payload:Object(h.a)(Object(h.a)({},e.data()),{},{id:e.id})})}));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(j.jsx)(y.Provider,{value:{categories:n.categories,locations:n.locations,prodcutDetails:n.prodcutDetails,getCategories:r,getLocation:i,getProductDetails:d},children:c})};var k=function(){var e=Object(s.useContext)(y).categories;return Object(j.jsx)("ul",{className:"navbar-nav ms-4 mb-2 mb-lg-0",children:e.map((function(e,c){return Object(j.jsxs)("li",{className:"nav-item d-flex flex-row",children:[Object(j.jsx)("i",{className:"bi bi-".concat(e.icon," fs-5")}),Object(j.jsx)(r.b,{className:"nav-link main-navbar-fs",to:"/".concat(e.catLink),children:e.title})]},c)}))})};function C(){return Object(j.jsx)("div",{className:"",children:Object(j.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:Object(j.jsxs)("div",{className:"container-fluid",children:[Object(j.jsx)(r.b,{className:"navbar-brand text-primary fw-bolder",to:"/",children:"olx"}),Object(j.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(j.jsx)("span",{className:"navbar-toggler-icon"})}),Object(j.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:Object(j.jsx)(k,{})})]})})})}var P=function(){var e=Object(s.useContext)(y).locations;return Object(j.jsx)("div",{children:Object(j.jsxs)("select",{className:"form-select form-select-lg mb-3","aria-label":".form-select-lg example",children:[Object(j.jsx)("option",{value:"0",children:"Select Region"}),e.map((function(e,c){return Object(j.jsx)("option",{value:"0",children:e.title},c)}))]})})};function S(){return Object(j.jsx)("div",{children:Object(j.jsxs)("form",{className:"d-flex",children:[Object(j.jsx)("input",{className:"form-control form-lg",type:"search",placeholder:"Search","aria-label":"Search"}),Object(j.jsx)("button",{className:"btn btn-dark",type:"submit",children:Object(j.jsx)("i",{className:"bi bi-search main-navbar-fs fs-5"})})]})})}function D(){return Object(j.jsx)("div",{children:Object(j.jsx)("button",{className:"btn btn-warning btn-lg",children:"sell"})})}function L(){return Object(j.jsx)("div",{children:Object(j.jsxs)("div",{className:"dropdown",children:[Object(j.jsx)("button",{className:"btn dropdown-toggle",type:"button",id:"all-cat","data-bs-toggle":"dropdown","aria-expanded":"false",children:"All CATEGORIES"}),Object(j.jsx)("ul",{className:"dropdown-menu","aria-labelledby":"all-cat",children:Object(j.jsxs)("li",{className:"d-flex justify-content-between",children:[Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:Object(j.jsx)("a",{className:"dropdown-item",href:"#",children:"Action"})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{className:"dropdown-item",href:"#",children:"Another action"})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{className:"dropdown-item",href:"#",children:"Something else here"})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{className:"dropdown-item",href:"#",children:"Action"})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{className:"dropdown-item",href:"#",children:"Another action"})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{className:"dropdown-item",href:"#",children:"Something else here"})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{className:"dropdown-item",href:"#",children:"Action"})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{className:"dropdown-item",href:"#",children:"Another action"})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{className:"dropdown-item",href:"#",children:"Something else here"})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{className:"dropdown-item",href:"#",children:"Action"})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{className:"dropdown-item",href:"#",children:"Another action"})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{className:"dropdown-item",href:"#",children:"Something else here"})})]}),Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:Object(j.jsx)("a",{className:"dropdown-item",href:"#",children:"Action"})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{className:"dropdown-item",href:"#",children:"Another action"})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{className:"dropdown-item",href:"#",children:"Something else here"})})]}),Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:Object(j.jsx)("a",{className:"dropdown-item",href:"#",children:"Action"})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{className:"dropdown-item",href:"#",children:"Another action"})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{className:"dropdown-item",href:"#",children:"Something else here"})})]}),Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:Object(j.jsx)("a",{className:"dropdown-item",href:"#",children:"Action"})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{className:"dropdown-item",href:"#",children:"Another action"})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{className:"dropdown-item",href:"#",children:"Something else here"})})]})]})})]})})}function T(){return Object(j.jsx)("div",{className:"",children:Object(j.jsx)("nav",{className:"navbar navbar-expand-lg",style:{backgroundColor:"white"},children:Object(j.jsxs)("div",{className:"container-fluid",children:[Object(j.jsx)(L,{}),Object(j.jsx)("div",{className:"collapse navbar-collapse",id:"navbarAllCat",children:Object(j.jsxs)("ul",{className:"navbar-nav ms-4 mb-2 mb-lg-0",children:[Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)("a",{className:"nav-link main-navbar-fs",href:"#",children:" Mobile Phones"})}),Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)("a",{className:"nav-link main-navbar-fs",href:"#",children:"Cars"})}),Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)("a",{className:"nav-link main-navbar-fs",href:"#",children:"Motorcycles"})}),Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)("a",{className:"nav-link main-navbar-fs",href:"#",children:"Houses"})}),Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)("a",{className:"nav-link main-navbar-fs",href:"#",children:"TV - Video - Audio"})}),Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)("a",{className:"nav-link main-navbar-fs",href:"#",children:"Tablets"})}),Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)("a",{className:"nav-link main-navbar-fs",href:"#",children:"Land & Plots"})})]})})]})})})}var R=function(){return Object(j.jsxs)("div",{className:"header-container",children:[Object(j.jsx)("div",{className:"olx-container",children:Object(j.jsx)(C,{})}),Object(j.jsxs)("div",{className:"olx-container mt-2 d-flex justify-content-between",children:[Object(j.jsx)("div",{className:"col-3",children:Object(j.jsx)(P,{})}),Object(j.jsx)("div",{className:"col-7",children:Object(j.jsx)(S,{})}),Object(j.jsxs)("div",{className:"d-flex",children:[Object(j.jsx)("div",{children:Object(j.jsx)(b,{})}),Object(j.jsx)("div",{children:Object(j.jsx)(D,{})})]})]}),Object(j.jsx)("div",{className:"olx-container",children:Object(j.jsx)(T,{})})]})};var E=function(){return Object(j.jsxs)("div",{className:"d-flex justify-content-center olx-app-box",children:[Object(j.jsx)("div",{className:"olx-app",children:Object(j.jsx)("img",{src:"../images/olxapp.png",alt:""})}),Object(j.jsxs)("div",{className:"olx-app-detail mx-5 d-flex",children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("h3",{className:"mt-5",children:"TRY THE OLX APP"}),Object(j.jsx)("p",{className:"h5",children:"Buy, sell and find just about anything using the app on your mobile."})]}),Object(j.jsx)("div",{className:"border border-secondary border-end  align-self-center",style:{height:"70%"}})]}),Object(j.jsxs)("div",{className:"align-self-center",children:[Object(j.jsx)("h6",{children:"GET YOUR APP TODAY"}),Object(j.jsxs)("div",{className:"d-flex",children:[Object(j.jsx)("div",{className:"me-2",children:Object(j.jsx)("img",{src:"../images/olxappleapp.png",alt:""})}),Object(j.jsx)("div",{children:Object(j.jsx)("img",{src:"../images/olxgoogleapp.png",alt:""})})]})]})]})};function M(e){var c=e.productCards;return console.log(c),Object(j.jsxs)("div",{className:"card mt-3",style:{width:"18rem"},children:[Object(j.jsx)("img",{src:"../images/mobile.jpg",style:{height:"12rem"},className:"card-img-top mt-3",alt:"..."}),Object(j.jsxs)("div",{className:"card-body",children:[Object(j.jsx)("h5",{className:"card-title",children:c.price}),Object(j.jsx)("p",{className:"card-text",children:c.title}),Object(j.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(j.jsx)("small",{children:c.location}),Object(j.jsx)("small",{children:c.postedTime})]})]})]})}var F=function(){var e=Object(s.useContext)(y).prodcutDetails;return Object(j.jsxs)("div",{children:[Object(j.jsx)(R,{}),Object(j.jsx)("div",{className:"showcase-img",children:Object(j.jsx)("img",{src:"../images/showcase.jpg",alt:"showcase"})}),Object(j.jsx)("div",{className:"company-adds my-3 d-flex justify-content-center",children:Object(j.jsx)("img",{src:"https://tpc.googlesyndication.com/simgad/17131258625495591734",alt:"company-adds"})}),Object(j.jsxs)("div",{className:"olx-container mob-web-box",children:[Object(j.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(j.jsx)("h3",{children:"More on Mobile Phones"}),Object(j.jsx)("button",{className:"btn fw-bolder border-0 border-bottom  border-dark border-2",children:"View more..."})]}),Object(j.jsx)("div",{className:"d-flex justify-content-between"})]}),Object(j.jsxs)("div",{className:"olx-container my-3",children:[Object(j.jsx)("h3",{children:"Fresh recommendations"}),Object(j.jsx)("div",{className:"row d-flex justify-content-between",children:e.map((function(e,c){return Object(j.jsx)(M,{productCards:e},c)}))})]}),Object(j.jsx)("div",{className:"company-adds my-4 d-flex justify-content-center",children:Object(j.jsx)("img",{src:"https://tpc.googlesyndication.com/simgad/18370361094128777605?sqp=4sqPyQQrQikqJwhfEAEdAAC0QiABKAEwCTgDQPCTCUgAUAFYAWBfcAJ4AcUBLbKdPg&rs=AOga4qnbpBMx_3ai2Oa8SsFNrr9p0FfBbA",alt:"company-adds"})}),Object(j.jsx)(E,{}),Object(j.jsx)(d,{})]})};var I=function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)(R,{}),Object(j.jsx)("h1",{className:"text-center my-5",children:"Mall"}),Object(j.jsx)(E,{}),Object(j.jsx)(d,{})]})};var B=function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)(R,{}),Object(j.jsx)("h1",{className:"text-center my-5",children:"Motors"}),Object(j.jsx)(E,{}),Object(j.jsx)(d,{})]})};var U=function(){return Object(j.jsx)("div",{children:"Page Not Found"})};function J(){return Object(j.jsxs)("div",{children:[Object(j.jsx)(R,{}),Object(j.jsx)("h1",{className:"text-center my-5",children:"Property"}),Object(j.jsx)(E,{}),Object(j.jsx)(d,{})]})}var G=function(){return Object(j.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark","aria-label":"Fifth navbar example",children:Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("a",{className:"navbar-brand",href:"#",children:"OLX"}),Object(j.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarsExample05","aria-controls":"navbarsExample05","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(j.jsx)("span",{className:"navbar-toggler-icon"})}),Object(j.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarsExample05",children:[Object(j.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)("a",{className:"nav-link active","aria-current":"page",href:"#",children:"Home"})}),Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)("a",{className:"nav-link",href:"#",children:"Link"})})]}),Object(j.jsx)("form",{children:Object(j.jsx)("input",{className:"form-control",type:"text",placeholder:"Search","aria-label":"Search"})})]})]})})};var H=function(){return Object(j.jsxs)("div",{className:"d-flex flex-column flex-shrink-0 p-3 text-white bg-dark",style:{width:"280px",marginTop:"1px"},children:[Object(j.jsx)("a",{href:"/",className:"d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none",children:Object(j.jsx)("span",{className:"fs-4",children:"Admin"})}),Object(j.jsx)("hr",{}),Object(j.jsxs)("ul",{className:"nav nav-pills flex-column mb-auto",children:[Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)("a",{href:"#",className:"nav-link active","aria-current":"page",children:"Dashboard"})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"#",className:"nav-link text-white",children:"Main Navebar"})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"#",className:"nav-link text-white",children:"Categries"})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"#",className:"nav-link text-white",children:"Locations"})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"#",className:"nav-link text-white",children:"Post Products"})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"#",className:"nav-link text-white",children:"Customers"})})]}),Object(j.jsx)("hr",{}),Object(j.jsxs)("div",{className:"dropdown",children:[Object(j.jsxs)("a",{href:"#",className:"d-flex align-items-center text-white text-decoration-none dropdown-toggle",id:"dropdownUser1","data-bs-toggle":"dropdown","aria-expanded":"false",children:[Object(j.jsx)("img",{src:"https://github.com/mdo.png",alt:"",width:"32",height:"32",className:"rounded-circle me-2"}),Object(j.jsx)("strong",{children:"mdo"})]}),Object(j.jsxs)("ul",{className:"dropdown-menu dropdown-menu-dark text-small shadow","aria-labelledby":"dropdownUser1",style:{},children:[Object(j.jsx)("li",{children:Object(j.jsx)("a",{className:"dropdown-item",href:"#",children:"New project..."})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{className:"dropdown-item",href:"#",children:"Settings"})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{className:"dropdown-item",href:"#",children:"Profile"})}),Object(j.jsx)("li",{children:Object(j.jsx)("hr",{className:"dropdown-divider"})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{className:"dropdown-item",href:"#",children:"Sign out"})})]})]})]})};var Q=function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)(G,{}),Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{className:"col-lg-3",children:Object(j.jsx)(H,{})}),Object(j.jsx)("div",{className:"col-lg-8"})]})]})};var Y=function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)(G,{}),Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{className:"col-lg-3",children:Object(j.jsx)(H,{})}),Object(j.jsx)("div",{className:"col-lg-8"})]})]})};var q=function(){var e=Object(s.useState)([]),c=Object(m.a)(e,2),t=(c[0],c[1]);return Object(j.jsxs)("form",{onSubmit:function(e){e.preventDefault(),Object(f.a)(Object(f.b)(g,"productDetails"),{productTitle:"Samsaung9",price:"1000",location:"Hyderabad",postedTime:"20 hours ago"}),console.log("run")},children:[Object(j.jsx)("div",{className:"form-group my-2",children:Object(j.jsx)("input",{onChange:function(e){return t(e.target.value)},type:"text",className:"form-control","aria-describedby":"emailHelp",placeholder:"Title"})}),Object(j.jsx)("div",{className:"form-group my-2",children:Object(j.jsx)("input",{type:"text",className:"form-control","aria-describedby":"emailHelp",placeholder:"Location"})}),Object(j.jsx)("div",{className:"form-group my-2",children:Object(j.jsx)("input",{type:"text",className:"form-control","aria-describedby":"emailHelp",placeholder:"Price"})}),Object(j.jsx)("button",{type:"submit",className:"btn btn-dark my-2",children:"Submit"})]})};var K=function(){return Object(j.jsx)("div",{children:Object(j.jsxs)("table",{className:"table table-dark",children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{scope:"col",children:"#"}),Object(j.jsx)("th",{scope:"col",children:"First"}),Object(j.jsx)("th",{scope:"col",children:"Last"}),Object(j.jsx)("th",{scope:"col",children:"Delete"})]})}),Object(j.jsx)("tbody",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{scope:"row",children:"1"}),Object(j.jsx)("td",{children:"Mark"}),Object(j.jsx)("td",{children:"Otto"}),Object(j.jsx)("td",{children:Object(j.jsx)("button",{className:"btn btn-secondary",children:"Delete"})})]})})]})})};var V=function(){return Object(j.jsxs)("div",{className:"card text-white bg-dark my-3",children:[Object(j.jsx)("div",{className:"card-header",children:"Products"}),Object(j.jsxs)("div",{className:"d-flex justify-content-between mx-3",children:[Object(j.jsx)("div",{children:Object(j.jsx)("button",{type:"button",className:"btn btn-light btn-sm my-2","data-bs-toggle":"modal","data-bs-target":"#staticBackdrop","data-bs-whatever":"@addproduct",children:" Add Product"})}),Object(j.jsx)("div",{children:Object(j.jsx)("form",{children:Object(j.jsx)("input",{className:"form-control  my-1",type:"text",placeholder:"Search Product","aria-label":"Search"})})})]}),Object(j.jsx)("div",{className:"card-body",children:Object(j.jsx)(K,{})})]})},X=t(9);var _=function(){var e;return Object(j.jsx)("div",{children:Object(j.jsx)("div",(e={className:"modal fade",tabIndex:"-1",id:"staticBackdrop","data-bs-backdrop":"static","data-bs-keyboard":"false"},Object(X.a)(e,"tabIndex","-1"),Object(X.a)(e,"aria-labelledby","staticBackdropLabel"),Object(X.a)(e,"aria-hidden","true"),Object(X.a)(e,"children",Object(j.jsx)("div",{className:"modal-dialog",children:Object(j.jsxs)("div",{className:"modal-content",children:[Object(j.jsxs)("div",{className:"modal-header",children:[Object(j.jsx)("h5",{className:"modal-title",id:"exampleModalLabel",children:"Add Products"}),Object(j.jsx)("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})]}),Object(j.jsx)("div",{className:"modal-body",children:Object(j.jsx)(q,{})}),Object(j.jsx)("div",{className:"modal-footer",children:Object(j.jsx)("button",{type:"button",className:"btn btn-secondary","data-bs-dismiss":"modal",children:"Close"})})]})})),e))})};var z=function(){return Object(s.useContext)(y).prodcutDetails,Object(j.jsxs)("div",{children:[Object(j.jsx)(G,{}),Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{className:"col-lg-3",children:Object(j.jsx)(H,{})}),Object(j.jsx)("div",{className:"col-lg-8",children:Object(j.jsx)(V,{})})]}),Object(j.jsx)(_,{})]})};var W=function e(){var c=Object(s.useContext)(y).getCategories,t=Object(s.useContext)(y).getLocation,a=Object(s.useContext)(y).getProductDetails;return Object(s.useEffect)((function(){c(),t(),a()}),[]),Object(j.jsx)("div",{className:"app-container",children:Object(j.jsx)(r.a,{children:Object(j.jsxs)(i.c,{children:[Object(j.jsx)(i.a,{path:"/",element:Object(j.jsx)(e,{})}),Object(j.jsx)(i.a,{index:!0,element:Object(j.jsx)(F,{})}),Object(j.jsx)(i.a,{path:"/motors",element:Object(j.jsx)(B,{})}),Object(j.jsx)(i.a,{path:"/mall",element:Object(j.jsx)(I,{})}),Object(j.jsx)(i.a,{path:"/property",element:Object(j.jsx)(J,{})}),Object(j.jsx)(i.a,{path:"/admin",element:Object(j.jsx)(Q,{})}),Object(j.jsx)(i.a,{path:"/admin/dashboard",element:Object(j.jsx)(Y,{})}),Object(j.jsx)(i.a,{path:"/admin/productsview",element:Object(j.jsx)(z,{})}),Object(j.jsx)(i.a,{path:"*",element:Object(j.jsx)(U,{})})]})})})};l.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(A,{children:Object(j.jsx)(W,{})})}),document.getElementById("root"))}},[[72,1,2]]]);
//# sourceMappingURL=main.da449653.chunk.js.map