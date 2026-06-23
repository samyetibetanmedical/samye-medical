const Heading = ({
  as = "h2",
  children,
}: {
  as: "h1" | "h2" | "h3";
  children: React.ReactNode;
}) => {
  const Tag = as;
  return (
    <Tag className={`font-semibold ${as === "h1" ? "text-5xl" : as === "h2" ? "text-4xl" : "text-3xl"} mx-auto text-center max-w-3xl`}>
      {children}
    </Tag>
  );
};

export { Heading };
