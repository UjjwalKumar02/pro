interface Props {
  name: string;
  variant: "primary" | "secondary";
}

export default function SkillBox({ name, variant }: Props) {
  const variantStyles = {
    primary: "bg-black px-4 py-1 rounded-lg text-gray-100 font-medium text-sm",
    secondary:
      "bg-blue-50 px-3 py-1 rounded-lg text-gray-600 font-medium text-xs border border-gray-300",
  };
  return <p className={`${variantStyles[variant]}`}>{name}</p>;
}
