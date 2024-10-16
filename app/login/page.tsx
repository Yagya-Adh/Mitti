"use client";
import Form from "../components/form/Form";
import NavBar from "../components/nav/NavBar";
import Footer from "../components/footer/Footer";

const Login = () => {
  return (
    <>
      <NavBar />
      <Form variant="login" />
      <Footer />
    </>
  );
};

export default Login;
