(this["webpackJsonpreact-saas-template"]=this["webpackJsonpreact-saas-template"]||[]).push([[13],{270:function(t,e,r){!function(t,e){"use strict";function r(t){return(r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function n(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}function o(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t)){var r=[],n=!0,o=!1,i=void 0;try{for(var a,c=t[Symbol.iterator]();!(n=(a=c.next()).done)&&(r.push(a.value),!e||r.length!==e);n=!0);}catch(u){o=!0,i=u}finally{try{n||null==c.return||c.return()}finally{if(o)throw i}}return r}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function i(){}function a(){}e=e&&e.hasOwnProperty("default")?e.default:e,a.resetWarningCache=i;var c=function(t,e){return t(e={exports:{}},e.exports),e.exports}((function(t){t.exports=function(){function t(t,e,r,n,o,i){if("SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"!==i){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function e(){return t}t.isRequired=t;var r={array:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:a,resetWarningCache:i};return r.PropTypes=r,r}()})),u=function(t){return null!==t&&"object"===r(t)},s=function t(e,r){if(!u(e)||!u(r))return e===r;var n=Array.isArray(e);if(n!==Array.isArray(r))return!1;var o="[object Object]"===Object.prototype.toString.call(e);if(o!==("[object Object]"===Object.prototype.toString.call(r)))return!1;if(!o&&!n)return!1;var i=Object.keys(e),a=Object.keys(r);if(i.length!==a.length)return!1;for(var c={},s=0;s<i.length;s+=1)c[i[s]]=!0;for(var l=0;l<a.length;l+=1)c[a[l]]=!0;var f=Object.keys(c);if(f.length!==i.length)return!1;var p=e,h=r;return f.every((function(e){return t(p[e],h[e])}))},l=function(t){var r=e.useRef(t);return e.useEffect((function(){r.current=t}),[t]),r.current},f=function(t){if(null===t||u(e=t)&&"function"===typeof e.elements&&"function"===typeof e.createToken&&"function"===typeof e.createPaymentMethod&&"function"===typeof e.confirmCardPayment)return t;var e;throw new Error("Invalid prop `stripe` supplied to `Elements`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details.")},p=function(t){if(function(t){return u(t)&&"function"===typeof t.then}(t))return{tag:"async",stripePromise:Promise.resolve(t).then(f)};var e=f(t);return null===e?{tag:"empty"}:{tag:"sync",stripe:e}},h=e.createContext(null);h.displayName="ElementsContext";var y=function(t){var r=t.stripe,n=t.options,i=t.children,a=e.useRef(!1),c=e.useRef(!0),u=e.useMemo((function(){return p(r)}),[r]),f=o(e.useState((function(){return{stripe:null,elements:null}})),2),y=f[0],d=f[1],m=l(r),v=l(n);return null!==m&&(m!==r&&console.warn("Unsupported prop change on Elements: You cannot change the `stripe` prop after setting it."),s(n,v)||console.warn("Unsupported prop change on Elements: You cannot change the `options` prop after setting the `stripe` prop.")),a.current||("sync"===u.tag&&(a.current=!0,d({stripe:u.stripe,elements:u.stripe.elements(n)})),"async"===u.tag&&(a.current=!0,u.stripePromise.then((function(t){t&&c.current&&d({stripe:t,elements:t.elements(n)})})))),e.useEffect((function(){return function(){c.current=!1}}),[]),e.useEffect((function(){var t=y.stripe;t&&t._registerWrapper&&t._registerWrapper({name:"react-stripe-js",version:"1.1.2"})}),[y.stripe]),e.createElement(h.Provider,{value:y},i)};y.propTypes={stripe:c.any,options:c.object};var d=function(t){return function(t,e){if(!t)throw new Error("Could not find Elements context; You need to wrap the part of your app that ".concat(e," in an <Elements> provider."));return t}(e.useContext(h),t)},m=function(t){return(0,t.children)(d("mounts <ElementsConsumer>"))};m.propTypes={children:c.func.isRequired};var v=function(t){var r=e.useRef(t);return e.useEffect((function(){r.current=t}),[t]),function(){r.current&&r.current.apply(r,arguments)}},g=function(t){return u(t)?(t.paymentRequest,n(t,["paymentRequest"])):{}},w=function(){},b=function(t,r){var n,o="".concat((n=t).charAt(0).toUpperCase()+n.slice(1),"Element"),i=r?function(t){d("mounts <".concat(o,">"));var r=t.id,n=t.className;return e.createElement("div",{id:r,className:n})}:function(r){var n=r.id,i=r.className,a=r.options,c=void 0===a?{}:a,u=r.onBlur,l=void 0===u?w:u,f=r.onFocus,p=void 0===f?w:f,h=r.onReady,y=void 0===h?w:h,m=r.onChange,b=void 0===m?w:m,E=r.onEscape,x=void 0===E?w:E,j=r.onClick,O=void 0===j?w:j,S=d("mounts <".concat(o,">")).elements,L=e.useRef(null),_=e.useRef(null),k=v(y),P=v(l),R=v(p),C=v(O),T=v(b),A=v(x);e.useLayoutEffect((function(){if(null==L.current&&S&&null!=_.current){var e=S.create(t,c);L.current=e,e.mount(_.current),e.on("ready",(function(){return k(e)})),e.on("change",T),e.on("blur",P),e.on("focus",R),e.on("escape",A),e.on("click",C)}}));var N=e.useRef(c);return e.useEffect((function(){N.current&&N.current.paymentRequest!==c.paymentRequest&&console.warn("Unsupported prop change: options.paymentRequest is not a customizable property.");var t=g(c);0===Object.keys(t).length||s(t,g(N.current))||L.current&&(L.current.update(t),N.current=c)}),[c]),e.useEffect((function(){return function(){L.current&&L.current.destroy()}}),[]),e.createElement("div",{id:n,className:i,ref:_})};return i.propTypes={id:c.string,className:c.string,onChange:c.func,onBlur:c.func,onFocus:c.func,onReady:c.func,onClick:c.func,options:c.object},i.displayName=o,i.__elementType=t,i},E="undefined"===typeof window,x=b("auBankAccount",E),j=b("card",E),O=b("cardNumber",E),S=b("cardExpiry",E),L=b("cardCvc",E),_=b("fpxBank",E),k=b("iban",E),P=b("idealBank",E),R=b("paymentRequestButton",E);t.AuBankAccountElement=x,t.CardCvcElement=L,t.CardElement=j,t.CardExpiryElement=S,t.CardNumberElement=O,t.Elements=y,t.ElementsConsumer=m,t.FpxBankElement=_,t.IbanElement=k,t.IdealBankElement=P,t.PaymentRequestButtonElement=R,t.useElements=function(){return d("calls useElements()").elements},t.useStripe=function(){return d("calls useStripe()").stripe},Object.defineProperty(t,"__esModule",{value:!0})}(e,r(0))},936:function(t,e,r){t.exports=r(937)},937:function(t,e,r){var n=function(t){"use strict";var e=Object.prototype,r=e.hasOwnProperty,n="function"===typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",i=n.asyncIterator||"@@asyncIterator",a=n.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(L){c=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var o=e&&e.prototype instanceof f?e:f,i=Object.create(o.prototype),a=new j(n||[]);return i._invoke=function(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return S()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=b(a,r);if(c){if(c===l)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=s(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===l)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}(t,r,a),i}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(L){return{type:"throw",arg:L}}}t.wrap=u;var l={};function f(){}function p(){}function h(){}var y={};y[o]=function(){return this};var d=Object.getPrototypeOf,m=d&&d(d(O([])));m&&m!==e&&r.call(m,o)&&(y=m);var v=h.prototype=f.prototype=Object.create(y);function g(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function w(t,e){var n;this._invoke=function(o,i){function a(){return new e((function(n,a){!function n(o,i,a,c){var u=s(t[o],t,i);if("throw"!==u.type){var l=u.arg,f=l.value;return f&&"object"===typeof f&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){n("next",t,a,c)}),(function(t){n("throw",t,a,c)})):e.resolve(f).then((function(t){l.value=t,a(l)}),(function(t){return n("throw",t,a,c)}))}c(u.arg)}(o,i,n,a)}))}return n=n?n.then(a,a):a()}}function b(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,b(t,e),"throw"===e.method))return l;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return l}var n=s(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,l;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,l):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,l)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function x(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function O(t){if(t){var e=t[o];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return i.next=i}}return{next:S}}function S(){return{value:void 0,done:!0}}return p.prototype=v.constructor=h,h.constructor=p,p.displayName=c(h,a,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,h):(t.__proto__=h,c(t,a,"GeneratorFunction")),t.prototype=Object.create(v),t},t.awrap=function(t){return{__await:t}},g(w.prototype),w.prototype[i]=function(){return this},t.AsyncIterator=w,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new w(u(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},g(v),c(v,a,"Generator"),v[o]=function(){return this},v.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=O,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),u=r.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,l):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),l},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),x(r),l}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;x(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:O(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),l}},t}(t.exports);try{regeneratorRuntime=n}catch(o){Function("r","regeneratorRuntime = r")(n)}},938:function(t,e,r){"use strict";function n(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(s){return void r(s)}c.done?e(u):Promise.resolve(u).then(n,o)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(o,i){var a=t.apply(e,r);function c(t){n(a,o,i,c,u,"next",t)}function u(t){n(a,o,i,c,u,"throw",t)}c(void 0)}))}}r.d(e,"a",(function(){return o}))},939:function(t,e,r){"use strict";function n(t){return function(t){if(Array.isArray(t)){for(var e=0,r=new Array(t.length);e<t.length;e++)r[e]=t[e];return r}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}r.d(e,"a",(function(){return p}));var o="https://js.stripe.com/v3",i=/^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,a="loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used",c=null,u=function(t){return null!==c?c:c=new Promise((function(e,r){if("undefined"!==typeof window)if(window.Stripe&&t&&console.warn(a),window.Stripe)e(window.Stripe);else try{var n=function(){for(var t=document.querySelectorAll('script[src^="'.concat(o,'"]')),e=0;e<t.length;e++){var r=t[e];if(i.test(r.src))return r}return null}();n&&t?console.warn(a):n||(n=function(t){var e=t&&!t.advancedFraudSignals?"?advancedFraudSignals=false":"",r=document.createElement("script");r.src="".concat(o).concat(e);var n=document.head||document.body;if(!n)throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");return n.appendChild(r),r}(t)),n.addEventListener("load",(function(){window.Stripe?e(window.Stripe):r(new Error("Stripe.js not available"))})),n.addEventListener("error",(function(){r(new Error("Failed to load Stripe.js"))}))}catch(c){return void r(c)}else e(null)}))},s=function(t,e){if(null===t)return null;var r=t.apply(void 0,n(e));return function(t){t&&t._registerWrapper&&t._registerWrapper({name:"stripe-js",version:"1.8.0"})}(r),r},l=Promise.resolve().then((function(){return u(null)})),f=!1;l.catch((function(t){f||console.warn(t)}));var p=function(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return f=!0,l.then((function(t){return s(t,e)}))}}}]);
//# sourceMappingURL=13.81294e5e.chunk.js.map