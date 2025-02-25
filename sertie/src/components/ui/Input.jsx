import * as React from "react";
import { cn } from "@/lib/utils";

const Input = React.forwardRef(({ 
  className, 
  type, 
  placeholder, 
  value, 
  ...props 
}, ref) => {
  const [isFocused, setIsFocused] = React.useState(false);
  const [hasValue, setHasValue] = React.useState(Boolean(value));

  const borderColorClass = className?.split(' ').find(cls => cls.startsWith('border-')) || 'border-sertie-grey';
  const labelColorClass = borderColorClass.replace('border-', 'text-');

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);
  const handleChange = (e) => setHasValue(e.target.value.length > 0);

  const inputClasses = cn(
    "peer flex h-12 w-full rounded-sm border bg-transparent px-3 py-1 text-base shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sertie-blue focus-visible:border-0 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
    className || "border-sertie-grey text-sertie-black placeholder:text-sertie-grey",
    {
      "border-primary": isFocused,
      "border-muted-foreground": !isFocused && !className?.includes("border-"),
    }
  );

  const labelClasses = cn(
    "absolute left-3 top-1/2 transform -translate-y-1/2 text-sm transition-all duration-200 ease-in-out",
    labelColorClass,
    {
      "text-xs -translate-y-6": isFocused || hasValue,
    }
  );

  return (
    <div className="relative w-full">
      <input
        type={type}
        className={inputClasses}
        ref={ref}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
        value={value}
        aria-label={placeholder}
        {...props}
      />
      <label
        htmlFor={props.id}
        className={labelClasses}
        style={{ pointerEvents: "none" }}
      >
        {placeholder}
      </label>
    </div>
  );
});

Input.displayName = "Input";

export { Input };