export const top = {
  header: "New York Virtual Office Address",
  text:
    "If you want to do business in New York, it makes sense to have a real New York street address. We’re delighted to provide a complete Virtual Mailbox and scanning service for all your New York-addressed business correspondence.",
  button: [
    {
      text: "Start now",
      url: `${process.env.ORDER_URL}/form-order-now.php`,
    },
  ],
};

export const advantages = {
  header: "Advantages of a New York Street Address\n" + "and Virtual Mailbox",
  text:
    'New York State\'s "publication requirement" means all NY LLCs need to publish a notice of their formation in their local newspapers. If your primary business address is in New York City, publication can cost up to $1500. Our virtual New York State address is in the state capital of Albany, significantly reducing the cost of publication. Other benefits of our service include:',
  cards: [
    {
      text:
        "Receiving correspondence from the New York Secretary of State and the New York Department of Taxation and Finance",
    },
    {
      text:
        "Building credibility with suppliers who want to do business with New York-based businesses",
    },
    {
      text:
        "Getting a presence in New York, even if you’re not there physically",
    },
    {
      text:
        "Reading the correspondence to your NY address wherever you are in the world, via our mail scanning service and secure web portal",
    },
    {
      text: "Keeping your personal address confidential",
    },
  ],
};

export const faqs = {
  header: "New York Virtual Mailbox FAQs",
  faq: {
    items: [
      {
        question:
          "Can I use a NY virtual address as my Registered Agent address?",
        answer: `No, we do not recommend it. Generally speaking, your New York Registered Agent should have a real NY street address where they can receive official, legal correspondence. If you need a Registered Agent in New York, Incfile provides a <a href="/manage-your-company/registered-agent/" target="_blank">Registered Agent service</a> that will meet your needs.`,
      },
      {
        question: "In what states do you provide a Virtual Mailbox service?",
        answer:
          "We currently offer virtual addresses in the following states: AZ, CA, CO, DE, FL, GA, IL, MA, NJ, NM, NY, NV, NC, OH, OR, PA, SC, SD, TX, UT, VA, WA. We are expanding our services all the time.",
      },
    ],
  },
};
