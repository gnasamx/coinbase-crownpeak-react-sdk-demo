import { CmsDynamicPage, CmsStaticPage } from "crownpeak-dxm-react-sdk";
import SingleColumnDropZone from "../components/single-column-drop-zone";
import Routing from "../routing";
import "../styles/single-column-layout.css";

export default class SingleColumnLayout extends CmsStaticPage {
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
        <article className="single-column-layout">
          <SingleColumnDropZone name="droppable-into-single-column" />
        </article>
      )
    );
  }
}
