const coursePayload = {
  subjectId: "60d5ec4ee1b5b74a2c8a7a8c",
  courseName: "",
  courseDescription: "",
  courseExtras: "",
  price: "",
  courseThumbnail: "",
  courseBanner: "",
  instructor: "",
  enrolledCount: "",
  courseLanguage: "",
  createdBy: {
    id: "60d5ec4ee1b5b74a2c8a7a8d",
    model: "Teacher",
  },
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

export const apiPayloads = {
  coursePayload,
  teacherPayload,
  videosPayload,
};
