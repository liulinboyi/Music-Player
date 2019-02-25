// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"src/js/icons.js":[function(require,module,exports) {
var svgcontent = document.createElement("div");
svgcontent.style.display = "none";
document.body.appendChild(svgcontent);
svgcontent.innerHTML = "\n<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" hidden><symbol id=\"\u64AD\u653E\" viewBox=\"0 0 1024 1024\"><defs><style/></defs><path d=\"M512 68.191C266.795 68.191 68.191 266.795 68.191 512S266.795 955.809 512 955.809 955.809 757.205 955.809 512 757.204 68.191 512 68.191zm-88.762 643.523V312.285L689.523 512 423.238 711.714z\" fill=\"#d4237a\"/></symbol><symbol id=\"\u5217\u8868\" viewBox=\"0 0 1024 1024\"><defs><style/></defs><path d=\"M512 1024C230.4 1024 0 793.6 0 512S230.4 0 512 0s512 230.4 512 512-230.4 512-512 512zm0-992C249.6 32 32 249.6 32 512s217.6 480 480 480 480-217.6 480-480S774.4 32 512 32z\" fill=\"#d4237a\"/><path d=\"M697.6 230.4H326.4c-38.4 0-70.4 32-70.4 76.8v409.6c0 38.4 32 76.8 70.4 76.8h364.8c38.4 0 70.4-32 70.4-76.8V307.2c6.4-44.8-25.6-76.8-64-76.8zm32 486.4c0 19.2-19.2 38.4-38.4 38.4H326.4c-19.2 0-38.4-19.2-38.4-38.4V307.2c0-19.2 19.2-38.4 38.4-38.4h364.8c19.2 0 38.4 19.2 38.4 38.4v409.6zm-326.4-352h256v-38.4h-256v38.4zm-51.2 0h32v-38.4h-32v38.4zm0 108.8h32v-38.4h-32v38.4zm51.2 0h256v-38.4h-256v38.4zM352 588.8h32v-38.4h-32v38.4zm51.2 0h256v-38.4h-256v38.4zM352 697.6h32v-38.4h-32v38.4zm51.2 0h256v-38.4h-256v38.4z\" fill=\"#d4237a\"/></symbol><symbol id=\"\u4E0A\u4E00\u9996\" viewBox=\"0 0 1024 1024\"><defs><style/></defs><path d=\"M512 62.39C263.688 62.39 62.39 263.688 62.39 512S263.688 961.61 512 961.61 961.61 760.312 961.61 512 760.312 62.39 512 62.39zm274.507 724.117c-35.672 35.672-77.196 63.672-123.417 83.222-47.821 20.227-98.656 30.483-151.091 30.483s-103.27-10.256-151.091-30.483c-46.22-19.549-87.745-47.55-123.417-83.222-35.673-35.672-63.672-77.196-83.222-123.417-20.227-47.821-30.483-98.656-30.483-151.09 0-52.435 10.256-103.27 30.483-151.091 19.549-46.22 47.55-87.745 83.222-123.417s77.196-63.672 123.417-83.222c47.821-20.227 98.655-30.483 151.091-30.483 52.435 0 103.269 10.256 151.091 30.483 46.22 19.549 87.745 47.55 123.417 83.222s63.672 77.196 83.222 123.417c20.227 47.821 30.483 98.656 30.483 151.091s-10.256 103.269-30.483 151.09c-19.55 46.22-47.55 87.745-83.222 123.417z\" fill=\"#d4237a\"/><path d=\"M715.83 305.668L448.346 507.98c-3.094 1.787-3.094 6.253 0 8.04L715.83 718.332c3.095 1.787 6.962-.446 6.962-4.02V309.688c0-3.573-3.867-5.806-6.962-4.02zM398.078 306.05h-92.23c-2.563 0-4.64 2.365-4.64 5.283v401.334c0 2.918 2.078 5.284 4.64 5.284h92.23c2.564 0 4.642-2.366 4.642-5.284V311.333c0-2.918-2.078-5.284-4.642-5.284z\" fill=\"#d4237a\"/></symbol><symbol id=\"\u987A\u5E8F\u64AD\u653E\" viewBox=\"0 0 1024 1024\"><defs><style/></defs><path d=\"M343.845 622.806c-6.581 0-13.189-2.647-19.098-7.628L230.83 538.64c-9.737-8.233-14.37-20.467-12.275-32.098 1.827-10.207 8.824-18.426 18.708-21.998l117.567-42.426c11.51-4.136 24.268-.537 32.259 9.026 6.58 7.87 9.414 18.721 7.574 29.022L370.276 597.29c-2.768 15.35-13.163 25.516-26.431 25.516zm20.897-154.956l-118.13 42.56c-.86.309-.9.524-.981.993-.296 1.612.564 4.204 2.767 6.07L342.3 594c.134.12.268.228.388.32.215-.59.43-1.342.592-2.282l24.388-117.096c.417-2.43-.618-4.888-1.665-6.138-.578-.697-1.074-.953-1.262-.953z\" fill=\"#d4237a\"/><path d=\"M496.114 918.254c-246.32 0-446.71-200.39-446.71-446.697 0-246.32 200.389-446.71 446.71-446.71 246.32 0 446.709 200.39 446.709 446.71 0 246.307-200.39 446.697-446.71 446.697zm0-838.397c-215.982 0-391.7 175.718-391.7 391.7s175.718 391.687 391.7 391.687c215.98 0 391.699-175.705 391.699-391.687 0-215.981-175.717-391.7-391.7-391.7z\" fill=\"#d4237a\"/><path d=\"M496.114 687.875c-7.602 0-13.753-6.151-13.753-13.753s6.152-13.75 13.753-13.75c104.122 0 188.825-84.704 188.825-188.814 0-104.123-84.703-188.826-188.825-188.826-104.124 0-188.827 84.703-188.827 188.826 0 7.602-6.151 13.752-13.752 13.752s-13.752-6.151-13.752-13.752c0-119.285 97.045-216.33 216.33-216.33 119.285 0 216.33 97.045 216.33 216.33.002 119.271-97.044 216.317-216.33 216.317zM828.212 485.31c-7.602 0-13.752-6.151-13.752-13.752 0-143.124-96.306-269.406-234.193-307.105-7.333-2-11.644-9.561-9.642-16.894 2.015-7.333 9.657-11.59 16.896-9.643 149.81 40.962 254.444 178.15 254.444 333.642-.001 7.601-6.153 13.752-13.753 13.752zM514.66 153.709c-.255 0-.51 0-.765-.027a325.903 325.903 0 0 0-17.781-.484c-7.602 0-13.753-6.15-13.753-13.752s6.152-13.752 13.753-13.752c6.459 0 12.879.188 19.286.537 7.587.403 13.389 6.889 12.973 14.478-.39 7.318-6.46 13-13.713 13z\" fill=\"#d4237a\"/></symbol><symbol id=\"\u4E0B\u4E00\u9996\" viewBox=\"0 0 1024 1024\"><defs><style/></defs><path d=\"M512 62.39C263.688 62.39 62.39 263.688 62.39 512S263.688 961.61 512 961.61 961.61 760.312 961.61 512 760.312 62.39 512 62.39zm274.507 724.117c-35.672 35.672-77.196 63.672-123.417 83.222-47.821 20.227-98.656 30.483-151.091 30.483s-103.27-10.256-151.091-30.483c-46.22-19.549-87.745-47.55-123.417-83.222-35.673-35.672-63.672-77.196-83.222-123.417-20.227-47.821-30.483-98.656-30.483-151.09 0-52.435 10.256-103.27 30.483-151.091 19.549-46.22 47.55-87.745 83.222-123.417s77.196-63.672 123.417-83.222c47.821-20.227 98.655-30.483 151.091-30.483 52.435 0 103.269 10.256 151.091 30.483 46.22 19.549 87.745 47.55 123.417 83.222s63.672 77.196 83.222 123.417c20.227 47.821 30.483 98.656 30.483 151.091s-10.256 103.269-30.483 151.09c-19.55 46.22-47.55 87.745-83.222 123.417zM575.654 507.98L308.17 305.668c-3.095-1.787-6.962.446-6.962 4.02v404.625c0 3.572 3.868 5.806 6.962 4.02L575.654 516.02c3.093-1.787 3.093-6.253 0-8.04zM718.15 306.05h-92.23c-2.563 0-4.64 2.365-4.64 5.283v401.334c0 2.918 2.078 5.284 4.64 5.284h92.23c2.564 0 4.64-2.366 4.64-5.284V311.333c0-2.918-2.076-5.284-4.64-5.284z\" fill=\"#d4237a\"/></symbol><symbol id=\"\u5206\u4EAB\" viewBox=\"0 0 1024 1024\"><defs><style/></defs><path d=\"M241.716 782.899s-.798 5.987-.314 9.363v.19c1.395 14.576 13.673 25.97 28.609 25.97 14.94 0 26.326-11.06 28.608-25.97l2.266-13.162C412.57 314.142 761.634 232.86 920.688 220.447L760.02 370.377c-11.424 11.172-11.634 29.666-.461 41.09 11.174 11.429 29.666 11.64 41.096.467l214.032-199.735c5.801-5.67 8.704-13.228 8.704-20.793.182-9.836-4.61-19.557-13.484-25.176L748.854 8.059c-13.501-8.55-31.545-4.491-40.093 9.011-8.55 13.506-4.498 31.55 9.01 40.098l179.135 108.54c-556.823 53.202-645.008 541.636-655.19 617.19zm0 0\" fill=\"#d4237a\"/><path d=\"M1023.398 570.647c0-16.05-13.011-29.057-29.063-29.057-16.044 0-29.058 13.006-29.058 29.057 0 .144.012.28.012.422h-.012v298.87c0 24.976-9.834 48.569-27.697 66.43-17.867 17.862-41.454 27.704-66.429 27.704H156.764c-24.975 0-48.564-9.842-66.43-27.704-17.86-17.861-27.696-41.454-27.696-66.43V235.012c0-24.976 9.835-48.569 27.696-66.43 17.861-17.861 41.455-27.697 66.43-27.697H343.15c16.046 0 29.058-13.011 29.058-29.063 0-16.045-13.012-29.056-29.058-29.056H156.764c-83.733 0-152.247 68.507-152.247 152.246v634.934c0 83.733 68.514 152.248 152.247 152.248H871.15c83.733 0 152.247-68.515 152.247-152.248V571.069h-.012c0-.143.012-.278.012-.422zM343.15 82.766v58.12-58.12zm0 0\" fill=\"#d4237a\"/></symbol><symbol id=\"\u8BC4\u8BBA\" viewBox=\"0 0 1024 1024\"><defs><style/></defs><path d=\"M816 808H672c-4.8 0-8 1.6-11.2 4.8l-80 80c-36.8 36.8-97.6 36.8-136 0l-80-80c-3.2-3.2-6.4-4.8-11.2-4.8h-144c-70.4 0-128-57.6-128-128V232c0-70.4 57.6-128 128-128h608c70.4 0 128 57.6 128 128v448C944 750.4 886.4 808 816 808zm0-64c35.2 0 64-28.8 64-64V232c0-35.2-28.8-64-64-64H208c-35.2 0-64 28.8-64 64v448c0 35.2 28.8 64 64 64h144c20.8 0 41.6 8 56 24l80 80c12.8 12.8 32 12.8 44.8 0l80-80c14.4-14.4 35.2-24 56-24H816zM320 408c27.2 0 48 20.8 48 48v32c0 27.2-20.8 48-48 48s-48-20.8-48-48v-32c0-27.2 20.8-48 48-48zm192 0c27.2 0 48 20.8 48 48v32c0 27.2-20.8 48-48 48s-48-20.8-48-48v-32c0-27.2 20.8-48 48-48zm192 0c27.2 0 48 20.8 48 48v32c0 27.2-20.8 48-48 48s-48-20.8-48-48v-32c0-27.2 20.8-48 48-48z\" fill=\"#d4237a\"/></symbol><symbol id=\"\u559C\u6B22\" viewBox=\"0 0 1024 1024\"><defs><style/></defs><path d=\"M559.24 916.702a68.25 68.25 0 0 1-94.446-.034l-320.717-307.49c-.444-.359-127.01-112.128-127.01-252.143 0-165.735 104.96-268.68 273.988-268.68 89.31 0 172.1 61.064 220.945 106.034 48.81-44.97 131.601-106.035 220.945-106.035 168.994 0 273.988 102.946 273.988 268.68 0 121.703-96.938 223.881-126.634 252.314L559.24 916.702z\" fill=\"#d4237a\"/></symbol><symbol id=\"\u4E0B\u8F7D\" viewBox=\"0 0 1024 1024\"><defs><style/></defs><path d=\"M168.064 498.7l325.837 325.838c2.393 2.393 5.184 4.185 8.14 5.427.013 0 .013.013.026.013 1.255.524 2.547.883 3.853 1.203.346.09.666.23 1.024.307 3.34.666 6.784.666 10.112 0 .358-.077.678-.218 1.024-.307 1.306-.32 2.598-.679 3.853-1.203.013-.013.025-.013.051-.026a25.237 25.237 0 0 0 8.115-5.427L855.936 498.7c9.958-9.959 9.958-26.253 0-36.199-9.958-9.958-26.253-9.958-36.198 0L537.6 744.64V89.613c0-14.08-11.52-25.6-25.6-25.6-14.08 0-25.6 11.52-25.6 25.6V744.64L204.262 462.502c-9.958-9.958-26.252-9.958-36.198 0-9.958 9.959-9.958 26.24 0 36.199z\" fill=\"#d4237a\"/><path d=\"M972.8 729.6v128c0 28.275-22.925 51.2-51.2 51.2H102.4c-28.275 0-51.2-22.925-51.2-51.2v-128c0-14.144-11.456-25.6-25.6-25.6C11.456 704 0 715.456 0 729.6v128C0 913.92 46.08 960 102.4 960h819.2c56.32 0 102.4-46.08 102.4-102.4v-128c0-14.144-11.456-25.6-25.6-25.6-14.144 0-25.6 11.456-25.6 25.6z\" fill=\"#d4237a\"/></symbol></svg>\n";
},{}],"src/js/index.js":[function(require,module,exports) {
"use strict";

require("./icons.js");

// import "../scss/index.scss";
var areaeffect = document.getElementsByClassName("area-effect");
console.log(areaeffect);
console.log(screen.height);
console.log(screen.availHeight); // console.log(screen.height)
// console.log(screen.availHeight)

var top1 = screen.height - 62 - 24 - 20 - 20 - 10 - 20 - 16 - 60;
areaeffect[0].style.height = "".concat(top1, "px");
var parneleffect = document.getElementsByClassName('parnel-effect');
parneleffect[0].style.height = "".concat(top1 - 28, "px");
var player = document.getElementsByClassName('player');
player[0].setAttribute('style', "height: ".concat(screen.height, "px"));
console.log(player);
console.log(player[0].style.height);
console.log("你好");
},{"./icons.js":"src/js/icons.js"}],"node_modules/_parcel-bundler@1.11.0@parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "57179" + '/');

  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      console.clear();
      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},["node_modules/_parcel-bundler@1.11.0@parcel-bundler/src/builtins/hmr-runtime.js","src/js/index.js"], null)
//# sourceMappingURL=/js.d818e0ef.map