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
    address: "13, RG Baruah Rd, Bhaskar Nagar, Guwahati, Assam 781021",
    contact: "+91 6909276510",
    consultation: "Monday to Sunday, Closed Thursday",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28815.115175667004!2d91.93678345689897!3d25.47536840779039!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375a5b5ecd3c00d9%3A0xc88a2b6dfc169912!2sSamye%20Tibetan%20Medical%20Treatment%20Centre.!5e0!3m2!1sen!2sin!4v1782227423549!5m2!1sen!2sin",
    featured: true,
  },
  {
    state: "Delhi",
    address: "house no 7, Block J, opposite F Block, Block F, Rajouri Garden, Delhi, 110027",
    contact: "+91 9217756674, +91 9211424104",
    consultation: "Monday to Sunday, Closed Wednesday",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.504972770728!2d77.123193!3d28.644595000000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d03001bbfcd39%3A0x89ce02d6723ebbe!2sSamye%20Tibetan%20Traditional%20Medical%20Centre!5e0!3m2!1sen!2sin!4v1782227698091!5m2!1sen!2sin",
  },
  {
    state: "Meghalaya",
    address: "Civil Road, Sector 2, Bordoloi Nagar, Tinsukia, Assam 786125",
    contact: "+91 9217756674, +91 9211424104",
    consultation: "Monday to Sunday, Closed Wednesday",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3625810.3166703642!2d91.88361382528944!3d27.44339623045866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x373f6bf22ac84867%3A0x2543918e51e52d1b!2sSamye%20Tibetan%20Medical%20Centre%2C%20Tinsukia%2C%20Assam!5e0!3m2!1sen!2sin!4v1782227823509!5m2!1sen!2sin",
  },
  {
    state: "Arunachal Pradesh",
    address: "5/1, near post office, area, Banderdawa, Arunachal Pradesh 791123",
    contact: "+91 9217756674, +91 9211424104",
    consultation: "Monday to Sunday, Closed Wednesday",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3551.510645209526!2d93.8242643!3d27.1087217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3746aba9d47fce0b%3A0x22fad227ccd52ab0!2sSamye%20Tibetan%20Traditional%20Medical%20Treatment%20Centre!5e0!3m2!1sen!2sin!4v1782227761132!5m2!1sen!2sin",
  },
];
