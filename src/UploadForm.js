import React, { useRef } from "react";
import { upload } from "./api";

export const UploadForm = props => {
  const inputEl = useRef(null);

  const _onSucess = (data) => {
    console.log(data);
    props.onUpload(data.link);
  }

  const _onFailure = (error) => {
    props.onUpload(null);
    console.log(error);
  }

  const onUpload = e => {
    e.preventDefault();
    console.log(inputEl.current.files);
    upload(inputEl.current.files[0], _onSucess, _onFailure);
  };

  return (
    <form onSubmit={onUpload}>
      <input ref={inputEl} type="file" />
      <button type="submit">Submit</button>
    </form>
  );
};
