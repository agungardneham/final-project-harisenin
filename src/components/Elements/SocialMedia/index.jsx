import Anchor from "../Anchor";
import Img from "../Img";

const SocialMedia = ({ href, className, src, alt }) => {
  return (
    <Anchor href={href} className={className}>
      <Img src={src} alt={alt} />
    </Anchor>
  );
};

export default SocialMedia;
