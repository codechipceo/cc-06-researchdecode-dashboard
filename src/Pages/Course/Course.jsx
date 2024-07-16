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
import { useSelector } from "react-redux";
import { selectAdminInfo } from "../../Features/Slices/adminSlice";

// constants
const { courseForm } = formDefinitions;
const { coursePayload } = apiPayloads;
const { courseColumns } = tableColumns;

export const Course = ({ loggedinUser }) => {
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

  /*
  ########################################################################
          HANDLER FUNCTIONS
  ########################################################################
 */
  const handleChange = (e) => {
    const { name, value } = e.target;
    const data = { ...currentCourse };
    if (e.target.files) {
      data[name] = e.target.files[0];
    } else {
      data[name] = value;
    }
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
    const formData = new FormData();

    if (status === "CREATE") {
      Object.keys(currentCourse).forEach((key) => {
        formData.append(key, currentCourse[key]);
      });
      formData.append("instructor", loggedinUser._id);
      console.log(formData);
      hooksInstance.createDoc(formData);
    } else {
      hooksInstance.updateDoc(currentCourse);
    }

    // onCancel();
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
