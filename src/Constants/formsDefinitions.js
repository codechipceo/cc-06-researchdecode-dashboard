const courseForm = [
  {
    name: "courseName",
    label: "Course Name",
    type: "text",
  },
  {
    name: "courseDescription",
    label: "Course Description",
    type: "text",
  },
  {
    name: "price",
    label: "Price",
    type: "number",
  },
  {
    name: "courseLanguage",
    label: "Course Language",
    type: "select",
    options: [
      { label: "English", value: "english" },
      { label: "Spanish", value: "spanish" },
      { label: "French", value: "french" },
    ],
  },
];
export const formDefinitions = {
  courseForm: courseForm,
};
