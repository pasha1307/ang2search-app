"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var data_service_service_1 = require('./data-service.service');
var data_sample_1 = require('./data-sample');
var search_pipe_1 = require('./search.pipe');
var slider_pipe_1 = require('./slider.pipe');
var AppComponent = (function () {
    function AppComponent(dataService) {
        this.dataService = dataService;
        this.range = '1920';
        this.query = "";
        this.title = 'Finding Aid';
        this.items = data_sample_1.ITEMS;
        this.items = this.dataService.getItems();
    }
    AppComponent.prototype.onSelect = function (item) {
        this.itemSelected = item;
    };
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-root',
            templateUrl: 'app.component.html',
            styleUrls: ['app.component.css'],
            providers: [data_service_service_1.DataServiceService],
            pipes: [search_pipe_1.SearchPipe, slider_pipe_1.SliderPipe]
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map