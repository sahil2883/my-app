import { Container } from "react-bootstrap";
import DynamicTable from "./DynamicTable";
import { todosTypes } from "./Home";
import ModalEdit from "./ModalEdit";
import { useState } from "react";

export interface todostypes {
  todos: todosTypes[];
  handleDelete: (id: number) => void;
  onHandleChange?: (data: todosTypes) => void;
}

export interface modalType {
  show: boolean;
  data: todosTypes | null;
}

const Lists = (props: todostypes) => {
  const [modalData, setModalData] = useState<modalType>({
    show: false,
    data: null,
  });

  const theadData = ["S.no", "Tasks", "Edit", "Delete"];

  const tbodyData = (): JSX.Element[] => {
    const data = props?.todos?.filter((ele) => !ele?.isCompelete);
    return data?.map((ele, index) => (
      <tr key={index}>
        <td>{index + 1}</td>
        <td>{ele?.value}</td>

        <td>
          <button
            className="btn btn-sm btn-success"
            onClick={() => setModalData({ show: true, data: ele })}
          >
            Edit
          </button>
        </td>
        <td>
          <button
            className="btn btn-sm btn-danger"
            onClick={() => props?.handleDelete(ele?.id!)}
          >
            Delete
          </button>
        </td>
      </tr>
    ));
  };

  const handleClose = () => {
    setModalData({
      show: false,
      data: null,
    });
  };

  const handleMainChange = () => {
    if (props?.onHandleChange) {
      props?.onHandleChange(modalData?.data!);
      setModalData({ show: false, data: null });
    }
  };

  return (
    <Container className="mt-3">
      <DynamicTable thead={theadData} tbody={tbodyData} />
      <ModalEdit
        modalData={modalData}
        setModalData={setModalData}
        handleClose={handleClose}
        onHandleChange={handleMainChange}
      />
    </Container>
  );
};

export default Lists;
