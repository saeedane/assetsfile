!function(e,t,a,i){var n="ontouchstart"in t,o=n?"touchstart":"mousedown",u=n?"touchmove":"mousemove",l=n?"touchcancel":"mouseup",d=function(e){var t=Math.floor(e/3600),a=Math.floor(e%3600/60),i=Math.ceil(e%3600%60);return(0==t?"":t>0&&t.toString().length<2?"0"+t+":":t+":")+(a.toString().length<2?"0"+a:a)+":"+(i.toString().length<2?"0"+i:i)},r=function(e){var t=a.createElement("audio");return!(!t.canPlayType||!t.canPlayType("audio/"+e.split(".").pop().toLowerCase()+";").replace(/no/,""))};e.fn.audioPlayer=function(t){t=e.extend({classPrefix:"audioplayer",strPlay:"",strPause:"",strVolume:""},t);var a={},i={playPause:"playpause",playing:"playing",time:"time",timeCurrent:"time-current",timeDuration:"time-duration",bar:"bar",barLoaded:"bar-loaded",barPlayed:"bar-played",volume:"volume",volumeButton:"volume-button",volumeAdjust:"volume-adjust",noVolume:"novolume",mute:"mute",mini:"mini"};for(var s in i)a[s]=t.classPrefix+"-"+i[s];return this.each(function(){if("audio"!=e(this).prop("tagName").toLowerCase())return!1;var i=e(this),s=i.attr("src"),v=""===(v=i.get(0).getAttribute("autoplay"))||"autoplay"===v,m=""===(m=i.get(0).getAttribute("loop"))||"loop"===m,c=!1;void 0===s?i.find("source").each(function(){if(void 0!==(s=e(this).attr("src"))&&r(s))return c=!0,!1}):r(s)&&(c=!0);var f=e('<div class="'+t.classPrefix+'">'+(c?e("<div>").append(i.eq(0).clone()).html():'<embed src="'+s+'" width="0" height="0" volume="100" autostart="'+v.toString()+'" loop="'+m.toString()+'" />')+'<div class="'+a.playPause+'" title="'+t.strPlay+'"><a href="#">'+t.strPlay+"</a></div></div>"),h=(h=c?f.find("audio"):f.find("embed")).get(0);if(c){f.find("audio").css({width:0,height:0,visibility:"hidden"}),f.append('<div class="'+a.time+" "+a.timeCurrent+'"></div><div class="'+a.bar+'"><div class="'+a.barLoaded+'"></div><div class="'+a.barPlayed+'"></div></div><div class="'+a.time+" "+a.timeDuration+'"></div><div class="'+a.volume+'"><div class="'+a.volumeButton+'" title="'+t.strVolume+'"><a href="#">'+t.strVolume+'</a></div><div class="'+a.volumeAdjust+'"><div><div></div></div></div></div>');var p=f.find("."+a.bar),y=f.find("."+a.barPlayed),g=f.find("."+a.barLoaded),b=f.find("."+a.timeCurrent),P=f.find("."+a.timeDuration),C=f.find("."+a.volumeButton),w=f.find("."+a.volumeAdjust+" > div"),E=0,L=function(e){theRealEvent=n?e.originalEvent.touches[0]:e,h.currentTime=Math.round(h.duration*(theRealEvent.pageX-p.offset().left)/p.width())},x=function(e){theRealEvent=n?e.originalEvent.touches[0]:e,h.volume=Math.abs((theRealEvent.pageX-w.offset().left)/w.width())},M=setInterval(function(){h.buffered.length>0&&(g.width(h.buffered.end(0)/h.duration*100+"%"),h.buffered.end(0)>=h.duration&&clearInterval(M))},100),S=h.volume,j=h.volume=.111;Math.round(1e3*h.volume)/1e3==j?h.volume=S:f.addClass(a.noVolume),P.html("&hellip;"),b.text(d(0)),h.addEventListener("loadeddata",function(){P.text(d(h.duration)),w.find("div").width(100*h.volume+"%"),E=h.volume}),h.addEventListener("timeupdate",function(){b.text(d(h.currentTime)),y.width(h.currentTime/h.duration*100+"%")}),h.addEventListener("volumechange",function(){w.find("div").width(100*h.volume+"%"),h.volume>0&&f.hasClass(a.mute)&&f.removeClass(a.mute),h.volume<=0&&!f.hasClass(a.mute)&&f.addClass(a.mute)}),h.addEventListener("ended",function(){f.removeClass(a.playing)}),p.on(o,function(e){L(e),p.on(u,function(e){L(e)})}).on(l,function(){p.unbind(u)}),C.on("click",function(){return f.hasClass(a.mute)?(f.removeClass(a.mute),h.volume=E):(f.addClass(a.mute),E=h.volume,h.volume=0),!1}),w.on(o,function(e){x(e),w.on(u,function(e){x(e)})}).on(l,function(){w.unbind(u)})}else f.addClass(a.mini);v&&f.addClass(a.playing),f.find("."+a.playPause).on("click",function(){return f.hasClass(a.playing)?(e(this).attr("title",t.strPlay).find("a").html(t.strPlay),f.removeClass(a.playing),c?h.pause():h.Stop()):(e(this).attr("title",t.strPause).find("a").html(t.strPause),f.addClass(a.playing),c?h.play():h.Play()),!1}),i.replaceWith(f)}),this}}(jQuery,window,document);