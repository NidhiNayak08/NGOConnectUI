import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #445d48;
  height: 100vh;
`;

const Form = styled.form`
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  max-width: 500px;
  width: 100%;
  margin-top: 40px;
`;

const Title = styled.h2`
  margin: 20px;
  font-weight: bold;
  text-align: center;
`;

const InputField = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`;

const Label = styled.label`
  font-weight: bold;
  margin-bottom: 5px;
`;

const Input = styled.input`
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 10px;
  font-size: 16px;
`;

const Button = styled.button`
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  color: #fff;
  cursor: pointer;
  font-size: 16px;
  padding: 10px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

function Signup() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    contactNo: "",
    location: "",
    profilePic: null, // Store the file object
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      profilePic: file,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can submit the form data to your server or perform any other desired actions.
    console.log(formData);
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Title>Sign Up</Title>
        
        <InputField>
          <Label>Full Name:</Label>
          <Input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </InputField>

        <InputField>
          <Label>Contact Number:</Label>
          <Input
            type="tel"
            name="contactNo"
            value={formData.contactNo}
            onChange={handleChange}
          />
        </InputField>

        <InputField>
          <Label>Location:</Label>
          <Input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
          />
        </InputField>

        <InputField>
          <Label>Email:</Label>
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </InputField>

        <InputField>
          <Label>Password:</Label>
          <Input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </InputField>
        <InputField>
          <Label>Profile Picture:</Label>
          <Input type="file" name="profilePic" onChange={handleFileChange} />
        </InputField>
        <Button type="submit">Sign Up</Button>
      </Form>
    </Container>
  );
}

export default Signup;
