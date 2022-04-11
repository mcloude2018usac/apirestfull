"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2833],{72833:(P,s,i)=>{i.r(s),i.d(s,{MapsPageModule:()=>y});var o=i(23349),g=i(55787),p=i(69808),c=i(70655),d=i(96090),m=i(92166),n=i(5e3);let v=(()=>{class e{constructor(t){this.loadingController=t,this.mapOptions={zoom:15,center:{lat:-34.9199842,lng:-56.149849}}}ngAfterViewInit(){this._GoogleMap.$mapReady.subscribe(t=>{this.map=t,console.log("ngAfterViewInit - Google map ready")}),this.createLoader()}createLoader(){return(0,c.mG)(this,void 0,void 0,function*(){this.loadingElement=yield this.loadingController.create({message:"Trying to get your current location..."})})}presentLoader(){return(0,c.mG)(this,void 0,void 0,function*(){yield this.loadingElement.present()})}dismissLoader(){return(0,c.mG)(this,void 0,void 0,function*(){this.loadingElement&&(yield this.loadingElement.dismiss())})}geolocateMe(){this.presentLoader(),d.b.getCurrentPosition().then(t=>{const a=new google.maps.LatLng(t.coords.latitude,t.coords.longitude);new google.maps.Marker({position:a,title:"You are here!"}).setMap(this.map)}).catch(t=>{console.log("Error getting current location",t)}).finally(()=>this.dismissLoader())}}return e.\u0275fac=function(t){return new(t||e)(n.Y36(o.HT))},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-maps"]],viewQuery:function(t,a){if(1&t&&n.Gf(m.z,5),2&t){let r;n.iGM(r=n.CRH())&&(a._GoogleMap=r.first)}},decls:14,vars:2,consts:[["color","primary"],["slot","start"],["size","small"],["mode","indeterminate","color","primary",3,"strokeWidth"],["collapse","true","slot","end"],["slot","icon-only","name","share"],[1,"video-playlist-content"],["vertical","top","horizontal","end","slot","fixed"],["color","secondary",3,"click"],["name","locate"],[3,"mapOptions"]],template:function(t,a){1&t&&(n.TgZ(0,"ion-header"),n.TgZ(1,"ion-toolbar",0),n.TgZ(2,"ion-buttons",1),n._UZ(3,"ion-menu-button"),n.qZA(),n.TgZ(4,"ion-title",2),n._UZ(5,"mat-progress-spinner",3),n.qZA(),n.TgZ(6,"ion-buttons",4),n.TgZ(7,"ion-button"),n._UZ(8,"ion-icon",5),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.TgZ(9,"ion-content",6),n.TgZ(10,"ion-fab",7),n.TgZ(11,"ion-fab-button",8),n.NdJ("click",function(){return a.geolocateMe()}),n._UZ(12,"ion-icon",9),n.qZA(),n.qZA(),n._UZ(13,"app-google-map",10),n.qZA()),2&t&&(n.xp6(5),n.Q6J("strokeWidth",10),n.xp6(8),n.Q6J("mapOptions",a.mapOptions))},directives:[o.Gu,o.sr,o.Sm,o.fG,o.wd,o.YG,o.gu,o.W2,o.IJ,o.W4],styles:["[_nghost-%COMP%]{--page-margin: var(--app-fair-margin);--page-background: var(--app-background)}app-google-map[_ngcontent-%COMP%]{display:block;width:100%;height:100%}.video-playlist-content[_ngcontent-%COMP%]{--background: var(--page-background)}.video-playlist-content[_ngcontent-%COMP%]   .video-data-section[_ngcontent-%COMP%]{padding:var(--page-margin)}.video-playlist-content[_ngcontent-%COMP%]   .video-data-section[_ngcontent-%COMP%]   .video-title[_ngcontent-%COMP%]{margin-top:0;margin-bottom:calc(var(--page-margin) / 2);color:var(--ion-color-secondary)}.video-playlist-content[_ngcontent-%COMP%]   .video-data-section[_ngcontent-%COMP%]   .video-description[_ngcontent-%COMP%]{margin:0;font-size:13px;line-height:1.3;letter-spacing:.3px;color:var(--ion-color-dark)}.video-playlist-content[_ngcontent-%COMP%]   .video-playlist-section[_ngcontent-%COMP%]{padding:0px var(--page-margin);padding-bottom:var(--page-margin)}.video-playlist-content[_ngcontent-%COMP%]   .video-playlist-section[_ngcontent-%COMP%]   .playlist-item-row[_ngcontent-%COMP%]{--ion-grid-column-padding: 0px}.video-playlist-content[_ngcontent-%COMP%]   .video-playlist-section[_ngcontent-%COMP%]   .playlist-item-row[_ngcontent-%COMP%]:not(:first-child){padding-top:calc(var(--page-margin) / 2)}.video-playlist-content[_ngcontent-%COMP%]   .video-playlist-section[_ngcontent-%COMP%]   .playlist-item-row[_ngcontent-%COMP%]:not(:last-child){padding-bottom:calc(var(--page-margin) / 2);box-shadow:inset 0 -7px 3px -8px var(--ion-color-darkest)}.video-playlist-content[_ngcontent-%COMP%]   .video-playlist-section[_ngcontent-%COMP%]   .play-icon-wrapper[_ngcontent-%COMP%]{height:100%;text-decoration:none;display:flex;justify-content:center;align-items:center}.video-playlist-content[_ngcontent-%COMP%]   .video-playlist-section[_ngcontent-%COMP%]   .play-icon-wrapper[_ngcontent-%COMP%]   .play-icon[_ngcontent-%COMP%]{color:var(--ion-color-secondary);background:rgba(var(--ion-color-lightest-rgb),.7);font-size:20px;padding:8px;border-radius:50%}.video-playlist-content[_ngcontent-%COMP%]   .video-playlist-section[_ngcontent-%COMP%]   .video-info-wrapper[_ngcontent-%COMP%]{-webkit-padding-start:var(--page-margin);padding-inline-start:var(--page-margin);align-self:center}.video-playlist-content[_ngcontent-%COMP%]   .video-playlist-section[_ngcontent-%COMP%]   .video-info-wrapper[_ngcontent-%COMP%]   .image-title[_ngcontent-%COMP%]{margin:0;margin-bottom:calc(var(--page-margin) / 4);color:var(--ion-color-secondary);font-size:14px}.video-playlist-content[_ngcontent-%COMP%]   .video-playlist-section[_ngcontent-%COMP%]   .video-info-wrapper[_ngcontent-%COMP%]   .image-title[_ngcontent-%COMP%]   app-text-shell[_ngcontent-%COMP%]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.video-playlist-content[_ngcontent-%COMP%]   .video-playlist-section[_ngcontent-%COMP%]   .video-info-wrapper[_ngcontent-%COMP%]   .image-description[_ngcontent-%COMP%]{margin:0;color:var(--ion-color-dark);font-size:13px;line-height:1.3;letter-spacing:.3px;display:-webkit-box;-webkit-line-clamp:3;overflow:hidden;-webkit-box-orient:vertical}"]}),e})();var M=i(33678);let y=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[[o.Pc,p.ez,M.K,g.Bz.forChild([{path:"",component:v}])]]}),e})()}}]);