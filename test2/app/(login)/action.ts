"use server";

export default async function handleForm(prevState: any, formData: FormData) {
  const password = formData.get("password");

  await new Promise((resolve) => setTimeout(resolve, 3000));
  if (password !== "12345") {
    return { errors: ["비밀번호가 일치하지 않습니다."], success: false };
  }

  return { errors: [], success: true };
}
