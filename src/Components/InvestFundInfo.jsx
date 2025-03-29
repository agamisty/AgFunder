import React from "react";
import "./../Styles/InvestFundInfoStyles.css"

const InvestFundInfo = () => {
  return (
    <div className="fund-container">
      <div className="fund-text">
        <p>
          We back visionary founders worldwide, building breakthrough
          technologies in robotics, AI, biotech, materials science, and
          nanotechnology – the fundamental drivers of the future.
        </p>
        <p>
          AgFunder is a global venture capital firm rooted in agrifood, AI,
          biology, and climate, with headquarters in Silicon Valley and offices
          in London, and Singapore.
        </p>
        <p>
          Since our inception, we have historically outperformed top-quartile VC
          benchmarks, frequently co-investing with the leading firms.
        </p>
        <p>
          While we are a returns-first firm, sustainability and impact are core
          to our thesis. Every company in our portfolio advances at least one
          of the United Nations’ 17 Sustainable Development Goals, ensuring
          that transformative innovation also moves the world forward.
        </p>
        <p>
          Fund IV: our last vintage was a $100M+ oversubscribed fund, primarily
          backing Seed and Series A startups shaping the future of agrifood,
          AI, biology, and climate.
        </p>
        <p>
          Fund V: Our next significantly larger vintage, will build on our
          proven thesis: investing in frontier technologies that redefine
          industries, enhance human health, and create lasting global impact.
        </p>
      </div>
      <div className="fund-footer">
        <p>
          For more information on Fund V, join the waitlist below or reach out
          at <br /> <span className="email">funds@agfunder.com</span>.
        </p>
      </div>
    </div>
  );
};

export default InvestFundInfo;
