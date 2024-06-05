import React, { useState, useEffect } from "react";
import {
  Avatar,
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Paper,
  TextField,
  Typography,
  Skeleton,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Cancel";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import axios from "axios";
import { useForm } from "react-hook-form";
import avtarImage from "../assest/Images/client-2.jpg";
import { Loader } from "../Loader";
import { baseUrl } from "../../Urls";

const theme = createTheme({
  typography: {
    fontFamily: [
      "Montserrat",
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
    ].join(","),
  },
});

export const ServiceProviderProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setisLoading] = useState(false);
  const [spData, setspData] = useState();
  const id = localStorage.getItem("Id");
  const { register, handleSubmit, setValue } = useForm();

  const getServiceProvider = async () => {
    try {
      setisLoading(true);
      const res = await axios.get(
        `${baseUrl}/serviceproviders/serviceprovider/` + id
      );
      if (res.data && typeof res.data.data === "object") {
        setspData(res.data.data);
        // setLoading(false);
        setValue("Name", res.data.data.Name);
        setValue("Contact", res.data.data.Contact);
        setValue("Email", res.data.data.Email);
      } else {
        throw new Error("Invalid data format returned from the API");
      }
    } catch (error) {
      alert("Error fetching Service Provider data");
    } finally {
      setisLoading(false);
    }
  };

  useEffect(() => {
    getServiceProvider();
  }, []);

  const submitHandler = async (data) => {
    try {
      const res = await axios.put(
        `${baseUrl}/serviceproviders/serviceprovider/` + id,
        data
      );
      if (res.status === 200) {
        setspData(res.data.data);
        setIsEditing(false);
        getServiceProvider();
      }
    } catch (error) {
      console.log("Error", error);
    }
  };

  return (
    <div className="service-list-container">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <ThemeProvider theme={theme}>
            <Container maxWidth="md" sx={{ marginTop: 4, marginBottom: 4 }}>
              <Paper
                elevation={3}
                sx={{
                  p: 4,
                  borderRadius: 10,
                  backgroundColor: "#f0f8ff",
                  boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.1)",
                }}
              >
                <Grid container spacing={4}>
                  {/* Existing Profile Card Section */}
                  <Grid item xs={12} sm={3}>
                    <Paper
                      elevation={3}
                      sx={{
                        p: 2,
                        textAlign: "center",
                        borderRadius: 8,
                        backgroundColor: "#fafafa",
                        height: "fit-content",
                        minHeight: 180,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {isLoading ? (
                        <>
                          <Skeleton
                            variant="circular"
                            width={120}
                            height={120}
                            animation="pulse"
                            sx={{ borderRadius: "50%" }}
                          />
                          <Skeleton
                            variant="text"
                            width="90%"
                            animation="wave"
                          />
                          <Skeleton
                            variant="text"
                            width="70%"
                            animation="wave"
                          />
                        </>
                      ) : (
                        <>
                          <Avatar
                            src={avtarImage}
                            sx={{ width: 120, height: 120, mb: 2 }}
                          />
                          <Typography
                            variant="h6"
                            gutterBottom
                            sx={{
                              fontWeight: "bold",
                              letterSpacing: "0.5px",
                              color: "#333",
                            }}
                          >
                            {spData && spData.Name}
                          </Typography>
                        </>
                      )}
                    </Paper>
                  </Grid>
                  {/* Existing Profile Info Section */}
                  <Grid item xs={12} sm={9}>
                    <Typography
                      variant="h4"
                      gutterBottom
                      align="center"
                      sx={{
                        fontWeight: "bold",
                        letterSpacing: "0.5px",
                        color: "#333",
                      }}
                    >
                      Your Profile
                    </Typography>
                    <Divider />
                    {isLoading ? (
                      <>
                        <Skeleton variant="text" animation="wave" />
                        <Skeleton variant="text" animation="wave" />
                        <Skeleton variant="text" width="60%" animation="wave" />
                        <Skeleton variant="text" animation="wave" />
                        <Skeleton variant="text" width="80%" animation="wave" />
                      </>
                    ) : (
                      <>
                        {spData && (
                          <>
                            {isEditing ? (
                              <form onSubmit={handleSubmit(submitHandler)}>
                                <Box sx={{ mt: 2 }}>
                                  <TextField
                                    fullWidth
                                    label="Name"
                                    name="Name"
                                    multiline
                                    variant="outlined"
                                    {...register("Name")}
                                  />
                                  <TextField
                                    fullWidth
                                    label="Contact"
                                    name="Contact"
                                    variant="outlined"
                                    sx={{ mt: 2 }}
                                    {...register("Contact")}
                                  />
                                  <TextField
                                    fullWidth
                                    label="Email"
                                    name="Email"
                                    variant="outlined"
                                    sx={{ mt: 2 }}
                                    {...register("Email")}
                                  />
                                </Box>
                                <Box
                                  sx={{ mt: 4 }}
                                  display="flex"
                                  justifyContent="center"
                                >
                                  <Button
                                    type="submit"
                                    variant="contained"
                                    color="primary"
                                    startIcon={<SaveIcon />}
                                    sx={{
                                      borderRadius: 20,
                                      textTransform: "none",
                                      mr: 2,
                                      px: 4,
                                    }}
                                  >
                                    Save
                                  </Button>
                                  <Button
                                    variant="contained"
                                    color="error"
                                    startIcon={<CancelIcon />}
                                    onClick={() => setIsEditing(false)}
                                    sx={{
                                      borderRadius: 20,
                                      textTransform: "none",
                                      px: 4,
                                    }}
                                  >
                                    Cancel
                                  </Button>
                                </Box>
                              </form>
                            ) : (
                              <Box sx={{ mt: 2 }}>
                                <Typography
                                  variant="body1"
                                  gutterBottom
                                  sx={{ lineHeight: "1.6", color: "#333" }}
                                >
                                  <strong>Username:</strong> {spData.Name}
                                </Typography>
                                <Typography
                                  variant="body1"
                                  gutterBottom
                                  sx={{ lineHeight: "1.6", color: "#333" }}
                                >
                                  <strong>Contact:</strong> {spData.Contact}
                                </Typography>
                                <Typography
                                  variant="body1"
                                  sx={{ lineHeight: "1.6", color: "#333" }}
                                >
                                  <strong>Email:</strong> {spData.Email}
                                </Typography>
                              </Box>
                            )}
                          </>
                        )}
                      </>
                    )}
                    <Box sx={{ mt: 2 }} display="flex" justifyContent="center">
                      <Button
                        onClick={() => setIsEditing(!isEditing)}
                        variant="contained"
                        color="primary"
                        startIcon={isEditing ? <CancelIcon /> : <EditIcon />}
                        sx={{ borderRadius: 20, textTransform: "none" }}
                      >
                        {isEditing ? "Cancel" : "Edit Profile"}
                      </Button>
                    </Box>
                  </Grid>

                  <Box mt={4}>
                    <Divider />
                  </Box>
                  <Box mt={4}>
                    <Typography
                      ml={3}
                      variant="h5"
                      gutterBottom
                      sx={{
                        fontWeight: "bold",
                        letterSpacing: "0.5px",
                        color: "#333",
                      }}
                    >
                      Connect Your Socials Here ❤
                    </Typography>
                    <Box
                      ml={3}
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Button
                        variant="contained"
                        color="primary"
                        startIcon={<FacebookIcon />}
                        sx={{
                          borderRadius: 20,
                          textTransform: "none",
                          marginRight: 2,
                          "&:hover": {
                            backgroundColor: "#3b5998",
                          },
                        }}
                      >
                        Connect with Facebook
                      </Button>
                      <Button
                        variant="contained"
                        color="info"
                        startIcon={<TwitterIcon />}
                        sx={{
                          borderRadius: 20,
                          textTransform: "none",
                          marginRight: 2,
                          "&:hover": {
                            backgroundColor: "#1da1f2",
                          },
                        }}
                      >
                        Connect with Twitter
                      </Button>
                      <Button
                        variant="contained"
                        color="error"
                        startIcon={<InstagramIcon />}
                        sx={{
                          borderRadius: 20,
                          textTransform: "none",
                          "&:hover": {
                            background:
                              "linear-gradient(45deg, #405DE6, #5851DB, #833AB4, #C13584, #E1306C, #FD1D1D, #F56040, #F77737)",
                            transition: "background 0.3s ease-in-out",
                          },
                        }}
                      >
                        Connect with Instagram
                      </Button>
                    </Box>
                  </Box>
                  <Box mt={4}>
                    <Typography
                      ml={3}
                      variant="h5"
                      gutterBottom
                      sx={{
                        fontWeight: "bold",
                        letterSpacing: "0.5px",
                        color: "#333",
                      }}
                    >
                      Help and Support
                    </Typography>
                    <Box mt={2}>
                      <Typography
                        ml={3}
                        variant="body1"
                        gutterBottom
                        sx={{ lineHeight: "1.6", color: "#333" }}
                      >
                        For any queries or assistance, please contact our
                        support team at support@localservice.com.
                      </Typography>
                    </Box>
                  </Box>
                  <Grid container justifyContent="center" alignItems="center">
                    <Box sx={{ textAlign: "center" }}>
                      <Box sx={{ mt: 2 }}>
                        <Typography variant="body2" color="textSecondary">
                          © 2024 Local Service. All rights reserved.
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                          Terms of Service | Privacy Policy
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
              </Paper>
            </Container>
          </ThemeProvider>
        </>
      )}
    </div>
  );
};
