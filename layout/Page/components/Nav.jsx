import { useRouter } from "next/router";
import { withTheme } from "../../../components/withTheme";

function Nav({ theme }) {
  const router = useRouter();

  return (
    <>
      <nav>
        <ul>
          {/**
           * It would probably be better if we allow each page to inject
           * its own navigation menu rather than trying to be so smart
           * from here
           */}

          {router.asPath === "/" ? (
            <li>
              <a href="/dojos">
                <span>~/dojos</span>
              </a>
            </li>
          ) : null}

          {router.asPath === "/dojos" ? (
            <li>
              <a href="/">
                <span>~/</span>
              </a>
            </li>
          ) : null}
        </ul>
      </nav>

      <style jsx>
        {`
          nav > ul {
            list-style-type: none;
            margin: 2em 0 0;
            padding: 0;
          }

          nav > ul > li:not(:last-of-type) {
            margin-bottom: 1em;
          }

          nav > ul > li {
            font-family: ${theme.typography.families.monospace};
          }

          nav > ul > li > span {
            opacity: 0.3;
            margin-right: 0.5em;
          }

          nav > ul > li > a {
            color: currentColor;

            text-decoration: none;
          }

          nav > ul > li > a::before {
            content: "cd";

            margin-right: 0.5em;

            opacity: 0.3;
            text-decoration: none;
          }

          nav > ul > li > a > span {
            text-decoration: underline;
          }
        `}
      </style>
    </>
  );
}

export default withTheme(Nav);
