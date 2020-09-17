import EsriMap from "esri/Map";
import MapView from "esri/views/MapView";
import SwipeManager from "./widget";

const map = new EsriMap({
  basemap: "streets-vector"
});

const view = new MapView({
  map: map,
  container: "viewDiv",
  center: [-118.244, 34.052],
  zoom: 12
});

var widget = new SwipeManager({
    view: view
  });

view.ui.add(widget,{position:"top-left"});