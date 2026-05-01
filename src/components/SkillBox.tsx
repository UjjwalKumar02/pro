interface Props {
  name: string;
  variant: "primary" | "secondary";
  fullWidth?: boolean;
  className?: string;
}

export default function SkillBox({
  name,
  variant,
  fullWidth,
  className,
}: Props) {
  const variantStyles = {
    primary: "bg-black px-4 py-1 rounded-lg text-gray-200 font- text-sm",
    secondary: "bg-sky-50 px-2 py-0.5 rounded-lg border border-gray-100",
  };
  return (
    <p
      className={`${className} ${variantStyles[variant]} ${fullWidth ? "w-full text-center" : ""}`}
    >
      {name}
    </p>
  );
}
