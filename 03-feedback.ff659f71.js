!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={};Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var o="Expected a function",r=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,l=/^0o[0-7]+$/i,f=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,s="object"==typeof self&&self&&self.Object===Object&&self,m=c||s||Function("return this")(),d=Object.prototype.toString,v=Math.max,g=Math.min,p=function(){return m.Date.now()};function y(e,t,n){var i,r,a,u,l,f,c=0,s=!1,m=!1,d=!0;if("function"!=typeof e)throw new TypeError(o);function y(t){var n=i,o=r;return i=r=void 0,c=t,u=e.apply(o,n)}function O(e){return c=e,l=setTimeout(h,t),s?y(e):u}function S(e){var n=e-f;return void 0===f||n>=t||n<0||m&&e-c>=a}function h(){var e=p();if(S(e))return w(e);l=setTimeout(h,function(e){var n=t-(e-f);return m?g(n,a-(e-c)):n}(e))}function w(e){return l=void 0,d&&i?y(e):(i=r=void 0,u)}function T(){var e=p(),n=S(e);if(i=arguments,r=this,f=e,n){if(void 0===l)return O(f);if(m)return l=setTimeout(h,t),y(f)}return void 0===l&&(l=setTimeout(h,t)),u}return t=j(t)||0,b(n)&&(s=!!n.leading,a=(m="maxWait"in n)?v(j(n.maxWait)||0,t):a,d="trailing"in n?!!n.trailing:d),T.cancel=function(){void 0!==l&&clearTimeout(l),c=0,i=f=r=l=void 0},T.flush=function(){return void 0===l?u:w(p())},T}function b(t){var n=void 0===t?"undefined":e(i)(t);return!!t&&("object"==n||"function"==n)}function j(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(i)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==d.call(t)}(t))return NaN;if(b(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=b(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(r,"");var o=u.test(t);return o||l.test(t)?f(t.slice(2),o?2:8):a.test(t)?NaN:+t}t=function(e,t,n){var i=!0,r=!0;if("function"!=typeof e)throw new TypeError(o);return b(n)&&(i="leading"in n?!!n.leading:i,r="trailing"in n?!!n.trailing:r),y(e,t,{leading:i,maxWait:t,trailing:r})};var O=document.querySelector(".feedback-form"),S="feedback-form-state",h=JSON.parse(localStorage.getItem(S)),w=document.querySelector("button");h&&(O.elements.email.value=h.email||"",O.elements.message.value=h.message||""),O.addEventListener("input",e(t)((function(e){var t={email:O.elements.email.value,message:O.elements.message.value};localStorage.setItem(S,JSON.stringify(t))}),500)),w.addEventListener("click",(function(e){e.preventDefault(),console.log({email:O.elements.email.value,message:O.elements.message.value}),localStorage.removeItem(S),O.elements.email.value="",O.elements.message.value=""}))}();
//# sourceMappingURL=03-feedback.ff659f71.js.map
