const Validation = (values) => {
  console.log("he");
  let errors = {};

  if (!values.name) {
    errors.name = "User Name Required";
  } else if (values.name !== "Admin") {
    // errors.name = "Invalid UserName or Password";
  }

  if (!values.password) {
    errors.password = "Password Required";
  } else if (values.password !== "admin" || values.name !== "Admin") {
    errors.password = "Invalid UserName or Password ";
  }
  if (errors.name || errors.password) {
    return errors;
  }

  let user = { name: values.name, password: values.password };
  localStorage.setItem("user", JSON.stringify(user));

  return { success: true };
};
export default Validation;
