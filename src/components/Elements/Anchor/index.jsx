import { Link } from "react-router-dom";

const Anchor = ({ href, className, children }) => {
  return (
    <Link to={href} className={className}>
      {children}
    </Link>
  );
};

export default Anchor;
