export const navItems = [
  { id: 1, title: "Home", link: "/" },
  { id: 2, title: "About", link: "/about" },
  { id: 3, title: "Services", link: "/services" },
  { id: 4, title: "Testimonials", link: "/testimonials" },
];

export const generateSlots = () => {
  const slots: string[] = [];

  let hour = 10;
  let minute = 0;

  while (hour < 18 || (hour === 18 && minute === 0)) {
    const date = new Date();

    date.setHours(hour, minute);

    slots.push(
      date.toLocaleTimeString("en-IN", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      }),
    );

    minute += 30;

    if (minute === 60) {
      minute = 0;
      hour++;
    }
  }

  return slots;
};
