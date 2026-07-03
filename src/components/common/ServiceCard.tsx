const ServiceCard = ({
  icon: Icon,
  title,
  diseases,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  diseases: string[];
}) => {
  return (
    <div className="flex flex-col border-2 gap-4 rounded-xl border-green-200 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg p-5">
      <div className="size-10 bg-green-200 rounded-lg items-center justify-center flex">
        <Icon className="size-6" />
      </div>

      <h3 className="text-xl font-semibold">
        {title}
      </h3>

      <div className="flex flex-wrap gap-2">
        {diseases.map((disease, idx) => (
          <span
            key={idx}
            className="
              rounded-full 
              bg-green-50 
              border 
              border-green-200
              px-3 
              py-1
              text-sm
              text-gray-700
            "
          >
            {disease}
          </span>
        ))}
      </div>
    </div>
  );
};

export { ServiceCard };