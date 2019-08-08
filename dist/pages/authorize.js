require("../common/manifest.js")
require("../common/vendor.js")
global.webpackJsonp([15],{

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_node_modules_mpvue_config_loader_index_js_authorize_vue__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_eae502dc_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_node_modules_mpvue_config_loader_index_js_authorize_vue__ = __webpack_require__(203);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(201)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_node_modules_mpvue_config_loader_index_js_authorize_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_eae502dc_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_node_modules_mpvue_config_loader_index_js_authorize_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\authorize.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] authorize.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-eae502dc", Component.options)
  } else {
    hotAPI.reload("data-v-eae502dc", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 201:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api_index__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_constant__ = __webpack_require__(29);
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



/* harmony default export */ __webpack_exports__["a"] = ({
  methods: __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_5_vuex__["b" /* mapMutations */])(['saveMiaoyiUser', 'saveOpenid']), {
    onGotUserInfo: function onGotUserInfo(e) {
      var _this = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (e.mp.detail.errMsg === 'getUserInfo:ok') {
                  wx.login({
                    success: function success(res) {
                      if (res.code) {
                        // 发起网络请求
                        _this.code2Session(res.code);
                      } else {
                        console.log('登录失败！' + res.errMsg);
                      }
                    }
                  });
                }

              case 1:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    },
    code2Session: function code2Session(code) {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee2() {
        var res, openid, _res;

        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return __WEBPACK_IMPORTED_MODULE_3__api_index__["a" /* default */].wxLogin({
                  appid: __WEBPACK_IMPORTED_MODULE_4__utils_constant__["a" /* APPID */],
                  code: code
                });

              case 2:
                res = _context2.sent;

                if (!res.openid) {
                  _context2.next = 10;
                  break;
                }

                openid = res.openid;

                _this2.saveOpenid(openid);
                wx.getUserInfo({
                  success: function success(r) {
                    _this2.userRrgister(openid, r.userInfo.nickName, r.userInfo.avatarUrl);
                  }
                });
                _this2.$router.back(-1);
                _context2.next = 14;
                break;

              case 10:
                _context2.next = 12;
                return wx.showModal({
                  title: 'appid有误',
                  content: '授权失败'
                });

              case 12:
                _res = _context2.sent;


                if (_res.confirm) {
                  _this2.$router.back(-1);
                }

              case 14:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this2);
      }))();
    },
    refuse: function refuse() {
      this.$router.back(-1);
    },
    userRrgister: function userRrgister(openid, nickName, avatarUrl) {
      var _this3 = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee3() {
        var re, result;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return __WEBPACK_IMPORTED_MODULE_3__api_index__["a" /* default */].userRegister({
                  openid: openid,
                  username: nickName,
                  avatar: avatarUrl
                });

              case 2:
                re = _context3.sent;

                if (!(re.code !== 0)) {
                  _context3.next = 8;
                  break;
                }

                _context3.next = 6;
                return __WEBPACK_IMPORTED_MODULE_3__api_index__["a" /* default */].getUserDetail(openid);

              case 6:
                result = _context3.sent;


                if (result.code === 1) {
                  _this3.saveMiaoyiUser(result.data);
                } else {
                  wx.showToast({
                    title: '获取用户失败',
                    icon: 'cancel',
                    duration: 2000
                  });
                }

              case 8:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, _this3);
      }))();
    }
  })
});

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "authorize-contianer"
  }, [_c('img', {
    staticClass: "authorize-icon",
    attrs: {
      "src": "/static/img/authorize.png"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "auth-item"
  }, [_vm._v("妙尚佳申请获取以下权限：")]), _vm._v(" "), _c('div', {
    staticClass: "auth-item"
  }, [_vm._v("获取你的公开信息（头像、昵称等）")]), _vm._v(" "), _c('div', {
    staticClass: "btn-authorize"
  }, [_c('button', {
    attrs: {
      "open-type": "getUserInfo",
      "type": "primary",
      "lang": "zh_CN",
      "eventid": '0'
    },
    on: {
      "getuserinfo": _vm.onGotUserInfo
    }
  }, [_vm._v("授权登录")])], 1), _vm._v(" "), _c('div', {
    staticClass: "btn-authorize"
  }, [_c('button', {
    attrs: {
      "type": "warn",
      "lang": "zh_CN",
      "eventid": '1'
    },
    on: {
      "click": _vm.refuse
    }
  }, [_vm._v("拒绝")])], 1)])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-eae502dc", esExports)
  }
}

/***/ })

},[304]);