var e=document.querySelector("body"),n=function(){e.insertAdjacentHTML("afterend",'<div class="message">Promise was resolved!</div>')},t=function(){e.insertAdjacentHTML("afterend",'<div class="message error-message">Promise was rejected!</div>')},r=new Promise(function(e,n){document.querySelector(".logo").addEventListener("click",function(){e()})}),s=new Promise(function(e,n){setTimeout(function(){n(Error("Promise was rejected!"))},3e3)});r.then(n).catch(t),s.then(n).catch(t);//# sourceMappingURL=index.6378d3a1.js.map

//# sourceMappingURL=index.6378d3a1.js.map
