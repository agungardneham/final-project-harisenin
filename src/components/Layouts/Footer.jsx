import FooterText from "../Fragments/FooterText";
import FooterText2 from "../Fragments/FooterText2";

const Footer = () => {
  return (
    <footer className="footer min-w-screen-lg">
      <div className="footer__container max-w-screen-lg">
        <FooterText type="address" />
        <FooterText type="contact" />
        <FooterText2 />
      </div>
    </footer>
  );
};

export default Footer;
