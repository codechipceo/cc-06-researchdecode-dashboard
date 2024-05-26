import { useEffect, useState } from "react";
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

  const handleEdit = (course) => {
    const  updatePayload  ={ courseId:course.id , ...course}
    update(updatePayload)
    setModal(true);
  };

  const handleDelete = (courseId) => {
    deleteCourseById(courseId);
  };

  const handleSave = (courseData) => {
    if (currentCourse) {
      update({ ...courseData, id: currentCourse._id });
    } else {
      create(courseData);
    }
    setModal(false);
  };


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
        <DialogContent>
        <DialogContentText>
         {subTitle}
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          label="Course Name"
          type="text"
          fullWidth
          variant="outlined"
          value={courseName}
          onChange={(e) => setCourseName(e.target.value)}
        />
        <TextField
          margin="dense"
          label="Course Description"
          type="text"
          fullWidth
          variant="outlined"
          value={courseDescription}
          onChange={(e) => setCourseDescription(e.target.value)}
        />
        <TextField
          margin="dense"
          label="Price"
          type="number"
          fullWidth
          variant="outlined"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <TextField
          margin="dense"
          label="Course Language"
          type="text"
          fullWidth
          variant="outlined"
          value={courseLanguage}
          onChange={(e) => setCourseLanguage(e.target.value)}
        />
      </DialogContent>
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
        rows={courseData}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
      <Modal
        open={showModal}
        handleClose={() => setModal(false)}
        handleSave={handleSave}
        initialData={currentCourse}
        fields={courseData}
      />
    </div>
  );
};
