"use client";
import Form from "../components/form/Form";
import NavBar from "../components/nav/NavBar";
import Footer from "../components/footer/Footer";

const UpdatePassword = () => {
  return (
    <>
      <NavBar />
      <Form variant="update-password" />
      <Footer />
    </>
  );
};

export default UpdatePassword;
