export default function() {
  return (
    <style jsx global>{`
      /* CSS Micro Reset
      https://github.com/vladocar/CSS-Micro-Reset
      licensed under MIT License by Vladimir Carrer */

      body {
        margin: 0;
      }

      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        font-weight: bold;
      }

      table {
        border-collapse: collapse;
        border-spacing: 0;
      }

      th,
      td {
        text-align: left;
        vertical-align: top;
      }

      img,
      iframe {
        border: 0;
      }

      /*=== CUSTOM RESETS ===*/

      *:focus {
        outline: none;
      }
    `}</style>
  );
}
