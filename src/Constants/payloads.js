const coursePayload = {
  courseName: "",
  courseDescription: "",
  courseExtras: "",
  price: "",
  courseThumbnail: "",
  courseBanner: "",
  courseLanguage: "",
};

const teacherPayload = {
  name: "",
  qualification: "",
  profileImage: "",
  username: "",
  experience: "",
  email: "",
  password: "",
  contactNumber: "",
};

const videosPayload = {
  videoTitle: "",
  videoUrl: "",
  courseId: "",
};

const labPayload = {
  title: "",
  description: "",
  maxStudentsAllowed: 20,
  isPaid: false,
  labType: "",
  labLocation: "",
  status: "Available",
  price: 100,
  totalRequests: 0,
};

export const apiPayloads = {
  coursePayload,
  teacherPayload,
  videosPayload,
  labPayload,
};
