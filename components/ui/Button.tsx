import React from "react";

interface ButtonProps {
  children: React.ReactNode; // Correct type for children
  type: "button" | "submit" | "reset"; // Can be 'button', 'submit', or 'reset'
  fn?: () => void; // The function to be executed when the button is clicked
  loading?: boolean;
  disabled?: boolean;
  style:
    | "danger"
    | "nobg"
    | "primary"
    | "reverse"
    | "reverseLight"
    | "secondary"
    | "disabled"
    | "tertiary";
  css?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  type,
  fn,
  loading,
  disabled,
  style,
  css,
}) => {
  return (
    <button
      onClick={fn}
      disabled={loading || disabled} // Disable the button when loading or manually disabled
      type={type}
      className={`flex h-12 items-center justify-center whitespace-nowrap rounded-[99px] px-[16.29px] py-[9.55px] text-[12px] font-medium transition-all duration-200 ease-out cursor-pointer hover:-translate-y-px hover:shadow-[0px_6px_16px_0px_#0000001F] active:translate-y-0 active:scale-[0.98] disabled:pointer-events-none disabled:hover:translate-y-0 disabled:hover:shadow-none motion-reduce:transition-none motion-reduce:hover:translate-y-0 motion-reduce:active:scale-100 ${css} ${
        style === "danger" && "bg-[#5B805F] text-white"
      } ${
        style === "nobg" &&
        "border-[1px] border-[#FDFBF7] bg-transparent text-[#FDFBF7]"
        } ${style === "primary" && "bg-[#FDFBF7] text-[#1C2A38]"} ${
        style === "secondary" && "bg-[#D2A44929] border-[0.4px] border-[#D2A449]"
      } ${
        style === "disabled" && "bg-[#0000001A] text-text-strongInverse"
      } ${style === "reverse" && "bg-[#D2A44929] border-[0.4px] border-[#D2A449]"} ${style === "reverseLight" && "border-[0.81px] border-stroke-strong bg-fill-weakerInverse hover:bg-[#51515114] hover:shadow-raised"} ${
        style === "tertiary" && "bg-[#5B805F]"
      }
      `} // Add your button styles here
    >
      {children}
    </button>
  );
};

export default Button;
