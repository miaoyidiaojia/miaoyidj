require("../common/manifest.js")
require("../common/vendor.js")
global.webpackJsonp([2],{

/***/ 239:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_node_modules_mpvue_config_loader_index_js_placeOrder_vue__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_7464932e_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_node_modules_mpvue_config_loader_index_js_placeOrder_vue__ = __webpack_require__(254);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(240)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-7464932e"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_node_modules_mpvue_config_loader_index_js_placeOrder_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_7464932e_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_node_modules_mpvue_config_loader_index_js_placeOrder_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\placeOrder.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] placeOrder.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7464932e", Component.options)
  } else {
    hotAPI.reload("data-v-7464932e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 240:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 241:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_array_from__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_array_from___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_array_from__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_address_card__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_title_card__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_coupon_card__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_order_card__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__utils_index__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_vuex__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__api_index__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__static_vant_dialog_dialog__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__static_vant_toast_toast__ = __webpack_require__(16);




//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//










var f = function f(length) {
  return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_array_from___default()({
    length: length
  }, function (v, k) {
    return k;
  });
};

/* harmony default export */ __webpack_exports__["a"] = ({
  components: {
    addresscard: __WEBPACK_IMPORTED_MODULE_4__components_address_card__["a" /* default */],
    titlecard: __WEBPACK_IMPORTED_MODULE_5__components_title_card__["a" /* default */],
    ordercard: __WEBPACK_IMPORTED_MODULE_7__components_order_card__["a" /* default */],
    couponcard: __WEBPACK_IMPORTED_MODULE_6__components_coupon_card__["a" /* default */]
  },
  computed: __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_9_vuex__["c" /* mapState */])(['addressInfo', 'productInfo', 'miaoyiUser', 'city', 'couponInfo'])),

  mounted: function mounted() {
    this.getPointsRule();
    this.timeValue = Object(__WEBPACK_IMPORTED_MODULE_8__utils_index__["d" /* getYear */])(new Date()) + '-' + this.multiArray[0][this.multiIndex[0]] + '  ' + this.getHour();
    this.price = this.productInfo.pprice;
  },
  data: function data() {
    return {
      address: '选择地址',
      time: '预约时间',
      multiArray: this.getList(),
      multiIndex: [0, 0],
      remarkVal: '',
      couponTit: '我的优惠',
      couponUrl: '/pages/coupon',
      borderBo: false,
      timeValue: '',
      price: 0,
      ratio: 1
    };
  },


  methods: {
    getPointsRule: function getPointsRule() {
      var _this = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        var res;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return __WEBPACK_IMPORTED_MODULE_10__api_index__["a" /* default */].getPointsRules();

              case 2:
                res = _context.sent;


                if (res.code === 1) {
                  _this.ratio = res.data.rmolPoints / res.data.rdenPoints;
                }

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    },
    usePoints: function usePoints() {
      this.price = this.price - Math.ceil(this.$store.state.miaoyiUser.upoints * this.ratio);
    },
    getList: function getList() {
      var timeli = [];

      for (var index in Object(__WEBPACK_IMPORTED_MODULE_8__utils_index__["b" /* getDeList */])(new Date())) {
        timeli.push(Object(__WEBPACK_IMPORTED_MODULE_8__utils_index__["b" /* getDeList */])(new Date())[index]);
      }

      return [timeli, f(24)];
    },
    getHour: function getHour() {
      return parseInt(Object(__WEBPACK_IMPORTED_MODULE_8__utils_index__["c" /* getNowHour */])(new Date())) + 1;
    },
    goPay: function goPay() {
      if (this.$store.state.addressInfo.aid === undefined && this.$store.state.city === undefined) {
        __WEBPACK_IMPORTED_MODULE_12__static_vant_toast_toast__["a" /* default */].fail('没有选择地址，请选择！');
        return;
      }

      if (this.$store.state.couponInfo.cid !== undefined) {
        this.userUseCoupon();
      }

      this.generateOrder();
    },
    bindMultiPickerChange: function bindMultiPickerChange(e) {
      this.multiIndex = e.mp.detail.value;
      this.timeValue = Object(__WEBPACK_IMPORTED_MODULE_8__utils_index__["d" /* getYear */])(new Date()) + '-' + this.multiArray[0][this.multiIndex[0]] + '  ' + this.multiArray[1][this.multiIndex[1]];

      if (this.getHour() > this.multiArray[1][this.multiIndex[1]]) {
        __WEBPACK_IMPORTED_MODULE_12__static_vant_toast_toast__["a" /* default */].fail('时间选择错误，请重新选择');
        this.timeValue = Object(__WEBPACK_IMPORTED_MODULE_8__utils_index__["d" /* getYear */])(new Date()) + '-' + this.multiArray[0][this.multiIndex[0]] + '  ' + this.getHour();
      }
    },
    bindMultiPickerColumnChange: function bindMultiPickerColumnChange(e) {
      console.log('修改的列为', e.mp.detail.column, '，值为', e.mp.detail.value);
    },
    getRemarkVal: function getRemarkVal(e) {
      this.remarkVal = e.mp.detail;
    },
    generateOrder: function generateOrder() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee2() {
        var orderNo, res;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                orderNo = Object(__WEBPACK_IMPORTED_MODULE_8__utils_index__["a" /* createOrderNo */])();
                _context2.next = 3;
                return __WEBPACK_IMPORTED_MODULE_10__api_index__["a" /* default */].createOrder({
                  productId: _this2.$store.state.productInfo.pid,
                  addressId: _this2.$store.state.addressInfo.aid,
                  userId: _this2.$store.state.miaoyiUser.uid,
                  orderNo: orderNo,
                  userMessage: _this2.remarkVal,
                  totalPrice: _this2.$store.state.productInfo.pprice,
                  payPrice: _this2.price,
                  placeTime: _this2.timeValue
                });

              case 3:
                res = _context2.sent;


                if (res.code === 1) {
                  __WEBPACK_IMPORTED_MODULE_11__static_vant_dialog_dialog__["a" /* default */].alert({
                    title: '订单号：' + orderNo,
                    message: '订单生成成功，立即支付'
                  }).then(function () {
                    _this2.$router.push({
                      path: '/pages/pay',
                      query: {
                        orderNo: orderNo
                      }
                    });
                  });
                } else {
                  __WEBPACK_IMPORTED_MODULE_12__static_vant_toast_toast__["a" /* default */].fail('订单生成失败，请重试！');
                }

              case 5:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this2);
      }))();
    },
    userUseCoupon: function userUseCoupon() {
      var _this3 = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee3() {
        var res;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return __WEBPACK_IMPORTED_MODULE_10__api_index__["a" /* default */].useCoupon({
                  userId: _this3.$store.state.miaoyiUser.uid,
                  couponId: _this3.$store.state.couponInfo.cid
                });

              case 2:
                res = _context3.sent;


                if (res.code === 1) {
                  console.log('success');
                } else {
                  __WEBPACK_IMPORTED_MODULE_12__static_vant_toast_toast__["a" /* default */].success('您中奖了！！！');
                }

              case 4:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, _this3);
      }))();
    }
  },
  watch: {
    '$store.state.couponInfo': function $storeStateCouponInfo() {
      if (this.couponInfo.cstatus === 1) {
        this.price = this.productInfo.pprice - this.couponInfo.cvalue;
      }

      if (this.couponInfo.cstatus === 2) {
        this.price = Math.ceil(this.productInfo.pprice * (this.couponInfo.cvalue / 10));
      }
    }
  }
});

/***/ }),

/***/ 246:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_address_card_vue__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_c51719f0_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_address_card_vue__ = __webpack_require__(249);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(247)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-c51719f0"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_address_card_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_c51719f0_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_address_card_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\components\\address_card.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] address_card.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-c51719f0", Component.options)
  } else {
    hotAPI.reload("data-v-c51719f0", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 247:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 248:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  props: {
    showVal: {
      type: Boolean
    },
    addressObj: {
      type: Object
    },
    city: {
      type: String
    }
  },
  data: function data() {
    return {};
  },

  methods: {
    chooseAddress: function chooseAddress() {
      this.$router.push({ path: '/pages/address', query: { id: 1 } });
    }
  }
});

/***/ }),

/***/ 249:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "address-card",
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": _vm.chooseAddress
    }
  }, [_c('div', {
    staticClass: "address-card-back"
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.showVal),
      expression: "showVal"
    }],
    staticClass: "address-card-icon"
  }, [_c('i-icon', {
    attrs: {
      "size": "18",
      "type": "coordinates",
      "mpcomid": '0'
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "address-text-else"
  }, [_vm._v("\n      服务地址\n    ")]), _vm._v(" "), (_vm.addressObj.aaddress !== undefined) ? _c('div', {
    staticClass: "address-text"
  }, [_c('div', {
    staticClass: "address-text-top"
  }, [_vm._v("\n        " + _vm._s(_vm.addressObj.aaddress) + "\n      ")]), _vm._v(" "), _c('div', {
    staticClass: "address-text-bottom"
  }, [_vm._v("\n        " + _vm._s(_vm.addressObj.aaddressDetail) + "\n      ")])]) : _c('div', {
    staticClass: "address-text-e"
  }, [_vm._v("\n      " + _vm._s(_vm.city) + "\n    ")]), _vm._v(" "), _c('div', {
    staticClass: "address-card-bottom-icon"
  }, [_vm._t("default", null, {
    mpcomid: '1'
  })], 2)])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-c51719f0", esExports)
  }
}

/***/ }),

/***/ 250:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_coupon_card_vue__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_7044c18c_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_coupon_card_vue__ = __webpack_require__(253);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(251)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-7044c18c"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_coupon_card_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_7044c18c_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_coupon_card_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\components\\coupon_card.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] coupon_card.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7044c18c", Component.options)
  } else {
    hotAPI.reload("data-v-7044c18c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 251:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 252:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  props: {
    tit: {
      type: String
    },
    couponObj: {
      type: Object
    },
    url: {
      type: String
    }
  },
  methods: {
    goSkip: function goSkip() {
      if (!(this.url === undefined)) {
        this.$router.push(this.url);
      }
    }
  }
});

/***/ }),

/***/ 253:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "address-card",
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": _vm.goSkip
    }
  }, [_c('div', {
    staticClass: "address-card-back"
  }, [_c('div', {
    staticClass: "address-card-icon"
  }, [_vm._t("default", null, {
    mpcomid: '0'
  })], 2), _vm._v(" "), _c('div', {
    staticClass: "address-text-else"
  }, [_vm._v("\n      " + _vm._s(_vm.tit) + "\n    ")]), _vm._v(" "), _c('div', {
    staticClass: "address-text-show"
  }, [(_vm.couponObj.cstatus === 1) ? _c('span', [_vm._v(_vm._s(_vm.couponObj.cvalue) + "元")]) : _vm._e(), _vm._v(" "), (_vm.couponObj.cstatus === 2) ? _c('span', [_vm._v(_vm._s(_vm.couponObj.cvalue) + "折")]) : _vm._e(), _vm._v(" "), _c('span')]), _vm._v(" "), _c('div', {
    staticClass: "address-card-bottom-icon"
  }, [_c('i-icon', {
    attrs: {
      "type": "enter",
      "size": "20",
      "color": "lightgrey",
      "mpcomid": '1'
    }
  })], 1)])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-7044c18c", esExports)
  }
}

/***/ }),

/***/ 254:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('addresscard', {
    attrs: {
      "addressObj": _vm.addressInfo,
      "city": _vm.city,
      "mpcomid": '1'
    }
  }, [_c('i-icon', {
    attrs: {
      "type": "enter",
      "size": "20",
      "color": "lightgrey",
      "mpcomid": '0'
    }
  })], 1), _vm._v(" "), _c('picker', {
    attrs: {
      "mode": "multiSelector",
      "value": _vm.multiIndex,
      "range": _vm.multiArray,
      "eventid": '0'
    },
    on: {
      "change": _vm.bindMultiPickerChange,
      "columnchange": _vm.bindMultiPickerColumnChange
    }
  }, [_c('titlecard', {
    attrs: {
      "tit": _vm.time,
      "timeVal": _vm.timeValue + '点',
      "mpcomid": '3'
    }
  }, [_c('i-icon', {
    attrs: {
      "type": "clock",
      "size": "18",
      "mpcomid": '2'
    }
  })], 1)], 1), _vm._v(" "), _c('div', {
    staticStyle: {
      "height": "15rpx",
      "background-color": "whitesmoke"
    }
  }), _vm._v(" "), _c('ordercard', {
    attrs: {
      "orderObj": _vm.productInfo,
      "mpcomid": '4'
    }
  }), _vm._v(" "), _vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "order-bot"
  }, [_c('div', {
    staticClass: "order-bot-con"
  }, [_c('div', {
    staticClass: "remark-ti"
  }, [_vm._v("用户备注信息:")]), _vm._v(" "), _c('van-field', {
    attrs: {
      "value": _vm.remarkVal,
      "placeholder": "请输入备注信息",
      "border": _vm.borderBo,
      "eventid": '1',
      "mpcomid": '5'
    },
    on: {
      "change": _vm.getRemarkVal
    }
  })], 1)]), _vm._v(" "), _c('div', {
    staticStyle: {
      "height": "15rpx"
    }
  }), _vm._v(" "), _c('couponcard', {
    attrs: {
      "tit": _vm.couponTit,
      "couponObj": _vm.couponInfo,
      "url": _vm.couponUrl,
      "mpcomid": '7'
    }
  }, [_c('i-icon', {
    attrs: {
      "type": "coupons",
      "size": "18",
      "mpcomid": '6'
    }
  })], 1), _vm._v(" "), _c('div', [_vm._v("我的积分： " + _vm._s(_vm.miaoyiUser.upoints) + "  "), _c('span', {
    attrs: {
      "eventid": '2'
    },
    on: {
      "click": _vm.usePoints
    }
  }, [_vm._v("使用积分")])]), _vm._v(" "), _c('div', {
    staticStyle: {
      "height": "25rpx"
    }
  }), _vm._v(" "), _c('div', {
    staticStyle: {
      "font-size": "9pt",
      "color": "#888",
      "text-align": "center"
    }
  }, [_vm._v("\n    优惠券在下单之后不会返还\n  ")]), _vm._v(" "), _c('div', {
    staticClass: "foot"
  }, [_c('div', {
    staticClass: "foot-price"
  }, [_vm._v("\n      合计: ￥" + _vm._s(_vm.price) + "\n    ")]), _vm._v(" "), _c('div', {
    staticClass: "foot-pay"
  }, [_c('div', {
    staticStyle: {
      "height": "10%"
    }
  }), _vm._v(" "), _c('i-button', {
    attrs: {
      "type": "error",
      "long": "true",
      "eventid": '3',
      "mpcomid": '8'
    },
    on: {
      "click": _vm.goPay
    }
  }, [_vm._v("立即预约")])], 1)]), _vm._v(" "), _c('van-dialog', {
    attrs: {
      "id": "van-dialog",
      "mpcomid": '9'
    }
  }), _vm._v(" "), _c('van-toast', {
    attrs: {
      "id": "van-toast",
      "mpcomid": '10'
    }
  })], 1)
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "fen-ge"
  }, [_c('div', {
    staticClass: "fen-ge-content"
  })])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-7464932e", esExports)
  }
}

/***/ })

},[312]);