import React from "react";

export const top = {
  header: "The Fastest & Easiest Way\n" + " To Start Your Business",
  text: (
    <span>
      Join Over <strong>500,000</strong> Businesses Launched With incfile Since <strong>2004</strong>
    </span>
  ),
  button: [
    {
      url: `${process.env.ORDER_URL}/form-order-now.php`,
      text: "Start my business",
    },
  ],
};

export const business_formation = {
  header: "Business Formation For As Little As $0 + State Fee.",
  text: "No Contracts. No Hidden Fees.",
  button: [
    {
      text: "Launch my business",
      url: `${process.env.ORDER_URL}/form-order-now.php`,
    },
  ],
  choose: {
    header: "Why Choose incfile for Company Formation?",
    text: "LLC Filing & More Made Easy",
    text2: "We're entrepreneurs - just like you.",
    text3:
      "We make incorporating a company as easy as possible, so you can focus on the important things. Beyond free LLC filing, we have a full suite of startup services (like banking and bookkeeping), which means Incfile not only helps you get started, but supports you in your continued success as your one-stop shop.",
    text4: "Whether you’re starting an LLC, S Corp, C Corp or other business entity, our mission is to provide you with a superior and modern experience at an unparalleled value.",
    included: {
      header: "Included in All Incorporation Packages",
      benefits: [
        {
          label: "Verify Company Name Availability",
          header: "Verify Company Name Availability",
          text: "We conduct a thorough name search with the state corporation database and will work with you as long as needed to find an available company name.",
        },
        {
          label: "Preparation & Filing of Articles",
          header: "Preparation & Filing of Articles",
          text: "We will review the information, prepare your incorporation documents, and send them to the state of formation.",
        },
        {
          label: "Next Business Day Processing",
          header: "Next Business Day Processing",
          text: "We strive to ensure that every order received is prepared and forwarded to the state within 1 business day.",
        },
        {
          label: "Registered Agent Service <span>(1st Year FREE)</span>",
          header: "Registered Agent Service (1st Year FREE)",
          text: `Never miss an important filing date again. Lifetime Company Alerts is designed to send email notifications informing clients of compulsory state filings such as Annual Reports, Business Licenses, Statement of Information etc.`,
        },
        {
          label: "Lifetime Company Alerts",
          header: "Lifetime Company Alerts",
          text: `Never miss an important filing date again. Lifetime Company Alerts is designed to send email notifications informing clients of compulsory state filings such as Annual Reports, Business Licenses, Statement of Information etc.`,
        },
        {
          label: "Online Order Status Tracking",
          header: "Online Order Status Tracking",
          text: "This feature allows you to review the status of your order in real time.",
        },
        {
          label: "Free Business Tax Consultation",
          header: "Free Business Tax Consultation",
          text: "Incorporating a new business can burden owners with complicated tax filings . As a client you are entitled to receive a free no obligation 1 hour consultation with a certified tax professional who can answer questions regarding the tax commitments of your company.",
        },
        {
          label: "Lifetime Customer Support",
          header: "Lifetime Customer Support",
          text: "We are always here to help no matter how long ago you placed your order, whether you have a general question or need a copy of a previously filed document.",
        },
        {
          label: "Online Access to Incorporation Documents",
          header: "Online Access to Incorporation Documents",
          text: "You will be able to access your incorporation documents online 24/7. You can also download your documents at anytime you wish, review company information, and track all orders in real-time.",
        },
      ],
      button: {
        text: "Start my business",
        url: `${process.env.ORDER_URL}/form-order-now.php`,
      },
    },
  },
};

export const setup = {
  header: "Set up your business easily",
  text: "Watch this short video to see",
  // customers: {
  //   header: "Why Do Our Customers Love Us?",
  //   text: "4.8 Overall Satisfaction Rating based on 13,797 reviews",
  //   opinions: {
  //     items: [
  //       {
  //         image: "mattweik",
  //         header: "Martin G",
  //         subheader: "Los Angeles, CA",
  //         text: "This is my third time working with Incfile. Great service. Professional and prompt. Will continue to do business with them.",
  //       },
  //       {
  //         image: "mattweik",
  //         header: "Martin G",
  //         subheader: "Los Angeles, CA",
  //         text: "This is my third time working with Incfile. Great service. Professional and prompt. Will continue to do business with them.",
  //       },
  //       {
  //         image: "mattweik",
  //         header: "Martin G",
  //         subheader: "Los Angeles, CA",
  //         text: "This is my third time working with Incfile. Great service. Professional and prompt. Will continue to do business with them.",
  //       },
  //     ],
  //   },
  // },
  customers: [
    {
      photo: `mattweik`,
      name: `Jade B.`,
      city: `California`,
      text: `Very easy to use, there are no questions if I'm doing things wrong or if I'm forgetting anything. incfile has it covered.`,
    },
    {
      photo: `mattweik`,
      name: `Jarret C.`,
      city: `Pennsylvania`,
      text: `I normally get my corp filings from another company, but after purchasing a corp thru incfile.com, and how fast I received everything, this is my new go-to for legal business filings. Highly recommend!`,
    },
    // {
    //   photo: `mattweik`,
    //   name: `Martin G`,
    //   city: `Los Angeles, CA`,
    //   text: `This is my third time working with Incfile. Great service. Professional and prompt. Will continue to do business with them.`,
    // },
    // {
    //   photo: `mattweik`,
    //   name: `Martin G`,
    //   city: `Los Angeles, CA`,
    //   text: `This is my third time working with Incfile. Great service. Professional and prompt. Will continue to do business with them.`,
    // },
    // {
    //   photo: `mattweik`,
    //   name: `Martin G`,
    //   city: `Los Angeles, CA`,
    //   text: `This is my third time working with Incfile. Great service. Professional and prompt. Will continue to do business with them.`,
    // },
  ],
};

export const rocket = {
  header: "Start Your LLC, S Corp,",
  header2: "or C Corp Today",
  text: "There's A Reason More Than 500,000",
  text2: "Businesses Have Started With incfile",
  button: {
    text: "Launch your business",
    url: `${process.env.ORDER_URL}/form-order-now.php`,
  },
};
