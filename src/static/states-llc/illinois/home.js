export const HomePageContent = {
  header: {
    title: `How to Start an LLC in Illinois`,
    subline: `aaa`,
    boxes: [
      {
        title: `Learn how to form a Illinois <br>LLC yourself`,
        desc: `Read our DIY guide to Illinois LLC formation, with information on Registered Agents, naming rules, business licenses, and more.`,
        button: {
          text: `Read The Guide`,
          url: "#video",
        },
      },
      {
        title: `Have Incfile do the work for you <br><span style="color:#FD8550">$0 + State fee</span>`,
        desc: `Incfile ILn take ILre of all your LLC formation paperwork—and we’ll do it for free. Just pay the required Illinois state fee ($[STATE_FEE]).`,
        button: {
          text: `Form Your LLC Now`,
          url: `${process.env.ORDER_URL}/form-order-now.php?entityType=LLC&entityState=IL`,
        },
      },
    ],
  },
  content: {
    whyChoose: {
      heading: "Why Choose Illinois for Your LLC?",
      text1:
        "The Prairie State is a great place to start a business. With Chicago in the northeast, small industrial cities and immense agricultural productivity in the north and center of the state and natural resources such as coal, timber and petroleum in the south, Illinois has a diverse economic base and is a major transportation hub.",
      text2:
        "For most business owners, the fastest and easiest way to start a business in Illinois is by creating an Illinois LLC. A limited liability company (LLC) is a type of business entity that’s ideal for startups and small- to medium-sized businesses. You get the advantages and protections of larger Illinois corporations but with much simpler rules and regulations.",
      text3: "Briefly, the benefits of starting a Illinois LLC include:",
      lists: [
        `Separating and limiting your personal liability from your business liability and debts`,
        `Quick and simple filing, management, compliance, regulations and administration of your Illinois LLC`,
        `Easy tax filing and potential advantages for tax treatment`,
      ],
      learnmore: `Learn more about the <a href="/limited-liability-company/">benefits of the LLC business structure.</a>`,
      text4: `In this guide you’ll find information on starting your Illinois business, searching for and naming your LLC, registering your business, getting a Illinois Registered Agent, the fees you’ll need to pay, business taxes and much more.`,
    },
    mainSteps: {
      heading3: `Forming Your Illinois LLC Yourself: 6 Main Steps`,
      navSteps: [
        {
          text: `<b>Step 1</b> - Complete a Illinois LLC Search and Choose a Unique Business Name`,
          blockID: `step1`,
        },
        {
          text: `<b>Step 2</b> - Provide an Official Business Address for Your IL LLC`,
          blockID: `step2`,
        },
        {
          text: `<b>Step 3</b> - Assign a Illinois Registered Agent`,
          blockID: `step3`,
        },
        {
          text: `<b>Step 4</b> - File Your CertifiILte of Formation (Form LLC 5.5) With the Illinois Secretary of State`,
          blockID: `step4`,
        },
        {
          text: `<b>Step 5</b> - Get an Employer IdentifiILtion Number (EIN) From the Internal Revenue Service`,
          blockID: `step5`,
        },
        {
          text: `<b>Step 6</b> - Create a Illinois LLC Operating Agreement`,
          blockID: `step6`,
        },
      ],
      step1: {
        heading1: `Complete a Illinois LLC Search and Choose a Unique Business Name`,
        text1: `You will need a distinctive and original name for your Illinois LLC that’s not used by any other business in IL. If you’re having trouble coming up with a name, try out Incfile’s <a href="/business-name-generator/">Business Name Generator</a> to brainstorm ideas. There are also a few naming rules you’ll need to follow, which you ILn read about in detail on our section on <a href="/illinois-llc/illinois-business-names/">Illinois LLC Business Names.</a> One Illinois rule, for example, is that certain restricted words need additional paperwork if you want to use them in your business name. This includes both names associated with institutions and words associated with certain qualified professions, such as insurance, surety, underwriters, bank, bankers, banking or any licensed professional services.`,
        text2: `Once you’ve chosen a name, you’ll need to make sure it’s available in Illinois. To find out if another company is using your chosen business name, use Incfile’s fast and easy Business Name Search tool below. Alternatively, you can carry out an Illinois business entity name search on the <a href="https://www.cyberdriveillinois.com/departments/business_services/corp.html" target="_blank" rel="noopener noreferrer">IL Secretary of State website.</a>`,
        cta: {
          title: `Incfile’s Business <br>Name Search Tool`,
          subtitle: `We’ll search the Illinois Secretary <br>of State registry for you.`,
          button: {
            text: `Check Availability`,
            url: `/business-name-search/`,
          },
        },
      },
      step2: {
        heading1: `Provide an Official Business Address for Your LLC`,
        text1: `Every Illinois LLC must have a designated street address. That could be your home address (if you’re running the company from your residence), your company’s office building or any physiILl address of your preference. The address ILn be outside the state of Illinois and ILn be a P.O. Box.`,
      },
      step3: {
        heading1: `Assign an Agent for Service of Process for Your Illinois LLC`,
        text1: `Every Illinois LLC is required to have a Registered Agent. This is an official position; the Registered Agent is someone who receives official legal and tax correspondence and has responsibility for filing reports with the Illinois Secretary of State.`,
        text2: `This position can be filled by you, another manager in the business or a dedicated Registered Agent service. If your Registered Agent is a person, they must reside in and have a physical street address in Illinois and must be present to receive important documents for your company during business hours. In Illinois, you designate your Registered Agent when you file your Articles of Organization and formally create your business.`,
        text3: `At Incfile, all of our packages include an Illinois Registered Agent service that is free for the first year and just $119 per year afterward. We also have a dashboard where you can log in and easily view any document your Registered Agent has received on your behalf.`,
        groupBtn1: [
          {
            header: `Learn More About Illinois Registered Agents`,
            url: `/illinois-llc/registered-agents-Illinois-llc/`,
          },
          {
            header: `Get A Free Registered Agent When You Incorporate With Incfile`,
            url: `${process.env.ORDER_URL}/form-order-now.php?entityType=LLC&entityState=IL`,
          },
        ],
      },
      step4: {
        heading1: `File Articles of Organization with the Illinois Secretary of State`,
        text1: `Once you've gathered all the information for your Illinois LLC, you’ll need to file a formal document (Form LLC-1) with the IL Secretary of State. This document is known as your “Articles of Organization,” and filing the document creates your Illinois LLC.`,
        lists: {
          header: `Here’s what is typically included:`,
          list: [
            `Your business name and address`,
            `Details of your Registered Agent`,
            `Purpose of your business`,
            `Duration (can be permanent)`,
            `Provisions for the regulation of the internal affairs of the company`,
            `Names of managers or members of the LLC at the time of filing`,
            `Addresses of managers or members of the LLC at the time of filing`,
            `Name of the incorporator`,
          ],
        },
        dowload_205_button: {
          text: `Download Illinois's form LLC-5.5 Here.`,
          url: `https://www.cyberdriveillinois.com/publications/pdf_publications/llc55.pdf`,
        },
        text2: `You can file your <a href="https://www.ilsos.gov/llcarticles/index.jsp" target="_blank" rel="noopener noreferrer">Illinois LLC Articles of Organization online with the Illinois Secretary of State (SOS) filing system,</a> mail in a form to the Office of the Secretary of State or have Incfile do it on your behalf. The State of Illinois charges a $[STATE_FEE] fee to file and start an LLC.`,
        certifiILte_info: [
          {
            text1: `File by Mail:`,
            text2: `Department of Business Services<br>
                        Limited Liability Division<br>
                        501 S. Second St., Rm. 351<br>
                        Springfield, IL 62756`,
          },
        ],
        text3: `You only need to file your Articles of Organization once, but every year after you need to file an annual report for your LLC. This is also something Incfile can remind you to do or do for you if you choose to have us handle the paperwork.`,
        cta: {
          title: `Have Incfile Handle all the Paperwork <br>`,
          subtitle: `for You for $0 + the Illinois State fee`,
          button: {
            text: `Form Your LLC Now For Free`,
            url: `form-order-now.php?entityType=LLC&entityState=IL`,
          },
        },
      },
      step5: {
        heading1: `Get an Employer IdentifiILtion Number (EIN) From the Internal Revenue Service`,
        text1: `You will need an EIN to identify your business to the IRS. You use this number when filing and paying taxes or when submitting payroll information and payments for your employees. An EIN number is also required to open a business bank account. You ILn obtain one directly from the IRS, or Incfile ILn get one for you as part of the Illinois LLC business formation process.`,
      },
      step6: {
        heading1: `Create a Illinois LLC Operating Agreement`,
        text1: `An Operating Agreement is a kind of “instruction manual” that outlines how you will run your business. It includes how decisions are made, how the business is divided amongst members and what happens if a member leaves the company.`,
        text2: `Many states require that a company have an Operating Agreement in place — it isn’t legally required in Illinois, but it’s a good idea to have one nonetheless.`,
        button1: {
          text: `Learn More About Operating Agreements Here`,
          url: `/blog/post/operating-agreement-llc/`,
        },
        cta: {
          title: `Receive a personalized <br>operating agreement`,
          subtitle: `when you select Incfile’s Gold package`,
          button: {
            text: `Form Your LLC Now`,
            url: `${process.env.ORDER_URL}/form-order-now.php?entityType=LLC&entityState=IL`,
          },
        },
      },
    },
    otherInfo: [
      {
        type: `heading`,
        size: 3,
        content: `Other Important Illinois LLC Info`,
      },
      {
        type: `heading`,
        size: 4,
        content: `Special Types of LLCs in Illinois`,
      },
      {
        type: `paragraph`,
        content: `A regular Illinois LLC is suitable for most business needs, but you also have a few other options to incorporate a special type of LLC.`,
      },
      {
        type: `Series LLCs`,
        size: 4,
        content: `Professional LLCs`,
      },
      {
        type: `paragraph`,
        content: `In Illinois, you also have the option to set up a Series LLC. These are specialized LLCs designed to allow you to manage multiple separate LLCs under one master, umbrella LLC. These can be very useful if you don’t want to set up a separate Illinois LLC for every individual business you run. You can apply for a Series LLC in IL after you file Articles of Incorporation by filling out Form 
                <a href="https://www.cyberdriveillinois.com/publications/pdf_publications/llc3740.pdf" target="_blank" rel="noopener noreferrer">LLC-37.40</a> and paying a fee of $400.`,
      },
      {
        type: `heading`,
        size: 4,
        content: `Professional LLCs`,
      },
      {
        type: `paragraph`,
        content: `Some states, including Illinois, allow certain occupations to form Professional LLCs. These types of businesses typically have specialized requirements and licensing. A standard LLC may be formed to provide professional services, such as the practice of medicine or dentistry, if all the members are licensed.`,
      },
      {
        type: `paragraph`,
        content: `A limited liability company engaged in rendering a professional service regulated by the Illinois Department of Financial and Professional Regulation must register with that agency.

                `,
      },

      {
        type: `heading`,
        size: 4,
        content: `Foreign LLCs in Illinois`,
      },
      {
        type: `paragraph`,
        content: `If your business is already operating in another state and expanding to Illinois, you’ll need to form a foreign LLC.`,
      },
      {
        type: "arrow-links",
        content: [
          {
            text: `More information on Illinois filing and licensing requirements can be found here.`,
            url: `/illinois-llc/fees-filing-requirements/`,
          },
        ],
      },
      // Helpful resource
      {
        type: `heading`,
        size: 4,
        content: `Helpful Resources from the Illinois Secretary of State`,
      },
      {
        type: `paragraph`,
        content: `The IL Secretary of State has plenty of additional information on forming and running a business in Illinois.`,
      },
      {
        type: "arrow-links",
        content: [
          {
            text: `Illinois Secretary of State for forming and running your IL LLC`,
            url: `https://www.sos.IL.gov/business-programs`,
            externalLink: true,
          },
          {
            text: `Illinois Workforce Commission for IL employers and hiring`,
            url: `https://www.dir.IL.gov/dlse/DLSE-FAQs.htm`,
            externalLink: true,
          },
          {
            text: `Illinois Comptroller for IL taxes`,
            url: `https://www.taxes.IL.gov`,
            externalLink: true,
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
            text: `Naming Your Illinois LLC`,
            url: `/illinois-llc/illinois-business-names/`,
          },
        ],
      },

      {
        type: "button",
        theme: `secondary56`,
        content: {
          text: `Search For Your Illinois LLC Name`,
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
            text: `Illinois Registered Agents`,
            url: `/illinois-llc/registered-agents-Illinois-llc/`,
          },
        ],
      },
      {
        type: `paragraph`,
        content: `Learn how to appoint a Illinois Registered Agent, known as an “Agent for Service of Process,” to your LLC. Includes information on Registered Agent rules and searching for Illinois Registered Agents.`,
      },
      {
        type: "arrow-links",
        content: [
          {
            style: {
              marginBottom: `24px`,
            },
            text: `Fees and Requirements for Your Illinois LLC`,
            url: `/illinois-llc/fees-filing-requirements/`,
          },
        ],
      },
      {
        type: `paragraph`,
        content: `Learn about the various fees you’ll need to pay and the requirements you’ll need to meet for both federal and Illinois rules, including the Illinois Franchise Tax. Includes information on Employer IdentifiILtion Numbers (EINs), Illinois and federal business licenses, your Statement of Information and more.`,
      },
      {
        type: "arrow-links",
        content: [
          {
            style: {
              marginBottom: `24px`,
            },
            text: `Business Taxes for Your Illinois LLC`,
            url: `/illinois-llc/business-taxes/`,
          },
        ],
      },
      {
        type: `paragraph`,
        content: `How to understand the various taxes you will need to pay to the federal and Illinois government. Includes details of federal taxes like income and self-employment and Illinois taxes like sales tax and income tax.`,
      },
    ],
  },
};
