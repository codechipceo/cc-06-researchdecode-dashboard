import { useState } from "react";
import { useCourse } from "../../Hooks/use-course";

export const Course = () => {
  const { courseData } = useCourse();
  const [showMOdal, setModal] = useState(false);
  console.log(courseData);
  return (
    <div>
      {showMOdal && <h1>I am modal </h1>}

      <button onClick={() => setModal(true)}>Create</button>
    </div>
  );
};
