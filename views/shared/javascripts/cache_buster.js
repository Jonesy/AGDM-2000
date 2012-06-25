/***
* Because the webkit cache is so eager, we need cache buster to make sure
* that our .js and .css files really get reloaded when developing. This is the
* purpose of cache buster. :)
* USAGE:
*   Just put something like this:
*     <script>
*       CSS_FILES = ['stylesheets/basic.css'];
*       JS_FILES = ['javascripts/application.js'];
*     </script>
*   before the cache buster js tag, and you're good to go.
*/
(function(){var b=(new Date).getTime();if(null!==CSS_FILES&&"undefined"!==typeof CSS_FILES)for(i=0;CSS_FILES.length>i;i++){var a=document.createElement("link");a.setAttribute("rel","stylesheet");a.setAttribute("type","text/css");a.setAttribute("href",""+CSS_FILES[i]+"?"+b);document.getElementsByTagName("head")[0].appendChild(a)}null!==JS_FILES&&"undefined"!==typeof JS_FILES&&document.addEventListener("DOMContentLoaded",function(){for(i=0;JS_FILES.length>i;i++){var a=document.createElement("script");
a.setAttribute("type","text/javascript");a.setAttribute("src",""+JS_FILES[i]+"?"+b);document.getElementsByTagName("head")[0].appendChild(a)}},!1)})();