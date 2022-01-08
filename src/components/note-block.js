import { CmsComponent, CmsField, CmsFieldTypes } from "crownpeak-dxm-react-sdk";
import "../styles/note-block.css";

export default class NoteBlock extends CmsComponent {
  constructor(props) {
    super(props);

    this.cmsZones = ["droppable"];
    this.cmsDisableDragDrop = false;

    this.note = new CmsField(
      "Note",
      CmsFieldTypes.TEXT,
      props && props.data ? props.data.Note : null
    );
  }

  render() {
    return (
      <div className="note-block">
        <p className="note-block__body">{this.note}</p>
      </div>
    );
  }
}
