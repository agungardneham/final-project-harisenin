const Input = ({
  type,
  name,
  placeholder,
  autoComplete = "",
  spellCheck = "",
  className,
  onChange,
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
      onChange={onChange}
      required
    />
  );
};

export default Input;
