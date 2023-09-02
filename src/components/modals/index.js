import Modal from "react-bootstrap/Modal";

export const CommonModal = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <a target="blank" href={props?.projectData?.link}>
            {props?.projectData?.description}
          </a>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="container ">
          <div className="row">
            <div className="col-md-6 col-sm-12 d-flex justify-content-center align-items-center">
              <img
                style={{ height: "30vh", width: "100%" }}
                src={props?.projectData?.popup_img_1}
                alt="image_1"
              />
            </div>
            <div className="col-md-6 col-sm-12 d-flex justify-content-center align-items-center">
              <img
                style={{ height: "30vh", width: "100%" }}
                src={props?.projectData?.popup_img_2}
                alt="image_1"
              />
            </div>
          </div>
        </div>
        <div className="mt-2 p-3">
          {props.projectData?.details?.map((item) => {
            return <li key={item.id}>{item}</li>;
          })}
        </div>
      </Modal.Body>
    </Modal>
  );
};
