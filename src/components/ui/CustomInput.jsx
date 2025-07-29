import clsx from "clsx";

const CustomInput = ({
  type = "text",                // Input type (text, password, email, number, etc.)
  icon = null,                 // React component (e.g., <MapPin />)
  image = null,                // Image URL (e.g., "/icons/location.svg")
  iconPosition = "left",      // 'left' or 'right'
  placeholder = "Enter value",
  className = "",             // Wrapper div styling
  inputClass = "",            // Input element styling
  iconClass = "w-4 h-4",      // Icon or image size
  ...props
}) => {
  
  const renderIconOrImage = () => {
    if (icon) return <span className={clsx("text-gray-500", iconClass)}>{icon}</span>;
    if (image) return <img src={image} alt="icon" className={clsx("object-contain", iconClass)} />;
    return null;
  };

  return (
    <div
      className={clsx(
        "flex items-center bg-lightGray rounded-[10px] pl-[24px] py-[12px] shadow-sm w-fit transition-all duration-300",
        iconPosition === "right" ? "flex-row-reverse" : "",
        className
      )}
    >
      {renderIconOrImage() && (
        <div className="">
          {renderIconOrImage()}
        </div>
      )}
      <input
        type={type}
        placeholder={placeholder}
        className={clsx(
          "bg-transparent outline-none border-none  font-inter text-darkGray placeholder:text-gray-500 leading-[130%] text-[10px] lg:text-lg  w-full",
          inputClass
        )}
        {...props}
      />
    </div>
  );
};

export default CustomInput;
