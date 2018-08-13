import React from "react";
import { Editor } from "slate-react";
import { Value, resetKeyGenerator } from "slate";
import axios from "../../lib/axios";

import RenderNode from "./RenderNode";
import RenderMark from "./RenderMark";
import MarkHotkey from "./MarkHotkey";
import MarkdownShortcuts from "./MarkdownShortcuts";
import PreventNodeExtension from "./PreventNodeExtension";

import EmptyDocument from "./templates/EmptyDocument";

const plugins = [
  RenderNode(),
  RenderMark(),
  MarkHotkey({ key: "mod+b", type: "bold" }),
  MarkHotkey({ key: "mod+e", type: "code" }),
  MarkHotkey({ key: "mod+i", type: "italic" }),
  MarkHotkey({ key: "shift+mod+s", type: "strikethrough" }),
  MarkHotkey({ key: "mod+u", type: "underline" }),
  PreventNodeExtension(),
  ...MarkdownShortcuts
];

export default class WikiEditor extends React.Component {
  constructor(props) {
    super(props);
    // Reset slates Key Generator on initial render and rehydration to avoid jumping characters on input:
    // https://github.com/ianstormtaylor/slate/issues/1509#issuecomment-362044331
    resetKeyGenerator();
    let pageData = Value.fromJSON(this.props.doc.page || EmptyDocument);
    this.state = {
      ...this.props.doc,
      page: pageData
    };
  }

  componentDidUpdate = prevProps => {
    // update editor on changing props
    if (this.props != prevProps) {
      let pageData = Value.fromJSON(this.props.doc.page || EmptyDocument);
      this.setState(prevState => {
        return { ...this.props.doc, page: pageData };
      });
    }
  };

  onSave = () => {
    // @ToDo: move saving into context
    if (this.state._id) {
      axios.put(`/api/docs/${this.state._id}`, this.state).then(res => {
        // @ToDo: replace editor state
      });
    } else {
      axios.post("/api/docs", this.state).then(res => {
        // @ToDo: replace editor state
        let _id = res.data._id;
        this.setState(prevState => {
          return { _id: _id };
        });
      });
    }
  };

  onEditorChange = ({ value }) => {
    this.setState({ page: value });
  };

  render() {
    return (
      <React.Fragment>
        <Editor
          placeholder="Write something…"
          plugins={plugins}
          value={this.state.page}
          onChange={this.onEditorChange}
        />
        <button onClick={this.onSave}>save</button>
      </React.Fragment>
    );
  }
}
