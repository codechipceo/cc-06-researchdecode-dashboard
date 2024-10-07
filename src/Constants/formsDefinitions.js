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

const labForm = [
  {
    name: "title",
    label: "Title",
    type: "text",
  },
  {
    name: "description",
    label: "Description",
    type: "text",
  },
  {
    name: "maxStudentsAllowed",
    label: "Maximum students allowed",
    type: "number",
  },
  {
    name: "labType",
    label: "Lab Type",
    type: "text",
  },
  {
    name: "labLocation",
    label: "Lab Location",
    type: "text",
  },
  {
    name: "status",
    label: "Lab status",
    type: "select",
    options: [
      { status: "Available", _id: "Available" },
      { status: "In Use", _id: "In Use" },
      { status: "Under Maintenance", _id: "Under Maintenance" },
    ],
    displayKey: "status",
  },
  {
    name: "isPaid",
    label: "Is Paid",
    type: "switch",
  },
];
export const formDefinitions = {
  courseForm: courseForm,
  teacherForm,
  videoForm,
  labForm,
};
