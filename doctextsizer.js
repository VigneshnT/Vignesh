var documenttextsizer={
prevcontrol:"",
existingclasses:"",
setpageclass:function(b,a){
if(this.prevcontrol!=""){
this.css(this.prevcontrol,"selectedtoggler","remove")
}
document.documentElement.className=this.existingclasses+" "+a;
this.css(b,"selectedtoggler","add");
this.setCookie("pagesetting",a,5);
this.prevcontrol=b;
$("body").removeClass('largeview');
$("body").removeClass('normalview');
$("body").removeClass('smallview');
$("body").addClass(a);
},

css:function(b,a,c){var d=new RegExp("(^|\\s+)"+a+"($|\\s+)","ig");if(c=="check"){return d.test(b.className)}else{if(c=="remove"){b.className=b.className.replace(d,"")}else{if(c=="add"){b.className+=" "+a}}}},getCookie:function(a){var b=new RegExp(a+"=[^;]+","i");if(document.cookie.match(b)){return document.cookie.match(b)[0].split("=")[1]}return null},setCookie:function(b,c,e){if(typeof e!="undefined"){var a=new Date();var d=a.setDate(a.getDate()+e);document.cookie=b+"="+c+"; path=/; expires="+a.toGMTString()}else{document.cookie=b+"="+c}},setup:function(b){this.existingclasses=document.documentElement.className;var a=this.getCookie("pagesetting");var d=document.getElementsByTagName("a");for(var c=0;c<d.length;c++){if(this.css(d[c],b,"check")){if(d[c].getAttribute("rel")==a){this.setpageclass(d[c],d[c].getAttribute("rel"))}d[c].onclick=function(){documenttextsizer.setpageclass(this,this.getAttribute("rel"));return false}}}}};
