import React from "react";

import { withTheme } from "./withTheme";

function Text({ children, theme }) {
  return (
    <>
      <p>{children}</p>

      <style jsx>{`
        p {
          line-height: 1.65;
          margin: 0;

          font-family: ${theme.typography.families.monospace};
        }

        p:not(:last-of-type) {
          margin-bottom: 1em;
        }
      `}</style>
    </>
  );
}

export default withTheme(Text);
