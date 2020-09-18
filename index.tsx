import {subclass, property} from "esri/core/accessorSupport/decorators";
import Widget = require("esri/widgets/Widget");
import view = require("esri/views/View");
import LayerList = require("esri/widgets/LayerList");
import Swipe = require("esri/widgets/Swipe");
import { renderable, tsx } from "esri/widgets/support/widget";
import Layer from "esri/layers/Layer";
import Collection from "esri/core/Collection";

const CSS = {
  base: "esri-icon-edit"
};

@subclass("esri.widgets.SwipeManager")
class SwipeManager extends Widget {

  constructor(params?: any) {
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


  @property()
  @renderable()
  view: view ;

  @property()
  layermanagerposition: any;

  @property()
  trailingLayers: Collection<Layer>;

  @property()
  leadingLayers: Collection<Layer>;

  @property()
  widgetsclosed: boolean;

  @property()
  layerlist: LayerList;

  @property()
  swipe: Swipe;

  render() {
   
    const icon = CSS.base;
    let _this = this;

    return (


   <div class="esri-widget--button">
  <span aria-hidden="true" onclick={this._getWidgets} class={icon}></span><span class="esri-icon-font-fallback-text">Genişlet</span>
  </div>



      );
  }


  private _getWidgets(): void {
 
    if(this.widgetsclosed)
   {

    this.view.ui.add(this.layerlist, {
      position: this.layermanagerposition
    });

   
    this.view.ui.add(this.swipe);
   }
   else
   {
    if(this.view.ui.find(this.swipe.id)){
      this.view.ui.remove(this.swipe);
    }

    if(this.view.ui.find(this.layerlist.id)){
      this.view.ui.remove(this.layerlist);
    }

   }
   this.widgetsclosed =!this.widgetsclosed;
 
  }

}

export = SwipeManager;