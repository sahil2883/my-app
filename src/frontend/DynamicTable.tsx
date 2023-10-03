import { Table } from "react-bootstrap";

interface tabletype {
  thead: (string | JSX.Element)[];
  tbody: () => JSX.Element[];
}

const DynamicTable = (props: tabletype) => {
  return (
    <Table responsive bordered hover striped>
      <thead>
        <tr>
          {props?.thead.map((ele, index) => (
            <th key={index}>{ele}</th>
          ))}
        </tr>
      </thead>
      <tbody>{props?.tbody()}</tbody>
    </Table>
  );
};

export default DynamicTable;
