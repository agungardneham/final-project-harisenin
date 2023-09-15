import SocialMedia from "../Elements/SocialMedia";

const FooterText2 = () => {
  return (
    <div className="footer-text2">
      Keep in touch with us!
      <div className="social-media__container">
        <SocialMedia
          href="#"
          className="social-media__logo1"
          src="Asset/instagram-logo.svg"
          alt="instagram logo"
        />
        <SocialMedia
          href="#"
          className="social-media__logo2"
          src="Asset/facebook-logo.svg"
          alt="facebook logo"
        />
        <SocialMedia
          href="#"
          className="social-media__logo2"
          src="Asset/twitter-logo.svg"
          alt="twitter logo"
        />
        <SocialMedia
          href="#"
          className="social-media__logo1"
          src="Asset/youtube-logo.svg"
          alt="youtube logo"
        />
      </div>
    </div>
  );
};

export default FooterText2;
