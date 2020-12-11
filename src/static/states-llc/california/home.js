export const HomePageContent = {
  header: {
    title: `How to Start an LLC in California`,
    subline: `aaa`,
    boxes: [
      {
        title: `Learn how to form a <br>California LLC yourself`,
        desc: `Read our DIY guide to California LLC formation, with information on Registered Agents, naming rules, business licenses, and more.`,
        button: {
          text: `Read The Guide`,
          url: "#video",
        },
      },
      {
        title: `Have Incfile do the work for you <br><span style="color:#FD8550">$0 + State fee</span>`,
        desc: `Incfile can take care of all your LLC formation paperwork—and we’ll do it for free. Just pay the required California state fee ($[STATE_FEE]).`,
        button: {
          text: `Form Your LLC Now`,
          url: `${process.env.ORDER_URL}/form-order-now.php?entityType=LLC&entityState=CA`,
        },
      },
    ],
  },
  content: {
    whyChoose: {
      heading: "Why Incorporate Your LLC in California?",
      text1:
        "California is a center of technology, entertainment, innovation and businesses that is changing the world. Some of the biggest brand names have started their business in California — from Dollar Shave Club and Snapchat to the big tech giants Facebook, Apple and Google. California is at the forefront of technology, and it’s brimming with top employee talent and beautiful locations to live.",
      text2:
        "For most business owners, the fastest and easiest way to start a business in California is by creating a California LLC. A limited liability company (LLC) is a type of business entity that’s ideal for startups and small- to medium-sized businesses. You get the advantages and protections of larger California corporations but with much simpler rules and regulations.",
      text3: "Briefly, the benefits of starting a California LLC include:",
      lists: [
        `Separating and limiting your personal liability from your business liability and debts`,
        `Quick and simple filing, management, compliance, regulations and administration of your California LLC`,
        `Easy tax filing and potential advantages for tax treatment`,
      ],
      learnmore: `Learn more about the <a href="/limited-liability-company/">benefits of the LLC business structure.</a>`,
      text4: `In this guide you’ll find information on starting your California business, searching for and naming your LLC, registering your business, getting a California Registered Agent, the fees you’ll need to pay, business taxes and much more.`,
    },
    mainSteps: {
      heading3: `Forming Your California LLC Yourself: 6 Main Steps`,
      navSteps: [
        {
          text: `<b>Step 1</b> - Complete a California LLC Search and Choose a Unique Business Name`,
          blockID: `step1`,
        },
        {
          text: `<b>Step 2</b> - Provide an Official Business Address for Your CA LLC`,
          blockID: `step2`,
        },
        {
          text: `<b>Step 3</b> - Assign a California Registered Agent`,
          blockID: `step3`,
        },
        {
          text: `<b>Step 4</b> - File Your Certificate of Formation (Form 205) With the California Secretary of State`,
          blockID: `step4`,
        },
        {
          text: `<b>Step 5</b> - Get an Employer Identification Number (EIN) From the Internal Revenue Service`,
          blockID: `step5`,
        },
        {
          text: `<b>Step 6</b> - Create a California LLC Operating Agreement`,
          blockID: `step6`,
        },
      ],
      step1: {
        heading1: `Complete a California LLC Search and Choose a Unique Business Name`,
        text1: `You will need a distinctive and original name for your California LLC that’s not used by any other business in CA. If you’re having trouble coming up with a name, try out Incfile’s <a href="/business-name-generator/">Business Name Generator</a> to brainstorm ideas. There are also a few naming rules you’ll need to follow, which you can read about in detail on our section on <a href="/california-llc/california-business-names/">California LLC Business Names.</a>`,
        text2: `If you already have a name in mind, you can make sure it’s available by using the California business search on the <a href="https://businesssearch.sos.ca.gov" target="_blank" rel="noopener noreferrer">CA Secretary of State website  </a>or<a href="/business-name-search/"> Incfile’s free Business Name Search tool.</a>`,
        text3: `There are a few rules you’ll need to follow when choosing an LLC name, which you can learn about in the 
                  <a href="/california-llc/california-business-names/">California business names</a>
                   section of this guide. One California rule, for example, is that your business name cannot include “Agency,” “Commission,” “Department,” “Bureau,” “Division,” “Municipal” or “Board.”`,
        cta: {
          title: `Incfile’s Business <br>Name Search Tool`,
          subtitle: `We’ll search the California Secretary <br>of State registry for you.`,
          button: {
            text: `Check Availability`,
            url: `/business-name-search/`,
          },
        },
      },
      step2: {
        heading1: `Provide an Official Business Address for Your LLC`,
        text1: `Every California LLC must have a designated street address. That could be your home address (if you’re running the company from your residence), your company’s office building or any physical address of your preference. The address can be outside the state of California and can be a P.O. Box.`,
      },
      step3: {
        heading1: `Assign an Agent for Service of Process for Your California LLC`,
        text1: `Every CA LLC must have a “Registered Agent,” known in California as an “Agent for Service of Process,” when it is formed. This is an official position; the Agent for Service of Process is someone who receives official legal and tax correspondence and has responsibility for filing reports with the California Secretary of State.`,
        text2: `This position can be filled by you, another manager in the business or a dedicated Registered Agent service. Your CA Agent for Service of Process must have a physical street address in California and must be present to receive important documents for your company during business hours.`,
        text3: `At Incfile, all of our packages include a California Registered Agent service that is free for the first year and just $119 per year afterward. We also have a dashboard where you can log in and easily view any document your Registered Agent has received on your behalf.`,
        groupBtn1: [
          {
            header: `Learn More About California Registered Agents`,
            url: `/california-llc/registered-agents-california-llc/`,
          },
          {
            header: `Get A Free Registered Agent When You Incorporate With Incfile`,
            url: `${process.env.ORDER_URL}/form-order-now.php?entityType=LLC&entityState=CA`,
          },
        ],
      },
      step4: {
        heading1: `File Articles of Organization with the California Secretary of State`,
        text1: `Once you've gathered all the information for your California LLC, you’ll need to file a formal document (Form LLC-1) with the CA Secretary of State. This document is known as your “Articles of Organization,” and filing the document creates your California LLC. Here’s what is typically included:`,
        lists: {
          list: [
            `Your business name and address`,
            `Details of your Agent for Service of Process`,
            `Management structure`,
            `Name of the incorporator`,
          ],
        },
        dowload_205_button: {
          text: `Download California's form LLC-1 Here.`,
          url: `https://bpd.cdn.sos.ca.gov/llc/forms/llc-1.pdf`,
        },
        text2: `You can file your Articles of Organization online on the <a href="https://llcbizfile.sos.ca.gov/registration" target="_blank" rel="noopener noreferrer">California Secretary of State website</a>, mail in a form, submit in person, or have Incfile do it on your behalf for free. The State of California charges a $75 fee to file and start an LLC in California.`,
        certificate_info: [
          {
            text1: `File by Mail:`,
            text2: `Secretary of State<br>
                          Business Entities Filings<br>
                          P.O. Box 944228<br>
                          Sacramento, CA 94244`,
          },
          {
            text1: `Submit in Person:`,
            text2: `1500 11th St.<br>
                          Sacramento, CA 95814<br>
                          (Open M-F 8am-5pm)`,
          },
        ],
        text3: `Note: If you drop off your Articles of Organization in person, you’re required to pay a separate, non-refundable $15 drop off fee. This gives your paperwork priority over mail-in documents.`,
        text4: `You only need to file your Articles of Organization with the State of California once, but you will need to file a Statement of Information biennially for your LLC, which has its own fees. Your first 
                  <a href="https://www.incfile.com/blog/post/form-llc-12-california-llc/" target="_blank" rel="noopener noreferrer">Statement of Information (Form LLC-12)</a>
                   is due within 90 days of your entity formation date. This is also something Incfile can remind you to do or do for you if you choose to have us handle the paperwork.`,
        cta: {
          title: `Have Incfile Handle all the Paperwork <br>`,
          subtitle: `for You for $0 + the California State fee`,
          button: {
            text: `Form Your LLC Now For Free`,
            url: `${process.env.ORDER_URL}/form-order-now.php?entityType=LLC&entityState=CA`,
          },
        },
      },
      step5: {
        heading1: `Get an Employer Identification Number (EIN) From the Internal Revenue Service`,
        text1: `You will need an EIN to identify your business to the IRS. You use this number when filing and paying taxes or when submitting payroll information and payments for your employees. An EIN number is also required to open a business bank account. You can obtain one directly from the IRS, or Incfile can get one for you as part of the California LLC business formation process.`,
      },
      step6: {
        heading1: `Create a California LLC Operating Agreement`,
        text1: `An operating agreement is a kind of “instruction manual” that outlines how you will run your business. It includes how decisions are made, how the business is divided amongst members, and what happens if a member leaves the company.`,
        text2: `California requires that LLCs have an operating agreement in place. This does not need to be filed with the Secretary of State but should be kept on hand.`,
        button1: {
          text: `Learn More About Operating Agreements Here`,
          url: `https://www.incfile.com/blog/post/operating-agreement-llc/`,
        },
        cta: {
          title: `Receive a personalized <br>operating agreement`,
          subtitle: `when you select Incfile’s Gold package`,
          button: {
            text: `Form Your LLC Now`,
            url: `${process.env.ORDER_URL}/form-order-now.php?entityType=LLC&entityState=CA`,
          },
        },
      },
    },
    otherInfo: [
      {
        type: `heading`,
        size: 3,
        content: `Other Important California LLC Info`,
      },
      {
        type: `heading`,
        size: 4,
        content: `Special Types of LLCs in California`,
      },
      {
        type: `paragraph`,
        content: `A regular California LLC is suitable for most business needs, but you also have a few other options to incorporate a special type of LLC.`,
      },
      {
        type: `heading`,
        size: 4,
        content: `Professional LLCs`,
      },
      {
        type: `paragraph`,
        content: `Some states allow certain occupations to form “Professional LLCs.” These types of businesses typically have specialized requirements and licensing. California does not recognize or allow professional LLCs, and the state does not allow professional services to be provided by LLCs. Instead, if you want to provide professional services, you will need to form a 
                  <a href="/california-corporation/">CA corporation.</a>`,
      },

      {
        type: `heading`,
        size: 4,
        content: `Out-of-State / Foreign LLCs`,
      },
      {
        type: `paragraph`,
        content: `If your business is already operating in another state and expanding to California, you’ll need to form a foreign LLC.`,
      },
      {
        type: "arrow-links",
        content: [
          {
            text: `More information on California filing and licensing requirements can be found here.`,
            url: `/california-llc/fees-filing-requirements/`,
          },
        ],
      },
      // Helpful resource
      {
        type: `heading`,
        size: 4,
        content: `Read More Information from the California Secretary of State`,
      },
      {
        type: `paragraph`,
        content: `The CA Secretary of State has plenty of additional information on forming and running a business in California.`,
      },
      {
        type: "arrow-links",
        content: [
          {
            text: `California Secretary of State for forming and running your CA LLC`,
            url: `https://www.sos.ca.gov/business-programs`,
          },
          {
            text: `California Workforce Commission for CA employers and hiring`,
            url: `https://www.dir.ca.gov/dlse/DLSE-FAQs.htm`,
          },
          {
            text: `California Comptroller for CA taxes`,
            url: `https://www.taxes.ca.gov`,
          },
        ],
      },

      // More info in this guide
      {
        type: `heading`,
        size: 3,
        content: `More Information in This Guide`,
      },
      {
        type: `paragraph`,
        content: `You’ll find plenty more insight and guidance on the other pages of this guide, including:`,
      },
      {
        type: "arrow-links",
        content: [
          {
            style: {
              marginBottom: `24px`,
            },
            text: `Naming Your California LLC`,
            url: `/california-llc/california-business-names/`,
          },
        ],
      },

      {
        type: "button",
        theme: `secondary56`,
        content: {
          text: `Search For Your California LLC Name`,
          url: `/`, // okienko
        },
      },
      {
        type: "arrow-links",
        content: [
          {
            style: {
              marginBottom: `24px`,
            },
            text: `California Registered Agents`,
            url: `/california-llc/registered-agents-california-llc/`,
          },
        ],
      },
      {
        type: `paragraph`,
        content: `Learn how to appoint a California Registered Agent, known as an “Agent for Service of Process,” to your LLC. Includes information on Registered Agent rules and searching for California Registered Agents.`,
      },
      {
        type: "arrow-links",
        content: [
          {
            style: {
              marginBottom: `24px`,
            },
            text: `Fees and Requirements for Your California LLC`,
            url: `/california-llc/fees-filing-requirements/`,
          },
        ],
      },
      {
        type: `paragraph`,
        content: `Learn about the various fees you’ll need to pay and the requirements you’ll need to meet for both federal and California rules, including the California Franchise Tax. Includes information on Employer Identification Numbers (EINs), California and federal business licenses, your Statement of Information and more.`,
      },
      {
        type: "arrow-links",
        content: [
          {
            style: {
              marginBottom: `24px`,
            },
            text: `Business Taxes for Your California LLC`,
            url: `/california-llc/business-taxes/`,
          },
        ],
      },
      {
        type: `paragraph`,
        content: `How to understand the various taxes you will need to pay to the federal and California government. Includes details of federal taxes like income and self-employment and California taxes like sales tax and income tax.`,
      },
    ],
  },
};
