function ParagraphNode(props) {
  return <p {...props.attributes}>{props.children}</p>;
}

function HeadingNode(props) {
  return <h1 {...props.attributes}>{props.children}</h1>;
}

function BlockquoteNode(props) {
  return <blockquote {...props.attributes}>{props.children}</blockquote>;
}

function CodeNode(props) {
  return (
    <pre {...props.attributes}>
      <code>{props.children}</code>
    </pre>
  );
}

export default function RenderNode() {
  return {
    renderNode(props) {
      const { children, mark, attributes } = props;
      switch (props.node.type) {
        case "paragraph":
          return <ParagraphNode {...props} />;
        case "heading":
          return <HeadingNode {...props} />;
        case "blockquote":
          return <BlockquoteNode {...props} />;
        case "code":
          return <CodeNode {...props} />;
      }
    }
  };
}
