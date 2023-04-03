import "@/styles/globals.css";
import "../styles/embla.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { disableReactDevTools } from "@fvilers/disable-react-devtools";

if (process.env.NODE_ENV === "production") disableReactDevTools;

const queryClient = new QueryClient();

import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}
