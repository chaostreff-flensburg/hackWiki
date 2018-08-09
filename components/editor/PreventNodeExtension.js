// On return, if at the end of a node type that should not be extended, create a new paragraph below it.
// https://github.com/ianstormtaylor/slate/blob/master/examples/markdown-shortcuts/index.js#L194

export default function PreventNodeExtension(options) {
  return {
    onKeyDown(event, change, editor) {
      if (event.key === "Enter") {
        const { value } = change;
        const { selection } = editor.value;
        const { start, end, isExpanded } = selection;
        if (isExpanded) return;

        const { startBlock } = editor.value;
        if (startBlock.type != "heading" && startBlock.type != "blockquote") {
          return;
        }

        event.preventDefault();
        change.splitBlock().setBlocks("paragraph");
        return true;
      }
    }
  };
}
