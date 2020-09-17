define(["require", "exports", "tslib", "esri/Map", "esri/views/MapView", "./widget"], function (require, exports, tslib_1, Map_1, MapView_1, widget_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    Map_1 = tslib_1.__importDefault(Map_1);
    MapView_1 = tslib_1.__importDefault(MapView_1);
    widget_1 = tslib_1.__importDefault(widget_1);
    var map = new Map_1.default({
        basemap: "streets-vector"
    });
    var view = new MapView_1.default({
        map: map,
        container: "viewDiv",
        center: [-118.244, 34.052],
        zoom: 12
    });
    var widget = new widget_1.default({
        view: view
    });
    view.ui.add(widget, { position: "top-left" });
});
//# sourceMappingURL=main.js.map