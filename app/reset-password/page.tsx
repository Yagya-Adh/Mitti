"use client";
import Form from "../components/form/Form";
import NavBar from "../components/nav/NavBar";
import Footer from "../components/footer/Footer";

const ResetPassword = () => {
  return (
    <>
      <NavBar />
      <Form variant="reset-password" />
      <Footer />
    </>
  );
};

export default ResetPassword;
