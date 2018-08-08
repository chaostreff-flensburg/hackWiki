import React from "react";
import axios from "../lib/axios";

import WikiEditor from "../components/editor/editor";

export default class Page extends React.Component {
  static async getInitialProps({ req }) {
    // @ToDo: fetch page based on slug
    let res = await axios.get("/api/docs?$limit=1");
    return { ...res.data.data[0] };
  }

  render() {
    return (
      <React.Fragment>
        <article>
          <WikiEditor doc={this.props} />
        </article>
        <style jsx>{`
          article {
            max-width: 720px;

            margin-top: 24px;
            margin-left: auto;
            margin-right: auto;
          }
        `}</style>
      </React.Fragment>
    );
  }
}
