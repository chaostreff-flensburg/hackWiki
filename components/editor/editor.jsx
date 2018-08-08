import React from "react";
import { Editor } from "slate-react";
import { Value, resetKeyGenerator } from "slate";
import axios from "../../lib/axios";

import RenderNode from "./RenderNode";
import RenderMark from "./RenderMark";
import MarkHotkey from "./MarkHotkey";
import MarkdownShortcuts from "./MarkdownShortcuts";

import EmptyDocument from "./templates/EmptyDocument";

const plugins = [
  RenderNode(),
  RenderMark(),
  MarkHotkey({ key: "mod+b", type: "bold" }),
  MarkHotkey({ key: "mod+c", type: "code" }),
  MarkHotkey({ key: "mod+i", type: "italic" }),
  MarkHotkey({ key: "mod+s", type: "strikethrough" }),
  MarkHotkey({ key: "mod+u", type: "underline" }),
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

  onSave = () => {
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

  onMetaDataChange = metaDelta => {
    this.setState(prevState => {
      return { ...metaDelta };
    });
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
        <input
          type="text"
          placeholder="slug"
          value={this.state.slug}
          onChange={e => this.onMetaDataChange({ slug: e.target.value })}
        />
        <input
          type="text"
          placeholder="name"
          value={this.state.name}
          onChange={e => this.onMetaDataChange({ name: e.target.value })}
        />
        <button onClick={this.onSave}>save</button>
      </React.Fragment>
    );
  }
}
