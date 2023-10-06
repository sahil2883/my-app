import { Container } from "react-bootstrap";
import CardsData from "./CardsData";
import { todosTypes } from "./Home";

interface todoData {
  todos: todosTypes[];
}

const HistoryData = (props: todoData) => {
  const printCardData = () => {
    return props?.todos?.map(
      (ele, index) =>
        ele?.isDelete === 1 && (
          <div key={index} className="mt-2">
            <CardsData>
              <div className="d-flex justify-content-between align-items-center">
                <h6 className="text-danger font-weight-bold m-0">
                  <strong className="text-secondary">Deleted Tasks Desription :</strong> {ele?.value}
                </h6>
                <small className="text-primary">
                  {ele?.deleteDate?.toString()}
                </small>
              </div>
            </CardsData>
          </div>
        )
    );
  };

  return <Container className="mt-3">{printCardData()}</Container>;
};

export default HistoryData;
