import { CmsDynamicPage } from "crownpeak-dxm-react-sdk";

import DropZone from "../components/drop-zone";
import SectionHeader from "../components/section-header";
import Routing from "../routing";

export default class LearnPage extends CmsDynamicPage {
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
        <div className="container">
          <SectionHeader />
          <DropZone name="droppable" />
        </div>
      )
    );
  }
}
