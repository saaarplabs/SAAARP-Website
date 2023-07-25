import "@/styles/globals.css";
import { useRouter } from "next/router";
import { useState } from "react";
import { useEffect } from "react";
import AnimatedCursor from "react-animated-cursor";

export default function App({ Component, pageProps }) {
  const [isBrowser, setIsBrowser] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsBrowser(true);
  }, []);
  return (
    <>
      {isBrowser && (
        <div className="App">
          <AnimatedCursor 
          innerSize={12}
          outerSize={35}
          innerScale={1}
          outerScale={2}
          // outerAlpha={0}
          hasBlendMode={true}
          clickables={[
            'a',
            'input[type="text"]',
            'input[type="email"]',
            'input[type="number"]',
            'input[type="submit"]',
            'input[type="image"]',
            'label[for]',
            'select',
            'textarea',
            'button',
            '.link'
          ]}/>
        </div>
      )}
      <Component {...pageProps} />
    </>
  );
}
