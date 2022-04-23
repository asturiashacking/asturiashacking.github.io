import React from "react";

import { MDXProvider } from "@mdx-js/react";
import Head from "next/head";

import Bullet from "../../components/Bullet";
import Bullets from "../../components/Bullets";
import Link from "../../components/Link";
import Heading from "../../components/Heading";
import Nav from "./components/Nav";
import Text from "../../components/Text";

import { withTheme } from "../../components/withTheme";

function Page({ children, theme }) {
  return (
    <>
      <Head>
        <title>~ | AsturiasHacking</title>

        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />

        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />

        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500&family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap"
          rel="stylesheet"
        />

        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/modern-normalize/0.5.0/modern-normalize.min.css"
        />

        <link rel="icon" type="image/png" href="/favicon.png?v=1" />
      </Head>

      <article>
        <header>
          <img alt="AsturiasHacking" src="/logo.svg" />

          <Nav />
        </header>

        <MDXProvider
          components={{
            a: Link,
            h1: (props) => <Heading size="extraLarge" element="h1" {...props} />,
            h2: (props) => <Heading size="large" element="h2" {...props} />,
            p: Text,
            ul: Bullets,
            li: Bullet,
          }}
        >
          <section>{children}</section>
        </MDXProvider>
      </article>

      <style jsx>{`
        :global(body) {
          margin: 0;
        }

        header {
          align-items: center;
          display: flex;
          flex-direction: column;
          justify-content: center;
          margin: 0 auto;
          max-width: calc(900px - 2em);
          padding: 3em 1em 1em;
        }

        header > img {
          max-width: 200px;
        }

        article {
          min-height: 100vh;

          background-color: ${theme.palette.background};
        }

        section {
          padding: 2em 1em;
          margin: 0 auto;
          max-width: calc(900px - 2em);
        }
      `}</style>
    </>
  );
}

export default withTheme(Page);
