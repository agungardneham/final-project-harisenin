import Navbar from "../components/Layouts/Navbar";
import Anchor from "../components/Elements/Anchor";
import { useRouteError } from "react-router-dom";
import useNavbar from "../hooks/useNavbar";

const ErrorPage = () => {
  const error = useRouteError();
  const { navBg } = useNavbar();

  return (
    <>
      <Navbar bg={navBg} />
      <main className="max-w-screen error">
        <div className="error__container">
          <div className="flex flex-col items-center">
            <div className="text-[5rem] font-montserrat text-[#ff5733] font-bold text-center">
              Sorry!
            </div>
            <div className="text-[2rem] font-lato text-[#1ABC9C] font-semibold text-center">
              Unexpected error has been occured
            </div>
            <div className="text-[1.5rem] font-medium font-lato text-center">
              Go back to{" "}
              <Anchor href="/" className="text-[#ff5733]">
                Main Page
              </Anchor>
            </div>
            <div className="font-lato font-normal text-[1rem] text-center">
              Error details: {error.statusText || error.message}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default ErrorPage;
