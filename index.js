"use strict";
const tslib_1 = require("tslib");
const decorators_1 = require("esri/core/accessorSupport/decorators");
const Widget = require("esri/widgets/Widget");
const LayerList = require("esri/widgets/LayerList");
const Swipe = require("esri/widgets/Swipe");
const widget_1 = require("esri/widgets/support/widget");
const CSS = {
    base: "esri-icon-edit"
};
let SwipeManager = class SwipeManager extends Widget {
    constructor(params) {
        super();
        this._getWidgets = this._getWidgets.bind(this);
        this.view = params.view;
        this.layermanagerposition = params.layermanagerposition;
        this.widgetsclosed = true;
        this.trailingLayers = params.trailingLayers;
        this.leadingLayers = params.leadingLayers;
        this.swipe = new Swipe({
            view: this.view
        });
        this.layerlist = new LayerList({
            view: this.view
        });
    }
    render() {
        const icon = CSS.base;
        let _this = this;
        return (widget_1.tsx("div", { class: "esri-widget--button" },
            widget_1.tsx("span", { "aria-hidden": "true", onclick: this._getWidgets, class: icon }),
            widget_1.tsx("span", { class: "esri-icon-font-fallback-text" }, "Geni\u015Flet")));
    }
    _getWidgets() {
        if (this.widgetsclosed) {
            this.view.ui.add(this.layerlist, {
                position: this.layermanagerposition
            });
            this.view.ui.add(this.swipe);
        }
        else {
            if (this.view.ui.find(this.swipe.id)) {
                this.view.ui.remove(this.swipe);
            }
            if (this.view.ui.find(this.layerlist.id)) {
                this.view.ui.remove(this.layerlist);
            }
        }
        this.widgetsclosed = !this.widgetsclosed;
    }
};
tslib_1.__decorate([
    decorators_1.property(),
    widget_1.renderable()
], SwipeManager.prototype, "view", void 0);
tslib_1.__decorate([
    decorators_1.property()
], SwipeManager.prototype, "layermanagerposition", void 0);
tslib_1.__decorate([
    decorators_1.property()
], SwipeManager.prototype, "trailingLayers", void 0);
tslib_1.__decorate([
    decorators_1.property()
], SwipeManager.prototype, "leadingLayers", void 0);
tslib_1.__decorate([
    decorators_1.property()
], SwipeManager.prototype, "widgetsclosed", void 0);
tslib_1.__decorate([
    decorators_1.property()
], SwipeManager.prototype, "layerlist", void 0);
tslib_1.__decorate([
    decorators_1.property()
], SwipeManager.prototype, "swipe", void 0);
SwipeManager = tslib_1.__decorate([
    decorators_1.subclass("esri.widgets.SwipeManager")
], SwipeManager);
module.exports = SwipeManager;
//# sourceMappingURL=index.js.map