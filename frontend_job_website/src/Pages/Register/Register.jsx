import React from "react";
import Layout from "../../Components/Form/Layout";
import FormContent from "../../Components/Form/FormContent";

const titleInput = [
  { id: 1, placeHolder: "Email Address", type: "email", label: "Email" },
  { id: 2, placeHolder: "Your Password", type: "password", label: "Password" },
  {
    id: 3,
    placeHolder: "Re-enter password",
    type: "password",
    label: "Re-enter Password",
  },
];

const Register = () => {
  return (
    <Layout>
      <FormContent
        Title={"Register"}
        titleInput={titleInput}
        titleBtn={"Sign up"}
      />
    </Layout>
  );
};

export default Register;