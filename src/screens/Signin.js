import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import signinImage from "../img/welcome-image.jpg";
import "../index.css";

function Signin() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Sign in with email and password using Firebase Authentication
      // await auth.signInWithEmailAndPassword(formData.email, formData.password);

      // Redirect to home page after successful sign-in
      navigate("/");
    } catch (error) {
      console.log("Error signing in:", error);
      // Handle sign-in error, e.g., display error message to the user
    }
  };

  const handleGoogleSignin = async () => {
    try {
      // Sign in with Google using Firebase Authentication
      // const provider = new auth.GoogleAuthProvider();
      // await auth.signInWithPopup(provider);

      // Redirect to home page after successful sign-in
      navigate("/");
    } catch (error) {
      console.log("Error signing in with Google:", error);
      // Handle sign-in error, e.g., display error message to the user
    }
  };

  const handleFacebookSignin = async () => {
    try {
      // Sign in with Facebook using Firebase Authentication
      // const provider = new auth.FacebookAuthProvider();
      // await auth.signInWithPopup(provider);

      // Redirect to home page after successful sign-in
      navigate("/");
    } catch (error) {
      console.log("Error signing in with Facebook:", error);
      // Handle sign-in error, e.g., display error message to the user
    }
  };

  return (
    <div className="signin-container">
      <Helmet>
        <title>Signin - Fashlinks</title>
      </Helmet>
      <div className="signin-image-container">
        <img src={signinImage} alt="Welcome" className="signin-image" />
      </div>
      <div className="signin-form-container">
        <h1>Signin</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Button type="submit">Sign in</Button>
        </Form>
        <div className="signin-buttons-container">
          <Button onClick={handleGoogleSignin}>Sign in with Google</Button>
          <Button onClick={handleFacebookSignin}>Sign in with Facebook</Button>
        </div>
      </div>
    </div>
  );
}

export default Signin;
