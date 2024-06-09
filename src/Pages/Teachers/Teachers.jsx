import { Button } from "@mui/material";
import { useState } from "react";
import { FormComponent } from "../../Components/FormComponent/FormComponent";
import { formDefinitions } from "../../Constants/formsDefinitions";
import { apiPayloads } from "../../Constants/payloads";
import { useTeachers } from "../../Hooks/use-teachers";

// constants
const { teacherForm } = formDefinitions;
const { teacherPayload: teacherData } = apiPayloads;
// const { courseColumns } = tableColumns;
export const Teachers = () => {
  /*
  ########################################################################
          STATES
  ########################################################################
 */

  const [isForm, setForm] = useState(false);
  const [status, setStatus] = useState(false);
  const [teacherPayload, setTeacherPayload] = useState({ ...teacherData });

  /*
  ########################################################################
          API HOOKS
  ########################################################################
 */
  const {
    teachersData,
    teacherById,
    teacherCount,
    teacherLoading,
    hookInstance,
  } = useTeachers();
  /*
  ########################################################################
          HANDLER FUNCTIONS
  ########################################################################
 */
  const handleChange = (e) => {
    const { name, value } = e.target;
    const data = { ...teacherPayload };
    data[name] = value;
    setTeacherPayload(data);
  };

  const handleEdit = (row) => {
    const data = { ...row };
    data.courseId = data._id;
    setTeacherPayload(data);
    setStatus("EDIT");
    setForm(true);
  };

  const handleSubmit = () => {
    if (status === "CREATE") {
      const formData = new FormData();
      Object.keys(teacherPayload).map((objKey) => {
        formData.append(objKey, teacherPayload[objKey]);
      });

      hookInstance.createDoc(teacherPayload);
    } else {
      hookInstance.updateDoc(teacherPayload);
    }
  };
  const onCancel = () => {
    setStatus("");
    setTeacherPayload({ ...teacherData });
    setForm(false);
  };
  const handleDelete = () => {};

  // if (teacherLoading) {
  //   return <Loading />;
  // }

  // if (teacherErrorStatus) {
  //   return <div>Error: {errorMessage}</div>;
  // }

  return (
    <>
      {isForm === false ? (
        <div className='w-full bg-red-500'>
          <Button
            onClick={() => {
              setStatus("CREATE");
              setForm(true);
            }}
          >
            Create
          </Button>
          {/* <DataTable
            columns={courseColumns}
            rows={teacherData}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          /> */}
        </div>
      ) : (
        <FormComponent
          formDefinition={teacherForm}
          formPayload={teacherPayload}
          status={status}
          onCancel={onCancel}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      )}
    </>
  );
};
