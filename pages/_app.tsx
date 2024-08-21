import { SessionProvider } from "next-auth/react";
import "./styles.css";

import type { AppProps } from "next/app";
import type { Session } from "next-auth";
import MiniKitProvider from "../components/minikit-provider";
import dynamic from "next/dynamic";

// Use of the <SessionProvider> is mandatory to allow components that call
// `useSession()` anywhere in your application to access the `session` object.
export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps<{ session: Session }>) {
  const ErudaProvider = dynamic(
    () => import("../components/eruda").then((c) => c.ErudaProvider),
    {
      ssr: false,
    }
  );
  return (
    <SessionProvider session={session}>
      <ErudaProvider>
        <MiniKitProvider>
          <Component {...pageProps} />
        </MiniKitProvider>
      </ErudaProvider>
    </SessionProvider>
  );
}
