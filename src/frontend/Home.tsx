import { Container } from "react-bootstrap";
import CardsData from "./CardsData";
import FormsData from "./FormsData";
import { todoForm } from "../interface";

const Todoform: todoForm[] = [
  {
    label: "Enter todo :",
    placeHolder: "Enter Todo",
    name: "value",
    value: "",
    type: "text",
    className: "form-control",
  },
  {
    label: "isCompleted",
    placeHolder: "",
    name: "isCompelete",
    value: false,
    type: "checkbox",
    className: "",
  },
];

export interface todosTypes {
  value?: string;
  isCompelete?: boolean;
  id?: number|null;
}

export interface handleChangeTypes {
  onMainHandleChange: (data: todosTypes) => void;
}

const Home = ({ onMainHandleChange }: handleChangeTypes) => {
  return (
    <Container className="mt-3">
      <CardsData>
        <FormsData
          formValues={Todoform}
          onMainHandleChange={onMainHandleChange}
        />
      </CardsData>
    </Container>
  );
};

export default Home;
