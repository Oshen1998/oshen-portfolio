import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Typewriter from "typewriter-effect";
import { introData, meta } from "../../content_option";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <HelmetProvider>
      <section id="home" className="home">
        <Helmet>
          <meta charSet="utf-8" />
          <title>{meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <div className="intro_sec d-block d-lg-flex align-items-center ">
          <div className="h_bg-image order-1 order-lg-2 h-100 "></div>
          <div className="text order-2 order-lg-1 h-100 d-lg-flex justify-content-center">
            <div className="align-self-center ">
              <div className="intro mx-auto">
                <h2 className="mb-1x">{introData.title}</h2>
                <h1 className="fluidz-48 mb-1x">
                  <Typewriter
                    options={{
                      strings: [
                        introData.animated.first,
                        introData.animated.second,
                        introData.animated.third,
                      ],
                      autoStart: true,
                      loop: true,
                      deleteSpeed: 10,
                    }}
                  />
                </h1>
                <p className="mb-1x">{introData.description}</p>
                <div className="intro_btn-action pb-8 mt-5 ">
                  <Link to="/projects" className="text_2">
                    <div id="button_h" className="ac_btn btn">
                      Projects
                      <div className="ring one"></div>
                    </div>
                  </Link>
                  <a
                    href={require("../../assets/Resume/OshenResume.pdf")}
                    target="_blank"
                    rel="noreferrer"
                    download={"Oshen's Resume"}
                  >
                    <button id="button_h" className="ac_btn btn">
                      Resume
                      <div className="ring one"></div>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </HelmetProvider>
  );
};
