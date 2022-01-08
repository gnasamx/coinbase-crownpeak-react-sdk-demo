import { CmsCore } from "crownpeak-dxm-react-sdk";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import Routing from "./routing";

console.log("env: ", process.env.REACT_APP_CMS_STATIC_CONTENT_LOCATION);

CmsCore.init(
  process.env.REACT_APP_CMS_STATIC_CONTENT_LOCATION,
  process.env.REACT_APP_CMS_DYNAMIC_CONTENT_LOCATION
);

Routing.processRoutes(
  process.env.REACT_APP_CMS_STATIC_CONTENT_LOCATION + "/routes.json"
);
