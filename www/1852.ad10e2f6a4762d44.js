"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[1852],{81852:(Be,E,d)=>{d.r(E),d.d(E,{VideoPlaylistPageModule:()=>De});var f=d(23349),R=d(55787),p=d(69808),G=d(49926);const Z=(0,d(47423).fo)("Share",{web:()=>d.e(7907).then(d.bind(d,17907)).then(n=>new n.ShareWeb)});var t=d(5e3),C=d(51062),$=d(89330),I=d(77579),l=d(54968),U=d(68306),N=d(39841),O=d(5963),Y=d(54004);let u=(()=>{class n{}return n.VG_ENDED="ended",n.VG_PAUSED="paused",n.VG_PLAYING="playing",n.VG_LOADING="waiting",n.\u0275fac=function(e){return new(e||n)},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})(),h=(()=>{class n{constructor(){this.medias={},this.playerReadyEvent=new t.vpe(!0),this.isPlayerReady=!1}onPlayerReady(e){this.fsAPI=e,this.isPlayerReady=!0,this.playerReadyEvent.emit(this)}getDefaultMedia(){for(const e in this.medias)if(this.medias[e])return this.medias[e]}getMasterMedia(){let e;for(const i in this.medias)if("true"===this.medias[i].vgMaster||!0===this.medias[i].vgMaster){e=this.medias[i];break}return e||this.getDefaultMedia()}isMasterDefined(){let e=!1;for(const i in this.medias)if("true"===this.medias[i].vgMaster||!0===this.medias[i].vgMaster){e=!0;break}return e}getMediaById(e=null){let i=this.medias[e];return(!e||"*"===e)&&(i=this),i}play(){for(const e in this.medias)this.medias[e]&&this.medias[e].play()}pause(){for(const e in this.medias)this.medias[e]&&this.medias[e].pause()}get duration(){return this.$$getAllProperties("duration")}set currentTime(e){this.$$setAllProperties("currentTime",e)}get currentTime(){return this.$$getAllProperties("currentTime")}set state(e){this.$$setAllProperties("state",e)}get state(){return this.$$getAllProperties("state")}set volume(e){this.$$setAllProperties("volume",e)}get volume(){return this.$$getAllProperties("volume")}set playbackRate(e){this.$$setAllProperties("playbackRate",e)}get playbackRate(){return this.$$getAllProperties("playbackRate")}get canPlay(){return this.$$getAllProperties("canPlay")}get canPlayThrough(){return this.$$getAllProperties("canPlayThrough")}get isMetadataLoaded(){return this.$$getAllProperties("isMetadataLoaded")}get isWaiting(){return this.$$getAllProperties("isWaiting")}get isCompleted(){return this.$$getAllProperties("isCompleted")}get isLive(){return this.$$getAllProperties("isLive")}get isMaster(){return this.$$getAllProperties("isMaster")}get time(){return this.$$getAllProperties("time")}get buffer(){return this.$$getAllProperties("buffer")}get buffered(){return this.$$getAllProperties("buffered")}get subscriptions(){return this.$$getAllProperties("subscriptions")}get textTracks(){return this.$$getAllProperties("textTracks")}seekTime(e,i=!1){for(const s in this.medias)this.medias[s]&&this.$$seek(this.medias[s],e,i)}$$seek(e,i,s=!1){let o,a=e.duration;s?(this.isMasterDefined()&&(a=this.getMasterMedia().duration),o=i*a/100):o=i,e.currentTime=o}addTextTrack(e,i,s){for(const o in this.medias)this.medias[o]&&this.$$addTextTrack(this.medias[o],e,i,s)}$$addTextTrack(e,i,s,o){e.addTextTrack(i,s,o)}$$getAllProperties(e){const i={};let s;for(const a in this.medias)this.medias[a]&&(i[a]=this.medias[a]);switch(Object.keys(i).length){case 0:switch(e){case"state":s=u.VG_PAUSED;break;case"playbackRate":case"volume":s=1;break;case"time":s={current:0,total:0,left:0}}break;case 1:s=i[Object.keys(i)[0]][e];break;default:s=i[this.getMasterMedia().id][e]}return s}$$setAllProperties(e,i){for(const s in this.medias)this.medias[s]&&(this.medias[s][e]=i)}registerElement(e){this.videogularElement=e}registerMedia(e){this.medias[e.id]=e}unregisterMedia(e){delete this.medias[e.id]}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})(),v=(()=>{class n{constructor(){this.isHiddenSubject=new I.x,this.isHidden=this.isHiddenSubject.asObservable()}state(e){this.isHiddenSubject.next(e)}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})(),y=(()=>{class n{static getZIndex(){let i,e=1;const s=document.getElementsByTagName("*");for(let o=0,a=s.length;o<a;o++)i=parseInt(window.getComputedStyle(s[o])["z-index"],10),i>e&&(e=i+1);return e}static isMobileDevice(){return void 0!==window.orientation||-1!==navigator.userAgent.indexOf("IEMobile")}static isiOSDevice(){return(navigator.userAgent.match(/ip(hone|ad|od)/i)||n.isIpadOS())&&!navigator.userAgent.match(/(iemobile)[\/\s]?([\w\.]*)/i)}static isIpadOS(){return navigator.maxTouchPoints&&navigator.maxTouchPoints>2&&/MacIntel/.test(navigator.platform)}static isCordova(){return-1===document.URL.indexOf("http://")&&-1===document.URL.indexOf("https://")}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})(),b=(()=>{class n{constructor(){this.nativeFullscreen=!0,this.isFullscreen=!1,this.onChangeFullscreen=new t.vpe}init(e,i){this.videogularElement=e,this.medias=i;const s={w3:{enabled:"fullscreenEnabled",element:"fullscreenElement",request:"requestFullscreen",exit:"exitFullscreen",onchange:"fullscreenchange",onerror:"fullscreenerror"},newWebkit:{enabled:"webkitFullscreenEnabled",element:"webkitFullscreenElement",request:"webkitRequestFullscreen",exit:"webkitExitFullscreen",onchange:"webkitfullscreenchange",onerror:"webkitfullscreenerror"},oldWebkit:{enabled:"webkitIsFullScreen",element:"webkitCurrentFullScreenElement",request:"webkitRequestFullScreen",exit:"webkitCancelFullScreen",onchange:"webkitfullscreenchange",onerror:"webkitfullscreenerror"},moz:{enabled:"mozFullScreen",element:"mozFullScreenElement",request:"mozRequestFullScreen",exit:"mozCancelFullScreen",onchange:"mozfullscreenchange",onerror:"mozfullscreenerror"},ios:{enabled:"webkitFullscreenEnabled",element:"webkitFullscreenElement",request:"webkitEnterFullscreen",exit:"webkitExitFullscreen",onchange:"webkitendfullscreen",onerror:"webkitfullscreenerror"},ms:{enabled:"msFullscreenEnabled",element:"msFullscreenElement",request:"msRequestFullscreen",exit:"msExitFullscreen",onchange:"MSFullscreenChange",onerror:"MSFullscreenError"}};for(const a in s)if(s[a].enabled in document){this.polyfill=s[a];break}if(y.isiOSDevice()&&(this.polyfill=s.ios),this.isAvailable=null!=this.polyfill,null==this.polyfill)return;let o;switch(this.polyfill.onchange){case"mozfullscreenchange":o=document;break;case"webkitendfullscreen":o=this.medias.toArray()[0].elem;break;default:o=e}this.fsChangeSubscription=(0,l.R)(o,this.polyfill.onchange).subscribe(()=>{this.onFullscreenChange()})}onFullscreenChange(){this.isFullscreen=!!document[this.polyfill.element],this.onChangeFullscreen.emit(this.isFullscreen)}toggleFullscreen(e=null){this.isFullscreen?this.exit():this.request(e)}request(e){e||(e=this.videogularElement),this.isFullscreen=!0,this.onChangeFullscreen.emit(!0),this.isAvailable&&this.nativeFullscreen&&(y.isMobileDevice()?((!this.polyfill.enabled&&e===this.videogularElement||y.isiOSDevice())&&(e=this.medias.toArray()[0].elem),this.enterElementInFullScreen(e)):this.enterElementInFullScreen(this.videogularElement))}enterElementInFullScreen(e){e[this.polyfill.request]()}exit(){this.isFullscreen=!1,this.onChangeFullscreen.emit(!1),this.isAvailable&&this.nativeFullscreen&&document[this.polyfill.exit]()}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})(),c=(()=>{class n{}return n.VG_ABORT="abort",n.VG_CAN_PLAY="canplay",n.VG_CAN_PLAY_THROUGH="canplaythrough",n.VG_DURATION_CHANGE="durationchange",n.VG_EMPTIED="emptied",n.VG_ENCRYPTED="encrypted",n.VG_ENDED="ended",n.VG_ERROR="error",n.VG_LOADED_DATA="loadeddata",n.VG_LOADED_METADATA="loadedmetadata",n.VG_LOAD_START="loadstart",n.VG_PAUSE="pause",n.VG_PLAY="play",n.VG_PLAYING="playing",n.VG_PROGRESS="progress",n.VG_RATE_CHANGE="ratechange",n.VG_SEEK="seek",n.VG_SEEKED="seeked",n.VG_SEEKING="seeking",n.VG_STALLED="stalled",n.VG_SUSPEND="suspend",n.VG_TIME_UPDATE="timeupdate",n.VG_VOLUME_CHANGE="volumechange",n.VG_WAITING="waiting",n.VG_LOAD="load",n.VG_ENTER="enter",n.VG_EXIT="exit",n.VG_START_ADS="startads",n.VG_END_ADS="endads",n.\u0275fac=function(e){return new(e||n)},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})(),V=(()=>{class n{constructor(e,i){this.api=e,this.ref=i,this.state=u.VG_PAUSED,this.time={current:0,total:0,left:0},this.buffer={end:0},this.canPlay=!1,this.canPlayThrough=!1,this.isMetadataLoaded=!1,this.isWaiting=!1,this.isCompleted=!1,this.isLive=!1,this.isBufferDetected=!1,this.checkInterval=200,this.currentPlayPos=0,this.lastPlayPos=0,this.playAtferSync=!1,this.bufferDetected=new I.x}ngOnInit(){this.elem=this.vgMedia.nodeName?this.vgMedia:this.vgMedia.elem,this.api.registerMedia(this),this.subscriptions={abort:(0,l.R)(this.elem,c.VG_ABORT),canPlay:(0,l.R)(this.elem,c.VG_CAN_PLAY),canPlayThrough:(0,l.R)(this.elem,c.VG_CAN_PLAY_THROUGH),durationChange:(0,l.R)(this.elem,c.VG_DURATION_CHANGE),emptied:(0,l.R)(this.elem,c.VG_EMPTIED),encrypted:(0,l.R)(this.elem,c.VG_ENCRYPTED),ended:(0,l.R)(this.elem,c.VG_ENDED),error:(0,l.R)(this.elem,c.VG_ERROR),loadedData:(0,l.R)(this.elem,c.VG_LOADED_DATA),loadedMetadata:(0,l.R)(this.elem,c.VG_LOADED_METADATA),loadStart:(0,l.R)(this.elem,c.VG_LOAD_START),pause:(0,l.R)(this.elem,c.VG_PAUSE),play:(0,l.R)(this.elem,c.VG_PLAY),playing:(0,l.R)(this.elem,c.VG_PLAYING),progress:(0,l.R)(this.elem,c.VG_PROGRESS),rateChange:(0,l.R)(this.elem,c.VG_RATE_CHANGE),seeked:(0,l.R)(this.elem,c.VG_SEEKED),seeking:(0,l.R)(this.elem,c.VG_SEEKING),stalled:(0,l.R)(this.elem,c.VG_STALLED),suspend:(0,l.R)(this.elem,c.VG_SUSPEND),timeUpdate:(0,l.R)(this.elem,c.VG_TIME_UPDATE),volumeChange:(0,l.R)(this.elem,c.VG_VOLUME_CHANGE),waiting:(0,l.R)(this.elem,c.VG_WAITING),startAds:(0,l.R)(window,c.VG_START_ADS),endAds:(0,l.R)(window,c.VG_END_ADS),mutation:new U.y(e=>{const i=new MutationObserver(s=>{e.next(s)});return i.observe(this.elem,{childList:!0,attributes:!0}),()=>{i.disconnect()}}),bufferDetected:this.bufferDetected},this.mutationObs=this.subscriptions.mutation.subscribe(this.onMutation.bind(this)),this.canPlayObs=this.subscriptions.canPlay.subscribe(this.onCanPlay.bind(this)),this.canPlayThroughObs=this.subscriptions.canPlayThrough.subscribe(this.onCanPlayThrough.bind(this)),this.loadedMetadataObs=this.subscriptions.loadedMetadata.subscribe(this.onLoadMetadata.bind(this)),this.waitingObs=this.subscriptions.waiting.subscribe(this.onWait.bind(this)),this.progressObs=this.subscriptions.progress.subscribe(this.onProgress.bind(this)),this.endedObs=this.subscriptions.ended.subscribe(this.onComplete.bind(this)),this.playingObs=this.subscriptions.playing.subscribe(this.onStartPlaying.bind(this)),this.playObs=this.subscriptions.play.subscribe(this.onPlay.bind(this)),this.pauseObs=this.subscriptions.pause.subscribe(this.onPause.bind(this)),this.timeUpdateObs=this.subscriptions.timeUpdate.subscribe(this.onTimeUpdate.bind(this)),this.volumeChangeObs=this.subscriptions.volumeChange.subscribe(this.onVolumeChange.bind(this)),this.errorObs=this.subscriptions.error.subscribe(this.onError.bind(this)),this.vgMaster&&this.api.playerReadyEvent.subscribe(()=>{this.prepareSync()})}prepareSync(){const e=[];for(const i in this.api.medias)this.api.medias[i]&&e.push(this.api.medias[i].subscriptions.canPlay);this.canPlayAllSubscription=(0,N.a)(e).pipe((0,Y.U)((...i)=>{i.some(a=>!!(null==a?void 0:a.target)&&4===a.target.readyState)&&!this.syncSubscription&&(this.startSync(),this.syncSubscription.unsubscribe())})).subscribe()}startSync(){this.syncSubscription=(0,O.H)(0,1e3).subscribe(()=>{for(const e in this.api.medias)if(this.api.medias[e]!==this){const i=this.api.medias[e].currentTime-this.currentTime;i<-.3||i>.3?(this.playAtferSync=this.state===u.VG_PLAYING,this.pause(),this.api.medias[e].pause(),this.api.medias[e].currentTime=this.currentTime):this.playAtferSync&&(this.play(),this.api.medias[e].play(),this.playAtferSync=!1)}})}onMutation(e){for(let i=0,s=e.length;i<s;i++){const o=e[i];if("attributes"===o.type&&"src"===o.attributeName){if(o.target.src&&o.target.src.length>0&&o.target.src.indexOf("blob:")<0){this.loadMedia();break}}else if("childList"===o.type&&o.removedNodes.length&&"source"===o.removedNodes[0].nodeName.toLowerCase()){this.loadMedia();break}}}loadMedia(){this.vgMedia.pause(),this.vgMedia.currentTime=0,this.stopBufferCheck(),this.isBufferDetected=!0,this.bufferDetected.next(this.isBufferDetected),setTimeout(()=>this.vgMedia.load(),10)}play(){if(!(this.playPromise||this.state!==u.VG_PAUSED&&this.state!==u.VG_ENDED))return this.playPromise=this.vgMedia.play(),this.playPromise&&this.playPromise.then&&this.playPromise.catch&&this.playPromise.then(()=>{this.playPromise=null}).catch(()=>{this.playPromise=null}),this.playPromise}pause(){this.playPromise?this.playPromise.then(()=>{this.vgMedia.pause()}):this.vgMedia.pause()}get id(){let e;return this.vgMedia&&(e=this.vgMedia.id),e}get duration(){return this.vgMedia.duration===1/0?this.specifiedDuration:this.vgMedia.duration}set currentTime(e){this.vgMedia.currentTime=e}get currentTime(){return this.vgMedia.currentTime}set volume(e){this.vgMedia.volume=e}get volume(){return this.vgMedia.volume}set playbackRate(e){this.vgMedia.playbackRate=e}get playbackRate(){return this.vgMedia.playbackRate}get buffered(){return this.vgMedia.buffered}get textTracks(){return this.vgMedia.textTracks}onCanPlay(e){this.isBufferDetected=!1,this.bufferDetected.next(this.isBufferDetected),this.canPlay=!0,this.ref.detectChanges()}onCanPlayThrough(e){this.isBufferDetected=!1,this.bufferDetected.next(this.isBufferDetected),this.canPlayThrough=!0,this.ref.detectChanges()}onLoadMetadata(e){this.isMetadataLoaded=!0,this.time={current:0,left:0,total:1e3*this.duration},this.state=u.VG_PAUSED;const i=Math.round(this.time.total);this.isLive=i===1/0,this.ref.detectChanges()}onWait(e){this.isWaiting=!0,this.ref.detectChanges()}onComplete(e){this.isCompleted=!0,this.state=u.VG_ENDED,this.ref.detectChanges()}onStartPlaying(e){this.state=u.VG_PLAYING,this.ref.detectChanges()}onPlay(e){this.state=u.VG_PLAYING,this.vgMaster&&(!this.syncSubscription||this.syncSubscription.closed)&&this.startSync(),this.startBufferCheck(),this.ref.detectChanges()}onPause(e){this.state=u.VG_PAUSED,this.vgMaster&&(this.playAtferSync||this.syncSubscription.unsubscribe()),this.stopBufferCheck(),this.ref.detectChanges()}onTimeUpdate(e){const i=this.buffered.length-1;this.time={current:1e3*this.currentTime,total:this.time.total,left:1e3*(this.duration-this.currentTime)},i>=0&&(this.buffer={end:1e3*this.buffered.end(i)}),this.ref.detectChanges()}onProgress(e){const i=this.buffered.length-1;i>=0&&(this.buffer={end:1e3*this.buffered.end(i)}),this.ref.detectChanges()}onVolumeChange(e){this.ref.detectChanges()}onError(e){this.ref.detectChanges()}bufferCheck(){const e=1/this.checkInterval;this.currentPlayPos=this.currentTime,!this.isBufferDetected&&this.currentPlayPos<this.lastPlayPos+e&&(this.isBufferDetected=!0),this.isBufferDetected&&this.currentPlayPos>this.lastPlayPos+e&&(this.isBufferDetected=!1),this.bufferDetected.closed||this.bufferDetected.next(this.isBufferDetected),this.lastPlayPos=this.currentPlayPos}startBufferCheck(){this.checkBufferSubscription=(0,O.H)(0,this.checkInterval).subscribe(()=>{this.bufferCheck()})}stopBufferCheck(){this.checkBufferSubscription&&this.checkBufferSubscription.unsubscribe(),this.isBufferDetected=!1,this.bufferDetected.next(this.isBufferDetected)}seekTime(e,i=!1){let s;s=i?e*this.duration/100:e,this.currentTime=s}addTextTrack(e,i,s,o){const a=this.vgMedia.addTextTrack(e,i,s);return o&&(a.mode=o),a}ngOnDestroy(){var e,i,s,o,a,g,m,k,_,M,S,A,T,w,x,D,B;this.vgMedia.src="",null===(e=this.mutationObs)||void 0===e||e.unsubscribe(),null===(i=this.canPlayObs)||void 0===i||i.unsubscribe(),null===(s=this.canPlayThroughObs)||void 0===s||s.unsubscribe(),null===(o=this.loadedMetadataObs)||void 0===o||o.unsubscribe(),null===(a=this.waitingObs)||void 0===a||a.unsubscribe(),null===(g=this.progressObs)||void 0===g||g.unsubscribe(),null===(m=this.endedObs)||void 0===m||m.unsubscribe(),null===(k=this.playingObs)||void 0===k||k.unsubscribe(),null===(_=this.playObs)||void 0===_||_.unsubscribe(),null===(M=this.pauseObs)||void 0===M||M.unsubscribe(),null===(S=this.timeUpdateObs)||void 0===S||S.unsubscribe(),null===(A=this.volumeChangeObs)||void 0===A||A.unsubscribe(),null===(T=this.errorObs)||void 0===T||T.unsubscribe(),null===(w=this.checkBufferSubscription)||void 0===w||w.unsubscribe(),null===(x=this.syncSubscription)||void 0===x||x.unsubscribe(),null===(D=this.bufferDetected)||void 0===D||D.complete(),null===(B=this.bufferDetected)||void 0===B||B.unsubscribe(),this.api.unregisterMedia(this)}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(h),t.Y36(t.sBO))},n.\u0275dir=t.lG2({type:n,selectors:[["","vgMedia",""]],inputs:{vgMedia:"vgMedia",vgMaster:"vgMaster"}}),n})();const q=["*"];let z=(()=>{class n{constructor(e,i,s,o){this.api=i,this.fsAPI=s,this.controlsHidden=o,this.isFullscreen=!1,this.isNativeFullscreen=!1,this.areControlsHidden=!1,this.onPlayerReady=new t.vpe,this.onMediaReady=new t.vpe,this.subscriptions=[],this.elem=e.nativeElement,this.api.registerElement(this.elem)}ngAfterContentInit(){this.medias.toArray().forEach(e=>{this.api.registerMedia(e)}),this.fsAPI.init(this.elem,this.medias),this.subscriptions.push(this.fsAPI.onChangeFullscreen.subscribe(this.onChangeFullscreen.bind(this))),this.subscriptions.push(this.controlsHidden.isHidden.subscribe(this.onHideControls.bind(this))),this.api.onPlayerReady(this.fsAPI),this.onPlayerReady.emit(this.api)}onChangeFullscreen(e){this.fsAPI.nativeFullscreen?this.isNativeFullscreen=e:(this.isFullscreen=e,this.zIndex=e?y.getZIndex().toString():"auto")}onHideControls(e){this.areControlsHidden=e}ngOnDestroy(){this.subscriptions.forEach(e=>e.unsubscribe())}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(t.SBq),t.Y36(h),t.Y36(b),t.Y36(v))},n.\u0275cmp=t.Xpm({type:n,selectors:[["vg-player"]],contentQueries:function(e,i,s){if(1&e&&t.Suo(s,V,4),2&e){let o;t.iGM(o=t.CRH())&&(i.medias=o)}},hostVars:8,hostBindings:function(e,i){2&e&&(t.Udp("z-index",i.zIndex),t.ekj("fullscreen",i.isFullscreen)("native-fullscreen",i.isNativeFullscreen)("controls-hidden",i.areControlsHidden))},outputs:{onPlayerReady:"onPlayerReady",onMediaReady:"onMediaReady"},features:[t._Bn([h,b,v])],ngContentSelectors:q,decls:1,vars:0,template:function(e,i){1&e&&(t.F$t(),t.Hsn(0))},styles:['vg-player{font-family:"videogular";position:relative;display:flex;width:100%;height:100%;overflow:hidden;background-color:#000}vg-player.fullscreen{position:fixed;left:0;top:0}vg-player.native-fullscreen.controls-hidden{cursor:none}\n'],encapsulation:2}),n})();const j=[h,v,b,y,c,u];let P=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({providers:[...j],imports:[[p.ez]]}),n})();var J=d(94840),Q=d(71408);function X(n,r){if(1&n&&t._UZ(0,"source",19),2&n){const e=r.$implicit;t.Q6J("src",e.src,t.LSH)("type",e.type)}}const K=function(){return{w:3,h:2}};function W(n,r){if(1&n){const e=t.EpF();t.TgZ(0,"ion-row",20),t.TgZ(1,"ion-col",21),t.TgZ(2,"app-image-shell",22),t.NdJ("click",function(){const o=t.CHM(e).$implicit;return t.oxw().playMedia(o.video)}),t.TgZ(3,"app-aspect-ratio",7),t.TgZ(4,"a",23),t.NdJ("click",function(){const o=t.CHM(e).$implicit;return t.oxw().playMedia(o)}),t._UZ(5,"ion-icon",24),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(6,"ion-col",25),t.TgZ(7,"h4",26),t._UZ(8,"app-text-shell",14),t.qZA(),t.TgZ(9,"p",27),t._UZ(10,"app-text-shell",28),t.qZA(),t.qZA(),t.qZA()}if(2&n){const e=r.$implicit,i=t.oxw();t.xp6(2),t.Q6J("display","cover")("src",i.apifoto+e.foto)("alt","video thumbnail"),t.xp6(1),t.Q6J("ratio",t.DdM(6,K)),t.xp6(5),t.Q6J("data",e.titulo),t.xp6(2),t.Q6J("data",e.descripcion)}}const ee=function(){return{w:16,h:9}};let te=(()=>{class n{constructor(e,i){this.translateService=e,this.authenticationService=i,this.start_playing=!1,this.items=[],this.userinfo=[],this.tipovideo="video/mp4",this.seguro="",this.msg="",this.videosrc="",this.videos=[],this.apifoto=this.authenticationService.getapifoto()}ngOnInit(){this.userinfo=this.authenticationService.getcopiauser(),this.idempresa=this.userinfo[0].idempresa._id,this.translateService.get("SEGUROM").subscribe(e=>{this.seguro=e}),this.translateService.get("MSGM").subscribe(e=>{this.msg=e}),this.pideregistros("todos")}pideregistros(e){this.itemsList=[];let i="";i="6081828121f6ac1b60b0581b/6081828121f6ac1b60b0581bs/"+this.userinfo[0].idempresa._id+"/formulariosimple/",this.authenticationService.getReg(i,"frmmovils",0).then(s=>{var o;(o=s).length>0&&(this.titulovx=o[0].titulo,this.descripcionvx=o[0].descripcion,this.videosrc=""+o[0].video,this.videos.push({src:this.videosrc,type:"video/mp4"})),this.items=s,this.itemsList=this.items},s=>{this.authenticationService.presentAlert(s.error,this.msg,"")})}playMedia(e){this.videos=[],e.video!==this.videosrc&&null!=e.video&&(this.videosrc=""+e.video,setTimeout(()=>{this.videos.push({src:""+this.videosrc,type:"video/mp4"})},10))}onPlayerReady(e){this.api=e,this.api.getDefaultMedia().subscriptions.loadedMetadata.subscribe(this.playVideo.bind(this))}playVideo(){this.start_playing?this.api.play():this.start_playing=!0}shareMedia(){const e=this.videosrc;Z.share({title:e.title,text:e.description,url:"https://ionicthemes.com/",dialogTitle:"Share Media"}).then(()=>console.log("Successful share")).catch(i=>console.log("Error sharing",i))}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(C.sK),t.Y36(G.$))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-video-playlist"]],decls:23,vars:10,consts:[["color","primary"],["slot","start"],["size","small"],["collapse","true","slot","end"],[3,"click"],["slot","icon-only","name","share"],[1,"video-playlist-content"],[3,"ratio"],[1,"video-player",3,"onPlayerReady"],["controls","","id","player-video","preload","auto",1,"expand-horizontally",3,"vgMedia"],["player_video",""],[3,"src","type",4,"ngFor","ngForOf"],[1,"video-data-section"],[1,"video-title"],["animation","gradient",3,"data"],[1,"video-description"],["lines","5","animation","gradient",3,"data"],[1,"video-playlist-section"],["class","playlist-item-row",4,"ngFor","ngForOf"],[3,"src","type"],[1,"playlist-item-row"],["size","4"],["animation","spinner",1,"video-image",3,"display","src","alt","click"],[1,"play-icon-wrapper",3,"click"],["name","play",1,"play-icon"],["size","8",1,"video-info-wrapper"],[1,"image-title"],[1,"image-description"],["lines","3","animation","gradient",3,"data"]],template:function(e,i){if(1&e&&(t.TgZ(0,"ion-header"),t.TgZ(1,"ion-toolbar",0),t.TgZ(2,"ion-buttons",1),t._UZ(3,"ion-menu-button"),t.qZA(),t.TgZ(4,"ion-title",2),t._uU(5),t.ALo(6,"translate"),t.qZA(),t.TgZ(7,"ion-buttons",3),t.TgZ(8,"ion-button",4),t.NdJ("click",function(){return i.shareMedia()}),t._UZ(9,"ion-icon",5),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(10,"ion-content",6),t.TgZ(11,"app-aspect-ratio",7),t.TgZ(12,"vg-player",8),t.NdJ("onPlayerReady",function(o){return i.onPlayerReady(o)}),t.TgZ(13,"video",9,10),t.YNc(15,X,1,2,"source",11),t.qZA(),t.qZA(),t.qZA(),t.TgZ(16,"section",12),t.TgZ(17,"h3",13),t._UZ(18,"app-text-shell",14),t.qZA(),t.TgZ(19,"p",15),t._UZ(20,"app-text-shell",16),t.qZA(),t.qZA(),t.TgZ(21,"section",17),t.YNc(22,W,11,7,"ion-row",18),t.qZA(),t.qZA()),2&e){const s=t.MAs(14);t.xp6(5),t.hij(" ",t.lcZ(6,7,"microcapsulas")," "),t.xp6(6),t.Q6J("ratio",t.DdM(9,ee)),t.xp6(2),t.Q6J("vgMedia",s),t.xp6(2),t.Q6J("ngForOf",i.videos),t.xp6(3),t.Q6J("data",i.titulovx),t.xp6(2),t.Q6J("data",i.descripcionvx),t.xp6(2),t.Q6J("ngForOf",i.itemsList)}},directives:[f.Gu,f.sr,f.Sm,f.fG,f.wd,f.YG,f.gu,f.W2,$.m,z,V,p.sg,J.$,f.Nd,f.wI,Q.U],pipes:[C.X$],styles:["[_nghost-%COMP%]{--page-margin: var(--app-fair-margin);--page-background: var(--app-background)}.video-playlist-content[_ngcontent-%COMP%]{--background: var(--page-background)}.video-playlist-content[_ngcontent-%COMP%]   .video-data-section[_ngcontent-%COMP%]{padding:var(--page-margin)}.video-playlist-content[_ngcontent-%COMP%]   .video-data-section[_ngcontent-%COMP%]   .video-title[_ngcontent-%COMP%]{margin-top:0;margin-bottom:calc(var(--page-margin) / 2);color:var(--ion-color-secondary)}.video-playlist-content[_ngcontent-%COMP%]   .video-data-section[_ngcontent-%COMP%]   .video-description[_ngcontent-%COMP%]{margin:0;font-size:13px;line-height:1.3;letter-spacing:.3px;color:var(--ion-color-dark)}.video-playlist-content[_ngcontent-%COMP%]   .video-playlist-section[_ngcontent-%COMP%]{padding:0px var(--page-margin);padding-bottom:var(--page-margin)}.video-playlist-content[_ngcontent-%COMP%]   .video-playlist-section[_ngcontent-%COMP%]   .playlist-item-row[_ngcontent-%COMP%]{--ion-grid-column-padding: 0px}.video-playlist-content[_ngcontent-%COMP%]   .video-playlist-section[_ngcontent-%COMP%]   .playlist-item-row[_ngcontent-%COMP%]:not(:first-child){padding-top:calc(var(--page-margin) / 2)}.video-playlist-content[_ngcontent-%COMP%]   .video-playlist-section[_ngcontent-%COMP%]   .playlist-item-row[_ngcontent-%COMP%]:not(:last-child){padding-bottom:calc(var(--page-margin) / 2);box-shadow:inset 0 -7px 3px -8px var(--ion-color-darkest)}.video-playlist-content[_ngcontent-%COMP%]   .video-playlist-section[_ngcontent-%COMP%]   .play-icon-wrapper[_ngcontent-%COMP%]{height:100%;text-decoration:none;display:flex;justify-content:center;align-items:center}.video-playlist-content[_ngcontent-%COMP%]   .video-playlist-section[_ngcontent-%COMP%]   .play-icon-wrapper[_ngcontent-%COMP%]   .play-icon[_ngcontent-%COMP%]{color:var(--ion-color-secondary);background:rgba(var(--ion-color-lightest-rgb),.7);font-size:20px;padding:8px;border-radius:50%}.video-playlist-content[_ngcontent-%COMP%]   .video-playlist-section[_ngcontent-%COMP%]   .video-info-wrapper[_ngcontent-%COMP%]{-webkit-padding-start:var(--page-margin);padding-inline-start:var(--page-margin);align-self:center}.video-playlist-content[_ngcontent-%COMP%]   .video-playlist-section[_ngcontent-%COMP%]   .video-info-wrapper[_ngcontent-%COMP%]   .image-title[_ngcontent-%COMP%]{margin:0;margin-bottom:calc(var(--page-margin) / 4);color:var(--ion-color-secondary);font-size:14px}.video-playlist-content[_ngcontent-%COMP%]   .video-playlist-section[_ngcontent-%COMP%]   .video-info-wrapper[_ngcontent-%COMP%]   .image-title[_ngcontent-%COMP%]   app-text-shell[_ngcontent-%COMP%]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.video-playlist-content[_ngcontent-%COMP%]   .video-playlist-section[_ngcontent-%COMP%]   .video-info-wrapper[_ngcontent-%COMP%]   .image-description[_ngcontent-%COMP%]{margin:0;color:var(--ion-color-dark);font-size:13px;line-height:1.3;letter-spacing:.3px;display:-webkit-box;-webkit-line-clamp:3;overflow:hidden;-webkit-box-orient:vertical}","app-image-shell.video-image[_ngcontent-%COMP%]{background-position:center}.image-title[_ngcontent-%COMP%] > app-text-shell[_ngcontent-%COMP%]{--text-shell-line-height: 14px}.image-description[_ngcontent-%COMP%] > app-text-shell[_ngcontent-%COMP%]{--text-shell-line-height: 13px}"]}),n})();var ie=d(33678);let Ae=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[p.ez,P]]}),n})(),Te=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[p.ez,P]]}),n})(),we=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[p.ez,P]]}),n})();const xe=[{path:"",component:te}];let De=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[f.Pc,p.ez,C.aw,ie.K,R.Bz.forChild(xe),P,Ae,Te,we]]}),n})()}}]);