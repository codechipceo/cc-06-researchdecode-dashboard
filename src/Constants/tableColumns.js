const courseColumns = [
  { field: "_id", headerName: "ID" },
  { field: "courseName", headerName: "Course Name", width: 400 },
  { field: "price", headerName: "Price", type: "number", flex: 1 },
  { field: "courseLanguage", headerName: "Language", flex: 1 },
  {
    field: "enrolledCount",
    headerName: "Enrolled Count",
    type: "number",
    flex: 1,
  },
  { field: "isActive", headerName: "Active", flex: 1 },
];

const videoColumns = [
  { field: "_id", headerName: "ID" },
  { field: "videoTitle", headerName: "Title", flex: 1 },
  {
    field: "courseId.courseName",
    headerName: "Course Name",
    flex: 1,
    valueGetter: (params) => {
      return params.row?.courseId?.courseName;
    },
  },
];

const labColumns = [
  { field: "_id", headerName: "ID" },
  { field: "title", headerName: "Title", width: 400 },
  { field: "description", headerName: "Description", flex: 1 },
  {
    field: "maxStudentsAllowed",
    headerName: "Max Students Allowed",
    type: "number",
    flex: 1,
  },
  {
    field: "labType",
    headerName: "Lab Type",
    flex: 1,
  },
  {
    field: "labLocation",
    headerName: "location",
    flex: 1,
  },

  {
    field: "status",
    headerName: "Lab Status",
    flex: 1,
  },
  { field: "isPaid", headerName: "isPaid", flex: 1 },
  { field: "price", headerName: "Price", flex: 1 },
];
export const tableColumns = {
  courseColumns,
  videoColumns,
  labColumns,
};
