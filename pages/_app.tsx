import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";
import Layout from "@/components/Layout/Layout";
import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const inter = Inter({
  weight: ["200", "400", "700", "900"],
  subsets: ["latin"],
});

interface Props {
  session: Session | null | undefined;
}

function MyApp({ Component, pageProps }: AppProps, { session }: Props) {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <UserProvider>
        <SessionProvider session={session}>
          <Layout>
            <main className={inter.className}>
              <Component {...pageProps} />
            </main>
          </Layout>
        </SessionProvider>
      </UserProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
