import React from "react";
import { withTheme } from "./withTheme";

function Link({ href, children, theme }) {
  return (
    <>
      <a href={href}>{children}</a>

      <style jsx>{`
        a {
          color: ${theme.palette.accent};
        }
      `}</style>
    </>
  );
}

export default withTheme(Link);
