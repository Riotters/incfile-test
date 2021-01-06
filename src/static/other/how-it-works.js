export const top = {
  header: `How It Works`,
  text: ` LLC formation, Registered Agent, compliance, and startup services — all in one place. Start your business today for $0 + state fee. Doing the busy work so you can build your big ideas. Here's how it works...`,
};

export const steps = {
  header: `3 Easy Steps`,
  list: [
    {
      header: `Find The Right Entity For You`,
      text: [
        {
          text:
            "Select an entity type and the preferred state of incorporation. Need help with state-specific formation details? Check out our",
        },
        {
          text: "LLC State Guides",
          url: "/llc-state-information/",
        },
        {
          text: "or",
        },
        {
          text: "Corporation State Guides.",
          url: "/corporation-state-information/",
        },
      ],
    },
    {
      header: `Select A Package`,
      text: `See our package options below and choose one that best suits your business needs, whether you're looking for the bare basics or more robust support. No matter what formation package you select, Incfile will be there to help you as your business grows.`,
    },
    {
      header: `Tell Us About Your Business`,
      text: `Complete the online order forms and provide information about your business and the services that will best suit your business.`,
    },
  ],
};

export const next = {
  header: `We've Received Your Order. What's Next?`,
  faq: {
    items: [
      {
        count: 1,
        question: `Review Order Details`,
        answer: `You get access to your own personal business dashboard. From there, you can review all of your order details to ensure everything is just as it should be.`,
      },
      {
        count: 2,
        question: `Name Availability Search`,
        answer: [
          {
            text:
              "A thorough name search is conducted with the state to ensure your company name is unique to you and not already taken. If you’d like to do a search for your business name now, you can use our",
          },
          {
            text: "Business Name Search tool.",
            url: "/business-name-search/",
          },
        ],
      },
      {
        count: 3,
        question: `Prepare and File Documents`,
        answer: `Articles of Incorporation (Corporations) / Organization (LLCs) are prepared and delivered to the governing state agency. We got you.`,
      },
      {
        count: 4,
        question: `Deliver Filed Documents in Your Custom Dashboard`,
        answer:
          "The filed articles along with any additional services and documents are accessible from your custom business dashboard. You’ll receive notification once they’re ready. All set!",
        text:
          "But wait — your business dashboard is not just a dashboard to access your incorporation documents. We’ve worked hard to leverage our technology team to build a useful, one-stop place for all your business needs. You can easily manage and find what you need along your business journey. We offer a suite of startup services to support businesses after formation and for the lifetime of their business, including access to more than 150 business contracts; lifetime company alerts; business formation kit; preparation and filing of taxes, including IRS Form 2553; banking resolution; statement and resignation of the incorporator; online order status tracking; express shipping.",
      },
      {
        count: 5,
        question: `Get Set for Success`,
        answer: `We offer a suite of startup services to support businesses after formation and for the lifetime of their business, including access to 25+ business contracts; lifetime company alerts; business formation kit; preparation and filing of taxes, including IRS Form 2553; banking resolution; statement and resignation of the incorporator; online order status tracking; express shipping. All of this available via your business dashboard.`,
      },
    ],
  },
};

export const essentials = {
  header: `Your startup essentials All in one place`,
  text: `Receive text and email notifications, order updates and compliance alerts from your custom business management dashboard.`,
  header2: `What next? Nurture your business`,
  text2: `Get set up with additional business services from within your business dashboard, when you need them.`,
  boxes: [
    `Bookkeeping`,
    `Business License`,
    `Banking`,
    `Domain Name`,
    `Trademark`,
    `Business Email`,
  ],
};

export const info = {
  header: `All your info, all in one place`,
  text: `Receive text and email notifications, order updates, and compliance alerts from your custom business management dashboard. We’ll take care of things like a mandatory Annual Report and Registered Agent renewal every year, so you don’t have to.`,
  boxes: [
    {
      header: `Text and email notifications`,
    },
    {
      header: `Order updates`,
    },
    {
      header: `Compliance alerts`,
    },
  ],
  button: {
    text: `Get started`,
    url: `${process.env.ORDER_URL}/form-order-now.php`,
  },
};
