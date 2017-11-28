/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 16);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const connected='____skate_connected';
/* harmony export (immutable) */ __webpack_exports__["j"] = connected;
const created='____skate_created';
/* harmony export (immutable) */ __webpack_exports__["c"] = created;
const name='____skate_name';
/* harmony export (immutable) */ __webpack_exports__["b"] = name;
const ctorCreateInitProps='____skate_ctor_createInitProps';
/* harmony export (immutable) */ __webpack_exports__["h"] = ctorCreateInitProps;
const ctorObservedAttributes='____skate_ctor_observedAttributes';
/* harmony export (immutable) */ __webpack_exports__["f"] = ctorObservedAttributes;
const ctorProps='____skate_ctor_props';
/* harmony export (immutable) */ __webpack_exports__["g"] = ctorProps;
const ctorPropsMap='____skate_ctor_propsMap';
/* harmony export (immutable) */ __webpack_exports__["e"] = ctorPropsMap;
const props='____skate_props';
/* harmony export (immutable) */ __webpack_exports__["m"] = props;
const ref='____skate_ref';
/* harmony export (immutable) */ __webpack_exports__["a"] = ref;
const renderer='____skate_renderer';
/* harmony export (immutable) */ __webpack_exports__["d"] = renderer;
const rendering='____skate_rendering';
/* harmony export (immutable) */ __webpack_exports__["k"] = rendering;
const rendererDebounced='____skate_rendererDebounced';
/* harmony export (immutable) */ __webpack_exports__["i"] = rendererDebounced;
const updated='____skate_updated';
/* harmony export (immutable) */ __webpack_exports__["l"] = updated;


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getPropNamesAndSymbols;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__is_type__ = __webpack_require__(2);
function getPropNamesAndSymbols(a={}){const b=Object.getOwnPropertyNames(a);return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__is_type__["a" /* isFunction */])(Object.getOwnPropertySymbols)?b.concat(Object.getOwnPropertySymbols(a)):b}

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const isFunction=(a)=>'function'==typeof a;
/* harmony export (immutable) */ __webpack_exports__["a"] = isFunction;
const isObject=(a)=>'object'==typeof a&&null!==a;
/* harmony export (immutable) */ __webpack_exports__["c"] = isObject;
const isString=(a)=>'string'==typeof a;
/* harmony export (immutable) */ __webpack_exports__["e"] = isString;
const isSymbol=(a)=>'symbol'==typeof a;
/* harmony export (immutable) */ __webpack_exports__["d"] = isSymbol;
const isUndefined=(a)=>'undefined'==typeof a;
/* harmony export (immutable) */ __webpack_exports__["b"] = isUndefined;


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony default export */ __webpack_exports__["a"] = ('undefined'==typeof window?global:window);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(38)))

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__get_prop_names_and_symbols__ = __webpack_require__(1);
/* harmony default export */ __webpack_exports__["a"] = ((a,...b)=>{return b.forEach((c)=>__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__get_prop_names_and_symbols__["a" /* default */])(c).forEach((d)=>a[d]=c[d])),a});

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(a,b=''){const c=a.__SKATE_DATA||(a.__SKATE_DATA={});return b&&(c[b]||(c[b]={}))||c});

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(a){return'undefined'==typeof a||null===a});

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_symbols__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_assign__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_get_prop_names_and_symbols__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util_get_props_map__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__util_is_type__ = __webpack_require__(2);
function get(a){const b={};return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util_get_prop_names_and_symbols__["a" /* default */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__util_get_props_map__["a" /* default */])(a.constructor)).forEach((c)=>{b[c]=a[c]}),b}function set(a,b){__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util_assign__["a" /* default */])(a,b),a[__WEBPACK_IMPORTED_MODULE_0__util_symbols__["d" /* renderer */]]&&a[__WEBPACK_IMPORTED_MODULE_0__util_symbols__["d" /* renderer */]]()}/* harmony default export */ __webpack_exports__["a"] = (function(a,b){return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__util_is_type__["b" /* isUndefined */])(b)?get(a):set(a,b)});

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var hasOwnProperty=Object.prototype.hasOwnProperty,create=Object.create,has=function(a,b){return hasOwnProperty.call(a,b)},createMap=function(){return create(null)};function NodeData(a,b){this.attrs=createMap(),this.attrsArr=[],this.newAttrs=createMap(),this.key=b,this.keyMap=null,this.keyMapValid=!0,this.nodeName=a,this.text=null}var initData=function(a,b,c){var d=new NodeData(b,c);return a.__incrementalDOMData=d,d},getData=function(a){var b=a.__incrementalDOMData;if(!b){var c=a.nodeName.toLowerCase(),d=null;a instanceof Element&&(d=a.getAttribute('key')),b=initData(a,c,d)}return b},symbols={default:'__default',placeholder:'__placeholder'},getNamespace=function(a){return 0===a.lastIndexOf('xml:',0)?'http://www.w3.org/XML/1998/namespace':0===a.lastIndexOf('xlink:',0)?'http://www.w3.org/1999/xlink':void 0},applyAttr=function(a,b,c){if(null==c)a.removeAttribute(b);else{var d=getNamespace(b);d?a.setAttributeNS(d,b,c):a.setAttribute(b,c)}},applyProp=function(a,b,c){a[b]=c},applyStyle=function(a,b,c){if('string'==typeof c)a.style.cssText=c;else{a.style.cssText='';var d=a.style,e=c;for(var g in e)has(e,g)&&(d[g]=e[g])}},applyAttributeTyped=function(a,b,c){var d=typeof c;'object'==d||'function'==d?applyProp(a,b,c):applyAttr(a,b,c)},updateAttribute=function(a,b,c){var d=getData(a),e=d.attrs;if(e[b]!==c){var g=attributes[b]||attributes[symbols.default];g(a,b,c),e[b]=c}},attributes=createMap();attributes[symbols.default]=applyAttributeTyped,attributes[symbols.placeholder]=function(){},attributes.style=applyStyle;var getNamespaceForTag=function(a,b){return'svg'===a?'http://www.w3.org/2000/svg':'foreignObject'===getData(b).nodeName?null:b.namespaceURI},createElement=function(a,b,c,d,e){var h,g=getNamespaceForTag(c,b);if(h=g?a.createElementNS(g,c):a.createElement(c),initData(h,c,d),e)for(var k=0;k<e.length;k+=2)updateAttribute(h,e[k],e[k+1]);return h},createText=function(a){var b=a.createTextNode('');return initData(b,'#text',null),b},createKeyMap=function(a){for(var d,b=createMap(),c=a.firstElementChild;c;)d=getData(c).key,d&&(b[d]=c),c=c.nextElementSibling;return b},getKeyMap=function(a){var b=getData(a);return b.keyMap||(b.keyMap=createKeyMap(a)),b.keyMap},getChild=function(a,b){return b?getKeyMap(a)[b]:null},registerChild=function(a,b,c){getKeyMap(a)[b]=c},notifications={nodesCreated:null,nodesDeleted:null};function Context(){this.created=notifications.nodesCreated&&[],this.deleted=notifications.nodesDeleted&&[]}Context.prototype.markCreated=function(a){this.created&&this.created.push(a)},Context.prototype.markDeleted=function(a){this.deleted&&this.deleted.push(a)},Context.prototype.notifyChanges=function(){this.created&&0<this.created.length&&notifications.nodesCreated(this.created),this.deleted&&0<this.deleted.length&&notifications.nodesDeleted(this.deleted)};var assertKeyedTagMatches=function(a,b,c){if(a!==b)throw new Error('Was expecting node with key "'+c+'" to be a '+b+', not a '+a+'.')},context=null,currentNode=null,currentParent=null,root=null,doc=null,patchFactory=function(a){return function(c,d,e){var g=context,h=root,k=doc,l=currentNode,m=currentParent;context=new Context,root=c,doc=c.ownerDocument,currentParent=c.parentNode,!1,a(c,d,e),!1,context.notifyChanges(),context=g,root=h,doc=k,currentNode=l,currentParent=m}},patchInner=patchFactory(function(a,b,c){currentNode=a,enterNode(),b(c),exitNode(),!1}),patchOuter=patchFactory(function(a,b,c){currentNode={nextSibling:a},b(c),!1}),matches=function(a,b){var c=getData(currentNode);return a===c.nodeName&&b==c.key},alignWithDOM=function(a,b,c){if(!(currentNode&&matches(a,b))){var d;b&&(d=getChild(currentParent,b),d&&!1),d||(d='#text'===a?createText(doc):createElement(doc,currentParent,a,b,c),b&&registerChild(currentParent,b,d),context.markCreated(d)),currentNode&&getData(currentNode).key?(currentParent.replaceChild(d,currentNode),getData(currentParent).keyMapValid=!1):currentParent.insertBefore(d,currentNode),currentNode=d}},clearUnvisitedDOM=function(){var a=currentParent,b=getData(a),c=b.keyMap,d=b.keyMapValid,e=a.lastChild,g=void 0;if(!(e===currentNode&&d)&&!(b.attrs[symbols.placeholder]&&a!==root)){for(;e!==currentNode;)a.removeChild(e),context.markDeleted(e),g=getData(e).key,g&&delete c[g],e=a.lastChild;if(!d){for(g in c)e=c[g],e.parentNode!==a&&(context.markDeleted(e),delete c[g]);b.keyMapValid=!0}}},enterNode=function(){currentParent=currentNode,currentNode=null},nextNode=function(){currentNode=currentNode?currentNode.nextSibling:currentParent.firstChild},exitNode=function(){clearUnvisitedDOM(),currentNode=currentParent,currentParent=currentParent.parentNode},coreElementOpen=function(a,b,c){return nextNode(),alignWithDOM(a,b,c),enterNode(),currentParent},coreElementClose=function(){return!1,exitNode(),currentNode},coreText=function(){return nextNode(),alignWithDOM('#text',null,null),currentNode},currentElement=function(){return!1,currentParent},skip=function(){!1,currentNode=currentParent.lastChild},ATTRIBUTES_OFFSET=3,argsBuilder=[],elementOpen=function(a,b,c){for(var e=coreElementOpen(a,b,c),g=getData(e),h=g.attrsArr,k=g.newAttrs,l=!1,m=ATTRIBUTES_OFFSET,n=0;m<arguments.length;m+=1,n+=1)if(h[n]!==arguments[m]){l=!0;break}for(;m<arguments.length;m+=1,n+=1)h[n]=arguments[m];if(n<h.length&&(l=!0,h.length=n),l){for(m=ATTRIBUTES_OFFSET;m<arguments.length;m+=2)k[arguments[m]]=arguments[m+1];for(var o in k)updateAttribute(e,o,k[o]),k[o]=void 0}return e},elementOpenStart=function(a,b,c){!1,argsBuilder[0]=a,argsBuilder[1]=b,argsBuilder[2]=c},attr=function(a,b){!1,argsBuilder.push(a,b)},elementOpenEnd=function(){var a=elementOpen.apply(null,argsBuilder);return argsBuilder.length=0,a},elementClose=function(){var b=coreElementClose();return!1,b},elementVoid=function(a){return elementOpen.apply(null,arguments),elementClose(a)},elementPlaceholder=function(a){return!1,elementOpen.apply(null,arguments),skip(),elementClose(a)},text=function(a){var c=coreText(),d=getData(c);if(d.text!==a){d.text=a;for(var h,e=a,g=1;g<arguments.length;g+=1)h=arguments[g],e=h(e);c.data=e}return c};exports.patch=patchInner,exports.patchInner=patchInner,exports.patchOuter=patchOuter,exports.currentElement=currentElement,exports.skip=skip,exports.elementVoid=elementVoid,exports.elementOpenStart=elementOpenStart,exports.elementOpenEnd=elementOpenEnd,exports.elementOpen=elementOpen,exports.elementClose=elementClose,exports.elementPlaceholder=elementPlaceholder,exports.text=text,exports.attr=attr,exports.symbols=symbols,exports.attributes=attributes,exports.applyAttr=applyAttr,exports.applyProp=applyProp,exports.notifications=notifications;

/***/ }),
/* 9 */
/***/ (function(module, exports) {

var process=module.exports={},cachedSetTimeout,cachedClearTimeout;function defaultSetTimout(){throw new Error('setTimeout has not been defined')}function defaultClearTimeout(){throw new Error('clearTimeout has not been defined')}(function(){try{cachedSetTimeout='function'==typeof setTimeout?setTimeout:defaultSetTimout}catch(a){cachedSetTimeout=defaultSetTimout}try{cachedClearTimeout='function'==typeof clearTimeout?clearTimeout:defaultClearTimeout}catch(a){cachedClearTimeout=defaultClearTimeout}})();function runTimeout(a){if(cachedSetTimeout===setTimeout)return setTimeout(a,0);if((cachedSetTimeout===defaultSetTimout||!cachedSetTimeout)&&setTimeout)return cachedSetTimeout=setTimeout,setTimeout(a,0);try{return cachedSetTimeout(a,0)}catch(b){try{return cachedSetTimeout.call(null,a,0)}catch(c){return cachedSetTimeout.call(this,a,0)}}}function runClearTimeout(a){if(cachedClearTimeout===clearTimeout)return clearTimeout(a);if((cachedClearTimeout===defaultClearTimeout||!cachedClearTimeout)&&clearTimeout)return cachedClearTimeout=clearTimeout,clearTimeout(a);try{return cachedClearTimeout(a)}catch(b){try{return cachedClearTimeout.call(null,a)}catch(c){return cachedClearTimeout.call(this,a)}}}var queue=[],draining=!1,currentQueue,queueIndex=-1;function cleanUpNextTick(){draining&&currentQueue&&(draining=!1,currentQueue.length?queue=currentQueue.concat(queue):queueIndex=-1,queue.length&&drainQueue())}function drainQueue(){if(!draining){var a=runTimeout(cleanUpNextTick);draining=!0;for(var b=queue.length;b;){for(currentQueue=queue,queue=[];++queueIndex<b;)currentQueue&&currentQueue[queueIndex].run();queueIndex=-1,b=queue.length}currentQueue=null,draining=!1,runClearTimeout(a)}}process.nextTick=function(a){var b=Array(arguments.length-1);if(1<arguments.length)for(var c=1;c<arguments.length;c++)b[c-1]=arguments[c];queue.push(new Item(a,b)),1!==queue.length||draining||runTimeout(drainQueue)};function Item(a,b){this.fun=a,this.array=b}Item.prototype.run=function(){this.fun.apply(null,this.array)},process.title='browser',process.browser=!0,process.env={},process.argv=[],process.version='',process.versions={};function noop(){}process.on=noop,process.addListener=noop,process.once=noop,process.off=noop,process.removeListener=noop,process.removeAllListeners=noop,process.emit=noop,process.prependListener=noop,process.prependOnceListener=noop,process.listeners=function(){return[]},process.binding=function(){throw new Error('process.binding is not supported')},process.cwd=function(){return'/'},process.chdir=function(){throw new Error('process.chdir is not supported')},process.umask=function(){return 0};

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_incremental_dom__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_incremental_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_incremental_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_symbols__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_assign__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util_create_symbol__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__util_data__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__util_debounce__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__util_attributes_manager__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__util_get_own_property_descriptors__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__util_get_prop_names_and_symbols__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__util_get_props_map__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__props__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__lifecycle_props_init__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__util_is_type__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__polyfills_object_is__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__util_set_ctor_native_property__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__util_root__ = __webpack_require__(3);
const HTMLElement=__WEBPACK_IMPORTED_MODULE_15__util_root__["a" /* default */].HTMLElement||class{},_prevName=__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__util_create_symbol__["a" /* default */])('prevName'),_prevOldValue=__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__util_create_symbol__["a" /* default */])('prevOldValue'),_prevNewValue=__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__util_create_symbol__["a" /* default */])('prevNewValue');function deprecated(a,b,c){if('production'!==process.env.NODE_ENV){const d=a.localName?a.localName:a+'';console.warn(`${d} ${b} is deprecated. Use ${c}.`)}}function preventDoubleCalling(a,b,c,d){return b===a[_prevName]&&c===a[_prevOldValue]&&d===a[_prevNewValue]}function createNativePropertyDescriptors(a){const b=__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__util_get_props_map__["a" /* default */])(a);return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__util_get_prop_names_and_symbols__["a" /* default */])(b).reduce((c,d)=>{return c[d]=__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11__lifecycle_props_init__["a" /* createNativePropertyDescriptor */])(b[d]),c},{})}function createInitProps(a){const b=createNativePropertyDescriptors(a);return(c)=>{__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__util_get_prop_names_and_symbols__["a" /* default */])(b).forEach((d)=>{const e=b[d];e.beforeDefineProperty(c);const f=d in c,g=f&&c[d];Object.defineProperty(c,d,e),f&&(c[d]=g)})}}class _class extends HTMLElement{static get observedAttributes(){const a=this.hasOwnProperty(__WEBPACK_IMPORTED_MODULE_1__util_symbols__["f" /* ctorObservedAttributes */])?this[__WEBPACK_IMPORTED_MODULE_1__util_symbols__["f" /* ctorObservedAttributes */]]:[],b=__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__util_get_props_map__["a" /* default */])(this),c=Object.keys(b).map((e)=>b[e].attrSource).filter(Boolean),d=c.concat(a).concat(super.observedAttributes);return d.filter((e,f)=>d.indexOf(e)===f)}static set observedAttributes(a){a=Array.isArray(a)?a:[],__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_14__util_set_ctor_native_property__["a" /* default */])(this,'observedAttributes',a)}static get props(){return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util_assign__["a" /* default */])({},super.props,this[__WEBPACK_IMPORTED_MODULE_1__util_symbols__["g" /* ctorProps */]])}static set props(a){__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_14__util_set_ctor_native_property__["a" /* default */])(this,__WEBPACK_IMPORTED_MODULE_1__util_symbols__["g" /* ctorProps */],a)}constructor(...a){super(...a);const{constructor:b}=this;this[__WEBPACK_IMPORTED_MODULE_1__util_symbols__["c" /* created */]]=!0,b.hasOwnProperty(__WEBPACK_IMPORTED_MODULE_1__util_symbols__["h" /* ctorCreateInitProps */])||__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_14__util_set_ctor_native_property__["a" /* default */])(b,__WEBPACK_IMPORTED_MODULE_1__util_symbols__["h" /* ctorCreateInitProps */],createInitProps(b)),this[__WEBPACK_IMPORTED_MODULE_1__util_symbols__["i" /* rendererDebounced */]]=__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__util_debounce__["a" /* default */])(this[__WEBPACK_IMPORTED_MODULE_1__util_symbols__["d" /* renderer */]].bind(this));const c=__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__util_get_prop_names_and_symbols__["a" /* default */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__util_get_props_map__["a" /* default */])(b)).length;c&&b[__WEBPACK_IMPORTED_MODULE_1__util_symbols__["h" /* ctorCreateInitProps */]]&&b[__WEBPACK_IMPORTED_MODULE_1__util_symbols__["h" /* ctorCreateInitProps */]](this),!this.renderCallback&&b.render&&(deprecated(this,'static render','renderCallback'),this.renderCallback=b.render.bind(b,this));const{created:d}=b;__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_12__util_is_type__["a" /* isFunction */])(d)&&(deprecated(this,'static created','constructor'),d(this));const e=__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__util_data__["a" /* default */])(this),f=e.readyCallbacks;f&&(f.forEach((g)=>g(this)),delete e.readyCallbacks)}connectedCallback(){__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__util_attributes_manager__["a" /* default */])(this).resumeAttributesUpdates(),this[__WEBPACK_IMPORTED_MODULE_1__util_symbols__["j" /* connected */]]=!0,this[__WEBPACK_IMPORTED_MODULE_1__util_symbols__["i" /* rendererDebounced */]]();const{attached:a}=this.constructor;__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_12__util_is_type__["a" /* isFunction */])(a)&&(deprecated(this,'static attached','connectedCallback'),a(this)),this.setAttribute('defined','')}disconnectedCallback(){__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__util_attributes_manager__["a" /* default */])(this).suspendAttributesUpdates(),this[__WEBPACK_IMPORTED_MODULE_1__util_symbols__["j" /* connected */]]=!1;const{detached:a}=this.constructor;__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_12__util_is_type__["a" /* isFunction */])(a)&&(deprecated(this,'static detached','disconnectedCallback'),a(this))}attributeChangedCallback(a,b,c){if(!preventDoubleCalling(this,a,b,c)){this[_prevName]=a,this[_prevOldValue]=b,this[_prevNewValue]=c;const d=__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__util_data__["a" /* default */])(this,'attrSourceLinks')[a];if(d){const f=__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__util_attributes_manager__["a" /* default */])(this).onAttributeChanged(a,c);if(f){const g=__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__util_get_props_map__["a" /* default */])(this.constructor)[d],h=null!==c&&g.deserialize?g.deserialize(c):c,j=__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__util_data__["a" /* default */])(this,'props')[d];j.settingPropFromAttrSource=!0,this[d]=h,j.settingPropFromAttrSource=!1}}const{attributeChanged:e}=this.constructor;__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_12__util_is_type__["a" /* isFunction */])(e)&&(deprecated(this,'static attributeChanged','attributeChangedCallback'),e(this,{name:a,newValue:c,oldValue:b}))}}updatedCallback(a){return this.constructor.hasOwnProperty('updated')&&deprecated(this,'static updated','updatedCallback'),this.constructor.updated(this,a)}renderedCallback(){return this.constructor.hasOwnProperty('rendered')&&deprecated(this,'static rendered','renderedCallback'),this.constructor.rendered(this)}rendererCallback(){return this.constructor.renderer(this)}[__WEBPACK_IMPORTED_MODULE_1__util_symbols__["d" /* renderer */]](){this[__WEBPACK_IMPORTED_MODULE_1__util_symbols__["k" /* rendering */]]||!this[__WEBPACK_IMPORTED_MODULE_1__util_symbols__["j" /* connected */]]||(this[__WEBPACK_IMPORTED_MODULE_1__util_symbols__["k" /* rendering */]]=!0,this[__WEBPACK_IMPORTED_MODULE_1__util_symbols__["l" /* updated */]]()&&__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_12__util_is_type__["a" /* isFunction */])(this.renderCallback)&&(this.rendererCallback(),this.renderedCallback()),this[__WEBPACK_IMPORTED_MODULE_1__util_symbols__["k" /* rendering */]]=!1)}[__WEBPACK_IMPORTED_MODULE_1__util_symbols__["l" /* updated */]](){const a=this[__WEBPACK_IMPORTED_MODULE_1__util_symbols__["m" /* props */]];return this[__WEBPACK_IMPORTED_MODULE_1__util_symbols__["m" /* props */]]=__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10__props__["a" /* default */])(this),this.updatedCallback(a)}static extend(a={},b=this){class c extends b{}const d=__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__util_get_own_property_descriptors__["a" /* default */])(a),e=__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__util_get_own_property_descriptors__["a" /* default */])(a.prototype);return delete d.prototype,Object.defineProperties(c,d),Object.defineProperties(c.prototype,e),c}static rendered(){}static renderer(a){a.shadowRoot||a.attachShadow({mode:'open'}),__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_incremental_dom__["patchInner"])(a.shadowRoot,()=>{const b=a.renderCallback(a);__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_12__util_is_type__["a" /* isFunction */])(b)?b():Array.isArray(b)&&b.forEach((c)=>{__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_12__util_is_type__["a" /* isFunction */])(c)&&c()})})}static updated(a,b){if(!b)return!0;const c=__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__util_get_prop_names_and_symbols__["a" /* default */])(b);for(let d=0;d<c.length;d++){const e=c[d];if(!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_13__polyfills_object_is__["a" /* default */])(b[e],a[e]))return!0}return!1}}
/* harmony export (immutable) */ __webpack_exports__["a"] = _class;
_class.is='';
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(9)))

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getAttrMgr;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__to_null_or_string__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__is_type__ = __webpack_require__(2);
class AttributesManager{constructor(a){this.elem=a,this.connected=!1,this.pendingValues={},this.lastSetValues={}}suspendAttributesUpdates(){this.connected=!1}resumeAttributesUpdates(){this.connected=!0;const a=Object.keys(this.pendingValues);a.forEach((b)=>{const c=this.pendingValues[b];__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__is_type__["b" /* isUndefined */])(c)||(delete this.pendingValues[b],this._syncAttrValue(b,c))})}onAttributeChanged(a,b){b=__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__to_null_or_string__["a" /* default */])(b),this._clearPendingValue(a);const c=this.lastSetValues[a]!==b;return this.lastSetValues[a]=b,c}setAttrValue(a,b){b=__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__to_null_or_string__["a" /* default */])(b),this.lastSetValues[a]=b,this.connected?(this._clearPendingValue(a),this._syncAttrValue(a,b)):this.pendingValues[a]=b}_syncAttrValue(a,b){const c=__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__to_null_or_string__["a" /* default */])(this.elem.getAttribute(a));b!==c&&(null===b?this.elem.removeAttribute(a):this.elem.setAttribute(a,b))}_clearPendingValue(a){a in this.pendingValues&&delete this.pendingValues[a]}}const $attributesMgr='____skate_attributesMgr';function getAttrMgr(a){let b=a[$attributesMgr];return b||(b=new AttributesManager(a),a[$attributesMgr]=b),b}

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getPropsMap;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__symbols__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__get_prop_names_and_symbols__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__prop_definition__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__set_ctor_native_property__ = __webpack_require__(13);
function getPropsMap(a){if(!a.hasOwnProperty(__WEBPACK_IMPORTED_MODULE_0__symbols__["e" /* ctorPropsMap */])){const b=a.props||{},c=__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__get_prop_names_and_symbols__["a" /* default */])(b).reduce((d,e)=>{return d[e]=new __WEBPACK_IMPORTED_MODULE_2__prop_definition__["a" /* default */](e,b[e]),d},{});__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__set_ctor_native_property__["a" /* default */])(a,__WEBPACK_IMPORTED_MODULE_0__symbols__["e" /* ctorPropsMap */],c)}return a[__WEBPACK_IMPORTED_MODULE_0__symbols__["e" /* ctorPropsMap */]]}

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = setCtorNativeProperty;
function setCtorNativeProperty(a,b,c){Object.defineProperty(a,b,{configurable:!0,value:c})}

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__empty__ = __webpack_require__(6);
const toNullOrString=(a)=>__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__empty__["a" /* default */])(a)?null:a+'';/* harmony default export */ __webpack_exports__["a"] = (toNullOrString);

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return h; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_prop__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_symbols__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_vdom__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api_component__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__api_define__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__api_emit__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__api_link__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__api_props__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__api_ready__ = __webpack_require__(21);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Component", function() { return __WEBPACK_IMPORTED_MODULE_3__api_component__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "define", function() { return __WEBPACK_IMPORTED_MODULE_4__api_define__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "emit", function() { return __WEBPACK_IMPORTED_MODULE_5__api_emit__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "link", function() { return __WEBPACK_IMPORTED_MODULE_6__api_link__["a"]; });
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "prop", function() { return __WEBPACK_IMPORTED_MODULE_0__api_prop__; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "props", function() { return __WEBPACK_IMPORTED_MODULE_7__api_props__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ready", function() { return __WEBPACK_IMPORTED_MODULE_8__api_ready__["a"]; });
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "symbols", function() { return __WEBPACK_IMPORTED_MODULE_1__api_symbols__; });
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "vdom", function() { return __WEBPACK_IMPORTED_MODULE_2__api_vdom__; });
const h=__WEBPACK_IMPORTED_MODULE_2__api_vdom__["builder"]();

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const skate = __webpack_require__(15);
window.skate = skate;


/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__component__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_unique_id__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_root__ = __webpack_require__(3);
/* harmony default export */ __webpack_exports__["a"] = (function(...a){const{customElements:b,HTMLElement:c}=__WEBPACK_IMPORTED_MODULE_2__util_root__["a" /* default */];let[d,e]=a;if(!b)throw new Error('Skate requires native custom element support or a polyfill.');if('production'!==process.env.NODE_ENV&&2===a.length&&console.warn('The "name" argument to define() is deprecated. Please define a `static is` property on the constructor instead.'),1===a.length&&(e=d,d=null),'object'==typeof e&&(e=__WEBPACK_IMPORTED_MODULE_0__component__["a" /* default */].extend(e)),!(e.prototype instanceof c))throw new Error('You must provide a constructor that extends HTMLElement to define().');return 2===a.length?b.define(b.get(d)?__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util_unique_id__["a" /* default */])(d):d,e):(!e.hasOwnProperty('is')&&(e.is=__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util_unique_id__["a" /* default */])()),b.define(e.is,e)),e});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(9)))

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_root__ = __webpack_require__(3);
const Event=((a)=>{if(a)try{new a('emit-init')}catch(b){return}return a})(__WEBPACK_IMPORTED_MODULE_0__util_root__["a" /* default */].Event);function createCustomEvent(a,b={}){const{detail:c}=b;delete b.detail;let d;return Event?(d=new Event(a,b),Object.defineProperty(d,'detail',{value:c})):(d=document.createEvent('CustomEvent'),Object.defineProperty(d,'composed',{value:b.composed}),d.initCustomEvent(a,b.bubbles,b.cancelable,c)),d}/* harmony default export */ __webpack_exports__["a"] = (function(a,b,c={}){return void 0===c.bubbles&&(c.bubbles=!0),void 0===c.cancelable&&(c.cancelable=!0),void 0===c.composed&&(c.composed=!0),a.dispatchEvent(createCustomEvent(b,c))});

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__props__ = __webpack_require__(7);
function getValue(a){const b=a.type;return'checkbox'===b||'radio'===b?!!a.checked&&(a.value||!0):a.value}/* harmony default export */ __webpack_exports__["a"] = (function(a,b){return(c)=>{const d=c.target||c.composedPath()[0],f=getValue(d),g=b||d.name||'value';if(-1<g.indexOf('.')){const h=g.split('.'),i=h[0],j=h.pop(),k=h.reduce((l,m)=>l&&l[m],a);k[j||c.target.name]=f,__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__props__["a" /* default */])(a,{[i]:a[i]})}else __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__props__["a" /* default */])(a,{[g]:f})}});

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["create"] = create;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_assign__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_empty__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_to_null_or_string__ = __webpack_require__(14);
function create(a){return(...b)=>{return b.unshift({},a),__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_assign__["a" /* default */])(...b)}}const parseIfNotEmpty=(a)=>__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util_empty__["a" /* default */])(a)?null:JSON.parse(a);const array=create({coerce:(a)=>Array.isArray(a)?a:__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util_empty__["a" /* default */])(a)?null:[a],default:()=>[],deserialize:parseIfNotEmpty,serialize:JSON.stringify});
/* harmony export (immutable) */ __webpack_exports__["array"] = array;
const boolean=create({coerce:(a)=>!!a,default:!1,deserialize:(a)=>null!==a,serialize:(a)=>a?'':null});
/* harmony export (immutable) */ __webpack_exports__["boolean"] = boolean;
const zeroIfEmptyOrNumberIncludesNaN=(a)=>__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util_empty__["a" /* default */])(a)?0:+a;const number=create({default:0,coerce:zeroIfEmptyOrNumberIncludesNaN,deserialize:zeroIfEmptyOrNumberIncludesNaN,serialize:__WEBPACK_IMPORTED_MODULE_2__util_to_null_or_string__["a" /* default */]});
/* harmony export (immutable) */ __webpack_exports__["number"] = number;
const string=create({default:'',coerce:__WEBPACK_IMPORTED_MODULE_2__util_to_null_or_string__["a" /* default */],deserialize:__WEBPACK_IMPORTED_MODULE_2__util_to_null_or_string__["a" /* default */],serialize:__WEBPACK_IMPORTED_MODULE_2__util_to_null_or_string__["a" /* default */]});
/* harmony export (immutable) */ __webpack_exports__["string"] = string;
const object=create({default:()=>({}),deserialize:parseIfNotEmpty,serialize:JSON.stringify});
/* harmony export (immutable) */ __webpack_exports__["object"] = object;


/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_symbols__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_data__ = __webpack_require__(5);
/* harmony default export */ __webpack_exports__["a"] = (function(a,b){const c=__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util_data__["a" /* default */])(a);a[__WEBPACK_IMPORTED_MODULE_0__util_symbols__["c" /* created */]]?b(a):c.readyCallbacks?c.readyCallbacks.push(b):c.readyCallbacks=[b]});

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_symbols__ = __webpack_require__(0);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "name", function() { return __WEBPACK_IMPORTED_MODULE_0__util_symbols__["b"]; });


/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["element"] = element;
/* harmony export (immutable) */ __webpack_exports__["builder"] = builder;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "attr", function() { return newAttr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "elementClose", function() { return newElementClose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "elementOpen", function() { return newElementOpen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "elementOpenEnd", function() { return newElementOpenEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "elementOpenStart", function() { return newElementOpenStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "elementVoid", function() { return newElementVoid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "text", function() { return newText; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_incremental_dom__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_incremental_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_incremental_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_symbols__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_prop_context__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util_root__ = __webpack_require__(3);
const{customElements,HTMLElement}=__WEBPACK_IMPORTED_MODULE_3__util_root__["a" /* default */],applyDefault=__WEBPACK_IMPORTED_MODULE_0_incremental_dom__["attributes"][__WEBPACK_IMPORTED_MODULE_0_incremental_dom__["symbols"].default],stackChren=[],$skip='__skip',$currentEventHandlers='__events',$stackCurrentHelperProps='__props';let stackCurrentHelper,overrideArgs,skips=0;const noop=()=>{};function applyEvent(b,c,d){let f=b[$currentEventHandlers];f||(f=b[$currentEventHandlers]={}),'undefined'==typeof f[c]&&b.addEventListener(c,function(g){f[c]&&f[c].call(this,g)}),f[c]='function'==typeof d?d:null}const attributesContext=__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util_prop_context__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_0_incremental_dom__["attributes"],{key:noop,statics:noop,checked:__WEBPACK_IMPORTED_MODULE_0_incremental_dom__["applyProp"],className:__WEBPACK_IMPORTED_MODULE_0_incremental_dom__["applyProp"],disabled:__WEBPACK_IMPORTED_MODULE_0_incremental_dom__["applyProp"],value:__WEBPACK_IMPORTED_MODULE_0_incremental_dom__["applyProp"],ref(b,c,d){b[__WEBPACK_IMPORTED_MODULE_1__util_symbols__["a" /* ref */]]=d},skip(b,c,d){d?b[$skip]=!0:delete b[$skip]},[__WEBPACK_IMPORTED_MODULE_0_incremental_dom__["symbols"].default](b,c,d){const f=customElements.get(b.localName),g=f&&f.props||{},h=f&&f.prototype||{};if((c in g||c in b||c in h)&&!('ownerSVGElement'in b))return void __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_incremental_dom__["applyProp"])(b,c,d);if(!1===d)return void applyDefault(b,c);if(0===c.indexOf('on')){const i=c[2];let j;if('-'===i?j=c.substring(3):i===i.toUpperCase()&&(j=i.toLowerCase()+c.substring(3)),j)return void applyEvent(b,j,d)}applyDefault(b,c,d)}});function resolveTagName(b){if(!b)return b;if(b.is)return b.is;if(b.prototype instanceof HTMLElement){if(b[__WEBPACK_IMPORTED_MODULE_1__util_symbols__["b" /* name */]])return b[__WEBPACK_IMPORTED_MODULE_1__util_symbols__["b" /* name */]];const c=new b;return c[__WEBPACK_IMPORTED_MODULE_1__util_symbols__["b" /* name */]]=c.localName}return b}const elementOpen=attributesContext(__WEBPACK_IMPORTED_MODULE_0_incremental_dom__["elementOpen"]);function elementOpenStart(b,c=null,d=null){overrideArgs=[b,c,d]}function elementOpenEnd(){const b=newElementOpen(...overrideArgs);return overrideArgs=null,b}function wrapIdomFunc(b,c=noop){return function d(...f){if(f[0]=resolveTagName(f[0]),stackCurrentHelper=null,'function'==typeof f[0])return stackCurrentHelper=f[0],c(...f);if(stackChren.length)stackChren[stackChren.length-1].push([d,f]);else{if(b===elementOpen){if(skips)return++skips;const g=b(...f);return g[$skip]&&++skips,g}if(b===__WEBPACK_IMPORTED_MODULE_0_incremental_dom__["elementClose"]){if(1==skips&&__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_incremental_dom__["skip"])(),skips&&--skips)return;const g=b(...f),h=g[__WEBPACK_IMPORTED_MODULE_1__util_symbols__["a" /* ref */]];return delete g[__WEBPACK_IMPORTED_MODULE_1__util_symbols__["a" /* ref */]],'function'==typeof h&&h(g),g}if(!skips||b===elementOpenStart||b===elementOpenEnd)return b(...f)}}}function newAttr(...b){stackCurrentHelper?stackCurrentHelper[$stackCurrentHelperProps][b[0]]=b[1]:stackChren.length?stackChren[stackChren.length-1].push([newAttr,b]):(overrideArgs.push(b[0]),overrideArgs.push(b[1]))}function stackOpen(b,c,d,...f){const g={key:c,statics:d};for(let h=0;h<f.length;h+=2)g[f[h]]=f[h+1];b[$stackCurrentHelperProps]=g,stackChren.push([])}function stackClose(b){const c=stackChren.pop(),d=b[$stackCurrentHelperProps];delete b[$stackCurrentHelperProps];const f=b(d,()=>c.forEach((g)=>g[0](...g[1])));return'function'==typeof f?f():f}const newElementOpenStart=wrapIdomFunc(elementOpenStart,stackOpen),newElementOpenEnd=wrapIdomFunc(elementOpenEnd),newElementOpen=wrapIdomFunc(elementOpen,stackOpen),newElementClose=wrapIdomFunc(__WEBPACK_IMPORTED_MODULE_0_incremental_dom__["elementClose"],stackClose);function newElementVoid(b,...c){return newElementOpen(b,...c),newElementClose(b)}const newText=wrapIdomFunc(__WEBPACK_IMPORTED_MODULE_0_incremental_dom__["text"]);function element(b,c,...d){const f=typeof c;return('function'==f||'string'==f||'number'==f)&&d.unshift(c),(null===c||'object'!=f)&&(c={}),newElementOpenStart(b,c.key,c.statics),delete c.key,delete c.statics,Object.keys(c).forEach((g)=>newAttr(g,c[g])),newElementOpenEnd(b),d.forEach((g)=>{const h=typeof g;'function'==h?g():'string'==h||'number'==h?newText(g):Array.isArray(g)&&g.forEach((i)=>i())}),newElementClose(b)}function builder(...b){return 0===b.length?(...c)=>element.bind(null,...c):b.map((c)=>(...d)=>element.bind(null,c,...d))}

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createNativePropertyDescriptor;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_symbols__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_data__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_empty__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util_attributes_manager__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__util_get_default_value__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__util_get_initial_value__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__util_get_prop_data__ = __webpack_require__(33);
function createNativePropertyDescriptor(a){const{nameOrSymbol:b}=a,c={configurable:!0,enumerable:!0};return c.beforeDefineProperty=(d)=>{const e=__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__util_get_prop_data__["a" /* default */])(d,b),f=a.attrSource;f&&(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util_data__["a" /* default */])(d,'attrSourceLinks')[f]=b);let g=d[b],h=!1;__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util_empty__["a" /* default */])(g)&&(f&&d.hasAttribute(f)?(h=!0,g=a.deserialize(d.getAttribute(f))):'initial'in a?g=__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__util_get_initial_value__["a" /* default */])(d,a):g=__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__util_get_default_value__["a" /* default */])(d,a)),g=a.coerce(g),e.internalValue=g;const i=a.attrTarget&&!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util_empty__["a" /* default */])(g)&&(!h||a.attrTargetIsNotSource);if(i){let j=a.serialize(g);__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__util_attributes_manager__["a" /* default */])(d).setAttrValue(a.attrTarget,j)}},c.get=function(){const e=__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__util_get_prop_data__["a" /* default */])(this,b),{internalValue:f}=e;return a.get?a.get(this,{name:b,internalValue:f}):f},c.set=function(e){const f=__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__util_get_prop_data__["a" /* default */])(this,b),g=__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util_empty__["a" /* default */])(e);if(g&&(e=__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__util_get_default_value__["a" /* default */])(this,a)),e=a.coerce(e),a.set){let{oldValue:i}=f;__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util_empty__["a" /* default */])(i)&&(i=null);const j={name:b,newValue:e,oldValue:i};a.set(this,j)}this[__WEBPACK_IMPORTED_MODULE_0__util_symbols__["i" /* rendererDebounced */]](this),f.internalValue=f.oldValue=e;const h=a.attrTarget&&(a.attrTargetIsNotSource||!f.settingPropFromAttrSource);if(h){let i=g?null:a.serialize(e);__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__util_attributes_manager__["a" /* default */])(this).setAttrValue(a.attrTarget,i)}},c}

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.is||(Object.is=function(a,b){return a===b?0!==a||1/a==1/b:a!==a&&b!==b});/* harmony default export */ __webpack_exports__["a"] = (Object.is);

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createSymbol;
function createSymbol(a){return'function'==typeof Symbol?Symbol(a):a}

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(a){return a.split(/([A-Z])/).reduce((b,c,d)=>{const e=b&&0!=d%2?'-':'';return`${b}${e}${c.toLowerCase()}`})});

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__native__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__root__ = __webpack_require__(3);
const{MutationObserver}=__WEBPACK_IMPORTED_MODULE_1__root__["a" /* default */];function microtaskDebounce(a){let b=!1,c=0,d=[];const e=document.createElement('span'),f=new MutationObserver(()=>{a(...d),b=!1,d=null});return f.observe(e,{childList:!0}),(...g)=>{d=g,b||(b=!0,e.textContent=`${c}`,c+=1)}}function taskDebounce(a){let b=!1,c=[];return(...d)=>{c=d,b||(b=!0,setTimeout(()=>{b=!1,a(...c)},1))}}/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__native__["a" /* default */])(MutationObserver)?microtaskDebounce:taskDebounce);

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = error;
function error(a){throw new Error(a)}

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getDefaultValue;
function getDefaultValue(a,b){return'function'==typeof b.default?b.default(a,{name:b.nameOrSymbol}):b.default}

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getInitialValue;
function getInitialValue(a,b){return'function'==typeof b.initial?b.initial(a,{name:b.nameOrSymbol}):b.initial}

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__get_prop_names_and_symbols__ = __webpack_require__(1);
/* harmony default export */ __webpack_exports__["a"] = (function(a={}){return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__get_prop_names_and_symbols__["a" /* default */])(a).reduce((b,c)=>{return b[c]=Object.getOwnPropertyDescriptor(a,c),b},{})});

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getPropData;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__data__ = __webpack_require__(5);
function getPropData(a,b){const c=__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__data__["a" /* default */])(a,'props');return c[b]||(c[b]={})}

/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const nativeHints=['native code','[object MutationObserverConstructor]'];/* harmony default export */ __webpack_exports__["a"] = ((c)=>nativeHints.map((d)=>-1<(c||'').toString().indexOf([d])).reduce((d,e)=>d||e));

/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__assign__ = __webpack_require__(4);
function enter(a,b){const c={};return Object.keys(b).forEach((d)=>{c[d]=a[d],a[d]=b[d]}),c}function exit(a,b){__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__assign__["a" /* default */])(a,b)}/* harmony default export */ __webpack_exports__["a"] = (function(a,b){return(c)=>(...d)=>{const e=enter(a,b),f=c(...d);return exit(a,e),f}});

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dash_case__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__empty__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__error__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__is_type__ = __webpack_require__(2);
class PropDefinition{constructor(a,b){this._nameOrSymbol=a,b=b||{},this.attrSource=null,this.attrTarget=null,this.attrTargetIsNotSource=!1,this.coerce=(c)=>c,this.default=null,this.deserialize=(c)=>c,this.get=null,this.serialize=(c)=>__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__empty__["a" /* default */])(c)?null:c+'',this.set=null,Object.keys(b).forEach((c)=>{const d=b[c];switch(c){case'attribute':if(!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__is_type__["c" /* isObject */])(d))this.attrSource=this.attrTarget=resolveAttrName(d,a);else{const{source:e,target:f}=d;e||f||__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__error__["a" /* default */])(`${c} 'source' or 'target' is missing.`),this.attrSource=resolveAttrName(e,a),this.attrTarget=resolveAttrName(f,a),this.attrTargetIsNotSource=this.attrTarget!==this.attrSource}break;case'coerce':case'deserialize':case'get':case'serialize':case'set':__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__is_type__["a" /* isFunction */])(d)?this[c]=d:__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__error__["a" /* default */])(`${c} must be a function.`);break;case'default':case'initial':this[c]=d;break;default:this[c]=d;}})}get nameOrSymbol(){return this._nameOrSymbol}}
/* harmony export (immutable) */ __webpack_exports__["a"] = PropDefinition;
function resolveAttrName(a,b){if(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__is_type__["d" /* isSymbol */])(b))__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__error__["a" /* default */])(`${b.toString()} symbol property cannot have an attribute.`);else{if(!0===a)return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__dash_case__["a" /* default */])(b+'');if(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__is_type__["e" /* isString */])(a))return a}return null}

/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = uniqueId;
function uniqueId(a){const b='xxxxxxxx'.replace(/[xy]/g,(d)=>{const e=0|16*Math.random(),f='x'===d?e:8|3&e;return f.toString(16)});return`${a||'x'}-${b}`}

/***/ }),
/* 38 */
/***/ (function(module, exports) {

var g=function(){return this}();try{g=g||Function("return this")()||(1,eval)("this")}catch(a){"object"==typeof window&&(g=window)}module.exports=g;

/***/ })
/******/ ]);