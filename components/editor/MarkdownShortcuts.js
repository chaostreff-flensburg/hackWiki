import AutoReplace from "slate-auto-replace";

export default [
  AutoReplace({
    trigger: "space",
    before: /^(#)$/,
    transform: (transform, e, matches) => {
      return transform.setBlocks({ type: "heading" });
    }
  }),
  AutoReplace({
    trigger: "space",
    before: /^(>)$/,
    transform: (transform, e, matches) => {
      return transform.setBlocks({ type: "blockquote" });
    }
  }),
  AutoReplace({
    trigger: "space",
    before: /^(```)$/,
    transform: (transform, e, matches) => {
      return transform.setBlocks({ type: "code" });
    }
  })
];
