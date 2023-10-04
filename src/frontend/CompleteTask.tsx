import { Container } from "react-bootstrap";
import DynamicTable from "./DynamicTable";
import { todostypes } from "./Lists";

const CompleteTask = (props: todostypes) => {
  const theadData = ["S.no", "Tasks", "Delete"];
  const tbodyData = (): JSX.Element[] => {
    const data = props?.todos?.filter((ele) => ele?.isCompelete);
    return data?.map((ele, index) => (
      <tr key={index}>
        <td>{index + 1}</td>
        <td>{ele?.value}</td>
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
  return (
    <Container>
      <DynamicTable thead={theadData} tbody={tbodyData} />
    </Container>
  );
};

export default CompleteTask;
