import{d as a,r as o,o as e,s as n,a as c,b as s,c as u,w as t,e as l,f as i,g as d,h as p,F as _,n as r,i as m,j as f,k as y,S as g,t as v,l as x,m as k,p as b,q as h,u as w}from"./index-66afb2a6.js";import C from"./pages-index-index.b20e2fc4.js";import I from"./pages-category-category.c477bcd1.js";import{_ as j}from"./comCustom.9355bdb3.js";import{_ as B}from"./_plugin-vue_export-helper.1b428a4d.js";import E from"./pages-my-my.8a631ec3.js";const q=B(a({__name:"cart",setup(a){const h=o(1),w=o(),C=o(1),I=o([{coupon_id:1,coupon_name:"香饼优惠券",coupon_no:"E874865478",coupon_money:"200",coupon_type_id:1,coupon_type_name:"代金券"},{coupon_id:2,coupon_name:"香饼优惠券",coupon_no:"E874865478",coupon_money:"200",coupon_type_id:2,coupon_type_name:"代金券"},{coupon_id:3,coupon_name:"香饼优惠券",coupon_no:"E874865478",coupon_money:"200",coupon_type_id:1,coupon_type_name:"物品券"}]),B=o([{id:1,name:"未使用"},{id:2,name:"已使用"},{id:3,name:"已过期"},{id:4,name:"作废"}]);e((()=>{n({frontColor:"#000000",backgroundColor:"#000000"})})),c((()=>{E()}));const E=()=>{setTimeout((()=>{C.value=0}),500)};return(a,o)=>{const e=m(f("comCustom"),j),n=y,c=k,q=b,F=g;return s(),u(n,{class:"page"},{default:t((()=>[l(e,{isBack:!0,isBackIcon:!1,isBackContent:!0},{content:t((()=>[i("优惠券列表")])),_:1}),l(F,{"scroll-x":"",class:"bg-white nav"},{default:t((()=>[l(n,{class:"flex text-center margin-bottom-sm"},{default:t((()=>[(s(!0),d(_,null,p(B.value,((a,o)=>(s(),u(n,{class:r(["cu-item flex-sub",[a.id==h.value?"text-orange cur":"",C.value===a.id?"animation-scale-up":""]]),key:o,onClick:o=>(a=>{h.value=C.value=a,w.value=60*(a-1),E()})(a.id),"data-id":o},{default:t((()=>[i(v(a.name),1)])),_:2},1032,["class","onClick","data-id"])))),128))])),_:1}),l(n,{class:r(["coupon-box",C.value===h.value?"animation-slide-right":""])},{default:t((()=>[(s(!0),d(_,null,p(I.value,(a=>(s(),u(n,{class:r(["coupon coupon-wave-left coupon-wave-right",1==a.coupon_type_id?"coupon-yellow-gradient":"coupon-blue-gradient"]),key:a.coupon_id},{default:t((()=>[l(n,{class:"coupon-info coupon-info-right-dashed"},{default:t((()=>[l(n,{class:"coupon-store"},{default:t((()=>[i(v(a.coupon_name),1)])),_:2},1024),l(n,{class:"coupon-price"},{default:t((()=>[i(v(a.coupon_no),1)])),_:2},1024),l(n,{class:"coupon-description text-df"},{default:t((()=>[i("使用有效期：2023-12-12 ")])),_:1})])),_:2},1024),l(n,{class:"coupon-get"},{default:t((()=>[l(n,{class:"coupon-desc"},{default:t((()=>[i(v(a.coupon_money),1),l(c,{class:"text-xs"},{default:t((()=>[i("元")])),_:1})])),_:2},1024),l(n,{class:"coupon-type"},{default:t((()=>[i(v(a.coupon_type_name),1)])),_:2},1024),1==h.value?(s(),u(q,{key:0,class:"cu-btn bg-white shadow"},{default:t((()=>[i("立即使用")])),_:1})):x("v-if",!0)])),_:2},1024)])),_:2},1032,["class"])))),128))])),_:1},8,["class"])])),_:1})])),_:1})}}}),[["__scopeId","data-v-7a40680c"]]),F=B(a({__name:"index",props:{current:{default:1}},setup(a){h();const e=o(1),n=o([{id:1,name:"首页",icon:"cuIcon-homefill",url:"/pages/index/index"},{id:2,icon:"cuIcon-shop",name:"商城",url:"/pages/category/category"},{id:3,icon:"cuIcon-scan",name:"扫码点单",url:"/pages/index/index"},{id:4,icon:"cuIcon-apps",name:"优惠券",url:"/pages/index/index"},{id:5,icon:"cuIcon-my",name:"我的",url:"/pages/my/my"}]);return(a,o)=>{const c=b,m=y;return s(),d(_,null,[1===e.value?(s(),u(C,{key:0})):x("v-if",!0),2===e.value?(s(),u(I,{key:1})):x("v-if",!0),4===e.value?(s(),u(q,{key:2})):x("v-if",!0),5===e.value?(s(),u(E,{key:3})):x("v-if",!0),l(m,{class:"cu-bar tabbar bg-white foot"},{default:t((()=>[(s(!0),d(_,null,p(n.value,(a=>(s(),u(m,{class:r(["action",[e.value===a.id?"text-cyan":"text-gray",3===a.id?"add-action":""]]),key:a.id,onClick:o=>(a=>{3===a.id?w({}):e.value=a.id})(a)},{default:t((()=>[3===a.id?(s(),u(m,{key:0},{default:t((()=>[l(c,{class:"cu-btn cuIcon-scan bg-cyan shadow"}),i(" "+v(a.name),1)])),_:2},1024)):(s(),u(m,{key:1},{default:t((()=>[l(m,{class:r(a.icon)},null,8,["class"]),i(" "+v(a.name),1)])),_:2},1024))])),_:2},1032,["class","onClick"])))),128))])),_:1})],64)}}}),[["__scopeId","data-v-49f954ec"]]);export{F as default};