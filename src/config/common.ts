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
    address:
      "house no 7, Block J, opposite F Block, Block F, Rajouri Garden, Delhi, 110027",
    contact: "+91 9217756674, +91 9211424104",
    consultation: "Monday to Sunday, Closed Wednesday",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.504972770728!2d77.123193!3d28.644595000000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d03001bbfcd39%3A0x89ce02d6723ebbe!2sSamye%20Tibetan%20Traditional%20Medical%20Centre!5e0!3m2!1sen!2sin!4v1782227698091!5m2!1sen!2sin",
  },
  {
    state: "Meghalaya",
    address: "Civil Road, Sector 2, Bordoloi Nagar, Tinsukia, Assam 786125",
    contact: "+91 7627900501",
    consultation: "Monday to Sunday, Closed Wednesday",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3625810.3166703642!2d91.88361382528944!3d27.44339623045866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x373f6bf22ac84867%3A0x2543918e51e52d1b!2sSamye%20Tibetan%20Medical%20Centre%2C%20Tinsukia%2C%20Assam!5e0!3m2!1sen!2sin!4v1782227823509!5m2!1sen!2sin",
  },
  {
    state: "Arunachal Pradesh",
    address:
      "5/1, near post office, area, Banderdawa, Arunachal Pradesh 791123",
    contact: "+91 9707942039",
    consultation: "Monday to Sunday, Closed Wednesday",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3551.510645209526!2d93.8242643!3d27.1087217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3746aba9d47fce0b%3A0x22fad227ccd52ab0!2sSamye%20Tibetan%20Traditional%20Medical%20Treatment%20Centre!5e0!3m2!1sen!2sin!4v1782227761132!5m2!1sen!2sin",
  },
];

export const doctors = [
  { id: 1, docName: "Dr. Lhamo Dolma (BSRMS)", imgSrc: "/assets/doc-1.jpeg" },
  { id: 2, docName: "Dr. Shawo (BSRMS)", imgSrc: "/assets/doc-5.avif" },
  {
    id: 3,
    docName: "Dr. Rinzin Tsewang. (BSRMS)",
    imgSrc: "/assets/doc-4.jpeg",
  },
  { id: 4, docName: "Dr. Dorje Dakpa (BSRMS)", imgSrc: "/assets/doc-6.avif" },
  { id: 5, docName: "Dr. Prema Wangmo (BSRMS)", imgSrc: "/assets/doc-3.jpeg" },
  {
    id: 6,
    docName: "Dr. Thupten Rabgyal (BSRSMS)",
    imgSrc: "/assets/doc-2.avif",
  },
  { id: 7, docName: "Dr. Jigme Chokey (BSRSMS)", imgSrc: "/assets/doc-7.jpeg" },
  {
    id: 8,
    docName: "Dr. Rinchen Dhondup (BSRSMS)",
    imgSrc: "/assets/doc-8.jpeg",
  },
];

export const medicalCamps = [
  "/assets/camp-1.jpeg",
  "/assets/camp-3.jpeg",
  "/assets/camp-5.jpeg",
  "/assets/camp-4.jpeg",
  "/assets/camp-6.jpeg",
  "/assets/camp-2.jpeg",
];


  export const testimonials = [
    { id: 1, videoSrc: "" , description: "Mr. Om Hari, a chronic stroke survivor, endured years of conventional treatment with limited success and adverse secondary effects, including renal calculi. Following two months of integrative care at Samye Tibetan Medical Center, he has achieved remarkable clinical improvement in both neurological and renal health. He now advocates for the Sowa Rigpa holistic system."},
    { id: 2, videoSrc: "" , description: "Mr. Joram Tupan, a resident of Arunachal Pradesh, utilized our specialized tele-consultation services prior to the establishment of our local branch in 2024. Presenting with Type 2 Diabetes, hyperuricemia, and respiratory distress, he experienced a complete resolution of symptoms through our personalized herbal protocols. His success underscores the vital importance of adhering to the specialized dietary regimens prescribed by our resident Amchi."},
    { id: 3, videoSrc: "" , description: "A patient from Guwahati, Assam, sought intervention for chronic neurological dysfunction and persistent fatigue. Having found no relief in conventional allopathic medicine, she underwent a comprehensive treatment plan at our center involving Sowa Rigpa herbal science, acupuncture, and cupping therapy. Within thirty days, she reported an eighty percent restoration of her health and continues her recovery under our care."},
    { id: 4, videoSrc: "" , description: "We are honored to support a father and daughter from Guwahati, Assam. The daughter sought treatment for severe hypertension and diabetes, while the father required hepatic support. Following a structured multi-week therapeutic intervention at Samye Tibetan Medical Center, both patients have demonstrated significant clinical stabilization and rapid physiological improvement."},
    { id: 5, videoSrc: "" , description: "The recovery of Manish Kumar from Palam, Delhi, represents a profound clinical milestone. Diagnosed with advanced malignant brain cancer and experiencing paralysis, he was given a grave prognosis by traditional hospitals. After initiating treatment at our Delhi center, he regained motor function within one week. He has transitioned from total dependency to performing daily tasks independently."},
    { id: 6, videoSrc: "" , description: "A couple from Udalguri, Assam, sought treatment for chronic metabolic and cardiovascular imbalances. Under the expert clinical guidance of our practitioners, both have successfully managed their blood pressure and glycemic levels using our proprietary herbal formulations, which provide therapeutic benefits without the risk of adverse pharmacological side effects."},
    { id: 7, videoSrc: "" , description: "A resident of Jagir Road, Assam, presented at our Guwahati facility with chronic gastritis and Irritable Bowel Syndrome. Following a thirty-day course of traditional Tibetan herbal therapeutics, she has observed a substantial reduction in gastrointestinal symptoms and an overall improvement in her metabolic well-being."},
    { id: 8, videoSrc: "" , description: "The son of a long-term patient testifies to his mother's recovery from debilitating spinal pathologies that persisted for seven years despite diverse medical interventions. After transitioning to our Guwahati center, she achieved an eighty percent improvement in spinal mobility and comfort within one month, continuing her rehabilitation with our dedicated medical team."},
  ]