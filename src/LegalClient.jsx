import React from "react";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

const Home2 = () => {
  const navigate = useNavigate();

  const handleOnChange = (event, value) => {
    if (value?.label === "حقیقی") {
      navigate("/realclient");
    }
  };

  const hagihogi = [
    { label: "حقیقی" },
    { label: "حقوقی" },
  ];

  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={hagihogi}
      sx={{ width: 300 }}
      onChange={handleOnChange}
      renderInput={(params) => <TextField {...params} label="عنوان" />}
    />
  );
};

export default Home2;
