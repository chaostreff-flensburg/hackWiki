<template>
  <section>
    <div id="content">
      <h1>Lorem Ipsum</h1>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet rem aspernatur provident nulla autem ea perferendis quos iste veritatis quaerat, minus expedita animi eos explicabo dolore sequi voluptate totam quam!</p>
    </div>
    <div id="editor"></div>
  </section>
</template>

<script>
import { EditorView } from 'prosemirror-view';
import { EditorState } from 'prosemirror-state';
import { Schema, DOMParser } from 'prosemirror-model';
import { addListNodes } from 'prosemirror-schema-list';
import { keymap } from 'prosemirror-keymap';
import { baseKeymap } from 'prosemirror-commands';
import { history } from 'prosemirror-history';

import { schema } from '~/components/editor/schema';
import buildKeymap from '~/components/editor/keymap';
import { buildInputRules } from '~/components/editor/inputrules';

const mySchema = new Schema({
  nodes: addListNodes(schema.spec.nodes, 'paragraph block*', 'block'),
  marks: schema.spec.marks,
});

function initEditor() {
  const content = document.getElementById('content');
  const editor = document.getElementById('editor');
  const state = EditorState.create({
    mySchema,
    doc: DOMParser.fromSchema(mySchema).parse(content),
    plugins: [
      buildInputRules(mySchema),
      keymap(buildKeymap(mySchema)),
      keymap(baseKeymap),
      history(),
    ],
  })
  const view = new EditorView(editor, { state });
  content.style.display = 'none';
}

export default {
  mounted() {
    initEditor();
  },
};
</script>

<style scoped>
section {
  max-width: 720px;
  margin-left: auto;
  margin-right: auto;
}
</style>
