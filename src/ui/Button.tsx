import { Link } from "react-router-dom";

function Button({
  children,
  disabled,
  to,
  type,
}: {
  children: React.ReactNode;
  disabled?: boolean;
  to?: string;
  type: "small" | "primary" | "secondary";
}) {
  const base = `inline-block rounded-full bg-yellow-400 font-semibold tracking-wide
        text-stone-800 uppercase transition-colors duration-300 hover:bg-yellow-300
        focus:ring focus:ring-yellow-300 focus:ring-offset-2 focus:outline-none
        disabled:cursor-not-allowed disabled:bg-slate-600`;
  const styles: {
    [key: string]: string;
  } = {
    primary: base + " px-4 py-3",
    small: base + " px-4 py-2 text-xs",
    secondary: `inline-block rounded-full border-2 border-stone-300 font-semibold tracking-wide
        text-stone-400 uppercase transition-colors duration-300 hover:bg-stone-300 hover:text-stone-800
        hover:focus:bg-stone-300 focus:text-stone-800 focus:ring focus:ring-stone-200 focus:ring-offset-2 focus:outline-none
        disabled:cursor-not-allowed disabled:bg-slate-600 px-4 py-2.5`,
  };

  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {" "}
        {children}{" "}
      </Link>
    );

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
