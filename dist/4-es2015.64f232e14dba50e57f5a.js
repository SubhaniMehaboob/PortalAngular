(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"BMe/":function(e,c,t){e.exports=function(e){"use strict";return e=e&&e.hasOwnProperty("default")?e.default:e,{customTooltips:function(e){var c,t,r={DIV:"div",SPAN:"span",TOOLTIP:(this._chart.canvas.id||(c=function(){return(65536*(1+Math.random())|0).toString(16)},t="_canvas-"+(c()+c()),this._chart.canvas.id=t,t))+"-tooltip"},o=document.getElementById(r.TOOLTIP);if(o||((o=document.createElement("div")).id=r.TOOLTIP,o.className="c-chartjs-tooltip",this._chart.canvas.parentNode.appendChild(o)),0!==e.opacity){if(o.classList.remove("c-above","c-below","c-no-transform"),o.classList.add(e.yAlign?e.yAlign:"c-no-transform"),e.body){var a=e.title||[],n=document.createElement(r.DIV);n.className="c-tooltip-header",a.forEach(function(e){var c=document.createElement(r.DIV);c.className="c-tooltip-header-item",c.innerHTML=e,n.appendChild(c)});var i=document.createElement(r.DIV);i.className="c-tooltip-body",e.body.map(function(e){return e.lines}).forEach(function(c,t){var o=document.createElement(r.DIV);o.className="c-tooltip-body-item";var a=e.labelColors[t],n=document.createElement(r.SPAN);if(n.className="c-tooltip-body-item-color",n.style.backgroundColor=a.backgroundColor,o.appendChild(n),c[0].split(":").length>1){var s=document.createElement(r.SPAN);s.className="c-tooltip-body-item-label",s.innerHTML=c[0].split(": ")[0],o.appendChild(s);var d=document.createElement(r.SPAN);d.className="c-tooltip-body-item-value",d.innerHTML=c[0].split(": ").pop(),o.appendChild(d)}else{var l=document.createElement(r.SPAN);l.className="c-tooltip-body-item-value",l.innerHTML=c[0],o.appendChild(l)}i.appendChild(o)}),o.innerHTML="",o.appendChild(n),o.appendChild(i)}var s=this._chart.canvas.getBoundingClientRect(),d=this._chart.canvas.offsetLeft+e.caretX,l=this._chart.canvas.offsetTop+e.caretY,h=e.width/2;d+h>s.width?d-=h:d<h&&(d+=h),o.style.opacity=1,o.style.left=d+"px",o.style.top=l+"px"}else o.style.opacity=0}}}(t("MO+k"))},UtdI:function(e,c,t){"use strict";c.a=(e,c=document.body)=>{let t;return t=(e=>e.match(/^--.*/i))(e)&&Boolean(document.documentMode)&&document.documentMode>=10?(()=>{const e={},c=document.styleSheets;let t="";for(let r=c.length-1;r>-1;r--){const e=c[r].cssRules;for(let c=e.length-1;c>-1;c--)if(".ie-custom-properties"===e[c].selectorText){t=e[c].cssText;break}if(t)break}return t=t.substring(t.lastIndexOf("{")+1,t.lastIndexOf("}")),t.split(";").forEach(c=>{if(c){const t=c.split(": ")[0],r=c.split(": ")[1];t&&r&&(e[`--${t.trim()}`]=r.trim())}}),e})()[e]:window.getComputedStyle(c,null).getPropertyValue(e).replace(/^\s/,""),t}},XVX6:function(e,c,t){"use strict";t.r(c),t.d(c,"WidgetsModule",function(){return O});var r=t("SVse"),o=t("FE24"),a=t("Iluq"),n=t("rVqu"),i=t("iInd"),s=t("w7HB"),d=t("BMe/"),l=t("8Y7J"),h=t("YQRL");function p(e,c){if(1&e&&(l.bc(0),l.dc(1,"div",10),l.Yb(2,"canvas",11),l.cc(),l.ac()),2&e){const e=l.qc();l.Kb(2),l.wc("datasets",e.brandBoxChart.Data1)("labels",e.brandBoxChart.labels)("options",e.brandBoxChart.options)("colors",e.brandBoxChart.colors)("legend",e.brandBoxChart.legend)("chartType",e.brandBoxChart.type)}}function b(e,c){if(1&e&&(l.bc(0),l.dc(1,"div",10),l.Yb(2,"canvas",11),l.cc(),l.ac()),2&e){const e=l.qc();l.Kb(2),l.wc("datasets",e.brandBoxChart.Data2)("labels",e.brandBoxChart.labels)("options",e.brandBoxChart.options)("colors",e.brandBoxChart.colors)("legend",e.brandBoxChart.legend)("chartType",e.brandBoxChart.type)}}function g(e,c){if(1&e&&(l.bc(0),l.dc(1,"div",10),l.Yb(2,"canvas",11),l.cc(),l.ac()),2&e){const e=l.qc();l.Kb(2),l.wc("datasets",e.brandBoxChart.Data3)("labels",e.brandBoxChart.labels)("options",e.brandBoxChart.options)("colors",e.brandBoxChart.colors)("legend",e.brandBoxChart.legend)("chartType",e.brandBoxChart.type)}}function u(e,c){if(1&e&&(l.bc(0),l.dc(1,"div",10),l.Yb(2,"canvas",11),l.cc(),l.ac()),2&e){const e=l.qc();l.Kb(2),l.wc("datasets",e.brandBoxChart.Data4)("labels",e.brandBoxChart.labels)("options",e.brandBoxChart.options)("colors",e.brandBoxChart.colors)("legend",e.brandBoxChart.legend)("chartType",e.brandBoxChart.type)}}let m=(()=>{class e{constructor(e){this.chartsData=e,this.brandBoxChart={}}ngOnInit(){this.brandBoxChart=this.chartsData.brandBoxChart}}return e.\u0275fac=function(c){return new(c||e)(l.Xb(h.a))},e.\u0275cmp=l.Rb({type:e,selectors:[["app-widgets-brand"]],inputs:{noCharts:"noCharts"},decls:17,vars:4,consts:[["md","3","sm","6"],["color","facebook","rightHeader","89k","rightFooter","friends","leftHeader","459","leftFooter","feeds"],["name","cib-facebook","height","52",1,"my-4"],[4,"ngIf"],["color","twitter","rightHeader","973k","rightFooter","followers","leftHeader","1.792","leftFooter","tweets"],["name","cib-twitter","height","52",1,"my-4"],["color","linkedin","rightHeader","500+","rightFooter","contracts","leftHeader","292","leftFooter","feeds"],["name","cib-linkedin","height","52",1,"my-4"],["rightHeader","12","rightFooter","events","leftHeader","4","leftFooter","meetings","color","gradient-warning"],["name","cil-calendar","height","52",1,"my-4"],[1,"c-chart-brand"],["cNoZoneBaseChart","",3,"datasets","labels","options","colors","legend","chartType"]],template:function(e,c){1&e&&(l.dc(0,"c-row"),l.dc(1,"c-col",0),l.dc(2,"c-widget-brand",1),l.Yb(3,"c-icon",2),l.Qc(4,p,3,6,"ng-container",3),l.cc(),l.cc(),l.dc(5,"c-col",0),l.dc(6,"c-widget-brand",4),l.Yb(7,"c-icon",5),l.Qc(8,b,3,6,"ng-container",3),l.cc(),l.cc(),l.dc(9,"c-col",0),l.dc(10,"c-widget-brand",6),l.Yb(11,"c-icon",7),l.Qc(12,g,3,6,"ng-container",3),l.cc(),l.cc(),l.dc(13,"c-col",0),l.dc(14,"c-widget-brand",8),l.Yb(15,"c-icon",9),l.Qc(16,u,3,6,"ng-container",3),l.cc(),l.cc(),l.cc()),2&e&&(l.Kb(4),l.wc("ngIf",!c.noCharts),l.Kb(4),l.wc("ngIf",!c.noCharts),l.Kb(4),l.wc("ngIf",!c.noCharts),l.Kb(4),l.wc("ngIf",!c.noCharts))},directives:[a.Eb,a.Gb,a.fc,n.a,r.p,a.wc],styles:["[_nghost-%COMP%]   .c-chart-brand[_ngcontent-%COMP%]{position:absolute;width:100%;height:100px}"]}),e})();function f(e,c){1&e&&(l.dc(0,"div",13),l.dc(1,"a",14),l.Sc(2,"Action"),l.cc(),l.dc(3,"a",14),l.Sc(4,"Another action"),l.cc(),l.dc(5,"a",14),l.Sc(6,"Something else here"),l.cc(),l.cc())}function w(e,c){1&e&&(l.dc(0,"div",13),l.dc(1,"a",14),l.Sc(2,"Action"),l.cc(),l.dc(3,"a",14),l.Sc(4,"Another action"),l.cc(),l.dc(5,"a",14),l.Sc(6,"Something else here"),l.cc(),l.cc())}function y(e,c){1&e&&(l.dc(0,"div",13),l.dc(1,"a",14),l.Sc(2,"Action"),l.cc(),l.dc(3,"a",14),l.Sc(4,"Another action"),l.cc(),l.dc(5,"a",14),l.Sc(6,"Something else here"),l.cc(),l.cc())}function C(e,c){1&e&&(l.dc(0,"div",13),l.dc(1,"a",14),l.Sc(2,"Action"),l.cc(),l.dc(3,"a",14),l.Sc(4,"Another action"),l.cc(),l.dc(5,"a",14),l.Sc(6,"Something else here"),l.cc(),l.cc())}let v=(()=>{class e{constructor(e){this.chartsData=e,this.chart=[]}ngOnInit(){this.chart=this.chartsData.widgetChart}}return e.\u0275fac=function(c){return new(c||e)(l.Xb(h.a))},e.\u0275cmp=l.Rb({type:e,selectors:[["app-widgets-dropdown"]],decls:37,vars:24,consts:[["sm","6","lg","3"],["color","gradient-primary","header","9.823","text","Members online"],["dropdown",""],["cButton","","color","transparent","dropdownToggle","",1,"p-0","dropdown-toggle"],["name","cil-settings"],["class","dropdown-menu dropdown-menu-right",4,"dropdownMenu"],["slot","footer"],[1,"c-chart-wrapper","mt-3","mx-3",2,"height","70px"],["cNoZoneBaseChart","","height","70",1,"chart",3,"datasets","labels","options","colors","chartType"],["color","gradient-info","header","9.823","text","Members online"],["color","gradient-warning","header","9.823","text","Members online"],[1,"c-chart-wrapper","mt-3",2,"height","70px"],["color","gradient-danger","header","9.823","text","Members online"],[1,"dropdown-menu","dropdown-menu-right"],[1,"dropdown-item",3,"routerLink"]],template:function(e,c){1&e&&(l.dc(0,"c-row"),l.dc(1,"c-col",0),l.dc(2,"c-widget-dropdown",1),l.dc(3,"c-button-group",2),l.dc(4,"button",3),l.Yb(5,"c-icon",4),l.cc(),l.Qc(6,f,7,0,"div",5),l.cc(),l.dc(7,"div",6),l.dc(8,"div",7),l.Yb(9,"canvas",8),l.cc(),l.cc(),l.cc(),l.cc(),l.dc(10,"c-col",0),l.dc(11,"c-widget-dropdown",9),l.dc(12,"c-button-group",2),l.dc(13,"button",3),l.Yb(14,"c-icon",4),l.cc(),l.Qc(15,w,7,0,"div",5),l.cc(),l.dc(16,"div",6),l.dc(17,"div",7),l.Yb(18,"canvas",8),l.cc(),l.cc(),l.cc(),l.cc(),l.dc(19,"c-col",0),l.dc(20,"c-widget-dropdown",10),l.dc(21,"c-button-group",2),l.dc(22,"button",3),l.Yb(23,"c-icon",4),l.cc(),l.Qc(24,y,7,0,"div",5),l.cc(),l.dc(25,"div",6),l.dc(26,"div",11),l.Yb(27,"canvas",8),l.cc(),l.cc(),l.cc(),l.cc(),l.dc(28,"c-col",0),l.dc(29,"c-widget-dropdown",12),l.dc(30,"c-button-group",2),l.dc(31,"button",3),l.Yb(32,"c-icon",4),l.cc(),l.Qc(33,C,7,0,"div",5),l.cc(),l.dc(34,"div",6),l.dc(35,"div",7),l.Yb(36,"canvas",8),l.cc(),l.cc(),l.cc(),l.cc(),l.cc()),2&e&&(l.Kb(8),l.wc("@.disabled",!0),l.Kb(1),l.wc("datasets",c.chart[0].data)("labels",c.chart[0].labels)("options",c.chart[0].options)("colors",c.chart[0].colors)("chartType",c.chart[0].type),l.Kb(8),l.wc("@.disabled",!0),l.Kb(1),l.wc("datasets",c.chart[1].data)("labels",c.chart[1].labels)("options",c.chart[1].options)("colors",c.chart[1].colors)("chartType",c.chart[1].type),l.Kb(8),l.wc("@.disabled",!0),l.Kb(1),l.wc("datasets",c.chart[2].data)("labels",c.chart[2].labels)("options",c.chart[2].options)("colors",c.chart[2].colors)("chartType",c.chart[2].type),l.Kb(8),l.wc("@.disabled",!0),l.Kb(1),l.wc("datasets",c.chart[3].data)("labels",c.chart[3].labels)("options",c.chart[3].options)("colors",c.chart[3].colors)("chartType",c.chart[3].type))},directives:[a.Eb,a.Gb,a.hc,a.oc,o.a,a.nc,o.d,n.a,o.b,a.wc,i.f],styles:[""]}),e})();var x=t("UtdI"),A=(e,c=document.body)=>{const t=`--${e}`;return Object(x.a)(t,c)||e};let Y=(()=>{class e{constructor(){this.color="success",this.points=[],this.label="Serie A",this.borderColor="rgba(255,255,255,.55)",this.backgroundColor="transparent",this.datasets=[{data:[10,22,34,46,58,70,46,23,45,78,34,12],label:"Serie A"}],this.options={responsive:!0,tooltips:{enabled:!1,custom:d.customTooltips},maintainAspectRatio:!1,legend:{display:!1},scales:{xAxes:[{display:!1,ticks:{display:!1,min:Math.min.apply(Math,this.datasets[0].data)-5,max:Math.max.apply(Math,this.datasets[0].data)+5}}],yAxes:[{display:!1}]},elements:{line:{borderWidth:2},point:{radius:0,hitRadius:10,hoverRadius:4}}},this.labels=["January","February","March","April","May","June","July","August","September","October","November","December"],this.colors=[{backgroundColor:"transparent",borderColor:A(this.color)||"#4dbd74",pointBackgroundColor:"rgba(148,159,177,1)",pointBorderColor:"#fff",pointHoverBackgroundColor:"#fff",pointHoverBorderColor:"rgba(148,159,177,0.8)"}],this.legend=!1,this.chartType="line"}ngOnInit(){this.colors[0].borderColor=A(this.color)||"#4dbd74",this.points.length>0&&(this.datasets[0].data=this.points)}}return e.\u0275fac=function(c){return new(c||e)},e.\u0275cmp=l.Rb({type:e,selectors:[["app-chart-line-simple"]],inputs:{color:"color",points:"points",label:"label"},decls:1,vars:6,consts:[["cNoZoneBaseChart","",1,"chart",3,"datasets","labels","options","colors","legend","chartType"]],template:function(e,c){1&e&&l.Yb(0,"canvas",0),2&e&&l.wc("datasets",c.datasets)("labels",c.labels)("options",c.options)("colors",c.colors)("legend",c.legend)("chartType",c.chartType)},directives:[a.wc],styles:["[_nghost-%COMP%]{display:block}"]}),e})(),S=(()=>{class e{constructor(){this.color="success",this.borderColor="rgba(255,255,255,.55)",this.backgroundColor="transparent",this.datasets=[{data:[10,22,34,46,58,70,46,23,45,78,34,12],label:"Serie A",barPercentage:.5,categoryPercentage:1}],this.options={responsive:!0,tooltips:{enabled:!1,custom:d.customTooltips},maintainAspectRatio:!1,legend:{display:!1},scales:{xAxes:[{display:!1,ticks:{display:!1,min:Math.min.apply(Math,this.datasets[0].data)-5,max:Math.max.apply(Math,this.datasets[0].data)+5}}],yAxes:[{display:!1}]},elements:{line:{borderWidth:2},point:{radius:0,hitRadius:10,hoverRadius:4}}},this.labels=["January","February","March","April","May","June","July","August","September","October","November","December"],this.colors=[{backgroundColor:Object(x.a)("--success")||"#4dbd74",pointBackgroundColor:"rgba(148,159,177,1)",pointBorderColor:"#fff",pointHoverBackgroundColor:"#fff",pointHoverBorderColor:"rgba(148,159,177,0.8)"}],this.legend=!1,this.chartType="bar"}ngOnInit(){this.colors[0].backgroundColor=A(this.color)||"#4dbd74"}}return e.\u0275fac=function(c){return new(c||e)},e.\u0275cmp=l.Rb({type:e,selectors:[["app-chart-bar-simple"]],inputs:{color:"color"},decls:1,vars:6,consts:[["cNoZoneBaseChart","",1,"chart",3,"datasets","labels","options","colors","legend","chartType"]],template:function(e,c){1&e&&l.Yb(0,"canvas",0),2&e&&l.wc("datasets",c.datasets)("labels",c.labels)("options",c.options)("colors",c.colors)("legend",c.legend)("chartType",c.chartType)},directives:[a.wc],styles:["[_nghost-%COMP%]{display:block}"]}),e})();const T=[{path:"",component:(()=>{class e{constructor(){this.lineChart1Data=[{data:[65,59,84,84,51,55,40],label:"Series A"}],this.lineChart1Labels=["January","February","March","April","May","June","July"],this.lineChart1Options={tooltips:{enabled:!1,custom:d.customTooltips},maintainAspectRatio:!1,scales:{xAxes:[{gridLines:{color:"transparent",zeroLineColor:"transparent"},ticks:{fontSize:2,fontColor:"transparent"}}],yAxes:[{display:!1,ticks:{display:!1,min:35,max:89}}]},elements:{line:{borderWidth:1},point:{radius:4,hitRadius:10,hoverRadius:4}},legend:{display:!1}},this.lineChart1Colours=[{backgroundColor:Object(s.getStyle)("--primary"),borderColor:"rgba(255,255,255,.55)"}],this.lineChart1Legend=!1,this.lineChart1Type="line",this.lineChart2Data=[{data:[1,18,9,17,34,22,11],label:"Series A"}],this.lineChart2Labels=["January","February","March","April","May","June","July"],this.lineChart2Options={tooltips:{enabled:!1,custom:d.customTooltips},maintainAspectRatio:!1,scales:{xAxes:[{gridLines:{color:"transparent",zeroLineColor:"transparent"},ticks:{fontSize:2,fontColor:"transparent"}}],yAxes:[{display:!1,ticks:{display:!1,min:-4,max:39}}]},elements:{line:{tension:1e-5,borderWidth:1},point:{radius:4,hitRadius:10,hoverRadius:4}},legend:{display:!1}},this.lineChart2Colours=[{backgroundColor:Object(s.getStyle)("--info"),borderColor:"rgba(255,255,255,.55)"}],this.lineChart2Legend=!1,this.lineChart2Type="line",this.lineChart3Data=[{data:[78,81,80,45,34,12,40],label:"Series A"}],this.lineChart3Labels=["January","February","March","April","May","June","July"],this.lineChart3Options={tooltips:{enabled:!1,custom:d.customTooltips},maintainAspectRatio:!1,scales:{xAxes:[{display:!1}],yAxes:[{display:!1}]},elements:{line:{borderWidth:2},point:{radius:0,hitRadius:10,hoverRadius:4}},legend:{display:!1}},this.lineChart3Colours=[{backgroundColor:"rgba(255,255,255,.2)",borderColor:"rgba(255,255,255,.55)"}],this.lineChart3Legend=!1,this.lineChart3Type="line",this.barChart1Data=[{data:[78,81,80,45,34,12,40,78,81,80,45,34,12,40,12,40],label:"Series A",barPercentage:.6}],this.barChart1Labels=["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16"],this.barChart1Options={tooltips:{enabled:!1,custom:d.customTooltips},maintainAspectRatio:!1,scales:{xAxes:[{display:!1}],yAxes:[{display:!1}]},legend:{display:!1}},this.barChart1Colours=[{backgroundColor:"rgba(255,255,255,.3)",borderWidth:0}],this.barChart1Legend=!1,this.barChart1Type="bar",this.lineChart4Data=[{data:[4,18,9,17,34,22,11,3,15,12,18,9],label:"Series A"}],this.lineChart4Labels=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],this.lineChart4Options={tooltips:{enabled:!1,custom:d.customTooltips},maintainAspectRatio:!1,scales:{xAxes:[{display:!1,points:!1}],yAxes:[{display:!1}]},elements:{point:{radius:0}},legend:{display:!1}},this.lineChart4Colours=[{backgroundColor:"transparent",borderColor:"rgba(255,255,255,.55)",borderWidth:2}],this.lineChart4Legend=!1,this.lineChart4Type="line",this.barChart2Data=[{data:[4,18,9,17,34,22,11,3,15,12,18,9],label:"Series A",barPercentage:.6}],this.barChart2Labels=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],this.barChart2Options={tooltips:{enabled:!1,custom:d.customTooltips},maintainAspectRatio:!1,scales:{xAxes:[{display:!1}],yAxes:[{display:!1,ticks:{beginAtZero:!0}}]},legend:{display:!1}},this.barChart2Colours=[{backgroundColor:"rgba(0,0,0,.2)",borderWidth:0}],this.barChart2Legend=!1,this.barChart2Type="bar",this.barChart3Data=[{data:[4,18,9,17,34,22,11,3,15,12,18,9],label:"Series A"}],this.barChart3Labels=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],this.barChart3Options={tooltips:{enabled:!1,custom:d.customTooltips},maintainAspectRatio:!1,scales:{xAxes:[{display:!1}],yAxes:[{display:!1}]},legend:{display:!1}},this.barChart3Primary=[{backgroundColor:Object(s.getStyle)("--primary"),borderColor:"transparent",borderWidth:1}],this.barChart3Danger=[{backgroundColor:Object(s.getStyle)("--danger"),borderColor:"transparent",borderWidth:1}],this.barChart3Success=[{backgroundColor:Object(s.getStyle)("--success"),borderColor:"transparent",borderWidth:1}],this.barChart3Legend=!1,this.barChart3Type="bar",this.lineChart5Data=[{data:[65,59,84,84,51,55,40],label:"Series A"}],this.lineChart5Labels=["January","February","March","April","May","June","July"],this.lineChart5Options={tooltips:{enabled:!1,custom:d.customTooltips},maintainAspectRatio:!1,scales:{xAxes:[{display:!1,points:!1}],yAxes:[{display:!1}]},elements:{point:{radius:0}},legend:{display:!1}},this.lineChart5Info=[{backgroundColor:"transparent",borderColor:Object(s.getStyle)("--info"),borderWidth:2}],this.lineChart5Success=[{backgroundColor:"transparent",borderColor:Object(s.getStyle)("--info"),borderWidth:2}],this.lineChart5Warning=[{backgroundColor:"transparent",borderColor:Object(s.getStyle)("--warning"),borderWidth:2}],this.lineChart5Legend=!1,this.lineChart5Type="line"}ngOnInit(){}}return e.\u0275fac=function(c){return new(c||e)},e.\u0275cmp=l.Rb({type:e,selectors:[["app-widgets"]],decls:143,vars:38,consts:[[1,"fade-in"],["sm","6","lg","3"],["color","gradient-success","footer","Lorem ipsum dolor sit amet enim.","header","89.9%","text","Lorem ipsum...",3,"value"],["color","gradient-info","footer","Lorem ipsum dolor sit amet enim.","header","12.124","text","Lorem ipsum...",3,"value"],["color","gradient-warning","footer","Lorem ipsum dolor sit amet enim.","text","Lorem ipsum...",3,"header","value"],["color","gradient-danger","footer","Lorem ipsum dolor sit amet enim.","header","2 TB","text","Lorem ipsum...",3,"value"],["header","89.9%","text","Lorem ipsum...","footer","Lorem ipsum dolor sit amet enim.","color","gradient-success","value","25",3,"inverse"],["color","gradient-info","footer","Lorem ipsum dolor sit amet enim.","header","12.124","text","Lorem ipsum...",3,"value","inverse"],["color","gradient-warning","footer","Lorem ipsum dolor sit amet enim.","text","Lorem ipsum...",3,"header","value","inverse"],["color","gradient-danger","footer","Lorem ipsum dolor sit amet enim.","header","2 TB","text","Lorem ipsum...",3,"value","inverse"],["col","12","sm","6","lg","3"],["header","$1.999,50","text","Income","color","gradient-primary"],["name","cil-settings","width","24"],["header","$1.999,50","text","Income","color","gradient-info"],["name","cil-laptop","width","24"],["header","$1.999,50","text","Income","color","gradient-warning"],["name","cil-moon","width","24"],["header","$1.999,50","text","Income","color","gradient-danger"],["name","cil-bell","width","24"],["header","$1.999,50","text","Income","color","gradient-primary",3,"iconPadding"],["header","$1.999,50","text","Income","color","gradient-info",3,"iconPadding"],["header","$1.999,50","text","Income","color","gradient-warning",3,"iconPadding"],["header","$1.999,50","text","Income","color","gradient-danger",3,"iconPadding"],["col","12","sm","6","lg","4"],["name","cil-settings","width","24",1,"mx-5"],["name","cil-laptop","width","24",1,"mx-5"],["slot","footer",1,"px-3","py-2"],["href","https://coreui.io/","target","_blank",1,"font-weight-bold","font-xs","text-muted","d-flex","justify-content-between"],["name","cil-arrow-right","width","16"],[3,"noCharts"],[1,"mb-4"],["header","87.500","text","Visitors","color","gradient-info"],["name","cil-people","height","36"],["header","385","text","New Clients","color","gradient-success"],["name","cil-user-follow","height","36"],["header","1238","text","Products Sold","color","gradient-warning"],["name","cil-basket","height","36"],["header","28%","text","Returning Visitors"],["name","cil-chart-pie","height","36"],["header","5:34:11","text","Avg. Time","color","gradient-danger"],["name","cil-speedometer","height","36"],["header","87.500","text","Visitors","color","gradient-info",3,"inverse"],["header","385","text","New Clients","color","gradient-success",3,"inverse"],["name","cil-userFollow","height","36"],["header","1238","text","Products sold","color","gradient-warning",3,"inverse"],["header","28%","text","Returning Visitors","color","gradient-primary",3,"inverse"],["name","cil-chartPie","height","36"],["header","5:34:11","text","Avg. Time","color","gradient-danger",3,"inverse"],["sm","6","md","2"],["header","1238","text","Products sold","color","gradient-warning"],["header","28%","text","Returning Visitors","color","gradient-primary"],["header","972","text","comments","color","gradient-info"],["name","cil-speech","height","36"],["header","972","text","comments","color","gradient-info",3,"inverse"],["sm","4","lg","2"],["header","title","text","1,123"],["color","danger",2,"height","40px"],["color","primary",2,"height","40px"],["color","success",2,"height","40px"]],template:function(e,c){1&e&&(l.dc(0,"div",0),l.dc(1,"c-row"),l.dc(2,"c-col",1),l.Yb(3,"c-widget-progress",2),l.cc(),l.dc(4,"c-col",1),l.Yb(5,"c-widget-progress",3),l.cc(),l.dc(6,"c-col",1),l.Yb(7,"c-widget-progress",4),l.rc(8,"currency"),l.cc(),l.dc(9,"c-col",1),l.Yb(10,"c-widget-progress",5),l.cc(),l.cc(),l.dc(11,"c-row"),l.dc(12,"c-col",1),l.Yb(13,"c-widget-progress",6),l.cc(),l.dc(14,"c-col",1),l.Yb(15,"c-widget-progress",7),l.cc(),l.dc(16,"c-col",1),l.Yb(17,"c-widget-progress",8),l.rc(18,"currency"),l.cc(),l.dc(19,"c-col",1),l.Yb(20,"c-widget-progress",9),l.cc(),l.cc(),l.dc(21,"c-row"),l.dc(22,"c-col",10),l.dc(23,"c-widget-icon",11),l.Yb(24,"c-icon",12),l.cc(),l.cc(),l.dc(25,"c-col",10),l.dc(26,"c-widget-icon",13),l.Yb(27,"c-icon",14),l.cc(),l.cc(),l.dc(28,"c-col",10),l.dc(29,"c-widget-icon",15),l.Yb(30,"c-icon",16),l.cc(),l.cc(),l.dc(31,"c-col",10),l.dc(32,"c-widget-icon",17),l.Yb(33,"c-icon",18),l.cc(),l.cc(),l.cc(),l.dc(34,"c-row"),l.dc(35,"c-col",10),l.dc(36,"c-widget-icon",19),l.Yb(37,"c-icon",12),l.cc(),l.cc(),l.dc(38,"c-col",10),l.dc(39,"c-widget-icon",20),l.Yb(40,"c-icon",14),l.cc(),l.cc(),l.dc(41,"c-col",10),l.dc(42,"c-widget-icon",21),l.Yb(43,"c-icon",16),l.cc(),l.cc(),l.dc(44,"c-col",10),l.dc(45,"c-widget-icon",22),l.Yb(46,"c-icon",18),l.cc(),l.cc(),l.cc(),l.dc(47,"c-row"),l.dc(48,"c-col",23),l.dc(49,"c-widget-icon",19),l.Yb(50,"c-icon",24),l.cc(),l.cc(),l.dc(51,"c-col",23),l.dc(52,"c-widget-icon",19),l.Yb(53,"c-icon",24),l.cc(),l.cc(),l.dc(54,"c-col",23),l.dc(55,"c-widget-icon",21),l.Yb(56,"c-icon",25),l.dc(57,"c-card-footer",26),l.dc(58,"a",27),l.Sc(59," View more "),l.Yb(60,"c-icon",28),l.cc(),l.cc(),l.cc(),l.cc(),l.cc(),l.Yb(61,"app-widgets-brand",29),l.Yb(62,"app-widgets-brand"),l.dc(63,"c-card-group",30),l.dc(64,"c-widget-progress-icon",31),l.Yb(65,"c-icon",32),l.cc(),l.dc(66,"c-widget-progress-icon",33),l.Yb(67,"c-icon",34),l.cc(),l.dc(68,"c-widget-progress-icon",35),l.Yb(69,"c-icon",36),l.cc(),l.dc(70,"c-widget-progress-icon",37),l.Yb(71,"c-icon",38),l.cc(),l.dc(72,"c-widget-progress-icon",39),l.Yb(73,"c-icon",40),l.cc(),l.cc(),l.dc(74,"c-card-group",30),l.dc(75,"c-widget-progress-icon",41),l.Yb(76,"c-icon",32),l.cc(),l.dc(77,"c-widget-progress-icon",42),l.Yb(78,"c-icon",43),l.cc(),l.dc(79,"c-widget-progress-icon",44),l.Yb(80,"c-icon",36),l.cc(),l.dc(81,"c-widget-progress-icon",45),l.Yb(82,"c-icon",46),l.cc(),l.dc(83,"c-widget-progress-icon",47),l.Yb(84,"c-icon",40),l.cc(),l.cc(),l.dc(85,"c-row"),l.dc(86,"c-col",48),l.dc(87,"c-widget-progress-icon",31),l.Yb(88,"c-icon",32),l.cc(),l.cc(),l.dc(89,"c-col",48),l.dc(90,"c-widget-progress-icon",33),l.Yb(91,"c-icon",43),l.cc(),l.cc(),l.dc(92,"c-col",48),l.dc(93,"c-widget-progress-icon",49),l.Yb(94,"c-icon",36),l.cc(),l.cc(),l.dc(95,"c-col",48),l.dc(96,"c-widget-progress-icon",50),l.Yb(97,"c-icon",46),l.cc(),l.cc(),l.dc(98,"c-col",48),l.dc(99,"c-widget-progress-icon",39),l.Yb(100,"c-icon",40),l.cc(),l.cc(),l.dc(101,"c-col",48),l.dc(102,"c-widget-progress-icon",51),l.Yb(103,"c-icon",52),l.cc(),l.cc(),l.cc(),l.dc(104,"c-row"),l.dc(105,"c-col",48),l.dc(106,"c-widget-progress-icon",41),l.Yb(107,"c-icon",32),l.cc(),l.cc(),l.dc(108,"c-col",48),l.dc(109,"c-widget-progress-icon",42),l.Yb(110,"c-icon",43),l.cc(),l.cc(),l.dc(111,"c-col",48),l.dc(112,"c-widget-progress-icon",44),l.Yb(113,"c-icon",36),l.cc(),l.cc(),l.dc(114,"c-col",48),l.dc(115,"c-widget-progress-icon",45),l.Yb(116,"c-icon",46),l.cc(),l.cc(),l.dc(117,"c-col",48),l.dc(118,"c-widget-progress-icon",47),l.Yb(119,"c-icon",40),l.cc(),l.cc(),l.dc(120,"c-col",48),l.dc(121,"c-widget-progress-icon",53),l.Yb(122,"c-icon",52),l.cc(),l.cc(),l.cc(),l.Yb(123,"app-widgets-dropdown"),l.dc(124,"c-row"),l.dc(125,"c-col",54),l.dc(126,"c-widget-simple",55),l.Yb(127,"app-chart-line-simple",56),l.cc(),l.cc(),l.dc(128,"c-col",54),l.dc(129,"c-widget-simple",55),l.Yb(130,"app-chart-line-simple",57),l.cc(),l.cc(),l.dc(131,"c-col",54),l.dc(132,"c-widget-simple",55),l.Yb(133,"app-chart-line-simple",58),l.cc(),l.cc(),l.dc(134,"c-col",54),l.dc(135,"c-widget-simple",55),l.Yb(136,"app-chart-bar-simple",56),l.cc(),l.cc(),l.dc(137,"c-col",54),l.dc(138,"c-widget-simple",55),l.Yb(139,"app-chart-bar-simple",57),l.cc(),l.cc(),l.dc(140,"c-col",54),l.dc(141,"c-widget-simple",55),l.Yb(142,"app-chart-bar-simple",58),l.cc(),l.cc(),l.cc(),l.cc()),2&e&&(l.Kb(3),l.wc("value",25),l.Kb(2),l.wc("value",25),l.Kb(2),l.xc("header",l.tc(8,32,98111,"USD")),l.wc("value",25),l.Kb(3),l.wc("value",25),l.Kb(3),l.wc("inverse",!0),l.Kb(2),l.wc("value",25)("inverse",!0),l.Kb(2),l.xc("header",l.tc(18,35,98111,"USD")),l.wc("value",25)("inverse",!0),l.Kb(3),l.wc("value",25)("inverse",!0),l.Kb(16),l.wc("iconPadding",!1),l.Kb(3),l.wc("iconPadding",!1),l.Kb(3),l.wc("iconPadding",!1),l.Kb(3),l.wc("iconPadding",!1),l.Kb(4),l.wc("iconPadding",!1),l.Kb(3),l.wc("iconPadding",!1),l.Kb(3),l.wc("iconPadding",!1),l.Kb(6),l.wc("noCharts",!0),l.Kb(14),l.wc("inverse",!0),l.Kb(2),l.wc("inverse",!0),l.Kb(2),l.wc("inverse",!0),l.Kb(2),l.wc("inverse",!0),l.Kb(2),l.wc("inverse",!0),l.Kb(23),l.wc("inverse",!0),l.Kb(3),l.wc("inverse",!0),l.Kb(3),l.wc("inverse",!0),l.Kb(3),l.wc("inverse",!0),l.Kb(3),l.wc("inverse",!0),l.Kb(3),l.wc("inverse",!0))},directives:[a.Eb,a.Gb,a.ic,a.gc,n.a,a.sc,m,a.tc,a.jc,v,a.ec,Y,S],pipes:[r.d],styles:[""]}),e})(),data:{title:"Widgets"}}];let M=(()=>{class e{}return e.\u0275fac=function(c){return new(c||e)},e.\u0275mod=l.Vb({type:e}),e.\u0275inj=l.Ub({imports:[[i.g.forChild(T)],i.g]}),e})(),O=(()=>{class e{}return e.\u0275fac=function(c){return new(c||e)},e.\u0275mod=l.Vb({type:e}),e.\u0275inj=l.Ub({imports:[[r.c,M,o.c,a.f,a.h,a.j,a.r,n.b,a.ab,a.ab]]}),e})()},YQRL:function(e,c,t){"use strict";t.d(c,"a",function(){return n});var r=t("4qVP"),o=t("AwSQ"),a=t("8Y7J");let n=(()=>{class e{constructor(e,c){this.service=e,this.commonData=c,this.mainChart={},this.widgetChart=[],this.brandBoxChart={},this.barChart={},this.doughnutChart={},this.pieChart={},this.online={},this.offline={},this.statusMachineChart={},this.soldItemsChart={},this.status=[]}random(e,c){return Math.floor(Math.random()*(c-e+1)+e)}}return e.\u0275fac=function(c){return new(c||e)(a.kc(o.a),a.kc(r.a))},e.\u0275prov=a.Tb({token:e,factory:e.\u0275fac,providedIn:"any"}),e})()},w7HB:function(e,c){!function(e,c){for(var t in c)e[t]=c[t]}(c,function(e){var c={};function t(r){if(c[r])return c[r].exports;var o=c[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=e,t.c=c,t.d=function(e,c,r){t.o(e,c)||Object.defineProperty(e,c,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,c){if(1&c&&(e=t(e)),8&c)return e;if(4&c&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&c&&"string"!=typeof e)for(var o in e)t.d(r,o,(function(c){return e[c]}).bind(null,o));return r},t.n=function(e){var c=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(c,"a",c),c},t.o=function(e,c){return Object.prototype.hasOwnProperty.call(e,c)},t.p="",t(t.s=0)}([function(e,c,t){"use strict";t.r(c),t.d(c,"deepObjectsMerge",function(){return r}),t.d(c,"getColor",function(){return s}),t.d(c,"getStyle",function(){return i}),t.d(c,"hexToRgb",function(){return d}),t.d(c,"hexToRgba",function(){return l}),t.d(c,"makeUid",function(){return h}),t.d(c,"omitByKeys",function(){return p}),t.d(c,"pickByKeys",function(){return b}),t.d(c,"rgbToHex",function(){return g});var r=function e(c,t){for(var r=0,o=Object.keys(t);r<o.length;r++){var a=o[r];t[a]instanceof Object&&Object.assign(t[a],e(c[a],t[a]))}return Object.assign(c||{},t),c},o=function(){for(var e={},c=document.styleSheets,t="",r=c.length-1;r>-1;r--){for(var o=c[r].cssRules,a=o.length-1;a>-1;a--)if(".ie-custom-properties"===o[a].selectorText){t=o[a].cssText;break}if(t)break}return(t=t.substring(t.lastIndexOf("{")+1,t.lastIndexOf("}"))).split(";").forEach(function(c){if(c){var t=c.split(": ")[0],r=c.split(": ")[1];t&&r&&(e["--".concat(t.trim())]=r.trim())}}),e},a=function(){return Boolean(document.documentMode)&&document.documentMode>=10},n=function(e){return e.match(/^--.*/i)},i=function(e){var c,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document.body;if(n(e)&&a()){var r=o();c=r[e]}else c=window.getComputedStyle(t,null).getPropertyValue(e).replace(/^\s/,"");return c},s=function(e){var c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document.body,t="--".concat(e),r=i(t,c);return r||e},d=function(e){if(void 0===e)throw new TypeError("Hex color is not defined");var c,t,r;if(!e.match(/^#(?:[0-9a-f]{3}){1,2}$/i))throw new Error("".concat(e," is not a valid hex color"));return 7===e.length?(c=parseInt(e.slice(1,3),16),t=parseInt(e.slice(3,5),16),r=parseInt(e.slice(5,7),16)):(c=parseInt(e.slice(1,2),16),t=parseInt(e.slice(2,3),16),r=parseInt(e.slice(3,5),16)),"rgba(".concat(c,", ").concat(t,", ").concat(r,")")},l=function(e){var c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100;if(void 0===e)throw new TypeError("Hex color is not defined");var t,r,o,a=e.match(/^#(?:[0-9a-f]{3}){1,2}$/i);if(!a)throw new Error("".concat(e," is not a valid hex color"));return 7===e.length?(t=parseInt(e.slice(1,3),16),r=parseInt(e.slice(3,5),16),o=parseInt(e.slice(5,7),16)):(t=parseInt(e.slice(1,2),16),r=parseInt(e.slice(2,3),16),o=parseInt(e.slice(3,5),16)),"rgba(".concat(t,", ").concat(r,", ").concat(o,", ").concat(c/100,")")},h=function(){return"uid-"+Math.random().toString(36).substr(2)},p=function(e,c){for(var t={},r=Object.keys(e),o=0;o<r.length;o++)!c.includes(r[o])&&(t[r[o]]=e[r[o]]);return t},b=function(e,c){for(var t={},r=0;r<c.length;r++)t[c[r]]=e[c[r]];return t},g=function(e){if(void 0===e)throw new TypeError("Hex color is not defined");if("transparent"===e)return"#00000000";var c=e.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);if(!c)throw new Error("".concat(e," is not a valid rgb color"));var t="0".concat(parseInt(c[1],10).toString(16)),r="0".concat(parseInt(c[2],10).toString(16)),o="0".concat(parseInt(c[3],10).toString(16));return"#".concat(t.slice(-2)).concat(r.slice(-2)).concat(o.slice(-2))};c.default={deepObjectsMerge:r,getColor:s,getStyle:i,hexToRgb:d,hexToRgba:l,makeUid:h,omitByKeys:p,pickByKeys:b,rgbToHex:g}}]))}}]);