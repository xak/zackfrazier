console.log("Follow the dev of this site at https://github.com/xak/zackfrazier"),function(){for(var t,e=250,o=15,n=0,r=document.getElementsByTagName("a"),l=0;l<r.length;l++)t=void 0===r[l].attributes.href?null:r[l].attributes.href.nodeValue.toString(),null!==t&&t.length>1&&"#"==t.substr(0,1)&&(r[l].onclick=function(){var t,r=this.attributes.href.nodeValue.toString();if(t=document.getElementById(r.substr(1)))for(var l=e/o,f=i(),a=(u(t)-f-n)/l,c=1;c<=l;c++)!function(){var t=a*c;setTimeout(function(){window.scrollTo(0,t+f)},o*c)}();return!1});var u=function(t){for(var e=0;void 0!=t.offsetParent&&null!=t.offsetParent;)e+=t.offsetTop+(null!=t.clientTop?t.clientTop:0),t=t.offsetParent;return e},i=function(){return document.documentElement.scrollTop+document.body.scrollTop}}();