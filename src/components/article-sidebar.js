import { CmsComponent, CmsField } from "crownpeak-dxm-react-sdk";
import ArticleSidebarListItem from "./article-sidebar-list-item";
import "../styles/article-sidebar.css";

export default class ArticleSidebar extends CmsComponent {
  constructor(props) {
    super(props);
    this.cmsZones = ["droppable", "droppable-into-single-column"];
    this.cmsDisableDragDrop = false;

    this.article_links = new CmsField(
      "ArticleSidebar",
      "",
      this.props.data.ArticleSidebar || []
    );
  }

  render() {
    let i = 0;
    return (
      <nav className="article-sidebar">
        <ul className="article-sidebar__list">
          {/* <List name="ArticleSidebar" type="ArticleSidebarListItem"> */}
          {this.article_links.value.map((sc) => {
            return (
              <ArticleSidebarListItem
                data={sc.ArticleSidebarListItem}
                key={i++}
              />
            );
          })}
          {/* </List> */}
        </ul>
      </nav>
    );
  }
}
