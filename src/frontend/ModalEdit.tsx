import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { modalType } from "./Lists";
import { todosTypes } from "./Home";

interface modalTypesInner {
  modalData: modalType;
  handleClose: () => void;
  setModalData: React.Dispatch<React.SetStateAction<modalType>>;
  onHandleChange: () => void;
}

function ModalEdit(props: modalTypesInner) {
  const handleChangeInner = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    props?.setModalData({
      ...props?.modalData,
      data: {
        ...props?.modalData?.data,
        [name]: type === "checkbox" ? checked : value,
      },
    });
  };

  return (
    <Modal show={props?.modalData?.show} onHide={props?.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Data:</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="mb-3">
          <label>Todo:</label>
          <input
            className="form-control"
            type="text"
            value={props?.modalData?.data?.value}
            onChange={handleChangeInner}
            name="value"
          />
        </div>

        <div className="mb-3">
          <input
            type="checkbox"
            name="isCompelete"
            checked={props?.modalData?.data?.isCompelete}
            onChange={handleChangeInner}
          />
          <label>isCompelete</label>
        </div>

        <div>
          <button
            className="btn btn-primary"
            onClick={() => {
              if (props?.onHandleChange) {
                props?.onHandleChange()
              }
            }}
          >
            Update
          </button>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default ModalEdit;
