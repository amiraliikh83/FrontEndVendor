import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "axios";

const LegalClient = () => {
  const [formData, setFormData] = useState({
    CompanyName:"",
    NumberRecord :"",
    EconomicCode:"",
    CompanyPhone: "",
    CompanyWebsite:"",
    CompanyAbout: "",
    companyType:"",
  });
  const [error, setError] = useState("");
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
        formData,
      );
      console.log(response.data);
      if (response.status === 200) {
        navigate("/legalclient");
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
    setFormData({ ...formData, companyType: value }); // Update the companyType field in formData
    if (value === "حقیقی") {
      navigate("/realclient");
    }
  };

  return (
    <ThemeProvider theme={createTheme()}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={12}
          sm={8}
          md={5}
          component={Paper}
          elevation={8}
          square
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            margin:"auto",
            padding: 3,
            
          }}>
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              "& .MuiTextField-root": { m: 1, width: "80vh" },
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
            noValidate
            autoComplete="off">
            <Typography variant="h4" component="h3" gutterBottom>
           (حقوقی)ثبت شرکت
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}>
              <FormControl>
                <FormLabel id="demo-row-radio-buttons-group-label"></FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                  value={formData.companyType}
                  onChange={handleOnChange}>
                  <FormControlLabel
                    value="حقوقی"
                    control={<Radio />}
                    onChange={handleOnChange}
                    label="حقوقی"
                  />
                  <FormControlLabel
                    value="حقیقی"
                    control={<Radio />}
                    onChange={handleOnChange}
                    label="حقیقی"
                  />
                </RadioGroup>
              </FormControl>
              <TextField
                required
                id="CompanyName"
                name="CompanyName"
                label="نام شرکت"
                value={formData.CompanyName}
                onChange={handleChange}
                fullWidth
              />
              <TextField
                required
                id="NumberRecord"
                name="NumberRecord"
                label="شماره ثبت"
                value={formData.NumberRecord}
                onChange={handleChange}
                fullWidth
              />
               <TextField
                required
                id="EconomicCode"
                name="EconomicCode"
                label="کد اقتصادی"
                value={formData.EconomicCode}
                onChange={handleChange}
                fullWidth
              />
              <TextField
                required
                id="CompanyPhone"
                name="CompanyPhone"
                label="شماره تلفن"
                value={formData.CompanyPhone}
                onChange={handleChange}
                fullWidth
              />
               <TextField
                required
                id=""
                name=""
                label="شماره تلفن"
                value={formData.CompanyPhone}
                onChange={handleChange}
                fullWidth
              />
              <TextField
                required
                id="CompanyWebsite"
                name="CompanyWebsite"
                label="وبسایت شرکت"
                value={formData.CompanyWebsite}
                onChange={handleChange}
                fullWidth
              />
              <TextField
                required
                id="CompanyAbout"
                name="CompanyAbout"
                label="درباره ی شرکت"
                value={formData.CompanyAbout}
                onChange={handleChange}
                multiline
                rows={2}
                fullWidth
              />
            </Box>

            {error && (
              <Typography color="error" sx={{ mt: 1 }}>
                {error}
              </Typography>
            )}
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{ mt: 3  , width : "80vh"}}>
              ثبت
            </Button>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};



export default LegalClient;