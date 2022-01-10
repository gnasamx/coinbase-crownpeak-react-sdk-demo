import { CmsDropZoneComponent } from "crownpeak-dxm-react-sdk";
import "../styles/drop-zone.css";
import ArticleGrid from "./article-grid";
import ArticleSidebar from "./article-sidebar";
import ArticleTitleLarge from "./article-title-large";
import DragDropZone from "./drag-drop-zone";
import HtmlParser from "./html-parser";
import ImageBlock from "./image-block";
import NoteBlock from "./note-block";
import SectionHeader from "./section-header";
import SinglePanelBanner from "./single-panel-banner";
import WordCloudSection from "./word-cloud-section";
import ShareButtonList from "./share-button-list";

export default class DropZone extends CmsDropZoneComponent {
  constructor(props) {
    super(props);
    this.components = {
      DragDropZone,
      ArticleGrid,
      SectionHeader,
      SinglePanelBanner,
      ArticleSidebar,
      ArticleTitleLarge,
      HtmlParser,
      ImageBlock,
      NoteBlock,
      WordCloudSection,
      ShareButtonList,
    };
  }

  render() {
    return (
      <div
        className={`drop-zone${
          this.props.className ? this.props.className : ""
        }`}
      >
        {super.getComponents()}
      </div>
    );
  }
}
