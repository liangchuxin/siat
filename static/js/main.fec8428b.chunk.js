(this.webpackJsonpsiat=this.webpackJsonpsiat||[]).push([[0],{34:function(e,a,t){e.exports=t.p+"static/media/elephant.80d94b82.png"},35:function(e,a,t){e.exports=t.p+"static/media/bear.2195ef89.png"},36:function(e,a,t){e.exports=t.p+"static/media/rhino.398ff08a.png"},37:function(e,a,t){e.exports=t.p+"static/media/pangolin.1a57413d.png"},38:function(e,a,t){e.exports=t.p+"static/media/elephant-fullwidth.7d9edbcf.png"},39:function(e,a,t){e.exports=t.p+"static/media/bear-fullwidth.b3fb5130.png"},40:function(e,a,t){e.exports=t.p+"static/media/rhino-fullwidth.cb0860dd.png"},41:function(e,a,t){e.exports=t.p+"static/media/pangolin-fullwidth.dcbcc1b2.png"},42:function(e,a,t){e.exports=t.p+"static/media/tiger-fullwidth.e3dcc9d6.png"},44:function(e,a,t){e.exports=t(88)},49:function(e,a,t){},54:function(e,a,t){},55:function(e,a,t){},56:function(e,a,t){},57:function(e,a,t){},66:function(e,a,t){},67:function(e,a,t){},85:function(e,a,t){},86:function(e,a,t){},87:function(e,a,t){},88:function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),i=t(31),r=t.n(i),l=(t(49),t(16)),o=t(9),c=t(10),d=t(11),m=t(6),u=t(13),p=t(12),h=t(3),g=(t(54),function(e){Object(u.a)(t,e);var a=Object(p.a)(t);function t(e){var n;return Object(c.a)(this,t),(n=a.call(this,e)).updateBackground=n.updateBackground.bind(Object(m.a)(n)),n.fade=n.fade.bind(Object(m.a)(n)),n.close=n.close.bind(Object(m.a)(n)),n.activate=n.activate.bind(Object(m.a)(n)),n}return Object(d.a)(t,[{key:"componentDidUpdate",value:function(e){console.log("DropDown: props.open",this.props.open),e.open!==this.props.open&&this.props.open?this.activate(null):e.open===this.props.open||this.props.open||this.close(null)}},{key:"fade",value:function(){"active"in document.getElementsByClassName("dropdown-main-container")?document.getElementsByClassName("dropdown-main-container")[0].classList.remove("active"):document.getElementsByClassName("Dropdown-main-container")[0].classList.add("active")}},{key:"activate",value:function(){document.getElementsByClassName("dropdown-main-container")[0].style.display="flex";var e=document.getElementById("menu-backdrop"),a=document.getElementsByClassName("species-label")[0],t=document.getElementsByClassName("dropdown-button")[0];e.style.transitionDelay="0s",a.style.transitionDelay="0s",e.classList.add("active"),a.classList.add("active"),t.innerHTML='Close <i class="fa fa-angle-double-up" aria-hidden="true"></i>';for(var n=document.getElementsByClassName("slider").length,s=0;s<n;s++){var i="slider-text"+s.toString(10),r=document.getElementsByClassName(i)[0];r.style.marginTop="5rem",r.style.animationName="slide-up",r.style.animationDelay=(120*s+300).toString(10)+"ms"}}},{key:"close",value:function(e){if(e){var a=e.target.innerText,t=document.getElementById("menu-backdrop");switch(a){case"Tigers":t.classList.remove("tiger");break;case"Elephants":t.classList.remove("elephant");break;case"Bears":t.classList.remove("bear");break;case"Rhinos":t.classList.remove("rhino");break;case"Pangolins":t.classList.remove("pangolin")}}var n=document.getElementById("menu-backdrop"),s=document.getElementsByClassName("species-label")[0],i=document.getElementsByClassName("dropdown-button")[0];n.style.transitionDelay="0.3s",s.style.transitionDelay="0.5s",n.classList.remove("active"),s.classList.remove("active"),i.innerHTML='Species <i class="fa fa-angle-double-down" aria-hidden="true"></i>';for(var r=document.getElementsByClassName("slider").length,l=0;l<r;l++){var o="slider-text"+l.toString(10),c=document.getElementsByClassName(o)[0];c.style.marginTop="0rem",c.style.animationName="slide-down",c.style.animationDelay=(-120*l+600).toString(10)+"ms"}this.props.setMenuOff(),setTimeout((function(){document.getElementsByClassName("dropdown-main-container")[0].style.display="none"}),2e3)}},{key:"updateBackground",value:function(e){var a=e.target.innerText,t=document.getElementById("menu-backdrop");if(1==t.classList.length){switch(a){case"Tigers":t.classList.add("tiger");break;case"Elephants":t.classList.add("elephant");break;case"Bears":t.classList.add("bear");break;case"Rhinos":t.classList.add("rhino");break;case"Pangolins":t.classList.add("pangolin")}e.target.classList.add("active"),document.getElementsByClassName("fade-text")[0].classList.add("fade-active")}else{switch(a){case"Tigers":t.classList.remove("tiger");break;case"Elephants":t.classList.remove("elephant");break;case"Bears":t.classList.remove("bear");break;case"Rhinos":t.classList.remove("rhino");break;case"Pangolins":t.classList.remove("pangolin")}e.target.classList.remove("active"),document.getElementsByClassName("fade-text")[0].classList.remove("fade-active")}}},{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{id:"menu-backdrop"}),s.a.createElement("div",{className:"dropdown-main-container"},s.a.createElement("div",null,s.a.createElement("div",{className:"species-label"},s.a.createElement("div",null,"Species \u2014")),s.a.createElement("div",{className:"fade-text"},s.a.createElement("div",{className:"first-of-type slider"},s.a.createElement(h.HashLink,{className:"link",to:{pathname:"/article/".concat(K[4].id,"/#top"),speciesId:K[4].id}},s.a.createElement("h2",{onClick:this.close,onMouseEnter:this.updateBackground,onMouseLeave:this.updateBackground,className:"slider-text0"},"Tigers"))),s.a.createElement("div",{className:"slider"},s.a.createElement(h.HashLink,{className:"link",to:{pathname:"/article/".concat(K[0].id,"/#top"),speciesId:K[0].id}},s.a.createElement("h2",{onClick:this.close,onMouseEnter:this.updateBackground,onMouseLeave:this.updateBackground,className:"slider-text1"},"Elephants"))),s.a.createElement("div",{className:"slider"},s.a.createElement(h.HashLink,{className:"link",to:{pathname:"/article/".concat(K[1].id,"/#top"),speciesId:K[1].id}},s.a.createElement("h2",{onClick:this.close,onMouseEnter:this.updateBackground,onMouseLeave:this.updateBackground,className:"slider-text2"},"Bears"))),s.a.createElement("div",{className:"slider"},s.a.createElement(h.HashLink,{className:"link",to:{pathname:"/article/".concat(K[2].id,"/#top"),speciesId:K[2].id}},s.a.createElement("h2",{onClick:this.close,onMouseEnter:this.updateBackground,onMouseLeave:this.updateBackground,className:"slider-text3"},"Rhinos"))),s.a.createElement("div",{className:"slider"},s.a.createElement(h.HashLink,{className:"link",to:{pathname:"/article/".concat(K[3].id,"/#top"),speciesId:K[3].id}},s.a.createElement("h2",{onClick:this.close,onMouseEnter:this.updateBackground,onMouseLeave:this.updateBackground,className:"slider-text4"},"Pangolins")))))))}}]),t}(s.a.Component)),f=(t(55),function(e){Object(u.a)(t,e);var a=Object(p.a)(t);function t(e){var n;return Object(c.a)(this,t),(n=a.call(this,e)).state={isTop:!0,dropdownMenu:!1},n.toggleMenu=n.toggleMenu.bind(Object(m.a)(n)),n.setMenuOff=n.setMenuOff.bind(Object(m.a)(n)),n}return Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this;console.log("called componentDidMont"),console.log(this.state.dropdownMenu),document.addEventListener("scroll",(function(){var a=window.scrollY<100;a!==e.state.isTop&&(console.log("Change isTop"),e.setState({isTop:a}),console.log(e.state.dropdownMenu))}))}},{key:"setMenuOff",value:function(){this.setState({dropdownMenu:!1})}},{key:"toggleMenu",value:function(){console.log(this.state.dropdownMenu),this.state.dropdownMenu?(console.log("Turn off DropDown"),this.setState({dropdownMenu:!1}),console.log("dropdownMenu is: "+this.state.dropdownMenu)):(console.log("Turn on DropDown"),this.setState({dropdownMenu:!0}))}},{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("nav",{className:this.state.isTop?"up":"down"},s.a.createElement("div",null,s.a.createElement(h.HashLink,{to:"/#top",className:"icon",hash:"#top"},"SIAT")),s.a.createElement("div",null,s.a.createElement("span",{onClick:this.toggleMenu,className:"nav-text dropdown-button"},"Species"," ",s.a.createElement("i",{className:"fa fa-angle-double-down","aria-hidden":"true"})),s.a.createElement(h.HashLink,{to:"/#art",hash:"#art"},s.a.createElement("span",{className:"nav-text"},"Artwork")),s.a.createElement(h.HashLink,{to:"/about"},s.a.createElement("span",{className:"nav-text donate"},"About")))),s.a.createElement(g,{open:this.state.dropdownMenu,setMenuOff:this.setMenuOff,setMenuOn:this.setMenuOn}))}}]),t}(s.a.Component)),v=t(34),b=t.n(v),E=t(35),y=t.n(E),k=t(36),N=t.n(k),w=t(37),I=t.n(w);t(56);function L(e){return console.log(e),s.a.createElement("div",{className:"split split-species",style:{backgroundImage:"url(".concat(function(e){switch(e){case"Elephants":return b.a;case"Bears":return y.a;case"Rhinos":return N.a;case"Pangolins":return I.a}}(e.speciesInfo.name),")")}},s.a.createElement(h.HashLink,{to:{pathname:"/article/".concat(e.speciesInfo.id),speciesId:e.speciesInfo.id,hash:"#top"}},s.a.createElement("div",null,s.a.createElement("h2",null,e.speciesInfo.name),s.a.createElement("p",{className:"split-description"},(a=e.speciesInfo.description,t=75,a.slice(0,t)+"...")),s.a.createElement("div",{className:"small-info"},s.a.createElement("div",{className:"number-left"},s.a.createElement("p",{className:"small-b-number"},e.speciesInfo.numberLeft),s.a.createElement("p",{className:"red-label"},"Number left")),s.a.createElement("div",{className:"line"}),s.a.createElement("div",{className:"deaths"},s.a.createElement("p",{className:"small-b-number"},e.speciesInfo.deaths),s.a.createElement("p",{className:"red-label"},"Deaths from IAT"))))));var a,t}t(57);var M=t(38),B=t.n(M),j=t(39),x=t.n(j),C=t(40),S=t.n(C),O=t(41),T=t.n(O),D=t(42),H=t.n(D);function P(e){return s.a.createElement("div",{className:"fullwidth-container",style:{backgroundImage:"url(".concat(function(e){switch(e){case"Elephants":return B.a;case"Bears":return x.a;case"Rhinos":return S.a;case"Pangolins":return T.a;case"Tigers":return H.a}}(e.speciesInfo.name),")")}},s.a.createElement("div",{className:"cover-species-container"},s.a.createElement("div",null,s.a.createElement("h1",null,e.speciesInfo.name),s.a.createElement("p",{className:"text-regular species-description"},e.readMore?(a=e.speciesInfo.description,t=180,a.slice(0,t)+"..."):e.speciesInfo.description),e.readMore&&s.a.createElement(h.HashLink,{to:{pathname:"/article/".concat(e.speciesInfo.id),speciesId:e.speciesInfo.id,hash:"#top"}},s.a.createElement("button",{className:"readmore button-text"},"Read more \u2014"))),s.a.createElement("div",null,s.a.createElement("div",{className:"info"},s.a.createElement("p",{className:"b-number"},e.speciesInfo.numberLeft),s.a.createElement("p",{className:"red-label"},"Numbers left")),s.a.createElement("div",{className:"info"},s.a.createElement("p",{className:"b-number"},e.speciesInfo.deaths),s.a.createElement("p",{className:"red-label"},"Deaths from IAT")))));var a,t}var A=t(43),R=t.n(A),q=(t(66),[{original:"https://tva1.sinaimg.cn/large/007S8ZIlgy1gfvpmiqxprj315j0u07aw.jpg",thumbnail:"https://tva1.sinaimg.cn/large/007S8ZIlgy1gfvpmiqxprj315j0u07aw.jpg",description:"Pangolin -- by Elyse"},{original:"https://tva1.sinaimg.cn/large/007S8ZIlgy1gfvpmbhr8aj315g0u0q89.jpg",thumbnail:"https://tva1.sinaimg.cn/large/007S8ZIlgy1gfvpmbhr8aj315g0u0q89.jpg",description:"Leopard -- by Elyse"},{original:"https://tva1.sinaimg.cn/large/007S8ZIlgy1gfvpn10h23j31640u0783.jpg",thumbnail:"https://tva1.sinaimg.cn/large/007S8ZIlgy1gfvpn10h23j31640u0783.jpg",description:"Shark -- by Elyse"},{original:"https://i.loli.net/2020/06/21/uhAIPfXbid8p3Vc.jpg",thumbnail:"https://i.loli.net/2020/06/21/uhAIPfXbid8p3Vc.jpg",Description:"Elephant -- by Jessica"}]);function Z(){return s.a.createElement(s.a.Fragment,null,s.a.createElement(P,{key:K[4].name,speciesInfo:K[4],readMore:!0}),s.a.createElement("div",{className:"left-right"},s.a.createElement(L,{key:K[0].name,speciesInfo:K[0]}),s.a.createElement(L,{key:K[1].name,speciesInfo:K[1]})),s.a.createElement("div",{className:"artwork",id:"art"},s.a.createElement(R.a,{items:q})),s.a.createElement("div",{className:"left-right"},s.a.createElement(L,{key:K[2].name,speciesInfo:K[2]}),s.a.createElement(L,{key:K[3].name,speciesInfo:K[3]})))}t(67);function F(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"aboutHeaderBg"},s.a.createElement("div",{className:"aboutHeaderContainer"},s.a.createElement("h1",null,"About SIAT"))),s.a.createElement("p",{className:"aboutDescription text-regular"},"Huge numbers exotic and endangered animals are victim to illegal animal trading each year and our group has decided to create a website that collects the statistics and facts about such animals. We have chosen 5 animals to focus on, they are the following:"," ",s.a.createElement("a",{href:"/article/tiger"},"Tigers"),","," ",s.a.createElement("a",{href:"/article/elephant"},"Elephants"),","," ",s.a.createElement("a",{href:"/article/bear"},"Bears"),", ",s.a.createElement("a",{href:"/article/rhino"},"Rhinos"),", and ",s.a.createElement("a",{href:"/article/pangolin"},"Pangolins"),". The main purpose of this website is to raise awareness about this issue. we all collaborated in the creation of this website and each chose roles that will be challenging for us. Celia focused on coding the website and creating a web crawler of collect the information, improving her coding skills. Jessica and Elyse created artworks to decorate this website and improved their artistic skills."))}var J=t(17),_=t.n(J),W=(t(85),t(86),function(e){Object(u.a)(t,e);var a=Object(p.a)(t);function t(e){return Object(c.a)(this,t),a.call(this,e)}return Object(d.a)(t,[{key:"componentWillReceiveProps",value:function(e){e.articleInfo!==this.props.articleInfo&&this.forceUpdate()}},{key:"render",value:function(){return s.a.createElement("div",{className:"article-container"},s.a.createElement("a",{target:"_blank",href:this.props.articleInfo.url},s.a.createElement("div",{className:"content"},s.a.createElement("h2",null,this.props.articleInfo.title," ",s.a.createElement("i",{className:"fa fa-external-link","aria-hidden":"true"})),s.a.createElement("p",{className:"details"},"Published on ",s.a.createElement("b",null,this.props.articleInfo.domain)),s.a.createElement("p",{className:"extract"},this.props.articleInfo.snippet))))}}]),t}(s.a.Component));t(17);function U(e){var a=V(e);return K.find((function(e){return e.id===a}))}function V(e){return e.split("/article/")[1]}var X=function(e){Object(u.a)(t,e);var a=Object(p.a)(t);function t(e){var n;return Object(c.a)(this,t),(n=a.call(this,e)).state={article:[],pageNumber:1,loading:!1},n.loadMore=n.loadMore.bind(Object(m.a)(n)),n}return Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.setState({loading:!0});var a=this.state.pageNumber;a+=1,this.setState({pageNumber:a}),_.a.get("http://api.serpstack.com/search?access_key=fc41a7c4211647b543bc003529fb620a&sort=date&query=illegal+trade+wildlife+".concat(V(this.props.match.url))).then((function(a){e.setState({article:a.data.organic_results}),e.setState({loading:!1}),console.log(a.data),console.log(e.state.article)})).catch((function(e){alert("axois error: ".concat(e))}))}},{key:"loadMore",value:function(){var e=this;this.setState({loading:!0});var a=this.state.pageNumber;a+=1,this.setState({pageNumber:a},(function(){console.log(e.state.pageNumber)})),_.a.get("http://api.serpstack.com/search?access_key=fc41a7c4211647b543bc003529fb620a&sort=date&query=illegal+trade+wildlife+".concat(V(this.props.match.url),"\n        &page=").concat(this.state.pageNumber)).then((function(a){var t=e.state.article;t=t.concat(a.data.organic_results),console.log(t),e.setState({article:t},(function(){console.log(a.data),console.log(e.state.article)})),e.setState({loading:!1})})).catch((function(e){alert("".concat(e))}))}},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement(P,{key:V(this.props.match.url),speciesInfo:U(this.props.match.url),readMore:!1}),this.state.article.map((function(e){return console.log("Article: ".concat(e)),s.a.createElement(W,{key:e.title,articleInfo:e})})),s.a.createElement("div",{className:this.state.loading?"more-container wait":"more-container",onClick:this.loadMore},s.a.createElement("div",{className:"more"},"Load More...")))}}]),t}(s.a.Component),K=(t(87),[{id:"elephant",name:"Elephants",description:"Elephants are being poached in large numbers for their tusks. Ivory is highly demanded in the Asian market and it is often carved into ornaments and jewellery. Even though this is banned internationally, ivory trade is highly profitable and is causing the death of 55 elephants every day on average.",numberLeft:"40,000",deaths:"20,000"},{id:"bear",name:"Bears",description:"Every year, tens of thousands of black bears are taken by hunters for use in bear bile farming. Since bear bile is known to be useful in treating liver and gall bladder conditions, it is used in some traditional medicines mostly in China, South Korea and Vietnam.",numberLeft:"200,000",deaths:"700"},{id:"rhino",name:"Rhinos",description:"Rhinos are victims of poaching due to the high demand of their horns both for decoration and the myth of its medical properties. Even though many countries has made this illegal, the high demand for Rhino horns on the black market has risen over the years and this costed countless rhinos their lives",numberLeft:"27,000",deaths:"318"},{id:"pangolin",name:"Pangolins",description:"Pangolins are covered in distinctive scales that ward off predators in the wild, but this makes them the traffickers' targets. Their scales are boiled off their bodies for use in traditional medicine, their meat is a high-end delicacy in China and their blood is seen as a healing tonic.",numberLeft:"N/A",deaths:"279,000"},{id:"tiger",name:"Tigers",description:"These territorial and generally solidarity but social predators have once ranged widely in Asia but have lost 93% of their historic range ever since the 20th Century due to the loss of habitats. These large cats\u2019 population have dropped from 100,000 in the 20th century to 3000 in 2015.",numberLeft:"3,890",deaths:"100+"}]);function Y(){return s.a.createElement(l.BrowserRouter,null,s.a.createElement("div",null,s.a.createElement(f,null),s.a.createElement(o.g,null,s.a.createElement(o.d,{path:"/article/:speciesId",render:function(e){return s.a.createElement(X,e)}}),s.a.createElement(o.d,{path:"/about"},s.a.createElement(F,null)),s.a.createElement(o.d,{path:"/"},s.a.createElement(Z,null))),s.a.createElement("footer",{className:"text-light"},s.a.createElement("div",null),s.a.createElement("div",{className:"footer-icon"},s.a.createElement("img",{src:"https://i.loli.net/2020/06/26/vDi7gSUyqXKcPom.png"})),s.a.createElement("div",{className:"footer-details"},s.a.createElement("div",null,"Copyright \xa9 Celia, Fairy, Elyse & Jessica"),s.a.createElement("div",null,"Contact us: liang81077@gapps.uwcsea.edu.sg")))))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(Y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[44,1,2]]]);
//# sourceMappingURL=main.fec8428b.chunk.js.map