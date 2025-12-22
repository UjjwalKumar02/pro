interface Props {
  name: string;
  variant: "primary" | "secondary";
  fullWidth?: boolean
}

export default function SkillBox({ name, variant, fullWidth }: Props) {
  const variantStyles = {
    primary: "bg-black px-4 py-1.5 rounded-lg text-gray-100 font-medium text-xs",
    secondary:
      "bg-sky-50 px-3 py-1 rounded-lg text-gray-700 text-xs border border-gray-200",
  };
  return <p className={`${variantStyles[variant]} ${fullWidth ? "w-full text-center" : ""}`}>{name}</p>;
}
