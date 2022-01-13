import { CmsComponent, CmsField, CmsFieldTypes } from "crownpeak-dxm-react-sdk";
import "../styles/lite-video-block.css";

export default class LiteVideoBlock extends CmsComponent {
  constructor(props) {
    super(props);
    this.state = {
      isPlaying: false,
    };
    this.poster = new CmsField(
      "Poster",
      CmsFieldTypes.IMAGE,
      props && props.data ? props.data.Poster : null
    );
    this.video_src = new CmsField(
      "VideoSrc",
      CmsFieldTypes.HREF,
      props && props.data ? props.data.VideoSrc : null
    );
    this.title = new CmsField(
      "Title",
      CmsFieldTypes.Text,
      props && props.data ? props.data.Title : null
    );
  }

  handleVideoPlay = () => {
    this.setState({ isPlaying: true });
  };

  render() {
    return (
      <div className="lite-video-block">
        <div className="lite-video-block__content">
          <div
            className="lite-video-block__facade"
            style={{ backgroundImage: this.poster }}
          >
            {this.state.isPlaying ? (
              <iframe
                src={this.video_src}
                frameBorder="0"
                allowFullScreen
                allow="autoplay; encrypted-media"
                loading="auto"
                title={this.title}
              />
            ) : (
              <button
                className="lite-vide-block__play-button"
                aria-label="Play video"
                onClick={this.handleVideoPlay}
              ></button>
            )}
          </div>
        </div>
      </div>
    );
  }
}
