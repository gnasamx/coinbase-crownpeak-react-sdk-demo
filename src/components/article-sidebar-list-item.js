import { CmsComponent, CmsField, CmsFieldTypes } from "crownpeak-dxm-react-sdk";
import "../styles/article-sidebar.css";

export default class ArticleSidebarListItem extends CmsComponent {
  constructor(props) {
    super(props);

    this.cmsDisableDragDrop = true;

    this.label = new CmsField(
      "Label",
      CmsFieldTypes.TEXT,
      props && props.data ? props.data.Label : null
    );
  }

  render() {
    return (
      <li className="article-sidebar__list-item">
        <button
          className="article-sidebar__list-item-link"
          onClick={() => {
            document
              .getElementById(
                `${this.label.toLowerCase().split(" ").join("-")}`
              )
              ?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          {this.label}
        </button>
      </li>
    );
  }
}
