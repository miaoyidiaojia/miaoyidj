require("../common/manifest.js")
require("../common/vendor.js")
global.webpackJsonp([18],{

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_node_modules_mpvue_config_loader_index_js_addressEditor_vue__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_e8c2c6ac_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_node_modules_mpvue_config_loader_index_js_addressEditor_vue__ = __webpack_require__(278);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(276)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-e8c2c6ac"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_node_modules_mpvue_config_loader_index_js_addressEditor_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_e8c2c6ac_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_node_modules_mpvue_config_loader_index_js_addressEditor_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\addressEditor.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] addressEditor.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-e8c2c6ac", Component.options)
  } else {
    hotAPI.reload("data-v-e8c2c6ac", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 276:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 277:
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__static_vant_toast_toast__ = __webpack_require__(16);



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
  computed: __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_3_vuex__["c" /* mapState */])(['miaoyiUser'])),

  mounted: function mounted() {
    this.isAdd = this.$route.query.isAdd !== undefined;

    if (this.$route.query.item === undefined) {
      this.userName = '';
      this.userPhone = '';
      this.addressVal = '';
      this.addressDtl = '';
    } else {
      var da = JSON.parse(this.$route.query.item);
      this.userName = da.aname;
      this.userPhone = da.amobile;
      this.addressVal = da.aaddress;
      this.addressDtl = da.aaddressDetail;
      this.addressId = da.aid;
    }
  },
  data: function data() {
    return {
      column1: ['武侯区', '锦江区', '青羊区', '金牛区', '成华区', '龙泉驿区', '温江区', '新都区', '青白江区', '双流区', '郫都区'],
      borderVal: false,
      addressId: '',
      userName: '',
      userPhone: '',
      addressDtl: '',
      addressVal: '',
      isAdd: false,
      showBottom: false
    };
  },


  methods: {
    chAddress: function chAddress() {
      this.showBottom = !this.showBottom;
    },
    onChange1: function onChange1(event) {
      var value = event.mp.detail.value;

      console.log('获取到的值:', value);
    },
    onConfirm: function onConfirm(event) {
      var value = event.mp.detail.value;

      this.addressVal = value;
      this.showBottom = false;
    },
    onCancel: function onCancel() {
      this.showBottom = false;
    },
    updateMyAddress: function updateMyAddress() {
      this.userUpdateAddress();
      this.$router.push({
        path: '/pages/address'
      });
    },
    deleteMyAddress: function deleteMyAddress() {
      this.userDeteleAddress();
      this.$router.push({
        path: '/pages/address'
      });
    },
    addMyAddress: function addMyAddress() {
      this.userAddAddress();
      this.$router.push({
        path: '/pages/address'
      });
    },
    onChange2: function onChange2(e) {
      this.userName = e.mp.detail;
    },
    onChange3: function onChange3(e) {
      this.userPhone = e.mp.detail;
    },
    onChange4: function onChange4(e) {
      this.addressDtl = e.mp.detail;
    },
    userUpdateAddress: function userUpdateAddress() {
      var _this = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        var res;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return __WEBPACK_IMPORTED_MODULE_4__api_index__["a" /* default */].updateAddress({
                  addressId: _this.addressId,
                  addressInfo: _this.addressVal,
                  addressDetailInfo: _this.addressDtl,
                  addressName: _this.userName,
                  addressPhone: _this.userPhone
                });

              case 2:
                res = _context.sent;


                if (res.code === 1) {
                  __WEBPACK_IMPORTED_MODULE_5__static_vant_toast_toast__["a" /* default */].success('更新成功');
                } else {
                  __WEBPACK_IMPORTED_MODULE_5__static_vant_toast_toast__["a" /* default */].fail('更新失败');
                }

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    },
    userDeteleAddress: function userDeteleAddress() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee2() {
        var res;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return __WEBPACK_IMPORTED_MODULE_4__api_index__["a" /* default */].deleteAddress(_this2.addressId);

              case 2:
                res = _context2.sent;


                if (res.code === 1) {
                  __WEBPACK_IMPORTED_MODULE_5__static_vant_toast_toast__["a" /* default */].success('删除成功');
                } else {
                  __WEBPACK_IMPORTED_MODULE_5__static_vant_toast_toast__["a" /* default */].fail('删除失败');
                }

              case 4:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this2);
      }))();
    },
    userAddAddress: function userAddAddress() {
      var _this3 = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee3() {
        var res;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return __WEBPACK_IMPORTED_MODULE_4__api_index__["a" /* default */].addAddress({
                  address: _this3.addressVal,
                  addressDetail: _this3.addressDtl,
                  addressPhone: _this3.userPhone,
                  addressName: _this3.userName,
                  uid: _this3.$store.state.miaoyiUser.uid
                });

              case 2:
                res = _context3.sent;


                if (res.code === 1) {
                  __WEBPACK_IMPORTED_MODULE_5__static_vant_toast_toast__["a" /* default */].success('添加成功');
                } else {
                  __WEBPACK_IMPORTED_MODULE_5__static_vant_toast_toast__["a" /* default */].fail('添加失败');
                }

              case 4:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, _this3);
      }))();
    }
  }
});

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('van-cell-group', {
    attrs: {
      "mpcomid": '6'
    }
  }, [_c('van-field', {
    attrs: {
      "value": _vm.userName,
      "label": "联系人",
      "placeholder": "姓名",
      "eventid": '0',
      "mpcomid": '0'
    },
    on: {
      "change": _vm.onChange2
    }
  }), _vm._v(" "), _c('van-field', {
    attrs: {
      "value": _vm.userPhone,
      "type": "number",
      "label": "手机号",
      "placeholder": "将通过此手机联系你",
      "eventid": '1',
      "mpcomid": '1'
    },
    on: {
      "change": _vm.onChange3
    }
  }), _vm._v(" "), _c('van-cell', {
    attrs: {
      "title": "地址",
      "is-link": "",
      "value": _vm.addressVal,
      "eventid": '2',
      "mpcomid": '2'
    },
    on: {
      "click": _vm.chAddress
    }
  }), _vm._v(" "), _c('van-popup', {
    attrs: {
      "show": _vm.showBottom,
      "position": "bottom",
      "custom-class": "bottom",
      "eventid": '4',
      "mpcomid": '4'
    },
    on: {
      "close": _vm.chAddress
    }
  }, [_c('van-picker', {
    attrs: {
      "show-toolbar": "",
      "title": "从成都市区选择",
      "columns": _vm.column1,
      "eventid": '3',
      "mpcomid": '3'
    },
    on: {
      "change": _vm.onChange1,
      "confirm": _vm.onConfirm,
      "cancel": _vm.onCancel
    }
  })], 1), _vm._v(" "), _c('van-field', {
    attrs: {
      "value": _vm.addressDtl,
      "placeholder": "详细地址",
      "border": _vm.borderVal,
      "eventid": '5',
      "mpcomid": '5'
    },
    on: {
      "change": _vm.onChange4
    }
  })], 1), _vm._v(" "), _c('div', {
    staticStyle: {
      "height": "50rpx"
    }
  }), _vm._v(" "), (_vm.isAdd) ? _c('div', [_c('van-button', {
    attrs: {
      "size": "large",
      "type": "danger",
      "eventid": '6',
      "mpcomid": '7'
    },
    on: {
      "click": _vm.addMyAddress
    }
  }, [_vm._v("保存")])], 1) : _c('div', {
    staticClass: "bu"
  }, [_c('van-button', {
    attrs: {
      "type": "default",
      "eventid": '7',
      "mpcomid": '8'
    },
    on: {
      "click": _vm.deleteMyAddress
    }
  }, [_vm._v("删除")]), _vm._v(" "), _c('van-button', {
    attrs: {
      "type": "danger",
      "eventid": '8',
      "mpcomid": '9'
    },
    on: {
      "click": _vm.updateMyAddress
    }
  }, [_vm._v("保存")])], 1), _vm._v(" "), _c('van-toast', {
    attrs: {
      "id": "van-toast",
      "mpcomid": '10'
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
     require("vue-hot-reload-api").rerender("data-v-e8c2c6ac", esExports)
  }
}

/***/ })

},[316]);