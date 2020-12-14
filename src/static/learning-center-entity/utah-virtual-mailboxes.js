export const top = {
  header: "Utah Virtual Office Address",
  text:
    "Incfile now provides a complete Utah virtual address service for your business. We offer street addresses in UT where you can easily receive correspondence. Build credibility while accessing your mail through our Virtual Mailbox and mail scanning services.",
  button: [
    {
      text: "Start now",
      url: `${process.env.ORDER_URL}/form-order-now.php`,
    },
  ],
};

export const advantages = {
  header: "Advantages of a Utah Street Address\n" + "and Virtual Mailbox",
  text:
    "There are several advantages to having a real Utah address with mail scanning. They include:",
  cards: [
    {
      text:
        "Receiving correspondence from the Utah Secretary of State, Division of Corporations, Department of Commerce and the Utah State Tax Commission",
    },
    {
      text:
        "Building credibility with suppliers who want to do business with Utah-based businesses",
    },
    {
      text: "Getting a presence in Utah, even if you’re not there physically",
    },
    {
      text:
        "Reading the correspondence to your UT address wherever you are in the world, via our mail scanning service and secure web portal",
    },
    {
      text: "Keeping your personal address confidential",
    },
  ],
};

export const faqs = {
  header: "Utah Virtual Mailbox FAQs",
  faq: {
    items: [
      {
        question:
          "Can I use a UT virtual address as my Registered Agent address?",
        answer: `No, we do not recommend it. Generally speaking, your Utah Registered Agent should have a real UT street address where they can receive official, legal correspondence. If you need a Registered Agent in Utah, Incfile provides a <a href="/manage-your-company/registered-agent/" target="_blank">Registered Agent service</a> that will meet your needs.`,
      },
      {
        question: "In what states do you provide a Virtual Mailbox service?",
        answer:
          "We currently offer virtual addresses in the following states: AZ, CA, CO, DE, FL, GA, IL, MA, NJ, NM, NY, NV, NC, OH, OR, PA, SC, SD, TX, UT, VA, WA. We are expanding our services all the time.",
      },
    ],
  },
};
