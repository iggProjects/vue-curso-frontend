import{o as a,c as n,a as t,F as g,j as $,k as w,l as B,v as G,t as u,f as c,m as W,p as f,b as v,n as O,r as C,q as U,d as l,w as _}from"./vendor.488d5137.js";import{_ as p,a as J,D as b}from"./index.ab37fded.js";import{M as S}from"./frontend_20200124.0646ef9c.js";/* empty css                                                                  */const P="https://api.github.com/users/",L={name:"GithubUserSearch",data(){return{search:null,result:null,error:null,favorites:new Map}},created(){if(localStorage.getItem("favorites")){const e=JSON.parse(window.localStorage.getItem("favorites"));if(e.length){const s=new Map(e.map(d=>[d.id,d]));this.favorites=s}}},computed:{isFavorite(){return this.favorites.has(this.result.id)},allFavorites(){return Array.from(this.favorites.values())}},methods:{async doSearch(){this.result=this.error=null;try{const e=await fetch(P+this.search);if(!e.ok)throw new Error("User not found");const s=await e.json();console.log(s),this.result=s}catch(e){this.error=e}finally{this.search=null}},addFavorite(){this.favorites.set(this.result.id,this.result),this.updateStorage()},removeFavorite(){this.favorites.delete(this.result.id),this.updateStorage()},removeFavoriteId(e){this.favorites.delete(e),this.updateStorage()},showFavorite(e){this.result=e},updateStorage(){window.localStorage.setItem("favorites",JSON.stringify(this.allFavorites))}}},I=e=>(f("data-v-67e69eb0"),e=e(),v(),e),R={class:"favorites"},H=["href"],q=["src","alt"],K={class:"fav_buttons"},X=["href"],Y=["onClick"],Q={class:"content"},Z=I(()=>t("p",null,"GitHubSearch.vue \u2714",-1)),tt=I(()=>t("h1",{class:"content__title"},"Search GitHub users",-1)),et=I(()=>t("input",{type:"submit",class:"search__submit",value:"Search"},null,-1)),st={key:0,class:"result"},ot={class:"result__name"},at=["src","alt"],nt={class:"result__bio"},rt=I(()=>t("br",null,null,-1)),it=["href"],lt={key:1,class:"result__error"};function dt(e,s,d,m,i,r){return a(),n("div",null,[t("div",R,[(a(!0),n(g,null,$(i.favorites,([o,h])=>(a(),n("div",{class:"favorite",key:h},[t("div",null,[t("a",{href:h.blog,target:"_blank"},[t("img",{src:h.avatar_url,alt:h.name,class:"favorite__avatar"},null,8,q)],8,H)]),t("div",K,[t("a",{href:h.html_url,target:"_blank"},"\u{1F431}",8,X),t("a",{href:"#",onClick:eo=>r.removeFavoriteId(o)}," \u{1F4A3}",8,Y)])]))),128))]),t("article",Q,[Z,tt,t("form",{class:"search",onSubmit:s[1]||(s[1]=w((...o)=>r.doSearch&&r.doSearch(...o),["prevent"]))},[B(t("input",{"onUpdate:modelValue":s[0]||(s[0]=o=>i.search=o),type:"text",class:"search__input",required:"",placeholder:"Search GitHub users"},null,512),[[G,i.search]]),et],32),i.result?(a(),n("div",st,[r.isFavorite?(a(),n("a",{key:0,href:"#",class:"result__toggle-favorite",onClick:s[2]||(s[2]=(...o)=>r.removeFavorite&&r.removeFavorite(...o))},"Remove Favorite \u2B50\uFE0F")):(a(),n("a",{key:1,href:"#",class:"result__toggle-favorite",onClick:s[3]||(s[3]=(...o)=>r.addFavorite&&r.addFavorite(...o))},"Add Favorite \u2B50\uFE0F")),t("h2",ot,"\u{1F449} "+u(i.result.name),1),t("img",{src:i.result.avatar_url,alt:i.result.name,class:"result__avatar"},null,8,at),t("p",nt,[c(u(i.result.bio)+" ",1),rt,t("a",{href:i.result.blog,target:"_blank",class:"result__blog"},u(i.result.blog),9,it)])])):W("",!0),i.error?(a(),n("div",lt,"Error found")):W("",!0)])])}var ct=p(L,[["render",dt],["__scopeId","data-v-67e69eb0"]]);const _t={data(){return{cards:["foto01.jpg","foto02.jpg","foto03.jpg","foto04.jpg","foto05.jpg","foto06.jpg"],innerStyles:{},step:"",transitioning:!1}},mounted(){this.setStep(),this.resetTranslate()},methods:{setStep(){const e=this.$refs.inner.scrollWidth,s=this.cards.length;this.step=`${e/s}px`},next(){this.transitioning||(this.transitioning=!0,this.moveLeft(),this.afterTransition(()=>{const e=this.cards.shift();this.cards.push(e),this.resetTranslate(),this.transitioning=!1}))},prev(){this.transitioning||(this.transitioning=!0,this.moveRight(),this.afterTransition(()=>{const e=this.cards.pop();this.cards.unshift(e),this.resetTranslate(),this.transitioning=!1}))},moveLeft(){this.innerStyles={transform:`translateX(-${this.step}) translateX(-${this.step})`}},moveRight(){this.innerStyles={transform:`translateX(${this.step}) translateX(-${this.step})`}},afterTransition(e){const s=()=>{e(),this.$refs.inner.removeEventListener("transitionend",s)};this.$refs.inner.addEventListener("transitionend",s)},resetTranslate(){this.innerStyles={transition:"none"}}}},ut=e=>(f("data-v-345a0930"),e=e(),v(),e),ht={class:"carousel disp-col-center"},pt=ut(()=>t("p",null,"CarouselUno.vue \u2714",-1)),ft=["src"],vt={class:"disp-row-center"};function mt(e,s,d,m,i,r){return a(),n(g,null,[t("div",ht,[pt,t("div",{class:"inner disp-row-center",ref:"inner",style:O(i.innerStyles)},[(a(!0),n(g,null,$(i.cards,o=>(a(),n("div",{class:"card",key:o},[t("img",{src:o},null,8,ft)]))),128))],4)]),t("div",vt,[t("button",{onClick:s[0]||(s[0]=(...o)=>r.prev&&r.prev(...o))},"prev"),t("button",{onClick:s[1]||(s[1]=(...o)=>r.next&&r.next(...o))},"next")])],64)}var gt=p(_t,[["render",mt],["__scopeId","data-v-345a0930"]]);const $t={},yt=e=>(f("data-v-18982910"),e=e(),v(),e),bt={class:"item"},Tt={class:"details"},wt=yt(()=>t("p",null,"WelcomeProduct.vue \u2714",-1));function St(e,s){return a(),n("div",bt,[t("i",null,[C(e.$slots,"icon",{},void 0,!0)]),t("div",Tt,[wt,t("h3",null,[C(e.$slots,"heading",{},void 0,!0)]),C(e.$slots,"default",{},void 0,!0)])])}var T=p($t,[["render",St],["__scopeId","data-v-18982910"]]),E="/assets/github-brands.012d6dfd.svg";const kt={name:"jsonex",data(){return{Alumnos:S.alumnos,Tutor:S.tutor}}},x=e=>(f("data-v-266036b7"),e=e(),v(),e),It={class:"jsonex disp-col-center"},xt=x(()=>t("p",null,"JsonComp.vue \u2714",-1)),Dt=x(()=>t("h2",null,"Read Local Json Example",-1)),jt=["href"],Ct=c("Github Web"),At=x(()=>t("img",{src:E},null,-1)),Ft=[Ct,At],Wt={class:"divTable"},Et=["href"],Mt=c("Github Web"),Nt=x(()=>t("img",{src:E},null,-1)),Vt=[Mt,Nt];function zt(e,s,d,m,i,r){return a(),n("div",It,[xt,Dt,t("h3",null,[t("b",null,[c("Tutor: "+u(i.Tutor.Nombre)+" | ",1),t("a",{href:i.Tutor.github,target:"_blank"},Ft,8,jt)])]),t("div",Wt,[t("table",null,[(a(!0),n(g,null,$(i.Alumnos,o=>(a(),n("tr",{key:o},[t("td",null,u(o.Nombre),1),t("td",null,[t("a",{href:o.github,target:"_blank"},Vt,8,Et)])]))),128))])])])}var Bt=p(kt,[["render",zt],["__scopeId","data-v-266036b7"]]);const Gt={name:"jsonurlex",data(){return{myjson:null}},created(){fetch("https://api.github.com/users/albertomozo",{method:"GET",headers:{"Content-Type":"application/json"}}).then(s=>s.json()).then(s=>this.myjson=s)}},A=e=>(f("data-v-2d6a8aa8"),e=e(),v(),e),Ot={class:"jsonex"},Ut=A(()=>t("p",null,"JsonurlComp.vue \u2714",-1)),Jt=A(()=>t("h2",null,"Fetch URL Json",-1)),Pt=A(()=>t("p",null,[t("a",{href:"https://api.github.com/users/albertomozo",target:"_blank"},[t("span",{class:"flecha"},"\u2192"),c(" https://api.github.com/users/albertomozo "),t("span",{class:"flecha"},"\u2190")])],-1)),Lt={class:"center"},Rt={class:"td-right"},Ht={class:"td-left"};function qt(e,s,d,m,i,r){return a(),n("div",Ot,[Ut,Jt,Pt,t("table",Lt,[(a(!0),n(g,null,$(i.myjson,(o,h)=>(a(),n("tr",{key:o},[t("td",Rt,u(h)+" -> ",1),t("td",Ht,u(o),1)]))),128))])])}var Kt=p(Gt,[["render",qt],["__scopeId","data-v-2d6a8aa8"]]);const Xt={},Yt={id:"ppalTable"},Qt=U('<p style="color:blue;font-size:12px;" data-v-515f91fc>WelcomTable.vue \u2714</p><h2 data-v-515f91fc>Example with genereric HTML Table in w3s</h2><p data-v-515f91fc><a href="https://www.w3schools.com/html/tryit.asp?filename=tryhtml_table_intro" target="_blanck" data-v-515f91fc>\u2192 w3schools table \u2190</a></p><hr data-v-515f91fc><div style="width:600px;" data-v-515f91fc><table id="tablePrueba" data-v-515f91fc><tr data-v-515f91fc><th data-v-515f91fc>Company</th><th data-v-515f91fc>Contact</th><th data-v-515f91fc>Country</th></tr><tr data-v-515f91fc><td data-v-515f91fc>Alfreds Futterkiste</td><td data-v-515f91fc>Maria Anders</td><td data-v-515f91fc>Germany</td></tr><tr data-v-515f91fc><td data-v-515f91fc>Centro comercial Moctezuma</td><td data-v-515f91fc>Francisco Chang</td><td data-v-515f91fc>Mexico</td></tr><tr data-v-515f91fc><td data-v-515f91fc>Ernst Handel</td><td data-v-515f91fc>Roland Mendel</td><td data-v-515f91fc>Austria</td></tr><tr data-v-515f91fc><td data-v-515f91fc>Island Trading</td><td data-v-515f91fc>Helen Bennett</td><td data-v-515f91fc>UK</td></tr><tr data-v-515f91fc><td data-v-515f91fc>Laughing Bacchus Winecellars</td><td data-v-515f91fc>Yoshi Tannamuri</td><td data-v-515f91fc>Canada</td></tr><tr data-v-515f91fc><td data-v-515f91fc>Magazzini Alimentari Riuniti</td><td data-v-515f91fc>Giovanni Rovelli</td><td data-v-515f91fc>Italy</td></tr></table></div>',5),Zt=[Qt];function te(e,s){return a(),n("div",Yt,Zt)}var ee=p(Xt,[["render",te],["__scopeId","data-v-515f91fc"]]);const se={data(){return{items:[{id:0,title:"Item A",list:1},{id:1,title:"Item B",list:1},{id:2,title:"Item C",list:2}]}},computed:{listOne(){return this.items.filter(e=>e.list===1)},listTwo(){return this.items.filter(e=>e.list===2)}},methods:{startDrag(e,s){console.log("startDrag, item: "+Object.entries(s)),e.dataTransfer.dropEffect="move",e.dataTransfer.effectAllowed="move",e.dataTransfer.setData("itemID",s.id)},onDrop(e,s){console.log("onDrop, list: "+s);const d=e.dataTransfer.getData("itemID"),m=this.items.find(i=>i.id==d);m.list=s}}},oe={class:"ppal disp-col-center"},ae=["onDragstart"],ne=["onDragstart"];function re(e,s,d,m,i,r){return a(),n("div",oe,[t("div",{class:"drop-zone",onDrop:s[0]||(s[0]=o=>r.onDrop(o,1)),onDragener:s[1]||(s[1]=w(()=>{},["prevent"])),onDragover:s[2]||(s[2]=w(()=>{},["prevent"]))},[(a(!0),n(g,null,$(r.listOne,o=>(a(),n("div",{class:"drag-el",key:o.title,draggable:"true",onDragstart:h=>r.startDrag(h,o)},u(o.title),41,ae))),128))],32),t("div",{class:"drop-zone",onDrop:s[3]||(s[3]=o=>r.onDrop(o,2)),onDragener:s[4]||(s[4]=w(()=>{},["prevent"])),onDragover:s[5]||(s[5]=w(()=>{},["prevent"]))},[(a(!0),n(g,null,$(r.listTwo,o=>(a(),n("div",{class:"drag-el",key:o.title,draggable:"true",onDragstart:h=>r.startDrag(h,o)},u(o.title),41,ne))),128))],32)])}var ie=p(se,[["render",re],["__scopeId","data-v-1f58fde6"]]);const le={name:"Test",props:{artists:{type:Array}}},de=e=>(f("data-v-b070d99e"),e=e(),v(),e),ce=de(()=>t("h1",null,"Vue Top 10 Artists",-1)),_e={class:"ulDiv"};function ue(e,s,d,m,i,r){return a(),n("div",null,[ce,t("div",_e,[t("table",null,[(a(!0),n(g,null,$(d.artists,(o,h)=>(a(),n("tr",{key:h},[t("td",null,u(o.name),1)]))),128))])])])}var he=p(le,[["render",ue],["__scopeId","data-v-b070d99e"]]);const pe={name:"Test2",props:{artists:{type:String}}},M=e=>(f("data-v-4d01606b"),e=e(),v(),e),fe=M(()=>t("h1",null,"Vue Top 10 Artists (Country)",-1)),ve={class:"ulDiv"},me=M(()=>t("span",null,[t("b",null,"from")],-1));function ge(e,s,d,m,i,r){return a(),n("div",null,[fe,t("div",ve,[t("table",null,[(a(!0),n(g,null,$(d.artists,(o,h)=>(a(),n("tr",{key:h},[t("td",null,[c(u(o.name)+"\xA0\xA0",1),me,c("\xA0\xA0"+u(o.country),1)])]))),128))])])])}var N=p(pe,[["render",ge],["__scopeId","data-v-4d01606b"]]);const $e={name:"Test3",props:{alumnos:{type:Array}}},V=e=>(f("data-v-7cc8bfd8"),e=e(),v(),e),ye={class:"ppalDiv"},be=V(()=>t("p",null,"WelcomeTest3 \u2714",-1)),Te=V(()=>t("h1",null,"Alumnos Frontend",-1)),we={class:"ulDiv"};function Se(e,s,d,m,i,r){return a(),n("div",ye,[be,Te,t("div",we,[t("table",null,[(a(!0),n(g,null,$(d.alumnos,o=>(a(),n("tr",{key:o},[t("td",null,u(o.Nombre),1)]))),128))])])])}var z=p($e,[["render",Se],["__scopeId","data-v-7cc8bfd8"]]);const ke={name:"Test4",data(){return{tutorJson:null}},props:{tutor:{type:Array}},created(){const e={method:"GET",headers:{"Content-Type":"application/json"}};fetch(this.tutor.github_json,e).then(s=>s.json()).then(s=>this.tutorJson=s)}},D=e=>(f("data-v-11ff1774"),e=e(),v(),e),Ie={class:"ppalDiv"},xe=D(()=>t("p",null,"WelcomeTest4 \u2714",-1)),De=D(()=>t("h1",null,"Curso Frontend",-1)),je={class:"divTutor-res"},Ce={class:"center"},Ae={class:"f-sz-20"},Fe=["href"],We=D(()=>t("span",{class:"flecha"},"\u2192",-1)),Ee=c(" https://api.github.com/users/albertomozo "),Me=D(()=>t("span",{class:"flecha"},"\u2190",-1)),Ne=[We,Ee,Me],Ve={class:"divTutor-detail"},ze={id:"detail",class:"center"},Be={class:"td-right"},Ge={class:"td-left"};function Oe(e,s,d,m,i,r){return a(),n("div",Ie,[xe,De,t("div",je,[t("table",Ce,[t("tr",null,[t("td",Ae,[t("b",null,"Tutor: "+u(d.tutor.Nombre),1)])])]),t("p",null,[t("a",{href:d.tutor.github_json,target:"_blank"},Ne,8,Fe)])]),t("div",Ve,[t("table",ze,[(a(!0),n(g,null,$(i.tutorJson,(o,h)=>(a(),n("tr",{key:o},[t("td",Be,u(h)+": ",1),t("td",Ge,u(o),1)]))),128))])])])}var Ue=p(ke,[["render",Oe],["__scopeId","data-v-11ff1774"]]);const Je={name:"Test5",props:{alumnos:{type:Array},tutor:{type:Array}}},j=e=>(f("data-v-4d43573a"),e=e(),v(),e),Pe={class:"ppalDiv"},Le=j(()=>t("p",null,"WelcomeTest6 \u2714",-1)),Re=j(()=>t("h1",null,"Grupo Frontend",-1)),He={class:"ppal"},qe={class:"center"},Ke={style:{color:"blue","font-size":"16px"}},Xe=["href"],Ye=j(()=>t("span",{class:"flecha"},"\u2192",-1)),Qe=c(" https://api.github.com/users/albertomozo "),Ze=j(()=>t("span",{class:"flecha"},"\u2190",-1)),ts=[Ye,Qe,Ze],es={class:"center"};function ss(e,s,d,m,i,r){return a(),n("div",Pe,[Le,Re,t("div",He,[t("table",qe,[t("tr",null,[t("td",null,[t("span",Ke,u(d.tutor.Nombre),1)])]),t("tr",null,[t("td",null,[t("a",{href:d.tutor.github_json,target:"_blank"},ts,8,Xe)])])]),t("table",es,[(a(!0),n(g,null,$(d.alumnos,o=>(a(),n("tr",{key:o},[t("td",null,u(o.Nombre),1)]))),128))])])])}var os=p(Je,[["render",ss],["__scopeId","data-v-4d43573a"]]);const F=e=>(f("data-v-6a1e5df6"),e=e(),v(),e),as={id:"ppalPassData"},ns=F(()=>t("p",null,"Passdata.vue \u2714",-1)),rs=F(()=>t("img",{alt:"Vue logo",src:J},null,-1)),is=F(()=>t("p",null,[t("a",{href:"https://blog.logrocket.com/how-to-use-props-to-pass-data-to-child-components/",target:"_blank"},"pass-data-to-child-components")],-1)),ls={class:"components"},ds={name:"passData",components:{Test:he,Test2:N,Test3:z,Test4:Ue},data(){return{artists:[{name:"Davido",genre:"afrobeats",country:"Nigeria"},{name:"Burna Boy",genre:"afrobeats",country:"Nigeria"},{name:"AKA",genre:"hiphop",country:"South-Africa"},{name:"Sarkodie",genre:"hiphop",country:"Ghana"},{name:"Stormzy",genre:"hiphop",country:"United Kingdom"},{name:"Lil Nas",genre:"Country",country:"United States"},{name:"Nasty C",genre:"hiphop",country:"South-Africa"},{name:"Shatta-walle",genre:"Reagae",country:"Ghana"},{name:"Khalid",genre:"pop",country:"United States"},{name:"ed-Sheran",genre:"pop",country:"United Kingdom"}],tutor:S.tutor,alumnos:S.alumnos}},created(){console.log("alumnos: "+S.alumnos.length)}},cs=Object.assign(ds,{setup(e){return(s,d)=>(a(),n("div",as,[ns,rs,is,t("div",ls,[l(N,{artists:s.artists},null,8,["artists"]),l(z,{alumnos:s.alumnos},null,8,["alumnos"]),l(os,{alumnos:s.alumnos,tutor:s.tutor},null,8,["alumnos","tutor"])])]))}});var _s=p(cs,[["__scopeId","data-v-6a1e5df6"]]),us="/assets/foto01.3b92fede.jpg",hs="/assets/foto02.84a4da0e.jpg";const ps={name:"HtmlExample01",created(){},methods:{modal1(){const e=document.getElementById("myModal");e.style.display="block",document.getElementById("img-Amp").src="/src/assets/img/foto01.jpg"},modal2(){const e=document.getElementById("myModal");e.style.display="block",document.getElementById("img-Amp").src="/src/assets/img/foto02.jpg"},modalOut1(){const e=document.getElementById("myModal");e.style.display="none"}}},k=e=>(f("data-v-c80e1468"),e=e(),v(),e),fs=k(()=>t("h2",null,"Modal Example",-1)),vs={class:"container"},ms={id:"myModal",class:"modal disp-col-center"},gs={class:"modal-content disp-col-center"},$s=k(()=>t("p",null,"Para salir de la ventana, haga click en la zona gris o en el s\xEDmbolo",-1)),ys=k(()=>t("img",{id:"img-Amp",class:"disp-hide",src:"",alt:"",width:"300",height:"300"},null,-1)),bs={class:"galeria disp-row-center"},Ts={id:"art-car01",class:"disp-col-center","data-columns":"3","data-indexnumber":"123","data-parent":"cars"},ws=k(()=>t("img",{src:us,alt:"foto01",width:"100",height:"100"},null,-1)),Ss={id:"art-hall01",class:"disp-col-center","data-columns":"3","data-indexnumber":"124","data-parent":"houses"},ks=k(()=>t("img",{src:hs,alt:"foto02",width:"100",height:"100"},null,-1));function Is(e,s,d,m,i,r){return a(),n("div",null,[fs,t("section",vs,[t("div",ms,[t("div",gs,[t("span",{class:"close",onClick:s[0]||(s[0]=(...o)=>r.modalOut1&&r.modalOut1(...o))},"\u2297"),$s,ys])]),t("div",bs,[t("article",Ts,[ws,t("button",{id:"myBtn-car01",onClick:s[1]||(s[1]=(...o)=>r.modal1&&r.modal1(...o))},"Open Modal")]),t("article",Ss,[ks,t("button",{id:"myBtn-hall01",onClick:s[2]||(s[2]=(...o)=>r.modal2&&r.modal2(...o))},"Open Modal")])])])])}var xs=p(ps,[["render",Is],["__scopeId","data-v-c80e1468"]]);const y=e=>(f("data-v-6f27c77b"),e=e(),v(),e),Ds={id:"ppalProducts"},js=y(()=>t("h1",null,"Our Works",-1)),Cs=c(" This Api "),As=y(()=>t("a",{target:"_blank",href:"https://vuejs.org/"},"documentation",-1)),Fs=c(" provides you with all information you need to get started. "),Ws=c(" Vue\u2019s "),Es=y(()=>t("a",{target:"_blank",href:"https://vuejs.org/"},"official documentation",-1)),Ms=c(" provides you with all information you need to get started. "),Ns=c(" Vue\u2019s "),Vs=y(()=>t("a",{target:"_blank",href:"https://vuejs.org/"},"official documentation",-1)),zs=c(" provides you with all information you need to get started. "),Bs=c(" Vue\u2019s "),Gs=y(()=>t("a",{target:"_blank",href:"https://vuejs.org/"},"official documentation",-1)),Os=c(" provides you with all information you need to get started. "),Us=c(" Vue\u2019s "),Js=y(()=>t("a",{target:"_blank",href:"https://vuejs.org/"},"official documentation",-1)),Ps=c(" provides you with all information you need to get started. "),Ls=c(" Vue\u2019s "),Rs=y(()=>t("a",{target:"_blank",href:"https://vuejs.org/"},"official documentation",-1)),Hs=c(" provides you with all information you need to get started. "),qs=c(" Vue\u2019s "),Ks=y(()=>t("a",{target:"_blank",href:"https://vuejs.org/"},"official documentation",-1)),Xs=c(" provides you with all information you need to get started. "),Ys=c(" This Api "),Qs=y(()=>t("a",{target:"_blank",href:"https://vuejs.org/"},"documentation",-1)),Zs=c(" provides you with all information you need to get started. "),to={setup(e){return(s,d)=>(a(),n("div",Ds,[js,l(T,null,{icon:_(()=>[l(b)]),heading:_(()=>[l(ct)]),default:_(()=>[Cs,As,Fs]),_:1}),l(T,null,{icon:_(()=>[l(b)]),heading:_(()=>[l(gt)]),default:_(()=>[Ws,Es,Ms]),_:1}),l(T,null,{icon:_(()=>[l(b)]),heading:_(()=>[l(ie)]),default:_(()=>[Ns,Vs,zs]),_:1}),l(T,null,{icon:_(()=>[l(b)]),heading:_(()=>[l(Bt)]),default:_(()=>[Bs,Gs,Os]),_:1}),l(T,null,{icon:_(()=>[l(b)]),heading:_(()=>[l(Kt)]),default:_(()=>[Us,Js,Ps]),_:1}),l(T,null,{icon:_(()=>[l(b)]),heading:_(()=>[l(_s)]),default:_(()=>[Ls,Rs,Hs]),_:1}),l(T,null,{icon:_(()=>[l(b)]),heading:_(()=>[l(ee)]),default:_(()=>[qs,Ks,Xs]),_:1}),l(T,null,{icon:_(()=>[l(b)]),heading:_(()=>[l(xs)]),default:_(()=>[Ys,Qs,Zs]),_:1})]))}};var ro=p(to,[["__scopeId","data-v-6f27c77b"]]);export{ro as default};
