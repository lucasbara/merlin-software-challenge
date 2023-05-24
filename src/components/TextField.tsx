import { useState } from "react";

type TextFieldProps = {
  name: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  value: string;
};

export function TextField({
  name,
  onChange,
  placeholder,
  value,
}: TextFieldProps) {
  const [inputValue, setInputValue] = useState(value);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    onChange && onChange(event);
  };

  return (
    <form className="flex items-center h-10 w-[30%] min-w-[10rem] text-black placeholder-light-grey p-2 rounded-lg border-2 border-light-grey focus:outline-none">
      <input
        className="w-full focus:outline-none"
        id="search"
        name={name}
        onChange={handleInputChange}
        placeholder={placeholder}
        defaultValue={inputValue}
        type="search"
      />
    </form>
  );
}
