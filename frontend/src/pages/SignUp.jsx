import { useContext, useEffect, useState } from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Title from "../Components/Shared/Title";
import Form from "react-bootstrap/Form";
import { Button, Link, toast } from "../imports";
import { getError } from "../utils";
import { useLocation, useNavigate } from "react-router-dom";
import { Store } from "../Store";
import { USER_SIGNIN } from "../actions";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVerify, setPasswordVerify] = useState("");
  const navigate = useNavigate();
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { userInfo } = state;
  const { search } = useLocation();
  const redirectUrl = new URLSearchParams(search);
  const redirectValue = redirectUrl.get("redirect");
  const redirect = redirectValue ? redirectValue : "/";
  useEffect(() => {
    if (userInfo) navigate(redirect);
  }, [navigate, redirect, userInfo]);

  const submitHandler = async (e) => {
    e.preventDefault();
    if (password === passwordVerify) {
      try {
        const { data } = await axios.post("/api/v1/users/signup", {
          name: name,
          email: email,
          password: password,
        });
        ctxDispatch({ type: USER_SIGNIN, payload: data });
        localStorage.setItem("userInfo", JSON.stringify(data));
        navigate(redirect);
      } catch (error) {
        toast.error(getError(error));
      }
    } else {
      toast.error("Passwords do not match");
    }
  };
  return (
    <Container className="small-container">
      <Title title="SignUp Page" />
      <h1 className="my-3">Sign Up</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Name:</Form.Label>
          <Form.Control
            required
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
          ></Form.Control>
        </Form.Group>{" "}
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email:</Form.Label>
          <Form.Control
            required
            onChange={(e) => setEmail(e.target.value)}
            placeholder="example@example.com"
          ></Form.Control>
        </Form.Group>
        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password:</Form.Label>
          <Form.Control
            type="password"
            required
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Password"
          ></Form.Control>
        </Form.Group>
        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Confirm Password:</Form.Label>
          <Form.Control
            type="password"
            required
            onChange={(e) => setPasswordVerify(e.target.value)}
            placeholder="Verify Password"
          ></Form.Control>
        </Form.Group>
        <div className="mb-3">
          <Button type="submit">Sign Up</Button>
        </div>
        <div className="mb-3">
          Already have an account?{" "}
          <Link to={`/signin?redirect=${redirect}`}>Sign in</Link>
        </div>
      </Form>
    </Container>
  );
};

export default SignUp;
