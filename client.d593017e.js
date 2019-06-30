webpackJsonp([1],{

/***/ 100:
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-1bd2bee3","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./demo/App.vue ***!
  \***********************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { attrs: { id: "app" } }, [
    _c(
      "div",
      { staticStyle: { width: "500px", margin: "20px auto" } },
      [
        _c("vue-tel-input", {
          attrs: { preferredCountries: ["us", "gb", "ua"] },
          on: { input: _vm.onInput }
        })
      ],
      1
    ),
    _vm._v(" "),
    _vm.phone.number
      ? _c("div", { staticStyle: { color: "#e83e8c" } }, [
          _c("span", [
            _vm._v("\n      Number:\n      "),
            _c("strong", [_vm._v(_vm._s(_vm.phone.number))]),
            _vm._v(", \n    ")
          ]),
          _vm._v(" "),
          _c("span", [
            _vm._v("\n      Is valid:\n      "),
            _c("strong", [_vm._v(_vm._s(_vm.phone.isValid))]),
            _vm._v(", \n    ")
          ]),
          _vm._v(" "),
          _c("span", [
            _vm._v("\n      Country:\n      "),
            _c("strong", [_vm._v(_vm._s(_vm.phone.country))])
          ])
        ])
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-1bd2bee3", esExports)
  }
}

/***/ }),

/***/ 56:
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib?{"babelrc":false,"presets":[["/root/project/node_modules/babel-preset-poi/index.js",{"jsx":"vue"}]],"cacheDirectory":true}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./demo/App.vue ***!
  \***********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
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

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'app',
  data: function data() {
    return {
      phone: {
        number: '',
        isValid: false,
        country: undefined
      }
    };
  },

  methods: {
    onInput: function onInput(formattedNumber, _ref) {
      var number = _ref.number,
          isValid = _ref.isValid,
          country = _ref.country;

      this.phone.number = number;
      this.phone.isValid = isValid;
      this.phone.country = country && country.name;
    }
  }
});

/***/ }),

/***/ 57:
/*!*****************************!*\
  !*** multi ./demo/index.js ***!
  \*****************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /root/project/demo/index.js */58);


/***/ }),

/***/ 58:
/*!***********************!*\
  !*** ./demo/index.js ***!
  \***********************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(/*! vue */ 59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dist_vue_tel_input__ = __webpack_require__(/*! ../dist/vue-tel-input */ 61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dist_vue_tel_input___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__dist_vue_tel_input__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dist_vue_tel_input_css__ = __webpack_require__(/*! ../dist/vue-tel-input.css */ 97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dist_vue_tel_input_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__dist_vue_tel_input_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__App_vue__ = __webpack_require__(/*! ./App.vue */ 98);






__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].component('vue-tel-input', __WEBPACK_IMPORTED_MODULE_1__dist_vue_tel_input___default.a);

__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].config.productionTip = false;

/* eslint-disable no-new */
new __WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */](Object.assign({}, __WEBPACK_IMPORTED_MODULE_3__App_vue__["a" /* default */])).$mount('#app');

/***/ }),

/***/ 61:
/*!*******************************!*\
  !*** ./dist/vue-tel-input.js ***!
  \*******************************/
/*! dynamic exports provided */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

module.exports = function (e) {
  function t(i) {
    if (n[i]) return n[i].exports;var a = n[i] = { i: i, l: !1, exports: {} };return e[i].call(a.exports, a, a.exports, t), a.l = !0, a.exports;
  }var n = {};return t.m = e, t.c = n, t.d = function (e, n, i) {
    t.o(e, n) || Object.defineProperty(e, n, { configurable: !1, enumerable: !0, get: i });
  }, t.n = function (e) {
    var n = e && e.__esModule ? function () {
      return e.default;
    } : function () {
      return e;
    };return t.d(n, "a", n), n;
  }, t.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, t.p = "/", t(t.s = 1);
}([function (e, t, n) {
  "use strict";
  function i(e) {
    if (Array.isArray(e)) {
      for (var t = 0, n = Array(e.length); t < e.length; t++) {
        n[t] = e[t];
      }return n;
    }return Array.from(e);
  }var a = n(6),
      r = (n.n(a), n(7)),
      s = n(8);t.a = { name: "vue-tel-input", props: { value: { type: String }, placeholder: { type: String, default: "Enter a phone number" }, disabledFetchingCountry: { type: Boolean, default: !1 }, disabled: { type: Boolean, default: !1 }, disabledFormatting: { type: Boolean, default: !1 }, invalidMsg: { default: "", type: String }, required: { type: Boolean, default: !1 }, defaultCountry: { type: String, default: "" }, enabledCountryCode: { type: Boolean, default: !1 }, enabledFlags: { type: Boolean, default: !0 }, preferredCountries: { type: Array, default: function _default() {
          return [];
        } }, onlyCountries: { type: Array, default: function _default() {
          return [];
        } }, ignoredCountries: { type: Array, default: function _default() {
          return [];
        } }, autocomplete: { type: String, default: "on" }, name: { type: String, default: "telephone" }, wrapperClasses: { type: [String, Array, Object], default: "" }, inputClasses: { type: [String, Array, Object], default: "" }, dropdownOptions: { type: Object, default: function _default() {
          return {};
        } }, inputOptions: { type: Object, default: function _default() {
          return {};
        } }, maxLen: { type: Number, default: 25 } }, mounted: function mounted() {
      this.initializeCountry(), !this.phone && this.inputOptions && this.inputOptions.showDialCode && this.activeCountry && (this.phone = "+" + this.activeCountry.dialCode), this.$emit("validate", this.response), this.$emit("onValidate", this.response);
    }, created: function created() {
      this.value && (this.phone = this.value.trim());
    }, data: function data() {
      return { phone: "", activeCountry: { iso2: "" }, open: !1, selectedIndex: null, typeToFindInput: "", typeToFindTimer: null };
    }, computed: { mode: function mode() {
        return this.phone ? "+" === this.phone[0] ? "code" : "0" === this.phone[0] ? "prefix" : "normal" : "";
      }, filteredCountries: function filteredCountries() {
        var e = this;return this.onlyCountries.length ? this.getCountries(this.onlyCountries) : this.ignoredCountries.length ? r.a.filter(function (t) {
          var n = t.iso2;return !e.ignoredCountries.includes(n.toUpperCase()) && !e.ignoredCountries.includes(n.toLowerCase());
        }) : r.a;
      }, sortedCountries: function sortedCountries() {
        return [].concat(i(this.getCountries(this.preferredCountries).map(function (e) {
          return Object.assign({}, e, { preferred: !0 });
        })), i(this.filteredCountries));
      }, formattedResult: function formattedResult() {
        if (!this.mode || !this.filteredCountries) return "";var e = this.phone;if ("code" === this.mode) {
          var t = new a.AsYouType();t.input(this.phone), this.activeCountry = this.findCountry(t.country) || this.activeCountry;
        } else "prefix" === this.mode && (e = this.phone.slice(1));return this.disabledFormatting ? this.phone : Object(a.formatNumber)(e, this.activeCountry && this.activeCountry.iso2, "International");
      }, state: function state() {
        return Object(a.isValidNumber)(this.formattedResult, this.activeCountry && this.activeCountry.iso2);
      }, response: function response() {
        var e = { number: this.state ? this.formattedResult : this.phone, isValid: this.state, country: this.activeCountry };return this.disabledFormatting && Object.assign(e, { formattedNumber: Object(a.formatNumber)(this.phone, this.activeCountry && this.activeCountry.iso2, "International") }), e;
      } }, watch: { state: function state(e) {
        e && "prefix" !== this.mode && (this.phone = this.formattedResult), this.$emit("onValidate", this.response), this.$emit("validate", this.response);
      }, value: function value() {
        this.phone = this.value;
      } }, methods: { initializeCountry: function initializeCountry() {
        var e = this;if (this.phone && "+" === this.phone[0]) {
          var t = Object(a.parsePhoneNumberFromString)(this.phone);if (t && t.country) return void (this.activeCountry = t.country);
        }if (this.defaultCountry) {
          var n = this.findCountry(this.defaultCountry);if (n) return void (this.activeCountry = n);
        }this.activeCountry = this.findCountry(this.preferredCountries[0]) || this.filteredCountries[0], this.disabledFetchingCountry || Object(s.a)().then(function (t) {
          e.activeCountry = e.findCountry(t) || e.activeCountry;
        });
      }, getCountries: function getCountries() {
        var e = this;return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []).map(function (t) {
          return e.findCountry(t);
        }).filter(Boolean);
      }, findCountry: function findCountry() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";return r.a.find(function (t) {
          return t.iso2 === e.toUpperCase();
        });
      }, getItemClass: function getItemClass(e, t) {
        return { highlighted: this.selectedIndex === e, "last-preferred": e === this.preferredCountries.length - 1, preferred: !!~this.preferredCountries.map(function (e) {
            return e.toUpperCase();
          }).indexOf(t) };
      }, choose: function choose(e) {
        this.activeCountry = e, this.inputOptions && this.inputOptions.showDialCode && e && (this.phone = "+" + e.dialCode), this.$emit("input", this.response.number, this.response), this.$emit("onInput", this.response);
      }, onInput: function onInput() {
        this.$refs.input.setCustomValidity(this.response.isValid ? "" : this.invalidMsg), this.$emit("input", this.response.number, this.response), this.$emit("onInput", this.response);
      }, onBlur: function onBlur() {
        this.$emit("blur"), this.$emit("onBlur");
      }, onEnter: function onEnter() {
        this.$emit("enter"), this.$emit("onEnter");
      }, onSpace: function onSpace() {
        this.$emit("space"), this.$emit("onSpace");
      }, focus: function focus() {
        this.$refs.input.focus();
      }, toggleDropdown: function toggleDropdown() {
        this.disabled || (this.open = !this.open);
      }, clickedOutside: function clickedOutside() {
        this.open = !1;
      }, keyboardNav: function keyboardNav(e) {
        var t = this;if (40 === e.keyCode) {
          this.open = !0, null === this.selectedIndex ? this.selectedIndex = 0 : this.selectedIndex = Math.min(this.sortedCountries.length - 1, this.selectedIndex + 1);var n = this.$refs.list.children[this.selectedIndex];n.offsetTop + n.clientHeight > this.$refs.list.scrollTop + this.$refs.list.clientHeight && (this.$refs.list.scrollTop = n.offsetTop - this.$refs.list.clientHeight + n.clientHeight);
        } else if (38 === e.keyCode) {
          this.open = !0, null === this.selectedIndex ? this.selectedIndex = this.sortedCountries.length - 1 : this.selectedIndex = Math.max(0, this.selectedIndex - 1);var i = this.$refs.list.children[this.selectedIndex];i.offsetTop < this.$refs.list.scrollTop && (this.$refs.list.scrollTop = i.offsetTop);
        } else if (13 === e.keyCode) null !== this.selectedIndex && this.choose(this.sortedCountries[this.selectedIndex]), this.open = !this.open;else {
          this.typeToFindInput += e.key, clearTimeout(this.typeToFindTimer), this.typeToFindTimer = setTimeout(function () {
            t.typeToFindInput = "";
          }, 700);var a = this.sortedCountries.slice(this.preferredCountries.length).findIndex(function (e) {
            return e.name.toLowerCase().startsWith(t.typeToFindInput);
          });if (~a) {
            this.selectedIndex = this.preferredCountries.length + a;var r = this.$refs.list.children[this.selectedIndex];(r.offsetTop < this.$refs.list.scrollTop || r.offsetTop + r.clientHeight > this.$refs.list.scrollTop + this.$refs.list.clientHeight) && (this.$refs.list.scrollTop = r.offsetTop - this.$refs.list.clientHeight / 2);
          }
        }
      }, reset: function reset() {
        this.selectedIndex = this.sortedCountries.map(function (e) {
          return e.iso2;
        }).indexOf(this.activeCountry.iso2), this.open = !1;
      } }, directives: { "click-outside": { bind: function bind(e, t, n) {
          if ("function" != typeof t.value) {
            var i = n.context.name,
                a = "[Vue-click-outside:] provided expression " + t.expression + " is not a function, but has to be";i && (a += "Found in component " + i), console.warn(a);
          }var r = t.modifiers.bubble,
              s = function s(n) {
            var i = n.path || n.composedPath && n.composedPath();(r || i.length && !e.contains(i[0]) && e !== i[0]) && t.value(n);
          };e.__vueClickOutside__ = s, document.addEventListener("click", s);
        }, unbind: function unbind(e, t) {
          document.removeEventListener("click", e.__vueClickOutside__), e.__vueClickOutside__ = null;
        } } } };
}, function (e, t, n) {
  e.exports = n(2);
}, function (e, t, n) {
  "use strict";
  function i(e) {
    n(3), n(4);
  }Object.defineProperty(t, "__esModule", { value: !0 });var a = n(0),
      r = n(10),
      s = n(5),
      o = i,
      u = s(a.a, r.a, !1, o, "data-v-29985a25", null);t.default = u.exports;
}, function (e, t) {}, function (e, t) {}, function (e, t) {
  e.exports = function (e, t, n, i, a, r) {
    var s,
        o = e = e || {},
        u = _typeof(e.default);"object" !== u && "function" !== u || (s = e, o = e.default);var l = "function" == typeof o ? o.options : o;t && (l.render = t.render, l.staticRenderFns = t.staticRenderFns, l._compiled = !0), n && (l.functional = !0), a && (l._scopeId = a);var d;if (r ? (d = function d(e) {
      e = e || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext, e || "undefined" == typeof __VUE_SSR_CONTEXT__ || (e = __VUE_SSR_CONTEXT__), i && i.call(this, e), e && e._registeredComponents && e._registeredComponents.add(r);
    }, l._ssrRegister = d) : i && (d = i), d) {
      var c = l.functional,
          p = c ? l.render : l.beforeCreate;c ? (l._injectStyles = d, l.render = function (e, t) {
        return d.call(t), p(e, t);
      }) : l.beforeCreate = p ? [].concat(p, d) : [d];
    }return { esModule: s, exports: o, options: l };
  };
}, function (e, t) {
  e.exports = __webpack_require__(/*! libphonenumber-js */ 62);
}, function (e, t, n) {
  "use strict";
  var i = [["Afghanistan (‫افغانستان‬‎)", "af", "93"], ["Albania (Shqipëri)", "al", "355"], ["Algeria (‫الجزائر‬‎)", "dz", "213"], ["American Samoa", "as", "1684"], ["Andorra", "ad", "376"], ["Angola", "ao", "244"], ["Anguilla", "ai", "1264"], ["Antigua and Barbuda", "ag", "1268"], ["Argentina", "ar", "54"], ["Armenia (Հայաստան)", "am", "374"], ["Aruba", "aw", "297"], ["Australia", "au", "61", 0], ["Austria (Österreich)", "at", "43"], ["Azerbaijan (Azərbaycan)", "az", "994"], ["Bahamas", "bs", "1242"], ["Bahrain (‫البحرين‬‎)", "bh", "973"], ["Bangladesh (বাংলাদেশ)", "bd", "880"], ["Barbados", "bb", "1246"], ["Belarus (Беларусь)", "by", "375"], ["Belgium (België)", "be", "32"], ["Belize", "bz", "501"], ["Benin (Bénin)", "bj", "229"], ["Bermuda", "bm", "1441"], ["Bhutan (འབྲུག)", "bt", "975"], ["Bolivia", "bo", "591"], ["Bosnia and Herzegovina (Босна и Херцеговина)", "ba", "387"], ["Botswana", "bw", "267"], ["Brazil (Brasil)", "br", "55"], ["British Indian Ocean Territory", "io", "246"], ["British Virgin Islands", "vg", "1284"], ["Brunei", "bn", "673"], ["Bulgaria (България)", "bg", "359"], ["Burkina Faso", "bf", "226"], ["Burundi (Uburundi)", "bi", "257"], ["Cambodia (កម្ពុជា)", "kh", "855"], ["Cameroon (Cameroun)", "cm", "237"], ["Canada", "ca", "1", 1, ["204", "226", "236", "249", "250", "289", "306", "343", "365", "387", "403", "416", "418", "431", "437", "438", "450", "506", "514", "519", "548", "579", "581", "587", "604", "613", "639", "647", "672", "705", "709", "742", "778", "780", "782", "807", "819", "825", "867", "873", "902", "905"]], ["Cape Verde (Kabu Verdi)", "cv", "238"], ["Caribbean Netherlands", "bq", "599", 1], ["Cayman Islands", "ky", "1345"], ["Central African Republic (République centrafricaine)", "cf", "236"], ["Chad (Tchad)", "td", "235"], ["Chile", "cl", "56"], ["China (中国)", "cn", "86"], ["Christmas Island", "cx", "61", 2], ["Cocos (Keeling) Islands", "cc", "61", 1], ["Colombia", "co", "57"], ["Comoros (‫جزر القمر‬‎)", "km", "269"], ["Congo (DRC) (Jamhuri ya Kidemokrasia ya Kongo)", "cd", "243"], ["Congo (Republic) (Congo-Brazzaville)", "cg", "242"], ["Cook Islands", "ck", "682"], ["Costa Rica", "cr", "506"], ["Côte d’Ivoire", "ci", "225"], ["Croatia (Hrvatska)", "hr", "385"], ["Cuba", "cu", "53"], ["Curaçao", "cw", "599", 0], ["Cyprus (Κύπρος)", "cy", "357"], ["Czech Republic (Česká republika)", "cz", "420"], ["Denmark (Danmark)", "dk", "45"], ["Djibouti", "dj", "253"], ["Dominica", "dm", "1767"], ["Dominican Republic (República Dominicana)", "do", "1", 2, ["809", "829", "849"]], ["Ecuador", "ec", "593"], ["Egypt (‫مصر‬‎)", "eg", "20"], ["El Salvador", "sv", "503"], ["Equatorial Guinea (Guinea Ecuatorial)", "gq", "240"], ["Eritrea", "er", "291"], ["Estonia (Eesti)", "ee", "372"], ["Ethiopia", "et", "251"], ["Falkland Islands (Islas Malvinas)", "fk", "500"], ["Faroe Islands (Føroyar)", "fo", "298"], ["Fiji", "fj", "679"], ["Finland (Suomi)", "fi", "358", 0], ["France", "fr", "33"], ["French Guiana (Guyane française)", "gf", "594"], ["French Polynesia (Polynésie française)", "pf", "689"], ["Gabon", "ga", "241"], ["Gambia", "gm", "220"], ["Georgia (საქართველო)", "ge", "995"], ["Germany (Deutschland)", "de", "49"], ["Ghana (Gaana)", "gh", "233"], ["Gibraltar", "gi", "350"], ["Greece (Ελλάδα)", "gr", "30"], ["Greenland (Kalaallit Nunaat)", "gl", "299"], ["Grenada", "gd", "1473"], ["Guadeloupe", "gp", "590", 0], ["Guam", "gu", "1671"], ["Guatemala", "gt", "502"], ["Guernsey", "gg", "44", 1], ["Guinea (Guinée)", "gn", "224"], ["Guinea-Bissau (Guiné Bissau)", "gw", "245"], ["Guyana", "gy", "592"], ["Haiti", "ht", "509"], ["Honduras", "hn", "504"], ["Hong Kong (香港)", "hk", "852"], ["Hungary (Magyarország)", "hu", "36"], ["Iceland (Ísland)", "is", "354"], ["India (भारत)", "in", "91"], ["Indonesia", "id", "62"], ["Iran (‫ایران‬‎)", "ir", "98"], ["Iraq (‫العراق‬‎)", "iq", "964"], ["Ireland", "ie", "353"], ["Isle of Man", "im", "44", 2], ["Israel (‫ישראל‬‎)", "il", "972"], ["Italy (Italia)", "it", "39", 0], ["Jamaica", "jm", "1876"], ["Japan (日本)", "jp", "81"], ["Jersey", "je", "44", 3], ["Jordan (‫الأردن‬‎)", "jo", "962"], ["Kazakhstan (Казахстан)", "kz", "7", 1], ["Kenya", "ke", "254"], ["Kiribati", "ki", "686"], ["Kosovo", "xk", "383"], ["Kuwait (‫الكويت‬‎)", "kw", "965"], ["Kyrgyzstan (Кыргызстан)", "kg", "996"], ["Laos (ລາວ)", "la", "856"], ["Latvia (Latvija)", "lv", "371"], ["Lebanon (‫لبنان‬‎)", "lb", "961"], ["Lesotho", "ls", "266"], ["Liberia", "lr", "231"], ["Libya (‫ليبيا‬‎)", "ly", "218"], ["Liechtenstein", "li", "423"], ["Lithuania (Lietuva)", "lt", "370"], ["Luxembourg", "lu", "352"], ["Macau (澳門)", "mo", "853"], ["Macedonia (FYROM) (Македонија)", "mk", "389"], ["Madagascar (Madagasikara)", "mg", "261"], ["Malawi", "mw", "265"], ["Malaysia", "my", "60"], ["Maldives", "mv", "960"], ["Mali", "ml", "223"], ["Malta", "mt", "356"], ["Marshall Islands", "mh", "692"], ["Martinique", "mq", "596"], ["Mauritania (‫موريتانيا‬‎)", "mr", "222"], ["Mauritius (Moris)", "mu", "230"], ["Mayotte", "yt", "262", 1], ["Mexico (México)", "mx", "52"], ["Micronesia", "fm", "691"], ["Moldova (Republica Moldova)", "md", "373"], ["Monaco", "mc", "377"], ["Mongolia (Монгол)", "mn", "976"], ["Montenegro (Crna Gora)", "me", "382"], ["Montserrat", "ms", "1664"], ["Morocco (‫المغرب‬‎)", "ma", "212", 0], ["Mozambique (Moçambique)", "mz", "258"], ["Myanmar (Burma) (မြန်မာ)", "mm", "95"], ["Namibia (Namibië)", "na", "264"], ["Nauru", "nr", "674"], ["Nepal (नेपाल)", "np", "977"], ["Netherlands (Nederland)", "nl", "31"], ["New Caledonia (Nouvelle-Calédonie)", "nc", "687"], ["New Zealand", "nz", "64"], ["Nicaragua", "ni", "505"], ["Niger (Nijar)", "ne", "227"], ["Nigeria", "ng", "234"], ["Niue", "nu", "683"], ["Norfolk Island", "nf", "672"], ["North Korea (조선 민주주의 인민 공화국)", "kp", "850"], ["Northern Mariana Islands", "mp", "1670"], ["Norway (Norge)", "no", "47", 0], ["Oman (‫عُمان‬‎)", "om", "968"], ["Pakistan (‫پاکستان‬‎)", "pk", "92"], ["Palau", "pw", "680"], ["Palestine (‫فلسطين‬‎)", "ps", "970"], ["Panama (Panamá)", "pa", "507"], ["Papua New Guinea", "pg", "675"], ["Paraguay", "py", "595"], ["Peru (Perú)", "pe", "51"], ["Philippines", "ph", "63"], ["Poland (Polska)", "pl", "48"], ["Portugal", "pt", "351"], ["Puerto Rico", "pr", "1", 3, ["787", "939"]], ["Qatar (‫قطر‬‎)", "qa", "974"], ["Réunion (La Réunion)", "re", "262", 0], ["Romania (România)", "ro", "40"], ["Russia (Россия)", "ru", "7", 0], ["Rwanda", "rw", "250"], ["Saint Barthélemy", "bl", "590", 1], ["Saint Helena", "sh", "290"], ["Saint Kitts and Nevis", "kn", "1869"], ["Saint Lucia", "lc", "1758"], ["Saint Martin (Saint-Martin (partie française))", "mf", "590", 2], ["Saint Pierre and Miquelon (Saint-Pierre-et-Miquelon)", "pm", "508"], ["Saint Vincent and the Grenadines", "vc", "1784"], ["Samoa", "ws", "685"], ["San Marino", "sm", "378"], ["São Tomé and Príncipe (São Tomé e Príncipe)", "st", "239"], ["Saudi Arabia (‫المملكة العربية السعودية‬‎)", "sa", "966"], ["Senegal (Sénégal)", "sn", "221"], ["Serbia (Србија)", "rs", "381"], ["Seychelles", "sc", "248"], ["Sierra Leone", "sl", "232"], ["Singapore", "sg", "65"], ["Sint Maarten", "sx", "1721"], ["Slovakia (Slovensko)", "sk", "421"], ["Slovenia (Slovenija)", "si", "386"], ["Solomon Islands", "sb", "677"], ["Somalia (Soomaaliya)", "so", "252"], ["South Africa", "za", "27"], ["South Korea (대한민국)", "kr", "82"], ["South Sudan (‫جنوب السودان‬‎)", "ss", "211"], ["Spain (España)", "es", "34"], ["Sri Lanka (ශ්‍රී ලංකාව)", "lk", "94"], ["Sudan (‫السودان‬‎)", "sd", "249"], ["Suriname", "sr", "597"], ["Svalbard and Jan Mayen", "sj", "47", 1], ["Swaziland", "sz", "268"], ["Sweden (Sverige)", "se", "46"], ["Switzerland (Schweiz)", "ch", "41"], ["Syria (‫سوريا‬‎)", "sy", "963"], ["Taiwan (台灣)", "tw", "886"], ["Tajikistan", "tj", "992"], ["Tanzania", "tz", "255"], ["Thailand (ไทย)", "th", "66"], ["Timor-Leste", "tl", "670"], ["Togo", "tg", "228"], ["Tokelau", "tk", "690"], ["Tonga", "to", "676"], ["Trinidad and Tobago", "tt", "1868"], ["Tunisia (‫تونس‬‎)", "tn", "216"], ["Turkey (Türkiye)", "tr", "90"], ["Turkmenistan", "tm", "993"], ["Turks and Caicos Islands", "tc", "1649"], ["Tuvalu", "tv", "688"], ["U.S. Virgin Islands", "vi", "1340"], ["Uganda", "ug", "256"], ["Ukraine (Україна)", "ua", "380"], ["United Arab Emirates (‫الإمارات العربية المتحدة‬‎)", "ae", "971"], ["United Kingdom", "gb", "44", 0], ["United States", "us", "1", 0], ["Uruguay", "uy", "598"], ["Uzbekistan (Oʻzbekiston)", "uz", "998"], ["Vanuatu", "vu", "678"], ["Vatican City (Città del Vaticano)", "va", "39", 1], ["Venezuela", "ve", "58"], ["Vietnam (Việt Nam)", "vn", "84"], ["Wallis and Futuna (Wallis-et-Futuna)", "wf", "681"], ["Western Sahara (‫الصحراء الغربية‬‎)", "eh", "212", 1], ["Yemen (‫اليمن‬‎)", "ye", "967"], ["Zambia", "zm", "260"], ["Zimbabwe", "zw", "263"], ["Åland Islands", "ax", "358", 1]];t.a = i.map(function (e) {
    return { name: e[0], iso2: e[1].toUpperCase(), dialCode: e[2], priority: e[3] || 0, areaCodes: e[4] || null };
  });
}, function (e, t, n) {
  "use strict";
  var i = n(9),
      a = function a() {
    return new Promise(function (e, t) {
      i.concat("https://ip2c.org/s", function (n, i, a) {
        if (n) return t(n);var r = (a || "").toString();return r && "1" === r[0] ? e(r.substr(2, 2)) : t(new Error("unable to fetch the country"));
      });
    });
  };t.a = a;
}, function (e, t) {
  e.exports = __webpack_require__(/*! simple-get */ 75);
}, function (e, t, n) {
  "use strict";
  var i = function i() {
    var e = this,
        t = e.$createElement,
        n = e._self._c || t;return n("div", { class: ["vue-tel-input", e.wrapperClasses, { disabled: e.disabled }] }, [n("div", { directives: [{ name: "click-outside", rawName: "v-click-outside", value: e.clickedOutside, expression: "clickedOutside" }], staticClass: "dropdown", class: { open: e.open }, attrs: { tabindex: e.dropdownOptions && e.dropdownOptions.tabindex ? e.dropdownOptions.tabindex : 0 }, on: { keydown: [e.keyboardNav, function (t) {
          return !t.type.indexOf("key") && e._k(t.keyCode, "esc", 27, t.key, ["Esc", "Escape"]) ? null : e.reset(t);
        }], click: e.toggleDropdown } }, [n("span", { staticClass: "selection" }, [e.enabledFlags ? n("div", { staticClass: "iti-flag", class: e.activeCountry.iso2.toLowerCase() }) : e._e(), e._v(" "), e.enabledCountryCode ? n("span", { staticClass: "country-code" }, [e._v("+" + e._s(e.activeCountry.dialCode))]) : e._e(), e._v(" "), n("span", { staticClass: "dropdown-arrow" }, [e._v(e._s(e.open ? "▲" : "▼"))])]), e._v(" "), n("ul", { directives: [{ name: "show", rawName: "v-show", value: e.open, expression: "open" }], ref: "list" }, e._l(e.sortedCountries, function (t, i) {
      return n("li", { key: t.iso2 + (t.preferred ? "-preferred" : ""), staticClass: "dropdown-item", class: e.getItemClass(i, t.iso2), on: { click: function click(n) {
            return e.choose(t);
          }, mousemove: function mousemove(t) {
            e.selectedIndex = i;
          } } }, [e.enabledFlags ? n("div", { staticClass: "iti-flag", class: t.iso2.toLowerCase() }) : e._e(), e._v(" "), n("strong", [e._v(e._s(t.name))]), e._v(" "), e.dropdownOptions && !e.dropdownOptions.disabledDialCode ? n("span", [e._v("+" + e._s(t.dialCode))]) : e._e()]);
    }), 0)]), e._v(" "), n("input", { directives: [{ name: "model", rawName: "v-model", value: e.phone, expression: "phone" }], ref: "input", class: e.inputClasses, attrs: { type: "tel", placeholder: e.placeholder, disabled: e.disabled, required: e.required, autocomplete: e.autocomplete, name: e.name, maxlength: e.maxLen, tabindex: e.inputOptions && e.inputOptions.tabindex ? e.inputOptions.tabindex : 0 }, domProps: { value: e.phone }, on: { blur: e.onBlur, input: [function (t) {
          t.target.composing || (e.phone = t.target.value);
        }, e.onInput], keyup: [function (t) {
          return !t.type.indexOf("key") && e._k(t.keyCode, "enter", 13, t.key, "Enter") ? null : e.onEnter(t);
        }, function (t) {
          return !t.type.indexOf("key") && e._k(t.keyCode, "space", 32, t.key, [" ", "Spacebar"]) ? null : e.onSpace(t);
        }] } })]);
  },
      a = [],
      r = { render: i, staticRenderFns: a };t.a = r;
}]);

/***/ }),

/***/ 79:
/*!*************************************!*\
  !*** decompress-response (ignored) ***!
  \*************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 81:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 83:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 97:
/*!********************************!*\
  !*** ./dist/vue-tel-input.css ***!
  \********************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 98:
/*!**********************!*\
  !*** ./demo/App.vue ***!
  \**********************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_babelrc_false_presets_root_project_node_modules_babel_preset_poi_index_js_jsx_vue_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__ = __webpack_require__(/*! !babel-loader?{"babelrc":false,"presets":[["/root/project/node_modules/babel-preset-poi/index.js",{"jsx":"vue"}]],"cacheDirectory":true}!../node_modules/vue-loader/lib/selector?type=script&index=0!./App.vue */ 56);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1bd2bee3_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_App_vue__ = __webpack_require__(/*! !../node_modules/vue-loader/lib/template-compiler/index?{"id":"data-v-1bd2bee3","hasScoped":false,"buble":{"transforms":{}}}!../node_modules/vue-loader/lib/selector?type=template&index=0!./App.vue */ 100);
var disposed = false
var normalizeComponent = __webpack_require__(/*! ../node_modules/vue-loader/lib/component-normalizer */ 99)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_babelrc_false_presets_root_project_node_modules_babel_preset_poi_index_js_jsx_vue_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1bd2bee3_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_App_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "demo/App.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1bd2bee3", Component.options)
  } else {
    hotAPI.reload("data-v-1bd2bee3", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ })

},[57]);