import React from "react";
import ReactDOM from "react-dom";
import { renderRoutes } from "react-router-config";
import { BrowserRouter } from "react-router-dom";
import { Switch } from "react-router";
import LearnPage from "./pages/learn-page";
import DetailPage from "./pages/detail-page";
import SingleColumnLayout from "./pages/single-column-layout";
import SidebarLayout from "./pages/sidebar-layout";
export default class Routing {
  static get routes() {
    return this._routes || [];
  }

  static set routes(r) {
    this._routes = r;
  }

  static getCmsAssetId(path) {
    return (Routing.routes.find((r) => r.path === path) || {}).cmsassetid;
  }

  static processRoutes(routeFile) {
    const componentRegistry = {
      LearnPage,
      DetailPage,
      SingleColumnLayout,
      SidebarLayout,
    };

    fetch(routeFile)
      .then((res) => res.json())
      .then((routeData) => {
        console.log("routeData: ", routeData);
        Object.keys(routeData).forEach(function (key) {
          const route = {
            path: routeData[key].path,
            exact: routeData[key].exact === true,
            component: componentRegistry[routeData[key].component],
            cmsassetid: routeData[key].cmsassetid,
          };
          Routing.routes.push(route);
        });
        ReactDOM.render(
          <BrowserRouter>
            <Switch>{renderRoutes(Routing.routes)}</Switch>
          </BrowserRouter>,
          document.getElementById("root")
        );
      })
      .catch(console.log);
  }
}

Routing.routes = [];
