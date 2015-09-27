window.OpkBakery={Models:{},Collections:{},Views:{},Routers:{},init:function(){"use strict";$.material.init(),"localhost:9000"===window.location.host?OpkBakery.host="http://live-open-pipe-kit-packages.pantheon.io/":OpkBakery.host="http://live-open-pipe-kit-packages.pantheon.io/",this.darkify();new OpkBakery.Routers.RecipeBakery;Backbone.history.start()},setIframe:function(a){$(".main").html('<iframe src="'+a+'"></iframe>'),$("iframe").css("height",$(window).height()-50)},spinOpts:{lines:13,length:28,width:14,radius:42,scale:1,corners:1,color:"#000",opacity:.25,rotate:0,direction:1,speed:1,trail:60,fps:20,zIndex:2e9,className:"spinner",top:"50%",left:"50%",shadow:!1,hwaccel:!1,position:"absolute"},darkify:function(){var a=!1;window.addEventListener("devicelight",function(b){b.value<40&&a===!1?(a=!0,$("body").addClass("dark"),$("head").append('<link id="dark-theme" rel="stylesheet" href="styles/bootstrap-cyborg.min.css">')):b.value>40&&a===!0&&(a=!1,$("body").removeClass("dark"),$("#dark-theme").remove()),console.log(b.value)})}},$(document).ready(function(){"use strict";OpkBakery.init()}),this.JST=this.JST||{},this.JST["app/scripts/templates/ChooseNetworkAdapter.ejs"]=function(obj){obj||(obj={});var __p="";_.escape;with(obj)__p+='<center>\n  <a data-choice="wifi" class="btn btn-success" href="#configure-wifi">WiFi</a>\n  <a data-choice="ethernet" class="btn btn-success" href="#recipe"> Ethernet (easiest)</a>\n  <a data-choice="ethernetStatic" class="btn btn-success" href="#configure-ethernet-static"> Ethernet Static </a>\n</center>\n';return __p},this.JST["app/scripts/templates/ConfigureEthernetStatic.ejs"]=function(obj){obj||(obj={});var __p="";_.escape;with(obj)__p+="<p>Your content here.</p>\n\n";return __p},this.JST["app/scripts/templates/ConfigurePackage.ejs"]=function(obj){obj||(obj={});var __p="";_.escape;with(obj)__p+="<p>Your content here.</p>\n\n";return __p},this.JST["app/scripts/templates/ConfigureWifi.ejs"]=function(obj){obj||(obj={});var __p="";_.escape;with(obj)__p+="<p>Your content here.</p>\n\n";return __p},this.JST["app/scripts/templates/GetTheKit.ejs"]=function(obj){obj||(obj={});var __p="";_.escape;with(obj)__p+='\n<h3>\n  Below you will find directions for building your own kit. If you would like us to send you a kit, reach out to R.J. at rj@rjsteinert.com. \n</h3>\n<iframe width="100%" height="700" src="https://opk.hackpad.com/How-to-build-an-Open-Pipe-Kit-howto-2OB5VTh3pkZ"></iframe>\n<script src="https://opk.hackpad.com/2OB5VTh3pkZ.js?format=html"></script><noscript><div>View <a href="https://opk.hackpad.com/2OB5VTh3pkZ">How to build an Open Pipe Kit #howto</a> on Hackpad.</div></noscript>\n\n';return __p},this.JST["app/scripts/templates/Home.ejs"]=function(obj){obj||(obj={});var __p="";_.escape;with(obj)__p+='\n<div class="home-table">\n  <div class="row">\n    <div class="col col-sm-12">\n\n      <div class="mdl-card mdl-shadow--2dp">\n        <div class="mdl-card__title" style="background-image: url(\'images/plug-it-in-small.png\')">\n          <h2 class="mdl-card__title-text">Monitor where you can\'t always be</h2>\n        </div>\n        <div class="mdl-card__supporting-text">\n            A Pipe is a device that directs the flow of data from a sensor to the place of the Pipe owner\'s choosing. With Open Pipe Kit it\'s easy to build Pipes, even for folks who don\'t program. That means a Pipe will be in the places where you can\'t always be and you\'ll always know what is going on.\n            <br><br> The creators of Open Pipe Kit focus on bringing freedom, privacy, and accessibility to the Internet of Things. In other words, <strong>we make the Internet of Things boring like hammers and nails</strong>.\n        </div>\n        <div class="mdl-card__actions mdl-card--border">\n          <a href="#guide" class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">\n            Check out the Guide\n          </a>\n        </div>\n      </div>\n\n    </div>\n  </div>\n  <div class="row">\n    <div class="col col-sm-6">\n\n      <div class="demo-card-wide mdl-card mdl-shadow--2dp">\n        <div class="mdl-card__title" style="background-image: url(\'images/examples.png\')">\n          <h2 class="mdl-card__title-text">Examples</h2>\n        </div>\n        <div class="mdl-card__supporting-text">\n          Check out the example videos we\'ve been making to get the ideas flowing. If you make a Pipe, we\'d love if you added your own as an example.\n        </div>\n        <div class="mdl-card__actions mdl-card--border">\n          <a href="#examples" class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">\n            Watch example videos\n          </a>\n        </div>\n      </div>\n\n    </div>\n    <div class="col col-sm-6">\n\n      <div class="demo-card-wide mdl-card mdl-shadow--2dp">\n        <div class="mdl-card__title" style="background-image: url(\'images/opk-steps-1.png\')">\n          <h2 class="mdl-card__title-text">Configurator</h2>\n        </div>\n        <div class="mdl-card__supporting-text">\n            Use the Open Pipe Kit Configurator to configure your Pipe. With a click of a couple buttons you\'ll be piping data.\n        </div>\n        <div class="mdl-card__actions mdl-card--border">\n          <a href="#configurator" class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">\n            Configure your Pipe\n          </a>\n        </div>\n      </div>\n    </div>\n\n  </div>\n  <div class="row">\n    <div class="col col-sm-12">\n      <div class="demo-card-wide mdl-card mdl-shadow--2dp">\n        <div class="mdl-card__title" style="background-image: url(\'images/code.png\')">\n          <h2 class="mdl-card__title-text">Code</h2>\n        </div>\n        <div class="mdl-card__supporting-text">\n          Open Pipe Kit is easy to integrate with any sensor or database you want. Best yet, you can program in any language you want.\n        </div>\n        <div class="mdl-card__actions mdl-card--border">\n          <a href="#hackpad" class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">\n            Check out the OPK Hackpad\n          </a>\n          or <a href="#chat" class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">drop into the chatroom</a>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</div>\n';return __p},this.JST["app/scripts/templates/HowOften.ejs"]=function(obj){obj||(obj={});var __p="";_.escape;with(obj)__p+="<p>Your content here.</p>\n\n";return __p},this.JST["app/scripts/templates/Intro.ejs"]=function(obj){obj||(obj={});var __p="";_.escape;with(obj)__p+='<div class="jumbotron">\n  <h1>Let\'s bake a pipe for you.</h1>\n  <p>This app will ask a couple of questions leading you through the process of creating a pipe on a USB Drive. This software is just a prototype so if you hit any glitches, do <a href="https://groups.google.com/forum/#!forum/open-pipe-kit" alt="contact us about glitches">let us know</a>.</p>\n  <p><a class="btn btn-primary btn-lg" href="#which-sensor" role="button">Begin</a></p>\n</div>\n';return __p},this.JST["app/scripts/templates/PackageRow.ejs"]=function(obj){obj||(obj={});var __t,__p="";_.escape,Array.prototype.join;with(obj)__p+="<td>\n	",""!==thumbnail&&(__p+="\n		<img src='"+(null==(__t=thumbnail)?"":__t)+"'>\n	"),__p+="\n<td>\n	"+(null==(__t=title)?"":__t)+"\n</td>\n<td>\n	"+(null==(__t=field_package_description)?"":__t)+"\n</td>\n<td>\n	<button class='btn btn-success'>Select</button>\n</td>\n";return __p},this.JST["app/scripts/templates/PackageRowSimple.ejs"]=function(obj){obj||(obj={});var __t,__p="";_.escape,Array.prototype.join;with(obj)__p+='<td class="package-row-simple--thumbnail">\n	',""!==thumbnail&&(__p+="\n		<img src='"+(null==(__t=thumbnail)?"":__t)+"'>\n	"),__p+='\n<td class="package-row-simple--title">\n	'+(null==(__t=title)?"":__t)+"\n</td>\n";return __p},this.JST["app/scripts/templates/PackageTableSimple.ejs"]=function(obj){obj||(obj={});var __p="";_.escape;with(obj)__p+="\n";return __p},this.JST["app/scripts/templates/PackagesTable.ejs"]=function(obj){obj||(obj={});var __p="";_.escape;with(obj)__p+="<h1> Which Sensor?</h2>\n\n";return __p},this.JST["app/scripts/templates/PlugItIn.ejs"]=function(obj){obj||(obj={});var __p="";_.escape;with(obj)__p+="<h1>You rock! Ready to plug it in?</h1>\n<p>\n  Now that you have your Pipe configured, it's time to plug it all in and start collecting data. We're building functionality to help you out with this. Cool stuff like blinking lights on your pipe and things like that. We're also working on a guide, but you know what? We need your help building this guide. Contact R.J. (rj@rjsteinert.com) to be a member of our beta tester program and we'll have your back. Hope to see you soon!\n</p>\n";return __p},this.JST["app/scripts/templates/Recipe.ejs"]=function(obj){obj||(obj={});var __p="";_.escape;with(obj)__p+="<br><br><p>Download this file, place it on a USB Drive and then plug everything into your Raspberry Pi.</p>\n";return __p},this.JST["app/scripts/templates/SensorSimple.ejs"]=function(obj){obj||(obj={});var __t,__p="";_.escape,Array.prototype.join;with(obj)__p+="<td>\n	",""!==thumbnail&&(__p+="\n		<img src='"+(null==(__t=thumbnail)?"":__t)+"'>\n	"),__p+="\n<td>\n	"+(null==(__t=title)?"":__t)+"\n</td>\n<td>\n	"+(null==(__t=field_package_description)?"":__t)+"\n</td>\n";return __p},this.JST["app/scripts/templates/SensorsSimple.ejs"]=function(obj){obj||(obj={});var __p="";_.escape;with(obj)__p+="\n";return __p},OpkBakery.Models=OpkBakery.Models||{},function(){"use strict";OpkBakery.Models.Wifi=Backbone.Model.extend({url:"",initialize:function(){},defaults:{},validate:function(a,b){},parse:function(a,b){return a}})}(),OpkBakery.Models=OpkBakery.Models||{},function(){"use strict";OpkBakery.Models.Package=Backbone.Model.extend({idAttribute:"nid",url:function(){return OpkBakery.host+"/api/package/"+this.id},defaults:{},initialize:function(){this.commands=[]},validate:function(a,b){},parse:function(a,b){var c=this;c.commands=[];var d=JSON.parse(a.field_package_json);return d.forEach(function(b){var d=new OpkBakery.Models.Cli;d.set("package",a.field_package_name),d.set("command",b.command),d.schema=b.options,c.commands.push(d)}),a},generateInstall:function(){var a="wget  -O "+this.get("field_package_name")+".tar.gz "+this.get("field_package_download_url")+"\n";return a+="mkdir "+this.get("field_package_name")+"\n",a+="tar xzf "+this.get("field_package_name")+".tar.gz --strip-components=1 -C "+this.get("field_package_name")+"\n",a+="cd "+this.get("field_package_name")+" \n",a+="if [ -f ./install ]; then ",a+="./install;",a+="fi\n",a+="cd .. \n"}})}(),OpkBakery.Collections=OpkBakery.Collections||{},function(){"use strict";OpkBakery.Collections.Packages=Backbone.Collection.extend({initialize:function(){this.params={packageType:""}},model:OpkBakery.Models.Package,url:function(){return OpkBakery.host+"/api/package/"+this.params.packageType}})}(),OpkBakery.Views=OpkBakery.Views||{},function(){"use strict";OpkBakery.Views.PackageRow=Backbone.View.extend({template:JST["app/scripts/templates/PackageRow.ejs"],tagName:"tr",id:"",className:"",events:{"click button":"select"},initialize:function(){this.listenTo(this.model,"change",this.render)},render:function(){this.$el.attr("data-id",this.model.id),this.$el.html(this.template(this.model.toJSON()))},select:function(){this.$el.addClass("selected"),this.$el.parent().trigger("select")}})}(),OpkBakery.Views=OpkBakery.Views||{},function(){"use strict";OpkBakery.Views.PackagesTable=Backbone.View.extend({itemView:"PackageRow",template:JST["app/scripts/templates/SensorsTable.ejs"],tagName:"table",id:"",className:"table configurator-container",events:{},initialize:function(){this.$el.spin(OpkBakery.spinOpts),this.listenTo(this.collection,"change",this.render),this.listenTo(this.collection,"sync",this.render)},render:function(){this.$el.fadeOut();var a=this;setTimeout(function(){a.$el.spin(!1),a.collection.models.forEach(function(a){var b=new OpkBakery.Views[this.itemView]({model:a});this.$el.append(b.el),b.render()},a),a.$el.fadeIn()},500)}})}(),OpkBakery.Views=OpkBakery.Views||{},function(){"use strict";OpkBakery.Views.ChooseNetworkAdapter=Backbone.View.extend({template:JST["app/scripts/templates/ChooseNetworkAdapter.ejs"],tagName:"div",id:"",className:"configurator-container",events:{},initialize:function(){},render:function(){this.$el.html(this.template())}})}(),OpkBakery.Routers=OpkBakery.Routers||{},function(){"use strict";OpkBakery.Routers.RecipeBakery=Backbone.Router.extend({initialize:function(){OpkBakery.recipe=new OpkBakery.Models.Recipe},routes:{"":"home","which-sensor":"whichSensor",configurator:"whichSensor","configure-sensor":"configureSensor","which-database":"whichDatabase","configure-database":"configureDatabase","how-often":"howOften","choose-network-adapter":"chooseNetworkAdapter","configure-wifi":"configureWifi","configure-ethernet-static":"configureEthernetStatic",recipe:"recipe","get-the-kit":"getTheKit","plug-it-in":"plugItIn",guide:"guide",examples:"examples",forum:"forum",hackpad:"hackpad",events:"events",chat:"chat",step1:"step1",step2:"step2",step3:"step3",step4:"step4",step5:"step5"},step1:function(){$(".main").fadeOut(),OpkBakery.setIframe("https://openpipekitguide.hackpad.com/Step-1-Plan-x5gNa51EeMa"),setTimeout(function(){$(".main").fadeIn(1e3)},500)},step2:function(){$(".main").fadeOut(),OpkBakery.setIframe("https://openpipekitguide.hackpad.com/Step-2-Order-oA4Mn4uuHHE"),setTimeout(function(){$(".main").fadeIn(1e3)},500)},step3:function(){$(".main").fadeOut(),OpkBakery.setIframe("https://openpipekitguide.hackpad.com/Step-3-Build-ghs3tyFeJOZ"),setTimeout(function(){$(".main").fadeIn(1e3)},500)},step4:function(){$(".main").fadeOut(),OpkBakery.setIframe("https://openpipekitguide.hackpad.com/Step-4-Configure-ORawTnsyKK3"),setTimeout(function(){$(".main").fadeIn(1e3)},500)},step5:function(){$(".main").fadeOut(),OpkBakery.setIframe("https://openpipekitguide.hackpad.com/Step-5-Deploy-P9dAbqhovfN"),setTimeout(function(){$(".main").fadeIn(1e3)},500)},guide:function(){$(".main").fadeOut(),OpkBakery.setIframe("https://openpipekitguide.hackpad.com/The-Open-Pipe-Kit-Guide-7XLc3C3zTv9"),setTimeout(function(){$(".main").fadeIn(1e3)},500)},hackpad:function(){$(".main").fadeOut(),OpkBakery.setIframe("https://opk.hackpad.com/OPK-Developers-Pad-nfTnXEGDf1J"),setTimeout(function(){$(".main").fadeIn(1e3)},500)},chat:function(){$(".main").fadeOut(),OpkBakery.setIframe("https://gitter.im/openpipekit/chat"),setTimeout(function(){$(".main").fadeIn(1e3)},500)},events:function(){$(".main").fadeOut(),OpkBakery.setIframe("https://opk.hackpad.com/Open-Pipe-Kit-Events-MCk6U9pHWgV"),setTimeout(function(){$(".main").fadeIn(1e3)},500)},forum:function(){$(".main").fadeOut(),$(".main").html('<iframe id="forum_embed" src="javascript:void(0)" scrolling="no" frameborder="0" width="900" height="700"></iframe><script type="text/javascript"> document.getElementById("forum_embed").src =  "https://groups.google.com/forum/embed/?place=forum/open-pipe-kit" +  "&showsearch=true&showpopout=true&parenturl=" +  encodeURIComponent(window.location.href);</script>'),$("iframe").css("height",$(window).height()-50),setTimeout(function(){$(".main").fadeIn(1e3)},500)},examples:function(){$(".main").fadeOut(),OpkBakery.setIframe("https://opk.hackpad.com/Open-Pipe-Kit-Examples-OntAm0RwwtU"),setTimeout(function(){$(".main").fadeIn(1e3)},500)},home:function(){$(".main").fadeOut(),setTimeout(function(){$(".wrapper").addClass("plug-it-in"),$(".main").html("");var a=new OpkBakery.Views.Home;$(".main").append(a.el),a.render(),$(".main").fadeIn()},500)},getTheKit:function(){$("body").removeClass("plug-it-in"),$(".main").fadeOut(),setTimeout(function(){$(".main").html("");var a=new OpkBakery.Views.GetTheKit;$(".main").append(a.el),a.render(),$(".main").fadeIn()},500)},plugItIn:function(){$("body").removeClass("plug-it-in"),$(".main").fadeOut(),setTimeout(function(){$(".main").html("");var a=new OpkBakery.Views.PlugItIn;$(".main").append(a.el),a.render(),$(".main").fadeIn()},500)},intro:function(){$(".main").html();var a=new OpkBakery.Views.Intro;$(".main").append(a.el),a.render()},whichSensor:function(){$(".wrapper").removeClass("plug-it-in"),$(".main").html("<h1>Which sensor?</h1>");var a=new OpkBakery.Collections.Packages;a.params.packageType="sensors";var b=new OpkBakery.Views.PackagesTable({collection:a});$(".main").append(b.el),b.$el.on("select",function(){var c=b.$el.find(".selected")[0],d=$(c).attr("data-id");a.models.forEach(function(a){a.id==d&&OpkBakery.recipe.set("sensorPackage",a)}),Backbone.history.navigate("configure-sensor",{trigger:!0})}),a.fetch()},configureSensor:function(){$(".main").html("<h1>Configure your sensor</h1>");var a=new OpkBakery.Models.Package({nid:OpkBakery.recipe.get("sensorPackage").id}),b=new OpkBakery.Views.ConfigurePackage({model:a});$(".main").append(b.el),a.fetch(),b.on("configured",function(){console.log("ok"),OpkBakery.recipe.set("sensorCli",this.cli),Backbone.history.navigate("which-database",{trigger:!0})})},whichDatabase:function(){$(".main").html("<h1>Which database?</h1>");var a=new OpkBakery.Collections.Packages;a.params.packageType="databases";var b=new OpkBakery.Views.PackagesTable({collection:a});$(".main").append(b.el),b.$el.on("select",function(){var c=b.$el.find(".selected")[0],d=$(c).attr("data-id");a.models.forEach(function(a){a.id==d&&OpkBakery.recipe.set("databasePackage",a)}),Backbone.history.navigate("configure-database",{trigger:!0})}),a.fetch()},configureDatabase:function(){$(".main").html("<h1>Configure your database</h1>");var a=new OpkBakery.Models.Package({nid:OpkBakery.recipe.get("databasePackage").id}),b=new OpkBakery.Views.ConfigurePackage({model:a});$(".main").append(b.el),a.fetch(),b.on("configured",function(){console.log("ok"),OpkBakery.recipe.set("databaseCli",this.cli),Backbone.history.navigate("how-often",{trigger:!0})})},howOften:function(){$(".main").html("<h1>How often?</h1>");var a=new OpkBakery.Models.Watch,b=new OpkBakery.Views.HowOften({model:a});$(".main").append(b.el),b.on("submit",function(){OpkBakery.recipe.set("interval",a.get("interval")),Backbone.history.navigate("choose-network-adapter",{trigger:!0})}),b.render()},chooseNetworkAdapter:function(){$(".main").html("<h1>How will you connect to the Internet?</h2>");var a=new OpkBakery.Views.ChooseNetworkAdapter;a.render();var b,c=a.$el.find("a");for(b=0;b<c.length;b++)$(c[b]).on("click",function(a){OpkBakery.recipe.set("networkAdapter",this.getAttribute("data-choice"))});$(".main").append(a.el)},configureWifi:function(){$(".main").html("<h1>Configure WiFi</h1>");var a=new OpkBakery.Models.WifiOptions,b=new OpkBakery.Views.ConfigureWifi({model:a});$(".main").append(b.el),b.on("configured",function(){OpkBakery.recipe.set("wifiName",this.model.get("wifiName")),OpkBakery.recipe.set("wifiPassword",this.model.get("wifiPassword")),Backbone.history.navigate("recipe",{trigger:!0})}),b.render()},configureEthernetStatic:function(){$(".main").html("<h1>Configure your Ethernet with a Static IP Address</h1>");var a=new OpkBakery.Models.EthernetStaticOptions,b=new OpkBakery.Views.ConfigureEthernetStatic({model:a});$(".main").append(b.el),b.on("configured",function(){var a=this.model.toJSON();delete a.id,OpkBakery.recipe.set(a),Backbone.history.navigate("recipe",{trigger:!0})}),b.render()},recipe:function(){var a=new OpkBakery.Views.Recipe({model:OpkBakery.recipe});$(".main").html(a.el),a.render()}})}(),OpkBakery.Models=OpkBakery.Models||{},function(){"use strict";OpkBakery.Models.Recipe=Backbone.Model.extend({url:"",initialize:function(){},defaults:{},validate:function(a,b){},parse:function(a,b){return a}})}(),OpkBakery.Views=OpkBakery.Views||{},function(){"use strict";OpkBakery.Views.ConfigurePackage=Backbone.View.extend({template:JST["app/scripts/templates/ConfigurePackage.ejs"],tagName:"div",id:"",className:"configurator-container",events:{},initialize:function(){this.$el.spin(OpkBakery.spinOpts),this.listenTo(this.model,"sync",this.render)},render:function(){this.$el.spin(!1);var a=this,b=this.model.commands[0];if(this.cli=b,0==Object.keys(b.schema).length)a.trigger("configured");else{var c=new Backbone.Form({model:b,submitButton:"submit"}).render();c.$el.append('<button style="float: right" class="btn btn-success">next</button>'),this.$el.html(c.el),$(this.$el.find("button")[0]).on("click",function(b){b.preventDefault(),console.log("submitted"),c.commit(),a.trigger("configured")})}}})}(),OpkBakery.Models=OpkBakery.Models||{},function(){"use strict";OpkBakery.Models.Cli=Backbone.Model.extend({url:"",initialize:function(){},defaults:{},validate:function(a,b){},parse:function(a,b){return a},generateCommand:function(){var a="./"+this.get("package")+"/"+this.get("command")+" ";return _.each(this.toJSON(),function(b,c){"package"!==c&&"command"!==c&&("boolean"==typeof b?1==b&&(a+=" --"+c):a+=" --"+c+" "+b)}),a}})}(),OpkBakery.Views=OpkBakery.Views||{},function(){"use strict";OpkBakery.Views.Recipe=Backbone.View.extend({template:JST["app/scripts/templates/Recipe.ejs"],tagName:"div",id:"",className:"configurator-container center-contents",events:{},initialize:function(){this.listenTo(this.model,"change",this.render)},render:function(){var a=this.model.toJSON();a.script=this.generateScript(),this.$el.html(this.template(a)),this.$el.append("<p>"),this.$el.append(this.generateDownload()),this.$el.append("</p>")},generateScript:function(){var a=this.model.get("sensorCli"),b=this.model.get("sensorPackage"),c=this.model.get("databaseCli"),d=this.model.get("databasePackage"),e="#!/bin/bash \n";return"wifi"==this.model.get("networkAdapter")?e+="pirateship wifi "+this.model.get("wifiName")+" "+this.model.get("wifiPassword")+" \n":"ethernet"==this.model.get("networkAdapter")||"ethernetStatic"==this.model.get("networkAdapter")&&(e+="pirateship ethernet "+this.model.get("ipAddress")+" "+this.model.get("netmask")+" "+this.model.get("gateway")+" "+this.model.get("dns")+"\n"),e+=b.generateInstall()+" \n",e+=d.generateInstall()+" \n",e+="touch autorun.sh \n",e+="echo '#!/bin/bash' >> autorun.sh \n",e+="echo 'if [ -f ./"+d.get("field_package_name")+"/onboot ]; then ./"+d.get("field_package_name")+"/onboot;fi' >> autorun.sh \n",e+="echo 'if [ -f ./"+b.get("field_package_name")+"/onboot ]; then ./"+b.get("field_package_name")+"/onboot;fi' >> autorun.sh \n",e+="echo 'watch -n"+this.model.get("interval")+' "',e+=a.generateCommand(),e+=" | tee -a log.txt | ",e+=c.generateCommand(),e+=" | tee -a log.txt\"' >> autorun.sh"},generateDownload:function(){var a="autorunonce.sh",b=$(this.$el.find("textarea")[0]).text(),c=document.createElement("a");return c.className="btn btn-success",c.download=a,c.textContent="download",c.href="data:application/json;base64,"+window.btoa(unescape(encodeURIComponent(b))),c}})}(),OpkBakery.Views=OpkBakery.Views||{},function(){"use strict";OpkBakery.Views.HowOften=Backbone.View.extend({template:JST["app/scripts/templates/HowOften.ejs"],tagName:"div",id:"",className:"configurator-container",events:{},initialize:function(){this.listenTo(this.model,"change",this.render)},render:function(){var a=this,b=new Backbone.Form({model:this.model,submitButton:"submit"}).render();b.$el.append('<button style="float: right" class="btn btn-success">next</button>'),this.$el.html(b.el),$(this.$el.find("button")[0]).on("click",function(c){c.preventDefault(),console.log("submitted"),b.commit(),a.trigger("submit")})}})}(),OpkBakery.Models=OpkBakery.Models||{},function(){"use strict";OpkBakery.Models.Watch=Backbone.Model.extend({url:"",initialize:function(){},defaults:{},validate:function(a,b){},parse:function(a,b){return a},schema:{interval:{type:"Text",title:"(in seconds)"}}})}(),OpkBakery.Views=OpkBakery.Views||{},function(){"use strict";OpkBakery.Views.Intro=Backbone.View.extend({template:JST["app/scripts/templates/Intro.ejs"],tagName:"div",id:"",className:"",events:{},initialize:function(){},render:function(){this.$el.html(this.template())}})}(),OpkBakery.Models=OpkBakery.Models||{},function(){"use strict";OpkBakery.Models.WifiOptions=Backbone.Model.extend({url:"",initialize:function(){},defaults:{},validate:function(a,b){},parse:function(a,b){return a},schema:{wifiName:"Text",wifiPassword:"Text"}})}(),OpkBakery.Models=OpkBakery.Models||{},function(){"use strict";OpkBakery.Models.EthernetStaticOptions=Backbone.Model.extend({url:"",initialize:function(){},defaults:{},validate:function(a,b){},parse:function(a,b){return a},schema:{ipAddress:"Text",netmask:"Text",gateway:"Text",dns:"Text"}})}(),OpkBakery.Views=OpkBakery.Views||{},function(){"use strict";OpkBakery.Views.ConfigureWifi=Backbone.View.extend({template:JST["app/scripts/templates/ConfigureWifi.ejs"],tagName:"div",id:"",className:"configurator-container",events:{},initialize:function(){this.listenTo(this.model,"change",this.render)},render:function(){var a=this,b=new Backbone.Form({model:this.model,submitButton:"submit"}).render();b.$el.append('<button style="float: right" class="btn btn-default">next</button>'),this.$el.html(b.el),$(this.$el.find("button")[0]).on("click",function(c){c.preventDefault(),console.log("submitted"),b.commit(),a.trigger("configured")})}})}(),OpkBakery.Views=OpkBakery.Views||{},function(){"use strict";OpkBakery.Views.Home=Backbone.View.extend({template:JST["app/scripts/templates/Home.ejs"],tagName:"div",id:"",className:"",events:{},initialize:function(){},render:function(){this.$el.html(this.template())}})}(),OpkBakery.Views=OpkBakery.Views||{},function(){"use strict";OpkBakery.Views.SensorsSimple=Backbone.View.extend({itemView:"SensorSimple",template:JST["app/scripts/templates/SensorsSimple.ejs"],tagName:"div",id:"",className:"",events:{},initialize:function(){this.$el.spin(OpkBakery.spinOpts),this.listenTo(this.collection,"change",this.render),this.listenTo(this.collection,"sync",this.render)},render:function(){this.$el.spin(!1),this.collection.models.forEach(function(a){var b=new OpkBakery.Views[this.itemView]({model:a});this.$el.append(b.el),b.render()},this)}})}(),OpkBakery.Views=OpkBakery.Views||{},function(){"use strict";OpkBakery.Views.SensorSimple=Backbone.View.extend({template:JST["app/scripts/templates/SensorSimple.ejs"],tagName:"div",id:"",className:"",events:{},initialize:function(){this.listenTo(this.model,"change",this.render)},render:function(){this.$el.html(this.template(this.model.toJSON()))}})}(),OpkBakery.Views=OpkBakery.Views||{},function(){"use strict";OpkBakery.Views.PackageRowSimple=OpkBakery.Views.PackageRow.extend({template:JST["app/scripts/templates/PackageRowSimple.ejs"]})}(),OpkBakery.Views=OpkBakery.Views||{},function(){"use strict";OpkBakery.Views.PackageTableSimple=OpkBakery.Views.PackagesTable.extend({itemView:"PackageRowSimple",template:JST["app/scripts/templates/PackageTableSimple.ejs"]})}(),OpkBakery.Views=OpkBakery.Views||{},function(){"use strict";OpkBakery.Views.GetTheKit=Backbone.View.extend({template:JST["app/scripts/templates/GetTheKit.ejs"],tagName:"div",id:"",className:"",events:{},initialize:function(){},render:function(){this.$el.html(this.template())}})}(),OpkBakery.Views=OpkBakery.Views||{},function(){"use strict";OpkBakery.Views.PlugItIn=Backbone.View.extend({template:JST["app/scripts/templates/PlugItIn.ejs"],tagName:"div",id:"",className:"",events:{},initialize:function(){},render:function(){this.$el.html(this.template())}})}(),OpkBakery.Views=OpkBakery.Views||{},function(){"use strict";OpkBakery.Views.ConfigureEthernetStatic=Backbone.View.extend({template:JST["app/scripts/templates/ConfigureEthernetStatic.ejs"],tagName:"div",id:"",className:"configurator-container",events:{},initialize:function(){this.listenTo(this.model,"change",this.render)},render:function(){var a=this,b=new Backbone.Form({model:this.model,submitButton:"submit"}).render();b.$el.append('<button style="float: right" class="btn btn-default">next</button>'),this.$el.html(b.el),$(this.$el.find("button")[0]).on("click",function(c){c.preventDefault(),console.log("submitted"),b.commit(),a.trigger("configured")})}})}();