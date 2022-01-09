import { CmsComponent, CmsField, CmsFieldTypes } from "crownpeak-dxm-react-sdk";
import "../styles/article-title-large.css";

export default class ArticleTitleLarge extends CmsComponent {
  constructor(props) {
    super(props);

    this.cmsZones = ["droppable", "droppable-into-single-column"];
    this.cmsDisableDragDrop = false;

    this.title = new CmsField(
      "Title",
      CmsFieldTypes.TEXT,
      props && props.data ? props.data.Title : null
    );
    this.subtitle = new CmsField(
      "Subtitle",
      CmsFieldTypes.TEXT,
      props && props.data ? props.data.Subtitle : null
    );
  }

  render() {
    return (
      <div className="article-title-large">
        <h1 className="article-title-large__title">{this.title}</h1>
        <div className="article-title-large__subtitle-wrapper">
          <p className="article-title-large__subtitle">{this.subtitle}</p>
        </div>
      </div>
    );
  }
}
