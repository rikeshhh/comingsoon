
import AnimatedCursor from "react-animated-cursor";

import ComingSoon from "@/section/comingSoon";

export default function Home() {
  return (
    <>
    <ComingSoon />
    <AnimatedCursor
        innerSize={8}
        outerSize={35}
        innerScale={1}
        outerScale={2}
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
        ]}
        outerAlpha={0}
        innerStyle={{
          backgroundColor: '#7E76FF',
        }}
        outerStyle={{
          border: '3px solid #7E76FF',
        }}
      />
    </>
  );
}
