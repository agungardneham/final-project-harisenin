import Anchor from "../components/Elements/Anchor";
import Navbar from "../components/Layouts/Navbar";

const AlreadyLogIn = () => {
  return (
    <div className="auth">
      <Navbar bg="bg-white shadow-md" />
      <div className="pt-20 h-screen flex flex-col items-center justify-center gap-2 bg-white">
        <h1 className="font-montserrat font-bold text-4xl text-center text-[#FF5733]">
          You are already logged in
        </h1>
        <p className="font-lato font-semibold text-2xl">
          Go back to main page{" "}
          <Anchor href="/" className="text-[#F39C12]">
            here
          </Anchor>
        </p>
      </div>
    </div>
  );
};

export default AlreadyLogIn;
