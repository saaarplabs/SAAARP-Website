import useNeonCursor from "@/hooks/useNeonCursor";
import "@/styles/globals.css";


export default function App({ Component, pageProps }) {
  useNeonCursor();
  return <Component {...pageProps} />;
}
