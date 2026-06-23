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
        featured ? "flex gap-8 items-start" : "flex flex-col"
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
            <span className="font-semibold">Consultation Hours:</span>{" "}
            {consultation}
          </p>
        </div>
      </div>

      <div>{map}</div>
      {/* <a
          href={mapLink}
          target="_blank"
          rel="noopener noreferrer"
          className={`border border-gray-300 rounded-2xl flex items-center justify-center font-semibold text-3xl hover:bg-gray-100 transition ${
            featured ? "w-[420px] h-[220px]" : "w-full h-[160px] mt-6"
          }`}
        >
          Google Maps
        </a> */}
    </div>
  );
};

export { LocationCard };
