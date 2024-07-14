import { Button } from "@mui/material";
import { useState } from "react";
import DataTable from "../../Components/DataTable/DataTable";
import { FormComponent } from "../../Components/FormComponent/FormComponent";
import { useCourse } from "../../Hooks/use-course";
import { apiPayloads } from "../../Constants/payloads";
import { formDefinitions } from "../../Constants/formsDefinitions";
import { tableColumns } from "../../Constants/tableColumns";
import { Loading } from "../../Components/Loading/Loading";
import { useTeachers } from "../../Hooks/use-teachers";

// constants
const { courseForm } = formDefinitions;
const { coursePayload } = apiPayloads;
const { courseColumns } = tableColumns;

export const Course = () => {
  /*
  ########################################################################
          STATES
  ########################################################################
 */

  const [isForm, setForm] = useState(false);
  const [status, setStatus] = useState(false);
  const [currentCourse, setCurrentCourse] = useState({ ...coursePayload });

  /*
  ########################################################################
          API HOOKS
  ########################################################################
 */
  const { courseData, isLoading, isError, errorMessage, hooksInstance } =
    useCourse();
  const { teachersData } = useTeachers();
  const teachers = {
    name: "instructor",
    label: "Instructor",
    type: "select",
    options: teachersData,
    displayKey: "name",
  };
  courseForm[7] = teachers;

  console.log(courseForm)

  /*
  ########################################################################
          HANDLER FUNCTIONS
  ########################################################################
 */
  const handleChange = (e) => {
    const { name, value } = e.target;
    const data = { ...currentCourse };
    data[name] = value;
    setCurrentCourse(data);
  };

  const handleEdit = (row) => {
    const data = { ...row };
    data.courseId = data._id;
    setCurrentCourse(data);
    setStatus("EDIT");
    setForm(true);
  };

  const handleSubmit = () => {
    status === "CREATE"
      ? hooksInstance.createDoc(currentCourse)
      : hooksInstance.updateDoc(currentCourse);

    onCancel()
  };
  const onCancel = () => {
    setStatus("");
    setCurrentCourse({ ...coursePayload });
    setForm(false);
  };
  const handleDelete = () => {};

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <div>Error: {errorMessage}</div>;
  }

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
          <DataTable
            columns={courseColumns}
            rows={courseData}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
        </div>
      ) : (
        <FormComponent
          formDefinition={courseForm}
          formPayload={currentCourse}
          status={status}
          onCancel={onCancel}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      )}
    </>
  );
};
