function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["borrowers-borrowers-module"], {
  /***/
  "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/a11y.js":
  /*!*****************************************************************!*\
    !*** ./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/a11y.js ***!
    \*****************************************************************/

  /*! exports provided: A11yModule, ActiveDescendantKeyManager, AriaDescriber, CDK_DESCRIBEDBY_HOST_ATTRIBUTE, CDK_DESCRIBEDBY_ID_PREFIX, CdkAriaLive, CdkMonitorFocus, CdkTrapFocus, ConfigurableFocusTrap, ConfigurableFocusTrapFactory, EventListenerFocusTrapInertStrategy, FOCUS_MONITOR_DEFAULT_OPTIONS, FOCUS_TRAP_INERT_STRATEGY, FocusKeyManager, FocusMonitor, FocusTrap, FocusTrapFactory, HighContrastModeDetector, InteractivityChecker, LIVE_ANNOUNCER_DEFAULT_OPTIONS, LIVE_ANNOUNCER_ELEMENT_TOKEN, LIVE_ANNOUNCER_ELEMENT_TOKEN_FACTORY, ListKeyManager, LiveAnnouncer, MESSAGES_CONTAINER_ID, TOUCH_BUFFER_MS, isFakeMousedownFromScreenReader, ɵangular_material_src_cdk_a11y_a11y_a, ɵangular_material_src_cdk_a11y_a11y_b */

  /***/
  function node_modulesAngularCdk__ivy_ngcc__Fesm2015A11yJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "A11yModule", function () {
      return A11yModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ActiveDescendantKeyManager", function () {
      return ActiveDescendantKeyManager;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AriaDescriber", function () {
      return AriaDescriber;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CDK_DESCRIBEDBY_HOST_ATTRIBUTE", function () {
      return CDK_DESCRIBEDBY_HOST_ATTRIBUTE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CDK_DESCRIBEDBY_ID_PREFIX", function () {
      return CDK_DESCRIBEDBY_ID_PREFIX;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkAriaLive", function () {
      return CdkAriaLive;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkMonitorFocus", function () {
      return CdkMonitorFocus;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkTrapFocus", function () {
      return CdkTrapFocus;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConfigurableFocusTrap", function () {
      return ConfigurableFocusTrap;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConfigurableFocusTrapFactory", function () {
      return ConfigurableFocusTrapFactory;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EventListenerFocusTrapInertStrategy", function () {
      return EventListenerFocusTrapInertStrategy;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FOCUS_MONITOR_DEFAULT_OPTIONS", function () {
      return FOCUS_MONITOR_DEFAULT_OPTIONS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FOCUS_TRAP_INERT_STRATEGY", function () {
      return FOCUS_TRAP_INERT_STRATEGY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FocusKeyManager", function () {
      return FocusKeyManager;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FocusMonitor", function () {
      return FocusMonitor;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FocusTrap", function () {
      return FocusTrap;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FocusTrapFactory", function () {
      return FocusTrapFactory;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HighContrastModeDetector", function () {
      return HighContrastModeDetector;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InteractivityChecker", function () {
      return InteractivityChecker;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LIVE_ANNOUNCER_DEFAULT_OPTIONS", function () {
      return LIVE_ANNOUNCER_DEFAULT_OPTIONS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LIVE_ANNOUNCER_ELEMENT_TOKEN", function () {
      return LIVE_ANNOUNCER_ELEMENT_TOKEN;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LIVE_ANNOUNCER_ELEMENT_TOKEN_FACTORY", function () {
      return LIVE_ANNOUNCER_ELEMENT_TOKEN_FACTORY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListKeyManager", function () {
      return ListKeyManager;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LiveAnnouncer", function () {
      return LiveAnnouncer;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MESSAGES_CONTAINER_ID", function () {
      return MESSAGES_CONTAINER_ID;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TOUCH_BUFFER_MS", function () {
      return TOUCH_BUFFER_MS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "isFakeMousedownFromScreenReader", function () {
      return isFakeMousedownFromScreenReader;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_material_src_cdk_a11y_a11y_a", function () {
      return FocusTrapManager;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_material_src_cdk_a11y_a11y_b", function () {
      return ConfigurableFocusTrapConfig;
    });
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/cdk/keycodes */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/keycodes.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/cdk/coercion */
    "./node_modules/@angular/cdk/fesm2015/coercion.js");
    /* harmony import */


    var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/cdk/platform */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/platform.js");
    /* harmony import */


    var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/cdk/observers */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/observers.js");
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/a11y/aria-describer/aria-reference.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * IDs are delimited by an empty space, as per the spec.
     * @type {?}
     */


    var ID_DELIMITER = ' ';
    /**
     * Adds the given ID to the specified ARIA attribute on an element.
     * Used for attributes such as aria-labelledby, aria-owns, etc.
     * @param {?} el
     * @param {?} attr
     * @param {?} id
     * @return {?}
     */

    function addAriaReferencedId(el, attr, id) {
      /** @type {?} */
      var ids = getAriaReferenceIds(el, attr);

      if (ids.some(
      /**
      * @param {?} existingId
      * @return {?}
      */
      function (existingId) {
        return existingId.trim() == id.trim();
      })) {
        return;
      }

      ids.push(id.trim());
      el.setAttribute(attr, ids.join(ID_DELIMITER));
    }
    /**
     * Removes the given ID from the specified ARIA attribute on an element.
     * Used for attributes such as aria-labelledby, aria-owns, etc.
     * @param {?} el
     * @param {?} attr
     * @param {?} id
     * @return {?}
     */


    function removeAriaReferencedId(el, attr, id) {
      /** @type {?} */
      var ids = getAriaReferenceIds(el, attr);
      /** @type {?} */

      var filteredIds = ids.filter(
      /**
      * @param {?} val
      * @return {?}
      */
      function (val) {
        return val != id.trim();
      });

      if (filteredIds.length) {
        el.setAttribute(attr, filteredIds.join(ID_DELIMITER));
      } else {
        el.removeAttribute(attr);
      }
    }
    /**
     * Gets the list of IDs referenced by the given ARIA attribute on an element.
     * Used for attributes such as aria-labelledby, aria-owns, etc.
     * @param {?} el
     * @param {?} attr
     * @return {?}
     */


    function getAriaReferenceIds(el, attr) {
      // Get string array of all individual ids (whitespace delimited) in the attribute value
      return (el.getAttribute(attr) || '').match(/\S+/g) || [];
    }
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/a11y/aria-describer/aria-describer.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Interface used to register message elements and keep a count of how many registrations have
     * the same message and the reference to the message element used for the `aria-describedby`.
     * @record
     */


    function RegisteredMessage() {}

    if (false) {}
    /**
     * ID used for the body container where all messages are appended.
     * @type {?}
     */


    var MESSAGES_CONTAINER_ID = 'cdk-describedby-message-container';
    /**
     * ID prefix used for each created message element.
     * @type {?}
     */

    var CDK_DESCRIBEDBY_ID_PREFIX = 'cdk-describedby-message';
    /**
     * Attribute given to each host element that is described by a message element.
     * @type {?}
     */

    var CDK_DESCRIBEDBY_HOST_ATTRIBUTE = 'cdk-describedby-host';
    /**
     * Global incremental identifier for each registered message element.
     * @type {?}
     */

    var nextId = 0;
    /**
     * Global map of all registered message elements that have been placed into the document.
     * @type {?}
     */

    var messageRegistry = new Map();
    /**
     * Container for all registered messages.
     * @type {?}
     */

    var messagesContainer = null;
    /**
     * Utility that creates visually hidden elements with a message content. Useful for elements that
     * want to use aria-describedby to further describe themselves without adding additional visual
     * content.
     */

    var AriaDescriber = /*#__PURE__*/function () {
      /**
       * @param {?} _document
       */
      function AriaDescriber(_document) {
        _classCallCheck(this, AriaDescriber);

        this._document = _document;
      }
      /**
       * Adds to the host element an aria-describedby reference to a hidden element that contains
       * the message. If the same message has already been registered, then it will reuse the created
       * message element.
       * @param {?} hostElement
       * @param {?} message
       * @return {?}
       */


      _createClass(AriaDescriber, [{
        key: "describe",
        value: function describe(hostElement, message) {
          if (!this._canBeDescribed(hostElement, message)) {
            return;
          }

          if (typeof message !== 'string') {
            // We need to ensure that the element has an ID.
            this._setMessageId(message);

            messageRegistry.set(message, {
              messageElement: message,
              referenceCount: 0
            });
          } else if (!messageRegistry.has(message)) {
            this._createMessageElement(message);
          }

          if (!this._isElementDescribedByMessage(hostElement, message)) {
            this._addMessageReference(hostElement, message);
          }
        }
        /**
         * Removes the host element's aria-describedby reference to the message element.
         * @param {?} hostElement
         * @param {?} message
         * @return {?}
         */

      }, {
        key: "removeDescription",
        value: function removeDescription(hostElement, message) {
          if (!this._isElementNode(hostElement)) {
            return;
          }

          if (this._isElementDescribedByMessage(hostElement, message)) {
            this._removeMessageReference(hostElement, message);
          } // If the message is a string, it means that it's one that we created for the
          // consumer so we can remove it safely, otherwise we should leave it in place.


          if (typeof message === 'string') {
            /** @type {?} */
            var registeredMessage = messageRegistry.get(message);

            if (registeredMessage && registeredMessage.referenceCount === 0) {
              this._deleteMessageElement(message);
            }
          }

          if (messagesContainer && messagesContainer.childNodes.length === 0) {
            this._deleteMessagesContainer();
          }
        }
        /**
         * Unregisters all created message elements and removes the message container.
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          /** @type {?} */
          var describedElements = this._document.querySelectorAll("[".concat(CDK_DESCRIBEDBY_HOST_ATTRIBUTE, "]"));

          for (var i = 0; i < describedElements.length; i++) {
            this._removeCdkDescribedByReferenceIds(describedElements[i]);

            describedElements[i].removeAttribute(CDK_DESCRIBEDBY_HOST_ATTRIBUTE);
          }

          if (messagesContainer) {
            this._deleteMessagesContainer();
          }

          messageRegistry.clear();
        }
        /**
         * Creates a new element in the visually hidden message container element with the message
         * as its content and adds it to the message registry.
         * @private
         * @param {?} message
         * @return {?}
         */

      }, {
        key: "_createMessageElement",
        value: function _createMessageElement(message) {
          /** @type {?} */
          var messageElement = this._document.createElement('div');

          this._setMessageId(messageElement);

          messageElement.textContent = message;

          this._createMessagesContainer();

          /** @type {?} */
          messagesContainer.appendChild(messageElement);
          messageRegistry.set(message, {
            messageElement: messageElement,
            referenceCount: 0
          });
        }
        /**
         * Assigns a unique ID to an element, if it doesn't have one already.
         * @private
         * @param {?} element
         * @return {?}
         */

      }, {
        key: "_setMessageId",
        value: function _setMessageId(element) {
          if (!element.id) {
            element.id = "".concat(CDK_DESCRIBEDBY_ID_PREFIX, "-").concat(nextId++);
          }
        }
        /**
         * Deletes the message element from the global messages container.
         * @private
         * @param {?} message
         * @return {?}
         */

      }, {
        key: "_deleteMessageElement",
        value: function _deleteMessageElement(message) {
          /** @type {?} */
          var registeredMessage = messageRegistry.get(message);
          /** @type {?} */

          var messageElement = registeredMessage && registeredMessage.messageElement;

          if (messagesContainer && messageElement) {
            messagesContainer.removeChild(messageElement);
          }

          messageRegistry["delete"](message);
        }
        /**
         * Creates the global container for all aria-describedby messages.
         * @private
         * @return {?}
         */

      }, {
        key: "_createMessagesContainer",
        value: function _createMessagesContainer() {
          if (!messagesContainer) {
            /** @type {?} */
            var preExistingContainer = this._document.getElementById(MESSAGES_CONTAINER_ID); // When going from the server to the client, we may end up in a situation where there's
            // already a container on the page, but we don't have a reference to it. Clear the
            // old container so we don't get duplicates. Doing this, instead of emptying the previous
            // container, should be slightly faster.


            if (preExistingContainer) {
              /** @type {?} */
              preExistingContainer.parentNode.removeChild(preExistingContainer);
            }

            messagesContainer = this._document.createElement('div');
            messagesContainer.id = MESSAGES_CONTAINER_ID;
            messagesContainer.setAttribute('aria-hidden', 'true');
            messagesContainer.style.display = 'none';

            this._document.body.appendChild(messagesContainer);
          }
        }
        /**
         * Deletes the global messages container.
         * @private
         * @return {?}
         */

      }, {
        key: "_deleteMessagesContainer",
        value: function _deleteMessagesContainer() {
          if (messagesContainer && messagesContainer.parentNode) {
            messagesContainer.parentNode.removeChild(messagesContainer);
            messagesContainer = null;
          }
        }
        /**
         * Removes all cdk-describedby messages that are hosted through the element.
         * @private
         * @param {?} element
         * @return {?}
         */

      }, {
        key: "_removeCdkDescribedByReferenceIds",
        value: function _removeCdkDescribedByReferenceIds(element) {
          // Remove all aria-describedby reference IDs that are prefixed by CDK_DESCRIBEDBY_ID_PREFIX

          /** @type {?} */
          var originalReferenceIds = getAriaReferenceIds(element, 'aria-describedby').filter(
          /**
          * @param {?} id
          * @return {?}
          */
          function (id) {
            return id.indexOf(CDK_DESCRIBEDBY_ID_PREFIX) != 0;
          });
          element.setAttribute('aria-describedby', originalReferenceIds.join(' '));
        }
        /**
         * Adds a message reference to the element using aria-describedby and increments the registered
         * message's reference count.
         * @private
         * @param {?} element
         * @param {?} message
         * @return {?}
         */

      }, {
        key: "_addMessageReference",
        value: function _addMessageReference(element, message) {
          /** @type {?} */
          var registeredMessage =
          /** @type {?} */
          messageRegistry.get(message); // Add the aria-describedby reference and set the
          // describedby_host attribute to mark the element.

          addAriaReferencedId(element, 'aria-describedby', registeredMessage.messageElement.id);
          element.setAttribute(CDK_DESCRIBEDBY_HOST_ATTRIBUTE, '');
          registeredMessage.referenceCount++;
        }
        /**
         * Removes a message reference from the element using aria-describedby
         * and decrements the registered message's reference count.
         * @private
         * @param {?} element
         * @param {?} message
         * @return {?}
         */

      }, {
        key: "_removeMessageReference",
        value: function _removeMessageReference(element, message) {
          /** @type {?} */
          var registeredMessage =
          /** @type {?} */
          messageRegistry.get(message);
          registeredMessage.referenceCount--;
          removeAriaReferencedId(element, 'aria-describedby', registeredMessage.messageElement.id);
          element.removeAttribute(CDK_DESCRIBEDBY_HOST_ATTRIBUTE);
        }
        /**
         * Returns true if the element has been described by the provided message ID.
         * @private
         * @param {?} element
         * @param {?} message
         * @return {?}
         */

      }, {
        key: "_isElementDescribedByMessage",
        value: function _isElementDescribedByMessage(element, message) {
          /** @type {?} */
          var referenceIds = getAriaReferenceIds(element, 'aria-describedby');
          /** @type {?} */

          var registeredMessage = messageRegistry.get(message);
          /** @type {?} */

          var messageId = registeredMessage && registeredMessage.messageElement.id;
          return !!messageId && referenceIds.indexOf(messageId) != -1;
        }
        /**
         * Determines whether a message can be described on a particular element.
         * @private
         * @param {?} element
         * @param {?} message
         * @return {?}
         */

      }, {
        key: "_canBeDescribed",
        value: function _canBeDescribed(element, message) {
          if (!this._isElementNode(element)) {
            return false;
          }

          if (message && typeof message === 'object') {
            // We'd have to make some assumptions about the description element's text, if the consumer
            // passed in an element. Assume that if an element is passed in, the consumer has verified
            // that it can be used as a description.
            return true;
          }
          /** @type {?} */


          var trimmedMessage = message == null ? '' : "".concat(message).trim();
          /** @type {?} */

          var ariaLabel = element.getAttribute('aria-label'); // We shouldn't set descriptions if they're exactly the same as the `aria-label` of the
          // element, because screen readers will end up reading out the same text twice in a row.

          return trimmedMessage ? !ariaLabel || ariaLabel.trim() !== trimmedMessage : false;
        }
        /**
         * Checks whether a node is an Element node.
         * @private
         * @param {?} element
         * @return {?}
         */

      }, {
        key: "_isElementNode",
        value: function _isElementNode(element) {
          return element.nodeType === this._document.ELEMENT_NODE;
        }
      }]);

      return AriaDescriber;
    }();

    AriaDescriber.ɵfac = function AriaDescriber_Factory(t) {
      return new (t || AriaDescriber)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]));
    };
    /** @nocollapse */


    AriaDescriber.ctorParameters = function () {
      return [{
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]]
        }]
      }];
    };
    /** @nocollapse */


    AriaDescriber.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
      factory: function AriaDescriber_Factory() {
        return new AriaDescriber(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]));
      },
      token: AriaDescriber,
      providedIn: "root"
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AriaDescriber, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]]
          }]
        }];
      }, null);
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/a11y/key-manager/list-key-manager.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * This interface is for items that can be passed to a ListKeyManager.
     * @record
     */


    function ListKeyManagerOption() {}

    if (false) {}
    /**
     * This class manages keyboard events for selectable lists. If you pass it a query list
     * of items, it will set the active item correctly when arrow events occur.
     * @template T
     */


    var ListKeyManager = /*#__PURE__*/function () {
      /**
       * @param {?} _items
       */
      function ListKeyManager(_items) {
        var _this = this;

        _classCallCheck(this, ListKeyManager);

        this._items = _items;
        this._activeItemIndex = -1;
        this._activeItem = null;
        this._wrap = false;
        this._letterKeyStream = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this._typeaheadSubscription = rxjs__WEBPACK_IMPORTED_MODULE_2__["Subscription"].EMPTY;
        this._vertical = true;
        this._allowedModifierKeys = [];
        /**
         * Predicate function that can be used to check whether an item should be skipped
         * by the key manager. By default, disabled items are skipped.
         */

        this._skipPredicateFn =
        /**
        * @param {?} item
        * @return {?}
        */
        function (item) {
          return item.disabled;
        }; // Buffer for the letters that the user has pressed when the typeahead option is turned on.


        this._pressedLetters = [];
        /**
         * Stream that emits any time the TAB key is pressed, so components can react
         * when focus is shifted off of the list.
         */

        this.tabOut = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Stream that emits whenever the active item of the list manager changes.
         */

        this.change = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"](); // We allow for the items to be an array because, in some cases, the consumer may
        // not have access to a QueryList of the items they want to manage (e.g. when the
        // items aren't being collected via `ViewChildren` or `ContentChildren`).

        if (_items instanceof _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"]) {
          _items.changes.subscribe(
          /**
          * @param {?} newItems
          * @return {?}
          */
          function (newItems) {
            if (_this._activeItem) {
              /** @type {?} */
              var itemArray = newItems.toArray();
              /** @type {?} */

              var newIndex = itemArray.indexOf(_this._activeItem);

              if (newIndex > -1 && newIndex !== _this._activeItemIndex) {
                _this._activeItemIndex = newIndex;
              }
            }
          });
        }
      }
      /**
       * Sets the predicate function that determines which items should be skipped by the
       * list key manager.
       * @template THIS
       * @this {THIS}
       * @param {?} predicate Function that determines whether the given item should be skipped.
       * @return {THIS}
       */


      _createClass(ListKeyManager, [{
        key: "skipPredicate",
        value: function skipPredicate(predicate) {
          /** @type {?} */
          this._skipPredicateFn = predicate;
          return (
            /** @type {?} */
            this
          );
        }
        /**
         * Configures wrapping mode, which determines whether the active item will wrap to
         * the other end of list when there are no more items in the given direction.
         * @template THIS
         * @this {THIS}
         * @param {?=} shouldWrap Whether the list should wrap when reaching the end.
         * @return {THIS}
         */

      }, {
        key: "withWrap",
        value: function withWrap() {
          var shouldWrap = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

          /** @type {?} */
          this._wrap = shouldWrap;
          return (
            /** @type {?} */
            this
          );
        }
        /**
         * Configures whether the key manager should be able to move the selection vertically.
         * @template THIS
         * @this {THIS}
         * @param {?=} enabled Whether vertical selection should be enabled.
         * @return {THIS}
         */

      }, {
        key: "withVerticalOrientation",
        value: function withVerticalOrientation() {
          var enabled = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

          /** @type {?} */
          this._vertical = enabled;
          return (
            /** @type {?} */
            this
          );
        }
        /**
         * Configures the key manager to move the selection horizontally.
         * Passing in `null` will disable horizontal movement.
         * @template THIS
         * @this {THIS}
         * @param {?} direction Direction in which the selection can be moved.
         * @return {THIS}
         */

      }, {
        key: "withHorizontalOrientation",
        value: function withHorizontalOrientation(direction) {
          /** @type {?} */
          this._horizontal = direction;
          return (
            /** @type {?} */
            this
          );
        }
        /**
         * Modifier keys which are allowed to be held down and whose default actions will be prevented
         * as the user is pressing the arrow keys. Defaults to not allowing any modifier keys.
         * @template THIS
         * @this {THIS}
         * @param {?} keys
         * @return {THIS}
         */

      }, {
        key: "withAllowedModifierKeys",
        value: function withAllowedModifierKeys(keys) {
          /** @type {?} */
          this._allowedModifierKeys = keys;
          return (
            /** @type {?} */
            this
          );
        }
        /**
         * Turns on typeahead mode which allows users to set the active item by typing.
         * @template THIS
         * @this {THIS}
         * @param {?=} debounceInterval Time to wait after the last keystroke before setting the active item.
         * @return {THIS}
         */

      }, {
        key: "withTypeAhead",
        value: function withTypeAhead() {
          var _this2 = this;

          var debounceInterval = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 200;

          if (
          /** @type {?} */
          this._items.length &&
          /** @type {?} */
          this._items.some(
          /**
          * @param {?} item
          * @return {?}
          */
          function (item) {
            return typeof item.getLabel !== 'function';
          })) {
            throw Error('ListKeyManager items in typeahead mode must implement the `getLabel` method.');
          }

          /** @type {?} */
          this._typeaheadSubscription.unsubscribe(); // Debounce the presses of non-navigational keys, collect the ones that correspond to letters
          // and convert those letters back into a string. Afterwards find the first item that starts
          // with that string and select it.


          /** @type {?} */
          this._typeaheadSubscription =
          /** @type {?} */
          this._letterKeyStream.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(
          /**
          * @param {?} letter
          * @return {?}
          */
          function (letter) {
            return (
              /** @type {?} */
              _this2._pressedLetters.push(letter)
            );
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(debounceInterval), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(
          /**
          * @return {?}
          */
          function () {
            return (
              /** @type {?} */
              _this2._pressedLetters.length > 0
            );
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(
          /**
          * @return {?}
          */
          function () {
            return (
              /** @type {?} */
              _this2._pressedLetters.join('')
            );
          })).subscribe(
          /**
          * @param {?} inputString
          * @return {?}
          */
          function (inputString) {
            /** @type {?} */
            var items =
            /** @type {?} */
            _this2._getItemsArray(); // Start at 1 because we want to start searching at the item immediately
            // following the current active item.


            for (var i = 1; i < items.length + 1; i++) {
              /** @type {?} */
              var index = (
              /** @type {?} */
              _this2._activeItemIndex + i) % items.length;
              /** @type {?} */

              var item = items[index];

              if (!
              /** @type {?} */
              _this2._skipPredicateFn(item) &&
              /** @type {?} */
              item.getLabel().toUpperCase().trim().indexOf(inputString) === 0) {
                /** @type {?} */
                _this2.setActiveItem(index);

                break;
              }
            }

            /** @type {?} */
            _this2._pressedLetters = [];
          });
          return (
            /** @type {?} */
            this
          );
        }
        /**
         * @param {?} item
         * @return {?}
         */

      }, {
        key: "setActiveItem",
        value: function setActiveItem(item) {
          /** @type {?} */
          var previousIndex = this._activeItemIndex;
          this.updateActiveItem(item);

          if (this._activeItemIndex !== previousIndex) {
            this.change.next(this._activeItemIndex);
          }
        }
        /**
         * Sets the active item depending on the key event passed in.
         * @param {?} event Keyboard event to be used for determining which element should be active.
         * @return {?}
         */

      }, {
        key: "onKeydown",
        value: function onKeydown(event) {
          var _this3 = this;

          /** @type {?} */
          var keyCode = event.keyCode;
          /** @type {?} */

          var modifiers = ['altKey', 'ctrlKey', 'metaKey', 'shiftKey'];
          /** @type {?} */

          var isModifierAllowed = modifiers.every(
          /**
          * @param {?} modifier
          * @return {?}
          */
          function (modifier) {
            return !event[modifier] || _this3._allowedModifierKeys.indexOf(modifier) > -1;
          });

          switch (keyCode) {
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["TAB"]:
              this.tabOut.next();
              return;

            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["DOWN_ARROW"]:
              if (this._vertical && isModifierAllowed) {
                this.setNextItemActive();
                break;
              } else {
                return;
              }

            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["UP_ARROW"]:
              if (this._vertical && isModifierAllowed) {
                this.setPreviousItemActive();
                break;
              } else {
                return;
              }

            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["RIGHT_ARROW"]:
              if (this._horizontal && isModifierAllowed) {
                this._horizontal === 'rtl' ? this.setPreviousItemActive() : this.setNextItemActive();
                break;
              } else {
                return;
              }

            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["LEFT_ARROW"]:
              if (this._horizontal && isModifierAllowed) {
                this._horizontal === 'rtl' ? this.setNextItemActive() : this.setPreviousItemActive();
                break;
              } else {
                return;
              }

            default:
              if (isModifierAllowed || Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["hasModifierKey"])(event, 'shiftKey')) {
                // Attempt to use the `event.key` which also maps it to the user's keyboard language,
                // otherwise fall back to resolving alphanumeric characters via the keyCode.
                if (event.key && event.key.length === 1) {
                  this._letterKeyStream.next(event.key.toLocaleUpperCase());
                } else if (keyCode >= _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["A"] && keyCode <= _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["Z"] || keyCode >= _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["ZERO"] && keyCode <= _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["NINE"]) {
                  this._letterKeyStream.next(String.fromCharCode(keyCode));
                }
              } // Note that we return here, in order to avoid preventing
              // the default action of non-navigational keys.


              return;
          }

          this._pressedLetters = [];
          event.preventDefault();
        }
        /**
         * Index of the currently active item.
         * @return {?}
         */

      }, {
        key: "isTyping",

        /**
         * Gets whether the user is currently typing into the manager using the typeahead feature.
         * @return {?}
         */
        value: function isTyping() {
          return this._pressedLetters.length > 0;
        }
        /**
         * Sets the active item to the first enabled item in the list.
         * @return {?}
         */

      }, {
        key: "setFirstItemActive",
        value: function setFirstItemActive() {
          this._setActiveItemByIndex(0, 1);
        }
        /**
         * Sets the active item to the last enabled item in the list.
         * @return {?}
         */

      }, {
        key: "setLastItemActive",
        value: function setLastItemActive() {
          this._setActiveItemByIndex(this._items.length - 1, -1);
        }
        /**
         * Sets the active item to the next enabled item in the list.
         * @return {?}
         */

      }, {
        key: "setNextItemActive",
        value: function setNextItemActive() {
          this._activeItemIndex < 0 ? this.setFirstItemActive() : this._setActiveItemByDelta(1);
        }
        /**
         * Sets the active item to a previous enabled item in the list.
         * @return {?}
         */

      }, {
        key: "setPreviousItemActive",
        value: function setPreviousItemActive() {
          this._activeItemIndex < 0 && this._wrap ? this.setLastItemActive() : this._setActiveItemByDelta(-1);
        }
        /**
         * @param {?} item
         * @return {?}
         */

      }, {
        key: "updateActiveItem",
        value: function updateActiveItem(item) {
          /** @type {?} */
          var itemArray = this._getItemsArray();
          /** @type {?} */


          var index = typeof item === 'number' ? item : itemArray.indexOf(item);
          /** @type {?} */

          var activeItem = itemArray[index]; // Explicitly check for `null` and `undefined` because other falsy values are valid.

          this._activeItem = activeItem == null ? null : activeItem;
          this._activeItemIndex = index;
        }
        /**
         * This method sets the active item, given a list of items and the delta between the
         * currently active item and the new active item. It will calculate differently
         * depending on whether wrap mode is turned on.
         * @private
         * @param {?} delta
         * @return {?}
         */

      }, {
        key: "_setActiveItemByDelta",
        value: function _setActiveItemByDelta(delta) {
          this._wrap ? this._setActiveInWrapMode(delta) : this._setActiveInDefaultMode(delta);
        }
        /**
         * Sets the active item properly given "wrap" mode. In other words, it will continue to move
         * down the list until it finds an item that is not disabled, and it will wrap if it
         * encounters either end of the list.
         * @private
         * @param {?} delta
         * @return {?}
         */

      }, {
        key: "_setActiveInWrapMode",
        value: function _setActiveInWrapMode(delta) {
          /** @type {?} */
          var items = this._getItemsArray();

          for (var i = 1; i <= items.length; i++) {
            /** @type {?} */
            var index = (this._activeItemIndex + delta * i + items.length) % items.length;
            /** @type {?} */

            var item = items[index];

            if (!this._skipPredicateFn(item)) {
              this.setActiveItem(index);
              return;
            }
          }
        }
        /**
         * Sets the active item properly given the default mode. In other words, it will
         * continue to move down the list until it finds an item that is not disabled. If
         * it encounters either end of the list, it will stop and not wrap.
         * @private
         * @param {?} delta
         * @return {?}
         */

      }, {
        key: "_setActiveInDefaultMode",
        value: function _setActiveInDefaultMode(delta) {
          this._setActiveItemByIndex(this._activeItemIndex + delta, delta);
        }
        /**
         * Sets the active item to the first enabled item starting at the index specified. If the
         * item is disabled, it will move in the fallbackDelta direction until it either
         * finds an enabled item or encounters the end of the list.
         * @private
         * @param {?} index
         * @param {?} fallbackDelta
         * @return {?}
         */

      }, {
        key: "_setActiveItemByIndex",
        value: function _setActiveItemByIndex(index, fallbackDelta) {
          /** @type {?} */
          var items = this._getItemsArray();

          if (!items[index]) {
            return;
          }

          while (this._skipPredicateFn(items[index])) {
            index += fallbackDelta;

            if (!items[index]) {
              return;
            }
          }

          this.setActiveItem(index);
        }
        /**
         * Returns the items as an array.
         * @private
         * @return {?}
         */

      }, {
        key: "_getItemsArray",
        value: function _getItemsArray() {
          return this._items instanceof _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"] ? this._items.toArray() : this._items;
        }
      }, {
        key: "activeItemIndex",
        get: function get() {
          return this._activeItemIndex;
        }
        /**
         * The active item.
         * @return {?}
         */

      }, {
        key: "activeItem",
        get: function get() {
          return this._activeItem;
        }
      }]);

      return ListKeyManager;
    }();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/a11y/key-manager/activedescendant-key-manager.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * This is the interface for highlightable items (used by the ActiveDescendantKeyManager).
     * Each item must know how to style itself as active or inactive and whether or not it is
     * currently disabled.
     * @record
     */


    function Highlightable() {}

    if (false) {}
    /**
     * @template T
     */


    var ActiveDescendantKeyManager = /*#__PURE__*/function (_ListKeyManager) {
      _inherits(ActiveDescendantKeyManager, _ListKeyManager);

      var _super = _createSuper(ActiveDescendantKeyManager);

      function ActiveDescendantKeyManager() {
        _classCallCheck(this, ActiveDescendantKeyManager);

        return _super.apply(this, arguments);
      }

      _createClass(ActiveDescendantKeyManager, [{
        key: "setActiveItem",

        /**
         * @param {?} index
         * @return {?}
         */
        value: function setActiveItem(index) {
          if (this.activeItem) {
            this.activeItem.setInactiveStyles();
          }

          _get(_getPrototypeOf(ActiveDescendantKeyManager.prototype), "setActiveItem", this).call(this, index);

          if (this.activeItem) {
            this.activeItem.setActiveStyles();
          }
        }
      }]);

      return ActiveDescendantKeyManager;
    }(ListKeyManager);
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/a11y/key-manager/focus-key-manager.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * This is the interface for focusable items (used by the FocusKeyManager).
     * Each item must know how to focus itself, whether or not it is currently disabled
     * and be able to supply its label.
     * @record
     */


    function FocusableOption() {}

    if (false) {}
    /**
     * @template T
     */


    var FocusKeyManager = /*#__PURE__*/function (_ListKeyManager2) {
      _inherits(FocusKeyManager, _ListKeyManager2);

      var _super2 = _createSuper(FocusKeyManager);

      function FocusKeyManager() {
        var _this4;

        _classCallCheck(this, FocusKeyManager);

        _this4 = _super2.apply(this, arguments);
        _this4._origin = 'program';
        return _this4;
      }
      /**
       * Sets the focus origin that will be passed in to the items for any subsequent `focus` calls.
       * @template THIS
       * @this {THIS}
       * @param {?} origin Focus origin to be used when focusing items.
       * @return {THIS}
       */


      _createClass(FocusKeyManager, [{
        key: "setFocusOrigin",
        value: function setFocusOrigin(origin) {
          /** @type {?} */
          this._origin = origin;
          return (
            /** @type {?} */
            this
          );
        }
        /**
         * @param {?} item
         * @return {?}
         */

      }, {
        key: "setActiveItem",
        value: function setActiveItem(item) {
          _get(_getPrototypeOf(FocusKeyManager.prototype), "setActiveItem", this).call(this, item);

          if (this.activeItem) {
            this.activeItem.focus(this._origin);
          }
        }
      }]);

      return FocusKeyManager;
    }(ListKeyManager);

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/a11y/interactivity-checker/interactivity-checker.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // The InteractivityChecker leans heavily on the ally.js accessibility utilities.
    // Methods like `isTabbable` are only covering specific edge-cases for the browsers which are
    // supported.

    /**
     * Utility for checking the interactivity of an element, such as whether is is focusable or
     * tabbable.
     */


    var InteractivityChecker = /*#__PURE__*/function () {
      /**
       * @param {?} _platform
       */
      function InteractivityChecker(_platform) {
        _classCallCheck(this, InteractivityChecker);

        this._platform = _platform;
      }
      /**
       * Gets whether an element is disabled.
       *
       * @param {?} element Element to be checked.
       * @return {?} Whether the element is disabled.
       */


      _createClass(InteractivityChecker, [{
        key: "isDisabled",
        value: function isDisabled(element) {
          // This does not capture some cases, such as a non-form control with a disabled attribute or
          // a form control inside of a disabled form, but should capture the most common cases.
          return element.hasAttribute('disabled');
        }
        /**
         * Gets whether an element is visible for the purposes of interactivity.
         *
         * This will capture states like `display: none` and `visibility: hidden`, but not things like
         * being clipped by an `overflow: hidden` parent or being outside the viewport.
         *
         * @param {?} element
         * @return {?} Whether the element is visible.
         */

      }, {
        key: "isVisible",
        value: function isVisible(element) {
          return hasGeometry(element) && getComputedStyle(element).visibility === 'visible';
        }
        /**
         * Gets whether an element can be reached via Tab key.
         * Assumes that the element has already been checked with isFocusable.
         *
         * @param {?} element Element to be checked.
         * @return {?} Whether the element is tabbable.
         */

      }, {
        key: "isTabbable",
        value: function isTabbable(element) {
          // Nothing is tabbable on the server 😎
          if (!this._platform.isBrowser) {
            return false;
          }
          /** @type {?} */


          var frameElement = getFrameElement(getWindow(element));

          if (frameElement) {
            /** @type {?} */
            var frameType = frameElement && frameElement.nodeName.toLowerCase(); // Frame elements inherit their tabindex onto all child elements.

            if (getTabIndexValue(frameElement) === -1) {
              return false;
            } // Webkit and Blink consider anything inside of an <object> element as non-tabbable.


            if ((this._platform.BLINK || this._platform.WEBKIT) && frameType === 'object') {
              return false;
            } // Webkit and Blink disable tabbing to an element inside of an invisible frame.


            if ((this._platform.BLINK || this._platform.WEBKIT) && !this.isVisible(frameElement)) {
              return false;
            }
          }
          /** @type {?} */


          var nodeName = element.nodeName.toLowerCase();
          /** @type {?} */

          var tabIndexValue = getTabIndexValue(element);

          if (element.hasAttribute('contenteditable')) {
            return tabIndexValue !== -1;
          }

          if (nodeName === 'iframe') {
            // The frames may be tabbable depending on content, but it's not possibly to reliably
            // investigate the content of the frames.
            return false;
          }

          if (nodeName === 'audio') {
            if (!element.hasAttribute('controls')) {
              // By default an <audio> element without the controls enabled is not tabbable.
              return false;
            } else if (this._platform.BLINK) {
              // In Blink <audio controls> elements are always tabbable.
              return true;
            }
          }

          if (nodeName === 'video') {
            if (!element.hasAttribute('controls') && this._platform.TRIDENT) {
              // In Trident a <video> element without the controls enabled is not tabbable.
              return false;
            } else if (this._platform.BLINK || this._platform.FIREFOX) {
              // In Chrome and Firefox <video controls> elements are always tabbable.
              return true;
            }
          }

          if (nodeName === 'object' && (this._platform.BLINK || this._platform.WEBKIT)) {
            // In all Blink and WebKit based browsers <object> elements are never tabbable.
            return false;
          } // In iOS the browser only considers some specific elements as tabbable.


          if (this._platform.WEBKIT && this._platform.IOS && !isPotentiallyTabbableIOS(element)) {
            return false;
          }

          return element.tabIndex >= 0;
        }
        /**
         * Gets whether an element can be focused by the user.
         *
         * @param {?} element Element to be checked.
         * @return {?} Whether the element is focusable.
         */

      }, {
        key: "isFocusable",
        value: function isFocusable(element) {
          // Perform checks in order of left to most expensive.
          // Again, naive approach that does not capture many edge cases and browser quirks.
          return isPotentiallyFocusable(element) && !this.isDisabled(element) && this.isVisible(element);
        }
      }]);

      return InteractivityChecker;
    }();

    InteractivityChecker.ɵfac = function InteractivityChecker_Factory(t) {
      return new (t || InteractivityChecker)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["Platform"]));
    };
    /** @nocollapse */


    InteractivityChecker.ctorParameters = function () {
      return [{
        type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["Platform"]
      }];
    };
    /** @nocollapse */


    InteractivityChecker.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
      factory: function InteractivityChecker_Factory() {
        return new InteractivityChecker(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["Platform"]));
      },
      token: InteractivityChecker,
      providedIn: "root"
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](InteractivityChecker, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["Platform"]
        }];
      }, null);
    })();

    if (false) {}
    /**
     * Returns the frame element from a window object. Since browsers like MS Edge throw errors if
     * the frameElement property is being accessed from a different host address, this property
     * should be accessed carefully.
     * @param {?} window
     * @return {?}
     */


    function getFrameElement(window) {
      try {
        return (
          /** @type {?} */
          window.frameElement
        );
      } catch (_a) {
        return null;
      }
    }
    /**
     * Checks whether the specified element has any geometry / rectangles.
     * @param {?} element
     * @return {?}
     */


    function hasGeometry(element) {
      // Use logic from jQuery to check for an invisible element.
      // See https://github.com/jquery/jquery/blob/master/src/css/hiddenVisibleSelectors.js#L12
      return !!(element.offsetWidth || element.offsetHeight || typeof element.getClientRects === 'function' && element.getClientRects().length);
    }
    /**
     * Gets whether an element's
     * @param {?} element
     * @return {?}
     */


    function isNativeFormElement(element) {
      /** @type {?} */
      var nodeName = element.nodeName.toLowerCase();
      return nodeName === 'input' || nodeName === 'select' || nodeName === 'button' || nodeName === 'textarea';
    }
    /**
     * Gets whether an element is an `<input type="hidden">`.
     * @param {?} element
     * @return {?}
     */


    function isHiddenInput(element) {
      return isInputElement(element) && element.type == 'hidden';
    }
    /**
     * Gets whether an element is an anchor that has an href attribute.
     * @param {?} element
     * @return {?}
     */


    function isAnchorWithHref(element) {
      return isAnchorElement(element) && element.hasAttribute('href');
    }
    /**
     * Gets whether an element is an input element.
     * @param {?} element
     * @return {?}
     */


    function isInputElement(element) {
      return element.nodeName.toLowerCase() == 'input';
    }
    /**
     * Gets whether an element is an anchor element.
     * @param {?} element
     * @return {?}
     */


    function isAnchorElement(element) {
      return element.nodeName.toLowerCase() == 'a';
    }
    /**
     * Gets whether an element has a valid tabindex.
     * @param {?} element
     * @return {?}
     */


    function hasValidTabIndex(element) {
      if (!element.hasAttribute('tabindex') || element.tabIndex === undefined) {
        return false;
      }
      /** @type {?} */


      var tabIndex = element.getAttribute('tabindex'); // IE11 parses tabindex="" as the value "-32768"

      if (tabIndex == '-32768') {
        return false;
      }

      return !!(tabIndex && !isNaN(parseInt(tabIndex, 10)));
    }
    /**
     * Returns the parsed tabindex from the element attributes instead of returning the
     * evaluated tabindex from the browsers defaults.
     * @param {?} element
     * @return {?}
     */


    function getTabIndexValue(element) {
      if (!hasValidTabIndex(element)) {
        return null;
      } // See browser issue in Gecko https://bugzilla.mozilla.org/show_bug.cgi?id=1128054

      /** @type {?} */


      var tabIndex = parseInt(element.getAttribute('tabindex') || '', 10);
      return isNaN(tabIndex) ? -1 : tabIndex;
    }
    /**
     * Checks whether the specified element is potentially tabbable on iOS
     * @param {?} element
     * @return {?}
     */


    function isPotentiallyTabbableIOS(element) {
      /** @type {?} */
      var nodeName = element.nodeName.toLowerCase();
      /** @type {?} */

      var inputType = nodeName === 'input' &&
      /** @type {?} */
      element.type;
      return inputType === 'text' || inputType === 'password' || nodeName === 'select' || nodeName === 'textarea';
    }
    /**
     * Gets whether an element is potentially focusable without taking current visible/disabled state
     * into account.
     * @param {?} element
     * @return {?}
     */


    function isPotentiallyFocusable(element) {
      // Inputs are potentially focusable *unless* they're type="hidden".
      if (isHiddenInput(element)) {
        return false;
      }

      return isNativeFormElement(element) || isAnchorWithHref(element) || element.hasAttribute('contenteditable') || hasValidTabIndex(element);
    }
    /**
     * Gets the parent window of a DOM node with regards of being inside of an iframe.
     * @param {?} node
     * @return {?}
     */


    function getWindow(node) {
      // ownerDocument is null if `node` itself *is* a document.
      return node.ownerDocument && node.ownerDocument.defaultView || window;
    }
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/a11y/focus-trap/focus-trap.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Class that allows for trapping focus within a DOM element.
     *
     * This class currently uses a relatively simple approach to focus trapping.
     * It assumes that the tab order is the same as DOM order, which is not necessarily true.
     * Things like `tabIndex > 0`, flex `order`, and shadow roots can cause to two to misalign.
     *
     * @deprecated Use `ConfigurableFocusTrap` instead.
     * \@breaking-change for 11.0.0 Remove this class.
     */


    var FocusTrap = /*#__PURE__*/function () {
      /**
       * @param {?} _element
       * @param {?} _checker
       * @param {?} _ngZone
       * @param {?} _document
       * @param {?=} deferAnchors
       */
      function FocusTrap(_element, _checker, _ngZone, _document) {
        var _this5 = this;

        var deferAnchors = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

        _classCallCheck(this, FocusTrap);

        this._element = _element;
        this._checker = _checker;
        this._ngZone = _ngZone;
        this._document = _document;
        this._hasAttached = false; // Event listeners for the anchors. Need to be regular functions so that we can unbind them later.

        this.startAnchorListener =
        /**
        * @return {?}
        */
        function () {
          return _this5.focusLastTabbableElement();
        };

        this.endAnchorListener =
        /**
        * @return {?}
        */
        function () {
          return _this5.focusFirstTabbableElement();
        };

        this._enabled = true;

        if (!deferAnchors) {
          this.attachAnchors();
        }
      }
      /**
       * Whether the focus trap is active.
       * @return {?}
       */


      _createClass(FocusTrap, [{
        key: "destroy",

        /**
         * Destroys the focus trap by cleaning up the anchors.
         * @return {?}
         */
        value: function destroy() {
          /** @type {?} */
          var startAnchor = this._startAnchor;
          /** @type {?} */

          var endAnchor = this._endAnchor;

          if (startAnchor) {
            startAnchor.removeEventListener('focus', this.startAnchorListener);

            if (startAnchor.parentNode) {
              startAnchor.parentNode.removeChild(startAnchor);
            }
          }

          if (endAnchor) {
            endAnchor.removeEventListener('focus', this.endAnchorListener);

            if (endAnchor.parentNode) {
              endAnchor.parentNode.removeChild(endAnchor);
            }
          }

          this._startAnchor = this._endAnchor = null;
        }
        /**
         * Inserts the anchors into the DOM. This is usually done automatically
         * in the constructor, but can be deferred for cases like directives with `*ngIf`.
         * @return {?} Whether the focus trap managed to attach successfuly. This may not be the case
         * if the target element isn't currently in the DOM.
         */

      }, {
        key: "attachAnchors",
        value: function attachAnchors() {
          var _this6 = this;

          // If we're not on the browser, there can be no focus to trap.
          if (this._hasAttached) {
            return true;
          }

          this._ngZone.runOutsideAngular(
          /**
          * @return {?}
          */
          function () {
            if (!_this6._startAnchor) {
              _this6._startAnchor = _this6._createAnchor();

              /** @type {?} */
              _this6._startAnchor.addEventListener('focus', _this6.startAnchorListener);
            }

            if (!_this6._endAnchor) {
              _this6._endAnchor = _this6._createAnchor();

              /** @type {?} */
              _this6._endAnchor.addEventListener('focus', _this6.endAnchorListener);
            }
          });

          if (this._element.parentNode) {
            this._element.parentNode.insertBefore(
            /** @type {?} */
            this._startAnchor, this._element);

            this._element.parentNode.insertBefore(
            /** @type {?} */
            this._endAnchor, this._element.nextSibling);

            this._hasAttached = true;
          }

          return this._hasAttached;
        }
        /**
         * Waits for the zone to stabilize, then either focuses the first element that the
         * user specified, or the first tabbable element.
         * @return {?} Returns a promise that resolves with a boolean, depending
         * on whether focus was moved successfuly.
         */

      }, {
        key: "focusInitialElementWhenReady",
        value: function focusInitialElementWhenReady() {
          var _this7 = this;

          return new Promise(
          /**
          * @param {?} resolve
          * @return {?}
          */
          function (resolve) {
            _this7._executeOnStable(
            /**
            * @return {?}
            */
            function () {
              return resolve(_this7.focusInitialElement());
            });
          });
        }
        /**
         * Waits for the zone to stabilize, then focuses
         * the first tabbable element within the focus trap region.
         * @return {?} Returns a promise that resolves with a boolean, depending
         * on whether focus was moved successfuly.
         */

      }, {
        key: "focusFirstTabbableElementWhenReady",
        value: function focusFirstTabbableElementWhenReady() {
          var _this8 = this;

          return new Promise(
          /**
          * @param {?} resolve
          * @return {?}
          */
          function (resolve) {
            _this8._executeOnStable(
            /**
            * @return {?}
            */
            function () {
              return resolve(_this8.focusFirstTabbableElement());
            });
          });
        }
        /**
         * Waits for the zone to stabilize, then focuses
         * the last tabbable element within the focus trap region.
         * @return {?} Returns a promise that resolves with a boolean, depending
         * on whether focus was moved successfuly.
         */

      }, {
        key: "focusLastTabbableElementWhenReady",
        value: function focusLastTabbableElementWhenReady() {
          var _this9 = this;

          return new Promise(
          /**
          * @param {?} resolve
          * @return {?}
          */
          function (resolve) {
            _this9._executeOnStable(
            /**
            * @return {?}
            */
            function () {
              return resolve(_this9.focusLastTabbableElement());
            });
          });
        }
        /**
         * Get the specified boundary element of the trapped region.
         * @private
         * @param {?} bound The boundary to get (start or end of trapped region).
         * @return {?} The boundary element.
         */

      }, {
        key: "_getRegionBoundary",
        value: function _getRegionBoundary(bound) {
          // Contains the deprecated version of selector, for temporary backwards comparability.

          /** @type {?} */
          var markers =
          /** @type {?} */
          this._element.querySelectorAll("[cdk-focus-region-".concat(bound, "], ") + "[cdkFocusRegion".concat(bound, "], ") + "[cdk-focus-".concat(bound, "]"));

          for (var i = 0; i < markers.length; i++) {
            // @breaking-change 8.0.0
            if (markers[i].hasAttribute("cdk-focus-".concat(bound))) {
              console.warn("Found use of deprecated attribute 'cdk-focus-".concat(bound, "', ") + "use 'cdkFocusRegion".concat(bound, "' instead. The deprecated ") + "attribute will be removed in 8.0.0.", markers[i]);
            } else if (markers[i].hasAttribute("cdk-focus-region-".concat(bound))) {
              console.warn("Found use of deprecated attribute 'cdk-focus-region-".concat(bound, "', ") + "use 'cdkFocusRegion".concat(bound, "' instead. The deprecated attribute ") + "will be removed in 8.0.0.", markers[i]);
            }
          }

          if (bound == 'start') {
            return markers.length ? markers[0] : this._getFirstTabbableElement(this._element);
          }

          return markers.length ? markers[markers.length - 1] : this._getLastTabbableElement(this._element);
        }
        /**
         * Focuses the element that should be focused when the focus trap is initialized.
         * @return {?} Whether focus was moved successfuly.
         */

      }, {
        key: "focusInitialElement",
        value: function focusInitialElement() {
          // Contains the deprecated version of selector, for temporary backwards comparability.

          /** @type {?} */
          var redirectToElement =
          /** @type {?} */
          this._element.querySelector("[cdk-focus-initial], " + "[cdkFocusInitial]");

          if (redirectToElement) {
            // @breaking-change 8.0.0
            if (redirectToElement.hasAttribute("cdk-focus-initial")) {
              console.warn("Found use of deprecated attribute 'cdk-focus-initial', " + "use 'cdkFocusInitial' instead. The deprecated attribute " + "will be removed in 8.0.0", redirectToElement);
            } // Warn the consumer if the element they've pointed to
            // isn't focusable, when not in production mode.


            if (Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["isDevMode"])() && !this._checker.isFocusable(redirectToElement)) {
              console.warn("Element matching '[cdkFocusInitial]' is not focusable.", redirectToElement);
            }

            redirectToElement.focus();
            return true;
          }

          return this.focusFirstTabbableElement();
        }
        /**
         * Focuses the first tabbable element within the focus trap region.
         * @return {?} Whether focus was moved successfuly.
         */

      }, {
        key: "focusFirstTabbableElement",
        value: function focusFirstTabbableElement() {
          /** @type {?} */
          var redirectToElement = this._getRegionBoundary('start');

          if (redirectToElement) {
            redirectToElement.focus();
          }

          return !!redirectToElement;
        }
        /**
         * Focuses the last tabbable element within the focus trap region.
         * @return {?} Whether focus was moved successfuly.
         */

      }, {
        key: "focusLastTabbableElement",
        value: function focusLastTabbableElement() {
          /** @type {?} */
          var redirectToElement = this._getRegionBoundary('end');

          if (redirectToElement) {
            redirectToElement.focus();
          }

          return !!redirectToElement;
        }
        /**
         * Checks whether the focus trap has successfuly been attached.
         * @return {?}
         */

      }, {
        key: "hasAttached",
        value: function hasAttached() {
          return this._hasAttached;
        }
        /**
         * Get the first tabbable element from a DOM subtree (inclusive).
         * @private
         * @param {?} root
         * @return {?}
         */

      }, {
        key: "_getFirstTabbableElement",
        value: function _getFirstTabbableElement(root) {
          if (this._checker.isFocusable(root) && this._checker.isTabbable(root)) {
            return root;
          } // Iterate in DOM order. Note that IE doesn't have `children` for SVG so we fall
          // back to `childNodes` which includes text nodes, comments etc.

          /** @type {?} */


          var children = root.children || root.childNodes;

          for (var i = 0; i < children.length; i++) {
            /** @type {?} */
            var tabbableChild = children[i].nodeType === this._document.ELEMENT_NODE ? this._getFirstTabbableElement(
            /** @type {?} */
            children[i]) : null;

            if (tabbableChild) {
              return tabbableChild;
            }
          }

          return null;
        }
        /**
         * Get the last tabbable element from a DOM subtree (inclusive).
         * @private
         * @param {?} root
         * @return {?}
         */

      }, {
        key: "_getLastTabbableElement",
        value: function _getLastTabbableElement(root) {
          if (this._checker.isFocusable(root) && this._checker.isTabbable(root)) {
            return root;
          } // Iterate in reverse DOM order.

          /** @type {?} */


          var children = root.children || root.childNodes;

          for (var i = children.length - 1; i >= 0; i--) {
            /** @type {?} */
            var tabbableChild = children[i].nodeType === this._document.ELEMENT_NODE ? this._getLastTabbableElement(
            /** @type {?} */
            children[i]) : null;

            if (tabbableChild) {
              return tabbableChild;
            }
          }

          return null;
        }
        /**
         * Creates an anchor element.
         * @private
         * @return {?}
         */

      }, {
        key: "_createAnchor",
        value: function _createAnchor() {
          /** @type {?} */
          var anchor = this._document.createElement('div');

          this._toggleAnchorTabIndex(this._enabled, anchor);

          anchor.classList.add('cdk-visually-hidden');
          anchor.classList.add('cdk-focus-trap-anchor');
          anchor.setAttribute('aria-hidden', 'true');
          return anchor;
        }
        /**
         * Toggles the `tabindex` of an anchor, based on the enabled state of the focus trap.
         * @private
         * @param {?} isEnabled Whether the focus trap is enabled.
         * @param {?} anchor Anchor on which to toggle the tabindex.
         * @return {?}
         */

      }, {
        key: "_toggleAnchorTabIndex",
        value: function _toggleAnchorTabIndex(isEnabled, anchor) {
          // Remove the tabindex completely, rather than setting it to -1, because if the
          // element has a tabindex, the user might still hit it when navigating with the arrow keys.
          isEnabled ? anchor.setAttribute('tabindex', '0') : anchor.removeAttribute('tabindex');
        }
        /**
         * Toggles the`tabindex` of both anchors to either trap Tab focus or allow it to escape.
         * @protected
         * @param {?} enabled
         * @return {?}
         */

      }, {
        key: "toggleAnchors",
        value: function toggleAnchors(enabled) {
          if (this._startAnchor && this._endAnchor) {
            this._toggleAnchorTabIndex(enabled, this._startAnchor);

            this._toggleAnchorTabIndex(enabled, this._endAnchor);
          }
        }
        /**
         * Executes a function when the zone is stable.
         * @private
         * @param {?} fn
         * @return {?}
         */

      }, {
        key: "_executeOnStable",
        value: function _executeOnStable(fn) {
          if (this._ngZone.isStable) {
            fn();
          } else {
            this._ngZone.onStable.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1)).subscribe(fn);
          }
        }
      }, {
        key: "enabled",
        get: function get() {
          return this._enabled;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._enabled = value;

          if (this._startAnchor && this._endAnchor) {
            this._toggleAnchorTabIndex(value, this._startAnchor);

            this._toggleAnchorTabIndex(value, this._endAnchor);
          }
        }
      }]);

      return FocusTrap;
    }();

    if (false) {}
    /**
     * Factory that allows easy instantiation of focus traps.
     * @deprecated Use `ConfigurableFocusTrapFactory` instead.
     * \@breaking-change for 11.0.0 Remove this class.
     */


    var FocusTrapFactory = /*#__PURE__*/function () {
      /**
       * @param {?} _checker
       * @param {?} _ngZone
       * @param {?} _document
       */
      function FocusTrapFactory(_checker, _ngZone, _document) {
        _classCallCheck(this, FocusTrapFactory);

        this._checker = _checker;
        this._ngZone = _ngZone;
        this._document = _document;
      }
      /**
       * Creates a focus-trapped region around the given element.
       * @param {?} element The element around which focus will be trapped.
       * @param {?=} deferCaptureElements Defers the creation of focus-capturing elements to be done
       *     manually by the user.
       * @return {?} The created focus trap instance.
       */


      _createClass(FocusTrapFactory, [{
        key: "create",
        value: function create(element) {
          var deferCaptureElements = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
          return new FocusTrap(element, this._checker, this._ngZone, this._document, deferCaptureElements);
        }
      }]);

      return FocusTrapFactory;
    }();

    FocusTrapFactory.ɵfac = function FocusTrapFactory_Factory(t) {
      return new (t || FocusTrapFactory)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](InteractivityChecker), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]));
    };
    /** @nocollapse */


    FocusTrapFactory.ctorParameters = function () {
      return [{
        type: InteractivityChecker
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]]
        }]
      }];
    };
    /** @nocollapse */


    FocusTrapFactory.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
      factory: function FocusTrapFactory_Factory() {
        return new FocusTrapFactory(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(InteractivityChecker), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]));
      },
      token: FocusTrapFactory,
      providedIn: "root"
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FocusTrapFactory, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: InteractivityChecker
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]]
          }]
        }];
      }, null);
    })();

    if (false) {}
    /**
     * Directive for trapping focus within a region.
     */


    var CdkTrapFocus = /*#__PURE__*/function () {
      /**
       * @param {?} _elementRef
       * @param {?} _focusTrapFactory
       * @param {?} _document
       */
      function CdkTrapFocus(_elementRef, _focusTrapFactory, _document) {
        _classCallCheck(this, CdkTrapFocus);

        this._elementRef = _elementRef;
        this._focusTrapFactory = _focusTrapFactory;
        /**
         * Previously focused element to restore focus to upon destroy when using autoCapture.
         */

        this._previouslyFocusedElement = null;
        this._document = _document;
        this.focusTrap = this._focusTrapFactory.create(this._elementRef.nativeElement, true);
      }
      /**
       * Whether the focus trap is active.
       * @return {?}
       */


      _createClass(CdkTrapFocus, [{
        key: "ngOnDestroy",

        /**
         * @return {?}
         */
        value: function ngOnDestroy() {
          this.focusTrap.destroy(); // If we stored a previously focused element when using autoCapture, return focus to that
          // element now that the trapped region is being destroyed.

          if (this._previouslyFocusedElement) {
            this._previouslyFocusedElement.focus();

            this._previouslyFocusedElement = null;
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngAfterContentInit",
        value: function ngAfterContentInit() {
          this.focusTrap.attachAnchors();

          if (this.autoCapture) {
            this._previouslyFocusedElement =
            /** @type {?} */
            this._document.activeElement;
            this.focusTrap.focusInitialElementWhenReady();
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngDoCheck",
        value: function ngDoCheck() {
          if (!this.focusTrap.hasAttached()) {
            this.focusTrap.attachAnchors();
          }
        }
      }, {
        key: "enabled",
        get: function get() {
          return this.focusTrap.enabled;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this.focusTrap.enabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceBooleanProperty"])(value);
        }
        /**
         * Whether the directive should automatially move focus into the trapped region upon
         * initialization and return focus to the previous activeElement upon destruction.
         * @return {?}
         */

      }, {
        key: "autoCapture",
        get: function get() {
          return this._autoCapture;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._autoCapture = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceBooleanProperty"])(value);
        }
      }]);

      return CdkTrapFocus;
    }();

    CdkTrapFocus.ɵfac = function CdkTrapFocus_Factory(t) {
      return new (t || CdkTrapFocus)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](FocusTrapFactory), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]));
    };

    CdkTrapFocus.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: CdkTrapFocus,
      selectors: [["", "cdkTrapFocus", ""]],
      inputs: {
        enabled: ["cdkTrapFocus", "enabled"],
        autoCapture: ["cdkTrapFocusAutoCapture", "autoCapture"]
      },
      exportAs: ["cdkTrapFocus"]
    });
    /** @nocollapse */

    CdkTrapFocus.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }, {
        type: FocusTrapFactory
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]]
        }]
      }];
    };

    CdkTrapFocus.propDecorators = {
      enabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
        args: ['cdkTrapFocus']
      }],
      autoCapture: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
        args: ['cdkTrapFocusAutoCapture']
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CdkTrapFocus, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: '[cdkTrapFocus]',
          exportAs: 'cdkTrapFocus'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: FocusTrapFactory
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]]
          }]
        }];
      }, {
        enabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['cdkTrapFocus']
        }],
        autoCapture: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['cdkTrapFocusAutoCapture']
        }]
      });
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/a11y/focus-trap/configurable-focus-trap.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Class that allows for trapping focus within a DOM element.
     *
     * This class uses a strategy pattern that determines how it traps focus.
     * See FocusTrapInertStrategy.
     */


    var ConfigurableFocusTrap = /*#__PURE__*/function (_FocusTrap) {
      _inherits(ConfigurableFocusTrap, _FocusTrap);

      var _super3 = _createSuper(ConfigurableFocusTrap);

      /**
       * @param {?} _element
       * @param {?} _checker
       * @param {?} _ngZone
       * @param {?} _document
       * @param {?} _focusTrapManager
       * @param {?} _inertStrategy
       * @param {?} config
       */
      function ConfigurableFocusTrap(_element, _checker, _ngZone, _document, _focusTrapManager, _inertStrategy, config) {
        var _this10;

        _classCallCheck(this, ConfigurableFocusTrap);

        _this10 = _super3.call(this, _element, _checker, _ngZone, _document, config.defer);
        _this10._focusTrapManager = _focusTrapManager;
        _this10._inertStrategy = _inertStrategy;

        _this10._focusTrapManager.register(_assertThisInitialized(_this10));

        return _this10;
      }
      /**
       * Whether the FocusTrap is enabled.
       * @return {?}
       */


      _createClass(ConfigurableFocusTrap, [{
        key: "destroy",

        /**
         * Notifies the FocusTrapManager that this FocusTrap will be destroyed.
         * @return {?}
         */
        value: function destroy() {
          this._focusTrapManager.deregister(this);

          _get(_getPrototypeOf(ConfigurableFocusTrap.prototype), "destroy", this).call(this);
        }
        /**
         * \@docs-private Implemented as part of ManagedFocusTrap.
         * @return {?}
         */

      }, {
        key: "_enable",
        value: function _enable() {
          this._inertStrategy.preventFocus(this);

          this.toggleAnchors(true);
        }
        /**
         * \@docs-private Implemented as part of ManagedFocusTrap.
         * @return {?}
         */

      }, {
        key: "_disable",
        value: function _disable() {
          this._inertStrategy.allowFocus(this);

          this.toggleAnchors(false);
        }
      }, {
        key: "enabled",
        get: function get() {
          return this._enabled;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._enabled = value;

          if (this._enabled) {
            this._focusTrapManager.register(this);
          } else {
            this._focusTrapManager.deregister(this);
          }
        }
      }]);

      return ConfigurableFocusTrap;
    }(FocusTrap);

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/a11y/focus-trap/polyfill.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * IE 11 compatible closest implementation that is able to start from non-Element Nodes.
     * @param {?} element
     * @param {?} selector
     * @return {?}
     */


    function closest(element, selector) {
      if (!(element instanceof Node)) {
        return null;
      }
      /** @type {?} */


      var curr = element;

      while (curr != null && !(curr instanceof Element)) {
        curr = curr.parentNode;
      }

      return curr && (
      /** @type {?} */
      hasNativeClosest ? curr.closest(selector) : polyfillClosest(curr, selector));
    }
    /**
     * Polyfill for browsers without Element.closest.
     * @param {?} element
     * @param {?} selector
     * @return {?}
     */


    function polyfillClosest(element, selector) {
      /** @type {?} */
      var curr = element;

      while (curr != null && !(curr instanceof Element && matches(curr, selector))) {
        curr = curr.parentNode;
      }

      return (
        /** @type {?} */
        curr || null
      );
    }
    /** @type {?} */


    var hasNativeClosest = typeof Element != 'undefined' && !!Element.prototype.closest;
    /**
     * IE 11 compatible matches implementation.
     * @param {?} element
     * @param {?} selector
     * @return {?}
     */

    function matches(element, selector) {
      return element.matches ? element.matches(selector) :
      /** @type {?} */
      element['msMatchesSelector'](selector);
    }
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/a11y/focus-trap/event-listener-inert-strategy.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Lightweight FocusTrapInertStrategy that adds a document focus event
     * listener to redirect focus back inside the FocusTrap.
     */


    var EventListenerFocusTrapInertStrategy = /*#__PURE__*/function () {
      function EventListenerFocusTrapInertStrategy() {
        _classCallCheck(this, EventListenerFocusTrapInertStrategy);

        /**
         * Focus event handler.
         */
        this._listener = null;
      }
      /**
       * Adds a document event listener that keeps focus inside the FocusTrap.
       * @param {?} focusTrap
       * @return {?}
       */


      _createClass(EventListenerFocusTrapInertStrategy, [{
        key: "preventFocus",
        value: function preventFocus(focusTrap) {
          var _this11 = this;

          // Ensure there's only one listener per document
          if (this._listener) {
            focusTrap._document.removeEventListener('focus',
            /** @type {?} */
            this._listener, true);
          }

          this._listener =
          /**
          * @param {?} e
          * @return {?}
          */
          function (e) {
            return _this11._trapFocus(focusTrap, e);
          };

          focusTrap._ngZone.runOutsideAngular(
          /**
          * @return {?}
          */
          function () {
            focusTrap._document.addEventListener('focus',
            /** @type {?} */
            _this11._listener, true);
          });
        }
        /**
         * Removes the event listener added in preventFocus.
         * @param {?} focusTrap
         * @return {?}
         */

      }, {
        key: "allowFocus",
        value: function allowFocus(focusTrap) {
          if (!this._listener) {
            return;
          }

          focusTrap._document.removeEventListener('focus',
          /** @type {?} */
          this._listener, true);

          this._listener = null;
        }
        /**
         * Refocuses the first element in the FocusTrap if the focus event target was outside
         * the FocusTrap.
         *
         * This is an event listener callback. The event listener is added in runOutsideAngular,
         * so all this code runs outside Angular as well.
         * @private
         * @param {?} focusTrap
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "_trapFocus",
        value: function _trapFocus(focusTrap, event) {
          /** @type {?} */
          var target =
          /** @type {?} */
          event.target;
          /** @type {?} */

          var focusTrapRoot = focusTrap._element; // Don't refocus if target was in an overlay, because the overlay might be associated
          // with an element inside the FocusTrap, ex. mat-select.

          if (!focusTrapRoot.contains(target) && closest(target, 'div.cdk-overlay-pane') === null) {
            // Some legacy FocusTrap usages have logic that focuses some element on the page
            // just before FocusTrap is destroyed. For backwards compatibility, wait
            // to be sure FocusTrap is still enabled before refocusing.
            setTimeout(
            /**
            * @return {?}
            */
            function () {
              // Check whether focus wasn't put back into the focus trap while the timeout was pending.
              if (focusTrap.enabled && !focusTrapRoot.contains(focusTrap._document.activeElement)) {
                focusTrap.focusFirstTabbableElement();
              }
            });
          }
        }
      }]);

      return EventListenerFocusTrapInertStrategy;
    }();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/a11y/focus-trap/configurable-focus-trap-config.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * Configuration for creating a ConfigurableFocusTrap.
     */


    var ConfigurableFocusTrapConfig = function ConfigurableFocusTrapConfig() {
      _classCallCheck(this, ConfigurableFocusTrapConfig);

      /**
       * Whether to defer the creation of FocusTrap elements to be
       * done manually by the user. Default is to create them
       * automatically.
       */
      this.defer = false;
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/a11y/focus-trap/focus-trap-inert-strategy.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * The injection token used to specify the inert strategy.
     * @type {?}
     */


    var FOCUS_TRAP_INERT_STRATEGY = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('FOCUS_TRAP_INERT_STRATEGY');
    /**
     * A strategy that dictates how FocusTrap should prevent elements
     * outside of the FocusTrap from being focused.
     * @record
     */

    function FocusTrapInertStrategy() {}

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/a11y/focus-trap/focus-trap-manager.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * A FocusTrap managed by FocusTrapManager.
     * Implemented by ConfigurableFocusTrap to avoid circular dependency.
     * @record
     */


    function ManagedFocusTrap() {}

    if (false) {}
    /**
     * Injectable that ensures only the most recently enabled FocusTrap is active.
     */


    var FocusTrapManager = /*#__PURE__*/function () {
      function FocusTrapManager() {
        _classCallCheck(this, FocusTrapManager);

        // A stack of the FocusTraps on the page. Only the FocusTrap at the
        // top of the stack is active.
        this._focusTrapStack = [];
      }
      /**
       * Disables the FocusTrap at the top of the stack, and then pushes
       * the new FocusTrap onto the stack.
       * @param {?} focusTrap
       * @return {?}
       */


      _createClass(FocusTrapManager, [{
        key: "register",
        value: function register(focusTrap) {
          // Dedupe focusTraps that register multiple times.
          this._focusTrapStack = this._focusTrapStack.filter(
          /**
          * @param {?} ft
          * @return {?}
          */
          function (ft) {
            return ft !== focusTrap;
          });
          /** @type {?} */

          var stack = this._focusTrapStack;

          if (stack.length) {
            stack[stack.length - 1]._disable();
          }

          stack.push(focusTrap);

          focusTrap._enable();
        }
        /**
         * Removes the FocusTrap from the stack, and activates the
         * FocusTrap that is the new top of the stack.
         * @param {?} focusTrap
         * @return {?}
         */

      }, {
        key: "deregister",
        value: function deregister(focusTrap) {
          focusTrap._disable();
          /** @type {?} */


          var stack = this._focusTrapStack;
          /** @type {?} */

          var i = stack.indexOf(focusTrap);

          if (i !== -1) {
            stack.splice(i, 1);

            if (stack.length) {
              stack[stack.length - 1]._enable();
            }
          }
        }
      }]);

      return FocusTrapManager;
    }();

    FocusTrapManager.ɵfac = function FocusTrapManager_Factory(t) {
      return new (t || FocusTrapManager)();
    };
    /** @nocollapse */


    FocusTrapManager.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
      factory: function FocusTrapManager_Factory() {
        return new FocusTrapManager();
      },
      token: FocusTrapManager,
      providedIn: "root"
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FocusTrapManager, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/a11y/focus-trap/configurable-focus-trap-factory.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Factory that allows easy instantiation of configurable focus traps.
     */


    var ConfigurableFocusTrapFactory = /*#__PURE__*/function () {
      /**
       * @param {?} _checker
       * @param {?} _ngZone
       * @param {?} _focusTrapManager
       * @param {?} _document
       * @param {?=} _inertStrategy
       */
      function ConfigurableFocusTrapFactory(_checker, _ngZone, _focusTrapManager, _document, _inertStrategy) {
        _classCallCheck(this, ConfigurableFocusTrapFactory);

        this._checker = _checker;
        this._ngZone = _ngZone;
        this._focusTrapManager = _focusTrapManager;
        this._document = _document; // TODO split up the strategies into different modules, similar to DateAdapter.

        this._inertStrategy = _inertStrategy || new EventListenerFocusTrapInertStrategy();
      }
      /**
       * @param {?} element
       * @param {?=} config
       * @return {?}
       */


      _createClass(ConfigurableFocusTrapFactory, [{
        key: "create",
        value: function create(element) {
          var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new ConfigurableFocusTrapConfig();

          /** @type {?} */
          var configObject;

          if (typeof config === 'boolean') {
            configObject = new ConfigurableFocusTrapConfig();
            configObject.defer = config;
          } else {
            configObject = config;
          }

          return new ConfigurableFocusTrap(element, this._checker, this._ngZone, this._document, this._focusTrapManager, this._inertStrategy, configObject);
        }
      }]);

      return ConfigurableFocusTrapFactory;
    }();

    ConfigurableFocusTrapFactory.ɵfac = function ConfigurableFocusTrapFactory_Factory(t) {
      return new (t || ConfigurableFocusTrapFactory)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](InteractivityChecker), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](FocusTrapManager), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](FOCUS_TRAP_INERT_STRATEGY, 8));
    };
    /** @nocollapse */


    ConfigurableFocusTrapFactory.ctorParameters = function () {
      return [{
        type: InteractivityChecker
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }, {
        type: FocusTrapManager
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]]
        }]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [FOCUS_TRAP_INERT_STRATEGY]
        }]
      }];
    };
    /** @nocollapse */


    ConfigurableFocusTrapFactory.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
      factory: function ConfigurableFocusTrapFactory_Factory() {
        return new ConfigurableFocusTrapFactory(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(InteractivityChecker), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(FocusTrapManager), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(FOCUS_TRAP_INERT_STRATEGY, 8));
      },
      token: ConfigurableFocusTrapFactory,
      providedIn: "root"
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ConfigurableFocusTrapFactory, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: InteractivityChecker
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }, {
          type: FocusTrapManager
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [FOCUS_TRAP_INERT_STRATEGY]
          }]
        }];
      }, null);
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/a11y/live-announcer/live-announcer-tokens.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var LIVE_ANNOUNCER_ELEMENT_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('liveAnnouncerElement', {
      providedIn: 'root',
      factory: LIVE_ANNOUNCER_ELEMENT_TOKEN_FACTORY
    });
    /**
     * \@docs-private
     * @return {?}
     */

    function LIVE_ANNOUNCER_ELEMENT_TOKEN_FACTORY() {
      return null;
    }
    /**
     * Object that can be used to configure the default options for the LiveAnnouncer.
     * @record
     */


    function LiveAnnouncerDefaultOptions() {}

    if (false) {}
    /**
     * Injection token that can be used to configure the default options for the LiveAnnouncer.
     * @type {?}
     */


    var LIVE_ANNOUNCER_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('LIVE_ANNOUNCER_DEFAULT_OPTIONS');
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/a11y/live-announcer/live-announcer.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var LiveAnnouncer = /*#__PURE__*/function () {
      /**
       * @param {?} elementToken
       * @param {?} _ngZone
       * @param {?} _document
       * @param {?=} _defaultOptions
       */
      function LiveAnnouncer(elementToken, _ngZone, _document, _defaultOptions) {
        _classCallCheck(this, LiveAnnouncer);

        this._ngZone = _ngZone;
        this._defaultOptions = _defaultOptions; // We inject the live element and document as `any` because the constructor signature cannot
        // reference browser globals (HTMLElement, Document) on non-browser environments, since having
        // a class decorator causes TypeScript to preserve the constructor signature types.

        this._document = _document;
        this._liveElement = elementToken || this._createLiveElement();
      }
      /**
       * @param {?} message
       * @param {...?} args
       * @return {?}
       */


      _createClass(LiveAnnouncer, [{
        key: "announce",
        value: function announce(message) {
          var _this12 = this;

          /** @type {?} */
          var defaultOptions = this._defaultOptions;
          /** @type {?} */

          var politeness;
          /** @type {?} */

          var duration;

          for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            args[_key - 1] = arguments[_key];
          }

          if (args.length === 1 && typeof args[0] === 'number') {
            duration = args[0];
          } else {
            politeness = args[0];
            duration = args[1];
          }

          this.clear();
          clearTimeout(this._previousTimeout);

          if (!politeness) {
            politeness = defaultOptions && defaultOptions.politeness ? defaultOptions.politeness : 'polite';
          }

          if (duration == null && defaultOptions) {
            duration = defaultOptions.duration;
          } // TODO: ensure changing the politeness works on all environments we support.


          this._liveElement.setAttribute('aria-live', politeness); // This 100ms timeout is necessary for some browser + screen-reader combinations:
          // - Both JAWS and NVDA over IE11 will not announce anything without a non-zero timeout.
          // - With Chrome and IE11 with NVDA or JAWS, a repeated (identical) message won't be read a
          //   second time without clearing and then using a non-zero delay.
          // (using JAWS 17 at time of this writing).


          return this._ngZone.runOutsideAngular(
          /**
          * @return {?}
          */
          function () {
            return new Promise(
            /**
            * @param {?} resolve
            * @return {?}
            */
            function (resolve) {
              clearTimeout(_this12._previousTimeout);
              _this12._previousTimeout = setTimeout(
              /**
              * @return {?}
              */
              function () {
                _this12._liveElement.textContent = message;
                resolve();

                if (typeof duration === 'number') {
                  _this12._previousTimeout = setTimeout(
                  /**
                  * @return {?}
                  */
                  function () {
                    return _this12.clear();
                  }, duration);
                }
              }, 100);
            });
          });
        }
        /**
         * Clears the current text from the announcer element. Can be used to prevent
         * screen readers from reading the text out again while the user is going
         * through the page landmarks.
         * @return {?}
         */

      }, {
        key: "clear",
        value: function clear() {
          if (this._liveElement) {
            this._liveElement.textContent = '';
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          clearTimeout(this._previousTimeout);

          if (this._liveElement && this._liveElement.parentNode) {
            this._liveElement.parentNode.removeChild(this._liveElement);

            this._liveElement =
            /** @type {?} */
            null;
          }
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_createLiveElement",
        value: function _createLiveElement() {
          /** @type {?} */
          var elementClass = 'cdk-live-announcer-element';
          /** @type {?} */

          var previousElements = this._document.getElementsByClassName(elementClass);
          /** @type {?} */


          var liveEl = this._document.createElement('div'); // Remove any old containers. This can happen when coming in from a server-side-rendered page.


          for (var i = 0; i < previousElements.length; i++) {
            /** @type {?} */
            previousElements[i].parentNode.removeChild(previousElements[i]);
          }

          liveEl.classList.add(elementClass);
          liveEl.classList.add('cdk-visually-hidden');
          liveEl.setAttribute('aria-atomic', 'true');
          liveEl.setAttribute('aria-live', 'polite');

          this._document.body.appendChild(liveEl);

          return liveEl;
        }
      }]);

      return LiveAnnouncer;
    }();

    LiveAnnouncer.ɵfac = function LiveAnnouncer_Factory(t) {
      return new (t || LiveAnnouncer)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](LIVE_ANNOUNCER_ELEMENT_TOKEN, 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](LIVE_ANNOUNCER_DEFAULT_OPTIONS, 8));
    };
    /** @nocollapse */


    LiveAnnouncer.ctorParameters = function () {
      return [{
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [LIVE_ANNOUNCER_ELEMENT_TOKEN]
        }]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]]
        }]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [LIVE_ANNOUNCER_DEFAULT_OPTIONS]
        }]
      }];
    };
    /** @nocollapse */


    LiveAnnouncer.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
      factory: function LiveAnnouncer_Factory() {
        return new LiveAnnouncer(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(LIVE_ANNOUNCER_ELEMENT_TOKEN, 8), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(LIVE_ANNOUNCER_DEFAULT_OPTIONS, 8));
      },
      token: LiveAnnouncer,
      providedIn: "root"
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LiveAnnouncer, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [LIVE_ANNOUNCER_ELEMENT_TOKEN]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [LIVE_ANNOUNCER_DEFAULT_OPTIONS]
          }]
        }];
      }, null);
    })();

    if (false) {}
    /**
     * A directive that works similarly to aria-live, but uses the LiveAnnouncer to ensure compatibility
     * with a wider range of browsers and screen readers.
     */


    var CdkAriaLive = /*#__PURE__*/function () {
      /**
       * @param {?} _elementRef
       * @param {?} _liveAnnouncer
       * @param {?} _contentObserver
       * @param {?} _ngZone
       */
      function CdkAriaLive(_elementRef, _liveAnnouncer, _contentObserver, _ngZone) {
        _classCallCheck(this, CdkAriaLive);

        this._elementRef = _elementRef;
        this._liveAnnouncer = _liveAnnouncer;
        this._contentObserver = _contentObserver;
        this._ngZone = _ngZone;
        this._politeness = 'off';
      }
      /**
       * The aria-live politeness level to use when announcing messages.
       * @return {?}
       */


      _createClass(CdkAriaLive, [{
        key: "ngOnDestroy",

        /**
         * @return {?}
         */
        value: function ngOnDestroy() {
          if (this._subscription) {
            this._subscription.unsubscribe();
          }
        }
      }, {
        key: "politeness",
        get: function get() {
          return this._politeness;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          var _this13 = this;

          this._politeness = value === 'polite' || value === 'assertive' ? value : 'off';

          if (this._politeness === 'off') {
            if (this._subscription) {
              this._subscription.unsubscribe();

              this._subscription = null;
            }
          } else if (!this._subscription) {
            this._subscription = this._ngZone.runOutsideAngular(
            /**
            * @return {?}
            */
            function () {
              return _this13._contentObserver.observe(_this13._elementRef).subscribe(
              /**
              * @return {?}
              */
              function () {
                // Note that we use textContent here, rather than innerText, in order to avoid a reflow.

                /** @type {?} */
                var elementText = _this13._elementRef.nativeElement.textContent; // The `MutationObserver` fires also for attribute
                // changes which we don't want to announce.

                if (elementText !== _this13._previousAnnouncedText) {
                  _this13._liveAnnouncer.announce(elementText, _this13._politeness);

                  _this13._previousAnnouncedText = elementText;
                }
              });
            });
          }
        }
      }]);

      return CdkAriaLive;
    }();

    CdkAriaLive.ɵfac = function CdkAriaLive_Factory(t) {
      return new (t || CdkAriaLive)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](LiveAnnouncer), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_observers__WEBPACK_IMPORTED_MODULE_7__["ContentObserver"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]));
    };

    CdkAriaLive.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: CdkAriaLive,
      selectors: [["", "cdkAriaLive", ""]],
      inputs: {
        politeness: ["cdkAriaLive", "politeness"]
      },
      exportAs: ["cdkAriaLive"]
    });
    /** @nocollapse */

    CdkAriaLive.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }, {
        type: LiveAnnouncer
      }, {
        type: _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_7__["ContentObserver"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }];
    };

    CdkAriaLive.propDecorators = {
      politeness: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
        args: ['cdkAriaLive']
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CdkAriaLive, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: '[cdkAriaLive]',
          exportAs: 'cdkAriaLive'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: LiveAnnouncer
        }, {
          type: _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_7__["ContentObserver"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }];
      }, {
        politeness: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['cdkAriaLive']
        }]
      });
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/a11y/fake-mousedown.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * Screenreaders will often fire fake mousedown events when a focusable element
     * is activated using the keyboard. We can typically distinguish between these faked
     * mousedown events and real mousedown events using the "buttons" property. While
     * real mousedowns will indicate the mouse button that was pressed (e.g. "1" for
     * the left mouse button), faked mousedowns will usually set the property value to 0.
     * @param {?} event
     * @return {?}
     */


    function isFakeMousedownFromScreenReader(event) {
      return event.buttons === 0;
    }
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/a11y/focus-monitor/focus-monitor.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // This is the value used by AngularJS Material. Through trial and error (on iPhone 6S) they found
    // that a value of around 650ms seems appropriate.

    /** @type {?} */


    var TOUCH_BUFFER_MS = 650;
    /**
     * Corresponds to the options that can be passed to the native `focus` event.
     * via https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/focus
     * @record
     */

    function FocusOptions() {}

    if (false) {}
    /** @enum {number} */


    var FocusMonitorDetectionMode = {
      /**
       * Any mousedown, keydown, or touchstart event that happened in the previous
       * tick or the current tick will be used to assign a focus event's origin (to
       * either mouse, keyboard, or touch). This is the default option.
       */
      IMMEDIATE: 0,

      /**
       * A focus event's origin is always attributed to the last corresponding
       * mousedown, keydown, or touchstart event, no matter how long ago it occured.
       */
      EVENTUAL: 1
    };
    /**
     * Injectable service-level options for FocusMonitor.
     * @record
     */

    function FocusMonitorOptions() {}

    if (false) {}
    /**
     * InjectionToken for FocusMonitorOptions.
     * @type {?}
     */


    var FOCUS_MONITOR_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('cdk-focus-monitor-default-options');
    /**
     * Event listener options that enable capturing and also
     * mark the listener as passive if the browser supports it.
     * @type {?}
     */

    var captureEventListenerOptions = Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["normalizePassiveListenerOptions"])({
      passive: true,
      capture: true
    });
    /**
     * Monitors mouse and keyboard events to determine the cause of focus events.
     */

    var FocusMonitor = /*#__PURE__*/function () {
      /**
       * @param {?} _ngZone
       * @param {?} _platform
       * @param {?} document
       * @param {?} options
       */
      function FocusMonitor(_ngZone, _platform,
      /** @breaking-change 11.0.0 make document required */
      document, options) {
        var _this14 = this;

        _classCallCheck(this, FocusMonitor);

        this._ngZone = _ngZone;
        this._platform = _platform;
        /**
         * The focus origin that the next focus event is a result of.
         */

        this._origin = null;
        /**
         * Whether the window has just been focused.
         */

        this._windowFocused = false;
        /**
         * Map of elements being monitored to their info.
         */

        this._elementInfo = new Map();
        /**
         * The number of elements currently being monitored.
         */

        this._monitoredElementCount = 0;
        /**
         * Keeps track of the root nodes to which we've currently bound a focus/blur handler,
         * as well as the number of monitored elements that they contain. We have to treat focus/blur
         * handlers differently from the rest of the events, because the browser won't emit events
         * to the document when focus moves inside of a shadow root.
         */

        this._rootNodeFocusListenerCount = new Map();
        /**
         * Event listener for `keydown` events on the document.
         * Needs to be an arrow function in order to preserve the context when it gets bound.
         */

        this._documentKeydownListener =
        /**
        * @return {?}
        */
        function () {
          // On keydown record the origin and clear any touch event that may be in progress.
          _this14._lastTouchTarget = null;

          _this14._setOriginForCurrentEventQueue('keyboard');
        };
        /**
         * Event listener for `mousedown` events on the document.
         * Needs to be an arrow function in order to preserve the context when it gets bound.
         */


        this._documentMousedownListener =
        /**
        * @param {?} event
        * @return {?}
        */
        function (event) {
          // On mousedown record the origin only if there is not touch
          // target, since a mousedown can happen as a result of a touch event.
          if (!_this14._lastTouchTarget) {
            // In some cases screen readers fire fake `mousedown` events instead of `keydown`.
            // Resolve the focus source to `keyboard` if we detect one of them.

            /** @type {?} */
            var source = isFakeMousedownFromScreenReader(event) ? 'keyboard' : 'mouse';

            _this14._setOriginForCurrentEventQueue(source);
          }
        };
        /**
         * Event listener for `touchstart` events on the document.
         * Needs to be an arrow function in order to preserve the context when it gets bound.
         */


        this._documentTouchstartListener =
        /**
        * @param {?} event
        * @return {?}
        */
        function (event) {
          // When the touchstart event fires the focus event is not yet in the event queue. This means
          // we can't rely on the trick used above (setting timeout of 1ms). Instead we wait 650ms to
          // see if a focus happens.
          if (_this14._touchTimeoutId != null) {
            clearTimeout(_this14._touchTimeoutId);
          }

          _this14._lastTouchTarget = getTarget(event);
          _this14._touchTimeoutId = setTimeout(
          /**
          * @return {?}
          */
          function () {
            return _this14._lastTouchTarget = null;
          }, TOUCH_BUFFER_MS);
        };
        /**
         * Event listener for `focus` events on the window.
         * Needs to be an arrow function in order to preserve the context when it gets bound.
         */


        this._windowFocusListener =
        /**
        * @return {?}
        */
        function () {
          // Make a note of when the window regains focus, so we can
          // restore the origin info for the focused element.
          _this14._windowFocused = true;
          _this14._windowFocusTimeoutId = setTimeout(
          /**
          * @return {?}
          */
          function () {
            return _this14._windowFocused = false;
          });
        };
        /**
         * Event listener for `focus` and 'blur' events on the document.
         * Needs to be an arrow function in order to preserve the context when it gets bound.
         */


        this._rootNodeFocusAndBlurListener =
        /**
        * @param {?} event
        * @return {?}
        */
        function (event) {
          /** @type {?} */
          var target = getTarget(event);
          /** @type {?} */

          var handler = event.type === 'focus' ? _this14._onFocus : _this14._onBlur; // We need to walk up the ancestor chain in order to support `checkChildren`.

          for (var element = target; element; element = element.parentElement) {
            handler.call(_this14,
            /** @type {?} */
            event, element);
          }
        };

        this._document = document;
        this._detectionMode = (options === null || options === void 0 ? void 0 : options.detectionMode) || 0
        /* IMMEDIATE */
        ;
      }
      /**
       * @param {?} element
       * @param {?=} checkChildren
       * @return {?}
       */


      _createClass(FocusMonitor, [{
        key: "monitor",
        value: function monitor(element) {
          var checkChildren = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

          // Do nothing if we're not on the browser platform.
          if (!this._platform.isBrowser) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
          }
          /** @type {?} */


          var nativeElement = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceElement"])(element); // If the element is inside the shadow DOM, we need to bind our focus/blur listeners to
          // the shadow root, rather than the `document`, because the browser won't emit focus events
          // to the `document`, if focus is moving within the same shadow root.

          /** @type {?} */

          var rootNode =
          /** @type {?} */
          Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["_getShadowRoot"])(nativeElement) || this._getDocument();
          /** @type {?} */


          var cachedInfo = this._elementInfo.get(nativeElement); // Check if we're already monitoring this element.


          if (cachedInfo) {
            if (checkChildren) {
              // TODO(COMP-318): this can be problematic, because it'll turn all non-checkChildren
              // observers into ones that behave as if `checkChildren` was turned on. We need a more
              // robust solution.
              cachedInfo.checkChildren = true;
            }

            return cachedInfo.subject.asObservable();
          } // Create monitored element info.

          /** @type {?} */


          var info = {
            checkChildren: checkChildren,
            subject: new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"](),
            rootNode: rootNode
          };

          this._elementInfo.set(nativeElement, info);

          this._registerGlobalListeners(info);

          return info.subject.asObservable();
        }
        /**
         * @param {?} element
         * @return {?}
         */

      }, {
        key: "stopMonitoring",
        value: function stopMonitoring(element) {
          /** @type {?} */
          var nativeElement = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceElement"])(element);
          /** @type {?} */

          var elementInfo = this._elementInfo.get(nativeElement);

          if (elementInfo) {
            elementInfo.subject.complete();

            this._setClasses(nativeElement);

            this._elementInfo["delete"](nativeElement);

            this._removeGlobalListeners(elementInfo);
          }
        }
        /**
         * @param {?} element
         * @param {?} origin
         * @param {?=} options
         * @return {?}
         */

      }, {
        key: "focusVia",
        value: function focusVia(element, origin, options) {
          /** @type {?} */
          var nativeElement = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceElement"])(element);

          this._setOriginForCurrentEventQueue(origin); // `focus` isn't available on the server


          if (typeof nativeElement.focus === 'function') {
            // Cast the element to `any`, because the TS typings don't have the `options` parameter yet.

            /** @type {?} */
            nativeElement.focus(options);
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          var _this15 = this;

          this._elementInfo.forEach(
          /**
          * @param {?} _info
          * @param {?} element
          * @return {?}
          */
          function (_info, element) {
            return _this15.stopMonitoring(element);
          });
        }
        /**
         * Access injected document if available or fallback to global document reference
         * @private
         * @return {?}
         */

      }, {
        key: "_getDocument",
        value: function _getDocument() {
          return this._document || document;
        }
        /**
         * Use defaultView of injected document if available or fallback to global window reference
         * @private
         * @return {?}
         */

      }, {
        key: "_getWindow",
        value: function _getWindow() {
          /** @type {?} */
          var doc = this._getDocument();

          return doc.defaultView || window;
        }
        /**
         * @private
         * @param {?} element
         * @param {?} className
         * @param {?} shouldSet
         * @return {?}
         */

      }, {
        key: "_toggleClass",
        value: function _toggleClass(element, className, shouldSet) {
          if (shouldSet) {
            element.classList.add(className);
          } else {
            element.classList.remove(className);
          }
        }
        /**
         * @private
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "_getFocusOrigin",
        value: function _getFocusOrigin(event) {
          // If we couldn't detect a cause for the focus event, it's due to one of three reasons:
          // 1) The window has just regained focus, in which case we want to restore the focused state of
          //    the element from before the window blurred.
          // 2) It was caused by a touch event, in which case we mark the origin as 'touch'.
          // 3) The element was programmatically focused, in which case we should mark the origin as
          //    'program'.
          if (this._origin) {
            return this._origin;
          }

          if (this._windowFocused && this._lastFocusOrigin) {
            return this._lastFocusOrigin;
          } else if (this._wasCausedByTouch(event)) {
            return 'touch';
          } else {
            return 'program';
          }
        }
        /**
         * Sets the focus classes on the element based on the given focus origin.
         * @private
         * @param {?} element The element to update the classes on.
         * @param {?=} origin The focus origin.
         * @return {?}
         */

      }, {
        key: "_setClasses",
        value: function _setClasses(element, origin) {
          this._toggleClass(element, 'cdk-focused', !!origin);

          this._toggleClass(element, 'cdk-touch-focused', origin === 'touch');

          this._toggleClass(element, 'cdk-keyboard-focused', origin === 'keyboard');

          this._toggleClass(element, 'cdk-mouse-focused', origin === 'mouse');

          this._toggleClass(element, 'cdk-program-focused', origin === 'program');
        }
        /**
         * Sets the origin and schedules an async function to clear it at the end of the event queue.
         * If the detection mode is 'eventual', the origin is never cleared.
         * @private
         * @param {?} origin The origin to set.
         * @return {?}
         */

      }, {
        key: "_setOriginForCurrentEventQueue",
        value: function _setOriginForCurrentEventQueue(origin) {
          var _this16 = this;

          this._ngZone.runOutsideAngular(
          /**
          * @return {?}
          */
          function () {
            _this16._origin = origin;

            if (_this16._detectionMode === 0
            /* IMMEDIATE */
            ) {
                // Sometimes the focus origin won't be valid in Firefox because Firefox seems to focus *one*
                // tick after the interaction event fired. To ensure the focus origin is always correct,
                // the focus origin will be determined at the beginning of the next tick.
                _this16._originTimeoutId = setTimeout(
                /**
                * @return {?}
                */
                function () {
                  return _this16._origin = null;
                }, 1);
              }
          });
        }
        /**
         * Checks whether the given focus event was caused by a touchstart event.
         * @private
         * @param {?} event The focus event to check.
         * @return {?} Whether the event was caused by a touch.
         */

      }, {
        key: "_wasCausedByTouch",
        value: function _wasCausedByTouch(event) {
          // Note(mmalerba): This implementation is not quite perfect, there is a small edge case.
          // Consider the following dom structure:
          //
          // <div #parent tabindex="0" cdkFocusClasses>
          //   <div #child (click)="#parent.focus()"></div>
          // </div>
          //
          // If the user touches the #child element and the #parent is programmatically focused as a
          // result, this code will still consider it to have been caused by the touch event and will
          // apply the cdk-touch-focused class rather than the cdk-program-focused class. This is a
          // relatively small edge-case that can be worked around by using
          // focusVia(parentEl, 'program') to focus the parent element.
          //
          // If we decide that we absolutely must handle this case correctly, we can do so by listening
          // for the first focus event after the touchstart, and then the first blur event after that
          // focus event. When that blur event fires we know that whatever follows is not a result of the
          // touchstart.

          /** @type {?} */
          var focusTarget = getTarget(event);
          return this._lastTouchTarget instanceof Node && focusTarget instanceof Node && (focusTarget === this._lastTouchTarget || focusTarget.contains(this._lastTouchTarget));
        }
        /**
         * Handles focus events on a registered element.
         * @private
         * @param {?} event The focus event.
         * @param {?} element The monitored element.
         * @return {?}
         */

      }, {
        key: "_onFocus",
        value: function _onFocus(event, element) {
          // NOTE(mmalerba): We currently set the classes based on the focus origin of the most recent
          // focus event affecting the monitored element. If we want to use the origin of the first event
          // instead we should check for the cdk-focused class here and return if the element already has
          // it. (This only matters for elements that have includesChildren = true).
          // NOTE(mmalerba): We currently set the classes based on the focus origin of the most recent
          // focus event affecting the monitored element. If we want to use the origin of the first event
          // instead we should check for the cdk-focused class here and return if the element already has
          // it. (This only matters for elements that have includesChildren = true).
          // If we are not counting child-element-focus as focused, make sure that the event target is the
          // monitored element itself.

          /** @type {?} */
          var elementInfo = this._elementInfo.get(element);

          if (!elementInfo || !elementInfo.checkChildren && element !== getTarget(event)) {
            return;
          }
          /** @type {?} */


          var origin = this._getFocusOrigin(event);

          this._setClasses(element, origin);

          this._emitOrigin(elementInfo.subject, origin);

          this._lastFocusOrigin = origin;
        }
        /**
         * Handles blur events on a registered element.
         * @param {?} event The blur event.
         * @param {?} element The monitored element.
         * @return {?}
         */

      }, {
        key: "_onBlur",
        value: function _onBlur(event, element) {
          // If we are counting child-element-focus as focused, make sure that we aren't just blurring in
          // order to focus another child of the monitored element.

          /** @type {?} */
          var elementInfo = this._elementInfo.get(element);

          if (!elementInfo || elementInfo.checkChildren && event.relatedTarget instanceof Node && element.contains(event.relatedTarget)) {
            return;
          }

          this._setClasses(element);

          this._emitOrigin(elementInfo.subject, null);
        }
        /**
         * @private
         * @param {?} subject
         * @param {?} origin
         * @return {?}
         */

      }, {
        key: "_emitOrigin",
        value: function _emitOrigin(subject, origin) {
          this._ngZone.run(
          /**
          * @return {?}
          */
          function () {
            return subject.next(origin);
          });
        }
        /**
         * @private
         * @param {?} elementInfo
         * @return {?}
         */

      }, {
        key: "_registerGlobalListeners",
        value: function _registerGlobalListeners(elementInfo) {
          var _this17 = this;

          if (!this._platform.isBrowser) {
            return;
          }
          /** @type {?} */


          var rootNode = elementInfo.rootNode;
          /** @type {?} */

          var rootNodeFocusListeners = this._rootNodeFocusListenerCount.get(rootNode) || 0;

          if (!rootNodeFocusListeners) {
            this._ngZone.runOutsideAngular(
            /**
            * @return {?}
            */
            function () {
              rootNode.addEventListener('focus', _this17._rootNodeFocusAndBlurListener, captureEventListenerOptions);
              rootNode.addEventListener('blur', _this17._rootNodeFocusAndBlurListener, captureEventListenerOptions);
            });
          }

          this._rootNodeFocusListenerCount.set(rootNode, rootNodeFocusListeners + 1); // Register global listeners when first element is monitored.


          if (++this._monitoredElementCount === 1) {
            // Note: we listen to events in the capture phase so we
            // can detect them even if the user stops propagation.
            this._ngZone.runOutsideAngular(
            /**
            * @return {?}
            */
            function () {
              /** @type {?} */
              var document = _this17._getDocument();
              /** @type {?} */


              var window = _this17._getWindow();

              document.addEventListener('keydown', _this17._documentKeydownListener, captureEventListenerOptions);
              document.addEventListener('mousedown', _this17._documentMousedownListener, captureEventListenerOptions);
              document.addEventListener('touchstart', _this17._documentTouchstartListener, captureEventListenerOptions);
              window.addEventListener('focus', _this17._windowFocusListener);
            });
          }
        }
        /**
         * @private
         * @param {?} elementInfo
         * @return {?}
         */

      }, {
        key: "_removeGlobalListeners",
        value: function _removeGlobalListeners(elementInfo) {
          /** @type {?} */
          var rootNode = elementInfo.rootNode;

          if (this._rootNodeFocusListenerCount.has(rootNode)) {
            /** @type {?} */
            var rootNodeFocusListeners =
            /** @type {?} */
            this._rootNodeFocusListenerCount.get(rootNode);

            if (rootNodeFocusListeners > 1) {
              this._rootNodeFocusListenerCount.set(rootNode, rootNodeFocusListeners - 1);
            } else {
              rootNode.removeEventListener('focus', this._rootNodeFocusAndBlurListener, captureEventListenerOptions);
              rootNode.removeEventListener('blur', this._rootNodeFocusAndBlurListener, captureEventListenerOptions);

              this._rootNodeFocusListenerCount["delete"](rootNode);
            }
          } // Unregister global listeners when last element is unmonitored.


          if (! --this._monitoredElementCount) {
            /** @type {?} */
            var _document2 = this._getDocument();
            /** @type {?} */


            var _window = this._getWindow();

            _document2.removeEventListener('keydown', this._documentKeydownListener, captureEventListenerOptions);

            _document2.removeEventListener('mousedown', this._documentMousedownListener, captureEventListenerOptions);

            _document2.removeEventListener('touchstart', this._documentTouchstartListener, captureEventListenerOptions);

            _window.removeEventListener('focus', this._windowFocusListener); // Clear timeouts for all potentially pending timeouts to prevent the leaks.


            clearTimeout(this._windowFocusTimeoutId);
            clearTimeout(this._touchTimeoutId);
            clearTimeout(this._originTimeoutId);
          }
        }
      }]);

      return FocusMonitor;
    }();

    FocusMonitor.ɵfac = function FocusMonitor_Factory(t) {
      return new (t || FocusMonitor)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](FOCUS_MONITOR_DEFAULT_OPTIONS, 8));
    };
    /** @nocollapse */


    FocusMonitor.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }, {
        type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["Platform"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]]
        }]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [FOCUS_MONITOR_DEFAULT_OPTIONS]
        }]
      }];
    };
    /** @nocollapse */


    FocusMonitor.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
      factory: function FocusMonitor_Factory() {
        return new FocusMonitor(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["Platform"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"], 8), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(FOCUS_MONITOR_DEFAULT_OPTIONS, 8));
      },
      token: FocusMonitor,
      providedIn: "root"
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FocusMonitor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }, {
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["Platform"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [FOCUS_MONITOR_DEFAULT_OPTIONS]
          }]
        }];
      }, null);
    })();

    if (false) {}
    /**
     * Gets the target of an event, accounting for Shadow DOM.
     * @param {?} event
     * @return {?}
     */


    function getTarget(event) {
      // If an event is bound outside the Shadow DOM, the `event.target` will
      // point to the shadow root so we have to use `composedPath` instead.
      return (
        /** @type {?} */
        event.composedPath ? event.composedPath()[0] : event.target
      );
    }
    /**
     * Directive that determines how a particular element was focused (via keyboard, mouse, touch, or
     * programmatically) and adds corresponding classes to the element.
     *
     * There are two variants of this directive:
     * 1) cdkMonitorElementFocus: does not consider an element to be focused if one of its children is
     *    focused.
     * 2) cdkMonitorSubtreeFocus: considers an element focused if it or any of its children are focused.
     */


    var CdkMonitorFocus = /*#__PURE__*/function () {
      /**
       * @param {?} _elementRef
       * @param {?} _focusMonitor
       */
      function CdkMonitorFocus(_elementRef, _focusMonitor) {
        var _this18 = this;

        _classCallCheck(this, CdkMonitorFocus);

        this._elementRef = _elementRef;
        this._focusMonitor = _focusMonitor;
        this.cdkFocusChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this._monitorSubscription = this._focusMonitor.monitor(this._elementRef, this._elementRef.nativeElement.hasAttribute('cdkMonitorSubtreeFocus')).subscribe(
        /**
        * @param {?} origin
        * @return {?}
        */
        function (origin) {
          return _this18.cdkFocusChange.emit(origin);
        });
      }
      /**
       * @return {?}
       */


      _createClass(CdkMonitorFocus, [{
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._focusMonitor.stopMonitoring(this._elementRef);

          this._monitorSubscription.unsubscribe();
        }
      }]);

      return CdkMonitorFocus;
    }();

    CdkMonitorFocus.ɵfac = function CdkMonitorFocus_Factory(t) {
      return new (t || CdkMonitorFocus)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](FocusMonitor));
    };

    CdkMonitorFocus.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: CdkMonitorFocus,
      selectors: [["", "cdkMonitorElementFocus", ""], ["", "cdkMonitorSubtreeFocus", ""]],
      outputs: {
        cdkFocusChange: "cdkFocusChange"
      }
    });
    /** @nocollapse */

    CdkMonitorFocus.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }, {
        type: FocusMonitor
      }];
    };

    CdkMonitorFocus.propDecorators = {
      cdkFocusChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CdkMonitorFocus, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: '[cdkMonitorElementFocus], [cdkMonitorSubtreeFocus]'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: FocusMonitor
        }];
      }, {
        cdkFocusChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }]
      });
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/a11y/high-contrast-mode/high-contrast-mode-detector.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @enum {number} */


    var HighContrastMode = {
      NONE: 0,
      BLACK_ON_WHITE: 1,
      WHITE_ON_BLACK: 2
    };
    /**
     * CSS class applied to the document body when in black-on-white high-contrast mode.
     * @type {?}
     */

    var BLACK_ON_WHITE_CSS_CLASS = 'cdk-high-contrast-black-on-white';
    /**
     * CSS class applied to the document body when in white-on-black high-contrast mode.
     * @type {?}
     */

    var WHITE_ON_BLACK_CSS_CLASS = 'cdk-high-contrast-white-on-black';
    /**
     * CSS class applied to the document body when in high-contrast mode.
     * @type {?}
     */

    var HIGH_CONTRAST_MODE_ACTIVE_CSS_CLASS = 'cdk-high-contrast-active';
    /**
     * Service to determine whether the browser is currently in a high-contrast-mode environment.
     *
     * Microsoft Windows supports an accessibility feature called "High Contrast Mode". This mode
     * changes the appearance of all applications, including web applications, to dramatically increase
     * contrast.
     *
     * IE, Edge, and Firefox currently support this mode. Chrome does not support Windows High Contrast
     * Mode. This service does not detect high-contrast mode as added by the Chrome "High Contrast"
     * browser extension.
     */

    var HighContrastModeDetector = /*#__PURE__*/function () {
      /**
       * @param {?} _platform
       * @param {?} document
       */
      function HighContrastModeDetector(_platform, document) {
        _classCallCheck(this, HighContrastModeDetector);

        this._platform = _platform;
        this._document = document;
      }
      /**
       * Gets the current high-contrast-mode for the page.
       * @return {?}
       */


      _createClass(HighContrastModeDetector, [{
        key: "getHighContrastMode",
        value: function getHighContrastMode() {
          if (!this._platform.isBrowser) {
            return 0
            /* NONE */
            ;
          } // Create a test element with an arbitrary background-color that is neither black nor
          // white; high-contrast mode will coerce the color to either black or white. Also ensure that
          // appending the test element to the DOM does not affect layout by absolutely positioning it

          /** @type {?} */


          var testElement = this._document.createElement('div');

          testElement.style.backgroundColor = 'rgb(1,2,3)';
          testElement.style.position = 'absolute';

          this._document.body.appendChild(testElement); // Get the computed style for the background color, collapsing spaces to normalize between
          // browsers. Once we get this color, we no longer need the test element. Access the `window`
          // via the document so we can fake it in tests. Note that we have extra null checks, because
          // this logic will likely run during app bootstrap and throwing can break the entire app.

          /** @type {?} */


          var documentWindow = this._document.defaultView || window;
          /** @type {?} */

          var computedStyle = documentWindow && documentWindow.getComputedStyle ? documentWindow.getComputedStyle(testElement) : null;
          /** @type {?} */

          var computedColor = (computedStyle && computedStyle.backgroundColor || '').replace(/ /g, '');

          this._document.body.removeChild(testElement);

          switch (computedColor) {
            case 'rgb(0,0,0)':
              return 2
              /* WHITE_ON_BLACK */
              ;

            case 'rgb(255,255,255)':
              return 1
              /* BLACK_ON_WHITE */
              ;
          }

          return 0
          /* NONE */
          ;
        }
        /**
         * Applies CSS classes indicating high-contrast mode to document body (browser-only).
         * @return {?}
         */

      }, {
        key: "_applyBodyHighContrastModeCssClasses",
        value: function _applyBodyHighContrastModeCssClasses() {
          if (this._platform.isBrowser && this._document.body) {
            /** @type {?} */
            var bodyClasses = this._document.body.classList; // IE11 doesn't support `classList` operations with multiple arguments

            bodyClasses.remove(HIGH_CONTRAST_MODE_ACTIVE_CSS_CLASS);
            bodyClasses.remove(BLACK_ON_WHITE_CSS_CLASS);
            bodyClasses.remove(WHITE_ON_BLACK_CSS_CLASS);
            /** @type {?} */

            var mode = this.getHighContrastMode();

            if (mode === 1
            /* BLACK_ON_WHITE */
            ) {
                bodyClasses.add(HIGH_CONTRAST_MODE_ACTIVE_CSS_CLASS);
                bodyClasses.add(BLACK_ON_WHITE_CSS_CLASS);
              } else if (mode === 2
            /* WHITE_ON_BLACK */
            ) {
                bodyClasses.add(HIGH_CONTRAST_MODE_ACTIVE_CSS_CLASS);
                bodyClasses.add(WHITE_ON_BLACK_CSS_CLASS);
              }
          }
        }
      }]);

      return HighContrastModeDetector;
    }();

    HighContrastModeDetector.ɵfac = function HighContrastModeDetector_Factory(t) {
      return new (t || HighContrastModeDetector)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]));
    };
    /** @nocollapse */


    HighContrastModeDetector.ctorParameters = function () {
      return [{
        type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["Platform"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]]
        }]
      }];
    };
    /** @nocollapse */


    HighContrastModeDetector.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
      factory: function HighContrastModeDetector_Factory() {
        return new HighContrastModeDetector(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["Platform"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]));
      },
      token: HighContrastModeDetector,
      providedIn: "root"
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](HighContrastModeDetector, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["Platform"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]]
          }]
        }];
      }, null);
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/a11y/a11y-module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var A11yModule =
    /**
     * @param {?} highContrastModeDetector
     */
    function A11yModule(highContrastModeDetector) {
      _classCallCheck(this, A11yModule);

      highContrastModeDetector._applyBodyHighContrastModeCssClasses();
    };

    A11yModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: A11yModule
    });
    A11yModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function A11yModule_Factory(t) {
        return new (t || A11yModule)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](HighContrastModeDetector));
      },
      imports: [[_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["PlatformModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_7__["ObserversModule"]]]
    });
    /** @nocollapse */

    A11yModule.ctorParameters = function () {
      return [{
        type: HighContrastModeDetector
      }];
    };

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](A11yModule, {
        declarations: function declarations() {
          return [CdkAriaLive, CdkTrapFocus, CdkMonitorFocus];
        },
        imports: function imports() {
          return [_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["PlatformModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_7__["ObserversModule"]];
        },
        exports: function exports() {
          return [CdkAriaLive, CdkTrapFocus, CdkMonitorFocus];
        }
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](A11yModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          imports: [_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["PlatformModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_7__["ObserversModule"]],
          declarations: [CdkAriaLive, CdkTrapFocus, CdkMonitorFocus],
          exports: [CdkAriaLive, CdkTrapFocus, CdkMonitorFocus]
        }]
      }], function () {
        return [{
          type: HighContrastModeDetector
        }];
      }, null);
    })();
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/a11y/public-api.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=a11y.js.map

    /***/

  },

  /***/
  "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/bidi.js":
  /*!*****************************************************************!*\
    !*** ./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/bidi.js ***!
    \*****************************************************************/

  /*! exports provided: BidiModule, DIR_DOCUMENT, Dir, Directionality, ɵangular_material_src_cdk_bidi_bidi_a */

  /***/
  function node_modulesAngularCdk__ivy_ngcc__Fesm2015BidiJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BidiModule", function () {
      return BidiModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DIR_DOCUMENT", function () {
      return DIR_DOCUMENT;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Dir", function () {
      return Dir;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Directionality", function () {
      return Directionality;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_material_src_cdk_bidi_bidi_a", function () {
      return DIR_DOCUMENT_FACTORY;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/bidi/dir-document-token.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Injection token used to inject the document into Directionality.
     * This is used so that the value can be faked in tests.
     *
     * We can't use the real document in tests because changing the real `dir` causes geometry-based
     * tests in Safari to fail.
     *
     * We also can't re-provide the DOCUMENT token from platform-brower because the unit tests
     * themselves use things like `querySelector` in test code.
     *
     * This token is defined in a separate file from Directionality as a workaround for
     * https://github.com/angular/angular/issues/22559
     *
     * \@docs-private
     * @type {?}
     */


    var DIR_DOCUMENT = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('cdk-dir-doc', {
      providedIn: 'root',
      factory: DIR_DOCUMENT_FACTORY
    });
    /**
     * \@docs-private
     * @return {?}
     */

    function DIR_DOCUMENT_FACTORY() {
      return Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]);
    }
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/bidi/directionality.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * The directionality (LTR / RTL) context for the application (or a subtree of it).
     * Exposes the current direction and a stream of direction changes.
     */


    var Directionality = /*#__PURE__*/function () {
      /**
       * @param {?=} _document
       */
      function Directionality(_document) {
        _classCallCheck(this, Directionality);

        /**
         * The current 'ltr' or 'rtl' value.
         */
        this.value = 'ltr';
        /**
         * Stream that emits whenever the 'ltr' / 'rtl' state changes.
         */

        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();

        if (_document) {
          // TODO: handle 'auto' value -
          // We still need to account for dir="auto".
          // It looks like HTMLElemenet.dir is also "auto" when that's set to the attribute,
          // but getComputedStyle return either "ltr" or "rtl". avoiding getComputedStyle for now

          /** @type {?} */
          var bodyDir = _document.body ? _document.body.dir : null;
          /** @type {?} */

          var htmlDir = _document.documentElement ? _document.documentElement.dir : null;
          /** @type {?} */

          var value = bodyDir || htmlDir;
          this.value = value === 'ltr' || value === 'rtl' ? value : 'ltr';
        }
      }
      /**
       * @return {?}
       */


      _createClass(Directionality, [{
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.change.complete();
        }
      }]);

      return Directionality;
    }();

    Directionality.ɵfac = function Directionality_Factory(t) {
      return new (t || Directionality)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](DIR_DOCUMENT, 8));
    };
    /** @nocollapse */


    Directionality.ctorParameters = function () {
      return [{
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [DIR_DOCUMENT]
        }]
      }];
    };
    /** @nocollapse */


    Directionality.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
      factory: function Directionality_Factory() {
        return new Directionality(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(DIR_DOCUMENT, 8));
      },
      token: Directionality,
      providedIn: "root"
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Directionality, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [DIR_DOCUMENT]
          }]
        }];
      }, null);
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/bidi/dir.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Directive to listen for changes of direction of part of the DOM.
     *
     * Provides itself as Directionality such that descendant directives only need to ever inject
     * Directionality to get the closest direction.
     */


    var Dir = /*#__PURE__*/function () {
      function Dir() {
        _classCallCheck(this, Dir);

        /**
         * Normalized direction that accounts for invalid/unsupported values.
         */
        this._dir = 'ltr';
        /**
         * Whether the `value` has been set to its initial value.
         */

        this._isInitialized = false;
        /**
         * Event emitted when the direction changes.
         */

        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }
      /**
       * \@docs-private
       * @return {?}
       */


      _createClass(Dir, [{
        key: "ngAfterContentInit",

        /**
         * Initialize once default value has been set.
         * @return {?}
         */
        value: function ngAfterContentInit() {
          this._isInitialized = true;
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.change.complete();
        }
      }, {
        key: "dir",
        get: function get() {
          return this._dir;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          /** @type {?} */
          var old = this._dir;
          /** @type {?} */

          var normalizedValue = value ? value.toLowerCase() : value;
          this._rawDir = value;
          this._dir = normalizedValue === 'ltr' || normalizedValue === 'rtl' ? normalizedValue : 'ltr';

          if (old !== this._dir && this._isInitialized) {
            this.change.emit(this._dir);
          }
        }
        /**
         * Current layout direction of the element.
         * @return {?}
         */

      }, {
        key: "value",
        get: function get() {
          return this.dir;
        }
      }]);

      return Dir;
    }();

    Dir.ɵfac = function Dir_Factory(t) {
      return new (t || Dir)();
    };

    Dir.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: Dir,
      selectors: [["", "dir", ""]],
      hostVars: 1,
      hostBindings: function Dir_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("dir", ctx._rawDir);
        }
      },
      inputs: {
        dir: "dir"
      },
      outputs: {
        change: "dirChange"
      },
      exportAs: ["dir"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
        provide: Directionality,
        useExisting: Dir
      }])]
    });
    Dir.propDecorators = {
      change: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
        args: ['dirChange']
      }],
      dir: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Dir, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[dir]',
          providers: [{
            provide: Directionality,
            useExisting: Dir
          }],
          host: {
            '[attr.dir]': '_rawDir'
          },
          exportAs: 'dir'
        }]
      }], function () {
        return [];
      }, {
        change: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
          args: ['dirChange']
        }],
        dir: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/bidi/bidi-module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var BidiModule = function BidiModule() {
      _classCallCheck(this, BidiModule);
    };

    BidiModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: BidiModule
    });
    BidiModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function BidiModule_Factory(t) {
        return new (t || BidiModule)();
      }
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](BidiModule, {
        declarations: [Dir],
        exports: [Dir]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BidiModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          exports: [Dir],
          declarations: [Dir]
        }]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/bidi/public-api.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=bidi.js.map

    /***/

  },

  /***/
  "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/collections.js":
  /*!************************************************************************!*\
    !*** ./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/collections.js ***!
    \************************************************************************/

  /*! exports provided: ArrayDataSource, DataSource, SelectionModel, UniqueSelectionDispatcher, getMultipleValuesInSingleSelectionError, isDataSource */

  /***/
  function node_modulesAngularCdk__ivy_ngcc__Fesm2015CollectionsJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ArrayDataSource", function () {
      return ArrayDataSource;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DataSource", function () {
      return DataSource;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SelectionModel", function () {
      return SelectionModel;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UniqueSelectionDispatcher", function () {
      return UniqueSelectionDispatcher;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getMultipleValuesInSingleSelectionError", function () {
      return getMultipleValuesInSingleSelectionError;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "isDataSource", function () {
      return isDataSource;
    });
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/collections/data-source.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * @abstract
     * @template T
     */


    var DataSource = function DataSource() {
      _classCallCheck(this, DataSource);
    };

    if (false) {}
    /**
     * Checks whether an object is a data source.
     * @param {?} value
     * @return {?}
     */


    function isDataSource(value) {
      // Check if the value is a DataSource by observing if it has a connect function. Cannot
      // be checked as an `instanceof DataSource` since people could create their own sources
      // that match the interface, but don't extend DataSource.
      return value && typeof value.connect === 'function';
    }
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/collections/array-data-source.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * DataSource wrapper for a native array.
     * @template T
     */


    var ArrayDataSource = /*#__PURE__*/function (_DataSource) {
      _inherits(ArrayDataSource, _DataSource);

      var _super4 = _createSuper(ArrayDataSource);

      /**
       * @param {?} _data
       */
      function ArrayDataSource(_data) {
        var _this19;

        _classCallCheck(this, ArrayDataSource);

        _this19 = _super4.call(this);
        _this19._data = _data;
        return _this19;
      }
      /**
       * @return {?}
       */


      _createClass(ArrayDataSource, [{
        key: "connect",
        value: function connect() {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["isObservable"])(this._data) ? this._data : Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(this._data);
        }
        /**
         * @return {?}
         */

      }, {
        key: "disconnect",
        value: function disconnect() {}
      }]);

      return ArrayDataSource;
    }(DataSource);

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/collections/collection-viewer.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * Interface for any component that provides a view of some data collection and wants to provide
     * information regarding the view and any changes made.
     * @record
     */


    function CollectionViewer() {}

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/collections/selection-model.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Class to be used to power selecting one or more options from a list.
     * @template T
     */


    var SelectionModel = /*#__PURE__*/function () {
      /**
       * @param {?=} _multiple
       * @param {?=} initiallySelectedValues
       * @param {?=} _emitChanges
       */
      function SelectionModel() {
        var _this20 = this;

        var _multiple = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

        var initiallySelectedValues = arguments.length > 1 ? arguments[1] : undefined;

        var _emitChanges = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

        _classCallCheck(this, SelectionModel);

        this._multiple = _multiple;
        this._emitChanges = _emitChanges;
        /**
         * Currently-selected values.
         */

        this._selection = new Set();
        /**
         * Keeps track of the deselected options that haven't been emitted by the change event.
         */

        this._deselectedToEmit = [];
        /**
         * Keeps track of the selected options that haven't been emitted by the change event.
         */

        this._selectedToEmit = [];
        /**
         * Event emitted when the value has changed.
         */

        this.changed = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();

        if (initiallySelectedValues && initiallySelectedValues.length) {
          if (_multiple) {
            initiallySelectedValues.forEach(
            /**
            * @param {?} value
            * @return {?}
            */
            function (value) {
              return _this20._markSelected(value);
            });
          } else {
            this._markSelected(initiallySelectedValues[0]);
          } // Clear the array in order to avoid firing the change event for preselected values.


          this._selectedToEmit.length = 0;
        }
      }
      /**
       * Selected values.
       * @return {?}
       */


      _createClass(SelectionModel, [{
        key: "select",

        /**
         * Selects a value or an array of values.
         * @param {...?} values
         * @return {?}
         */
        value: function select() {
          var _this21 = this;

          for (var _len2 = arguments.length, values = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            values[_key2] = arguments[_key2];
          }

          this._verifyValueAssignment(values);

          values.forEach(
          /**
          * @param {?} value
          * @return {?}
          */
          function (value) {
            return _this21._markSelected(value);
          });

          this._emitChangeEvent();
        }
        /**
         * Deselects a value or an array of values.
         * @param {...?} values
         * @return {?}
         */

      }, {
        key: "deselect",
        value: function deselect() {
          var _this22 = this;

          for (var _len3 = arguments.length, values = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
            values[_key3] = arguments[_key3];
          }

          this._verifyValueAssignment(values);

          values.forEach(
          /**
          * @param {?} value
          * @return {?}
          */
          function (value) {
            return _this22._unmarkSelected(value);
          });

          this._emitChangeEvent();
        }
        /**
         * Toggles a value between selected and deselected.
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "toggle",
        value: function toggle(value) {
          this.isSelected(value) ? this.deselect(value) : this.select(value);
        }
        /**
         * Clears all of the selected values.
         * @return {?}
         */

      }, {
        key: "clear",
        value: function clear() {
          this._unmarkAll();

          this._emitChangeEvent();
        }
        /**
         * Determines whether a value is selected.
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "isSelected",
        value: function isSelected(value) {
          return this._selection.has(value);
        }
        /**
         * Determines whether the model does not have a value.
         * @return {?}
         */

      }, {
        key: "isEmpty",
        value: function isEmpty() {
          return this._selection.size === 0;
        }
        /**
         * Determines whether the model has a value.
         * @return {?}
         */

      }, {
        key: "hasValue",
        value: function hasValue() {
          return !this.isEmpty();
        }
        /**
         * Sorts the selected values based on a predicate function.
         * @param {?=} predicate
         * @return {?}
         */

      }, {
        key: "sort",
        value: function sort(predicate) {
          if (this._multiple && this.selected) {
            /** @type {?} */
            this._selected.sort(predicate);
          }
        }
        /**
         * Gets whether multiple values can be selected.
         * @return {?}
         */

      }, {
        key: "isMultipleSelection",
        value: function isMultipleSelection() {
          return this._multiple;
        }
        /**
         * Emits a change event and clears the records of selected and deselected values.
         * @private
         * @return {?}
         */

      }, {
        key: "_emitChangeEvent",
        value: function _emitChangeEvent() {
          // Clear the selected values so they can be re-cached.
          this._selected = null;

          if (this._selectedToEmit.length || this._deselectedToEmit.length) {
            this.changed.next({
              source: this,
              added: this._selectedToEmit,
              removed: this._deselectedToEmit
            });
            this._deselectedToEmit = [];
            this._selectedToEmit = [];
          }
        }
        /**
         * Selects a value.
         * @private
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "_markSelected",
        value: function _markSelected(value) {
          if (!this.isSelected(value)) {
            if (!this._multiple) {
              this._unmarkAll();
            }

            this._selection.add(value);

            if (this._emitChanges) {
              this._selectedToEmit.push(value);
            }
          }
        }
        /**
         * Deselects a value.
         * @private
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "_unmarkSelected",
        value: function _unmarkSelected(value) {
          if (this.isSelected(value)) {
            this._selection["delete"](value);

            if (this._emitChanges) {
              this._deselectedToEmit.push(value);
            }
          }
        }
        /**
         * Clears out the selected values.
         * @private
         * @return {?}
         */

      }, {
        key: "_unmarkAll",
        value: function _unmarkAll() {
          var _this23 = this;

          if (!this.isEmpty()) {
            this._selection.forEach(
            /**
            * @param {?} value
            * @return {?}
            */
            function (value) {
              return _this23._unmarkSelected(value);
            });
          }
        }
        /**
         * Verifies the value assignment and throws an error if the specified value array is
         * including multiple values while the selection model is not supporting multiple values.
         * @private
         * @param {?} values
         * @return {?}
         */

      }, {
        key: "_verifyValueAssignment",
        value: function _verifyValueAssignment(values) {
          if (values.length > 1 && !this._multiple) {
            throw getMultipleValuesInSingleSelectionError();
          }
        }
      }, {
        key: "selected",
        get: function get() {
          if (!this._selected) {
            this._selected = Array.from(this._selection.values());
          }

          return this._selected;
        }
      }]);

      return SelectionModel;
    }();

    if (false) {}
    /**
     * Event emitted when the value of a MatSelectionModel has changed.
     * \@docs-private
     * @record
     * @template T
     */


    function SelectionChange() {}

    if (false) {}
    /**
     * Returns an error that reports that multiple values are passed into a selection model
     * with a single value.
     * \@docs-private
     * @return {?}
     */


    function getMultipleValuesInSingleSelectionError() {
      return Error('Cannot pass multiple values into SelectionModel with single-value mode.');
    }
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/collections/unique-selection-dispatcher.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Class to coordinate unique selection based on name.
     * Intended to be consumed as an Angular service.
     * This service is needed because native radio change events are only fired on the item currently
     * being selected, and we still need to uncheck the previous selection.
     *
     * This service does not *store* any IDs and names because they may change at any time, so it is
     * less error-prone if they are simply passed through when the events occur.
     */


    var UniqueSelectionDispatcher = /*#__PURE__*/function () {
      function UniqueSelectionDispatcher() {
        _classCallCheck(this, UniqueSelectionDispatcher);

        this._listeners = [];
      }
      /**
       * Notify other items that selection for the given name has been set.
       * @param {?} id ID of the item.
       * @param {?} name Name of the item.
       * @return {?}
       */


      _createClass(UniqueSelectionDispatcher, [{
        key: "notify",
        value: function notify(id, name) {
          var _iterator = _createForOfIteratorHelper(this._listeners),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var listener = _step.value;
              listener(id, name);
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        }
        /**
         * Listen for future changes to item selection.
         * @param {?} listener
         * @return {?} Function used to deregister listener
         */

      }, {
        key: "listen",
        value: function listen(listener) {
          var _this24 = this;

          this._listeners.push(listener);

          return (
            /**
            * @return {?}
            */
            function () {
              _this24._listeners = _this24._listeners.filter(
              /**
              * @param {?} registered
              * @return {?}
              */
              function (registered) {
                return listener !== registered;
              });
            }
          );
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._listeners = [];
        }
      }]);

      return UniqueSelectionDispatcher;
    }();

    UniqueSelectionDispatcher.ɵfac = function UniqueSelectionDispatcher_Factory(t) {
      return new (t || UniqueSelectionDispatcher)();
    };
    /** @nocollapse */


    UniqueSelectionDispatcher.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
      factory: function UniqueSelectionDispatcher_Factory() {
        return new UniqueSelectionDispatcher();
      },
      token: UniqueSelectionDispatcher,
      providedIn: "root"
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](UniqueSelectionDispatcher, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/collections/tree-adapter.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * Interface for a class that can flatten hierarchical structured data and re-expand the flattened
     * data back into its original structure. Should be used in conjunction with the cdk-tree.
     * @record
     * @template T
     */


    function TreeDataNodeFlattener() {}

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/collections/public-api.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=collections.js.map

    /***/

  },

  /***/
  "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/keycodes.js":
  /*!*********************************************************************!*\
    !*** ./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/keycodes.js ***!
    \*********************************************************************/

  /*! exports provided: A, ALT, APOSTROPHE, AT_SIGN, B, BACKSLASH, BACKSPACE, C, CAPS_LOCK, CLOSE_SQUARE_BRACKET, COMMA, CONTEXT_MENU, CONTROL, D, DASH, DELETE, DOWN_ARROW, E, EIGHT, END, ENTER, EQUALS, ESCAPE, F, F1, F10, F11, F12, F2, F3, F4, F5, F6, F7, F8, F9, FF_EQUALS, FF_MINUS, FF_MUTE, FF_SEMICOLON, FF_VOLUME_DOWN, FF_VOLUME_UP, FIRST_MEDIA, FIVE, FOUR, G, H, HOME, I, INSERT, J, K, L, LAST_MEDIA, LEFT_ARROW, M, MAC_ENTER, MAC_META, MAC_WK_CMD_LEFT, MAC_WK_CMD_RIGHT, META, MUTE, N, NINE, NUMPAD_DIVIDE, NUMPAD_EIGHT, NUMPAD_FIVE, NUMPAD_FOUR, NUMPAD_MINUS, NUMPAD_MULTIPLY, NUMPAD_NINE, NUMPAD_ONE, NUMPAD_PERIOD, NUMPAD_PLUS, NUMPAD_SEVEN, NUMPAD_SIX, NUMPAD_THREE, NUMPAD_TWO, NUMPAD_ZERO, NUM_CENTER, NUM_LOCK, O, ONE, OPEN_SQUARE_BRACKET, P, PAGE_DOWN, PAGE_UP, PAUSE, PLUS_SIGN, PRINT_SCREEN, Q, QUESTION_MARK, R, RIGHT_ARROW, S, SCROLL_LOCK, SEMICOLON, SEVEN, SHIFT, SINGLE_QUOTE, SIX, SLASH, SPACE, T, TAB, THREE, TILDE, TWO, U, UP_ARROW, V, VOLUME_DOWN, VOLUME_UP, W, X, Y, Z, ZERO, hasModifierKey */

  /***/
  function node_modulesAngularCdk__ivy_ngcc__Fesm2015KeycodesJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "A", function () {
      return A;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ALT", function () {
      return ALT;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "APOSTROPHE", function () {
      return APOSTROPHE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AT_SIGN", function () {
      return AT_SIGN;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "B", function () {
      return B;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BACKSLASH", function () {
      return BACKSLASH;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BACKSPACE", function () {
      return BACKSPACE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "C", function () {
      return C;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CAPS_LOCK", function () {
      return CAPS_LOCK;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CLOSE_SQUARE_BRACKET", function () {
      return CLOSE_SQUARE_BRACKET;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "COMMA", function () {
      return COMMA;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CONTEXT_MENU", function () {
      return CONTEXT_MENU;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CONTROL", function () {
      return CONTROL;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "D", function () {
      return D;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DASH", function () {
      return DASH;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DELETE", function () {
      return DELETE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DOWN_ARROW", function () {
      return DOWN_ARROW;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "E", function () {
      return E;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EIGHT", function () {
      return EIGHT;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "END", function () {
      return END;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ENTER", function () {
      return ENTER;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EQUALS", function () {
      return EQUALS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ESCAPE", function () {
      return ESCAPE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "F", function () {
      return F;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "F1", function () {
      return F1;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "F10", function () {
      return F10;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "F11", function () {
      return F11;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "F12", function () {
      return F12;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "F2", function () {
      return F2;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "F3", function () {
      return F3;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "F4", function () {
      return F4;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "F5", function () {
      return F5;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "F6", function () {
      return F6;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "F7", function () {
      return F7;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "F8", function () {
      return F8;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "F9", function () {
      return F9;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FF_EQUALS", function () {
      return FF_EQUALS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FF_MINUS", function () {
      return FF_MINUS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FF_MUTE", function () {
      return FF_MUTE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FF_SEMICOLON", function () {
      return FF_SEMICOLON;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FF_VOLUME_DOWN", function () {
      return FF_VOLUME_DOWN;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FF_VOLUME_UP", function () {
      return FF_VOLUME_UP;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FIRST_MEDIA", function () {
      return FIRST_MEDIA;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FIVE", function () {
      return FIVE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FOUR", function () {
      return FOUR;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "G", function () {
      return G;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "H", function () {
      return H;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HOME", function () {
      return HOME;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "I", function () {
      return I;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "INSERT", function () {
      return INSERT;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "J", function () {
      return J;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "K", function () {
      return K;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "L", function () {
      return L;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LAST_MEDIA", function () {
      return LAST_MEDIA;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LEFT_ARROW", function () {
      return LEFT_ARROW;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "M", function () {
      return M;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAC_ENTER", function () {
      return MAC_ENTER;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAC_META", function () {
      return MAC_META;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAC_WK_CMD_LEFT", function () {
      return MAC_WK_CMD_LEFT;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAC_WK_CMD_RIGHT", function () {
      return MAC_WK_CMD_RIGHT;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "META", function () {
      return META;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MUTE", function () {
      return MUTE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "N", function () {
      return N;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NINE", function () {
      return NINE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NUMPAD_DIVIDE", function () {
      return NUMPAD_DIVIDE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NUMPAD_EIGHT", function () {
      return NUMPAD_EIGHT;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NUMPAD_FIVE", function () {
      return NUMPAD_FIVE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NUMPAD_FOUR", function () {
      return NUMPAD_FOUR;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NUMPAD_MINUS", function () {
      return NUMPAD_MINUS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NUMPAD_MULTIPLY", function () {
      return NUMPAD_MULTIPLY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NUMPAD_NINE", function () {
      return NUMPAD_NINE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NUMPAD_ONE", function () {
      return NUMPAD_ONE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NUMPAD_PERIOD", function () {
      return NUMPAD_PERIOD;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NUMPAD_PLUS", function () {
      return NUMPAD_PLUS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NUMPAD_SEVEN", function () {
      return NUMPAD_SEVEN;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NUMPAD_SIX", function () {
      return NUMPAD_SIX;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NUMPAD_THREE", function () {
      return NUMPAD_THREE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NUMPAD_TWO", function () {
      return NUMPAD_TWO;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NUMPAD_ZERO", function () {
      return NUMPAD_ZERO;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NUM_CENTER", function () {
      return NUM_CENTER;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NUM_LOCK", function () {
      return NUM_LOCK;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "O", function () {
      return O;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ONE", function () {
      return ONE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OPEN_SQUARE_BRACKET", function () {
      return OPEN_SQUARE_BRACKET;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "P", function () {
      return P;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PAGE_DOWN", function () {
      return PAGE_DOWN;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PAGE_UP", function () {
      return PAGE_UP;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PAUSE", function () {
      return PAUSE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PLUS_SIGN", function () {
      return PLUS_SIGN;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PRINT_SCREEN", function () {
      return PRINT_SCREEN;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Q", function () {
      return Q;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QUESTION_MARK", function () {
      return QUESTION_MARK;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "R", function () {
      return R;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RIGHT_ARROW", function () {
      return RIGHT_ARROW;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "S", function () {
      return S;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SCROLL_LOCK", function () {
      return SCROLL_LOCK;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SEMICOLON", function () {
      return SEMICOLON;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SEVEN", function () {
      return SEVEN;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SHIFT", function () {
      return SHIFT;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SINGLE_QUOTE", function () {
      return SINGLE_QUOTE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SIX", function () {
      return SIX;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SLASH", function () {
      return SLASH;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SPACE", function () {
      return SPACE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "T", function () {
      return T;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TAB", function () {
      return TAB;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "THREE", function () {
      return THREE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TILDE", function () {
      return TILDE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TWO", function () {
      return TWO;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "U", function () {
      return U;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UP_ARROW", function () {
      return UP_ARROW;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "V", function () {
      return V;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VOLUME_DOWN", function () {
      return VOLUME_DOWN;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VOLUME_UP", function () {
      return VOLUME_UP;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "W", function () {
      return W;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "X", function () {
      return X;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Y", function () {
      return Y;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Z", function () {
      return Z;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ZERO", function () {
      return ZERO;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "hasModifierKey", function () {
      return hasModifierKey;
    });
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/keycodes/keycodes.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /** @type {?} */


    var MAC_ENTER = 3;
    /** @type {?} */

    var BACKSPACE = 8;
    /** @type {?} */

    var TAB = 9;
    /** @type {?} */

    var NUM_CENTER = 12;
    /** @type {?} */

    var ENTER = 13;
    /** @type {?} */

    var SHIFT = 16;
    /** @type {?} */

    var CONTROL = 17;
    /** @type {?} */

    var ALT = 18;
    /** @type {?} */

    var PAUSE = 19;
    /** @type {?} */

    var CAPS_LOCK = 20;
    /** @type {?} */

    var ESCAPE = 27;
    /** @type {?} */

    var SPACE = 32;
    /** @type {?} */

    var PAGE_UP = 33;
    /** @type {?} */

    var PAGE_DOWN = 34;
    /** @type {?} */

    var END = 35;
    /** @type {?} */

    var HOME = 36;
    /** @type {?} */

    var LEFT_ARROW = 37;
    /** @type {?} */

    var UP_ARROW = 38;
    /** @type {?} */

    var RIGHT_ARROW = 39;
    /** @type {?} */

    var DOWN_ARROW = 40;
    /** @type {?} */

    var PLUS_SIGN = 43;
    /** @type {?} */

    var PRINT_SCREEN = 44;
    /** @type {?} */

    var INSERT = 45;
    /** @type {?} */

    var DELETE = 46;
    /** @type {?} */

    var ZERO = 48;
    /** @type {?} */

    var ONE = 49;
    /** @type {?} */

    var TWO = 50;
    /** @type {?} */

    var THREE = 51;
    /** @type {?} */

    var FOUR = 52;
    /** @type {?} */

    var FIVE = 53;
    /** @type {?} */

    var SIX = 54;
    /** @type {?} */

    var SEVEN = 55;
    /** @type {?} */

    var EIGHT = 56;
    /** @type {?} */

    var NINE = 57;
    /** @type {?} */

    var FF_SEMICOLON = 59; // Firefox (Gecko) fires this for semicolon instead of 186

    /** @type {?} */

    var FF_EQUALS = 61; // Firefox (Gecko) fires this for equals instead of 187

    /** @type {?} */

    var QUESTION_MARK = 63;
    /** @type {?} */

    var AT_SIGN = 64;
    /** @type {?} */

    var A = 65;
    /** @type {?} */

    var B = 66;
    /** @type {?} */

    var C = 67;
    /** @type {?} */

    var D = 68;
    /** @type {?} */

    var E = 69;
    /** @type {?} */

    var F = 70;
    /** @type {?} */

    var G = 71;
    /** @type {?} */

    var H = 72;
    /** @type {?} */

    var I = 73;
    /** @type {?} */

    var J = 74;
    /** @type {?} */

    var K = 75;
    /** @type {?} */

    var L = 76;
    /** @type {?} */

    var M = 77;
    /** @type {?} */

    var N = 78;
    /** @type {?} */

    var O = 79;
    /** @type {?} */

    var P = 80;
    /** @type {?} */

    var Q = 81;
    /** @type {?} */

    var R = 82;
    /** @type {?} */

    var S = 83;
    /** @type {?} */

    var T = 84;
    /** @type {?} */

    var U = 85;
    /** @type {?} */

    var V = 86;
    /** @type {?} */

    var W = 87;
    /** @type {?} */

    var X = 88;
    /** @type {?} */

    var Y = 89;
    /** @type {?} */

    var Z = 90;
    /** @type {?} */

    var META = 91; // WIN_KEY_LEFT

    /** @type {?} */

    var MAC_WK_CMD_LEFT = 91;
    /** @type {?} */

    var MAC_WK_CMD_RIGHT = 93;
    /** @type {?} */

    var CONTEXT_MENU = 93;
    /** @type {?} */

    var NUMPAD_ZERO = 96;
    /** @type {?} */

    var NUMPAD_ONE = 97;
    /** @type {?} */

    var NUMPAD_TWO = 98;
    /** @type {?} */

    var NUMPAD_THREE = 99;
    /** @type {?} */

    var NUMPAD_FOUR = 100;
    /** @type {?} */

    var NUMPAD_FIVE = 101;
    /** @type {?} */

    var NUMPAD_SIX = 102;
    /** @type {?} */

    var NUMPAD_SEVEN = 103;
    /** @type {?} */

    var NUMPAD_EIGHT = 104;
    /** @type {?} */

    var NUMPAD_NINE = 105;
    /** @type {?} */

    var NUMPAD_MULTIPLY = 106;
    /** @type {?} */

    var NUMPAD_PLUS = 107;
    /** @type {?} */

    var NUMPAD_MINUS = 109;
    /** @type {?} */

    var NUMPAD_PERIOD = 110;
    /** @type {?} */

    var NUMPAD_DIVIDE = 111;
    /** @type {?} */

    var F1 = 112;
    /** @type {?} */

    var F2 = 113;
    /** @type {?} */

    var F3 = 114;
    /** @type {?} */

    var F4 = 115;
    /** @type {?} */

    var F5 = 116;
    /** @type {?} */

    var F6 = 117;
    /** @type {?} */

    var F7 = 118;
    /** @type {?} */

    var F8 = 119;
    /** @type {?} */

    var F9 = 120;
    /** @type {?} */

    var F10 = 121;
    /** @type {?} */

    var F11 = 122;
    /** @type {?} */

    var F12 = 123;
    /** @type {?} */

    var NUM_LOCK = 144;
    /** @type {?} */

    var SCROLL_LOCK = 145;
    /** @type {?} */

    var FIRST_MEDIA = 166;
    /** @type {?} */

    var FF_MINUS = 173;
    /** @type {?} */

    var MUTE = 173; // Firefox (Gecko) fires 181 for MUTE

    /** @type {?} */

    var VOLUME_DOWN = 174; // Firefox (Gecko) fires 182 for VOLUME_DOWN

    /** @type {?} */

    var VOLUME_UP = 175; // Firefox (Gecko) fires 183 for VOLUME_UP

    /** @type {?} */

    var FF_MUTE = 181;
    /** @type {?} */

    var FF_VOLUME_DOWN = 182;
    /** @type {?} */

    var LAST_MEDIA = 183;
    /** @type {?} */

    var FF_VOLUME_UP = 183;
    /** @type {?} */

    var SEMICOLON = 186; // Firefox (Gecko) fires 59 for SEMICOLON

    /** @type {?} */

    var EQUALS = 187; // Firefox (Gecko) fires 61 for EQUALS

    /** @type {?} */

    var COMMA = 188;
    /** @type {?} */

    var DASH = 189; // Firefox (Gecko) fires 173 for DASH/MINUS

    /** @type {?} */

    var SLASH = 191;
    /** @type {?} */

    var APOSTROPHE = 192;
    /** @type {?} */

    var TILDE = 192;
    /** @type {?} */

    var OPEN_SQUARE_BRACKET = 219;
    /** @type {?} */

    var BACKSLASH = 220;
    /** @type {?} */

    var CLOSE_SQUARE_BRACKET = 221;
    /** @type {?} */

    var SINGLE_QUOTE = 222;
    /** @type {?} */

    var MAC_META = 224;
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/keycodes/modifiers.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * Checks whether a modifier key is pressed.
     * @param {?} event Event to be checked.
     * @param {...?} modifiers
     * @return {?}
     */

    function hasModifierKey(event) {
      for (var _len4 = arguments.length, modifiers = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
        modifiers[_key4 - 1] = arguments[_key4];
      }

      if (modifiers.length) {
        return modifiers.some(
        /**
        * @param {?} modifier
        * @return {?}
        */
        function (modifier) {
          return event[modifier];
        });
      }

      return event.altKey || event.shiftKey || event.ctrlKey || event.metaKey;
    }
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/keycodes/public-api.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=keycodes.js.map

    /***/

  },

  /***/
  "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/observers.js":
  /*!**********************************************************************!*\
    !*** ./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/observers.js ***!
    \**********************************************************************/

  /*! exports provided: CdkObserveContent, ContentObserver, MutationObserverFactory, ObserversModule */

  /***/
  function node_modulesAngularCdk__ivy_ngcc__Fesm2015ObserversJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkObserveContent", function () {
      return CdkObserveContent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContentObserver", function () {
      return ContentObserver;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MutationObserverFactory", function () {
      return MutationObserverFactory;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ObserversModule", function () {
      return ObserversModule;
    });
    /* harmony import */


    var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/cdk/coercion */
    "./node_modules/@angular/cdk/fesm2015/coercion.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/observers/observe-content.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Factory that creates a new MutationObserver and allows us to stub it out in unit tests.
     * \@docs-private
     */


    var MutationObserverFactory = /*#__PURE__*/function () {
      function MutationObserverFactory() {
        _classCallCheck(this, MutationObserverFactory);
      }

      _createClass(MutationObserverFactory, [{
        key: "create",

        /**
         * @param {?} callback
         * @return {?}
         */
        value: function create(callback) {
          return typeof MutationObserver === 'undefined' ? null : new MutationObserver(callback);
        }
      }]);

      return MutationObserverFactory;
    }();

    MutationObserverFactory.ɵfac = function MutationObserverFactory_Factory(t) {
      return new (t || MutationObserverFactory)();
    };
    /** @nocollapse */


    MutationObserverFactory.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
      factory: function MutationObserverFactory_Factory() {
        return new MutationObserverFactory();
      },
      token: MutationObserverFactory,
      providedIn: "root"
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MutationObserverFactory, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], null, null);
    })();
    /**
     * An injectable service that allows watching elements for changes to their content.
     */


    var ContentObserver = /*#__PURE__*/function () {
      /**
       * @param {?} _mutationObserverFactory
       */
      function ContentObserver(_mutationObserverFactory) {
        _classCallCheck(this, ContentObserver);

        this._mutationObserverFactory = _mutationObserverFactory;
        /**
         * Keeps track of the existing MutationObservers so they can be reused.
         */

        this._observedElements = new Map();
      }
      /**
       * @return {?}
       */


      _createClass(ContentObserver, [{
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          var _this25 = this;

          this._observedElements.forEach(
          /**
          * @param {?} _
          * @param {?} element
          * @return {?}
          */
          function (_, element) {
            return _this25._cleanupObserver(element);
          });
        }
        /**
         * @param {?} elementOrRef
         * @return {?}
         */

      }, {
        key: "observe",
        value: function observe(elementOrRef) {
          var _this26 = this;

          /** @type {?} */
          var element = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceElement"])(elementOrRef);
          return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](
          /**
          * @param {?} observer
          * @return {?}
          */
          function (observer) {
            /** @type {?} */
            var stream = _this26._observeElement(element);
            /** @type {?} */


            var subscription = stream.subscribe(observer);
            return (
              /**
              * @return {?}
              */
              function () {
                subscription.unsubscribe();

                _this26._unobserveElement(element);
              }
            );
          });
        }
        /**
         * Observes the given element by using the existing MutationObserver if available, or creating a
         * new one if not.
         * @private
         * @param {?} element
         * @return {?}
         */

      }, {
        key: "_observeElement",
        value: function _observeElement(element) {
          if (!this._observedElements.has(element)) {
            /** @type {?} */
            var stream = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
            /** @type {?} */

            var observer = this._mutationObserverFactory.create(
            /**
            * @param {?} mutations
            * @return {?}
            */
            function (mutations) {
              return stream.next(mutations);
            });

            if (observer) {
              observer.observe(element, {
                characterData: true,
                childList: true,
                subtree: true
              });
            }

            this._observedElements.set(element, {
              observer: observer,
              stream: stream,
              count: 1
            });
          } else {
            /** @type {?} */this._observedElements.get(element).count++;
          }

          return (
            /** @type {?} */
            this._observedElements.get(element).stream
          );
        }
        /**
         * Un-observes the given element and cleans up the underlying MutationObserver if nobody else is
         * observing this element.
         * @private
         * @param {?} element
         * @return {?}
         */

      }, {
        key: "_unobserveElement",
        value: function _unobserveElement(element) {
          if (this._observedElements.has(element)) {
            /** @type {?} */this._observedElements.get(element).count--;

            if (!
            /** @type {?} */
            this._observedElements.get(element).count) {
              this._cleanupObserver(element);
            }
          }
        }
        /**
         * Clean up the underlying MutationObserver for the specified element.
         * @private
         * @param {?} element
         * @return {?}
         */

      }, {
        key: "_cleanupObserver",
        value: function _cleanupObserver(element) {
          if (this._observedElements.has(element)) {
            var _this$_observedElemen =
            /** @type {?} */
            this._observedElements.get(element),
                observer = _this$_observedElemen.observer,
                stream = _this$_observedElemen.stream;

            if (observer) {
              observer.disconnect();
            }

            stream.complete();

            this._observedElements["delete"](element);
          }
        }
      }]);

      return ContentObserver;
    }();

    ContentObserver.ɵfac = function ContentObserver_Factory(t) {
      return new (t || ContentObserver)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](MutationObserverFactory));
    };
    /** @nocollapse */


    ContentObserver.ctorParameters = function () {
      return [{
        type: MutationObserverFactory
      }];
    };
    /** @nocollapse */


    ContentObserver.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
      factory: function ContentObserver_Factory() {
        return new ContentObserver(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(MutationObserverFactory));
      },
      token: ContentObserver,
      providedIn: "root"
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ContentObserver, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: MutationObserverFactory
        }];
      }, null);
    })();

    if (false) {}
    /**
     * Directive that triggers a callback whenever the content of
     * its associated element has changed.
     */


    var CdkObserveContent = /*#__PURE__*/function () {
      /**
       * @param {?} _contentObserver
       * @param {?} _elementRef
       * @param {?} _ngZone
       */
      function CdkObserveContent(_contentObserver, _elementRef, _ngZone) {
        _classCallCheck(this, CdkObserveContent);

        this._contentObserver = _contentObserver;
        this._elementRef = _elementRef;
        this._ngZone = _ngZone;
        /**
         * Event emitted for each change in the element's content.
         */

        this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this._disabled = false;
        this._currentSubscription = null;
      }
      /**
       * Whether observing content is disabled. This option can be used
       * to disconnect the underlying MutationObserver until it is needed.
       * @return {?}
       */


      _createClass(CdkObserveContent, [{
        key: "ngAfterContentInit",

        /**
         * @return {?}
         */
        value: function ngAfterContentInit() {
          if (!this._currentSubscription && !this.disabled) {
            this._subscribe();
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._unsubscribe();
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_subscribe",
        value: function _subscribe() {
          var _this27 = this;

          this._unsubscribe();
          /** @type {?} */


          var stream = this._contentObserver.observe(this._elementRef); // TODO(mmalerba): We shouldn't be emitting on this @Output() outside the zone.
          // Consider brining it back inside the zone next time we're making breaking changes.
          // Bringing it back inside can cause things like infinite change detection loops and changed
          // after checked errors if people's code isn't handling it properly.


          this._ngZone.runOutsideAngular(
          /**
          * @return {?}
          */
          function () {
            _this27._currentSubscription = (_this27.debounce ? stream.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(_this27.debounce)) : stream).subscribe(_this27.event);
          });
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_unsubscribe",
        value: function _unsubscribe() {
          if (this._currentSubscription) {
            this._currentSubscription.unsubscribe();
          }
        }
      }, {
        key: "disabled",
        get: function get() {
          return this._disabled;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceBooleanProperty"])(value);
          this._disabled ? this._unsubscribe() : this._subscribe();
        }
        /**
         * Debounce interval for emitting the changes.
         * @return {?}
         */

      }, {
        key: "debounce",
        get: function get() {
          return this._debounce;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._debounce = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceNumberProperty"])(value);

          this._subscribe();
        }
      }]);

      return CdkObserveContent;
    }();

    CdkObserveContent.ɵfac = function CdkObserveContent_Factory(t) {
      return new (t || CdkObserveContent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ContentObserver), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]));
    };

    CdkObserveContent.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: CdkObserveContent,
      selectors: [["", "cdkObserveContent", ""]],
      inputs: {
        disabled: ["cdkObserveContentDisabled", "disabled"],
        debounce: "debounce"
      },
      outputs: {
        event: "cdkObserveContent"
      },
      exportAs: ["cdkObserveContent"]
    });
    /** @nocollapse */

    CdkObserveContent.ctorParameters = function () {
      return [{
        type: ContentObserver
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }];
    };

    CdkObserveContent.propDecorators = {
      event: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
        args: ['cdkObserveContent']
      }],
      disabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
        args: ['cdkObserveContentDisabled']
      }],
      debounce: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CdkObserveContent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: '[cdkObserveContent]',
          exportAs: 'cdkObserveContent'
        }]
      }], function () {
        return [{
          type: ContentObserver
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }];
      }, {
        event: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
          args: ['cdkObserveContent']
        }],
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['cdkObserveContentDisabled']
        }],
        debounce: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();

    if (false) {}

    var ObserversModule = function ObserversModule() {
      _classCallCheck(this, ObserversModule);
    };

    ObserversModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: ObserversModule
    });
    ObserversModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function ObserversModule_Factory(t) {
        return new (t || ObserversModule)();
      },
      providers: [MutationObserverFactory]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ObserversModule, {
        declarations: [CdkObserveContent],
        exports: [CdkObserveContent]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ObserversModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          exports: [CdkObserveContent],
          declarations: [CdkObserveContent],
          providers: [MutationObserverFactory]
        }]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/observers/public-api.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=observers.js.map

    /***/

  },

  /***/
  "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/platform.js":
  /*!*********************************************************************!*\
    !*** ./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/platform.js ***!
    \*********************************************************************/

  /*! exports provided: Platform, PlatformModule, _getShadowRoot, _supportsShadowDom, getRtlScrollAxisType, getSupportedInputTypes, normalizePassiveListenerOptions, supportsPassiveEventListeners, supportsScrollBehavior */

  /***/
  function node_modulesAngularCdk__ivy_ngcc__Fesm2015PlatformJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Platform", function () {
      return Platform;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PlatformModule", function () {
      return PlatformModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "_getShadowRoot", function () {
      return _getShadowRoot;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "_supportsShadowDom", function () {
      return _supportsShadowDom;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getRtlScrollAxisType", function () {
      return getRtlScrollAxisType;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getSupportedInputTypes", function () {
      return getSupportedInputTypes;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "normalizePassiveListenerOptions", function () {
      return normalizePassiveListenerOptions;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "supportsPassiveEventListeners", function () {
      return supportsPassiveEventListeners;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "supportsScrollBehavior", function () {
      return supportsScrollBehavior;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/platform/platform.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // Whether the current platform supports the V8 Break Iterator. The V8 check
    // is necessary to detect all Blink based browsers.

    /** @type {?} */


    var hasV8BreakIterator; // We need a try/catch around the reference to `Intl`, because accessing it in some cases can
    // cause IE to throw. These cases are tied to particular versions of Windows and can happen if
    // the consumer is providing a polyfilled `Map`. See:
    // https://github.com/Microsoft/ChakraCore/issues/3189
    // https://github.com/angular/components/issues/15687

    try {
      hasV8BreakIterator = typeof Intl !== 'undefined' &&
      /** @type {?} */
      Intl.v8BreakIterator;
    } catch (_a) {
      hasV8BreakIterator = false;
    }
    /**
     * Service to detect the current platform by comparing the userAgent strings and
     * checking browser-specific global properties.
     */


    var Platform =
    /**
     * \@breaking-change 8.0.0 remove optional decorator
     * @param {?=} _platformId
     */
    function Platform(_platformId) {
      _classCallCheck(this, Platform);

      this._platformId = _platformId; // We want to use the Angular platform check because if the Document is shimmed
      // without the navigator, the following checks will fail. This is preferred because
      // sometimes the Document may be shimmed without the user's knowledge or intention

      /**
       * Whether the Angular application is being rendered in the browser.
       */

      this.isBrowser = this._platformId ? Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(this._platformId) : typeof document === 'object' && !!document;
      /**
       * Whether the current browser is Microsoft Edge.
       */

      this.EDGE = this.isBrowser && /(edge)/i.test(navigator.userAgent);
      /**
       * Whether the current rendering engine is Microsoft Trident.
       */

      this.TRIDENT = this.isBrowser && /(msie|trident)/i.test(navigator.userAgent); // EdgeHTML and Trident mock Blink specific things and need to be excluded from this check.

      /**
       * Whether the current rendering engine is Blink.
       */

      this.BLINK = this.isBrowser && !!(
      /** @type {?} */
      window.chrome || hasV8BreakIterator) && typeof CSS !== 'undefined' && !this.EDGE && !this.TRIDENT; // Webkit is part of the userAgent in EdgeHTML, Blink and Trident. Therefore we need to
      // ensure that Webkit runs standalone and is not used as another engine's base.

      /**
       * Whether the current rendering engine is WebKit.
       */

      this.WEBKIT = this.isBrowser && /AppleWebKit/i.test(navigator.userAgent) && !this.BLINK && !this.EDGE && !this.TRIDENT;
      /**
       * Whether the current platform is Apple iOS.
       */

      this.IOS = this.isBrowser && /iPad|iPhone|iPod/.test(navigator.userAgent) && !('MSStream' in window); // It's difficult to detect the plain Gecko engine, because most of the browsers identify
      // them self as Gecko-like browsers and modify the userAgent's according to that.
      // Since we only cover one explicit Firefox case, we can simply check for Firefox
      // instead of having an unstable check for Gecko.

      /**
       * Whether the current browser is Firefox.
       */

      this.FIREFOX = this.isBrowser && /(firefox|minefield)/i.test(navigator.userAgent);
      /**
       * Whether the current platform is Android.
       */
      // Trident on mobile adds the android platform to the userAgent to trick detections.

      this.ANDROID = this.isBrowser && /android/i.test(navigator.userAgent) && !this.TRIDENT; // Safari browsers will include the Safari keyword in their userAgent. Some browsers may fake
      // this and just place the Safari keyword in the userAgent. To be more safe about Safari every
      // Safari browser should also use Webkit as its layout engine.

      /**
       * Whether the current browser is Safari.
       */

      this.SAFARI = this.isBrowser && /safari/i.test(navigator.userAgent) && this.WEBKIT;
    };

    Platform.ɵfac = function Platform_Factory(t) {
      return new (t || Platform)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], 8));
    };
    /** @nocollapse */


    Platform.ctorParameters = function () {
      return [{
        type: Object,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
        }]
      }];
    };
    /** @nocollapse */


    Platform.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
      factory: function Platform_Factory() {
        return new Platform(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], 8));
      },
      token: Platform,
      providedIn: "root"
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Platform, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: Object,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
          }]
        }];
      }, null);
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/platform/platform-module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var PlatformModule = function PlatformModule() {
      _classCallCheck(this, PlatformModule);
    };

    PlatformModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: PlatformModule
    });
    PlatformModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function PlatformModule_Factory(t) {
        return new (t || PlatformModule)();
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PlatformModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{}]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/platform/features/input-types.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * Cached result Set of input types support by the current browser.
     * @type {?}
     */


    var supportedInputTypes;
    /**
     * Types of `<input>` that *might* be supported.
     * @type {?}
     */

    var candidateInputTypes = [// `color` must come first. Chrome 56 shows a warning if we change the type to `color` after
    // first changing it to something else:
    // The specified value "" does not conform to the required format.
    // The format is "#rrggbb" where rr, gg, bb are two-digit hexadecimal numbers.
    'color', 'button', 'checkbox', 'date', 'datetime-local', 'email', 'file', 'hidden', 'image', 'month', 'number', 'password', 'radio', 'range', 'reset', 'search', 'submit', 'tel', 'text', 'time', 'url', 'week'];
    /**
     * @return {?} The input types supported by this browser.
     */

    function getSupportedInputTypes() {
      // Result is cached.
      if (supportedInputTypes) {
        return supportedInputTypes;
      } // We can't check if an input type is not supported until we're on the browser, so say that
      // everything is supported when not on the browser. We don't use `Platform` here since it's
      // just a helper function and can't inject it.


      if (typeof document !== 'object' || !document) {
        supportedInputTypes = new Set(candidateInputTypes);
        return supportedInputTypes;
      }
      /** @type {?} */


      var featureTestInput = document.createElement('input');
      supportedInputTypes = new Set(candidateInputTypes.filter(
      /**
      * @param {?} value
      * @return {?}
      */
      function (value) {
        featureTestInput.setAttribute('type', value);
        return featureTestInput.type === value;
      }));
      return supportedInputTypes;
    }
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/platform/features/passive-listeners.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * Cached result of whether the user's browser supports passive event listeners.
     * @type {?}
     */


    var supportsPassiveEvents;
    /**
     * Checks whether the user's browser supports passive event listeners.
     * See: https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md
     * @return {?}
     */

    function supportsPassiveEventListeners() {
      if (supportsPassiveEvents == null && typeof window !== 'undefined') {
        try {
          window.addEventListener('test',
          /** @type {?} */
          null, Object.defineProperty({}, 'passive', {
            get:
            /**
            * @return {?}
            */
            function get() {
              return supportsPassiveEvents = true;
            }
          }));
        } finally {
          supportsPassiveEvents = supportsPassiveEvents || false;
        }
      }

      return supportsPassiveEvents;
    }
    /**
     * Normalizes an `AddEventListener` object to something that can be passed
     * to `addEventListener` on any browser, no matter whether it supports the
     * `options` parameter.
     * @param {?} options Object to be normalized.
     * @return {?}
     */


    function normalizePassiveListenerOptions(options) {
      return supportsPassiveEventListeners() ? options : !!options.capture;
    }
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/platform/features/scrolling.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /** @enum {number} */


    var RtlScrollAxisType = {
      /**
       * scrollLeft is 0 when scrolled all the way left and (scrollWidth - clientWidth) when scrolled
       * all the way right.
       */
      NORMAL: 0,

      /**
       * scrollLeft is -(scrollWidth - clientWidth) when scrolled all the way left and 0 when scrolled
       * all the way right.
       */
      NEGATED: 1,

      /**
       * scrollLeft is (scrollWidth - clientWidth) when scrolled all the way left and 0 when scrolled
       * all the way right.
       */
      INVERTED: 2
    };
    /**
     * Cached result of the way the browser handles the horizontal scroll axis in RTL mode.
     * @type {?}
     */

    var rtlScrollAxisType;
    /**
     * Check whether the browser supports scroll behaviors.
     * @return {?}
     */

    function supportsScrollBehavior() {
      return !!(typeof document == 'object' && 'scrollBehavior' in
      /** @type {?} */
      document.documentElement.style);
    }
    /**
     * Checks the type of RTL scroll axis used by this browser. As of time of writing, Chrome is NORMAL,
     * Firefox & Safari are NEGATED, and IE & Edge are INVERTED.
     * @return {?}
     */


    function getRtlScrollAxisType() {
      // We can't check unless we're on the browser. Just assume 'normal' if we're not.
      if (typeof document !== 'object' || !document) {
        return 0
        /* NORMAL */
        ;
      }

      if (rtlScrollAxisType == null) {
        // Create a 1px wide scrolling container and a 2px wide content element.

        /** @type {?} */
        var scrollContainer = document.createElement('div');
        /** @type {?} */

        var containerStyle = scrollContainer.style;
        scrollContainer.dir = 'rtl';
        containerStyle.height = '1px';
        containerStyle.width = '1px';
        containerStyle.overflow = 'auto';
        containerStyle.visibility = 'hidden';
        containerStyle.pointerEvents = 'none';
        containerStyle.position = 'absolute';
        /** @type {?} */

        var content = document.createElement('div');
        /** @type {?} */

        var contentStyle = content.style;
        contentStyle.width = '2px';
        contentStyle.height = '1px';
        scrollContainer.appendChild(content);
        document.body.appendChild(scrollContainer);
        rtlScrollAxisType = 0
        /* NORMAL */
        ; // The viewport starts scrolled all the way to the right in RTL mode. If we are in a NORMAL
        // browser this would mean that the scrollLeft should be 1. If it's zero instead we know we're
        // dealing with one of the other two types of browsers.

        if (scrollContainer.scrollLeft === 0) {
          // In a NEGATED browser the scrollLeft is always somewhere in [-maxScrollAmount, 0]. For an
          // INVERTED browser it is always somewhere in [0, maxScrollAmount]. We can determine which by
          // setting to the scrollLeft to 1. This is past the max for a NEGATED browser, so it will
          // return 0 when we read it again.
          scrollContainer.scrollLeft = 1;
          rtlScrollAxisType = scrollContainer.scrollLeft === 0 ? 1
          /* NEGATED */
          : 2
          /* INVERTED */
          ;
        }

        /** @type {?} */
        scrollContainer.parentNode.removeChild(scrollContainer);
      }

      return rtlScrollAxisType;
    }
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/platform/features/shadow-dom.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /** @type {?} */


    var shadowDomIsSupported;
    /**
     * Checks whether the user's browser support Shadow DOM.
     * @return {?}
     */

    function _supportsShadowDom() {
      if (shadowDomIsSupported == null) {
        /** @type {?} */
        var head = typeof document !== 'undefined' ? document.head : null;
        shadowDomIsSupported = !!(head && (
        /** @type {?} */
        head.createShadowRoot || head.attachShadow));
      }

      return shadowDomIsSupported;
    }
    /**
     * Gets the shadow root of an element, if supported and the element is inside the Shadow DOM.
     * @param {?} element
     * @return {?}
     */


    function _getShadowRoot(element) {
      if (_supportsShadowDom()) {
        /** @type {?} */
        var rootNode = element.getRootNode ? element.getRootNode() : null; // Note that this should be caught by `_supportsShadowDom`, but some
        // teams have been able to hit this code path on unsupported browsers.

        if (typeof ShadowRoot !== 'undefined' && ShadowRoot && rootNode instanceof ShadowRoot) {
          return rootNode;
        }
      }

      return null;
    }
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/platform/public-api.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=platform.js.map

    /***/

  },

  /***/
  "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/portal.js":
  /*!*******************************************************************!*\
    !*** ./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/portal.js ***!
    \*******************************************************************/

  /*! exports provided: BasePortalHost, BasePortalOutlet, CdkPortal, CdkPortalOutlet, ComponentPortal, DomPortal, DomPortalHost, DomPortalOutlet, Portal, PortalHostDirective, PortalInjector, PortalModule, TemplatePortal, TemplatePortalDirective */

  /***/
  function node_modulesAngularCdk__ivy_ngcc__Fesm2015PortalJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BasePortalHost", function () {
      return BasePortalHost;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BasePortalOutlet", function () {
      return BasePortalOutlet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkPortal", function () {
      return CdkPortal;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkPortalOutlet", function () {
      return CdkPortalOutlet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ComponentPortal", function () {
      return ComponentPortal;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DomPortal", function () {
      return DomPortal;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DomPortalHost", function () {
      return DomPortalHost;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DomPortalOutlet", function () {
      return DomPortalOutlet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Portal", function () {
      return Portal;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PortalHostDirective", function () {
      return PortalHostDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PortalInjector", function () {
      return PortalInjector;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PortalModule", function () {
      return PortalModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TemplatePortal", function () {
      return TemplatePortal;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TemplatePortalDirective", function () {
      return TemplatePortalDirective;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/portal/portal-errors.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * Throws an exception when attempting to attach a null portal to a host.
     * \@docs-private
     * @return {?}
     */


    function throwNullPortalError() {
      throw Error('Must provide a portal to attach');
    }
    /**
     * Throws an exception when attempting to attach a portal to a host that is already attached.
     * \@docs-private
     * @return {?}
     */


    function throwPortalAlreadyAttachedError() {
      throw Error('Host already has a portal attached');
    }
    /**
     * Throws an exception when attempting to attach a portal to an already-disposed host.
     * \@docs-private
     * @return {?}
     */


    function throwPortalOutletAlreadyDisposedError() {
      throw Error('This PortalOutlet has already been disposed');
    }
    /**
     * Throws an exception when attempting to attach an unknown portal type.
     * \@docs-private
     * @return {?}
     */


    function throwUnknownPortalTypeError() {
      throw Error('Attempting to attach an unknown Portal type. BasePortalOutlet accepts either ' + 'a ComponentPortal or a TemplatePortal.');
    }
    /**
     * Throws an exception when attempting to attach a portal to a null host.
     * \@docs-private
     * @return {?}
     */


    function throwNullPortalOutletError() {
      throw Error('Attempting to attach a portal to a null PortalOutlet');
    }
    /**
     * Throws an exception when attempting to detach a portal that is not attached.
     * \@docs-private
     * @return {?}
     */


    function throwNoPortalAttachedError() {
      throw Error('Attempting to detach a portal that is not attached to a host');
    }
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/portal/portal.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Interface that can be used to generically type a class.
     * @record
     * @template T
     */


    function ComponentType() {}
    /**
     * A `Portal` is something that you want to render somewhere else.
     * It can be attach to / detached from a `PortalOutlet`.
     * @abstract
     * @template T
     */


    var Portal = /*#__PURE__*/function () {
      function Portal() {
        _classCallCheck(this, Portal);
      }

      _createClass(Portal, [{
        key: "attach",

        /**
         * Attach this portal to a host.
         * @param {?} host
         * @return {?}
         */
        value: function attach(host) {
          if (host == null) {
            throwNullPortalOutletError();
          }

          if (host.hasAttached()) {
            throwPortalAlreadyAttachedError();
          }

          this._attachedHost = host;
          return (
            /** @type {?} */
            host.attach(this)
          );
        }
        /**
         * Detach this portal from its host
         * @return {?}
         */

      }, {
        key: "detach",
        value: function detach() {
          /** @type {?} */
          var host = this._attachedHost;

          if (host == null) {
            throwNoPortalAttachedError();
          } else {
            this._attachedHost = null;
            host.detach();
          }
        }
        /**
         * Whether this portal is attached to a host.
         * @return {?}
         */

      }, {
        key: "setAttachedHost",

        /**
         * Sets the PortalOutlet reference without performing `attach()`. This is used directly by
         * the PortalOutlet when it is performing an `attach()` or `detach()`.
         * @param {?} host
         * @return {?}
         */
        value: function setAttachedHost(host) {
          this._attachedHost = host;
        }
      }, {
        key: "isAttached",
        get: function get() {
          return this._attachedHost != null;
        }
      }]);

      return Portal;
    }();

    if (false) {}
    /**
     * A `ComponentPortal` is a portal that instantiates some Component upon attachment.
     * @template T
     */


    var ComponentPortal = /*#__PURE__*/function (_Portal) {
      _inherits(ComponentPortal, _Portal);

      var _super5 = _createSuper(ComponentPortal);

      /**
       * @param {?} component
       * @param {?=} viewContainerRef
       * @param {?=} injector
       * @param {?=} componentFactoryResolver
       */
      function ComponentPortal(component, viewContainerRef, injector, componentFactoryResolver) {
        var _this28;

        _classCallCheck(this, ComponentPortal);

        _this28 = _super5.call(this);
        _this28.component = component;
        _this28.viewContainerRef = viewContainerRef;
        _this28.injector = injector;
        _this28.componentFactoryResolver = componentFactoryResolver;
        return _this28;
      }

      return ComponentPortal;
    }(Portal);

    if (false) {}
    /**
     * A `TemplatePortal` is a portal that represents some embedded template (TemplateRef).
     * @template C
     */


    var TemplatePortal = /*#__PURE__*/function (_Portal2) {
      _inherits(TemplatePortal, _Portal2);

      var _super6 = _createSuper(TemplatePortal);

      /**
       * @param {?} template
       * @param {?} viewContainerRef
       * @param {?=} context
       */
      function TemplatePortal(template, viewContainerRef, context) {
        var _this29;

        _classCallCheck(this, TemplatePortal);

        _this29 = _super6.call(this);
        _this29.templateRef = template;
        _this29.viewContainerRef = viewContainerRef;
        _this29.context = context;
        return _this29;
      }
      /**
       * @return {?}
       */


      _createClass(TemplatePortal, [{
        key: "attach",

        /**
         * Attach the portal to the provided `PortalOutlet`.
         * When a context is provided it will override the `context` property of the `TemplatePortal`
         * instance.
         * @param {?} host
         * @param {?=} context
         * @return {?}
         */
        value: function attach(host) {
          var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.context;
          this.context = context;
          return _get(_getPrototypeOf(TemplatePortal.prototype), "attach", this).call(this, host);
        }
        /**
         * @return {?}
         */

      }, {
        key: "detach",
        value: function detach() {
          this.context = undefined;
          return _get(_getPrototypeOf(TemplatePortal.prototype), "detach", this).call(this);
        }
      }, {
        key: "origin",
        get: function get() {
          return this.templateRef.elementRef;
        }
      }]);

      return TemplatePortal;
    }(Portal);

    if (false) {}
    /**
     * A `DomPortal` is a portal whose DOM element will be taken from its current position
     * in the DOM and moved into a portal outlet, when it is attached. On detach, the content
     * will be restored to its original position.
     * @template T
     */


    var DomPortal = /*#__PURE__*/function (_Portal3) {
      _inherits(DomPortal, _Portal3);

      var _super7 = _createSuper(DomPortal);

      /**
       * @param {?} element
       */
      function DomPortal(element) {
        var _this30;

        _classCallCheck(this, DomPortal);

        _this30 = _super7.call(this);
        _this30.element = element instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] ? element.nativeElement : element;
        return _this30;
      }

      return DomPortal;
    }(Portal);

    if (false) {}
    /**
     * A `PortalOutlet` is an space that can contain a single `Portal`.
     * @record
     */


    function PortalOutlet() {}

    if (false) {}
    /**
     * Partial implementation of PortalOutlet that handles attaching
     * ComponentPortal and TemplatePortal.
     * @abstract
     */


    var BasePortalOutlet = /*#__PURE__*/function () {
      function BasePortalOutlet() {
        _classCallCheck(this, BasePortalOutlet);

        /**
         * Whether this host has already been permanently disposed.
         */
        this._isDisposed = false; // @breaking-change 10.0.0 `attachDomPortal` to become a required abstract method.

        this.attachDomPortal = null;
      }
      /**
       * Whether this host has an attached portal.
       * @return {?}
       */


      _createClass(BasePortalOutlet, [{
        key: "hasAttached",
        value: function hasAttached() {
          return !!this._attachedPortal;
        }
        /**
         * Attaches a portal.
         * @param {?} portal
         * @return {?}
         */

      }, {
        key: "attach",
        value: function attach(portal) {
          if (!portal) {
            throwNullPortalError();
          }

          if (this.hasAttached()) {
            throwPortalAlreadyAttachedError();
          }

          if (this._isDisposed) {
            throwPortalOutletAlreadyDisposedError();
          }

          if (portal instanceof ComponentPortal) {
            this._attachedPortal = portal;
            return this.attachComponentPortal(portal);
          } else if (portal instanceof TemplatePortal) {
            this._attachedPortal = portal;
            return this.attachTemplatePortal(portal); // @breaking-change 10.0.0 remove null check for `this.attachDomPortal`.
          } else if (this.attachDomPortal && portal instanceof DomPortal) {
            this._attachedPortal = portal;
            return this.attachDomPortal(portal);
          }

          throwUnknownPortalTypeError();
        }
        /**
         * Detaches a previously attached portal.
         * @return {?}
         */

      }, {
        key: "detach",
        value: function detach() {
          if (this._attachedPortal) {
            this._attachedPortal.setAttachedHost(null);

            this._attachedPortal = null;
          }

          this._invokeDisposeFn();
        }
        /**
         * Permanently dispose of this portal host.
         * @return {?}
         */

      }, {
        key: "dispose",
        value: function dispose() {
          if (this.hasAttached()) {
            this.detach();
          }

          this._invokeDisposeFn();

          this._isDisposed = true;
        }
        /**
         * \@docs-private
         * @param {?} fn
         * @return {?}
         */

      }, {
        key: "setDisposeFn",
        value: function setDisposeFn(fn) {
          this._disposeFn = fn;
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_invokeDisposeFn",
        value: function _invokeDisposeFn() {
          if (this._disposeFn) {
            this._disposeFn();

            this._disposeFn = null;
          }
        }
      }]);

      return BasePortalOutlet;
    }();

    if (false) {}
    /**
     * @deprecated Use `BasePortalOutlet` instead.
     * \@breaking-change 9.0.0
     * @abstract
     */


    var BasePortalHost = /*#__PURE__*/function (_BasePortalOutlet) {
      _inherits(BasePortalHost, _BasePortalOutlet);

      var _super8 = _createSuper(BasePortalHost);

      function BasePortalHost() {
        _classCallCheck(this, BasePortalHost);

        return _super8.apply(this, arguments);
      }

      return BasePortalHost;
    }(BasePortalOutlet);
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/portal/dom-portal-outlet.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * A PortalOutlet for attaching portals to an arbitrary DOM element outside of the Angular
     * application context.
     */


    var DomPortalOutlet = /*#__PURE__*/function (_BasePortalOutlet2) {
      _inherits(DomPortalOutlet, _BasePortalOutlet2);

      var _super9 = _createSuper(DomPortalOutlet);

      /**
       * @param {?} outletElement
       * @param {?} _componentFactoryResolver
       * @param {?} _appRef
       * @param {?} _defaultInjector
       * @param {?=} _document
       */
      function DomPortalOutlet(outletElement, _componentFactoryResolver, _appRef, _defaultInjector,
      /**
       * @deprecated `_document` Parameter to be made required.
       * @breaking-change 10.0.0
       */
      _document) {
        var _thisSuper, _this31;

        _classCallCheck(this, DomPortalOutlet);

        _this31 = _super9.call(this);
        _this31.outletElement = outletElement;
        _this31._componentFactoryResolver = _componentFactoryResolver;
        _this31._appRef = _appRef;
        _this31._defaultInjector = _defaultInjector;
        /**
         * Attaches a DOM portal by transferring its content into the outlet.
         * @param portal Portal to be attached.
         * @deprecated To be turned into a method.
         * \@breaking-change 10.0.0
         */

        _this31.attachDomPortal =
        /**
        * @param {?} portal
        * @return {?}
        */
        function (portal) {
          // @breaking-change 10.0.0 Remove check and error once the
          // `_document` constructor parameter is required.
          if (!_this31._document) {
            throw Error('Cannot attach DOM portal without _document constructor parameter');
          }
          /** @type {?} */


          var element = portal.element;

          if (!element.parentNode) {
            throw Error('DOM portal content must be attached to a parent node.');
          } // Anchor used to save the element's previous position so
          // that we can restore it when the portal is detached.

          /** @type {?} */


          var anchorNode = _this31._document.createComment('dom-portal');

          element.parentNode.insertBefore(anchorNode, element);

          _this31.outletElement.appendChild(element);

          _get((_thisSuper = _assertThisInitialized(_this31), _getPrototypeOf(DomPortalOutlet.prototype)), "setDisposeFn", _thisSuper).call(_thisSuper,
          /**
          * @return {?}
          */
          function () {
            // We can't use `replaceWith` here because IE doesn't support it.
            if (anchorNode.parentNode) {
              anchorNode.parentNode.replaceChild(element, anchorNode);
            }
          });
        };

        _this31._document = _document;
        return _this31;
      }
      /**
       * Attach the given ComponentPortal to DOM element using the ComponentFactoryResolver.
       * @template T
       * @param {?} portal Portal to be attached
       * @return {?} Reference to the created component.
       */


      _createClass(DomPortalOutlet, [{
        key: "attachComponentPortal",
        value: function attachComponentPortal(portal) {
          var _this32 = this;

          /** @type {?} */
          var resolver = portal.componentFactoryResolver || this._componentFactoryResolver;
          /** @type {?} */

          var componentFactory = resolver.resolveComponentFactory(portal.component);
          /** @type {?} */

          var componentRef; // If the portal specifies a ViewContainerRef, we will use that as the attachment point
          // for the component (in terms of Angular's component tree, not rendering).
          // When the ViewContainerRef is missing, we use the factory to create the component directly
          // and then manually attach the view to the application.

          if (portal.viewContainerRef) {
            componentRef = portal.viewContainerRef.createComponent(componentFactory, portal.viewContainerRef.length, portal.injector || portal.viewContainerRef.injector);
            this.setDisposeFn(
            /**
            * @return {?}
            */
            function () {
              return componentRef.destroy();
            });
          } else {
            componentRef = componentFactory.create(portal.injector || this._defaultInjector);

            this._appRef.attachView(componentRef.hostView);

            this.setDisposeFn(
            /**
            * @return {?}
            */
            function () {
              _this32._appRef.detachView(componentRef.hostView);

              componentRef.destroy();
            });
          } // At this point the component has been instantiated, so we move it to the location in the DOM
          // where we want it to be rendered.


          this.outletElement.appendChild(this._getComponentRootNode(componentRef));
          return componentRef;
        }
        /**
         * Attaches a template portal to the DOM as an embedded view.
         * @template C
         * @param {?} portal Portal to be attached.
         * @return {?} Reference to the created embedded view.
         */

      }, {
        key: "attachTemplatePortal",
        value: function attachTemplatePortal(portal) {
          var _this33 = this;

          /** @type {?} */
          var viewContainer = portal.viewContainerRef;
          /** @type {?} */

          var viewRef = viewContainer.createEmbeddedView(portal.templateRef, portal.context);
          viewRef.detectChanges(); // The method `createEmbeddedView` will add the view as a child of the viewContainer.
          // But for the DomPortalOutlet the view can be added everywhere in the DOM
          // (e.g Overlay Container) To move the view to the specified host element. We just
          // re-append the existing root nodes.

          viewRef.rootNodes.forEach(
          /**
          * @param {?} rootNode
          * @return {?}
          */
          function (rootNode) {
            return _this33.outletElement.appendChild(rootNode);
          });
          this.setDisposeFn(
          /**
          * @return {?}
          */
          function () {
            /** @type {?} */
            var index = viewContainer.indexOf(viewRef);

            if (index !== -1) {
              viewContainer.remove(index);
            }
          }); // TODO(jelbourn): Return locals from view.

          return viewRef;
        }
        /**
         * Clears out a portal from the DOM.
         * @return {?}
         */

      }, {
        key: "dispose",
        value: function dispose() {
          _get(_getPrototypeOf(DomPortalOutlet.prototype), "dispose", this).call(this);

          if (this.outletElement.parentNode != null) {
            this.outletElement.parentNode.removeChild(this.outletElement);
          }
        }
        /**
         * Gets the root HTMLElement for an instantiated component.
         * @private
         * @param {?} componentRef
         * @return {?}
         */

      }, {
        key: "_getComponentRootNode",
        value: function _getComponentRootNode(componentRef) {
          return (
            /** @type {?} */

            /** @type {?} */
            componentRef.hostView.rootNodes[0]
          );
        }
      }]);

      return DomPortalOutlet;
    }(BasePortalOutlet);

    if (false) {}
    /**
     * @deprecated Use `DomPortalOutlet` instead.
     * \@breaking-change 9.0.0
     */


    var DomPortalHost = /*#__PURE__*/function (_DomPortalOutlet) {
      _inherits(DomPortalHost, _DomPortalOutlet);

      var _super10 = _createSuper(DomPortalHost);

      function DomPortalHost() {
        _classCallCheck(this, DomPortalHost);

        return _super10.apply(this, arguments);
      }

      return DomPortalHost;
    }(DomPortalOutlet);
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/portal/portal-directives.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Directive version of a `TemplatePortal`. Because the directive *is* a TemplatePortal,
     * the directive instance itself can be attached to a host, enabling declarative use of portals.
     */


    var CdkPortal = /*#__PURE__*/function (_TemplatePortal) {
      _inherits(CdkPortal, _TemplatePortal);

      var _super11 = _createSuper(CdkPortal);

      /**
       * @param {?} templateRef
       * @param {?} viewContainerRef
       */
      function CdkPortal(templateRef, viewContainerRef) {
        _classCallCheck(this, CdkPortal);

        return _super11.call(this, templateRef, viewContainerRef);
      }

      return CdkPortal;
    }(TemplatePortal);

    CdkPortal.ɵfac = function CdkPortal_Factory(t) {
      return new (t || CdkPortal)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]));
    };

    CdkPortal.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: CdkPortal,
      selectors: [["", "cdkPortal", ""]],
      exportAs: ["cdkPortal"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
    });
    /** @nocollapse */

    CdkPortal.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]
      }];
    };
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CdkPortal, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[cdkPortal]',
          exportAs: 'cdkPortal'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]
        }];
      }, null);
    })();
    /**
     * @deprecated Use `CdkPortal` instead.
     * \@breaking-change 9.0.0
     */


    var TemplatePortalDirective = /*#__PURE__*/function (_CdkPortal) {
      _inherits(TemplatePortalDirective, _CdkPortal);

      var _super12 = _createSuper(TemplatePortalDirective);

      function TemplatePortalDirective() {
        _classCallCheck(this, TemplatePortalDirective);

        return _super12.apply(this, arguments);
      }

      return TemplatePortalDirective;
    }(CdkPortal);

    TemplatePortalDirective.ɵfac = function TemplatePortalDirective_Factory(t) {
      return ɵTemplatePortalDirective_BaseFactory(t || TemplatePortalDirective);
    };

    TemplatePortalDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: TemplatePortalDirective,
      selectors: [["", "cdk-portal", ""], ["", "portal", ""]],
      exportAs: ["cdkPortal"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
        provide: CdkPortal,
        useExisting: TemplatePortalDirective
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
    });

    var ɵTemplatePortalDirective_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](TemplatePortalDirective);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TemplatePortalDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[cdk-portal], [portal]',
          exportAs: 'cdkPortal',
          providers: [{
            provide: CdkPortal,
            useExisting: TemplatePortalDirective
          }]
        }]
      }], null, null);
    })();
    /**
     * Directive version of a PortalOutlet. Because the directive *is* a PortalOutlet, portals can be
     * directly attached to it, enabling declarative use.
     *
     * Usage:
     * `<ng-template [cdkPortalOutlet]="greeting"></ng-template>`
     */


    var CdkPortalOutlet = /*#__PURE__*/function (_BasePortalOutlet3) {
      _inherits(CdkPortalOutlet, _BasePortalOutlet3);

      var _super13 = _createSuper(CdkPortalOutlet);

      /**
       * @param {?} _componentFactoryResolver
       * @param {?} _viewContainerRef
       * @param {?=} _document
       */
      function CdkPortalOutlet(_componentFactoryResolver, _viewContainerRef,
      /**
       * @deprecated `_document` parameter to be made required.
       * @breaking-change 9.0.0
       */
      _document) {
        var _thisSuper2, _this34;

        _classCallCheck(this, CdkPortalOutlet);

        _this34 = _super13.call(this);
        _this34._componentFactoryResolver = _componentFactoryResolver;
        _this34._viewContainerRef = _viewContainerRef;
        /**
         * Whether the portal component is initialized.
         */

        _this34._isInitialized = false;
        /**
         * Emits when a portal is attached to the outlet.
         */

        _this34.attached = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Attaches the given DomPortal to this PortalHost by moving all of the portal content into it.
         * @param portal Portal to be attached.
         * @deprecated To be turned into a method.
         * \@breaking-change 10.0.0
         */

        _this34.attachDomPortal =
        /**
        * @param {?} portal
        * @return {?}
        */
        function (portal) {
          // @breaking-change 9.0.0 Remove check and error once the
          // `_document` constructor parameter is required.
          if (!_this34._document) {
            throw Error('Cannot attach DOM portal without _document constructor parameter');
          }
          /** @type {?} */


          var element = portal.element;

          if (!element.parentNode) {
            throw Error('DOM portal content must be attached to a parent node.');
          } // Anchor used to save the element's previous position so
          // that we can restore it when the portal is detached.

          /** @type {?} */


          var anchorNode = _this34._document.createComment('dom-portal');

          portal.setAttachedHost(_assertThisInitialized(_this34));
          element.parentNode.insertBefore(anchorNode, element);

          _this34._getRootNode().appendChild(element);

          _get((_thisSuper2 = _assertThisInitialized(_this34), _getPrototypeOf(CdkPortalOutlet.prototype)), "setDisposeFn", _thisSuper2).call(_thisSuper2,
          /**
          * @return {?}
          */
          function () {
            if (anchorNode.parentNode) {
              /** @type {?} */
              anchorNode.parentNode.replaceChild(element, anchorNode);
            }
          });
        };

        _this34._document = _document;
        return _this34;
      }
      /**
       * Portal associated with the Portal outlet.
       * @return {?}
       */


      _createClass(CdkPortalOutlet, [{
        key: "ngOnInit",

        /**
         * @return {?}
         */
        value: function ngOnInit() {
          this._isInitialized = true;
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          _get(_getPrototypeOf(CdkPortalOutlet.prototype), "dispose", this).call(this);

          this._attachedPortal = null;
          this._attachedRef = null;
        }
        /**
         * Attach the given ComponentPortal to this PortalOutlet using the ComponentFactoryResolver.
         *
         * @template T
         * @param {?} portal Portal to be attached to the portal outlet.
         * @return {?} Reference to the created component.
         */

      }, {
        key: "attachComponentPortal",
        value: function attachComponentPortal(portal) {
          portal.setAttachedHost(this); // If the portal specifies an origin, use that as the logical location of the component
          // in the application tree. Otherwise use the location of this PortalOutlet.

          /** @type {?} */

          var viewContainerRef = portal.viewContainerRef != null ? portal.viewContainerRef : this._viewContainerRef;
          /** @type {?} */

          var resolver = portal.componentFactoryResolver || this._componentFactoryResolver;
          /** @type {?} */

          var componentFactory = resolver.resolveComponentFactory(portal.component);
          /** @type {?} */

          var ref = viewContainerRef.createComponent(componentFactory, viewContainerRef.length, portal.injector || viewContainerRef.injector); // If we're using a view container that's different from the injected one (e.g. when the portal
          // specifies its own) we need to move the component into the outlet, otherwise it'll be rendered
          // inside of the alternate view container.

          if (viewContainerRef !== this._viewContainerRef) {
            this._getRootNode().appendChild(
            /** @type {?} */
            ref.hostView.rootNodes[0]);
          }

          _get(_getPrototypeOf(CdkPortalOutlet.prototype), "setDisposeFn", this).call(this,
          /**
          * @return {?}
          */
          function () {
            return ref.destroy();
          });

          this._attachedPortal = portal;
          this._attachedRef = ref;
          this.attached.emit(ref);
          return ref;
        }
        /**
         * Attach the given TemplatePortal to this PortalHost as an embedded View.
         * @template C
         * @param {?} portal Portal to be attached.
         * @return {?} Reference to the created embedded view.
         */

      }, {
        key: "attachTemplatePortal",
        value: function attachTemplatePortal(portal) {
          var _this35 = this;

          portal.setAttachedHost(this);
          /** @type {?} */

          var viewRef = this._viewContainerRef.createEmbeddedView(portal.templateRef, portal.context);

          _get(_getPrototypeOf(CdkPortalOutlet.prototype), "setDisposeFn", this).call(this,
          /**
          * @return {?}
          */
          function () {
            return _this35._viewContainerRef.clear();
          });

          this._attachedPortal = portal;
          this._attachedRef = viewRef;
          this.attached.emit(viewRef);
          return viewRef;
        }
        /**
         * Gets the root node of the portal outlet.
         * @private
         * @return {?}
         */

      }, {
        key: "_getRootNode",
        value: function _getRootNode() {
          /** @type {?} */
          var nativeElement = this._viewContainerRef.element.nativeElement; // The directive could be set on a template which will result in a comment
          // node being the root. Use the comment's parent node if that is the case.

          return (
            /** @type {?} */
            nativeElement.nodeType === nativeElement.ELEMENT_NODE ? nativeElement :
            /** @type {?} */
            nativeElement.parentNode
          );
        }
      }, {
        key: "portal",
        get: function get() {
          return this._attachedPortal;
        }
        /**
         * @param {?} portal
         * @return {?}
         */
        ,
        set: function set(portal) {
          // Ignore the cases where the `portal` is set to a falsy value before the lifecycle hooks have
          // run. This handles the cases where the user might do something like `<div cdkPortalOutlet>`
          // and attach a portal programmatically in the parent component. When Angular does the first CD
          // round, it will fire the setter with empty string, causing the user's content to be cleared.
          if (this.hasAttached() && !portal && !this._isInitialized) {
            return;
          }

          if (this.hasAttached()) {
            _get(_getPrototypeOf(CdkPortalOutlet.prototype), "detach", this).call(this);
          }

          if (portal) {
            _get(_getPrototypeOf(CdkPortalOutlet.prototype), "attach", this).call(this, portal);
          }

          this._attachedPortal = portal;
        }
        /**
         * Component or view reference that is attached to the portal.
         * @return {?}
         */

      }, {
        key: "attachedRef",
        get: function get() {
          return this._attachedRef;
        }
      }]);

      return CdkPortalOutlet;
    }(BasePortalOutlet);

    CdkPortalOutlet.ɵfac = function CdkPortalOutlet_Factory(t) {
      return new (t || CdkPortalOutlet)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]));
    };

    CdkPortalOutlet.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: CdkPortalOutlet,
      selectors: [["", "cdkPortalOutlet", ""]],
      inputs: {
        portal: ["cdkPortalOutlet", "portal"]
      },
      outputs: {
        attached: "attached"
      },
      exportAs: ["cdkPortalOutlet"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
    });
    /** @nocollapse */

    CdkPortalOutlet.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
        }]
      }];
    };

    CdkPortalOutlet.propDecorators = {
      attached: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CdkPortalOutlet, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[cdkPortalOutlet]',
          exportAs: 'cdkPortalOutlet',
          inputs: ['portal: cdkPortalOutlet']
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
          }]
        }];
      }, {
        attached: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();

    if (false) {}
    /**
     * @deprecated Use `CdkPortalOutlet` instead.
     * \@breaking-change 9.0.0
     */


    var PortalHostDirective = /*#__PURE__*/function (_CdkPortalOutlet) {
      _inherits(PortalHostDirective, _CdkPortalOutlet);

      var _super14 = _createSuper(PortalHostDirective);

      function PortalHostDirective() {
        _classCallCheck(this, PortalHostDirective);

        return _super14.apply(this, arguments);
      }

      return PortalHostDirective;
    }(CdkPortalOutlet);

    PortalHostDirective.ɵfac = function PortalHostDirective_Factory(t) {
      return ɵPortalHostDirective_BaseFactory(t || PortalHostDirective);
    };

    PortalHostDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: PortalHostDirective,
      selectors: [["", "cdkPortalHost", ""], ["", "portalHost", ""]],
      inputs: {
        portal: ["cdkPortalHost", "portal"]
      },
      exportAs: ["cdkPortalHost"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
        provide: CdkPortalOutlet,
        useExisting: PortalHostDirective
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
    });

    var ɵPortalHostDirective_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](PortalHostDirective);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PortalHostDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[cdkPortalHost], [portalHost]',
          exportAs: 'cdkPortalHost',
          inputs: ['portal: cdkPortalHost'],
          providers: [{
            provide: CdkPortalOutlet,
            useExisting: PortalHostDirective
          }]
        }]
      }], null, null);
    })();

    var PortalModule = function PortalModule() {
      _classCallCheck(this, PortalModule);
    };

    PortalModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: PortalModule
    });
    PortalModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function PortalModule_Factory(t) {
        return new (t || PortalModule)();
      }
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PortalModule, {
        declarations: [CdkPortal, CdkPortalOutlet, TemplatePortalDirective, PortalHostDirective],
        exports: [CdkPortal, CdkPortalOutlet, TemplatePortalDirective, PortalHostDirective]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PortalModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          exports: [CdkPortal, CdkPortalOutlet, TemplatePortalDirective, PortalHostDirective],
          declarations: [CdkPortal, CdkPortalOutlet, TemplatePortalDirective, PortalHostDirective]
        }]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/portal/portal-injector.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * Custom injector to be used when providing custom
     * injection tokens to components inside a portal.
     * \@docs-private
     */


    var PortalInjector = /*#__PURE__*/function () {
      /**
       * @param {?} _parentInjector
       * @param {?} _customTokens
       */
      function PortalInjector(_parentInjector, _customTokens) {
        _classCallCheck(this, PortalInjector);

        this._parentInjector = _parentInjector;
        this._customTokens = _customTokens;
      }
      /**
       * @param {?} token
       * @param {?=} notFoundValue
       * @return {?}
       */


      _createClass(PortalInjector, [{
        key: "get",
        value: function get(token, notFoundValue) {
          /** @type {?} */
          var value = this._customTokens.get(token);

          if (typeof value !== 'undefined') {
            return value;
          }

          return this._parentInjector.get(token, notFoundValue);
        }
      }]);

      return PortalInjector;
    }();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/portal/public-api.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=portal.js.map

    /***/

  },

  /***/
  "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/scrolling.js":
  /*!**********************************************************************!*\
    !*** ./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/scrolling.js ***!
    \**********************************************************************/

  /*! exports provided: CdkFixedSizeVirtualScroll, CdkScrollable, CdkScrollableModule, CdkVirtualForOf, CdkVirtualScrollViewport, DEFAULT_RESIZE_TIME, DEFAULT_SCROLL_TIME, FixedSizeVirtualScrollStrategy, ScrollDispatcher, ScrollingModule, VIRTUAL_SCROLL_STRATEGY, ViewportRuler, _fixedSizeVirtualScrollStrategyFactory */

  /***/
  function node_modulesAngularCdk__ivy_ngcc__Fesm2015ScrollingJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkFixedSizeVirtualScroll", function () {
      return CdkFixedSizeVirtualScroll;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkScrollable", function () {
      return CdkScrollable;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkScrollableModule", function () {
      return CdkScrollableModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkVirtualForOf", function () {
      return CdkVirtualForOf;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkVirtualScrollViewport", function () {
      return CdkVirtualScrollViewport;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DEFAULT_RESIZE_TIME", function () {
      return DEFAULT_RESIZE_TIME;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DEFAULT_SCROLL_TIME", function () {
      return DEFAULT_SCROLL_TIME;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FixedSizeVirtualScrollStrategy", function () {
      return FixedSizeVirtualScrollStrategy;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ScrollDispatcher", function () {
      return ScrollDispatcher;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ScrollingModule", function () {
      return ScrollingModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VIRTUAL_SCROLL_STRATEGY", function () {
      return VIRTUAL_SCROLL_STRATEGY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ViewportRuler", function () {
      return ViewportRuler;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "_fixedSizeVirtualScrollStrategyFactory", function () {
      return _fixedSizeVirtualScrollStrategyFactory;
    });
    /* harmony import */


    var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/cdk/coercion */
    "./node_modules/@angular/cdk/fesm2015/coercion.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/cdk/platform */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/platform.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/cdk/bidi */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/bidi.js");
    /* harmony import */


    var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/cdk/collections */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/collections.js");
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/scrolling/virtual-scroll-strategy.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * The injection token used to specify the virtual scrolling strategy.
     * @type {?}
     */


    var _c0 = ["contentWrapper"];
    var _c1 = ["*"];
    var VIRTUAL_SCROLL_STRATEGY = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('VIRTUAL_SCROLL_STRATEGY');
    /**
     * A strategy that dictates which items should be rendered in the viewport.
     * @record
     */

    function VirtualScrollStrategy() {}

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/scrolling/fixed-size-virtual-scroll.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Virtual scrolling strategy for lists with items of known fixed size.
     */


    var FixedSizeVirtualScrollStrategy = /*#__PURE__*/function () {
      /**
       * @param {?} itemSize The size of the items in the virtually scrolling list.
       * @param {?} minBufferPx The minimum amount of buffer (in pixels) before needing to render more
       * @param {?} maxBufferPx The amount of buffer (in pixels) to render when rendering more.
       */
      function FixedSizeVirtualScrollStrategy(itemSize, minBufferPx, maxBufferPx) {
        _classCallCheck(this, FixedSizeVirtualScrollStrategy);

        this._scrolledIndexChange = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * \@docs-private Implemented as part of VirtualScrollStrategy.
         */

        this.scrolledIndexChange = this._scrolledIndexChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])());
        /**
         * The attached viewport.
         */

        this._viewport = null;
        this._itemSize = itemSize;
        this._minBufferPx = minBufferPx;
        this._maxBufferPx = maxBufferPx;
      }
      /**
       * Attaches this scroll strategy to a viewport.
       * @param {?} viewport The viewport to attach this strategy to.
       * @return {?}
       */


      _createClass(FixedSizeVirtualScrollStrategy, [{
        key: "attach",
        value: function attach(viewport) {
          this._viewport = viewport;

          this._updateTotalContentSize();

          this._updateRenderedRange();
        }
        /**
         * Detaches this scroll strategy from the currently attached viewport.
         * @return {?}
         */

      }, {
        key: "detach",
        value: function detach() {
          this._scrolledIndexChange.complete();

          this._viewport = null;
        }
        /**
         * Update the item size and buffer size.
         * @param {?} itemSize The size of the items in the virtually scrolling list.
         * @param {?} minBufferPx The minimum amount of buffer (in pixels) before needing to render more
         * @param {?} maxBufferPx The amount of buffer (in pixels) to render when rendering more.
         * @return {?}
         */

      }, {
        key: "updateItemAndBufferSize",
        value: function updateItemAndBufferSize(itemSize, minBufferPx, maxBufferPx) {
          if (maxBufferPx < minBufferPx) {
            throw Error('CDK virtual scroll: maxBufferPx must be greater than or equal to minBufferPx');
          }

          this._itemSize = itemSize;
          this._minBufferPx = minBufferPx;
          this._maxBufferPx = maxBufferPx;

          this._updateTotalContentSize();

          this._updateRenderedRange();
        }
        /**
         * \@docs-private Implemented as part of VirtualScrollStrategy.
         * @return {?}
         */

      }, {
        key: "onContentScrolled",
        value: function onContentScrolled() {
          this._updateRenderedRange();
        }
        /**
         * \@docs-private Implemented as part of VirtualScrollStrategy.
         * @return {?}
         */

      }, {
        key: "onDataLengthChanged",
        value: function onDataLengthChanged() {
          this._updateTotalContentSize();

          this._updateRenderedRange();
        }
        /**
         * \@docs-private Implemented as part of VirtualScrollStrategy.
         * @return {?}
         */

      }, {
        key: "onContentRendered",
        value: function onContentRendered() {}
        /**
         * \@docs-private Implemented as part of VirtualScrollStrategy.
         * @return {?}
         */

      }, {
        key: "onRenderedOffsetChanged",
        value: function onRenderedOffsetChanged() {}
        /**
         * Scroll to the offset for the given index.
         * @param {?} index The index of the element to scroll to.
         * @param {?} behavior The ScrollBehavior to use when scrolling.
         * @return {?}
         */

      }, {
        key: "scrollToIndex",
        value: function scrollToIndex(index, behavior) {
          if (this._viewport) {
            this._viewport.scrollToOffset(index * this._itemSize, behavior);
          }
        }
        /**
         * Update the viewport's total content size.
         * @private
         * @return {?}
         */

      }, {
        key: "_updateTotalContentSize",
        value: function _updateTotalContentSize() {
          if (!this._viewport) {
            return;
          }

          this._viewport.setTotalContentSize(this._viewport.getDataLength() * this._itemSize);
        }
        /**
         * Update the viewport's rendered range.
         * @private
         * @return {?}
         */

      }, {
        key: "_updateRenderedRange",
        value: function _updateRenderedRange() {
          if (!this._viewport) {
            return;
          }
          /** @type {?} */


          var scrollOffset = this._viewport.measureScrollOffset();
          /** @type {?} */


          var firstVisibleIndex = scrollOffset / this._itemSize;
          /** @type {?} */

          var renderedRange = this._viewport.getRenderedRange();
          /** @type {?} */


          var newRange = {
            start: renderedRange.start,
            end: renderedRange.end
          };
          /** @type {?} */

          var viewportSize = this._viewport.getViewportSize();
          /** @type {?} */


          var dataLength = this._viewport.getDataLength();
          /** @type {?} */


          var startBuffer = scrollOffset - newRange.start * this._itemSize;

          if (startBuffer < this._minBufferPx && newRange.start != 0) {
            /** @type {?} */
            var expandStart = Math.ceil((this._maxBufferPx - startBuffer) / this._itemSize);
            newRange.start = Math.max(0, newRange.start - expandStart);
            newRange.end = Math.min(dataLength, Math.ceil(firstVisibleIndex + (viewportSize + this._minBufferPx) / this._itemSize));
          } else {
            /** @type {?} */
            var endBuffer = newRange.end * this._itemSize - (scrollOffset + viewportSize);

            if (endBuffer < this._minBufferPx && newRange.end != dataLength) {
              /** @type {?} */
              var expandEnd = Math.ceil((this._maxBufferPx - endBuffer) / this._itemSize);

              if (expandEnd > 0) {
                newRange.end = Math.min(dataLength, newRange.end + expandEnd);
                newRange.start = Math.max(0, Math.floor(firstVisibleIndex - this._minBufferPx / this._itemSize));
              }
            }
          }

          this._viewport.setRenderedRange(newRange);

          this._viewport.setRenderedContentOffset(this._itemSize * newRange.start);

          this._scrolledIndexChange.next(Math.floor(firstVisibleIndex));
        }
      }]);

      return FixedSizeVirtualScrollStrategy;
    }();

    if (false) {}
    /**
     * Provider factory for `FixedSizeVirtualScrollStrategy` that simply extracts the already created
     * `FixedSizeVirtualScrollStrategy` from the given directive.
     * @param {?} fixedSizeDir The instance of `CdkFixedSizeVirtualScroll` to extract the
     *     `FixedSizeVirtualScrollStrategy` from.
     * @return {?}
     */


    function _fixedSizeVirtualScrollStrategyFactory(fixedSizeDir) {
      return fixedSizeDir._scrollStrategy;
    }
    /**
     * A virtual scroll strategy that supports fixed-size items.
     */


    var CdkFixedSizeVirtualScroll = /*#__PURE__*/function () {
      function CdkFixedSizeVirtualScroll() {
        _classCallCheck(this, CdkFixedSizeVirtualScroll);

        this._itemSize = 20;
        this._minBufferPx = 100;
        this._maxBufferPx = 200;
        /**
         * The scroll strategy used by this directive.
         */

        this._scrollStrategy = new FixedSizeVirtualScrollStrategy(this.itemSize, this.minBufferPx, this.maxBufferPx);
      }
      /**
       * The size of the items in the list (in pixels).
       * @return {?}
       */


      _createClass(CdkFixedSizeVirtualScroll, [{
        key: "ngOnChanges",

        /**
         * @return {?}
         */
        value: function ngOnChanges() {
          this._scrollStrategy.updateItemAndBufferSize(this.itemSize, this.minBufferPx, this.maxBufferPx);
        }
      }, {
        key: "itemSize",
        get: function get() {
          return this._itemSize;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._itemSize = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceNumberProperty"])(value);
        }
        /**
         * The minimum amount of buffer rendered beyond the viewport (in pixels).
         * If the amount of buffer dips below this number, more items will be rendered. Defaults to 100px.
         * @return {?}
         */

      }, {
        key: "minBufferPx",
        get: function get() {
          return this._minBufferPx;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._minBufferPx = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceNumberProperty"])(value);
        }
        /**
         * The number of pixels worth of buffer to render for when rendering new items. Defaults to 200px.
         * @return {?}
         */

      }, {
        key: "maxBufferPx",
        get: function get() {
          return this._maxBufferPx;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._maxBufferPx = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceNumberProperty"])(value);
        }
      }]);

      return CdkFixedSizeVirtualScroll;
    }();

    CdkFixedSizeVirtualScroll.ɵfac = function CdkFixedSizeVirtualScroll_Factory(t) {
      return new (t || CdkFixedSizeVirtualScroll)();
    };

    CdkFixedSizeVirtualScroll.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: CdkFixedSizeVirtualScroll,
      selectors: [["cdk-virtual-scroll-viewport", "itemSize", ""]],
      inputs: {
        itemSize: "itemSize",
        minBufferPx: "minBufferPx",
        maxBufferPx: "maxBufferPx"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
        provide: VIRTUAL_SCROLL_STRATEGY,
        useFactory: _fixedSizeVirtualScrollStrategyFactory,
        deps: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(
        /**
        * @return {?}
        */
        function () {
          return CdkFixedSizeVirtualScroll;
        })]
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]]
    });
    CdkFixedSizeVirtualScroll.propDecorators = {
      itemSize: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      minBufferPx: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      maxBufferPx: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CdkFixedSizeVirtualScroll, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: 'cdk-virtual-scroll-viewport[itemSize]',
          providers: [{
            provide: VIRTUAL_SCROLL_STRATEGY,
            useFactory: _fixedSizeVirtualScrollStrategyFactory,
            deps: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(
            /**
            * @return {?}
            */
            function () {
              return CdkFixedSizeVirtualScroll;
            })]
          }]
        }]
      }], function () {
        return [];
      }, {
        itemSize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        minBufferPx: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        maxBufferPx: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/scrolling/scroll-dispatcher.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Time in ms to throttle the scrolling events by default.
     * @type {?}
     */


    var DEFAULT_SCROLL_TIME = 20;
    /**
     * Service contained all registered Scrollable references and emits an event when any one of the
     * Scrollable references emit a scrolled event.
     */

    var ScrollDispatcher = /*#__PURE__*/function () {
      /**
       * @param {?} _ngZone
       * @param {?} _platform
       * @param {?=} document
       */
      function ScrollDispatcher(_ngZone, _platform,
      /** @breaking-change 11.0.0 make document required */
      document) {
        _classCallCheck(this, ScrollDispatcher);

        this._ngZone = _ngZone;
        this._platform = _platform;
        /**
         * Subject for notifying that a registered scrollable reference element has been scrolled.
         */

        this._scrolled = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Keeps track of the global `scroll` and `resize` subscriptions.
         */

        this._globalSubscription = null;
        /**
         * Keeps track of the amount of subscriptions to `scrolled`. Used for cleaning up afterwards.
         */

        this._scrolledCount = 0;
        /**
         * Map of all the scrollable references that are registered with the service and their
         * scroll event subscriptions.
         */

        this.scrollContainers = new Map();
        this._document = document;
      }
      /**
       * Registers a scrollable instance with the service and listens for its scrolled events. When the
       * scrollable is scrolled, the service emits the event to its scrolled observable.
       * @param {?} scrollable Scrollable instance to be registered.
       * @return {?}
       */


      _createClass(ScrollDispatcher, [{
        key: "register",
        value: function register(scrollable) {
          var _this36 = this;

          if (!this.scrollContainers.has(scrollable)) {
            this.scrollContainers.set(scrollable, scrollable.elementScrolled().subscribe(
            /**
            * @return {?}
            */
            function () {
              return _this36._scrolled.next(scrollable);
            }));
          }
        }
        /**
         * Deregisters a Scrollable reference and unsubscribes from its scroll event observable.
         * @param {?} scrollable Scrollable instance to be deregistered.
         * @return {?}
         */

      }, {
        key: "deregister",
        value: function deregister(scrollable) {
          /** @type {?} */
          var scrollableReference = this.scrollContainers.get(scrollable);

          if (scrollableReference) {
            scrollableReference.unsubscribe();
            this.scrollContainers["delete"](scrollable);
          }
        }
        /**
         * Returns an observable that emits an event whenever any of the registered Scrollable
         * references (or window, document, or body) fire a scrolled event. Can provide a time in ms
         * to override the default "throttle" time.
         *
         * **Note:** in order to avoid hitting change detection for every scroll event,
         * all of the events emitted from this stream will be run outside the Angular zone.
         * If you need to update any data bindings as a result of a scroll event, you have
         * to run the callback using `NgZone.run`.
         * @param {?=} auditTimeInMs
         * @return {?}
         */

      }, {
        key: "scrolled",
        value: function scrolled() {
          var _this37 = this;

          var auditTimeInMs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_SCROLL_TIME;

          if (!this._platform.isBrowser) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])();
          }

          return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](
          /**
          * @param {?} observer
          * @return {?}
          */
          function (observer) {
            if (!_this37._globalSubscription) {
              _this37._addGlobalListener();
            } // In the case of a 0ms delay, use an observable without auditTime
            // since it does add a perceptible delay in processing overhead.

            /** @type {?} */


            var subscription = auditTimeInMs > 0 ? _this37._scrolled.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["auditTime"])(auditTimeInMs)).subscribe(observer) : _this37._scrolled.subscribe(observer);
            _this37._scrolledCount++;
            return (
              /**
              * @return {?}
              */
              function () {
                subscription.unsubscribe();
                _this37._scrolledCount--;

                if (!_this37._scrolledCount) {
                  _this37._removeGlobalListener();
                }
              }
            );
          });
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          var _this38 = this;

          this._removeGlobalListener();

          this.scrollContainers.forEach(
          /**
          * @param {?} _
          * @param {?} container
          * @return {?}
          */
          function (_, container) {
            return _this38.deregister(container);
          });

          this._scrolled.complete();
        }
        /**
         * Returns an observable that emits whenever any of the
         * scrollable ancestors of an element are scrolled.
         * @param {?} elementRef Element whose ancestors to listen for.
         * @param {?=} auditTimeInMs Time to throttle the scroll events.
         * @return {?}
         */

      }, {
        key: "ancestorScrolled",
        value: function ancestorScrolled(elementRef, auditTimeInMs) {
          /** @type {?} */
          var ancestors = this.getAncestorScrollContainers(elementRef);
          return this.scrolled(auditTimeInMs).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(
          /**
          * @param {?} target
          * @return {?}
          */
          function (target) {
            return !target || ancestors.indexOf(target) > -1;
          }));
        }
        /**
         * Returns all registered Scrollables that contain the provided element.
         * @param {?} elementRef
         * @return {?}
         */

      }, {
        key: "getAncestorScrollContainers",
        value: function getAncestorScrollContainers(elementRef) {
          var _this39 = this;

          /** @type {?} */
          var scrollingContainers = [];
          this.scrollContainers.forEach(
          /**
          * @param {?} _subscription
          * @param {?} scrollable
          * @return {?}
          */
          function (_subscription, scrollable) {
            if (_this39._scrollableContainsElement(scrollable, elementRef)) {
              scrollingContainers.push(scrollable);
            }
          });
          return scrollingContainers;
        }
        /**
         * Access injected document if available or fallback to global document reference
         * @private
         * @return {?}
         */

      }, {
        key: "_getDocument",
        value: function _getDocument() {
          return this._document || document;
        }
        /**
         * Use defaultView of injected document if available or fallback to global window reference
         * @private
         * @return {?}
         */

      }, {
        key: "_getWindow",
        value: function _getWindow() {
          /** @type {?} */
          var doc = this._getDocument();

          return doc.defaultView || window;
        }
        /**
         * Returns true if the element is contained within the provided Scrollable.
         * @private
         * @param {?} scrollable
         * @param {?} elementRef
         * @return {?}
         */

      }, {
        key: "_scrollableContainsElement",
        value: function _scrollableContainsElement(scrollable, elementRef) {
          /** @type {?} */
          var element = elementRef.nativeElement;
          /** @type {?} */

          var scrollableElement = scrollable.getElementRef().nativeElement; // Traverse through the element parents until we reach null, checking if any of the elements
          // are the scrollable's element.

          do {
            if (element == scrollableElement) {
              return true;
            }
          } while (element =
          /** @type {?} */
          element.parentElement);

          return false;
        }
        /**
         * Sets up the global scroll listeners.
         * @private
         * @return {?}
         */

      }, {
        key: "_addGlobalListener",
        value: function _addGlobalListener() {
          var _this40 = this;

          this._globalSubscription = this._ngZone.runOutsideAngular(
          /**
          * @return {?}
          */
          function () {
            /** @type {?} */
            var window = _this40._getWindow();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(window.document, 'scroll').subscribe(
            /**
            * @return {?}
            */
            function () {
              return _this40._scrolled.next();
            });
          });
        }
        /**
         * Cleans up the global scroll listener.
         * @private
         * @return {?}
         */

      }, {
        key: "_removeGlobalListener",
        value: function _removeGlobalListener() {
          if (this._globalSubscription) {
            this._globalSubscription.unsubscribe();

            this._globalSubscription = null;
          }
        }
      }]);

      return ScrollDispatcher;
    }();

    ScrollDispatcher.ɵfac = function ScrollDispatcher_Factory(t) {
      return new (t || ScrollDispatcher)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"], 8));
    };
    /** @nocollapse */


    ScrollDispatcher.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }, {
        type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]]
        }]
      }];
    };
    /** @nocollapse */


    ScrollDispatcher.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
      factory: function ScrollDispatcher_Factory() {
        return new ScrollDispatcher(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"], 8));
      },
      token: ScrollDispatcher,
      providedIn: "root"
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ScrollDispatcher, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }, {
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]]
          }]
        }];
      }, null);
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/scrolling/scrollable.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Sends an event when the directive's element is scrolled. Registers itself with the
     * ScrollDispatcher service to include itself as part of its collection of scrolling events that it
     * can be listened to through the service.
     */


    var CdkScrollable = /*#__PURE__*/function () {
      /**
       * @param {?} elementRef
       * @param {?} scrollDispatcher
       * @param {?} ngZone
       * @param {?=} dir
       */
      function CdkScrollable(elementRef, scrollDispatcher, ngZone, dir) {
        var _this41 = this;

        _classCallCheck(this, CdkScrollable);

        this.elementRef = elementRef;
        this.scrollDispatcher = scrollDispatcher;
        this.ngZone = ngZone;
        this.dir = dir;
        this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this._elementScrolled = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](
        /**
        * @param {?} observer
        * @return {?}
        */
        function (observer) {
          return _this41.ngZone.runOutsideAngular(
          /**
          * @return {?}
          */
          function () {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(_this41.elementRef.nativeElement, 'scroll').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(_this41._destroyed)).subscribe(observer);
          });
        });
      }
      /**
       * @return {?}
       */


      _createClass(CdkScrollable, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.scrollDispatcher.register(this);
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.scrollDispatcher.deregister(this);

          this._destroyed.next();

          this._destroyed.complete();
        }
        /**
         * Returns observable that emits when a scroll event is fired on the host element.
         * @return {?}
         */

      }, {
        key: "elementScrolled",
        value: function elementScrolled() {
          return this._elementScrolled;
        }
        /**
         * Gets the ElementRef for the viewport.
         * @return {?}
         */

      }, {
        key: "getElementRef",
        value: function getElementRef() {
          return this.elementRef;
        }
        /**
         * Scrolls to the specified offsets. This is a normalized version of the browser's native scrollTo
         * method, since browsers are not consistent about what scrollLeft means in RTL. For this method
         * left and right always refer to the left and right side of the scrolling container irrespective
         * of the layout direction. start and end refer to left and right in an LTR context and vice-versa
         * in an RTL context.
         * @param {?} options specified the offsets to scroll to.
         * @return {?}
         */

      }, {
        key: "scrollTo",
        value: function scrollTo(options) {
          /** @type {?} */
          var el = this.elementRef.nativeElement;
          /** @type {?} */

          var isRtl = this.dir && this.dir.value == 'rtl'; // Rewrite start & end offsets as right or left offsets.

          if (options.left == null) {
            options.left = isRtl ? options.end : options.start;
          }

          if (options.right == null) {
            options.right = isRtl ? options.start : options.end;
          } // Rewrite the bottom offset as a top offset.


          if (options.bottom != null) {
            /** @type {?} */
            options.top = el.scrollHeight - el.clientHeight - options.bottom;
          } // Rewrite the right offset as a left offset.


          if (isRtl && Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["getRtlScrollAxisType"])() != 0
          /* NORMAL */
          ) {
              if (options.left != null) {
                /** @type {?} */
                options.right = el.scrollWidth - el.clientWidth - options.left;
              }

              if (Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["getRtlScrollAxisType"])() == 2
              /* INVERTED */
              ) {
                  options.left = options.right;
                } else if (Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["getRtlScrollAxisType"])() == 1
              /* NEGATED */
              ) {
                  options.left = options.right ? -options.right : options.right;
                }
            } else {
            if (options.right != null) {
              /** @type {?} */
              options.left = el.scrollWidth - el.clientWidth - options.right;
            }
          }

          this._applyScrollToOptions(options);
        }
        /**
         * @private
         * @param {?} options
         * @return {?}
         */

      }, {
        key: "_applyScrollToOptions",
        value: function _applyScrollToOptions(options) {
          /** @type {?} */
          var el = this.elementRef.nativeElement;

          if (Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["supportsScrollBehavior"])()) {
            el.scrollTo(options);
          } else {
            if (options.top != null) {
              el.scrollTop = options.top;
            }

            if (options.left != null) {
              el.scrollLeft = options.left;
            }
          }
        }
        /**
         * Measures the scroll offset relative to the specified edge of the viewport. This method can be
         * used instead of directly checking scrollLeft or scrollTop, since browsers are not consistent
         * about what scrollLeft means in RTL. The values returned by this method are normalized such that
         * left and right always refer to the left and right side of the scrolling container irrespective
         * of the layout direction. start and end refer to left and right in an LTR context and vice-versa
         * in an RTL context.
         * @param {?} from The edge to measure from.
         * @return {?}
         */

      }, {
        key: "measureScrollOffset",
        value: function measureScrollOffset(from) {
          /** @type {?} */
          var LEFT = 'left';
          /** @type {?} */

          var RIGHT = 'right';
          /** @type {?} */

          var el = this.elementRef.nativeElement;

          if (from == 'top') {
            return el.scrollTop;
          }

          if (from == 'bottom') {
            return el.scrollHeight - el.clientHeight - el.scrollTop;
          } // Rewrite start & end as left or right offsets.

          /** @type {?} */


          var isRtl = this.dir && this.dir.value == 'rtl';

          if (from == 'start') {
            from = isRtl ? RIGHT : LEFT;
          } else if (from == 'end') {
            from = isRtl ? LEFT : RIGHT;
          }

          if (isRtl && Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["getRtlScrollAxisType"])() == 2
          /* INVERTED */
          ) {
              // For INVERTED, scrollLeft is (scrollWidth - clientWidth) when scrolled all the way left and
              // 0 when scrolled all the way right.
              if (from == LEFT) {
                return el.scrollWidth - el.clientWidth - el.scrollLeft;
              } else {
                return el.scrollLeft;
              }
            } else if (isRtl && Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["getRtlScrollAxisType"])() == 1
          /* NEGATED */
          ) {
              // For NEGATED, scrollLeft is -(scrollWidth - clientWidth) when scrolled all the way left and
              // 0 when scrolled all the way right.
              if (from == LEFT) {
                return el.scrollLeft + el.scrollWidth - el.clientWidth;
              } else {
                return -el.scrollLeft;
              }
            } else {
            // For NORMAL, as well as non-RTL contexts, scrollLeft is 0 when scrolled all the way left and
            // (scrollWidth - clientWidth) when scrolled all the way right.
            if (from == LEFT) {
              return el.scrollLeft;
            } else {
              return el.scrollWidth - el.clientWidth - el.scrollLeft;
            }
          }
        }
      }]);

      return CdkScrollable;
    }();

    CdkScrollable.ɵfac = function CdkScrollable_Factory(t) {
      return new (t || CdkScrollable)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ScrollDispatcher), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["Directionality"], 8));
    };

    CdkScrollable.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: CdkScrollable,
      selectors: [["", "cdk-scrollable", ""], ["", "cdkScrollable", ""]]
    });
    /** @nocollapse */

    CdkScrollable.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }, {
        type: ScrollDispatcher
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }, {
        type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["Directionality"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }]
      }];
    };
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CdkScrollable, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: '[cdk-scrollable], [cdkScrollable]'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: ScrollDispatcher
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }, {
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["Directionality"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }]
        }];
      }, null);
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/scrolling/viewport-ruler.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Time in ms to throttle the resize events by default.
     * @type {?}
     */


    var DEFAULT_RESIZE_TIME = 20;
    /**
     * Object that holds the scroll position of the viewport in each direction.
     * @record
     */

    function ViewportScrollPosition() {}

    if (false) {}
    /**
     * Simple utility for getting the bounds of the browser viewport.
     * \@docs-private
     */


    var ViewportRuler = /*#__PURE__*/function () {
      /**
       * @param {?} _platform
       * @param {?} ngZone
       * @param {?=} document
       */
      function ViewportRuler(_platform, ngZone,
      /** @breaking-change 11.0.0 make document required */
      document) {
        var _this42 = this;

        _classCallCheck(this, ViewportRuler);

        this._platform = _platform;
        this._document = document;
        ngZone.runOutsideAngular(
        /**
        * @return {?}
        */
        function () {
          /** @type {?} */
          var window = _this42._getWindow();

          _this42._change = _platform.isBrowser ? Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(window, 'resize'), Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(window, 'orientationchange')) : Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(); // Note that we need to do the subscription inside `runOutsideAngular`
          // since subscribing is what causes the event listener to be added.

          _this42._invalidateCache = _this42.change().subscribe(
          /**
          * @return {?}
          */
          function () {
            return _this42._updateViewportSize();
          });
        });
      }
      /**
       * @return {?}
       */


      _createClass(ViewportRuler, [{
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._invalidateCache.unsubscribe();
        }
        /**
         * Returns the viewport's width and height.
         * @return {?}
         */

      }, {
        key: "getViewportSize",
        value: function getViewportSize() {
          if (!this._viewportSize) {
            this._updateViewportSize();
          }
          /** @type {?} */


          var output = {
            width: this._viewportSize.width,
            height: this._viewportSize.height
          }; // If we're not on a browser, don't cache the size since it'll be mocked out anyway.

          if (!this._platform.isBrowser) {
            this._viewportSize =
            /** @type {?} */
            null;
          }

          return output;
        }
        /**
         * Gets a ClientRect for the viewport's bounds.
         * @return {?}
         */

      }, {
        key: "getViewportRect",
        value: function getViewportRect() {
          // Use the document element's bounding rect rather than the window scroll properties
          // (e.g. pageYOffset, scrollY) due to in issue in Chrome and IE where window scroll
          // properties and client coordinates (boundingClientRect, clientX/Y, etc.) are in different
          // conceptual viewports. Under most circumstances these viewports are equivalent, but they
          // can disagree when the page is pinch-zoomed (on devices that support touch).
          // See https://bugs.chromium.org/p/chromium/issues/detail?id=489206#c4
          // We use the documentElement instead of the body because, by default (without a css reset)
          // browsers typically give the document body an 8px margin, which is not included in
          // getBoundingClientRect().

          /** @type {?} */
          var scrollPosition = this.getViewportScrollPosition();

          var _this$getViewportSize = this.getViewportSize(),
              width = _this$getViewportSize.width,
              height = _this$getViewportSize.height;

          return {
            top: scrollPosition.top,
            left: scrollPosition.left,
            bottom: scrollPosition.top + height,
            right: scrollPosition.left + width,
            height: height,
            width: width
          };
        }
        /**
         * Gets the (top, left) scroll position of the viewport.
         * @return {?}
         */

      }, {
        key: "getViewportScrollPosition",
        value: function getViewportScrollPosition() {
          // While we can get a reference to the fake document
          // during SSR, it doesn't have getBoundingClientRect.
          if (!this._platform.isBrowser) {
            return {
              top: 0,
              left: 0
            };
          } // The top-left-corner of the viewport is determined by the scroll position of the document
          // body, normally just (scrollLeft, scrollTop). However, Chrome and Firefox disagree about
          // whether `document.body` or `document.documentElement` is the scrolled element, so reading
          // `scrollTop` and `scrollLeft` is inconsistent. However, using the bounding rect of
          // `document.documentElement` works consistently, where the `top` and `left` values will
          // equal negative the scroll position.

          /** @type {?} */


          var document = this._getDocument();
          /** @type {?} */


          var window = this._getWindow();
          /** @type {?} */


          var documentElement =
          /** @type {?} */
          document.documentElement;
          /** @type {?} */

          var documentRect = documentElement.getBoundingClientRect();
          /** @type {?} */

          var top = -documentRect.top || document.body.scrollTop || window.scrollY || documentElement.scrollTop || 0;
          /** @type {?} */

          var left = -documentRect.left || document.body.scrollLeft || window.scrollX || documentElement.scrollLeft || 0;
          return {
            top: top,
            left: left
          };
        }
        /**
         * Returns a stream that emits whenever the size of the viewport changes.
         * @param {?=} throttleTime Time in milliseconds to throttle the stream.
         * @return {?}
         */

      }, {
        key: "change",
        value: function change() {
          var throttleTime = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_RESIZE_TIME;
          return throttleTime > 0 ? this._change.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["auditTime"])(throttleTime)) : this._change;
        }
        /**
         * Access injected document if available or fallback to global document reference
         * @private
         * @return {?}
         */

      }, {
        key: "_getDocument",
        value: function _getDocument() {
          return this._document || document;
        }
        /**
         * Use defaultView of injected document if available or fallback to global window reference
         * @private
         * @return {?}
         */

      }, {
        key: "_getWindow",
        value: function _getWindow() {
          /** @type {?} */
          var doc = this._getDocument();

          return doc.defaultView || window;
        }
        /**
         * Updates the cached viewport size.
         * @private
         * @return {?}
         */

      }, {
        key: "_updateViewportSize",
        value: function _updateViewportSize() {
          /** @type {?} */
          var window = this._getWindow();

          this._viewportSize = this._platform.isBrowser ? {
            width: window.innerWidth,
            height: window.innerHeight
          } : {
            width: 0,
            height: 0
          };
        }
      }]);

      return ViewportRuler;
    }();

    ViewportRuler.ɵfac = function ViewportRuler_Factory(t) {
      return new (t || ViewportRuler)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"], 8));
    };
    /** @nocollapse */


    ViewportRuler.ctorParameters = function () {
      return [{
        type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]]
        }]
      }];
    };
    /** @nocollapse */


    ViewportRuler.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
      factory: function ViewportRuler_Factory() {
        return new ViewportRuler(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"], 8));
      },
      token: ViewportRuler,
      providedIn: "root"
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ViewportRuler, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]]
          }]
        }];
      }, null);
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/scrolling/virtual-scroll-viewport.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Checks if the given ranges are equal.
     * @param {?} r1
     * @param {?} r2
     * @return {?}
     */


    function rangesEqual(r1, r2) {
      return r1.start == r2.start && r1.end == r2.end;
    }
    /**
     * Scheduler to be used for scroll events. Needs to fall back to
     * something that doesn't rely on requestAnimationFrame on environments
     * that don't support it (e.g. server-side rendering).
     * @type {?}
     */


    var SCROLL_SCHEDULER = typeof requestAnimationFrame !== 'undefined' ? rxjs__WEBPACK_IMPORTED_MODULE_2__["animationFrameScheduler"] : rxjs__WEBPACK_IMPORTED_MODULE_2__["asapScheduler"];
    /**
     * A viewport that virtualizes its scrolling with the help of `CdkVirtualForOf`.
     */

    var CdkVirtualScrollViewport = /*#__PURE__*/function (_CdkScrollable) {
      _inherits(CdkVirtualScrollViewport, _CdkScrollable);

      var _super15 = _createSuper(CdkVirtualScrollViewport);

      /**
       * @param {?} elementRef
       * @param {?} _changeDetectorRef
       * @param {?} ngZone
       * @param {?} _scrollStrategy
       * @param {?} dir
       * @param {?} scrollDispatcher
       * @param {?=} viewportRuler
       */
      function CdkVirtualScrollViewport(elementRef, _changeDetectorRef, ngZone, _scrollStrategy, dir, scrollDispatcher,
      /**
       * @deprecated `viewportRuler` parameter to become required.
       * @breaking-change 11.0.0
       */
      viewportRuler) {
        var _this43;

        _classCallCheck(this, CdkVirtualScrollViewport);

        _this43 = _super15.call(this, elementRef, scrollDispatcher, ngZone, dir);
        _this43.elementRef = elementRef;
        _this43._changeDetectorRef = _changeDetectorRef;
        _this43._scrollStrategy = _scrollStrategy;
        /**
         * Emits when the viewport is detached from a CdkVirtualForOf.
         */

        _this43._detachedSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Emits when the rendered range changes.
         */

        _this43._renderedRangeSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        _this43._orientation = 'vertical'; // Note: we don't use the typical EventEmitter here because we need to subscribe to the scroll
        // strategy lazily (i.e. only if the user is actually listening to the events). We do this because
        // depending on how the strategy calculates the scrolled index, it may come at a cost to
        // performance.

        /**
         * Emits when the index of the first element visible in the viewport changes.
         */

        _this43.scrolledIndexChange = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](
        /**
        * @param {?} observer
        * @return {?}
        */
        function (observer) {
          return _this43._scrollStrategy.scrolledIndexChange.subscribe(
          /**
          * @param {?} index
          * @return {?}
          */
          function (index) {
            return Promise.resolve().then(
            /**
            * @return {?}
            */
            function () {
              return _this43.ngZone.run(
              /**
              * @return {?}
              */
              function () {
                return observer.next(index);
              });
            });
          });
        });
        /**
         * A stream that emits whenever the rendered range changes.
         */

        _this43.renderedRangeStream = _this43._renderedRangeSubject.asObservable();
        /**
         * The total size of all content (in pixels), including content that is not currently rendered.
         */

        _this43._totalContentSize = 0;
        /**
         * A string representing the `style.width` property value to be used for the spacer element.
         */

        _this43._totalContentWidth = '';
        /**
         * A string representing the `style.height` property value to be used for the spacer element.
         */

        _this43._totalContentHeight = '';
        /**
         * The currently rendered range of indices.
         */

        _this43._renderedRange = {
          start: 0,
          end: 0
        };
        /**
         * The length of the data bound to this viewport (in number of items).
         */

        _this43._dataLength = 0;
        /**
         * The size of the viewport (in pixels).
         */

        _this43._viewportSize = 0;
        /**
         * The last rendered content offset that was set.
         */

        _this43._renderedContentOffset = 0;
        /**
         * Whether the last rendered content offset was to the end of the content (and therefore needs to
         * be rewritten as an offset to the start of the content).
         */

        _this43._renderedContentOffsetNeedsRewrite = false;
        /**
         * Whether there is a pending change detection cycle.
         */

        _this43._isChangeDetectionPending = false;
        /**
         * A list of functions to run after the next change detection cycle.
         */

        _this43._runAfterChangeDetection = [];
        /**
         * Subscription to changes in the viewport size.
         */

        _this43._viewportChanges = rxjs__WEBPACK_IMPORTED_MODULE_2__["Subscription"].EMPTY;

        if (!_scrollStrategy) {
          throw Error('Error: cdk-virtual-scroll-viewport requires the "itemSize" property to be set.');
        } // @breaking-change 11.0.0 Remove null check for `viewportRuler`.


        if (viewportRuler) {
          _this43._viewportChanges = viewportRuler.change().subscribe(
          /**
          * @return {?}
          */
          function () {
            _this43.checkViewportSize();
          });
        }

        return _this43;
      }
      /**
       * The direction the viewport scrolls.
       * @return {?}
       */


      _createClass(CdkVirtualScrollViewport, [{
        key: "ngOnInit",

        /**
         * @return {?}
         */
        value: function ngOnInit() {
          var _this44 = this;

          _get(_getPrototypeOf(CdkVirtualScrollViewport.prototype), "ngOnInit", this).call(this); // It's still too early to measure the viewport at this point. Deferring with a promise allows
          // the Viewport to be rendered with the correct size before we measure. We run this outside the
          // zone to avoid causing more change detection cycles. We handle the change detection loop
          // ourselves instead.


          this.ngZone.runOutsideAngular(
          /**
          * @return {?}
          */
          function () {
            return Promise.resolve().then(
            /**
            * @return {?}
            */
            function () {
              _this44._measureViewportSize();

              _this44._scrollStrategy.attach(_this44);

              _this44.elementScrolled().pipe( // Start off with a fake scroll event so we properly detect our initial position.
              Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(
              /** @type {?} */
              null), // Collect multiple events into one until the next animation frame. This way if
              // there are multiple scroll events in the same frame we only need to recheck
              // our layout once.
              Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["auditTime"])(0, SCROLL_SCHEDULER)).subscribe(
              /**
              * @return {?}
              */
              function () {
                return _this44._scrollStrategy.onContentScrolled();
              });

              _this44._markChangeDetectionNeeded();
            });
          });
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.detach();

          this._scrollStrategy.detach(); // Complete all subjects


          this._renderedRangeSubject.complete();

          this._detachedSubject.complete();

          this._viewportChanges.unsubscribe();

          _get(_getPrototypeOf(CdkVirtualScrollViewport.prototype), "ngOnDestroy", this).call(this);
        }
        /**
         * Attaches a `CdkVirtualForOf` to this viewport.
         * @param {?} forOf
         * @return {?}
         */

      }, {
        key: "attach",
        value: function attach(forOf) {
          var _this45 = this;

          if (this._forOf) {
            throw Error('CdkVirtualScrollViewport is already attached.');
          } // Subscribe to the data stream of the CdkVirtualForOf to keep track of when the data length
          // changes. Run outside the zone to avoid triggering change detection, since we're managing the
          // change detection loop ourselves.


          this.ngZone.runOutsideAngular(
          /**
          * @return {?}
          */
          function () {
            _this45._forOf = forOf;

            _this45._forOf.dataStream.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(_this45._detachedSubject)).subscribe(
            /**
            * @param {?} data
            * @return {?}
            */
            function (data) {
              /** @type {?} */
              var newLength = data.length;

              if (newLength !== _this45._dataLength) {
                _this45._dataLength = newLength;

                _this45._scrollStrategy.onDataLengthChanged();
              }

              _this45._doChangeDetection();
            });
          });
        }
        /**
         * Detaches the current `CdkVirtualForOf`.
         * @return {?}
         */

      }, {
        key: "detach",
        value: function detach() {
          this._forOf = null;

          this._detachedSubject.next();
        }
        /**
         * Gets the length of the data bound to this viewport (in number of items).
         * @return {?}
         */

      }, {
        key: "getDataLength",
        value: function getDataLength() {
          return this._dataLength;
        }
        /**
         * Gets the size of the viewport (in pixels).
         * @return {?}
         */

      }, {
        key: "getViewportSize",
        value: function getViewportSize() {
          return this._viewportSize;
        } // TODO(mmalerba): This is technically out of sync with what's really rendered until a render
        // cycle happens. I'm being careful to only call it after the render cycle is complete and before
        // setting it to something else, but its error prone and should probably be split into
        // `pendingRange` and `renderedRange`, the latter reflecting whats actually in the DOM.

        /**
         * Get the current rendered range of items.
         * @return {?}
         */

      }, {
        key: "getRenderedRange",
        value: function getRenderedRange() {
          return this._renderedRange;
        }
        /**
         * Sets the total size of all content (in pixels), including content that is not currently
         * rendered.
         * @param {?} size
         * @return {?}
         */

      }, {
        key: "setTotalContentSize",
        value: function setTotalContentSize(size) {
          if (this._totalContentSize !== size) {
            this._totalContentSize = size;

            this._calculateSpacerSize();

            this._markChangeDetectionNeeded();
          }
        }
        /**
         * Sets the currently rendered range of indices.
         * @param {?} range
         * @return {?}
         */

      }, {
        key: "setRenderedRange",
        value: function setRenderedRange(range) {
          var _this46 = this;

          if (!rangesEqual(this._renderedRange, range)) {
            this._renderedRangeSubject.next(this._renderedRange = range);

            this._markChangeDetectionNeeded(
            /**
            * @return {?}
            */
            function () {
              return _this46._scrollStrategy.onContentRendered();
            });
          }
        }
        /**
         * Gets the offset from the start of the viewport to the start of the rendered data (in pixels).
         * @return {?}
         */

      }, {
        key: "getOffsetToRenderedContentStart",
        value: function getOffsetToRenderedContentStart() {
          return this._renderedContentOffsetNeedsRewrite ? null : this._renderedContentOffset;
        }
        /**
         * Sets the offset from the start of the viewport to either the start or end of the rendered data
         * (in pixels).
         * @param {?} offset
         * @param {?=} to
         * @return {?}
         */

      }, {
        key: "setRenderedContentOffset",
        value: function setRenderedContentOffset(offset) {
          var _this47 = this;

          var to = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'to-start';
          // For a horizontal viewport in a right-to-left language we need to translate along the x-axis
          // in the negative direction.

          /** @type {?} */
          var isRtl = this.dir && this.dir.value == 'rtl';
          /** @type {?} */

          var isHorizontal = this.orientation == 'horizontal';
          /** @type {?} */

          var axis = isHorizontal ? 'X' : 'Y';
          /** @type {?} */

          var axisDirection = isHorizontal && isRtl ? -1 : 1;
          /** @type {?} */

          var transform = "translate".concat(axis, "(").concat(Number(axisDirection * offset), "px)");
          this._renderedContentOffset = offset;

          if (to === 'to-end') {
            transform += " translate".concat(axis, "(-100%)"); // The viewport should rewrite this as a `to-start` offset on the next render cycle. Otherwise
            // elements will appear to expand in the wrong direction (e.g. `mat-expansion-panel` would
            // expand upward).

            this._renderedContentOffsetNeedsRewrite = true;
          }

          if (this._renderedContentTransform != transform) {
            // We know this value is safe because we parse `offset` with `Number()` before passing it
            // into the string.
            this._renderedContentTransform = transform;

            this._markChangeDetectionNeeded(
            /**
            * @return {?}
            */
            function () {
              if (_this47._renderedContentOffsetNeedsRewrite) {
                _this47._renderedContentOffset -= _this47.measureRenderedContentSize();
                _this47._renderedContentOffsetNeedsRewrite = false;

                _this47.setRenderedContentOffset(_this47._renderedContentOffset);
              } else {
                _this47._scrollStrategy.onRenderedOffsetChanged();
              }
            });
          }
        }
        /**
         * Scrolls to the given offset from the start of the viewport. Please note that this is not always
         * the same as setting `scrollTop` or `scrollLeft`. In a horizontal viewport with right-to-left
         * direction, this would be the equivalent of setting a fictional `scrollRight` property.
         * @param {?} offset The offset to scroll to.
         * @param {?=} behavior The ScrollBehavior to use when scrolling. Default is behavior is `auto`.
         * @return {?}
         */

      }, {
        key: "scrollToOffset",
        value: function scrollToOffset(offset) {
          var behavior = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'auto';

          /** @type {?} */
          var options = {
            behavior: behavior
          };

          if (this.orientation === 'horizontal') {
            options.start = offset;
          } else {
            options.top = offset;
          }

          this.scrollTo(options);
        }
        /**
         * Scrolls to the offset for the given index.
         * @param {?} index The index of the element to scroll to.
         * @param {?=} behavior The ScrollBehavior to use when scrolling. Default is behavior is `auto`.
         * @return {?}
         */

      }, {
        key: "scrollToIndex",
        value: function scrollToIndex(index) {
          var behavior = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'auto';

          this._scrollStrategy.scrollToIndex(index, behavior);
        }
        /**
         * Gets the current scroll offset from the start of the viewport (in pixels).
         * @param {?=} from The edge to measure the offset from. Defaults to 'top' in vertical mode and 'start'
         *     in horizontal mode.
         * @return {?}
         */

      }, {
        key: "measureScrollOffset",
        value: function measureScrollOffset(from) {
          return from ? _get(_getPrototypeOf(CdkVirtualScrollViewport.prototype), "measureScrollOffset", this).call(this, from) : _get(_getPrototypeOf(CdkVirtualScrollViewport.prototype), "measureScrollOffset", this).call(this, this.orientation === 'horizontal' ? 'start' : 'top');
        }
        /**
         * Measure the combined size of all of the rendered items.
         * @return {?}
         */

      }, {
        key: "measureRenderedContentSize",
        value: function measureRenderedContentSize() {
          /** @type {?} */
          var contentEl = this._contentWrapper.nativeElement;
          return this.orientation === 'horizontal' ? contentEl.offsetWidth : contentEl.offsetHeight;
        }
        /**
         * Measure the total combined size of the given range. Throws if the range includes items that are
         * not rendered.
         * @param {?} range
         * @return {?}
         */

      }, {
        key: "measureRangeSize",
        value: function measureRangeSize(range) {
          if (!this._forOf) {
            return 0;
          }

          return this._forOf.measureRangeSize(range, this.orientation);
        }
        /**
         * Update the viewport dimensions and re-render.
         * @return {?}
         */

      }, {
        key: "checkViewportSize",
        value: function checkViewportSize() {
          // TODO: Cleanup later when add logic for handling content resize
          this._measureViewportSize();

          this._scrollStrategy.onDataLengthChanged();
        }
        /**
         * Measure the viewport size.
         * @private
         * @return {?}
         */

      }, {
        key: "_measureViewportSize",
        value: function _measureViewportSize() {
          /** @type {?} */
          var viewportEl = this.elementRef.nativeElement;
          this._viewportSize = this.orientation === 'horizontal' ? viewportEl.clientWidth : viewportEl.clientHeight;
        }
        /**
         * Queue up change detection to run.
         * @private
         * @param {?=} runAfter
         * @return {?}
         */

      }, {
        key: "_markChangeDetectionNeeded",
        value: function _markChangeDetectionNeeded(runAfter) {
          var _this48 = this;

          if (runAfter) {
            this._runAfterChangeDetection.push(runAfter);
          } // Use a Promise to batch together calls to `_doChangeDetection`. This way if we set a bunch of
          // properties sequentially we only have to run `_doChangeDetection` once at the end.


          if (!this._isChangeDetectionPending) {
            this._isChangeDetectionPending = true;
            this.ngZone.runOutsideAngular(
            /**
            * @return {?}
            */
            function () {
              return Promise.resolve().then(
              /**
              * @return {?}
              */
              function () {
                _this48._doChangeDetection();
              });
            });
          }
        }
        /**
         * Run change detection.
         * @private
         * @return {?}
         */

      }, {
        key: "_doChangeDetection",
        value: function _doChangeDetection() {
          var _this49 = this;

          this._isChangeDetectionPending = false; // Apply the content transform. The transform can't be set via an Angular binding because
          // bypassSecurityTrustStyle is banned in Google. However the value is safe, it's composed of
          // string literals, a variable that can only be 'X' or 'Y', and user input that is run through
          // the `Number` function first to coerce it to a numeric value.

          this._contentWrapper.nativeElement.style.transform = this._renderedContentTransform; // Apply changes to Angular bindings. Note: We must call `markForCheck` to run change detection
          // from the root, since the repeated items are content projected in. Calling `detectChanges`
          // instead does not properly check the projected content.

          this.ngZone.run(
          /**
          * @return {?}
          */
          function () {
            return _this49._changeDetectorRef.markForCheck();
          });
          /** @type {?} */

          var runAfterChangeDetection = this._runAfterChangeDetection;
          this._runAfterChangeDetection = [];

          var _iterator2 = _createForOfIteratorHelper(runAfterChangeDetection),
              _step2;

          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var fn = _step2.value;
              fn();
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
        }
        /**
         * Calculates the `style.width` and `style.height` for the spacer element.
         * @private
         * @return {?}
         */

      }, {
        key: "_calculateSpacerSize",
        value: function _calculateSpacerSize() {
          this._totalContentHeight = this.orientation === 'horizontal' ? '' : "".concat(this._totalContentSize, "px");
          this._totalContentWidth = this.orientation === 'horizontal' ? "".concat(this._totalContentSize, "px") : '';
        }
      }, {
        key: "orientation",
        get: function get() {
          return this._orientation;
        }
        /**
         * @param {?} orientation
         * @return {?}
         */
        ,
        set: function set(orientation) {
          if (this._orientation !== orientation) {
            this._orientation = orientation;

            this._calculateSpacerSize();
          }
        }
      }]);

      return CdkVirtualScrollViewport;
    }(CdkScrollable);

    CdkVirtualScrollViewport.ɵfac = function CdkVirtualScrollViewport_Factory(t) {
      return new (t || CdkVirtualScrollViewport)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](VIRTUAL_SCROLL_STRATEGY, 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["Directionality"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ScrollDispatcher), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ViewportRuler, 8));
    };

    CdkVirtualScrollViewport.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: CdkVirtualScrollViewport,
      selectors: [["cdk-virtual-scroll-viewport"]],
      viewQuery: function CdkVirtualScrollViewport_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticViewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._contentWrapper = _t.first);
        }
      },
      hostAttrs: [1, "cdk-virtual-scroll-viewport"],
      hostVars: 4,
      hostBindings: function CdkVirtualScrollViewport_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("cdk-virtual-scroll-orientation-horizontal", ctx.orientation === "horizontal")("cdk-virtual-scroll-orientation-vertical", ctx.orientation !== "horizontal");
        }
      },
      inputs: {
        orientation: "orientation"
      },
      outputs: {
        scrolledIndexChange: "scrolledIndexChange"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
        provide: CdkScrollable,
        useExisting: CdkVirtualScrollViewport
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
      ngContentSelectors: _c1,
      decls: 4,
      vars: 4,
      consts: [[1, "cdk-virtual-scroll-content-wrapper"], ["contentWrapper", ""], [1, "cdk-virtual-scroll-spacer"]],
      template: function CdkVirtualScrollViewport_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "div", 2);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("width", ctx._totalContentWidth)("height", ctx._totalContentHeight);
        }
      },
      styles: ["cdk-virtual-scroll-viewport{display:block;position:relative;overflow:auto;contain:strict;transform:translateZ(0);will-change:scroll-position;-webkit-overflow-scrolling:touch}.cdk-virtual-scroll-content-wrapper{position:absolute;top:0;left:0;contain:content}[dir=rtl] .cdk-virtual-scroll-content-wrapper{right:0;left:auto}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper{min-height:100%}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-left:0;padding-right:0;margin-left:0;margin-right:0;border-left-width:0;border-right-width:0;outline:none}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper{min-width:100%}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-top:0;padding-bottom:0;margin-top:0;margin-bottom:0;border-top-width:0;border-bottom-width:0;outline:none}.cdk-virtual-scroll-spacer{position:absolute;top:0;left:0;height:1px;width:1px;transform-origin:0 0}[dir=rtl] .cdk-virtual-scroll-spacer{right:0;left:auto;transform-origin:100% 0}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
    /** @nocollapse */

    CdkVirtualScrollViewport.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [VIRTUAL_SCROLL_STRATEGY]
        }]
      }, {
        type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["Directionality"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }]
      }, {
        type: ScrollDispatcher
      }, {
        type: ViewportRuler,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }]
      }];
    };

    CdkVirtualScrollViewport.propDecorators = {
      orientation: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      scrolledIndexChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      _contentWrapper: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
        args: ['contentWrapper', {
          "static": true
        }]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CdkVirtualScrollViewport, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'cdk-virtual-scroll-viewport',
          template: "<!--\n  Wrap the rendered content in an element that will be used to offset it based on the scroll\n  position.\n-->\n<div #contentWrapper class=\"cdk-virtual-scroll-content-wrapper\">\n  <ng-content></ng-content>\n</div>\n<!--\n  Spacer used to force the scrolling container to the correct size for the *total* number of items\n  so that the scrollbar captures the size of the entire data set.\n-->\n<div class=\"cdk-virtual-scroll-spacer\"\n     [style.width]=\"_totalContentWidth\" [style.height]=\"_totalContentHeight\"></div>\n",
          host: {
            'class': 'cdk-virtual-scroll-viewport',
            '[class.cdk-virtual-scroll-orientation-horizontal]': 'orientation === "horizontal"',
            '[class.cdk-virtual-scroll-orientation-vertical]': 'orientation !== "horizontal"'
          },
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
          providers: [{
            provide: CdkScrollable,
            useExisting: CdkVirtualScrollViewport
          }],
          styles: ["cdk-virtual-scroll-viewport{display:block;position:relative;overflow:auto;contain:strict;transform:translateZ(0);will-change:scroll-position;-webkit-overflow-scrolling:touch}.cdk-virtual-scroll-content-wrapper{position:absolute;top:0;left:0;contain:content}[dir=rtl] .cdk-virtual-scroll-content-wrapper{right:0;left:auto}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper{min-height:100%}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-left:0;padding-right:0;margin-left:0;margin-right:0;border-left-width:0;border-right-width:0;outline:none}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper{min-width:100%}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-top:0;padding-bottom:0;margin-top:0;margin-bottom:0;border-top-width:0;border-bottom-width:0;outline:none}.cdk-virtual-scroll-spacer{position:absolute;top:0;left:0;height:1px;width:1px;transform-origin:0 0}[dir=rtl] .cdk-virtual-scroll-spacer{right:0;left:auto;transform-origin:100% 0}\n"]
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [VIRTUAL_SCROLL_STRATEGY]
          }]
        }, {
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["Directionality"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }]
        }, {
          type: ScrollDispatcher
        }, {
          type: ViewportRuler,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }]
        }];
      }, {
        scrolledIndexChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        orientation: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        _contentWrapper: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['contentWrapper', {
            "static": true
          }]
        }]
      });
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/scrolling/virtual-for-of.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Helper to extract size from a DOM Node.
     * @param {?} orientation
     * @param {?} node
     * @return {?}
     */


    function getSize(orientation, node) {
      /** @type {?} */
      var el =
      /** @type {?} */
      node;

      if (!el.getBoundingClientRect) {
        return 0;
      }
      /** @type {?} */


      var rect = el.getBoundingClientRect();
      return orientation == 'horizontal' ? rect.width : rect.height;
    }
    /**
     * A directive similar to `ngForOf` to be used for rendering data inside a virtual scrolling
     * container.
     * @template T
     */


    var CdkVirtualForOf = /*#__PURE__*/function () {
      /**
       * @param {?} _viewContainerRef
       * @param {?} _template
       * @param {?} _differs
       * @param {?} _viewport
       * @param {?} ngZone
       */
      function CdkVirtualForOf(_viewContainerRef, _template, _differs, _viewport, ngZone) {
        var _this50 = this;

        _classCallCheck(this, CdkVirtualForOf);

        this._viewContainerRef = _viewContainerRef;
        this._template = _template;
        this._differs = _differs;
        this._viewport = _viewport;
        /**
         * Emits when the rendered view of the data changes.
         */

        this.viewChange = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Subject that emits when a new DataSource instance is given.
         */

        this._dataSourceChanges = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * The size of the cache used to store templates that are not being used for re-use later.
         * Setting the cache size to `0` will disable caching. Defaults to 20 templates.
         */

        this.cdkVirtualForTemplateCacheSize = 20;
        /**
         * Emits whenever the data in the current DataSource changes.
         */

        this.dataStream = this._dataSourceChanges.pipe( // Start off with null `DataSource`.
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(
        /** @type {?} */
        null), // Bundle up the previous and current data sources so we can work with both.
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["pairwise"])(), // Use `_changeDataSource` to disconnect from the previous data source and connect to the
        // new one, passing back a stream of data changes which we run through `switchMap` to give
        // us a data stream that emits the latest data from whatever the current `DataSource` is.
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(
        /**
        * @param {?} __0
        * @return {?}
        */
        function (_ref) {
          var _ref2 = _slicedToArray(_ref, 2),
              prev = _ref2[0],
              cur = _ref2[1];

          return _this50._changeDataSource(prev, cur);
        }), // Replay the last emitted data when someone subscribes.
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["shareReplay"])(1));
        /**
         * The differ used to calculate changes to the data.
         */

        this._differ = null;
        /**
         * The template cache used to hold on ot template instancess that have been stamped out, but don't
         * currently need to be rendered. These instances will be reused in the future rather than
         * stamping out brand new ones.
         */

        this._templateCache = [];
        /**
         * Whether the rendered data should be updated during the next ngDoCheck cycle.
         */

        this._needsUpdate = false;
        this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.dataStream.subscribe(
        /**
        * @param {?} data
        * @return {?}
        */
        function (data) {
          _this50._data = data;

          _this50._onRenderedDataChange();
        });

        this._viewport.renderedRangeStream.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._destroyed)).subscribe(
        /**
        * @param {?} range
        * @return {?}
        */
        function (range) {
          _this50._renderedRange = range;
          ngZone.run(
          /**
          * @return {?}
          */
          function () {
            return _this50.viewChange.next(_this50._renderedRange);
          });

          _this50._onRenderedDataChange();
        });

        this._viewport.attach(this);
      }
      /**
       * The DataSource to display.
       * @return {?}
       */


      _createClass(CdkVirtualForOf, [{
        key: "measureRangeSize",

        /**
         * Measures the combined size (width for horizontal orientation, height for vertical) of all items
         * in the specified range. Throws an error if the range includes items that are not currently
         * rendered.
         * @param {?} range
         * @param {?} orientation
         * @return {?}
         */
        value: function measureRangeSize(range, orientation) {
          if (range.start >= range.end) {
            return 0;
          }

          if (range.start < this._renderedRange.start || range.end > this._renderedRange.end) {
            throw Error("Error: attempted to measure an item that isn't rendered.");
          } // The index into the list of rendered views for the first item in the range.

          /** @type {?} */


          var renderedStartIndex = range.start - this._renderedRange.start; // The length of the range we're measuring.

          /** @type {?} */

          var rangeLen = range.end - range.start; // Loop over all root nodes for all items in the range and sum up their size.

          /** @type {?} */

          var totalSize = 0;
          /** @type {?} */

          var i = rangeLen;

          while (i--) {
            /** @type {?} */
            var view =
            /** @type {?} */
            this._viewContainerRef.get(i + renderedStartIndex);
            /** @type {?} */


            var j = view ? view.rootNodes.length : 0;

            while (j--) {
              totalSize += getSize(orientation,
              /** @type {?} */
              view.rootNodes[j]);
            }
          }

          return totalSize;
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngDoCheck",
        value: function ngDoCheck() {
          if (this._differ && this._needsUpdate) {
            // TODO(mmalerba): We should differentiate needs update due to scrolling and a new portion of
            // this list being rendered (can use simpler algorithm) vs needs update due to data actually
            // changing (need to do this diff).

            /** @type {?} */
            var changes = this._differ.diff(this._renderedItems);

            if (!changes) {
              this._updateContext();
            } else {
              this._applyChanges(changes);
            }

            this._needsUpdate = false;
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._viewport.detach();

          this._dataSourceChanges.next();

          this._dataSourceChanges.complete();

          this.viewChange.complete();

          this._destroyed.next();

          this._destroyed.complete();

          var _iterator3 = _createForOfIteratorHelper(this._templateCache),
              _step3;

          try {
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
              var view = _step3.value;
              view.destroy();
            }
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }
        }
        /**
         * React to scroll state changes in the viewport.
         * @private
         * @return {?}
         */

      }, {
        key: "_onRenderedDataChange",
        value: function _onRenderedDataChange() {
          if (!this._renderedRange) {
            return;
          }

          this._renderedItems = this._data.slice(this._renderedRange.start, this._renderedRange.end);

          if (!this._differ) {
            this._differ = this._differs.find(this._renderedItems).create(this.cdkVirtualForTrackBy);
          }

          this._needsUpdate = true;
        }
        /**
         * Swap out one `DataSource` for another.
         * @private
         * @param {?} oldDs
         * @param {?} newDs
         * @return {?}
         */

      }, {
        key: "_changeDataSource",
        value: function _changeDataSource(oldDs, newDs) {
          if (oldDs) {
            oldDs.disconnect(this);
          }

          this._needsUpdate = true;
          return newDs ? newDs.connect(this) : Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])();
        }
        /**
         * Update the `CdkVirtualForOfContext` for all views.
         * @private
         * @return {?}
         */

      }, {
        key: "_updateContext",
        value: function _updateContext() {
          /** @type {?} */
          var count = this._data.length;
          /** @type {?} */

          var i = this._viewContainerRef.length;

          while (i--) {
            /** @type {?} */
            var view =
            /** @type {?} */
            this._viewContainerRef.get(i);

            view.context.index = this._renderedRange.start + i;
            view.context.count = count;

            this._updateComputedContextProperties(view.context);

            view.detectChanges();
          }
        }
        /**
         * Apply changes to the DOM.
         * @private
         * @param {?} changes
         * @return {?}
         */

      }, {
        key: "_applyChanges",
        value: function _applyChanges(changes) {
          var _this51 = this;

          // Rearrange the views to put them in the right location.
          changes.forEachOperation(
          /**
          * @param {?} record
          * @param {?} adjustedPreviousIndex
          * @param {?} currentIndex
          * @return {?}
          */
          function (record, adjustedPreviousIndex, currentIndex) {
            if (record.previousIndex == null) {
              // Item added.
              // Item added.

              /** @type {?} */
              var view = _this51._insertViewForNewItem(
              /** @type {?} */
              currentIndex);

              view.context.$implicit = record.item;
            } else if (currentIndex == null) {
              // Item removed.
              _this51._cacheView(_this51._detachView(
              /** @type {?} */
              adjustedPreviousIndex));
            } else {
              // Item moved.
              // Item moved.

              /** @type {?} */
              var _view =
              /** @type {?} */
              _this51._viewContainerRef.get(
              /** @type {?} */
              adjustedPreviousIndex);

              _this51._viewContainerRef.move(_view, currentIndex);

              _view.context.$implicit = record.item;
            }
          }); // Update $implicit for any items that had an identity change.

          changes.forEachIdentityChange(
          /**
          * @param {?} record
          * @return {?}
          */
          function (record) {
            /** @type {?} */
            var view =
            /** @type {?} */
            _this51._viewContainerRef.get(
            /** @type {?} */
            record.currentIndex);

            view.context.$implicit = record.item;
          }); // Update the context variables on all items.

          /** @type {?} */

          var count = this._data.length;
          /** @type {?} */

          var i = this._viewContainerRef.length;

          while (i--) {
            /** @type {?} */
            var view =
            /** @type {?} */
            this._viewContainerRef.get(i);

            view.context.index = this._renderedRange.start + i;
            view.context.count = count;

            this._updateComputedContextProperties(view.context);
          }
        }
        /**
         * Cache the given detached view.
         * @private
         * @param {?} view
         * @return {?}
         */

      }, {
        key: "_cacheView",
        value: function _cacheView(view) {
          if (this._templateCache.length < this.cdkVirtualForTemplateCacheSize) {
            this._templateCache.push(view);
          } else {
            /** @type {?} */
            var index = this._viewContainerRef.indexOf(view); // It's very unlikely that the index will ever be -1, but just in case,
            // destroy the view on its own, otherwise destroy it through the
            // container to ensure that all the references are removed.


            if (index === -1) {
              view.destroy();
            } else {
              this._viewContainerRef.remove(index);
            }
          }
        }
        /**
         * Inserts a view for a new item, either from the cache or by creating a new one.
         * @private
         * @param {?} index
         * @return {?}
         */

      }, {
        key: "_insertViewForNewItem",
        value: function _insertViewForNewItem(index) {
          return this._insertViewFromCache(index) || this._createEmbeddedViewAt(index);
        }
        /**
         * Update the computed properties on the `CdkVirtualForOfContext`.
         * @private
         * @param {?} context
         * @return {?}
         */

      }, {
        key: "_updateComputedContextProperties",
        value: function _updateComputedContextProperties(context) {
          context.first = context.index === 0;
          context.last = context.index === context.count - 1;
          context.even = context.index % 2 === 0;
          context.odd = !context.even;
        }
        /**
         * Creates a new embedded view and moves it to the given index
         * @private
         * @param {?} index
         * @return {?}
         */

      }, {
        key: "_createEmbeddedViewAt",
        value: function _createEmbeddedViewAt(index) {
          // Note that it's important that we insert the item directly at the proper index,
          // rather than inserting it and the moving it in place, because if there's a directive
          // on the same node that injects the `ViewContainerRef`, Angular will insert another
          // comment node which can throw off the move when it's being repeated for all items.
          return this._viewContainerRef.createEmbeddedView(this._template, {
            $implicit:
            /** @type {?} */
            null,
            // It's guaranteed that the iterable is not "undefined" or "null" because we only
            // generate views for elements if the "cdkVirtualForOf" iterable has elements.
            cdkVirtualForOf:
            /** @type {?} */
            this._cdkVirtualForOf,
            index: -1,
            count: -1,
            first: false,
            last: false,
            odd: false,
            even: false
          }, index);
        }
        /**
         * Inserts a recycled view from the cache at the given index.
         * @private
         * @param {?} index
         * @return {?}
         */

      }, {
        key: "_insertViewFromCache",
        value: function _insertViewFromCache(index) {
          /** @type {?} */
          var cachedView = this._templateCache.pop();

          if (cachedView) {
            this._viewContainerRef.insert(cachedView, index);
          }

          return cachedView || null;
        }
        /**
         * Detaches the embedded view at the given index.
         * @private
         * @param {?} index
         * @return {?}
         */

      }, {
        key: "_detachView",
        value: function _detachView(index) {
          return (
            /** @type {?} */
            this._viewContainerRef.detach(index)
          );
        }
      }, {
        key: "cdkVirtualForOf",
        get: function get() {
          return this._cdkVirtualForOf;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._cdkVirtualForOf = value;

          if (Object(_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_7__["isDataSource"])(value)) {
            this._dataSourceChanges.next(value);
          } else {
            // Slice the value if its an NgIterable to ensure we're working with an array.
            this._dataSourceChanges.next(new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_7__["ArrayDataSource"](Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["isObservable"])(value) ? value : Array.prototype.slice.call(value || [])));
          }
        }
        /**
         * The `TrackByFunction` to use for tracking changes. The `TrackByFunction` takes the index and
         * the item and produces a value to be used as the item's identity when tracking changes.
         * @return {?}
         */

      }, {
        key: "cdkVirtualForTrackBy",
        get: function get() {
          return this._cdkVirtualForTrackBy;
        }
        /**
         * @param {?} fn
         * @return {?}
         */
        ,
        set: function set(fn) {
          var _this52 = this;

          this._needsUpdate = true;
          this._cdkVirtualForTrackBy = fn ?
          /**
          * @param {?} index
          * @param {?} item
          * @return {?}
          */
          function (index, item) {
            return fn(index + (_this52._renderedRange ? _this52._renderedRange.start : 0), item);
          } : undefined;
        }
        /**
         * The template used to stamp out new elements.
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "cdkVirtualForTemplate",
        set: function set(value) {
          if (value) {
            this._needsUpdate = true;
            this._template = value;
          }
        }
      }]);

      return CdkVirtualForOf;
    }();

    CdkVirtualForOf.ɵfac = function CdkVirtualForOf_Factory(t) {
      return new (t || CdkVirtualForOf)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](CdkVirtualScrollViewport, 4), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]));
    };

    CdkVirtualForOf.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: CdkVirtualForOf,
      selectors: [["", "cdkVirtualFor", "", "cdkVirtualForOf", ""]],
      inputs: {
        cdkVirtualForTemplateCacheSize: "cdkVirtualForTemplateCacheSize",
        cdkVirtualForOf: "cdkVirtualForOf",
        cdkVirtualForTrackBy: "cdkVirtualForTrackBy",
        cdkVirtualForTemplate: "cdkVirtualForTemplate"
      }
    });
    /** @nocollapse */

    CdkVirtualForOf.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]
      }, {
        type: CdkVirtualScrollViewport,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"]
        }]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }];
    };

    CdkVirtualForOf.propDecorators = {
      cdkVirtualForOf: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      cdkVirtualForTrackBy: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      cdkVirtualForTemplate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      cdkVirtualForTemplateCacheSize: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CdkVirtualForOf, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: '[cdkVirtualFor][cdkVirtualForOf]'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]
        }, {
          type: CdkVirtualScrollViewport,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }];
      }, {
        cdkVirtualForTemplateCacheSize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        cdkVirtualForOf: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        cdkVirtualForTrackBy: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        cdkVirtualForTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/scrolling/scrolling-module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var CdkScrollableModule = function CdkScrollableModule() {
      _classCallCheck(this, CdkScrollableModule);
    };

    CdkScrollableModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: CdkScrollableModule
    });
    CdkScrollableModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function CdkScrollableModule_Factory(t) {
        return new (t || CdkScrollableModule)();
      }
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](CdkScrollableModule, {
        declarations: [CdkScrollable],
        exports: [CdkScrollable]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CdkScrollableModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          exports: [CdkScrollable],
          declarations: [CdkScrollable]
        }]
      }], null, null);
    })();

    var ScrollingModule = function ScrollingModule() {
      _classCallCheck(this, ScrollingModule);
    };

    ScrollingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: ScrollingModule
    });
    ScrollingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function ScrollingModule_Factory(t) {
        return new (t || ScrollingModule)();
      },
      imports: [[_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["BidiModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["PlatformModule"], CdkScrollableModule], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["BidiModule"], CdkScrollableModule]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ScrollingModule, {
        declarations: function declarations() {
          return [CdkFixedSizeVirtualScroll, CdkVirtualForOf, CdkVirtualScrollViewport];
        },
        imports: function imports() {
          return [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["BidiModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["PlatformModule"], CdkScrollableModule];
        },
        exports: function exports() {
          return [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["BidiModule"], CdkScrollableModule, CdkFixedSizeVirtualScroll, CdkVirtualForOf, CdkVirtualScrollViewport];
        }
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ScrollingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          imports: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["BidiModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["PlatformModule"], CdkScrollableModule],
          exports: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["BidiModule"], CdkScrollableModule, CdkFixedSizeVirtualScroll, CdkVirtualForOf, CdkVirtualScrollViewport],
          declarations: [CdkFixedSizeVirtualScroll, CdkVirtualForOf, CdkVirtualScrollViewport]
        }]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/scrolling/public-api.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=scrolling.js.map

    /***/

  },

  /***/
  "./node_modules/@angular/cdk/fesm2015/cdk.js":
  /*!***************************************************!*\
    !*** ./node_modules/@angular/cdk/fesm2015/cdk.js ***!
    \***************************************************/

  /*! exports provided: VERSION */

  /***/
  function node_modulesAngularCdkFesm2015CdkJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VERSION", function () {
      return VERSION;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /** Current version of the Angular Component Development Kit. */


    var VERSION = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["Version"]('9.2.4');
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    //# sourceMappingURL=cdk.js.map

    /***/
  },

  /***/
  "./node_modules/@angular/cdk/fesm2015/coercion.js":
  /*!********************************************************!*\
    !*** ./node_modules/@angular/cdk/fesm2015/coercion.js ***!
    \********************************************************/

  /*! exports provided: _isNumberValue, coerceArray, coerceBooleanProperty, coerceCssPixelValue, coerceElement, coerceNumberProperty */

  /***/
  function node_modulesAngularCdkFesm2015CoercionJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "_isNumberValue", function () {
      return _isNumberValue;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "coerceArray", function () {
      return coerceArray;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "coerceBooleanProperty", function () {
      return coerceBooleanProperty;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "coerceCssPixelValue", function () {
      return coerceCssPixelValue;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "coerceElement", function () {
      return coerceElement;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "coerceNumberProperty", function () {
      return coerceNumberProperty;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /** Coerces a data-bound value (typically a string) to a boolean. */


    function coerceBooleanProperty(value) {
      return value != null && "".concat(value) !== 'false';
    }
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */


    function coerceNumberProperty(value) {
      var fallbackValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      return _isNumberValue(value) ? Number(value) : fallbackValue;
    }
    /**
     * Whether the provided value is considered a number.
     * @docs-private
     */


    function _isNumberValue(value) {
      // parseFloat(value) handles most of the cases we're interested in (it treats null, empty string,
      // and other non-number values as NaN, where Number just uses 0) but it considers the string
      // '123hello' to be a valid number. Therefore we also check if Number(value) is NaN.
      return !isNaN(parseFloat(value)) && !isNaN(Number(value));
    }
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */


    function coerceArray(value) {
      return Array.isArray(value) ? value : [value];
    }
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /** Coerces a value to a CSS pixel value. */


    function coerceCssPixelValue(value) {
      if (value == null) {
        return '';
      }

      return typeof value === 'string' ? value : "".concat(value, "px");
    }
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * Coerces an ElementRef or an Element into an element.
     * Useful for APIs that can accept either a ref or the native element itself.
     */


    function coerceElement(elementOrRef) {
      return elementOrRef instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] ? elementOrRef.nativeElement : elementOrRef;
    }
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    //# sourceMappingURL=coercion.js.map

    /***/

  },

  /***/
  "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js":
  /*!************************************************************************!*\
    !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js ***!
    \************************************************************************/

  /*! exports provided: MatAnchor, MatButton, MatButtonModule */

  /***/
  function node_modulesAngularMaterial__ivy_ngcc__Fesm2015ButtonJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatAnchor", function () {
      return MatAnchor;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatButton", function () {
      return MatButton;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatButtonModule", function () {
      return MatButtonModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/cdk/a11y */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/a11y.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/button/button.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Default color palette for round buttons (mat-fab and mat-mini-fab)
     * @type {?}
     */


    var _c0 = ["mat-button", ""];
    var _c1 = ["*"];
    var DEFAULT_ROUND_BUTTON_COLOR = 'accent';
    /**
     * List of classes to add to MatButton instances based on host attributes to
     * style as different variants.
     * @type {?}
     */

    var BUTTON_HOST_ATTRIBUTES = ['mat-button', 'mat-flat-button', 'mat-icon-button', 'mat-raised-button', 'mat-stroked-button', 'mat-mini-fab', 'mat-fab']; // Boilerplate for applying mixins to MatButton.

    /**
     * \@docs-private
     */

    var MatButtonBase =
    /**
     * @param {?} _elementRef
     */
    function MatButtonBase(_elementRef) {
      _classCallCheck(this, MatButtonBase);

      this._elementRef = _elementRef;
    };

    if (false) {}
    /** @type {?} */


    var _MatButtonMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["mixinColor"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["mixinDisabled"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["mixinDisableRipple"])(MatButtonBase)));
    /**
     * Material design button.
     */


    var MatButton = /*#__PURE__*/function (_MatButtonMixinBase2) {
      _inherits(MatButton, _MatButtonMixinBase2);

      var _super16 = _createSuper(MatButton);

      /**
       * @param {?} elementRef
       * @param {?} _focusMonitor
       * @param {?} _animationMode
       */
      function MatButton(elementRef, _focusMonitor, _animationMode) {
        var _this53;

        _classCallCheck(this, MatButton);

        _this53 = _super16.call(this, elementRef);
        _this53._focusMonitor = _focusMonitor;
        _this53._animationMode = _animationMode;
        /**
         * Whether the button is round.
         */

        _this53.isRoundButton = _this53._hasHostAttributes('mat-fab', 'mat-mini-fab');
        /**
         * Whether the button is icon button.
         */

        _this53.isIconButton = _this53._hasHostAttributes('mat-icon-button'); // For each of the variant selectors that is present in the button's host
        // attributes, add the correct corresponding class.

        var _iterator4 = _createForOfIteratorHelper(BUTTON_HOST_ATTRIBUTES),
            _step4;

        try {
          for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
            var attr = _step4.value;

            if (_this53._hasHostAttributes(attr)) {
              /** @type {?} */
              _this53._getHostElement().classList.add(attr);
            }
          } // Add a class that applies to all buttons. This makes it easier to target if somebody
          // wants to target all Material buttons. We do it here rather than `host` to ensure that
          // the class is applied to derived classes.

        } catch (err) {
          _iterator4.e(err);
        } finally {
          _iterator4.f();
        }

        elementRef.nativeElement.classList.add('mat-button-base');

        _this53._focusMonitor.monitor(_this53._elementRef, true);

        if (_this53.isRoundButton) {
          _this53.color = DEFAULT_ROUND_BUTTON_COLOR;
        }

        return _this53;
      }
      /**
       * @return {?}
       */


      _createClass(MatButton, [{
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._focusMonitor.stopMonitoring(this._elementRef);
        }
        /**
         * Focuses the button.
         * @param {?=} origin
         * @param {?=} options
         * @return {?}
         */

      }, {
        key: "focus",
        value: function focus() {
          var origin = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'program';
          var options = arguments.length > 1 ? arguments[1] : undefined;

          this._focusMonitor.focusVia(this._getHostElement(), origin, options);
        }
        /**
         * @return {?}
         */

      }, {
        key: "_getHostElement",
        value: function _getHostElement() {
          return this._elementRef.nativeElement;
        }
        /**
         * @return {?}
         */

      }, {
        key: "_isRippleDisabled",
        value: function _isRippleDisabled() {
          return this.disableRipple || this.disabled;
        }
        /**
         * Gets whether the button has one of the given attributes.
         * @param {...?} attributes
         * @return {?}
         */

      }, {
        key: "_hasHostAttributes",
        value: function _hasHostAttributes() {
          var _this54 = this;

          for (var _len5 = arguments.length, attributes = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
            attributes[_key5] = arguments[_key5];
          }

          return attributes.some(
          /**
          * @param {?} attribute
          * @return {?}
          */
          function (attribute) {
            return _this54._getHostElement().hasAttribute(attribute);
          });
        }
      }]);

      return MatButton;
    }(_MatButtonMixinBase);

    MatButton.ɵfac = function MatButton_Factory(t) {
      return new (t || MatButton)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__["FocusMonitor"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["ANIMATION_MODULE_TYPE"], 8));
    };

    MatButton.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MatButton,
      selectors: [["button", "mat-button", ""], ["button", "mat-raised-button", ""], ["button", "mat-icon-button", ""], ["button", "mat-fab", ""], ["button", "mat-mini-fab", ""], ["button", "mat-stroked-button", ""], ["button", "mat-flat-button", ""]],
      viewQuery: function MatButton_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatRipple"], true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.ripple = _t.first);
        }
      },
      hostAttrs: [1, "mat-focus-indicator"],
      hostVars: 3,
      hostBindings: function MatButton_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("disabled", ctx.disabled || null);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("_mat-animation-noopable", ctx._animationMode === "NoopAnimations");
        }
      },
      inputs: {
        disabled: "disabled",
        disableRipple: "disableRipple",
        color: "color"
      },
      exportAs: ["matButton"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      attrs: _c0,
      ngContentSelectors: _c1,
      decls: 4,
      vars: 5,
      consts: [[1, "mat-button-wrapper"], ["matRipple", "", 1, "mat-button-ripple", 3, "matRippleDisabled", "matRippleCentered", "matRippleTrigger"], [1, "mat-button-focus-overlay"]],
      template: function MatButton_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 2);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-button-ripple-round", ctx.isRoundButton || ctx.isIconButton);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRippleDisabled", ctx._isRippleDisabled())("matRippleCentered", ctx.isIconButton)("matRippleTrigger", ctx._getHostElement());
        }
      },
      directives: [_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatRipple"]],
      styles: [".mat-button .mat-button-focus-overlay,.mat-icon-button .mat-button-focus-overlay{opacity:0}.mat-button:hover .mat-button-focus-overlay,.mat-stroked-button:hover .mat-button-focus-overlay{opacity:.04}@media(hover: none){.mat-button:hover .mat-button-focus-overlay,.mat-stroked-button:hover .mat-button-focus-overlay{opacity:0}}.mat-button,.mat-icon-button,.mat-stroked-button,.mat-flat-button{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible}.mat-button::-moz-focus-inner,.mat-icon-button::-moz-focus-inner,.mat-stroked-button::-moz-focus-inner,.mat-flat-button::-moz-focus-inner{border:0}.mat-button[disabled],.mat-icon-button[disabled],.mat-stroked-button[disabled],.mat-flat-button[disabled]{cursor:default}.mat-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-button.cdk-program-focused .mat-button-focus-overlay,.mat-icon-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-icon-button.cdk-program-focused .mat-button-focus-overlay,.mat-stroked-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-stroked-button.cdk-program-focused .mat-button-focus-overlay,.mat-flat-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-flat-button.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-button::-moz-focus-inner,.mat-icon-button::-moz-focus-inner,.mat-stroked-button::-moz-focus-inner,.mat-flat-button::-moz-focus-inner{border:0}.mat-raised-button{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0, 0, 0);transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-raised-button::-moz-focus-inner{border:0}.mat-raised-button[disabled]{cursor:default}.mat-raised-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-raised-button.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-raised-button::-moz-focus-inner{border:0}._mat-animation-noopable.mat-raised-button{transition:none;animation:none}.mat-stroked-button{border:1px solid currentColor;padding:0 15px;line-height:34px}.mat-stroked-button .mat-button-ripple.mat-ripple,.mat-stroked-button .mat-button-focus-overlay{top:-1px;left:-1px;right:-1px;bottom:-1px}.mat-fab{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0, 0, 0);transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);min-width:0;border-radius:50%;width:56px;height:56px;padding:0;flex-shrink:0}.mat-fab::-moz-focus-inner{border:0}.mat-fab[disabled]{cursor:default}.mat-fab.cdk-keyboard-focused .mat-button-focus-overlay,.mat-fab.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-fab::-moz-focus-inner{border:0}._mat-animation-noopable.mat-fab{transition:none;animation:none}.mat-fab .mat-button-wrapper{padding:16px 0;display:inline-block;line-height:24px}.mat-mini-fab{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0, 0, 0);transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);min-width:0;border-radius:50%;width:40px;height:40px;padding:0;flex-shrink:0}.mat-mini-fab::-moz-focus-inner{border:0}.mat-mini-fab[disabled]{cursor:default}.mat-mini-fab.cdk-keyboard-focused .mat-button-focus-overlay,.mat-mini-fab.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-mini-fab::-moz-focus-inner{border:0}._mat-animation-noopable.mat-mini-fab{transition:none;animation:none}.mat-mini-fab .mat-button-wrapper{padding:8px 0;display:inline-block;line-height:24px}.mat-icon-button{padding:0;min-width:0;width:40px;height:40px;flex-shrink:0;line-height:40px;border-radius:50%}.mat-icon-button i,.mat-icon-button .mat-icon{line-height:24px}.mat-button-ripple.mat-ripple,.mat-button-focus-overlay{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit}.mat-button-ripple.mat-ripple:not(:empty){transform:translateZ(0)}.mat-button-focus-overlay{opacity:0;transition:opacity 200ms cubic-bezier(0.35, 0, 0.25, 1),background-color 200ms cubic-bezier(0.35, 0, 0.25, 1)}._mat-animation-noopable .mat-button-focus-overlay{transition:none}.cdk-high-contrast-active .mat-button-focus-overlay{background-color:#fff}.cdk-high-contrast-black-on-white .mat-button-focus-overlay{background-color:#000}.mat-button-ripple-round{border-radius:50%;z-index:1}.mat-button .mat-button-wrapper>*,.mat-flat-button .mat-button-wrapper>*,.mat-stroked-button .mat-button-wrapper>*,.mat-raised-button .mat-button-wrapper>*,.mat-icon-button .mat-button-wrapper>*,.mat-fab .mat-button-wrapper>*,.mat-mini-fab .mat-button-wrapper>*{vertical-align:middle}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button{display:block;font-size:inherit;width:2.5em;height:2.5em}.cdk-high-contrast-active .mat-button,.cdk-high-contrast-active .mat-flat-button,.cdk-high-contrast-active .mat-raised-button,.cdk-high-contrast-active .mat-icon-button,.cdk-high-contrast-active .mat-fab,.cdk-high-contrast-active .mat-mini-fab{outline:solid 1px}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
    /** @nocollapse */

    MatButton.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__["FocusMonitor"]
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["ANIMATION_MODULE_TYPE"]]
        }]
      }];
    };

    MatButton.propDecorators = {
      ripple: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
        args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatRipple"]]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatButton, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "button[mat-button], button[mat-raised-button], button[mat-icon-button],\n             button[mat-fab], button[mat-mini-fab], button[mat-stroked-button],\n             button[mat-flat-button]",
          exportAs: 'matButton',
          host: {
            '[attr.disabled]': 'disabled || null',
            '[class._mat-animation-noopable]': '_animationMode === "NoopAnimations"',
            'class': 'mat-focus-indicator'
          },
          template: "<span class=\"mat-button-wrapper\"><ng-content></ng-content></span>\n<div matRipple class=\"mat-button-ripple\"\n     [class.mat-button-ripple-round]=\"isRoundButton || isIconButton\"\n     [matRippleDisabled]=\"_isRippleDisabled()\"\n     [matRippleCentered]=\"isIconButton\"\n     [matRippleTrigger]=\"_getHostElement()\"></div>\n<div class=\"mat-button-focus-overlay\"></div>\n",
          inputs: ['disabled', 'disableRipple', 'color'],
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
          styles: [".mat-button .mat-button-focus-overlay,.mat-icon-button .mat-button-focus-overlay{opacity:0}.mat-button:hover .mat-button-focus-overlay,.mat-stroked-button:hover .mat-button-focus-overlay{opacity:.04}@media(hover: none){.mat-button:hover .mat-button-focus-overlay,.mat-stroked-button:hover .mat-button-focus-overlay{opacity:0}}.mat-button,.mat-icon-button,.mat-stroked-button,.mat-flat-button{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible}.mat-button::-moz-focus-inner,.mat-icon-button::-moz-focus-inner,.mat-stroked-button::-moz-focus-inner,.mat-flat-button::-moz-focus-inner{border:0}.mat-button[disabled],.mat-icon-button[disabled],.mat-stroked-button[disabled],.mat-flat-button[disabled]{cursor:default}.mat-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-button.cdk-program-focused .mat-button-focus-overlay,.mat-icon-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-icon-button.cdk-program-focused .mat-button-focus-overlay,.mat-stroked-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-stroked-button.cdk-program-focused .mat-button-focus-overlay,.mat-flat-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-flat-button.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-button::-moz-focus-inner,.mat-icon-button::-moz-focus-inner,.mat-stroked-button::-moz-focus-inner,.mat-flat-button::-moz-focus-inner{border:0}.mat-raised-button{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0, 0, 0);transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-raised-button::-moz-focus-inner{border:0}.mat-raised-button[disabled]{cursor:default}.mat-raised-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-raised-button.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-raised-button::-moz-focus-inner{border:0}._mat-animation-noopable.mat-raised-button{transition:none;animation:none}.mat-stroked-button{border:1px solid currentColor;padding:0 15px;line-height:34px}.mat-stroked-button .mat-button-ripple.mat-ripple,.mat-stroked-button .mat-button-focus-overlay{top:-1px;left:-1px;right:-1px;bottom:-1px}.mat-fab{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0, 0, 0);transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);min-width:0;border-radius:50%;width:56px;height:56px;padding:0;flex-shrink:0}.mat-fab::-moz-focus-inner{border:0}.mat-fab[disabled]{cursor:default}.mat-fab.cdk-keyboard-focused .mat-button-focus-overlay,.mat-fab.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-fab::-moz-focus-inner{border:0}._mat-animation-noopable.mat-fab{transition:none;animation:none}.mat-fab .mat-button-wrapper{padding:16px 0;display:inline-block;line-height:24px}.mat-mini-fab{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0, 0, 0);transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);min-width:0;border-radius:50%;width:40px;height:40px;padding:0;flex-shrink:0}.mat-mini-fab::-moz-focus-inner{border:0}.mat-mini-fab[disabled]{cursor:default}.mat-mini-fab.cdk-keyboard-focused .mat-button-focus-overlay,.mat-mini-fab.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-mini-fab::-moz-focus-inner{border:0}._mat-animation-noopable.mat-mini-fab{transition:none;animation:none}.mat-mini-fab .mat-button-wrapper{padding:8px 0;display:inline-block;line-height:24px}.mat-icon-button{padding:0;min-width:0;width:40px;height:40px;flex-shrink:0;line-height:40px;border-radius:50%}.mat-icon-button i,.mat-icon-button .mat-icon{line-height:24px}.mat-button-ripple.mat-ripple,.mat-button-focus-overlay{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit}.mat-button-ripple.mat-ripple:not(:empty){transform:translateZ(0)}.mat-button-focus-overlay{opacity:0;transition:opacity 200ms cubic-bezier(0.35, 0, 0.25, 1),background-color 200ms cubic-bezier(0.35, 0, 0.25, 1)}._mat-animation-noopable .mat-button-focus-overlay{transition:none}.cdk-high-contrast-active .mat-button-focus-overlay{background-color:#fff}.cdk-high-contrast-black-on-white .mat-button-focus-overlay{background-color:#000}.mat-button-ripple-round{border-radius:50%;z-index:1}.mat-button .mat-button-wrapper>*,.mat-flat-button .mat-button-wrapper>*,.mat-stroked-button .mat-button-wrapper>*,.mat-raised-button .mat-button-wrapper>*,.mat-icon-button .mat-button-wrapper>*,.mat-fab .mat-button-wrapper>*,.mat-mini-fab .mat-button-wrapper>*{vertical-align:middle}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button{display:block;font-size:inherit;width:2.5em;height:2.5em}.cdk-high-contrast-active .mat-button,.cdk-high-contrast-active .mat-flat-button,.cdk-high-contrast-active .mat-raised-button,.cdk-high-contrast-active .mat-icon-button,.cdk-high-contrast-active .mat-fab,.cdk-high-contrast-active .mat-mini-fab{outline:solid 1px}\n"]
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__["FocusMonitor"]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["ANIMATION_MODULE_TYPE"]]
          }]
        }];
      }, {
        ripple: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatRipple"]]
        }]
      });
    })();

    if (false) {}
    /**
     * Material design anchor button.
     */


    var MatAnchor = /*#__PURE__*/function (_MatButton) {
      _inherits(MatAnchor, _MatButton);

      var _super17 = _createSuper(MatAnchor);

      /**
       * @param {?} focusMonitor
       * @param {?} elementRef
       * @param {?} animationMode
       */
      function MatAnchor(focusMonitor, elementRef, animationMode) {
        _classCallCheck(this, MatAnchor);

        return _super17.call(this, elementRef, focusMonitor, animationMode);
      }
      /**
       * @param {?} event
       * @return {?}
       */


      _createClass(MatAnchor, [{
        key: "_haltDisabledEvents",
        value: function _haltDisabledEvents(event) {
          // A disabled button shouldn't apply any actions
          if (this.disabled) {
            event.preventDefault();
            event.stopImmediatePropagation();
          }
        }
      }]);

      return MatAnchor;
    }(MatButton);

    MatAnchor.ɵfac = function MatAnchor_Factory(t) {
      return new (t || MatAnchor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__["FocusMonitor"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["ANIMATION_MODULE_TYPE"], 8));
    };

    MatAnchor.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MatAnchor,
      selectors: [["a", "mat-button", ""], ["a", "mat-raised-button", ""], ["a", "mat-icon-button", ""], ["a", "mat-fab", ""], ["a", "mat-mini-fab", ""], ["a", "mat-stroked-button", ""], ["a", "mat-flat-button", ""]],
      hostAttrs: [1, "mat-focus-indicator"],
      hostVars: 5,
      hostBindings: function MatAnchor_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MatAnchor_click_HostBindingHandler($event) {
            return ctx._haltDisabledEvents($event);
          });
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("tabindex", ctx.disabled ? 0 - 1 : ctx.tabIndex || 0)("disabled", ctx.disabled || null)("aria-disabled", ctx.disabled.toString());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("_mat-animation-noopable", ctx._animationMode === "NoopAnimations");
        }
      },
      inputs: {
        disabled: "disabled",
        disableRipple: "disableRipple",
        color: "color",
        tabIndex: "tabIndex"
      },
      exportAs: ["matButton", "matAnchor"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      attrs: _c0,
      ngContentSelectors: _c1,
      decls: 4,
      vars: 5,
      consts: [[1, "mat-button-wrapper"], ["matRipple", "", 1, "mat-button-ripple", 3, "matRippleDisabled", "matRippleCentered", "matRippleTrigger"], [1, "mat-button-focus-overlay"]],
      template: function MatAnchor_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 2);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-button-ripple-round", ctx.isRoundButton || ctx.isIconButton);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRippleDisabled", ctx._isRippleDisabled())("matRippleCentered", ctx.isIconButton)("matRippleTrigger", ctx._getHostElement());
        }
      },
      directives: [_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatRipple"]],
      styles: [".mat-button .mat-button-focus-overlay,.mat-icon-button .mat-button-focus-overlay{opacity:0}.mat-button:hover .mat-button-focus-overlay,.mat-stroked-button:hover .mat-button-focus-overlay{opacity:.04}@media(hover: none){.mat-button:hover .mat-button-focus-overlay,.mat-stroked-button:hover .mat-button-focus-overlay{opacity:0}}.mat-button,.mat-icon-button,.mat-stroked-button,.mat-flat-button{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible}.mat-button::-moz-focus-inner,.mat-icon-button::-moz-focus-inner,.mat-stroked-button::-moz-focus-inner,.mat-flat-button::-moz-focus-inner{border:0}.mat-button[disabled],.mat-icon-button[disabled],.mat-stroked-button[disabled],.mat-flat-button[disabled]{cursor:default}.mat-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-button.cdk-program-focused .mat-button-focus-overlay,.mat-icon-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-icon-button.cdk-program-focused .mat-button-focus-overlay,.mat-stroked-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-stroked-button.cdk-program-focused .mat-button-focus-overlay,.mat-flat-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-flat-button.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-button::-moz-focus-inner,.mat-icon-button::-moz-focus-inner,.mat-stroked-button::-moz-focus-inner,.mat-flat-button::-moz-focus-inner{border:0}.mat-raised-button{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0, 0, 0);transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-raised-button::-moz-focus-inner{border:0}.mat-raised-button[disabled]{cursor:default}.mat-raised-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-raised-button.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-raised-button::-moz-focus-inner{border:0}._mat-animation-noopable.mat-raised-button{transition:none;animation:none}.mat-stroked-button{border:1px solid currentColor;padding:0 15px;line-height:34px}.mat-stroked-button .mat-button-ripple.mat-ripple,.mat-stroked-button .mat-button-focus-overlay{top:-1px;left:-1px;right:-1px;bottom:-1px}.mat-fab{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0, 0, 0);transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);min-width:0;border-radius:50%;width:56px;height:56px;padding:0;flex-shrink:0}.mat-fab::-moz-focus-inner{border:0}.mat-fab[disabled]{cursor:default}.mat-fab.cdk-keyboard-focused .mat-button-focus-overlay,.mat-fab.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-fab::-moz-focus-inner{border:0}._mat-animation-noopable.mat-fab{transition:none;animation:none}.mat-fab .mat-button-wrapper{padding:16px 0;display:inline-block;line-height:24px}.mat-mini-fab{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0, 0, 0);transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);min-width:0;border-radius:50%;width:40px;height:40px;padding:0;flex-shrink:0}.mat-mini-fab::-moz-focus-inner{border:0}.mat-mini-fab[disabled]{cursor:default}.mat-mini-fab.cdk-keyboard-focused .mat-button-focus-overlay,.mat-mini-fab.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-mini-fab::-moz-focus-inner{border:0}._mat-animation-noopable.mat-mini-fab{transition:none;animation:none}.mat-mini-fab .mat-button-wrapper{padding:8px 0;display:inline-block;line-height:24px}.mat-icon-button{padding:0;min-width:0;width:40px;height:40px;flex-shrink:0;line-height:40px;border-radius:50%}.mat-icon-button i,.mat-icon-button .mat-icon{line-height:24px}.mat-button-ripple.mat-ripple,.mat-button-focus-overlay{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit}.mat-button-ripple.mat-ripple:not(:empty){transform:translateZ(0)}.mat-button-focus-overlay{opacity:0;transition:opacity 200ms cubic-bezier(0.35, 0, 0.25, 1),background-color 200ms cubic-bezier(0.35, 0, 0.25, 1)}._mat-animation-noopable .mat-button-focus-overlay{transition:none}.cdk-high-contrast-active .mat-button-focus-overlay{background-color:#fff}.cdk-high-contrast-black-on-white .mat-button-focus-overlay{background-color:#000}.mat-button-ripple-round{border-radius:50%;z-index:1}.mat-button .mat-button-wrapper>*,.mat-flat-button .mat-button-wrapper>*,.mat-stroked-button .mat-button-wrapper>*,.mat-raised-button .mat-button-wrapper>*,.mat-icon-button .mat-button-wrapper>*,.mat-fab .mat-button-wrapper>*,.mat-mini-fab .mat-button-wrapper>*{vertical-align:middle}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button{display:block;font-size:inherit;width:2.5em;height:2.5em}.cdk-high-contrast-active .mat-button,.cdk-high-contrast-active .mat-flat-button,.cdk-high-contrast-active .mat-raised-button,.cdk-high-contrast-active .mat-icon-button,.cdk-high-contrast-active .mat-fab,.cdk-high-contrast-active .mat-mini-fab{outline:solid 1px}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
    /** @nocollapse */

    MatAnchor.ctorParameters = function () {
      return [{
        type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__["FocusMonitor"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["ANIMATION_MODULE_TYPE"]]
        }]
      }];
    };

    MatAnchor.propDecorators = {
      tabIndex: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatAnchor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "a[mat-button], a[mat-raised-button], a[mat-icon-button], a[mat-fab],\n             a[mat-mini-fab], a[mat-stroked-button], a[mat-flat-button]",
          exportAs: 'matButton, matAnchor',
          host: {
            // Note that we ignore the user-specified tabindex when it's disabled for
            // consistency with the `mat-button` applied on native buttons where even
            // though they have an index, they're not tabbable.
            '[attr.tabindex]': 'disabled ? -1 : (tabIndex || 0)',
            '[attr.disabled]': 'disabled || null',
            '[attr.aria-disabled]': 'disabled.toString()',
            '(click)': '_haltDisabledEvents($event)',
            '[class._mat-animation-noopable]': '_animationMode === "NoopAnimations"',
            'class': 'mat-focus-indicator'
          },
          inputs: ['disabled', 'disableRipple', 'color'],
          template: "<span class=\"mat-button-wrapper\"><ng-content></ng-content></span>\n<div matRipple class=\"mat-button-ripple\"\n     [class.mat-button-ripple-round]=\"isRoundButton || isIconButton\"\n     [matRippleDisabled]=\"_isRippleDisabled()\"\n     [matRippleCentered]=\"isIconButton\"\n     [matRippleTrigger]=\"_getHostElement()\"></div>\n<div class=\"mat-button-focus-overlay\"></div>\n",
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
          styles: [".mat-button .mat-button-focus-overlay,.mat-icon-button .mat-button-focus-overlay{opacity:0}.mat-button:hover .mat-button-focus-overlay,.mat-stroked-button:hover .mat-button-focus-overlay{opacity:.04}@media(hover: none){.mat-button:hover .mat-button-focus-overlay,.mat-stroked-button:hover .mat-button-focus-overlay{opacity:0}}.mat-button,.mat-icon-button,.mat-stroked-button,.mat-flat-button{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible}.mat-button::-moz-focus-inner,.mat-icon-button::-moz-focus-inner,.mat-stroked-button::-moz-focus-inner,.mat-flat-button::-moz-focus-inner{border:0}.mat-button[disabled],.mat-icon-button[disabled],.mat-stroked-button[disabled],.mat-flat-button[disabled]{cursor:default}.mat-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-button.cdk-program-focused .mat-button-focus-overlay,.mat-icon-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-icon-button.cdk-program-focused .mat-button-focus-overlay,.mat-stroked-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-stroked-button.cdk-program-focused .mat-button-focus-overlay,.mat-flat-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-flat-button.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-button::-moz-focus-inner,.mat-icon-button::-moz-focus-inner,.mat-stroked-button::-moz-focus-inner,.mat-flat-button::-moz-focus-inner{border:0}.mat-raised-button{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0, 0, 0);transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-raised-button::-moz-focus-inner{border:0}.mat-raised-button[disabled]{cursor:default}.mat-raised-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-raised-button.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-raised-button::-moz-focus-inner{border:0}._mat-animation-noopable.mat-raised-button{transition:none;animation:none}.mat-stroked-button{border:1px solid currentColor;padding:0 15px;line-height:34px}.mat-stroked-button .mat-button-ripple.mat-ripple,.mat-stroked-button .mat-button-focus-overlay{top:-1px;left:-1px;right:-1px;bottom:-1px}.mat-fab{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0, 0, 0);transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);min-width:0;border-radius:50%;width:56px;height:56px;padding:0;flex-shrink:0}.mat-fab::-moz-focus-inner{border:0}.mat-fab[disabled]{cursor:default}.mat-fab.cdk-keyboard-focused .mat-button-focus-overlay,.mat-fab.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-fab::-moz-focus-inner{border:0}._mat-animation-noopable.mat-fab{transition:none;animation:none}.mat-fab .mat-button-wrapper{padding:16px 0;display:inline-block;line-height:24px}.mat-mini-fab{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0, 0, 0);transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);min-width:0;border-radius:50%;width:40px;height:40px;padding:0;flex-shrink:0}.mat-mini-fab::-moz-focus-inner{border:0}.mat-mini-fab[disabled]{cursor:default}.mat-mini-fab.cdk-keyboard-focused .mat-button-focus-overlay,.mat-mini-fab.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-mini-fab::-moz-focus-inner{border:0}._mat-animation-noopable.mat-mini-fab{transition:none;animation:none}.mat-mini-fab .mat-button-wrapper{padding:8px 0;display:inline-block;line-height:24px}.mat-icon-button{padding:0;min-width:0;width:40px;height:40px;flex-shrink:0;line-height:40px;border-radius:50%}.mat-icon-button i,.mat-icon-button .mat-icon{line-height:24px}.mat-button-ripple.mat-ripple,.mat-button-focus-overlay{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit}.mat-button-ripple.mat-ripple:not(:empty){transform:translateZ(0)}.mat-button-focus-overlay{opacity:0;transition:opacity 200ms cubic-bezier(0.35, 0, 0.25, 1),background-color 200ms cubic-bezier(0.35, 0, 0.25, 1)}._mat-animation-noopable .mat-button-focus-overlay{transition:none}.cdk-high-contrast-active .mat-button-focus-overlay{background-color:#fff}.cdk-high-contrast-black-on-white .mat-button-focus-overlay{background-color:#000}.mat-button-ripple-round{border-radius:50%;z-index:1}.mat-button .mat-button-wrapper>*,.mat-flat-button .mat-button-wrapper>*,.mat-stroked-button .mat-button-wrapper>*,.mat-raised-button .mat-button-wrapper>*,.mat-icon-button .mat-button-wrapper>*,.mat-fab .mat-button-wrapper>*,.mat-mini-fab .mat-button-wrapper>*{vertical-align:middle}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button{display:block;font-size:inherit;width:2.5em;height:2.5em}.cdk-high-contrast-active .mat-button,.cdk-high-contrast-active .mat-flat-button,.cdk-high-contrast-active .mat-raised-button,.cdk-high-contrast-active .mat-icon-button,.cdk-high-contrast-active .mat-fab,.cdk-high-contrast-active .mat-mini-fab{outline:solid 1px}\n"]
        }]
      }], function () {
        return [{
          type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__["FocusMonitor"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["ANIMATION_MODULE_TYPE"]]
          }]
        }];
      }, {
        tabIndex: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/button/button-module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var MatButtonModule = function MatButtonModule() {
      _classCallCheck(this, MatButtonModule);
    };

    MatButtonModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: MatButtonModule
    });
    MatButtonModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function MatButtonModule_Factory(t) {
        return new (t || MatButtonModule)();
      },
      imports: [[_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatRippleModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"]], _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MatButtonModule, {
        declarations: function declarations() {
          return [MatButton, MatAnchor];
        },
        imports: function imports() {
          return [_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatRippleModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"]];
        },
        exports: function exports() {
          return [MatButton, MatAnchor, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"]];
        }
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatButtonModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatRippleModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"]],
          exports: [MatButton, MatAnchor, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"]],
          declarations: [MatButton, MatAnchor]
        }]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/button/public-api.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=button.js.map

    /***/

  },

  /***/
  "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js":
  /*!**********************************************************************!*\
    !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js ***!
    \**********************************************************************/

  /*! exports provided: APR, AUG, AnimationCurves, AnimationDurations, DEC, DateAdapter, ErrorStateMatcher, FEB, GestureConfig, JAN, JUL, JUN, MAR, MATERIAL_SANITY_CHECKS, MAT_DATE_FORMATS, MAT_DATE_LOCALE, MAT_DATE_LOCALE_FACTORY, MAT_DATE_LOCALE_PROVIDER, MAT_HAMMER_OPTIONS, MAT_LABEL_GLOBAL_OPTIONS, MAT_NATIVE_DATE_FORMATS, MAT_OPTION_PARENT_COMPONENT, MAT_RIPPLE_GLOBAL_OPTIONS, MAY, MatCommonModule, MatLine, MatLineModule, MatLineSetter, MatNativeDateModule, MatOptgroup, MatOption, MatOptionModule, MatOptionSelectionChange, MatPseudoCheckbox, MatPseudoCheckboxModule, MatRipple, MatRippleModule, NOV, NativeDateAdapter, NativeDateModule, OCT, RippleRef, RippleRenderer, SEP, ShowOnDirtyErrorStateMatcher, VERSION, _countGroupLabelsBeforeOption, _getOptionScrollPosition, defaultRippleAnimationConfig, mixinColor, mixinDisableRipple, mixinDisabled, mixinErrorState, mixinInitialized, mixinTabIndex, setLines, ɵangular_material_src_material_core_core_a */

  /***/
  function node_modulesAngularMaterial__ivy_ngcc__Fesm2015CoreJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "APR", function () {
      return APR;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AUG", function () {
      return AUG;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AnimationCurves", function () {
      return AnimationCurves;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AnimationDurations", function () {
      return AnimationDurations;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DEC", function () {
      return DEC;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DateAdapter", function () {
      return DateAdapter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ErrorStateMatcher", function () {
      return ErrorStateMatcher;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FEB", function () {
      return FEB;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GestureConfig", function () {
      return GestureConfig;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JAN", function () {
      return JAN;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JUL", function () {
      return JUL;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JUN", function () {
      return JUN;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAR", function () {
      return MAR;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MATERIAL_SANITY_CHECKS", function () {
      return MATERIAL_SANITY_CHECKS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_DATE_FORMATS", function () {
      return MAT_DATE_FORMATS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_DATE_LOCALE", function () {
      return MAT_DATE_LOCALE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_DATE_LOCALE_FACTORY", function () {
      return MAT_DATE_LOCALE_FACTORY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_DATE_LOCALE_PROVIDER", function () {
      return MAT_DATE_LOCALE_PROVIDER;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_HAMMER_OPTIONS", function () {
      return MAT_HAMMER_OPTIONS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_LABEL_GLOBAL_OPTIONS", function () {
      return MAT_LABEL_GLOBAL_OPTIONS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_NATIVE_DATE_FORMATS", function () {
      return MAT_NATIVE_DATE_FORMATS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_OPTION_PARENT_COMPONENT", function () {
      return MAT_OPTION_PARENT_COMPONENT;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_RIPPLE_GLOBAL_OPTIONS", function () {
      return MAT_RIPPLE_GLOBAL_OPTIONS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAY", function () {
      return MAY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatCommonModule", function () {
      return MatCommonModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatLine", function () {
      return MatLine;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatLineModule", function () {
      return MatLineModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatLineSetter", function () {
      return MatLineSetter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatNativeDateModule", function () {
      return MatNativeDateModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatOptgroup", function () {
      return MatOptgroup;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatOption", function () {
      return MatOption;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatOptionModule", function () {
      return MatOptionModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatOptionSelectionChange", function () {
      return MatOptionSelectionChange;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatPseudoCheckbox", function () {
      return MatPseudoCheckbox;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatPseudoCheckboxModule", function () {
      return MatPseudoCheckboxModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatRipple", function () {
      return MatRipple;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatRippleModule", function () {
      return MatRippleModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NOV", function () {
      return NOV;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NativeDateAdapter", function () {
      return NativeDateAdapter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NativeDateModule", function () {
      return NativeDateModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OCT", function () {
      return OCT;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RippleRef", function () {
      return RippleRef;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RippleRenderer", function () {
      return RippleRenderer;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SEP", function () {
      return SEP;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShowOnDirtyErrorStateMatcher", function () {
      return ShowOnDirtyErrorStateMatcher;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VERSION", function () {
      return VERSION;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "_countGroupLabelsBeforeOption", function () {
      return _countGroupLabelsBeforeOption;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "_getOptionScrollPosition", function () {
      return _getOptionScrollPosition;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "defaultRippleAnimationConfig", function () {
      return defaultRippleAnimationConfig;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "mixinColor", function () {
      return mixinColor;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "mixinDisableRipple", function () {
      return mixinDisableRipple;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "mixinDisabled", function () {
      return mixinDisabled;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "mixinErrorState", function () {
      return mixinErrorState;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "mixinInitialized", function () {
      return mixinInitialized;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "mixinTabIndex", function () {
      return mixinTabIndex;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "setLines", function () {
      return setLines;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_material_src_material_core_core_a", function () {
      return MATERIAL_SANITY_CHECKS_FACTORY;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/cdk/a11y */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/a11y.js");
    /* harmony import */


    var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/cdk/bidi */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/bidi.js");
    /* harmony import */


    var _angular_cdk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/cdk */
    "./node_modules/@angular/cdk/fesm2015/cdk.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/cdk/coercion */
    "./node_modules/@angular/cdk/fesm2015/coercion.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/cdk/platform */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/platform.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/cdk/keycodes */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/keycodes.js");
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/core/version.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Current version of Angular Material.
     * @type {?}
     */


    var _c0 = ["*", [["mat-option"], ["ng-container"]]];
    var _c1 = ["*", "mat-option, ng-container"];

    function MatOption_mat_pseudo_checkbox_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-pseudo-checkbox", 3);
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("state", ctx_r0.selected ? "checked" : "unchecked")("disabled", ctx_r0.disabled);
      }
    }

    var _c2 = ["*"];
    var VERSION = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["Version"]('9.2.4');
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/core/animation/animation.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * \@docs-private
     */

    var AnimationCurves = function AnimationCurves() {
      _classCallCheck(this, AnimationCurves);
    };

    AnimationCurves.STANDARD_CURVE = 'cubic-bezier(0.4,0.0,0.2,1)';
    AnimationCurves.DECELERATION_CURVE = 'cubic-bezier(0.0,0.0,0.2,1)';
    AnimationCurves.ACCELERATION_CURVE = 'cubic-bezier(0.4,0.0,1,1)';
    AnimationCurves.SHARP_CURVE = 'cubic-bezier(0.4,0.0,0.6,1)';

    if (false) {}
    /**
     * \@docs-private
     */


    var AnimationDurations = function AnimationDurations() {
      _classCallCheck(this, AnimationDurations);
    };

    AnimationDurations.COMPLEX = '375ms';
    AnimationDurations.ENTERING = '225ms';
    AnimationDurations.EXITING = '195ms';

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/core/common-behaviors/common-module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // Private version constant to circumvent test/build issues,
    // i.e. avoid core to depend on the @angular/material primary entry-point
    // Can be removed once the Material primary entry-point no longer
    // re-exports all secondary entry-points

    /** @type {?} */


    var VERSION$1 = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["Version"]('9.2.4');
    /**
     * \@docs-private
     * @return {?}
     */

    function MATERIAL_SANITY_CHECKS_FACTORY() {
      return true;
    }
    /**
     * Injection token that configures whether the Material sanity checks are enabled.
     * @type {?}
     */


    var MATERIAL_SANITY_CHECKS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('mat-sanity-checks', {
      providedIn: 'root',
      factory: MATERIAL_SANITY_CHECKS_FACTORY
    });
    /**
     * Object that can be used to configure the sanity checks granularly.
     * @record
     */

    function GranularSanityChecks() {}

    if (false) {}
    /**
     * Module that captures anything that should be loaded and/or run for *all* Angular Material
     * components. This includes Bidi, etc.
     *
     * This module should be imported to each top-level component module (e.g., MatTabsModule).
     */


    var MatCommonModule = /*#__PURE__*/function () {
      /**
       * @param {?} highContrastModeDetector
       * @param {?} sanityChecks
       * @param {?=} document
       */
      function MatCommonModule(highContrastModeDetector, sanityChecks,
      /** @breaking-change 11.0.0 make document required */
      document) {
        _classCallCheck(this, MatCommonModule);

        /**
         * Whether we've done the global sanity checks (e.g. a theme is loaded, there is a doctype).
         */
        this._hasDoneGlobalChecks = false;
        this._document = document; // While A11yModule also does this, we repeat it here to avoid importing A11yModule
        // in MatCommonModule.

        highContrastModeDetector._applyBodyHighContrastModeCssClasses(); // Note that `_sanityChecks` is typed to `any`, because AoT
        // throws an error if we use the `SanityChecks` type directly.


        this._sanityChecks = sanityChecks;

        if (!this._hasDoneGlobalChecks) {
          this._checkDoctypeIsDefined();

          this._checkThemeIsPresent();

          this._checkCdkVersionMatch();

          this._hasDoneGlobalChecks = true;
        }
      }
      /**
       * Access injected document if available or fallback to global document reference
       * @private
       * @return {?}
       */


      _createClass(MatCommonModule, [{
        key: "_getDocument",
        value: function _getDocument() {
          /** @type {?} */
          var doc = this._document || document;
          return typeof doc === 'object' && doc ? doc : null;
        }
        /**
         * Use defaultView of injected document if available or fallback to global window reference
         * @private
         * @return {?}
         */

      }, {
        key: "_getWindow",
        value: function _getWindow() {
          /** @type {?} */
          var doc = this._getDocument();
          /** @type {?} */


          var win = (doc === null || doc === void 0 ? void 0 : doc.defaultView) || window;
          return typeof win === 'object' && win ? win : null;
        }
        /**
         * Whether any sanity checks are enabled.
         * @private
         * @return {?}
         */

      }, {
        key: "_checksAreEnabled",
        value: function _checksAreEnabled() {
          return Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["isDevMode"])() && !this._isTestEnv();
        }
        /**
         * Whether the code is running in tests.
         * @private
         * @return {?}
         */

      }, {
        key: "_isTestEnv",
        value: function _isTestEnv() {
          /** @type {?} */
          var window =
          /** @type {?} */
          this._getWindow();

          return window && (window.__karma__ || window.jasmine);
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_checkDoctypeIsDefined",
        value: function _checkDoctypeIsDefined() {
          /** @type {?} */
          var isEnabled = this._checksAreEnabled() && (this._sanityChecks === true ||
          /** @type {?} */
          this._sanityChecks.doctype);
          /** @type {?} */


          var document = this._getDocument();

          if (isEnabled && document && !document.doctype) {
            console.warn('Current document does not have a doctype. This may cause ' + 'some Angular Material components not to behave as expected.');
          }
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_checkThemeIsPresent",
        value: function _checkThemeIsPresent() {
          // We need to assert that the `body` is defined, because these checks run very early
          // and the `body` won't be defined if the consumer put their scripts in the `head`.

          /** @type {?} */
          var isDisabled = !this._checksAreEnabled() || this._sanityChecks === false || !
          /** @type {?} */
          this._sanityChecks.theme;
          /** @type {?} */

          var document = this._getDocument();

          if (isDisabled || !document || !document.body || typeof getComputedStyle !== 'function') {
            return;
          }
          /** @type {?} */


          var testElement = document.createElement('div');
          testElement.classList.add('mat-theme-loaded-marker');
          document.body.appendChild(testElement);
          /** @type {?} */

          var computedStyle = getComputedStyle(testElement); // In some situations the computed style of the test element can be null. For example in
          // Firefox, the computed style is null if an application is running inside of a hidden iframe.
          // See: https://bugzilla.mozilla.org/show_bug.cgi?id=548397

          if (computedStyle && computedStyle.display !== 'none') {
            console.warn('Could not find Angular Material core theme. Most Material ' + 'components may not work as expected. For more info refer ' + 'to the theming guide: https://material.angular.io/guide/theming');
          }

          document.body.removeChild(testElement);
        }
        /**
         * Checks whether the material version matches the cdk version
         * @private
         * @return {?}
         */

      }, {
        key: "_checkCdkVersionMatch",
        value: function _checkCdkVersionMatch() {
          /** @type {?} */
          var isEnabled = this._checksAreEnabled() && (this._sanityChecks === true ||
          /** @type {?} */
          this._sanityChecks.version);

          if (isEnabled && VERSION$1.full !== _angular_cdk__WEBPACK_IMPORTED_MODULE_3__["VERSION"].full) {
            console.warn('The Angular Material version (' + VERSION$1.full + ') does not match ' + 'the Angular CDK version (' + _angular_cdk__WEBPACK_IMPORTED_MODULE_3__["VERSION"].full + ').\n' + 'Please ensure the versions of these two packages exactly match.');
          }
        }
      }]);

      return MatCommonModule;
    }();

    MatCommonModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: MatCommonModule
    });
    MatCommonModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function MatCommonModule_Factory(t) {
        return new (t || MatCommonModule)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["HighContrastModeDetector"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](MATERIAL_SANITY_CHECKS, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"], 8));
      },
      imports: [[_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__["BidiModule"]], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__["BidiModule"]]
    });
    /** @nocollapse */

    MatCommonModule.ctorParameters = function () {
      return [{
        type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["HighContrastModeDetector"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [MATERIAL_SANITY_CHECKS]
        }]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]
        }]
      }];
    };

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MatCommonModule, {
        imports: function imports() {
          return [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__["BidiModule"]];
        },
        exports: function exports() {
          return [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__["BidiModule"]];
        }
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCommonModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__["BidiModule"]],
          exports: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__["BidiModule"]]
        }]
      }], function () {
        return [{
          type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["HighContrastModeDetector"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [MATERIAL_SANITY_CHECKS]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]
          }]
        }];
      }, null);
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/core/common-behaviors/disabled.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * \@docs-private
     * @record
     */


    function CanDisable() {}

    if (false) {}
    /**
     * Mixin to augment a directive with a `disabled` property.
     * @template T
     * @param {?} base
     * @return {?}
     */


    function mixinDisabled(base) {
      return /*#__PURE__*/function (_base) {
        _inherits(_class, _base);

        var _super18 = _createSuper(_class);

        /**
         * @param {...?} args
         */
        function _class() {
          var _this55;

          _classCallCheck(this, _class);

          for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
            args[_key6] = arguments[_key6];
          }

          _this55 = _super18.call.apply(_super18, [this].concat(args));
          _this55._disabled = false;
          return _this55;
        }
        /**
         * @return {?}
         */


        _createClass(_class, [{
          key: "disabled",
          get: function get() {
            return this._disabled;
          }
          /**
           * @param {?} value
           * @return {?}
           */
          ,
          set: function set(value) {
            this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceBooleanProperty"])(value);
          }
        }]);

        return _class;
      }(base);
    }
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/core/common-behaviors/color.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * \@docs-private
     * @record
     */


    function CanColor() {}

    if (false) {}
    /**
     * \@docs-private
     * @record
     */


    function HasElementRef() {}

    if (false) {}
    /**
     * Mixin to augment a directive with a `color` property.
     * @template T
     * @param {?} base
     * @param {?=} defaultColor
     * @return {?}
     */


    function mixinColor(base, defaultColor) {
      return /*#__PURE__*/function (_base2) {
        _inherits(_class2, _base2);

        var _super19 = _createSuper(_class2);

        /**
         * @param {...?} args
         */
        function _class2() {
          var _this56;

          _classCallCheck(this, _class2);

          for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
            args[_key7] = arguments[_key7];
          }

          _this56 = _super19.call.apply(_super19, [this].concat(args)); // Set the default color that can be specified from the mixin.

          _this56.color = defaultColor;
          return _this56;
        }
        /**
         * @return {?}
         */


        _createClass(_class2, [{
          key: "color",
          get: function get() {
            return this._color;
          }
          /**
           * @param {?} value
           * @return {?}
           */
          ,
          set: function set(value) {
            /** @type {?} */
            var colorPalette = value || defaultColor;

            if (colorPalette !== this._color) {
              if (this._color) {
                this._elementRef.nativeElement.classList.remove("mat-".concat(this._color));
              }

              if (colorPalette) {
                this._elementRef.nativeElement.classList.add("mat-".concat(colorPalette));
              }

              this._color = colorPalette;
            }
          }
        }]);

        return _class2;
      }(base);
    }
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/core/common-behaviors/disable-ripple.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * \@docs-private
     * @record
     */


    function CanDisableRipple() {}

    if (false) {}
    /**
     * Mixin to augment a directive with a `disableRipple` property.
     * @template T
     * @param {?} base
     * @return {?}
     */


    function mixinDisableRipple(base) {
      return /*#__PURE__*/function (_base3) {
        _inherits(_class3, _base3);

        var _super20 = _createSuper(_class3);

        /**
         * @param {...?} args
         */
        function _class3() {
          var _this57;

          _classCallCheck(this, _class3);

          for (var _len8 = arguments.length, args = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
            args[_key8] = arguments[_key8];
          }

          _this57 = _super20.call.apply(_super20, [this].concat(args));
          _this57._disableRipple = false;
          return _this57;
        }
        /**
         * Whether the ripple effect is disabled or not.
         * @return {?}
         */


        _createClass(_class3, [{
          key: "disableRipple",
          get: function get() {
            return this._disableRipple;
          }
          /**
           * @param {?} value
           * @return {?}
           */
          ,
          set: function set(value) {
            this._disableRipple = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceBooleanProperty"])(value);
          }
        }]);

        return _class3;
      }(base);
    }
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/core/common-behaviors/tabindex.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * \@docs-private
     * @record
     */


    function HasTabIndex() {}

    if (false) {}
    /**
     * Mixin to augment a directive with a `tabIndex` property.
     * @template T
     * @param {?} base
     * @param {?=} defaultTabIndex
     * @return {?}
     */


    function mixinTabIndex(base) {
      var defaultTabIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      return /*#__PURE__*/function (_base4) {
        _inherits(_class4, _base4);

        var _super21 = _createSuper(_class4);

        /**
         * @param {...?} args
         */
        function _class4() {
          var _this58;

          _classCallCheck(this, _class4);

          for (var _len9 = arguments.length, args = new Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
            args[_key9] = arguments[_key9];
          }

          _this58 = _super21.call.apply(_super21, [this].concat(args));
          _this58._tabIndex = defaultTabIndex;
          return _this58;
        }
        /**
         * @return {?}
         */


        _createClass(_class4, [{
          key: "tabIndex",
          get: function get() {
            return this.disabled ? -1 : this._tabIndex;
          }
          /**
           * @param {?} value
           * @return {?}
           */
          ,
          set: function set(value) {
            // If the specified tabIndex value is null or undefined, fall back to the default value.
            this._tabIndex = value != null ? value : defaultTabIndex;
          }
        }]);

        return _class4;
      }(base);
    }
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/core/common-behaviors/error-state.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * \@docs-private
     * @record
     */


    function CanUpdateErrorState() {}

    if (false) {}
    /**
     * \@docs-private
     * @record
     */


    function HasErrorState() {}

    if (false) {}
    /**
     * Mixin to augment a directive with updateErrorState method.
     * For component with `errorState` and need to update `errorState`.
     * @template T
     * @param {?} base
     * @return {?}
     */


    function mixinErrorState(base) {
      return /*#__PURE__*/function (_base5) {
        _inherits(_class5, _base5);

        var _super22 = _createSuper(_class5);

        /**
         * @param {...?} args
         */
        function _class5() {
          var _this59;

          _classCallCheck(this, _class5);

          for (var _len10 = arguments.length, args = new Array(_len10), _key10 = 0; _key10 < _len10; _key10++) {
            args[_key10] = arguments[_key10];
          }

          _this59 = _super22.call.apply(_super22, [this].concat(args));
          /**
           * Whether the component is in an error state.
           */

          _this59.errorState = false;
          /**
           * Stream that emits whenever the state of the input changes such that the wrapping
           * `MatFormField` needs to run change detection.
           */

          _this59.stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
          return _this59;
        }
        /**
         * @return {?}
         */


        _createClass(_class5, [{
          key: "updateErrorState",
          value: function updateErrorState() {
            /** @type {?} */
            var oldState = this.errorState;
            /** @type {?} */

            var parent = this._parentFormGroup || this._parentForm;
            /** @type {?} */

            var matcher = this.errorStateMatcher || this._defaultErrorStateMatcher;
            /** @type {?} */

            var control = this.ngControl ?
            /** @type {?} */
            this.ngControl.control : null;
            /** @type {?} */

            var newState = matcher.isErrorState(control, parent);

            if (newState !== oldState) {
              this.errorState = newState;
              this.stateChanges.next();
            }
          }
        }]);

        return _class5;
      }(base);
    }
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/core/common-behaviors/initialized.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Mixin that adds an initialized property to a directive which, when subscribed to, will emit a
     * value once markInitialized has been called, which should be done during the ngOnInit function.
     * If the subscription is made after it has already been marked as initialized, then it will trigger
     * an emit immediately.
     * \@docs-private
     * @record
     */


    function HasInitialized() {}

    if (false) {}
    /**
     * Mixin to augment a directive with an initialized property that will emits when ngOnInit ends.
     * @template T
     * @param {?} base
     * @return {?}
     */


    function mixinInitialized(base) {
      return /*#__PURE__*/function (_base6) {
        _inherits(_class6, _base6);

        var _super23 = _createSuper(_class6);

        /**
         * @param {...?} args
         */
        function _class6() {
          var _this60;

          _classCallCheck(this, _class6);

          for (var _len11 = arguments.length, args = new Array(_len11), _key11 = 0; _key11 < _len11; _key11++) {
            args[_key11] = arguments[_key11];
          }

          _this60 = _super23.call.apply(_super23, [this].concat(args));
          /**
           * Whether this directive has been marked as initialized.
           */

          _this60._isInitialized = false;
          /**
           * List of subscribers that subscribed before the directive was initialized. Should be notified
           * during _markInitialized. Set to null after pending subscribers are notified, and should
           * not expect to be populated after.
           */

          _this60._pendingSubscribers = [];
          /**
           * Observable stream that emits when the directive initializes. If already initialized, the
           * subscriber is stored to be notified once _markInitialized is called.
           */

          _this60.initialized = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Observable"](
          /**
          * @param {?} subscriber
          * @return {?}
          */
          function (subscriber) {
            // If initialized, immediately notify the subscriber. Otherwise store the subscriber to notify
            // when _markInitialized is called.
            if (_this60._isInitialized) {
              _this60._notifySubscriber(subscriber);
            } else {
              /** @type {?} */
              _this60._pendingSubscribers.push(subscriber);
            }
          });
          return _this60;
        }
        /**
         * Marks the state as initialized and notifies pending subscribers. Should be called at the end
         * of ngOnInit.
         * \@docs-private
         * @return {?}
         */


        _createClass(_class6, [{
          key: "_markInitialized",
          value: function _markInitialized() {
            if (this._isInitialized) {
              throw Error('This directive has already been marked as initialized and ' + 'should not be called twice.');
            }

            this._isInitialized = true;

            /** @type {?} */
            this._pendingSubscribers.forEach(this._notifySubscriber);

            this._pendingSubscribers = null;
          }
          /**
           * Emits and completes the subscriber stream (should only emit once).
           * @param {?} subscriber
           * @return {?}
           */

        }, {
          key: "_notifySubscriber",
          value: function _notifySubscriber(subscriber) {
            subscriber.next();
            subscriber.complete();
          }
        }]);

        return _class6;
      }(base);
    }
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/core/common-behaviors/index.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/core/datetime/date-adapter.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * InjectionToken for datepicker that can be used to override default locale code.
     * @type {?}
     */


    var MAT_DATE_LOCALE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('MAT_DATE_LOCALE', {
      providedIn: 'root',
      factory: MAT_DATE_LOCALE_FACTORY
    });
    /**
     * \@docs-private
     * @return {?}
     */

    function MAT_DATE_LOCALE_FACTORY() {
      return Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]);
    }
    /**
     * No longer needed since MAT_DATE_LOCALE has been changed to a scoped injectable.
     * If you are importing and providing this in your code you can simply remove it.
     * @deprecated
     * \@breaking-change 8.0.0
     * @type {?}
     */


    var MAT_DATE_LOCALE_PROVIDER = {
      provide: MAT_DATE_LOCALE,
      useExisting: _angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]
    };
    /**
     * Adapts type `D` to be usable as a date by cdk-based components that work with dates.
     * @abstract
     * @template D
     */

    var DateAdapter = /*#__PURE__*/function () {
      function DateAdapter() {
        _classCallCheck(this, DateAdapter);

        this._localeChanges = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
      }
      /**
       * A stream that emits when the locale changes.
       * @return {?}
       */


      _createClass(DateAdapter, [{
        key: "deserialize",

        /**
         * Attempts to deserialize a value to a valid date object. This is different from parsing in that
         * deserialize should only accept non-ambiguous, locale-independent formats (e.g. a ISO 8601
         * string). The default implementation does not allow any deserialization, it simply checks that
         * the given value is already a valid date object or null. The `<mat-datepicker>` will call this
         * method on all of its `\@Input()` properties that accept dates. It is therefore possible to
         * support passing values from your backend directly to these properties by overriding this method
         * to also deserialize the format used by your backend.
         * @param {?} value The value to be deserialized into a date object.
         * @return {?} The deserialized date object, either a valid date, null if the value can be
         *     deserialized into a null date (e.g. the empty string), or an invalid date.
         */
        value: function deserialize(value) {
          if (value == null || this.isDateInstance(value) && this.isValid(value)) {
            return value;
          }

          return this.invalid();
        }
        /**
         * Sets the locale used for all dates.
         * @param {?} locale The new locale.
         * @return {?}
         */

      }, {
        key: "setLocale",
        value: function setLocale(locale) {
          this.locale = locale;

          this._localeChanges.next();
        }
        /**
         * Compares two dates.
         * @param {?} first The first date to compare.
         * @param {?} second The second date to compare.
         * @return {?} 0 if the dates are equal, a number less than 0 if the first date is earlier,
         *     a number greater than 0 if the first date is later.
         */

      }, {
        key: "compareDate",
        value: function compareDate(first, second) {
          return this.getYear(first) - this.getYear(second) || this.getMonth(first) - this.getMonth(second) || this.getDate(first) - this.getDate(second);
        }
        /**
         * Checks if two dates are equal.
         * @param {?} first The first date to check.
         * @param {?} second The second date to check.
         * @return {?} Whether the two dates are equal.
         *     Null dates are considered equal to other null dates.
         */

      }, {
        key: "sameDate",
        value: function sameDate(first, second) {
          if (first && second) {
            /** @type {?} */
            var firstValid = this.isValid(first);
            /** @type {?} */

            var secondValid = this.isValid(second);

            if (firstValid && secondValid) {
              return !this.compareDate(first, second);
            }

            return firstValid == secondValid;
          }

          return first == second;
        }
        /**
         * Clamp the given date between min and max dates.
         * @param {?} date The date to clamp.
         * @param {?=} min The minimum value to allow. If null or omitted no min is enforced.
         * @param {?=} max The maximum value to allow. If null or omitted no max is enforced.
         * @return {?} `min` if `date` is less than `min`, `max` if date is greater than `max`,
         *     otherwise `date`.
         */

      }, {
        key: "clampDate",
        value: function clampDate(date, min, max) {
          if (min && this.compareDate(date, min) < 0) {
            return min;
          }

          if (max && this.compareDate(date, max) > 0) {
            return max;
          }

          return date;
        }
      }, {
        key: "localeChanges",
        get: function get() {
          return this._localeChanges;
        }
      }]);

      return DateAdapter;
    }();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/core/datetime/date-formats.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var MAT_DATE_FORMATS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('mat-date-formats');
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/core/datetime/native-date-adapter.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // TODO(mmalerba): Remove when we no longer support safari 9.

    /**
     * Whether the browser supports the Intl API.
     * @type {?}
     */

    var SUPPORTS_INTL_API; // We need a try/catch around the reference to `Intl`, because accessing it in some cases can
    // cause IE to throw. These cases are tied to particular versions of Windows and can happen if
    // the consumer is providing a polyfilled `Map`. See:
    // https://github.com/Microsoft/ChakraCore/issues/3189
    // https://github.com/angular/components/issues/15687

    try {
      SUPPORTS_INTL_API = typeof Intl != 'undefined';
    } catch (_a) {
      SUPPORTS_INTL_API = false;
    }
    /**
     * The default month names to use if Intl API is not available.
     * @type {?}
     */


    var DEFAULT_MONTH_NAMES = {
      'long': ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      'short': ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      'narrow': ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D']
    };

    var ɵ0 =
    /**
    * @param {?} i
    * @return {?}
    */
    function ɵ0(i) {
      return String(i + 1);
    };
    /**
     * The default date names to use if Intl API is not available.
     * @type {?}
     */


    var DEFAULT_DATE_NAMES = range(31, ɵ0);
    /**
     * The default day of the week names to use if Intl API is not available.
     * @type {?}
     */

    var DEFAULT_DAY_OF_WEEK_NAMES = {
      'long': ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      'short': ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      'narrow': ['S', 'M', 'T', 'W', 'T', 'F', 'S']
    };
    /**
     * Matches strings that have the form of a valid RFC 3339 string
     * (https://tools.ietf.org/html/rfc3339). Note that the string may not actually be a valid date
     * because the regex will match strings an with out of bounds month, date, etc.
     * @type {?}
     */

    var ISO_8601_REGEX = /^\d{4}-\d{2}-\d{2}(?:T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|(?:(?:\+|-)\d{2}:\d{2}))?)?$/;
    /**
     * Creates an array and fills it with values.
     * @template T
     * @param {?} length
     * @param {?} valueFunction
     * @return {?}
     */

    function range(length, valueFunction) {
      /** @type {?} */
      var valuesArray = Array(length);

      for (var i = 0; i < length; i++) {
        valuesArray[i] = valueFunction(i);
      }

      return valuesArray;
    }
    /**
     * Adapts the native JS Date for use with cdk-based components that work with dates.
     */


    var NativeDateAdapter = /*#__PURE__*/function (_DateAdapter) {
      _inherits(NativeDateAdapter, _DateAdapter);

      var _super24 = _createSuper(NativeDateAdapter);

      /**
       * @param {?} matDateLocale
       * @param {?} platform
       */
      function NativeDateAdapter(matDateLocale, platform) {
        var _thisSuper3, _this61;

        _classCallCheck(this, NativeDateAdapter);

        _this61 = _super24.call(this);
        /**
         * Whether to use `timeZone: 'utc'` with `Intl.DateTimeFormat` when formatting dates.
         * Without this `Intl.DateTimeFormat` sometimes chooses the wrong timeZone, which can throw off
         * the result. (e.g. in the en-US locale `new Date(1800, 7, 14).toLocaleDateString()`
         * will produce `'8/13/1800'`.
         *
         * TODO(mmalerba): drop this variable. It's not being used in the code right now. We're now
         * getting the string representation of a Date object from its utc representation. We're keeping
         * it here for sometime, just for precaution, in case we decide to revert some of these changes
         * though.
         */

        _this61.useUtcForDisplay = true;

        _get((_thisSuper3 = _assertThisInitialized(_this61), _getPrototypeOf(NativeDateAdapter.prototype)), "setLocale", _thisSuper3).call(_thisSuper3, matDateLocale); // IE does its own time zone correction, so we disable this on IE.


        _this61.useUtcForDisplay = !platform.TRIDENT;
        _this61._clampDate = platform.TRIDENT || platform.EDGE;
        return _this61;
      }
      /**
       * @param {?} date
       * @return {?}
       */


      _createClass(NativeDateAdapter, [{
        key: "getYear",
        value: function getYear(date) {
          return date.getFullYear();
        }
        /**
         * @param {?} date
         * @return {?}
         */

      }, {
        key: "getMonth",
        value: function getMonth(date) {
          return date.getMonth();
        }
        /**
         * @param {?} date
         * @return {?}
         */

      }, {
        key: "getDate",
        value: function getDate(date) {
          return date.getDate();
        }
        /**
         * @param {?} date
         * @return {?}
         */

      }, {
        key: "getDayOfWeek",
        value: function getDayOfWeek(date) {
          return date.getDay();
        }
        /**
         * @param {?} style
         * @return {?}
         */

      }, {
        key: "getMonthNames",
        value: function getMonthNames(style) {
          var _this62 = this;

          if (SUPPORTS_INTL_API) {
            /** @type {?} */
            var dtf = new Intl.DateTimeFormat(this.locale, {
              month: style,
              timeZone: 'utc'
            });
            return range(12,
            /**
            * @param {?} i
            * @return {?}
            */
            function (i) {
              return _this62._stripDirectionalityCharacters(_this62._format(dtf, new Date(2017, i, 1)));
            });
          }

          return DEFAULT_MONTH_NAMES[style];
        }
        /**
         * @return {?}
         */

      }, {
        key: "getDateNames",
        value: function getDateNames() {
          var _this63 = this;

          if (SUPPORTS_INTL_API) {
            /** @type {?} */
            var dtf = new Intl.DateTimeFormat(this.locale, {
              day: 'numeric',
              timeZone: 'utc'
            });
            return range(31,
            /**
            * @param {?} i
            * @return {?}
            */
            function (i) {
              return _this63._stripDirectionalityCharacters(_this63._format(dtf, new Date(2017, 0, i + 1)));
            });
          }

          return DEFAULT_DATE_NAMES;
        }
        /**
         * @param {?} style
         * @return {?}
         */

      }, {
        key: "getDayOfWeekNames",
        value: function getDayOfWeekNames(style) {
          var _this64 = this;

          if (SUPPORTS_INTL_API) {
            /** @type {?} */
            var dtf = new Intl.DateTimeFormat(this.locale, {
              weekday: style,
              timeZone: 'utc'
            });
            return range(7,
            /**
            * @param {?} i
            * @return {?}
            */
            function (i) {
              return _this64._stripDirectionalityCharacters(_this64._format(dtf, new Date(2017, 0, i + 1)));
            });
          }

          return DEFAULT_DAY_OF_WEEK_NAMES[style];
        }
        /**
         * @param {?} date
         * @return {?}
         */

      }, {
        key: "getYearName",
        value: function getYearName(date) {
          if (SUPPORTS_INTL_API) {
            /** @type {?} */
            var dtf = new Intl.DateTimeFormat(this.locale, {
              year: 'numeric',
              timeZone: 'utc'
            });
            return this._stripDirectionalityCharacters(this._format(dtf, date));
          }

          return String(this.getYear(date));
        }
        /**
         * @return {?}
         */

      }, {
        key: "getFirstDayOfWeek",
        value: function getFirstDayOfWeek() {
          // We can't tell using native JS Date what the first day of the week is, we default to Sunday.
          return 0;
        }
        /**
         * @param {?} date
         * @return {?}
         */

      }, {
        key: "getNumDaysInMonth",
        value: function getNumDaysInMonth(date) {
          return this.getDate(this._createDateWithOverflow(this.getYear(date), this.getMonth(date) + 1, 0));
        }
        /**
         * @param {?} date
         * @return {?}
         */

      }, {
        key: "clone",
        value: function clone(date) {
          return new Date(date.getTime());
        }
        /**
         * @param {?} year
         * @param {?} month
         * @param {?} date
         * @return {?}
         */

      }, {
        key: "createDate",
        value: function createDate(year, month, date) {
          // Check for invalid month and date (except upper bound on date which we have to check after
          // creating the Date).
          if (month < 0 || month > 11) {
            throw Error("Invalid month index \"".concat(month, "\". Month index has to be between 0 and 11."));
          }

          if (date < 1) {
            throw Error("Invalid date \"".concat(date, "\". Date has to be greater than 0."));
          }
          /** @type {?} */


          var result = this._createDateWithOverflow(year, month, date); // Check that the date wasn't above the upper bound for the month, causing the month to overflow


          if (result.getMonth() != month) {
            throw Error("Invalid date \"".concat(date, "\" for month with index \"").concat(month, "\"."));
          }

          return result;
        }
        /**
         * @return {?}
         */

      }, {
        key: "today",
        value: function today() {
          return new Date();
        }
        /**
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "parse",
        value: function parse(value) {
          // We have no way using the native JS Date to set the parse format or locale, so we ignore these
          // parameters.
          if (typeof value == 'number') {
            return new Date(value);
          }

          return value ? new Date(Date.parse(value)) : null;
        }
        /**
         * @param {?} date
         * @param {?} displayFormat
         * @return {?}
         */

      }, {
        key: "format",
        value: function format(date, displayFormat) {
          if (!this.isValid(date)) {
            throw Error('NativeDateAdapter: Cannot format invalid date.');
          }

          if (SUPPORTS_INTL_API) {
            // On IE and Edge the i18n API will throw a hard error that can crash the entire app
            // if we attempt to format a date whose year is less than 1 or greater than 9999.
            if (this._clampDate && (date.getFullYear() < 1 || date.getFullYear() > 9999)) {
              date = this.clone(date);
              date.setFullYear(Math.max(1, Math.min(9999, date.getFullYear())));
            }

            displayFormat = Object.assign(Object.assign({}, displayFormat), {
              timeZone: 'utc'
            });
            /** @type {?} */

            var dtf = new Intl.DateTimeFormat(this.locale, displayFormat);
            return this._stripDirectionalityCharacters(this._format(dtf, date));
          }

          return this._stripDirectionalityCharacters(date.toDateString());
        }
        /**
         * @param {?} date
         * @param {?} years
         * @return {?}
         */

      }, {
        key: "addCalendarYears",
        value: function addCalendarYears(date, years) {
          return this.addCalendarMonths(date, years * 12);
        }
        /**
         * @param {?} date
         * @param {?} months
         * @return {?}
         */

      }, {
        key: "addCalendarMonths",
        value: function addCalendarMonths(date, months) {
          /** @type {?} */
          var newDate = this._createDateWithOverflow(this.getYear(date), this.getMonth(date) + months, this.getDate(date)); // It's possible to wind up in the wrong month if the original month has more days than the new
          // month. In this case we want to go to the last day of the desired month.
          // Note: the additional + 12 % 12 ensures we end up with a positive number, since JS % doesn't
          // guarantee this.


          if (this.getMonth(newDate) != ((this.getMonth(date) + months) % 12 + 12) % 12) {
            newDate = this._createDateWithOverflow(this.getYear(newDate), this.getMonth(newDate), 0);
          }

          return newDate;
        }
        /**
         * @param {?} date
         * @param {?} days
         * @return {?}
         */

      }, {
        key: "addCalendarDays",
        value: function addCalendarDays(date, days) {
          return this._createDateWithOverflow(this.getYear(date), this.getMonth(date), this.getDate(date) + days);
        }
        /**
         * @param {?} date
         * @return {?}
         */

      }, {
        key: "toIso8601",
        value: function toIso8601(date) {
          return [date.getUTCFullYear(), this._2digit(date.getUTCMonth() + 1), this._2digit(date.getUTCDate())].join('-');
        }
        /**
         * Returns the given value if given a valid Date or null. Deserializes valid ISO 8601 strings
         * (https://www.ietf.org/rfc/rfc3339.txt) into valid Dates and empty string into null. Returns an
         * invalid date for all other values.
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "deserialize",
        value: function deserialize(value) {
          if (typeof value === 'string') {
            if (!value) {
              return null;
            } // The `Date` constructor accepts formats other than ISO 8601, so we need to make sure the
            // string is the right format first.


            if (ISO_8601_REGEX.test(value)) {
              /** @type {?} */
              var date = new Date(value);

              if (this.isValid(date)) {
                return date;
              }
            }
          }

          return _get(_getPrototypeOf(NativeDateAdapter.prototype), "deserialize", this).call(this, value);
        }
        /**
         * @param {?} obj
         * @return {?}
         */

      }, {
        key: "isDateInstance",
        value: function isDateInstance(obj) {
          return obj instanceof Date;
        }
        /**
         * @param {?} date
         * @return {?}
         */

      }, {
        key: "isValid",
        value: function isValid(date) {
          return !isNaN(date.getTime());
        }
        /**
         * @return {?}
         */

      }, {
        key: "invalid",
        value: function invalid() {
          return new Date(NaN);
        }
        /**
         * Creates a date but allows the month and date to overflow.
         * @private
         * @param {?} year
         * @param {?} month
         * @param {?} date
         * @return {?}
         */

      }, {
        key: "_createDateWithOverflow",
        value: function _createDateWithOverflow(year, month, date) {
          /** @type {?} */
          var result = new Date(year, month, date); // We need to correct for the fact that JS native Date treats years in range [0, 99] as
          // abbreviations for 19xx.

          if (year >= 0 && year < 100) {
            result.setFullYear(this.getYear(result) - 1900);
          }

          return result;
        }
        /**
         * Pads a number to make it two digits.
         * @private
         * @param {?} n The number to pad.
         * @return {?} The padded number.
         */

      }, {
        key: "_2digit",
        value: function _2digit(n) {
          return ('00' + n).slice(-2);
        }
        /**
         * Strip out unicode LTR and RTL characters. Edge and IE insert these into formatted dates while
         * other browsers do not. We remove them to make output consistent and because they interfere with
         * date parsing.
         * @private
         * @param {?} str The string to strip direction characters from.
         * @return {?} The stripped string.
         */

      }, {
        key: "_stripDirectionalityCharacters",
        value: function _stripDirectionalityCharacters(str) {
          return str.replace(/[\u200e\u200f]/g, '');
        }
        /**
         * When converting Date object to string, javascript built-in functions may return wrong
         * results because it applies its internal DST rules. The DST rules around the world change
         * very frequently, and the current valid rule is not always valid in previous years though.
         * We work around this problem building a new Date object which has its internal UTC
         * representation with the local date and time.
         * @private
         * @param {?} dtf Intl.DateTimeFormat object, containg the desired string format. It must have
         *    timeZone set to 'utc' to work fine.
         * @param {?} date Date from which we want to get the string representation according to dtf
         * @return {?} A Date object with its UTC representation based on the passed in date info
         */

      }, {
        key: "_format",
        value: function _format(dtf, date) {
          /** @type {?} */
          var d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()));
          return dtf.format(d);
        }
      }]);

      return NativeDateAdapter;
    }(DateAdapter);

    NativeDateAdapter.ɵfac = function NativeDateAdapter_Factory(t) {
      return new (t || NativeDateAdapter)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](MAT_DATE_LOCALE, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["Platform"]));
    };

    NativeDateAdapter.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: NativeDateAdapter,
      factory: NativeDateAdapter.ɵfac
    });
    /** @nocollapse */

    NativeDateAdapter.ctorParameters = function () {
      return [{
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [MAT_DATE_LOCALE]
        }]
      }, {
        type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["Platform"]
      }];
    };
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NativeDateAdapter, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [MAT_DATE_LOCALE]
          }]
        }, {
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["Platform"]
        }];
      }, null);
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/core/datetime/native-date-formats.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /** @type {?} */


    var MAT_NATIVE_DATE_FORMATS = {
      parse: {
        dateInput: null
      },
      display: {
        dateInput: {
          year: 'numeric',
          month: 'numeric',
          day: 'numeric'
        },
        monthYearLabel: {
          year: 'numeric',
          month: 'short'
        },
        dateA11yLabel: {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        },
        monthYearA11yLabel: {
          year: 'numeric',
          month: 'long'
        }
      }
    };
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/core/datetime/index.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var NativeDateModule = function NativeDateModule() {
      _classCallCheck(this, NativeDateModule);
    };

    NativeDateModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: NativeDateModule
    });
    NativeDateModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function NativeDateModule_Factory(t) {
        return new (t || NativeDateModule)();
      },
      providers: [{
        provide: DateAdapter,
        useClass: NativeDateAdapter
      }],
      imports: [[_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["PlatformModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NativeDateModule, {
        imports: function imports() {
          return [_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["PlatformModule"]];
        }
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NativeDateModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["PlatformModule"]],
          providers: [{
            provide: DateAdapter,
            useClass: NativeDateAdapter
          }]
        }]
      }], null, null);
    })();

    var ɵ0$1 = MAT_NATIVE_DATE_FORMATS;

    var MatNativeDateModule = function MatNativeDateModule() {
      _classCallCheck(this, MatNativeDateModule);
    };

    MatNativeDateModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: MatNativeDateModule
    });
    MatNativeDateModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function MatNativeDateModule_Factory(t) {
        return new (t || MatNativeDateModule)();
      },
      providers: [{
        provide: MAT_DATE_FORMATS,
        useValue: ɵ0$1
      }],
      imports: [[NativeDateModule]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MatNativeDateModule, {
        imports: [NativeDateModule]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatNativeDateModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [NativeDateModule],
          providers: [{
            provide: MAT_DATE_FORMATS,
            useValue: ɵ0$1
          }]
        }]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/core/error/error-options.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Error state matcher that matches when a control is invalid and dirty.
     */


    var ShowOnDirtyErrorStateMatcher = /*#__PURE__*/function () {
      function ShowOnDirtyErrorStateMatcher() {
        _classCallCheck(this, ShowOnDirtyErrorStateMatcher);
      }

      _createClass(ShowOnDirtyErrorStateMatcher, [{
        key: "isErrorState",

        /**
         * @param {?} control
         * @param {?} form
         * @return {?}
         */
        value: function isErrorState(control, form) {
          return !!(control && control.invalid && (control.dirty || form && form.submitted));
        }
      }]);

      return ShowOnDirtyErrorStateMatcher;
    }();

    ShowOnDirtyErrorStateMatcher.ɵfac = function ShowOnDirtyErrorStateMatcher_Factory(t) {
      return new (t || ShowOnDirtyErrorStateMatcher)();
    };

    ShowOnDirtyErrorStateMatcher.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ShowOnDirtyErrorStateMatcher,
      factory: ShowOnDirtyErrorStateMatcher.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShowOnDirtyErrorStateMatcher, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], null, null);
    })();
    /**
     * Provider that defines how form controls behave with regards to displaying error messages.
     */


    var ErrorStateMatcher = /*#__PURE__*/function () {
      function ErrorStateMatcher() {
        _classCallCheck(this, ErrorStateMatcher);
      }

      _createClass(ErrorStateMatcher, [{
        key: "isErrorState",

        /**
         * @param {?} control
         * @param {?} form
         * @return {?}
         */
        value: function isErrorState(control, form) {
          return !!(control && control.invalid && (control.touched || form && form.submitted));
        }
      }]);

      return ErrorStateMatcher;
    }();

    ErrorStateMatcher.ɵfac = function ErrorStateMatcher_Factory(t) {
      return new (t || ErrorStateMatcher)();
    };
    /** @nocollapse */


    ErrorStateMatcher.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
      factory: function ErrorStateMatcher_Factory() {
        return new ErrorStateMatcher();
      },
      token: ErrorStateMatcher,
      providedIn: "root"
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorStateMatcher, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/core/gestures/gesture-annotations.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * Stripped-down HammerJS annotations to be used within Material, which are necessary,
     * because HammerJS is an optional dependency. For the full annotations see:
     * https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/hammerjs/index.d.ts
     */

    /**
     * @deprecated No longer being used. To be removed.
     * \@breaking-change 10.0.0
     * \@docs-private
     * @record
     */


    function HammerInput() {}

    if (false) {}
    /**
     * @deprecated No longer being used. To be removed.
     * \@breaking-change 10.0.0
     * \@docs-private
     * @record
     */


    function HammerStatic() {}

    if (false) {}
    /**
     * @deprecated No longer being used. To be removed.
     * \@breaking-change 10.0.0
     * \@docs-private
     * @record
     */


    function Recognizer() {}

    if (false) {}
    /**
     * @deprecated No longer being used. To be removed.
     * \@breaking-change 10.0.0
     * \@docs-private
     * @record
     */


    function RecognizerStatic() {}
    /**
     * @deprecated No longer being used. To be removed.
     * \@breaking-change 10.0.0
     * \@docs-private
     * @record
     */


    function HammerInstance() {}

    if (false) {}
    /**
     * @deprecated No longer being used. To be removed.
     * \@breaking-change 10.0.0
     * \@docs-private
     * @record
     */


    function HammerManager() {}

    if (false) {}
    /**
     * @deprecated No longer being used. To be removed.
     * \@breaking-change 10.0.0
     * \@docs-private
     * @record
     */


    function HammerOptions() {}

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/core/gestures/gesture-config.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Injection token that can be used to provide options to the Hammerjs instance.
     * More info at http://hammerjs.github.io/api/.
     * @deprecated No longer being used. To be removed.
     * \@breaking-change 10.0.0
     * @type {?}
     */


    var MAT_HAMMER_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('MAT_HAMMER_OPTIONS');
    /** @type {?} */

    var ANGULAR_MATERIAL_SUPPORTED_HAMMER_GESTURES = ['longpress', 'slide', 'slidestart', 'slideend', 'slideright', 'slideleft'];

    var ɵ0$2 =
    /**
    * @return {?}
    */
    function ɵ0$2() {},
        ɵ1 =
    /**
    * @return {?}
    */
    function ɵ1() {};
    /**
     * Fake HammerInstance that is used when a Hammer instance is requested when HammerJS has not
     * been loaded on the page.
     * @type {?}
     */


    var noopHammerInstance = {
      on: ɵ0$2,
      off: ɵ1
    };
    /**
     * Adjusts configuration of our gesture library, Hammer.
     * @deprecated No longer being used. To be removed.
     * \@breaking-change 10.0.0
     */

    var GestureConfig = /*#__PURE__*/function (_angular_platform_bro) {
      _inherits(GestureConfig, _angular_platform_bro);

      var _super25 = _createSuper(GestureConfig);

      /**
       * @param {?=} _hammerOptions
       * @param {?=} _commonModule
       */
      function GestureConfig(_hammerOptions, _commonModule) {
        var _this65;

        _classCallCheck(this, GestureConfig);

        _this65 = _super25.call(this);
        _this65._hammerOptions = _hammerOptions;
        /**
         * List of new event names to add to the gesture support list
         */

        _this65.events = ANGULAR_MATERIAL_SUPPORTED_HAMMER_GESTURES;
        return _this65;
      }
      /**
       * Builds Hammer instance manually to add custom recognizers that match the Material Design spec.
       *
       * Our gesture names come from the Material Design gestures spec:
       * https://material.io/design/#gestures-touch-mechanics
       *
       * More information on default recognizers can be found in Hammer docs:
       * http://hammerjs.github.io/recognizer-pan/
       * http://hammerjs.github.io/recognizer-press/
       *
       * @param {?} element Element to which to assign the new HammerJS gestures.
       * @return {?} Newly-created HammerJS instance.
       */


      _createClass(GestureConfig, [{
        key: "buildHammer",
        value: function buildHammer(element) {
          /** @type {?} */
          var hammer = typeof window !== 'undefined' ?
          /** @type {?} */
          window.Hammer : null;

          if (!hammer) {
            // If HammerJS is not loaded here, return the noop HammerInstance. This is necessary to
            // ensure that omitting HammerJS completely will not cause any errors while *also* supporting
            // the lazy-loading of HammerJS via the HAMMER_LOADER token introduced in Angular 6.1.
            // Because we can't depend on HAMMER_LOADER's existance until 7.0, we have to always set
            // `this.events` to the set we support, instead of conditionally setting it to `[]` if
            // `HAMMER_LOADER` is present (and then throwing an Error here if `window.Hammer` is
            // undefined).
            // @breaking-change 8.0.0
            return noopHammerInstance;
          }
          /** @type {?} */


          var mc = new hammer(element, this._hammerOptions || undefined); // Default Hammer Recognizers.

          /** @type {?} */

          var pan = new hammer.Pan();
          /** @type {?} */

          var swipe = new hammer.Swipe();
          /** @type {?} */

          var press = new hammer.Press(); // Notice that a HammerJS recognizer can only depend on one other recognizer once.
          // Otherwise the previous `recognizeWith` will be dropped.
          // TODO: Confirm threshold numbers with Material Design UX Team

          /** @type {?} */

          var slide = this._createRecognizer(pan, {
            event: 'slide',
            threshold: 0
          }, swipe);
          /** @type {?} */


          var longpress = this._createRecognizer(press, {
            event: 'longpress',
            time: 500
          }); // Overwrite the default `pan` event to use the swipe event.


          pan.recognizeWith(swipe); // Since the slide event threshold is set to zero, the slide recognizer can fire and
          // accidentally reset the longpress recognizer. In order to make sure that the two
          // recognizers can run simultaneously but don't affect each other, we allow the slide
          // recognizer to recognize while a longpress is being processed.
          // See: https://github.com/hammerjs/hammer.js/blob/master/src/manager.js#L123-L124

          longpress.recognizeWith(slide); // Add customized gestures to Hammer manager

          mc.add([swipe, press, pan, slide, longpress]);
          return (
            /** @type {?} */
            mc
          );
        }
        /**
         * Creates a new recognizer, without affecting the default recognizers of HammerJS
         * @private
         * @param {?} base
         * @param {?} options
         * @param {...?} inheritances
         * @return {?}
         */

      }, {
        key: "_createRecognizer",
        value: function _createRecognizer(base, options) {
          /** @type {?} */
          var recognizer = new
          /** @type {?} */
          base.constructor(options);

          for (var _len12 = arguments.length, inheritances = new Array(_len12 > 2 ? _len12 - 2 : 0), _key12 = 2; _key12 < _len12; _key12++) {
            inheritances[_key12 - 2] = arguments[_key12];
          }

          inheritances.push(base);
          inheritances.forEach(
          /**
          * @param {?} item
          * @return {?}
          */
          function (item) {
            return recognizer.recognizeWith(item);
          });
          return recognizer;
        }
      }]);

      return GestureConfig;
    }(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["HammerGestureConfig"]);

    GestureConfig.ɵfac = function GestureConfig_Factory(t) {
      return new (t || GestureConfig)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](MAT_HAMMER_OPTIONS, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](MatCommonModule, 8));
    };

    GestureConfig.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: GestureConfig,
      factory: GestureConfig.ɵfac
    });
    /** @nocollapse */

    GestureConfig.ctorParameters = function () {
      return [{
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [MAT_HAMMER_OPTIONS]
        }]
      }, {
        type: MatCommonModule,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }]
      }];
    };
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GestureConfig, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [MAT_HAMMER_OPTIONS]
          }]
        }, {
          type: MatCommonModule,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }]
        }];
      }, null);
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/core/line/line.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Shared directive to count lines inside a text area, such as a list item.
     * Line elements can be extracted with a \@ContentChildren(MatLine) query, then
     * counted by checking the query list's length.
     */


    var MatLine = function MatLine() {
      _classCallCheck(this, MatLine);
    };

    MatLine.ɵfac = function MatLine_Factory(t) {
      return new (t || MatLine)();
    };

    MatLine.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: MatLine,
      selectors: [["", "mat-line", ""], ["", "matLine", ""]],
      hostAttrs: [1, "mat-line"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatLine, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[mat-line], [matLine]',
          host: {
            'class': 'mat-line'
          }
        }]
      }], null, null);
    })();
    /**
     * Helper that takes a query list of lines and sets the correct class on the host.
     * \@docs-private
     * @param {?} lines
     * @param {?} element
     * @param {?=} prefix
     * @return {?}
     */


    function setLines(lines, element) {
      var prefix = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'mat';
      // Note: doesn't need to unsubscribe, because `changes`
      // gets completed by Angular when the view is destroyed.
      lines.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["startWith"])(lines)).subscribe(
      /**
      * @param {?} __0
      * @return {?}
      */
      function (_ref3) {
        var length = _ref3.length;
        setClass(element, "".concat(prefix, "-2-line"), false);
        setClass(element, "".concat(prefix, "-3-line"), false);
        setClass(element, "".concat(prefix, "-multi-line"), false);

        if (length === 2 || length === 3) {
          setClass(element, "".concat(prefix, "-").concat(length, "-line"), true);
        } else if (length > 3) {
          setClass(element, "".concat(prefix, "-multi-line"), true);
        }
      });
    }
    /**
     * Adds or removes a class from an element.
     * @param {?} element
     * @param {?} className
     * @param {?} isAdd
     * @return {?}
     */


    function setClass(element, className, isAdd) {
      /** @type {?} */
      var classList = element.nativeElement.classList;
      isAdd ? classList.add(className) : classList.remove(className);
    }
    /**
     * Helper that takes a query list of lines and sets the correct class on the host.
     * \@docs-private
     * @deprecated Use `setLines` instead.
     * \@breaking-change 8.0.0
     */


    var MatLineSetter =
    /**
     * @param {?} lines
     * @param {?} element
     */
    function MatLineSetter(lines, element) {
      _classCallCheck(this, MatLineSetter);

      setLines(lines, element);
    };

    var MatLineModule = function MatLineModule() {
      _classCallCheck(this, MatLineModule);
    };

    MatLineModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: MatLineModule
    });
    MatLineModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function MatLineModule_Factory(t) {
        return new (t || MatLineModule)();
      },
      imports: [[MatCommonModule], MatCommonModule]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MatLineModule, {
        declarations: [MatLine],
        imports: [MatCommonModule],
        exports: [MatLine, MatCommonModule]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatLineModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [MatCommonModule],
          exports: [MatLine, MatCommonModule],
          declarations: [MatLine]
        }]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/core/ripple/ripple-ref.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /** @enum {number} */


    var RippleState = {
      FADING_IN: 0,
      VISIBLE: 1,
      FADING_OUT: 2,
      HIDDEN: 3
    };
    /**
     * Reference to a previously launched ripple element.
     */

    var RippleRef = /*#__PURE__*/function () {
      /**
       * @param {?} _renderer
       * @param {?} element
       * @param {?} config
       */
      function RippleRef(_renderer, element, config) {
        _classCallCheck(this, RippleRef);

        this._renderer = _renderer;
        this.element = element;
        this.config = config;
        /**
         * Current state of the ripple.
         */

        this.state = 3
        /* HIDDEN */
        ;
      }
      /**
       * Fades out the ripple element.
       * @return {?}
       */


      _createClass(RippleRef, [{
        key: "fadeOut",
        value: function fadeOut() {
          this._renderer.fadeOutRipple(this);
        }
      }]);

      return RippleRef;
    }();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/core/ripple/ripple-renderer.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Interface that describes the configuration for the animation of a ripple.
     * There are two animation phases with different durations for the ripples.
     * @record
     */


    function RippleAnimationConfig() {}

    if (false) {}
    /**
     * Interface that describes the target for launching ripples.
     * It defines the ripple configuration and disabled state for interaction ripples.
     * \@docs-private
     * @record
     */


    function RippleTarget() {}

    if (false) {}
    /**
     * Default ripple animation configuration for ripples without an explicit
     * animation config specified.
     * @type {?}
     */


    var defaultRippleAnimationConfig = {
      enterDuration: 450,
      exitDuration: 400
    };
    /**
     * Timeout for ignoring mouse events. Mouse events will be temporary ignored after touch
     * events to avoid synthetic mouse events.
     * @type {?}
     */

    var ignoreMouseEventsTimeout = 800;
    /**
     * Options that apply to all the event listeners that are bound by the ripple renderer.
     * @type {?}
     */

    var passiveEventOptions = Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["normalizePassiveListenerOptions"])({
      passive: true
    });
    /**
     * Events that signal that the pointer is down.
     * @type {?}
     */

    var pointerDownEvents = ['mousedown', 'touchstart'];
    /**
     * Events that signal that the pointer is up.
     * @type {?}
     */

    var pointerUpEvents = ['mouseup', 'mouseleave', 'touchend', 'touchcancel'];
    /**
     * Helper service that performs DOM manipulations. Not intended to be used outside this module.
     * The constructor takes a reference to the ripple directive's host element and a map of DOM
     * event handlers to be installed on the element that triggers ripple animations.
     * This will eventually become a custom renderer once Angular support exists.
     * \@docs-private
     */

    var RippleRenderer = /*#__PURE__*/function () {
      /**
       * @param {?} _target
       * @param {?} _ngZone
       * @param {?} elementOrElementRef
       * @param {?} platform
       */
      function RippleRenderer(_target, _ngZone, elementOrElementRef, platform) {
        _classCallCheck(this, RippleRenderer);

        this._target = _target;
        this._ngZone = _ngZone;
        /**
         * Whether the pointer is currently down or not.
         */

        this._isPointerDown = false;
        /**
         * Set of currently active ripple references.
         */

        this._activeRipples = new Set();
        /**
         * Whether pointer-up event listeners have been registered.
         */

        this._pointerUpEventsRegistered = false; // Only do anything if we're on the browser.

        if (platform.isBrowser) {
          this._containerElement = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceElement"])(elementOrElementRef);
        }
      }
      /**
       * Fades in a ripple at the given coordinates.
       * @param {?} x Coordinate within the element, along the X axis at which to start the ripple.
       * @param {?} y Coordinate within the element, along the Y axis at which to start the ripple.
       * @param {?=} config Extra ripple options.
       * @return {?}
       */


      _createClass(RippleRenderer, [{
        key: "fadeInRipple",
        value: function fadeInRipple(x, y) {
          var _this66 = this;

          var config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

          /** @type {?} */
          var containerRect = this._containerRect = this._containerRect || this._containerElement.getBoundingClientRect();
          /** @type {?} */


          var animationConfig = Object.assign(Object.assign({}, defaultRippleAnimationConfig), config.animation);

          if (config.centered) {
            x = containerRect.left + containerRect.width / 2;
            y = containerRect.top + containerRect.height / 2;
          }
          /** @type {?} */


          var radius = config.radius || distanceToFurthestCorner(x, y, containerRect);
          /** @type {?} */

          var offsetX = x - containerRect.left;
          /** @type {?} */

          var offsetY = y - containerRect.top;
          /** @type {?} */

          var duration = animationConfig.enterDuration;
          /** @type {?} */

          var ripple = document.createElement('div');
          ripple.classList.add('mat-ripple-element');
          ripple.style.left = "".concat(offsetX - radius, "px");
          ripple.style.top = "".concat(offsetY - radius, "px");
          ripple.style.height = "".concat(radius * 2, "px");
          ripple.style.width = "".concat(radius * 2, "px"); // If a custom color has been specified, set it as inline style. If no color is
          // set, the default color will be applied through the ripple theme styles.

          if (config.color != null) {
            ripple.style.backgroundColor = config.color;
          }

          ripple.style.transitionDuration = "".concat(duration, "ms");

          this._containerElement.appendChild(ripple); // By default the browser does not recalculate the styles of dynamically created
          // ripple elements. This is critical because then the `scale` would not animate properly.


          enforceStyleRecalculation(ripple);
          ripple.style.transform = 'scale(1)'; // Exposed reference to the ripple that will be returned.

          /** @type {?} */

          var rippleRef = new RippleRef(this, ripple, config);
          rippleRef.state = 0
          /* FADING_IN */
          ; // Add the ripple reference to the list of all active ripples.

          this._activeRipples.add(rippleRef);

          if (!config.persistent) {
            this._mostRecentTransientRipple = rippleRef;
          } // Wait for the ripple element to be completely faded in.
          // Once it's faded in, the ripple can be hidden immediately if the mouse is released.


          this._runTimeoutOutsideZone(
          /**
          * @return {?}
          */
          function () {
            /** @type {?} */
            var isMostRecentTransientRipple = rippleRef === _this66._mostRecentTransientRipple;
            rippleRef.state = 1
            /* VISIBLE */
            ; // When the timer runs out while the user has kept their pointer down, we want to
            // keep only the persistent ripples and the latest transient ripple. We do this,
            // because we don't want stacked transient ripples to appear after their enter
            // animation has finished.

            if (!config.persistent && (!isMostRecentTransientRipple || !_this66._isPointerDown)) {
              rippleRef.fadeOut();
            }
          }, duration);

          return rippleRef;
        }
        /**
         * Fades out a ripple reference.
         * @param {?} rippleRef
         * @return {?}
         */

      }, {
        key: "fadeOutRipple",
        value: function fadeOutRipple(rippleRef) {
          /** @type {?} */
          var wasActive = this._activeRipples["delete"](rippleRef);

          if (rippleRef === this._mostRecentTransientRipple) {
            this._mostRecentTransientRipple = null;
          } // Clear out the cached bounding rect if we have no more ripples.


          if (!this._activeRipples.size) {
            this._containerRect = null;
          } // For ripples that are not active anymore, don't re-run the fade-out animation.


          if (!wasActive) {
            return;
          }
          /** @type {?} */


          var rippleEl = rippleRef.element;
          /** @type {?} */

          var animationConfig = Object.assign(Object.assign({}, defaultRippleAnimationConfig), rippleRef.config.animation);
          rippleEl.style.transitionDuration = "".concat(animationConfig.exitDuration, "ms");
          rippleEl.style.opacity = '0';
          rippleRef.state = 2
          /* FADING_OUT */
          ; // Once the ripple faded out, the ripple can be safely removed from the DOM.

          this._runTimeoutOutsideZone(
          /**
          * @return {?}
          */
          function () {
            rippleRef.state = 3
            /* HIDDEN */
            ;

            /** @type {?} */
            rippleEl.parentNode.removeChild(rippleEl);
          }, animationConfig.exitDuration);
        }
        /**
         * Fades out all currently active ripples.
         * @return {?}
         */

      }, {
        key: "fadeOutAll",
        value: function fadeOutAll() {
          this._activeRipples.forEach(
          /**
          * @param {?} ripple
          * @return {?}
          */
          function (ripple) {
            return ripple.fadeOut();
          });
        }
        /**
         * Sets up the trigger event listeners
         * @param {?} elementOrElementRef
         * @return {?}
         */

      }, {
        key: "setupTriggerEvents",
        value: function setupTriggerEvents(elementOrElementRef) {
          /** @type {?} */
          var element = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceElement"])(elementOrElementRef);

          if (!element || element === this._triggerElement) {
            return;
          } // Remove all previously registered event listeners from the trigger element.


          this._removeTriggerEvents();

          this._triggerElement = element;

          this._registerEvents(pointerDownEvents);
        }
        /**
         * Handles all registered events.
         * \@docs-private
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "handleEvent",
        value: function handleEvent(event) {
          if (event.type === 'mousedown') {
            this._onMousedown(
            /** @type {?} */
            event);
          } else if (event.type === 'touchstart') {
            this._onTouchStart(
            /** @type {?} */
            event);
          } else {
            this._onPointerUp();
          } // If pointer-up events haven't been registered yet, do so now.
          // We do this on-demand in order to reduce the total number of event listeners
          // registered by the ripples, which speeds up the rendering time for large UIs.


          if (!this._pointerUpEventsRegistered) {
            this._registerEvents(pointerUpEvents);

            this._pointerUpEventsRegistered = true;
          }
        }
        /**
         * Function being called whenever the trigger is being pressed using mouse.
         * @private
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "_onMousedown",
        value: function _onMousedown(event) {
          // Screen readers will fire fake mouse events for space/enter. Skip launching a
          // ripple in this case for consistency with the non-screen-reader experience.

          /** @type {?} */
          var isFakeMousedown = Object(_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["isFakeMousedownFromScreenReader"])(event);
          /** @type {?} */

          var isSyntheticEvent = this._lastTouchStartEvent && Date.now() < this._lastTouchStartEvent + ignoreMouseEventsTimeout;

          if (!this._target.rippleDisabled && !isFakeMousedown && !isSyntheticEvent) {
            this._isPointerDown = true;
            this.fadeInRipple(event.clientX, event.clientY, this._target.rippleConfig);
          }
        }
        /**
         * Function being called whenever the trigger is being pressed using touch.
         * @private
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "_onTouchStart",
        value: function _onTouchStart(event) {
          if (!this._target.rippleDisabled) {
            // Some browsers fire mouse events after a `touchstart` event. Those synthetic mouse
            // events will launch a second ripple if we don't ignore mouse events for a specific
            // time after a touchstart event.
            this._lastTouchStartEvent = Date.now();
            this._isPointerDown = true; // Use `changedTouches` so we skip any touches where the user put
            // their finger down, but used another finger to tap the element again.

            /** @type {?} */

            var touches = event.changedTouches;

            for (var i = 0; i < touches.length; i++) {
              this.fadeInRipple(touches[i].clientX, touches[i].clientY, this._target.rippleConfig);
            }
          }
        }
        /**
         * Function being called whenever the trigger is being released.
         * @private
         * @return {?}
         */

      }, {
        key: "_onPointerUp",
        value: function _onPointerUp() {
          if (!this._isPointerDown) {
            return;
          }

          this._isPointerDown = false; // Fade-out all ripples that are visible and not persistent.

          this._activeRipples.forEach(
          /**
          * @param {?} ripple
          * @return {?}
          */
          function (ripple) {
            // By default, only ripples that are completely visible will fade out on pointer release.
            // If the `terminateOnPointerUp` option is set, ripples that still fade in will also fade out.

            /** @type {?} */
            var isVisible = ripple.state === 1
            /* VISIBLE */
            || ripple.config.terminateOnPointerUp && ripple.state === 0
            /* FADING_IN */
            ;

            if (!ripple.config.persistent && isVisible) {
              ripple.fadeOut();
            }
          });
        }
        /**
         * Runs a timeout outside of the Angular zone to avoid triggering the change detection.
         * @private
         * @param {?} fn
         * @param {?=} delay
         * @return {?}
         */

      }, {
        key: "_runTimeoutOutsideZone",
        value: function _runTimeoutOutsideZone(fn) {
          var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

          this._ngZone.runOutsideAngular(
          /**
          * @return {?}
          */
          function () {
            return setTimeout(fn, delay);
          });
        }
        /**
         * Registers event listeners for a given list of events.
         * @private
         * @param {?} eventTypes
         * @return {?}
         */

      }, {
        key: "_registerEvents",
        value: function _registerEvents(eventTypes) {
          var _this67 = this;

          this._ngZone.runOutsideAngular(
          /**
          * @return {?}
          */
          function () {
            eventTypes.forEach(
            /**
            * @param {?} type
            * @return {?}
            */
            function (type) {
              /** @type {?} */
              _this67._triggerElement.addEventListener(type, _this67, passiveEventOptions);
            });
          });
        }
        /**
         * Removes previously registered event listeners from the trigger element.
         * @return {?}
         */

      }, {
        key: "_removeTriggerEvents",
        value: function _removeTriggerEvents() {
          var _this68 = this;

          if (this._triggerElement) {
            pointerDownEvents.forEach(
            /**
            * @param {?} type
            * @return {?}
            */
            function (type) {
              /** @type {?} */
              _this68._triggerElement.removeEventListener(type, _this68, passiveEventOptions);
            });

            if (this._pointerUpEventsRegistered) {
              pointerUpEvents.forEach(
              /**
              * @param {?} type
              * @return {?}
              */
              function (type) {
                /** @type {?} */
                _this68._triggerElement.removeEventListener(type, _this68, passiveEventOptions);
              });
            }
          }
        }
      }]);

      return RippleRenderer;
    }();

    if (false) {}
    /**
     * Enforces a style recalculation of a DOM element by computing its styles.
     * @param {?} element
     * @return {?}
     */


    function enforceStyleRecalculation(element) {
      // Enforce a style recalculation by calling `getComputedStyle` and accessing any property.
      // Calling `getPropertyValue` is important to let optimizers know that this is not a noop.
      // See: https://gist.github.com/paulirish/5d52fb081b3570c81e3a
      window.getComputedStyle(element).getPropertyValue('opacity');
    }
    /**
     * Returns the distance from the point (x, y) to the furthest corner of a rectangle.
     * @param {?} x
     * @param {?} y
     * @param {?} rect
     * @return {?}
     */


    function distanceToFurthestCorner(x, y, rect) {
      /** @type {?} */
      var distX = Math.max(Math.abs(x - rect.left), Math.abs(x - rect.right));
      /** @type {?} */

      var distY = Math.max(Math.abs(y - rect.top), Math.abs(y - rect.bottom));
      return Math.sqrt(distX * distX + distY * distY);
    }
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/core/ripple/ripple.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Configurable options for `matRipple`.
     * @record
     */


    function RippleGlobalOptions() {}

    if (false) {}
    /**
     * Injection token that can be used to specify the global ripple options.
     * @type {?}
     */


    var MAT_RIPPLE_GLOBAL_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('mat-ripple-global-options');

    var MatRipple = /*#__PURE__*/function () {
      /**
       * @param {?} _elementRef
       * @param {?} ngZone
       * @param {?} platform
       * @param {?=} globalOptions
       * @param {?=} _animationMode
       */
      function MatRipple(_elementRef, ngZone, platform, globalOptions, _animationMode) {
        _classCallCheck(this, MatRipple);

        this._elementRef = _elementRef;
        this._animationMode = _animationMode;
        /**
         * If set, the radius in pixels of foreground ripples when fully expanded. If unset, the radius
         * will be the distance from the center of the ripple to the furthest corner of the host element's
         * bounding rectangle.
         */

        this.radius = 0;
        this._disabled = false;
        /**
         * Whether ripple directive is initialized and the input bindings are set.
         */

        this._isInitialized = false;
        this._globalOptions = globalOptions || {};
        this._rippleRenderer = new RippleRenderer(this, ngZone, _elementRef, platform);
      }
      /**
       * Whether click events will not trigger the ripple. Ripples can be still launched manually
       * by using the `launch()` method.
       * @return {?}
       */


      _createClass(MatRipple, [{
        key: "ngOnInit",

        /**
         * @return {?}
         */
        value: function ngOnInit() {
          this._isInitialized = true;

          this._setupTriggerEventsIfEnabled();
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._rippleRenderer._removeTriggerEvents();
        }
        /**
         * Fades out all currently showing ripple elements.
         * @return {?}
         */

      }, {
        key: "fadeOutAll",
        value: function fadeOutAll() {
          this._rippleRenderer.fadeOutAll();
        }
        /**
         * Ripple configuration from the directive's input values.
         * \@docs-private Implemented as part of RippleTarget
         * @return {?}
         */

      }, {
        key: "_setupTriggerEventsIfEnabled",

        /**
         * Sets up the trigger event listeners if ripples are enabled.
         * @private
         * @return {?}
         */
        value: function _setupTriggerEventsIfEnabled() {
          if (!this.disabled && this._isInitialized) {
            this._rippleRenderer.setupTriggerEvents(this.trigger);
          }
        }
        /**
         * Launches a manual ripple at the specified coordinated or just by the ripple config.
         * @param {?} configOrX
         * @param {?=} y
         * @param {?=} config
         * @return {?}
         */

      }, {
        key: "launch",
        value: function launch(configOrX) {
          var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
          var config = arguments.length > 2 ? arguments[2] : undefined;

          if (typeof configOrX === 'number') {
            return this._rippleRenderer.fadeInRipple(configOrX, y, Object.assign(Object.assign({}, this.rippleConfig), config));
          } else {
            return this._rippleRenderer.fadeInRipple(0, 0, Object.assign(Object.assign({}, this.rippleConfig), configOrX));
          }
        }
      }, {
        key: "disabled",
        get: function get() {
          return this._disabled;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._disabled = value;

          this._setupTriggerEventsIfEnabled();
        }
        /**
         * The element that triggers the ripple when click events are received.
         * Defaults to the directive's host element.
         * @return {?}
         */

      }, {
        key: "trigger",
        get: function get() {
          return this._trigger || this._elementRef.nativeElement;
        }
        /**
         * @param {?} trigger
         * @return {?}
         */
        ,
        set: function set(trigger) {
          this._trigger = trigger;

          this._setupTriggerEventsIfEnabled();
        }
      }, {
        key: "rippleConfig",
        get: function get() {
          return {
            centered: this.centered,
            radius: this.radius,
            color: this.color,
            animation: Object.assign(Object.assign(Object.assign({}, this._globalOptions.animation), this._animationMode === 'NoopAnimations' ? {
              enterDuration: 0,
              exitDuration: 0
            } : {}), this.animation),
            terminateOnPointerUp: this._globalOptions.terminateOnPointerUp
          };
        }
        /**
         * Whether ripples on pointer-down are disabled or not.
         * \@docs-private Implemented as part of RippleTarget
         * @return {?}
         */

      }, {
        key: "rippleDisabled",
        get: function get() {
          return this.disabled || !!this._globalOptions.disabled;
        }
      }]);

      return MatRipple;
    }();

    MatRipple.ɵfac = function MatRipple_Factory(t) {
      return new (t || MatRipple)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_RIPPLE_GLOBAL_OPTIONS, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["ANIMATION_MODULE_TYPE"], 8));
    };

    MatRipple.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: MatRipple,
      selectors: [["", "mat-ripple", ""], ["", "matRipple", ""]],
      hostAttrs: [1, "mat-ripple"],
      hostVars: 2,
      hostBindings: function MatRipple_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-ripple-unbounded", ctx.unbounded);
        }
      },
      inputs: {
        radius: ["matRippleRadius", "radius"],
        disabled: ["matRippleDisabled", "disabled"],
        trigger: ["matRippleTrigger", "trigger"],
        color: ["matRippleColor", "color"],
        unbounded: ["matRippleUnbounded", "unbounded"],
        centered: ["matRippleCentered", "centered"],
        animation: ["matRippleAnimation", "animation"]
      },
      exportAs: ["matRipple"]
    });
    /** @nocollapse */

    MatRipple.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
      }, {
        type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["Platform"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [MAT_RIPPLE_GLOBAL_OPTIONS]
        }]
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["ANIMATION_MODULE_TYPE"]]
        }]
      }];
    };

    MatRipple.propDecorators = {
      color: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['matRippleColor']
      }],
      unbounded: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['matRippleUnbounded']
      }],
      centered: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['matRippleCentered']
      }],
      radius: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['matRippleRadius']
      }],
      animation: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['matRippleAnimation']
      }],
      disabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['matRippleDisabled']
      }],
      trigger: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['matRippleTrigger']
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatRipple, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[mat-ripple], [matRipple]',
          exportAs: 'matRipple',
          host: {
            'class': 'mat-ripple',
            '[class.mat-ripple-unbounded]': 'unbounded'
          }
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
        }, {
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["Platform"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [MAT_RIPPLE_GLOBAL_OPTIONS]
          }]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["ANIMATION_MODULE_TYPE"]]
          }]
        }];
      }, {
        radius: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['matRippleRadius']
        }],
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['matRippleDisabled']
        }],
        trigger: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['matRippleTrigger']
        }],
        color: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['matRippleColor']
        }],
        unbounded: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['matRippleUnbounded']
        }],
        centered: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['matRippleCentered']
        }],
        animation: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['matRippleAnimation']
        }]
      });
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/core/ripple/index.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var MatRippleModule = function MatRippleModule() {
      _classCallCheck(this, MatRippleModule);
    };

    MatRippleModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: MatRippleModule
    });
    MatRippleModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function MatRippleModule_Factory(t) {
        return new (t || MatRippleModule)();
      },
      imports: [[MatCommonModule, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["PlatformModule"]], MatCommonModule]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MatRippleModule, {
        declarations: function declarations() {
          return [MatRipple];
        },
        imports: function imports() {
          return [MatCommonModule, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["PlatformModule"]];
        },
        exports: function exports() {
          return [MatRipple, MatCommonModule];
        }
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatRippleModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [MatCommonModule, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["PlatformModule"]],
          exports: [MatRipple, MatCommonModule],
          declarations: [MatRipple]
        }]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/core/selection/pseudo-checkbox/pseudo-checkbox.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Component that shows a simplified checkbox without including any kind of "real" checkbox.
     * Meant to be used when the checkbox is purely decorative and a large number of them will be
     * included, such as for the options in a multi-select. Uses no SVGs or complex animations.
     * Note that theming is meant to be handled by the parent element, e.g.
     * `mat-primary .mat-pseudo-checkbox`.
     *
     * Note that this component will be completely invisible to screen-reader users. This is *not*
     * interchangeable with `<mat-checkbox>` and should *not* be used if the user would directly
     * interact with the checkbox. The pseudo-checkbox should only be used as an implementation detail
     * of more complex components that appropriately handle selected / checked state.
     * \@docs-private
     */


    var MatPseudoCheckbox =
    /**
     * @param {?=} _animationMode
     */
    function MatPseudoCheckbox(_animationMode) {
      _classCallCheck(this, MatPseudoCheckbox);

      this._animationMode = _animationMode;
      /**
       * Display state of the checkbox.
       */

      this.state = 'unchecked';
      /**
       * Whether the checkbox is disabled.
       */

      this.disabled = false;
    };

    MatPseudoCheckbox.ɵfac = function MatPseudoCheckbox_Factory(t) {
      return new (t || MatPseudoCheckbox)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["ANIMATION_MODULE_TYPE"], 8));
    };

    MatPseudoCheckbox.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MatPseudoCheckbox,
      selectors: [["mat-pseudo-checkbox"]],
      hostAttrs: [1, "mat-pseudo-checkbox"],
      hostVars: 8,
      hostBindings: function MatPseudoCheckbox_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-pseudo-checkbox-indeterminate", ctx.state === "indeterminate")("mat-pseudo-checkbox-checked", ctx.state === "checked")("mat-pseudo-checkbox-disabled", ctx.disabled)("_mat-animation-noopable", ctx._animationMode === "NoopAnimations");
        }
      },
      inputs: {
        state: "state",
        disabled: "disabled"
      },
      decls: 0,
      vars: 0,
      template: function MatPseudoCheckbox_Template(rf, ctx) {},
      styles: [".mat-pseudo-checkbox{width:16px;height:16px;border:2px solid;border-radius:2px;cursor:pointer;display:inline-block;vertical-align:middle;box-sizing:border-box;position:relative;flex-shrink:0;transition:border-color 90ms cubic-bezier(0, 0, 0.2, 0.1),background-color 90ms cubic-bezier(0, 0, 0.2, 0.1)}.mat-pseudo-checkbox::after{position:absolute;opacity:0;content:\"\";border-bottom:2px solid currentColor;transition:opacity 90ms cubic-bezier(0, 0, 0.2, 0.1)}.mat-pseudo-checkbox.mat-pseudo-checkbox-checked,.mat-pseudo-checkbox.mat-pseudo-checkbox-indeterminate{border-color:transparent}._mat-animation-noopable.mat-pseudo-checkbox{transition:none;animation:none}._mat-animation-noopable.mat-pseudo-checkbox::after{transition:none}.mat-pseudo-checkbox-disabled{cursor:default}.mat-pseudo-checkbox-indeterminate::after{top:5px;left:1px;width:10px;opacity:1;border-radius:2px}.mat-pseudo-checkbox-checked::after{top:2.4px;left:1px;width:8px;height:3px;border-left:2px solid currentColor;transform:rotate(-45deg);opacity:1;box-sizing:content-box}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
    /** @nocollapse */

    MatPseudoCheckbox.ctorParameters = function () {
      return [{
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["ANIMATION_MODULE_TYPE"]]
        }]
      }];
    };

    MatPseudoCheckbox.propDecorators = {
      state: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      disabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatPseudoCheckbox, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
          selector: 'mat-pseudo-checkbox',
          template: '',
          host: {
            'class': 'mat-pseudo-checkbox',
            '[class.mat-pseudo-checkbox-indeterminate]': 'state === "indeterminate"',
            '[class.mat-pseudo-checkbox-checked]': 'state === "checked"',
            '[class.mat-pseudo-checkbox-disabled]': 'disabled',
            '[class._mat-animation-noopable]': '_animationMode === "NoopAnimations"'
          },
          styles: [".mat-pseudo-checkbox{width:16px;height:16px;border:2px solid;border-radius:2px;cursor:pointer;display:inline-block;vertical-align:middle;box-sizing:border-box;position:relative;flex-shrink:0;transition:border-color 90ms cubic-bezier(0, 0, 0.2, 0.1),background-color 90ms cubic-bezier(0, 0, 0.2, 0.1)}.mat-pseudo-checkbox::after{position:absolute;opacity:0;content:\"\";border-bottom:2px solid currentColor;transition:opacity 90ms cubic-bezier(0, 0, 0.2, 0.1)}.mat-pseudo-checkbox.mat-pseudo-checkbox-checked,.mat-pseudo-checkbox.mat-pseudo-checkbox-indeterminate{border-color:transparent}._mat-animation-noopable.mat-pseudo-checkbox{transition:none;animation:none}._mat-animation-noopable.mat-pseudo-checkbox::after{transition:none}.mat-pseudo-checkbox-disabled{cursor:default}.mat-pseudo-checkbox-indeterminate::after{top:5px;left:1px;width:10px;opacity:1;border-radius:2px}.mat-pseudo-checkbox-checked::after{top:2.4px;left:1px;width:8px;height:3px;border-left:2px solid currentColor;transform:rotate(-45deg);opacity:1;box-sizing:content-box}\n"]
        }]
      }], function () {
        return [{
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["ANIMATION_MODULE_TYPE"]]
          }]
        }];
      }, {
        state: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/core/selection/index.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var MatPseudoCheckboxModule = function MatPseudoCheckboxModule() {
      _classCallCheck(this, MatPseudoCheckboxModule);
    };

    MatPseudoCheckboxModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: MatPseudoCheckboxModule
    });
    MatPseudoCheckboxModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function MatPseudoCheckboxModule_Factory(t) {
        return new (t || MatPseudoCheckboxModule)();
      }
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MatPseudoCheckboxModule, {
        declarations: [MatPseudoCheckbox],
        exports: [MatPseudoCheckbox]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatPseudoCheckboxModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          exports: [MatPseudoCheckbox],
          declarations: [MatPseudoCheckbox]
        }]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/core/option/optgroup.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // Boilerplate for applying mixins to MatOptgroup.

    /**
     * \@docs-private
     */


    var MatOptgroupBase = function MatOptgroupBase() {
      _classCallCheck(this, MatOptgroupBase);
    };
    /** @type {?} */


    var _MatOptgroupMixinBase = mixinDisabled(MatOptgroupBase); // Counter for unique group ids.

    /** @type {?} */


    var _uniqueOptgroupIdCounter = 0;
    /**
     * Component that is used to group instances of `mat-option`.
     */

    var MatOptgroup = /*#__PURE__*/function (_MatOptgroupMixinBase2) {
      _inherits(MatOptgroup, _MatOptgroupMixinBase2);

      var _super26 = _createSuper(MatOptgroup);

      function MatOptgroup() {
        var _this69;

        _classCallCheck(this, MatOptgroup);

        _this69 = _super26.apply(this, arguments);
        /**
         * Unique id for the underlying label.
         */

        _this69._labelId = "mat-optgroup-label-".concat(_uniqueOptgroupIdCounter++);
        return _this69;
      }

      return MatOptgroup;
    }(_MatOptgroupMixinBase);

    MatOptgroup.ɵfac = function MatOptgroup_Factory(t) {
      return ɵMatOptgroup_BaseFactory(t || MatOptgroup);
    };

    MatOptgroup.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MatOptgroup,
      selectors: [["mat-optgroup"]],
      hostAttrs: ["role", "group", 1, "mat-optgroup"],
      hostVars: 4,
      hostBindings: function MatOptgroup_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-disabled", ctx.disabled.toString())("aria-labelledby", ctx._labelId);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-optgroup-disabled", ctx.disabled);
        }
      },
      inputs: {
        disabled: "disabled",
        label: "label"
      },
      exportAs: ["matOptgroup"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      ngContentSelectors: _c1,
      decls: 4,
      vars: 2,
      consts: [[1, "mat-optgroup-label", 3, "id"]],
      template: function MatOptgroup_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](3, 1);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx._labelId);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.label, " ");
        }
      },
      styles: [".mat-optgroup-label{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;line-height:48px;height:48px;padding:0 16px;text-align:left;text-decoration:none;max-width:100%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.mat-optgroup-label[disabled]{cursor:default}[dir=rtl] .mat-optgroup-label{text-align:right}.mat-optgroup-label .mat-icon{margin-right:16px;vertical-align:middle}.mat-optgroup-label .mat-icon svg{vertical-align:top}[dir=rtl] .mat-optgroup-label .mat-icon{margin-left:16px;margin-right:0}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
    MatOptgroup.propDecorators = {
      label: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };

    var ɵMatOptgroup_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatOptgroup);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatOptgroup, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'mat-optgroup',
          exportAs: 'matOptgroup',
          template: "<label class=\"mat-optgroup-label\" [id]=\"_labelId\">{{ label }} <ng-content></ng-content></label>\n<ng-content select=\"mat-option, ng-container\"></ng-content>\n",
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
          inputs: ['disabled'],
          host: {
            'class': 'mat-optgroup',
            'role': 'group',
            '[class.mat-optgroup-disabled]': 'disabled',
            '[attr.aria-disabled]': 'disabled.toString()',
            '[attr.aria-labelledby]': '_labelId'
          },
          styles: [".mat-optgroup-label{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;line-height:48px;height:48px;padding:0 16px;text-align:left;text-decoration:none;max-width:100%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.mat-optgroup-label[disabled]{cursor:default}[dir=rtl] .mat-optgroup-label{text-align:right}.mat-optgroup-label .mat-icon{margin-right:16px;vertical-align:middle}.mat-optgroup-label .mat-icon svg{vertical-align:top}[dir=rtl] .mat-optgroup-label .mat-icon{margin-left:16px;margin-right:0}\n"]
        }]
      }], null, {
        label: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/core/option/option.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Option IDs need to be unique across components, so this counter exists outside of
     * the component definition.
     * @type {?}
     */


    var _uniqueIdCounter = 0;
    /**
     * Event object emitted by MatOption when selected or deselected.
     */

    var MatOptionSelectionChange =
    /**
     * @param {?} source
     * @param {?=} isUserInput
     */
    function MatOptionSelectionChange(source) {
      var isUserInput = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      _classCallCheck(this, MatOptionSelectionChange);

      this.source = source;
      this.isUserInput = isUserInput;
    };

    if (false) {}
    /**
     * Describes a parent component that manages a list of options.
     * Contains properties that the options can inherit.
     * \@docs-private
     * @record
     */


    function MatOptionParentComponent() {}

    if (false) {}
    /**
     * Injection token used to provide the parent component to options.
     * @type {?}
     */


    var MAT_OPTION_PARENT_COMPONENT = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('MAT_OPTION_PARENT_COMPONENT');
    /**
     * Single option inside of a `<mat-select>` element.
     */

    var MatOption = /*#__PURE__*/function () {
      /**
       * @param {?} _element
       * @param {?} _changeDetectorRef
       * @param {?} _parent
       * @param {?} group
       */
      function MatOption(_element, _changeDetectorRef, _parent, group) {
        _classCallCheck(this, MatOption);

        this._element = _element;
        this._changeDetectorRef = _changeDetectorRef;
        this._parent = _parent;
        this.group = group;
        this._selected = false;
        this._active = false;
        this._disabled = false;
        this._mostRecentViewValue = '';
        /**
         * The unique ID of the option.
         */

        this.id = "mat-option-".concat(_uniqueIdCounter++);
        /**
         * Event emitted when the option is selected or deselected.
         */
        // tslint:disable-next-line:no-output-on-prefix

        this.onSelectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Emits when the state of the option changes and any parents have to be notified.
         */

        this._stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
      }
      /**
       * Whether the wrapping component is in multiple selection mode.
       * @return {?}
       */


      _createClass(MatOption, [{
        key: "select",

        /**
         * Selects the option.
         * @return {?}
         */
        value: function select() {
          if (!this._selected) {
            this._selected = true;

            this._changeDetectorRef.markForCheck();

            this._emitSelectionChangeEvent();
          }
        }
        /**
         * Deselects the option.
         * @return {?}
         */

      }, {
        key: "deselect",
        value: function deselect() {
          if (this._selected) {
            this._selected = false;

            this._changeDetectorRef.markForCheck();

            this._emitSelectionChangeEvent();
          }
        }
        /**
         * Sets focus onto this option.
         * @param {?=} _origin
         * @param {?=} options
         * @return {?}
         */

      }, {
        key: "focus",
        value: function focus(_origin, options) {
          // Note that we aren't using `_origin`, but we need to keep it because some internal consumers
          // use `MatOption` in a `FocusKeyManager` and we need it to match `FocusableOption`.

          /** @type {?} */
          var element = this._getHostElement();

          if (typeof element.focus === 'function') {
            element.focus(options);
          }
        }
        /**
         * This method sets display styles on the option to make it appear
         * active. This is used by the ActiveDescendantKeyManager so key
         * events will display the proper options as active on arrow key events.
         * @return {?}
         */

      }, {
        key: "setActiveStyles",
        value: function setActiveStyles() {
          if (!this._active) {
            this._active = true;

            this._changeDetectorRef.markForCheck();
          }
        }
        /**
         * This method removes display styles on the option that made it appear
         * active. This is used by the ActiveDescendantKeyManager so key
         * events will display the proper options as active on arrow key events.
         * @return {?}
         */

      }, {
        key: "setInactiveStyles",
        value: function setInactiveStyles() {
          if (this._active) {
            this._active = false;

            this._changeDetectorRef.markForCheck();
          }
        }
        /**
         * Gets the label to be used when determining whether the option should be focused.
         * @return {?}
         */

      }, {
        key: "getLabel",
        value: function getLabel() {
          return this.viewValue;
        }
        /**
         * Ensures the option is selected when activated from the keyboard.
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "_handleKeydown",
        value: function _handleKeydown(event) {
          if ((event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["ENTER"] || event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["SPACE"]) && !Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["hasModifierKey"])(event)) {
            this._selectViaInteraction(); // Prevent the page from scrolling down and form submits.


            event.preventDefault();
          }
        }
        /**
         * `Selects the option while indicating the selection came from the user. Used to
         * determine if the select's view -> model callback should be invoked.`
         * @return {?}
         */

      }, {
        key: "_selectViaInteraction",
        value: function _selectViaInteraction() {
          if (!this.disabled) {
            this._selected = this.multiple ? !this._selected : true;

            this._changeDetectorRef.markForCheck();

            this._emitSelectionChangeEvent(true);
          }
        }
        /**
         * Gets the `aria-selected` value for the option. We explicitly omit the `aria-selected`
         * attribute from single-selection, unselected options. Including the `aria-selected="false"`
         * attributes adds a significant amount of noise to screen-reader users without providing useful
         * information.
         * @return {?}
         */

      }, {
        key: "_getAriaSelected",
        value: function _getAriaSelected() {
          return this.selected || (this.multiple ? false : null);
        }
        /**
         * Returns the correct tabindex for the option depending on disabled state.
         * @return {?}
         */

      }, {
        key: "_getTabIndex",
        value: function _getTabIndex() {
          return this.disabled ? '-1' : '0';
        }
        /**
         * Gets the host DOM element.
         * @return {?}
         */

      }, {
        key: "_getHostElement",
        value: function _getHostElement() {
          return this._element.nativeElement;
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngAfterViewChecked",
        value: function ngAfterViewChecked() {
          // Since parent components could be using the option's label to display the selected values
          // (e.g. `mat-select`) and they don't have a way of knowing if the option's label has changed
          // we have to check for changes in the DOM ourselves and dispatch an event. These checks are
          // relatively cheap, however we still limit them only to selected options in order to avoid
          // hitting the DOM too often.
          if (this._selected) {
            /** @type {?} */
            var viewValue = this.viewValue;

            if (viewValue !== this._mostRecentViewValue) {
              this._mostRecentViewValue = viewValue;

              this._stateChanges.next();
            }
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._stateChanges.complete();
        }
        /**
         * Emits the selection change event.
         * @private
         * @param {?=} isUserInput
         * @return {?}
         */

      }, {
        key: "_emitSelectionChangeEvent",
        value: function _emitSelectionChangeEvent() {
          var isUserInput = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
          this.onSelectionChange.emit(new MatOptionSelectionChange(this, isUserInput));
        }
      }, {
        key: "multiple",
        get: function get() {
          return this._parent && this._parent.multiple;
        }
        /**
         * Whether or not the option is currently selected.
         * @return {?}
         */

      }, {
        key: "selected",
        get: function get() {
          return this._selected;
        }
        /**
         * Whether the option is disabled.
         * @return {?}
         */

      }, {
        key: "disabled",
        get: function get() {
          return this.group && this.group.disabled || this._disabled;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceBooleanProperty"])(value);
        }
        /**
         * Whether ripples for the option are disabled.
         * @return {?}
         */

      }, {
        key: "disableRipple",
        get: function get() {
          return this._parent && this._parent.disableRipple;
        }
        /**
         * Whether or not the option is currently active and ready to be selected.
         * An active option displays styles as if it is focused, but the
         * focus is actually retained somewhere else. This comes in handy
         * for components like autocomplete where focus must remain on the input.
         * @return {?}
         */

      }, {
        key: "active",
        get: function get() {
          return this._active;
        }
        /**
         * The displayed value of the option. It is necessary to show the selected option in the
         * select's trigger.
         * @return {?}
         */

      }, {
        key: "viewValue",
        get: function get() {
          // TODO(kara): Add input property alternative for node envs.
          return (this._getHostElement().textContent || '').trim();
        }
      }]);

      return MatOption;
    }();

    MatOption.ɵfac = function MatOption_Factory(t) {
      return new (t || MatOption)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_OPTION_PARENT_COMPONENT, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MatOptgroup, 8));
    };

    MatOption.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MatOption,
      selectors: [["mat-option"]],
      hostAttrs: ["role", "option", 1, "mat-option", "mat-focus-indicator"],
      hostVars: 12,
      hostBindings: function MatOption_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MatOption_click_HostBindingHandler() {
            return ctx._selectViaInteraction();
          })("keydown", function MatOption_keydown_HostBindingHandler($event) {
            return ctx._handleKeydown($event);
          });
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵhostProperty"]("id", ctx.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("tabindex", ctx._getTabIndex())("aria-selected", ctx._getAriaSelected())("aria-disabled", ctx.disabled.toString());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-selected", ctx.selected)("mat-option-multiple", ctx.multiple)("mat-active", ctx.active)("mat-option-disabled", ctx.disabled);
        }
      },
      inputs: {
        id: "id",
        disabled: "disabled",
        value: "value"
      },
      outputs: {
        onSelectionChange: "onSelectionChange"
      },
      exportAs: ["matOption"],
      ngContentSelectors: _c2,
      decls: 4,
      vars: 3,
      consts: [["class", "mat-option-pseudo-checkbox", 3, "state", "disabled", 4, "ngIf"], [1, "mat-option-text"], ["mat-ripple", "", 1, "mat-option-ripple", 3, "matRippleTrigger", "matRippleDisabled"], [1, "mat-option-pseudo-checkbox", 3, "state", "disabled"]],
      template: function MatOption_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MatOption_mat_pseudo_checkbox_0_Template, 1, 2, "mat-pseudo-checkbox", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 2);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.multiple);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRippleTrigger", ctx._getHostElement())("matRippleDisabled", ctx.disabled || ctx.disableRipple);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], MatRipple, MatPseudoCheckbox],
      styles: [".mat-option{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;line-height:48px;height:48px;padding:0 16px;text-align:left;text-decoration:none;max-width:100%;position:relative;cursor:pointer;outline:none;display:flex;flex-direction:row;max-width:100%;box-sizing:border-box;align-items:center;-webkit-tap-highlight-color:transparent}.mat-option[disabled]{cursor:default}[dir=rtl] .mat-option{text-align:right}.mat-option .mat-icon{margin-right:16px;vertical-align:middle}.mat-option .mat-icon svg{vertical-align:top}[dir=rtl] .mat-option .mat-icon{margin-left:16px;margin-right:0}.mat-option[aria-disabled=true]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.mat-optgroup .mat-option:not(.mat-option-multiple){padding-left:32px}[dir=rtl] .mat-optgroup .mat-option:not(.mat-option-multiple){padding-left:16px;padding-right:32px}.cdk-high-contrast-active .mat-option{margin:0 1px}.cdk-high-contrast-active .mat-option.mat-active{border:solid 1px currentColor;margin:0}.mat-option-text{display:inline-block;flex-grow:1;overflow:hidden;text-overflow:ellipsis}.mat-option .mat-option-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.cdk-high-contrast-active .mat-option .mat-option-ripple{opacity:.5}.mat-option-pseudo-checkbox{margin-right:8px}[dir=rtl] .mat-option-pseudo-checkbox{margin-left:8px;margin-right:0}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
    /** @nocollapse */

    MatOption.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [MAT_OPTION_PARENT_COMPONENT]
        }]
      }, {
        type: MatOptgroup,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }]
      }];
    };

    MatOption.propDecorators = {
      value: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      id: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      disabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      onSelectionChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatOption, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'mat-option',
          exportAs: 'matOption',
          host: {
            'role': 'option',
            '[attr.tabindex]': '_getTabIndex()',
            '[class.mat-selected]': 'selected',
            '[class.mat-option-multiple]': 'multiple',
            '[class.mat-active]': 'active',
            '[id]': 'id',
            '[attr.aria-selected]': '_getAriaSelected()',
            '[attr.aria-disabled]': 'disabled.toString()',
            '[class.mat-option-disabled]': 'disabled',
            '(click)': '_selectViaInteraction()',
            '(keydown)': '_handleKeydown($event)',
            'class': 'mat-option mat-focus-indicator'
          },
          template: "<mat-pseudo-checkbox *ngIf=\"multiple\" class=\"mat-option-pseudo-checkbox\"\n    [state]=\"selected ? 'checked' : 'unchecked'\" [disabled]=\"disabled\"></mat-pseudo-checkbox>\n\n<span class=\"mat-option-text\"><ng-content></ng-content></span>\n\n<div class=\"mat-option-ripple\" mat-ripple\n     [matRippleTrigger]=\"_getHostElement()\"\n     [matRippleDisabled]=\"disabled || disableRipple\">\n</div>\n",
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
          styles: [".mat-option{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;line-height:48px;height:48px;padding:0 16px;text-align:left;text-decoration:none;max-width:100%;position:relative;cursor:pointer;outline:none;display:flex;flex-direction:row;max-width:100%;box-sizing:border-box;align-items:center;-webkit-tap-highlight-color:transparent}.mat-option[disabled]{cursor:default}[dir=rtl] .mat-option{text-align:right}.mat-option .mat-icon{margin-right:16px;vertical-align:middle}.mat-option .mat-icon svg{vertical-align:top}[dir=rtl] .mat-option .mat-icon{margin-left:16px;margin-right:0}.mat-option[aria-disabled=true]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.mat-optgroup .mat-option:not(.mat-option-multiple){padding-left:32px}[dir=rtl] .mat-optgroup .mat-option:not(.mat-option-multiple){padding-left:16px;padding-right:32px}.cdk-high-contrast-active .mat-option{margin:0 1px}.cdk-high-contrast-active .mat-option.mat-active{border:solid 1px currentColor;margin:0}.mat-option-text{display:inline-block;flex-grow:1;overflow:hidden;text-overflow:ellipsis}.mat-option .mat-option-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.cdk-high-contrast-active .mat-option .mat-option-ripple{opacity:.5}.mat-option-pseudo-checkbox{margin-right:8px}[dir=rtl] .mat-option-pseudo-checkbox{margin-left:8px;margin-right:0}\n"]
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [MAT_OPTION_PARENT_COMPONENT]
          }]
        }, {
          type: MatOptgroup,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }]
        }];
      }, {
        id: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        onSelectionChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        value: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();

    if (false) {}
    /**
     * Counts the amount of option group labels that precede the specified option.
     * \@docs-private
     * @param {?} optionIndex Index of the option at which to start counting.
     * @param {?} options Flat list of all of the options.
     * @param {?} optionGroups Flat list of all of the option groups.
     * @return {?}
     */


    function _countGroupLabelsBeforeOption(optionIndex, options, optionGroups) {
      if (optionGroups.length) {
        /** @type {?} */
        var optionsArray = options.toArray();
        /** @type {?} */

        var groups = optionGroups.toArray();
        /** @type {?} */

        var groupCounter = 0;

        for (var i = 0; i < optionIndex + 1; i++) {
          if (optionsArray[i].group && optionsArray[i].group === groups[groupCounter]) {
            groupCounter++;
          }
        }

        return groupCounter;
      }

      return 0;
    }
    /**
     * Determines the position to which to scroll a panel in order for an option to be into view.
     * \@docs-private
     * @param {?} optionIndex Index of the option to be scrolled into the view.
     * @param {?} optionHeight Height of the options.
     * @param {?} currentScrollPosition Current scroll position of the panel.
     * @param {?} panelHeight Height of the panel.
     * @return {?}
     */


    function _getOptionScrollPosition(optionIndex, optionHeight, currentScrollPosition, panelHeight) {
      /** @type {?} */
      var optionOffset = optionIndex * optionHeight;

      if (optionOffset < currentScrollPosition) {
        return optionOffset;
      }

      if (optionOffset + optionHeight > currentScrollPosition + panelHeight) {
        return Math.max(0, optionOffset - panelHeight + optionHeight);
      }

      return currentScrollPosition;
    }
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/core/option/index.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var MatOptionModule = function MatOptionModule() {
      _classCallCheck(this, MatOptionModule);
    };

    MatOptionModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: MatOptionModule
    });
    MatOptionModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function MatOptionModule_Factory(t) {
        return new (t || MatOptionModule)();
      },
      imports: [[MatRippleModule, _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], MatPseudoCheckboxModule]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MatOptionModule, {
        declarations: function declarations() {
          return [MatOption, MatOptgroup];
        },
        imports: function imports() {
          return [MatRippleModule, _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], MatPseudoCheckboxModule];
        },
        exports: function exports() {
          return [MatOption, MatOptgroup];
        }
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatOptionModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [MatRippleModule, _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], MatPseudoCheckboxModule],
          exports: [MatOption, MatOptgroup],
          declarations: [MatOption, MatOptgroup]
        }]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/core/label/label-options.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * InjectionToken that can be used to specify the global label options.
     * @deprecated Use `MAT_FORM_FIELD_DEFAULT_OPTIONS` injection token from
     *     `\@angular/material/form-field` instead.
     * \@breaking-change 11.0.0
     * @type {?}
     */


    var MAT_LABEL_GLOBAL_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('mat-label-global-options');
    /**
     * Configurable options for floating labels.
     * @deprecated Use `MatFormFieldDefaultOptions` from `\@angular/material/form-field` instead.
     * \@breaking-change 11.0.0
     * @record
     */

    function LabelOptions() {}

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/core/month-constants.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * When constructing a Date, the month is zero-based. This can be confusing, since people are
     * used to seeing them one-based. So we create these aliases to make writing the tests easier.
     * \@docs-private
     * \@breaking-change 8.0.0 Remove this with V8 since it was only targeted for testing.
     * @type {?}
     */


    var JAN = 0;
    /** @type {?} */

    var FEB = 1;
    /** @type {?} */

    var MAR = 2;
    /** @type {?} */

    var APR = 3;
    /** @type {?} */

    var MAY = 4;
    /** @type {?} */

    var JUN = 5;
    /** @type {?} */

    var JUL = 6;
    /** @type {?} */

    var AUG = 7;
    /** @type {?} */

    var SEP = 8;
    /** @type {?} */

    var OCT = 9;
    /** @type {?} */

    var NOV = 10;
    /** @type {?} */

    var DEC = 11;
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/core/public-api.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=core.js.map

    /***/
  },

  /***/
  "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js":
  /*!**********************************************************************!*\
    !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js ***!
    \**********************************************************************/

  /*! exports provided: MAT_TABS_CONFIG, MAT_TAB_GROUP, MatInkBar, MatTab, MatTabBody, MatTabBodyPortal, MatTabChangeEvent, MatTabContent, MatTabGroup, MatTabHeader, MatTabLabel, MatTabLabelWrapper, MatTabLink, MatTabNav, MatTabsModule, _MAT_INK_BAR_POSITIONER, _MatTabBodyBase, _MatTabGroupBase, _MatTabHeaderBase, _MatTabLinkBase, _MatTabNavBase, matTabsAnimations, ɵangular_material_src_material_tabs_tabs_a, ɵangular_material_src_material_tabs_tabs_b */

  /***/
  function node_modulesAngularMaterial__ivy_ngcc__Fesm2015TabsJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_TABS_CONFIG", function () {
      return MAT_TABS_CONFIG;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_TAB_GROUP", function () {
      return MAT_TAB_GROUP;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatInkBar", function () {
      return MatInkBar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatTab", function () {
      return MatTab;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatTabBody", function () {
      return MatTabBody;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatTabBodyPortal", function () {
      return MatTabBodyPortal;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatTabChangeEvent", function () {
      return MatTabChangeEvent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatTabContent", function () {
      return MatTabContent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatTabGroup", function () {
      return MatTabGroup;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatTabHeader", function () {
      return MatTabHeader;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatTabLabel", function () {
      return MatTabLabel;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatTabLabelWrapper", function () {
      return MatTabLabelWrapper;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatTabLink", function () {
      return MatTabLink;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatTabNav", function () {
      return MatTabNav;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatTabsModule", function () {
      return MatTabsModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "_MAT_INK_BAR_POSITIONER", function () {
      return _MAT_INK_BAR_POSITIONER;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "_MatTabBodyBase", function () {
      return _MatTabBodyBase;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "_MatTabGroupBase", function () {
      return _MatTabGroupBase;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "_MatTabHeaderBase", function () {
      return _MatTabHeaderBase;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "_MatTabLinkBase", function () {
      return _MatTabLinkBase;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "_MatTabNavBase", function () {
      return _MatTabNavBase;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "matTabsAnimations", function () {
      return matTabsAnimations;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_material_src_material_tabs_tabs_a", function () {
      return _MAT_INK_BAR_POSITIONER_FACTORY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_material_src_material_tabs_tabs_b", function () {
      return MatPaginatedTabHeader;
    });
    /* harmony import */


    var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/cdk/a11y */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/a11y.js");
    /* harmony import */


    var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/cdk/observers */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/observers.js");
    /* harmony import */


    var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/cdk/portal */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/portal.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/cdk/bidi */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/bidi.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/cdk/coercion */
    "./node_modules/@angular/cdk/fesm2015/coercion.js");
    /* harmony import */


    var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/cdk/scrolling */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/scrolling.js");
    /* harmony import */


    var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/cdk/platform */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/platform.js");
    /* harmony import */


    var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/cdk/keycodes */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/keycodes.js");
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/tabs/ink-bar.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Interface for a a MatInkBar positioner method, defining the positioning and width of the ink
     * bar in a set of tabs.
     * @record
     */


    function MatTab_ng_template_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojection"](0);
      }
    }

    var _c0 = ["*"];

    function MatTabBody_ng_template_2_Template(rf, ctx) {}

    var _c1 = function _c1(a0) {
      return {
        animationDuration: a0
      };
    };

    var _c2 = function _c2(a0, a1) {
      return {
        value: a0,
        params: a1
      };
    };

    var _c3 = ["tabBodyWrapper"];
    var _c4 = ["tabHeader"];

    function MatTabGroup_div_2_ng_template_2_ng_template_0_Template(rf, ctx) {}

    function MatTabGroup_div_2_ng_template_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, MatTabGroup_div_2_ng_template_2_ng_template_0_Template, 0, 0, "ng-template", 9);
      }

      if (rf & 2) {
        var tab_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("cdkPortalOutlet", tab_r4.templateLabel);
      }
    }

    function MatTabGroup_div_2_ng_template_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](0);
      }

      if (rf & 2) {
        var tab_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](tab_r4.textLabel);
      }
    }

    function MatTabGroup_div_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MatTabGroup_div_2_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r12);

          var tab_r4 = ctx.$implicit;
          var i_r5 = ctx.index;

          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](1);

          return ctx_r11._handleClick(tab_r4, _r0, i_r5);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, MatTabGroup_div_2_ng_template_2_Template, 1, 1, "ng-template", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, MatTabGroup_div_2_ng_template_3_Template, 1, 1, "ng-template", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var tab_r4 = ctx.$implicit;
        var i_r5 = ctx.index;

        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("mat-tab-label-active", ctx_r1.selectedIndex == i_r5);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("id", ctx_r1._getTabLabelId(i_r5))("disabled", tab_r4.disabled)("matRippleDisabled", tab_r4.disabled || ctx_r1.disableRipple);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("tabIndex", ctx_r1._getTabIndex(tab_r4, i_r5))("aria-posinset", i_r5 + 1)("aria-setsize", ctx_r1._tabs.length)("aria-controls", ctx_r1._getTabContentId(i_r5))("aria-selected", ctx_r1.selectedIndex == i_r5)("aria-label", tab_r4.ariaLabel || null)("aria-labelledby", !tab_r4.ariaLabel && tab_r4.ariaLabelledby ? tab_r4.ariaLabelledby : null);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", tab_r4.templateLabel);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !tab_r4.templateLabel);
      }
    }

    function MatTabGroup_mat_tab_body_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-tab-body", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("_onCentered", function MatTabGroup_mat_tab_body_5_Template_mat_tab_body__onCentered_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r16);

          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          return ctx_r15._removeTabBodyWrapperHeight();
        })("_onCentering", function MatTabGroup_mat_tab_body_5_Template_mat_tab_body__onCentering_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r16);

          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          return ctx_r17._setTabBodyWrapperHeight($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var tab_r13 = ctx.$implicit;
        var i_r14 = ctx.index;

        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("mat-tab-body-active", ctx_r3.selectedIndex == i_r14);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("id", ctx_r3._getTabContentId(i_r14))("content", tab_r13.content)("position", tab_r13.position)("origin", tab_r13.origin)("animationDuration", ctx_r3.animationDuration);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("aria-labelledby", ctx_r3._getTabLabelId(i_r14));
      }
    }

    var _c5 = ["tabListContainer"];
    var _c6 = ["tabList"];
    var _c7 = ["nextPaginator"];
    var _c8 = ["previousPaginator"];
    var _c9 = ["mat-tab-nav-bar", ""];

    function _MatInkBarPositioner() {}
    /**
     * Injection token for the MatInkBar's Positioner.
     * @type {?}
     */


    var _MAT_INK_BAR_POSITIONER = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["InjectionToken"]('MatInkBarPositioner', {
      providedIn: 'root',
      factory: _MAT_INK_BAR_POSITIONER_FACTORY
    });
    /**
     * The default positioner function for the MatInkBar.
     * \@docs-private
     * @return {?}
     */


    function _MAT_INK_BAR_POSITIONER_FACTORY() {
      /** @type {?} */
      var method =
      /**
      * @param {?} element
      * @return {?}
      */
      function method(element) {
        return {
          left: element ? (element.offsetLeft || 0) + 'px' : '0',
          width: element ? (element.offsetWidth || 0) + 'px' : '0'
        };
      };

      return method;
    }
    /**
     * The ink-bar is used to display and animate the line underneath the current active tab label.
     * \@docs-private
     */


    var MatInkBar = /*#__PURE__*/function () {
      /**
       * @param {?} _elementRef
       * @param {?} _ngZone
       * @param {?} _inkBarPositioner
       * @param {?=} _animationMode
       */
      function MatInkBar(_elementRef, _ngZone, _inkBarPositioner, _animationMode) {
        _classCallCheck(this, MatInkBar);

        this._elementRef = _elementRef;
        this._ngZone = _ngZone;
        this._inkBarPositioner = _inkBarPositioner;
        this._animationMode = _animationMode;
      }
      /**
       * Calculates the styles from the provided element in order to align the ink-bar to that element.
       * Shows the ink bar if previously set as hidden.
       * @param {?} element
       * @return {?}
       */


      _createClass(MatInkBar, [{
        key: "alignToElement",
        value: function alignToElement(element) {
          var _this70 = this;

          this.show();

          if (typeof requestAnimationFrame !== 'undefined') {
            this._ngZone.runOutsideAngular(
            /**
            * @return {?}
            */
            function () {
              requestAnimationFrame(
              /**
              * @return {?}
              */
              function () {
                return _this70._setStyles(element);
              });
            });
          } else {
            this._setStyles(element);
          }
        }
        /**
         * Shows the ink bar.
         * @return {?}
         */

      }, {
        key: "show",
        value: function show() {
          this._elementRef.nativeElement.style.visibility = 'visible';
        }
        /**
         * Hides the ink bar.
         * @return {?}
         */

      }, {
        key: "hide",
        value: function hide() {
          this._elementRef.nativeElement.style.visibility = 'hidden';
        }
        /**
         * Sets the proper styles to the ink bar element.
         * @private
         * @param {?} element
         * @return {?}
         */

      }, {
        key: "_setStyles",
        value: function _setStyles(element) {
          /** @type {?} */
          var positions = this._inkBarPositioner(element);
          /** @type {?} */


          var inkBar = this._elementRef.nativeElement;
          inkBar.style.left = positions.left;
          inkBar.style.width = positions.width;
        }
      }]);

      return MatInkBar;
    }();

    MatInkBar.ɵfac = function MatInkBar_Factory(t) {
      return new (t || MatInkBar)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_MAT_INK_BAR_POSITIONER), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"], 8));
    };

    MatInkBar.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({
      type: MatInkBar,
      selectors: [["mat-ink-bar"]],
      hostAttrs: [1, "mat-ink-bar"],
      hostVars: 2,
      hostBindings: function MatInkBar_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("_mat-animation-noopable", ctx._animationMode === "NoopAnimations");
        }
      }
    });
    /** @nocollapse */

    MatInkBar.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
          args: [_MAT_INK_BAR_POSITIONER]
        }]
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
          args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"]]
        }]
      }];
    };
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MatInkBar, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"],
        args: [{
          selector: 'mat-ink-bar',
          host: {
            'class': 'mat-ink-bar',
            '[class._mat-animation-noopable]': "_animationMode === 'NoopAnimations'"
          }
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
            args: [_MAT_INK_BAR_POSITIONER]
          }]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
            args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"]]
          }]
        }];
      }, null);
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/tabs/tab-content.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Decorates the `ng-template` tags and reads out the template from it.
     */


    var MatTabContent =
    /**
     * @param {?} template
     */
    function MatTabContent(template) {
      _classCallCheck(this, MatTabContent);

      this.template = template;
    };

    MatTabContent.ɵfac = function MatTabContent_Factory(t) {
      return new (t || MatTabContent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["TemplateRef"]));
    };

    MatTabContent.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({
      type: MatTabContent,
      selectors: [["", "matTabContent", ""]]
    });
    /** @nocollapse */

    MatTabContent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["TemplateRef"]
      }];
    };
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MatTabContent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"],
        args: [{
          selector: '[matTabContent]'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["TemplateRef"]
        }];
      }, null);
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/tabs/tab-label.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Used to flag tab labels for use with the portal directive
     */


    var MatTabLabel = /*#__PURE__*/function (_angular_cdk_portal__) {
      _inherits(MatTabLabel, _angular_cdk_portal__);

      var _super27 = _createSuper(MatTabLabel);

      function MatTabLabel() {
        _classCallCheck(this, MatTabLabel);

        return _super27.apply(this, arguments);
      }

      return MatTabLabel;
    }(_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__["CdkPortal"]);

    MatTabLabel.ɵfac = function MatTabLabel_Factory(t) {
      return ɵMatTabLabel_BaseFactory(t || MatTabLabel);
    };

    MatTabLabel.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({
      type: MatTabLabel,
      selectors: [["", "mat-tab-label", ""], ["", "matTabLabel", ""]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]]
    });

    var ɵMatTabLabel_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetInheritedFactory"](MatTabLabel);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MatTabLabel, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"],
        args: [{
          selector: '[mat-tab-label], [matTabLabel]'
        }]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/tabs/tab.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // Boilerplate for applying mixins to MatTab.

    /**
     * \@docs-private
     */


    var MatTabBase = function MatTabBase() {
      _classCallCheck(this, MatTabBase);
    };
    /** @type {?} */


    var _MatTabMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["mixinDisabled"])(MatTabBase);
    /**
     * Used to provide a tab group to a tab without causing a circular dependency.
     * \@docs-private
     * @type {?}
     */


    var MAT_TAB_GROUP = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["InjectionToken"]('MAT_TAB_GROUP');

    var MatTab = /*#__PURE__*/function (_MatTabMixinBase2) {
      _inherits(MatTab, _MatTabMixinBase2);

      var _super28 = _createSuper(MatTab);

      /**
       * @param {?} _viewContainerRef
       * @param {?=} _closestTabGroup
       */
      function MatTab(_viewContainerRef, _closestTabGroup) {
        var _this71;

        _classCallCheck(this, MatTab);

        _this71 = _super28.call(this);
        _this71._viewContainerRef = _viewContainerRef;
        _this71._closestTabGroup = _closestTabGroup;
        /**
         * Plain text label for the tab, used when there is no template label.
         */

        _this71.textLabel = '';
        /**
         * Portal that will be the hosted content of the tab
         */

        _this71._contentPortal = null;
        /**
         * Emits whenever the internal state of the tab changes.
         */

        _this71._stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        /**
         * The relatively indexed position where 0 represents the center, negative is left, and positive
         * represents the right.
         */

        _this71.position = null;
        /**
         * The initial relatively index origin of the tab if it was created and selected after there
         * was already a selected tab. Provides context of what position the tab should originate from.
         */

        _this71.origin = null;
        /**
         * Whether the tab is currently active.
         */

        _this71.isActive = false;
        return _this71;
      }
      /**
       * Content for the tab label given by `<ng-template mat-tab-label>`.
       * @return {?}
       */


      _createClass(MatTab, [{
        key: "ngOnChanges",

        /**
         * @param {?} changes
         * @return {?}
         */
        value: function ngOnChanges(changes) {
          if (changes.hasOwnProperty('textLabel') || changes.hasOwnProperty('disabled')) {
            this._stateChanges.next();
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._stateChanges.complete();
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this._contentPortal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__["TemplatePortal"](this._explicitContent || this._implicitContent, this._viewContainerRef);
        }
      }, {
        key: "templateLabel",
        get: function get() {
          return this._templateLabel;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          // Only update the templateLabel via query if there is actually
          // a MatTabLabel found. This works around an issue where a user may have
          // manually set `templateLabel` during creation mode, which would then get clobbered
          // by `undefined` when this query resolves.
          if (value) {
            this._templateLabel = value;
          }
        }
        /**
         * \@docs-private
         * @return {?}
         */

      }, {
        key: "content",
        get: function get() {
          return this._contentPortal;
        }
      }]);

      return MatTab;
    }(_MatTabMixinBase);

    MatTab.ɵfac = function MatTab_Factory(t) {
      return new (t || MatTab)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](MAT_TAB_GROUP, 8));
    };

    MatTab.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: MatTab,
      selectors: [["mat-tab"]],
      contentQueries: function MatTab_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵcontentQuery"](dirIndex, MatTabLabel, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstaticContentQuery"](dirIndex, MatTabContent, true, _angular_core__WEBPACK_IMPORTED_MODULE_4__["TemplateRef"]);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.templateLabel = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx._explicitContent = _t.first);
        }
      },
      viewQuery: function MatTab_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstaticViewQuery"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["TemplateRef"], true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx._implicitContent = _t.first);
        }
      },
      inputs: {
        disabled: "disabled",
        textLabel: ["label", "textLabel"],
        ariaLabel: ["aria-label", "ariaLabel"],
        ariaLabelledby: ["aria-labelledby", "ariaLabelledby"]
      },
      exportAs: ["matTab"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵNgOnChangesFeature"]],
      ngContentSelectors: _c0,
      decls: 1,
      vars: 0,
      template: function MatTab_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, MatTab_ng_template_0_Template, 1, 0, "ng-template");
        }
      },
      encapsulation: 2
    });
    /** @nocollapse */

    MatTab.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewContainerRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
          args: [MAT_TAB_GROUP]
        }]
      }];
    };

    MatTab.propDecorators = {
      templateLabel: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChild"],
        args: [MatTabLabel]
      }],
      _explicitContent: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChild"],
        args: [MatTabContent, {
          read: _angular_core__WEBPACK_IMPORTED_MODULE_4__["TemplateRef"],
          "static": true
        }]
      }],
      _implicitContent: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["TemplateRef"], {
          "static": true
        }]
      }],
      textLabel: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
        args: ['label']
      }],
      ariaLabel: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
        args: ['aria-label']
      }],
      ariaLabelledby: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
        args: ['aria-labelledby']
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MatTab, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"],
        args: [{
          selector: 'mat-tab',
          template: "<!-- Create a template for the content of the <mat-tab> so that we can grab a reference to this\n    TemplateRef and use it in a Portal to render the tab content in the appropriate place in the\n    tab-group. -->\n<ng-template><ng-content></ng-content></ng-template>\n",
          inputs: ['disabled'],
          // tslint:disable-next-line:validate-decorators
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].Default,
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
          exportAs: 'matTab'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewContainerRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
            args: [MAT_TAB_GROUP]
          }]
        }];
      }, {
        textLabel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
          args: ['label']
        }],
        templateLabel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChild"],
          args: [MatTabLabel]
        }],
        _explicitContent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChild"],
          args: [MatTabContent, {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_4__["TemplateRef"],
            "static": true
          }]
        }],
        _implicitContent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
          args: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["TemplateRef"], {
            "static": true
          }]
        }],
        ariaLabel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
          args: ['aria-label']
        }],
        ariaLabelledby: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
          args: ['aria-labelledby']
        }]
      });
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/tabs/tabs-animations.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Animations used by the Material tabs.
     * \@docs-private
     * @type {?}
     */


    var matTabsAnimations = {
      /**
       * Animation translates a tab along the X axis.
       */
      translateTab: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["trigger"])('translateTab', [// Note: transitions to `none` instead of 0, because some browsers might blur the content.
      Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["state"])('center, void, left-origin-center, right-origin-center', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["style"])({
        transform: 'none'
      })), // If the tab is either on the left or right, we additionally add a `min-height` of 1px
      // in order to ensure that the element has a height before its state changes. This is
      // necessary because Chrome does seem to skip the transition in RTL mode if the element does
      // not have a static height and is not rendered. See related issue: #9465
      Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["state"])('left', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["style"])({
        transform: 'translate3d(-100%, 0, 0)',
        minHeight: '1px'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["state"])('right', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["style"])({
        transform: 'translate3d(100%, 0, 0)',
        minHeight: '1px'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["transition"])('* => left, * => right, left => center, right => center', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["animate"])('{{animationDuration}} cubic-bezier(0.35, 0, 0.25, 1)')), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["transition"])('void => left-origin-center', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["style"])({
        transform: 'translate3d(-100%, 0, 0)'
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["animate"])('{{animationDuration}} cubic-bezier(0.35, 0, 0.25, 1)')]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["transition"])('void => right-origin-center', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["style"])({
        transform: 'translate3d(100%, 0, 0)'
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["animate"])('{{animationDuration}} cubic-bezier(0.35, 0, 0.25, 1)')])])
    };
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/tabs/tab-body.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * The portal host directive for the contents of the tab.
     * \@docs-private
     */

    var MatTabBodyPortal = /*#__PURE__*/function (_angular_cdk_portal__2) {
      _inherits(MatTabBodyPortal, _angular_cdk_portal__2);

      var _super29 = _createSuper(MatTabBodyPortal);

      /**
       * @param {?} componentFactoryResolver
       * @param {?} viewContainerRef
       * @param {?} _host
       * @param {?=} _document
       */
      function MatTabBodyPortal(componentFactoryResolver, viewContainerRef, _host,
      /**
       * @deprecated `_document` parameter to be made required.
       * @breaking-change 9.0.0
       */
      _document) {
        var _this72;

        _classCallCheck(this, MatTabBodyPortal);

        _this72 = _super29.call(this, componentFactoryResolver, viewContainerRef, _document);
        _this72._host = _host;
        /**
         * Subscription to events for when the tab body begins centering.
         */

        _this72._centeringSub = rxjs__WEBPACK_IMPORTED_MODULE_7__["Subscription"].EMPTY;
        /**
         * Subscription to events for when the tab body finishes leaving from center position.
         */

        _this72._leavingSub = rxjs__WEBPACK_IMPORTED_MODULE_7__["Subscription"].EMPTY;
        return _this72;
      }
      /**
       * Set initial visibility or set up subscription for changing visibility.
       * @return {?}
       */


      _createClass(MatTabBodyPortal, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this73 = this;

          _get(_getPrototypeOf(MatTabBodyPortal.prototype), "ngOnInit", this).call(this);

          this._centeringSub = this._host._beforeCentering.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["startWith"])(this._host._isCenterPosition(this._host._position))).subscribe(
          /**
          * @param {?} isCentering
          * @return {?}
          */
          function (isCentering) {
            if (isCentering && !_this73.hasAttached()) {
              _this73.attach(_this73._host._content);
            }
          });
          this._leavingSub = this._host._afterLeavingCenter.subscribe(
          /**
          * @return {?}
          */
          function () {
            _this73.detach();
          });
        }
        /**
         * Clean up centering subscription.
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          _get(_getPrototypeOf(MatTabBodyPortal.prototype), "ngOnDestroy", this).call(this);

          this._centeringSub.unsubscribe();

          this._leavingSub.unsubscribe();
        }
      }]);

      return MatTabBodyPortal;
    }(_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__["CdkPortalOutlet"]);

    MatTabBodyPortal.ɵfac = function MatTabBodyPortal_Factory(t) {
      return new (t || MatTabBodyPortal)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ComponentFactoryResolver"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["forwardRef"])(
      /**
      * @return {?}
      */
      function () {
        return MatTabBody;
      })), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]));
    };

    MatTabBodyPortal.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({
      type: MatTabBodyPortal,
      selectors: [["", "matTabBodyHost", ""]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]]
    });
    /** @nocollapse */

    MatTabBodyPortal.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ComponentFactoryResolver"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewContainerRef"]
      }, {
        type: MatTabBody,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
          args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["forwardRef"])(
          /**
          * @return {?}
          */
          function () {
            return MatTabBody;
          })]
        }]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]]
        }]
      }];
    };
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MatTabBodyPortal, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"],
        args: [{
          selector: '[matTabBodyHost]'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ComponentFactoryResolver"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewContainerRef"]
        }, {
          type: MatTabBody,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
            args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["forwardRef"])(
            /**
            * @return {?}
            */
            function () {
              return MatTabBody;
            })]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]]
          }]
        }];
      }, null);
    })();

    if (false) {}
    /**
     * Base class with all of the `MatTabBody` functionality.
     * \@docs-private
     * @abstract
     */
    // tslint:disable-next-line:class-name


    var _MatTabBodyBase = /*#__PURE__*/function () {
      /**
       * @param {?} _elementRef
       * @param {?} _dir
       * @param {?} changeDetectorRef
       */
      function _MatTabBodyBase(_elementRef, _dir, changeDetectorRef) {
        var _this74 = this;

        _classCallCheck(this, _MatTabBodyBase);

        this._elementRef = _elementRef;
        this._dir = _dir;
        /**
         * Subscription to the directionality change observable.
         */

        this._dirChangeSubscription = rxjs__WEBPACK_IMPORTED_MODULE_7__["Subscription"].EMPTY;
        /**
         * Emits when an animation on the tab is complete.
         */

        this._translateTabComplete = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        /**
         * Event emitted when the tab begins to animate towards the center as the active tab.
         */

        this._onCentering = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        /**
         * Event emitted before the centering of the tab begins.
         */

        this._beforeCentering = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        /**
         * Event emitted before the centering of the tab begins.
         */

        this._afterLeavingCenter = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        /**
         * Event emitted when the tab completes its animation towards the center.
         */

        this._onCentered = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"](true); // Note that the default value will always be overwritten by `MatTabBody`, but we need one
        // anyway to prevent the animations module from throwing an error if the body is used on its own.

        /**
         * Duration for the tab's animation.
         */

        this.animationDuration = '500ms';

        if (_dir) {
          this._dirChangeSubscription = _dir.change.subscribe(
          /**
          * @param {?} dir
          * @return {?}
          */
          function (dir) {
            _this74._computePositionAnimationState(dir);

            changeDetectorRef.markForCheck();
          });
        } // Ensure that we get unique animation events, because the `.done` callback can get
        // invoked twice in some browsers. See https://github.com/angular/angular/issues/24084.


        this._translateTabComplete.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["distinctUntilChanged"])(
        /**
        * @param {?} x
        * @param {?} y
        * @return {?}
        */
        function (x, y) {
          return x.fromState === y.fromState && x.toState === y.toState;
        })).subscribe(
        /**
        * @param {?} event
        * @return {?}
        */
        function (event) {
          // If the transition to the center is complete, emit an event.
          if (_this74._isCenterPosition(event.toState) && _this74._isCenterPosition(_this74._position)) {
            _this74._onCentered.emit();
          }

          if (_this74._isCenterPosition(event.fromState) && !_this74._isCenterPosition(_this74._position)) {
            _this74._afterLeavingCenter.emit();
          }
        });
      }
      /**
       * The shifted index position of the tab body, where zero represents the active center tab.
       * @param {?} position
       * @return {?}
       */


      _createClass(_MatTabBodyBase, [{
        key: "ngOnInit",

        /**
         * After initialized, check if the content is centered and has an origin. If so, set the
         * special position states that transition the tab from the left or right before centering.
         * @return {?}
         */
        value: function ngOnInit() {
          if (this._position == 'center' && this.origin != null) {
            this._position = this._computePositionFromOrigin(this.origin);
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._dirChangeSubscription.unsubscribe();

          this._translateTabComplete.complete();
        }
        /**
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "_onTranslateTabStarted",
        value: function _onTranslateTabStarted(event) {
          /** @type {?} */
          var isCentering = this._isCenterPosition(event.toState);

          this._beforeCentering.emit(isCentering);

          if (isCentering) {
            this._onCentering.emit(this._elementRef.nativeElement.clientHeight);
          }
        }
        /**
         * The text direction of the containing app.
         * @return {?}
         */

      }, {
        key: "_getLayoutDirection",
        value: function _getLayoutDirection() {
          return this._dir && this._dir.value === 'rtl' ? 'rtl' : 'ltr';
        }
        /**
         * Whether the provided position state is considered center, regardless of origin.
         * @param {?} position
         * @return {?}
         */

      }, {
        key: "_isCenterPosition",
        value: function _isCenterPosition(position) {
          return position == 'center' || position == 'left-origin-center' || position == 'right-origin-center';
        }
        /**
         * Computes the position state that will be used for the tab-body animation trigger.
         * @private
         * @param {?=} dir
         * @return {?}
         */

      }, {
        key: "_computePositionAnimationState",
        value: function _computePositionAnimationState() {
          var dir = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this._getLayoutDirection();

          if (this._positionIndex < 0) {
            this._position = dir == 'ltr' ? 'left' : 'right';
          } else if (this._positionIndex > 0) {
            this._position = dir == 'ltr' ? 'right' : 'left';
          } else {
            this._position = 'center';
          }
        }
        /**
         * Computes the position state based on the specified origin position. This is used if the
         * tab is becoming visible immediately after creation.
         * @private
         * @param {?} origin
         * @return {?}
         */

      }, {
        key: "_computePositionFromOrigin",
        value: function _computePositionFromOrigin(origin) {
          /** @type {?} */
          var dir = this._getLayoutDirection();

          if (dir == 'ltr' && origin <= 0 || dir == 'rtl' && origin > 0) {
            return 'left-origin-center';
          }

          return 'right-origin-center';
        }
      }, {
        key: "position",
        set: function set(position) {
          this._positionIndex = position;

          this._computePositionAnimationState();
        }
      }]);

      return _MatTabBodyBase;
    }();

    _MatTabBodyBase.ɵfac = function _MatTabBodyBase_Factory(t) {
      return new (t || _MatTabBodyBase)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["Directionality"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]));
    };

    _MatTabBodyBase.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({
      type: _MatTabBodyBase,
      inputs: {
        animationDuration: "animationDuration",
        position: "position",
        _content: ["content", "_content"],
        origin: "origin"
      },
      outputs: {
        _onCentering: "_onCentering",
        _beforeCentering: "_beforeCentering",
        _afterLeavingCenter: "_afterLeavingCenter",
        _onCentered: "_onCentered"
      }
    });
    /** @nocollapse */

    _MatTabBodyBase.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
      }, {
        type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["Directionality"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
        }]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
      }];
    };

    _MatTabBodyBase.propDecorators = {
      _onCentering: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
      }],
      _beforeCentering: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
      }],
      _afterLeavingCenter: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
      }],
      _onCentered: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
      }],
      _content: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
        args: ['content']
      }],
      origin: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
      }],
      animationDuration: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
      }],
      position: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](_MatTabBodyBase, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
        }, {
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["Directionality"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
        }];
      }, {
        _onCentering: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }],
        _beforeCentering: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }],
        _afterLeavingCenter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }],
        _onCentered: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }],
        animationDuration: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        position: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        _content: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
          args: ['content']
        }],
        origin: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }]
      });
    })();

    if (false) {}
    /**
     * Wrapper for the contents of a tab.
     * \@docs-private
     */


    var MatTabBody = /*#__PURE__*/function (_MatTabBodyBase2) {
      _inherits(MatTabBody, _MatTabBodyBase2);

      var _super30 = _createSuper(MatTabBody);

      /**
       * @param {?} elementRef
       * @param {?} dir
       * @param {?} changeDetectorRef
       */
      function MatTabBody(elementRef, dir, changeDetectorRef) {
        _classCallCheck(this, MatTabBody);

        return _super30.call(this, elementRef, dir, changeDetectorRef);
      }

      return MatTabBody;
    }(_MatTabBodyBase);

    MatTabBody.ɵfac = function MatTabBody_Factory(t) {
      return new (t || MatTabBody)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["Directionality"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]));
    };

    MatTabBody.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: MatTabBody,
      selectors: [["mat-tab-body"]],
      viewQuery: function MatTabBody_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__["PortalHostDirective"], true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx._portalHost = _t.first);
        }
      },
      hostAttrs: [1, "mat-tab-body"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]],
      decls: 3,
      vars: 6,
      consts: [[1, "mat-tab-body-content"], ["content", ""], ["matTabBodyHost", ""]],
      template: function MatTabBody_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("@translateTab.start", function MatTabBody_Template_div_animation_translateTab_start_0_listener($event) {
            return ctx._onTranslateTabStarted($event);
          })("@translateTab.done", function MatTabBody_Template_div_animation_translateTab_done_0_listener($event) {
            return ctx._translateTabComplete.next($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, MatTabBody_ng_template_2_Template, 0, 0, "ng-template", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("@translateTab", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](3, _c2, ctx._position, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](1, _c1, ctx.animationDuration)));
        }
      },
      directives: [MatTabBodyPortal],
      styles: [".mat-tab-body-content{height:100%;overflow:auto}.mat-tab-group-dynamic-height .mat-tab-body-content{overflow:hidden}\n"],
      encapsulation: 2,
      data: {
        animation: [matTabsAnimations.translateTab]
      }
    });
    /** @nocollapse */

    MatTabBody.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
      }, {
        type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["Directionality"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
        }]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
      }];
    };

    MatTabBody.propDecorators = {
      _portalHost: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
        args: [_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__["PortalHostDirective"]]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MatTabBody, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"],
        args: [{
          selector: 'mat-tab-body',
          template: "<div class=\"mat-tab-body-content\" #content\n     [@translateTab]=\"{\n        value: _position,\n        params: {animationDuration: animationDuration}\n     }\"\n     (@translateTab.start)=\"_onTranslateTabStarted($event)\"\n     (@translateTab.done)=\"_translateTabComplete.next($event)\">\n  <ng-template matTabBodyHost></ng-template>\n</div>\n",
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
          // tslint:disable-next-line:validate-decorators
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].Default,
          animations: [matTabsAnimations.translateTab],
          host: {
            'class': 'mat-tab-body'
          },
          styles: [".mat-tab-body-content{height:100%;overflow:auto}.mat-tab-group-dynamic-height .mat-tab-body-content{overflow:hidden}\n"]
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
        }, {
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["Directionality"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
        }];
      }, {
        _portalHost: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
          args: [_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__["PortalHostDirective"]]
        }]
      });
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/tabs/tab-config.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Object that can be used to configure the default options for the tabs module.
     * @record
     */


    function MatTabsConfig() {}

    if (false) {}
    /**
     * Injection token that can be used to provide the default options the tabs module.
     * @type {?}
     */


    var MAT_TABS_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["InjectionToken"]('MAT_TABS_CONFIG');
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/tabs/tab-group.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Used to generate unique ID's for each tab component
     * @type {?}
     */

    var nextId = 0;
    /**
     * A simple change event emitted on focus or selection changes.
     */

    var MatTabChangeEvent = function MatTabChangeEvent() {
      _classCallCheck(this, MatTabChangeEvent);
    };

    if (false) {} // Boilerplate for applying mixins to MatTabGroup.

    /**
     * \@docs-private
     */


    var MatTabGroupMixinBase =
    /**
     * @param {?} _elementRef
     */
    function MatTabGroupMixinBase(_elementRef) {
      _classCallCheck(this, MatTabGroupMixinBase);

      this._elementRef = _elementRef;
    };

    if (false) {}
    /** @type {?} */


    var _MatTabGroupMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["mixinColor"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["mixinDisableRipple"])(MatTabGroupMixinBase), 'primary');
    /**
     * @record
     */


    function MatTabGroupBaseHeader() {}

    if (false) {}
    /**
     * Base class with all of the `MatTabGroupBase` functionality.
     * \@docs-private
     * @abstract
     */
    // tslint:disable-next-line:class-name


    var _MatTabGroupBase = /*#__PURE__*/function (_MatTabGroupMixinBase2) {
      _inherits(_MatTabGroupBase, _MatTabGroupMixinBase2);

      var _super31 = _createSuper(_MatTabGroupBase);

      /**
       * @param {?} elementRef
       * @param {?} _changeDetectorRef
       * @param {?=} defaultConfig
       * @param {?=} _animationMode
       */
      function _MatTabGroupBase(elementRef, _changeDetectorRef, defaultConfig, _animationMode) {
        var _this75;

        _classCallCheck(this, _MatTabGroupBase);

        _this75 = _super31.call(this, elementRef);
        _this75._changeDetectorRef = _changeDetectorRef;
        _this75._animationMode = _animationMode;
        /**
         * All of the tabs that belong to the group.
         */

        _this75._tabs = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["QueryList"]();
        /**
         * The tab index that should be selected after the content has been checked.
         */

        _this75._indexToSelect = 0;
        /**
         * Snapshot of the height of the tab body wrapper before another tab is activated.
         */

        _this75._tabBodyWrapperHeight = 0;
        /**
         * Subscription to tabs being added/removed.
         */

        _this75._tabsSubscription = rxjs__WEBPACK_IMPORTED_MODULE_7__["Subscription"].EMPTY;
        /**
         * Subscription to changes in the tab labels.
         */

        _this75._tabLabelSubscription = rxjs__WEBPACK_IMPORTED_MODULE_7__["Subscription"].EMPTY;
        _this75._dynamicHeight = false;
        _this75._selectedIndex = null;
        /**
         * Position of the tab header.
         */

        _this75.headerPosition = 'above';
        /**
         * Output to enable support for two-way binding on `[(selectedIndex)]`
         */

        _this75.selectedIndexChange = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        /**
         * Event emitted when focus has changed within a tab group.
         */

        _this75.focusChange = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        /**
         * Event emitted when the body animation has completed
         */

        _this75.animationDone = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        /**
         * Event emitted when the tab selection has changed.
         */

        _this75.selectedTabChange = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"](true);
        _this75._groupId = nextId++;
        _this75.animationDuration = defaultConfig && defaultConfig.animationDuration ? defaultConfig.animationDuration : '500ms';
        _this75.disablePagination = defaultConfig && defaultConfig.disablePagination != null ? defaultConfig.disablePagination : false;
        return _this75;
      }
      /**
       * Whether the tab group should grow to the size of the active tab.
       * @return {?}
       */


      _createClass(_MatTabGroupBase, [{
        key: "ngAfterContentChecked",

        /**
         * After the content is checked, this component knows what tabs have been defined
         * and what the selected index should be. This is where we can know exactly what position
         * each tab should be in according to the new selected index, and additionally we know how
         * a new selected tab should transition in (from the left or right).
         * @return {?}
         */
        value: function ngAfterContentChecked() {
          var _this76 = this;

          // Don't clamp the `indexToSelect` immediately in the setter because it can happen that
          // the amount of tabs changes before the actual change detection runs.

          /** @type {?} */
          var indexToSelect = this._indexToSelect = this._clampTabIndex(this._indexToSelect); // If there is a change in selected index, emit a change event. Should not trigger if
          // the selected index has not yet been initialized.


          if (this._selectedIndex != indexToSelect) {
            /** @type {?} */
            var isFirstRun = this._selectedIndex == null;

            if (!isFirstRun) {
              this.selectedTabChange.emit(this._createChangeEvent(indexToSelect));
            } // Changing these values after change detection has run
            // since the checked content may contain references to them.


            Promise.resolve().then(
            /**
            * @return {?}
            */
            function () {
              _this76._tabs.forEach(
              /**
              * @param {?} tab
              * @param {?} index
              * @return {?}
              */
              function (tab, index) {
                return tab.isActive = index === indexToSelect;
              });

              if (!isFirstRun) {
                _this76.selectedIndexChange.emit(indexToSelect);
              }
            });
          } // Setup the position for each tab and optionally setup an origin on the next selected tab.


          this._tabs.forEach(
          /**
          * @param {?} tab
          * @param {?} index
          * @return {?}
          */
          function (tab, index) {
            tab.position = index - indexToSelect; // If there is already a selected tab, then set up an origin for the next selected tab
            // if it doesn't have one already.

            if (_this76._selectedIndex != null && tab.position == 0 && !tab.origin) {
              tab.origin = indexToSelect - _this76._selectedIndex;
            }
          });

          if (this._selectedIndex !== indexToSelect) {
            this._selectedIndex = indexToSelect;

            this._changeDetectorRef.markForCheck();
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngAfterContentInit",
        value: function ngAfterContentInit() {
          var _this77 = this;

          this._subscribeToAllTabChanges();

          this._subscribeToTabLabels(); // Subscribe to changes in the amount of tabs, in order to be
          // able to re-render the content as new tabs are added or removed.


          this._tabsSubscription = this._tabs.changes.subscribe(
          /**
          * @return {?}
          */
          function () {
            /** @type {?} */
            var indexToSelect = _this77._clampTabIndex(_this77._indexToSelect); // Maintain the previously-selected tab if a new tab is added or removed and there is no
            // explicit change that selects a different tab.


            if (indexToSelect === _this77._selectedIndex) {
              /** @type {?} */
              var tabs = _this77._tabs.toArray();

              for (var i = 0; i < tabs.length; i++) {
                if (tabs[i].isActive) {
                  // Assign both to the `_indexToSelect` and `_selectedIndex` so we don't fire a changed
                  // event, otherwise the consumer may end up in an infinite loop in some edge cases like
                  // adding a tab within the `selectedIndexChange` event.
                  _this77._indexToSelect = _this77._selectedIndex = i;
                  break;
                }
              }
            }

            _this77._changeDetectorRef.markForCheck();
          });
        }
        /**
         * Listens to changes in all of the tabs.
         * @private
         * @return {?}
         */

      }, {
        key: "_subscribeToAllTabChanges",
        value: function _subscribeToAllTabChanges() {
          var _this78 = this;

          // Since we use a query with `descendants: true` to pick up the tabs, we may end up catching
          // some that are inside of nested tab groups. We filter them out manually by checking that
          // the closest group to the tab is the current one.
          this._allTabs.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["startWith"])(this._allTabs)).subscribe(
          /**
          * @param {?} tabs
          * @return {?}
          */
          function (tabs) {
            _this78._tabs.reset(tabs.filter(
            /**
            * @param {?} tab
            * @return {?}
            */
            function (tab) {
              // @breaking-change 10.0.0 Remove null check for `_closestTabGroup`
              // once it becomes a required parameter in MatTab.
              return !tab._closestTabGroup || tab._closestTabGroup === _this78;
            }));

            _this78._tabs.notifyOnChanges();
          });
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._tabs.destroy();

          this._tabsSubscription.unsubscribe();

          this._tabLabelSubscription.unsubscribe();
        }
        /**
         * Re-aligns the ink bar to the selected tab element.
         * @return {?}
         */

      }, {
        key: "realignInkBar",
        value: function realignInkBar() {
          if (this._tabHeader) {
            this._tabHeader._alignInkBarToSelectedTab();
          }
        }
        /**
         * @param {?} index
         * @return {?}
         */

      }, {
        key: "_focusChanged",
        value: function _focusChanged(index) {
          this.focusChange.emit(this._createChangeEvent(index));
        }
        /**
         * @private
         * @param {?} index
         * @return {?}
         */

      }, {
        key: "_createChangeEvent",
        value: function _createChangeEvent(index) {
          /** @type {?} */
          var event = new MatTabChangeEvent();
          event.index = index;

          if (this._tabs && this._tabs.length) {
            event.tab = this._tabs.toArray()[index];
          }

          return event;
        }
        /**
         * Subscribes to changes in the tab labels. This is needed, because the \@Input for the label is
         * on the MatTab component, whereas the data binding is inside the MatTabGroup. In order for the
         * binding to be updated, we need to subscribe to changes in it and trigger change detection
         * manually.
         * @private
         * @return {?}
         */

      }, {
        key: "_subscribeToTabLabels",
        value: function _subscribeToTabLabels() {
          var _this79 = this;

          if (this._tabLabelSubscription) {
            this._tabLabelSubscription.unsubscribe();
          }

          this._tabLabelSubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["merge"]).apply(void 0, _toConsumableArray(this._tabs.map(
          /**
          * @param {?} tab
          * @return {?}
          */
          function (tab) {
            return tab._stateChanges;
          }))).subscribe(
          /**
          * @return {?}
          */
          function () {
            return _this79._changeDetectorRef.markForCheck();
          });
        }
        /**
         * Clamps the given index to the bounds of 0 and the tabs length.
         * @private
         * @param {?} index
         * @return {?}
         */

      }, {
        key: "_clampTabIndex",
        value: function _clampTabIndex(index) {
          // Note the `|| 0`, which ensures that values like NaN can't get through
          // and which would otherwise throw the component into an infinite loop
          // (since Math.max(NaN, 0) === NaN).
          return Math.min(this._tabs.length - 1, Math.max(index || 0, 0));
        }
        /**
         * Returns a unique id for each tab label element
         * @param {?} i
         * @return {?}
         */

      }, {
        key: "_getTabLabelId",
        value: function _getTabLabelId(i) {
          return "mat-tab-label-".concat(this._groupId, "-").concat(i);
        }
        /**
         * Returns a unique id for each tab content element
         * @param {?} i
         * @return {?}
         */

      }, {
        key: "_getTabContentId",
        value: function _getTabContentId(i) {
          return "mat-tab-content-".concat(this._groupId, "-").concat(i);
        }
        /**
         * Sets the height of the body wrapper to the height of the activating tab if dynamic
         * height property is true.
         * @param {?} tabHeight
         * @return {?}
         */

      }, {
        key: "_setTabBodyWrapperHeight",
        value: function _setTabBodyWrapperHeight(tabHeight) {
          if (!this._dynamicHeight || !this._tabBodyWrapperHeight) {
            return;
          }
          /** @type {?} */


          var wrapper = this._tabBodyWrapper.nativeElement;
          wrapper.style.height = this._tabBodyWrapperHeight + 'px'; // This conditional forces the browser to paint the height so that
          // the animation to the new height can have an origin.

          if (this._tabBodyWrapper.nativeElement.offsetHeight) {
            wrapper.style.height = tabHeight + 'px';
          }
        }
        /**
         * Removes the height of the tab body wrapper.
         * @return {?}
         */

      }, {
        key: "_removeTabBodyWrapperHeight",
        value: function _removeTabBodyWrapperHeight() {
          /** @type {?} */
          var wrapper = this._tabBodyWrapper.nativeElement;
          this._tabBodyWrapperHeight = wrapper.clientHeight;
          wrapper.style.height = '';
          this.animationDone.emit();
        }
        /**
         * Handle click events, setting new selected index if appropriate.
         * @param {?} tab
         * @param {?} tabHeader
         * @param {?} index
         * @return {?}
         */

      }, {
        key: "_handleClick",
        value: function _handleClick(tab, tabHeader, index) {
          if (!tab.disabled) {
            this.selectedIndex = tabHeader.focusIndex = index;
          }
        }
        /**
         * Retrieves the tabindex for the tab.
         * @param {?} tab
         * @param {?} idx
         * @return {?}
         */

      }, {
        key: "_getTabIndex",
        value: function _getTabIndex(tab, idx) {
          if (tab.disabled) {
            return null;
          }

          return this.selectedIndex === idx ? 0 : -1;
        }
      }, {
        key: "dynamicHeight",
        get: function get() {
          return this._dynamicHeight;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._dynamicHeight = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_11__["coerceBooleanProperty"])(value);
        }
        /**
         * The index of the active tab.
         * @return {?}
         */

      }, {
        key: "selectedIndex",
        get: function get() {
          return this._selectedIndex;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._indexToSelect = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_11__["coerceNumberProperty"])(value, null);
        }
        /**
         * Duration for the tab animation. Will be normalized to milliseconds if no units are set.
         * @return {?}
         */

      }, {
        key: "animationDuration",
        get: function get() {
          return this._animationDuration;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._animationDuration = /^\d+$/.test(value) ? value + 'ms' : value;
        }
        /**
         * Background color of the tab group.
         * @return {?}
         */

      }, {
        key: "backgroundColor",
        get: function get() {
          return this._backgroundColor;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          /** @type {?} */
          var nativeElement = this._elementRef.nativeElement;
          nativeElement.classList.remove("mat-background-".concat(this.backgroundColor));

          if (value) {
            nativeElement.classList.add("mat-background-".concat(value));
          }

          this._backgroundColor = value;
        }
      }]);

      return _MatTabGroupBase;
    }(_MatTabGroupMixinBase);

    _MatTabGroupBase.ɵfac = function _MatTabGroupBase_Factory(t) {
      return new (t || _MatTabGroupBase)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](MAT_TABS_CONFIG, 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"], 8));
    };

    _MatTabGroupBase.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({
      type: _MatTabGroupBase,
      inputs: {
        headerPosition: "headerPosition",
        animationDuration: "animationDuration",
        disablePagination: "disablePagination",
        dynamicHeight: "dynamicHeight",
        selectedIndex: "selectedIndex",
        backgroundColor: "backgroundColor"
      },
      outputs: {
        selectedIndexChange: "selectedIndexChange",
        focusChange: "focusChange",
        animationDone: "animationDone",
        selectedTabChange: "selectedTabChange"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]]
    });
    /** @nocollapse */

    _MatTabGroupBase.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
          args: [MAT_TABS_CONFIG]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
        }]
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
          args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"]]
        }]
      }];
    };

    _MatTabGroupBase.propDecorators = {
      dynamicHeight: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
      }],
      selectedIndex: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
      }],
      headerPosition: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
      }],
      animationDuration: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
      }],
      disablePagination: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
      }],
      backgroundColor: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
      }],
      selectedIndexChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
      }],
      focusChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
      }],
      animationDone: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
      }],
      selectedTabChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](_MatTabGroupBase, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
            args: [MAT_TABS_CONFIG]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
            args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"]]
          }]
        }];
      }, {
        headerPosition: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        selectedIndexChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }],
        focusChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }],
        animationDone: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }],
        selectedTabChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }],
        animationDuration: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        disablePagination: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        dynamicHeight: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        selectedIndex: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        backgroundColor: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }]
      });
    })();

    if (false) {}
    /**
     * Material design tab-group component. Supports basic tab pairs (label + content) and includes
     * animated ink-bar, keyboard navigation, and screen reader.
     * See: https://material.io/design/components/tabs.html
     */


    var MatTabGroup = /*#__PURE__*/function (_MatTabGroupBase2) {
      _inherits(MatTabGroup, _MatTabGroupBase2);

      var _super32 = _createSuper(MatTabGroup);

      /**
       * @param {?} elementRef
       * @param {?} changeDetectorRef
       * @param {?=} defaultConfig
       * @param {?=} animationMode
       */
      function MatTabGroup(elementRef, changeDetectorRef, defaultConfig, animationMode) {
        _classCallCheck(this, MatTabGroup);

        return _super32.call(this, elementRef, changeDetectorRef, defaultConfig, animationMode);
      }

      return MatTabGroup;
    }(_MatTabGroupBase);

    MatTabGroup.ɵfac = function MatTabGroup_Factory(t) {
      return new (t || MatTabGroup)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](MAT_TABS_CONFIG, 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"], 8));
    };

    MatTabGroup.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: MatTabGroup,
      selectors: [["mat-tab-group"]],
      contentQueries: function MatTabGroup_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵcontentQuery"](dirIndex, MatTab, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx._allTabs = _t);
        }
      },
      viewQuery: function MatTabGroup_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c3, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c4, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx._tabBodyWrapper = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx._tabHeader = _t.first);
        }
      },
      hostAttrs: [1, "mat-tab-group"],
      hostVars: 4,
      hostBindings: function MatTabGroup_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("mat-tab-group-dynamic-height", ctx.dynamicHeight)("mat-tab-group-inverted-header", ctx.headerPosition === "below");
        }
      },
      inputs: {
        color: "color",
        disableRipple: "disableRipple"
      },
      exportAs: ["matTabGroup"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([{
        provide: MAT_TAB_GROUP,
        useExisting: MatTabGroup
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]],
      decls: 6,
      vars: 7,
      consts: [[3, "selectedIndex", "disableRipple", "disablePagination", "indexFocused", "selectFocusedIndex"], ["tabHeader", ""], ["class", "mat-tab-label mat-focus-indicator", "role", "tab", "matTabLabelWrapper", "", "mat-ripple", "", "cdkMonitorElementFocus", "", 3, "id", "mat-tab-label-active", "disabled", "matRippleDisabled", "click", 4, "ngFor", "ngForOf"], [1, "mat-tab-body-wrapper"], ["tabBodyWrapper", ""], ["role", "tabpanel", 3, "id", "mat-tab-body-active", "content", "position", "origin", "animationDuration", "_onCentered", "_onCentering", 4, "ngFor", "ngForOf"], ["role", "tab", "matTabLabelWrapper", "", "mat-ripple", "", "cdkMonitorElementFocus", "", 1, "mat-tab-label", "mat-focus-indicator", 3, "id", "disabled", "matRippleDisabled", "click"], [1, "mat-tab-label-content"], [3, "ngIf"], [3, "cdkPortalOutlet"], ["role", "tabpanel", 3, "id", "content", "position", "origin", "animationDuration", "_onCentered", "_onCentering"]],
      template: function MatTabGroup_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-tab-header", 0, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("indexFocused", function MatTabGroup_Template_mat_tab_header_indexFocused_0_listener($event) {
            return ctx._focusChanged($event);
          })("selectFocusedIndex", function MatTabGroup_Template_mat_tab_header_selectFocusedIndex_0_listener($event) {
            return ctx.selectedIndex = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, MatTabGroup_div_2_Template, 4, 14, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 3, 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, MatTabGroup_mat_tab_body_5_Template, 1, 8, "mat-tab-body", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("selectedIndex", ctx.selectedIndex || 0)("disableRipple", ctx.disableRipple)("disablePagination", ctx.disablePagination);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx._tabs);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("_mat-animation-noopable", ctx._animationMode === "NoopAnimations");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx._tabs);
        }
      },
      directives: function directives() {
        return [MatTabHeader, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], MatTabLabelWrapper, _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatRipple"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["CdkMonitorFocus"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__["CdkPortalOutlet"], MatTabBody];
      },
      styles: [".mat-tab-group{display:flex;flex-direction:column}.mat-tab-group.mat-tab-group-inverted-header{flex-direction:column-reverse}.mat-tab-label{height:48px;padding:0 24px;cursor:pointer;box-sizing:border-box;opacity:.6;min-width:160px;text-align:center;display:inline-flex;justify-content:center;align-items:center;white-space:nowrap;position:relative}.mat-tab-label:focus{outline:none}.mat-tab-label:focus:not(.mat-tab-disabled){opacity:1}.cdk-high-contrast-active .mat-tab-label:focus{outline:dotted 2px;outline-offset:-2px}.mat-tab-label.mat-tab-disabled{cursor:default}.cdk-high-contrast-active .mat-tab-label.mat-tab-disabled{opacity:.5}.mat-tab-label .mat-tab-label-content{display:inline-flex;justify-content:center;align-items:center;white-space:nowrap}.cdk-high-contrast-active .mat-tab-label{opacity:1}@media(max-width: 599px){.mat-tab-label{padding:0 12px}}@media(max-width: 959px){.mat-tab-label{padding:0 12px}}.mat-tab-group[mat-stretch-tabs]>.mat-tab-header .mat-tab-label{flex-basis:0;flex-grow:1}.mat-tab-body-wrapper{position:relative;overflow:hidden;display:flex;transition:height 500ms cubic-bezier(0.35, 0, 0.25, 1)}._mat-animation-noopable.mat-tab-body-wrapper{transition:none;animation:none}.mat-tab-body{top:0;left:0;right:0;bottom:0;position:absolute;display:block;overflow:hidden;flex-basis:100%}.mat-tab-body.mat-tab-body-active{position:relative;overflow-x:hidden;overflow-y:auto;z-index:1;flex-grow:1}.mat-tab-group.mat-tab-group-dynamic-height .mat-tab-body.mat-tab-body-active{overflow-y:hidden}\n"],
      encapsulation: 2
    });
    /** @nocollapse */

    MatTabGroup.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
          args: [MAT_TABS_CONFIG]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
        }]
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
          args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"]]
        }]
      }];
    };

    MatTabGroup.propDecorators = {
      _allTabs: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChildren"],
        args: [MatTab, {
          descendants: true
        }]
      }],
      _tabBodyWrapper: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
        args: ['tabBodyWrapper']
      }],
      _tabHeader: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
        args: ['tabHeader']
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MatTabGroup, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"],
        args: [{
          selector: 'mat-tab-group',
          exportAs: 'matTabGroup',
          template: "<mat-tab-header #tabHeader\n               [selectedIndex]=\"selectedIndex || 0\"\n               [disableRipple]=\"disableRipple\"\n               [disablePagination]=\"disablePagination\"\n               (indexFocused)=\"_focusChanged($event)\"\n               (selectFocusedIndex)=\"selectedIndex = $event\">\n  <div class=\"mat-tab-label mat-focus-indicator\" role=\"tab\" matTabLabelWrapper mat-ripple cdkMonitorElementFocus\n       *ngFor=\"let tab of _tabs; let i = index\"\n       [id]=\"_getTabLabelId(i)\"\n       [attr.tabIndex]=\"_getTabIndex(tab, i)\"\n       [attr.aria-posinset]=\"i + 1\"\n       [attr.aria-setsize]=\"_tabs.length\"\n       [attr.aria-controls]=\"_getTabContentId(i)\"\n       [attr.aria-selected]=\"selectedIndex == i\"\n       [attr.aria-label]=\"tab.ariaLabel || null\"\n       [attr.aria-labelledby]=\"(!tab.ariaLabel && tab.ariaLabelledby) ? tab.ariaLabelledby : null\"\n       [class.mat-tab-label-active]=\"selectedIndex == i\"\n       [disabled]=\"tab.disabled\"\n       [matRippleDisabled]=\"tab.disabled || disableRipple\"\n       (click)=\"_handleClick(tab, tabHeader, i)\">\n\n\n    <div class=\"mat-tab-label-content\">\n      <!-- If there is a label template, use it. -->\n      <ng-template [ngIf]=\"tab.templateLabel\">\n        <ng-template [cdkPortalOutlet]=\"tab.templateLabel\"></ng-template>\n      </ng-template>\n\n      <!-- If there is not a label template, fall back to the text label. -->\n      <ng-template [ngIf]=\"!tab.templateLabel\">{{tab.textLabel}}</ng-template>\n    </div>\n  </div>\n</mat-tab-header>\n\n<div\n  class=\"mat-tab-body-wrapper\"\n  [class._mat-animation-noopable]=\"_animationMode === 'NoopAnimations'\"\n  #tabBodyWrapper>\n  <mat-tab-body role=\"tabpanel\"\n               *ngFor=\"let tab of _tabs; let i = index\"\n               [id]=\"_getTabContentId(i)\"\n               [attr.aria-labelledby]=\"_getTabLabelId(i)\"\n               [class.mat-tab-body-active]=\"selectedIndex == i\"\n               [content]=\"tab.content!\"\n               [position]=\"tab.position!\"\n               [origin]=\"tab.origin\"\n               [animationDuration]=\"animationDuration\"\n               (_onCentered)=\"_removeTabBodyWrapperHeight()\"\n               (_onCentering)=\"_setTabBodyWrapperHeight($event)\">\n  </mat-tab-body>\n</div>\n",
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
          // tslint:disable-next-line:validate-decorators
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].Default,
          inputs: ['color', 'disableRipple'],
          providers: [{
            provide: MAT_TAB_GROUP,
            useExisting: MatTabGroup
          }],
          host: {
            'class': 'mat-tab-group',
            '[class.mat-tab-group-dynamic-height]': 'dynamicHeight',
            '[class.mat-tab-group-inverted-header]': 'headerPosition === "below"'
          },
          styles: [".mat-tab-group{display:flex;flex-direction:column}.mat-tab-group.mat-tab-group-inverted-header{flex-direction:column-reverse}.mat-tab-label{height:48px;padding:0 24px;cursor:pointer;box-sizing:border-box;opacity:.6;min-width:160px;text-align:center;display:inline-flex;justify-content:center;align-items:center;white-space:nowrap;position:relative}.mat-tab-label:focus{outline:none}.mat-tab-label:focus:not(.mat-tab-disabled){opacity:1}.cdk-high-contrast-active .mat-tab-label:focus{outline:dotted 2px;outline-offset:-2px}.mat-tab-label.mat-tab-disabled{cursor:default}.cdk-high-contrast-active .mat-tab-label.mat-tab-disabled{opacity:.5}.mat-tab-label .mat-tab-label-content{display:inline-flex;justify-content:center;align-items:center;white-space:nowrap}.cdk-high-contrast-active .mat-tab-label{opacity:1}@media(max-width: 599px){.mat-tab-label{padding:0 12px}}@media(max-width: 959px){.mat-tab-label{padding:0 12px}}.mat-tab-group[mat-stretch-tabs]>.mat-tab-header .mat-tab-label{flex-basis:0;flex-grow:1}.mat-tab-body-wrapper{position:relative;overflow:hidden;display:flex;transition:height 500ms cubic-bezier(0.35, 0, 0.25, 1)}._mat-animation-noopable.mat-tab-body-wrapper{transition:none;animation:none}.mat-tab-body{top:0;left:0;right:0;bottom:0;position:absolute;display:block;overflow:hidden;flex-basis:100%}.mat-tab-body.mat-tab-body-active{position:relative;overflow-x:hidden;overflow-y:auto;z-index:1;flex-grow:1}.mat-tab-group.mat-tab-group-dynamic-height .mat-tab-body.mat-tab-body-active{overflow-y:hidden}\n"]
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
            args: [MAT_TABS_CONFIG]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
            args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"]]
          }]
        }];
      }, {
        _allTabs: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChildren"],
          args: [MatTab, {
            descendants: true
          }]
        }],
        _tabBodyWrapper: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
          args: ['tabBodyWrapper']
        }],
        _tabHeader: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
          args: ['tabHeader']
        }]
      });
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/tabs/tab-label-wrapper.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // Boilerplate for applying mixins to MatTabLabelWrapper.

    /**
     * \@docs-private
     */


    var MatTabLabelWrapperBase = function MatTabLabelWrapperBase() {
      _classCallCheck(this, MatTabLabelWrapperBase);
    };
    /** @type {?} */


    var _MatTabLabelWrapperMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["mixinDisabled"])(MatTabLabelWrapperBase);
    /**
     * Used in the `mat-tab-group` view to display tab labels.
     * \@docs-private
     */


    var MatTabLabelWrapper = /*#__PURE__*/function (_MatTabLabelWrapperMi) {
      _inherits(MatTabLabelWrapper, _MatTabLabelWrapperMi);

      var _super33 = _createSuper(MatTabLabelWrapper);

      /**
       * @param {?} elementRef
       */
      function MatTabLabelWrapper(elementRef) {
        var _this80;

        _classCallCheck(this, MatTabLabelWrapper);

        _this80 = _super33.call(this);
        _this80.elementRef = elementRef;
        return _this80;
      }
      /**
       * Sets focus on the wrapper element
       * @return {?}
       */


      _createClass(MatTabLabelWrapper, [{
        key: "focus",
        value: function focus() {
          this.elementRef.nativeElement.focus();
        }
        /**
         * @return {?}
         */

      }, {
        key: "getOffsetLeft",
        value: function getOffsetLeft() {
          return this.elementRef.nativeElement.offsetLeft;
        }
        /**
         * @return {?}
         */

      }, {
        key: "getOffsetWidth",
        value: function getOffsetWidth() {
          return this.elementRef.nativeElement.offsetWidth;
        }
      }]);

      return MatTabLabelWrapper;
    }(_MatTabLabelWrapperMixinBase);

    MatTabLabelWrapper.ɵfac = function MatTabLabelWrapper_Factory(t) {
      return new (t || MatTabLabelWrapper)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]));
    };

    MatTabLabelWrapper.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({
      type: MatTabLabelWrapper,
      selectors: [["", "matTabLabelWrapper", ""]],
      hostVars: 3,
      hostBindings: function MatTabLabelWrapper_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("aria-disabled", !!ctx.disabled);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("mat-tab-disabled", ctx.disabled);
        }
      },
      inputs: {
        disabled: "disabled"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]]
    });
    /** @nocollapse */

    MatTabLabelWrapper.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
      }];
    };
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MatTabLabelWrapper, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"],
        args: [{
          selector: '[matTabLabelWrapper]',
          inputs: ['disabled'],
          host: {
            '[class.mat-tab-disabled]': 'disabled',
            '[attr.aria-disabled]': '!!disabled'
          }
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
        }];
      }, null);
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/tabs/paginated-tab-header.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Config used to bind passive event listeners
     * @type {?}
     */


    var passiveEventListenerOptions =
    /** @type {?} */
    Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_13__["normalizePassiveListenerOptions"])({
      passive: true
    });
    /**
     * The distance in pixels that will be overshot when scrolling a tab label into view. This helps
     * provide a small affordance to the label next to it.
     * @type {?}
     */

    var EXAGGERATED_OVERSCROLL = 60;
    /**
     * Amount of milliseconds to wait before starting to scroll the header automatically.
     * Set a little conservatively in order to handle fake events dispatched on touch devices.
     * @type {?}
     */

    var HEADER_SCROLL_DELAY = 650;
    /**
     * Interval in milliseconds at which to scroll the header
     * while the user is holding their pointer.
     * @type {?}
     */

    var HEADER_SCROLL_INTERVAL = 100;
    /**
     * Base class for a tab header that supported pagination.
     * \@docs-private
     * @abstract
     */

    var MatPaginatedTabHeader = /*#__PURE__*/function () {
      /**
       * @param {?} _elementRef
       * @param {?} _changeDetectorRef
       * @param {?} _viewportRuler
       * @param {?} _dir
       * @param {?} _ngZone
       * @param {?=} _platform
       * @param {?=} _animationMode
       */
      function MatPaginatedTabHeader(_elementRef, _changeDetectorRef, _viewportRuler, _dir, _ngZone, _platform, _animationMode) {
        var _this81 = this;

        _classCallCheck(this, MatPaginatedTabHeader);

        this._elementRef = _elementRef;
        this._changeDetectorRef = _changeDetectorRef;
        this._viewportRuler = _viewportRuler;
        this._dir = _dir;
        this._ngZone = _ngZone;
        this._platform = _platform;
        this._animationMode = _animationMode;
        /**
         * The distance in pixels that the tab labels should be translated to the left.
         */

        this._scrollDistance = 0;
        /**
         * Whether the header should scroll to the selected index after the view has been checked.
         */

        this._selectedIndexChanged = false;
        /**
         * Emits when the component is destroyed.
         */

        this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        /**
         * Whether the controls for pagination should be displayed
         */

        this._showPaginationControls = false;
        /**
         * Whether the tab list can be scrolled more towards the end of the tab label list.
         */

        this._disableScrollAfter = true;
        /**
         * Whether the tab list can be scrolled more towards the beginning of the tab label list.
         */

        this._disableScrollBefore = true;
        /**
         * Stream that will stop the automated scrolling.
         */

        this._stopScrolling = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        /**
         * Whether pagination should be disabled. This can be used to avoid unnecessary
         * layout recalculations if it's known that pagination won't be required.
         */

        this.disablePagination = false;
        this._selectedIndex = 0;
        /**
         * Event emitted when the option is selected.
         */

        this.selectFocusedIndex = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        /**
         * Event emitted when a label is focused.
         */

        this.indexFocused = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"](); // Bind the `mouseleave` event on the outside since it doesn't change anything in the view.

        _ngZone.runOutsideAngular(
        /**
        * @return {?}
        */
        function () {
          Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["fromEvent"])(_elementRef.nativeElement, 'mouseleave').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["takeUntil"])(_this81._destroyed)).subscribe(
          /**
          * @return {?}
          */
          function () {
            _this81._stopInterval();
          });
        });
      }
      /**
       * The index of the active tab.
       * @return {?}
       */


      _createClass(MatPaginatedTabHeader, [{
        key: "ngAfterViewInit",

        /**
         * @return {?}
         */
        value: function ngAfterViewInit() {
          var _this82 = this;

          // We need to handle these events manually, because we want to bind passive event listeners.
          Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["fromEvent"])(this._previousPaginator.nativeElement, 'touchstart', passiveEventListenerOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["takeUntil"])(this._destroyed)).subscribe(
          /**
          * @return {?}
          */
          function () {
            _this82._handlePaginatorPress('before');
          });
          Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["fromEvent"])(this._nextPaginator.nativeElement, 'touchstart', passiveEventListenerOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["takeUntil"])(this._destroyed)).subscribe(
          /**
          * @return {?}
          */
          function () {
            _this82._handlePaginatorPress('after');
          });
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngAfterContentInit",
        value: function ngAfterContentInit() {
          var _this83 = this;

          /** @type {?} */
          var dirChange = this._dir ? this._dir.change : Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["of"])(null);
          /** @type {?} */

          var resize = this._viewportRuler.change(150);
          /** @type {?} */


          var realign =
          /**
          * @return {?}
          */
          function realign() {
            _this83.updatePagination();

            _this83._alignInkBarToSelectedTab();
          };

          this._keyManager = new _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["FocusKeyManager"](this._items).withHorizontalOrientation(this._getLayoutDirection()).withWrap();

          this._keyManager.updateActiveItem(0); // Defer the first call in order to allow for slower browsers to lay out the elements.
          // This helps in cases where the user lands directly on a page with paginated tabs.


          typeof requestAnimationFrame !== 'undefined' ? requestAnimationFrame(realign) : realign(); // On dir change or window resize, realign the ink bar and update the orientation of
          // the key manager if the direction has changed.

          Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["merge"])(dirChange, resize, this._items.changes).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["takeUntil"])(this._destroyed)).subscribe(
          /**
          * @return {?}
          */
          function () {
            // We need to defer this to give the browser some time to recalculate the element dimensions.
            Promise.resolve().then(realign);

            _this83._keyManager.withHorizontalOrientation(_this83._getLayoutDirection());
          }); // If there is a change in the focus key manager we need to emit the `indexFocused`
          // event in order to provide a public event that notifies about focus changes. Also we realign
          // the tabs container by scrolling the new focused tab into the visible section.

          this._keyManager.change.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["takeUntil"])(this._destroyed)).subscribe(
          /**
          * @param {?} newFocusIndex
          * @return {?}
          */
          function (newFocusIndex) {
            _this83.indexFocused.emit(newFocusIndex);

            _this83._setTabFocus(newFocusIndex);
          });
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngAfterContentChecked",
        value: function ngAfterContentChecked() {
          // If the number of tab labels have changed, check if scrolling should be enabled
          if (this._tabLabelCount != this._items.length) {
            this.updatePagination();
            this._tabLabelCount = this._items.length;

            this._changeDetectorRef.markForCheck();
          } // If the selected index has changed, scroll to the label and check if the scrolling controls
          // should be disabled.


          if (this._selectedIndexChanged) {
            this._scrollToLabel(this._selectedIndex);

            this._checkScrollingControls();

            this._alignInkBarToSelectedTab();

            this._selectedIndexChanged = false;

            this._changeDetectorRef.markForCheck();
          } // If the scroll distance has been changed (tab selected, focused, scroll controls activated),
          // then translate the header to reflect this.


          if (this._scrollDistanceChanged) {
            this._updateTabScrollPosition();

            this._scrollDistanceChanged = false;

            this._changeDetectorRef.markForCheck();
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._destroyed.next();

          this._destroyed.complete();

          this._stopScrolling.complete();
        }
        /**
         * Handles keyboard events on the header.
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "_handleKeydown",
        value: function _handleKeydown(event) {
          // We don't handle any key bindings with a modifier key.
          if (Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_14__["hasModifierKey"])(event)) {
            return;
          }

          switch (event.keyCode) {
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_14__["HOME"]:
              this._keyManager.setFirstItemActive();

              event.preventDefault();
              break;

            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_14__["END"]:
              this._keyManager.setLastItemActive();

              event.preventDefault();
              break;

            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_14__["ENTER"]:
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_14__["SPACE"]:
              if (this.focusIndex !== this.selectedIndex) {
                this.selectFocusedIndex.emit(this.focusIndex);

                this._itemSelected(event);
              }

              break;

            default:
              this._keyManager.onKeydown(event);

          }
        }
        /**
         * Callback for when the MutationObserver detects that the content has changed.
         * @return {?}
         */

      }, {
        key: "_onContentChanges",
        value: function _onContentChanges() {
          var _this84 = this;

          /** @type {?} */
          var textContent = this._elementRef.nativeElement.textContent; // We need to diff the text content of the header, because the MutationObserver callback
          // will fire even if the text content didn't change which is inefficient and is prone
          // to infinite loops if a poorly constructed expression is passed in (see #14249).

          if (textContent !== this._currentTextContent) {
            this._currentTextContent = textContent || ''; // The content observer runs outside the `NgZone` by default, which
            // means that we need to bring the callback back in ourselves.

            this._ngZone.run(
            /**
            * @return {?}
            */
            function () {
              _this84.updatePagination();

              _this84._alignInkBarToSelectedTab();

              _this84._changeDetectorRef.markForCheck();
            });
          }
        }
        /**
         * Updates the view whether pagination should be enabled or not.
         *
         * WARNING: Calling this method can be very costly in terms of performance. It should be called
         * as infrequently as possible from outside of the Tabs component as it causes a reflow of the
         * page.
         * @return {?}
         */

      }, {
        key: "updatePagination",
        value: function updatePagination() {
          this._checkPaginationEnabled();

          this._checkScrollingControls();

          this._updateTabScrollPosition();
        }
        /**
         * Tracks which element has focus; used for keyboard navigation
         * @return {?}
         */

      }, {
        key: "_isValidIndex",

        /**
         * Determines if an index is valid.  If the tabs are not ready yet, we assume that the user is
         * providing a valid index and return true.
         * @param {?} index
         * @return {?}
         */
        value: function _isValidIndex(index) {
          if (!this._items) {
            return true;
          }
          /** @type {?} */


          var tab = this._items ? this._items.toArray()[index] : null;
          return !!tab && !tab.disabled;
        }
        /**
         * Sets focus on the HTML element for the label wrapper and scrolls it into the view if
         * scrolling is enabled.
         * @param {?} tabIndex
         * @return {?}
         */

      }, {
        key: "_setTabFocus",
        value: function _setTabFocus(tabIndex) {
          if (this._showPaginationControls) {
            this._scrollToLabel(tabIndex);
          }

          if (this._items && this._items.length) {
            this._items.toArray()[tabIndex].focus(); // Do not let the browser manage scrolling to focus the element, this will be handled
            // by using translation. In LTR, the scroll left should be 0. In RTL, the scroll width
            // should be the full width minus the offset width.

            /** @type {?} */


            var containerEl = this._tabListContainer.nativeElement;
            /** @type {?} */

            var dir = this._getLayoutDirection();

            if (dir == 'ltr') {
              containerEl.scrollLeft = 0;
            } else {
              containerEl.scrollLeft = containerEl.scrollWidth - containerEl.offsetWidth;
            }
          }
        }
        /**
         * The layout direction of the containing app.
         * @return {?}
         */

      }, {
        key: "_getLayoutDirection",
        value: function _getLayoutDirection() {
          return this._dir && this._dir.value === 'rtl' ? 'rtl' : 'ltr';
        }
        /**
         * Performs the CSS transformation on the tab list that will cause the list to scroll.
         * @return {?}
         */

      }, {
        key: "_updateTabScrollPosition",
        value: function _updateTabScrollPosition() {
          if (this.disablePagination) {
            return;
          }
          /** @type {?} */


          var scrollDistance = this.scrollDistance;
          /** @type {?} */

          var platform = this._platform;
          /** @type {?} */

          var translateX = this._getLayoutDirection() === 'ltr' ? -scrollDistance : scrollDistance; // Don't use `translate3d` here because we don't want to create a new layer. A new layer
          // seems to cause flickering and overflow in Internet Explorer. For example, the ink bar
          // and ripples will exceed the boundaries of the visible tab bar.
          // See: https://github.com/angular/components/issues/10276
          // We round the `transform` here, because transforms with sub-pixel precision cause some
          // browsers to blur the content of the element.

          this._tabList.nativeElement.style.transform = "translateX(".concat(Math.round(translateX), "px)"); // Setting the `transform` on IE will change the scroll offset of the parent, causing the
          // position to be thrown off in some cases. We have to reset it ourselves to ensure that
          // it doesn't get thrown off. Note that we scope it only to IE and Edge, because messing
          // with the scroll position throws off Chrome 71+ in RTL mode (see #14689).
          // @breaking-change 9.0.0 Remove null check for `platform` after it can no longer be undefined.

          if (platform && (platform.TRIDENT || platform.EDGE)) {
            this._tabListContainer.nativeElement.scrollLeft = 0;
          }
        }
        /**
         * Sets the distance in pixels that the tab header should be transformed in the X-axis.
         * @return {?}
         */

      }, {
        key: "_scrollHeader",

        /**
         * Moves the tab list in the 'before' or 'after' direction (towards the beginning of the list or
         * the end of the list, respectively). The distance to scroll is computed to be a third of the
         * length of the tab list view window.
         *
         * This is an expensive call that forces a layout reflow to compute box and scroll metrics and
         * should be called sparingly.
         * @param {?} direction
         * @return {?}
         */
        value: function _scrollHeader(direction) {
          /** @type {?} */
          var viewLength = this._tabListContainer.nativeElement.offsetWidth; // Move the scroll distance one-third the length of the tab list's viewport.

          /** @type {?} */

          var scrollAmount = (direction == 'before' ? -1 : 1) * viewLength / 3;
          return this._scrollTo(this._scrollDistance + scrollAmount);
        }
        /**
         * Handles click events on the pagination arrows.
         * @param {?} direction
         * @return {?}
         */

      }, {
        key: "_handlePaginatorClick",
        value: function _handlePaginatorClick(direction) {
          this._stopInterval();

          this._scrollHeader(direction);
        }
        /**
         * Moves the tab list such that the desired tab label (marked by index) is moved into view.
         *
         * This is an expensive call that forces a layout reflow to compute box and scroll metrics and
         * should be called sparingly.
         * @param {?} labelIndex
         * @return {?}
         */

      }, {
        key: "_scrollToLabel",
        value: function _scrollToLabel(labelIndex) {
          if (this.disablePagination) {
            return;
          }
          /** @type {?} */


          var selectedLabel = this._items ? this._items.toArray()[labelIndex] : null;

          if (!selectedLabel) {
            return;
          } // The view length is the visible width of the tab labels.

          /** @type {?} */


          var viewLength = this._tabListContainer.nativeElement.offsetWidth;
          var _selectedLabel$elemen = selectedLabel.elementRef.nativeElement,
              offsetLeft = _selectedLabel$elemen.offsetLeft,
              offsetWidth = _selectedLabel$elemen.offsetWidth;
          /** @type {?} */

          var labelBeforePos;
          /** @type {?} */

          var labelAfterPos;

          if (this._getLayoutDirection() == 'ltr') {
            labelBeforePos = offsetLeft;
            labelAfterPos = labelBeforePos + offsetWidth;
          } else {
            labelAfterPos = this._tabList.nativeElement.offsetWidth - offsetLeft;
            labelBeforePos = labelAfterPos - offsetWidth;
          }
          /** @type {?} */


          var beforeVisiblePos = this.scrollDistance;
          /** @type {?} */

          var afterVisiblePos = this.scrollDistance + viewLength;

          if (labelBeforePos < beforeVisiblePos) {
            // Scroll header to move label to the before direction
            this.scrollDistance -= beforeVisiblePos - labelBeforePos + EXAGGERATED_OVERSCROLL;
          } else if (labelAfterPos > afterVisiblePos) {
            // Scroll header to move label to the after direction
            this.scrollDistance += labelAfterPos - afterVisiblePos + EXAGGERATED_OVERSCROLL;
          }
        }
        /**
         * Evaluate whether the pagination controls should be displayed. If the scroll width of the
         * tab list is wider than the size of the header container, then the pagination controls should
         * be shown.
         *
         * This is an expensive call that forces a layout reflow to compute box and scroll metrics and
         * should be called sparingly.
         * @return {?}
         */

      }, {
        key: "_checkPaginationEnabled",
        value: function _checkPaginationEnabled() {
          if (this.disablePagination) {
            this._showPaginationControls = false;
          } else {
            /** @type {?} */
            var isEnabled = this._tabList.nativeElement.scrollWidth > this._elementRef.nativeElement.offsetWidth;

            if (!isEnabled) {
              this.scrollDistance = 0;
            }

            if (isEnabled !== this._showPaginationControls) {
              this._changeDetectorRef.markForCheck();
            }

            this._showPaginationControls = isEnabled;
          }
        }
        /**
         * Evaluate whether the before and after controls should be enabled or disabled.
         * If the header is at the beginning of the list (scroll distance is equal to 0) then disable the
         * before button. If the header is at the end of the list (scroll distance is equal to the
         * maximum distance we can scroll), then disable the after button.
         *
         * This is an expensive call that forces a layout reflow to compute box and scroll metrics and
         * should be called sparingly.
         * @return {?}
         */

      }, {
        key: "_checkScrollingControls",
        value: function _checkScrollingControls() {
          if (this.disablePagination) {
            this._disableScrollAfter = this._disableScrollBefore = true;
          } else {
            // Check if the pagination arrows should be activated.
            this._disableScrollBefore = this.scrollDistance == 0;
            this._disableScrollAfter = this.scrollDistance == this._getMaxScrollDistance();

            this._changeDetectorRef.markForCheck();
          }
        }
        /**
         * Determines what is the maximum length in pixels that can be set for the scroll distance. This
         * is equal to the difference in width between the tab list container and tab header container.
         *
         * This is an expensive call that forces a layout reflow to compute box and scroll metrics and
         * should be called sparingly.
         * @return {?}
         */

      }, {
        key: "_getMaxScrollDistance",
        value: function _getMaxScrollDistance() {
          /** @type {?} */
          var lengthOfTabList = this._tabList.nativeElement.scrollWidth;
          /** @type {?} */

          var viewLength = this._tabListContainer.nativeElement.offsetWidth;
          return lengthOfTabList - viewLength || 0;
        }
        /**
         * Tells the ink-bar to align itself to the current label wrapper
         * @return {?}
         */

      }, {
        key: "_alignInkBarToSelectedTab",
        value: function _alignInkBarToSelectedTab() {
          /** @type {?} */
          var selectedItem = this._items && this._items.length ? this._items.toArray()[this.selectedIndex] : null;
          /** @type {?} */

          var selectedLabelWrapper = selectedItem ? selectedItem.elementRef.nativeElement : null;

          if (selectedLabelWrapper) {
            this._inkBar.alignToElement(selectedLabelWrapper);
          } else {
            this._inkBar.hide();
          }
        }
        /**
         * Stops the currently-running paginator interval.
         * @return {?}
         */

      }, {
        key: "_stopInterval",
        value: function _stopInterval() {
          this._stopScrolling.next();
        }
        /**
         * Handles the user pressing down on one of the paginators.
         * Starts scrolling the header after a certain amount of time.
         * @param {?} direction In which direction the paginator should be scrolled.
         * @param {?=} mouseEvent
         * @return {?}
         */

      }, {
        key: "_handlePaginatorPress",
        value: function _handlePaginatorPress(direction, mouseEvent) {
          var _this85 = this;

          // Don't start auto scrolling for right mouse button clicks. Note that we shouldn't have to
          // null check the `button`, but we do it so we don't break tests that use fake events.
          if (mouseEvent && mouseEvent.button != null && mouseEvent.button !== 0) {
            return;
          } // Avoid overlapping timers.


          this._stopInterval(); // Start a timer after the delay and keep firing based on the interval.


          Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["timer"])(HEADER_SCROLL_DELAY, HEADER_SCROLL_INTERVAL) // Keep the timer going until something tells it to stop or the component is destroyed.
          .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["takeUntil"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["merge"])(this._stopScrolling, this._destroyed))).subscribe(
          /**
          * @return {?}
          */
          function () {
            var _this85$_scrollHeader = _this85._scrollHeader(direction),
                maxScrollDistance = _this85$_scrollHeader.maxScrollDistance,
                distance = _this85$_scrollHeader.distance; // Stop the timer if we've reached the start or the end.


            if (distance === 0 || distance >= maxScrollDistance) {
              _this85._stopInterval();
            }
          });
        }
        /**
         * Scrolls the header to a given position.
         * @private
         * @param {?} position Position to which to scroll.
         * @return {?} Information on the current scroll distance and the maximum.
         */

      }, {
        key: "_scrollTo",
        value: function _scrollTo(position) {
          if (this.disablePagination) {
            return {
              maxScrollDistance: 0,
              distance: 0
            };
          }
          /** @type {?} */


          var maxScrollDistance = this._getMaxScrollDistance();

          this._scrollDistance = Math.max(0, Math.min(maxScrollDistance, position)); // Mark that the scroll distance has changed so that after the view is checked, the CSS
          // transformation can move the header.

          this._scrollDistanceChanged = true;

          this._checkScrollingControls();

          return {
            maxScrollDistance: maxScrollDistance,
            distance: this._scrollDistance
          };
        }
      }, {
        key: "selectedIndex",
        get: function get() {
          return this._selectedIndex;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          value = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_11__["coerceNumberProperty"])(value);

          if (this._selectedIndex != value) {
            this._selectedIndexChanged = true;
            this._selectedIndex = value;

            if (this._keyManager) {
              this._keyManager.updateActiveItem(value);
            }
          }
        }
      }, {
        key: "focusIndex",
        get: function get() {
          return this._keyManager ?
          /** @type {?} */
          this._keyManager.activeItemIndex : 0;
        }
        /**
         * When the focus index is set, we must manually send focus to the correct label
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          if (!this._isValidIndex(value) || this.focusIndex === value || !this._keyManager) {
            return;
          }

          this._keyManager.setActiveItem(value);
        }
      }, {
        key: "scrollDistance",
        get: function get() {
          return this._scrollDistance;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._scrollTo(value);
        }
      }]);

      return MatPaginatedTabHeader;
    }();

    MatPaginatedTabHeader.ɵfac = function MatPaginatedTabHeader_Factory(t) {
      return new (t || MatPaginatedTabHeader)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__["ViewportRuler"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["Directionality"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_13__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"], 8));
    };

    MatPaginatedTabHeader.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({
      type: MatPaginatedTabHeader,
      inputs: {
        disablePagination: "disablePagination"
      }
    });
    /** @nocollapse */

    MatPaginatedTabHeader.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
      }, {
        type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__["ViewportRuler"]
      }, {
        type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["Directionality"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
        }]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]
      }, {
        type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_13__["Platform"]
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
          args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"]]
        }]
      }];
    };

    MatPaginatedTabHeader.propDecorators = {
      disablePagination: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MatPaginatedTabHeader, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
        }, {
          type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__["ViewportRuler"]
        }, {
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["Directionality"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]
        }, {
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_13__["Platform"]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
            args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"]]
          }]
        }];
      }, {
        disablePagination: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }]
      });
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/tabs/tab-header.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Base class with all of the `MatTabHeader` functionality.
     * \@docs-private
     * @abstract
     */
    // tslint:disable-next-line:class-name


    var _MatTabHeaderBase = /*#__PURE__*/function (_MatPaginatedTabHeade) {
      _inherits(_MatTabHeaderBase, _MatPaginatedTabHeade);

      var _super34 = _createSuper(_MatTabHeaderBase);

      /**
       * @param {?} elementRef
       * @param {?} changeDetectorRef
       * @param {?} viewportRuler
       * @param {?} dir
       * @param {?} ngZone
       * @param {?} platform
       * @param {?=} animationMode
       */
      function _MatTabHeaderBase(elementRef, changeDetectorRef, viewportRuler, dir, ngZone, platform, // @breaking-change 9.0.0 `_animationMode` parameter to be made required.
      animationMode) {
        var _this86;

        _classCallCheck(this, _MatTabHeaderBase);

        _this86 = _super34.call(this, elementRef, changeDetectorRef, viewportRuler, dir, ngZone, platform, animationMode);
        _this86._disableRipple = false;
        return _this86;
      }
      /**
       * Whether the ripple effect is disabled or not.
       * @return {?}
       */


      _createClass(_MatTabHeaderBase, [{
        key: "_itemSelected",

        /**
         * @protected
         * @param {?} event
         * @return {?}
         */
        value: function _itemSelected(event) {
          event.preventDefault();
        }
      }, {
        key: "disableRipple",
        get: function get() {
          return this._disableRipple;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._disableRipple = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_11__["coerceBooleanProperty"])(value);
        }
      }]);

      return _MatTabHeaderBase;
    }(MatPaginatedTabHeader);

    _MatTabHeaderBase.ɵfac = function _MatTabHeaderBase_Factory(t) {
      return new (t || _MatTabHeaderBase)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__["ViewportRuler"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["Directionality"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_13__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"], 8));
    };

    _MatTabHeaderBase.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({
      type: _MatTabHeaderBase,
      inputs: {
        disableRipple: "disableRipple"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]]
    });
    /** @nocollapse */

    _MatTabHeaderBase.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
      }, {
        type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__["ViewportRuler"]
      }, {
        type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["Directionality"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
        }]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]
      }, {
        type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_13__["Platform"]
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
          args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"]]
        }]
      }];
    };

    _MatTabHeaderBase.propDecorators = {
      disableRipple: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](_MatTabHeaderBase, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
        }, {
          type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__["ViewportRuler"]
        }, {
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["Directionality"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]
        }, {
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_13__["Platform"]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
            args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"]]
          }]
        }];
      }, {
        disableRipple: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }]
      });
    })();

    if (false) {}
    /**
     * The header of the tab group which displays a list of all the tabs in the tab group. Includes
     * an ink bar that follows the currently selected tab. When the tabs list's width exceeds the
     * width of the header container, then arrows will be displayed to allow the user to scroll
     * left and right across the header.
     * \@docs-private
     */


    var MatTabHeader = /*#__PURE__*/function (_MatTabHeaderBase2) {
      _inherits(MatTabHeader, _MatTabHeaderBase2);

      var _super35 = _createSuper(MatTabHeader);

      /**
       * @param {?} elementRef
       * @param {?} changeDetectorRef
       * @param {?} viewportRuler
       * @param {?} dir
       * @param {?} ngZone
       * @param {?} platform
       * @param {?=} animationMode
       */
      function MatTabHeader(elementRef, changeDetectorRef, viewportRuler, dir, ngZone, platform, // @breaking-change 9.0.0 `_animationMode` parameter to be made required.
      animationMode) {
        _classCallCheck(this, MatTabHeader);

        return _super35.call(this, elementRef, changeDetectorRef, viewportRuler, dir, ngZone, platform, animationMode);
      }

      return MatTabHeader;
    }(_MatTabHeaderBase);

    MatTabHeader.ɵfac = function MatTabHeader_Factory(t) {
      return new (t || MatTabHeader)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__["ViewportRuler"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["Directionality"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_13__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"], 8));
    };

    MatTabHeader.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: MatTabHeader,
      selectors: [["mat-tab-header"]],
      contentQueries: function MatTabHeader_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵcontentQuery"](dirIndex, MatTabLabelWrapper, false);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx._items = _t);
        }
      },
      viewQuery: function MatTabHeader_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstaticViewQuery"](MatInkBar, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstaticViewQuery"](_c5, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstaticViewQuery"](_c6, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c7, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c8, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx._inkBar = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx._tabListContainer = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx._tabList = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx._nextPaginator = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx._previousPaginator = _t.first);
        }
      },
      hostAttrs: [1, "mat-tab-header"],
      hostVars: 4,
      hostBindings: function MatTabHeader_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("mat-tab-header-pagination-controls-enabled", ctx._showPaginationControls)("mat-tab-header-rtl", ctx._getLayoutDirection() == "rtl");
        }
      },
      inputs: {
        selectedIndex: "selectedIndex"
      },
      outputs: {
        selectFocusedIndex: "selectFocusedIndex",
        indexFocused: "indexFocused"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]],
      ngContentSelectors: _c0,
      decls: 13,
      vars: 8,
      consts: [["aria-hidden", "true", "mat-ripple", "", 1, "mat-tab-header-pagination", "mat-tab-header-pagination-before", "mat-elevation-z4", 3, "matRippleDisabled", "click", "mousedown", "touchend"], ["previousPaginator", ""], [1, "mat-tab-header-pagination-chevron"], [1, "mat-tab-label-container", 3, "keydown"], ["tabListContainer", ""], ["role", "tablist", 1, "mat-tab-list", 3, "cdkObserveContent"], ["tabList", ""], [1, "mat-tab-labels"], ["aria-hidden", "true", "mat-ripple", "", 1, "mat-tab-header-pagination", "mat-tab-header-pagination-after", "mat-elevation-z4", 3, "matRippleDisabled", "mousedown", "click", "touchend"], ["nextPaginator", ""]],
      template: function MatTabHeader_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MatTabHeader_Template_div_click_0_listener() {
            return ctx._handlePaginatorClick("before");
          })("mousedown", function MatTabHeader_Template_div_mousedown_0_listener($event) {
            return ctx._handlePaginatorPress("before", $event);
          })("touchend", function MatTabHeader_Template_div_touchend_0_listener() {
            return ctx._stopInterval();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 3, 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("keydown", function MatTabHeader_Template_div_keydown_3_listener($event) {
            return ctx._handleKeydown($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 5, 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("cdkObserveContent", function MatTabHeader_Template_div_cdkObserveContent_5_listener() {
            return ctx._onContentChanges();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojection"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "mat-ink-bar");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 8, 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("mousedown", function MatTabHeader_Template_div_mousedown_10_listener($event) {
            return ctx._handlePaginatorPress("after", $event);
          })("click", function MatTabHeader_Template_div_click_10_listener() {
            return ctx._handlePaginatorClick("after");
          })("touchend", function MatTabHeader_Template_div_touchend_10_listener() {
            return ctx._stopInterval();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("mat-tab-header-pagination-disabled", ctx._disableScrollBefore);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matRippleDisabled", ctx._disableScrollBefore || ctx.disableRipple);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("_mat-animation-noopable", ctx._animationMode === "NoopAnimations");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("mat-tab-header-pagination-disabled", ctx._disableScrollAfter);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matRippleDisabled", ctx._disableScrollAfter || ctx.disableRipple);
        }
      },
      directives: [_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatRipple"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_1__["CdkObserveContent"], MatInkBar],
      styles: [".mat-tab-header{display:flex;overflow:hidden;position:relative;flex-shrink:0}.mat-tab-header-pagination{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:relative;display:none;justify-content:center;align-items:center;min-width:32px;cursor:pointer;z-index:2;-webkit-tap-highlight-color:transparent;touch-action:none}.mat-tab-header-pagination-controls-enabled .mat-tab-header-pagination{display:flex}.mat-tab-header-pagination-before,.mat-tab-header-rtl .mat-tab-header-pagination-after{padding-left:4px}.mat-tab-header-pagination-before .mat-tab-header-pagination-chevron,.mat-tab-header-rtl .mat-tab-header-pagination-after .mat-tab-header-pagination-chevron{transform:rotate(-135deg)}.mat-tab-header-rtl .mat-tab-header-pagination-before,.mat-tab-header-pagination-after{padding-right:4px}.mat-tab-header-rtl .mat-tab-header-pagination-before .mat-tab-header-pagination-chevron,.mat-tab-header-pagination-after .mat-tab-header-pagination-chevron{transform:rotate(45deg)}.mat-tab-header-pagination-chevron{border-style:solid;border-width:2px 2px 0 0;content:\"\";height:8px;width:8px}.mat-tab-header-pagination-disabled{box-shadow:none;cursor:default}.mat-tab-list{flex-grow:1;position:relative;transition:transform 500ms cubic-bezier(0.35, 0, 0.25, 1)}.mat-ink-bar{position:absolute;bottom:0;height:2px;transition:500ms cubic-bezier(0.35, 0, 0.25, 1)}._mat-animation-noopable.mat-ink-bar{transition:none;animation:none}.mat-tab-group-inverted-header .mat-ink-bar{bottom:auto;top:0}.cdk-high-contrast-active .mat-ink-bar{outline:solid 2px;height:0}.mat-tab-labels{display:flex}[mat-align-tabs=center]>.mat-tab-header .mat-tab-labels{justify-content:center}[mat-align-tabs=end]>.mat-tab-header .mat-tab-labels{justify-content:flex-end}.mat-tab-label-container{display:flex;flex-grow:1;overflow:hidden;z-index:1}._mat-animation-noopable.mat-tab-list{transition:none;animation:none}.mat-tab-label{height:48px;padding:0 24px;cursor:pointer;box-sizing:border-box;opacity:.6;min-width:160px;text-align:center;display:inline-flex;justify-content:center;align-items:center;white-space:nowrap;position:relative}.mat-tab-label:focus{outline:none}.mat-tab-label:focus:not(.mat-tab-disabled){opacity:1}.cdk-high-contrast-active .mat-tab-label:focus{outline:dotted 2px;outline-offset:-2px}.mat-tab-label.mat-tab-disabled{cursor:default}.cdk-high-contrast-active .mat-tab-label.mat-tab-disabled{opacity:.5}.mat-tab-label .mat-tab-label-content{display:inline-flex;justify-content:center;align-items:center;white-space:nowrap}.cdk-high-contrast-active .mat-tab-label{opacity:1}@media(max-width: 599px){.mat-tab-label{min-width:72px}}\n"],
      encapsulation: 2
    });
    /** @nocollapse */

    MatTabHeader.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
      }, {
        type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__["ViewportRuler"]
      }, {
        type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["Directionality"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
        }]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]
      }, {
        type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_13__["Platform"]
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
          args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"]]
        }]
      }];
    };

    MatTabHeader.propDecorators = {
      _items: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChildren"],
        args: [MatTabLabelWrapper, {
          descendants: false
        }]
      }],
      _inkBar: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
        args: [MatInkBar, {
          "static": true
        }]
      }],
      _tabListContainer: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
        args: ['tabListContainer', {
          "static": true
        }]
      }],
      _tabList: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
        args: ['tabList', {
          "static": true
        }]
      }],
      _nextPaginator: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
        args: ['nextPaginator']
      }],
      _previousPaginator: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
        args: ['previousPaginator']
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MatTabHeader, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"],
        args: [{
          selector: 'mat-tab-header',
          template: "<div class=\"mat-tab-header-pagination mat-tab-header-pagination-before mat-elevation-z4\"\n     #previousPaginator\n     aria-hidden=\"true\"\n     mat-ripple [matRippleDisabled]=\"_disableScrollBefore || disableRipple\"\n     [class.mat-tab-header-pagination-disabled]=\"_disableScrollBefore\"\n     (click)=\"_handlePaginatorClick('before')\"\n     (mousedown)=\"_handlePaginatorPress('before', $event)\"\n     (touchend)=\"_stopInterval()\">\n  <div class=\"mat-tab-header-pagination-chevron\"></div>\n</div>\n\n<div class=\"mat-tab-label-container\" #tabListContainer (keydown)=\"_handleKeydown($event)\">\n  <div\n    #tabList\n    class=\"mat-tab-list\"\n    [class._mat-animation-noopable]=\"_animationMode === 'NoopAnimations'\"\n    role=\"tablist\"\n    (cdkObserveContent)=\"_onContentChanges()\">\n    <div class=\"mat-tab-labels\">\n      <ng-content></ng-content>\n    </div>\n    <mat-ink-bar></mat-ink-bar>\n  </div>\n</div>\n\n<div class=\"mat-tab-header-pagination mat-tab-header-pagination-after mat-elevation-z4\"\n     #nextPaginator\n     aria-hidden=\"true\"\n     mat-ripple [matRippleDisabled]=\"_disableScrollAfter || disableRipple\"\n     [class.mat-tab-header-pagination-disabled]=\"_disableScrollAfter\"\n     (mousedown)=\"_handlePaginatorPress('after', $event)\"\n     (click)=\"_handlePaginatorClick('after')\"\n     (touchend)=\"_stopInterval()\">\n  <div class=\"mat-tab-header-pagination-chevron\"></div>\n</div>\n",
          inputs: ['selectedIndex'],
          outputs: ['selectFocusedIndex', 'indexFocused'],
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
          // tslint:disable-next-line:validate-decorators
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].Default,
          host: {
            'class': 'mat-tab-header',
            '[class.mat-tab-header-pagination-controls-enabled]': '_showPaginationControls',
            '[class.mat-tab-header-rtl]': "_getLayoutDirection() == 'rtl'"
          },
          styles: [".mat-tab-header{display:flex;overflow:hidden;position:relative;flex-shrink:0}.mat-tab-header-pagination{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:relative;display:none;justify-content:center;align-items:center;min-width:32px;cursor:pointer;z-index:2;-webkit-tap-highlight-color:transparent;touch-action:none}.mat-tab-header-pagination-controls-enabled .mat-tab-header-pagination{display:flex}.mat-tab-header-pagination-before,.mat-tab-header-rtl .mat-tab-header-pagination-after{padding-left:4px}.mat-tab-header-pagination-before .mat-tab-header-pagination-chevron,.mat-tab-header-rtl .mat-tab-header-pagination-after .mat-tab-header-pagination-chevron{transform:rotate(-135deg)}.mat-tab-header-rtl .mat-tab-header-pagination-before,.mat-tab-header-pagination-after{padding-right:4px}.mat-tab-header-rtl .mat-tab-header-pagination-before .mat-tab-header-pagination-chevron,.mat-tab-header-pagination-after .mat-tab-header-pagination-chevron{transform:rotate(45deg)}.mat-tab-header-pagination-chevron{border-style:solid;border-width:2px 2px 0 0;content:\"\";height:8px;width:8px}.mat-tab-header-pagination-disabled{box-shadow:none;cursor:default}.mat-tab-list{flex-grow:1;position:relative;transition:transform 500ms cubic-bezier(0.35, 0, 0.25, 1)}.mat-ink-bar{position:absolute;bottom:0;height:2px;transition:500ms cubic-bezier(0.35, 0, 0.25, 1)}._mat-animation-noopable.mat-ink-bar{transition:none;animation:none}.mat-tab-group-inverted-header .mat-ink-bar{bottom:auto;top:0}.cdk-high-contrast-active .mat-ink-bar{outline:solid 2px;height:0}.mat-tab-labels{display:flex}[mat-align-tabs=center]>.mat-tab-header .mat-tab-labels{justify-content:center}[mat-align-tabs=end]>.mat-tab-header .mat-tab-labels{justify-content:flex-end}.mat-tab-label-container{display:flex;flex-grow:1;overflow:hidden;z-index:1}._mat-animation-noopable.mat-tab-list{transition:none;animation:none}.mat-tab-label{height:48px;padding:0 24px;cursor:pointer;box-sizing:border-box;opacity:.6;min-width:160px;text-align:center;display:inline-flex;justify-content:center;align-items:center;white-space:nowrap;position:relative}.mat-tab-label:focus{outline:none}.mat-tab-label:focus:not(.mat-tab-disabled){opacity:1}.cdk-high-contrast-active .mat-tab-label:focus{outline:dotted 2px;outline-offset:-2px}.mat-tab-label.mat-tab-disabled{cursor:default}.cdk-high-contrast-active .mat-tab-label.mat-tab-disabled{opacity:.5}.mat-tab-label .mat-tab-label-content{display:inline-flex;justify-content:center;align-items:center;white-space:nowrap}.cdk-high-contrast-active .mat-tab-label{opacity:1}@media(max-width: 599px){.mat-tab-label{min-width:72px}}\n"]
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
        }, {
          type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__["ViewportRuler"]
        }, {
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["Directionality"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]
        }, {
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_13__["Platform"]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
            args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"]]
          }]
        }];
      }, {
        _items: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChildren"],
          args: [MatTabLabelWrapper, {
            descendants: false
          }]
        }],
        _inkBar: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
          args: [MatInkBar, {
            "static": true
          }]
        }],
        _tabListContainer: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
          args: ['tabListContainer', {
            "static": true
          }]
        }],
        _tabList: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
          args: ['tabList', {
            "static": true
          }]
        }],
        _nextPaginator: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
          args: ['nextPaginator']
        }],
        _previousPaginator: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
          args: ['previousPaginator']
        }]
      });
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/tabs/tab-nav-bar/tab-nav-bar.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Base class with all of the `MatTabNav` functionality.
     * \@docs-private
     * @abstract
     */
    // tslint:disable-next-line:class-name


    var _MatTabNavBase = /*#__PURE__*/function (_MatPaginatedTabHeade2) {
      _inherits(_MatTabNavBase, _MatPaginatedTabHeade2);

      var _super36 = _createSuper(_MatTabNavBase);

      /**
       * @param {?} elementRef
       * @param {?} dir
       * @param {?} ngZone
       * @param {?} changeDetectorRef
       * @param {?} viewportRuler
       * @param {?=} platform
       * @param {?=} animationMode
       */
      function _MatTabNavBase(elementRef, dir, ngZone, changeDetectorRef, viewportRuler,
      /**
       * @deprecated @breaking-change 9.0.0 `platform` parameter to become required.
       */
      platform, animationMode) {
        var _this87;

        _classCallCheck(this, _MatTabNavBase);

        _this87 = _super36.call(this, elementRef, changeDetectorRef, viewportRuler, dir, ngZone, platform, animationMode);
        _this87._disableRipple = false;
        /**
         * Theme color of the nav bar.
         */

        _this87.color = 'primary';
        return _this87;
      }
      /**
       * Background color of the tab nav.
       * @return {?}
       */


      _createClass(_MatTabNavBase, [{
        key: "_itemSelected",

        /**
         * @protected
         * @return {?}
         */
        value: function _itemSelected() {// noop
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngAfterContentInit",
        value: function ngAfterContentInit() {
          var _this88 = this;

          // We need this to run before the `changes` subscription in parent to ensure that the
          // selectedIndex is up-to-date by the time the super class starts looking for it.
          this._items.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["startWith"])(null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["takeUntil"])(this._destroyed)).subscribe(
          /**
          * @return {?}
          */
          function () {
            _this88.updateActiveLink();
          });

          _get(_getPrototypeOf(_MatTabNavBase.prototype), "ngAfterContentInit", this).call(this);
        }
        /**
         * Notifies the component that the active link has been changed.
         * \@breaking-change 8.0.0 `element` parameter to be removed.
         * @param {?=} _element
         * @return {?}
         */

      }, {
        key: "updateActiveLink",
        value: function updateActiveLink(_element) {
          if (!this._items) {
            return;
          }
          /** @type {?} */


          var items = this._items.toArray();

          for (var i = 0; i < items.length; i++) {
            if (items[i].active) {
              this.selectedIndex = i;

              this._changeDetectorRef.markForCheck();

              return;
            }
          } // The ink bar should hide itself if no items are active.


          this.selectedIndex = -1;

          this._inkBar.hide();
        }
      }, {
        key: "backgroundColor",
        get: function get() {
          return this._backgroundColor;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          /** @type {?} */
          var classList = this._elementRef.nativeElement.classList;
          classList.remove("mat-background-".concat(this.backgroundColor));

          if (value) {
            classList.add("mat-background-".concat(value));
          }

          this._backgroundColor = value;
        }
        /**
         * Whether the ripple effect is disabled or not.
         * @return {?}
         */

      }, {
        key: "disableRipple",
        get: function get() {
          return this._disableRipple;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._disableRipple = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_11__["coerceBooleanProperty"])(value);
        }
      }]);

      return _MatTabNavBase;
    }(MatPaginatedTabHeader);

    _MatTabNavBase.ɵfac = function _MatTabNavBase_Factory(t) {
      return new (t || _MatTabNavBase)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["Directionality"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__["ViewportRuler"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_13__["Platform"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"], 8));
    };

    _MatTabNavBase.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({
      type: _MatTabNavBase,
      inputs: {
        color: "color",
        backgroundColor: "backgroundColor",
        disableRipple: "disableRipple"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]]
    });
    /** @nocollapse */

    _MatTabNavBase.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
      }, {
        type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["Directionality"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
        }]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
      }, {
        type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__["ViewportRuler"]
      }, {
        type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_13__["Platform"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
        }]
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
          args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"]]
        }]
      }];
    };

    _MatTabNavBase.propDecorators = {
      backgroundColor: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
      }],
      disableRipple: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
      }],
      color: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](_MatTabNavBase, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
        }, {
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["Directionality"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
        }, {
          type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__["ViewportRuler"]
        }, {
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_13__["Platform"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
            args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"]]
          }]
        }];
      }, {
        color: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        backgroundColor: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        disableRipple: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }]
      });
    })();

    if (false) {}
    /**
     * Navigation component matching the styles of the tab group header.
     * Provides anchored navigation with animated ink bar.
     */


    var MatTabNav = /*#__PURE__*/function (_MatTabNavBase2) {
      _inherits(MatTabNav, _MatTabNavBase2);

      var _super37 = _createSuper(MatTabNav);

      /**
       * @param {?} elementRef
       * @param {?} dir
       * @param {?} ngZone
       * @param {?} changeDetectorRef
       * @param {?} viewportRuler
       * @param {?=} platform
       * @param {?=} animationMode
       */
      function MatTabNav(elementRef, dir, ngZone, changeDetectorRef, viewportRuler,
      /**
       * @deprecated @breaking-change 9.0.0 `platform` parameter to become required.
       */
      platform, animationMode) {
        _classCallCheck(this, MatTabNav);

        return _super37.call(this, elementRef, dir, ngZone, changeDetectorRef, viewportRuler, platform, animationMode);
      }

      return MatTabNav;
    }(_MatTabNavBase);

    MatTabNav.ɵfac = function MatTabNav_Factory(t) {
      return new (t || MatTabNav)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["Directionality"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__["ViewportRuler"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_13__["Platform"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"], 8));
    };

    MatTabNav.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: MatTabNav,
      selectors: [["", "mat-tab-nav-bar", ""]],
      contentQueries: function MatTabNav_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵcontentQuery"](dirIndex, MatTabLink, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx._items = _t);
        }
      },
      viewQuery: function MatTabNav_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstaticViewQuery"](MatInkBar, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstaticViewQuery"](_c5, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstaticViewQuery"](_c6, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c7, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c8, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx._inkBar = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx._tabListContainer = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx._tabList = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx._nextPaginator = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx._previousPaginator = _t.first);
        }
      },
      hostAttrs: [1, "mat-tab-nav-bar", "mat-tab-header"],
      hostVars: 10,
      hostBindings: function MatTabNav_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("mat-tab-header-pagination-controls-enabled", ctx._showPaginationControls)("mat-tab-header-rtl", ctx._getLayoutDirection() == "rtl")("mat-primary", ctx.color !== "warn" && ctx.color !== "accent")("mat-accent", ctx.color === "accent")("mat-warn", ctx.color === "warn");
        }
      },
      inputs: {
        color: "color"
      },
      exportAs: ["matTabNavBar", "matTabNav"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]],
      attrs: _c9,
      ngContentSelectors: _c0,
      decls: 13,
      vars: 8,
      consts: [["aria-hidden", "true", "mat-ripple", "", 1, "mat-tab-header-pagination", "mat-tab-header-pagination-before", "mat-elevation-z4", 3, "matRippleDisabled", "click", "mousedown", "touchend"], ["previousPaginator", ""], [1, "mat-tab-header-pagination-chevron"], [1, "mat-tab-link-container", 3, "keydown"], ["tabListContainer", ""], [1, "mat-tab-list", 3, "cdkObserveContent"], ["tabList", ""], [1, "mat-tab-links"], ["aria-hidden", "true", "mat-ripple", "", 1, "mat-tab-header-pagination", "mat-tab-header-pagination-after", "mat-elevation-z4", 3, "matRippleDisabled", "mousedown", "click", "touchend"], ["nextPaginator", ""]],
      template: function MatTabNav_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MatTabNav_Template_div_click_0_listener() {
            return ctx._handlePaginatorClick("before");
          })("mousedown", function MatTabNav_Template_div_mousedown_0_listener($event) {
            return ctx._handlePaginatorPress("before", $event);
          })("touchend", function MatTabNav_Template_div_touchend_0_listener() {
            return ctx._stopInterval();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 3, 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("keydown", function MatTabNav_Template_div_keydown_3_listener($event) {
            return ctx._handleKeydown($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 5, 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("cdkObserveContent", function MatTabNav_Template_div_cdkObserveContent_5_listener() {
            return ctx._onContentChanges();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojection"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "mat-ink-bar");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 8, 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("mousedown", function MatTabNav_Template_div_mousedown_10_listener($event) {
            return ctx._handlePaginatorPress("after", $event);
          })("click", function MatTabNav_Template_div_click_10_listener() {
            return ctx._handlePaginatorClick("after");
          })("touchend", function MatTabNav_Template_div_touchend_10_listener() {
            return ctx._stopInterval();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("mat-tab-header-pagination-disabled", ctx._disableScrollBefore);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matRippleDisabled", ctx._disableScrollBefore || ctx.disableRipple);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("_mat-animation-noopable", ctx._animationMode === "NoopAnimations");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("mat-tab-header-pagination-disabled", ctx._disableScrollAfter);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matRippleDisabled", ctx._disableScrollAfter || ctx.disableRipple);
        }
      },
      directives: [_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatRipple"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_1__["CdkObserveContent"], MatInkBar],
      styles: [".mat-tab-header{display:flex;overflow:hidden;position:relative;flex-shrink:0}.mat-tab-header-pagination{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:relative;display:none;justify-content:center;align-items:center;min-width:32px;cursor:pointer;z-index:2;-webkit-tap-highlight-color:transparent;touch-action:none}.mat-tab-header-pagination-controls-enabled .mat-tab-header-pagination{display:flex}.mat-tab-header-pagination-before,.mat-tab-header-rtl .mat-tab-header-pagination-after{padding-left:4px}.mat-tab-header-pagination-before .mat-tab-header-pagination-chevron,.mat-tab-header-rtl .mat-tab-header-pagination-after .mat-tab-header-pagination-chevron{transform:rotate(-135deg)}.mat-tab-header-rtl .mat-tab-header-pagination-before,.mat-tab-header-pagination-after{padding-right:4px}.mat-tab-header-rtl .mat-tab-header-pagination-before .mat-tab-header-pagination-chevron,.mat-tab-header-pagination-after .mat-tab-header-pagination-chevron{transform:rotate(45deg)}.mat-tab-header-pagination-chevron{border-style:solid;border-width:2px 2px 0 0;content:\"\";height:8px;width:8px}.mat-tab-header-pagination-disabled{box-shadow:none;cursor:default}.mat-tab-list{flex-grow:1;position:relative;transition:transform 500ms cubic-bezier(0.35, 0, 0.25, 1)}.mat-tab-links{display:flex}[mat-align-tabs=center]>.mat-tab-link-container .mat-tab-links{justify-content:center}[mat-align-tabs=end]>.mat-tab-link-container .mat-tab-links{justify-content:flex-end}.mat-ink-bar{position:absolute;bottom:0;height:2px;transition:500ms cubic-bezier(0.35, 0, 0.25, 1)}._mat-animation-noopable.mat-ink-bar{transition:none;animation:none}.mat-tab-group-inverted-header .mat-ink-bar{bottom:auto;top:0}.cdk-high-contrast-active .mat-ink-bar{outline:solid 2px;height:0}.mat-tab-link-container{display:flex;flex-grow:1;overflow:hidden;z-index:1}.mat-tab-link{height:48px;padding:0 24px;cursor:pointer;box-sizing:border-box;opacity:.6;min-width:160px;text-align:center;display:inline-flex;justify-content:center;align-items:center;white-space:nowrap;vertical-align:top;text-decoration:none;position:relative;overflow:hidden;-webkit-tap-highlight-color:transparent}.mat-tab-link:focus{outline:none}.mat-tab-link:focus:not(.mat-tab-disabled){opacity:1}.cdk-high-contrast-active .mat-tab-link:focus{outline:dotted 2px;outline-offset:-2px}.mat-tab-link.mat-tab-disabled{cursor:default}.cdk-high-contrast-active .mat-tab-link.mat-tab-disabled{opacity:.5}.mat-tab-link .mat-tab-label-content{display:inline-flex;justify-content:center;align-items:center;white-space:nowrap}.cdk-high-contrast-active .mat-tab-link{opacity:1}[mat-stretch-tabs] .mat-tab-link{flex-basis:0;flex-grow:1}.mat-tab-link.mat-tab-disabled{pointer-events:none}@media(max-width: 599px){.mat-tab-link{min-width:72px}}\n"],
      encapsulation: 2
    });
    /** @nocollapse */

    MatTabNav.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
      }, {
        type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["Directionality"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
        }]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
      }, {
        type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__["ViewportRuler"]
      }, {
        type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_13__["Platform"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
        }]
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
          args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"]]
        }]
      }];
    };

    MatTabNav.propDecorators = {
      _items: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChildren"],
        args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["forwardRef"])(
        /**
        * @return {?}
        */
        function () {
          return MatTabLink;
        }), {
          descendants: true
        }]
      }],
      _inkBar: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
        args: [MatInkBar, {
          "static": true
        }]
      }],
      _tabListContainer: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
        args: ['tabListContainer', {
          "static": true
        }]
      }],
      _tabList: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
        args: ['tabList', {
          "static": true
        }]
      }],
      _nextPaginator: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
        args: ['nextPaginator']
      }],
      _previousPaginator: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
        args: ['previousPaginator']
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MatTabNav, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"],
        args: [{
          selector: '[mat-tab-nav-bar]',
          exportAs: 'matTabNavBar, matTabNav',
          inputs: ['color'],
          template: "<div class=\"mat-tab-header-pagination mat-tab-header-pagination-before mat-elevation-z4\"\n     #previousPaginator\n     aria-hidden=\"true\"\n     mat-ripple [matRippleDisabled]=\"_disableScrollBefore || disableRipple\"\n     [class.mat-tab-header-pagination-disabled]=\"_disableScrollBefore\"\n     (click)=\"_handlePaginatorClick('before')\"\n     (mousedown)=\"_handlePaginatorPress('before', $event)\"\n     (touchend)=\"_stopInterval()\">\n  <div class=\"mat-tab-header-pagination-chevron\"></div>\n</div>\n\n<div class=\"mat-tab-link-container\" #tabListContainer (keydown)=\"_handleKeydown($event)\">\n  <div\n    class=\"mat-tab-list\"\n    [class._mat-animation-noopable]=\"_animationMode === 'NoopAnimations'\"\n    #tabList\n    (cdkObserveContent)=\"_onContentChanges()\">\n    <div class=\"mat-tab-links\">\n      <ng-content></ng-content>\n    </div>\n    <mat-ink-bar></mat-ink-bar>\n  </div>\n</div>\n\n<div class=\"mat-tab-header-pagination mat-tab-header-pagination-after mat-elevation-z4\"\n     #nextPaginator\n     aria-hidden=\"true\"\n     mat-ripple [matRippleDisabled]=\"_disableScrollAfter || disableRipple\"\n     [class.mat-tab-header-pagination-disabled]=\"_disableScrollAfter\"\n     (mousedown)=\"_handlePaginatorPress('after', $event)\"\n     (click)=\"_handlePaginatorClick('after')\"\n     (touchend)=\"_stopInterval()\">\n  <div class=\"mat-tab-header-pagination-chevron\"></div>\n</div>\n",
          host: {
            'class': 'mat-tab-nav-bar mat-tab-header',
            '[class.mat-tab-header-pagination-controls-enabled]': '_showPaginationControls',
            '[class.mat-tab-header-rtl]': "_getLayoutDirection() == 'rtl'",
            '[class.mat-primary]': 'color !== "warn" && color !== "accent"',
            '[class.mat-accent]': 'color === "accent"',
            '[class.mat-warn]': 'color === "warn"'
          },
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
          // tslint:disable-next-line:validate-decorators
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].Default,
          styles: [".mat-tab-header{display:flex;overflow:hidden;position:relative;flex-shrink:0}.mat-tab-header-pagination{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:relative;display:none;justify-content:center;align-items:center;min-width:32px;cursor:pointer;z-index:2;-webkit-tap-highlight-color:transparent;touch-action:none}.mat-tab-header-pagination-controls-enabled .mat-tab-header-pagination{display:flex}.mat-tab-header-pagination-before,.mat-tab-header-rtl .mat-tab-header-pagination-after{padding-left:4px}.mat-tab-header-pagination-before .mat-tab-header-pagination-chevron,.mat-tab-header-rtl .mat-tab-header-pagination-after .mat-tab-header-pagination-chevron{transform:rotate(-135deg)}.mat-tab-header-rtl .mat-tab-header-pagination-before,.mat-tab-header-pagination-after{padding-right:4px}.mat-tab-header-rtl .mat-tab-header-pagination-before .mat-tab-header-pagination-chevron,.mat-tab-header-pagination-after .mat-tab-header-pagination-chevron{transform:rotate(45deg)}.mat-tab-header-pagination-chevron{border-style:solid;border-width:2px 2px 0 0;content:\"\";height:8px;width:8px}.mat-tab-header-pagination-disabled{box-shadow:none;cursor:default}.mat-tab-list{flex-grow:1;position:relative;transition:transform 500ms cubic-bezier(0.35, 0, 0.25, 1)}.mat-tab-links{display:flex}[mat-align-tabs=center]>.mat-tab-link-container .mat-tab-links{justify-content:center}[mat-align-tabs=end]>.mat-tab-link-container .mat-tab-links{justify-content:flex-end}.mat-ink-bar{position:absolute;bottom:0;height:2px;transition:500ms cubic-bezier(0.35, 0, 0.25, 1)}._mat-animation-noopable.mat-ink-bar{transition:none;animation:none}.mat-tab-group-inverted-header .mat-ink-bar{bottom:auto;top:0}.cdk-high-contrast-active .mat-ink-bar{outline:solid 2px;height:0}.mat-tab-link-container{display:flex;flex-grow:1;overflow:hidden;z-index:1}.mat-tab-link{height:48px;padding:0 24px;cursor:pointer;box-sizing:border-box;opacity:.6;min-width:160px;text-align:center;display:inline-flex;justify-content:center;align-items:center;white-space:nowrap;vertical-align:top;text-decoration:none;position:relative;overflow:hidden;-webkit-tap-highlight-color:transparent}.mat-tab-link:focus{outline:none}.mat-tab-link:focus:not(.mat-tab-disabled){opacity:1}.cdk-high-contrast-active .mat-tab-link:focus{outline:dotted 2px;outline-offset:-2px}.mat-tab-link.mat-tab-disabled{cursor:default}.cdk-high-contrast-active .mat-tab-link.mat-tab-disabled{opacity:.5}.mat-tab-link .mat-tab-label-content{display:inline-flex;justify-content:center;align-items:center;white-space:nowrap}.cdk-high-contrast-active .mat-tab-link{opacity:1}[mat-stretch-tabs] .mat-tab-link{flex-basis:0;flex-grow:1}.mat-tab-link.mat-tab-disabled{pointer-events:none}@media(max-width: 599px){.mat-tab-link{min-width:72px}}\n"]
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
        }, {
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["Directionality"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
        }, {
          type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__["ViewportRuler"]
        }, {
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_13__["Platform"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
            args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"]]
          }]
        }];
      }, {
        _items: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChildren"],
          args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["forwardRef"])(
          /**
          * @return {?}
          */
          function () {
            return MatTabLink;
          }), {
            descendants: true
          }]
        }],
        _inkBar: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
          args: [MatInkBar, {
            "static": true
          }]
        }],
        _tabListContainer: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
          args: ['tabListContainer', {
            "static": true
          }]
        }],
        _tabList: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
          args: ['tabList', {
            "static": true
          }]
        }],
        _nextPaginator: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
          args: ['nextPaginator']
        }],
        _previousPaginator: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
          args: ['previousPaginator']
        }]
      });
    })();

    if (false) {} // Boilerplate for applying mixins to MatTabLink.


    var MatTabLinkMixinBase = function MatTabLinkMixinBase() {
      _classCallCheck(this, MatTabLinkMixinBase);
    };
    /** @type {?} */


    var _MatTabLinkMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["mixinTabIndex"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["mixinDisableRipple"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["mixinDisabled"])(MatTabLinkMixinBase)));
    /**
     * Base class with all of the `MatTabLink` functionality.
     */
    // tslint:disable-next-line:class-name


    var _MatTabLinkBase = /*#__PURE__*/function (_MatTabLinkMixinBase2) {
      _inherits(_MatTabLinkBase, _MatTabLinkMixinBase2);

      var _super38 = _createSuper(_MatTabLinkBase);

      /**
       * @param {?} _tabNavBar
       * @param {?} elementRef
       * @param {?} globalRippleOptions
       * @param {?} tabIndex
       * @param {?} _focusMonitor
       * @param {?=} animationMode
       */
      function _MatTabLinkBase(_tabNavBar, elementRef, globalRippleOptions, tabIndex, _focusMonitor, animationMode) {
        var _this89;

        _classCallCheck(this, _MatTabLinkBase);

        _this89 = _super38.call(this);
        _this89._tabNavBar = _tabNavBar;
        _this89.elementRef = elementRef;
        _this89._focusMonitor = _focusMonitor;
        /**
         * Whether the tab link is active or not.
         */

        _this89._isActive = false;
        _this89.rippleConfig = globalRippleOptions || {};
        _this89.tabIndex = parseInt(tabIndex) || 0;

        if (animationMode === 'NoopAnimations') {
          _this89.rippleConfig.animation = {
            enterDuration: 0,
            exitDuration: 0
          };
        }

        _focusMonitor.monitor(elementRef);

        return _this89;
      }
      /**
       * Whether the link is active.
       * @return {?}
       */


      _createClass(_MatTabLinkBase, [{
        key: "focus",

        /**
         * @return {?}
         */
        value: function focus() {
          this.elementRef.nativeElement.focus();
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._focusMonitor.stopMonitoring(this.elementRef);
        }
      }, {
        key: "active",
        get: function get() {
          return this._isActive;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          if (value !== this._isActive) {
            this._isActive = value;

            this._tabNavBar.updateActiveLink(this.elementRef);
          }
        }
        /**
         * Whether ripples are disabled on interaction.
         * \@docs-private
         * @return {?}
         */

      }, {
        key: "rippleDisabled",
        get: function get() {
          return this.disabled || this.disableRipple || this._tabNavBar.disableRipple || !!this.rippleConfig.disabled;
        }
      }]);

      return _MatTabLinkBase;
    }(_MatTabLinkMixinBase);

    _MatTabLinkBase.ɵfac = function _MatTabLinkBase_Factory(t) {
      return new (t || _MatTabLinkBase)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_MatTabNavBase), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MAT_RIPPLE_GLOBAL_OPTIONS"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinjectAttribute"]('tabindex'), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["FocusMonitor"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"], 8));
    };

    _MatTabLinkBase.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({
      type: _MatTabLinkBase,
      inputs: {
        active: "active"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]]
    });
    /** @nocollapse */

    _MatTabLinkBase.ctorParameters = function () {
      return [{
        type: _MatTabNavBase
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
          args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MAT_RIPPLE_GLOBAL_OPTIONS"]]
        }]
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Attribute"],
          args: ['tabindex']
        }]
      }, {
        type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["FocusMonitor"]
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
          args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"]]
        }]
      }];
    };

    _MatTabLinkBase.propDecorators = {
      active: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](_MatTabLinkBase, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"]
      }], function () {
        return [{
          type: _MatTabNavBase
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
            args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MAT_RIPPLE_GLOBAL_OPTIONS"]]
          }]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Attribute"],
            args: ['tabindex']
          }]
        }, {
          type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["FocusMonitor"]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
            args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"]]
          }]
        }];
      }, {
        active: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }]
      });
    })();

    if (false) {}
    /**
     * Link inside of a `mat-tab-nav-bar`.
     */


    var MatTabLink = /*#__PURE__*/function (_MatTabLinkBase2) {
      _inherits(MatTabLink, _MatTabLinkBase2);

      var _super39 = _createSuper(MatTabLink);

      /**
       * @param {?} tabNavBar
       * @param {?} elementRef
       * @param {?} ngZone
       * @param {?} platform
       * @param {?} globalRippleOptions
       * @param {?} tabIndex
       * @param {?} focusMonitor
       * @param {?=} animationMode
       */
      function MatTabLink(tabNavBar, elementRef, ngZone, platform, globalRippleOptions, tabIndex, focusMonitor, animationMode) {
        var _this90;

        _classCallCheck(this, MatTabLink);

        _this90 = _super39.call(this, tabNavBar, elementRef, globalRippleOptions, tabIndex, focusMonitor, animationMode);
        _this90._tabLinkRipple = new _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["RippleRenderer"](_assertThisInitialized(_this90), ngZone, elementRef, platform);

        _this90._tabLinkRipple.setupTriggerEvents(elementRef.nativeElement);

        return _this90;
      }
      /**
       * @return {?}
       */


      _createClass(MatTabLink, [{
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          _get(_getPrototypeOf(MatTabLink.prototype), "ngOnDestroy", this).call(this);

          this._tabLinkRipple._removeTriggerEvents();
        }
      }]);

      return MatTabLink;
    }(_MatTabLinkBase);

    MatTabLink.ɵfac = function MatTabLink_Factory(t) {
      return new (t || MatTabLink)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](MatTabNav), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_13__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MAT_RIPPLE_GLOBAL_OPTIONS"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinjectAttribute"]('tabindex'), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["FocusMonitor"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"], 8));
    };

    MatTabLink.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({
      type: MatTabLink,
      selectors: [["", "mat-tab-link", ""], ["", "matTabLink", ""]],
      hostAttrs: [1, "mat-tab-link", "mat-focus-indicator"],
      hostVars: 7,
      hostBindings: function MatTabLink_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("aria-current", ctx.active ? "page" : null)("aria-disabled", ctx.disabled)("tabIndex", ctx.tabIndex);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("mat-tab-disabled", ctx.disabled)("mat-tab-label-active", ctx.active);
        }
      },
      inputs: {
        disabled: "disabled",
        disableRipple: "disableRipple",
        tabIndex: "tabIndex"
      },
      exportAs: ["matTabLink"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]]
    });
    /** @nocollapse */

    MatTabLink.ctorParameters = function () {
      return [{
        type: MatTabNav
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]
      }, {
        type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_13__["Platform"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
          args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MAT_RIPPLE_GLOBAL_OPTIONS"]]
        }]
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Attribute"],
          args: ['tabindex']
        }]
      }, {
        type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["FocusMonitor"]
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
          args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"]]
        }]
      }];
    };
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MatTabLink, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"],
        args: [{
          selector: '[mat-tab-link], [matTabLink]',
          exportAs: 'matTabLink',
          inputs: ['disabled', 'disableRipple', 'tabIndex'],
          host: {
            'class': 'mat-tab-link mat-focus-indicator',
            '[attr.aria-current]': 'active ? "page" : null',
            '[attr.aria-disabled]': 'disabled',
            '[attr.tabIndex]': 'tabIndex',
            '[class.mat-tab-disabled]': 'disabled',
            '[class.mat-tab-label-active]': 'active'
          }
        }]
      }], function () {
        return [{
          type: MatTabNav
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]
        }, {
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_13__["Platform"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
            args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MAT_RIPPLE_GLOBAL_OPTIONS"]]
          }]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Attribute"],
            args: ['tabindex']
          }]
        }, {
          type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["FocusMonitor"]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
            args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"]]
          }]
        }];
      }, null);
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/tabs/tabs-module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var MatTabsModule = function MatTabsModule() {
      _classCallCheck(this, MatTabsModule);
    };

    MatTabsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
      type: MatTabsModule
    });
    MatTabsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
      factory: function MatTabsModule_Factory(t) {
        return new (t || MatTabsModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatCommonModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__["PortalModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatRippleModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_1__["ObserversModule"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["A11yModule"]], _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatCommonModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](MatTabsModule, {
        declarations: function declarations() {
          return [MatTabGroup, MatTabLabel, MatTab, MatInkBar, MatTabLabelWrapper, MatTabNav, MatTabLink, MatTabBody, MatTabBodyPortal, MatTabHeader, MatTabContent];
        },
        imports: function imports() {
          return [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatCommonModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__["PortalModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatRippleModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_1__["ObserversModule"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["A11yModule"]];
        },
        exports: function exports() {
          return [_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatCommonModule"], MatTabGroup, MatTabLabel, MatTab, MatTabNav, MatTabLink, MatTabContent];
        }
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MatTabsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatCommonModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__["PortalModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatRippleModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_1__["ObserversModule"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["A11yModule"]],
          // Don't export all components because some are only to be used internally.
          exports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatCommonModule"], MatTabGroup, MatTabLabel, MatTab, MatTabNav, MatTabLink, MatTabContent],
          declarations: [MatTabGroup, MatTabLabel, MatTab, MatInkBar, MatTabLabelWrapper, MatTabNav, MatTabLink, MatTabBody, MatTabBodyPortal, MatTabHeader, MatTabContent]
        }]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/tabs/tab-nav-bar/index.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/tabs/public-api.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=tabs.js.map

    /***/

  },

  /***/
  "./node_modules/angular-file-uploader/__ivy_ngcc__/fesm2015/angular-file-uploader.js":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/angular-file-uploader/__ivy_ngcc__/fesm2015/angular-file-uploader.js ***!
    \*******************************************************************************************/

  /*! exports provided: AngularFileUploaderComponent, AngularFileUploaderModule */

  /***/
  function node_modulesAngularFileUploader__ivy_ngcc__Fesm2015AngularFileUploaderJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AngularFileUploaderComponent", function () {
      return AngularFileUploaderComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AngularFileUploaderModule", function () {
      return AngularFileUploaderModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function AngularFileUploaderComponent_div_0_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("drop", function AngularFileUploaderComponent_div_0_div_1_Template_div_drop_2_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r11.drop($event);
        })("dragover", function AngularFileUploaderComponent_div_0_div_1_Template_div_dragover_2_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r13.allowDrop($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r2.hideSelectBtn && ctx_r2.hideResetBtn ? null : "dragNDropBtmPad");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.replaceTexts == null ? null : ctx_r2.replaceTexts.dragNDropBox);
      }
    }

    function AngularFileUploaderComponent_div_0_label_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("for", "sel", ctx_r3.id, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.replaceTexts == null ? null : ctx_r3.replaceTexts.selectFileBtn);
      }
    }

    function AngularFileUploaderComponent_div_0_input_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AngularFileUploaderComponent_div_0_input_3_Template_input_change_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);

          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r14.onChange($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "sel", ctx_r4.id, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("accept", ctx_r4.formatsAllowed);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("multiple", ctx_r4.multiple ? "" : null);
      }
    }

    function AngularFileUploaderComponent_div_0_button_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AngularFileUploaderComponent_div_0_button_4_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17);

          var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r16.resetFileUpload();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.replaceTexts == null ? null : ctx_r5.replaceTexts.resetBtn);
      }
    }

    function AngularFileUploaderComponent_div_0_br_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "br");
      }
    }

    var _c0 = function _c0(a0) {
      return {
        "width": a0
      };
    };

    function AngularFileUploaderComponent_div_0_div_8_div_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx_r20.uploadPercent + "%"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r20.uploadPercent, "%");
      }
    }

    function AngularFileUploaderComponent_div_0_div_8_a_9_Template(rf, ctx) {
      if (rf & 1) {
        var _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AngularFileUploaderComponent_div_0_div_8_a_9_Template_a_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24);

          var i_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

          var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r22.removeFile(i_r19, "sf");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AngularFileUploaderComponent_div_0_div_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\xA0\xA0\xA0\xA0\xA0");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AngularFileUploaderComponent_div_0_div_8_div_8_Template, 3, 4, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AngularFileUploaderComponent_div_0_div_8_a_9_Template, 2, 0, "a", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var sf_r18 = ctx.$implicit;

        var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](sf_r18.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", ctx_r7.convertSize(sf_r18.size), ")");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.isAllowedFileSingle && ctx_r7.progressBarShow && !ctx_r7.hideProgressBar);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r7.uploadStarted);
      }
    }

    function AngularFileUploaderComponent_div_0_div_9_a_9_Template(rf, ctx) {
      if (rf & 1) {
        var _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AngularFileUploaderComponent_div_0_div_9_a_9_Template_a_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30);

          var j_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

          var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r28.removeFile(j_r26, "na");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\xA0");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AngularFileUploaderComponent_div_0_div_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AngularFileUploaderComponent_div_0_div_9_a_9_Template, 3, 0, "a", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var na_r25 = ctx.$implicit;

        var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](na_r25["fileName"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", na_r25["fileSize"], ")");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](na_r25["errorMsg"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r8.uploadStarted);
      }
    }

    function AngularFileUploaderComponent_div_0_p_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("", ctx_r9.uploadMsgClass, " + afu-upload-status");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r9.uploadMsgText);
      }
    }

    function AngularFileUploaderComponent_div_0_div_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx_r10.uploadPercent + "%"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r10.uploadPercent, "%");
      }
    }

    function AngularFileUploaderComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AngularFileUploaderComponent_div_0_div_1_Template, 5, 2, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AngularFileUploaderComponent_div_0_label_2_Template, 2, 2, "label", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AngularFileUploaderComponent_div_0_input_3_Template, 1, 3, "input", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AngularFileUploaderComponent_div_0_button_4_Template, 2, 1, "button", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AngularFileUploaderComponent_div_0_br_5_Template, 1, 0, "br", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AngularFileUploaderComponent_div_0_div_8_Template, 10, 4, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AngularFileUploaderComponent_div_0_div_9_Template, 10, 4, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, AngularFileUploaderComponent_div_0_p_10_Template, 2, 4, "p", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AngularFileUploaderComponent_div_0_div_12_Template, 6, 4, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AngularFileUploaderComponent_div_0_Template_button_click_13_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32);

          var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r31.uploadFiles();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.theme == "dragNDrop");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.hideSelectBtn);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.hideSelectBtn);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.hideResetBtn);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.hideSelectBtn);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"]("(", ctx_r0.formatsAllowed, ") ", ctx_r0.replaceTexts == null ? null : ctx_r0.replaceTexts.sizeLimit, ": ", ctx_r0.convertSize(ctx_r0.maxSize), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.allowedFiles);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.notAllowedFiles);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.uploadMsg);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.isAllowedFileSingle && ctx_r0.progressBarShow && !ctx_r0.hideProgressBar);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r0.enableUploadBtn);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.replaceTexts == null ? null : ctx_r0.replaceTexts.uploadBtn);
      }
    }

    function AngularFileUploaderComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AngularFileUploaderComponent_div_1_Template_a_click_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34);

          var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r33.attachpinOnclick();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AngularFileUploaderComponent_div_1_Template_input_change_5_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34);

          var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r35.onChange($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " \xA0 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.replaceTexts == null ? null : ctx_r1.replaceTexts.attachPinBtn, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "sel", ctx_r1.id, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("accept", ctx_r1.formatsAllowed);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("multiple", ctx_r1.multiple ? "" : null);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "upload-file-info", ctx_r1.id, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.allowedFiles[0] == null ? null : ctx_r1.allowedFiles[0].name);
      }
    }

    var AngularFileUploaderComponent = /*#__PURE__*/function () {
      function AngularFileUploaderComponent(http) {
        _classCallCheck(this, AngularFileUploaderComponent);

        this.http = http;
        this.resetUpload = false; // Outputs

        this.ApiResponse = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.everythingDone = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.allowedFiles = [];
        this.notAllowedFiles = [];
        this.Caption = [];
        this.isAllowedFileSingle = true;
        this.progressBarShow = false;
        this.enableUploadBtn = false;
        this.uploadMsg = false;
        this.afterUpload = false;
        this.uploadStarted = false;
        this.currentUploads = [];
        this.fileNameIndex = true;
        this.idDate = +new Date();
      }

      _createClass(AngularFileUploaderComponent, [{
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          // Track changes in Configuration and see if user has even provided Configuration.
          if (changes.config && this.config) {
            // Assign User Configurations to Library Properties.
            this.theme = this.config.theme || '';
            this.id = this.config.id || parseInt((this.idDate / 10000).toString().split('.')[1], 10) + Math.floor(Math.random() * 20) * 10000;
            this.hideProgressBar = this.config.hideProgressBar || false;
            this.hideResetBtn = this.config.hideResetBtn || false;
            this.hideSelectBtn = this.config.hideSelectBtn || false;
            this.maxSize = (this.config.maxSize || 20) * 1024000; // mb to bytes.

            this.uploadAPI = this.config.uploadAPI.url;
            this.method = this.config.uploadAPI.method || 'POST';
            this.formatsAllowed = this.config.formatsAllowed || '.jpg,.png,.pdf,.docx,.txt,.gif,.jpeg';
            this.multiple = this.config.multiple || false;
            this.headers = this.config.uploadAPI.headers || {};
            this.params = this.config.uploadAPI.params || {};
            this.responseType = this.config.uploadAPI.responseType || null;
            this.fileNameIndex = this.config.fileNameIndex === false ? false : true;
            this.replaceTexts = {
              selectFileBtn: this.multiple ? 'Select Files' : 'Select File',
              resetBtn: 'Reset',
              uploadBtn: 'Upload',
              dragNDropBox: 'Drag N Drop',
              attachPinBtn: this.multiple ? 'Attach Files...' : 'Attach File...',
              afterUploadMsg_success: 'Successfully Uploaded !',
              afterUploadMsg_error: 'Upload Failed !',
              sizeLimit: 'Size Limit'
            }; // default replaceText.

            if (this.config.replaceTexts) {
              // updated replaceText if user has provided any.
              this.replaceTexts = Object.assign(Object.assign({}, this.replaceTexts), this.config.replaceTexts);
            }
          } // Reset when resetUpload value changes from false to true.


          if (changes.resetUpload) {
            if (changes.resetUpload.currentValue === true) {
              this.resetFileUpload();
            }
          }
        } // Reset following properties.

      }, {
        key: "resetFileUpload",
        value: function resetFileUpload() {
          this.allowedFiles = [];
          this.Caption = [];
          this.notAllowedFiles = [];
          this.uploadMsg = false;
          this.enableUploadBtn = false;
        } // When user selects files.

      }, {
        key: "onChange",
        value: function onChange(event) {
          this.notAllowedFiles = [];
          var fileExtRegExp = /(?:\.([^.]+))?$/;
          var fileList;

          if (this.afterUpload || !this.multiple) {
            this.allowedFiles = [];
            this.Caption = [];
            this.afterUpload = false;
          }

          if (event.type === 'drop') {
            fileList = event.dataTransfer.files;
          } else {
            fileList = event.target.files || event.srcElement.files;
          } // 'forEach' does not exist on 'filelist' that's why this good old 'for' is used.


          for (var i = 0; i < fileList.length; i++) {
            var currentFileExt = fileExtRegExp.exec(fileList[i].name)[1].toLowerCase(); // Get file extension.

            var isFormatValid = this.formatsAllowed.includes(currentFileExt);
            var isSizeValid = fileList[i].size <= this.maxSize; // Check whether current file format and size is correct as specified in the configurations.

            if (isFormatValid && isSizeValid) {
              this.allowedFiles.push(fileList[i]);
            } else {
              this.notAllowedFiles.push({
                fileName: fileList[i].name,
                fileSize: this.convertSize(fileList[i].size),
                errorMsg: !isFormatValid ? 'Invalid format' : 'Invalid size'
              });
            }
          } // If there's any allowedFiles.


          if (this.allowedFiles.length > 0) {
            this.enableUploadBtn = true; // Upload the files directly if theme is attach pin (as upload btn is not there for this theme).

            if (this.theme === 'attachPin') {
              this.uploadFiles();
            }
          } else {
            this.enableUploadBtn = false;
          }

          this.uploadMsg = false;
          this.uploadStarted = false;
          this.uploadPercent = 0;
          event.target.value = null;
        }
      }, {
        key: "uploadFiles",
        value: function uploadFiles() {
          var _this91 = this;

          this.progressBarShow = true;
          this.uploadStarted = true;
          this.notAllowedFiles = [];
          var isError = false;
          this.isAllowedFileSingle = this.allowedFiles.length <= 1;
          var formData = new FormData(); // Add data to be sent in this request

          this.allowedFiles.forEach(function (file, i) {
            formData.append(_this91.Caption[i] || 'file' + (_this91.fileNameIndex ? i : ''), _this91.allowedFiles[i]);
          });
          /*
          Not Working, Headers null
          // Contruct Headers
          const headers = new HttpHeaders();
          for (const key of Object.keys(this.headers)) {
            headers.append(key, this.headers[key]);
          }
                // Contruct Params
          const params = new HttpParams();
          for (const key of Object.keys(this.params)) {
            params.append(key, this.params[key]);
          } */

          var options = {
            headers: this.headers,
            params: this.params
          };
          if (this.responseType) options.responseType = this.responseType;
          this.http.request(this.method.toUpperCase(), this.uploadAPI, Object.assign({
            body: formData,
            reportProgress: true,
            observe: 'events'
          }, options)).subscribe(function (event) {
            // Upload Progress
            if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpEventType"].UploadProgress) {
              _this91.enableUploadBtn = false; // button should be disabled if process uploading

              var currentDone = event.loaded / event.total;
              _this91.uploadPercent = Math.round(event.loaded / event.total * 100);
            } else if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpEventType"].Response) {
              if (event.status === 200 || event.status === 201) {
                // Success
                _this91.progressBarShow = false;
                _this91.enableUploadBtn = false;
                _this91.uploadMsg = true;
                _this91.afterUpload = true;

                if (!isError) {
                  _this91.uploadMsgText = _this91.replaceTexts.afterUploadMsg_success;
                  _this91.uploadMsgClass = 'text-success lead';
                }
              } else {
                // Failure
                isError = true;

                _this91.handleErrors();
              }

              _this91.ApiResponse.emit(event);
            } else {//console.log('Event Other: ', event);
            }
          }, function (error) {
            // Failure
            isError = true;

            _this91.handleErrors();

            _this91.ApiResponse.emit(error);
          });
        }
      }, {
        key: "handleErrors",
        value: function handleErrors() {
          this.progressBarShow = false;
          this.enableUploadBtn = false;
          this.uploadMsg = true;
          this.afterUpload = true;
          this.uploadMsgText = this.replaceTexts.afterUploadMsg_error;
          this.uploadMsgClass = 'text-danger lead';
        }
      }, {
        key: "removeFile",
        value: function removeFile(i, sf_na) {
          if (sf_na === 'sf') {
            this.allowedFiles.splice(i, 1);
            this.Caption.splice(i, 1);
          } else {
            this.notAllowedFiles.splice(i, 1);
          }

          if (this.allowedFiles.length === 0) {
            this.enableUploadBtn = false;
          }
        }
      }, {
        key: "convertSize",
        value: function convertSize(fileSize) {
          return fileSize < 1024000 ? (fileSize / 1024).toFixed(2) + ' KB' : (fileSize / 1024000).toFixed(2) + ' MB';
        }
      }, {
        key: "attachpinOnclick",
        value: function attachpinOnclick() {
          var element = document.getElementById('sel' + this.id);

          if (element !== null) {
            element.click();
          }
        }
      }, {
        key: "drop",
        value: function drop(event) {
          event.stopPropagation();
          event.preventDefault();
          this.onChange(event);
        }
      }, {
        key: "allowDrop",
        value: function allowDrop(event) {
          event.stopPropagation();
          event.preventDefault();
          event.dataTransfer.dropEffect = 'copy';
        }
      }]);

      return AngularFileUploaderComponent;
    }();

    AngularFileUploaderComponent.ɵfac = function AngularFileUploaderComponent_Factory(t) {
      return new (t || AngularFileUploaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    AngularFileUploaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AngularFileUploaderComponent,
      selectors: [["angular-file-uploader"]],
      inputs: {
        resetUpload: "resetUpload",
        config: "config"
      },
      outputs: {
        ApiResponse: "ApiResponse",
        everythingDone: "everythingDone"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
      decls: 2,
      vars: 2,
      consts: [["class", "container", "id", "default", 4, "ngIf"], ["id", "attachPin", 4, "ngIf"], ["id", "default", 1, "container"], ["id", "dragNDrop", "class", "dragNDrop", 3, "ngClass", 4, "ngIf"], ["class", "btn btn-primary btn-sm afu-select-btn", 3, "for", 4, "ngIf"], ["type", "file", "style", "display: none", "title", "Select file", "name", "files[]", 3, "id", "accept", "change", 4, "ngIf"], ["class", "btn btn-info btn-sm resetBtn afu-reset-btn", 3, "click", 4, "ngIf"], [4, "ngIf"], [1, "constraints-info", "afu-constraints-info"], ["class", "row afu-valid-file", 4, "ngFor", "ngForOf"], ["class", "row text-danger afu-invalid-file", 4, "ngFor", "ngForOf"], [3, "class", 4, "ngIf"], ["type", "button", 1, "btn", "btn-success", "afu-upload-btn", 3, "disabled", "click"], ["id", "dragNDrop", 1, "dragNDrop", 3, "ngClass"], [2, "position", "relative"], ["id", "div1", 1, "div1", "afu-dragndrop-box", 3, "drop", "dragover"], [1, "afu-dragndrop-text"], [1, "btn", "btn-primary", "btn-sm", "afu-select-btn", 3, "for"], ["type", "file", "title", "Select file", "name", "files[]", 2, "display", "none", 3, "id", "accept", "change"], [1, "btn", "btn-info", "btn-sm", "resetBtn", "afu-reset-btn", 3, "click"], [1, "row", "afu-valid-file"], [1, "col-xs-3", "textOverflow"], [1, "text-primary"], [1, "col-xs-3", "padMarg", "sizeC"], ["class", "progress col-xs-3 padMarg afu-progress-bar", 4, "ngIf"], ["class", "col-xs-1", "role", "button", 3, "click", 4, "ngIf"], [1, "progress", "col-xs-3", "padMarg", "afu-progress-bar"], ["role", "progressbar", 1, "progress-bar", "progress-bar-success", 3, "ngStyle"], ["role", "button", 1, "col-xs-1", 3, "click"], [1, "fa", "fa-times"], [1, "row", "text-danger", "afu-invalid-file"], [1, "col-xs-3"], ["class", "col-xs-1 delFileIcon", "role", "button", 3, "click", 4, "ngIf"], ["role", "button", 1, "col-xs-1", "delFileIcon", 3, "click"], [1, "progress", "col-xs-4", "padMarg", "afu-progress-bar"], ["id", "attachPin"], [2, "position", "relative", "padding-left", "6px"], [1, "btn", "up_btn", "afu-attach-pin", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-paperclip"], [1, "label", "label-info", 3, "id"]],
      template: function AngularFileUploaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AngularFileUploaderComponent_div_0_Template, 16, 14, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AngularFileUploaderComponent_div_1_Template, 10, 6, "div", 1);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.theme !== "attachPin");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.theme == "attachPin");
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"]],
      styles: [".constraints-info[_ngcontent-%COMP%]{font-style:italic;margin-top:10px}.padMarg[_ngcontent-%COMP%]{margin-bottom:0;padding:0}.caption[_ngcontent-%COMP%]{margin-right:5px}.textOverflow[_ngcontent-%COMP%]{overflow:hidden;padding-right:0;text-overflow:ellipsis;white-space:nowrap}.up_btn[_ngcontent-%COMP%]{background-color:transparent;border:2px solid #5c5b5b;border-radius:22px;color:#000}.delFileIcon[_ngcontent-%COMP%]{color:#ce0909;text-decoration:none}.dragNDrop[_ngcontent-%COMP%]   .div1[_ngcontent-%COMP%]{border:2px dashed #5c5b5b;display:border-box;height:6rem;width:20rem}.dragNDrop[_ngcontent-%COMP%]   .div1[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{color:#5c5b5b;font-weight:700;margin-top:1.4em;text-align:center}.dragNDropBtmPad[_ngcontent-%COMP%]{padding-bottom:2rem}@media screen and (max-width:620px){.caption[_ngcontent-%COMP%]{padding:0}}@media screen and (max-width:510px){.sizeC[_ngcontent-%COMP%]{width:25%}}@media screen and (max-width:260px){.caption[_ngcontent-%COMP%], .sizeC[_ngcontent-%COMP%]{font-size:10px}}.resetBtn[_ngcontent-%COMP%]{margin-left:3px}"]
    });

    AngularFileUploaderComponent.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }];
    };

    AngularFileUploaderComponent.propDecorators = {
      config: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      resetUpload: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      ApiResponse: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      everythingDone: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AngularFileUploaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'angular-file-uploader',
          template: "<div class=\"container\" *ngIf=\"(theme !== 'attachPin')\" id=\"default\">\r\n\r\n  <!-- Drag n Drop theme Starts -->\r\n  <div *ngIf=\"theme == 'dragNDrop'\" id=\"dragNDrop\"\r\n    [ngClass]=\"(hideSelectBtn && hideResetBtn) ? null : 'dragNDropBtmPad'\" class=\"dragNDrop\">\r\n    <div style=\"position:relative;\">\r\n      <div id=\"div1\" class=\"div1 afu-dragndrop-box\" (drop)=\"drop($event)\" (dragover)=\"allowDrop($event)\">\r\n        <p class=\"afu-dragndrop-text\">{{replaceTexts?.dragNDropBox}}</p>\r\n      </div>\r\n      <!-- <span class='label label-info' id=\"upload-file-info{{id}}\">{{allowedFiles[0]?.name}}</span> -->\r\n    </div>\r\n  </div>\r\n  <!-- Drag n Drop theme Ends -->\r\n  <label for=\"sel{{id}}\" class=\"btn btn-primary btn-sm afu-select-btn\"\r\n    *ngIf=\"!hideSelectBtn\">{{replaceTexts?.selectFileBtn}}</label>\r\n  <input type=\"file\" id=\"sel{{id}}\" style=\"display: none\" *ngIf=\"!hideSelectBtn\" (change)=\"onChange($event)\"\r\n    title=\"Select file\" name=\"files[]\" [accept]=formatsAllowed [attr.multiple]=\"multiple ? '' : null\" />\r\n  <button class=\"btn btn-info btn-sm resetBtn afu-reset-btn\" (click)=\"resetFileUpload()\"\r\n    *ngIf=\"!hideResetBtn\">{{replaceTexts?.resetBtn}}</button>\r\n  <br *ngIf=\"!hideSelectBtn\">\r\n  <p class=\"constraints-info afu-constraints-info\">({{formatsAllowed}}) {{replaceTexts?.sizeLimit}}: {{(convertSize(maxSize))}}\r\n  </p>\r\n  <!--Allowed file list-->\r\n  <div class=\"row afu-valid-file\" *ngFor=\"let sf of allowedFiles;let i=index\">\r\n    <p class=\"col-xs-3 textOverflow\"><span class=\"text-primary\">{{sf.name}}</span></p>\r\n    <p class=\"col-xs-3 padMarg sizeC\"><strong>({{convertSize(sf.size)}})</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>\r\n    <!--  <input class=\"col-xs-3 progress caption\"  type=\"text\"  placeholder=\"Caption..\"  [(ngModel)]=\"Caption[i]\"  *ngIf=\"!uploadStarted\"/> -->\r\n    <div class=\"progress col-xs-3 padMarg afu-progress-bar\" *ngIf=\"isAllowedFileSingle && progressBarShow && !hideProgressBar\">\r\n      <span class=\"progress-bar progress-bar-success\" role=\"progressbar\"\r\n        [ngStyle]=\"{'width':uploadPercent+'%'}\">{{uploadPercent}}%</span>\r\n    </div>\r\n    <a class=\"col-xs-1\" role=\"button\" (click)=\"removeFile(i,'sf')\" *ngIf=\"!uploadStarted\"><i class=\"fa fa-times\"></i></a>\r\n  </div>\r\n  <!--Not Allowed file list-->\r\n  <div class=\"row text-danger afu-invalid-file\" *ngFor=\"let na of notAllowedFiles;let j=index\">\r\n    <p class=\"col-xs-3 textOverflow\"><span>{{na['fileName']}}</span></p>\r\n    <p class=\"col-xs-3 padMarg sizeC\"><strong>({{na['fileSize']}})</strong></p>\r\n    <p class=\"col-xs-3 \">{{na['errorMsg']}}</p>\r\n    <a class=\"col-xs-1 delFileIcon\" role=\"button\" (click)=\"removeFile(j,'na')\" *ngIf=\"!uploadStarted\">&nbsp;<i\r\n        class=\"fa fa-times\"></i></a>\r\n  </div>\r\n\r\n  <p *ngIf=\"uploadMsg\" class=\"{{uploadMsgClass}} + afu-upload-status\">{{uploadMsgText}}<p>\r\n      <div *ngIf=\"!isAllowedFileSingle && progressBarShow && !hideProgressBar\">\r\n        <div class=\"progress col-xs-4 padMarg afu-progress-bar\">\r\n          <span class=\"progress-bar progress-bar-success\" role=\"progressbar\"\r\n            [ngStyle]=\"{'width':uploadPercent+'%'}\">{{uploadPercent}}%</span>\r\n        </div>\r\n        <br>\r\n        <br>\r\n      </div>\r\n      <button class=\"btn btn-success afu-upload-btn\" type=\"button\" (click)=\"uploadFiles()\"\r\n        [disabled]=!enableUploadBtn>{{replaceTexts?.uploadBtn}}</button>\r\n      <br>\r\n</div>\r\n\r\n<!--/////////////////////////// ATTACH PIN THEME  //////////////////////////////////////////////////////////-->\r\n<div *ngIf=\"theme == 'attachPin'\" id=\"attachPin\">\r\n  <div style=\"position:relative;padding-left:6px\">\r\n    <a class='btn up_btn afu-attach-pin' (click)=\"attachpinOnclick()\">\r\n      {{replaceTexts?.attachPinBtn}}\r\n      <i class=\"fa fa-paperclip\" aria-hidden=\"true\"></i>\r\n      <!-- <p style=\"margin-top:10px\">({{formatsAllowed}}) Size limit- {{(convertSize(maxSize))}}</p> -->\r\n      <input type=\"file\" id=\"sel{{id}}\" (change)=\"onChange($event)\" style=\"display: none\" title=\"Select file\"\r\n        name=\"files[]\" [accept]=formatsAllowed [attr.multiple]=\"multiple ? '' : null\" />\r\n      <br>\r\n    </a>\r\n    &nbsp;\r\n    <span class='label label-info' id=\"upload-file-info{{id}}\">{{allowedFiles[0]?.name}}</span>\r\n  </div>\r\n</div>\r\n\r\n",
          styles: [".constraints-info{font-style:italic;margin-top:10px}.padMarg{margin-bottom:0;padding:0}.caption{margin-right:5px}.textOverflow{overflow:hidden;padding-right:0;text-overflow:ellipsis;white-space:nowrap}.up_btn{background-color:transparent;border:2px solid #5c5b5b;border-radius:22px;color:#000}.delFileIcon{color:#ce0909;text-decoration:none}.dragNDrop .div1{border:2px dashed #5c5b5b;display:border-box;height:6rem;width:20rem}.dragNDrop .div1>p{color:#5c5b5b;font-weight:700;margin-top:1.4em;text-align:center}.dragNDropBtmPad{padding-bottom:2rem}@media screen and (max-width:620px){.caption{padding:0}}@media screen and (max-width:510px){.sizeC{width:25%}}@media screen and (max-width:260px){.caption,.sizeC{font-size:10px}}.resetBtn{margin-left:3px}"]
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, {
        resetUpload: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        ApiResponse: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        everythingDone: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        config: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();

    var AngularFileUploaderModule = function AngularFileUploaderModule() {
      _classCallCheck(this, AngularFileUploaderModule);
    };

    AngularFileUploaderModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AngularFileUploaderModule
    });
    AngularFileUploaderModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AngularFileUploaderModule_Factory(t) {
        return new (t || AngularFileUploaderModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AngularFileUploaderModule, {
        declarations: function declarations() {
          return [AngularFileUploaderComponent];
        },
        imports: function imports() {
          return [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"]];
        },
        exports: function exports() {
          return [AngularFileUploaderComponent];
        }
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AngularFileUploaderModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"]],
          declarations: [AngularFileUploaderComponent],
          exports: [AngularFileUploaderComponent]
        }]
      }], null, null);
    })();
    /*
     * Public API Surface of angular-file-uploader
     */

    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=angular-file-uploader.js.map

    /***/

  },

  /***/
  "./node_modules/jspdf-html2canvas/dist/js-pdf.min.js":
  /*!***********************************************************!*\
    !*** ./node_modules/jspdf-html2canvas/dist/js-pdf.min.js ***!
    \***********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesJspdfHtml2canvasDistJsPdfMinJs(module, exports, __webpack_require__) {
    !function (e, t) {
      true ? module.exports = t(__webpack_require__(
      /*! jspdf */
      "./node_modules/jspdf/dist/jspdf.es.min.js"), __webpack_require__(
      /*! html2canvas */
      "./node_modules/html2canvas/dist/html2canvas.js")) : undefined;
    }(window, function (e, t) {
      return function (e) {
        var t = {};

        function n(o) {
          if (t[o]) return t[o].exports;
          var i = t[o] = {
            i: o,
            l: !1,
            exports: {}
          };
          return e[o].call(i.exports, i, i.exports, n), i.l = !0, i.exports;
        }

        return n.m = e, n.c = t, n.d = function (e, t, o) {
          n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: o
          });
        }, n.r = function (e) {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          });
        }, n.t = function (e, t) {
          if (1 & t && (e = n(e)), 8 & t) return e;
          if (4 & t && "object" == typeof e && e && e.__esModule) return e;
          var o = Object.create(null);
          if (n.r(o), Object.defineProperty(o, "default", {
            enumerable: !0,
            value: e
          }), 2 & t && "string" != typeof e) for (var i in e) {
            n.d(o, i, function (t) {
              return e[t];
            }.bind(null, i));
          }
          return o;
        }, n.n = function (e) {
          var t = e && e.__esModule ? function () {
            return e["default"];
          } : function () {
            return e;
          };
          return n.d(t, "a", t), t;
        }, n.o = function (e, t) {
          return Object.prototype.hasOwnProperty.call(e, t);
        }, n.p = "", n(n.s = 0);
      }([function (e, t, n) {
        var o = n(1),
            i = n(2),
            _n2 = n(3),
            r = _n2.defaultOpts,
            a = o.jsPDF,
            p = function p(e) {
          return {
            "image/jpeg": "JPEG",
            "image/png": "PNG",
            "image/webp": "WEBP"
          }[e];
        };

        function f(e, t, n) {
          var o = t.pdf,
              i = t.pdfWidth,
              r = t.pdfHeight,
              a = t.position;

          var _ref4 = function (_ref5) {
            var e = _ref5.canvas,
                t = _ref5.pdf,
                n = _ref5.pdfWidth,
                o = _ref5.opts;
            var i = e.toDataURL(o.imageType, 1),
                r = t.getImageProperties(i);
            return {
              pageData: i,
              imgHeight: n / r.width * r.height
            };
          }({
            canvas: e,
            pdf: o,
            pdfWidth: i,
            opts: n
          }),
              f = _ref4.pageData,
              u = _ref4.imgHeight;

          var s = u;
          if (a < 0 && (o.addPage(), a = 0), s < r) o.addImage(f, p(n.imageType), 0, a, i, u), a -= s;else for (; s > 0;) {
            o.addImage(f, p(n.imageType), 0, a, i, u), s -= r, a -= r, s > 0 && o.addPage();
          }
          return {
            pdf: o,
            position: a
          };
        }

        e.exports = /*#__PURE__*/function () {
          var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(e) {
            var t,
                n,
                _o,
                _r,
                _f,
                _a2,
                _p,
                _args = arguments;

            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    t = _args.length > 1 && _args[1] !== undefined ? _args[1] : {};

                    n = function (e) {
                      var t = new a(e.jsPDF),
                          n = t.internal.pageSize.getWidth(),
                          o = t.internal.pageSize.getHeight();
                      return {
                        pdf: t,
                        pdfWidth: n,
                        pdfHeight: o,
                        position: 0
                      };
                    }(t = Object.assign(r, t));

                    if (!e.length) {
                      _context.next = 17;
                      break;
                    }

                    _o = 0;

                  case 4:
                    if (!(_o < e.length)) {
                      _context.next = 15;
                      break;
                    }

                    _context.next = 7;
                    return i(e[_o], t.html2canvas);

                  case 7:
                    _r = _context.sent;
                    _f = f(_r, n, t);
                    _a2 = _f.pdf;
                    _p = _f.position;
                    n.pdf = _a2, n.position = _p;

                  case 12:
                    _o++;
                    _context.next = 4;
                    break;

                  case 15:
                    _context.next = 24;
                    break;

                  case 17:
                    _context.t0 = f;
                    _context.next = 20;
                    return i(e, t.html2canvas);

                  case 20:
                    _context.t1 = _context.sent;
                    _context.t2 = n;
                    _context.t3 = t;
                    (0, _context.t0)(_context.t1, _context.t2, _context.t3);

                  case 24:
                    t.success(n.pdf);

                  case 25:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
          }));

          return function (_x) {
            return _ref6.apply(this, arguments);
          };
        }();
      }, function (t, n) {
        t.exports = e;
      }, function (e, n) {
        e.exports = t;
      }, function (e, t) {
        e.exports.defaultOpts = {
          jsPDF: {
            unit: "px",
            format: "a4"
          },
          html2canvas: {
            imageTimeout: 15e3,
            logging: !0,
            useCORS: !1
          },
          imageType: "image/jpeg",
          output: "js.pdf",
          success: function success(e) {
            e.save(this.output);
          }
        };
      }]);
    });
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/borrowers/addborrowers/addborrowers.component.html":
  /*!*****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/borrowers/addborrowers/addborrowers.component.html ***!
    \*****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLayoutBorrowersAddborrowersAddborrowersComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"card\">\n    <div class=\"card-body\">\n        <!-- Begin Page Content -->\n        <div class=\"container-fluid\">\n\n            <!-- Page Heading -->\n            <div class=\"d-sm-flex align-items-center justify-content-between mb-4\">\n                <h1 class=\"h3 mb-0 text-gray-800 page-title\">List of Borrowers<span>Control Pannel</span></h1>\n                <ol class=\"breadcrumb text-xs bg-transparent\">\n                    <li><i class=\"fas fa-fw fa-tachometer-alt\"></i><a href=\"#\" class=\"text-gray-700\">Home</a><i class=\"fas fa-fw fa-angle-right\"></i></li>\n                    <li><a href=\"#\" class=\"text-gray-700\">Borrowers</a><i class=\"fas fa-fw fa-angle-right\"></i></li>\n                    <li class=\"active text-gray-500\">List</li>\n                </ol>\n            </div>\n\n            <div class=\"row\">\n                <div class=\"col-lg-12\">\n                    <!-- DataTales Example -->\n                    <div class=\"bg-white shadow border-top-green mb-4\">\n                        <div class=\"card-body\">\n\n                            <form class=\"user\">\n                                <div class=\"form-group\">\n                                    <div class=\"row\">\n                                        <div class=\"col-lg-2 text-right\"><label>Your Image {{ imagename }}</label></div>\n                                        <div class=\"col-lg-10\">\n                                            <input type=\"file\" [(ngModel)]=\"imagename\" name=\"message\" class=\"form-control form-control-user border-0\" />\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"form-group\">\n                                    <div class=\"row\">\n                                        <div class=\"col-lg-2 text-right text-green\"><label>Account Number</label></div>\n                                        <div class=\"col-lg-10\">\n                                            <input type=\"text\" [(ngModel)]=\"account\" placeholder=\"Account Number\" name=\"message\" class=\"form-control form-control-user\" />\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"form-group\">\n                                    <div class=\"row\">\n                                        <div class=\"col-lg-2 text-right text-green\"><label>Full Name </label></div>\n                                        <div class=\"col-lg-10\">\n                                            <input type=\"text\" [(ngModel)]=\"firstname\" name=\"message\" placeholder=\"Full Name\" class=\"form-control form-control-user\" />\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"form-group\">\n                                    <div class=\"row\">\n                                        <div class=\"col-lg-2 text-right text-green\"><label>Last Name </label></div>\n                                        <div class=\"col-lg-10\">\n                                            <input type=\"text\" [(ngModel)]=\"lastname\" name=\"message\" placeholder=\"Last Name\" class=\"form-control form-control-user\" />\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"form-group\">\n                                    <div class=\"row\">\n                                        <div class=\"col-lg-2 text-right text-green\"><label>Email</label></div>\n                                        <div class=\"col-lg-10\">\n                                            <input type=\"email\" [(ngModel)]=\"emailname\" email placeholder=\"Email\" name=\"message\" class=\"form-control form-control-user\" required />\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"form-group\">\n                                    <div class=\"row\">\n                                        <div class=\"col-lg-2 text-right text-green\"><label>Mobile Number</label></div>\n                                        <div class=\"col-lg-10\">\n                                            <input type=\"text\" [(ngModel)]=\"phone\" placeholder=\"Mobile Number\" name=\"message\" class=\"form-control form-control-user\" />\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"form-group\">\n                                    <div class=\"row\">\n                                        <div class=\"col-lg-2 text-right text-green\"><label>Address 1</label></div>\n                                        <div class=\"col-lg-10\">\n                                            <textarea class=\"form-control\" name=\"message\" [(ngModel)]=\"textarea\" name=\"message\" style=\"height: 100px;\"></textarea>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"form-group\">\n                                    <div class=\"row\">\n                                        <div class=\"col-lg-2 text-right text-green\"><label>Address 2</label></div>\n                                        <div class=\"col-lg-10\">\n                                            <textarea class=\"form-control\" name=\"message\" [(ngModel)]=\"textarea1\" name=\"message\" style=\"height: 100px;\"></textarea>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"form-group\">\n                                    <div class=\"row\">\n                                        <div class=\"col-lg-2 text-right text-green\"><label>City</label></div>\n                                        <div class=\"col-lg-10\">\n                                            <input type=\"text\" [(ngModel)]=\"cityname\" name=\"message\" placeholder=\"City\" class=\"form-control form-control-user\" />\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"form-group\">\n                                    <div class=\"row\">\n                                        <div class=\"col-lg-2 text-right text-green\"><label>State</label></div>\n                                        <div class=\"col-lg-10\">\n                                            <input type=\"text\" [(ngModel)]=\"statename\" placeholder=\"State\" name=\"message\" class=\"form-control form-control-user\" />\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"form-group\">\n                                    <div class=\"row\">\n                                        <div class=\"col-lg-2 text-right text-green\"><label>Zip Code</label></div>\n                                        <div class=\"col-lg-10\">\n                                            <input type=\"text\" [(ngModel)]=\"zipcode\" name=\"message\" placeholder=\"Zip Code\" class=\"form-control form-control-user\" />\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"form-group\">\n                                    <div class=\"row\">\n                                        <div class=\"col-lg-2 text-right text-green\"><label>Comment</label></div>\n                                        <div class=\"col-lg-10\">\n                                            <textarea class=\"form-control\" name=\"message\" [(ngModel)]=\"comment\" style=\"height: 100px;\"></textarea>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"row\">\n                                    <div class=\"col-lg-12 text-right\">\n                                        <button type=\"button\" (click)=\"onReset()\" class=\"btn btn-info btn-sm\"><i class=\"fa fa-times pr-2\" aria-hidden=\"true\"></i>Reset</button>\n                                        <button type=\"button\" (click)=\"onSave()\" class=\"btn btn-success btn-sm\"><i class=\"fa fa-save pr-2\" aria-hidden=\"true\"></i>Save</button>\n                                    </div>\n                                </div>\n                            </form>\n\n\n\n\n                        </div>\n                    </div>\n\n                </div>\n            </div>\n\n\n\n\n\n\n        </div>\n        <!-- /.container-fluid -->\n\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/borrowers/borrowers.component.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/borrowers/borrowers.component.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLayoutBorrowersBorrowersComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>borrowers works!</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/borrowers/edit/edit.component.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/borrowers/edit/edit.component.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLayoutBorrowersEditEditComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"card\">\n    <div class=\"card-body\">\n        <!-- Begin Page Content -->\n        <div class=\"container-fluid\">\n\n            <!-- Page Heading -->\n            <div class=\"d-sm-flex align-items-center justify-content-between mb-4\">\n                <h1 class=\"h3 mb-0 text-gray-800 page-title\">List of Borrowers<span>Control Pannel</span></h1>\n                <ol class=\"breadcrumb text-xs bg-transparent\">\n                    <li><i class=\"fas fa-fw fa-tachometer-alt\"></i><a href=\"#\" class=\"text-gray-700\">Home</a><i class=\"fas fa-fw fa-angle-right\"></i></li>\n                    <li><a href=\"#\" class=\"text-gray-700\">Borrowers</a><i class=\"fas fa-fw fa-angle-right\"></i></li>\n                    <li class=\"active text-gray-500\">List</li>\n                </ol>\n            </div>\n\n            <div class=\"row\">\n                <div class=\"col-lg-12\">\n                    <!-- DataTales Example -->\n                    <div class=\"bg-white shadow border-top-green mb-4\">\n                        <div class=\"card-body\">\n                            <mat-tab-group>\n                                <mat-tab label=\"Personel Information\">\n                                    <form class=\"user\">\n                                        <div class=\"form-group\">\n                                            <div class=\"row\">\n                                                <div class=\"col-lg-2 text-right\"><label>Your Image </label></div>\n                                                <div class=\"col-lg-10\">\n                                                    <input type=\"file\" [(ngModel)]=\"imagename\" name=\"imagename\" class=\"form-control form-control-user border-0\" />\n                                                </div>\n                                            </div>\n                                        </div>\n                                        <div class=\"form-group\">\n                                            <div class=\"row\">\n                                                <div class=\"col-lg-2 text-right text-green\"><label>Account Number</label></div>\n                                                <div class=\"col-lg-10\">\n                                                    <input type=\"text\" [(ngModel)]=\"account\" name=\"account\" placeholder=\"Account Number\" class=\"form-control form-control-user\" />\n                                                </div>\n                                            </div>\n                                        </div>\n                                        <div class=\"form-group\">\n                                            <div class=\"row\">\n                                                <div class=\"col-lg-2 text-right text-green\"><label>Full Name </label></div>\n                                                <div class=\"col-lg-10\">\n                                                    <input type=\"text\" minlength=\"4\" maxlength=\"24\" [(ngModel)]=\"firstname\" name=\"firstname\" placeholder=\"Full Name\" class=\"form-control form-control-user\" required/>\n                                                </div>\n                                            </div>\n                                        </div>\n                                        <div class=\"form-group\">\n                                            <div class=\"row\">\n                                                <div class=\"col-lg-2 text-right text-green\"><label>Last Name </label></div>\n                                                <div class=\"col-lg-10\">\n                                                    <input type=\"text\" minlength=\"4\" maxlength=\"24\" [(ngModel)]=\"lastname\" name=\"lastname\" placeholder=\"Last Name\" class=\"form-control form-control-user\" required/>\n                                                </div>\n                                            </div>\n                                        </div>\n                                        <div class=\"form-group\">\n                                            <div class=\"row\">\n                                                <div class=\"col-lg-2 text-right text-green\"><label>Email</label></div>\n                                                <div class=\"col-lg-10\">\n                                                    <input type=\"email\" [(ngModel)]=\"emailname\" name=\"emailname\" email placeholder=\"Email\" class=\"form-control form-control-user\" required />\n                                                </div>\n                                            </div>\n                                        </div>\n                                        <div class=\"form-group\">\n                                            <div class=\"row\">\n                                                <div class=\"col-lg-2 text-right text-green\"><label>Mobile Number</label></div>\n                                                <div class=\"col-lg-10\">\n                                                    <input type=\"text\" [(ngModel)]=\"phone\" name=\"phone\" placeholder=\"Mobile Number\" class=\"form-control form-control-user\" />\n                                                </div>\n                                            </div>\n                                        </div>\n                                        <div class=\"form-group\">\n                                            <div class=\"row\">\n                                                <div class=\"col-lg-2 text-right text-green\"><label>Address 1</label></div>\n                                                <div class=\"col-lg-10\">\n                                                    <textarea class=\"form-control\" name=\"textarea\" [(ngModel)]=\"textarea\" style=\"height: 100px;\"></textarea>\n                                                </div>\n                                            </div>\n                                        </div>\n                                        <div class=\"form-group\">\n                                            <div class=\"row\">\n                                                <div class=\"col-lg-2 text-right text-green\"><label>Address 2</label></div>\n                                                <div class=\"col-lg-10\">\n                                                    <textarea class=\"form-control\" name=\"textarea1\" [(ngModel)]=\"textarea1\" style=\"height: 100px;\"></textarea>\n                                                </div>\n                                            </div>\n                                        </div>\n                                        <div class=\"form-group\">\n                                            <div class=\"row\">\n                                                <div class=\"col-lg-2 text-right text-green\"><label>City</label></div>\n                                                <div class=\"col-lg-10\">\n                                                    <input type=\"text\" name=\"cityname\" [(ngModel)]=\"cityname\" placeholder=\"City\" class=\"form-control form-control-user\" />\n                                                </div>\n                                            </div>\n                                        </div>\n                                        <div class=\"form-group\">\n                                            <div class=\"row\">\n                                                <div class=\"col-lg-2 text-right text-green\"><label>State</label></div>\n                                                <div class=\"col-lg-10\">\n                                                    <input type=\"text\" [(ngModel)]=\"statename\" name=\"statename\" placeholder=\"State\" class=\"form-control form-control-user\" />\n                                                </div>\n                                            </div>\n                                        </div>\n                                        <div class=\"form-group\">\n                                            <div class=\"row\">\n                                                <div class=\"col-lg-2 text-right text-green\"><label>Zip Code</label></div>\n                                                <div class=\"col-lg-10\">\n                                                    <input type=\"text\" [(ngModel)]=\"zipcode\" name=\"zipcode\" placeholder=\"Zip Code\" class=\"form-control form-control-user\" />\n                                                </div>\n                                            </div>\n                                        </div>\n\n\n                                        <div class=\"form-group\">\n                                            <div class=\"row\">\n                                                <div class=\"col-lg-2 text-right text-green\"><label>Comment</label></div>\n                                                <div class=\"col-lg-10\">\n                                                    <textarea class=\"form-control\" name=\"comment\" [(ngModel)]=\"comment\" style=\"height: 100px;\"></textarea>\n                                                </div>\n                                            </div>\n                                        </div>\n                                        <div class=\"row\">\n                                            <div class=\"col-lg-12 text-right\">\n\n                                                <button type=\"button\" (click)=\"onUpdate()\" class=\"btn btn-success btn-sm\"><i class=\"fa fa-save pr-2\" aria-hidden=\"true\"></i>Update</button>\n                                            </div>\n                                        </div>\n                                    </form>\n                                </mat-tab>\n                                <mat-tab label=\"Financial Information\">\n                                    <!-- Editable table -->\n\n                                    <!-- <table class>\n\n                                        <thead>\n                                            <tr>\n\n                                                <th>First Name</th>\n                                                <th>Last Name</th>\n\n                                            </tr>\n                                        </thead>\n\n                                    </table> -->\n                                    <table class=\"table table-bordered table-responsive-md table-striped text-center\">\n\n                                        <tbody>\n\n                                            <tr>\n                                                <th scope=\"row\">\n                                                    <div class=\"form-check\">\n                                                        <input type=\"checkbox\" class=\"form-check-input\" id=\"tableMaterialCheck4\">\n                                                        <label class=\"form-check-label\" for=\"tableMaterialCheck4\"></label>\n                                                    </div>\n                                                </th>\n                                                <td class=\"pt-3-half\" contenteditable=\"true\">Guerra Cortez</td>\n                                                <td class=\"pt-3-half\" contenteditable=\"true\">USA</td>\n                                            </tr>\n                                            <tr>\n                                                <th scope=\"row\">\n                                                    <div class=\"form-check\">\n                                                        <input type=\"checkbox\" class=\"form-check-input\" id=\"tableMaterialCheck4\">\n                                                        <label class=\"form-check-label\" for=\"tableMaterialCheck4\"></label>\n                                                    </div>\n                                                </th>\n                                                <td class=\"pt-3-half\" contenteditable=\"true\">Guerra Cortez</td>\n                                                <td class=\"pt-3-half\" contenteditable=\"true\">USA</td>\n                                            </tr>\n                                            <tr>\n                                                <th scope=\"row\">\n                                                    <div class=\"form-check\">\n                                                        <input type=\"checkbox\" class=\"form-check-input\" id=\"tableMaterialCheck4\">\n                                                        <label class=\"form-check-label\" for=\"tableMaterialCheck4\"></label>\n                                                    </div>\n                                                </th>\n                                                <td class=\"pt-3-half\" contenteditable=\"true\">Guerra Cortez</td>\n                                                <td class=\"pt-3-half\" contenteditable=\"true\">USA</td>\n                                            </tr>\n                                            <tr>\n                                                <th scope=\"row\">\n                                                    <div class=\"form-check\">\n                                                        <input type=\"checkbox\" class=\"form-check-input\" id=\"tableMaterialCheck4\">\n                                                        <label class=\"form-check-label\" for=\"tableMaterialCheck4\"></label>\n                                                    </div>\n                                                </th>\n                                                <td class=\"pt-3-half\" contenteditable=\"true\">Guerra Cortez</td>\n                                                <td class=\"pt-3-half\" contenteditable=\"true\">USA</td>\n                                            </tr>\n                                            <tr>\n                                                <th scope=\"row\">\n                                                    <div class=\"form-check\">\n                                                        <input type=\"checkbox\" class=\"form-check-input\" id=\"tableMaterialCheck4\">\n                                                        <label class=\"form-check-label\" for=\"tableMaterialCheck4\"></label>\n                                                    </div>\n                                                </th>\n                                                <td class=\"pt-3-half\" contenteditable=\"true\">Guerra Cortez</td>\n                                                <td class=\"pt-3-half\" contenteditable=\"true\">USA</td>\n                                            </tr>\n                                            <tr>\n                                                <th scope=\"row\">\n                                                    <div class=\"form-check\">\n                                                        <input type=\"checkbox\" flex=\"20\" class=\"form-check-input\" id=\"tableMaterialCheck4\">\n                                                        <label class=\"form-check-label\" for=\"tableMaterialCheck4\"></label>\n                                                    </div>\n                                                </th>\n                                                <td class=\"pt-3-half\" contenteditable=\"true\">Guerra Cortez</td>\n                                                <td class=\"pt-3-half\" contenteditable=\"true\">USA</td>\n                                            </tr>\n\n                                            <!-- This is our clonable table line -->\n\n                                        </tbody>\n\n                                    </table>\n                                    <button mat-button color=\"Warn\">Add Row</button>\n\n\n                                    <button mat-button color=\"Warn\">Delete Row</button>\n                                    <hr>\n                                    <button class=\"example-spacer\" mat-button color=\"primary\">Update Additional Fees</button>\n\n\n                                </mat-tab>\n                                <mat-tab label=\"Attachment\">\n                                    <angular-file-uploader [config]=\"afuConfig\">\n                                    </angular-file-uploader>\n                                </mat-tab>\n                            </mat-tab-group>\n                        </div>\n                    </div>\n\n                </div>\n            </div>\n\n\n\n\n\n\n        </div>\n        <!-- /.container-fluid -->\n\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/borrowers/listborrowers/listborrowers.component.html":
  /*!*******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/borrowers/listborrowers/listborrowers.component.html ***!
    \*******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLayoutBorrowersListborrowersListborrowersComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"card\">\n    <div class=\"card-body\">\n        <!-- Begin Page Content -->\n        <div class=\"container-fluid\">\n\n            <!-- Page Heading -->\n            <div class=\"d-sm-flex align-items-center justify-content-between mb-4\">\n                <h1 class=\"h3 mb-0 text-gray-800 page-title\">List of Borrowers<span>Control Pannel</span></h1>\n                <ol class=\"breadcrumb text-xs bg-transparent\">\n                    <li><i class=\"fas fa-fw fa-tachometer-alt\"></i><a href=\"#\" class=\"text-gray-700\">Home</a><i class=\"fas fa-fw fa-angle-right\"></i></li>\n                    <li><a href=\"#\" class=\"text-gray-700\">Borrowers</a><i class=\"fas fa-fw fa-angle-right\"></i></li>\n                    <li class=\"active text-gray-500\">List</li>\n                </ol>\n            </div>\n\n            <div class=\"row\">\n                <div class=\"col-lg-12\">\n                    <!-- DataTales Example -->\n                    <div class=\"bg-white shadow border-top-green mb-4\">\n                        <div class=\"card-body\">\n                            <div class=\"mb-2\">\n                                <button type=\"button\" class=\"btn btn-warning btn-sm\" routerLink=\"/dashboard\"><i class=\"fa fa-reply-all pr-2\" aria-hidden=\"true\"></i>Back</button>\n                                <button type=\"button\" class=\"btn btn-danger btn-sm\"><i class=\"fa fa-times pr-2\" aria-hidden=\"true\"></i>Multiple Delete</button>\n                                <button type=\"button\" routerLink=\"/borrowers/new\" class=\"btn btn-success btn-sm\"><i class=\"fa fa-plus pr-2\" aria-hidden=\"true\"></i>Add Borrower</button>\n                                <button type=\"button\" class=\"btn btn-info btn-sm\"><i class=\"fa fa-envelope pr-2\" aria-hidden=\"true\"></i>Send SMS</button>\n                                <button type=\"button\" class=\"btn btn-info btn-sm\"><i class=\"fa fa-print pr-2\" aria-hidden=\"true\"></i>Print</button>\n                                <button type=\"button\" class=\"btn btn-success btn-sm\"><i class=\"fa fa-paper-plane pr-2\" aria-hidden=\"true\"></i>Export Excel</button>\n                                <button type=\"button\" class=\"btn btn-info btn-sm\" (click)=\"downloadPDF()\"><i class=\"fa fa-file-pdf pr-2\" aria-hidden=\"true\"></i>Export Pdf</button>\n                            </div>\n                            <hr class=\"mp-4 mt-4\">\n                            <div class=\"table-responsive mt-4\">\n                                <table class=\"table table-bordered\" id=\"dataTable\" width=\"100%\" cellspacing=\"0\">\n                                    <thead>\n                                        <tr>\n                                            <th><input type=\"checkbox\" name=\"\"></th>\n                                            <th>Id</th>\n                                            <th>Image</th>\n                                            <th>First Name</th>\n                                            <th>Last Name</th>\n                                            <th>Email</th>\n                                            <th>Mobile Number</th>\n                                            <th>Status</th>\n                                            <th>Action</th>\n                                        </tr>\n                                    </thead>\n                                    <!-- <tfoot>\n              <tr>\n                <th><input type=\"checkbox\" name=\"\"></th>\n                <th>Id</th>\n                <th>Image</th>\n                <th>First Name</th>\n                <th>Last Name</th>\n                <th>Email</th>\n                <th>Mobile Number</th>\n                <th>Status</th>\n                <th>Action</th>\n              </tr>\n            </tfoot> -->\n                                    <tbody>\n                                        <tr *ngFor=\"let rawdata of borrowerdata\">\n                                            <td><input type=\"checkbox\" #myItem (change)=\"OnCheckboxSelect(rawdata, $event)\" name=\"item-{{rawdata.id}}\"></td>\n                                            <th>{{rawdata._id}}</th>\n                                            <td><img src=\"../../../../assets/images/logo-admin.png\" /></td>\n                                            <td>{{rawdata.firstname}}</td>\n                                            <td>{{rawdata.lastname}}</td>\n                                            <td>{{rawdata.emailname}}</td>\n                                            <td>{{rawdata.phone}}</td>\n                                            <td class=\"bg-danger text-white text-center\"><a href=\"\" class=\"text-white\">{{rawdata.status}}</a></td>\n                                            <td><a routerLink=\"/borrowers/edit/{{rawdata._id}}\" class=\"btn btn-info btn-sm\">Edit</a>\n                                                <button type=\"button\" (click)=\"deleteborrowers(rawdata._id)\" class=\"btn btn-info btn-sm\"><i class=\"fas fa-trash\" style=\"font-size:24px;color:red;display:inline-block;\"></i></button></td>\n                                        </tr>\n                                    </tbody>\n                                </table>\n                            </div>\n                        </div>\n                    </div>\n\n                </div>\n            </div>\n\n\n\n\n\n\n        </div>\n        <!-- /.container-fluid -->\n\n    </div>\n</div>";
    /***/
  },

  /***/
  "./src/app/layout/borrowers/addborrowers/addborrowers.component.css":
  /*!**************************************************************************!*\
    !*** ./src/app/layout/borrowers/addborrowers/addborrowers.component.css ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLayoutBorrowersAddborrowersAddborrowersComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".example-spacer {\r\n    position: absolute;\r\n    right: 0px;\r\n    margin: 0;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2JvcnJvd2Vycy9hZGRib3Jyb3dlcnMvYWRkYm9ycm93ZXJzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFNBQVM7QUFDYiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9ib3Jyb3dlcnMvYWRkYm9ycm93ZXJzL2FkZGJvcnJvd2Vycy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtc3BhY2VyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAwcHg7XHJcbiAgICBtYXJnaW46IDA7XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/layout/borrowers/addborrowers/addborrowers.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/layout/borrowers/addborrowers/addborrowers.component.ts ***!
    \*************************************************************************/

  /*! exports provided: AddborrowersComponent */

  /***/
  function srcAppLayoutBorrowersAddborrowersAddborrowersComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddborrowersComponent", function () {
      return AddborrowersComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _borrower_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../borrower-service.service */
    "./src/app/layout/borrowers/borrower-service.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");

    var AddborrowersComponent = /*#__PURE__*/function () {
      function AddborrowersComponent(service, router, route, tost) {
        _classCallCheck(this, AddborrowersComponent);

        this.service = service;
        this.router = router;
        this.route = route;
        this.tost = tost;
        this.account = " ";
        this.firstname = " ";
        this.afuConfig = {
          uploadAPI: {
            url: "https://example-file-upload-api"
          }
        };
      }

      _createClass(AddborrowersComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onSave",
        value: function onSave() {
          var _this92 = this;

          console.log(this.imagename);
          console.log(this.account);
          console.log(this.firstname);
          console.log(this.lastname);
          console.log(this.phone);
          console.log(this.emailname);
          console.log(this.textarea);
          console.log(this.textarea1);
          console.log(this.cityname);
          console.log(this.statename);
          console.log(this.zipcode);
          console.log(this.Country);
          console.log(this.comment);
          var data = {
            "imagename": this.imagename,
            "account": this.account,
            "emailname": this.emailname,
            "lastname": this.lastname,
            "firstname": this.firstname,
            "phone": this.phone,
            "textarea": this.textarea,
            "textarea1": this.textarea1,
            "cityname": this.cityname,
            "statename": this.statename,
            "zipcode": this.zipcode,
            "Country": this.Country,
            "comment": this.comment
          };
          console.log(data);
          this.service.createborrowers(data).subscribe(function (res) {
            console.log(res); // this.disableSubmit = false;

            _this92.tost.success("Borrowers created succesfully");

            _this92.router.navigate(['/borrowers/list']);
          }, function () {//this.disableSubmit = false;
          });
        }
      }]);

      return AddborrowersComponent;
    }();

    AddborrowersComponent.ctorParameters = function () {
      return [{
        type: _borrower_service_service__WEBPACK_IMPORTED_MODULE_2__["BorrowerServiceService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]
      }];
    };

    AddborrowersComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-addborrowers',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./addborrowers.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/borrowers/addborrowers/addborrowers.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./addborrowers.component.css */
      "./src/app/layout/borrowers/addborrowers/addborrowers.component.css"))["default"]]
    })], AddborrowersComponent);
    /***/
  },

  /***/
  "./src/app/layout/borrowers/borrower-service.service.ts":
  /*!**************************************************************!*\
    !*** ./src/app/layout/borrowers/borrower-service.service.ts ***!
    \**************************************************************/

  /*! exports provided: BorrowerServiceService */

  /***/
  function srcAppLayoutBorrowersBorrowerServiceServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BorrowerServiceService", function () {
      return BorrowerServiceService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../shared */
    "./src/app/shared/index.ts");

    var BorrowerServiceService = /*#__PURE__*/function () {
      function BorrowerServiceService(apiService) {
        _classCallCheck(this, BorrowerServiceService);

        this.apiService = apiService;
      }

      _createClass(BorrowerServiceService, [{
        key: "getborrowers",
        value: function getborrowers() {
          return this.apiService.get("/borrowers");
        }
      }, {
        key: "getborrowersdetails",
        value: function getborrowersdetails(id) {
          return this.apiService.get("/borrowers/" + id);
        }
      }, {
        key: "updateborrowersdetails",
        value: function updateborrowersdetails(id, data) {
          return this.apiService.put("/borrowers/" + id, data);
        }
      }, {
        key: "createborrowers",
        value: function createborrowers(data) {
          return this.apiService.post("/borrowers", data);
        }
      }, {
        key: "deleteborrowers",
        value: function deleteborrowers(id) {
          return this.apiService["delete"]("/borrowers/" + id);
        }
      }]);

      return BorrowerServiceService;
    }();

    BorrowerServiceService.ctorParameters = function () {
      return [{
        type: _shared__WEBPACK_IMPORTED_MODULE_2__["ApiService"]
      }];
    };

    BorrowerServiceService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], BorrowerServiceService);
    /***/
  },

  /***/
  "./src/app/layout/borrowers/borrowers-routing.module.ts":
  /*!**************************************************************!*\
    !*** ./src/app/layout/borrowers/borrowers-routing.module.ts ***!
    \**************************************************************/

  /*! exports provided: BorrowersRoutingModule */

  /***/
  function srcAppLayoutBorrowersBorrowersRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BorrowersRoutingModule", function () {
      return BorrowersRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _borrowers_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./borrowers.component */
    "./src/app/layout/borrowers/borrowers.component.ts");
    /* harmony import */


    var _addborrowers_addborrowers_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./addborrowers/addborrowers.component */
    "./src/app/layout/borrowers/addborrowers/addborrowers.component.ts");
    /* harmony import */


    var _listborrowers_listborrowers_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./listborrowers/listborrowers.component */
    "./src/app/layout/borrowers/listborrowers/listborrowers.component.ts");
    /* harmony import */


    var _edit_edit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./edit/edit.component */
    "./src/app/layout/borrowers/edit/edit.component.ts");

    var routes = [{
      path: '',
      component: _borrowers_component__WEBPACK_IMPORTED_MODULE_3__["BorrowersComponent"]
    }, {
      path: 'new',
      data: {
        breadcrumb: 'New'
      },
      component: _addborrowers_addborrowers_component__WEBPACK_IMPORTED_MODULE_4__["AddborrowersComponent"]
    }, {
      path: 'list',
      data: {
        breadcrumb: 'List'
      },
      component: _listborrowers_listborrowers_component__WEBPACK_IMPORTED_MODULE_5__["ListborrowersComponent"]
    }, {
      path: 'edit/:id',
      data: {
        breadcrumb: 'edit'
      },
      component: _edit_edit_component__WEBPACK_IMPORTED_MODULE_6__["EditComponent"]
    }];

    var BorrowersRoutingModule = function BorrowersRoutingModule() {
      _classCallCheck(this, BorrowersRoutingModule);
    };

    BorrowersRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], BorrowersRoutingModule);
    /***/
  },

  /***/
  "./src/app/layout/borrowers/borrowers.component.css":
  /*!**********************************************************!*\
    !*** ./src/app/layout/borrowers/borrowers.component.css ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLayoutBorrowersBorrowersComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9ib3Jyb3dlcnMvYm9ycm93ZXJzLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/layout/borrowers/borrowers.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/layout/borrowers/borrowers.component.ts ***!
    \*********************************************************/

  /*! exports provided: BorrowersComponent */

  /***/
  function srcAppLayoutBorrowersBorrowersComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BorrowersComponent", function () {
      return BorrowersComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var BorrowersComponent = /*#__PURE__*/function () {
      function BorrowersComponent() {
        _classCallCheck(this, BorrowersComponent);
      }

      _createClass(BorrowersComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return BorrowersComponent;
    }();

    BorrowersComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-borrowers',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./borrowers.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/borrowers/borrowers.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./borrowers.component.css */
      "./src/app/layout/borrowers/borrowers.component.css"))["default"]]
    })], BorrowersComponent);
    /***/
  },

  /***/
  "./src/app/layout/borrowers/borrowers.module.ts":
  /*!******************************************************!*\
    !*** ./src/app/layout/borrowers/borrowers.module.ts ***!
    \******************************************************/

  /*! exports provided: BorrowersModule */

  /***/
  function srcAppLayoutBorrowersBorrowersModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BorrowersModule", function () {
      return BorrowersModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/tabs */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
    /* harmony import */


    var _borrowers_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./borrowers-routing.module */
    "./src/app/layout/borrowers/borrowers-routing.module.ts");
    /* harmony import */


    var _borrowers_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./borrowers.component */
    "./src/app/layout/borrowers/borrowers.component.ts");
    /* harmony import */


    var _addborrowers_addborrowers_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./addborrowers/addborrowers.component */
    "./src/app/layout/borrowers/addborrowers/addborrowers.component.ts");
    /* harmony import */


    var _listborrowers_listborrowers_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./listborrowers/listborrowers.component */
    "./src/app/layout/borrowers/listborrowers/listborrowers.component.ts");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var angular_file_uploader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! angular-file-uploader */
    "./node_modules/angular-file-uploader/__ivy_ngcc__/fesm2015/angular-file-uploader.js");
    /* harmony import */


    var _edit_edit_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./edit/edit.component */
    "./src/app/layout/borrowers/edit/edit.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var BorrowersModule = function BorrowersModule() {
      _classCallCheck(this, BorrowersModule);
    };

    BorrowersModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_borrowers_component__WEBPACK_IMPORTED_MODULE_5__["BorrowersComponent"], _addborrowers_addborrowers_component__WEBPACK_IMPORTED_MODULE_6__["AddborrowersComponent"], _listborrowers_listborrowers_component__WEBPACK_IMPORTED_MODULE_7__["ListborrowersComponent"], _edit_edit_component__WEBPACK_IMPORTED_MODULE_10__["EditComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"], angular_file_uploader__WEBPACK_IMPORTED_MODULE_9__["AngularFileUploaderModule"], _borrowers_routing_module__WEBPACK_IMPORTED_MODULE_4__["BorrowersRoutingModule"]],
      exports: [_angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__["MatTabsModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"]]
    })], BorrowersModule);
    /***/
  },

  /***/
  "./src/app/layout/borrowers/edit/edit.component.css":
  /*!**********************************************************!*\
    !*** ./src/app/layout/borrowers/edit/edit.component.css ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLayoutBorrowersEditEditComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9ib3Jyb3dlcnMvZWRpdC9lZGl0LmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/layout/borrowers/edit/edit.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/layout/borrowers/edit/edit.component.ts ***!
    \*********************************************************/

  /*! exports provided: EditComponent */

  /***/
  function srcAppLayoutBorrowersEditEditComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditComponent", function () {
      return EditComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _borrower_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../borrower-service.service */
    "./src/app/layout/borrowers/borrower-service.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");

    var EditComponent = /*#__PURE__*/function () {
      function EditComponent(service, router, route, tost) {
        _classCallCheck(this, EditComponent);

        this.service = service;
        this.router = router;
        this.route = route;
        this.tost = tost;
        this.imagename = "";
        this.account = " ";
        this.firstname = " ";
        this.lastname = "";
        this.emailname = "";
        this.phone = "";
        this.textarea = "";
        this.textarea1 = "";
        this.cityname = "";
        this.statename = "";
        this.zipcode = "";
        this.Country = "";
        this.comment = "";
        this.afuConfig = {
          uploadAPI: {
            url: "https://example-file-upload-api"
          }
        };
      }

      _createClass(EditComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          console.log(this.route.snapshot.params['id']);
          this.bid = this.route.snapshot.params['id'];
          this.getborrowers(this.bid);
        }
      }, {
        key: "getborrowers",
        value: function getborrowers(id) {
          var _this93 = this;

          this.service.getborrowersdetails(id).subscribe(function (res) {
            console.log(res);
            _this93.account = res.borrowers.account;
            _this93.cityname = res.borrowers.cityname;
            _this93.emailname = res.borrowers.emailname;
            _this93.firstname = res.borrowers.firstname;
            _this93.lastname = res.borrowers.lastname; // this.imagename = res.borrowers.imagename;

            _this93.phone = res.borrowers.phone;
            _this93.statename = res.borrowers.statename;
            _this93.textarea = res.borrowers.textarea;
            _this93.textarea1 = res.borrowers.textarea1;
            _this93.zipcode = res.borrowers.zipcode; // this.disableSubmit = false;
          }, function () {//this.disableSubmit = false;
          });
        }
      }, {
        key: "onUpdate",
        value: function onUpdate() {
          var _this94 = this;

          console.log(this.imagename);
          console.log(this.account);
          console.log(this.firstname);
          console.log(this.lastname);
          console.log(this.phone);
          console.log(this.emailname);
          console.log(this.textarea);
          console.log(this.textarea1);
          console.log(this.cityname);
          console.log(this.statename);
          console.log(this.zipcode);
          console.log(this.Country);
          console.log(this.comment);
          var data = {
            "imagename": this.imagename,
            "account": this.account,
            "emailname": this.emailname,
            "lastname": this.lastname,
            "firstname": this.firstname,
            "phone": this.phone,
            "textarea": this.textarea,
            "textarea1": this.textarea1,
            "cityname": this.cityname,
            "statename": this.statename,
            "zipcode": this.zipcode,
            "Country": this.Country,
            "comment": this.comment
          };
          this.service.updateborrowersdetails(this.bid, data).subscribe(function (res) {
            console.log(res); // this.disableSubmit = false;

            _this94.tost.success("Borrowers Updated succesfully");

            _this94.router.navigate(['/borrowers/list']);
          }, function () {//this.disableSubmit = false;
          });
        }
      }]);

      return EditComponent;
    }();

    EditComponent.ctorParameters = function () {
      return [{
        type: _borrower_service_service__WEBPACK_IMPORTED_MODULE_2__["BorrowerServiceService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]
      }];
    };

    EditComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-edit',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./edit.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/borrowers/edit/edit.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./edit.component.css */
      "./src/app/layout/borrowers/edit/edit.component.css"))["default"]]
    })], EditComponent);
    /***/
  },

  /***/
  "./src/app/layout/borrowers/listborrowers/listborrowers.component.css":
  /*!****************************************************************************!*\
    !*** ./src/app/layout/borrowers/listborrowers/listborrowers.component.css ***!
    \****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLayoutBorrowersListborrowersListborrowersComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9ib3Jyb3dlcnMvbGlzdGJvcnJvd2Vycy9saXN0Ym9ycm93ZXJzLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/layout/borrowers/listborrowers/listborrowers.component.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/layout/borrowers/listborrowers/listborrowers.component.ts ***!
    \***************************************************************************/

  /*! exports provided: ListborrowersComponent */

  /***/
  function srcAppLayoutBorrowersListborrowersListborrowersComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListborrowersComponent", function () {
      return ListborrowersComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _borrower_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../borrower-service.service */
    "./src/app/layout/borrowers/borrower-service.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var jspdf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! jspdf */
    "./node_modules/jspdf/dist/jspdf.es.min.js");
    /* harmony import */


    var jspdf_html2canvas__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! jspdf-html2canvas */
    "./node_modules/jspdf-html2canvas/dist/js-pdf.min.js");
    /* harmony import */


    var jspdf_html2canvas__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(jspdf_html2canvas__WEBPACK_IMPORTED_MODULE_6__);

    var ListborrowersComponent = /*#__PURE__*/function () {
      function ListborrowersComponent(service, http, tostr) {
        _classCallCheck(this, ListborrowersComponent);

        this.service = service;
        this.http = http;
        this.tostr = tostr;
        this.selectedIds = [];
      }

      _createClass(ListborrowersComponent, [{
        key: "downloadPDF",
        value: function downloadPDF() {
          alert('sssssssss');
          var element = document.getElementById('dataTable');
          jspdf_html2canvas__WEBPACK_IMPORTED_MODULE_6___default()(element).then(function (canvas) {
            console.log(canvas);
            var imgData = canvas.getContext('text');
            var doc = new jspdf__WEBPACK_IMPORTED_MODULE_5__["jsPDF"]();
            doc.text(imgData, 10, 10);
            doc.save("a4.pdf");
          });
        }
      }, {
        key: "OnCheckboxSelect",
        value: function OnCheckboxSelect(id, event) {
          if (event.target.checked === true) {
            this.selectedIds.push({
              id: id,
              checked: event.target.checked
            });
            console.log('Selected Ids ', this.selectedIds);
          }

          if (event.target.checked === false) {
            this.selectedIds = this.selectedIds.filter(function (item) {
              return item.id !== id;
            });
            console.log('UnSelected Ids ', this.selectedIds);
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getborrowers(); // this.borrowerdata = [
          //   {"id":"1", "Image":"hbti.jpg","FirstName":"surendra", "LastName":"Chaudhary","Email":"test@gmail.com","MobileNumber":"364544664","Status":"Valid","Action":"view"},
          //   {"id":"1", "Image":"hbti.jpg","FirstName":"surendra", "LastName":"Chaudhary","Email":"test@gmail.com","MobileNumber":"364544664","Status":"Valid","Action":"view"},
          // ]
        }
      }, {
        key: "getborrowers",
        value: function getborrowers() {
          var _this95 = this;

          this.service.getborrowers().subscribe(function (res) {
            console.log(res);
            _this95.borrowerdata = res['borrowers']; // this.disableSubmit = false;
          }, function () {//this.disableSubmit = false;
          });
        }
      }, {
        key: "deleteborrowers",
        value: function deleteborrowers(id) {
          var _this96 = this;

          this.service.deleteborrowers(id).subscribe(function (res) {
            console.log(res);

            _this96.getborrowers();
          }, function () {//this.disableSubmit = false;
          });
          console.log(id);
        }
      }]);

      return ListborrowersComponent;
    }();

    ListborrowersComponent.ctorParameters = function () {
      return [{
        type: _borrower_service_service__WEBPACK_IMPORTED_MODULE_2__["BorrowerServiceService"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])('myItem')], ListborrowersComponent.prototype, "item", void 0);
    ListborrowersComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-listborrowers',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./listborrowers.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/borrowers/listborrowers/listborrowers.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./listborrowers.component.css */
      "./src/app/layout/borrowers/listborrowers/listborrowers.component.css"))["default"]]
    })], ListborrowersComponent);
    /***/
  }
}]);
//# sourceMappingURL=borrowers-borrowers-module-es5.js.map