import { CmsDynamicPage } from "crownpeak-dxm-react-sdk";
import ArticleTitleLarge from "../components/article-title-large";
import ImageBlock from "../components/image-block";
import HtmlParser from "../components/html-parser";
import DropZone from "../components/drop-zone";
import Routing from "../routing";

import "../styles/detail-page.css";

export default class DetailPage extends CmsDynamicPage {
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
        <div className="container detail-page">
          <div className="detail-page__content-spacing">
            <ArticleTitleLarge />
            <div className="row">
              <div className="col-lg-8">
                <div className="detail-page__content-spacing">
                  <ImageBlock />
                  <HtmlParser />
                </div>
              </div>
              <div className="col-lg-4">
                <DropZone name="droppable" />
              </div>
            </div>
          </div>
        </div>
      )
    );
  }
}
