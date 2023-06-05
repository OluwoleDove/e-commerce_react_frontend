import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import signupImage from "../img/welcome-image.jpg";
import "../index.css";

function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Create a user with email and password using Firebase Authentication
      // await auth.createUserWithEmailAndPassword(
      //   formData.email,
      //   formData.password
      // );

      // Redirect to home page after successful signup
      navigate("/");
    } catch (error) {
      console.log("Error signing up:", error);
      // Handle signup error, e.g., display error message to the user
    }
  };

  const handleGoogleSignup = async () => {
    try {
      // Sign up with Google using Firebase Authentication
      // const provider = new auth.GoogleAuthProvider();
      // await auth.signInWithPopup(provider);

      // Redirect to home page after successful signup
      navigate("/");
    } catch (error) {
      console.log("Error signing up with Google:", error);
      // Handle signup error, e.g., display error message to the user
    }
  };

  const handleFacebookSignup = async () => {
    try {
      // Sign up with Facebook using Firebase Authentication
      // const provider = new auth.FacebookAuthProvider();
      // await auth.signInWithPopup(provider);

      // Redirect to home page after successful signup
      navigate("/");
    } catch (error) {
      console.log("Error signing up with Facebook:", error);
      // Handle signup error, e.g., display error message to the user
    }
  };

  return (
    <div className="signup-container">
      <Helmet>
        <title>Signup - Fashlinks</title>
      </Helmet>
      <div className="signup-image-container">
        <img src={signupImage} alt="Welcome" className="signup-image" />
      </div>
      <div className="signup-form-container">
        <h1>Signup</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </Form.Group>
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
          <Button type="submit">Sign up</Button>
        </Form>
        <div className="signup-buttons-container">
          <Button onClick={handleGoogleSignup}>Sign up with Google</Button>
          <Button onClick={handleFacebookSignup}>Sign up with Facebook</Button>
        </div>
      </div>
    </div>
  );
}

export default Signup;
