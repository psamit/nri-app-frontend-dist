(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["emailpanel-emailpanel-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/emailpanel/emailpanel.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/emailpanel/emailpanel.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>emailpanel works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/emailpanel/listemail/listemail.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/emailpanel/listemail/listemail.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card\">\n    <div class=\"card-body\">\n\n        <!-- Begin Page Content -->\n        <div class=\"container-fluid\">\n\n            <!-- Page Heading -->\n            <div class=\"d-sm-flex align-items-center justify-content-between mb-4\">\n                <h1 class=\"h3 mb-0 text-gray-800 page-title\">List of Email Templates<span>Control Pannel</span></h1>\n                <ol class=\"breadcrumb text-xs bg-transparent\">\n                    <li><i class=\"fas fa-fw fa-tachometer-alt\"></i><a href=\"#\" class=\"text-gray-700\">Home</a><i class=\"fas fa-fw fa-angle-right\"></i></li>\n                    <li><a href=\"#\" class=\"text-gray-700\">Email Templates</a><i class=\"fas fa-fw fa-angle-right\"></i></li>\n                    <li class=\"active text-gray-500\">List</li>\n                </ol>\n            </div>\n\n            <div class=\"row\">\n                <div class=\"col-lg-12\">\n                    <!-- DataTales Example -->\n                    <div class=\"bg-white shadow border-top-green mb-4\">\n\n\n\n\n                        <div class=\"card-body\">\n                            <div class=\"mb-2\">\n                                <button type=\"button\" class=\"btn btn-warning btn-sm\"><i class=\"fa fa-reply-all pr-2\" aria-hidden=\"true\"></i>Back</button>\n                                <button type=\"button\" class=\"btn btn-info btn-sm\"><i class=\"fa fa-print pr-2\" aria-hidden=\"true\"></i>Print</button>\n                                <button type=\"button\" class=\"btn btn-success btn-sm\"><i class=\"fa fa-paper-plane pr-2\" aria-hidden=\"true\"></i>Export Excel</button>\n                                <button type=\"button\" class=\"btn btn-info btn-sm\"><i class=\"fa fa-file-pdf pr-2\" aria-hidden=\"true\"></i>Export Pdf</button>\n                            </div>\n                            <hr class=\"mp-4 mt-4\">\n                            <div class=\"table-responsive mt-4\">\n                                <table class=\"table table-bordered\" id=\"dataTable\" width=\"100%\" cellspacing=\"0\">\n                                    <thead>\n                                        <tr>\n                                            <th><input type=\"checkbox\" name=\"\"></th>\n                                            <th>Id</th>\n                                            <th>Sender Id</th>\n                                            <th>Receiver Email</th>\n                                            <th>Subject</th>\n                                            <th>Message</th>\n                                        </tr>\n                                    </thead>\n                                    <!-- <tfoot>\n                                        <tr>\n                                            <th><input type=\"checkbox\" name=\"\"></th>\n                                            <th>1</th>\n                                            <th>Sender Id</th>\n                                            <th>Receiver Email</th>\n                                            <th>Subject</th>\n                                            <th>Message</th>\n                                        </tr>\n                                    </tfoot> -->\n                                    <tbody>\n                                        <tr *ngFor=\"let newdata of emaildata\">\n                                            <td><input type=\"checkbox\" #myItem (change)=\"OnCheckboxSelect(newdata.id, $event)\" name=\"item-{{newdata.id}}\"></td>\n                                            <td>{{newdata.reciver}}</td>\n                                            <td>{{newdata.senderid}}</td>\n                                            <td>{{newdata.reciverid}}</td>\n                                            <td>{{newdata.subject}}</td>\n                                            <td>{{newdata.message}}</td>\n                                        </tr>\n                                    </tbody>\n                                </table>\n                            </div>\n                        </div>\n                    </div>\n\n                </div>\n            </div>\n\n\n\n\n\n\n        </div>\n        <!-- /.container-fluid -->\n\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/emailpanel/sendemail/sendemail.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/emailpanel/sendemail/sendemail.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card\">\n\n\n    <div class=\"card-body\">\n\n        <!-- Begin Page Content -->\n        <div class=\"container-fluid\">\n\n            <!-- Page Heading -->\n            <div class=\"d-sm-flex align-items-center justify-content-between mb-4\">\n                <h1 class=\"h3 mb-0 text-gray-800 page-title\">Email Template<span>Control Pannel</span></h1>\n                <ol class=\"breadcrumb text-xs bg-transparent\">\n                    <li><i class=\"fas fa-fw fa-tachometer-alt\"></i><a href=\"#\" class=\"text-gray-700\">Home</a><i class=\"fas fa-fw fa-angle-right\"></i></li>\n                    <li><a href=\"#\" class=\"text-gray-700\">Email Panel</a><i class=\"fas fa-fw fa-angle-right\"></i></li>\n                    <li class=\"active text-gray-500\">Create</li>\n                </ol>\n            </div>\n\n            <div class=\"row\">\n                <div class=\"col-lg-12 mb-4\">\n\n                    <!-- Project Card Example -->\n                    <div class=\"card shadow mb-4\">\n                        <div class=\"card-header py-3\">\n                            <h6 class=\"m-0\">New Email</h6>\n                        </div>\n                        <div class=\"card-body\">\n                            <form class=\"user\">\n\n                                <div class=\"form-group mt-4\">\n                                    <div class=\"row\">\n                                        <div class=\"col-lg-2 text-right text-green\"><label>Select Reciever {{Reciever}}</label></div>\n                                        <div class=\"col-lg-10 \">\n                                            <select class=\"form-control form-control-user\" name=\"reciever\" [(ngModel)]=\"Reciever\" (change)=\"getReciever($event.target.value)\">\n                              <option *ngFor=\"let ln of Recievers\" [value]=\"ln.id\"> {{ln.name}}</option>\n                          </select>{{Reciever1}}\n                                        </div>\n                                    </div>\n\n                                </div>\n                                <div class=\"form-group\">\n                                    <div class=\"row\">\n                                        <div class=\"col-lg-2 text-right text-green\"><label>Subject{{Subject}}</label></div>\n                                        <div class=\"col-lg-10\">\n                                            <input type=\"text\" class=\"form-control form-control-user\" name=\"subject\" [(ngModel)]=\"Subject\" />\n\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"form-group\">\n                                    <div class=\"row\">\n                                        <div class=\"col-lg-2 text-right text-green\"><label>Message</label></div>\n                                        <div class=\"col-lg-10\">\n                                            <textarea class=\"form-control\" style=\"height: 200px;\" name=\"message\" [(ngModel)]=\"Message\"></textarea>\n                                        </div>\n                                    </div>\n                                </div>\n                                <hr class=\"mp-4 mt-4\" />\n                                <div class=\"row\">\n                                    <div class=\"col-lg-12 text-right\">\n                                        <button type=\"button\" (click)=\"onReset()\" class=\"btn btn-info btn-sm\">Reset</button>\n                                        <button type=\"button\" (click)=\"onSend()\" class=\"btn btn-success btn-sm\">Send</button>\n                                    </div>\n                                </div>\n\n                            </form>\n                        </div>\n                    </div>\n\n                </div>\n            </div>\n\n\n\n\n\n\n        </div>\n        <!-- /.container-fluid -->\n\n    </div>\n\n</div>");

/***/ }),

/***/ "./src/app/layout/emailpanel/email-panel-service.service.ts":
/*!******************************************************************!*\
  !*** ./src/app/layout/emailpanel/email-panel-service.service.ts ***!
  \******************************************************************/
/*! exports provided: EmailPanelServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailPanelServiceService", function() { return EmailPanelServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared */ "./src/app/shared/index.ts");



let EmailPanelServiceService = class EmailPanelServiceService {
    constructor(apiService) {
        this.apiService = apiService;
    }
    getemailPanel() {
        return this.apiService.get(`/emailPanel`);
    }
    createemailPanel(data) {
        return this.apiService.post(`/emailPanel`, data);
    }
};
EmailPanelServiceService.ctorParameters = () => [
    { type: _shared__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }
];
EmailPanelServiceService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], EmailPanelServiceService);



/***/ }),

/***/ "./src/app/layout/emailpanel/emailpanel-routing.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/layout/emailpanel/emailpanel-routing.module.ts ***!
  \****************************************************************/
/*! exports provided: EmailpanelRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailpanelRoutingModule", function() { return EmailpanelRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _emailpanel_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./emailpanel.component */ "./src/app/layout/emailpanel/emailpanel.component.ts");
/* harmony import */ var _sendemail_sendemail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sendemail/sendemail.component */ "./src/app/layout/emailpanel/sendemail/sendemail.component.ts");
/* harmony import */ var _listemail_listemail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./listemail/listemail.component */ "./src/app/layout/emailpanel/listemail/listemail.component.ts");






const routes = [
    { path: '', component: _emailpanel_component__WEBPACK_IMPORTED_MODULE_3__["EmailpanelComponent"] },
    { path: 'send-email',
        data: {
            breadcrumb: 'Send Email'
        },
        component: _sendemail_sendemail_component__WEBPACK_IMPORTED_MODULE_4__["SendemailComponent"] },
    { path: 'list-email',
        data: {
            breadcrumb: 'Email List'
        },
        component: _listemail_listemail_component__WEBPACK_IMPORTED_MODULE_5__["ListemailComponent"] },
];
let EmailpanelRoutingModule = class EmailpanelRoutingModule {
};
EmailpanelRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], EmailpanelRoutingModule);



/***/ }),

/***/ "./src/app/layout/emailpanel/emailpanel.component.css":
/*!************************************************************!*\
  !*** ./src/app/layout/emailpanel/emailpanel.component.css ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9lbWFpbHBhbmVsL2VtYWlscGFuZWwuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/layout/emailpanel/emailpanel.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/layout/emailpanel/emailpanel.component.ts ***!
  \***********************************************************/
/*! exports provided: EmailpanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailpanelComponent", function() { return EmailpanelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let EmailpanelComponent = class EmailpanelComponent {
    constructor() { }
    ngOnInit() {
    }
};
EmailpanelComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-emailpanel',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./emailpanel.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/emailpanel/emailpanel.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./emailpanel.component.css */ "./src/app/layout/emailpanel/emailpanel.component.css")).default]
    })
], EmailpanelComponent);



/***/ }),

/***/ "./src/app/layout/emailpanel/emailpanel.module.ts":
/*!********************************************************!*\
  !*** ./src/app/layout/emailpanel/emailpanel.module.ts ***!
  \********************************************************/
/*! exports provided: EmailpanelModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailpanelModule", function() { return EmailpanelModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _emailpanel_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./emailpanel-routing.module */ "./src/app/layout/emailpanel/emailpanel-routing.module.ts");
/* harmony import */ var _emailpanel_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./emailpanel.component */ "./src/app/layout/emailpanel/emailpanel.component.ts");
/* harmony import */ var _sendemail_sendemail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sendemail/sendemail.component */ "./src/app/layout/emailpanel/sendemail/sendemail.component.ts");
/* harmony import */ var _listemail_listemail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./listemail/listemail.component */ "./src/app/layout/emailpanel/listemail/listemail.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");








let EmailpanelModule = class EmailpanelModule {
};
EmailpanelModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_emailpanel_component__WEBPACK_IMPORTED_MODULE_4__["EmailpanelComponent"], _sendemail_sendemail_component__WEBPACK_IMPORTED_MODULE_5__["SendemailComponent"], _listemail_listemail_component__WEBPACK_IMPORTED_MODULE_6__["ListemailComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _emailpanel_routing_module__WEBPACK_IMPORTED_MODULE_3__["EmailpanelRoutingModule"]
        ]
    })
], EmailpanelModule);



/***/ }),

/***/ "./src/app/layout/emailpanel/listemail/listemail.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/layout/emailpanel/listemail/listemail.component.css ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9lbWFpbHBhbmVsL2xpc3RlbWFpbC9saXN0ZW1haWwuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/layout/emailpanel/listemail/listemail.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/layout/emailpanel/listemail/listemail.component.ts ***!
  \********************************************************************/
/*! exports provided: ListemailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListemailComponent", function() { return ListemailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _email_panel_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../email-panel-service.service */ "./src/app/layout/emailpanel/email-panel-service.service.ts");



let ListemailComponent = class ListemailComponent {
    constructor(service) {
        this.service = service;
        this.selectedIds = [];
    }
    OnCheckboxSelect(id, event) {
        if (event.target.checked === true) {
            this.selectedIds.push({ id: id, checked: event.target.checked });
            console.log('Selected Ids ', this.selectedIds);
        }
        if (event.target.checked === false) {
            this.selectedIds = this.selectedIds.filter((item) => item.id !== id);
            console.log('UnSelected Ids ', this.selectedIds);
        }
    }
    ngOnInit() {
        this.getemailPanel();
        this.emaildata = [
            { "id": "1", "senderid": "text@gmail.com", "reciverid": "test@gmail.com", "subject": "Test Mail", "message": "testing 123" },
            { "id": "2", "senderid": "text1@gmail.com", "reciverid": "test1@gmail.com", "subject": "Test Mail2", "message": "testing 1234" },
        ];
    }
    getemailPanel() {
        this.service.getemailPanel().subscribe(res => {
            console.log(res);
            this.emaildata = res['emailPanel'];
            // this.disableSubmit = false;
        }, () => {
            //this.disableSubmit = false;
        });
    }
};
ListemailComponent.ctorParameters = () => [
    { type: _email_panel_service_service__WEBPACK_IMPORTED_MODULE_2__["EmailPanelServiceService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])('myItem')
], ListemailComponent.prototype, "item", void 0);
ListemailComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-listemail',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./listemail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/emailpanel/listemail/listemail.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./listemail.component.css */ "./src/app/layout/emailpanel/listemail/listemail.component.css")).default]
    })
], ListemailComponent);



/***/ }),

/***/ "./src/app/layout/emailpanel/sendemail/sendemail.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/layout/emailpanel/sendemail/sendemail.component.css ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".text-right button {\r\n    margin-right: 5px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2VtYWlscGFuZWwvc2VuZGVtYWlsL3NlbmRlbWFpbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L2VtYWlscGFuZWwvc2VuZGVtYWlsL3NlbmRlbWFpbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRleHQtcmlnaHQgYnV0dG9uIHtcclxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/layout/emailpanel/sendemail/sendemail.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/layout/emailpanel/sendemail/sendemail.component.ts ***!
  \********************************************************************/
/*! exports provided: SendemailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendemailComponent", function() { return SendemailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _email_panel_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../email-panel-service.service */ "./src/app/layout/emailpanel/email-panel-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");





let SendemailComponent = class SendemailComponent {
    constructor(service, router, route, tost) {
        this.service = service;
        this.router = router;
        this.route = route;
        this.tost = tost;
        this.Recievers = [
            { 'id': '1', 'name': "English" },
            { 'id': '2', 'name': "Hindi" },
            { 'id': '3', 'name': "Urdu" },
            { 'id': '4', 'name': "Franch" }
        ];
        this.Reciever = "string";
        this.Subject = "";
        this.Message = "";
    }
    ngOnInit() {
        this.Recievers = [
            { 'id': '1', 'name': "English" },
            { 'id': '2', 'name': "Hindi" },
            { 'id': '3', 'name': "Urdu" },
            { 'id': '4', 'name': "Franch" }
        ];
    }
    getReciever(e) {
        console.log(e);
        this.Reciever = e;
    }
    onSend() {
        console.log(this.Reciever);
        console.log(this.Subject);
        console.log(this.Message);
        let data = {
            "reciver": this.Reciever,
            "subject": this.Subject,
            "message": this.Message,
            "senderid": "text@gmail.com",
            "reciverid": "test@gmail.com",
        };
        console.log(data);
        this.service.createemailPanel(data).subscribe(res => {
            console.log(res);
            // this.disableSubmit = false;
            this.tost.success("EmailPanel created succesfully");
            this.router.navigate(['/email-panel/list-email']);
        }, () => {
            //this.disableSubmit = false;
        });
    }
    onReset() {
        this.Reciever = "";
        this.Subject = "";
        this.Message = "";
    }
};
SendemailComponent.ctorParameters = () => [
    { type: _email_panel_service_service__WEBPACK_IMPORTED_MODULE_2__["EmailPanelServiceService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] }
];
SendemailComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sendemail',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./sendemail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/emailpanel/sendemail/sendemail.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./sendemail.component.css */ "./src/app/layout/emailpanel/sendemail/sendemail.component.css")).default]
    })
], SendemailComponent);



/***/ })

}]);
//# sourceMappingURL=emailpanel-emailpanel-module-es2015.js.map