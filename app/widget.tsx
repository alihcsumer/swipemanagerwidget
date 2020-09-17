import {subclass, property} from "esri/core/accessorSupport/decorators";
import Widget = require("esri/widgets/Widget");
import view = require("esri/views/View");
import LayerList = require("esri/widgets/LayerList");
import { renderable, tsx } from "esri/widgets/support/widget";

const CSS = {
  base: "esri-icon-edit"
};

@subclass("esri.widgets.SwipeManager")
class SwipeManager extends Widget {

  constructor(params?: any) {
    super();
    this._getGreeting = this._getGreeting.bind(this);
    this.view = params.view;
  }


  @property()
  @renderable()
  view: view ;



  render() {
   
    const icon = CSS.base;
    let _this = this;

    return (


   <div class="esri-widget--button">
  <span aria-hidden="true" onclick={this._getGreeting} class={icon}></span><span class="esri-icon-font-fallback-text">Genişlet</span>
  </div>



      );
  }


  private _getGreeting(): void {
   
    var layerList = new LayerList({
      view: this.view
    });

    this.view.ui.add(layerList, {
      position: "top-left"
    });
 
  }

}

export = SwipeManager;