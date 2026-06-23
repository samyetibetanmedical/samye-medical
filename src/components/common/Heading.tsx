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
        `font-semibold ${as === "h1" ? "text-3xl md:text-5xl" : as === "h2" ? "text-2xl md:text-4xl" : "text-xl md:text-3xl"} mx-auto text-center md:max-w-3xl`,
        className,
      )}
    >
      {children}
    </Tag>
  );
};

export { Heading };
