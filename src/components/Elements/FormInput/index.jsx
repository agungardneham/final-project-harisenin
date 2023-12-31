import Input from "./Input";
import Label from "./Label";

const FormInput = ({
  htmlFor,
  labelClass,
  children,
  type,
  name,
  placeholder,
  autoComplete,
  spellCheck,
  inputClass,
  onChange,
}) => {
  return (
    <div className="auth-form__item">
      <Label htmlFor={htmlFor} className={labelClass}>
        {children}
      </Label>
      <Input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        autoComplete={autoComplete}
        spellCheck={spellCheck}
        className={inputClass}
        onChange={onChange}
      />
    </div>
  );
};

export default FormInput;
