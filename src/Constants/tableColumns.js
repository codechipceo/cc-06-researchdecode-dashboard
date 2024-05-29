export const tableColumns = {
  courseColumns,
};

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
