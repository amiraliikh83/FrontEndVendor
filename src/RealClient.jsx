import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "axios"; // اضافه شده

const RealClient = () => {
  const [formData, setFormData] = useState({
    CompanyName: "",
    CompanyPhone: "",
    CompanyWebsite: "",
    CompanyAbout: ""
  });
  const [error, setError] = useState(""); // اضافه شده
  const navigate = useNavigate();

  useEffect(() => {
    setError("");
  }, [formData]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/users/register",
        formData
      );
      console.log(response.data);
      if (response.status === 200) {
        navigate("/home");
      }
    } catch (error) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        setError(error.response.data.message);
      } else {
        setError("An error occurred. Please try again later");
      }
    }
  };

  const handleOnChange = (event, value) => {
    if (value?.label === "حقوقی") {
      navigate("/legalclient");
    }
  };

  return (
    <ThemeProvider theme={createTheme()}>
      <Grid container component="main" sx={{ height: "90vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={12}
          sm={8}
          md={5}
          component={Paper}
          elevation={6}
          square
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            margin: 'auto',
            padding: 3,
          }}
        >
          <Box
            component="form"
            onSubmit={handleSubmit} // اضافه شده
            sx={{
              '& .MuiTextField-root': { m: 1, width: '100%' },
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
            noValidate
            autoComplete="off"
          >
            <Typography variant="h5" component="h2" gutterBottom>
              ثبت شرکت
            </Typography>
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={hagihogi}
              sx={{ width: '100%' }}
              onChange={handleOnChange}
              renderInput={(params) => <TextField {...params} label="عنوان" />}
            />
            <TextField
              required
              id="CompanyName"
              name="CompanyName" // اضافه شده
              label="نام شرکت"
              value={formData.CompanyName} // اضافه شده
              onChange={handleChange} // اضافه شده
              fullWidth
            />
            <TextField
              required
              id="CompanyPhone"
              name="CompanyPhone" // اضافه شده
              label="شماره تلفن"
              value={formData.CompanyPhone} // اضافه شده
              onChange={handleChange} // اضافه شده
              fullWidth
            />
            <TextField
              required
              id="CompanyWebsite"
              name="CompanyWebsite" // اضافه شده
              label="وبسایت شرکت"
              value={formData.CompanyWebsite} // اضافه شده
              onChange={handleChange} // اضافه شده
              fullWidth
            />
            <TextField
              required
              id="CompanyAbout"
              name="CompanyAbout" // اضافه شده
              label="درباره ی شرکت"
              value={formData.CompanyAbout} // اضافه شده
              onChange={handleChange} // اضافه شده
              multiline
              rows={4}
              fullWidth
            />
            {error && (
              <Typography color="error" sx={{ mt: 2 }}>
                {error}
              </Typography>
            )}
            <Button
              type="submit" // اضافه شده
              variant="contained"
              color="primary"
              sx={{ mt: 2 }}
            >
              ثبت
            </Button>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

const hagihogi = [
  { label: "حقیقی" },
  { label: "حقوقی" },
];

export default RealClient;
