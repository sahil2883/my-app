import { Button, Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { todoForm } from "../interface";
import { useState } from "react";
import { todosTypes } from "./Home";

interface Formdatavalues {
  formValues: todoForm[];
  onMainHandleChange: (data: todosTypes) => void;
}

const FormsData = ({ formValues, onMainHandleChange }: Formdatavalues) => {
  const [todo, setTodo] = useState<todosTypes>({
    value: "",
    isCompelete: false,
    id: 0,
    isDelete: 0,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value, type, checked } = e.target;
    setTodo({ ...todo, [name]: type === "checkbox" ? checked : value });
  };

  const handleAdd = (): void => {
    onMainHandleChange({
      value: todo?.value,
      isCompelete: todo?.isCompelete,
      isDelete: todo?.isDelete,
      id: Date.now(),
    });
    setTodo({
      value: "",
      isCompelete: false,
      id: 0,
    });
  };

  return (
    <Container>
      <Form>
        {formValues.map((ele: todoForm, index: number) => (
          <Form.Group className="mb-3" key={index}>
            <Form.Label>{ele?.label}</Form.Label>
            <input
              type={ele?.type}
              placeholder={ele?.placeHolder}
              name={ele?.name}
              value={todo?.value}
              checked={todo?.isCompelete}
              className={ele?.className}
              onChange={handleChange}
            />
          </Form.Group>
        ))}
        <div className="mt-3">
          <Button onClick={handleAdd}>Add Task</Button>
        </div>
      </Form>
    </Container>
  );
};

export default FormsData;
