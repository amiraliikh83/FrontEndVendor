import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
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
    IsLegal: "",
    VendorName: "",
    Caption: "",
    CodeMeli: "",
    EconomyCode: "",
    RegisterNo: "",
    IssuePlaceId: "",
    ProvinceId: "",
    CityId: "",
    AddressCenter: "",
    AddressSite: "",
    Site: "",
    VendorText: "",
    ContactPerson: "",
    Mobile: "",
    Telephone: "",
    Email: "",
    ContactText: "",
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
        "http://localhost:3000/users/legalclient",
        formData
      );
      console.log(response.data);
      if (response.status === 200) {
        navigate("/realclient");
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
    setFormData({ ...formData, companyType: value });
    if (value === "حقیقی") {
      navigate("/private/realclient");
    }
  };

  const inputPropsStyles = {
    sx: {
      textAlign: "right",
      "&::placeholder": {
        textAlign: "right",
      },
    },
  };

  return (
    <ThemeProvider theme={createTheme()}>
      <Grid
        container
        component="article"
        sx={{ height: "100vh", backgroundImage: `url('')` }}
      >
        <CssBaseline />
        <Grid
          item
          xs={12}
          sm={8}
          md={5}
          elevation={8}
          square="true"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            margin: "auto",
            marginBottom: "auto",
            padding: 3,
          }}
        >
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              "& .MuiTextField-root": { m: "4px" },
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
            noValidate
            autoComplete="off"
          >
            <Typography variant="h4" component="h3" gutterBottom>
              (حقوقی)ثبت شرکت
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <FormControl>
                <FormLabel id="demo-row-radio-buttons-group-label"></FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                  value={formData.IsLegal}
                  onChange={handleOnChange}
                >
                  <FormControlLabel
                    value="حقوقی"
                    control={<Radio />}
                    label="حقوقی"
                  />
                  <FormControlLabel
                    value="حقیقی"
                    control={<Radio />}
                    label="حقیقی"
                  />
                </RadioGroup>
              </FormControl>

              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    inputProps={inputPropsStyles}
                    required
                    id="VendorName"
                    name="VendorName"
                    label="نام و نام خانوادگی"
                    value={formData.VendorName}
                    onChange={handleChange}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    inputProps={inputPropsStyles}
                    required
                    id="Caption"
                    name="Caption"
                    label="برند"
                    value={formData.Caption}
                    onChange={handleChange}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    inputProps={inputPropsStyles}
                    required
                    id="CodeMeli"
                    name="CodeMeli"
                    label="کدملی"
                    value={formData.CodeMeli}
                    onChange={handleChange}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    inputProps={inputPropsStyles}
                    required
                    id="EconomyCode"
                    name="EconomyCode"
                    label="کد اقتصادی"
                    value={formData.EconomyCode}
                    onChange={handleChange}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    inputProps={inputPropsStyles}
                    required
                    id="RegisterNo"
                    name="RegisterNo"
                    label="شماره ثبت"
                    value={formData.RegisterNo}
                    onChange={handleChange}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    inputProps={inputPropsStyles}
                    required
                    id="IssuePlaceId"
                    name="IssuePlaceId"
                    label="محل صدور"
                    value={formData.IssuePlaceId}
                    onChange={handleChange}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    inputProps={inputPropsStyles}
                    required
                    id="ProvinceId"
                    name="ProvinceId"
                    label="استان"
                    value={formData.ProvinceId}
                    onChange={handleChange}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    inputProps={inputPropsStyles}
                    required
                    id="CityId"
                    name="CityId"
                    label="شهر"
                    value={formData.CityId}
                    onChange={handleChange}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    inputProps={inputPropsStyles}
                    required
                    id="AddressCenter"
                    name="AddressCenter"
                    label="آدرس مرکزی"
                    value={formData.AddressCenter}
                    onChange={handleChange}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    inputProps={inputPropsStyles}
                    required
                    id="AddressSite"
                    name="AddressSite"
                    label="آدرس سایت"
                    value={formData.AddressSite}
                    onChange={handleChange}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    inputProps={inputPropsStyles}
                    required
                    id="Site"
                    name="Site"
                    label="وبسایت"
                    value={formData.Site}
                    onChange={handleChange}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    inputProps={inputPropsStyles}
                    required
                    id="VendorText"
                    name="VendorText"
                    label="متن فروشنده"
                    value={formData.VendorText}
                    onChange={handleChange}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    inputProps={inputPropsStyles}
                    required
                    id="ContactPerson"
                    name="ContactPerson"
                    label="مخاطب فروشنده"
                    value={formData.ContactPerson}
                    onChange={handleChange}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    inputProps={inputPropsStyles}
                    required
                    id="Mobile"
                    name="Mobile"
                    label="شماره تماس مخاطب"
                    value={formData.Mobile}
                    onChange={handleChange}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    inputProps={inputPropsStyles}
                    required
                    id="Telephone"
                    name="Telephone"
                    label="تلفن ثابت مخاطب"
                    value={formData.Telephone}
                    onChange={handleChange}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    inputProps={inputPropsStyles}
                    required
                    id="Email"
                    name="Email"
                    label="ایمیل مخاطب"
                    value={formData.Email}
                    onChange={handleChange}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={12}>
                  <TextField
                    inputProps={inputPropsStyles}
                    required
                    id="ContactText"
                    name="ContactText"
                    label="متن مخاطب"
                    value={formData.ContactText}
                    onChange={handleChange}
                    fullWidth
                  />
                </Grid>
              </Grid>
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
              sx={{ mt: 3, width: "80vh" }}
            >
              ثبت
            </Button>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default LegalClient;
