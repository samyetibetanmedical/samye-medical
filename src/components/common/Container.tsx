import { cn } from "@/lib/utils";

const Container = ({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("w-full max-w-7xl mt-5 md:mt-15 mx-auto ", className)} {...props}>
      {children}
    </div>
  );
};

export { Container };
