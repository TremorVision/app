/*! For license information please see main.0ae093e5.chunk.js.LICENSE.txt */
(this["webpackJsonpargon-dashboard-react"]=this["webpackJsonpargon-dashboard-react"]||[]).push([[0],{197:function(e,a,t){e.exports=t.p+"static/media/github.4ffd4fe7.svg"},198:function(e,a,t){e.exports=t.p+"static/media/google.87be59a1.svg"},199:function(e,a,t){e.exports=t.p+"static/media/bootstrap.ab904daa.jpg"},200:function(e,a,t){e.exports=t.p+"static/media/angular.368685db.jpg"},201:function(e,a,t){e.exports=t.p+"static/media/sketch.e7c82e5c.jpg"},202:function(e,a,t){e.exports=t.p+"static/media/react.c4eb3d0b.jpg"},203:function(e,a,t){e.exports=t.p+"static/media/vue.9378e368.jpg"},218:function(e,a,t){e.exports=t(463)},223:function(e,a,t){},225:function(e,a,t){},226:function(e,a,t){},233:function(e,a,t){e.exports=t.p+"static/media/janae.196d2724.png"},29:function(e,a,t){e.exports=t.p+"static/media/team-4-800x800.23007132.jpg"},338:function(e,a,t){e.exports=t.p+"static/media/brandonhong.22d0b90d.jpeg"},339:function(e,a,t){e.exports=t.p+"static/media/janaechan.1eafc3ac.png"},340:function(e,a,t){e.exports=t.p+"static/media/robert.efd8082b.jpg"},341:function(e,a,t){e.exports=t.p+"static/media/profile-cover.e2582654.jpg"},36:function(e,a,t){e.exports=t.p+"static/media/team-1-800x800.53033970.jpg"},37:function(e,a,t){e.exports=t.p+"static/media/team-2-800x800.dcfcf3b7.jpg"},38:function(e,a,t){e.exports=t.p+"static/media/team-3-800x800.497bb359.jpg"},461:function(e,a,t){e.exports=t.p+"static/media/argon-react-white.275a2629.png"},462:function(e,a,t){e.exports=t.p+"static/media/argon-react.f38ddea9.png"},463:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(33),s=t.n(r),c=t(13),o=t(47),i=(t(223),t(224),t(225),t(226),t(9)),m=t(10),u=t(12),d=t(11),p=t(465),f=t(466),h=t(467),E=t(500),b=t(502),g=t(468),v=t(469),y=t(470),x=function(e){Object(u.a)(n,e);var a=Object(d.a)(n);function n(){return Object(i.a)(this,n),a.apply(this,arguments)}return Object(m.a)(n,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(p.a,{className:"navbar-top",expand:"md",id:"navbar-main"},l.a.createElement(f.a,{fluid:!0},l.a.createElement(c.b,{className:"h4 mb-0 text-uppercase d-none d-lg-inline-block",to:"/"}),l.a.createElement(h.a,{className:"align-items-center d-none d-md-flex",navbar:!0},l.a.createElement(E.a,{nav:!0},l.a.createElement(b.a,{className:"pr-0",nav:!0},l.a.createElement(g.a,{className:"align-items-center"},l.a.createElement("span",{className:"avatar avatar-sm rounded-circle"},l.a.createElement("img",{alt:"...",src:t(233)})),l.a.createElement(g.a,{className:"ml-2 d-none d-lg-block"},l.a.createElement("span",{className:"mb-0 text-sm font-weight-bold .font-darker"},"Janae Chan ")))),l.a.createElement(v.a,{className:"dropdown-menu-arrow",right:!0},l.a.createElement(y.a,{className:"noti-title",header:!0,tag:"div"},l.a.createElement("h6",{className:"text-overflow m-0"},"Welcome!")),l.a.createElement(y.a,{to:"/app/user-profile",tag:c.b},l.a.createElement("i",{className:"ni ni-single-02"}),l.a.createElement("span",null,"My profile")),l.a.createElement(y.a,{to:"/app/user-profile",tag:c.b},l.a.createElement("i",{className:"ni ni-settings-gear-65"}),l.a.createElement("span",null,"Settings")),l.a.createElement(y.a,{to:"/app/user-profile",tag:c.b},l.a.createElement("i",{className:"ni ni-support-16"}),l.a.createElement("span",null,"Support")),l.a.createElement(y.a,{divider:!0}),l.a.createElement(y.a,{href:"#pablo",onClick:function(e){return e.preventDefault()}},l.a.createElement("i",{className:"ni ni-user-run"}),l.a.createElement("span",null,"Logout"))))))))}}]),n}(l.a.Component),N=t(471),k=t(472),w=t(473),C=t(474),j=(l.a.Component,t(62)),O=t(475),T=t(209),D=function(e){Object(u.a)(n,e);var a=Object(d.a)(n);function n(e){var t;return Object(i.a)(this,n),(t=a.call(this,e)).state={collapseOpen:!1},t.toggleCollapse=function(){t.setState({collapseOpen:!t.state.collapseOpen})},t.closeCollapse=function(){t.setState({collapseOpen:!1})},t.createLinks=function(e){return e.map((function(e,a){return l.a.createElement(w.a,{key:a},l.a.createElement(C.a,{to:e.layout+e.path,tag:c.c,onClick:t.closeCollapse,activeClassName:"active"},l.a.createElement("i",{className:e.icon}),e.name))}))},t.createAboutMeLink=function(e){return e.map((function(e,a){return l.a.createElement(w.a,{key:a},l.a.createElement(C.a,{to:e.layout+e.path,tag:c.c,onClick:t.closeCollapse,activeClassName:"active"},e.name))}))},t.activeRoute.bind(Object(j.a)(t)),t}return Object(m.a)(n,[{key:"activeRoute",value:function(e){return this.props.location.pathname.indexOf(e)>-1?"active":""}},{key:"render",value:function(){var e=this.props,a=(e.bgColor,e.routes),n=e.aboutMe,r=e.logo;return r&&r.innerLink?{to:r.innerLink,tag:c.b}:r&&r.outterLink&&{href:r.outterLink,target:"_blank"},l.a.createElement(p.a,{className:"navbar-vertical fixed-left navbar-light bg-white sidebar",expand:"md",id:"sidenav-main"},l.a.createElement(f.a,{fluid:!0},l.a.createElement("button",{className:"navbar-toggler",type:"button",onClick:this.toggleCollapse},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement(O.a,{className:"pt-0 logo h1"},"TremorVision"),l.a.createElement(h.a,{className:"align-items-center d-md-none"},l.a.createElement(E.a,{nav:!0},l.a.createElement(b.a,{nav:!0},l.a.createElement(g.a,{className:"align-items-center"},l.a.createElement("span",{className:"avatar avatar-sm rounded-circle"},l.a.createElement("img",{alt:"...",src:t(29)})))),l.a.createElement(v.a,{className:"dropdown-menu-arrow",right:!0},l.a.createElement(y.a,{className:"noti-title",header:!0,tag:"div"},l.a.createElement("h6",{className:"text-overflow m-0"},"Welcome!")),l.a.createElement(y.a,{to:"/app/user-profile",tag:c.b},l.a.createElement("i",{className:"ni ni-single-02"}),l.a.createElement("span",null,"My profile")),l.a.createElement(y.a,{to:"/app/user-profile",tag:c.b},l.a.createElement("i",{className:"ni ni-settings-gear-65"}),l.a.createElement("span",null,"Settings")),l.a.createElement(y.a,{to:"/app/user-profile",tag:c.b},l.a.createElement("i",{className:"ni ni-support-16"}),l.a.createElement("span",null,"Support")),l.a.createElement(y.a,{divider:!0}),l.a.createElement(y.a,{href:"#pablo",onClick:function(e){return e.preventDefault()}},l.a.createElement("i",{className:"ni ni-user-run"}),l.a.createElement("span",null,"Logout"))))),l.a.createElement(T.a,{navbar:!0,isOpen:this.state.collapseOpen},l.a.createElement("div",{className:"navbar-collapse-header d-md-none"},l.a.createElement(N.a,null,r?l.a.createElement(k.a,{className:"collapse-brand",xs:"6"},"Navigation"):null,l.a.createElement(k.a,{className:"collapse-close",xs:"6"},l.a.createElement("button",{className:"navbar-toggler",type:"button",onClick:this.toggleCollapse},l.a.createElement("span",null),l.a.createElement("span",null))))),l.a.createElement(h.a,{navbar:!0},this.createLinks(a)),l.a.createElement("hr",{className:"my-4"}),l.a.createElement(h.a,{className:"mb-md-3",navbar:!0},this.createAboutMeLink(n),l.a.createElement(w.a,null,l.a.createElement(C.a,{href:"mailto:tremorvisionapp@gmail.com"},"Contact Us"))))))}}]),n}(l.a.Component);D.defaultProps={routes:[{}],aboutMe:[{}]};var M=D,S=t(5),L=t.n(S),F=t(40),P=t.n(F),R=t(53),A=t(34),B=t.n(A),W=R.a.controllers.doughnut.prototype.draw;R.a.helpers.extend(R.a.controllers.doughnut.prototype,{draw:function(){W.apply(this,arguments);var e=this.chart,a=e.chart.width;if(a>205)var t=((n=.8*e.chart.height)/50).toFixed(2);else{var n;t=((n=.6*e.chart.height)/50).toFixed(2)}var l=e.chart.ctx;l.font="bold "+t+"em poppins",l.textBaseline="middle";for(var r=0,s=0;s<e.config.data.datasets[0].data.length;s++)r+=e.config.data.datasets[0].data[s];var c=Math.round(e.config.data.datasets[0].data[0]/r*100).toString()+"%",o=Math.round((a-l.measureText(c).width)/2),i=.5*n;l.fillStyle="#2DCE89",l.fillText(c,o,i)}});var z={legend:{display:!0,position:"bottom",onClick:null},tooltips:{mode:"point"}},I=function(e){Object(u.a)(t,e);var a=Object(d.a)(t);function t(e){return Object(i.a)(this,t),a.call(this,e)}return Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(R.b,{data:this.props.data,options:z}))}}]),t}(l.a.Component),J=t(476),U=t(477),G=t(205),H=t(501),_=t(478),q=t(217),V=function(e){Object(u.a)(t,e);var a=Object(d.a)(t);function t(e){var n;return Object(i.a)(this,t),(n=a.call(this,e)).state={intructions:"Trace the entire spiral and press evaluate.",modal:!1,results:!1,resultText:"",percent:0},n.toggle=n.toggle.bind(Object(j.a)(n)),n}return Object(m.a)(t,[{key:"clearModal",value:function(){this.setState({results:!1,resultText:""})}},{key:"toggle",value:function(){this.setState({modal:!this.state.modal})}},{key:"makeblob",value:function(e){if(-1==e.indexOf(";base64,")){var a=(n=e.split(","))[0].split(":")[1],t=decodeURIComponent(n[1]);return new Blob([t],{type:a})}a=(n=e.split(";base64,"))[0].split(":")[1];for(var n,l=(t=window.atob(n[1])).length,r=new Uint8Array(l),s=0;s<l;++s)r[s]=t.charCodeAt(s);return new Blob([r],{type:a})}},{key:"populateResult",value:function(e,a){var t,n,r,s;"parkinson"===e.predictions[0].tagName?(t=e.predictions[0].probability,n=e.predictions[1].probability):(n=e.predictions[0].probability,t=e.predictions[1].probability),n<=t?(r=(100*t).toFixed(1),s=l.a.createElement("span",{className:"bg-danger"}," Parkinson's spirals "),this.setState({percent:-1*r})):(r=(100*n).toFixed(1),s=l.a.createElement("span",{className:"bg-info"},"healthy spirals"),this.setState({percent:1*r}));var c=l.a.createElement("div",null,"Our model shows that your spiral is ",r,"% similar to known ",s);this.setState({results:!0,resultText:c,spiralRes:a});var o=document.getElementById("btn-download");o.addEventListener("click",(function(e){o.href=a}))}},{key:"pingPlatform",value:function(e,a){var t=this;e.preventDefault();var n=this.makeblob(a);fetch("https://westus2.api.cognitive.microsoft.com/customvision/v3.0/Prediction/6fede207-de99-4fbe-8f04-44a2154495ad/classify/iterations/Iteration8/image",{headers:{"Prediction-Key":"78a3f4d1ae95492680685c14da50480d","Content-Type":"application/octet-stream","Prediction-key":"78a3f4d1ae95492680685c14da50480d"},method:"POST",body:n}).then((function(e){return e.json()})).then((function(e){t.populateResult(e,a)})).catch((function(e){console.log(e)}))}},{key:"finishTest",value:function(){this.setState({results:!1,resultText:"",modal:!1});var e=document.getElementById("test-btn");e.innerHTML="Complete",e.style.backgroundColor="#2dce89",e.style.borderColor="#2dce89",this.props.callback(this.state.percent),this.props.updateDataCallback(this.state.percent)}},{key:"isCanvasBlank",value:function(e,a,t){if(0==JSON.parse(a).lines.length){this.setState({intructions:"Please trace the entire spiral before evaluating."});var n=document.getElementById("help-txt");n.classList.add("fading"),setTimeout((function(){n.classList.remove("fading")}),1e3)}else this.pingPlatform(e,t)}},{key:"render",value:function(){var e,a=this;return e=!0===this.state.results?l.a.createElement(l.a.Fragment,null,l.a.createElement(J.a,null,l.a.createElement("h3",null,this.state.resultText),l.a.createElement("p",{className:"text-muted"},"Click finish for your results to be logged and sent to your doctor. You may also personally download your image or try again."),l.a.createElement("img",{src:this.state.spiralRes,className:"img-thumbnail mx-auto small-img"})),l.a.createElement(U.a,null,l.a.createElement(G.a,{color:"secondary",onClick:function(){a.clearModal()}},"Retry")," ",l.a.createElement(G.a,{color:"primary",id:"btn-download",href:"#",download:B()().format(),onClick:function(){a.downloadSpiral()}},"Download"),l.a.createElement(G.a,{color:"primary",onClick:function(){a.finishTest()}},"Finish"))):l.a.createElement(l.a.Fragment,null,l.a.createElement(J.a,{className:"text-center"},l.a.createElement("p",{id:"help-txt",className:"text-muted"},this.state.intructions),l.a.createElement("div",{className:"test mt-2"},l.a.createElement(q.a,{className:"mx-auto sig-canvas",lazyRadius:0,brushRadius:2,brushColor:"#222222",hideGrid:!0,hideInterface:!0,canvasHeight:"100%",canvasWidth:"100%",ref:function(e){return a.saveableCanvas=e}}))),l.a.createElement(U.a,null,l.a.createElement(G.a,{color:"secondary",onClick:function(){a.saveableCanvas.clear()}},"Clear")," ",l.a.createElement(G.a,{color:"primary",onClick:function(e){a.isCanvasBlank(e,a.saveableCanvas.getSaveData(),a.saveableCanvas.canvasContainer.children[1].toDataURL())}},"Evaluate"))),l.a.createElement("div",null,l.a.createElement(G.a,{color:"primary",size:"lg",id:"test-btn",className:"btn-msg",onClick:this.toggle},this.props.buttonLabel),l.a.createElement(H.a,{isOpen:this.state.modal,toggle:this.toggle,className:this.props.className},l.a.createElement(_.a,{toggle:this.toggle,className:"modal-header"},l.a.createElement("h3",null,"Spiral Drawing Test")),e))}}]),t}(l.a.Component),Y=t(479),Z=t(480),K=t(481),Q=t(482),X=t(483),$=t(484),ee=t(485),ae=t(71),te=function(e){Object(u.a)(t,e);var a=Object(d.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null)}}]),t}(l.a.Component),ne=function(e){Object(u.a)(n,e);var a=Object(d.a)(n);function n(e){var t;return Object(i.a)(this,n),(t=a.call(this,e)).toggleNavs=function(e,a){e.preventDefault(),t.state.activeNav!=a&&t.setState({activeNav:a,chartExample1Data:"data1"===t.state.chartExample1Data?"data2":"data1"})},t.getCurrentWeek=function(e){for(var a=B()(),t=a.clone().startOf("week"),n=[],r=0;r<=6;r++){var s=B()(t).add(r,"days").format("dddd").substring(0,3),c=B()(t).add(r,"days").format("D"),o=l.a.createElement(k.a,null,l.a.createElement("div",{className:"day ".concat(r===a.day()?"dayActive":"")},l.a.createElement(N.a,null,l.a.createElement(k.a,null,s)),l.a.createElement(N.a,null,l.a.createElement(k.a,null,c))));n.push(o)}return n},t.spiralTestFinished=function(e){t.setState({isFinished:"Complete",toDoMessage:"You have completed all your tests today!",spiralRes:e});var a=document.getElementById("task-btn");a.style.backgroundColor="#2dce89",a.style.borderColor="#2dce89"},t.updateData=function(e){console.log(e),console.log(t.state.data.datasets[0].data[0]),console.log(t.state.data.datasets[0].data[1]);var a=0,n=[];n=e>0?[a=(t.state.data.datasets[0].data[0]+e)/2,100-a]:[100-(a=(t.state.data.datasets[0].data[1]+-1*e)/2),a],console.log(n),n[0]=Math.round(n[0]*Math.pow(10,2))/Math.pow(10,2),n[1]=Math.round(n[1]*Math.pow(10,2))/Math.pow(10,2),console.log(n);var l={datasets:[{data:n,backgroundColor:["#2DCE89","#11CDEF"]}],labels:["Healthy","Parkinson's"]};t.setState({data:l})},t.state={activeNav:1,chartExample1Data:"data1",isFinished:"Not Done",toDoMessage:"No data collected today, press the button below to get started.",data:{datasets:[{data:[82,18],backgroundColor:["#2DCE89","#11CDEF"]}],labels:["Healthy","Parkinson's"]}},window.Chart&&Object(ae.parseOptions)(P.a,Object(ae.chartOptions)()),t}return Object(m.a)(n,[{key:"render",value:function(){var e=this;return l.a.createElement(l.a.Fragment,null,l.a.createElement(f.a,{className:"pb-4 pt-5 pt-md-6",fluid:!0},l.a.createElement(N.a,null,l.a.createElement(k.a,{className:"mb-5 mb-xl-0",xl:"7"},l.a.createElement(Y.a,{className:"shadow-lg"},l.a.createElement(Z.a,null,l.a.createElement("h6",{className:"text-uppercase text-light"},"2 out of 7 tasks completed this week"),l.a.createElement("div",null,l.a.createElement(K.a,{max:"100",value:"28.5",barClassName:"bg-gradient-success"})),l.a.createElement(N.a,null,l.a.createElement(k.a,{className:"date mb-4"},B()().format("dddd, MMMM Do"))),l.a.createElement(N.a,{className:"d-flex justify-content-between"},this.getCurrentWeek())),l.a.createElement(Q.a,null,l.a.createElement(N.a,{className:"w-100 mx-auto"},l.a.createElement(k.a,{className:"px-0"},l.a.createElement(Y.a,{className:"shadow-lg p-3 mb-4 bg-white rounded task"},l.a.createElement(N.a,{className:"d-flex justify-content-between"},l.a.createElement(k.a,{sm:"8"},l.a.createElement(X.a,{className:"task-title mb-0 pb-0"},"Complete your Parkinson\u2019s Test")),l.a.createElement(k.a,{sm:"2"},l.a.createElement($.a,null,l.a.createElement("small",{class:"text-muted"},"Reminder")))),l.a.createElement(N.a,null,l.a.createElement(k.a,null,l.a.createElement("small",{class:"text-muted"},"Due date: ",B()().format("LL")," "))),l.a.createElement("div",{className:"d-flex justify-content-between"},l.a.createElement("div",{className:"d-flex align-items-center"},l.a.createElement("span",{className:"avatar avatar-sm rounded-circle"},l.a.createElement("img",{alt:"...",src:t(85)})),l.a.createElement("small",{class:"text-muted ml-2"},"Dr. Drew Gallardo")),l.a.createElement(ee.a,{id:"task-btn",color:"primary"},this.state.isFinished))))),l.a.createElement(N.a,{className:"w-100 mx-auto"},l.a.createElement(k.a,{className:"px-0"},l.a.createElement(Y.a,{className:"shadow-lg p-3 bg-white rounded task mb-4"},l.a.createElement(N.a,{className:"d-flex justify-content-between"},l.a.createElement(k.a,{sm:"8"},l.a.createElement(X.a,{className:"task-title mb-0 pb-0"},"Take Prescription")),l.a.createElement(k.a,{sm:"2"},l.a.createElement($.a,null,l.a.createElement("small",{class:"text-muted"},"Reminder")))),l.a.createElement(N.a,null,l.a.createElement(k.a,null,l.a.createElement("small",{class:"text-muted"},"Due date: ",B()().format("LL")))),l.a.createElement("div",{className:"d-flex justify-content-between"},l.a.createElement("div",{className:"d-flex align-items-center"},l.a.createElement("span",{className:"avatar avatar-sm rounded-circle"},l.a.createElement("img",{alt:"...",src:t(85)})),l.a.createElement("small",{class:"text-muted ml-2"},"Dr.  Drew Gallardo")),l.a.createElement(ee.a,{color:"primary"},"Not Done"))))),l.a.createElement(N.a,{className:"w-100 mx-auto"},l.a.createElement(k.a,{className:"px-0"},l.a.createElement(Y.a,{className:"shadow-lg p-3 bg-white rounded task mb-4"},l.a.createElement(N.a,{className:"d-flex justify-content-between"},l.a.createElement(k.a,{sm:"8"},l.a.createElement(X.a,{className:"task-title mb-0 pb-0"},"Complete your Parkinson\u2019s Test")),l.a.createElement(k.a,{sm:"2"},l.a.createElement($.a,null,l.a.createElement("small",{class:"text-muted"},"Reminder")))),l.a.createElement(N.a,null,l.a.createElement(k.a,null,l.a.createElement("small",{class:"text-muted"},"Due date: ",B()().subtract(1,"days").format("LL")))),l.a.createElement("div",{className:"d-flex justify-content-between"},l.a.createElement("div",{className:"d-flex align-items-center"},l.a.createElement("span",{className:"avatar avatar-sm rounded-circle"},l.a.createElement("img",{alt:"...",src:t(85)})),l.a.createElement("small",{class:"text-muted ml-2"},"Dr. Drew Gallardo")),l.a.createElement(ee.a,{color:"success"},"Complete"))))),l.a.createElement(N.a,null,l.a.createElement(k.a,null,l.a.createElement("div",{className:"mx-auto day dayActive"},"Show More")))))),l.a.createElement(k.a,{xl:"5"},l.a.createElement(N.a,null,l.a.createElement(k.a,{xs:"12",className:"pb-4"},l.a.createElement(Y.a,{className:"shadow-lg date"},l.a.createElement(Z.a,null," Daily Message"),l.a.createElement(Q.a,null,l.a.createElement(N.a,null,l.a.createElement(k.a,{xs:"6"},l.a.createElement(I,{data:this.state.data})),l.a.createElement(k.a,{xs:"6"},this.state.toDoMessage)),l.a.createElement("div",{className:"d-flex justify-content-between"},l.a.createElement("div",null),l.a.createElement(V,{buttonLabel:"Not Done",callback:this.spiralTestFinished,updateDataCallback:this.updateData})," ")))),l.a.createElement(k.a,{xs:"12",className:"pt-1"},l.a.createElement(Y.a,{className:"shadow-lg"},l.a.createElement(Z.a,{className:"bg-transparent"},l.a.createElement(N.a,{className:"align-items-center"},l.a.createElement("div",{className:"col"},l.a.createElement("h6",{className:"text-uppercase text-light ls-1 mb-1"},"Overview"),l.a.createElement("h2",{className:"mb-0"},"Progress Tracking")),l.a.createElement("div",{className:"col"},l.a.createElement(h.a,{className:"justify-content-end",pills:!0},l.a.createElement(w.a,null,l.a.createElement(C.a,{className:L()("py-2 px-3",{active:1===this.state.activeNav}),href:"#pablo",onClick:function(a){return e.toggleNavs(a,1)}},l.a.createElement("span",{className:"d-none d-md-block"},"Month"),l.a.createElement("span",{className:"d-md-none"},"M"))),l.a.createElement(w.a,null,l.a.createElement(C.a,{className:L()("py-2 px-3",{active:2===this.state.activeNav}),"data-toggle":"tab",href:"#pablo",onClick:function(a){return e.toggleNavs(a,2)}},l.a.createElement("span",{className:"d-none d-md-block"},"Week"),l.a.createElement("span",{className:"d-md-none"},"W"))))))),l.a.createElement(Q.a,null,l.a.createElement("div",{className:"chart"},l.a.createElement(R.c,{data:ae.chartExample1[this.state.chartExample1Data],options:ae.chartExample1.options,getDatasetAtEvent:function(e){return console.log(e)}}))))))))))}}]),n}(l.a.Component),le=t(486),re=function(e){Object(u.a)(n,e);var a=Object(d.a)(n);function n(){var e;Object(i.a)(this,n);for(var t=arguments.length,r=new Array(t),s=0;s<t;s++)r[s]=arguments[s];return(e=a.call.apply(a,[this].concat(r))).getRoutes=function(e){return e.map((function(e,a){return"/app"===e.layout?(console.log(e.layout+e.path),l.a.createElement(o.b,{path:e.layout+e.path,component:e.component,key:a})):null}))},e}return Object(m.a)(n,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(f.a,{className:"pb-4 pt-5 pt-md-6",fluid:!0},l.a.createElement(k.a,null,l.a.createElement(Y.a,{className:"shadow-lg"},l.a.createElement(N.a,{className:"w-100 mx-auto"},l.a.createElement("section",{id:"about"},l.a.createElement("div",null,l.a.createElement("h4",null,"About Us"),l.a.createElement("span",{class:"subhead"},"Our Story"),l.a.createElement("p",{id:"about-txt"},"TremorVision started off as a hackathon project in October 2019, and the idea stemmed from our passion about utilizing technology to tackle problems in health; creating something simple yet impactful. Parkinson\u2019s Disease (PD) is the second most common age-related neurodegenerative disorder and is a multifaceted disease with a variety of symptoms that progressively worsen with time. Although there is no cure, treatment can be effective if PD is caught early enough. We found that there is no standardized way of evaluating the spiral test despite it being one of the most commonly conducted tests to detect early-onset PD and track its progression."),l.a.createElement("p",null),l.a.createElement("span",{class:"subhead"},"Why TremorVision"),l.a.createElement("p",{id:"about-txt"},"Using TremorVision, subtle tremors can be detected earlier. Giving patients a head start in their fight against PD. Our tool empowers users to gain a holistic view of their health as it evolves over time, contributing to clinical decision support. Our platform connects patients and physicians remotely, reducing travel burden and increasing access to quality care. The data collected enables researchers and physicians to gain new insights on the global burden of this mysterious disease.")))),l.a.createElement(Q.a,null,l.a.createElement("div",null,l.a.createElement("span",{class:"subhead"},"Our Team")),l.a.createElement(N.a,{className:"w-100 mx-auto"},l.a.createElement(k.a,{className:"px-0"},l.a.createElement(Y.a,{class:"card",style:{width:"15rem"}},l.a.createElement("a",{href:"https://www.linkedin.com/in/brandon-hong-591734128/"},l.a.createElement(le.a,{alt:"Janae Chan",src:t(338),top:!0})),l.a.createElement(Q.a,null,l.a.createElement(X.a,null,"Brandon Hong"),l.a.createElement($.a,null,l.a.createElement("a",{href:"https://www.linkedin.com/in/brandon-hong-591734128/"},l.a.createElement("i",{class:"fab fa-linkedin fa-2x"})))))),l.a.createElement(k.a,{className:"px-0"},l.a.createElement(Y.a,{style:{width:"15rem"}},l.a.createElement(le.a,{alt:"Janae Chan",src:t(85),top:!0}),l.a.createElement(Q.a,null,l.a.createElement(X.a,null,"Drew Gallardo"),l.a.createElement($.a,null,l.a.createElement("a",{href:"https://www.linkedin.com/in/drew-gallardo/"},l.a.createElement("i",{class:"fab fa-linkedin fa-2x"})))))),l.a.createElement(k.a,{className:"px-0"},l.a.createElement(Y.a,{style:{width:"15rem"}},l.a.createElement(le.a,{alt:"Janae Chan",src:t(339),top:!0}),l.a.createElement(Q.a,null,l.a.createElement(X.a,null,"Janae Chan"),l.a.createElement($.a,null,l.a.createElement("a",{href:"https://www.linkedin.com/in/janaechan/"},l.a.createElement("i",{class:"fab fa-linkedin fa-2x"})))))),l.a.createElement(k.a,{className:"px-0"},l.a.createElement(Y.a,{style:{width:"15rem"}},l.a.createElement(le.a,{alt:"Janae Chan",src:t(340),top:!0}),l.a.createElement(Q.a,null,l.a.createElement(X.a,null,"Robert Minneker"),l.a.createElement($.a,null,l.a.createElement("a",{href:"https://www.linkedin.com/in/minneker/"},l.a.createElement("i",{class:"fab fa-linkedin fa-2x"}))))))))))))}}]),n}(l.a.Component),se=t(487),ce=t(488),oe=t(489),ie=function(e){Object(u.a)(n,e);var a=Object(d.a)(n);function n(){return Object(i.a)(this,n),a.apply(this,arguments)}return Object(m.a)(n,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"header pb-8 pt-5 pt-lg-8 d-flex align-items-center",style:{minHeight:"600px",backgroundImage:"url("+t(341)+")",backgroundSize:"cover",backgroundPosition:"center top"}},l.a.createElement("span",{className:"mask bg-gradient-default opacity-8"}),l.a.createElement(f.a,{className:"d-flex align-items-center",fluid:!0},l.a.createElement(N.a,null,l.a.createElement(k.a,{lg:"7",md:"10"},l.a.createElement("h1",{className:"display-2 text-white"},"Hello Jesse"),l.a.createElement("p",{className:"text-white mt-0 mb-5"},"This is your profile page. You can see the progress you've made with your work and manage your projects or assigned tasks"),l.a.createElement(G.a,{color:"info",href:"#pablo",onClick:function(e){return e.preventDefault()}},"Edit profile"))))))}}]),n}(l.a.Component),me=(l.a.Component,t(72)),ue=Object(me.withScriptjs)(Object(me.withGoogleMap)((function(e){return l.a.createElement(me.GoogleMap,{defaultZoom:12,defaultCenter:{lat:40.748817,lng:-73.985428},defaultOptions:{scrollwheel:!1,styles:[{featureType:"administrative",elementType:"labels.text.fill",stylers:[{color:"#444444"}]},{featureType:"landscape",elementType:"all",stylers:[{color:"#f2f2f2"}]},{featureType:"poi",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"road",elementType:"all",stylers:[{saturation:-100},{lightness:45}]},{featureType:"road.highway",elementType:"all",stylers:[{visibility:"simplified"}]},{featureType:"road.arterial",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"transit",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"water",elementType:"all",stylers:[{color:"#5e72e4"},{visibility:"on"}]}]}},l.a.createElement(me.Marker,{position:{lat:40.748817,lng:-73.985428}}))}))),de=(l.a.Component,t(490)),pe=t(491),fe=t(216),he=(l.a.Component,l.a.Component,t(492)),Ee=t(493),be=t(499),ge=t(494),ve=t(495),ye=t(496),xe=t(497),Ne=(l.a.Component,t(4)),ke=(l.a.Component,[{path:"/index",name:"Dashboard",icon:"ni ni-tv-2 text-primary",component:ne,layout:"/app"},{path:"/history",name:"History",icon:"ni ni-bullet-list-67 text-primary",component:ne,layout:"/app"},{path:"/messages",name:"Messages",icon:"ni ni-email-83 text-primary",component:ne,layout:"/app"}]),we=[{path:"/about",name:"About Us",icon:"fas fa-users text-primary",component:re,layout:"/app"}],Ce=function(e){Object(u.a)(t,e);var a=Object(d.a)(t);function t(){var e;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=a.call.apply(a,[this].concat(r))).getRoutes=function(e){return e.map((function(e,a){return"/app"===e.layout?(console.log(e.layout+e.path),l.a.createElement(o.b,{path:e.layout+e.path,component:e.component,key:a})):null}))},e.getAboutMeRoute=function(e){return e.map((function(e,a){return"/app"===e.layout?(console.log(e.layout+e.path),l.a.createElement(o.b,{path:e.layout+e.path,component:e.component,key:a})):null}))},e.getBrandText=function(a){for(var t=0;t<ke.length;t++)if(-1!==e.props.location.pathname.indexOf(ke[t].layout+ke[t].path))return ke[t].name;return"Brand"},e.getAboutMeBrandText=function(a){for(var t=0;t<we.length;t++)if(-1!==e.props.location.pathname.indexOf(we[t].layout+we[t].path))return we[t].name;return"Brand"},e}return Object(m.a)(t,[{key:"componentDidUpdate",value:function(e){document.documentElement.scrollTop=0,document.scrollingElement.scrollTop=0,this.refs.mainContent.scrollTop=0}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(M,Object.assign({},this.props,{routes:ke,aboutMe:we})),l.a.createElement("div",{className:"main-content",ref:"mainContent"},l.a.createElement(x,Object.assign({},this.props,{brandText:this.getBrandText(this.props.location.pathname)})),l.a.createElement(o.d,null,this.getRoutes(ke),this.getAboutMeRoute(we),l.a.createElement(o.a,{from:"*",to:"/app/index"}))))}}]),t}(l.a.Component),je=t(498),Oe=function(e){Object(u.a)(n,e);var a=Object(d.a)(n);function n(){return Object(i.a)(this,n),a.apply(this,arguments)}return Object(m.a)(n,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(p.a,{className:"navbar-top navbar-horizontal navbar-dark",expand:"md"},l.a.createElement(f.a,{className:"px-4"},l.a.createElement(O.a,{to:"/",tag:c.b},l.a.createElement("img",{alt:"...",src:t(461)})),l.a.createElement("button",{className:"navbar-toggler",id:"navbar-collapse-main"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement(je.a,{navbar:!0,toggler:"#navbar-collapse-main"},l.a.createElement("div",{className:"navbar-collapse-header d-md-none"},l.a.createElement(N.a,null,l.a.createElement(k.a,{className:"collapse-brand",xs:"6"},l.a.createElement(c.b,{to:"/"},l.a.createElement("img",{alt:"...",src:t(462)}))),l.a.createElement(k.a,{className:"collapse-close",xs:"6"},l.a.createElement("button",{className:"navbar-toggler",id:"navbar-collapse-main"},l.a.createElement("span",null),l.a.createElement("span",null))))),l.a.createElement(h.a,{className:"ml-auto",navbar:!0},l.a.createElement(w.a,null,l.a.createElement(C.a,{className:"nav-link-icon",to:"/",tag:c.b},l.a.createElement("i",{className:"ni ni-planet"}),l.a.createElement("span",{className:"nav-link-inner--text"},"Dashboard"))),l.a.createElement(w.a,null,l.a.createElement(C.a,{className:"nav-link-icon",to:"/auth/register",tag:c.b},l.a.createElement("i",{className:"ni ni-circle-08"}),l.a.createElement("span",{className:"nav-link-inner--text"},"Register"))),l.a.createElement(w.a,null,l.a.createElement(C.a,{className:"nav-link-icon",to:"/auth/login",tag:c.b},l.a.createElement("i",{className:"ni ni-key-25"}),l.a.createElement("span",{className:"nav-link-inner--text"},"Login"))),l.a.createElement(w.a,null,l.a.createElement(C.a,{className:"nav-link-icon",to:"/app/user-profile",tag:c.b},l.a.createElement("i",{className:"ni ni-single-02"}),l.a.createElement("span",{className:"nav-link-inner--text"},"Profile"))))))))}}]),n}(l.a.Component),Te=function(e){Object(u.a)(t,e);var a=Object(d.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("footer",{className:"py-5"},l.a.createElement(f.a,null,l.a.createElement(N.a,{className:"align-items-center justify-content-xl-between"},l.a.createElement(k.a,{xl:"6"},l.a.createElement("div",{className:"copyright text-center text-xl-left text-muted"},"\xa9 2018"," ",l.a.createElement("a",{className:"font-weight-bold ml-1",href:"https://www.creative-tim.com?ref=adr-auth-footer",target:"_blank"},"Creative Tim"))),l.a.createElement(k.a,{xl:"6"},l.a.createElement(h.a,{className:"nav-footer justify-content-center justify-content-xl-end"},l.a.createElement(w.a,null,l.a.createElement(C.a,{href:"https://www.creative-tim.com?ref=adr-auth-footer",target:"_blank"},"Creative Tim")),l.a.createElement(w.a,null,l.a.createElement(C.a,{href:"https://www.creative-tim.com/presentation?ref=adr-auth-footer",target:"_blank"},"About Us")),l.a.createElement(w.a,null,l.a.createElement(C.a,{href:"http://blog.creative-tim.com?ref=adr-auth-footer",target:"_blank"},"Blog")),l.a.createElement(w.a,null,l.a.createElement(C.a,{href:"https://github.com/creativetimofficial/argon-dashboard/blob/master/LICENSE.md?ref=adr-auth-footer",target:"_blank"},"MIT License"))))))))}}]),t}(l.a.Component),De=function(e){Object(u.a)(t,e);var a=Object(d.a)(t);function t(){var e;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=a.call.apply(a,[this].concat(r))).getRoutes=function(e){return e.map((function(e,a){return"/auth"===e.layout?l.a.createElement(o.b,{path:e.layout+e.path,component:e.component,key:a}):null}))},e}return Object(m.a)(t,[{key:"componentDidMount",value:function(){document.body.classList.add("bg-default")}},{key:"componentWillUnmount",value:function(){document.body.classList.remove("bg-default")}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"main-content"},l.a.createElement(Oe,null),l.a.createElement("div",{className:"header bg-gradient-info py-7 py-lg-8"},l.a.createElement(f.a,null,l.a.createElement("div",{className:"header-body text-center mb-7"},l.a.createElement(N.a,{className:"justify-content-center"},l.a.createElement(k.a,{lg:"5",md:"6"},l.a.createElement("h1",{className:"text-white"},"Welcome!"),l.a.createElement("p",{className:"text-lead text-light"},"Use these awesome forms to login or create new account in your project for free."))))),l.a.createElement("div",{className:"separator separator-bottom separator-skew zindex-100"},l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"none",version:"1.1",viewBox:"0 0 2560 100",x:"0",y:"0"},l.a.createElement("polygon",{className:"fill-default",points:"2560 0 2560 100 0 100"})))),l.a.createElement(f.a,{className:"mt--8 pb-5"},l.a.createElement(N.a,{className:"justify-content-center"},l.a.createElement(o.d,null,this.getRoutes(ke),l.a.createElement(o.a,{from:"*",to:"/auth/login"}))))),l.a.createElement(Te,null))}}]),t}(l.a.Component);s.a.render(l.a.createElement(c.a,null,l.a.createElement(o.d,null,l.a.createElement(o.b,{path:"/app",render:function(e){return l.a.createElement(Ce,e)}}),l.a.createElement(o.b,{path:"/auth",render:function(e){return l.a.createElement(De,e)}}),l.a.createElement(o.a,{from:"/",to:"/app/index"}))),document.getElementById("root"))},71:function(e,a,t){var n=t(40);n.elements.Rectangle.prototype.draw=function(){var e,a,t,n,l,r,s,c=this._chart.ctx,o=this._view,i=o.borderWidth;if(o.horizontal?(e=o.base,a=o.x,t=o.y-o.height/2,n=o.y+o.height/2,l=a>e?1:-1,r=1,s=o.borderSkipped||"left"):(e=o.x-o.width/2,a=o.x+o.width/2,t=o.y,l=1,r=(n=o.base)>t?1:-1,s=o.borderSkipped||"bottom"),i){var m=Math.min(Math.abs(e-a),Math.abs(t-n)),u=(i=i>m?m:i)/2,d=e+("left"!==s?u*l:0),p=a+("right"!==s?-u*l:0),f=t+("top"!==s?u*r:0),h=n+("bottom"!==s?-u*r:0);d!==p&&(t=f,n=h),f!==h&&(e=d,a=p)}c.beginPath(),c.fillStyle=o.backgroundColor,c.strokeStyle=o.borderColor,c.lineWidth=i;var E=[[e,n],[e,t],[a,t],[a,n]],b=["bottom","left","top","right"].indexOf(s,0);function g(e){return E[(b+e)%4]}-1===b&&(b=0);var v=g(0);c.moveTo(v[0],v[1]);for(var y=1;y<4;y++){v=g(y);var x=y+1;4===x&&(x=0);var N=E[2][0]-E[1][0],k=E[0][1]-E[1][1],w=E[1][0],C=E[1][1],j=6;j>k/2&&(j=k/2),j>N/2&&(j=N/2),c.moveTo(w+j,C),c.lineTo(w+N-j,C),c.quadraticCurveTo(w+N,C,w+N,C+j),c.lineTo(w+N,C+k-j),c.quadraticCurveTo(w+N,C+k,w+N-j,C+k),c.lineTo(w+j,C+k),c.quadraticCurveTo(w,C+k,w,C+k-j),c.lineTo(w,C+j),c.quadraticCurveTo(w,C,w+j,C)}c.fill(),i&&c.stroke()};var l="Open Sans",r={100:"#f6f9fc",200:"#e9ecef",300:"#dee2e6",400:"#ced4da",500:"#adb5bd",600:"#8898aa",700:"#525f7f",800:"#32325d",900:"#212529"},s={default:"#172b4d",primary:"#5e72e4",secondary:"#f4f5f7",info:"#11cdef",success:"#2dce89",danger:"#f5365c",warning:"#fb6340"},c="#FFFFFF",o="transparent";var i={options:{scales:{yAxes:[{gridLines:{color:r[900],zeroLineColor:r[900]},ticks:{callback:function(e){if(!(e%20))return e}}}]},tooltips:{callbacks:{label:function(e,a){var t=a.datasets[e.datasetIndex].label||"",n=e.yLabel,l="";return a.datasets.length>1&&(l+=t),l+=" "+n+"% avg"}}}},data1:function(e){return{labels:["Oct","Nov","Dec","Jan","Feb","Mar","Apr","May"],datasets:[{label:"Performance",data:[80,82,86,89,90,86,90,90,91]}]}},data2:function(e){return{labels:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],datasets:[{label:"Performance",data:[80,87,86,82,83,84,87]}]}}};e.exports={chartOptions:function(){var e={defaults:{global:{responsive:!0,maintainAspectRatio:!1,defaultColor:r[600],defaultFontColor:r[600],defaultFontFamily:l,defaultFontSize:13,layout:{padding:0},legend:{display:!1,position:"bottom",labels:{usePointStyle:!0,padding:16}},elements:{point:{radius:0,backgroundColor:s.primary},line:{tension:.4,borderWidth:4,borderColor:s.primary,backgroundColor:o,borderCapStyle:"rounded"},rectangle:{backgroundColor:s.warning},arc:{backgroundColor:s.primary,borderColor:c,borderWidth:4}},tooltips:{enabled:!0,mode:"index",intersect:!1}},doughnut:{cutoutPercentage:83,legendCallback:function(e){var a=e.data,t="";return a.labels.forEach((function(e,n){var l=a.datasets[0].backgroundColor[n];t+='<span class="chart-legend-item">',t+='<i class="chart-legend-indicator" style="background-color: '+l+'"></i>',t+=e,t+="</span>"})),t}}}};return n.scaleService.updateScaleDefaults("linear",{gridLines:{borderDash:[2],borderDashOffset:[2],color:r[300],drawBorder:!1,drawTicks:!1,lineWidth:.5,zeroLineWidth:0,zeroLineColor:r[300],zeroLineBorderDash:[2],zeroLineBorderDashOffset:[2]},ticks:{beginAtZero:!0,padding:10,callback:function(e){if(!(e%10))return e}}}),n.scaleService.updateScaleDefaults("category",{gridLines:{drawBorder:!1,drawOnChartArea:!1,drawTicks:!1},ticks:{padding:20}}),e},parseOptions:function e(a,t){for(var n in t)"object"!==typeof t[n]?a[n]=t[n]:e(a[n],t[n])},chartExample1:i,chartExample2:{options:{scales:{yAxes:[{ticks:{callback:function(e){if(!(e%10))return e}}}]},tooltips:{callbacks:{label:function(e,a){var t=a.datasets[e.datasetIndex].label||"",n=e.yLabel,l="";return a.datasets.length>1&&(l+=t),l+=n}}}},data:{labels:["Jul","Aug","Sep","Oct","Nov","Dec"],datasets:[{label:"Sales",data:[25,20,30,22,17,29],maxBarThickness:10}]}}}},85:function(e,a,t){e.exports=t.p+"static/media/geruh.7be79e97.jpeg"}},[[218,1,2]]]);
//# sourceMappingURL=main.0ae093e5.chunk.js.map