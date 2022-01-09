import { CmsComponent, CmsField, CmsFieldTypes } from "crownpeak-dxm-react-sdk";
import "../styles/section-header.css";

export default class SectionHeader extends CmsComponent {
  constructor(props) {
    super(props);

    this.text = new CmsField(
      "Text",
      CmsFieldTypes.TEXT,
      props && props.data ? props.data.Text : null
    );
    this.body = new CmsField(
      "Body",
      CmsFieldTypes.TEXT,
      props && props.data ? props.data.Body : null
    );
  }

  render() {
    return (
      <div className="section-header">
        <h2 className="section-header__text">{this.text}</h2>
        <p className="section-header__body">{this.body}</p>
      </div>
    );
  }
}
