"use client";
import Form from "../components/form/Form";
import NavBar from "../components/nav/NavBar";
import Footer from "../components/footer/Footer";

const AccessDenied = () => {
  return (
    <>
      <NavBar />
      <Form variant="access-denied" />
      <Footer />
    </>
  );
};

export default AccessDenied;
