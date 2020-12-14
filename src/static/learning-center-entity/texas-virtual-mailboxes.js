export const top = {
  header: "Texas Virtual Office Address",
  text:
    "If you want to do business in Texas, it makes sense to have a real Texas street address. We’re delighted to provide a complete Virtual Mailbox and scanning service for all your Texas-addressed business correspondence.",
  button: [
    {
      text: "Start now",
      url: `${process.env.ORDER_URL}/form-order-now.php`,
    },
  ],
};

export const advantages = {
  header: "Advantages of a Texas Street Address\n" + "and Virtual Mailbox",
  text:
    "There are several advantages to having a real Texas address with mail scanning. They include:",
  cards: [
    {
      text:
        "Receiving correspondence from the Texas Secretary of State and the Texas Comptroller's office",
    },
    {
      text:
        "Building credibility with suppliers who want to do business with Texas-based businesses",
    },
    {
      text: "Getting a presence in Texas, even if you’re not there physically",
    },
    {
      text:
        "Reading the correspondence to your TX address wherever you are in the world, via our mail scanning service and secure web portal",
    },
    {
      text: "Keeping your personal address confidential",
    },
  ],
};

export const faqs = {
  header: "Texas Virtual Mailbox FAQs",
  faq: {
    items: [
      {
        question:
          "Can I use a TX virtual address as my Registered Agent address?",
        answer: `No, we do not recommend it. Generally speaking, your Texas Registered Agent should have a real TX street address where they can receive official, legal correspondence. If you need a Registered Agent in Texas, Incfile provides a <a href="/manage-your-company/registered-agent/" target="_blank">Registered Agent service</a> that will meet your needs.`,
      },
      {
        question: "In what states do you provide a Virtual Mailbox service?",
        answer:
          "We currently offer virtual addresses in the following states: AZ, CA, CO, DE, FL, GA, IL, MA, NJ, NM, NY, NV, NC, OH, OR, PA, SC, SD, TX, UT, VA, WA. We are expanding our services all the time.",
      },
    ],
  },
};
