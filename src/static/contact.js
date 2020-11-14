export const existing = {
  header: `Using your Client Dashboard`,
  text: `Your client dashboard will become the central document repository and management tool that will allow you to actively
    manage your entity. You can always access your client dashboard by using the order number and email address associated
    with your order. Below are some helpful links provided to orient you with the features of the client dashboard.`,
  button: {
    text: `Check my order status`,
    url: `${process.env.ORDER_URL}/dashboard`,
  },
  phone: {
    phone1: `844.830.8267`,
    phone2: `877.919.2613`,
  },
};

export const newSales = {
  header: `We've put together the following resources to help answer our most common questions.`,
  phone: {
    phone1: `855.829.9090`,
    phone2: `877.919.2613`,
  },
  articles: [
    {
      icon: `chair-01`,
      title: `Choose the right type of entity for starting your new company!`,
      desc: `Regardless of the industry or nature of business, Incfile can help you form your new business.`,
      url: `/start-your-company/`,
    },
    {
      icon: `newspaper`,
      title: `Understanding the differences between LLC vs. Corporation.`,
      desc: `We'll tackle those questions so you have all the information you need to start an LLC or Corporation.`,
      url: `/`,
    },
    {
      icon: `wave-01`,
      title: `What is the Best State to Start My LLC?`,
      desc: `Here's our handly guide to choosing the perfect state depending on various legal issues, market demand, taxation rates, job
            markets and more.`,
      url: `/`,
    },
    {
      icon: `bike`,
      title: `Are Non-U.S. Residents Allowed to Own a Corporation or LLC?`,
      desc: `Regardless of the industry or nature of business, Incfile can help you form your new business.`,
      url: `/`,
    },
  ],
};
