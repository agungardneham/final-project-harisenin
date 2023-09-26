const StrengthList = ({ number, desc }) => {
  return (
    <div className="strength-list__container">
      <div className="strength-list__number">{number}</div>
      <div className="strength-list__text">{desc}</div>
    </div>
  );
};

export default StrengthList;
