"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[7907],{17907:(l,r,e)=>{e.r(r),e.d(r,{ShareWeb:()=>s});var t=e(15861),n=e(47423);class s extends n.Uw{canShare(){return(0,t.Z)(function*(){return"undefined"!=typeof navigator&&navigator.share?{value:!0}:{value:!1}})()}share(a){var u=this;return(0,t.Z)(function*(){if("undefined"==typeof navigator||!navigator.share)throw u.unavailable("Share API not available in this browser");return yield navigator.share({title:a.title,text:a.text,url:a.url}),{}})()}}}}]);