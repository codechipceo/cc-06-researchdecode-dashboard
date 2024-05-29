import {
  Button,
  Dialog,
  DialogActions,
  DialogTitle
} from "@mui/material";
import PropTypes from "prop-types";

const Modal = ({ open, handleClose, handleSave, title, children }) => {
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>{title}</DialogTitle>
      {children}
      <DialogActions>
        <Button onClick={handleClose} color='primary'>
          Cancel
        </Button>
        <Button onClick={handleSave} color='primary'>
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
