import React, { useState } from "react";
import { UploadForm } from "./UploadForm";
import logo from "./logo.svg";
import "./App.css";
import { List } from "./List";
import { Status } from "./Status";

const App = props => {
  const [links, setLinks] = useState([]);
  const [status, setStatus] = useState('');

  const onUpload = link => {
    if (link) {
      setLinks([...links, link]);
      setStatus('Sucess');
    } else {
      setStatus("Failed");
    }
  };

  return (
    <div className="container">
      <UploadForm onUpload={onUpload} set />
      <List data={links} />
      <Status status={status} />
    </div>
  );
};

export default App;
