import React from "react";

import DefaultLayout from "./default";

export default class Layout extends React.Component {
  layouts = {
    default: DefaultLayout
};

  render() {
    const DynamicLayout = this.layouts[this.props.layout || 'default'];
    return (
      <React.Fragment>
        <DynamicLayout>{this.props.children}</DynamicLayout>
      </React.Fragment>
    );
  }
}
