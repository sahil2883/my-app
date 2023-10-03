import { Container } from "react-bootstrap";
import CardsData from "./CardsData";
import FormsData from "./FormsData";
import { todoForm } from "../interface";

const Todoform:todoForm[] = [
  {
    label: "Enter todo :",
    placeHolder: "Enter Todo",
    value: "todo",
    type:"text",
    className:""
  },
  {
    label: "Enter todo :",
    placeHolder: "Enter Todo",
    value: "todo",
    type:"checkbox",
    className:""
  },
];

const Home = () => {
  return (
    <Container className="mt-3">
      <CardsData>
        <FormsData formValues={Todoform}/>
      </CardsData>
    </Container>
  );
};

export default Home;
