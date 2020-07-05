"use strict";
Object.defineProperty(exports,"__esModule",{value:true});
var resource=(function(){
 function resource(){}
 resource.toast=null;
 return resource;
}());
exports.resource=resource;
function fadeIn(el,display){
 if (display===void 0){display=null;}
 el.style.opacity=0;
 el.style.display=display||'block';
 (function fade(){
  var val=parseFloat(el.style.opacity);
  val+=.1;
  if (!(val>1)){
   el.style.opacity=val;
   requestAnimationFrame(fade);
  }
 })();
}
exports.fadeIn=fadeIn;
function fadeOut(el){
 el.style.opacity=1;
 (function fade(){
  var k=(el.style.opacity-=.1);
  if (k<0){
   el.style.display='none';
  }else{
   requestAnimationFrame(fade);
  }
 })();
}
exports.fadeOut=fadeOut;
function showToast(msg){
 if (!resource.toast){
  resource.toast=window.sysToast;
 }
 resource.toast.innerHTML=msg;
 fadeIn(resource.toast);
 setTimeout(function(){
  fadeOut(resource.toast);
 },1340);
}
exports.showToast=showToast;
var DefaultToastService=(function(){
 function DefaultToastService(){}
 DefaultToastService.prototype.showToast=function(msg){
  showToast(msg);
 };
 return DefaultToastService;
}());
exports.toast=new DefaultToastService();
