import{d as a,r as e,m as s,s as l,o as t,c as n,w as c,e as o,a as u,b as i,n as d,f,g as r,F as m,p as _,h as g,i as p,j as b,k as x,l as h,q as k,t as v,u as y}from"./index-b300b68c.js";import{_ as C}from"./comTabBar.21269bd7.js";import{_ as j}from"./_plugin-vue_export-helper.1b428a4d.js";const w=j(a({__name:"my",setup(a){const j=e([{id:1,name:"订台延时",content:"会员客人窗台时间更长",icon:"iconfont icon-dingtai"},{id:2,name:"存酒延期",content:"会员客人存酒期限更长",icon:"iconfont icon-cunjiu"},{id:3,name:"签送酒水",content:"授权直接签送酒水",icon:"iconfont icon-qiansong"},{id:4,name:"员工会员",content:"受会员价员工可拿提成",icon:"iconfont icon-yuangong"}]),w=e([{id:1,name:"会员充值",icon:"iconfont icon-member",url:"/qr/topUp/index"},{id:2,name:"排队等待",icon:"iconfont icon-paidui",url:""},{id:3,name:"预售订单",icon:"iconfont icon-yushou",url:""},{id:4,name:"扫码订单",icon:"iconfont icon-code",url:""},{id:5,name:"专属核销",icon:"iconfont icon-hexiao",url:""},{id:6,name:"存酒列表",icon:"iconfont icon-jiu",url:""},{id:7,name:"优惠券列表",icon:"iconfont icon-coupon",url:""}]);s((()=>{l({frontColor:"#ffffff",backgroundColor:"#ffffff"})}));const q=()=>{y({icon:"none",title:"功能正在完善中"})},B=()=>{console.log(storeToken.authInfo),storeToken.authInfo.token?_({url:"/pages/my/edit"}):_({url:"/pages/login/login"})};return(a,e)=>{const s=g,l=p,I=b,F=x(h("comTabBar"),C);return t(),n(s,{class:"my"},{default:c((()=>[o(' <view style="height: 100upx;"></view> '),u(s,{class:"scroll-page"},{default:c((()=>[o(' <CuCustom bgColor="bg-top" :isBack="true" :isBackIcon="false" :isBackContent="true"><block slot="content">我的</block><block slot="right"></block></CuCustom> '),u(s,{class:"my-top"},{default:c((()=>[u(s,{class:"user"},{default:c((()=>[u(s,{class:"userName",onClick:B},{default:c((()=>[u(s,{class:"edit"}),u(s,null,{default:c((()=>[i("请登录")])),_:1})])),_:1}),u(l,{class:"avtar",src:"https://cdn.jsdelivr.net/gh/guqzhou/photo_gallery@master/blog/202310031230564.png",mode:"aspectFit"}),u(s,{class:"phone"},{default:c((()=>[i("1360804804")])),_:1})])),_:1}),u(s,{class:"progress"},{default:c((()=>[u(s,{class:"cu-progress round sm striped active"},{default:c((()=>[u(s,{class:"bg-coffee",style:d([{width:"60%"}])})])),_:1}),u(s,{class:"diamond"},{default:c((()=>[u(l,{src:"https://cdn.jsdelivr.net/gh/guqzhou/photo_gallery@master/blog/202310031231178.png",mode:"aspectFit"}),u(I,{class:"diamond-title"},{default:c((()=>[i("王卡会员")])),_:1})])),_:1})])),_:1}),u(s,{class:"menber-text"},{default:c((()=>[i("距离还差0成长值")])),_:1})])),_:1}),u(s,{class:"card"},{default:c((()=>[u(s,{class:"card-top"},{default:c((()=>[u(s,null,{default:c((()=>[u(I,{class:"big"},{default:c((()=>[i("VIP")])),_:1}),u(I,{class:"small"},{default:c((()=>[i("card")])),_:1})])),_:1}),u(s,{class:"text-df"},{default:c((()=>[i("主卡 E6123456")])),_:1})])),_:1}),u(s,{class:"card-con"},{default:c((()=>[u(s,{class:"card-con-left basis-lg"},{default:c((()=>[u(s,{class:"flex-between"},{default:c((()=>[u(s,{class:"item"},{default:c((()=>[u(s,{class:"title"},{default:c((()=>[u(I,{class:"box"}),u(I,null,{default:c((()=>[i("充值余额：")])),_:1})])),_:1}),u(s,{class:"num"},{default:c((()=>[i("0")])),_:1})])),_:1}),u(s,{class:"item"},{default:c((()=>[u(s,{class:"title"},{default:c((()=>[u(I,{class:"box"}),u(I,null,{default:c((()=>[i("赠送余额：")])),_:1})])),_:1}),u(s,{class:"num"},{default:c((()=>[i("0")])),_:1})])),_:1})])),_:1}),u(s,{class:"flex-between"},{default:c((()=>[u(s,{class:"item"},{default:c((()=>[u(s,{class:"title"},{default:c((()=>[u(I,{class:"box"}),u(I,null,{default:c((()=>[i("积分余额：")])),_:1})])),_:1}),u(s,{class:"num"},{default:c((()=>[i("0")])),_:1})])),_:1}),u(s,{class:"item"},{default:c((()=>[u(s,{class:"title"},{default:c((()=>[u(I,{class:"box"}),u(I,null,{default:c((()=>[i("优惠券：")])),_:1})])),_:1}),u(s,{class:"num"},{default:c((()=>[i("0 张")])),_:1})])),_:1})])),_:1})])),_:1}),u(s,{class:"memeber basis-sm"},{default:c((()=>[u(l,{src:"https://cdn.jsdelivr.net/gh/guqzhou/photo_gallery@master/blog/202310031232859.png",mode:"aspectFit"}),u(s,{class:""}),u(s,{class:"member-name"},{default:c((()=>[i("白金会员")])),_:1})])),_:1})])),_:1})])),_:1}),u(s,{class:"nav"},{default:c((()=>[u(s,{class:"flex justify-between align-center margin-bottom-sm"},{default:c((()=>[u(s,{class:"text-bold"},{default:c((()=>[i("白金会员特权")])),_:1}),u(s,{class:"text-theme text-df"},{default:c((()=>[i("等级说明")])),_:1})])),_:1}),u(s,{class:"nav-card"},{default:c((()=>[(t(!0),f(m,null,r(j.value,((a,e)=>(t(),n(s,{class:"bg-theme nav-item",key:e,onClick:q},{default:c((()=>[u(s,{class:"icon-img"},{default:c((()=>[u(s,{class:k(a.icon)},null,8,["class"])])),_:2},1024),u(s,{class:"flex-column text-left"},{default:c((()=>[u(s,{class:"text-df text-theme"},{default:c((()=>[i(v(a.name),1)])),_:2},1024),u(s,{class:"text-sm text-b"},{default:c((()=>[i(v(a.content),1)])),_:2},1024)])),_:2},1024)])),_:2},1024)))),128))])),_:1})])),_:1}),u(s,{class:"text-bold margin-left-sm"},{default:c((()=>[i("我的应用")])),_:1}),u(s,{class:"cu-list menu sm-border card-menu margin-top"},{default:c((()=>[(t(!0),f(m,null,r(w.value,(a=>(t(),n(s,{class:"cu-item arrow",key:a.id,onClick:e=>(a=>{a.url?_({url:a.url}):y({icon:"none",title:"功能正在完善中"})})(a)},{default:c((()=>[u(s,{class:"content"},{default:c((()=>[u(I,{class:k(a.icon)},null,8,["class"]),u(I,{class:"text-theme"},{default:c((()=>[i(v(a.name),1)])),_:2},1024)])),_:2},1024)])),_:2},1032,["onClick"])))),128))])),_:1}),u(s,{class:"bottom-tip"},{default:c((()=>[i("xxxx提供技术支持")])),_:1})])),_:1}),u(F,{current:5})])),_:1})}}}),[["__scopeId","data-v-eedf13f2"]]);export{w as default};