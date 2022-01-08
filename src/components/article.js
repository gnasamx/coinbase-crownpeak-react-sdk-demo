import { CmsComponent, CmsField, CmsFieldTypes } from "crownpeak-dxm-react-sdk";
import "../styles/article.css";

export default class Article extends CmsComponent {
  constructor(props) {
    super(props);
    this.cmsDisableDragDrop = true;

    this.article_image = new CmsField(
      "Article_Image",
      CmsFieldTypes.IMAGE,
      props && props.data ? props.data.Article_Image : null
    );
    this.article_alt = new CmsField(
      "Article_Alt",
      CmsFieldTypes.TEXT,
      props && props.data ? props.data.Article_Alt : null
    );
    this.caption = new CmsField(
      "Caption",
      CmsFieldTypes.TEXT,
      props && props.data ? props.data.Caption : null
    );
    this.title = new CmsField(
      "Title",
      CmsFieldTypes.TEXT,
      props && props.data ? props.data.Title : null
    );
    this.link = new CmsField(
      "Link",
      CmsFieldTypes.HREF,
      props && props.data ? props.data.Link : null
    );
  }

  render() {
    return (
      <a href={this.link} className="article">
        <article className="article__wrapper">
          <div className="article__image-container">
            <img
              className="article__image"
              src={this.article_image}
              alt={this.article_alt}
            />
          </div>
          <div className="article__body">
            <span className="article__caption">{this.caption}</span>
            <h2 className="article__title">{this.title}</h2>
          </div>
        </article>
      </a>
    );
  }
}
