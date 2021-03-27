import React, { useRef } from "react";

import { TextInput } from "../components/auth/AuthShared";
import AuthButton from "../components/auth/AuthButton";
import AuthLayout from "../components/auth/AuthLayout";

export default function CreateAccount() {
  const lastNameRef = useRef();
  const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const onNext = (nextOne) => {
    lastNameRef?.current?.focus();
  };
  const onDone = () => {
    alert("done");
  };
  return (
    <AuthLayout>
      <TextInput
        autoFocus
        placeholder="First Name"
        placeholderTextColor="gray"
        returnKeyType="next"
        onSubmitEditing={() => onNext(lastNameRef)}
        placeholderTextColor={"rgba(255, 255, 255, 0.4)"}
      />
      <TextInput
        ref={lastNameRef}
        placeholder="Last Name"
        placeholderTextColor="gray"
        returnKeyType="next"
        onSubmitEditing={() => onNext(usernameRef)}
        placeholderTextColor={"rgba(255, 255, 255, 0.4)"}
      />
      <TextInput
        ref={usernameRef}
        placeholder="username"
        placeholderTextColor="gray"
        returnKeyType="next"
        onSubmitEditing={() => onNext(emailRef)}
        placeholderTextColor={"rgba(255, 255, 255, 0.4)"}
      />
      <TextInput
        ref={emailRef}
        placeholder="Email"
        placeholderTextColor="gray"
        keyboardType="email-address"
        returnKeyType="next"
        onSubmitEditing={() => onNext(passwordRef)}
        placeholderTextColor={"rgba(255, 255, 255, 0.4)"}
      />
      <TextInput
        ref={passwordRef}
        placeholder="Password"
        placeholderTextColor="gray"
        secureTextEntry
        returnKeyType="next"
        returnKeyType="done"
        onSubmitEditing={onDone}
        lastOne={true}
        placeholderTextColor={"rgba(255, 255, 255, 0.4)"}
      />
      <AuthButton text="Create Account" disabled={true} onPress={() => null} />
    </AuthLayout>
  );
}
