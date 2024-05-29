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
              variant='standard'
            />
          );
        case "select":
          return (
            <Box key={field.name} mb={2}>
              <FormControl fullWidth variant='outlined'>
                <InputLabel>{field.label}</InputLabel>
                <Select
                  size='small'
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleChange}
                  label={field.label}
                >
                  {field.options.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
          );
        default:
          return null;
      }
    });
  };

  return renderFormFields();
};
