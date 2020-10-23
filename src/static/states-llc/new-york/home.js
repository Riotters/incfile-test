export const HomePageContent = {
  header: {
    title: `How to Start an LLC in New York`,
    subline: `aaa`,
    boxes: [
      {
        title: `Learn how to form a New York <br>LLC yourself`,
        desc: `Read our DIY guide to New York LLC formation, with information on Registered Agents, naming rules, business licenses, and more.`,
        button: {
          text: `Read The Guide`,
          url: "/",
        },
      },
      {
        title: `Have Incfile do the work for you <br><span style="color:#FD8550">$0 + State fee</span>`,
        desc: `Incfile can take care of all your LLC formation paperwork—and we’ll do it for free. Just pay the required New York state fee ($205).`,
        button: {
          text: `Form Your LLC Now`,
          url: `${process.env.ORDER_URL}/form-order-now.php?entityType=LLC&entityState=NY`,
        },
      },
    ],
  },
  content: {
    whyChoose: {
      heading: "Why Incorporate Your LLC in New York?",
      text1:
        "The Empire State is a fantastic place to build the company of your dreams. A combination of rich cultures, diverse cities and a healthy economy makes New York State a center of opportunity. New York is the fourth most populous state in the union, with very strong industries in the technology, finance, investment, media, entertainment and tourism sectors.",
      text2:
        "If you want to start your own business in New York, one of the best ways to do so is by forming a New York LLC. Limited liability companies (LLCs) are a business entity designed for startups and small- and medium-sized businesses. New York LLCs give you many of the protections and advantages of larger corporations without all the rules, regulations and compliance issues common to larger business entities.",
      heading4: `To summarize, the benefits of starting a New York LLC include:`,
      lists: [`Separating and limiting your personal liability from your business liability and debts`, `Quick and simple filing, management, compliance, regulations and administration of your New York LLC`, `Easy tax filing and potential advantages for tax treatment`],
      learnmore: `Learn more about the <a href="/limited-liability-company/">benefits of the LLC business structure.</a>`,
      text3: `In this guide you’ll find information on searching for and naming your NY LLC, getting a New York Registered Agent, the fees you’ll need to pay, NY business taxes and much more. `,
    },
    mainSteps: {
      heading3: `File Your New York LLC Yourself: 7 Main Steps`,
      navSteps: [
        {
          text: `<b>Step 1</b> - Complete a New York LLC Search and Choose a Unique Business Name`,
          blockID: `step1`,
        },
        {
          text: `<b>Step 2</b> - Provide an Official Business Address for Your New York LLC`,
          blockID: `step2`,
        },
        {
          text: `<b>Step 3</b> - Assign a New York Registered Agent`,
          blockID: `step3`,
        },
        {
          text: `<b>Step 4</b> - File Your Articles of Incorporation with the New York Division of Corporations`,
          blockID: `step4`,
        },
        {
          text: `<b>Step 5</b> - Get an Employer Identification Number (EIN) From the Internal Revenue Service`,
          blockID: `step5`,
        },
        {
          text: `<b>Step 6</b> - Meet the New York Publication Requirement`,
          blockID: `step6`,
        },
        {
          text: `<b>Step 7</b> - Create a New York LLC Operating Agreement`,
          blockID: `step7`,
        },
      ],
      step1: {
        heading1: `Complete a New York LLC Search and Choose a Unique Business Name`,
        text1: `You will need a distinctive and original name for your New York LLC that’s not used by any other business in NY. If you’re having trouble coming up with a name, try out Incfile’s <a href="/business-name-generator/">Business Name Generator</a> to brainstorm ideas. There are also a few naming rules you’ll need to follow, which you can read about in detail on our section on <a href="/new-york-llc/new-york-business-names/">New York LLC Business Names.</a>`,
        text2: `If you already have a name in mind, make sure it’s available by using the New York business entity name search on the <a href="https://www.dos.ny.gov/corps/bus_entity_search.html" target="_blank" rel="noopener noreferrer">NY Department of State (DOS) website</a> or Incfile’s free Business Name Search tool.`,
        cta: {
          title: `Incfile’s Business <br>Name Search Tool`,
          subtitle: `We’ll search the New York Division of Corporations registry for you.`,
          button: {
            text: `Check Availability`,
            url: `/business-name-search/`,
          },
        },
      },
      step2: {
        heading1: `Provide an Official Business Address for Your NY LLC`,
        text1: `Every New York LLC must have a designated street address. That could be your home address (if you’re running the company from your residence), your company’s office building or any physical address of your preference. The address can be outside the state of New York, but it cannot be a P.O. Box.`,
      },
      step3: {
        heading1: `Assign a New York Registered Agent`,
        text1: `Every NY LLC must have a “Registered Agent” when it is formed. This is an official position; the Registered Agent is someone who receives official legal and tax correspondence and has responsibility for filing reports with the New York Department of State.`,
        text2: `This position can be filled by you, another manager in the business or a dedicated Registered Agent service. Your Registered Agent must have a physical street address in New York and must be present to receive important documents for your company during business hours.`,
        text3: `<b>An Important Note:</b> New York is unique in that it has a publication requirement for LLCs (see more on this below). This means your Registered Agent’s name and address will be published in the newspaper, so you may want to choose a Registered Agent service to keep your home address private.`,
        text4: `At Incfile, all of our packages include a New York Registered Agent service that is free for the first year and just $119 per year afterward. We also have a dashboard where you can log in and easily view any document your Registered Agent has received on your behalf.`,
        groupBtn1: [
          {
            header: `Learn More About New York Registered Agents`,
            url: `/new-york-llc/registered-agents-new-york-llc/`,
          },
          {
            header: `Get A Free Registered Agent Whe You Incorporate With Incfile`,
            url: `${process.env.ORDER_URL}/form-order-now.php?entityType=LLC&entityState=NY`,
          },
        ],
      },
      step4: {
        heading1: ` File Your Articles of Incorporation with the New York Division of Corporations`,
        text1: `Once you've gathered all the information together for your New York LLC, you’ll need to file a formal document with the NY Department of State, Division of Corporations. This document is known as your “Articles of Organization,” and filing the document creates your New York LLC.`,
        lists: {
          header: `Here’s what is typically included:`,
          list: [`Your business name and address`, `Details of your Registered Agent`, `Name and address of the incorporator`],
        },
        dowload_205_button: {
          text: `Download New York's Articles of Organization Form Here`,
          url: `https://www.dos.ny.gov/forms/corporations/1336-f.pdf`,
        },
        text2: `You can file your Articles of Organization online on the New York Business Express website, mail in a form or have Incfile do it on your behalf for free. The state of New York charges a $205 fee ($200 + $5 for a paper copy) to file and start an LLC`,
        certificate_info: [
          {
            text1: `File by Mail:`,
            text2: `Department of State Division of Corporations <br>State Records and Uniform Commercial Code <br>One Commerce Plaza</br>99 Washington Ave.</br>Albany, NY 12231-0001</br>`,
          },
        ],

        text3: `You only need to file your Articles of Organization with the State of New York once, but you will need to file a biennial report for your LLC, which has its own fees. This is also something Incfile can remind you to do or do for you if you choose to have us handle the paperwork.`,
        cta: {
          title: `Have Incfile Handle <br>all the Paperwork`,
          subtitle: `for You for $0 + the New York State fee`,
          button: {
            text: `Form Your LLC Now For Free`,
            url: `${process.env.ORDER_URL}/form-order-now.php?entityType=LLC&entityState=NY`,
          },
        },
        annualReport: [
          {
            title: `What are the fees and requirements to form a business in New York?`,
            items: [
              {
                text1: `State Fee`,
                text2: `$205`,
              },
              {
                text1: `State Filing Time`,
                text2: `5 Business Days`,
              },
              {
                text1: `Expedited Filing Time`,
                text2: `1 Business Day`,
              },
            ],
          },
          {
            title: `Annual Report`,
            items: [
              {
                text1: `Frequency:`,
                text2: `Biennially`,
              },
              {
                text1: `Due Date:`,
                text2: `During anniversary month of organization.`,
              },
              {
                text1: `Filing Fee:`,
                text2: `$9`,
              },
              {
                text1: `Important: `,
                text2: `Section 206 of the New York State Limited Liability Company Law requires that within 120 days after the effectiveness of the initial articles of organization, a limited liability company (LLC) must publish in two newspapers a copy of the articles of organization or a notice related to the formation of the LLC. The newspapers must be designated by the county clerk of the county in which the office of the LLC is located, as stated in the articles of organization. After publication, the printer or publisher of each newspaper will provide you with an affidavit of publication. A Certificate of Publication, with the affidavits of publication of the newspapers attached, must be submitted to the New York Department of State, Division of Corporations, One Commerce Plaza, 99 Washington Avenue, Albany, NY 12231. The fee for filing the Certificate of Publication is $50.</br>

                               <b> (We do not assist in the filing of the Publication Requirement)</b>`,
              },
            ],
          },
        ],
      },
      step5: {
        heading1: `Get an Employer Identification Number (EIN) From the Internal Revenue Service`,
        text1: `You will need an EIN to identify your business to the IRS. You use this number when filing and paying taxes or when submitting payroll information and payments for your employees. An EIN number is also required to open a business bank account. You can obtain one directly from the IRS, or Incfile can get one for you as part of the Texas LLC business formation process.`,
      },
      step6: {
        heading1: ` Meet the New York Publication Requirement`,
        text1: `New York has an additional requirement for LLCs — you must publish a notice of formation in two local newspapers in the county in which your business is formed. These newspapers must be ones already approved by the County Clerk’s office.`,
        text2: `Publication must be complete within 120 days of your official LLC incorporation date, and you need to run the notices for six consecutive weeks. You can see step-by-step instructions for this process in our "How to Meet New York LLC Publication Requirements" guide.`,
        text3: `Once you’ve met the publication requirements, the newspapers will send you an Affidavit of Publication, which you then need to file with the Department of State to receive your Certificate of Publication. The state charges a $50 fee for this certificate.`,
        text4: `<a href="https://www.dos.ny.gov/forms/corporations/1708-f-l.pdf" target="_blank" rel="noopener noreferrer">Download New York's Certificate of Publication Form</a>`,
      },
      step7: {
        heading1: `Create an LLC Operating Agreement`,
        text1: `An operating agreement is a kind of “instruction manual” that outlines how you will run your business. It includes how decisions are made, how the business is divided amongst members, and what happens if a member leaves the company.`,
        text2: `New York requires that LLCs have an Operating Agreement in place. This does not need to be filed with the Division of Corporations but should be kept on hand.`,
        button1: {
          text: `Learn More About Operating Agreemets Here`,
          url: `/blog/post/operating-agreement-llc/`,
        },
        cta: {
          title: `Receive a personalized <br>operating agreement`,
          subtitle: `when you select Incfle’s Gold package`,
          button: {
            text: `Form Your LLC Now`,
            url: `${process.env.ORDER_URL}/form-order-now.php?entityType=LLC&entityState=NY`,
          },
        },
      },
    },
    otherInfo: [
      {
        type: `heading`,
        size: 3,
        content: `Other Important New York LLC Info`,
      },
      {
        type: `heading`,
        size: 4,
        content: `Special Types of LLCs in New York`,
      },
      {
        type: `paragraph`,
        content: `A regular LLC is suitable for most business needs, but you also have a few other options in New York State.`,
      },
      {
        type: `heading`,
        size: 4,
        content: `Series LLCs`,
      },
      {
        type: `paragraph`,
        content: `In Texas, you also have the option to set up a “Series LLC” — these are specialized LLCs designed to allow you to manage multiple separate LLCs under one master, umbrella LLC. These can be very useful if you don’t want to set up a separate Texas LLC for every individual business you run.`,
      },
      {
        type: `heading`,
        size: 4,
        content: `Professional LLCs`,
      },
      {
        type: `paragraph`,
        content: `Some states, including New York, allow certain occupations to form “Professional LLCs.” These types of businesses typically have specialized requirements and licensing. The specific occupations that can form a Professional LLC in NY include attorneys, counselors-at-law, licensed physicians and occupations designated in Title Eight of the Education Law.`,
      },
      {
        type: `paragraph`,
        content: `<a href="http://www.op.nysed.gov/corp/pcorpdompllc.htm" target="_blank" rel="noopener noreferrer">Information on Professional LLCs in New York State</a>`,
      },
      {
        type: `heading`,
        size: 4,
        content: `Foreign LLCs in New York`,
      },
      {
        type: `paragraph`,
        content: `If your business is already operating in another state and expanding to New York, you’ll need to form a Foreign LLC.`,
      },
      {
        type: "arrow-links",
        content: [
          {
            text: `Find more information on New York filing and licensing requirements here`,
            url: `/new-york-llc/fees-filing-requirements/`,
          },
        ],
      },
      // Helpful resource
      {
        type: `heading`,
        size: 4,
        content: `Read More Information from the New York Department of State`,
      },
      {
        type: `paragraph`,
        content: `The NY Department of State has plenty of additional information on forming and running a business in New York. Click on the links below for more details.`,
      },
      {
        type: "arrow-links",
        content: [
          {
            text: `New York Department of State for forming and running your LLC`,
            url: `https://www.dos.ny.gov/#`,
          },
          {
            text: `New York Department of Labor for employers and hiring`,
            url: `https://www.labor.ny.gov/home/businesses.php`,
          },
          {
            text: `New York Department of Taxation and Finance for taxes`,
            url: `https://www.tax.ny.gov/`,
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
            text: `Naming Your New York LLC`,
            url: `/new-york-llc/new-york-business-names/`,
          },
        ],
      },
      {
        type: `paragraph`,
        content: `How to search the New York business registry of the NY Department of State and find the right name. Includes information on naming rules, fictitious names, reserving a New York LLC name and more.`,
      },
      {
        type: "button",
        theme: `secondary56`,
        content: {
          text: `Search For Your New York LLC Name`,
          url: `/`,
        },
      },
      {
        type: "arrow-links",
        content: [
          {
            style: {
              marginBottom: `24px`,
            },
            text: `New York Registered Agents`,
            url: `/new-york-llc/registered-agents-new-york-llc/`,
          },
        ],
      },
      {
        type: `paragraph`,
        content: `How to appoint a New York Registered Agent to your new LLC or change to a different Registered Agent. Includes information on Registered Agent rules and searching for New York Registered Agents.`,
      },
      {
        type: "arrow-links",
        content: [
          {
            style: {
              marginBottom: `24px`,
            },
            text: `Fees and Requirements for Your New York LLC`,
            url: `/new-york-llc/fees-filing-requirements/`,
          },
        ],
      },
      {
        type: `paragraph`,
        content: `How to understand the various fees you’ll need to pay and the requirements you’ll need to meet for both federal and New York rules. Includes details of Employer Identification Numbers (EINs), New York and federal business licenses, New York annual reports and more.`,
      },
      {
        type: "arrow-links",
        content: [
          {
            style: {
              marginBottom: `24px`,
            },
            text: `Business Taxes for Your New York LLC`,
            url: `/new-york-llc/business-taxes/`,
          },
        ],
      },
      {
        type: `paragraph`,
        content: `How to understand the various taxes you will need to pay to the federal and New York government. Includes details of federal taxes like income and self-employment and New York taxes like sales tax and income tax.`,
      },
    ],
  },
};
