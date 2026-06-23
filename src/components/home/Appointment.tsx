"use client";

import { useMemo, useState } from "react";
import { Container } from "../common/Container";
import { Heading } from "../common/Heading";
import { SubHeading } from "../common/SubHeading";
import { FormInterface } from "@/types/commonTypes";
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { generateSlots } from "@/config/common";
import { toast } from "sonner";

const Appointment = () => {
  const [formData, setFormData] = useState<FormInterface>({
    date: undefined,
    timeSlot: "",
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const allSlots = useMemo(() => generateSlots(), []);

  const availableSlots = useMemo(() => {
    if (!formData.date) return [];

    const selectedDate = formData.date;

    const today = new Date();

    const isToday = selectedDate.toDateString() === today.toDateString();

    if (!isToday) {
      return allSlots;
    }

    const bufferTime = new Date();
    bufferTime.setMinutes(bufferTime.getMinutes() + 30);

    return allSlots.filter((slot) => {
      const [time, rawPeriod] = slot.split(" ");

      const period = rawPeriod.toUpperCase();

      let [hours, minutes] = time.split(":").map(Number);

      if (period === "PM" && hours !== 12) {
        hours += 12;
      }

      if (period === "AM" && hours === 12) {
        hours = 0;
      }

      const slotDate = new Date();

      slotDate.setHours(hours);
      slotDate.setMinutes(minutes);
      slotDate.setSeconds(0);
      slotDate.setMilliseconds(0);

      return slotDate > bufferTime;
    });
  }, [formData.date, allSlots]);

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      !formData.date ||
      !formData.timeSlot ||
      !formData.name ||
      !formData.email ||
      !formData.phone
    ) {
      toast.error("Please fill all required fields");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch("/api/appointment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Appointment request sent successfully!");

        setFormData({
          date: undefined,
          timeSlot: "",
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        toast.error("Something went wrong");
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to send appointment");
    } finally {
      setLoading(false);
    }
  };

  const btnText = loading ? "Scheduling a appointment..." : "Schedule";
  return (
    <div id="book-appointment" className="pt-15">
      <Container>
        <Heading as="h2">Schedule an Appointment</Heading>

        <SubHeading>
          Connect with our experienced Tibetan medicine practitioners and
          receive personalized guidance for your health and wellness needs.
        </SubHeading>

        <form
          className="max-w-5xl mt-5 mx-auto border-2 rounded-xl border-green-200 p-6"
          onSubmit={handleSubmit}
        >
          <Heading as="h3" className="text-left max-w-none">
            Book a Consultation
          </Heading>

          <SubHeading className="text-left max-w-none">
            Choose a convenient time and fill in your details to get started.
          </SubHeading>

          <div className="flex gap-10 mt-8">
            {/* Left Side */}
            <div className="w-1/2">
              <h4 className="font-semibold text-xl mb-4">
                Choose a Date and Time Slot
              </h4>

              <DayPicker
                mode="single"
                selected={formData.date}
                disabled={{ before: new Date() }}
                onSelect={(date) =>
                  setFormData((prev) => ({
                    ...prev,
                    date,
                    timeSlot: "",
                  }))
                }
              />

              <p className="text-sm text-gray-500 mt-3">
                All appointment times are displayed in IST (UTC +05:30)
              </p>

              {formData.date && (
                <>
                  <h5 className="font-semibold mt-6 mb-3">
                    Available Time Slots
                  </h5>

                  <div className="grid grid-cols-3 gap-3">
                    {availableSlots.map((slot) => (
                      <button
                        key={slot}
                        type="button"
                        onClick={() =>
                          setFormData((prev) => ({
                            ...prev,
                            timeSlot: slot,
                          }))
                        }
                        className={`border rounded-lg py-2 px-3 transition-all cursor-pointer ${
                          formData.timeSlot === slot
                            ? "bg-primary text-white border-primary"
                            : "hover:border-primary"
                        }`}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>

                  {availableSlots.length === 0 && (
                    <p className="text-red-500 mt-4">
                      No slots available for today.
                    </p>
                  )}
                </>
              )}
            </div>

            {/* Right Side */}
            <div className="w-1/2">
              <h4 className="font-semibold text-xl mb-4">Add your Details</h4>

              <div className="flex flex-col gap-4">
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      name: e.target.value,
                    }))
                  }
                  placeholder="Full Name"
                  className="px-4 py-3 border rounded-xl outline-none"
                />

                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      email: e.target.value,
                    }))
                  }
                  placeholder="Email Address"
                  className="px-4 py-3 border rounded-xl outline-none"
                />

                <div className="border rounded-xl px-4 py-3">
                  <PhoneInput
                    international
                    defaultCountry="IN"
                    value={formData.phone}
                    onChange={(value) =>
                      setFormData((prev) => ({
                        ...prev,
                        phone: value || "",
                      }))
                    }
                    className="border-none outline-none"
                  />
                </div>

                <textarea
                  value={formData.message}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      message: e.target.value,
                    }))
                  }
                  rows={5}
                  placeholder="Is there anything you'd like us to know before your consultation?"
                  className="px-4 py-3 border rounded-xl resize-none outline-none"
                />
              </div>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full cursor-pointer   mt-8 font-semibold text-lg py-3  ${loading ? "bg-neutral-700 " : "bg-black"} text-white rounded-xl hover:opacity-90 transition`}
          >
            {btnText}
          </button>
        </form>
      </Container>
    </div>
  );
};

export { Appointment };
