import { Button } from "@mui/material";
import { useState } from "react";
import { FormComponent } from "../../Components/FormComponent/FormComponent";
import { formDefinitions } from "../../Constants/formsDefinitions";
import { apiPayloads } from "../../Constants/payloads";
import { useLab } from "../../Hooks/use-lab";
import { tableColumns } from "../../Constants/tableColumns";
import DataTable from "../../Components/DataTable/DataTable";

// constants
const { labForm } = formDefinitions;
const { labPayload: labData } = apiPayloads;
const { labColumns } = tableColumns;
const LabPage = () => {
  /*
  ########################################################################
          STATES
  ########################################################################
 */

  const [isForm, setForm] = useState(false);
  const [status, setStatus] = useState(false);
  const [labPayload, setLabPayload] = useState({ ...labData });
  /*
  ########################################################################
          API HOOKS
  ########################################################################
 */
  const {
    labsById,
    labs,
    isError,
    errorMessage,
    totalCount,
    isLoading,
    hookInstance,
  } = useLab();
  /*
  ########################################################################
          HANDLER FUNCTIONS
  ########################################################################
 */
  const handleChange = (e) => {
    const { name, value } = e.target;
    const data = { ...labPayload };
    if (name === "isPaid") {
      data[name] = !data[name];
    } else {
      data[name] = value;
    }
    setLabPayload(data);
  };

  const handleEdit = (row) => {
    const data = { ...row };
    data.courseId = data._id;
    setLabPayload(data);
    setStatus("EDIT");
    setForm(true);
  };

  const handleSubmit = () => {
    if (status === "CREATE") {
      const formData = new FormData();
      Object.keys(labPayload).map((objKey) => {
        formData.append(objKey, labPayload[objKey]);
      });

      hookInstance.createDoc(labPayload);
    } else {
      hookInstance.updateDoc(labPayload);
    }
    onCancel();
  };
  const onCancel = () => {
    setStatus("");
    setLabPayload({ ...labData });
    setForm(false);
  };
  const handleDelete = (labPayload) => {
    hookInstance.deleteDoc(labPayload);
  };

  // if (teacherLoading) {
  //   return <Loading />;
  // }

  // if (teacherErrorStatus) {
  //   return <div>Error: {errorMessage}</div>;
  // }

  return (
    <>
      {isForm === false ? (
        <div className="w-full bg-red-500">
          <Button
            onClick={() => {
              setStatus("CREATE");
              setForm(true);
            }}
          >
            Create
          </Button>
          <DataTable
            columns={labColumns}
            rows={labs}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
        </div>
      ) : (
        <>
          <FormComponent
            formDefinition={labForm}
            formPayload={labPayload}
            status={status}
            onCancel={onCancel}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            notShowButton={true}
          />
          {labPayload.isPaid ? (
            <FormComponent
              formDefinition={[
                {
                  name: "price",
                  label: "Price",
                  type: "number",
                },
              ]}
              formPayload={labPayload}
              status={status}
              onCancel={onCancel}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              notShowButton={true}
            />
          ) : null}
          <div>
            <Button onClick={handleSubmit}>
              {status === "CREATE" ? "Create" : "Update"}
            </Button>
            <Button onClick={() => onCancel()}>Cancel</Button>
          </div>
        </>
      )}
    </>
  );
};

export default LabPage;
