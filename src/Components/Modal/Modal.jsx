import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button, TextField } from '@mui/material';

const Modal = ({ open, handleClose, handleSave }) => {
  const [courseName, setCourseName] = useState('');
  const [courseDescription, setCourseDescription] = useState('');
  const [price, setPrice] = useState('');
  const [courseLanguage, setCourseLanguage] = useState('');

  const handleSaveClick = () => {
    const courseData = { courseName, courseDescription, price, courseLanguage };
    handleSave(courseData);
    handleClose();
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Create a New Course</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Please fill out the form below to create a new course.
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
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleSaveClick} color="primary">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

Modal.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  handleSave: PropTypes.func.isRequired,
};

export default Modal;