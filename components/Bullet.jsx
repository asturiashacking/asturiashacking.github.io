import React from "react";
import { withTheme } from "./withTheme";

function Bullet({ children, theme }) {
  return (
    <>
      <li>{children}</li>

      <style jsx>{`
        li {
          line-height: 1.65;
          overflow-wrap: break-word;

          font-family: ${theme.typography.families.monospace};
        }

        li:not(:first-of-type) {
          margin-top: 0.5em;
        }

        li::before {
          content: "*";
          margin-right: 0.5em;
        }
      `}</style>
    </>
  );
}

export default withTheme(Bullet);
