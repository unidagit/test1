import React from "react";

type FormInputType = {
  type: string;
  name: string;
  placeholder: string;
  required: boolean;
  errors?: string[];
};

export default function FormInput({
  type,
  name,
  placeholder,
  required,
  errors = [],
}: FormInputType) {
  return (
    <div className="flex flex-col">
      <input
        className="border-2 border-gray-500 rounded-2xl focus:border-transparent outline-none  p-4"
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
      />
      {errors.map((error, i) => (
        <span className="text-red-600" key={i}>
          {error}
        </span>
      ))}
    </div>
  );
}
