import { cn } from "@/lib/utils";

const Heading = ({
  as = "h2",
  className,
  children,
}: {
  as: "h1" | "h2" | "h3";
  className?: string;
  children: React.ReactNode;
}) => {
  const Tag = as;
  return (
    <Tag
      className={cn(
        `font-semibold ${as === "h1" ? "text-5xl" : as === "h2" ? "text-4xl" : "text-3xl"} mx-auto text-center max-w-3xl`,
        className,
      )}
    >
      {children}
    </Tag>
  );
};

export { Heading };
