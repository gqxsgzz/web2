(this.webpackJsonpmyapp=this.webpackJsonpmyapp||[]).push([[0],{105:function(e,t,a){e.exports=a(201)},110:function(e,t,a){},115:function(e,t,a){},199:function(e,t,a){},201:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(9),r=a.n(c),l=a(12),i=a(13),s=a(15),p=a(14),m=function(e){return o.a.createElement("ul",null,e.data.map((function(e){return o.a.createElement("li",{key:e.id},e.title)})))},d=function(e){return o.a.createElement("div",null,[1,2,3,4,5].map((function(t){return o.a.createElement("button",{key:t,onClick:function(){return e.getData(t)}},t)})))},u=(n.Component,a(10)),g=a(11),h=(a(110),a(115),a(19)),f=function(e){return o.a.createElement("h1",null,e.match.params.type)},E=(Object(g.g)((function(e){return console.log(e),o.a.createElement("div",{className:"doc"},o.a.createElement("div",{className:"content"},o.a.createElement(g.b,{path:"/doc/:type",component:f}),o.a.createElement(g.a,{from:"/doc",to:"/doc/core"})),o.a.createElement("ol",null,o.a.createElement("li",null,o.a.createElement(u.c,{to:"/doc/core"},"\u6838\u5fc3\u6982\u5ff5")),o.a.createElement("li",null,o.a.createElement(u.c,{to:"/doc/guide"},"\u9ad8\u7ea7\u6307\u5f15")),o.a.createElement("li",null,o.a.createElement(u.c,{to:"/doc/api"},"API")),o.a.createElement("li",null,o.a.createElement(u.c,{to:"/doc/hooks"},"Hooks"))))})),[{data:[1,2],shoucang:[],userinfo:"1",desc:""}]),y=function(e){Object(s.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={selectedTab:"blueTab"},n}return Object(i.a)(a,[{key:"render",value:function(){var e=this,t=this.props.location.pathname;return o.a.createElement("div",{style:{position:"fixed",width:"359px",bottom:0}},o.a.createElement(h.c,{unselectedTintColor:"#949494",tintColor:"red",barTintColor:"white"},o.a.createElement(h.c.Item,{title:"\u9996\u9875",key:"home",icon:o.a.createElement("i",{className:"iconfont icon-Homehomepagemenu"}),selectedIcon:o.a.createElement("i",{className:"iconfont icon-Homehomepagemenu1"}),selected:"/"===t,onPress:function(){e.props.history.push("/")},"data-seed":"logId"}),o.a.createElement(h.c.Item,{icon:o.a.createElement("i",{className:"iconfont icon-icon4"}),selectedIcon:o.a.createElement("i",{className:"iconfont icon-gouwuche"}),title:"\u6536\u85cf",key:"cart",selected:"/cart"===t,onPress:function(){"1"==E[0].userinfo?(console.log("\u8bf7\u767b\u5f55"),e.props.history.push("/login")):e.props.history.push("/cart")},"data-seed":"logId1"}),o.a.createElement(h.c.Item,{icon:o.a.createElement("i",{className:"iconfont icon-dingdan"}),selectedIcon:o.a.createElement("div",{style:{width:"22px",height:"22px",background:"url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  21px 21px no-repeat"}}),title:"\u8ba2\u5355\u5217\u8868",key:"order",selected:"/order"===t,onPress:function(){e.props.history.push("/order")},"data-seed":"logId2"}),o.a.createElement(h.c.Item,{icon:o.a.createElement("i",{className:"iconfont icon-wode"}),selectedIcon:{uri:"https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg"},title:"\u6211\u7684\u6dd8\u5b9d",key:"my",selected:"/my"===t,onPress:function(){e.props.history.push("/my")},"data-seed":"logId3"})))}}]),a}(o.a.Component),b=Object(g.g)(y),x=a(52),v=a.n(x),k=function(e){Object(s.a)(a,e);var t=Object(p.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).getData=function(){v()({method:"get",url:"https://www.fastmock.site/mock/9e4bbf9e35ad15942010865690c87ac6/api/getgoodslist"}).then((function(t){e.setState({data:t.data.data},(function(){console.log(e.state.data),E[0].data=e.state.data,console.log(E[0].data)}))}))},e.goTo=function(e){console.log(e.target.id),localStorage.setItem("id",e.target.id)},e.state={data:[],shoucang:[],userinfo:""},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){document.title="\u9996\u9875",this.getData()}},{key:"render",value:function(){var e=this,t=this.state.data.map((function(t,a){return o.a.createElement(u.b,{to:"/goodsDetail"},o.a.createElement("div",{key:t.id,id:t.id,style:{width:"50%",height:"200px",display:a%2==0?"":"inline"},onTouchEnd:function(t){e.goTo(t)}},o.a.createElement("img",{src:t.img,id:t.id,style:{transform:"scale(0.3)",marginTop:a%2==0?"-160px":"-360px",marginLeft:a%2==0?"-89%":"0%"}}),o.a.createElement("p",{style:{color:"black",fontSize:"18px",marginTop:"-170px",marginLeft:a%2==0?"12px":"173px"}},t.title),o.a.createElement("p",{style:{marginTop:"-15px",marginLeft:a%2==0?"125px":"285px",color:"red"}},t.price,o.a.createElement("span",{style:{color:"black"}},"\u5143"))))}));return o.a.createElement("div",null,t)}}]),a}(n.Component),j=function(e){Object(s.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).state={data:["1","2","3"],imgHeight:176},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;setTimeout((function(){e.setState({data:["AiyWuByWklrrUDlFignR","TekJlZRVCjLFexlOCuWn","IJOtIlfsYdTyaDTRVrLI"]})}),100)}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{style:{width:"360px"}},o.a.createElement("div",{style:{width:"100%",height:"50px",backgroundColor:"#ff852a"}},o.a.createElement(u.b,{to:"/search"},o.a.createElement("div",{style:{width:"70%",backgroundColor:"#ff4e22",height:"30px",position:"relative",top:"10px",left:"15%"}},o.a.createElement("img",{src:"/ss.png",style:{transform:"scale(0.1)",position:"relative",top:"-85px",left:"-5%"}}),o.a.createElement("p",{style:{fontSize:"10px",position:"relative",top:"-195px",marginLeft:"105px",color:"white"}},"\u5bfb\u627e\u5b9d\u8d1d\u5e97\u94fa")))),o.a.createElement(h.d,null,o.a.createElement(h.a,{autoplay:!1,infinite:!0,beforeChange:function(e,t){return console.log("slide from ".concat(e," to ").concat(t))},afterChange:function(e){return console.log("slide to",e)}},this.state.data.map((function(t){return o.a.createElement("a",{key:t,href:"http://www.alipay.com",style:{display:"inline-block",width:"100%",height:e.state.imgHeight}},o.a.createElement("img",{src:"https://zos.alipayobjects.com/rmsportal/".concat(t,".png"),alt:"",style:{width:"100%",verticalAlign:"top"},onLoad:function(){window.dispatchEvent(new Event("resize")),e.setState({imgHeight:"auto"})}}))})))),o.a.createElement(k,null))}}]),a}(n.Component),w=(a(198),function(e){Object(s.a)(a,e);var t=Object(p.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).shaixuan=function(){console.log(E[0].data),console.log(E[0].shoucang);for(var t=0;t<E[0].shoucang.length;t++){console.log(t);for(var a=0;a<E[0].data.length;a++)console.log(a),E[0].data[t].id==E[0].shoucang[a]&&(e.state.data.push(E[0].data[t]),console.log(e.state.data))}},e.del=function(t){var a=e.state.data;a.splice(t.tardet.id,1),e.setState({data:a})},e.state={data:[]},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){document.title="\u6536\u85cf",this.shaixuan()}},{key:"render",value:function(){var e=this,t=this.state.data.map((function(t,a){return o.a.createElement("div",{key:t.id,id:t.id},o.a.createElement("div",null,t.title),o.a.createElement("button",{id:t.id,onTouchEnd:function(t){e.del(t)}},"\u5220\u9664"))}));return o.a.createElement("div",null,t)}}]),a}(n.Component)),O=function(e){Object(s.a)(a,e);var t=Object(p.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return o.a.createElement("div",null,"\u8ba2\u5355\u5217\u8868")}}]),a}(n.Component),T=function(e){Object(s.a)(a,e);var t=Object(p.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return o.a.createElement("div",null,"\u6211\u7684\u6dd8\u5b9d")}}]),a}(n.Component),I=(a(199),function(e){Object(s.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).state={value:""},e}return Object(i.a)(a,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("div",{style:{backgroundColor:"white",height:"44px"}},o.a.createElement(h.b,null),o.a.createElement(u.b,{to:"/"},o.a.createElement("p",{className:"qx"},"\u53d6\u6d88")),o.a.createElement("select",{className:"xl"},o.a.createElement("option",null,"\u5b9d\u8d1d"),o.a.createElement("option",null,"\u5e97\u94fa"),o.a.createElement("option",null,"\u5929\u732b"))))}}]),a}(n.Component)),C=function(e){Object(s.a)(a,e);var t=Object(p.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).select=function(){console.log(localStorage.getItem("id")),console.log(E[0].data);for(var t=0;t<E[0].data.length;t++)E[0].data[t].id==localStorage.getItem("id")?(console.log("true"+ +localStorage.getItem("id")),e.setState({data:E[0].data[t]},(function(){console.log(e.state.data)}))):console.log("false"+ +localStorage.getItem("id"))},e.collection=function(){"1"==E[0].userinfo?(console.log("\u8bf7\u767b\u5f55"),e.props.history.push("/login")):(E[0].shoucang.push(localStorage.getItem("id")),console.log(E[0].shoucang),0==e.state.sign?e.setState({sign:!0,sc:"/sc1.png"}):e.setState({sign:!1,sc:"/sc.png"}))},e.state={data:[],sign:!1,sc:"/sc.png"},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){document.title="\u5546\u54c1\u7ec6\u8282",this.select()}},{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement("div",{style:{width:"100%",height:"40px",backgroundColor:"#ff852a"}},o.a.createElement(u.b,{to:"/"},o.a.createElement("img",{src:"/fh.png",style:{transform:"scale(0.1)",position:"relative",top:"-80px",left:"-80px"}}))),o.a.createElement("div",{key:this.state.data.id,id:this.state.data.id},o.a.createElement("img",{src:this.state.data.img,style:{transform:"scale(0.5)",marginLeft:"-22%",marginTop:"-90px"}}),o.a.createElement("p",{style:{fontSize:"18px",marginTop:"-110px",marginLeft:"10%"}},this.state.data.title),o.a.createElement("p",{style:{fontSize:"15px",color:"red",marginTop:"-17px",marginLeft:"53%"}},this.state.data.price,o.a.createElement("span",{style:{color:"black"}},"\u5143"))),o.a.createElement("div",{style:{width:"100%",height:"50px",borderTop:"3px solid #cdcdcd",marginTop:"285px"}},o.a.createElement("div",{style:{height:"50px",marginTop:"-80px"}},o.a.createElement("img",{src:"/dp.png",style:{transform:"scale(0.15)",marginTop:"-5px",marginLeft:"-75px"}}),o.a.createElement("p",{style:{marginLeft:"10px",marginTop:"-88px",color:"#cdcdcd"}},"\u5e97\u94fa")),o.a.createElement("div",{style:{height:"50px",marginTop:"-50px",marginLeft:"50px"}},o.a.createElement("img",{src:"/kf.png",style:{transform:"scale(0.15)",marginTop:"-5px",marginLeft:"-75px"}}),o.a.createElement("p",{style:{marginLeft:"10px",marginTop:"-88px",color:"#cdcdcd"}},"\u5ba2\u670d")),o.a.createElement("div",{style:{height:"50px",marginTop:"-50px",marginLeft:"100px"}},o.a.createElement("img",{src:this.state.sc,style:{transform:"scale(0.15)",marginTop:"-5px",marginLeft:"-75px"},onTouchEnd:function(){e.collection()}}),o.a.createElement("p",{style:{marginLeft:"10px",marginTop:"-88px",color:"#cdcdcd"}},"\u6536\u85cf"))),o.a.createElement("button",{style:{width:"100px",height:"35px",backgroundColor:"#ff9a01",position:"relative",top:"-42px",left:"145px",color:"white",border:"none",borderTopLeftRadius:"17px",borderBottomLeftRadius:"17px"}},"\u52a0\u5165\u8d2d\u7269\u8f66"),o.a.createElement("button",{style:{width:"100px",height:"35px",backgroundColor:"#fe5a08",position:"relative",top:"-42px",left:"145px",color:"white",border:"none",borderTopRightRadius:"17px",borderBottomRightRadius:"17px"}},"\u7acb\u5373\u8d2d\u4e70"))}}]),a}(n.Component),L=function(e){Object(s.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).getData=function(){v()({method:"get",url:"https://www.fastmock.site/mock/9e4bbf9e35ad15942010865690c87ac6/api/login"}).then((function(e){console.log(e),console.log(e.data.data.name),E[0].userinfo=e.data.data.name,console.log(e.data.desc),E[0].desc=e.data.desc}))},e.jump=function(){e.props.history.push("/")},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){document.title="\u767b\u5f55",this.getData()}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{style:{marginTop:"90px",marginLeft:"6%"}},o.a.createElement("p",{style:{fontSize:"18px"}},"\u8d26\u53f7"),o.a.createElement("input",{type:"text",style:{width:"92%",height:"30px",marginTop:"11px"}}),o.a.createElement("p",{style:{fontSize:"18px",marginTop:"10px"}},"\u5bc6\u7801"),o.a.createElement("input",{type:"text",style:{width:"92%",height:"30px",marginTop:"10px"}}),o.a.createElement("button",{style:{display:"block",marginTop:"35px",width:"35%",height:"30px",marginLeft:"30%"},onTouchEnd:function(){e.jump()}},"\u767b\u5f55"))}}]),a}(n.Component),S=function(){return o.a.createElement(u.a,null,o.a.createElement(g.d,null,o.a.createElement(g.b,{exact:!0,path:"/",component:j}),o.a.createElement(g.b,{path:"/cart",component:w}),o.a.createElement(g.b,{path:"/search",component:I}),o.a.createElement(g.b,{path:"/order",component:O}),o.a.createElement(g.b,{path:"/my",component:T}),o.a.createElement(g.b,{path:"/goodsDetail",component:C}),o.a.createElement(g.b,{path:"/login",component:L})),o.a.createElement(b,null))};a(200);r.a.render(o.a.createElement(S,null),document.getElementById("root"));fetch("https://www.fastmock.site/mock/9e4bbf9e35ad15942010865690c87ac6/api/login",{method:"post",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){return console.log(e)}))}},[[105,1,2]]]);
//# sourceMappingURL=main.9e53dbfe.chunk.js.map