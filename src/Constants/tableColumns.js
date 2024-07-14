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
  { field: "_id", headerName: "ID", valueGetter:(params) =>{console.log(params.api) } },
  { field: "videoTitle", headerName: "Title", flex:1},
  {
    field: "courseId.courseName",
    headerName: "Course Name",
    flex:1,
    valueGetter: (params) => {
    return  params.row?.courseId?.courseName;
    },
  },
];

export const tableColumns = {
  courseColumns,
  videoColumns,
};
