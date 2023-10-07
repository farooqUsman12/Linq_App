interface IProps {
  btnText: string;
  btnClasses?: string;
  handler?: () => void;
}

const Button = ({ btnText, btnClasses = '', handler = () => {} }: IProps) => {
  return (
    <button
      type="button"
      className={` flex h-auto w-full items-center justify-center rounded-xl py-[15px] text-center 
      font-NunitoRegular text-base font-normal xl:w-[222px] 
      ${btnClasses}`}
      onClick={handler}
    >
      <p className="mx-auto">{btnText}</p>
    </button>
  );
};

export default Button;
