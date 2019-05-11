/*
Copyright (c) 2019 Daybrush
name: @scenejs/effects
license: MIT
author: Daybrush
repository: git+https://github.com/daybrush/scenejs-effects.git
version: 0.0.1
*/
!function(o,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("scenejs")):"function"==typeof define&&define.amd?define(["exports","scenejs"],t):t((o=o||self).Scene={},o.Scene)}(this,function(o,f){"use strict";function u(o,t,e){for(var n=new f.SceneItem({},e),r=t.length,i=0;i<r;++i)n.set(i/(r-1)*100+"%",o,t[i]);return n}o.blink=function(o){var t=o.from,e=void 0===t?0:t,n=o.to;return u("opacity",[e,void 0===n?1:n,e],o)},o.fadeIn=function(o){var t=o.from,e=void 0===t?0:t,n=o.to;return u("opacity",[e,void 0===n?1:n],o)},o.fadeOut=function(o){var t=o.from,e=void 0===t?1:t,n=o.to;return u("opacity",[e,void 0===n?0:n],o)},o.transition=function(o,t,e){var n,r,i=e.from,f=e.to,u=e.duration,d=void 0===u?o.getDuration():u,v=e.time,a=void 0===v?Math.max(o.getDuration()-d,0):v;o.set(((n={})[a]=f,n[a+d]=i,n)),t.set(((r={0:i})[d]=f,r))},o.wipeIn=function(o){var t=o.from,e=void 0===t?"-100%":t,n=o.to,r=void 0===n?"0%":n,i=o.property;return u(void 0===i?"left":i,[e,r],o)},o.wipeOut=function(o){var t=o.from,e=void 0===t?"0%":t,n=o.to,r=void 0===n?"100%":n,i=o.property;return u(void 0===i?"left":i,[e,r],o)},o.zoomIn=function(o){var t=o.from,e=void 0===t?0:t,n=o.to;return u(["transform","scale"],[e,void 0===n?1:n],o)},o.zoomOut=function(o){var t=o.from,e=void 0===t?1:t,n=o.to;return u(["transform","scale"],[e,void 0===n?0:n],o)}});
//# sourceMappingURL=effects.js.map