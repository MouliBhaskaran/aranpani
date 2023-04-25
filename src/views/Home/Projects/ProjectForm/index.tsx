import { Modal } from "antd";
import React from "react";

const ProjectForm = (props:any) => {
  const {showModal, setShowModal, fetchProjectList} = props; 
  return (
    <Modal
      title={<div className="modal-title">New Project</div>}
      visible={showModal}
    ></Modal>
  );
};

export default ProjectForm;
