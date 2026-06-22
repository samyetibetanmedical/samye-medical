const Heading = ({
  as = "h2",
  children,
}: {
  as: "h1" | "h2" | "h3";
  children: React.ReactNode;
}) => {
  const Tag = as;
  return <Tag className="font-semibold text-4xl">{children}</Tag>;
};

export { Heading };
