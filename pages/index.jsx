import React from "react";
import { withRouter } from "next/router";
import axios from "../lib/axios";

import WikiEditor from "../components/editor/editor";

class Page extends React.Component {
  static async getInitialProps({ req, asPath }) {
    let res = await axios.get("/api/docs", {
      params: {
        "router.asPath": asPath
      }
    });
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

export default withRouter(Page);
