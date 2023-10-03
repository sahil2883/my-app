import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function ModalEdit() {
  return (
    <Modal show={true}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Data:</Modal.Title>
      </Modal.Header>
      <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary">Close</Button>
        <Button variant="primary">Save Changes</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalEdit;
