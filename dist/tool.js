!function(e){function t(e,t){return e.getAttribute("profile-"+t)}function r(r){var i=t(r,"theme")||"default",n="https://cdn.jsdelivr.net/gh/sdumont2/dockerhub-html-profiles@latest/dist/themes/"+i+".html",a=t(r,"user");if(a){var d=t(r,"width")||400,l=t(r,"height")||400,s=a+d+(l=l>400?l:400)+i,u=e.createElement("iframe");u.setAttribute("id",s),u.setAttribute("frameborder",0),u.setAttribute("scrolling",0),u.setAttribute("allowtransparency",!0);var o=n+"?user="+a+"&iframeId="+s;return u.src=o,u.width=d,u.height=l,function(e){window.addEventListener&&window.addEventListener("message",(function(t){e.id===t.data.sender&&(e.height=t.data.height)}),!1)}(u),r.parentNode.replaceChild(u,r),u}}for(var i=function(t){if(e.querySelectorAll)return e.querySelectorAll("."+t);for(var r=e.getElementsByTagName("div"),i=[],n=0;n<r.length;n++)~r[n].className.split(" ").indexOf(t)&&i.push(r[n]);return i}("dockerhub-profile"),n=0;n<i.length;n++)r(i[n])}(document);