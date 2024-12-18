import React from "react";
import { useFormStatus } from "react-dom";

export default function FormButton({ text }: { text: string }) {
  const { pending } = useFormStatus();
  return (
    <button
      className="bg-green-700 p-5 rounded-full text-white"
      disabled={pending}
    >
      {pending ? <p>로그인중</p> : text}
    </button>
  );
}
