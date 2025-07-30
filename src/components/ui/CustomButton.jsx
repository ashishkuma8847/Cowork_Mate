
const Spinner = () => (
  <svg
    className="animate-spin h-5 w-5 text-white"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
  >
    <circle
      className="opacity-25"
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="4"
    />
    <path
      className="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8v8H4z"
    />
  </svg>
);

const CustomButton = ({
  type = 'default',
  isLoading = false,
  disabled = false,
  onClick,
  children,
  className = '',
}) => {
  const baseClasses = 'px-[32px] py-[14px] rounded-[12px]  font-[500] text-[14px] transition duration-300 flex  items-center justify-center gap-2';

  const typeClasses = {
    default: 'border border-[#383561] text-[#555555] bg-white hover:bg-gray-100',
    gradient: 'text-white bg-custom-gradient hover:brightness-110',
  };

  return (
    <button
      onClick={onClick}
      disabled={isLoading || disabled}
      className={`${baseClasses} ${typeClasses[type]} font-inter ${isLoading || disabled ? 'opacity-50 cursor-not-allowed' : ' '} ${className}`}
    >
      {isLoading ? <Spinner /> : children}
    </button>
  );
};

export default CustomButton;
