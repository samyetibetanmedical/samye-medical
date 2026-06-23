const ServiceCard = ({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}) => {
  return (
    <div className=" flex flex-col border-2 gap-3  rounded-xl border-green-200 p-3">
      <div className="size-10 bg-green-200 rounded-lg items-center justify-center flex">
        <Icon className="size-6" />
      </div>
      <h3 className="text-2xl font-semibold">{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export { ServiceCard };
