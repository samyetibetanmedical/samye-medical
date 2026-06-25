import Image from "next/image";
import { Heading } from "./Heading";

const DoctorCard = ({
  imgSrc,
  docName,
}: {
  imgSrc: string;
  docName: string;
}) => {
  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="relative h-80 w-full">
        <Image
          src={imgSrc}
          alt={docName}
          fill
          className="object-cover"
        />
      </div>

      <div className="p-5">
        <Heading as="h3" className="text-xl md:text-2xl">
          {docName}
        </Heading>
      </div>
    </div>
  );
};

export { DoctorCard };