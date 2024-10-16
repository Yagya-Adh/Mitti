"use client";
import Form from "../components/form/Form";
import NavBar from "../components/nav/NavBar";
import Footer from "../components/footer/Footer";

const PageProtected = () => {
  return (
    <>
      <NavBar />
      <Form variant="page-protected" />
      <Footer />
    </>
  );
};

export default PageProtected;
