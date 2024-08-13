import React, { useCallback } from "react";
// import { setDuration } from "../types/constants";

export const Input: React.FC<{
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
  placeholder: string;
  disabled?: boolean;
  type: string;
  maxLength: number;
  isDuration?: boolean;
}> = ({ text, setText, placeholder, disabled, type, maxLength, isDuration }) => {
  const onChange: React.ChangeEventHandler<HTMLInputElement> = useCallback(
    (e) => {
      // setText(e.currentTarget.value);
      setText(type == "string" ? e.currentTarget.value : (text == "0" ? "1" : e.currentTarget.value));
    },
    [setText],
  );

  return (
    <input
      className="leading-[1.7] block w-full rounded-geist bg-background p-geist-half text-foreground text-sm border border-unfocused-border-color transition-colors duration-150 ease-in-out focus:border-focused-border-color outline-none"
      disabled={disabled}
      name="title"
      value={type == "string" ? text : (text == "0" ? 1 : text)}
      onChange={onChange}
      placeholder={placeholder}
      maxLength={maxLength}
      min={ type == "number" ? 1 : 0 }
    />
  );
};
