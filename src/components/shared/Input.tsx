import { Input } from "@/components/ui/input";
import { LucideIcon } from "lucide-react";
// import { useState } from "react";
interface IconInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon: LucideIcon;
  label?: string;
  showPasswordToggle?: boolean;
}

export function IconInput({
  icon: Icon,
  label,
  id,
  className,
  showPasswordToggle = false,
  ...props
}: IconInputProps) {
  //   const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="relative w-full max-w-sm">
      {/* Icon */}
      <Icon
        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none"
        size={20}
      />

      {/* Input */}
      <Input
        id={id}
        placeholder=" "
        className={`peer block w-full rounded-md border border-gray-300 bg-transparent pl-10 pt-5 pb-2 py-5 text-sm text-gray-900 focus:ring-0 ${className}`}
        {...props}
      />

      {/* Floating label (optional) */}
      {label && (
        <label
          htmlFor={id}
          className="absolute left-10 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform bg-white px-2 text-sm text-gray-500 duration-300
            peer-placeholder-shown:top-1/2 peer-placeholder-shown:left-10 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100
            peer-focus:top-2 peer-focus:left-10 peer-focus:-translate-y-4 peer-focus:scale-75"
        >
          {label}
        </label>
      )}
    </div>
  );
}
