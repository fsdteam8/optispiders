import { LoginForm } from "./_components/login-form";

const Page = () => {
  return (
    <div className="container w-full min-h-screen flex items-center justify-center ">
      <div className="max-w-[500px]">
        <LoginForm />
      </div>
    </div>
  );
};

export default Page;
