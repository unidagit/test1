"use server";

import { z } from "zod";

const checkEmail = (email: string) => email.includes("@zod.com");

const formSchema = z.object({
  email: z.string().email().refine(checkEmail, "@zod.com을 포함해야 합니다"),
  nickName: z.string().min(5, "5글자 이상이어야 합니다"),
  password: z
    .string()
    .min(10, "10글자 이상이어야 합니다")
    .refine(
      (value) => /\d/.test(value),
      "비밀번호에는 숫자가 1자리 이상 포함되어야 합니다"
    ),
});

export default async function handleForm(prevState: any, formData: FormData) {
  const data = {
    email: formData.get("email"),
    nickName: formData.get("nickName"),
    password: formData.get("password"),
  };

  const result = formSchema.safeParse(data);
  if (!result.success) {
    return result.error.flatten();
  }
}
