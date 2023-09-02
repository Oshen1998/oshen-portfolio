import React, { useState } from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataPortfolio, meta } from "../../content_option";
import { CommonModal } from "../../components/modals";

export const Portfolio = () => {
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState({});
  const callToDialog = (data) => {
    setShowModal(!showModal);
    setData(data);
  };

  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Projects | {meta.title} </title>{" "}
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> Projects </h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <div className="mb-5 po_items_ho">
          {dataPortfolio.map((data, i) => {
            return (
              <div key={i} className="po_item">
                <img src={data.img} alt="" />
                <div className="content">
                  <p>{data.description}</p>
                  <button
                    onClick={() => callToDialog(data)}
                    className="view_projec btn btn-success"
                    href={data.link}
                  >
                    More Info
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        <div>
          <CommonModal
            show={showModal}
            onHide={() => callToDialog()}
            projectData={data}
          />
        </div>
      </Container>
    </HelmetProvider>
  );
};
