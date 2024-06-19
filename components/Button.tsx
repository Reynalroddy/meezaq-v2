import React from "react";
import { Button } from "@/components/ui/button";
import { LoaderCircleIcon } from "lucide-react";
import { btnProps } from "@/utils/types";
const CustomButton = ({
  variant,
  label,
  fullWidth,
  onClick,
  loading,
}: btnProps) => {
  //   const { pending } = useFormStatus();
  return (
    <Button
      variant={variant}
      disabled={loading}
      className={fullWidth ? "w-full" : ""}
      onClick={onClick}
    >
      {loading && <LoaderCircleIcon className="mr-2 h-4 w-4 animate-spin" />}
      {label}
    </Button>
  );
};

export default CustomButton;
