!function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var r=function(e){var t,n=[];for(t=0;t<e;t++)n.push(" ");return n.join("")},a={xtype:"viewport",layout:"border",items:[{border:!1,margin:"0 0 5 0",hidden:!0,region:"north",xtype:"panel",listeners:{boxready:function(e,t,n,r){e.setHtml('<h1 class="x-panel-header">Hello Ts</h1>')}}},{collapsible:!0,height:100,html:"Information goes here",minHeight:100,region:"south",split:!0,hidden:!0,title:"South Panel",xtype:"panel"},{activeTab:0,items:[{layout:"fit",title:"JSON处理",xtype:"panel",tbar:{items:[{text:"粘贴",xtype:"button",handler:function(e){var t=e.up("panel").down("textarea").inputEl;if(null!=t){var n=t.dom;n.focus(),n.select(),document.execCommand("paste")}}},{text:"复制",xtype:"button",handler:function(e){var t=e.up("panel").down("textarea");if(0!==t.getValue().length){var n=t.inputEl;if(null!=n){var r=n.dom;r.focus(),r.select(),document.execCommand("copy")}}}},{xtype:"tbseparator"},{xtype:"button",text:"格式化",handler:function(e){for(var t=e.up("panel").down("textarea"),n=t.getValue(),a=n.length,o=[],l=0,u=!1,i=0;i<a;i++){var p=n.charAt(i);u&&p===u?"\\"!==n.charAt(i-1)&&(u=!1):u||'"'!==p&&"'"!==p?u||" "!==p&&"\t"!==p?u||":"!==p?u||","!==p?u||"["!==p&&"{"!==p?u||"]"!==p&&"}"!==p||(p="\n"+r(2*--l)+p):p+="\n"+r(2*++l):p+="\n"+r(2*l):p+=" ":p="":u=p,o.push(p)}t.setValue(o.join(""))}},{xtype:"tbseparator"},{text:"删除空格",xtype:"button",handler:function(e){for(var t=e.up("panel").down("textarea"),n=t.getValue(),r=n.length,a=[],o=!1,l=0;l<r;l++){var u=n.charAt(l);o&&u===o?"\\"!==n.charAt(l-1)&&(o=!1):o||'"'!==u&&"'"!==u?o||" "!==u&&"\n"!==u||(u=""):o=u,a.push(u)}t.setValue(a.join(""))}},{xtype:"tbseparator"},{xtype:"button",text:"删除空格并转义",handler:function(e){var t=e.up("panel").down("textarea"),n=function(e){for(var t=[],n=!1,r="",a=0,o=(e=e.split("\n").join(" ")).length;a<o;a++){var l=e.charAt(a);n&&l===r?"\\"!==e.charAt(a-1)&&(n=!1,r="",l="\\"+("'"===l?'"':l)):n||'"'!==l&&"'"!==l?n||" "!==l&&"\t"!==l||(l=""):(n=!0,r=l,l='\\"'),t.push(l)}return t.join("")}(t.getValue());t.setValue(n)}},{xtype:"tbseparator"},{text:"去除转义",xtype:"button",handler:function(e){var t=e.up("panel").down("textarea"),n=t.getValue().replace(/\\\\/g,"\\").replace(/\\\"/g,'"');t.setValue(n)}}]},items:{xtype:"textarea",border:!1,value:'{"name":"test"}'}}],region:"center",xtype:"tabpanel"},{collapsible:!0,region:"east",split:!0,title:"East Panel",hidden:!0,width:150,xtype:"panel"}]};Ext.onReady(function(){Ext.create(Ext.container.Viewport.getName(),a)})}]);
//# sourceMappingURL=bundle.js.map