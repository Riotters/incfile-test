export const top = {
  header: "California Virtual Office Address",
  text:
    "Incfile now provides a complete California virtual address service for your business. We offer street addresses in CA where you can easily receive correspondence. Build credibility while accessing your mail through our Virtual Mailbox and mail scanning services.",
  button: [
    {
      text: "Start now",
      url: `${process.env.ORDER_URL}/form-order-now.php`,
    },
  ],
};

export const advantages = {
  header: "Advantages of a California Street Address\n" + "and Virtual Mailbox",
  text:
    "There are several advantages to having a real California address with mail scanning. They include:",
  cards: [
    {
      text:
        "Receiving correspondence from the California Secretary of State and the California Franchise Tax Board",
    },
    {
      text:
        "Building credibility with suppliers who want to do business with California-based businesses",
    },
    {
      text:
        "Getting a presence in California, even if you’re not there physically",
    },
    {
      text:
        "Reading the correspondence to your CA address wherever you are in the world, via our mail scanning service and secure web portal",
    },
    {
      text: "Keeping your personal address confidential",
    },
  ],
};

export const faqs = {
  header: "California Virtual Mailbox FAQs",
  faq: {
    items: [
      {
        question:
          "Can I use a CA virtual address as my Registered Agent address?",
        answer: `No, we do not recommend it. Generally speaking, your California Registered Agent should have a real CA street address where they can receive official, legal correspondence. If you need a Registered Agent in California, Incfile provides a <a href="/manage-your-company/registered-agent/" target="_blank">Registered Agent service</a> that will meet your needs.`,
      },
      {
        question: "In what states do you provide a Virtual Mailbox service?",
        answer:
          "We currently offer virtual addresses in the following states: AZ, CA, CO, DE, FL, GA, IL, MA, NJ, NM, NY, NV, NC, OH, OR, PA, SC, SD, TX, UT, VA, WA. We are expanding our services all the time.",
      },
    ],
  },
};
