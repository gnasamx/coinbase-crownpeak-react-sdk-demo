import { CmsComponent, CmsField, CmsFieldTypes } from "crownpeak-dxm-react-sdk";
import "../styles/word-cloud-button.css";

export default class WordCloudButton extends CmsComponent {
  constructor(props) {
    super(props);

    this.cmsDisableDragDrop = true;

    this.link = new CmsField(
      "Link",
      CmsFieldTypes.HREF,
      props && props.data ? props.data.Link : null
    );
    this.label = new CmsField(
      "Label",
      CmsFieldTypes.TEXT,
      props && props.data ? props.data.Label : null
    );
  }

  render() {
    return (
      <a href={this.link} className="word-cloud-button__link">
        <span className="word-cloud-button__label">{this.label}</span>
      </a>
    );
  }
}
