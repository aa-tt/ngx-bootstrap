(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"+USN":function(t,n,o){"use strict";o.r(n),n.default='<button type="button" class="btn btn-primary"\n        tooltip="Vivamus sagittis lacus vel augue laoreet rutrum faucibus." containerClass="customClass">\n  Demo with custom class\n</button>\n\n'},"6Pyj":function(t,n,o){"use strict";o.r(n),n.default='<div class="row" style="position: relative; overflow: hidden; padding-top: 10px;">\n  <div class="col-xs-12 col-12">\n    <button type="button" class="btn btn-danger"\n            tooltip="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">\n      Default tooltip\n    </button>\n    <button type="button" class="btn btn-success"\n            tooltip="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."\n            container="body">\n      Tooltip appended to body\n    </button>\n  </div>\n</div>\n\n'},"7joK":function(t,n,o){"use strict";o.r(n),n.default="import { Component } from '@angular/core';\n\n@Component({\n  selector: 'demo-tooltip-triggers-custom',\n  templateUrl: './triggers-custom.html'\n})\nexport class DemoTooltipTriggersCustomComponent {}\n"},AN4n:function(t,n,o){"use strict";o.r(n),n.default="import { Component } from '@angular/core';\n\n@Component({\n  selector: 'demo-tooltip-delay',\n  templateUrl: './delay.html'\n})\nexport class DemoTooltipDelayComponent {}\n"},CXLt:function(t,n,o){"use strict";o.r(n),n.default='<ng-template #popTemplate>Here we go: <div [innerHtml]="html"></div></ng-template>\n<button type="button" class="btn btn-success"\n        [tooltip]="popTemplate">\n  Show me tooltip with html\n</button>\n'},HV50:function(t,n,o){"use strict";o.r(n),n.default="import { Component } from '@angular/core';\n\n@Component({\n  selector: 'demo-tooltip-adaptive-position',\n  templateUrl: './adaptive-position.html'\n})\nexport class DemoTooltipAdaptivePositionComponent {}\n"},J71g:function(t,n,o){"use strict";o.r(n),n.default="import { Component } from '@angular/core';\n\n@Component({\n  selector: 'demo-tooltip-basic',\n  templateUrl: './basic.html'\n})\nexport class DemoTooltipBasicComponent {}\n"},JLzS:function(t,n,o){"use strict";o.r(n),n.default="import { Component } from '@angular/core';\n\n@Component({\n  selector: 'demo-tooltip-triggers-manual',\n  templateUrl: './triggers-manual.html'\n})\nexport class DemoTooltipTriggersManualComponent {}\n"},JMgA:function(t,n,o){"use strict";o.r(n),n.default="import { Component } from '@angular/core';\n\n@Component({\n  selector: 'demo-tooltip-dynamic-html',\n  templateUrl: './dynamic-html.html'\n})\nexport class DemoTooltipDynamicHtmlComponent {\n  html = `<span class=\"btn-block btn-danger well-sm\">Never trust not sanitized HTML!!!</span>`;\n}\n"},JVFR:function(t,n,o){"use strict";o.r(n),n.default='<button type="button" class="btn btn-success"\n        tooltip="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."\n        triggers="focus">\n  Dismissible tooltip\n</button>\n\n'},Pfxt:function(t,n,o){"use strict";o.r(n),n.default='<button type="button" class="btn btn-primary"\n        tooltip="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">\n  Simple demo\n</button>\n\n'},SQBb:function(t,n,o){"use strict";o.r(n),n.default='<button type="button" class="btn btn-info"\n        tooltip="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">\n  I have component level styling\n</button>\n'},Segs:function(t,n,o){"use strict";o.r(n),n.default='<p>\n  <span tooltip="Hello there! I was triggered manually"\n        triggers="" #pop="bs-tooltip">\n  This text has attached tooltip\n  </span>\n</p>\n\n<button type="button" class="btn btn-success" (click)="pop.show()">\n  Show\n</button>\n<button type="button" class="btn btn-warning" (click)="pop.hide()">\n  Hide\n</button>\n<button type="button" class="btn btn-info" (click)="pop.toggle()">\n  Toggle\n</button>\n\n'},TPTc:function(t,n,o){"use strict";o.r(n),n.default='<button type="button" class="btn btn-primary"\n        tooltip="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">\n  Preconfigured tooltip\n</button>\n'},TSBC:function(t,n,o){"use strict";o.r(n),n.default="import { Component } from '@angular/core';\n\n@Component({\n  selector: 'demo-tooltip-custom-content',\n  templateUrl: './custom-content.html'\n})\nexport class DemoTooltipCustomContentComponent {\n  content = 'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.';\n}\n"},UDI6:function(t,n,o){"use strict";o.r(n),n.default='<button type="button" class="btn btn-default btn-secondary mb-2"\n        tooltip="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."\n        [adaptivePosition]="false"\n        placement="top">\n  Tooltip on top\n</button>\n\n<button type="button" class="btn btn-default btn-secondary mb-2"\n        tooltip="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."\n        [adaptivePosition]="false"\n        placement="right">\n  Tooltip on right\n</button>\n'},UeNK:function(t,n,o){"use strict";o.r(n);var e=o("Valr"),i=o("QJY3"),c=o("DUip"),l=o("eajB"),s=o("k3/p"),a=o("TYT/"),u=function(){function t(){}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=a.Ub({type:t,selectors:[["demo-tooltip-adaptive-position"]],decls:4,vars:2,consts:[["type","button","tooltip","Vivamus sagittis lacus vel augue laoreet rutrum faucibus.","placement","top",1,"btn","btn-default","btn-secondary","mb-2",3,"adaptivePosition"],["type","button","tooltip","Vivamus sagittis lacus vel augue laoreet rutrum faucibus.","placement","right",1,"btn","btn-default","btn-secondary","mb-2",3,"adaptivePosition"]],template:function(t,n){1&t&&(a.gc(0,"button",0),a.Tc(1," Tooltip on top\n"),a.fc(),a.gc(2,"button",1),a.Tc(3," Tooltip on right\n"),a.fc()),2&t&&(a.wc("adaptivePosition",!1),a.Ob(2),a.wc("adaptivePosition",!1))},directives:[l.b],encapsulation:2}),t}(),r=function(){function t(){}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=a.Ub({type:t,selectors:[["demo-tooltip-basic"]],decls:2,vars:0,consts:[["type","button","tooltip","Vivamus sagittis lacus vel augue laoreet rutrum faucibus.",1,"btn","btn-primary"]],template:function(t,n){1&t&&(a.gc(0,"button",0),a.Tc(1," Simple demo\n"),a.fc())},directives:[l.b],encapsulation:2}),t}(),p=function(){function t(){}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=a.Ub({type:t,selectors:[["demo-tooltip-class"]],decls:2,vars:0,consts:[["type","button","tooltip","Vivamus sagittis lacus vel augue laoreet rutrum faucibus.","containerClass","customClass",1,"btn","btn-primary"]],template:function(t,n){1&t&&(a.gc(0,"button",0),a.Tc(1," Demo with custom class\n"),a.fc())},directives:[l.b],encapsulation:2}),t}();function m(){return Object.assign(new l.a,{placement:"right",container:"body",delay:500})}var b=function(){function t(){}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=a.Ub({type:t,selectors:[["demo-tooltip-config"]],features:[a.Nb([{provide:l.a,useFactory:m}])],decls:2,vars:0,consts:[["type","button","tooltip","Vivamus sagittis lacus vel augue laoreet rutrum faucibus.",1,"btn","btn-primary"]],template:function(t,n){1&t&&(a.gc(0,"button",0),a.Tc(1," Preconfigured tooltip\n"),a.fc())},directives:[l.b],encapsulation:2}),t}(),d=function(){function t(){}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=a.Ub({type:t,selectors:[["demo-tooltip-container"]],decls:6,vars:0,consts:[[1,"row",2,"position","relative","overflow","hidden","padding-top","10px"],[1,"col-xs-12","col-12"],["type","button","tooltip","Vivamus sagittis lacus vel augue laoreet rutrum faucibus.",1,"btn","btn-danger"],["type","button","tooltip","Vivamus sagittis lacus vel augue laoreet rutrum faucibus.","container","body",1,"btn","btn-success"]],template:function(t,n){1&t&&(a.gc(0,"div",0),a.gc(1,"div",1),a.gc(2,"button",2),a.Tc(3," Default tooltip "),a.fc(),a.gc(4,"button",3),a.Tc(5," Tooltip appended to body "),a.fc(),a.fc(),a.fc())},directives:[l.b],encapsulation:2}),t}();function f(t,n){if(1&t&&a.Tc(0),2&t){var o=a.qc();a.Vc("Just another: ",o.content,"")}}var g=function(){function t(){this.content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=a.Ub({type:t,selectors:[["demo-tooltip-custom-content"]],decls:4,vars:1,consts:[["tolTemplate",""],["type","button",1,"btn","btn-warning",3,"tooltip"]],template:function(t,n){if(1&t&&(a.Rc(0,f,1,1,"ng-template",null,0,a.Sc),a.gc(2,"button",1),a.Tc(3," TemplateRef binding\n"),a.fc()),2&t){var o=a.Gc(1);a.Ob(2),a.wc("tooltip",o)}},directives:[l.b],encapsulation:2}),t}(),v=function(){function t(){}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=a.Ub({type:t,selectors:[["demo-tooltip-delay"]],decls:2,vars:1,consts:[["type","button","tooltip","Vivamus sagittis lacus vel augue laoreet rutrum faucibus.",1,"btn","btn-primary",3,"delay"]],template:function(t,n){1&t&&(a.gc(0,"button",0),a.Tc(1," Tooltip with 0.5sec delay\n"),a.fc()),2&t&&a.wc("delay",500)},directives:[l.b],encapsulation:2}),t}(),y=function(){function t(){}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=a.Ub({type:t,selectors:[["demo-tooltip-dismiss"]],decls:2,vars:0,consts:[["type","button","tooltip","Vivamus sagittis lacus vel augue laoreet rutrum faucibus.","triggers","focus",1,"btn","btn-success"]],template:function(t,n){1&t&&(a.gc(0,"button",0),a.Tc(1," Dismissible tooltip\n"),a.fc())},directives:[l.b],encapsulation:2}),t}(),h=function(){function t(){this.content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=a.Ub({type:t,selectors:[["demo-tooltip-dynamic"]],decls:2,vars:1,consts:[["type","button",1,"btn","btn-info",3,"tooltip"]],template:function(t,n){1&t&&(a.gc(0,"button",0),a.Tc(1," Simple binding\n"),a.fc()),2&t&&a.wc("tooltip",n.content)},directives:[l.b],encapsulation:2}),t}();function T(t,n){if(1&t&&(a.Tc(0,"Here we go: "),a.bc(1,"div",2)),2&t){var o=a.qc();a.Ob(1),a.wc("innerHtml",o.html,a.Kc)}}var w=function(){function t(){this.html='<span class="btn-block btn-danger well-sm">Never trust not sanitized HTML!!!</span>'}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=a.Ub({type:t,selectors:[["demo-tooltip-dynamic-html"]],decls:4,vars:1,consts:[["popTemplate",""],["type","button",1,"btn","btn-success",3,"tooltip"],[3,"innerHtml"]],template:function(t,n){if(1&t&&(a.Rc(0,T,2,1,"ng-template",null,0,a.Sc),a.gc(2,"button",1),a.Tc(3," Show me tooltip with html\n"),a.fc()),2&t){var o=a.Gc(1);a.Ob(2),a.wc("tooltip",o)}},directives:[l.b],encapsulation:2}),t}(),C=function(){function t(){}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=a.Ub({type:t,selectors:[["demo-tooltip-placement"]],decls:10,vars:0,consts:[["type","button","tooltip","Vivamus sagittis lacus vel augue laoreet rutrum faucibus.","placement","top",1,"btn","btn-default","btn-secondary","mb-2"],["type","button","tooltip","Vivamus sagittis lacus vel augue laoreet rutrum faucibus.","placement","right",1,"btn","btn-default","btn-secondary","mb-2"],["type","button","tooltip","Vivamus sagittis lacus vel augue laoreet rutrum faucibus.","placement","auto",1,"btn","btn-default","btn-secondary","mb-2"],["type","button","tooltip","Vivamus sagittis lacus vel augue laoreet rutrum faucibus.","placement","left",1,"btn","btn-default","btn-secondary","mb-2"],["type","button","tooltip","Vivamus sagittis lacus vel augue laoreet rutrum faucibus.","placement","bottom",1,"btn","btn-default","btn-secondary","mb-2"]],template:function(t,n){1&t&&(a.gc(0,"button",0),a.Tc(1," Tooltip on top\n"),a.fc(),a.gc(2,"button",1),a.Tc(3," Tooltip on right\n"),a.fc(),a.gc(4,"button",2),a.Tc(5," Tooltip auto\n"),a.fc(),a.gc(6,"button",3),a.Tc(7," Tooltip on left\n"),a.fc(),a.gc(8,"button",4),a.Tc(9," Tooltip on bottom\n"),a.fc())},directives:[l.b],encapsulation:2}),t}(),x=function(){function t(){}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=a.Ub({type:t,selectors:[["demo-tooltip-styling-local"]],decls:2,vars:0,consts:[["type","button","tooltip","Vivamus sagittis lacus vel augue laoreet rutrum faucibus.",1,"btn","btn-info"]],template:function(t,n){1&t&&(a.gc(0,"button",0),a.Tc(1," I have component level styling\n"),a.fc())},directives:[l.b],styles:["[_nghost-%COMP%]     .tooltip-inner {\n        background-color: #009688;\n        color: #fff;\n      }\n      [_nghost-%COMP%]     .tooltip.top .tooltip-arrow:before, [_nghost-%COMP%]     .tooltip.top .tooltip-arrow {\n        border-top-color: #009688;\n      }"]}),t}(),D=function(){function t(){}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=a.Ub({type:t,selectors:[["demo-tooltip-triggers-custom"]],decls:11,vars:0,consts:[[1,"row"],[1,"col-xs-6","col-6"],["type","button","tooltip","I will hide on click","triggers","mouseenter:click",1,"btn","btn-info"],["type","button","tooltip","I will hide on click","triggers","click",1,"btn","btn-info"]],template:function(t,n){1&t&&(a.gc(0,"div",0),a.gc(1,"div",1),a.gc(2,"p"),a.Tc(3,"Desktop"),a.fc(),a.gc(4,"button",2),a.Tc(5," Hover over me! "),a.fc(),a.fc(),a.gc(6,"div",1),a.gc(7,"p"),a.Tc(8,"Mobile"),a.fc(),a.gc(9,"button",3),a.Tc(10," Click on me! "),a.fc(),a.fc(),a.fc())},directives:[l.b],encapsulation:2}),t}(),V=function(){function t(){}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=a.Ub({type:t,selectors:[["demo-tooltip-triggers-manual"]],decls:10,vars:0,consts:[["tooltip","Hello there! I was triggered manually","triggers",""],["pop","bs-tooltip"],["type","button",1,"btn","btn-success",3,"click"],["type","button",1,"btn","btn-warning",3,"click"],["type","button",1,"btn","btn-info",3,"click"]],template:function(t,n){if(1&t){var o=a.hc();a.gc(0,"p"),a.gc(1,"span",0,1),a.Tc(3," This text has attached tooltip "),a.fc(),a.fc(),a.gc(4,"button",2),a.oc("click",(function(){return a.Jc(o),a.Gc(2).show()})),a.Tc(5," Show\n"),a.fc(),a.gc(6,"button",3),a.oc("click",(function(){return a.Jc(o),a.Gc(2).hide()})),a.Tc(7," Hide\n"),a.fc(),a.gc(8,"button",4),a.oc("click",(function(){return a.Jc(o),a.Gc(2).toggle()})),a.Tc(9," Toggle\n"),a.fc()}},directives:[l.b],encapsulation:2}),t}(),k=o("ClAA"),U=o("y20O"),P=o("nk7K"),M=o("l3GJ"),S=[{name:"Usage",anchor:"usage",outlet:k.a,content:{doc:o("s4Zf")}},{name:"Examples",anchor:"examples",outlet:U.a,content:[{title:"Basic",anchor:"basic",component:o("J71g"),html:o("Pfxt"),outlet:r},{title:"Placement",anchor:"placement",component:o("jG2G"),html:o("vvOX"),description:"<p>Four positioning options are available: <code>top</code>, <code>right</code>,\n          <code>bottom</code>, and <code>left</code>. Besides that, <code>auto</code> option may be\n          used to detect a position that fits the component on the screen.</p>",outlet:C},{title:"Disable adaptive position",anchor:"adaptive-position",description:"\n          <p>You can disable adaptive position via <code>adaptivePosition</code> input or config option</p>\n        ",component:o("HV50"),html:o("UDI6"),outlet:u},{title:"Dismiss on next click",anchor:"dismiss",component:o("axmm"),html:o("JVFR"),description:"<p>Use the <code>focus</code> trigger to dismiss tooltips on the next click\n          that the user makes.</p>",outlet:y},{title:"Dynamic Content",anchor:"dynamic-content",component:o("mJes"),html:o("fYZe"),description:"<p>Pass a string as tooltip content</p>",outlet:h},{title:"Custom content template",anchor:"custom-content-template",component:o("TSBC"),html:o("oyw1"),description:'<p>Create <code>&lt;ng-template #myId></code> with any html allowed by Angular,\n        and provide template ref <code>[tooltip]="myId"</code> as tooltip content</p>',outlet:g},{title:"Dynamic Html",anchor:"dynamic-html",component:o("JMgA"),html:o("CXLt"),description:"<p>By using <code>[innerHtml]</code> inside <code>ng-template</code> you\n          can display any dynamic html</p>",outlet:w},{title:"Append to body",anchor:"append-to-body",component:o("YyOb"),html:o("6Pyj"),description:'<p>When you have some styles on a parent element that interfere with a tooltip,\n          you\u2019ll want to specify a <code>container="body"</code> so that the tooltip\u2019s HTML will be\n          appended to body. This will help to avoid rendering problems in more complex components\n          (like our input groups, button groups, etc) or inside elements with <code>overflow: hidden</code></p>',outlet:d},{title:"Configuring defaults",anchor:"config-defaults",component:o("tOI7"),html:o("TPTc"),outlet:b},{title:"Custom triggers",anchor:"triggers-custom",component:o("7joK"),html:o("a7kt"),outlet:D},{title:"Manual triggering",anchor:"triggers-manual",component:o("JLzS"),html:o("Segs"),description:'<p>You can manage tooltip using its <code>show()</code>, <code>hide()</code> and <code>toggle()</code> methods. \n          If you want to manage tooltip\'s state manually, use <code>triggers=""</code></p>',outlet:V},{title:"Component level styling",anchor:"styling-local",component:o("qHY7"),html:o("SQBb"),outlet:x},{title:"Custom class",anchor:"custom-class",component:o("W7Pu"),html:o("+USN"),outlet:p},{title:"Tooltip with delay",anchor:"tooltip-delay",component:o("AN4n"),html:o("iJQM"),description:"<p>Hold on cursor above button for 0,5 second or more to see delayed tooltip</p>",outlet:v}]},{name:"API Reference",anchor:"api-reference",outlet:P.a,content:[{title:"TooltipDirective",anchor:"tooltip-directive",outlet:M.b},{title:"TooltipConfig",anchor:"tooltip-config",outlet:M.c}]}],H=o("ybC4"),J=o("oxqd"),O=[{path:"",component:function(){function t(){this.name="Tooltip",this.src="https://github.com/valor-software/ngx-bootstrap/tree/development/src/tooltip",this.componentContent=S}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=a.Ub({type:t,selectors:[["tooltip-section"]],decls:16,vars:4,consts:[[3,"name","src","componentContent"],[1,"prettyprint","lang-bash","prettyprinted"],[1,"pln"],[1,"pun"],[3,"content"]],template:function(t,n){1&t&&(a.gc(0,"demo-section",0),a.gc(1,"p"),a.Tc(2,"Inspired by the excellent Tipsy jQuery plugin written by Jason Frame. Tooltips are an updated version, which don\u2019t rely on images, use CSS3 for animations, and much more."),a.fc(),a.gc(3,"p"),a.Tc(4,"The easiest way to add the tooltip component to your app (will be added to the root module)"),a.fc(),a.gc(5,"pre",1),a.gc(6,"span",2),a.Tc(7,"ng add ngx"),a.fc(),a.gc(8,"span",3),a.Tc(9,"-"),a.fc(),a.gc(10,"span",2),a.Tc(11,"bootstrap "),a.fc(),a.Tc(12," --component "),a.gc(13,"span",2),a.Tc(14,"tooltip"),a.fc(),a.fc(),a.bc(15,"docs-section",4),a.fc()),2&t&&(a.wc("name",n.name)("src",n.src)("componentContent",n.componentContent),a.Ob(15),a.wc("content",n.componentContent))},directives:[H.a,J.a],encapsulation:2,changeDetection:0}),t}()}];o.d(n,"DemoTooltipModule",(function(){return I}));var I=function(){function t(){}return t.\u0275mod=a.Yb({type:t}),t.\u0275inj=a.Xb({factory:function(n){return new(n||t)},imports:[[e.c,i.k,s.a,l.c.forRoot(),c.i.forChild(O)]]}),t}()},W7Pu:function(t,n,o){"use strict";o.r(n),n.default="import { Component } from '@angular/core';\n\n@Component({\n  selector: 'demo-tooltip-class',\n  templateUrl: './class.html'\n})\nexport class DemoTooltipClassComponent {}\n"},YyOb:function(t,n,o){"use strict";o.r(n),n.default="import { Component } from '@angular/core';\n\n@Component({\n  selector: 'demo-tooltip-container',\n  templateUrl: './container.html'\n})\nexport class DemoTooltipContainerComponent {}\n"},a7kt:function(t,n,o){"use strict";o.r(n),n.default='\n<div class="row">\n  <div class="col-xs-6 col-6">\n    <p>Desktop</p>\n    <button type="button" class="btn btn-info"\n            tooltip="I will hide on click"\n            triggers="mouseenter:click">\n      Hover over me!\n    </button>\n  </div>\n\n  <div class="col-xs-6 col-6">\n    <p>Mobile</p>\n    <button type="button" class="btn btn-info"\n            tooltip="I will hide on click"\n            triggers="click">\n      Click on me!\n    </button>\n  </div>\n</div>\n'},axmm:function(t,n,o){"use strict";o.r(n),n.default="import { Component } from '@angular/core';\n\n@Component({\n  selector: 'demo-tooltip-dismiss',\n  templateUrl: './dismiss.html'\n})\nexport class DemoTooltipDismissComponent {}\n"},fYZe:function(t,n,o){"use strict";o.r(n),n.default='<button type="button" class="btn btn-info" [tooltip]="content">\n  Simple binding\n</button>\n'},iJQM:function(t,n,o){"use strict";o.r(n),n.default='<button type="button" class="btn btn-primary"\n        tooltip="Vivamus sagittis lacus vel augue laoreet rutrum faucibus." [delay]="500">\n  Tooltip with 0.5sec delay\n</button>\n\n'},jG2G:function(t,n,o){"use strict";o.r(n),n.default="import { Component } from '@angular/core';\n\n@Component({\n  selector: 'demo-tooltip-placement',\n  templateUrl: './placement.html'\n})\nexport class DemoTooltipPlacementComponent {}\n"},mJes:function(t,n,o){"use strict";o.r(n),n.default="import { Component } from '@angular/core';\n\n@Component({\n  selector: 'demo-tooltip-dynamic',\n  templateUrl: './dynamic.html'\n})\nexport class DemoTooltipDynamicComponent {\n  content: string = 'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.';\n}\n"},oyw1:function(t,n,o){"use strict";o.r(n),n.default='<ng-template #tolTemplate>Just another: {{content}}</ng-template>\n<button type="button" class="btn btn-warning" [tooltip]="tolTemplate">\n  TemplateRef binding\n</button>\n'},qHY7:function(t,n,o){"use strict";o.r(n),n.default="import { Component } from '@angular/core';\n\n@Component({\n  selector: 'demo-tooltip-styling-local',\n  templateUrl: './styling-local.html',\n  /* tslint:disable no-unused-css*/\n  styles: [\n    `\n      :host >>> .tooltip-inner {\n        background-color: #009688;\n        color: #fff;\n      }\n      :host >>> .tooltip.top .tooltip-arrow:before,\n      :host >>> .tooltip.top .tooltip-arrow {\n        border-top-color: #009688;\n      }\n    `\n  ]\n})\nexport class DemoTooltipStylingLocalComponent {}\n"},s4Zf:function(t,n,o){"use strict";o.r(n),n.default="// RECOMMENDED\nimport { TooltipModule } from 'ngx-bootstrap/tooltip';\n// NOT RECOMMENDED (Angular 9 doesn't support this kind of import)\nimport { TooltipModule } from 'ngx-bootstrap';\n\n@NgModule({\n  imports: [TooltipModule.forRoot(),...]\n})\nexport class AppModule(){}\n"},tOI7:function(t,n,o){"use strict";o.r(n),n.default="import { Component } from '@angular/core';\nimport { TooltipConfig } from 'ngx-bootstrap/tooltip';\n\n// such override allows to keep some initial values\n\nexport function getAlertConfig(): TooltipConfig {\n  return Object.assign(new TooltipConfig(), {\n    placement: 'right',\n    container: 'body',\n    delay: 500\n  });\n}\n\n@Component({\n  selector: 'demo-tooltip-config',\n  templateUrl: './config.html',\n  providers: [{ provide: TooltipConfig, useFactory: getAlertConfig }]\n})\nexport class DemoTooltipConfigComponent {}\n"},vvOX:function(t,n,o){"use strict";o.r(n),n.default='<button type="button" class="btn btn-default btn-secondary mb-2"\n        tooltip="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."\n        placement="top">\n  Tooltip on top\n</button>\n\n<button type="button" class="btn btn-default btn-secondary mb-2"\n        tooltip="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."\n        placement="right">\n  Tooltip on right\n</button>\n\n<button type="button" class="btn btn-default btn-secondary mb-2"\n        tooltip="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."\n        placement="auto">\n  Tooltip auto\n</button>\n\n<button type="button" class="btn btn-default btn-secondary mb-2"\n        tooltip="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."\n        placement="left">\n  Tooltip on left\n</button>\n\n<button type="button" class="btn btn-default btn-secondary mb-2"\n        tooltip="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."\n        placement="bottom">\n  Tooltip on bottom\n</button>\n'}}]);