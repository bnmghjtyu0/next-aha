import { BaseLayoutProvider } from "@/lib/contexts/BaseLayoutContext";
import ReactQueryProvider from "@/lib/contexts/ReactQueryProvider";
import BaseLayout from "@/lib/layout/BaseLayout";
import { lightTheme } from "@/lib/material-ui/theme/light";
import "@/styles/main.scss";
import { ThemeProvider } from "@mui/material";

import type { AppProps } from "next/app";
import App from "next/app";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ReactQueryProvider>
      <BaseLayoutProvider>
        <ThemeProvider theme={lightTheme}>
          <BaseLayout>
            <Component {...pageProps} />
          </BaseLayout>
        </ThemeProvider>
      </BaseLayoutProvider>
    </ReactQueryProvider>
  );
};

MyApp.getInitialProps = async (context: any) => {
  const initialProps: any =
    App.getInitialProps && (await App.getInitialProps(context));

  return {
    pageProps: { appData: "", ...initialProps.pageProps },
  };
};

export default MyApp;
