function r(r,t){(null==t||t>r.length)&&(t=r.length);for(var e=0,n=Array(t);e<t;e++)n[e]=r[e];return n}var t=document.querySelector("tbody");document.querySelectorAll("th").forEach(function(e,n){e.addEventListener("click",function(){var e,o=function(t){if(Array.isArray(t))return r(t)}(e=t.rows)||function(r){if("undefined"!=typeof Symbol&&null!=r[Symbol.iterator]||null!=r["@@iterator"])return Array.from(r)}(e)||function(t,e){if(t){if("string"==typeof t)return r(t,void 0);var n=Object.prototype.toString.call(t).slice(8,-1);if("Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(t,void 0)}}(e)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}();o.sort(function(r,t){var e=r.cells[n].innerText,o=t.cells[n].innerText,a=e.startsWith("$")?parseFloat(e.slice(1)):e,i=o.startsWith("$")?parseFloat(o.slice(1)):o;return isNaN(a)||isNaN(i)?a.localeCompare(i):a-i}),o.forEach(function(r){return t.appendChild(r)})})});
//# sourceMappingURL=index.fb59a1d3.js.map
