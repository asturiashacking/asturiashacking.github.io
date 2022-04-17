import React from "react";

export default function Bullets({ children }) {
  return (
    <>
      <ul>{children}</ul>

      <style jsx>{`
        ul {
          margin: 1em 0;
          padding: 0;

          list-style-type: none;
        }

        ul ul {
          margin: 0.5em 0 0.5em 1.5em;
        }
      `}</style>
    </>
  );
}
