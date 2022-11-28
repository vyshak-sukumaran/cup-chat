import styled from "styled-components";
import React, { useEffect, useRef, useState } from "react";

interface WrapperProps {
  focused: boolean;
}

const Wrapper = styled.div<WrapperProps>`
  width: 100%;
  height: fit-content;
  position: relative;
  overflow: hidden;

  &::before,
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 3px;
    border-radius: 2px;
  }
  &::before {
    background-color: white;
  }
  &::after {
    transform: ${(props) =>
      props.focused ? "translateX(0)" : "translateX(-100%)"};
    background-color: var(--blue);
    transition: all 200ms ease-in;
  }
`;

const Input = styled.input`
  outline: 0;
  border: 0;
  padding: 1rem;
  width: 100%;
  box-sizing: border-box;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  background-color: var(--gray);
  font: inherit;
  color: var(--cream);

  &::placeholder {
    transition: all 200ms ease-in;
  }
  &:hover::placeholder {
    color: var(--cream) !important;
  }
  &:focus-within::placeholder {
    color: var(--blue) !important;
  }
`;

interface InputProps {
  placeholder?: string;
  name?: string;
  value?: any;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField = ({ value, placeholder, onChange, name } : InputProps) => {
  let [isFocused, setIsFocused] = useState<boolean>(false);
  const inputElemRef = useRef<HTMLInputElement>(null!);

  useEffect(() => {
    const elem = inputElemRef.current;

    const handleInputFocus = () => {
      setIsFocused(true);
    };
    const handleInputOutFocus = () => {
      setIsFocused(false);
    };

    elem.addEventListener("focus", handleInputFocus);
    elem.addEventListener("focusout", handleInputOutFocus);
    return () => {
      elem.removeEventListener("focus", handleInputFocus);
      elem.removeEventListener("focusout", handleInputOutFocus);
    };
  }, []);
  return (
    <Wrapper focused={isFocused}>
      <Input ref={inputElemRef} type="text" placeholder={placeholder} name={name} value={value} onChange={onChange} />
    </Wrapper>
  );
};

export default InputField;
