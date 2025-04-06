import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // useNavigate to handle navigation
import "./CreateUser.css";

function CreateUser() {
  const [formValues, setFormValues] = useState({
    Name: "",
    Email: "",
    Password: "",
    Title: "",
  });

  const [emailHasError, setEmailHasError] = useState(false);
  const [nameIsRequired, setNameIsRequired] = useState(false);
  const [passwordIsRequired, setPasswordIsRequired] = useState(false);

  const navigate = useNavigate();

  // Email validation regex
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const validateForm = () => {
    if (!formValues.Name || !formValues.Email || !formValues.Password) {
      setNameIsRequired(!formValues.Name);
      setEmailHasError(!formValues.Email || !emailRegex.test(formValues.Email));
      setPasswordIsRequired(!formValues.Password);
      return false;
    }
    return true;
  };

  const submitForm = async (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    if (validateForm()) {
      try {
        const res = await axios.post("https://fakestoreapi.com/users", {
          name: {
            firstname: formValues.Name.split(" ")[0],
            lastname: formValues.Name.split(" ")[1] || "",
          },
          email: formValues.Email,
          password: formValues.Password,
          title: formValues.Title,
        });

        console.log(res); // Check if res is coming in
        if (res.status === 200) {
          // Navigate to the desired page after form submission (for example, "Profile" page)
          navigate("/profile"); // Change "/profile" to your desired page
        }
      } catch (error) {
        console.error(error); // Handle any errors
      }
    }
  };

  // Handle input changes and validation
  const handleOnChange = (event) => {
    setEmailHasError(false);
    setNameIsRequired(false);
    setPasswordIsRequired(false);

    if (event.target.name === "Email") {
      if (!emailRegex.test(event.target.value)) {
        setEmailHasError(true);
      }
    }

    if (event.target.name === "Name") {
      if (!event.target.value) {
        setNameIsRequired(true);
      }
    }

    if (event.target.name === "Password") {
      if (!event.target.value) {
        setPasswordIsRequired(true);
      }
    }

    setFormValues((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <Box
      component="form"
      sx={{ "& .MuiTextField-root": { m: 1, width: "25ch" } }}
      noValidate
      autoComplete="off"
      onSubmit={submitForm} // Call the submitForm function when the form is submitted
    >
      <h1>Create User</h1>
      {/* Name Field */}
      <TextField
        name="Name"
        error={nameIsRequired}
        helperText={nameIsRequired ? "Name is required" : ""}
        onChange={handleOnChange}
        required
        label="Name"
      />

      {/* Email Field */}
      <TextField
        name="Email"
        error={emailHasError}
        helperText={emailHasError ? "Please enter a valid email" : ""}
        onChange={handleOnChange}
        required
        label="Email"
      />

      {/* Password Field */}
      <TextField
        name="Password"
        error={passwordIsRequired}
        helperText={passwordIsRequired ? "Password is required" : ""}
        onChange={handleOnChange}
        required
        label="Password"
        type="password"
      />

      {/* Title Field (optional) */}
      <TextField
        name="Title"
        onChange={handleOnChange}
        label="Title (optional)"
      />

      {/* Submit Button */}
      <Button type="submit" variant="contained" color="primary">
        Create User
      </Button>
    </Box>
  );
}

export default CreateUser;
