function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _home_shell_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./home/shell.component */
    "./src/app/home/shell.component.ts");
    /* harmony import */


    var _home_welcome_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./home/welcome.component */
    "./src/app/home/welcome.component.ts");
    /* harmony import */


    var _home_page_not_found_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./home/page-not-found.component */
    "./src/app/home/page-not-found.component.ts");

    var appRoutes = [{
      path: '',
      component: _home_shell_component__WEBPACK_IMPORTED_MODULE_2__["ShellComponent"],
      children: [{
        path: 'welcome',
        component: _home_welcome_component__WEBPACK_IMPORTED_MODULE_3__["WelcomeComponent"]
      }, {
        path: 'products',
        // canActivate: [AuthGuard],
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | products-product-module */
          "products-product-module").then(__webpack_require__.bind(null,
          /*! ./products/product.module */
          "./src/app/products/product.module.ts")).then(function (m) {
            return m.ProductModule;
          });
        }
      }, {
        path: '',
        redirectTo: 'welcome',
        pathMatch: 'full'
      }]
    }, {
      path: '**',
      component: _home_page_not_found_component__WEBPACK_IMPORTED_MODULE_4__["PageNotFoundComponent"]
    }];

    var AppRoutingModule = /*#__PURE__*/_createClass(function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    });

    AppRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(appRoutes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(appRoutes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = /*#__PURE__*/_createClass(function AppComponent() {
      _classCallCheck(this, AppComponent);
    });

    AppComponent.??fac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: AppComponent,
      selectors: [["pm-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'pm-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! angular-in-memory-web-api */
    "./node_modules/angular-in-memory-web-api/__ivy_ngcc__/index.js");
    /* harmony import */


    var _products_product_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./products/product-data */
    "./src/app/products/product-data.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _home_shell_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./home/shell.component */
    "./src/app/home/shell.component.ts");
    /* harmony import */


    var _home_menu_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./home/menu.component */
    "./src/app/home/menu.component.ts");
    /* harmony import */


    var _home_welcome_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./home/welcome.component */
    "./src/app/home/welcome.component.ts");
    /* harmony import */


    var _home_page_not_found_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./home/page-not-found.component */
    "./src/app/home/page-not-found.component.ts");
    /* harmony import */


    var _user_user_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./user/user.module */
    "./src/app/user/user.module.ts");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @ngrx/store-devtools */
    "./node_modules/@ngrx/store-devtools/__ivy_ngcc__/fesm2015/store-devtools.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _ngrx_effects__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @ngrx/effects */
    "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/effects.js"); // Imports for loading & configuring the in-memory web api

    /* Feature Modules */

    /* NgRx */


    var AppModule = /*#__PURE__*/_createClass(function AppModule() {
      _classCallCheck(this, AppModule);
    });

    AppModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    });
    AppModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_3__["HttpClientInMemoryWebApiModule"].forRoot(_products_product_data__WEBPACK_IMPORTED_MODULE_4__["ProductData"]), _user_user_module__WEBPACK_IMPORTED_MODULE_11__["UserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_12__["StoreModule"].forRoot({}), _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_13__["StoreDevtoolsModule"].instrument({
        name: 'APM Demo App DevTools',
        maxAge: 25,
        logOnly: _environments_environment__WEBPACK_IMPORTED_MODULE_14__["environment"].production
      }), _ngrx_effects__WEBPACK_IMPORTED_MODULE_15__["EffectsModule"].forRoot([])]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _home_shell_component__WEBPACK_IMPORTED_MODULE_7__["ShellComponent"], _home_menu_component__WEBPACK_IMPORTED_MODULE_8__["MenuComponent"], _home_welcome_component__WEBPACK_IMPORTED_MODULE_9__["WelcomeComponent"], _home_page_not_found_component__WEBPACK_IMPORTED_MODULE_10__["PageNotFoundComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_3__["HttpClientInMemoryWebApiModule"], _user_user_module__WEBPACK_IMPORTED_MODULE_11__["UserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_12__["StoreRootModule"], _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_13__["StoreDevtoolsModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_15__["EffectsRootModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_3__["HttpClientInMemoryWebApiModule"].forRoot(_products_product_data__WEBPACK_IMPORTED_MODULE_4__["ProductData"]), _user_user_module__WEBPACK_IMPORTED_MODULE_11__["UserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_12__["StoreModule"].forRoot({}), _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_13__["StoreDevtoolsModule"].instrument({
            name: 'APM Demo App DevTools',
            maxAge: 25,
            logOnly: _environments_environment__WEBPACK_IMPORTED_MODULE_14__["environment"].production
          }), _ngrx_effects__WEBPACK_IMPORTED_MODULE_15__["EffectsModule"].forRoot([])],
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _home_shell_component__WEBPACK_IMPORTED_MODULE_7__["ShellComponent"], _home_menu_component__WEBPACK_IMPORTED_MODULE_8__["MenuComponent"], _home_welcome_component__WEBPACK_IMPORTED_MODULE_9__["WelcomeComponent"], _home_page_not_found_component__WEBPACK_IMPORTED_MODULE_10__["PageNotFoundComponent"]],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/menu.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/menu.component.ts ***!
    \****************************************/

  /*! exports provided: MenuComponent */

  /***/
  function srcAppHomeMenuComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MenuComponent", function () {
      return MenuComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _user_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../user/auth.service */
    "./src/app/user/auth.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function MenuComponent_li_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "a", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("Welcome ", ctx_r0.userName, "");
      }
    }

    function MenuComponent_li_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "a", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Log In");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function MenuComponent_li_14_Template(rf, ctx) {
      if (rf & 1) {
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "a", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function MenuComponent_li_14_Template_a_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r4);

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          return ctx_r3.logOut();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Log Out");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    var MenuComponent = /*#__PURE__*/function () {
      function MenuComponent(router, authService) {
        _classCallCheck(this, MenuComponent);

        this.router = router;
        this.authService = authService;
        this.pageTitle = 'Product Management';
      }

      _createClass(MenuComponent, [{
        key: "isLoggedIn",
        get: function get() {
          return this.authService.isLoggedIn();
        }
      }, {
        key: "userName",
        get: function get() {
          if (this.authService.currentUser) {
            return this.authService.currentUser.userName;
          }

          return '';
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "logOut",
        value: function logOut() {
          this.authService.logout();
          this.router.navigate(['/welcome']);
        }
      }]);

      return MenuComponent;
    }();

    MenuComponent.??fac = function MenuComponent_Factory(t) {
      return new (t || MenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_user_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]));
    };

    MenuComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: MenuComponent,
      selectors: [["pm-menu"]],
      decls: 15,
      vars: 4,
      consts: [[1, "navbar", "navbar-expand-lg", "navbar-light", "bg-light"], [1, "container-fluid"], [1, "navbar-brand"], [1, "navbar-nav", "mr-auto"], ["routerLinkActive", "active", 1, "nav-item"], ["routerLink", "/welcome", 1, "nav-link"], ["routerLink", "/products", 1, "nav-link"], [1, "navbar-nav", "navbar-right"], ["class", "nav-item", 4, "ngIf"], [1, "nav-item"], ["routerLink", "/login", 1, "nav-link"], [1, "nav-link", 2, "cursor", "pointer", 3, "click"]],
      template: function MenuComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "nav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "ul", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "li", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "Home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "li", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Product List");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "ul", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](12, MenuComponent_li_12_Template, 3, 1, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](13, MenuComponent_li_13_Template, 3, 0, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](14, MenuComponent_li_14_Template, 3, 0, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.pageTitle);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.isLoggedIn);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx.isLoggedIn);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.isLoggedIn);
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](MenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'pm-menu',
          templateUrl: './menu.component.html'
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: _user_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/page-not-found.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/home/page-not-found.component.ts ***!
    \**************************************************/

  /*! exports provided: PageNotFoundComponent */

  /***/
  function srcAppHomePageNotFoundComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function () {
      return PageNotFoundComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var PageNotFoundComponent = /*#__PURE__*/_createClass(function PageNotFoundComponent() {
      _classCallCheck(this, PageNotFoundComponent);
    });

    PageNotFoundComponent.??fac = function PageNotFoundComponent_Factory(t) {
      return new (t || PageNotFoundComponent)();
    };

    PageNotFoundComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: PageNotFoundComponent,
      selectors: [["ng-component"]],
      decls: 2,
      vars: 0,
      template: function PageNotFoundComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "This is not the page you were looking for!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      },
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](PageNotFoundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          template: " <h1>This is not the page you were looking for!</h1> "
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/shell.component.ts":
  /*!*****************************************!*\
    !*** ./src/app/home/shell.component.ts ***!
    \*****************************************/

  /*! exports provided: ShellComponent */

  /***/
  function srcAppHomeShellComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShellComponent", function () {
      return ShellComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _menu_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./menu.component */
    "./src/app/home/menu.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var ShellComponent = /*#__PURE__*/function () {
      function ShellComponent() {
        _classCallCheck(this, ShellComponent);
      }

      _createClass(ShellComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ShellComponent;
    }();

    ShellComponent.??fac = function ShellComponent_Factory(t) {
      return new (t || ShellComponent)();
    };

    ShellComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: ShellComponent,
      selectors: [["pm-shell"]],
      decls: 3,
      vars: 0,
      consts: [[1, "container", "main-content"]],
      template: function ShellComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "pm-menu");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      },
      directives: [_menu_component__WEBPACK_IMPORTED_MODULE_1__["MenuComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
      styles: [".main-content[_ngcontent-%COMP%] {\n  margin-top: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9zaGVsbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9zaGVsbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4tY29udGVudCB7XG4gIG1hcmdpbi10b3A6IDI1cHg7XG59XG4iXX0= */"],
      changeDetection: 0
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ShellComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'pm-shell',
          templateUrl: './shell.component.html',
          styleUrls: ['./shell.component.css'],
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/welcome.component.ts":
  /*!*******************************************!*\
    !*** ./src/app/home/welcome.component.ts ***!
    \*******************************************/

  /*! exports provided: WelcomeComponent */

  /***/
  function srcAppHomeWelcomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function () {
      return WelcomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var WelcomeComponent = /*#__PURE__*/_createClass(function WelcomeComponent() {
      _classCallCheck(this, WelcomeComponent);

      this.pageTitle = 'Welcome';
    });

    WelcomeComponent.??fac = function WelcomeComponent_Factory(t) {
      return new (t || WelcomeComponent)();
    };

    WelcomeComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: WelcomeComponent,
      selectors: [["ng-component"]],
      decls: 7,
      vars: 1,
      consts: [[1, "card"], [1, "card-header"], [1, "card-body"], [1, "row"], [1, "mx-auto", "text-center"], ["src", "./assets/images/ngrx.png", 1, "img-responsive", 2, "max-width", "80%", "padding", "50px 0"]],
      template: function WelcomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](6, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx.pageTitle, " ");
        }
      },
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](WelcomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          templateUrl: './welcome.component.html'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/products/product-data.ts":
  /*!******************************************!*\
    !*** ./src/app/products/product-data.ts ***!
    \******************************************/

  /*! exports provided: ProductData */

  /***/
  function srcAppProductsProductDataTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductData", function () {
      return ProductData;
    });

    var ProductData = /*#__PURE__*/function () {
      function ProductData() {
        _classCallCheck(this, ProductData);
      }

      _createClass(ProductData, [{
        key: "createDb",
        value: function createDb() {
          var products = [{
            id: 1,
            productName: 'Leaf Rake',
            productCode: 'GDN-0011',
            description: 'Leaf rake with 48-inch wooden handle',
            starRating: 3.2
          }, {
            id: 2,
            productName: 'Garden Cart',
            productCode: 'GDN-0023',
            description: '15 gallon capacity rolling garden cart',
            starRating: 4.2
          }, {
            id: 5,
            productName: 'Hammer',
            productCode: 'TBX-0048',
            description: 'Curved claw steel hammer',
            starRating: 4.8
          }, {
            id: 8,
            productName: 'Saw',
            productCode: 'TBX-0022',
            description: '15-inch steel blade hand saw',
            starRating: 3.7
          }, {
            id: 10,
            productName: 'Video Game Controller',
            productCode: 'GMG-0042',
            description: 'Standard two-button video game controller',
            starRating: 4.6
          }];
          return {
            products: products
          };
        }
      }]);

      return ProductData;
    }();
    /***/

  },

  /***/
  "./src/app/shared/shared.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/shared/shared.module.ts ***!
    \*****************************************/

  /*! exports provided: SharedModule */

  /***/
  function srcAppSharedSharedModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
      return SharedModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var SharedModule = /*#__PURE__*/_createClass(function SharedModule() {
      _classCallCheck(this, SharedModule);
    });

    SharedModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
      type: SharedModule
    });
    SharedModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
      factory: function SharedModule_Factory(t) {
        return new (t || SharedModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](SharedModule, {
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
        exports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
          exports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/user/auth.service.ts":
  /*!**************************************!*\
    !*** ./src/app/user/auth.service.ts ***!
    \**************************************/

  /*! exports provided: AuthService */

  /***/
  function srcAppUserAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AuthService = /*#__PURE__*/function () {
      function AuthService() {
        _classCallCheck(this, AuthService);
      }

      _createClass(AuthService, [{
        key: "isLoggedIn",
        value: function isLoggedIn() {
          return !!this.currentUser;
        }
      }, {
        key: "login",
        value: function login(userName, password) {
          // Code here would log into a back end service
          // and return user information
          // This is just hard-coded here.
          this.currentUser = {
            id: 2,
            userName: userName,
            isAdmin: false
          };
        }
      }, {
        key: "logout",
        value: function logout() {
          this.currentUser = null;
        }
      }]);

      return AuthService;
    }();

    AuthService.??fac = function AuthService_Factory(t) {
      return new (t || AuthService)();
    };

    AuthService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({
      token: AuthService,
      factory: AuthService.??fac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/user/login.component.ts":
  /*!*****************************************!*\
    !*** ./src/app/user/login.component.ts ***!
    \*****************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppUserLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _state_user_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./state/user.reducer */
    "./src/app/user/state/user.reducer.ts");
    /* harmony import */


    var _state_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./state/actions */
    "./src/app/user/state/actions/index.ts");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./auth.service */
    "./src/app/user/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function LoginComponent_div_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " User name is required. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function LoginComponent_div_22_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Password is required. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    var _c0 = function _c0(a0) {
      return {
        "is-invalid": a0
      };
    };

    var LoginComponent = /*#__PURE__*/function () {
      function LoginComponent(store, authService, router) {
        _classCallCheck(this, LoginComponent);

        this.store = store;
        this.authService = authService;
        this.router = router;
        this.pageTitle = 'Log In';
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.maskUserName$ = this.store.select(_state_user_reducer__WEBPACK_IMPORTED_MODULE_1__["getMaskUserName"]);
        }
      }, {
        key: "cancel",
        value: function cancel() {
          this.router.navigate(['welcome']);
        }
      }, {
        key: "checkChanged",
        value: function checkChanged() {
          this.store.dispatch(_state_actions__WEBPACK_IMPORTED_MODULE_2__["UserPageActions"].maskUserName());
        }
      }, {
        key: "login",
        value: function login(loginForm) {
          if (loginForm && loginForm.valid) {
            var userName = loginForm.form.value.userName;
            var password = loginForm.form.value.password;
            this.authService.login(userName, password);

            if (this.authService.redirectUrl) {
              this.router.navigateByUrl(this.authService.redirectUrl);
            } else {
              this.router.navigate(['/products']);
            }
          }
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.??fac = function LoginComponent_Factory(t) {
      return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]));
    };

    LoginComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: LoginComponent,
      selectors: [["ng-component"]],
      decls: 37,
      vars: 16,
      consts: [[1, "container", "main-content"], [1, "card"], [1, "card-header"], [1, "card-body"], ["novalidate", "", "autocomplete", "off", 1, "needs-validation", 3, "ngSubmit"], ["loginForm", "ngForm"], [1, "form-group", "row"], ["for", "userNameId", 1, "col-md-2", "col-form-label"], [1, "col-md-8"], ["id", "userNameId", "placeholder", "User Name (required)", "required", "", "ngModel", "", "name", "userName", 1, "form-control", 3, "ngClass", "type"], ["userNameVar", "ngModel"], ["class", "invalid-feedback", 4, "ngIf"], ["for", "passwordId", 1, "col-md-2", "col-form-label"], ["id", "passwordId", "type", "password", "placeholder", "Password (required)", "required", "", "ngModel", "", "name", "password", 1, "form-control", 3, "ngClass"], ["passwordVar", "ngModel"], [1, "form-group"], ["type", "submit", 1, "btn", "btn-primary", 2, "min-width", "120px", "margin-right", "10px", 3, "disabled"], [1, "btn", "btn-light", 2, "min-width", "120px", 3, "click"], [1, "card-footer"], [1, "row"], [1, "form-check", "col-md-7"], ["type", "checkbox", 1, "form-check-input", 3, "checked", "change"], [1, "invalid-feedback"]],
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "form", 4, 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_5_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r5);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](6);

            return ctx.login(_r0);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "fieldset");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "label", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "User Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](12, "input", 9, 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](14, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](15, LoginComponent_div_15_Template, 2, 0, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "label", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](20, "input", 13, 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](22, LoginComponent_div_22_Template, 2, 0, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "button", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, " Log In ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "a", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function LoginComponent_Template_a_click_28_listener() {
            return ctx.cancel();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, " Cancel ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "input", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("change", function LoginComponent_Template_input_change_34_listener() {
            return ctx.checkChanged();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](35, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36, " Mask user name ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](6);

          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](13);

          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx.pageTitle, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](12, _c0, (_r1.touched || _r1.dirty) && !_r1.valid))("type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](14, 8, ctx.maskUserName$) ? "password" : "text");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", (_r1.touched || _r1.dirty) && _r3.hasError("required"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](14, _c0, (_r3.touched || _r3.dirty) && !_r3.valid));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", (_r3.touched || _r3.dirty) && _r3.hasError("required"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("disabled", !_r0.valid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("checked", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](35, 10, ctx.maskUserName$));
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["AsyncPipe"]],
      styles: [".main-content[_ngcontent-%COMP%] {\n  margin-top: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvdXNlci9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4tY29udGVudCB7XG4gIG1hcmdpbi10b3A6IDI1cHg7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          templateUrl: './login.component.html',
          styleUrls: ['./login.component.css']
        }]
      }], function () {
        return [{
          type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]
        }, {
          type: _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/user/state/actions/index.ts":
  /*!*********************************************!*\
    !*** ./src/app/user/state/actions/index.ts ***!
    \*********************************************/

  /*! exports provided: UserPageActions */

  /***/
  function srcAppUserStateActionsIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _user_page_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./user-page.actions */
    "./src/app/user/state/actions/user-page.actions.ts");
    /* harmony reexport (module object) */


    __webpack_require__.d(__webpack_exports__, "UserPageActions", function () {
      return _user_page_actions__WEBPACK_IMPORTED_MODULE_0__;
    });
    /***/

  },

  /***/
  "./src/app/user/state/actions/user-page.actions.ts":
  /*!*********************************************************!*\
    !*** ./src/app/user/state/actions/user-page.actions.ts ***!
    \*********************************************************/

  /*! exports provided: maskUserName */

  /***/
  function srcAppUserStateActionsUserPageActionsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "maskUserName", function () {
      return maskUserName;
    });
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* NgRx */


    var maskUserName = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[User Page] Mask User Name');
    /***/
  },

  /***/
  "./src/app/user/state/user.reducer.ts":
  /*!********************************************!*\
    !*** ./src/app/user/state/user.reducer.ts ***!
    \********************************************/

  /*! exports provided: getMaskUserName, getCurrentUser, userReducer */

  /***/
  function srcAppUserStateUserReducerTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getMaskUserName", function () {
      return getMaskUserName;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getCurrentUser", function () {
      return getCurrentUser;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "userReducer", function () {
      return userReducer;
    });
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./actions */
    "./src/app/user/state/actions/index.ts");
    /* NgRx */


    var initialState = {
      maskUserName: true,
      currentUser: null
    }; // Selector functions

    var getUserFeatureState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])('users');
    var getMaskUserName = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getUserFeatureState, function (state) {
      return state.maskUserName;
    });
    var getCurrentUser = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getUserFeatureState, function (state) {
      return state.currentUser;
    });
    var userReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions__WEBPACK_IMPORTED_MODULE_1__["UserPageActions"].maskUserName, function (state) {
      return Object.assign(Object.assign({}, state), {
        maskUserName: !state.maskUserName
      });
    }));
    /***/
  },

  /***/
  "./src/app/user/user.module.ts":
  /*!*************************************!*\
    !*** ./src/app/user/user.module.ts ***!
    \*************************************/

  /*! exports provided: UserModule */

  /***/
  function srcAppUserUserModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserModule", function () {
      return UserModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./login.component */
    "./src/app/user/login.component.ts");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _state_user_reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./state/user.reducer */
    "./src/app/user/state/user.reducer.ts");
    /* NgRx */


    var userRoutes = [{
      path: 'login',
      component: _login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    }];

    var UserModule = /*#__PURE__*/_createClass(function UserModule() {
      _classCallCheck(this, UserModule);
    });

    UserModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
      type: UserModule
    });
    UserModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
      factory: function UserModule_Factory(t) {
        return new (t || UserModule)();
      },
      imports: [[_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(userRoutes), _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["StoreModule"].forFeature('users', _state_user_reducer__WEBPACK_IMPORTED_MODULE_5__["userReducer"])]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](UserModule, {
        declarations: [_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]],
        imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["StoreFeatureModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](UserModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(userRoutes), _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["StoreModule"].forFeature('users', _state_user_reducer__WEBPACK_IMPORTED_MODULE_5__["userReducer"])],
          declarations: [_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! E:\Web Development\GitHub\Product Management With NgRx\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map