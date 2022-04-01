import Layout from "../components/layout";
import { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import "../styles/globals.css";
import "../styles/default.css";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider attribute="class">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
};

export default App;
