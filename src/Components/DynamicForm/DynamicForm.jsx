import { Input, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";

export const DynamicForm = ({ formDefinition, formData, handleChange }) => {
  // Render form fields
  const renderFormFields = () => {
    return formDefinition.map((field) => {
      switch (field.type) {
        case "text":
        case "email":
        case "password":
        case "number":
          return (
            <Box mt={2} mb={1}>
              <Typography>{field.label}</Typography>

              <TextField
                margin='normal'
                size='small'
                name={field.name}
                fullWidth
                label={field.label}
                type={field.type}
                value={formData[field.name]}
                onChange={handleChange}
                autoFocus
                variant='filled'
              />
            </Box>
          );
        case "select":
          return (
            <Box key={field.name} mb={2}>
              <Typography my={2}>{field.label}</Typography>
              <FormControl fullWidth variant='outlined'>
                <InputLabel>{field.label}</InputLabel>

                <Select
                  size='small'
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleChange}
                  label={field.label}
                >
                  {field.options.map((option) => {
                    return (
                      <MenuItem key={option.value} value={option._id}>
                        {option[field.displayKey]}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            </Box>
          );
        case "file":
          return (
            <FormControl>
              <InputLabel htmlFor='file-upload'>Upload File</InputLabel>
              <Input
                id='file-upload'
                type='file'
                name={field.name}
                onChange={handleChange}
              />
            </FormControl>
          );
        default:
          return null;
      }
    });
  };

  return renderFormFields();
};
