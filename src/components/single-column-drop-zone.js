import { CmsDropZoneComponent } from "crownpeak-dxm-react-sdk";
import ArticleGrid from "./article-grid";
import SectionHeader from "./section-header";
import SinglePanelBanner from "./single-panel-banner";
import DragDropZone from "./drag-drop-zone";
import ArticleSidebar from "./article-sidebar";
import ArticleTitleLarge from "./article-title-large";
import HtmlParser from "./html-parser";
import ImageBlock from "./image-block";
import NoteBlock from "./note-block";
import { createElement } from "react";
import "../styles/drop-zone.css";

export default class SingleColumnDropZone extends CmsDropZoneComponent {
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
    };
  }

  render() {
    return createElement(
      "div",
      { className: "single-column-drop-zone" },
      super.getComponents()
    );
  }
}
