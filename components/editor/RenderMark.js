export default function RenderMark() {
  return {
    renderMark(props) {
      const { children, mark, attributes } = props;
      switch (mark.type) {
        case "bold":
          return <strong {...attributes}>{children}</strong>;
        case "code":
          return <code {...attributes}>{children}</code>;
        case "italic":
          return <em {...attributes}>{children}</em>;
        case "strikethrough":
          return <del {...attributes}>{children}</del>;
        case "underline":
          return <u {...attributes}>{children}</u>;
      }
    }
  };
}
