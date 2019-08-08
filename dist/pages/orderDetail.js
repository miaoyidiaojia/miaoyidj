require("../common/manifest.js")
require("../common/vendor.js")
global.webpackJsonp([9],{

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_node_modules_mpvue_config_loader_index_js_orderDetail_vue__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_0bd454a8_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_node_modules_mpvue_config_loader_index_js_orderDetail_vue__ = __webpack_require__(234);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(229)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-0bd454a8"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_node_modules_mpvue_config_loader_index_js_orderDetail_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_0bd454a8_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_node_modules_mpvue_config_loader_index_js_orderDetail_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\orderDetail.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] orderDetail.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0bd454a8", Component.options)
  } else {
    hotAPI.reload("data-v-0bd454a8", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 229:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_order_card__ = __webpack_require__(42);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    ordercard: __WEBPACK_IMPORTED_MODULE_0__components_order_card__["a" /* default */]
  },

  mounted: function mounted() {
    var r = JSON.parse(this.$route.query.item);
    this.orderItem = r;
    this.productItem = r.product;
    this.addressItem = r.address;
  },
  data: function data() {
    return {
      stateVal: 0,
      orderItem: {},
      productItem: {},
      addressItem: {}
    };
  }
});

/***/ }),

/***/ 234:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "order-detail-top"
  }, [_c('div', {
    staticClass: "order-detail-top-content"
  }, [_c('div', {
    staticClass: "order-detail-top-state"
  }, [_vm._v("订单状态:")]), _vm._v(" "), (_vm.orderItem.ostatus === 1) ? _c('div', {
    staticClass: "static",
    staticStyle: {
      "color": "#888"
    }
  }, [_vm._v("未支付")]) : _vm._e(), _vm._v(" "), (_vm.orderItem.ostatus === 2) ? _c('div', {
    staticClass: "static",
    staticStyle: {
      "color": "#09BB07"
    }
  }, [_vm._v("已支付")]) : _vm._e(), _vm._v(" "), (_vm.orderItem.ostatus === 3) ? _c('div', {
    staticClass: "static",
    staticStyle: {
      "color": "#09BB07"
    }
  }, [_vm._v("已完成")]) : _vm._e(), _vm._v(" "), (_vm.orderItem.ostatus === 0) ? _c('div', {
    staticClass: "static",
    staticStyle: {
      "color": "red"
    }
  }, [_vm._v("已取消")]) : _vm._e()])]), _vm._v(" "), _c('div', {
    staticStyle: {
      "height": "25rpx",
      "background-color": "whitesmoke"
    }
  }), _vm._v(" "), _c('ordercard', {
    attrs: {
      "orderObj": _vm.productItem,
      "mpcomid": '0'
    }
  }), _vm._v(" "), _c('div', {
    staticStyle: {
      "height": "25rpx",
      "background-color": "whitesmoke"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "order-detail"
  }, [_c('div', {
    staticClass: "order-detail-info"
  }, [_c('div', {
    staticClass: "order-detail-info-title"
  }, [_vm._v("详细信息")]), _vm._v(" "), _vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "order-detail-info-con"
  }, [_c('div', {
    staticClass: "order-detail-info-con-ti"
  }, [_vm._v("订单编号")]), _vm._v(" "), _c('div', {
    staticClass: "order-detail-info-con-te"
  }, [_vm._v(_vm._s(_vm.orderItem.onumber))])]), _vm._v(" "), _c('div', {
    staticClass: "order-detail-info-con"
  }, [_c('div', {
    staticClass: "order-detail-info-con-ti"
  }, [_vm._v("预约时间")]), _vm._v(" "), _c('div', {
    staticClass: "order-detail-info-con-te"
  }, [_vm._v(_vm._s(_vm.orderItem.osubscribeTime) + "点")])]), _vm._v(" "), _c('div', {
    staticClass: "order-detail-info-con"
  }, [_c('div', {
    staticClass: "order-detail-info-con-ti"
  }, [_vm._v("服务地址")]), _vm._v(" "), _c('div', {
    staticClass: "order-detail-info-con-te"
  }, [_vm._v(_vm._s(_vm.addressItem.aaddress) + " " + _vm._s(_vm.addressItem.aaddressDetail))])]), _vm._v(" "), _c('div', {
    staticClass: "order-detail-info-con"
  }, [_c('div', {
    staticClass: "order-detail-info-con-ti"
  }, [_vm._v("下单时间")]), _vm._v(" "), _c('div', {
    staticClass: "order-detail-info-con-te"
  }, [_vm._v(_vm._s(_vm.orderItem.ocreateTime))])]), _vm._v(" "), _c('div', {
    staticClass: "order-detail-info-con"
  }, [_c('div', {
    staticClass: "order-detail-info-con-ti"
  }, [_vm._v("订单总价")]), _vm._v(" "), _c('div', {
    staticClass: "order-detail-info-con-te"
  }, [_vm._v(_vm._s(_vm.orderItem.ototalPrice))])]), _vm._v(" "), _c('div', {
    staticClass: "order-detail-info-con"
  }, [_c('div', {
    staticClass: "order-detail-info-con-ti"
  }, [_vm._v("联系人")]), _vm._v(" "), _c('div', {
    staticClass: "order-detail-info-con-te"
  }, [_vm._v(_vm._s(_vm.addressItem.aname) + "  " + _vm._s(_vm.addressItem.amobile))])]), _vm._v(" "), _c('div', {
    staticClass: "order-detail-pay"
  }, [_c('span', {
    staticStyle: {
      "font-weight": "bold"
    }
  }, [_vm._v("实际支付:")]), _vm._v("  "), _c('span', {
    staticStyle: {
      "color": "red"
    }
  }, [_vm._v(_vm._s(_vm.orderItem.opayPrice) + "元")])])])])], 1)
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "order-detail-info-con"
  }, [_c('div', {
    staticClass: "order-detail-info-con-ti"
  }, [_vm._v("服务方式")]), _vm._v(" "), _c('div', {
    staticClass: "order-detail-info-con-te"
  }, [_vm._v("上门服务")])])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-0bd454a8", esExports)
  }
}

/***/ })

},[310]);