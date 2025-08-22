import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { LoginForm } from "./_components/login-form";

const Page = async () => {
  const session = await auth();
  if (session) redirect("/dashboard");
  return (
    <div className="container w-full min-h-screen flex items-center justify-center ">
      <div className="max-w-[500px]">
        <LoginForm />
      </div>
    </div>
  );
};

export default Page;
