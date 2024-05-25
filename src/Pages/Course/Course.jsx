import { useState } from "react";
import { useCourse } from "../../Hooks/use-course";
import DataTable from "../../Components/DataTable/DataTable";
import Modal from "../../Components/Modal/Modal";

export const Course = () => {
  const {
    courseData,
    courseById,
    isLoading,
    isError,
    errorMessage,
    getById,
    update,
    deleteCourseById,
    create,
  } = useCourse();
  const [showModal, setModal] = useState(false);
  const [currentCourse, setCurrentCourse] = useState(null);

  const handleEdit = (courseId) => {};

  const handleDelete = (courseId) => {};

  const handleSave = (courseData) => {};

  const fields = [
    { _id: 1, name: "courseName", label: "Course Name", type: "text" },
    { _id: 2, name: "courseDescription", label: "Description", type: "text" },
    { _id: 3, name: "price", label: "Price", type: "number" },
    { _id: 4, name: "courseLanguage", label: "Language", type: "text" },
    { _id: 5, name: "enrolledCount", label: "Enrolled Count", type: "number" },
    { _id: 6, name: "isActive", label: "Active" },
  ];

  const columns = [
    { field: "id", headerName: "ID", flex: 1 },
    { field: "courseName", headerName: "Course Name", flex: 1 },
    { field: "price", headerName: "Price", type: "number", flex: 1 },
    { field: "courseLanguage", headerName: "Language", flex: 1 },
    {
      field: "enrolledCount",
      headerName: "Enrolled Count",
      type: "number",
      flex: 1,
    },

    { field: "isActive", headerName: "Active", flex: 1 },
  ];

  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }

  // if (isError) {
  //   return <div>Error: {errorMessage}</div>;
  // }

  return (
    <div className='w-full'>
      <button
        onClick={() => {
          setCurrentCourse(null);
          setModal(true);
        }}
      >
        Create
      </button>
      <DataTable
        columns={columns}
        rows={fields}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
      <Modal
        open={showModal}
        handleClose={() => setModal(false)}
        handleSave={handleSave}
        initialData={currentCourse}
        fields={fields}
      />
    </div>
  );
};
