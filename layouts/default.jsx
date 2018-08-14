import React from "react";

import DefaultTypography from "./default/typography";

export default class DeafultLayout extends React.Component {
  render() {
    return (
      <React.Fragment>
        <main>{this.props.children}</main>
        <style jsx global>{`
          main {
            padding: 12px;
          }
          article {
            max-width: 720px;

            margin-top: 12px;
            margin-left: auto;
            margin-right: auto;
          }
        `}</style>
        <DefaultTypography />
      </React.Fragment>
    );
  }
}
