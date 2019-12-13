import React, {useState} from "react";
import classNames from "classnames";

import "./OurTeam.scss";
import img from "../../assets/AboutUs-img.png";

const OurTeam = () => {
  // decides whether to hide extra text in the mobile or not
  let [isHidden, setHidden] = useState(true);

  // simple helper function to add dots to the end of viewable text in mobile
  const addDots = (replacement = null) => isHidden ? "..." : replacement;
  // get button-related markup and logic
  const getButton = () => (<button onClick={() => setHidden(!isHidden)}>{isHidden ? "Expand" : "Collapse"}</button>);

  return (
    <section className="ourTeam-container">
      <div className="ourTeam-bluebg"></div>
      {/* <div className="ourTeam-bluebg"></div> */}
      <h2 className="ourTeam-title">Our Team</h2>

      <div className="ourTeam-content">
        <div className="ourTeam-img-section">
          <img className="ourTeam-img" src={img} alt="" />
        </div>
        <div className="ourTeam-content-section">
          <p className="ourTeam-name">
            Matt Hoffar, <span className="ourTeam-location">Vancouver</span>
          </p>
          <p className="ourTeam-paragraph">
            Mr. Hoffar has over 20 years experience in sports and the capital
            markets. He worked 6 years in NBA for the team Vancouve Grizzlies
            {addDots(",")}
            <span className={classNames({'mobile-hidden': isHidden})}>
              10 years as the founder and coach of a youth basketball program and
              15 years in trading, operations and marketing both at a brokerage
              firm as an equities trader focused on micro and small cap stocks,
              and as part of the founding team of an asset management firm focused
              on algorithmic trading technology in the futures, equities and forex
              markets.
            </span>
          </p>
          <p className="ourTeam-paragraph">
            <span className={classNames({'mobile-hidden': isHidden})}>
              Matt oversaw the trade desk and was involved with operations,
              compliance and marketing. Currently as Managing Partner of a Venture
              Builder, he takes on varying leadership and advisory roles to
              technology start ups in areas such as business development,
              strategy, capital structure and regulatory compliance.
            </span>
          </p>
          {getButton()}
        </div>
      </div>
      <div className="ourTeam-content">
        <div className="ourTeam-img-section">
          <img className="ourTeam-img" src={img} alt="" />
        </div>

        <div className="ourTeam-content-section">
          <p className="ourTeam-name">
            Spencer Smyl, <span className="ourTeam-location">Vancouver</span>
          </p>
          <p className="ourTeam-paragraph">
            Mr. Smyl has over 8 years of capital markets and entrepreneur
            experience with his focus on building and financing start-ups
            {addDots()}
            <span className={classNames({'mobile-hidden': isHidden})}>
              in the technology, cannabis, video game, esports, entertainment, heath
              care, and health & wellness industries of which he has helped raise
              over $30 million CAD. In that time, he has gained over 7 years of
              corporate director and management experience with both private and
              public companies. He is also the founder and CEO of Final Stage
              Entertainment Inc., a content production company with an academy
              nominated management team with over 100+ years of experience in
              media and entertainment.
            </span>
          </p>
          <p className="ourTeam-paragraph">
            <span className={classNames({'mobile-hidden': isHidden})}>
              The company focuses on original content creation for the Millennial
              and Generation Z demographics. Prior to the capital markets he spent
              2 years working at the Senate of Canada under the Honorable Senator
              Larry Campbell.
            </span>
          </p>
          <p className="ourTeam-paragraph">
            <span className={classNames({'mobile-hidden': isHidden})}>
              Spencer is currently working to combine his business networks in the
              sports, esports, politics, and finance to support the strategic
              vision and mandate of Brickhouse Ventures.
            </span>
          </p>
          {getButton()}
        </div>
      </div>
      <div className="ourTeam-content">
        <div className="ourTeam-img-section">
          <img className="ourTeam-img" src={img} alt="" />
        </div>

        <div className="ourTeam-content-section">
          <p className="ourTeam-name">
            Evan Kubes, <span className="ourTeam-location">Toronto</span>
          </p>

          <p className="ourTeam-paragraph">
            Mr. Kubes is the President and Co-founder of MKM Group – Canada’s
            first, and one of the world’s most influential, Law Firms and
            Management Agencies dedicated exclusively to esports and content
            creators
            {addDots('.')}
          </p>
          <p className="ourTeam-paragraph">
            <span className={classNames({'mobile-hidden': isHidden})}>
              In April 2019, MKM merged with Rumble Gaming Inc. to expand its
              offering to include a fully integrated media platform with a robust
              distribution network across the realms of traditional and digital
              media. Evan now represents 200+ premier esports organizations,
              athletes, content creators, game developers, and ancillary entities;
              assisted multi-national brands authentically implement marketing
              campaigns; been consulted by major institutional banks on their
              prospective investments; and has developed a full-service law firm
              in a niche area that is drastically under severed by traditional
              legal mechanisms.
            </span>
          </p>
          <p className="ourTeam-paragraph">
            <span className={classNames({'mobile-hidden': isHidden})}>
              Evan has also committed to contributing to the community by
              providing pro-bono legal services to a young population of
              competitive gamers who are otherwise unable to afford legal
              assistance, and by working with charitable organizations such as
              Autism Speaks, on initiatives directed at using gaming as a platform
              to advance social good. Evan holds both a Canadian and American law
              degree from University of Windsor School of Law and the University
              of Detroit School of Law, respectively.
            </span>
          </p>
          {getButton()}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
