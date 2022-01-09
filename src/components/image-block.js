import { CmsComponent, CmsField, CmsFieldTypes } from "crownpeak-dxm-react-sdk";
import "../styles/image-block.css";

export default class ImageBlock extends CmsComponent {
  constructor(props) {
    super(props);

    this.cmsZones = ["droppable", "droppable-into-single-column"];
    this.cmsDisableDragDrop = false;

    this.image_src = new CmsField(
      "Image_Src",
      CmsFieldTypes.IMAGE,
      props && props.data ? props.data.Image_Src : null
    );
    this.image_alt = new CmsField(
      "Image_Alt",
      CmsFieldTypes.TEXT,
      props && props.data ? props.data.Image_Alt : null
    );
  }

  render() {
    return (
      <div className="image-container">
        <img className="image" src={this.image_src} alt={this.image_alt} />
      </div>
    );
  }
}
