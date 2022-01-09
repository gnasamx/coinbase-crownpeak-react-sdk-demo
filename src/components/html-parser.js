import parse from "html-react-parser";
import { CmsComponent, CmsField, CmsFieldTypes } from "crownpeak-dxm-react-sdk";
import "../styles/html-parser.css";

export default class HtmlParser extends CmsComponent {
  constructor(props) {
    super(props);
    this.cmsZones = ["droppable", "droppable-into-single-column"];
    this.cmsDisableDragDrop = false;

    this.html_string = new CmsField(
      "HtmlString",
      CmsFieldTypes.WYSIWYG,
      props && props.data ? props.data.HtmlString : null
    );
  }

  render() {
    return <div className="html-parser">{parse(this.html_string.data())}</div>;
  }
}
