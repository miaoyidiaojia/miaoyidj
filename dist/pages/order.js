require("../common/manifest.js")
require("../common/vendor.js")
global.webpackJsonp([3],{

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_node_modules_mpvue_config_loader_index_js_order_vue__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_7103b3f7_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_node_modules_mpvue_config_loader_index_js_order_vue__ = __webpack_require__(227);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(220)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-7103b3f7"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_node_modules_mpvue_config_loader_index_js_order_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_7103b3f7_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_node_modules_mpvue_config_loader_index_js_order_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\order.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] order.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7103b3f7", Component.options)
  } else {
    hotAPI.reload("data-v-7103b3f7", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 220:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_order_intro__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__api_index__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_vuex__ = __webpack_require__(5);



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



/* harmony default export */ __webpack_exports__["a"] = ({
  computed: __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_5_vuex__["c" /* mapState */])(['miaoyiUser'])),
  components: {
    orderintro: __WEBPACK_IMPORTED_MODULE_3__components_order_intro__["a" /* default */]
  },

  onShow: function onShow() {
    this.contro = this.$store.state.miaoyiUser.uname !== undefined;
  },
  mounted: function mounted() {
    this.getUserAllOrder();
  },
  data: function data() {
    return {
      active: 0,
      orderVal: [],
      noPayVal: [],
      payVal: [],
      finishVal: [],
      contro: true
    };
  },


  methods: {
    onChange: function onChange(event) {
      this.active = event.mp.detail.index;
    },
    getUserAllOrder: function getUserAllOrder() {
      var _this = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        var res, i;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return __WEBPACK_IMPORTED_MODULE_4__api_index__["a" /* default */].getUserOrder(_this.$store.state.miaoyiUser.uid);

              case 2:
                res = _context.sent;

                if (!(res.code === 1)) {
                  _context.next = 19;
                  break;
                }

                _this.orderVal = res.data;

                _context.t0 = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.keys(res.data);

              case 6:
                if ((_context.t1 = _context.t0()).done) {
                  _context.next = 19;
                  break;
                }

                i = _context.t1.value;
                _context.t2 = res.data[i].ostatus;
                _context.next = _context.t2 === 1 ? 11 : _context.t2 === 2 ? 13 : _context.t2 === 3 ? 15 : 17;
                break;

              case 11:
                _this.noPayVal.push(res.data[i]);
                return _context.abrupt('break', 17);

              case 13:
                _this.payVal.push(res.data[i]);
                return _context.abrupt('break', 17);

              case 15:
                _this.finishVal.push(res.data[i]);
                return _context.abrupt('break', 17);

              case 17:
                _context.next = 6;
                break;

              case 19:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    }
  }
});

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_order_intro_vue__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_83869984_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_order_intro_vue__ = __webpack_require__(226);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(223)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-83869984"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_order_intro_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_83869984_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_order_intro_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\components\\order_intro.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] order_intro.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-83869984", Component.options)
  } else {
    hotAPI.reload("data-v-83869984", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 223:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vuex__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__static_vant_dialog_dialog__ = __webpack_require__(28);


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



/* harmony default export */ __webpack_exports__["a"] = ({
  props: {
    orderVal: {
      type: Object
    }
  },
  computed: __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_2_vuex__["c" /* mapState */])(['phone'])),
  data: function data() {
    return {
      payState: '',
      buttonVal: ''
    };
  },
  mounted: function mounted() {
    switch (this.orderVal.ostatus) {
      case 0:
        this.payState = '已取消';
        this.buttonVal = '联系商家';
        break;
      case 1:
        this.payState = '待付款';
        this.buttonVal = '去支付';
        break;
      case 2:
        this.payState = '已支付';
        this.buttonVal = '联系商家';
        break;
      case 3:
        this.payState = '已完成';
        this.buttonVal = '去评价';
        break;
    }
  },

  methods: {
    checkOrderDetail: function checkOrderDetail(e) {
      console.log('订单:', e.mp.currentTarget.dataset.item);
      this.$router.push({ path: '/pages/orderDetail', query: { item: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(e.mp.currentTarget.dataset.item) } });
    },
    buttonClick: function buttonClick() {
      var _this = this;

      switch (this.orderVal.ostatus) {
        case 0:
        case 2:
          __WEBPACK_IMPORTED_MODULE_3__static_vant_dialog_dialog__["a" /* default */].confirm({
            message: '是否拨打电话'
          }).then(function () {
            wx.makePhoneCall({
              phoneNumber: _this.$store.state.phone
            });
          }).catch(function () {});
          break;
        case 1:
          this.$router.push({ path: '/pages/pay', query: { orderNo: this.orderVal.onumber } });
          break;
        case 3:
          this.$router.push({ path: '/pages/appraiseAdd' });
          break;
      }
    }
  }
});

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "cont"
  }, [_c('div', {
    staticClass: "intro-container",
    attrs: {
      "data-item": _vm.orderVal,
      "eventid": '0'
    },
    on: {
      "click": _vm.checkOrderDetail
    }
  }, [_c('div', {
    staticClass: "intro-content"
  }, [_c('div', {
    staticClass: "intro-top"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "intro-top-state"
  }, [_vm._v(_vm._s(_vm.payState))])]), _vm._v(" "), _c('div', {
    staticClass: "intro-content-middle"
  }, [_c('div', {
    staticClass: "intro-content-middle-content"
  }, [_c('van-icon', {
    attrs: {
      "name": "clock-o",
      "size": "11",
      "mpcomid": '0'
    }
  }), _vm._v(" "), _c('div', {
    staticStyle: {
      "width": "2%"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "middle-content-text"
  }, [_vm._v(_vm._s(_vm.orderVal.osubscribeTime) + "点")])], 1), _vm._v(" "), _c('div', {
    staticClass: "intro-content-middle-content"
  }, [_c('van-icon', {
    attrs: {
      "name": "location-o",
      "size": "11",
      "mpcomid": '1'
    }
  }), _vm._v(" "), _c('div', {
    staticStyle: {
      "width": "2%"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "middle-content-text"
  }, [_vm._v(_vm._s(_vm.orderVal.address.aaddress) + " " + _vm._s(_vm.orderVal.address.aaddressDetail))])], 1)])])]), _vm._v(" "), _c('div', {
    staticStyle: {
      "height": "10rpx"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "intro-button"
  }, [_c('van-button', {
    attrs: {
      "plain": "",
      "hairline": "",
      "type": "danger",
      "size": "small",
      "eventid": '1',
      "mpcomid": '2'
    },
    on: {
      "click": _vm.buttonClick
    }
  }, [_vm._v(_vm._s(_vm.buttonVal))])], 1), _vm._v(" "), _c('van-dialog', {
    attrs: {
      "id": "van-dialog",
      "mpcomid": '3'
    }
  })], 1)
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "intro-top-name"
  }, [_c('div', {
    staticClass: "intro-top-name-img"
  }, [_c('div', {
    staticStyle: {
      "height": "80%",
      "width": "70%"
    }
  }, [_c('img', {
    staticStyle: {
      "height": "100%",
      "width": "100%"
    },
    attrs: {
      "src": "/static/img/sj.png",
      "alt": ""
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "intro-top-name-name"
  }, [_vm._v("妙尚佳到家服务")])])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-83869984", esExports)
  }
}

/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.contro) ? _c('div', [(_vm.orderVal.length > 0) ? _c('div', [_c('van-tabs', {
    attrs: {
      "sticky": "",
      "animated": "",
      "swipeable": "",
      "active": _vm.active,
      "eventid": '0',
      "mpcomid": '8'
    },
    on: {
      "change": _vm.onChange
    }
  }, [_c('van-tab', {
    attrs: {
      "title": "全部订单",
      "mpcomid": '1'
    }
  }, _vm._l((_vm.orderVal), function(item, index) {
    return _c('div', {
      key: index
    }, [_c('orderintro', {
      attrs: {
        "orderVal": item,
        "mpcomid": '0_' + index
      }
    })], 1)
  })), _vm._v(" "), _c('van-tab', {
    attrs: {
      "title": "未支付",
      "mpcomid": '3'
    }
  }, _vm._l((_vm.noPayVal), function(item, index) {
    return _c('div', {
      key: index
    }, [_c('orderintro', {
      attrs: {
        "orderVal": item,
        "mpcomid": '2_' + index
      }
    })], 1)
  })), _vm._v(" "), _c('van-tab', {
    attrs: {
      "title": "已支付",
      "mpcomid": '5'
    }
  }, _vm._l((_vm.payVal), function(item, index) {
    return _c('div', {
      key: index
    }, [_c('orderintro', {
      attrs: {
        "orderVal": item,
        "mpcomid": '4_' + index
      }
    })], 1)
  })), _vm._v(" "), _c('van-tab', {
    attrs: {
      "title": "已完成",
      "mpcomid": '7'
    }
  }, _vm._l((_vm.finishVal), function(item, index) {
    return _c('div', {
      key: index
    }, [_c('orderintro', {
      attrs: {
        "orderVal": item,
        "mpcomid": '6_' + index
      }
    })], 1)
  }))], 1)], 1) : _c('div', {
    staticClass: "order-else"
  }, [_vm._v("\n    您还没有订单！\n  ")])]) : _c('div', [_vm._v("\n  你还未登录\n")])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-7103b3f7", esExports)
  }
}

/***/ })

},[309]);