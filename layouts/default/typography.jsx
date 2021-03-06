export default function() {
  return (
    <style jsx global>{`
      html {
        font-size: 100%;
      }

      body {
        word-wrap: break-word;
        word-break: break-word;

        color: rgba(0, 0, 0, 0.8);

        font-family: "Lato", sans-serif;
      }

      /*=== BASIC TYPO ===*/

      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        margin: 4px 0;

        font-family: "Lato", sans-serif;
        font-weight: 900;
      }

      h1 {
        font-size: 2.5rem;
      }
      h2 {
        margin-bottom: 0.5rem;

        font-size: 2rem;
      }
      h3 {
        font-size: 1.375rem;
      }
      h4 {
        font-size: 1.125rem;
      }
      h5 {
        font-size: 1rem;
      }
      h6 {
        font-size: 0.875rem;
      }

      p {
        margin: 4px 0;

        font-family: "Noto Serif", serif;
        font-size: 18px;
        line-height: 1.7;
      }

      em,
      i {
        font-style: italic;
      }

      strong,
      b {
        font-weight: 900;
      }

      a {
        text-decoration: underline;

        color: inherit;
      }

      /*=== LISTS ===*/

      ul,
      ol {
        margin-left: 18px;
      }

      /*=== CODE BLOCKS ===*/

      pre {
        overflow: auto;

        margin: 0 2px;
        padding: 12px 16px;

        white-space: pre-wrap;

        background-color: rgba(0, 0, 0, 0.05);
      }

      code {
        font-family: monospace;
      }

      pre > code {
        font-size: 1.2em;
      }

      p > code {
        padding: 2px 3px;

        background-color: rgba(0, 0, 0, 0.05);
      }

      /*=== BLOCKQUOTES ===*/

      blockquote > p {
        padding-left: 12px;

        color: rgba(0, 0, 0, 0.6);

        font-size: 1.5em;
        font-style: italic;

        border-left: solid rgba(0, 0, 0, 0.3) 4px;
      }

      /*=== HELPERS ===*/

      .left {
        float: left;

        text-align: left;
      }

      .center {
        text-align: center;
      }

      .right {
        float: right;

        text-align: right;
      }

      .uppercase {
        text-transform: uppercase;
      }

      .m0 {
        margin: 0;
      }
    `}</style>
  );
}
