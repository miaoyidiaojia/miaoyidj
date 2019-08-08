require("../common/manifest.js")
require("../common/vendor.js")
global.webpackJsonp([8],{

/***/ 235:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_node_modules_mpvue_config_loader_index_js_pay_vue__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_059eb091_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_node_modules_mpvue_config_loader_index_js_pay_vue__ = __webpack_require__(238);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(236)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-059eb091"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_node_modules_mpvue_config_loader_index_js_pay_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_059eb091_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_node_modules_mpvue_config_loader_index_js_pay_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\pay.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] pay.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-059eb091", Component.options)
  } else {
    hotAPI.reload("data-v-059eb091", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 236:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 237:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_order_card__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_vuex__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__static_vant_toast_toast__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__api_index__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utils_pay__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__utils_constant__ = __webpack_require__(29);



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






/* harmony default export */ __webpack_exports__["a"] = ({
  components: {
    ordercard: __WEBPACK_IMPORTED_MODULE_3__components_order_card__["a" /* default */]
  },
  computed: __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_4_vuex__["c" /* mapState */])(['miaoyiUser', 'openid'])),

  mounted: function mounted() {
    this.getOrderInfo(this.$route.query.orderNo);
  },
  data: function data() {
    return {
      show: false,
      actions: [{
        id: 1,
        name: '微信支付'
      }, {
        id: 2,
        name: '会员余额'
      }],
      borderBu: false,
      orderInfo: {},
      product: {},
      addressDet: '',
      ti: '' + '点',
      remark: '',
      pri: ''
    };
  },


  methods: __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_4_vuex__["b" /* mapMutations */])(['saveMiaoyiUser']), {
    getOrderInfo: function getOrderInfo(orderNo) {
      var _this = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        var res;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return __WEBPACK_IMPORTED_MODULE_6__api_index__["a" /* default */].getOrderDetail(orderNo);

              case 2:
                res = _context.sent;


                if (res.code === 1) {
                  _this.product = res.data.product;
                  _this.addressDet = res.data.address.aaddress + ' ' + res.data.address.aaddressDetail;
                  _this.ti = res.data.osubscribeTime;
                  _this.remark = res.data.ouserMessage;
                  _this.pri = res.data.opayPrice;
                }

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    },
    confirmPay: function confirmPay() {
      this.show = !this.show;
    },
    actionsClose: function actionsClose() {
      this.show = false;
    },
    actionsCancel: function actionsCancel() {
      this.show = false;
    },
    actionsSelect: function actionsSelect(e) {
      var number = parseInt(this.pri);

      if (e.mp.detail.id === 2) {
        console.log(this.$store.state.miaoyiUser.umemberMoney);
        console.log(this.pri);

        if (this.$store.state.miaoyiUser.umemberMoney < number) {
          this.show = false;
          __WEBPACK_IMPORTED_MODULE_5__static_vant_toast_toast__["a" /* default */].fail('会员余额不足，请充值！');
        } else {
          this.show = false;
          this.$store.state.miaoyiUser.umemberMoney -= number;
          console.log('会员', this.$store.state.miaoyiUser);
          this.memberPay({
            id: this.$store.state.miaoyiUser.uid,
            name: this.$store.state.miaoyiUser.uname,
            status: this.$store.state.miaoyiUser.ustatus,
            openid: this.$store.state.miaoyiUser.uopenid,
            meney: this.$store.state.miaoyiUser.umemberMoney,
            avater: this.$store.state.miaoyiUser.uavatar,
            points: this.$store.state.miaoyiUser.upoints,
            time: this.$store.state.miaoyiUser.upointUpdateTime
          });
          this.saveMiaoyiUser(this.$store.state.miaoyiUser);
        }

        return;
      }

      if (e.mp.detail.id === 1) {
        this.show = false;
        Object(__WEBPACK_IMPORTED_MODULE_7__utils_pay__["a" /* prePay */])({
          bodyInfo: this.product.pname,
          outTradeNo: this.$route.query.orderNo,
          totalFee: this.pri,
          openid: this.$store.state.openid,
          attach: __WEBPACK_IMPORTED_MODULE_8__utils_constant__["c" /* RECHARGE */]
        });
      }
    },
    memberPay: function memberPay(user) {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee2() {
        var res, r;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return __WEBPACK_IMPORTED_MODULE_6__api_index__["a" /* default */].memberPay(user);

              case 2:
                res = _context2.sent;

                if (!(res.code === 1)) {
                  _context2.next = 13;
                  break;
                }

                _context2.next = 6;
                return __WEBPACK_IMPORTED_MODULE_6__api_index__["a" /* default */].updateOrder(_this2.$route.query.orderNo);

              case 6:
                r = _context2.sent;

                if (!(r.code === 1)) {
                  _context2.next = 10;
                  break;
                }

                __WEBPACK_IMPORTED_MODULE_5__static_vant_toast_toast__["a" /* default */].success('购买成功');
                return _context2.abrupt('return');

              case 10:

                __WEBPACK_IMPORTED_MODULE_5__static_vant_toast_toast__["a" /* default */].fail('购买失败！请联系商家');
                _context2.next = 14;
                break;

              case 13:
                __WEBPACK_IMPORTED_MODULE_5__static_vant_toast_toast__["a" /* default */].fail('会员支付失败！请联系商家');

              case 14:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this2);
      }))();
    }
  })
});

/***/ }),

/***/ 238:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('ordercard', {
    attrs: {
      "orderObj": _vm.product,
      "mpcomid": '0'
    }
  }), _vm._v(" "), _c('div', {
    staticStyle: {
      "height": "15rpx",
      "background-color": "whitesmoke"
    }
  }), _vm._v(" "), _c('van-cell-group', {
    attrs: {
      "mpcomid": '5'
    }
  }, [_c('van-field', {
    attrs: {
      "value": _vm.addressDet,
      "label": "服务地址",
      "disabled": "",
      "border": _vm.borderBu,
      "mpcomid": '1'
    }
  }), _vm._v(" "), _c('van-field', {
    attrs: {
      "value": _vm.ti,
      "label": "预约时间",
      "disabled": "",
      "border": _vm.borderBu,
      "mpcomid": '2'
    }
  }), _vm._v(" "), _c('van-field', {
    attrs: {
      "value": _vm.remark,
      "label": "备注信息",
      "disabled": "",
      "border": _vm.borderBu,
      "mpcomid": '3'
    }
  }), _vm._v(" "), _c('van-field', {
    attrs: {
      "value": _vm.pri,
      "label": "实际支付",
      "disabled": "",
      "error": "",
      "border": _vm.borderBu,
      "mpcomid": '4'
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "foot"
  }, [_c('i-button', {
    attrs: {
      "type": "error",
      "long": "true",
      "eventid": '0',
      "mpcomid": '6'
    },
    on: {
      "click": _vm.confirmPay
    }
  }, [_vm._v("支付")])], 1), _vm._v(" "), _c('van-action-sheet', {
    attrs: {
      "show": _vm.show,
      "actions": _vm.actions,
      "cancel-text": "取消",
      "eventid": '1',
      "mpcomid": '7'
    },
    on: {
      "close": _vm.actionsClose,
      "cancel": _vm.actionsCancel,
      "select": _vm.actionsSelect
    }
  }), _vm._v(" "), _c('van-toast', {
    attrs: {
      "id": "van-toast",
      "mpcomid": '8'
    }
  })], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-059eb091", esExports)
  }
}

/***/ })

},[311]);