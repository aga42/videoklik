import React from "react";

export const InputContainer: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <div className="border border-gray-200 p-geist rounded-geist bg-fuchsia-200 flex flex-col">
      {children}
    </div>
  );
};
