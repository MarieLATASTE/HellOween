!function(e){var n={};function t(o){if(n[o])return n[o].exports;var c=n[o]={i:o,l:!1,exports:{}};return e[o].call(c.exports,c,c.exports,t),c.l=!0,c.exports}t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var c in e)t.d(o,c,function(n){return e[n]}.bind(null,c));return o},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n,t){"use strict";function o(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}t.r(n),(new(function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.els={}}var n,t,c;return n=e,(t=[{key:"init",value:function(){this.cacheEls(),this.bindEvents()}},{key:"cacheEls",value:function(){this.els.ce4wpConsent=document.getElementById("ce4wp_no_consent"),this.els.wcCheckoutNonce=document.getElementById("woocommerce-process-checkout-nonce")}},{key:"bindEvents",value:function(){var e=this;this.els.ce4wpConsent&&"function"==typeof this.els.ce4wpConsent.addEventListener&&this.els.ce4wpConsent.addEventListener("click",(function(n){n.preventDefault(),window.setTimeout((function(){e.noConsentCaptureGuestCheckout()}),1500)}))}},{key:"noConsentCaptureGuestCheckout",value:function(){var e=this;wp.ajax.send("ce4wp_abandoned_checkouts_no_consent_checkout",{data:{nonce:this.els.wcCheckoutNonce.value},success:function(){e.els.ce4wpConsent.parentElement.style.display="none"}})}}])&&o(n.prototype,t),c&&o(n,c),e}())).init()}]);