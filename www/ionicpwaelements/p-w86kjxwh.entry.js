import{r as t,c as s,h as e,g as i}from"./p-15febc39.js";const a=class{constructor(e){t(this,e),this.noDevicesText="No camera found",this.noDevicesButtonText="Choose image",this.handlePhoto=async t=>{this.onPhoto.emit(t)},this.handleNoDeviceError=async t=>{this.noDeviceError.emit(t)},this.onPhoto=s(this,"onPhoto",7),this.noDeviceError=s(this,"noDeviceError",7)}handleBackdropClick(t){t.target!==this.el&&this.onPhoto.emit(null)}handleComponentClick(t){t.stopPropagation()}handleBackdropKeyUp(t){"Escape"===t.key&&this.onPhoto.emit(null)}render(){return e("div",{class:"wrapper",onClick:t=>this.handleBackdropClick(t)},e("div",{class:"content"},e("pwa-camera",{onClick:t=>this.handleComponentClick(t),handlePhoto:this.handlePhoto,handleNoDeviceError:this.handleNoDeviceError,noDevicesButtonText:this.noDevicesButtonText,noDevicesText:this.noDevicesText})))}get el(){return i(this)}static get style(){return":host{z-index:1000;position:fixed;top:0;left:0;width:100%;height:100%;contain:strict;--inset-width:600px;--inset-height:600px}.wrapper,:host{display:-ms-flexbox;display:flex}.wrapper{-ms-flex:1;flex:1;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;background-color:rgba(0,0,0,.15)}.content{-webkit-box-shadow:0 0 5px rgba(0,0,0,.2);box-shadow:0 0 5px rgba(0,0,0,.2);width:var(--inset-width);height:var(--inset-height);max-height:100%}\@media only screen and (max-width:600px){.content{width:100%;height:100%}}"}};export{a as pwa_camera_modal_instance};