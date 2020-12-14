export const top = {
  header: "Colorado Virtual Office Address",
  text:
    "If you want to do business in Colorado, it makes sense to have a real Colorado street address. We’re delighted to provide a complete Virtual Mailbox and scanning service for all your Colorado-addressed business correspondence.",
  button: [
    {
      text: "Start now",
      url: `${process.env.ORDER_URL}/form-order-now.php`,
    },
  ],
};

export const advantages = {
  header: "Advantages of a Colorado Street Address\n" + "and Virtual Mailbox",
  text:
    "There are several advantages to having a real Colorado address with mail scanning. They include:",
  cards: [
    {
      text:
        "Receiving correspondence from the Colorado Secretary of State and the Colorado Department of Revenue",
    },
    {
      text:
        "Building credibility with suppliers who want to do business with Colorado-based businesses",
    },
    {
      text:
        "Getting a presence in Colorado, even if you’re not there physically",
    },
    {
      text:
        "Reading the correspondence to your CO address wherever you are in the world, via our mail scanning service and secure web portal",
    },
    {
      text: "Keeping your personal address confidential",
    },
  ],
};

export const faqs = {
  header: "Colorado Virtual Mailbox FAQs",
  faq: {
    items: [
      {
        question:
          "Can I use a CO virtual address as my Registered Agent address?",
        answer: `No, we do not recommend it. Generally speaking, your Colorado Registered Agent should have a real CO street address where they can receive official, legal correspondence. If you need a Registered Agent in Colorado, Incfile provides a <a href="/manage-your-company/registered-agent/" target="_blank">Registered Agent service</a> that will meet your needs.`,
      },
      {
        question: "In what states do you provide a Virtual Mailbox service?",
        answer:
          "We currently offer virtual addresses in the following states: AZ, CA, CO, DE, FL, GA, IL, MA, NJ, NM, NY, NV, NC, OH, OR, PA, SC, SD, TX, UT, VA, WA. We are expanding our services all the time.",
      },
    ],
  },
};
