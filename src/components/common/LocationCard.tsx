import { LocationCardProps } from "@/types/commonTypes";
import { Heading } from "./Heading";

const LocationCard = ({
  state,
  address,
  contact,
  consultation,
  map,
  featured,
}: LocationCardProps) => {
  return (
    <div
      className={`border border-gray-300 rounded-2xl p-6 ${
        featured
          ? "flex md:flex-row flex-col gap-8 items-start"
          : "flex flex-col"
      }`}
    >
      <div className={featured ? "flex-1" : ""}>
        <Heading as="h3" className="text-left max-w-none text-3xl mb-4">
          {state}
        </Heading>

        <div className="space-y-3">
          <p>
            <span className="font-semibold">Address:</span> {address}
          </p>

          <p>
            <span className="font-semibold">Contact:</span> {contact}
          </p>

          <p>
            <span className="font-semibold">Consultation Days:</span>{" "}
            {consultation}
          </p>
        </div>
      </div>
      <div
        className={`overflow-hidden rounded-xl border border-gray-200 ${
          featured
            ? "w-full md:w-[450px] h-[260px] shrink-0"
            : "w-full h-[220px] mt-6"
        }`}
      >
        <iframe
          src={map}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full border-0"
        />
      </div>
    </div>
  );
};

export { LocationCard };
