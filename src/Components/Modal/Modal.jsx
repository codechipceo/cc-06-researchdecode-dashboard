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
      <DialogTitle>{title}</DialogTitle>
    {children}
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