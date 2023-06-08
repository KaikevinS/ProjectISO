import React from "react";

const CustomInput = (props) => {
  const { id, title, className } = props;
  const [focus, setFocus] = React.useState(false);

  return (
    <div className={`flex items-center border-b ${focus ? "border-red-main" : "border-gray-divider"} py-2.5 transition-all`}>
      <label htmlFor={id} className="text-sm text-gray-disabledText w-[150px] inline-block">
        {title}
      </label>
      <input {...props} className={`flex-1 focus:outline-0 text-sm text-black-main appearance-none placeholder:text-gray-disabledText ${className}`} onFocus={() => setFocus(true)} onBlur={() => setFocus(false)} />
    </div>
  );
};

export default CustomInput;
