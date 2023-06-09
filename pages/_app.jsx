// pages/_app.js [Server Side]

import "@/styles/globals.css";
import "@/styles/prism-vsc-dark-plus.css";

export default function MyApp({ Component, pageProps }) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(<Component {...pageProps} />);
}
