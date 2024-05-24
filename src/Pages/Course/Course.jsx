import { useState } from 'react';
import { useCourse } from '../../Hooks/use-course';
import DataTable from '../../Components/DataTable/DataTable';
import Modal from '../../Components/Modal/Modal';

export const Course = () => {
  const { courseData, courseById, isLoading, isError, errorMessage, getById, update, deleteCourseById, create } = useCourse();
  const [showModal, setModal] = useState(false);
  const [currentCourse, setCurrentCourse] = useState(null);

  const handleEdit = (courseId) => {
   
  };

  const handleDelete = (courseId) => {
  
  };

  const handleSave = (courseData) => {
  
  };

  const fields = [
    { name: 'courseName', label: 'Course Name', type: 'text' },
    { name: 'courseDescription', label: 'Description', type: 'text' },
    { name: 'price', label: 'Price', type: 'number' },
    { name: 'courseLanguage', label: 'Language', type: 'text' },
    { name: 'enrolledCount', label: 'Enrolled Count', type: 'number' },
    { name: 'isActive', label: 'Active', type: 'checkbox' },
  ];

  const columns = [
    { field: '_id', headerName: 'ID', width: 90, minWidth: 90 },
    { field: 'courseName', headerName: 'Course Name', width: 200, minWidth: 200 },
    { field: 'courseDescription', headerName: 'Description', width: 300, minWidth: 300 },
    { field: 'price', headerName: 'Price', type: 'number', width: 110, minWidth: 110 },
    { field: 'courseLanguage', headerName: 'Language', width: 150, minWidth: 150 },
    { field: 'enrolledCount', headerName: 'Enrolled Count', type: 'number', width: 150, minWidth: 150 },
    { field: 'isActive', headerName: 'Active', type: 'boolean', width: 110, minWidth: 110 },
  ];

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {errorMessage}</div>;
  }

  return (
    <div>
      <button onClick={() => { setCurrentCourse(null); setModal(true); }}>Create</button>
      <DataTable rows={courseData} columns={columns} handleEdit={handleEdit} handleDelete={handleDelete} />
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