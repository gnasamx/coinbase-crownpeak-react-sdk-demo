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

  handleLink = () => {
    document
      .getElementById(
        `${this.label
          .replace(/[^a-zA-Z ]/g, "")
          .toLowerCase()
          .split(" ")
          .join("-")}`
      )
      ?.scrollIntoView({ behavior: "smooth" });
  };

  render() {
    return (
      <li className="article-sidebar__list-item">
        <button
          className="article-sidebar__list-item-link"
          onClick={this.handleLink}
        >
          {this.label}
        </button>
      </li>
    );
  }
}
