import { CmsComponent, CmsField, CmsDataCache } from "crownpeak-dxm-react-sdk";
import Article from "./article";
import "../styles/article-grid.css";

export default class ArticleGrid extends CmsComponent {
  constructor(props) {
    super(props);

    this.article_grid = new CmsField(
      "ArticleGrid",
      "",
      this.props.data.ArticleGrid || []
    );
  }

  render() {
    let i = 0;
    return (
      <div className="article-grid">
        {/* <List name="ArticleGrid" type="Article"> */}
        {this.article_grid.value.map((sc) => {
          return <Article data={sc.Article} key={i++} />;
        })}
        {/* </List> */}
      </div>
    );
  }
}
