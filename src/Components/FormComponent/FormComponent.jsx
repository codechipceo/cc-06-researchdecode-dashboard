import { DynamicForm } from "../../Components/DynamicForm/DynamicForm";

export const FormComponent = ({
  formPayload,
  formDefinition,

  handleChange,
}) => {
  return (
    <div>
      <DynamicForm
        formData={formPayload}
        formDefinition={formDefinition}
        handleChange={handleChange}
      />
    </div>
  );
};
