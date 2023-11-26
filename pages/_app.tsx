import type { AppProps } from "next/app";
import type { LayoutProps } from "@vercel/examples-ui/layout";

import { Text, getLayout } from "@vercel/examples-ui";
import "@vercel/examples-ui/globals.css";

function App({ Component, pageProps }: AppProps) {
  const Layout = getLayout<LayoutProps>(Component);

  return (
    <div className="bg-white px-24">
      <Text
        style={{
          fontSize: "40px",
          fontWeight: "bold",
          paddingTop: "40px",
        }}
      >
        Off Campus Jobs
      </Text>
      <Component {...pageProps} />
    </div>
  );
}

export default App;
