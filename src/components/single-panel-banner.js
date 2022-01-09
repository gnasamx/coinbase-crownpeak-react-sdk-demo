import { CmsComponent, CmsField, CmsFieldTypes } from "crownpeak-dxm-react-sdk";
import "../styles/single-panel-banner.css";

export default class SinglePanelBanner extends CmsComponent {
  constructor(props) {
    super(props);

    this.cmsZones = ["droppable", "droppable-into-single-column"];
    this.cmsDisableDragDrop = false;

    this.title = new CmsField(
      "Title",
      CmsFieldTypes.TEXT,
      props && props.data ? props.data.Title : null
    );
    this.body = new CmsField(
      "Body",
      CmsFieldTypes.TEXT,
      props && props.data ? props.data.Body : null
    );
  }

  render() {
    return (
      <div className="single-panel-banner">
        <h2 className="single-panel-banner__title">{this.title}</h2>
        <p className="single-panel-banner__body">{this.body}</p>
        <button className="single-panel-banner__button">
          <span className="single-panel-banner__button-text">
            Start earning
          </span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            type="light"
            className="single-panel-banner__button-icon"
          >
            <path
              d="M4.61 3.05L9.56 8l-4.95 4.95 1.42 1.41L12.39 8 6.03 1.64 4.61 3.05z"
              fill="#0a0b0d"
            ></path>
          </svg>
        </button>
      </div>
    );
  }
}
