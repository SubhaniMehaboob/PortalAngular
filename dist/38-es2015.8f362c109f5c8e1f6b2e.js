(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{A1uq:function(t,e,i){"use strict";i.r(e),i.d(e,"MapsModule",function(){return P});var n=i("SVse"),s=i("8Y7J"),a=i("2Vo4"),o=i("HDdC"),r=i("XNiG"),h=i("itXk"),g=i("eIep"),c=i("IzEk"),l=i("lJxs"),p=i("1G5W");const d=["*"];class m{constructor(t){this._ngZone=t,this._pending=[],this._listeners=[],this._targetStream=new a.a(void 0)}_clearListeners(){for(const t of this._listeners)t.remove();this._listeners=[]}getLazyEmitter(t){return this._targetStream.pipe(Object(g.a)(e=>{const i=new o.a(n=>{if(!e)return void this._pending.push({observable:i,observer:n});const s=e.addListener(t,t=>{this._ngZone.run(()=>n.next(t))});return this._listeners.push(s),()=>s.remove()});return i}))}setTarget(t){const e=this._targetStream.value;t!==e&&(e&&(this._clearListeners(),this._pending=[]),this._targetStream.next(t),this._pending.forEach(t=>t.observable.subscribe(t.observer)),this._pending=[])}destroy(){this._clearListeners(),this._pending=[],this._targetStream.complete()}}const _={center:{lat:37.421995,lng:-122.084092},zoom:17,mapTypeId:"roadmap"};let u=(()=>{class t{constructor(t,e,i){this._elementRef=t,this._ngZone=e,this._eventManager=new m(this._ngZone),this.height="500px",this.width="500px",this._options=_,this.boundsChanged=this._eventManager.getLazyEmitter("bounds_changed"),this.centerChanged=this._eventManager.getLazyEmitter("center_changed"),this.mapClick=this._eventManager.getLazyEmitter("click"),this.mapDblclick=this._eventManager.getLazyEmitter("dblclick"),this.mapDrag=this._eventManager.getLazyEmitter("drag"),this.mapDragend=this._eventManager.getLazyEmitter("dragend"),this.mapDragstart=this._eventManager.getLazyEmitter("dragstart"),this.headingChanged=this._eventManager.getLazyEmitter("heading_changed"),this.idle=this._eventManager.getLazyEmitter("idle"),this.maptypeidChanged=this._eventManager.getLazyEmitter("maptypeid_changed"),this.mapMousemove=this._eventManager.getLazyEmitter("mousemove"),this.mapMouseout=this._eventManager.getLazyEmitter("mouseout"),this.mapMouseover=this._eventManager.getLazyEmitter("mouseover"),this.projectionChanged=this._eventManager.getLazyEmitter("projection_changed"),this.mapRightclick=this._eventManager.getLazyEmitter("rightclick"),this.tilesloaded=this._eventManager.getLazyEmitter("tilesloaded"),this.tiltChanged=this._eventManager.getLazyEmitter("tilt_changed"),this.zoomChanged=this._eventManager.getLazyEmitter("zoom_changed"),this._isBrowser=Object(n.H)(i),this._isBrowser&&window}set center(t){this._center=t}set zoom(t){this._zoom=t}set options(t){this._options=t||_}ngOnChanges(t){(t.height||t.width)&&this._setSize();const e=this.googleMap;e&&(t.options&&e.setOptions(this._combineOptions()),t.center&&this._center&&e.setCenter(this._center),t.zoom&&null!=this._zoom&&e.setZoom(this._zoom),t.mapTypeId&&this.mapTypeId&&e.setMapTypeId(this.mapTypeId))}ngOnInit(){this._isBrowser&&(this._mapEl=this._elementRef.nativeElement.querySelector(".map-container"),this._setSize(),this._ngZone.runOutsideAngular(()=>{this.googleMap=new google.maps.Map(this._mapEl,this._combineOptions())}),this._eventManager.setTarget(this.googleMap))}ngOnDestroy(){this._eventManager.destroy()}fitBounds(t,e){this._assertInitialized(),this.googleMap.fitBounds(t,e)}panBy(t,e){this._assertInitialized(),this.googleMap.panBy(t,e)}panTo(t){this._assertInitialized(),this.googleMap.panTo(t)}panToBounds(t,e){this._assertInitialized(),this.googleMap.panToBounds(t,e)}getBounds(){return this._assertInitialized(),this.googleMap.getBounds()||null}getCenter(){return this._assertInitialized(),this.googleMap.getCenter()}getClickableIcons(){return this._assertInitialized(),this.googleMap.getClickableIcons()}getHeading(){return this._assertInitialized(),this.googleMap.getHeading()}getMapTypeId(){return this._assertInitialized(),this.googleMap.getMapTypeId()}getProjection(){return this._assertInitialized(),this.googleMap.getProjection()}getStreetView(){return this._assertInitialized(),this.googleMap.getStreetView()}getTilt(){return this._assertInitialized(),this.googleMap.getTilt()}getZoom(){return this._assertInitialized(),this.googleMap.getZoom()}get controls(){return this._assertInitialized(),this.googleMap.controls}get data(){return this._assertInitialized(),this.googleMap.data}get mapTypes(){return this._assertInitialized(),this.googleMap.mapTypes}get overlayMapTypes(){return this._assertInitialized(),this.googleMap.overlayMapTypes}_setSize(){if(this._mapEl){const t=this._mapEl.style;t.height=null===this.height?"":M(this.height)||"500px",t.width=null===this.width?"":M(this.width)||"500px"}}_combineOptions(){var t,e;const i=this._options||{};return Object.assign(Object.assign({},i),{center:this._center||i.center||_.center,zoom:null!==(e=null!==(t=this._zoom)&&void 0!==t?t:i.zoom)&&void 0!==e?e:_.zoom,mapTypeId:this.mapTypeId||i.mapTypeId||_.mapTypeId})}_assertInitialized(){}}return t.\u0275fac=function(e){return new(e||t)(s.Xb(s.o),s.Xb(s.G),s.Xb(s.J))},t.\u0275cmp=s.Rb({type:t,selectors:[["google-map"]],inputs:{height:"height",width:"width",center:"center",zoom:"zoom",options:"options",mapTypeId:"mapTypeId"},outputs:{boundsChanged:"boundsChanged",centerChanged:"centerChanged",mapClick:"mapClick",mapDblclick:"mapDblclick",mapDrag:"mapDrag",mapDragend:"mapDragend",mapDragstart:"mapDragstart",headingChanged:"headingChanged",idle:"idle",maptypeidChanged:"maptypeidChanged",mapMousemove:"mapMousemove",mapMouseout:"mapMouseout",mapMouseover:"mapMouseover",projectionChanged:"projectionChanged",mapRightclick:"mapRightclick",tilesloaded:"tilesloaded",tiltChanged:"tiltChanged",zoomChanged:"zoomChanged"},exportAs:["googleMap"],features:[s.Ib],ngContentSelectors:d,decls:2,vars:0,consts:[[1,"map-container"]],template:function(t,e){1&t&&(s.vc(),s.Yb(0,"div",0),s.uc(1))},encapsulation:2,changeDetection:0}),t})();const b=/([A-Za-z%]+)$/;function M(t){return null==t?"":b.test(t)?t:`${t}px`}let z=(()=>{class t{constructor(t,e,i){this._googleMap=t,this._elementRef=e,this._ngZone=i,this._eventManager=new m(this._ngZone),this._options=new a.a({}),this._position=new a.a(void 0),this._destroy=new r.a,this.closeclick=this._eventManager.getLazyEmitter("closeclick"),this.contentChanged=this._eventManager.getLazyEmitter("content_changed"),this.domready=this._eventManager.getLazyEmitter("domready"),this.positionChanged=this._eventManager.getLazyEmitter("position_changed"),this.zindexChanged=this._eventManager.getLazyEmitter("zindex_changed")}set options(t){this._options.next(t||{})}set position(t){this._position.next(t)}ngOnInit(){this._googleMap._isBrowser&&(this._combineOptions().pipe(Object(c.a)(1)).subscribe(t=>{this._ngZone.runOutsideAngular(()=>{this.infoWindow=new google.maps.InfoWindow(t)}),this._eventManager.setTarget(this.infoWindow)}),this._watchForOptionsChanges(),this._watchForPositionChanges())}ngOnDestroy(){this._eventManager.destroy(),this._destroy.next(),this._destroy.complete(),this.infoWindow&&this.close()}close(){this._assertInitialized(),this.infoWindow.close()}getContent(){return this._assertInitialized(),this.infoWindow.getContent()}getPosition(){return this._assertInitialized(),this.infoWindow.getPosition()}getZIndex(){return this._assertInitialized(),this.infoWindow.getZIndex()}open(t){this._assertInitialized();const e=t?t.getAnchor():void 0;this.infoWindow.get("anchor")===e&&e||(this._elementRef.nativeElement.style.display="",this.infoWindow.open(this._googleMap.googleMap,e))}_combineOptions(){return Object(h.a)([this._options,this._position]).pipe(Object(l.a)(([t,e])=>Object.assign(Object.assign({},t),{position:e||t.position,content:this._elementRef.nativeElement})))}_watchForOptionsChanges(){this._options.pipe(Object(p.a)(this._destroy)).subscribe(t=>{this._assertInitialized(),this.infoWindow.setOptions(t)})}_watchForPositionChanges(){this._position.pipe(Object(p.a)(this._destroy)).subscribe(t=>{t&&(this._assertInitialized(),this.infoWindow.setPosition(t))})}_assertInitialized(){}}return t.\u0275fac=function(e){return new(e||t)(s.Xb(u),s.Xb(s.o),s.Xb(s.G))},t.\u0275dir=s.Sb({type:t,selectors:[["map-info-window"]],hostAttrs:[2,"display","none"],inputs:{options:"options",position:"position"},outputs:{closeclick:"closeclick",contentChanged:"contentChanged",domready:"domready",positionChanged:"positionChanged",zindexChanged:"zindexChanged"},exportAs:["mapInfoWindow"]}),t})();const v={position:{lat:37.421995,lng:-122.084092}};let y=(()=>{class t{constructor(t,e){this._googleMap=t,this._ngZone=e,this._eventManager=new m(this._ngZone),this.animationChanged=this._eventManager.getLazyEmitter("animation_changed"),this.mapClick=this._eventManager.getLazyEmitter("click"),this.clickableChanged=this._eventManager.getLazyEmitter("clickable_changed"),this.cursorChanged=this._eventManager.getLazyEmitter("cursor_changed"),this.mapDblclick=this._eventManager.getLazyEmitter("dblclick"),this.mapDrag=this._eventManager.getLazyEmitter("drag"),this.mapDragend=this._eventManager.getLazyEmitter("dragend"),this.draggableChanged=this._eventManager.getLazyEmitter("draggable_changed"),this.mapDragstart=this._eventManager.getLazyEmitter("dragstart"),this.flatChanged=this._eventManager.getLazyEmitter("flat_changed"),this.iconChanged=this._eventManager.getLazyEmitter("icon_changed"),this.mapMousedown=this._eventManager.getLazyEmitter("mousedown"),this.mapMouseout=this._eventManager.getLazyEmitter("mouseout"),this.mapMouseover=this._eventManager.getLazyEmitter("mouseover"),this.mapMouseup=this._eventManager.getLazyEmitter("mouseup"),this.positionChanged=this._eventManager.getLazyEmitter("position_changed"),this.mapRightclick=this._eventManager.getLazyEmitter("rightclick"),this.shapeChanged=this._eventManager.getLazyEmitter("shape_changed"),this.titleChanged=this._eventManager.getLazyEmitter("title_changed"),this.visibleChanged=this._eventManager.getLazyEmitter("visible_changed"),this.zindexChanged=this._eventManager.getLazyEmitter("zindex_changed")}set title(t){this._title=t}set position(t){this._position=t}set label(t){this._label=t}set clickable(t){this._clickable=t}set options(t){this._options=t}ngOnInit(){this._googleMap._isBrowser&&(this._ngZone.runOutsideAngular(()=>{this.marker=new google.maps.Marker(this._combineOptions())}),this._assertInitialized(),this.marker.setMap(this._googleMap.googleMap),this._eventManager.setTarget(this.marker))}ngOnChanges(t){const{marker:e,_title:i,_position:n,_label:s,_clickable:a}=this;e&&(t.options&&e.setOptions(this._combineOptions()),t.title&&void 0!==i&&e.setTitle(i),t.position&&n&&e.setPosition(n),t.label&&void 0!==s&&e.setLabel(s),t.clickable&&void 0!==a&&e.setClickable(a))}ngOnDestroy(){this._eventManager.destroy(),this.marker&&this.marker.setMap(null)}getAnimation(){return this._assertInitialized(),this.marker.getAnimation()||null}getClickable(){return this._assertInitialized(),this.marker.getClickable()}getCursor(){return this._assertInitialized(),this.marker.getCursor()||null}getDraggable(){return this._assertInitialized(),!!this.marker.getDraggable()}getIcon(){return this._assertInitialized(),this.marker.getIcon()||null}getLabel(){return this._assertInitialized(),this.marker.getLabel()||null}getOpacity(){return this._assertInitialized(),this.marker.getOpacity()||null}getPosition(){return this._assertInitialized(),this.marker.getPosition()||null}getShape(){return this._assertInitialized(),this.marker.getShape()||null}getTitle(){return this._assertInitialized(),this.marker.getTitle()||null}getVisible(){return this._assertInitialized(),this.marker.getVisible()}getZIndex(){return this._assertInitialized(),this.marker.getZIndex()||null}getAnchor(){return this._assertInitialized(),this.marker}_combineOptions(){const t=this._options||v;return Object.assign(Object.assign({},t),{title:this._title||t.title,position:this._position||t.position,label:this._label||t.label,clickable:void 0!==this._clickable?this._clickable:t.clickable,map:this._googleMap.googleMap})}_assertInitialized(){}}return t.\u0275fac=function(e){return new(e||t)(s.Xb(u),s.Xb(s.G))},t.\u0275dir=s.Sb({type:t,selectors:[["map-marker"]],inputs:{title:"title",position:"position",label:"label",clickable:"clickable",options:"options"},outputs:{animationChanged:"animationChanged",mapClick:"mapClick",clickableChanged:"clickableChanged",cursorChanged:"cursorChanged",mapDblclick:"mapDblclick",mapDrag:"mapDrag",mapDragend:"mapDragend",draggableChanged:"draggableChanged",mapDragstart:"mapDragstart",flatChanged:"flatChanged",iconChanged:"iconChanged",mapMousedown:"mapMousedown",mapMouseout:"mapMouseout",mapMouseover:"mapMouseover",mapMouseup:"mapMouseup",positionChanged:"positionChanged",mapRightclick:"mapRightclick",shapeChanged:"shapeChanged",titleChanged:"titleChanged",visibleChanged:"visibleChanged",zindexChanged:"zindexChanged"},exportAs:["mapMarker"],features:[s.Ib]}),t})(),C=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=s.Vb({type:t}),t.\u0275inj=s.Ub({}),t})();var f=i("IheW"),w=i("JIr8"),k=i("LRne");let I=(()=>{class t{constructor(t){this.apiLoaded=t.jsonp("https://maps.googleapis.com/maps/api/js?key=AIzaSyASyYRBZmULmrmw_P9kgr7_266OhFNinPA","callback").pipe(Object(l.a)(()=>!0),Object(w.a)(()=>Object(k.a)(!1)))}}return t.\u0275fac=function(e){return new(e||t)(s.kc(f.a))},t.\u0275prov=s.Tb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var E=i("AwSQ"),L=i("4qVP"),O=i("Iluq");const D=["myGoogleMap"];function S(t,e){if(1&t){const t=s.ec();s.dc(0,"map-marker",6,7),s.nc("mapClick",function(){s.Ic(t);const i=e.$implicit,n=s.Gc(1);return s.qc(2).openInfoWindow(n,i)}),s.cc()}if(2&t){const t=e.$implicit,i=s.qc(2);s.wc("label",t.label)("title",t.title)("position",t.position)("options",i.markerOptions)}}function T(t,e){if(1&t&&(s.dc(0,"div"),s.dc(1,"google-map",2,3),s.Qc(3,S,2,4,"map-marker",4),s.dc(4,"map-info-window"),s.dc(5,"a",5),s.dc(6,"strong"),s.Sc(7),s.cc(),s.cc(),s.cc(),s.dc(8,"map-info-window"),s.Sc(9),s.cc(),s.cc(),s.cc()),2&t){const t=s.qc();s.Kb(1),s.wc("zoom",t.zoom)("center",t.center)("options",t.options),s.Kb(2),s.wc("ngForOf",t.markers),s.Kb(2),s.xc("href",null==t.activeInfoWindow?null:t.activeInfoWindow.www,s.Kc),s.Kb(2),s.Tc(null==t.activeInfoWindow?null:t.activeInfoWindow.title),s.Kb(2),s.Tc(t.infoContent)}}let x=(()=>{class t{constructor(t,e,i,n){this.gmLoader=t,this.commonData=e,this.service=i,this.document=n,this.maxZoom=15,this.minZoom=8,this.title="",this.machines=[],this.options={center:{lat:17.1434937,lng:79.5968943},zoom:11},this.markerOptions={draggable:!0},this.markerPositions=[],this.markers=[{position:{lat:17.1434937,lng:79.5968943},label:"SVEC11",title:"ComputerScience,Suryapet"},{position:{lat:12.1454937,lng:79.5968943},label:"SVEC12",title:"EEE,Suryapet"},{position:{lat:11.1434937,lng:75.5968943},label:"SVEC13",title:"Mech,Suryapet"}]}get infoWindowContent(){return this.activeInfoWindow}set infoWindowContent(t){this.title=t.title,this.activeInfoWindow=t}ngOnInit(){this.getLocations()}ngOnDestroy(){this.removeGoogleMapScript()}getLocations(){this.service.getMachines(this.commonData.merchantId,4,2).subscribe(t=>{if(console.log("getMachines Reponse:::"+JSON.stringify(t)),t&&200==t.statusCode){this.machines=t.rowMachines;for(let t=0;t<this.machines.length;t++)for(var e=0;e<=this.machines[0].machines.length;e++)this.latitudes=this.machines[t].machines[e].latitude,this.logntitude=this.machines[t].machines[e].logntitude,this.loginId=this.machines[t].machines[e].loginId,this.active=this.machines[t].machines[e].active,this.addresss=this.machines[t].machines[e].address;this.setPositions(this.machines)}})}setPositions(t){this.markers.forEach(t=>{const{lat:e,lng:i}=Object.assign({},t.position);this.markerPositions.push({lat:e,lng:i})})}onMapClicked(t){console.table(t.coords),this.latitude=t.coords.lat,this.longitude=t.coords.lng}openInfoWindow(t,e){this.infoWindowContent=e,this.infoWindow.open(t)}zoomIn(){this.zoom<this.maxZoom&&this.zoom++,console.log("Get Zoom",this.map.getZoom())}zoomOut(){this.zoom>this.minZoom&&this.zoom--}logCenter(){console.log(JSON.stringify(this.map.getCenter()))}removeGoogleMapScript(){const t=["maps.googleapis"];window.google=void 0;const e=this.document.head.getElementsByTagName("script");for(let i=e.length-1;i>=0;i--){const n=e[i].getAttribute("src");null!=n&&t.filter(t=>n.includes(t)).length&&e[i].remove()}}}return t.\u0275fac=function(e){return new(e||t)(s.Xb(I),s.Xb(L.a),s.Xb(E.a),s.Xb(n.e))},t.\u0275cmp=s.Rb({type:t,selectors:[["app-google-maps-integration"]],viewQuery:function(t,e){if(1&t&&(s.Xc(D,1),s.Xc(z,1),s.Xc(z,1)),2&t){let t;s.Fc(t=s.oc())&&(e.map=t.first),s.Fc(t=s.oc())&&(e.info=t.first),s.Fc(t=s.oc())&&(e.infoWindow=t.first)}},features:[s.Jb([I])],decls:8,vars:3,consts:[[1,"fade-in"],[4,"ngIf"],["height","450px","width","100%",3,"zoom","center","options"],["myGoogleMap",""],[3,"label","title","position","options","mapClick",4,"ngFor","ngForOf"],["target","_blank",1,"px-2",3,"href"],[3,"label","title","position","options","mapClick"],["marker","mapMarker"]],template:function(t,e){1&t&&(s.dc(0,"div",0),s.dc(1,"c-card"),s.dc(2,"c-card-header"),s.Sc(3,"Google Maps "),s.cc(),s.dc(4,"c-card-body"),s.Qc(5,T,10,7,"div",1),s.rc(6,"async"),s.Yb(7,"div"),s.cc(),s.cc(),s.cc()),2&t&&(s.Kb(5),s.wc("ngIf",s.sc(6,1,e.gmLoader.apiLoaded)))},directives:[O.qc,O.uc,O.rc,n.p,u,n.o,z,y],pipes:[n.b],styles:[""]}),t})();var j=i("iInd");const W=[{path:"",component:x,data:{title:"Google Maps"}}];let Z=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=s.Vb({type:t}),t.\u0275inj=s.Ub({imports:[[j.g.forChild(W)],j.g]}),t})();var A=i("rVqu");let P=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=s.Vb({type:t,bootstrap:[x]}),t.\u0275inj=s.Ub({providers:[],imports:[[n.c,C,f.c,f.b,Z,O.h,A.b,O.c]]}),t})()}}]);