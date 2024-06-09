const courseForm = [
  {
    name: "subjectId",
    label: "Subject Id",
    type: "text",
  },
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
    name: "courseExtras",
    label: "Course Extras",
    type: "text",
  },
  {
    name: "price",
    label: "Price",
    type: "number",
  },
  {
    name: "courseThumbnail",
    label: "Course Thumbnail",
    type: "text",
  },
  {
    name: "courseBanner",
    label: "Course Banner",
    type: "text",
  },
  {
    name: "instructor",
    label: "Instructor",
    type: "select",
    options: [],
  },
  {
    name: "courseLanguage",
    label: "Course Language",
    type: "select",
    options: [
      { label: "English", value: "english" },
      { label: "Hindi", value: "hindi" },
    ],
  },
];

const teacherForm = [
  {
    name: "name",
    label: "Name",
    type: "text",
  },
  {
    name: "qualification",
    label: "Qualification",
    type: "text",
  },
  {
    name: "profileImage",
    label: "Profile Image",
    type: "file",
  },
  {
    name: "username",
    label: "Username",
    type: "text",
  },
  {
    name: "experience",
    label: "Experience",
    type: "number",
  },
  {
    name: "email",
    label: "Email",
    type: "email",
  },
  {
    name: "password",
    label: "Password",
    type: "password",
  },
  {
    name: "contactNumber",
    label: "Contact Number",
    type: "text",
  },
];

export const formDefinitions = {
  courseForm: courseForm,
  teacherForm,
};
