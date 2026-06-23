import { cn } from "@/lib/utils";
import React from "react";

const SubHeading = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return <p className={cn("max-w-3xl mx-auto text-center",className)}>{children}</p>;
};

export { SubHeading };
