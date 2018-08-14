import React from "react";
import { withRouter } from "next/router";
import axios from "../lib/axios";

import Layout from "../layouts/layout";
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
        <Layout layout={this.props.layout}>
          <article>
            <WikiEditor doc={this.props} />
          </article>
        </Layout>
      </React.Fragment>
    );
  }
}

export default withRouter(Page);
