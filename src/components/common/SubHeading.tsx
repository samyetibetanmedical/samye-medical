import React from "react";

const SubHeading = ({
  className,
  children,
}: {
  className: string;
  children: React.ReactNode;
}) => {
  return <p className="">{children}</p>;
};

export { SubHeading };
