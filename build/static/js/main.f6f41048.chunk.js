(this["webpackJsonprickard-hockey"]=this["webpackJsonprickard-hockey"]||[]).push([[0],{137:function(e,n,t){"use strict";t.r(n);var a=t(1),i=t.n(a),r=t(22),o=t.n(r),c=(t(45),t(6)),l=t(7),u=t(9),s=t(8),d=t(13),m=t(10),p=t(4),h=t(5),f=t(23);function b(){var e=Object(p.a)(["\n  animation: 2s ",";\n\n  @import url('https://fonts.googleapis.com/css?family=Roboto+Condensed&display=swap');\n  font-family: 'Roboto Condensed';\n"]);return b=function(){return e},e}function g(){var e=Object(p.a)(["",""]);return g=function(){return e},e}var v=Object(h.b)(g(),f.fadeIn),x=h.a.div(b(),v),O=t(26),w=t.n(O),y=t(27),j=t.n(y);function k(){var e=Object(p.a)(["\n  height: 300px;\n  position: absolute;\n  top: 35px;\n\n  @media(min-width: 1024px) {\n    height: unset;\n    width: 60%;\n    z-index: 2;\n  }\n"]);return k=function(){return e},e}function E(){var e=Object(p.a)(["\n\n  @media(min-width: 1024px) {\n    width: 100%;\n  }\n"]);return E=function(){return e},e}function C(){var e=Object(p.a)(["\n\n  @media(min-width: 1024px) {\n    /* background-image: linear-gradient(to bottom, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0)); */\n    /* -webkit-mask-image: linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));\n    mask-image: linear-gradient(to top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 10%); */\n  }\n"]);return C=function(){return e},e}function I(){var e=Object(p.a)(["\n\n  @media(min-width: 1024px) {\n    /* background: #d9dce2 */\n    background: linear-gradient(to bottom, #d9dce2, #ffffff);\n    padding-top: 56px;\n    /* -webkit-mask-image: -webkit-gradient(linear, left 90%, left bottom, from(rgba(255,255,255,1)), to(rgba(255,255,255,0))) */\n  }\n"]);return I=function(){return e},e}var B=h.a.div(I()),T=h.a.div(C()),G=h.a.img(E()),z=h.a.img(k()),S=function(e){function n(e){var t;return Object(c.a)(this,n),(t=Object(u.a)(this,Object(s.a)(n).call(this,e))).state={},t}return Object(m.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){return i.a.createElement(B,{id:"home"},i.a.createElement(T,null,i.a.createElement(z,{src:j.a}),i.a.createElement(G,{src:w.a})))}}]),n}(a.Component);function H(){var e=Object(p.a)(["\n\n  @media(min-width: 1024px) {\n    background-color: ",";\n    color: white;\n    cursor: pointer;\n    font-size: ",";\n    font-style: ",";\n    margin: 8px 0;\n    padding: 12px 24px;\n  }\n\n  &:hover {\n    background-color: ",";\n  }\n"]);return H=function(){return e},e}function P(){var e=Object(p.a)(["\n\n  @media(min-width: 1024px) {\n    position: fixed;\n    right: 0;\n    top: 30px;\n    width: 200px;\n    z-index: 4;\n  }\n"]);return P=function(){return e},e}var A=h.a.div(P()),W=h.a.div(H(),(function(e){return e.selected?"#27ace2":"#373739"}),(function(e){return e.selected?"24px":"20px"}),(function(e){return e.selected?"italic":"none"}),(function(e){return e.selected?"#27ace2":"#656565"})),V=function(e){function n(e){var t;return Object(c.a)(this,n),(t=Object(u.a)(this,Object(s.a)(n).call(this,e))).state={selectedItem:"home"},t.navItemOnClick=t.navItemOnClick.bind(Object(d.a)(t)),t}return Object(m.a)(n,e),Object(l.a)(n,[{key:"navItemOnClick",value:function(e){this.setState({selectedItem:e}),this.props.scrollToElement(e)}},{key:"render",value:function(){var e=this;return i.a.createElement(A,null,i.a.createElement(W,{onClick:function(){return e.navItemOnClick("home")},selected:"home"===this.state.selectedItem},"HOME"),i.a.createElement(W,{onClick:function(){return e.navItemOnClick("about")},selected:"about"===this.state.selectedItem},"ABOUT"),i.a.createElement(W,{onClick:function(){return e.navItemOnClick("camps")},selected:"camps"===this.state.selectedItem},"CAMPS"),i.a.createElement(W,{onClick:function(){return e.navItemOnClick("testimonials")},selected:"testimonials"===this.state.selectedItem},"TESTIMONIALS"),i.a.createElement(W,{onClick:function(){return e.navItemOnClick("contact")},selected:"contact"===this.state.selectedItem},"CONTACT"))}}]),n}(a.Component),q=t(28),L=t.n(q);function R(){var e=Object(p.a)(["\n\n  @media(min-width: 1024px) {\n    border-radius: 6px;\n    margin-left: 48px;\n    width: 50%;\n  }\n"]);return R=function(){return e},e}function D(){var e=Object(p.a)(["\n\n  @media(min-width: 1024px) {\n    font-size: 20px;\n  }\n"]);return D=function(){return e},e}function M(){var e=Object(p.a)(["\n\n  @media(min-width: 1024px) {\n    font-size: 16px;\n    padding: 24px;\n  }\n"]);return M=function(){return e},e}function F(){var e=Object(p.a)(["\n  background-color: #d9dce2;\n\n  @media(min-width: 1024px) {\n    border-radius: 6px;\n    display: flex;\n    flex-direction: row;\n    height: 512px;\n    justify-content: center;\n    margin: 0 10%;\n    padding: 24px;\n  }\n"]);return F=function(){return e},e}var N=h.a.div(F()),U=h.a.div(M()),J=h.a.p(D()),K=h.a.img(R()),X=function(e){function n(e){var t;return Object(c.a)(this,n),(t=Object(u.a)(this,Object(s.a)(n).call(this,e))).state={},t.bioOne="Wren is a Goaltending Coach based in Breckenridge, Colorado. He has been involved in coaching goaltending since 2003.",t.bioTwo="Wren has worked with many different associations, camps and has coached with some of the most prolific goalie coaches from all over the world. He has coached goaltenders from never-ever goalies who are just learning to move in the pads, all the way up through varying levels of professional goaltenders and International Ice Hockey Federation goalies who have enjoyed his technique and approach to coaching.",t.bioThree="Wren always uses the most recent information about the position to coach at the cutting edge of goalie development.",t}return Object(m.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){return i.a.createElement(N,null,i.a.createElement(U,null,i.a.createElement(J,null,this.bioOne),i.a.createElement(J,null,this.bioTwo),i.a.createElement(J,null,this.bioThree)),i.a.createElement(K,{src:L.a}))}}]),n}(a.Component),Z=t(29),Q=t.n(Z),$=t(30),_=t.n($),Y=t(31),ee=t.n(Y),ne=t(32),te=t.n(ne),ae=t(33),ie=t.n(ae),re=t(34),oe=t.n(re);function ce(){var e=Object(p.a)(["\n\n  @media(min-width: 1024px) {\n    margin: 0 12px;\n    max-height: 75px;\n  }\n"]);return ce=function(){return e},e}function le(){var e=Object(p.a)(["\n\n  @media(min-width: 1024px) {\n    display: flex;\n    flex-direction: row;\n  }\n"]);return le=function(){return e},e}function ue(){var e=Object(p.a)(["\n\n  @media(min-width: 1024px) {\n    font-weight: 500;\n    margin-left: 12px;\n  }\n"]);return ue=function(){return e},e}function se(){var e=Object(p.a)(["\n\n  @media(min-width: 1024px) {\n    align-items: center;\n    display: flex;\n    flex-direction: row;\n    font-size: 20px;\n  }\n"]);return se=function(){return e},e}function de(){var e=Object(p.a)(["\n  background-color: #d9dce2;\n\n  @media(min-width: 1024px) {\n    align-items: center;\n    border-radius: 6px;\n    color: #373739;\n    display: flex;\n    flex-direction: column;\n    font-weight: 700;\n    height: 512px;\n    justify-content: center;\n    margin: 0 150px;\n    padding: 0 24px 24px 24px;\n  }\n"]);return de=function(){return e},e}var me=h.a.div(de()),pe=h.a.div(se()),he=h.a.p(ue()),fe=h.a.div(le()),be=h.a.img(ce()),ge=function(e){function n(e){var t;return Object(c.a)(this,n),(t=Object(u.a)(this,Object(s.a)(n).call(this,e))).state={},t}return Object(m.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){return i.a.createElement(me,null,i.a.createElement("ul",null,i.a.createElement(pe,null,i.a.createElement("li",null,"Goalie Coach Bulgarian National Team IIHF Division 2"),i.a.createElement(he,null,"(2017-Present)")),i.a.createElement(pe,null,i.a.createElement("li",null,"USA Hockey Goaltending Development Coordinator"),i.a.createElement(he,null,"(Colorado) (2020)")),i.a.createElement(pe,null,i.a.createElement("li",null,"On Ice Director - Goalie Guild's Global Goaltending Retreat"),i.a.createElement(he,null,"(2017-Present)")),i.a.createElement(pe,null,i.a.createElement("li",null,"Association Goalie Coach - Summit Hockey"),i.a.createElement(he,null,"(2010-2020)")),i.a.createElement(pe,null,i.a.createElement("li",null,"Head Goaltending Instructor - Banff Hockey School"),i.a.createElement(he,null,"(2008-2010)")),i.a.createElement(pe,null,i.a.createElement("li",null,"Goaltending Coach - Okanagan Hockey School"),i.a.createElement(he,null,"(2006-2009)"))),i.a.createElement(fe,null,i.a.createElement(be,{src:_.a}),i.a.createElement(be,{src:oe.a}),i.a.createElement(be,{src:ee.a}),i.a.createElement(be,{src:ie.a}),i.a.createElement(be,{src:Q.a}),i.a.createElement(be,{src:te.a})))}}]),n}(a.Component),ve=t(35),xe=t.n(ve);function Oe(){var e=Object(p.a)(["\n\n  @media(min-width: 1024px) {\n    font-size: 14px;\n    font-style: italic;\n    font-weight: 700;\n    margin: 0;\n  }\n"]);return Oe=function(){return e},e}function we(){var e=Object(p.a)(["\n\n  @media(min-width: 1024px) {\n    font-size: 16px;\n    font-weight: 700;\n    margin: 0;\n  }\n"]);return we=function(){return e},e}function ye(){var e=Object(p.a)(["\n\n  @media(min-width: 1024px) {\n    margin-left: 200px;\n  }\n"]);return ye=function(){return e},e}function je(){var e=Object(p.a)(["\n\n  @media(min-width: 1024px) {\n    margin: 12px 0 0 0;\n  }\n"]);return je=function(){return e},e}function ke(){var e=Object(p.a)(["\n\n  @media(min-width: 1024px) {\n    font-size: 18px;\n    padding: 24px;\n  }\n"]);return ke=function(){return e},e}function Ee(){var e=Object(p.a)(["\n\n  @media(min-width: 1024px) {\n    border-radius: 6px;\n    margin-left: 48px;\n    width: 50%;\n  }\n"]);return Ee=function(){return e},e}function Ce(){var e=Object(p.a)(["\n  background-color: #d9dce2;\n\n  @media(min-width: 1024px) {\n    border-radius: 6px;\n    display: flex;\n    flex-direction: row;\n    height: 512px;\n    justify-content: center;\n    margin: 0 150px;\n    padding: 24px;\n  }\n"]);return Ce=function(){return e},e}var Ie=h.a.div(Ce()),Be=h.a.img(Ee()),Te=h.a.div(ke()),Ge=h.a.p(je()),ze=h.a.div(ye()),Se=h.a.p(we()),He=h.a.p(Oe()),Pe=function(e){function n(e){var t;return Object(c.a)(this,n),(t=Object(u.a)(this,Object(s.a)(n).call(this,e))).state={},t.styleBodyPart1="\"My one main rule with regards to my technique and coaching, is that I am a resource and never going to try to change any goaltender's style. I will help the goalie build on his or her specific techniques and provide input on changes I believe will be helpful but I never take the approach of 'my way or the highway.'\"",t.styleBodyPart2='"The goalies are the ones who innovate the position, It\'s the goalie coach who helps them apply their innovations. I firmly believe in continuous work on the fundamentals and age appropriate development."',t.styleBodyPart3='"I try not to overcomplicate drills, focusing on body mechanics, and quality repetitions over quantity. Goaltenders develop at a faster rate by doing drills that allow them to feel the puck with gamelike shots and situations, not by drills that look fancy."',t.styleBodyPart4='"I am always seeking to apply the most recent and advanced techniques to make goalies better and keep them safer."',t}return Object(m.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){return i.a.createElement(Ie,null,i.a.createElement(Be,{src:xe.a}),i.a.createElement(Te,null,i.a.createElement(Ge,null,this.styleBodyPart1),i.a.createElement(Ge,null,this.styleBodyPart2),i.a.createElement(Ge,null,this.styleBodyPart3),i.a.createElement(Ge,null,this.styleBodyPart4),i.a.createElement(ze,null,i.a.createElement(Se,null,"- Coach Wren"),i.a.createElement(He,null,"Owner and Creator of Goalie Guru"))))}}]),n}(a.Component);function Ae(){var e=Object(p.a)(["\n\n  @media(min-width: 1024px) {\n    border-bottom: ","\n    color: ",";\n    cursor: pointer;\n    font-size: 24px;\n    font-weight: bold;\n    margin: 50px 3% 0 3%;\n    padding-bottom: 16px;\n  }\n\n"]);return Ae=function(){return e},e}function We(){var e=Object(p.a)(["\n\n  @media(min-width: 1024px) {\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n  }\n"]);return We=function(){return e},e}var Ve=h.a.div(We()),qe=h.a.p(Ae(),(function(e){return e.selected?"3px solid #27ace2":"unset"}),(function(e){return e.selected?"#27ace2":"#373739"})),Le=function(e){function n(e){var t;return Object(c.a)(this,n),(t=Object(u.a)(this,Object(s.a)(n).call(this,e))).state={selectedView:"about"},t.menuItemOnClick=t.menuItemOnClick.bind(Object(d.a)(t)),t}return Object(m.a)(n,e),Object(l.a)(n,[{key:"menuItemOnClick",value:function(e){this.setState({selectedView:e})}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{id:"about"},i.a.createElement(Ve,null,i.a.createElement(qe,{onClick:function(){return e.menuItemOnClick("about")},selected:"about"===this.state.selectedView},"About Coach Wren"),i.a.createElement(qe,{onClick:function(){return e.menuItemOnClick("history")},selected:"history"===this.state.selectedView},"Coaching History"),i.a.createElement(qe,{onClick:function(){return e.menuItemOnClick("style")},selected:"style"===this.state.selectedView},"Coaching Style")),"about"===this.state.selectedView?i.a.createElement(X,null):null,"history"===this.state.selectedView?i.a.createElement(ge,null):null,"style"===this.state.selectedView?i.a.createElement(Pe,null):null)}}]),n}(a.Component);function Re(){var e=Object(p.a)(["\n\n  @media(min-width: 1024px) {\n    background-color: white;\n    border-radius: 8px;\n    color: black;\n    cursor: pointer;\n    font-size: 24px;\n    margin-top: 32px;\n    padding: 16px;\n    text-decoration: none;\n  }\n\n  &:hover {\n    background-color: #27ace2;\n    color: white;\n  }\n"]);return Re=function(){return e},e}function De(){var e=Object(p.a)(["\n\n  @media(min-width: 1024px) {\n    font-size: 28px;\n    margin: 0;\n  }\n"]);return De=function(){return e},e}function Me(){var e=Object(p.a)(["\n\n  @media(min-width: 1024px) {\n    font-size: 48px;\n    font-weight: 900;\n    margin: 8px 0 12px 0;\n  }\n"]);return Me=function(){return e},e}function Fe(){var e=Object(p.a)(["\n\n  @media(min-width: 1024px) {\n    align-items: center;\n    background-color: #373739;\n    border-radius: 50%;\n    color: white;\n    display: flex;\n    flex-direction: column;\n    height: 400px;\n    justify-content: center;\n    margin: 48px auto;\n    width: 400px;\n  }\n"]);return Fe=function(){return e},e}var Ne=h.a.div(Fe()),Ue=h.a.p(Me()),Je=h.a.p(De()),Ke=h.a.a(Re()),Xe=function(e){function n(e){var t;return Object(c.a)(this,n),(t=Object(u.a)(this,Object(s.a)(n).call(this,e))).state={},t}return Object(m.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){return i.a.createElement(Ne,null,i.a.createElement(Ue,null,this.props.title),i.a.createElement(Je,null,this.props.dates,"7"),i.a.createElement(Je,null,this.props.location),i.a.createElement(Ke,{href:this.props.registerLink},"Register Now!"))}}]),n}(a.Component);function Ze(){var e=Object(p.a)(["\n\n  @media(min-width: 1024px) {\n\n  }\n"]);return Ze=function(){return e},e}var Qe=h.a.div(Ze()),$e=function(e){function n(e){var t;return Object(c.a)(this,n),(t=Object(u.a)(this,Object(s.a)(n).call(this,e))).state={},t}return Object(m.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){return i.a.createElement(Qe,{id:"camps"},i.a.createElement(Xe,{title:"Fall Clinic 2020",dates:"September 26-27",location:"Breckenridge, CO",registerLink:"https://forms.gle/bX2FaXZ1L1DwgaVS7"}))}}]),n}(a.Component),_e=function(e){function n(e){var t;return Object(c.a)(this,n),(t=Object(u.a)(this,Object(s.a)(n).call(this,e))).isMobile=window.innerWidth<=768,t.scrollToElement=t.scrollToElement.bind(Object(d.a)(t)),t}return Object(m.a)(n,e),Object(l.a)(n,[{key:"scrollToElement",value:function(e){var n=document.getElementById(e),t=document.body.getBoundingClientRect().top,a=n.getBoundingClientRect().top-t;window.scrollTo({top:a,behavior:"smooth"})}},{key:"render",value:function(){return i.a.createElement(x,null,i.a.createElement(V,{scrollToElement:this.scrollToElement}),i.a.createElement(S,null),i.a.createElement(Le,null),i.a.createElement($e,null))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(36).initializeApp({apiKey:"AIzaSyDgSou_Qg9Lu45v-lk6oTkBdyqKcZlqUTk",authDomain:"goalieguru-d5055.firebaseapp.com",databaseURL:"https://goalieguru-d5055.firebaseio.com",projectId:"goalieguru-d5055",storageBucket:"goalieguru-d5055.appspot.com",messagingSenderId:"1075380740391",appId:"1:1075380740391:web:6c2ccc4f032d9c1d948902"}),o.a.render(i.a.createElement(_e,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},26:function(e,n,t){e.exports=t.p+"static/media/moutains.874ef402.jpeg"},27:function(e,n,t){e.exports=t.p+"static/media/GoalieGuruLogo2.8778655c.png"},28:function(e,n,t){e.exports=t.p+"static/media/CoachWren.4194c8e4.jpg"},29:function(e,n,t){e.exports=t.p+"static/media/banffAcademyBears.bac4273e.png"},30:function(e,n,t){e.exports=t.p+"static/media/bulgaria.247aa68c.png"},31:function(e,n,t){e.exports=t.p+"static/media/globalGoaltending.b8b5e8e0.png"},32:function(e,n,t){e.exports=t.p+"static/media/oha.4dcadb2e.gif"},33:function(e,n,t){e.exports=t.p+"static/media/summit.eeb3c07f.png"},34:function(e,n,t){e.exports=t.p+"static/media/usaHockey.80272a38.png"},35:function(e,n,t){e.exports=t.p+"static/media/CoachWren2.cb6178df.JPG"},40:function(e,n,t){e.exports=t(137)},45:function(e,n,t){}},[[40,1,2]]]);
//# sourceMappingURL=main.f6f41048.chunk.js.map