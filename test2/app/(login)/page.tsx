"use client";
import FormInput from "@/components/FormInput";

import handleForm from "./action";
import FormButton from "@/components/FormButton";
import { useActionState } from "react";

export default function Home() {
  const [state, action] = useActionState(handleForm, null as any);
  return (
    <div className="flex  flex-col items-center justify-center h-screen w-full">
      <h1>hello</h1>
      <form action={action} className="flex flex-col gap-2 p-4 ">
        <FormInput
          type="email"
          name="email"
          placeholder="이메일을 입력해주세요"
          required
          errors={[]}
        />
        <FormInput
          type="text"
          name="nickName"
          placeholder="닉네임을 입력해주세요"
          required
          errors={[]}
        />
        <FormInput
          type="password"
          name="password"
          placeholder="패스워드를 입력해주세요"
          required
          errors={state?.errors ?? []}
        />
        {state?.success && <p className="text-green-500">로그인 성공.</p>}
        <FormButton text="로그인" />
      </form>
    </div>
  );
}