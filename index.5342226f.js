function t(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=Array(e);r<e;r++)n[r]=t[r];return n}var e,r=function(e){if(Array.isArray(e))return t(e)}(e=document.querySelectorAll("tbody > tr"))||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(e)||function(e,r){if(e){if("string"==typeof e)return t(e,void 0);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return t(e,void 0)}}(e)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),n=document.querySelector("thead"),o=document.querySelector("tbody");n.addEventListener("click",function(t){var e=t.target.closest("th").textContent.trim().toLowerCase();o.innerHTML="",r.sort(function(t,r){return l.get(e)(t,r)}).forEach(function(t){return o.appendChild(t)})});var l=new Map([["name",function(t,e){return t.cells[0].textContent.localeCompare(e.cells[0].textContent)}],["position",function(t,e){return t.cells[1].textContent.localeCompare(e.cells[1].textContent)}],["age",function(t,e){return+t.cells[2].textContent-+e.cells[2].textContent}],["salary",function(t,e){return+t.cells[3].textContent.replace("$","").replace(",","")-+e.cells[3].textContent.replace("$","").replace(",","")}]]);
//# sourceMappingURL=index.5342226f.js.map