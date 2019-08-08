require("../common/manifest.js")
require("../common/vendor.js")
global.webpackJsonp([4],{

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_node_modules_mpvue_config_loader_index_js_info_vue__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_69c75915_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_node_modules_mpvue_config_loader_index_js_info_vue__ = __webpack_require__(214);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(205)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-69c75915"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_node_modules_mpvue_config_loader_index_js_info_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_69c75915_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_node_modules_mpvue_config_loader_index_js_info_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\info.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] info.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-69c75915", Component.options)
  } else {
    hotAPI.reload("data-v-69c75915", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 205:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_title_card__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_button_card__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vuex__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__static_vant_dialog_dialog__ = __webpack_require__(28);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  computed: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_3_vuex__["c" /* mapState */])(['miaoyiUser', 'phone'])),
  components: {
    titlecard: __WEBPACK_IMPORTED_MODULE_1__components_title_card__["a" /* default */],
    buttoncard: __WEBPACK_IMPORTED_MODULE_2__components_button_card__["a" /* default */]
  },

  data: function data() {
    return {
      t1: '我的会员',
      t1url: '/pages/member',
      t2: '我的优惠',
      t2url: '/pages/coupon?isInfo=true',
      t3: '我的地址',
      t3url: '/pages/address',
      t4: '妙尚佳客服',
      openTypeVal: 'contact'
    };
  },
  mounted: function mounted() {},


  methods: {
    getPoints: function getPoints() {
      __WEBPACK_IMPORTED_MODULE_4__static_vant_dialog_dialog__["a" /* default */].alert({
        message: '积分只在会员充值时赠送,充值多少送多少积分'
      }).then(function () {// on close
      });
    },
    callPhone: function callPhone() {
      var _this = this;

      __WEBPACK_IMPORTED_MODULE_4__static_vant_dialog_dialog__["a" /* default */].confirm({
        message: '是否拨打电话'
      }).then(function () {
        wx.makePhoneCall({
          phoneNumber: _this.$store.state.phone
        });
      }).catch(function () {});
    },
    userGetLogin: function userGetLogin() {
      this.$router.push({
        path: '/pages/authorize'
      });
    }
  }
});

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_button_card_vue__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_dc40c000_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_button_card_vue__ = __webpack_require__(213);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(211)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-dc40c000"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_button_card_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_dc40c000_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_button_card_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\components\\button_card.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] button_card.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-dc40c000", Component.options)
  } else {
    hotAPI.reload("data-v-dc40c000", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 211:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 212:
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

/* harmony default export */ __webpack_exports__["a"] = ({
  props: {
    tit: {
      type: String
    },
    url: {
      type: String
    },
    openType: {
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

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('button', {
    staticClass: "address-card",
    attrs: {
      "open-type": _vm.openType
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
  }), _vm._v(" "), _c('div', {
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
     require("vue-hot-reload-api").rerender("data-v-dc40c000", esExports)
  }
}

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [(_vm.miaoyiUser.uname !== undefined) ? _c('div', {
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
  }, [_vm._v("\n                  VIP\n                ")]) : _c('i-tag', {
    staticClass: "i-tags",
    attrs: {
      "name": "单个标签",
      "color": "yellow",
      "mpcomid": '0'
    }
  }, [_vm._v("\n                  会员\n                ")])], 1), _vm._v(" "), _c('div', {
    staticClass: "na-point"
  }, [_vm._v("积分:" + _vm._s(_vm.miaoyiUser.upoints))])])])])]), _vm._v(" "), _c('div', {
    staticClass: "info-top-content-co"
  }, [_c('button', {
    staticClass: "get-points",
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": _vm.getPoints
    }
  }, [_vm._v("积分规则")])], 1)])]) : _c('div', {
    staticClass: "info-top"
  }, [_c('div', {
    staticClass: "info-top-content"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticStyle: {
      "width": "10%"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "na-no"
  }, [_c('div', {
    attrs: {
      "eventid": '1'
    },
    on: {
      "click": _vm.userGetLogin
    }
  }, [_vm._v("点击登录")])])])]), _vm._v(" "), _c('div', {
    staticClass: "info-bottom"
  }, [_c('div', {
    staticClass: "info-bottom-content"
  }, [_c('titlecard', {
    attrs: {
      "tit": _vm.t1,
      "url": _vm.t1url,
      "mpcomid": '2'
    }
  }, [_c('i', {
    staticClass: "iconfont icon-weibiaoti---copy-copy"
  })], 1), _vm._v(" "), _c('titlecard', {
    attrs: {
      "tit": _vm.t2,
      "url": _vm.t2url,
      "mpcomid": '3'
    }
  }, [_c('i', {
    staticClass: "iconfont icon-youhui"
  })], 1), _vm._v(" "), _c('titlecard', {
    attrs: {
      "tit": _vm.t3,
      "url": _vm.t3url,
      "mpcomid": '4'
    }
  }, [_c('i', {
    staticClass: "iconfont icon-dizhi"
  })], 1), _vm._v(" "), _c('buttoncard', {
    attrs: {
      "tit": _vm.t4,
      "openType": _vm.openTypeVal,
      "mpcomid": '5'
    }
  }, [_c('i', {
    staticClass: "iconfont icon-huabankafu"
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "address-card",
    attrs: {
      "eventid": '2'
    },
    on: {
      "click": _vm.callPhone
    }
  }, [_c('div', {
    staticClass: "address-card-back"
  }, [_c('div', {
    staticClass: "address-card-icon"
  }, [_c('i', {
    staticClass: "iconfont icon-rexian"
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "address-text-else"
  }, [_vm._v("\n            妙尚佳热线\n          ")]), _vm._v(" "), _c('div', {
    staticClass: "address-text-show"
  }), _vm._v(" "), _c('div', {
    staticClass: "address-card-bottom-icon"
  }, [_c('i-icon', {
    attrs: {
      "type": "enter",
      "size": "20",
      "color": "lightgrey",
      "mpcomid": '6'
    }
  })], 1)])])], 1)]), _vm._v(" "), _c('van-dialog', {
    attrs: {
      "id": "van-dialog",
      "mpcomid": '7'
    }
  })], 1)
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "else-touxing"
  }, [_c('div', {
    staticClass: "else-tupian"
  }, [_c('img', {
    staticStyle: {
      "width": "90%",
      "height": "90%",
      "border-radius": "50px"
    },
    attrs: {
      "src": "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3489251037,1613284493&fm=15&gp=0.jpg"
    }
  })])])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-69c75915", esExports)
  }
}

/***/ })

},[305]);