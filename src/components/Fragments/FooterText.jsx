const FooterText = ({ type }) => {
  return (
    <div className="footer-text">
      <div className="footer-text__title">
        {type === "address" ? "Address" : "Contact"}
      </div>
      <div className="footer-text__desc">
        {type === "address" &&
          "1234 Example Street, Anycity City, Anytown State, Postal code: 12345, Undefined Country"}
        {type === "contact" && (
          <div>
            Tel: +123-456-7890
            <span className="block">Email: culinary@crossroads.com</span>
            Website: www.culinarycrossroads.com
          </div>
        )}
      </div>
    </div>
  );
};

export default FooterText;
