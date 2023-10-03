import { Container } from "react-bootstrap";
import DynamicTable from "./DynamicTable";
import { todosTypes } from "./Home";
import ModalEdit from "./ModalEdit";

export interface todostypes {
  todos: todosTypes[];
  handleDelete: (id: number | null) => void;
}

const Lists = (props: todostypes) => {
  console.log(props);
  const theadData = ["S.no", "Tasks", "Edit", "Delete"];

  const tbodyData = (): JSX.Element[] => {
    const data = props?.todos?.filter((ele) => !ele?.isCompelete);
    return data?.map((ele, index) => (
      <tr key={index}>
        <td>{index + 1}</td>
        <td>{ele?.value}</td>

        <td>
          <button className="btn btn-sm btn-success">Edit</button>
        </td>
        <td>
          <button className="btn btn-sm btn-danger">Delete</button>
        </td>
      </tr>
    ));
  };

  return (
    <Container className="mt-3">
      <DynamicTable thead={theadData} tbody={tbodyData} />
      <ModalEdit />
    </Container>
  );
};

export default Lists;
