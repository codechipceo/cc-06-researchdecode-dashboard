import { Button } from "@mui/material";
import { useState } from "react";
import DataTable from "../../Components/DataTable/DataTable";
import { FormComponent } from "../../Components/FormComponent/FormComponent";
import { useCourse } from "../../Hooks/use-course";
import { apiPayloads } from "../../Constants/payloads";
import { formDefinitions } from "../../Constants/formsDefinitions";
import { tableColumns } from "../../Constants/tableColumns";
import { Loading } from "../../Components/Loading/Loading";
import { useTeachers } from "../../Hooks/use-teachers";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { createVideos } from "../../Features/Slices/videoSlice";
import { useVideos } from "../../Hooks/useVideos";

// constants
const { videoForm } = formDefinitions;
const { videosPayload } = apiPayloads;
const { videoColumns } = tableColumns;

export const Videos = () => {
  /*
  ########################################################################
          STATES
  ########################################################################
 */

  const [isForm, setForm] = useState(false);
  const [status, setStatus] = useState(false);
  const [videoObj, setVideoObj] = useState({ ...videosPayload });

  /*
  ########################################################################
          API HOOKS
  ########################################################################
 */
  const { videosData } = useVideos();

  const { courseData } = useCourse();
  videoForm[2].options = courseData ?? [];

  /*
  ########################################################################
          HANDLER FUNCTIONS
  ########################################################################
 */
  const handleChange = (e) => {
    const { name, value } = e.target;
    const data = { ...videoObj };

    const files = e?.target?.files;
    if (files) {
      data[name] = files[0];
    } else {

      data[name] = value;
    }
    setVideoObj(data);
  };

  const handleEdit = (row) => {
    const data = { ...row };
    data.videoId = data._id;
    setVideoObj(data);
    setStatus("EDIT");
    setForm(true);
  };
  const dispatch = useDispatch();
  const handleSubmit = () => {
    const data = { ...videoObj };
    const formData = new FormData();
    formData.append("videoTitle", data.videoTitle);
    formData.append("file", data.videoUrl);
    formData.append("courseId", data.courseId);

    status === "CREATE" ? dispatch(createVideos(formData)) : "";

    onCancel();
  };
  const onCancel = () => {
    setStatus("");
    setVideoObj({ ...videosPayload });
    setForm(false);
  };
  const handleDelete = () => {};

  // if (isLoading) {
  //   return <Loading />;
  // }

  // if (isError) {
  //   return <div>Error: {errorMessage}</div>;
  // }

  return (
    <>
      {isForm === false ? (
        <div className='w-full bg-red-500'>
          <Button
            onClick={() => {
              setStatus("CREATE");
              setForm(true);
            }}
          >
            Create
          </Button>
          <DataTable
            columns={videoColumns}
            rows={videosData ?? []}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
        </div>
      ) : (
        <FormComponent
          formDefinition={videoForm}
          formPayload={videoObj}
          status={status}
          onCancel={onCancel}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      )}
    </>
  );
};
