function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["products-product-module"], {
  /***/
  "./src/app/products/product-edit/product-edit.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/products/product-edit/product-edit.component.ts ***!
    \*****************************************************************/

  /*! exports provided: ProductEditComponent */

  /***/
  function srcAppProductsProductEditProductEditComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductEditComponent", function () {
      return ProductEditComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _shared_generic_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../shared/generic-validator */
    "./src/app/shared/generic-validator.ts");
    /* harmony import */


    var _shared_number_validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../shared/number.validator */
    "./src/app/shared/number.validator.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ProductEditComponent_div_0_span_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.displayMessage.productName, " ");
      }
    }

    function ProductEditComponent_div_0_span_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r3.displayMessage.productCode, " ");
      }
    }

    function ProductEditComponent_div_0_span_23_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r4.displayMessage.starRating, " ");
      }
    }

    function ProductEditComponent_div_0_span_30_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r5.displayMessage.description, " ");
      }
    }

    var _c0 = function _c0(a0) {
      return {
        "is-invalid": a0
      };
    };

    function ProductEditComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ProductEditComponent_div_0_Template_form_ngSubmit_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r6.saveProduct();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "fieldset");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Product Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function ProductEditComponent_div_0_Template_input_blur_10_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r8.blur();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ProductEditComponent_div_0_span_11_Template, 2, 1, "span", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Product Code");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function ProductEditComponent_div_0_Template_input_blur_16_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r9.blur();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ProductEditComponent_div_0_span_17_Template, 2, 1, "span", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Star Rating (1-5)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, ProductEditComponent_div_0_span_23_Template, 2, 1, "span", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Description");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "textarea", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, ProductEditComponent_div_0_span_30_Template, 2, 1, "span", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "button", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " Save ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "button", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductEditComponent_div_0_Template_button_click_37_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r10.cancelEdit();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " Cancel ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "button", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductEditComponent_div_0_Template_button_click_40_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r11.deleteProduct();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " Delete ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.pageTitle, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.productForm);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c0, ctx_r0.displayMessage.productName));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.displayMessage.productName);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](13, _c0, ctx_r0.displayMessage.productCode));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.displayMessage.productCode);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](15, _c0, ctx_r0.displayMessage.starRating));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.displayMessage.starRating);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](17, _c0, ctx_r0.displayMessage.description));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.displayMessage.description);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r0.productForm.valid || !ctx_r0.productForm.dirty);
      }
    }

    function ProductEditComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Error: ", ctx_r1.errorMessage, "\n");
      }
    }

    var ProductEditComponent = /*#__PURE__*/function () {
      function ProductEditComponent(fb) {
        _classCallCheck(this, ProductEditComponent);

        this.fb = fb;
        this.pageTitle = 'Product Edit';
        this.create = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.update = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this["delete"] = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.clearCurrent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](); // Use with the generic validation message class

        this.displayMessage = {}; // Defines all of the validation messages for the form.
        // These could instead be retrieved from a file or database.

        this.validationMessages = {
          productName: {
            required: 'Product name is required.',
            minlength: 'Product name must be at least three characters.',
            maxlength: 'Product name cannot exceed 50 characters.'
          },
          productCode: {
            required: 'Product code is required.'
          },
          starRating: {
            range: 'Rate the product between 1 (lowest) and 5 (highest).'
          }
        }; // Define an instance of the validator for use with this form,
        // passing in this form's set of validation messages.

        this.genericValidator = new _shared_generic_validator__WEBPACK_IMPORTED_MODULE_2__["GenericValidator"](this.validationMessages);
      }

      _createClass(ProductEditComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          // Define the form group
          this.productForm = this.fb.group({
            productName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(50)]],
            productCode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            starRating: ['', _shared_number_validator__WEBPACK_IMPORTED_MODULE_3__["NumberValidators"].range(1, 5)],
            description: ''
          }); // Watch for value changes for validation

          this.productForm.valueChanges.subscribe(function () {
            return _this.displayMessage = _this.genericValidator.processMessages(_this.productForm);
          });
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          // patch form with value from the store
          if (changes.selectedProduct) {
            var product = changes.selectedProduct.currentValue;
            this.displayProduct(product);
          }
        } // Also validate on blur
        // Helpful if the user tabs through required fields

      }, {
        key: "blur",
        value: function blur() {
          this.displayMessage = this.genericValidator.processMessages(this.productForm);
        }
      }, {
        key: "displayProduct",
        value: function displayProduct(product) {
          if (product && this.productForm) {
            // Reset the form back to pristine
            this.productForm.reset(); // Display the appropriate page title

            if (product.id === 0) {
              this.pageTitle = 'Add Product';
            } else {
              this.pageTitle = "Edit Product: ".concat(product.productName);
            } // Update the data on the form


            this.productForm.patchValue({
              productName: product.productName,
              productCode: product.productCode,
              starRating: product.starRating,
              description: product.description
            });
          }
        }
      }, {
        key: "cancelEdit",
        value: function cancelEdit() {
          // Redisplay the currently selected product
          // replacing any edits made
          this.displayProduct(this.selectedProduct);
        }
      }, {
        key: "deleteProduct",
        value: function deleteProduct() {
          if (this.selectedProduct && this.selectedProduct.id) {
            if (confirm("Really delete the product: ".concat(this.selectedProduct.productName, "?"))) {
              this["delete"].emit(this.selectedProduct);
            }
          } else {
            // No need to delete, it was never saved
            this.clearCurrent.emit();
          }
        }
      }, {
        key: "saveProduct",
        value: function saveProduct() {
          if (this.productForm.valid) {
            if (this.productForm.dirty) {
              // Copy over all of the original product properties
              // Then copy over the values from the form
              // This ensures values not on the form, such as the Id, are retained
              var product = Object.assign(Object.assign({}, this.selectedProduct), this.productForm.value);

              if (product.id === 0) {
                this.create.emit(product);
              } else {
                this.update.emit(product);
              }
            }
          }
        }
      }]);

      return ProductEditComponent;
    }();

    ProductEditComponent.ɵfac = function ProductEditComponent_Factory(t) {
      return new (t || ProductEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]));
    };

    ProductEditComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProductEditComponent,
      selectors: [["pm-product-edit"]],
      inputs: {
        errorMessage: "errorMessage",
        selectedProduct: "selectedProduct"
      },
      outputs: {
        create: "create",
        update: "update",
        "delete": "delete",
        clearCurrent: "clearCurrent"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
      decls: 2,
      vars: 2,
      consts: [["class", "card", 4, "ngIf"], ["class", "alert alert-danger", 4, "ngIf"], [1, "card"], [1, "card-header"], [1, "card-body"], ["novalidate", "", 3, "formGroup", "ngSubmit"], [1, "form-group", "row"], ["for", "productNameId", 1, "col-md-3", "col-form-label"], [1, "col-md-9"], ["id", "productNameId", "type", "text", "placeholder", "Name (required)", "formControlName", "productName", 1, "form-control", 3, "ngClass", "blur"], ["class", "invalid-feedback", 4, "ngIf"], ["for", "productCodeId", 1, "col-md-3", "col-form-label"], ["id", "productCodeId", "type", "text", "placeholder", "Code (required)", "formControlName", "productCode", 1, "form-control", 3, "ngClass", "blur"], ["for", "starRatingId", 1, "col-md-3", "col-form-label"], ["id", "starRatingId", "type", "text", "placeholder", "Rating", "formControlName", "starRating", 1, "form-control", 3, "ngClass"], ["for", "descriptionId", 1, "col-md-3", "col-form-label"], ["id", "descriptionId", "placeholder", "Description", "rows", "3", "formControlName", "description", 1, "form-control", 3, "ngClass"], [1, "form-group"], [1, "col-md-10", "col-md-offset-2"], ["type", "submit", 1, "btn", "btn-primary", 2, "min-width", "120px", "margin-right", "10px", 3, "disabled"], ["type", "button", 1, "btn", "btn-light", 2, "min-width", "120px", "margin-right", "10px", 3, "click"], ["type", "button", 1, "btn", "btn-light", 2, "min-width", "120px", 3, "click"], [1, "invalid-feedback"], [1, "alert", "alert-danger"]],
      template: function ProductEditComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ProductEditComponent_div_0_Template, 42, 19, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProductEditComponent_div_1_Template, 2, 1, "div", 1);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedProduct);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errorMessage);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductEditComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'pm-product-edit',
          templateUrl: './product-edit.component.html'
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }];
      }, {
        errorMessage: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        selectedProduct: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        create: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        update: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        "delete": [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        clearCurrent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/products/product-list/product-list.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/products/product-list/product-list.component.ts ***!
    \*****************************************************************/

  /*! exports provided: ProductListComponent */

  /***/
  function srcAppProductsProductListProductListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductListComponent", function () {
      return ProductListComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ProductListComponent_div_3_button_2_ng_container_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var product_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" (", product_r3.productCode, ") ");
      }
    }

    var _c0 = function _c0(a0) {
      return {
        active: a0
      };
    };

    function ProductListComponent_div_3_button_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductListComponent_div_3_button_2_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

          var product_r3 = ctx.$implicit;

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r6.productSelected(product_r3);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProductListComponent_div_3_button_2_ng_container_2_Template, 2, 1, "ng-container", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var product_r3 = ctx.$implicit;

        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, (product_r3 == null ? null : product_r3.id) === (ctx_r2.selectedProduct == null ? null : ctx_r2.selectedProduct.id)));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", product_r3.productName, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.displayCode);
      }
    }

    function ProductListComponent_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProductListComponent_div_3_button_2_Template, 3, 5, "button", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.products);
      }
    }

    function ProductListComponent_div_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Error: ", ctx_r1.errorMessage, "\n");
      }
    }

    var ProductListComponent = /*#__PURE__*/function () {
      function ProductListComponent() {
        _classCallCheck(this, ProductListComponent);

        this.pageTitle = 'Products';
        this.displayCodeChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.initializeNewProduct = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.productWasSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(ProductListComponent, [{
        key: "checkChanged",
        value: function checkChanged() {
          this.displayCodeChanged.emit();
        }
      }, {
        key: "newProduct",
        value: function newProduct() {
          this.initializeNewProduct.emit();
        }
      }, {
        key: "productSelected",
        value: function productSelected(product) {
          this.productWasSelected.emit(product);
        }
      }]);

      return ProductListComponent;
    }();

    ProductListComponent.ɵfac = function ProductListComponent_Factory(t) {
      return new (t || ProductListComponent)();
    };

    ProductListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProductListComponent,
      selectors: [["pm-product-list"]],
      inputs: {
        errorMessage: "errorMessage",
        products: "products",
        displayCode: "displayCode",
        selectedProduct: "selectedProduct"
      },
      outputs: {
        displayCodeChanged: "displayCodeChanged",
        initializeNewProduct: "initializeNewProduct",
        productWasSelected: "productWasSelected"
      },
      decls: 14,
      vars: 4,
      consts: [[1, "card"], [1, "card-header"], ["class", "card-body", 4, "ngIf"], [1, "card-footer"], [1, "row"], [1, "form-check", "col-md-7"], ["type", "checkbox", 1, "form-check-input", 3, "checked", "change"], [1, "col-md-4", "text-right"], [1, "btn", "btn-primary", 2, "min-width", "120px", 3, "click"], ["class", "alert alert-danger", 4, "ngIf"], [1, "card-body"], [1, "list-group"], ["class", "list-group-item list-group-item-action rounded-0", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "list-group-item", "list-group-item-action", "rounded-0", 3, "ngClass", "click"], [4, "ngIf"], [1, "alert", "alert-danger"]],
      template: function ProductListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ProductListComponent_div_3_Template, 3, 1, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ProductListComponent_Template_input_change_8_listener() {
            return ctx.checkChanged();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Display Product Code ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductListComponent_Template_button_click_11_listener() {
            return ctx.newProduct();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Add ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ProductListComponent_div_13_Template, 2, 1, "div", 9);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.pageTitle, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.products);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.displayCode);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errorMessage);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]],
      styles: [".card-body[_ngcontent-%COMP%] {\n  padding: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdHMvcHJvZHVjdC1saXN0L3Byb2R1Y3QtbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBVTtBQUNaIiwiZmlsZSI6InNyYy9hcHAvcHJvZHVjdHMvcHJvZHVjdC1saXN0L3Byb2R1Y3QtbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQtYm9keSB7XG4gIHBhZGRpbmc6IDA7XG59XG4iXX0= */"],
      changeDetection: 0
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'pm-product-list',
          templateUrl: './product-list.component.html',
          styleUrls: ['./product-list.component.css'],
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }]
      }], null, {
        errorMessage: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        products: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        displayCode: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        selectedProduct: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        displayCodeChanged: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        initializeNewProduct: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        productWasSelected: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/products/product-shell/product-shell.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/products/product-shell/product-shell.component.ts ***!
    \*******************************************************************/

  /*! exports provided: ProductShellComponent */

  /***/
  function srcAppProductsProductShellProductShellComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductShellComponent", function () {
      return ProductShellComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../state */
    "./src/app/products/state/index.ts");
    /* harmony import */


    var _state_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../state/actions */
    "./src/app/products/state/actions/index.ts");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../product-list/product-list.component */
    "./src/app/products/product-list/product-list.component.ts");
    /* harmony import */


    var _product_edit_product_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../product-edit/product-edit.component */
    "./src/app/products/product-edit/product-edit.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var ProductShellComponent = /*#__PURE__*/function () {
      function ProductShellComponent(store) {
        _classCallCheck(this, ProductShellComponent);

        this.store = store;
      }

      _createClass(ProductShellComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          // Do NOT subscribe here because it uses an async pipe
          // This gets the initial values until the load is complete.
          this.products$ = this.store.select(_state__WEBPACK_IMPORTED_MODULE_1__["getProducts"]); // Do NOT subscribe here because it uses an async pipe

          this.errorMessage$ = this.store.select(_state__WEBPACK_IMPORTED_MODULE_1__["getError"]);
          this.store.dispatch(_state_actions__WEBPACK_IMPORTED_MODULE_2__["ProductPageActions"].loadProducts()); // Do NOT subscribe here because it uses an async pipe

          this.selectedProduct$ = this.store.select(_state__WEBPACK_IMPORTED_MODULE_1__["getCurrentProduct"]); // Do NOT subscribe here because it uses an async pipe

          this.displayCode$ = this.store.select(_state__WEBPACK_IMPORTED_MODULE_1__["getShowProductCode"]);
        }
      }, {
        key: "checkChanged",
        value: function checkChanged() {
          this.store.dispatch(_state_actions__WEBPACK_IMPORTED_MODULE_2__["ProductPageActions"].toggleProductCode());
        }
      }, {
        key: "newProduct",
        value: function newProduct() {
          this.store.dispatch(_state_actions__WEBPACK_IMPORTED_MODULE_2__["ProductPageActions"].initializeCurrentProduct());
        }
      }, {
        key: "productSelected",
        value: function productSelected(product) {
          this.store.dispatch(_state_actions__WEBPACK_IMPORTED_MODULE_2__["ProductPageActions"].setCurrentProduct({
            currentProductId: product.id
          }));
        }
      }, {
        key: "deleteProduct",
        value: function deleteProduct(product) {
          this.store.dispatch(_state_actions__WEBPACK_IMPORTED_MODULE_2__["ProductPageActions"].deleteProduct({
            productId: product.id
          }));
        }
      }, {
        key: "clearProduct",
        value: function clearProduct() {
          this.store.dispatch(_state_actions__WEBPACK_IMPORTED_MODULE_2__["ProductPageActions"].clearCurrentProduct());
        }
      }, {
        key: "saveProduct",
        value: function saveProduct(product) {
          this.store.dispatch(_state_actions__WEBPACK_IMPORTED_MODULE_2__["ProductPageActions"].createProduct({
            product: product
          }));
        }
      }, {
        key: "updateProduct",
        value: function updateProduct(product) {
          this.store.dispatch(_state_actions__WEBPACK_IMPORTED_MODULE_2__["ProductPageActions"].updateProduct({
            product: product
          }));
        }
      }]);

      return ProductShellComponent;
    }();

    ProductShellComponent.ɵfac = function ProductShellComponent_Factory(t) {
      return new (t || ProductShellComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]));
    };

    ProductShellComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProductShellComponent,
      selectors: [["ng-component"]],
      decls: 11,
      vars: 18,
      consts: [[1, "row"], [1, "col-md-4"], [3, "displayCode", "products", "selectedProduct", "errorMessage", "displayCodeChanged", "initializeNewProduct", "productWasSelected"], [1, "col-md-8"], [3, "selectedProduct", "errorMessage", "clearCurrent", "update", "delete", "create"]],
      template: function ProductShellComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "pm-product-list", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("displayCodeChanged", function ProductShellComponent_Template_pm_product_list_displayCodeChanged_2_listener() {
            return ctx.checkChanged();
          })("initializeNewProduct", function ProductShellComponent_Template_pm_product_list_initializeNewProduct_2_listener() {
            return ctx.newProduct();
          })("productWasSelected", function ProductShellComponent_Template_pm_product_list_productWasSelected_2_listener($event) {
            return ctx.productSelected($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "pm-product-edit", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clearCurrent", function ProductShellComponent_Template_pm_product_edit_clearCurrent_8_listener() {
            return ctx.clearProduct();
          })("update", function ProductShellComponent_Template_pm_product_edit_update_8_listener($event) {
            return ctx.updateProduct($event);
          })("delete", function ProductShellComponent_Template_pm_product_edit_delete_8_listener($event) {
            return ctx.deleteProduct($event);
          })("create", function ProductShellComponent_Template_pm_product_edit_create_8_listener($event) {
            return ctx.saveProduct($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("displayCode", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 6, ctx.displayCode$))("products", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 8, ctx.products$))("selectedProduct", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 10, ctx.selectedProduct$))("errorMessage", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 12, ctx.errorMessage$));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selectedProduct", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 14, ctx.selectedProduct$))("errorMessage", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 16, ctx.errorMessage$));
        }
      },
      directives: [_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_4__["ProductListComponent"], _product_edit_product_edit_component__WEBPACK_IMPORTED_MODULE_5__["ProductEditComponent"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductShellComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          templateUrl: './product-shell.component.html'
        }]
      }], function () {
        return [{
          type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/products/product.module.ts":
  /*!********************************************!*\
    !*** ./src/app/products/product.module.ts ***!
    \********************************************/

  /*! exports provided: ProductModule */

  /***/
  function srcAppProductsProductModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductModule", function () {
      return ProductModule;
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


    var _product_shell_product_shell_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./product-shell/product-shell.component */
    "./src/app/products/product-shell/product-shell.component.ts");
    /* harmony import */


    var _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./product-list/product-list.component */
    "./src/app/products/product-list/product-list.component.ts");
    /* harmony import */


    var _product_edit_product_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./product-edit/product-edit.component */
    "./src/app/products/product-edit/product-edit.component.ts");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _state_product_reducer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./state/product.reducer */
    "./src/app/products/state/product.reducer.ts");
    /* harmony import */


    var _ngrx_effects__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ngrx/effects */
    "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/effects.js");
    /* harmony import */


    var _state_product_effects__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./state/product.effects */
    "./src/app/products/state/product.effects.ts");
    /* NgRx */


    var productRoutes = [{
      path: '',
      component: _product_shell_product_shell_component__WEBPACK_IMPORTED_MODULE_3__["ProductShellComponent"]
    }];

    var ProductModule = /*#__PURE__*/_createClass(function ProductModule() {
      _classCallCheck(this, ProductModule);
    });

    ProductModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ProductModule
    });
    ProductModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ProductModule_Factory(t) {
        return new (t || ProductModule)();
      },
      imports: [[_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(productRoutes), _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["StoreModule"].forFeature('products', _state_product_reducer__WEBPACK_IMPORTED_MODULE_7__["productReducer"]), _ngrx_effects__WEBPACK_IMPORTED_MODULE_8__["EffectsModule"].forFeature([_state_product_effects__WEBPACK_IMPORTED_MODULE_9__["ProductEffects"]])]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ProductModule, {
        declarations: [_product_shell_product_shell_component__WEBPACK_IMPORTED_MODULE_3__["ProductShellComponent"], _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_4__["ProductListComponent"], _product_edit_product_edit_component__WEBPACK_IMPORTED_MODULE_5__["ProductEditComponent"]],
        imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["StoreFeatureModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_8__["EffectsFeatureModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(productRoutes), _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["StoreModule"].forFeature('products', _state_product_reducer__WEBPACK_IMPORTED_MODULE_7__["productReducer"]), _ngrx_effects__WEBPACK_IMPORTED_MODULE_8__["EffectsModule"].forFeature([_state_product_effects__WEBPACK_IMPORTED_MODULE_9__["ProductEffects"]])],
          declarations: [_product_shell_product_shell_component__WEBPACK_IMPORTED_MODULE_3__["ProductShellComponent"], _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_4__["ProductListComponent"], _product_edit_product_edit_component__WEBPACK_IMPORTED_MODULE_5__["ProductEditComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/products/product.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/products/product.service.ts ***!
    \*********************************************/

  /*! exports provided: ProductService */

  /***/
  function srcAppProductsProductServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductService", function () {
      return ProductService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var ProductService = /*#__PURE__*/function () {
      function ProductService(http) {
        _classCallCheck(this, ProductService);

        this.http = http;
        this.productsUrl = 'api/products';
      }

      _createClass(ProductService, [{
        key: "getProducts",
        value: function getProducts() {
          return this.http.get(this.productsUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (data) {
            return console.log(JSON.stringify(data));
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
        }
      }, {
        key: "createProduct",
        value: function createProduct(product) {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json'
          }); // Product Id must be null for the Web API to assign an Id

          var newProduct = Object.assign(Object.assign({}, product), {
            id: null
          });
          return this.http.post(this.productsUrl, newProduct, {
            headers: headers
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (data) {
            return console.log('createProduct: ' + JSON.stringify(data));
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
        }
      }, {
        key: "deleteProduct",
        value: function deleteProduct(id) {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json'
          });
          var url = "".concat(this.productsUrl, "/").concat(id);
          return this.http["delete"](url, {
            headers: headers
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (data) {
            return console.log('deleteProduct: ' + id);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
        }
      }, {
        key: "updateProduct",
        value: function updateProduct(product) {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json'
          });
          var url = "".concat(this.productsUrl, "/").concat(product.id);
          return this.http.put(url, product, {
            headers: headers
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function () {
            return console.log('updateProduct: ' + product.id);
          }), // Return the product on an update
          Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function () {
            return product;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
        }
      }, {
        key: "handleError",
        value: function handleError(err) {
          // in a real world app, we may send the server to some remote logging infrastructure
          // instead of just logging it to the console
          var errorMessage;

          if (err.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            errorMessage = "An error occurred: ".concat(err.error.message);
          } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            errorMessage = "Backend returned code ".concat(err.status, ": ").concat(err.body.error);
          }

          console.error(err);
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(errorMessage);
        }
      }]);

      return ProductService;
    }();

    ProductService.ɵfac = function ProductService_Factory(t) {
      return new (t || ProductService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    ProductService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ProductService,
      factory: ProductService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/products/state/actions/index.ts":
  /*!*************************************************!*\
    !*** ./src/app/products/state/actions/index.ts ***!
    \*************************************************/

  /*! exports provided: ProductPageActions, ProductApiActions */

  /***/
  function srcAppProductsStateActionsIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _product_page_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./product-page.actions */
    "./src/app/products/state/actions/product-page.actions.ts");
    /* harmony reexport (module object) */


    __webpack_require__.d(__webpack_exports__, "ProductPageActions", function () {
      return _product_page_actions__WEBPACK_IMPORTED_MODULE_0__;
    });
    /* harmony import */


    var _product_api_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./product-api.actions */
    "./src/app/products/state/actions/product-api.actions.ts");
    /* harmony reexport (module object) */


    __webpack_require__.d(__webpack_exports__, "ProductApiActions", function () {
      return _product_api_actions__WEBPACK_IMPORTED_MODULE_1__;
    });
    /***/

  },

  /***/
  "./src/app/products/state/actions/product-api.actions.ts":
  /*!***************************************************************!*\
    !*** ./src/app/products/state/actions/product-api.actions.ts ***!
    \***************************************************************/

  /*! exports provided: loadProductsSuccess, loadProductsFailure, updateProductSuccess, updateProductFailure, createProductSuccess, createProductFailure, deleteProductSuccess, deleteProductFailure */

  /***/
  function srcAppProductsStateActionsProductApiActionsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "loadProductsSuccess", function () {
      return loadProductsSuccess;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "loadProductsFailure", function () {
      return loadProductsFailure;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "updateProductSuccess", function () {
      return updateProductSuccess;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "updateProductFailure", function () {
      return updateProductFailure;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "createProductSuccess", function () {
      return createProductSuccess;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "createProductFailure", function () {
      return createProductFailure;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "deleteProductSuccess", function () {
      return deleteProductSuccess;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "deleteProductFailure", function () {
      return deleteProductFailure;
    });
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* NgRx*/


    var loadProductsSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Product API] Load Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    var loadProductsFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Product API] Load Fail', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    var updateProductSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Product API] Update Product Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    var updateProductFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Product API] Update Product Fail', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    var createProductSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Product API] Create Product Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    var createProductFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Product API] Create Product Fail', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    var deleteProductSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Product API] Delete Product Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    var deleteProductFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Product API] Delete Product Fail', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    /***/
  },

  /***/
  "./src/app/products/state/actions/product-page.actions.ts":
  /*!****************************************************************!*\
    !*** ./src/app/products/state/actions/product-page.actions.ts ***!
    \****************************************************************/

  /*! exports provided: toggleProductCode, setCurrentProduct, clearCurrentProduct, initializeCurrentProduct, loadProducts, updateProduct, createProduct, deleteProduct */

  /***/
  function srcAppProductsStateActionsProductPageActionsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "toggleProductCode", function () {
      return toggleProductCode;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "setCurrentProduct", function () {
      return setCurrentProduct;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "clearCurrentProduct", function () {
      return clearCurrentProduct;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "initializeCurrentProduct", function () {
      return initializeCurrentProduct;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "loadProducts", function () {
      return loadProducts;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "updateProduct", function () {
      return updateProduct;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "createProduct", function () {
      return createProduct;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "deleteProduct", function () {
      return deleteProduct;
    });
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* NgRx*/


    var toggleProductCode = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Product Page] Toggle Product Code');
    var setCurrentProduct = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Product Page] Set Current Product', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    var clearCurrentProduct = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Product Page] Clear Current Product');
    var initializeCurrentProduct = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Product Page] Initialize Current Product');
    var loadProducts = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Product Page] Load');
    var updateProduct = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Product Page] Update Product', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    var createProduct = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Product Page] Create Product', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    var deleteProduct = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Product Page] Delete Product', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    /***/
  },

  /***/
  "./src/app/products/state/index.ts":
  /*!*****************************************!*\
    !*** ./src/app/products/state/index.ts ***!
    \*****************************************/

  /*! exports provided: getShowProductCode, getCurrentProductId, getCurrentProduct, getProducts, getError */

  /***/
  function srcAppProductsStateIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getShowProductCode", function () {
      return getShowProductCode;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getCurrentProductId", function () {
      return getCurrentProductId;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getCurrentProduct", function () {
      return getCurrentProduct;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getProducts", function () {
      return getProducts;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getError", function () {
      return getError;
    });
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js"); // Selector functions


    var getProductFeatureState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])('products');
    var getShowProductCode = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getProductFeatureState, function (state) {
      return state.showProductCode;
    });
    var getCurrentProductId = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getProductFeatureState, function (state) {
      return state.currentProductId;
    });
    var getCurrentProduct = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getProductFeatureState, getCurrentProductId, function (state, currentProductId) {
      if (currentProductId === 0) {
        return {
          id: 0,
          productName: '',
          productCode: 'New',
          description: '',
          starRating: 0
        };
      } else {
        return currentProductId ? state.products.find(function (p) {
          return p.id === currentProductId;
        }) : null;
      }
    });
    var getProducts = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getProductFeatureState, function (state) {
      return state.products;
    });
    var getError = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getProductFeatureState, function (state) {
      return state.error;
    });
    /***/
  },

  /***/
  "./src/app/products/state/product.effects.ts":
  /*!***************************************************!*\
    !*** ./src/app/products/state/product.effects.ts ***!
    \***************************************************/

  /*! exports provided: ProductEffects */

  /***/
  function srcAppProductsStateProductEffectsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductEffects", function () {
      return ProductEffects;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngrx/effects */
    "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/effects.js");
    /* harmony import */


    var _actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./actions */
    "./src/app/products/state/actions/index.ts");
    /* harmony import */


    var _product_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../product.service */
    "./src/app/products/product.service.ts");
    /* NgRx */


    var ProductEffects = /*#__PURE__*/_createClass(function ProductEffects(actions$, productService) {
      var _this2 = this;

      _classCallCheck(this, ProductEffects);

      this.actions$ = actions$;
      this.productService = productService;
      this.loadProducts$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["createEffect"])(function () {
        return _this2.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_actions__WEBPACK_IMPORTED_MODULE_4__["ProductPageActions"].loadProducts), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function () {
          return _this2.productService.getProducts().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (products) {
            return _actions__WEBPACK_IMPORTED_MODULE_4__["ProductApiActions"].loadProductsSuccess({
              products: products
            });
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (error) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(_actions__WEBPACK_IMPORTED_MODULE_4__["ProductApiActions"].loadProductsFailure({
              error: error
            }));
          }));
        }));
      });
      this.updateProduct$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["createEffect"])(function () {
        return _this2.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_actions__WEBPACK_IMPORTED_MODULE_4__["ProductPageActions"].updateProduct), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["concatMap"])(function (action) {
          return _this2.productService.updateProduct(action.product).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (product) {
            return _actions__WEBPACK_IMPORTED_MODULE_4__["ProductApiActions"].updateProductSuccess({
              product: product
            });
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (error) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(_actions__WEBPACK_IMPORTED_MODULE_4__["ProductApiActions"].updateProductFailure({
              error: error
            }));
          }));
        }));
      });
      this.createProduct$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["createEffect"])(function () {
        return _this2.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_actions__WEBPACK_IMPORTED_MODULE_4__["ProductPageActions"].createProduct), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["concatMap"])(function (action) {
          return _this2.productService.createProduct(action.product).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (product) {
            return _actions__WEBPACK_IMPORTED_MODULE_4__["ProductApiActions"].createProductSuccess({
              product: product
            });
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (error) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(_actions__WEBPACK_IMPORTED_MODULE_4__["ProductApiActions"].createProductFailure({
              error: error
            }));
          }));
        }));
      });
      this.deleteProduct$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["createEffect"])(function () {
        return _this2.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_actions__WEBPACK_IMPORTED_MODULE_4__["ProductPageActions"].deleteProduct), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (action) {
          return _this2.productService.deleteProduct(action.productId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function () {
            return _actions__WEBPACK_IMPORTED_MODULE_4__["ProductApiActions"].deleteProductSuccess({
              productId: action.productId
            });
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (error) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(_actions__WEBPACK_IMPORTED_MODULE_4__["ProductApiActions"].deleteProductFailure({
              error: error
            }));
          }));
        }));
      });
    });

    ProductEffects.ɵfac = function ProductEffects_Factory(t) {
      return new (t || ProductEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_product_service__WEBPACK_IMPORTED_MODULE_5__["ProductService"]));
    };

    ProductEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ProductEffects,
      factory: ProductEffects.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductEffects, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Actions"]
        }, {
          type: _product_service__WEBPACK_IMPORTED_MODULE_5__["ProductService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/products/state/product.reducer.ts":
  /*!***************************************************!*\
    !*** ./src/app/products/state/product.reducer.ts ***!
    \***************************************************/

  /*! exports provided: productReducer */

  /***/
  function srcAppProductsStateProductReducerTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "productReducer", function () {
      return productReducer;
    });
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./actions */
    "./src/app/products/state/actions/index.ts");
    /* NgRx */


    var initialState = {
      showProductCode: true,
      currentProductId: null,
      products: [],
      error: ''
    };
    var productReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions__WEBPACK_IMPORTED_MODULE_1__["ProductPageActions"].toggleProductCode, function (state) {
      return Object.assign(Object.assign({}, state), {
        showProductCode: !state.showProductCode
      });
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions__WEBPACK_IMPORTED_MODULE_1__["ProductPageActions"].setCurrentProduct, function (state, action) {
      return Object.assign(Object.assign({}, state), {
        currentProductId: action.currentProductId
      });
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions__WEBPACK_IMPORTED_MODULE_1__["ProductPageActions"].clearCurrentProduct, function (state) {
      return Object.assign(Object.assign({}, state), {
        currentProductId: null
      });
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions__WEBPACK_IMPORTED_MODULE_1__["ProductPageActions"].initializeCurrentProduct, function (state) {
      return Object.assign(Object.assign({}, state), {
        currentProductId: 0
      });
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions__WEBPACK_IMPORTED_MODULE_1__["ProductApiActions"].loadProductsSuccess, function (state, action) {
      return Object.assign(Object.assign({}, state), {
        products: action.products,
        error: ''
      });
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions__WEBPACK_IMPORTED_MODULE_1__["ProductApiActions"].loadProductsFailure, function (state, action) {
      return Object.assign(Object.assign({}, state), {
        products: [],
        error: action.error
      });
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions__WEBPACK_IMPORTED_MODULE_1__["ProductApiActions"].updateProductSuccess, function (state, action) {
      var updatedProducts = state.products.map(function (item) {
        return action.product.id === item.id ? action.product : item;
      });
      return Object.assign(Object.assign({}, state), {
        products: updatedProducts,
        currentProductId: action.product.id,
        error: ''
      });
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions__WEBPACK_IMPORTED_MODULE_1__["ProductApiActions"].updateProductFailure, function (state, action) {
      return Object.assign(Object.assign({}, state), {
        error: action.error
      });
    }), // After a create, the currentProduct is the new product.
    Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions__WEBPACK_IMPORTED_MODULE_1__["ProductApiActions"].createProductSuccess, function (state, action) {
      return Object.assign(Object.assign({}, state), {
        products: [].concat(_toConsumableArray(state.products), [action.product]),
        currentProductId: action.product.id,
        error: ''
      });
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions__WEBPACK_IMPORTED_MODULE_1__["ProductApiActions"].createProductFailure, function (state, action) {
      return Object.assign(Object.assign({}, state), {
        error: action.error
      });
    }), // After a delete, the currentProduct is null.
    Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions__WEBPACK_IMPORTED_MODULE_1__["ProductApiActions"].deleteProductSuccess, function (state, action) {
      return Object.assign(Object.assign({}, state), {
        products: state.products.filter(function (product) {
          return product.id !== action.productId;
        }),
        currentProductId: null,
        error: ''
      });
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions__WEBPACK_IMPORTED_MODULE_1__["ProductApiActions"].deleteProductFailure, function (state, action) {
      return Object.assign(Object.assign({}, state), {
        error: action.error
      });
    }));
    /***/
  },

  /***/
  "./src/app/shared/generic-validator.ts":
  /*!*********************************************!*\
    !*** ./src/app/shared/generic-validator.ts ***!
    \*********************************************/

  /*! exports provided: GenericValidator */

  /***/
  function srcAppSharedGenericValidatorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GenericValidator", function () {
      return GenericValidator;
    });
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js"); // Generic validator for Reactive forms
    // Implemented as a class, not a service, so it can retain state for multiple forms.


    var GenericValidator = /*#__PURE__*/function () {
      // Provide the set of valid validation messages
      // Stucture:
      // controlName1: {
      //     validationRuleName1: 'Validation Message.',
      //     validationRuleName2: 'Validation Message.'
      // },
      // controlName2: {
      //     validationRuleName1: 'Validation Message.',
      //     validationRuleName2: 'Validation Message.'
      // }
      function GenericValidator(validationMessages) {
        _classCallCheck(this, GenericValidator);

        this.validationMessages = validationMessages;
      } // Processes each control within a FormGroup
      // And returns a set of validation messages to display
      // Structure
      // controlName1: 'Validation Message.',
      // controlName2: 'Validation Message.'


      _createClass(GenericValidator, [{
        key: "processMessages",
        value: function processMessages(container) {
          var _this3 = this;

          var messages = {};

          var _loop = function _loop(controlKey) {
            if (container.controls.hasOwnProperty(controlKey)) {
              var c = container.controls[controlKey]; // If it is a FormGroup, process its child controls.

              if (c instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]) {
                var childMessages = _this3.processMessages(c);

                Object.assign(messages, childMessages);
              } else {
                // Only validate if there are validation messages for the control
                if (_this3.validationMessages[controlKey]) {
                  messages[controlKey] = '';

                  if ((c.dirty || c.touched) && c.errors) {
                    Object.keys(c.errors).map(function (messageKey) {
                      if (_this3.validationMessages[controlKey][messageKey]) {
                        messages[controlKey] += _this3.validationMessages[controlKey][messageKey] + ' ';
                      }
                    });
                  }
                }
              }
            }
          };

          for (var controlKey in container.controls) {
            _loop(controlKey);
          }

          return messages;
        }
      }]);

      return GenericValidator;
    }();
    /***/

  },

  /***/
  "./src/app/shared/number.validator.ts":
  /*!********************************************!*\
    !*** ./src/app/shared/number.validator.ts ***!
    \********************************************/

  /*! exports provided: NumberValidators */

  /***/
  function srcAppSharedNumberValidatorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NumberValidators", function () {
      return NumberValidators;
    });

    var NumberValidators = /*#__PURE__*/function () {
      function NumberValidators() {
        _classCallCheck(this, NumberValidators);
      }

      _createClass(NumberValidators, null, [{
        key: "range",
        value: function range(min, max) {
          return function (c) {
            if (c.value && (isNaN(c.value) || c.value < min || c.value > max)) {
              return {
                range: true
              };
            }

            return null;
          };
        }
      }]);

      return NumberValidators;
    }();
    /***/

  }
}]);
//# sourceMappingURL=products-product-module-es5.js.map