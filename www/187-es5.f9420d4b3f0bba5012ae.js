function asyncGeneratorStep(e,t,i,n,a,r,o){try{var s=e[r](o),c=s.value}catch(l){return void i(l)}s.done?t(c):Promise.resolve(c).then(n,a)}function _asyncToGenerator(e){return function(){var t=this,i=arguments;return new Promise((function(n,a){var r=e.apply(t,i);function o(e){asyncGeneratorStep(r,n,a,o,s,"next",e)}function s(e){asyncGeneratorStep(r,n,a,o,s,"throw",e)}o(void 0)}))}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass(e,t,i){return t&&_defineProperties(e.prototype,t),i&&_defineProperties(e,i),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[187],{eGHz:function(e,t,i){"use strict";i.r(t),i.d(t,"pwa_camera",(function(){return r}));var n=i("At8z"),a=window.ImageCapture;void 0===a&&(a=function(){function e(t){var i=this;if(_classCallCheck(this,e),"video"!==t.kind)throw new DOMException("NotSupportedError");this._videoStreamTrack=t,"readyState"in this._videoStreamTrack||(this._videoStreamTrack.readyState="live"),this._previewStream=new MediaStream([t]),this.videoElement=document.createElement("video"),this.videoElementPlaying=new Promise((function(e){i.videoElement.addEventListener("playing",e)})),HTMLMediaElement?this.videoElement.srcObject=this._previewStream:this.videoElement.src=URL.createObjectURL(this._previewStream),this.videoElement.muted=!0,this.videoElement.setAttribute("playsinline",""),this.videoElement.play(),this.canvasElement=document.createElement("canvas"),this.canvas2dContext=this.canvasElement.getContext("2d")}return _createClass(e,[{key:"getPhotoCapabilities",value:function(){return new Promise((function(e,t){var i={current:0,min:0,max:0};e({exposureCompensation:i,exposureMode:"none",fillLightMode:["none"],focusMode:"none",imageHeight:i,imageWidth:i,iso:i,redEyeReduction:!1,whiteBalanceMode:"none",zoom:i}),t(new DOMException("OperationError"))}))}},{key:"setOptions",value:function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];return new Promise((function(e,t){}))}},{key:"takePhoto",value:function(){var e=this;return new Promise((function(t,i){if("live"!==e._videoStreamTrack.readyState)return i(new DOMException("InvalidStateError"));e.videoElementPlaying.then((function(){try{e.canvasElement.width=e.videoElement.videoWidth,e.canvasElement.height=e.videoElement.videoHeight,e.canvas2dContext.drawImage(e.videoElement,0,0),e.canvasElement.toBlob(t)}catch(n){i(new DOMException("UnknownError"))}}))}))}},{key:"grabFrame",value:function(){var e=this;return new Promise((function(t,i){if("live"!==e._videoStreamTrack.readyState)return i(new DOMException("InvalidStateError"));e.videoElementPlaying.then((function(){try{e.canvasElement.width=e.videoElement.videoWidth,e.canvasElement.height=e.videoElement.videoHeight,e.canvas2dContext.drawImage(e.videoElement,0,0),t(window.createImageBitmap(e.canvasElement))}catch(n){i(new DOMException("UnknownError"))}}))}))}},{key:"videoStreamTrack",get:function(){return this._videoStreamTrack}}]),e}()),window.ImageCapture=a;var r=function(){function e(t){var i=this;_classCallCheck(this,e),Object(n.h)(this,t),this.facingMode="user",this.noDevicesText="No camera found",this.noDevicesButtonText="Choose image",this.showShutterOverlay=!1,this.flashIndex=0,this.hasCamera=null,this.rotation=0,this.deviceError=null,this.hasMultipleCameras=!1,this.hasFlash=!1,this.flashModes=[],this.flashMode="off",this.handlePickFile=function(e){},this.handleShutterClick=function(e){console.log(),i.capture()},this.handleRotateClick=function(e){i.rotate()},this.handleClose=function(e){i.handlePhoto&&i.handlePhoto(null)},this.handleFlashClick=function(e){i.cycleFlash()},this.handleCancelPhoto=function(e){var t=i.stream&&i.stream.getTracks()[0],n=t&&t.getConstraints();i.photo=null,n?i.initCamera({video:{facingMode:n.facingMode}}):i.initCamera()},this.handleAcceptPhoto=function(e){i.handlePhoto&&i.handlePhoto(i.photo)},this.handleFileInputChange=function(){var e=_asyncToGenerator(regeneratorRuntime.mark((function e(t){var n,a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.target.files[0],e.prev=1,e.next=4,i.getOrientation(n);case 4:a=e.sent,console.log("Got orientation",a),i.photoOrientation=a,e.next=10;break;case 8:e.prev=8,e.t0=e.catch(1);case 10:i.handlePhoto&&i.handlePhoto(n);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),this.handleVideoMetadata=function(e){console.log("Video metadata",e)},this.isServer=Object(n.e)(this,"isServer")}var t,i,a,r,o,s,c,l;return _createClass(e,[{key:"componentDidLoad",value:(l=_asyncToGenerator(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=this.isServer,e.t0){e.next=7;break}return this.defaultConstraints={video:{facingMode:this.facingMode}},e.next=5,this.queryDevices();case 5:return e.next=7,this.initCamera();case 7:case"end":return e.stop()}}),e,this)}))),function(){return l.apply(this,arguments)})},{key:"componentDidUnload",value:function(){this.stopStream(),this.photoSrc&&URL.revokeObjectURL(this.photoSrc)}},{key:"hasImageCapture",value:function(){return"ImageCapture"in window}},{key:"queryDevices",value:(c=_asyncToGenerator(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,navigator.mediaDevices.enumerateDevices();case 3:t=e.sent.filter((function(e){return"videoinput"==e.kind})),this.hasCamera=!!t.length,this.hasMultipleCameras=t.length>1,e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),this.deviceError=e.t0;case 10:case"end":return e.stop()}}),e,this,[[0,7]])}))),function(){return c.apply(this,arguments)})},{key:"initCamera",value:(s=_asyncToGenerator(regeneratorRuntime.mark((function e(t){var i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t||(t=this.defaultConstraints),e.prev=1,e.next=4,navigator.mediaDevices.getUserMedia(Object.assign({video:!0,audio:!1},t));case 4:i=e.sent,this.initStream(i),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),this.deviceError=e.t0,this.handleNoDeviceError&&this.handleNoDeviceError(e.t0);case 11:case"end":return e.stop()}}),e,this,[[1,8]])}))),function(e){return s.apply(this,arguments)})},{key:"initStream",value:(o=_asyncToGenerator(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.stream=t,this.videoElement.srcObject=t,!this.hasImageCapture()){e.next=8;break}return this.imageCapture=new window.ImageCapture(t.getVideoTracks()[0]),e.next=6,this.initPhotoCapabilities(this.imageCapture);case 6:e.next=9;break;case 8:this.deviceError="No image capture",this.handleNoDeviceError&&this.handleNoDeviceError();case 9:this.el.forceUpdate();case 10:case"end":return e.stop()}}),e,this)}))),function(e){return o.apply(this,arguments)})},{key:"initPhotoCapabilities",value:(r=_asyncToGenerator(regeneratorRuntime.mark((function e(t){var i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getPhotoCapabilities();case 2:(i=e.sent).fillLightMode.length>1&&(this.flashModes=i.fillLightMode.map((function(e){return e})),this.flashMode?(this.flashMode=this.flashModes[this.flashModes.indexOf(this.flashMode)]||"off",this.flashIndex=this.flashModes.indexOf(this.flashMode)||0):this.flashIndex=0);case 4:case"end":return e.stop()}}),e,this)}))),function(e){return r.apply(this,arguments)})},{key:"stopStream",value:function(){this.stream&&this.stream.getTracks().forEach((function(e){return e.stop()}))}},{key:"capture",value:(a=_asyncToGenerator(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.hasImageCapture()){e.next=13;break}return e.prev=1,e.next=4,this.imageCapture.takePhoto({fillLightMode:this.flashModes.length>1?this.flashMode:void 0});case 4:return t=e.sent,e.next=7,this.flashScreen();case 7:this.promptAccept(t),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),console.error("Unable to take photo!",e.t0);case 13:this.stopStream();case 14:case"end":return e.stop()}}),e,this,[[1,10]])}))),function(){return a.apply(this,arguments)})},{key:"promptAccept",value:(i=_asyncToGenerator(regeneratorRuntime.mark((function e(t){var i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.photo=t,e.next=3,this.getOrientation(t);case 3:if(i=e.sent,console.log("Got orientation",i),this.photoOrientation=i,!i){e.next=15;break}e.t0=i,e.next=1===e.t0||2===e.t0?8:3===e.t0||4===e.t0?10:5===e.t0||6===e.t0?12:7===e.t0||8===e.t0?14:15;break;case 8:return this.rotation=0,e.abrupt("break",15);case 10:return this.rotation=180,e.abrupt("break",15);case 12:return this.rotation=90,e.abrupt("break",15);case 14:this.rotation=270;case 15:this.photoSrc=URL.createObjectURL(t);case 16:case"end":return e.stop()}}),e,this)}))),function(e){return i.apply(this,arguments)})},{key:"getOrientation",value:function(e){return new Promise((function(t){var i=new FileReader;i.onload=function(e){var i=new DataView(e.target.result);if(65496!==i.getUint16(0,!1))return t(-2);for(var n=i.byteLength,a=2;a<n;){var r=i.getUint16(a,!1);if(a+=2,65505===r){if(1165519206!==i.getUint32(a+=2,!1))return t(-1);var o=18761===i.getUint16(a+=6,!1);a+=i.getUint32(a+4,o);var s=i.getUint16(a,o);a+=2;for(var c=0;c<s;c++)if(274===i.getUint16(a+12*c,o))return t(i.getUint16(a+12*c+8,o))}else{if(65280!=(65280&r))break;a+=i.getUint16(a,!1)}}return t(-1)},i.readAsArrayBuffer(e.slice(0,65536))}))}},{key:"rotate",value:function(){this.stopStream();var e=this.stream&&this.stream.getTracks()[0];if(e){var t=e.getConstraints().facingMode;t||(t=e.getCapabilities().facingMode[0]),this.initCamera("environment"===t?{video:{facingMode:"user"}}:{video:{facingMode:"environment"}})}}},{key:"setFlashMode",value:function(e){console.log("New flash mode: ",e),this.flashMode=e}},{key:"cycleFlash",value:function(){this.flashModes.length>0&&(this.flashIndex=(this.flashIndex+1)%this.flashModes.length,this.setFlashMode(this.flashModes[this.flashIndex]))}},{key:"flashScreen",value:(t=_asyncToGenerator(regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,i){t.showShutterOverlay=!0,setTimeout((function(){t.showShutterOverlay=!1,e()}),100)})));case 1:case"end":return e.stop()}}),e)}))),function(){return t.apply(this,arguments)})},{key:"iconExit",value:function(){return"data:image/svg+xml,%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 512 512' enable-background='new 0 0 512 512' xml:space='preserve'%3E%3Cg id='Icon_5_'%3E%3Cg%3E%3Cpath fill='%23FFFFFF' d='M402.2,134L378,109.8c-1.6-1.6-4.1-1.6-5.7,0L258.8,223.4c-1.6,1.6-4.1,1.6-5.7,0L139.6,109.8 c-1.6-1.6-4.1-1.6-5.7,0L109.8,134c-1.6,1.6-1.6,4.1,0,5.7l113.5,113.5c1.6,1.6,1.6,4.1,0,5.7L109.8,372.4c-1.6,1.6-1.6,4.1,0,5.7 l24.1,24.1c1.6,1.6,4.1,1.6,5.7,0l113.5-113.5c1.6-1.6,4.1-1.6,5.7,0l113.5,113.5c1.6,1.6,4.1,1.6,5.7,0l24.1-24.1 c1.6-1.6,1.6-4.1,0-5.7L288.6,258.8c-1.6-1.6-1.6-4.1,0-5.7l113.5-113.5C403.7,138.1,403.7,135.5,402.2,134z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E"}},{key:"iconPhotos",value:function(){return Object(n.g)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"512",height:"512",viewBox:"0 0 512 512"},Object(n.g)("title",null,"ionicons-v5-e"),Object(n.g)("path",{d:"M450.29,112H142c-34,0-62,27.51-62,61.33V418.67C80,452.49,108,480,142,480H450c34,0,62-26.18,62-60V173.33C512,139.51,484.32,112,450.29,112Zm-77.15,61.34a46,46,0,1,1-46.28,46A46.19,46.19,0,0,1,373.14,173.33Zm-231.55,276c-17,0-29.86-13.75-29.86-30.66V353.85l90.46-80.79a46.54,46.54,0,0,1,63.44,1.83L328.27,337l-113,112.33ZM480,418.67a30.67,30.67,0,0,1-30.71,30.66H259L376.08,333a46.24,46.24,0,0,1,59.44-.16L480,370.59Z"}),Object(n.g)("path",{d:"M384,32H64A64,64,0,0,0,0,96V352a64.11,64.11,0,0,0,48,62V152a72,72,0,0,1,72-72H446A64.11,64.11,0,0,0,384,32Z"}))}},{key:"iconConfirm",value:function(){return"data:image/svg+xml,%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 512 512' enable-background='new 0 0 512 512' xml:space='preserve'%3E%3Ccircle fill='%232CD865' cx='256' cy='256' r='256'/%3E%3Cg id='Icon_1_'%3E%3Cg%3E%3Cg%3E%3Cpath fill='%23FFFFFF' d='M208,301.4l-55.4-55.5c-1.5-1.5-4-1.6-5.6-0.1l-23.4,22.3c-1.6,1.6-1.7,4.1-0.1,5.7l81.6,81.4 c3.1,3.1,8.2,3.1,11.3,0l171.8-171.7c1.6-1.6,1.6-4.2-0.1-5.7l-23.4-22.3c-1.6-1.5-4.1-1.5-5.6,0.1L213.7,301.4 C212.1,303,209.6,303,208,301.4z'/%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E"}},{key:"iconReverseCamera",value:function(){return"data:image/svg+xml,%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 512 512' enable-background='new 0 0 512 512' xml:space='preserve'%3E%3Cg%3E%3Cpath fill='%23FFFFFF' d='M352,0H160C72,0,0,72,0,160v192c0,88,72,160,160,160h192c88,0,160-72,160-160V160C512,72,440,0,352,0z M356.7,365.8l-3.7,3.3c-27,23.2-61.4,35.9-96.8,35.9c-72.4,0-135.8-54.7-147-125.6c-0.3-1.9-2-3.3-3.9-3.3H64 c-3.3,0-5.2-3.8-3.2-6.4l61.1-81.4c1.6-2.1,4.7-2.1,6.4-0.1l63.3,81.4c2,2.6,0.2,6.5-3.2,6.5h-40.6c-2.5,0-4.5,2.4-3.9,4.8 c11.5,51.5,59.2,90.6,112.4,90.6c26.4,0,51.8-9.7,73.7-27.9l3.1-2.5c1.6-1.3,3.9-1.1,5.3,0.3l18.5,18.6 C358.5,361.6,358.4,364.3,356.7,365.8z M451.4,245.6l-61,83.5c-1.6,2.2-4.8,2.2-6.4,0.1l-63.3-83.3c-2-2.6-0.1-6.4,3.2-6.4h40.8 c2.5,0,4.4-2.3,3.9-4.8c-5.1-24.2-17.8-46.5-36.5-63.7c-21.2-19.4-48.2-30.1-76-30.1c-26.5,0-52.6,9.7-73.7,27.3l-3.1,2.5 c-1.6,1.3-3.9,1.2-5.4-0.3l-18.5-18.5c-1.6-1.6-1.5-4.3,0.2-5.9l3.5-3.1c27-23.2,61.4-35.9,96.8-35.9c38,0,73.9,13.7,101.2,38.7 c23.2,21.1,40.3,55.2,45.7,90.1c0.3,1.9,1.9,3.4,3.9,3.4h41.3C451.4,239.2,453.3,243,451.4,245.6z'/%3E%3C/g%3E%3C/svg%3E"}},{key:"iconRetake",value:function(){return"data:image/svg+xml,%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 512 512' enable-background='new 0 0 512 512' xml:space='preserve'%3E%3Ccircle fill='%23727A87' cx='256' cy='256' r='256'/%3E%3Cg id='Icon_5_'%3E%3Cg%3E%3Cpath fill='%23FFFFFF' d='M394.2,142L370,117.8c-1.6-1.6-4.1-1.6-5.7,0L258.8,223.4c-1.6,1.6-4.1,1.6-5.7,0L147.6,117.8 c-1.6-1.6-4.1-1.6-5.7,0L117.8,142c-1.6,1.6-1.6,4.1,0,5.7l105.5,105.5c1.6,1.6,1.6,4.1,0,5.7L117.8,364.4c-1.6,1.6-1.6,4.1,0,5.7 l24.1,24.1c1.6,1.6,4.1,1.6,5.7,0l105.5-105.5c1.6-1.6,4.1-1.6,5.7,0l105.5,105.5c1.6,1.6,4.1,1.6,5.7,0l24.1-24.1 c1.6-1.6,1.6-4.1,0-5.7L288.6,258.8c-1.6-1.6-1.6-4.1,0-5.7l105.5-105.5C395.7,146.1,395.7,143.5,394.2,142z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E"}},{key:"iconFlashOff",value:function(){return"data:image/svg+xml,%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 512 512' style='enable-background:new 0 0 512 512;' xml:space='preserve'%3E%3Cstyle type='text/css'%3E .st0%7Bfill:%23FFFFFF;%7D%0A%3C/style%3E%3Cg%3E%3Cpath class='st0' d='M498,483.7L42.3,28L14,56.4l149.8,149.8L91,293.8c-2.5,3-0.1,7.2,3.9,7.2h143.9c1.6,0,2.7,1.3,2.4,2.7 L197.6,507c-1,4.4,5.8,6.9,8.9,3.2l118.6-142.8L469.6,512L498,483.7z'/%3E%3Cpath class='st0' d='M449,218.2c2.5-3,0.1-7.2-3.9-7.2H301.2c-1.6,0-2.7-1.3-2.4-2.7L342.4,5c1-4.4-5.8-6.9-8.9-3.2L214.9,144.6 l161.3,161.3L449,218.2z'/%3E%3C/g%3E%3C/svg%3E"}},{key:"iconFlashOn",value:function(){return"data:image/svg+xml,%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 512 512' style='enable-background:new 0 0 512 512;' xml:space='preserve'%3E%3Cstyle type='text/css'%3E .st0%7Bfill:%23FFFFFF;%7D%0A%3C/style%3E%3Cpath class='st0' d='M287.2,211c-1.6,0-2.7-1.3-2.4-2.7L328.4,5c1-4.4-5.8-6.9-8.9-3.2L77,293.8c-2.5,3-0.1,7.2,3.9,7.2h143.9 c1.6,0,2.7,1.3,2.4,2.7L183.6,507c-1,4.4,5.8,6.9,8.9,3.2l242.5-292c2.5-3,0.1-7.2-3.9-7.2L287.2,211L287.2,211z'/%3E%3C/svg%3E"}},{key:"iconFlashAuto",value:function(){return"data:image/svg+xml,%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 512 512' style='enable-background:new 0 0 512 512;' xml:space='preserve'%3E%3Cstyle type='text/css'%3E .st0%7Bfill:%23FFFFFF;%7D%0A%3C/style%3E%3Cpath class='st0' d='M287.2,211c-1.6,0-2.7-1.3-2.4-2.7L328.4,5c1-4.4-5.8-6.9-8.9-3.2L77,293.8c-2.5,3-0.1,7.2,3.9,7.2h143.9 c1.6,0,2.7,1.3,2.4,2.7L183.6,507c-1,4.4,5.8,6.9,8.9,3.2l242.5-292c2.5-3,0.1-7.2-3.9-7.2L287.2,211L287.2,211z'/%3E%3Cg%3E%3Cpath class='st0' d='M321.3,186l74-186H438l74,186h-43.5l-11.9-32.5h-80.9l-12,32.5H321.3z M415.8,47.9l-27.2,70.7h54.9l-27.2-70.7 H415.8z'/%3E%3C/g%3E%3C/svg%3E"}},{key:"render",value:function(){var e=this;return Object(n.g)("div",{class:"camera-wrapper"},Object(n.g)("div",{class:"camera-header"},Object(n.g)("section",{class:"items"},Object(n.g)("div",{class:"item close",onClick:function(t){return e.handleClose(t)}},Object(n.g)("img",{src:this.iconExit()})),Object(n.g)("div",{class:"item flash",onClick:function(t){return e.handleFlashClick(t)}},this.flashModes.length>0&&Object(n.g)("div",null,"off"==this.flashMode?Object(n.g)("img",{src:this.iconFlashOff()}):"","auto"==this.flashMode?Object(n.g)("img",{src:this.iconFlashAuto()}):"","flash"==this.flashMode?Object(n.g)("img",{src:this.iconFlashOn()}):"")))),(!1===this.hasCamera||!!this.deviceError)&&Object(n.g)("div",{class:"no-device"},Object(n.g)("h2",null,this.noDevicesText),Object(n.g)("label",{htmlFor:"_pwa-elements-camera-input"},this.noDevicesButtonText),Object(n.g)("input",{type:"file",id:"_pwa-elements-camera-input",onChange:this.handleFileInputChange,accept:"image/*",class:"select-file-button"})),this.photo?Object(n.g)("div",{class:"accept"},Object(n.g)("div",{class:"accept-image",style:Object.assign({backgroundImage:"url(".concat(this.photoSrc,")")},{})})):Object(n.g)("div",{class:"camera-video"},this.showShutterOverlay&&Object(n.g)("div",{class:"shutter-overlay"}),this.hasImageCapture()?Object(n.g)("video",{ref:function(t){return e.videoElement=t},onLoadedMetaData:this.handleVideoMetadata,autoplay:!0,playsinline:!0}):Object(n.g)("canvas",{ref:function(t){return e.canvasElement=t},width:"100%",height:"100%"}),Object(n.g)("canvas",{class:"offscreen-image-render",ref:function(t){return e.offscreenCanvas=t},width:"100%",height:"100%"})),this.hasCamera&&Object(n.g)("div",{class:"camera-footer"},this.photo?Object(n.g)("section",{class:"items"},Object(n.g)("div",{class:"item accept-cancel",onClick:function(t){return e.handleCancelPhoto(t)}},Object(n.g)("img",{src:this.iconRetake()})),Object(n.g)("div",{class:"item accept-use",onClick:function(t){return e.handleAcceptPhoto(t)}},Object(n.g)("img",{src:this.iconConfirm()}))):[Object(n.g)("div",{class:"pick-image",onClick:this.handlePickFile},Object(n.g)("label",{htmlFor:"_pwa-elements-file-pick"},this.iconPhotos()),Object(n.g)("input",{type:"file",id:"_pwa-elements-file-pick",onChange:this.handleFileInputChange,accept:"image/*",class:"pick-image-button"})),Object(n.g)("div",{class:"shutter",onClick:this.handleShutterClick},Object(n.g)("div",{class:"shutter-button"})),Object(n.g)("div",{class:"rotate",onClick:this.handleRotateClick},Object(n.g)("img",{src:this.iconReverseCamera()}))]))}},{key:"el",get:function(){return Object(n.f)(this)}}],[{key:"assetsDirs",get:function(){return["icons"]}},{key:"style",get:function(){return":host{--header-height:4em;--footer-height:9em;--header-height-landscape:3em;--footer-height-landscape:6em;--shutter-size:6em;--icon-size-header:1.5em;--icon-size-footer:2.5em;--margin-size-header:1.5em;--margin-size-footer:2.0em;font-family:-apple-system,BlinkMacSystemFont,\u201cSegoe UI\u201d,\u201cRoboto\u201d,\u201cDroid Sans\u201d,\u201cHelvetica Neue\u201d,sans-serif;display:block}.items,:host{width:100%;height:100%}.items{-webkit-box-sizing:border-box;box-sizing:border-box;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}.items .item{-ms-flex:1;flex:1;text-align:center}.items .item:first-child{text-align:left}.items .item:last-child{text-align:right}.camera-wrapper{position:relative;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;width:100%;height:100%}.camera-header{color:#fff;background-color:#000;height:var(--header-height)}.camera-header .items{padding:var(--margin-size-header)}.camera-footer{position:relative;color:#fff;background-color:#000;height:var(--footer-height)}.camera-footer .items{padding:var(--margin-size-footer)}@media (max-height:375px){.camera-header{--header-height:var(--header-height-landscape)}.camera-footer{--footer-height:var(--footer-height-landscape)}.camera-footer .shutter{--shutter-size:4em}}.camera-video{position:relative;-ms-flex:1;flex:1;overflow:hidden}.camera-video,video{background-color:#000}video{width:100%;height:100%;max-height:100%;min-height:100%;-o-object-fit:cover;object-fit:cover}.pick-image{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;position:absolute;left:var(--margin-size-footer);top:0;height:100%;width:var(--icon-size-footer);color:#fff}.pick-image input{visibility:hidden}.pick-image svg{cursor:pointer;fill:#fff;width:var(--icon-size-footer);height:var(--icon-size-footer)}.shutter{position:absolute;left:50%;top:50%;width:var(--shutter-size);height:var(--shutter-size);margin-top:calc(var(--shutter-size) / -2);margin-left:calc(var(--shutter-size) / -2);border-radius:100%;background-color:#c6cdd8;padding:12px;-webkit-box-sizing:border-box;box-sizing:border-box}.shutter:active .shutter-button{background-color:#9da9bb}.shutter-button{background-color:#fff;border-radius:100%;width:100%;height:100%}.rotate{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;position:absolute;right:var(--margin-size-footer);top:0;height:100%;color:#fff}.rotate,.rotate img{width:var(--icon-size-footer)}.rotate img{height:var(--icon-size-footer)}.shutter-overlay{z-index:5;position:absolute;width:100%;height:100%;background-color:#000}.error{width:100%;height:100%;-ms-flex-pack:center;-ms-flex-align:center}.error,.no-device{color:#fff;display:-ms-flexbox;display:flex;justify-content:center;align-items:center}.no-device{background-color:#000;-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;-ms-flex-pack:center}.no-device label{cursor:pointer;background:#fff;border-radius:6px;padding:6px 8px;color:#000}.no-device input{visibility:hidden;height:0;margin-top:16px}.accept{background-color:#000;-ms-flex:1;flex:1;overflow:hidden}.accept .accept-image{width:100%;height:100%;max-height:100%;background-position:50%;background-size:cover;background-repeat:no-repeat}.close img{cursor:pointer}.close img,.flash img{width:var(--icon-size-header);height:var(--icon-size-header)}.accept-cancel img,.accept-use img{width:var(--icon-size-footer);height:var(--icon-size-footer)}.offscreen-image-render{top:0;left:0;visibility:hidden;pointer-events:none;width:100%;height:100%}"}}]),e}()}}]);