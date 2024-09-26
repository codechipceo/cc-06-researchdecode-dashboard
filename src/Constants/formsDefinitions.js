const courseForm = [
  {
    name: "courseName",
    label: "Course Name",
    type: "text",
  },
  {
    name: "courseDescription",
    label: "Course Description",
    type: "richText",
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
    type: "file",
  },
  {
    name: "courseBanner",
    label: "Course Banner",
    type: "file",
  },
  {
    name: "courseLanguage",
    label: "Course Language",
    type: "select",
    options: [
      { label: "English", _id: "english" },
      { label: "Hindi", _id: "hindi" },
    ],
    displayKey: "label",
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

const videoForm = [
  {
    name: "videoTitle",
    label: "Video Title",
    type: "text",
  },
  {
    name: "videoUrl",
    label: "Video URL",
    type: "file",
  },
  {
    name: "courseId",
    label: "Course Id",
    type: "select",
    options: [],
    displayKey: "courseName",
  },
];
export const formDefinitions = {
  courseForm: courseForm,
  teacherForm,
  videoForm,
};
