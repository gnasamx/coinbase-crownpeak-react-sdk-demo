import { CmsComponent, CmsField, CmsFieldTypes } from "crownpeak-dxm-react-sdk";
import "../styles/word-cloud-section.css";
import WordCloudButton from "./word-cloud-button";

export default class WordCloudSection extends CmsComponent {
  constructor(props) {
    super(props);
    this.heading = new CmsField(
      "Heading",
      CmsFieldTypes.TEXT,
      props && props.data ? props.data.Heading : null
    );
    this.word_cloud = new CmsField(
      "WordCloudSection",
      "",
      this.props.data.WordCloudSection || []
    );
  }

  render() {
    let i = 0;
    return (
      <div className="word-cloud-section">
        <h2 className="word-cloud-section__heading">{this.heading}</h2>
        <div className="word-cloud-section__wrapper">
          {/* <List name="WordCloudSection" type="WordCloudButton"> */}
          {this.word_cloud.value.map((sc) => {
            return <WordCloudButton data={sc.WordCloudButton} key={i++} />;
          })}
          {/* </List> */}
        </div>
      </div>
    );
  }
}
