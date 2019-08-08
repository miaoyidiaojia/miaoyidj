require("../common/manifest.js")
require("../common/vendor.js")
global.webpackJsonp([10],{

/***/ 255:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_node_modules_mpvue_config_loader_index_js_member_vue__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_350cb141_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_node_modules_mpvue_config_loader_index_js_member_vue__ = __webpack_require__(258);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(256)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-350cb141"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_node_modules_mpvue_config_loader_index_js_member_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_350cb141_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_node_modules_mpvue_config_loader_index_js_member_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\member.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] member.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-350cb141", Component.options)
  } else {
    hotAPI.reload("data-v-350cb141", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 256:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 257:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vuex__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__api_index__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_pay__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_constant__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utils_index__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__static_vant_toast_toast__ = __webpack_require__(16);



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
  computed: __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_3_vuex__["c" /* mapState */])(['miaoyiUser', 'openid'])),

  mounted: function mounted() {
    this.getMemberRechargeValue();
    console.log('shuj', this.$store.state.miaoyiUser);
  },
  data: function data() {
    return {
      money: '',
      li: [],
      num: [],
      num1: []
    };
  },


  methods: {
    getMemberRechargeValue: function getMemberRechargeValue() {
      var _this = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        var list, list1, res, i, _i, _i2;

        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                list = [];
                list1 = [];
                _context.next = 4;
                return __WEBPACK_IMPORTED_MODULE_4__api_index__["a" /* default */].getMemberRecharge();

              case 4:
                res = _context.sent;


                if (res.code === 1) {
                  _this.li = res.data;

                  for (i in res.data) {
                    list.push(res.data[i].bbase);
                    list1.push(res.data[i].bgive);
                  }

                  list.sort(function (a, b) {
                    return a > b ? 1 : -1;
                  });
                  list1.sort(function (a, b) {
                    return a > b ? 1 : -1;
                  });

                  for (_i in list) {
                    _this.num.push(list[_i]);
                  }

                  for (_i2 in list1) {
                    _this.num1.push(list1[_i2]);
                  }
                }

              case 6:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    },
    pointsRule: function pointsRule() {
      this.$router.push({
        path: '/pages/consumeDetail'
      });
    },
    getMoney: function getMoney(e) {
      this.money = e.mp.detail;
    },
    recharge: function recharge() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee2() {
        var n1, n2, n3, n4, t1, t2, t3, t4, i, _i3, number, totalFee, orderNo, res;

        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                n1 = void 0, n2 = void 0, n3 = void 0, n4 = void 0;
                t1 = void 0, t2 = void 0, t3 = void 0, t4 = void 0;
                i = 0;

              case 3:
                if (!(i < _this2.num.length)) {
                  _context2.next = 18;
                  break;
                }

                _context2.t0 = i;
                _context2.next = _context2.t0 === 0 ? 7 : _context2.t0 === 1 ? 9 : _context2.t0 === 2 ? 11 : _context2.t0 === 3 ? 13 : 15;
                break;

              case 7:
                n1 = _this2.num[i];
                return _context2.abrupt('break', 15);

              case 9:
                n2 = _this2.num[i];
                return _context2.abrupt('break', 15);

              case 11:
                n3 = _this2.num[i];
                return _context2.abrupt('break', 15);

              case 13:
                n4 = _this2.num[i];
                return _context2.abrupt('break', 15);

              case 15:
                i++;
                _context2.next = 3;
                break;

              case 18:
                _i3 = 0;

              case 19:
                if (!(_i3 < _this2.num1.length)) {
                  _context2.next = 34;
                  break;
                }

                _context2.t1 = _i3;
                _context2.next = _context2.t1 === 0 ? 23 : _context2.t1 === 1 ? 25 : _context2.t1 === 2 ? 27 : _context2.t1 === 3 ? 29 : 31;
                break;

              case 23:
                t1 = _this2.num1[_i3];
                return _context2.abrupt('break', 31);

              case 25:
                t2 = _this2.num1[_i3];
                return _context2.abrupt('break', 31);

              case 27:
                t3 = _this2.num1[_i3];
                return _context2.abrupt('break', 31);

              case 29:
                t4 = _this2.num1[_i3];
                return _context2.abrupt('break', 31);

              case 31:
                _i3++;
                _context2.next = 19;
                break;

              case 34:
                number = parseInt(_this2.money);
                totalFee = void 0;


                if (number < n1) {
                  totalFee = number;
                } else if (number >= n1 && number < n2) {
                  totalFee = number + t1;
                } else if (number >= n2 && number < n3) {
                  totalFee = number + t2;
                } else if (number >= n3 && number < n4) {
                  totalFee = number + t3;
                } else {
                  totalFee = number + t4;
                }

                orderNo = Object(__WEBPACK_IMPORTED_MODULE_7__utils_index__["a" /* createOrderNo */])();
                _context2.next = 40;
                return __WEBPACK_IMPORTED_MODULE_4__api_index__["a" /* default */].createMemberOrder({
                  orderNo: orderNo,
                  uId: _this2.$store.state.miaoyiUser.uid,
                  totalFee: totalFee,
                  payFee: _this2.money
                });

              case 40:
                res = _context2.sent;

                if (!(res.code === 0)) {
                  _context2.next = 44;
                  break;
                }

                __WEBPACK_IMPORTED_MODULE_8__static_vant_toast_toast__["a" /* default */].fail('订单生成失败！');
                return _context2.abrupt('return');

              case 44:

                Object(__WEBPACK_IMPORTED_MODULE_5__utils_pay__["a" /* prePay */])({
                  bodyInfo: '会员充值',
                  outTradeNo: orderNo,
                  totalFee: _this2.money,
                  openid: _this2.$store.state.openid,
                  attach: __WEBPACK_IMPORTED_MODULE_6__utils_constant__["b" /* PAY */]
                });

              case 45:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this2);
      }))();
    }
  }
});

/***/ }),

/***/ 258:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "info-top"
  }, [_c('div', {
    staticClass: "info-top-content"
  }, [_c('div', {
    staticClass: "info-top-content-tx"
  }, [_c('div', {
    staticClass: "touxiang"
  }, [_c('div', {
    staticClass: "tupian"
  }, [_c('img', {
    staticStyle: {
      "width": "90%",
      "height": "90%",
      "border-radius": "50px"
    },
    attrs: {
      "src": _vm.miaoyiUser.uavatar
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "na"
  }, [_c('div', {
    staticStyle: {
      "width": "90%",
      "height": "100%"
    }
  }, [_c('div', {
    staticClass: "na-name"
  }, [_vm._v(_vm._s(_vm.miaoyiUser.uname))]), _vm._v(" "), _c('div', {
    staticClass: "na-tag"
  }, [(_vm.miaoyiUser.ustatus) ? _c('i-tag', {
    staticClass: "i-tags",
    attrs: {
      "name": "单个标签",
      "color": "yellow",
      "mpcomid": '1'
    }
  }, [_vm._v("\n                    VIP\n                  ")]) : _c('i-tag', {
    staticClass: "i-tags",
    attrs: {
      "name": "单个标签",
      "color": "yellow",
      "mpcomid": '0'
    }
  }, [_vm._v("\n                    会员\n                  ")])], 1), _vm._v(" "), _c('div', {
    staticClass: "na-point"
  }, [_vm._v("积分:" + _vm._s(_vm.miaoyiUser.upoints))])])])])]), _vm._v(" "), _c('div', {
    staticClass: "info-top-content-co"
  }, [_c('button', {
    staticClass: "get-points",
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": _vm.pointsRule
    }
  }, [_vm._v("消费明细")])], 1)])]), _vm._v(" "), _c('div', [_c('div', {
    staticClass: "member-money"
  }, [_c('div', {
    staticClass: "wo-qian"
  }, [_c('div', {
    staticClass: "yu-e"
  }, [_vm._v("余额:")]), _vm._v(" "), _c('div', {
    staticClass: "sheng-qian"
  }, [_vm._v(_vm._s(_vm.miaoyiUser.umemberMoney) + "元")])])]), _vm._v(" "), _c('div', {
    staticStyle: {
      "height": "15rpx",
      "background-color": "whitesmoke"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "member-cz"
  }, [_c('i-button', {
    attrs: {
      "inline": "",
      "type": "error",
      "eventid": '1',
      "mpcomid": '2'
    },
    on: {
      "click": _vm.recharge
    }
  }, [_vm._v("充500送100")]), _vm._v(" "), _c('i-button', {
    attrs: {
      "inline": "",
      "type": "error",
      "eventid": '2',
      "mpcomid": '3'
    },
    on: {
      "click": _vm.recharge
    }
  }, [_vm._v("充1000送200")]), _vm._v(" "), _c('i-button', {
    attrs: {
      "inline": "",
      "type": "error",
      "eventid": '3',
      "mpcomid": '4'
    },
    on: {
      "click": _vm.recharge
    }
  }, [_vm._v("2000元")])], 1), _vm._v(" "), _c('div', {
    staticStyle: {
      "height": "55rpx"
    }
  }), _vm._v(" "), _vm._l((_vm.li), function(item, index) {
    return _c('button', {
      key: index
    }, [_vm._v("充" + _vm._s(item.bbase) + "送" + _vm._s(item.bgive))])
  }), _vm._v(" "), _c('div', {
    staticClass: "addInput"
  }, [_c('div', {
    staticStyle: {
      "width": "90%"
    }
  }, [_c('van-field', {
    attrs: {
      "value": _vm.money,
      "type": "number",
      "label": "充值金额",
      "placeholder": "请输入充值金额",
      "eventid": '4',
      "mpcomid": '5'
    },
    on: {
      "change": _vm.getMoney
    }
  })], 1)])], 2), _vm._v(" "), _c('div', {
    staticClass: "member-foot"
  }, [_c('i-button', {
    attrs: {
      "type": "error",
      "long": "true",
      "eventid": '5',
      "mpcomid": '6'
    },
    on: {
      "click": _vm.recharge
    }
  }, [_vm._v("充值")])], 1), _vm._v(" "), _c('van-toast', {
    attrs: {
      "id": "van-toast",
      "mpcomid": '7'
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
     require("vue-hot-reload-api").rerender("data-v-350cb141", esExports)
  }
}

/***/ })

},[313]);