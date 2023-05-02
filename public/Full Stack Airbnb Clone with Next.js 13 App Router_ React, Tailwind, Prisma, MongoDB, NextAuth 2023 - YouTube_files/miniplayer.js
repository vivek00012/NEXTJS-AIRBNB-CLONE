(function(g){var window=this;'use strict';var gib=function(a,b){g.U.call(this,{G:"button",Ia:["ytp-miniplayer-expand-watch-page-button","ytp-button","ytp-miniplayer-button-top-left"],X:{title:"{{title}}","data-tooltip-target-id":"ytp-miniplayer-expand-watch-page-button","aria-keyshortcuts":"i","data-title-no-tooltip":"{{data-title-no-tooltip}}"},W:[{G:"svg",X:{height:"24px",version:"1.1",viewBox:"0 0 24 24",width:"24px"},W:[{G:"g",X:{fill:"none","fill-rule":"evenodd",stroke:"none","stroke-width":"1"},W:[{G:"g",X:{transform:"translate(12.000000, 12.000000) scale(-1, 1) translate(-12.000000, -12.000000) "},
W:[{G:"path",X:{d:"M19,19 L5,19 L5,5 L12,5 L12,3 L5,3 C3.89,3 3,3.9 3,5 L3,19 C3,20.1 3.89,21 5,21 L19,21 C20.1,21 21,20.1 21,19 L21,12 L19,12 L19,19 Z M14,3 L14,5 L17.59,5 L7.76,14.83 L9.17,16.24 L19,6.41 L19,10 L21,10 L21,3 L14,3 Z",fill:"#fff","fill-rule":"nonzero"}}]}]}]}]});this.F=a;this.Ra("click",this.onClick,this);this.updateValue("title",g.WT(a,"Expand","i"));this.update({"data-title-no-tooltip":"Expand"});g.bb(this,g.ZS(b.Ic(),this.element))},hib=function(a){g.U.call(this,{G:"div",
N:"ytp-miniplayer-ui"});this.cg=!1;this.player=a;this.S(a,"minimized",this.Uh);this.S(a,"onStateChange",this.yP)},iib=function(a){g.CT.call(this,a);
this.u=new g.bI(this);this.j=new hib(this.player);this.j.hide();g.NS(this.player,this.j.element,4);a.zg()&&(this.load(),g.Up(a.getRootNode(),"ytp-player-minimized",!0))};
g.w(gib,g.U);gib.prototype.onClick=function(){this.F.Na("onExpandMiniplayer")};g.w(hib,g.U);g.k=hib.prototype;
g.k.BM=function(){this.tooltip=new g.WV(this.player,this);g.E(this,this.tooltip);g.NS(this.player,this.tooltip.element,4);this.tooltip.scale=.6;this.Qc=new g.hU(this.player);g.E(this,this.Qc);this.Uj=new g.U({G:"div",N:"ytp-miniplayer-scrim"});g.E(this,this.Uj);this.Uj.Ea(this.element);this.S(this.Uj.element,"click",this.eH);var a=new g.U({G:"button",Ia:["ytp-miniplayer-close-button","ytp-button"],X:{"aria-label":"Close"},W:[g.jQ()]});g.E(this,a);a.Ea(this.Uj.element);this.S(a.element,"click",this.Zo);
a=new gib(this.player,this);g.E(this,a);a.Ea(this.Uj.element);this.Ku=new g.U({G:"div",N:"ytp-miniplayer-controls"});g.E(this,this.Ku);this.Ku.Ea(this.Uj.element);this.S(this.Ku.element,"click",this.eH);var b=new g.U({G:"div",N:"ytp-miniplayer-button-container"});g.E(this,b);b.Ea(this.Ku.element);a=new g.U({G:"div",N:"ytp-miniplayer-play-button-container"});g.E(this,a);a.Ea(this.Ku.element);var c=new g.U({G:"div",N:"ytp-miniplayer-button-container"});g.E(this,c);c.Ea(this.Ku.element);this.YW=new g.hV(this.player,
this,!1);g.E(this,this.YW);this.YW.Ea(b.element);b=new g.gV(this.player,this);g.E(this,b);b.Ea(a.element);this.nextButton=new g.hV(this.player,this,!0);g.E(this,this.nextButton);this.nextButton.Ea(c.element);this.tj=new g.PV(this.player,this);g.E(this,this.tj);this.tj.Ea(this.Uj.element);this.Kc=new g.mV(this.player,this);g.E(this,this.Kc);g.NS(this.player,this.Kc.element,4);this.UG=new g.U({G:"div",N:"ytp-miniplayer-buttons"});g.E(this,this.UG);g.NS(this.player,this.UG.element,4);a=new g.U({G:"button",
Ia:["ytp-miniplayer-close-button","ytp-button"],X:{"aria-label":"Close"},W:[g.jQ()]});g.E(this,a);a.Ea(this.UG.element);this.S(a.element,"click",this.Zo);a=new g.U({G:"button",Ia:["ytp-miniplayer-replay-button","ytp-button"],X:{"aria-label":"Close"},W:[g.qQ()]});g.E(this,a);a.Ea(this.UG.element);this.S(a.element,"click",this.Y6);this.S(this.player,"presentingplayerstatechange",this.yd);this.S(this.player,"appresize",this.Db);this.S(this.player,"fullscreentoggled",this.Db);this.Db()};
g.k.show=function(){this.lf=new g.Gp(this.Iv,null,this);this.lf.start();this.cg||(this.BM(),this.cg=!0);0!==this.player.getPlayerState()&&g.U.prototype.show.call(this);this.Kc.show();this.player.unloadModule("annotations_module")};
g.k.hide=function(){this.lf&&(this.lf.dispose(),this.lf=void 0);g.U.prototype.hide.call(this);this.player.zg()||(this.cg&&this.Kc.hide(),this.player.loadModule("annotations_module"))};
g.k.qa=function(){this.lf&&(this.lf.dispose(),this.lf=void 0);g.U.prototype.qa.call(this)};
g.k.Zo=function(){this.player.stopVideo();this.player.Na("onCloseMiniplayer")};
g.k.Y6=function(){this.player.playVideo()};
g.k.eH=function(a){if(a.target===this.Uj.element||a.target===this.Ku.element)g.RO(this.player.Cb())?this.player.pauseVideo():this.player.playVideo()};
g.k.Uh=function(){g.Up(this.player.getRootNode(),"ytp-player-minimized",this.player.zg())};
g.k.Ie=function(){this.Kc.yc();this.tj.yc()};
g.k.Iv=function(){this.Ie();this.lf&&this.lf.start()};
g.k.yd=function(a){g.S(a.state,32)&&this.tooltip.hide()};
g.k.Db=function(){g.yV(this.Kc,0,this.player.jb().getPlayerSize().width,!1);g.nV(this.Kc)};
g.k.yP=function(a){this.player.zg()&&(0===a?this.hide():this.show())};
g.k.Ic=function(){return this.tooltip};
g.k.yg=function(){return!1};
g.k.Wg=function(){return!1};
g.k.Sb=function(){return!1};
g.k.Ql=function(){return!1};
g.k.cI=function(){};
g.k.Op=function(){};
g.k.qy=function(){};
g.k.Nm=function(){return null};
g.k.PF=function(){return null};
g.k.TL=function(){return new g.He(0,0)};
g.k.zk=function(){return new g.Em(0,0,0,0)};
g.k.handleGlobalKeyDown=function(){return!1};
g.k.handleGlobalKeyUp=function(){return!1};
g.k.Uv=function(a,b,c,d,e){var f=0,h=d=0,l=g.Sm(a);if(b){c=g.Pp(b,"ytp-prev-button")||g.Pp(b,"ytp-next-button");var m=g.Pp(b,"ytp-play-button"),n=g.Pp(b,"ytp-miniplayer-expand-watch-page-button");c?f=h=12:m?(b=g.Qm(b,this.element),h=b.x,f=b.y-12):n&&(h=g.Pp(b,"ytp-miniplayer-button-top-left"),f=g.Qm(b,this.element),b=g.Sm(b),h?(h=8,f=f.y+40):(h=f.x-l.width+b.width,f=f.y-20))}else h=c-l.width/2,d=25+(e||0);b=this.player.jb().getPlayerSize().width;e=f+(e||0);l=g.ze(h,0,b-l.width);e?(a.style.top=e+"px",
a.style.bottom=""):(a.style.top="",a.style.bottom=d+"px");a.style.left=l+"px"};
g.k.showControls=function(){};
g.k.tp=function(){};
g.k.Il=function(){return!1};
g.k.TD=function(){};
g.k.Tz=function(){};
g.k.Tq=function(){};
g.k.Sq=function(){};
g.k.aB=function(){};
g.k.Vr=function(){};
g.k.FD=function(){};g.w(iib,g.CT);g.k=iib.prototype;g.k.onVideoDataChange=function(){if(this.player.getVideoData()){var a=this.player.getVideoAspectRatio(),b=16/9;a=a>b+.1||a<b-.1;g.Up(this.player.getRootNode(),"ytp-rounded-miniplayer-not-regular-wide-video",a)}};
g.k.create=function(){g.CT.prototype.create.call(this);this.u.S(this.player,"videodatachange",this.onVideoDataChange);this.onVideoDataChange()};
g.k.Tk=function(){return!1};
g.k.load=function(){this.player.hideControls();this.j.show()};
g.k.unload=function(){this.player.showControls();this.j.hide()};g.BT("miniplayer",iib);})(_yt_player);
