define(["require", "exports", "tslib", "esri/core/accessorSupport/decorators", "esri/widgets/Widget", "esri/widgets/LayerList", "esri/widgets/support/widget"], function (require, exports, tslib_1, decorators_1, Widget, LayerList, widget_1) {
    "use strict";
    var CSS = {
        base: "esri-icon-edit"
    };
    var SwipeManager = /** @class */ (function (_super) {
        tslib_1.__extends(SwipeManager, _super);
        function SwipeManager(params) {
            var _this_1 = _super.call(this) || this;
            _this_1._getGreeting = _this_1._getGreeting.bind(_this_1);
            _this_1.view = params.view;
            return _this_1;
        }
        SwipeManager.prototype.render = function () {
            var icon = CSS.base;
            var _this = this;
            return (widget_1.tsx("div", { class: "esri-widget--button" },
                widget_1.tsx("span", { "aria-hidden": "true", onclick: this._getGreeting, class: icon }),
                widget_1.tsx("span", { class: "esri-icon-font-fallback-text" }, "Geni\u015Flet")));
        };
        SwipeManager.prototype._getGreeting = function () {
            var layerList = new LayerList({
                view: this.view
            });
            this.view.ui.add(layerList, {
                position: "top-left"
            });
        };
        tslib_1.__decorate([
            decorators_1.property(),
            widget_1.renderable()
        ], SwipeManager.prototype, "view", void 0);
        SwipeManager = tslib_1.__decorate([
            decorators_1.subclass("esri.widgets.SwipeManager")
        ], SwipeManager);
        return SwipeManager;
    }(Widget));
    return SwipeManager;
});
//# sourceMappingURL=widget.js.map