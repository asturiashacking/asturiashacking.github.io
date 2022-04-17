import React from "react";

import { withTheme } from "./withTheme";

function Heading({
  children,
  theme,
  size = "extraLarge",
  element: Element = "h1"
}) {
  return (
    <>
      <Element className={size}>{children}</Element>

      <style jsx>{`
        .extraLarge,
        .large {
          display: flex;
          flex-direction: column;
          letter-spacing: 1px;

          font-family: ${theme.typography.families.sansSerif};
          font-weight: 500;
          text-transform: uppercase;
        }

        .extraLarge::after,
        .large::after {
          line-height: 0.5em;
        }

        .extraLarge {
          font-size: 2em;

          line-height: 1.3em;
          margin: 1em 0;
        }

        .extraLarge::after {
          content: "---";
        }

        .large {
          font-size: 1.5em;

          font-weight: normal;
          line-height: 1.3em;
          margin: 1em 0 0.5em;
        }

        .large::after {
          content: "-";
        }
      `}</style>
    </>
  );
}

export default withTheme(Heading);
