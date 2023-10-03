import { Container } from "react-bootstrap";
import DynamicTable from "./DynamicTable";
import { todosTypes } from "./Home";

export interface todostypes {
  todos: todosTypes[];
}

const Lists = (props: todostypes) => {
  console.log(props);
  const theadData = ["S.no", "Tasks", "IsCompleted", "Edit", "Delete"];
  const tbodyData = (): JSX.Element[] => {
    return props?.todos?.map((ele, index) => (
      <tr>
        <td>{index + 1}</td>
        <td>{ele?.value}</td>
        <td>
          <input type="checkbox" checked={ele?.isCompelete} readOnly />
        </td>
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
    </Container>
  );
};

export default Lists;
