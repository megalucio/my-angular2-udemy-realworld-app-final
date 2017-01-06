"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var PaginationComponent = (function () {
    function PaginationComponent() {
        this.items = [];
        this.pageSize = 10;
        this.pageChanges = new core_1.EventEmitter();
        this.currentPage = 1;
    }
    PaginationComponent.prototype.ngOnChanges = function () {
        var pagesCount = this.items.length / this.pageSize;
        this.pages = [];
        for (var i = 1; i <= pagesCount; i++)
            this.pages.push(i);
    };
    PaginationComponent.prototype.onPageChanges = function (page) {
        if (page == 0)
            return;
        if (page > this.pages.length)
            return;
        this.currentPage = page;
        this.pageChanges.emit(page);
    };
    return PaginationComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], PaginationComponent.prototype, "items", void 0);
__decorate([
    core_1.Input('page-size'),
    __metadata("design:type", Object)
], PaginationComponent.prototype, "pageSize", void 0);
__decorate([
    core_1.Output('page-changes'),
    __metadata("design:type", Object)
], PaginationComponent.prototype, "pageChanges", void 0);
PaginationComponent = __decorate([
    core_1.Component({
        selector: 'pagination',
        template: "\n        <nav *ngIf=\"pages.length > 1\" aria-label=\"Page navigation\">\n        <ul class=\"pagination\">\n            <li [class.disabled]=\"currentPage == 1\" (click)=\"onPageChanges(currentPage-1)\">\n            <a aria-label=\"Previous\">\n                <span aria-hidden=\"true\">&laquo;</span>\n            </a>\n            </li>\n\n            <li [class.active]=\"currentPage == page\" *ngFor=\"let page of pages\">\n                <a (click)=\"onPageChanges(page)\">{{page}}</a>\n            </li>\n\n           <li [class.disabled]=\"currentPage == pages.length\" (click)=\"onPageChanges(currentPage+1)\" >\n            <a aria-label=\"Next\">\n                    <span aria-hidden=\"true\">&raquo;</span>\n            </a>\n            </li>\n        </ul>\n        </nav>\n    "
    }),
    __metadata("design:paramtypes", [])
], PaginationComponent);
exports.PaginationComponent = PaginationComponent;
//# sourceMappingURL=pagination.component.js.map