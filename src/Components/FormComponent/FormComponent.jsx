import { Button } from "@mui/material";
import { DynamicForm } from "../../Components/DynamicForm/DynamicForm";

export const FormComponent = ({
  status,
  formPayload,
  formDefinition,
  onCancel,
  handleChange,
  handleSubmit,
  notShowButton,
}) => {
  return (
    <div>
      <DynamicForm
        formData={formPayload}
        formDefinition={formDefinition}
        handleChange={handleChange}
      />
      {notShowButton ? null : (
        <div>
          <Button onClick={handleSubmit}>
            {status === "CREATE" ? "Create" : "Update"}
          </Button>
          <Button onClick={() => onCancel()}>Cancel</Button>
        </div>
      )}
    </div>
  );
};
