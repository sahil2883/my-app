import { Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { todoForm } from "../interface";

interface Formdatavalues {
  formValues: todoForm[];
}

const FormsData = ({ formValues }: Formdatavalues) => {
  return (
    <Container>
      <Form>
        {formValues.map((ele: todoForm, index: number) => (
          <Form.Group
            className="mb-3"
            controlId="exampleForm.ControlInput1"
            key={index}
          >
            <Form.Label>{ele?.label}</Form.Label>
            <Form.Control
              type={ele?.type}
              placeholder={ele?.placeHolder}
              value={ele?.value}
            />
            <Form.Check 
              placeholder={ele?.placeHolder}
              value={ele?.value}
            />
          </Form.Group>
        ))}
      </Form>
    </Container>
  );
};

export default FormsData;
