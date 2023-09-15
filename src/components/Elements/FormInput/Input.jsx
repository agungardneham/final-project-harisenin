const Input = ({
  type,
  name,
  placeholder,
  autoComplete = "",
  spellCheck = "",
  className,
}) => {
  return (
    <input
      type={type}
      name={name}
      id={name}
      placeholder={placeholder}
      autoComplete={autoComplete}
      spellCheck={spellCheck}
      className={className}
      required
    />
  );
};

export default Input;
