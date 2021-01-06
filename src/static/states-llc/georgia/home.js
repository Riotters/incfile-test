export const HomePageContent = {
  header: {
    title: `How to Start an LLC in Georgia`,
    size: 1,
    template: 1,
    subline: ``,
    boxes: [
      {
        title: `Learn how to form a <br> Georgia LLC yourself`,
        size: 2,
        template: 3,
        desc: `Read our DIY guide to Georgia LLC formation, with information on Registered Agents, naming rules, business licenses, and more.`,
        button: {
          text: `Read The Guide`,
          url: "#video",
        },
      },
      {
        title: `Have Incfile do the work for you <br><span style="color:#FD8550">$0 + State fee</span>`,
        size: 2,
        template: 3,
        desc: `Incfile can take care of all your LLC formation paperwork—and we’ll do it for free. Just pay the required Georgia state fee ($[STATE_FEE]).`,
        button: {
          text: `Form Your LLC Now`,
          url: `${process.env.ORDER_URL}/form-order-now.php?entityType=LLC&entityState=GA`,
        },
      },
    ],
  },
  content: {
    whyChoose: {
      heading: "Why Get an LLC in Georgia?",
      text1:
        "Georgia is a wonderful place to start a business — it’s an innovator’s dream as one of the main technical hubs in the U.S. with access to international trade and the world’s busiest airport (Atlanta). Great universities, access to talent and a rich culture combine to create the perfect backdrop for a successful business venture. Georgia is already home to the headquarters of the most famous brand in the world (Coca-Cola); other businesses, including the Home Depot, UPS, Delta and Suntrust, also call the state home.",
      text2:
        "For most business owners, the fastest and easiest way to start a business in Georgia is by creating a Georgia LLC. A limited liability company (LLC) is a type of business entity that’s ideal for startups and small- to medium-sized businesses. You get the advantages and protections of larger Georgia corporations but with much simpler rules and regulations.",
      text3: "The benefits of starting a Georgia LLC:",
      lists: [
        `Separating and limiting your personal liability from your business liability and debts`,
        `Quick and simple filing, management, compliance, regulations and administration of your Georgia LLC`,
        `Easy tax filing and potential advantages for tax treatment`,
      ],
      learnmore: `Learn more about the <a href="/limited-liability-company/">benefits of the LLC business structure.</a>`,
      text4: `In this guide you’ll find information on searching for and naming your TX LLC, getting a Georgia Registered Agent, the fees you’ll need to pay, Georgia business taxes and much more. We also cover the various ways you’ll interact with the Georgia Secretary of State, filing your LLC and your registration needs.`,
    },
    mainSteps: {
      heading3: `Create Your Georgia LLC Yourself: 6 Main Steps`,
      navSteps: [
        {
          text: `<b>Step 1</b> - Pick a Unique Business Name and Run a Georgia Entity Search`,
          blockID: `step1`,
        },
        {
          text: `<b>Step 2</b> - Provide an Official Business Address for Your GA LLC`,
          blockID: `step2`,
        },
        {
          text: `<b>Step 3</b> - Assign a Registered Agent for Your Georgia LLC`,
          blockID: `step3`,
        },
        {
          text: `<b>Step 4</b> - File Your Articles of Organization with the Georgia Secretary of State`,
          blockID: `step4`,
        },
        {
          text: `<b>Step 5</b> - Get an Employer Identification Number (EIN) from the Internal Revenue Service`,
          blockID: `step5`,
        },
        {
          text: `<b>Step 6</b> - Create a Georgia LLC Operating Agreement`,
          blockID: `step6`,
        },
      ],
      step1: {
        heading1: `STEP 1 : Pick a Unique Business Name and Run a Georgia Entity Search`,
        text1: `You will need a distinctive and original name for your Georgia LLC that’s not used by any other business in GA. Incfile’s <a href="/business-name-generator/">Business Name Generator</a> is a great way to brainstorm company names — the tool also allows you to easily check the Georgia Secretary of State (SOS) Corporations Division business registry to verify your name isn’t already being used by another company.</a>`,
        text2: `If you’ve already chosen a name, you can make sure it’s available by using the Georgia business search on the <a href="https://ecorp.sos.ga.gov/"target="_blank" rel="noopener noreferrer">GA Secretary of State website</a> or Incfile’s <a href="/business-name-search/"> free Business Name Search tool. </a>`,
        text3: `There are several rules you’ll need to follow with your LLC name, which you can learn about in the <a href="/georgia-llc/georgia-business-names/"> Georgia business names section</a> of this guide. One rule, for example, is that your business name cannot use any of the following terms without approval from the Office of Insurance and Safety Fire Commissioner: “insurance,” “assurance,” “surety,” “fidelity,” “reinsurance,” “reassurance” or “indemnity.”`,
        cta: {
          title: `Incfile’s Business <br>Name Search Tool`,
          subtitle: `We’ll search the Georgia Secretary <br>of State registry for you.`,
          button: {
            text: `Check Availability`,
            url: `/business-name-search/`,
          },
        },
      },
      step2: {
        heading1: `STEP 2 : Provide an Official Business Address for Your GA LLC`,
        text1: `Every Georgia LLC must have a designated street address. That could be your home address (if you’re running the company from your residence), your company’s office building or any physical address of your preference. The address can be outside the state of Georgia and can be a P.O. Box.`,
      },
      step3: {
        heading1: `STEP 3 : Assign a Registered Agent for Your Georgia LLC`,
        text1: `Every GA LLC must have a “Registered Agent” when it is formed. This is an official position; the Registered Agent is someone who receives official legal and tax correspondence and has responsibility for filing reports with the Georgia Secretary of State.`,
        text2: `This position can be filled by you, another manager in the business or a dedicated Registered Agent service. If your Registered Agent is a person, they must reside in and have a physical street address in Georgia and must be present to receive important documents for your company during business hours. In Georgia, you designate your Registered Agent when you file your Articles of Organization and formally create your business.`,
        text3: `At Incfile, all of our packages include an Georgia Registered Agent service that is free for the first year and just $119 per year afterward. We also have a dashboard where you can log in and easily view any document your Registered Agent has received on your behalf.`,
        groupBtn1: [
          {
            header: `Learn More About Georgia Registered Agents`,
            url: `/georgia-llc/registered-agents-georgia-llc/`,
          },
          {
            header: `Get a Free Registered Agent When You Incorporate with Incfile`,
            url: `${process.env.ORDER_URL}/form-order-now.php?entityType=LLC&entityState=GA`,
          },
        ],
      },
      step4: {
        heading1: `STEP 4 : File Articles of Organization with the Georgia Secretary of State`,
        text1: `Once you've gathered all the information for your Georgia LLC, you’ll need to file both your Articles of Organization (Form CD 030) and Transmittal Information Form 231 with the GA Secretary of State Corporations Division. These documents formally create your Georgia LLC.`,
        link: {
          text: `Download Georgia's Form CD 030 Here`,
          url: `https://sos.ga.gov/corporations/acrobat/applications/Filing%20Template%20-%20Articles%20of%20Organization%20for%20LLC%20(CD%20030).pdf`,
          externalLink: true,
        },
        link2: {
          text: `Download Georgia's Transmittal Information Form (Form CD 231) Here`,
          url: `https://sos.ga.gov/corporations/acrobat/applications/Transmittal%20Form%20-%20Limited%20Liability%20Company%20(CD%20231).pdf`,
          externalLink: true,
        },
        // `<a href="https://sos.ga.gov/corporations/acrobat/applications/Filing%20Template%20-%20Articles%20of%20Organization%20for%20LLC%20(CD%20030).pdf" target="_blank" rel="noopener noreferrer" >Download Georgia's Form CD 030 Here</a>`,
        // text3: `<a href="https://sos.ga.gov/corporations/acrobat/applications/Transmittal%20Form%20-%20Limited%20Liability%20Company%20(CD%20231).pdf" target="_blank" rel="noopener noreferrer" >Download Georgia's Transmittal Information Form (Form CD 231) Here</a>`,
        text4: `You can file both your Articles of Organization and Transmittal Information Form online on the <a href="https://ecorp.sos.ga.gov/Account" target="_blank" rel="noopener noreferrer" >Georgia Secretary of State website</a>, mail them in or have Incfile do it on your behalf for free. The State of Georgia charges a $100 fee to file and start an LLC in Georgia.`,
        text5: `<b>File by Mail:</b></br>
                  Corporations Division</br>
                  2 Martin Luther King Jr. Dr. SE,</br>
                  Suite 313 West Tower</br>
                  Atlanta, GA 30334`,

        text6: `You only need to file your Articles of Organization with the State of Georgia once, but you will need to file an annual report for your LLC, which has its own fees. This is also something Incfile can remind you to do or do for you if you choose to have us handle the paperwork.`,
        cta: {
          title: `Have Incfile Handle <br>All the Paperwork for You`,
          subtitle: `For $0 + the Georgia State fee.`,
          button: {
            text: `Form Your LLC Now for Free`,
            url: `${process.env.ORDER_URL}/form-order-now.php?entityType=LLC&entityState=GA`,
          },
        },
      },
      step5: {
        heading1: `STEP 5 : Get an Employer Identification Number (EIN) from the Internal Revenue Service`,
        text1: `You will need an EIN to identify your business to the IRS. You use this number when filing and paying taxes or when submitting payroll information and payments for your employees. You can obtain one directly from the IRS, or we can get one for you as part of the Georgia LLC business formation process.`,
      },
      step6: {
        heading1: `STEP 6 : Create an LLC Operating Agreement`,
        text1: `An Operating Agreement is a kind of “instruction manual” that outlines how you will run your business. It includes how decisions are made, how the business is divided amongst members and what happens if a member leaves the company.`,
        text2: `Georgia does not require that LLCs have an operating agreement in place, but it’s a good idea to create one, nonetheless.`,
        button1: {
          text: `Learn More About Operating Agreements Here`,
          url: `https://www.incfile.com/blog/post/operating-agreement-llc/`,
        },
        cta: {
          title: `Receive a Personalized <br>Operating Agreement`,
          subtitle: `When you select Incfile’s Gold package.`,
          button: {
            text: `Form Your LLC Now`,
            url: `${process.env.ORDER_URL}/form-order-now.php?entityType=LLC&entityState=GA`,
          },
        },
      },
    },
    otherInfo: [
      {
        type: `heading`,
        content: `Other Important Georgia LLC Info`,
        size: 2,
        template: 3,
        left: true,
        bottomMargin: 48,
      },
      {
        type: `heading`,
        size: 3,
        template: 4,
        content: `Special Types of LLCs in Georgia`,
      },
      {
        type: `paragraph`,
        content: `A regular LLC is suitable for most business needs, but you also have a few other options in Georgia.`,
        bottomMargin: 40,
      },
      {
        type: `heading`,
        size: 4,
        template: 4,
        content: `Professional LLCs`,
      },
      {
        type: `paragraph`,
        content: `Some states allow certain occupations to form “Professional LLCs.” These types of businesses typically have specialized requirements and licensing. Georgia does not recognize or allow Professional LLCs, although professionals can still form regular LLCs.`,
      },
      {
        type: `heading`,
        size: 4,
        template: 4,
        content: `Foreign LLCs`,
      },
      {
        type: `paragraph`,
        content: `If your business is already operating in another state and expanding to Georgia, you’ll need to form a Foreign LLC.`,
      },
      {
        type: "arrow-links",
        content: [
          {
            style: {
              marginBottom: `40px`,
            },
            text: `More information on Georgia filing and licensing requirements can be found here.`,
            url: `/georgia-llc/fees-filing-requirements/`,
          },
        ],
      },
      // Helpful resource
      {
        type: `heading`,
        size: 3,
        template: 3,
        content: `Read More Information from the Georgia Secretary of State`,
      },
      {
        type: `paragraph`,
        content: `The GA Secretary of State has plenty of additional information on forming and running a business in Georgia. Click on the links below for more details.`,
      },
      {
        type: "arrow-links",
        content: [
          {
            text: `Georgia Secretary of State for forming and running your LLC`,
            url: `https://georgia.gov/starting-business-guide`,
          },
          {
            text: `Georgia Department of Labor for employers and hiring`,
            url: `https://dol.georgia.gov/employers`,
          },
          {
            style: {
              marginBottom: `32px`,
            },
            text: `Georgia Department of Revenue for taxes`,
            url: `https://dor.georgia.gov/taxes/business-taxes`,
          },
        ],
      },

      // More info in this guide
      {
        type: `heading`,
        size: 3,
        template: 3,
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
              marginBottom: `32px`,
            },
            text: `Naming Your Georgia LLC`,
            url: `/georgia-llc/georgia-business-names/`,
          },
        ],
      },
      {
        type: `paragraph`,
        content: `Learn about Georgia naming rules, fictitious names, how to reserve a name and how to check business name availability using Incfile’s <a href="/business-name-search/" >dedicated Business Name Search tool.</a>`,
        marginBottom: 40,
      },
      {
        type: "arrow-links",
        content: [
          {
            style: {
              marginBottom: `32px`,
            },
            text: `Georgia Registered Agents`,
            url: `/georgia-llc/registered-agents-georgia-llc/`,
          },
        ],
      },
      {
        type: `paragraph`,
        content: `Learn how to appoint a Georgia Registered Agent to your new LLC or change to a different Registered Agent. Includes information on Registered Agent rules and searching for Georgia Registered Agents.`,
        marginBottom: 40,
      },
      {
        type: "arrow-links",
        content: [
          {
            style: {
              marginBottom: `32px`,
            },
            text: `Fees and Requirements for Your Georgia LLC`,
            url: `/georgia-llc/fees-filing-requirements/`,
          },
        ],
      },
      {
        type: `paragraph`,
        content: `Learn about the various fees you’ll need to pay and the requirements you’ll need to meet for both federal and Georgia rules. Includes information on Employer Identification Numbers (EINs), Georgia and federal business licenses, annual reports and more.`,
        marginBottom: 40,
      },
      {
        type: "arrow-links",
        content: [
          {
            style: {
              marginBottom: `32px`,
            },
            text: `Business Taxes for Your Georgia LLC`,
            url: `/georgia-llc/business-taxes/`,
          },
        ],
      },
      {
        type: `paragraph`,
        content: `How to understand the various taxes you will need to pay to the federal and Georgia government. Includes details of federal taxes like income and self-employment and Georgia taxes like sales tax and income tax.`,
        marginBottom: 40,
      },
    ],
  },
};
