/*! For license information please see main.4e2213de.chunk.js.LICENSE.txt */
(this["webpackJsonpargon-dashboard-react"]=this["webpackJsonpargon-dashboard-react"]||[]).push([[0],{109:function(e,a,t){e.exports=t(237)},220:function(e,a,t){e.exports=t.p+"static/media/janae.196d2724.png"},234:function(e,a,t){e.exports=t.p+"static/media/brandonhong.22d0b90d.jpeg"},235:function(e,a,t){e.exports=t.p+"static/media/janaechan.1eafc3ac.png"},236:function(e,a,t){e.exports=t.p+"static/media/robert.efd8082b.jpg"},237:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(31),s=t.n(r),c=t(15),o=(t(65),t(66),t(67),t(68),t(11)),i=t(12),m=t(14),d=t(13),u=t(26),p=t(32),E=t(238),h=t(239),b=t(240),f=t(241),g=t(242),v=t(243),y=t(244),N=t(245),k=t(246),x=function(e){Object(m.a)(t,e);var a=Object(d.a)(t);function t(e){var n;return Object(o.a)(this,t),(n=a.call(this,e)).state={collapseOpen:!1},n.toggleCollapse=function(){n.setState({collapseOpen:!n.state.collapseOpen})},n.closeCollapse=function(){n.setState({collapseOpen:!1})},n.createLinks=function(e){return e.map((function(e,a){return l.a.createElement(E.a,{key:a},l.a.createElement(h.a,{to:e.layout+e.path,tag:c.c,onClick:n.closeCollapse,activeClassName:"active"},l.a.createElement("i",{className:e.icon}),e.name))}))},n.activeRoute.bind(Object(p.a)(n)),n}return Object(i.a)(t,[{key:"activeRoute",value:function(e){return this.props.location.pathname.indexOf(e)>-1?"active":""}},{key:"render",value:function(){var e=this.props.logo;return e&&e.innerLink?{to:e.innerLink,tag:c.b}:e&&e.outterLink&&{href:e.outterLink,target:"_blank"},l.a.createElement(b.a,{className:"navbar-vertical fixed-left navbar-light bg-white sidebar",expand:"md",id:"sidenav-main"},l.a.createElement(f.a,{fluid:!0},l.a.createElement("button",{className:"navbar-toggler",type:"button",onClick:this.toggleCollapse},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement(g.a,{className:"pt-0 logo h1"},"TremorVision"),l.a.createElement(v.a,{navbar:!0,isOpen:this.state.collapseOpen},l.a.createElement("div",{className:"navbar-collapse-header d-md-none"},l.a.createElement(y.a,null,e?l.a.createElement(N.a,{className:"collapse-brand",xs:"6"},"Navigation"):null,l.a.createElement(N.a,{className:"collapse-close",xs:"6"},l.a.createElement("button",{className:"navbar-toggler",type:"button",onClick:this.toggleCollapse},l.a.createElement("span",null),l.a.createElement("span",null))))),l.a.createElement(k.a,{navbar:!0},l.a.createElement(E.a,null,l.a.createElement(h.a,{to:"/app/dashboard",tag:c.c,onClick:this.closeCollapse,activeClassName:"active"},l.a.createElement("i",{className:"ni ni-tv-2 text-primary"}),"Dashboard")),l.a.createElement(E.a,null,l.a.createElement(h.a,{to:"/app/history",tag:c.c,onClick:this.closeCollapse,activeClassName:"active"},l.a.createElement("i",{className:"ni ni-bullet-list-67 text-primary"}),"History")),l.a.createElement(E.a,null,l.a.createElement(h.a,{to:"/app/messages",tag:c.c,onClick:this.closeCollapse,activeClassName:"active"},l.a.createElement("i",{className:"ni ni-email-83 text-primary"}),"Messages"))),l.a.createElement("hr",{className:"my-4"}),l.a.createElement(k.a,{navbar:!0},l.a.createElement(E.a,null,l.a.createElement(h.a,{to:"/app/about",tag:c.c,onClick:this.closeCollapse,activeClassName:"active"},"About Us")),l.a.createElement(E.a,null,l.a.createElement(h.a,{href:"mailto:tremorvisionapp@gmail.com"},"Contact Us"))))))}}]),t}(l.a.Component),w=t(4),C=t.n(w),O=t(23),D=t.n(O),j=t(17),T=t.n(j),S=t(29),M=S.a.controllers.doughnut.prototype.draw;S.a.helpers.extend(S.a.controllers.doughnut.prototype,{draw:function(){M.apply(this,arguments);var e,a,t=this.chart,n=t.chart.width;a=n>205?((e=.8*t.chart.height)/50).toFixed(2):((e=.6*t.chart.height)/50).toFixed(2);var l=t.chart.ctx;l.font="bold "+a+"em poppins",l.textBaseline="middle";for(var r=0,s=0;s<t.config.data.datasets[0].data.length;s++)r+=t.config.data.datasets[0].data[s];var c=Math.round(t.config.data.datasets[0].data[0]/r*100).toString()+"%",o=Math.round((n-l.measureText(c).width)/2),i=.5*e;l.fillStyle="#2DCE89",l.fillText(c,o,i)}});var L={legend:{display:!0,position:"bottom",onClick:null},tooltips:{mode:"point"}},F=function(e){Object(m.a)(t,e);var a=Object(d.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(S.b,{data:this.props.data,options:L}))}}]),t}(l.a.Component),P=t(247),R=t(248),B=t(104),W=t(260),A=t(249),z=t(108),I=function(e){Object(m.a)(t,e);var a=Object(d.a)(t);function t(e){var n;return Object(o.a)(this,t),(n=a.call(this,e)).state={intructions:"Trace the entire spiral and press evaluate.",modal:!1,results:!1,resultText:"",percent:0},n.toggle=n.toggle.bind(Object(p.a)(n)),n}return Object(i.a)(t,[{key:"clearModal",value:function(){this.setState({results:!1,resultText:""})}},{key:"toggle",value:function(){this.setState({modal:!this.state.modal})}},{key:"makeblob",value:function(e){var a,t,n;if(-1===e.indexOf(";base64,"))return t=(a=e.split(","))[0].split(":")[1],n=decodeURIComponent(a[1]),new Blob([n],{type:t});t=(a=e.split(";base64,"))[0].split(":")[1];for(var l=(n=window.atob(a[1])).length,r=new Uint8Array(l),s=0;s<l;++s)r[s]=n.charCodeAt(s);return new Blob([r],{type:t})}},{key:"populateResult",value:function(e,a){var t,n,r,s;"parkinson"===e.predictions[0].tagName.toLowerCase()?(t=e.predictions[0].probability,n=e.predictions[1].probability):(n=e.predictions[0].probability,t=e.predictions[1].probability),n<=t?(r=(100*t).toFixed(1),s=l.a.createElement("span",{className:"bg-danger"}," Parkinson's spirals "),this.setState({percent:-1*r})):(r=(100*n).toFixed(1),s=l.a.createElement("span",{className:"bg-info"},"healthy spirals"),this.setState({percent:1*r}));var c=l.a.createElement("div",null,"Our model shows that your spiral is ",r,"% similar to known ",s);this.setState({results:!0,resultText:c,spiralRes:a});var o=document.getElementById("btn-download");o.addEventListener("click",(function(e){o.href=a}))}},{key:"pingPlatform",value:function(e,a){var t=this;e.preventDefault();var n=this.makeblob(a);fetch("https://southcentralus.api.cognitive.microsoft.com/customvision/v3.0/Prediction/c6ee0724-e2fc-446c-9dfd-f1cef6f40479/classify/iterations/Iteration7/image",{headers:{"Prediction-Key":"89884caaab6a49b08c7988717547d4f8","Content-Type":"application/octet-stream"},method:"POST",body:n}).then((function(e){return e.json()})).then((function(e){t.populateResult(e,a)})).catch((function(e){console.log(e)}))}},{key:"finishTest",value:function(){this.setState({results:!1,resultText:"",modal:!1});var e=document.getElementById("test-btn");e.innerHTML="Complete",e.style.backgroundColor="#2dce89",e.style.borderColor="#2dce89",this.props.callback(this.state.percent),this.props.updateDataCallback(this.state.percent)}},{key:"isCanvasBlank",value:function(e,a,t){if(0===JSON.parse(a).lines.length){this.setState({intructions:"Please trace the entire spiral before evaluating."});var n=document.getElementById("help-txt");n.classList.add("fading"),setTimeout((function(){n.classList.remove("fading")}),1e3)}else this.pingPlatform(e,t)}},{key:"render",value:function(){var e,a=this;return e=!0===this.state.results?l.a.createElement(l.a.Fragment,null,l.a.createElement(P.a,null,l.a.createElement("h3",null,this.state.resultText),l.a.createElement("p",{className:"text-muted"},"Click finish for your results to be logged and sent to your doctor. You may also personally download your image or try again."),l.a.createElement("img",{alt:"Guide Spiral",src:this.state.spiralRes,className:"img-thumbnail mx-auto small-img"})),l.a.createElement(R.a,null,l.a.createElement(B.a,{color:"secondary",onClick:function(){a.clearModal()}},"Retry")," ",l.a.createElement(B.a,{color:"primary",id:"btn-download",href:"#",download:T()().format()},"Download"),l.a.createElement(B.a,{color:"primary",onClick:function(){a.finishTest()}},"Finish"))):l.a.createElement(l.a.Fragment,null,l.a.createElement(P.a,{className:"text-center"},l.a.createElement("p",{id:"help-txt",className:"text-muted"},this.state.intructions),l.a.createElement("div",{className:"test mt-2"},l.a.createElement(z.a,{className:"mx-auto sig-canvas",lazyRadius:0,brushRadius:2,brushColor:"#222222",hideGrid:!0,hideInterface:!0,canvasHeight:"100%",canvasWidth:"100%",ref:function(e){return a.saveableCanvas=e}}))),l.a.createElement(R.a,null,l.a.createElement(B.a,{color:"secondary",onClick:function(){a.saveableCanvas.clear()}},"Clear"),l.a.createElement(B.a,{color:"primary",onClick:function(e){a.isCanvasBlank(e,a.saveableCanvas.getSaveData(),a.saveableCanvas.canvasContainer.children[1].toDataURL())}},"Evaluate"))),l.a.createElement("div",null,l.a.createElement(B.a,{color:"primary",size:"lg",id:"test-btn",className:"btn-msg",onClick:this.toggle},this.props.buttonLabel),l.a.createElement(W.a,{isOpen:this.state.modal,toggle:this.toggle,className:this.props.className},l.a.createElement(A.a,{toggle:this.toggle,className:"modal-header"},l.a.createElement("h3",null,"Spiral Drawing Test")),e))}}]),t}(l.a.Component),G=t(261),J=t(262),U=t(250),H=t(263),q=t(251),V=function(e){Object(m.a)(n,e);var a=Object(d.a)(n);function n(){return Object(o.a)(this,n),a.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(b.a,{className:"navbar-top",expand:"md",id:"navbar-main"},l.a.createElement(f.a,{fluid:!0},l.a.createElement(c.b,{className:"h4 mb-0 text-uppercase d-none d-lg-inline-block",to:"/"}),l.a.createElement(k.a,{className:"align-items-center d-none d-md-flex",navbar:!0},l.a.createElement(G.a,{nav:!0},l.a.createElement(J.a,{className:"pr-0",nav:!0},l.a.createElement(U.a,{className:"align-items-center"},l.a.createElement("span",{className:"avatar avatar-sm rounded-circle"},l.a.createElement("img",{alt:"...",src:t(220)})),l.a.createElement(U.a,{className:"ml-2 d-none d-lg-block"},l.a.createElement("span",{className:"mb-0 text-sm font-weight-bold .font-darker"},"Janae Chan")))),l.a.createElement(H.a,{className:"dropdown-menu-arrow",right:!0},l.a.createElement(q.a,{className:"noti-title",header:!0,tag:"div"},l.a.createElement("h6",{className:"text-overflow m-0"},"Welcome!")),l.a.createElement(q.a,{to:"/user-profile",tag:c.b},l.a.createElement("i",{className:"ni ni-single-02"}),l.a.createElement("span",null,"My profile")),l.a.createElement(q.a,{to:"/user-profile",tag:c.b},l.a.createElement("i",{className:"ni ni-settings-gear-65"}),l.a.createElement("span",null,"Settings")),l.a.createElement(q.a,{divider:!0}),l.a.createElement(q.a,{href:"#pablo",onClick:function(e){return e.preventDefault()}},l.a.createElement("i",{className:"ni ni-user-run"}),l.a.createElement("span",null,"Logout"))))))))}}]),n}(l.a.Component),_=t(39),Y=t(252),K=t(253),Z=t(254),Q=t(255),X=t(256),$=t(257),ee=t(258),ae=[82,18],te=["#2DCE89","#11CDEF"],ne=["Healthy","Parkinson's"],le=function(e){Object(m.a)(n,e);var a=Object(d.a)(n);function n(e){var r;return Object(o.a)(this,n),(r=a.call(this,e)).toggleNavs=function(e,a){e.preventDefault(),r.state.activeNav!==a&&r.setState({activeNav:a,chartExample1Data:"data1"===r.state.chartExample1Data?"data2":"data1"})},r.getCurrentWeek=function(e){for(var a=T()(),t=a.clone().startOf("week"),n=[],r=0;r<=6;r++){var s=T()(t).add(r,"days").format("dddd").substring(0,3),c=T()(t).add(r,"days").format("D"),o=l.a.createElement(N.a,null,l.a.createElement("div",{className:"day ".concat(r===a.day()?"dayActive":"")},l.a.createElement(y.a,null,l.a.createElement(N.a,null,s)),l.a.createElement(y.a,null,l.a.createElement(N.a,null,c))));n.push(o)}return n},r.getTasks=function(e){for(var a=T()(),n=a.clone().startOf("week"),r=[],s=6;s>=0;s--)if(s<a.day()){var c=T()(n).add(s,"days").format("LL"),o=l.a.createElement(y.a,{className:"w-100 mx-auto"},l.a.createElement(N.a,{className:"px-0"},l.a.createElement(Y.a,{className:"shadow-lg p-3 mb-4 bg-white rounded task"},l.a.createElement(y.a,{className:"d-flex justify-content-between"},l.a.createElement(N.a,{sm:"8"},l.a.createElement(K.a,{className:"task-title mb-0 pb-0"},"Complete your Parkinson\u2019s Test")),l.a.createElement(N.a,{sm:"2"},l.a.createElement(Z.a,null,l.a.createElement("small",{class:"text-muted"},"Reminder")))),l.a.createElement(y.a,null,l.a.createElement(N.a,null,l.a.createElement("small",{class:"text-muted"},"Due date: ",c," "))),l.a.createElement("div",{className:"d-flex justify-content-between"},l.a.createElement("div",{className:"d-flex align-items-center"},l.a.createElement("span",{className:"avatar avatar-sm rounded-circle"},l.a.createElement("img",{alt:"...",src:t(38)})),l.a.createElement("small",{class:"text-muted ml-2"},"Dr. Drew Gallardo")),l.a.createElement(Q.a,{id:"task-btn",color:"success"},"Complete")))));r.push(o)}return r},r.spiralTestFinished=function(e){r.setState({isFinished:"Complete",toDoMessage:"You have completed all your tests today!",spiralRes:e});var a=document.getElementById("task-btn");a.style.backgroundColor="#2dce89",a.style.borderColor="#2dce89"},r.updateData=function(e){var a=0,t=[];(t=e>0?[a=(r.state.data.datasets[0].data[0]+e)/2,100-a]:[100-(a=(r.state.data.datasets[0].data[1]+-1*e)/2),a])[0]=Math.round(t[0]*Math.pow(10,2))/Math.pow(10,2),t[1]=Math.round(t[1]*Math.pow(10,2))/Math.pow(10,2);var n={datasets:[{data:t,backgroundColor:te}],labels:ne};r.setState({data:n})},r.state={activeNav:1,chartExample1Data:"data1",isFinished:"Not Done",toDoMessage:"No data collected today, press the button below to get started.",data:{datasets:[{data:ae,backgroundColor:te}],labels:ne}},window.Chart&&Object(_.parseOptions)(D.a,Object(_.chartOptions)()),r}return Object(i.a)(n,[{key:"render",value:function(){var e=this;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"main-content"},l.a.createElement(V,null),l.a.createElement(f.a,{className:"pb-4 pt-5 pt-md-6",fluid:!0},l.a.createElement(y.a,null,l.a.createElement(N.a,{className:"mb-5 mb-xl-0",xl:"7"},l.a.createElement(Y.a,{className:"shadow-lg"},l.a.createElement(X.a,null,l.a.createElement("h6",{className:"text-uppercase text-light"},"2 out of 7 tasks completed this week"),l.a.createElement("div",null,l.a.createElement($.a,{max:"100",value:"28.5",barClassName:"bg-gradient-success"})),l.a.createElement(y.a,null,l.a.createElement(N.a,{className:"date mb-4"},T()().format("dddd, MMMM Do"))),l.a.createElement(y.a,{className:"d-flex justify-content-between"},this.getCurrentWeek())),l.a.createElement(ee.a,null,l.a.createElement(y.a,{className:"w-100 mx-auto"},l.a.createElement(N.a,{className:"px-0"},l.a.createElement(Y.a,{className:"shadow-lg p-3 mb-4 bg-white rounded task"},l.a.createElement(y.a,{className:"d-flex justify-content-between"},l.a.createElement(N.a,{sm:"8"},l.a.createElement(K.a,{className:"task-title mb-0 pb-0"},"Complete your Parkinson\u2019s Test")),l.a.createElement(N.a,{sm:"2"},l.a.createElement(Z.a,null,l.a.createElement("small",{class:"text-muted"},"Reminder")))),l.a.createElement(y.a,null,l.a.createElement(N.a,null,l.a.createElement("small",{class:"text-muted"},"Due date: ",T()().format("LL")," "))),l.a.createElement("div",{className:"d-flex justify-content-between"},l.a.createElement("div",{className:"d-flex align-items-center"},l.a.createElement("span",{className:"avatar avatar-sm rounded-circle"},l.a.createElement("img",{alt:"...",src:t(38)})),l.a.createElement("small",{class:"text-muted ml-2"},"Dr. Drew Gallardo")),l.a.createElement(Q.a,{id:"task-btn",color:"primary"},this.state.isFinished))))),l.a.createElement(y.a,{className:"w-100 mx-auto"},l.a.createElement(N.a,{className:"px-0"},l.a.createElement(Y.a,{className:"shadow-lg p-3 bg-white rounded task mb-4"},l.a.createElement(y.a,{className:"d-flex justify-content-between"},l.a.createElement(N.a,{sm:"8"},l.a.createElement(K.a,{className:"task-title mb-0 pb-0"},"Take Prescription")),l.a.createElement(N.a,{sm:"2"},l.a.createElement(Z.a,null,l.a.createElement("small",{class:"text-muted"},"Reminder")))),l.a.createElement(y.a,null,l.a.createElement(N.a,null,l.a.createElement("small",{class:"text-muted"},"Due date: ",T()().format("LL")))),l.a.createElement("div",{className:"d-flex justify-content-between"},l.a.createElement("div",{className:"d-flex align-items-center"},l.a.createElement("span",{className:"avatar avatar-sm rounded-circle"},l.a.createElement("img",{alt:"...",src:t(38)})),l.a.createElement("small",{class:"text-muted ml-2"},"Dr.  Drew Gallardo")),l.a.createElement(Q.a,{color:"primary"},"Not Done"))))),l.a.createElement(y.a,{className:"w-100 mx-auto"},l.a.createElement(N.a,{className:"px-0"},l.a.createElement(Y.a,{className:"shadow-lg p-3 bg-white rounded task mb-4"},l.a.createElement(y.a,{className:"d-flex justify-content-between"},l.a.createElement(N.a,{sm:"8"},l.a.createElement(K.a,{className:"task-title mb-0 pb-0"},"Complete your Parkinson\u2019s Test")),l.a.createElement(N.a,{sm:"2"},l.a.createElement(Z.a,null,l.a.createElement("small",{class:"text-muted"},"Reminder")))),l.a.createElement(y.a,null,l.a.createElement(N.a,null,l.a.createElement("small",{class:"text-muted"},"Due date: ",T()().subtract(1,"days").format("LL")))),l.a.createElement("div",{className:"d-flex justify-content-between"},l.a.createElement("div",{className:"d-flex align-items-center"},l.a.createElement("span",{className:"avatar avatar-sm rounded-circle"},l.a.createElement("img",{alt:"...",src:t(38)})),l.a.createElement("small",{class:"text-muted ml-2"},"Dr. Drew Gallardo")),l.a.createElement(Q.a,{color:"success"},"Complete"))))),l.a.createElement(y.a,null,l.a.createElement(N.a,null,l.a.createElement("div",{className:"mx-auto day dayActive"},"Show More")))))),l.a.createElement(N.a,{xl:"5"},l.a.createElement(y.a,null,l.a.createElement(N.a,{xs:"12",className:"pb-4"},l.a.createElement(Y.a,{className:"shadow-lg date"},l.a.createElement(X.a,null," Daily Message"),l.a.createElement(ee.a,null,l.a.createElement(y.a,null,l.a.createElement(N.a,{xs:"6"},l.a.createElement(F,{data:this.state.data})),l.a.createElement(N.a,{xs:"6"},this.state.toDoMessage)),l.a.createElement("div",{className:"d-flex justify-content-between"},l.a.createElement("div",null),l.a.createElement(I,{buttonLabel:"Not Done",callback:this.spiralTestFinished,updateDataCallback:this.updateData})," ")))),l.a.createElement(N.a,{xs:"12",className:"pt-1"},l.a.createElement(Y.a,{className:"shadow-lg"},l.a.createElement(X.a,{className:"bg-transparent"},l.a.createElement(y.a,{className:"align-items-center"},l.a.createElement("div",{className:"col"},l.a.createElement("h6",{className:"text-uppercase text-light ls-1 mb-1"},"Overview"),l.a.createElement("h2",{className:"mb-0"},"Progress Tracking")),l.a.createElement("div",{className:"col"},l.a.createElement(k.a,{className:"justify-content-end",pills:!0},l.a.createElement(E.a,null,l.a.createElement(h.a,{className:C()("py-2 px-3",{active:1===this.state.activeNav}),href:"#pablo",onClick:function(a){return e.toggleNavs(a,1)}},l.a.createElement("span",{className:"d-none d-md-block"},"Month"),l.a.createElement("span",{className:"d-md-none"},"M"))),l.a.createElement(E.a,null,l.a.createElement(h.a,{className:C()("py-2 px-3",{active:2===this.state.activeNav}),"data-toggle":"tab",href:"#pablo",onClick:function(a){return e.toggleNavs(a,2)}},l.a.createElement("span",{className:"d-none d-md-block"},"Week"),l.a.createElement("span",{className:"d-md-none"},"W"))))))),l.a.createElement(ee.a,null,l.a.createElement("div",{className:"chart"},l.a.createElement(S.c,{data:_.chartExample1[this.state.chartExample1Data],options:_.chartExample1.options,getDatasetAtEvent:function(e){return console.log(e)}})))))))))))}}]),n}(l.a.Component),re=t(259),se=function(e){Object(m.a)(n,e);var a=Object(d.a)(n);function n(){return Object(o.a)(this,n),a.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"main-content"},l.a.createElement(V,null),l.a.createElement(f.a,{className:"pb-4 pt-5 pt-md-6",fluid:!0},l.a.createElement(N.a,null,l.a.createElement(Y.a,{className:"shadow-lg"},l.a.createElement(y.a,{className:"w-100 mx-auto"},l.a.createElement("section",{id:"about"},l.a.createElement("div",null,l.a.createElement("h4",null,"About Us"),l.a.createElement("span",{class:"subhead"},"Our Story"),l.a.createElement("p",{id:"about-txt"},"TremorVision started off as a hackathon project in October 2019, and the idea stemmed from our passion about utilizing technology to tackle problems in health; creating something simple yet impactful. Parkinson\u2019s Disease (PD) is the second most common age-related neurodegenerative disorder and is a multifaceted disease with a variety of symptoms that progressively worsen with time. Although there is no cure, treatment can be effective if PD is caught early enough. We found that there is no standardized way of evaluating the spiral test despite it being one of the most commonly conducted tests to detect early-onset PD and track its progression."),l.a.createElement("p",null),l.a.createElement("span",{class:"subhead"},"Why TremorVision"),l.a.createElement("p",{id:"about-txt"},"Using TremorVision, subtle tremors can be detected earlier. Giving patients a head start in their fight against PD. Our tool empowers users to gain a holistic view of their health as it evolves over time, contributing to clinical decision support. Our platform connects patients and physicians remotely, reducing travel burden and increasing access to quality care. The data collected enables researchers and physicians to gain new insights on the global burden of this mysterious disease.")))),l.a.createElement(ee.a,null,l.a.createElement("div",null,l.a.createElement("span",{class:"subhead"},"Our Team")),l.a.createElement(y.a,{className:"w-100 mx-auto"},l.a.createElement(N.a,{className:"px-0"},l.a.createElement(Y.a,{class:"card",style:{width:"15rem"}},l.a.createElement("a",{href:"https://www.linkedin.com/in/brandon-hong-591734128/"},l.a.createElement(re.a,{alt:"Brandon Hong",src:t(234),top:!0})),l.a.createElement(ee.a,null,l.a.createElement(K.a,null,"Brandon Hong"),l.a.createElement(Z.a,null,l.a.createElement("a",{href:"https://www.linkedin.com/in/brandon-hong-591734128/"},l.a.createElement("i",{class:"fab fa-linkedin fa-2x"})))))),l.a.createElement(N.a,{className:"px-0"},l.a.createElement(Y.a,{style:{width:"15rem"}},l.a.createElement(re.a,{alt:"Drew Gallardo",src:t(38),top:!0}),l.a.createElement(ee.a,null,l.a.createElement(K.a,null,"Drew Gallardo"),l.a.createElement(Z.a,null,l.a.createElement("a",{href:"https://www.linkedin.com/in/drew-gallardo/"},l.a.createElement("i",{class:"fab fa-linkedin fa-2x"})))))),l.a.createElement(N.a,{className:"px-0"},l.a.createElement(Y.a,{style:{width:"15rem"}},l.a.createElement(re.a,{alt:"Janae Chan",src:t(235),top:!0}),l.a.createElement(ee.a,null,l.a.createElement(K.a,null,"Janae Chan"),l.a.createElement(Z.a,null,l.a.createElement("a",{href:"https://www.linkedin.com/in/janaechan/"},l.a.createElement("i",{class:"fab fa-linkedin fa-2x"})))))),l.a.createElement(N.a,{className:"px-0"},l.a.createElement(Y.a,{style:{width:"15rem"}},l.a.createElement(re.a,{alt:"Robert Minneker",src:t(236),top:!0}),l.a.createElement(ee.a,null,l.a.createElement(K.a,null,"Robert Minneker"),l.a.createElement(Z.a,null,l.a.createElement("a",{href:"https://www.linkedin.com/in/minneker/"},l.a.createElement("i",{class:"fab fa-linkedin fa-2x"})))))))))))))}}]),n}(l.a.Component),ce=function(e){Object(m.a)(t,e);var a=Object(d.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"componentDidMount",value:function(){}},{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("header",null,l.a.createElement(x,null),l.a.createElement(u.d,null,l.a.createElement(u.b,{exact:!0,path:"/app",component:le}),l.a.createElement(u.b,{exact:!0,path:"/app/dashboard",component:le}),l.a.createElement(u.b,{exact:!0,path:"/app/history",component:le}),l.a.createElement(u.b,{exact:!0,path:"/app/messages",component:le}),l.a.createElement(u.b,{exact:!0,path:"/app/about",component:se}),"} />",l.a.createElement(u.a,{from:"/",to:"/app/dashboard"}))),l.a.createElement("main",null))}}]),t}(n.Component);s.a.render(l.a.createElement(c.a,null,l.a.createElement(ce,null)),document.getElementById("root"))},38:function(e,a,t){e.exports=t.p+"static/media/geruh.7be79e97.jpeg"},39:function(e,a,t){var n=t(23);n.elements.Rectangle.prototype.draw=function(){var e,a,t,n,l,r,s,c=this._chart.ctx,o=this._view,i=o.borderWidth;if(o.horizontal?(e=o.base,a=o.x,t=o.y-o.height/2,n=o.y+o.height/2,l=a>e?1:-1,r=1,s=o.borderSkipped||"left"):(e=o.x-o.width/2,a=o.x+o.width/2,t=o.y,l=1,r=(n=o.base)>t?1:-1,s=o.borderSkipped||"bottom"),i){var m=Math.min(Math.abs(e-a),Math.abs(t-n)),d=(i=i>m?m:i)/2,u=e+("left"!==s?d*l:0),p=a+("right"!==s?-d*l:0),E=t+("top"!==s?d*r:0),h=n+("bottom"!==s?-d*r:0);u!==p&&(t=E,n=h),E!==h&&(e=u,a=p)}c.beginPath(),c.fillStyle=o.backgroundColor,c.strokeStyle=o.borderColor,c.lineWidth=i;var b=[[e,n],[e,t],[a,t],[a,n]],f=["bottom","left","top","right"].indexOf(s,0);function g(e){return b[(f+e)%4]}-1===f&&(f=0);var v=g(0);c.moveTo(v[0],v[1]);for(var y=1;y<4;y++){v=g(y);var N=y+1;4===N&&(N=0);var k=b[2][0]-b[1][0],x=b[0][1]-b[1][1],w=b[1][0],C=b[1][1],O=6;O>x/2&&(O=x/2),O>k/2&&(O=k/2),c.moveTo(w+O,C),c.lineTo(w+k-O,C),c.quadraticCurveTo(w+k,C,w+k,C+O),c.lineTo(w+k,C+x-O),c.quadraticCurveTo(w+k,C+x,w+k-O,C+x),c.lineTo(w+O,C+x),c.quadraticCurveTo(w,C+x,w,C+x-O),c.lineTo(w,C+O),c.quadraticCurveTo(w,C,w+O,C)}c.fill(),i&&c.stroke()};var l="Open Sans",r={100:"#f6f9fc",200:"#e9ecef",300:"#dee2e6",400:"#ced4da",500:"#adb5bd",600:"#8898aa",700:"#525f7f",800:"#32325d",900:"#212529"},s={default:"#172b4d",primary:"#5e72e4",secondary:"#f4f5f7",info:"#11cdef",success:"#2dce89",danger:"#f5365c",warning:"#fb6340"},c="#FFFFFF",o="transparent";var i={options:{scales:{yAxes:[{gridLines:{color:r[900],zeroLineColor:r[900]},ticks:{callback:function(e){if(!(e%20))return e}}}]},tooltips:{callbacks:{label:function(e,a){var t=a.datasets[e.datasetIndex].label||"",n=e.yLabel,l="";return a.datasets.length>1&&(l+=t),l+=" "+n+"% avg"}}}},data1:function(e){return{labels:["Oct","Nov","Dec","Jan","Feb","Mar","Apr","May"],datasets:[{label:"Performance",data:[80,82,86,89,90,86,90,90,91]}]}},data2:function(e){return{labels:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],datasets:[{label:"Performance",data:[80,87,86,82,83,84,87]}]}}};e.exports={chartOptions:function(){var e={defaults:{global:{responsive:!0,maintainAspectRatio:!1,defaultColor:r[600],defaultFontColor:r[600],defaultFontFamily:l,defaultFontSize:13,layout:{padding:0},legend:{display:!1,position:"bottom",labels:{usePointStyle:!0,padding:16}},elements:{point:{radius:0,backgroundColor:s.primary},line:{tension:.4,borderWidth:4,borderColor:s.primary,backgroundColor:o,borderCapStyle:"rounded"},rectangle:{backgroundColor:s.warning},arc:{backgroundColor:s.primary,borderColor:c,borderWidth:4}},tooltips:{enabled:!0,mode:"index",intersect:!1}},doughnut:{cutoutPercentage:83,legendCallback:function(e){var a=e.data,t="";return a.labels.forEach((function(e,n){var l=a.datasets[0].backgroundColor[n];t+='<span class="chart-legend-item">',t+='<i class="chart-legend-indicator" style="background-color: '+l+'"></i>',t+=e,t+="</span>"})),t}}}};return n.scaleService.updateScaleDefaults("linear",{gridLines:{borderDash:[2],borderDashOffset:[2],color:r[300],drawBorder:!1,drawTicks:!1,lineWidth:.5,zeroLineWidth:0,zeroLineColor:r[300],zeroLineBorderDash:[2],zeroLineBorderDashOffset:[2]},ticks:{beginAtZero:!0,padding:10,callback:function(e){if(!(e%10))return e}}}),n.scaleService.updateScaleDefaults("category",{gridLines:{drawBorder:!1,drawOnChartArea:!1,drawTicks:!1},ticks:{padding:20}}),e},parseOptions:function e(a,t){for(var n in t)"object"!==typeof t[n]?a[n]=t[n]:e(a[n],t[n])},chartExample1:i,chartExample2:{options:{scales:{yAxes:[{ticks:{callback:function(e){if(!(e%10))return e}}}]},tooltips:{callbacks:{label:function(e,a){var t=a.datasets[e.datasetIndex].label||"",n=e.yLabel,l="";return a.datasets.length>1&&(l+=t),l+=n}}}},data:{labels:["Jul","Aug","Sep","Oct","Nov","Dec"],datasets:[{label:"Sales",data:[25,20,30,22,17,29],maxBarThickness:10}]}}}},65:function(e,a,t){},67:function(e,a,t){},68:function(e,a,t){}},[[109,1,2]]]);
//# sourceMappingURL=main.4e2213de.chunk.js.map