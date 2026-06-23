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


export const locations = [
  {
    state: "Assam",
    address: "RG Baruah Road, Zoo Road, Guwahati, Assam",
    contact: "+91 6909276510",
    consultation: "Monday to Sunday, Closed Thursday",
    map: "https://maps.google.com",
    featured: true,
  },
  {
    state: "Delhi",
    address: "Single J Block, Rajouri Garden, Delhi",
    contact: "+91 9217756674, +91 9211424104",
    consultation: "Monday to Sunday, Closed Wednesday",
    map: "https://maps.google.com",
  },
  {
    state: "Meghalaya",
    address: "Single J Block, Rajouri Garden, Delhi",
    contact: "+91 9217756674, +91 9211424104",
    consultation: "Monday to Sunday, Closed Wednesday",
    map: "https://maps.google.com",
  },
  {
    state: "Arunachal Pradesh",
    address: "Single J Block, Rajouri Garden, Delhi",
    contact: "+91 9217756674, +91 9211424104",
    consultation: "Monday to Sunday, Closed Wednesday",
    map: "https://maps.google.com",
  },
];