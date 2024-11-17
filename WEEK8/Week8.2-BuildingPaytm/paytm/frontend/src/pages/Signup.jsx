/* eslint-disable no-unused-vars */
import { useState } from "react";
import { BottomWarning } from "../components/BottomWarning";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { SubHeading } from "../components/SubHeading";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Signup = () => {
  const [firstName, setFirstName] = useState(" ");
  const [username, setusername] = useState(" ");
  const [lastName, setLastName] = useState(" ");
  const [password, setPassword] = useState(" ");

  return (
    <div className="bg-slate-300 h-screen flex justify-center">
      <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
          <Heading label={"Sign up"} />
          <SubHeading label={"Enter your infromation to create an account"} />
          <InputBox
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
            placeholder="John"
            label={"First Name"}
          />
          <InputBox
            onChange={(e) => {
              setLastName(e.target.value);
            }}
            label={"Last Name"}
            placeholder="Doe"
          />
          <InputBox
            onChange={(e) => {
              setusername(e.target.value);
            }}
            label={"Email"}
            placeholder="adityakanthe@gmail.com"
          />
          <InputBox
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            label={"Password"}
            placeholder="12345"
          />
          <div className="pt-4">
            <Button
              onClick={() => {
                axios.post("http://localhost:3000/api/v1/user/signup", {
                  username,
                  password,
                  firstName,
                  lastName,
                });
              }}
              label={"Sign up"}
            />
          </div>
          <BottomWarning
            label={"Already have an account?"}
            buttonText={"Sign in"}
            to={"/signin"}
          />
        </div>
      </div>
    </div>
  );
};
