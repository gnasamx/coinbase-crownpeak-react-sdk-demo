import { CmsDynamicPage, CmsStaticPage } from "crownpeak-dxm-react-sdk";
import DropZone from "../components/drop-zone";
import Routing from "../routing";
import "../styles/sidebar-layout.css";

export default class SidebarLayout extends CmsDynamicPage {
  constructor(props) {
    super(props);

    this.cmsUseTmf = false;
    this.cmsUseMetadata = false;
    this.cmsSuppressModel = false;
    this.cmsSuppressFolder = false;

    if (this.props && this.props.location) {
      if (this.props && this.props.location) {
        this.cmsAssetId = Routing.getCmsAssetId(this.props.location.pathname);
      }
    }
  }

  render() {
    super.render();
    return (
      this.state.isLoaded && (
        <article className="sidebar-layout">
          <div className="sidebar-layout__wrapper">
            <DropZone name="droppable-12" />
            <div className="sidebar-layout__columns">
              <div width="2" className="sidebar-layout__body">
                <div className="sidebar-layout__body-drop-zone">
                  <DropZone name="droppable-8" />
                </div>
              </div>
              <aside width="1" className="sidebar-layout__aside">
                <div className="sidebar-layout__aside-drop-zone">
                  <DropZone name="droppable-4" />
                </div>
              </aside>
            </div>
          </div>
        </article>
      )
    );
  }
}
