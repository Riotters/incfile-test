export const top = {
  header: `Filling a Foreign Qualification to do Business Out of State`,
  button: [
    {
      text: "Order Now",
      url: `${process.env.ORDER_URL}/foreign-qual.php`,
    },
  ],
};

export const about = {
  header: `Your business is expanding beyond your local region.`,
  text: `Or perhaps you are an Internet business with fulfillment centers in multiple locations. This may mean you are doing business in a “foreign” state. 
        What do you do? We have the answers to all your questions regarding what constitutes doing business in another state and how to get the proper paperwork done to be legitimate.`,
  box: {
    text: `Many confuse foreign qualification with the idea of operating outside the United States. This really has to do with how you perform within the borders of the United States. 
            “Foreign,” in this case, refers to the fact that <a href="/llc-state-information/">each state has operating rules that are different from one another</a>; and, in turn, must insist on proper registration to do business in that locale.`,
  },
  text2: `Therefore, it is important that when your company is located in or operates within a state other than the place of original incorporation, 
        you are given the proper rights to conduct business there. This actually means you need to obtain a Certificate of Authority.`,
  header2: `We can take care of the details.`,
  link: {
    text: " Let Incfile help you file your Foreign Qualification today!",
    url: `${process.env.ORDER_URL}/foreign-qual.php`,
  },
};

export const basics = {
  header: `Foreign Qualification Basics`,
  faq: {
    items: [
      {
        question: `What is a ”Foreign Qualification”`,
        answer: `A Foreign Qualification refers to the process by which you register your company to do business in another state. An LLC or corporation is considered "domestic" in the state in which is was formed, and “foreign” in any other state in which it wants to do business. 
                    When you file a Foreign Qualification, you get a Certificate of Authority, which gives you legitimate rights to do business in the state.
                    A Foreign Qualification must be completed in each state in which a corporation or LLC intends to conduct business.`,
      },
      {
        question: `How Businesses Are Classified As Foreign`,
        answer: `What does it mean to “do business” in a state? Let’s discuss the activities that determine you are conducting business in another state.
                    Essentially, if your actions go beyond minor transactions in a state, such as making management decisions, you will likely be seen as a “foreign” entity that needs to register. 
                    However, there are some simple rules that help weed out the minor from the major “doing business” stature.`,
        list: [
          `First, the company would have a physical presence in the state. This refers to the existence of an office, store or warehouse that services or solicits residents of that state in any form. 
                    It could also refer to having employees or even bank accounts in a state.`,
          `Second, if your company has to pay state taxes in a particular locale, they are going to be tagged as “doing business” in a state. 
                    Taxes are assessed when a company sells directly from a state or upholds a significant number of contracts in a state.`,
        ],
      },
      {
        question: `What is a cerificate of Authority?`,
        answer: [
          {
            text: `A Certificate of Authority is an official document that gives you permission to operate your business in a state other than the one in which your corporation was formed. 
                            If a company neglects to file a Foreign Qualification and receive a Certificate of Authority, then it does not have legal standing or authority to transact business within that state.`,
          },
          {
            text: `Every state has different rules`,
            url: `/llc-state-information/`,
          },
          {
            text: `regarding what constitutes transacting business. Not following the rules could affect your business's`,
          },
          {
            text: `Certificate of Good Standing`,
            url: `/manage-your-company/certificate-of-good-standing/`,
          },
          {
            text: `which you need to get a business loan, renew your business license or file your business taxes. 
                            It can be cumbersome and time consuming to file a Certificate of Authority in every state in which you want to do business, which is why Incfile has simplified the process. Simply complete our online`,
          },
          {
            text: `Foreign Qualification`,
            url: `${process.env.ORDER_URL}/foreign-qual.php`,
          },
          {
            text: `form, and we’ll do the paperwork for you.`,
          },
        ],
      },
      {
        question: `How The Foreign Qualification Process Works`,
        answer: `Every process has paperwork and proper steps to follow. To give you an understanding of what we’ll be doing on your behalf, let’s review the process below:`,
        list: [
          `Name Search: Your corporation’s name will be compared to the database in each state to ensure no other company is using it. Hopefully, there will be no contradiction, but if there is then you’ll be asked to operate under a fictitious or assumed name. If you'd like to conduct your own name search for your LLC, we've created How to Search & Choose Your Business Entity Name in all 50 States.`,
          `Registered Agent: You will need to select a registered agent in that state.`,
          `Certificate of Authority: Finally, you register for the right to do business in the state. This is similar to the process of incorporation and requires some paperwork and fees be submitted.`,
        ],
      },
    ],
  },
};

export const help = {
  header: `Help file my Foreign Qualification`,
  header2: `Save your time. We'll handle the paperwork.`,
  text: `Typical criteria include but are not limited to:`,
  list: [`Does the company has a physical presence in the state?`, `Does the entity have employees working within the state?`, `Does the company conduct banking within state?`],
  text2: `Requirements to obtain or a Foreign Qualification / Certificate of Authority:`,
  list2: [`Must file appropriate state document and pay the corresponding state fee.`, `Must obtain a Certificate of Good Standing from state of origin to verify status of business formation.`],
};

export const faq = {
  header: `Common questions about filing your Foreign Qualification`,
  faq: {
    items: [
      {
        question: `When should I file for my Cerificate of Authority?`,
        answer: `You must submit a registration in a state at least 20 days before conducting any business. This allows time for paperwork to be completed and the Certificate to be issued by state authorities.`,
      },
      {
        question: `What do I need to provide in order to file?`,
        answer: `Many states require a copy of your formation documents and a Certificate of Good Standing from your home (domestic) state where you incorporated. You’ll also be asked to pay fees required by each state you are seeking the right to conduct business. Keep in mind that once you “do business” in a state, you become responsible for meeting their requirements, such as the need to file annual information reports with the state.`,
      },
      {
        question: `How much does it cost to file a Foreign Qualification?`,
        answer: `The cost depends on the fee to obtain a Certificate of Good Standing and the filing fee that the inbound state assesses. Our service fee to prepare and file a Foreign Qualification is $149. To review the fee in your state click on the “order now” button and select the state and entity type.`,
      },
      {
        question: `How long does it take to file a Foreign Qualification?`,
        answer: `The filing time is dependent on the governing state agency and varies by state. Multiple steps are involved in filing, so your timely response to needed documentation is helpful. Most of the states will expedite the filing for an additional fee.`,
      },
      {
        question: `How do I obtain a Certificate of Good Standing?`,
        answer: `This document is obtained by contacting the Secretary of State. Incfile will complete this request when you file with our service. It is provided to verify that you are in compliance with tax and government requirements in that state.`,
      },
      {
        question: `What will I receive when the Foreign Qualification is filed?`,
        answer: `The governing state agency will typically return a copy of the filed articles which are then mailed to you immediately.`,
      },
    ],
  },
};
