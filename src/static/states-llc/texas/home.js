export const HomePageContent = {
  header: {
    title: `How to Start an LLC in Texas`,
    subline: `aaa`,
    boxes: [
      {
        title: `Learn how to form a Texas <br>LLC yourself`,
        desc: `Read our DIY guide to Texas LLC formation, with information on Registered Agents, naming rules, business licenses, and more.`,
        button: {
          text: `Read The Guide`,
          url: "#video",
        },
      },
      {
        title: `Have Incfile do the work for you <br><span style="color:#FD8550">$0 + State fee</span>`,
        desc: `Incfile can take care of all your LLC formation paperwork—and we’ll do it for free. Just pay the required Texas state fee ($[STATE_FEE]).`,
        button: {
          text: `Form Your LLC Now`,
          url: `${process.env.ORDER_URL}/form-order-now.php?entityType=LLC&entityState=TX`,
        },
      },
    ],
  },
  content: {
    whyChoose: {
      heading: "Why Choose Texas for Your LLC?",
      text1:
        "The Lone Star state is a great place to start a business. A combination of natural resources, lots of land area and culturally diverse cities makes Texas a center of opportunity.",
      text2:
        "For most business owners, the fastest and easiest way to start a business in Texas is by creating a Texas LLC. A Limited Liability Company (LLC) is a type of business entity that’s ideal for startups and small- to medium-sized businesses. You get the advantages and protections of larger Texas corporations but with much simpler rules and regulations.",
      text3: `The benefits of starting a Texas LLC:`,
      lists: [
        `Separating and limiting your personal liability from your business liability and debts`,
        `Quick and simple filing, management, compliance, regulations and administration of your Texas LLC`,
        `Easy tax filing and potential advantages for tax treatment`,
        `Texas doesn’t have a state income tax, so you keep more of your TX LLC earnings`,
      ],
      learnmore: `Learn more about the <a href="/limited-liability-company/">benefits of the LLC business structure.</a>`,
      text4: `In this guide you’ll find information on searching for and naming your TX LLC, getting a Texas Registered Agent, the fees you’ll need to pay, TX business taxes and much more. We also cover the various ways you’ll interact with the Texas Secretary of State, filing your LLC and your registration needs.`,
    },
    mainSteps: {
      heading3: `Forming Your Texas LLC Yourself: 6 Main Steps`,
      navSteps: [
        {
          text: `<b>Step 1</b> - Complete a Texas LLC Search and Choose a Unique Business Name`,
          blockID: `step1`,
        },
        {
          text: `<b>Step 2</b> - Provide an Official Business Address for Your TX LLC`,
          blockID: `step2`,
        },
        {
          text: `<b>Step 3</b> - Assign a Texas Registered Agent`,
          blockID: `step3`,
        },
        {
          text: `<b>Step 4</b> - File Your Certificate of Formation (Form 205) With the Texas Secretary of State`,
          blockID: `step4`,
        },
        {
          text: `<b>Step 5</b> - Get an Employer Identification Number (EIN) From the Internal Revenue Service`,
          blockID: `step5`,
        },
        {
          text: `<b>Step 6</b> - Create a Texas LLC Operating Agreement`,
          blockID: `step6`,
        },
      ],
      step1: {
        heading1: `Complete a Texas LLC Search and Choose a Unique Business Name`,
        text1: `You will need a distinctive and original name for your Texas LLC that’s not used by any other business in TX. If you’re having trouble coming up with a name, try out Incfile’s <a href="/business-name-generator/">Business Name Generator</a> to brainstorm ideas. There are also a few naming rules you’ll need to follow, which you can read about in detail on our section on <a href="/texas-llc/texas-business-names/">Texas LLC Business Names.</a>`,
        text2: `Once you’ve chosen a name, you’ll need to make sure it’s available in Texas. To find out if another company is using your chosen business name, use Incfile’s fast and easy name search tool below. Alternatively, you can carry out a Texas business entity name search on the TX Secretary of State website.`,
        cta: {
          title: `Incfile’s Business <br>Name Search Tool`,
          subtitle: `We’ll search the Texas Secretary <br>of State registry for you.`,
          button: {
            text: `Check Availability`,
            url: `/business-name-search/`,
          },
        },
      },
      step2: {
        heading1: `Provide an Official Business Address for Your TX LLC`,
        text1: `Every Texas LLC must have a designated street address. That could be your home address (if you’re running the company from your residence), your company’s office building or any physical address of your preference. The address can be outside the state of Texas and can be a P.O. Box.`,
      },
      step3: {
        heading1: `Assign a Texas Registered Agent`,
        text1: `Every Texas LLC is required to have a “Registered Agent.” This is an official position; the Registered Agent is someone who receives official legal and tax correspondence and has responsibility for filing reports with the Texas Secretary of State.`,
        text2: `This position can be filled by you, another manager in the business or a dedicated Registered Agent service. Your TX Registered Agent must have a physical street address in Texas and must be present to receive important documents for your company during business hours. In Texas, your Registered Agent must consent to this appointment using the Acceptance of Consent Form 401-A.`,
        text3: `At Incfile, all of our packages include a Texas Registered Agent service that is free for the first year and just $119 per year afterward. We also have a dashboard where you can log in and easily view any document your Registered Agent has received on your behalf.`,
        button1: {
          text: `Learn More About Texas Registered Agents`,
          url: `/texas-llc/registered-agents-texas-llc/`,
        },
        button2: {
          text: `Get A Free Registered Agent When You Incorporate With Incfile`,
          url: `${process.env.ORDER_URL}/form-order-now.php?entityType=LLC&entityState=TX`,
        },
      },
      step4: {
        heading1: `File Your Certificate of Formation (Form 205) With the Texas Secretary of State`,
        text1: `Once you've gathered all the information for your Texas LLC, you’ll need to file a formal document with the Texas Secretary of State. This document is known as your “Certificate of Formation,” and filing the document officially creates your Texas LLC. Here’s what is typically included:`,
        lists: {
          list: [
            `Your business name and address`,
            `Details of your Registered Agent`,
            `Governing authority`,
            `Purpose of the LLC`,
            `Supplemental provisions`,
            `Name of the organizer`,
            `Whether your LLC will be member-managed or manager-managed`,
          ],
        },
        dowload_205_button: {
          text: `Download Form 205`,
          url: `https://www.sos.state.tx.us/corp/forms/205_boc.pdf`,
        },
        text2: `You can file your Texas LLC Certificate of Formation online with the Texas <a href="https://direct.sos.state.tx.us/acct/acct-login.asp">SOSDirect</a> filing system, mail in a form to the Office of the Secretary of State, or have Incfile do it on your behalf. The state of Texas charges a $300 fee to file and start an LLC.`,
        certificate_info: [
          {
            text1: `File by Mail:`,
            text2: `Secretary of State <br>P.O. Box 13697 <br>Austin, TX 78711`,
          },
          {
            text1: `Submit in Person:`,
            text2: `James Earl Rudder Office Building<br> 1019 Brazos<br> Austin, TX 78701`,
          },
          {
            text1: `Fax:`,
            text2: `(512) 463-5709`,
          },
        ],

        text3: `You only need to file your Certificate of Formation once, but every year after you will also need to file an annual report for your LLC. This is also something Incfile can remind you to do / do for you if you choose to have us handle the paperwork.`,
        cta: {
          title: `Have Incfile Handle <br>all the Paperwork`,
          subtitle: `for You for $0 + the Texas State fee`,
          button: {
            text: `Form Your LLC Now For Free`,
            url: `${process.env.ORDER_URL}/form-order-now.php?entityType=LLC&entityState=TX`,
          },
        },
      },
      step5: {
        heading1: `Get an Employer Identification Number (EIN) From the Internal Revenue Service`,
        text1: `You will need an EIN to identify your business to the IRS. You use this number when filing and paying taxes or when submitting payroll information and payments for your employees. An EIN number is also required to open a business bank account. You can obtain one directly from the IRS, or Incfile can get one for you as part of the Texas LLC business formation process.`,
      },
      step6: {
        heading1: `Create a Texas LLC Operating Agreement`,
        text1: `An operating agreement is a kind of “instruction manual” that outlines how you will run your business. It includes how decisions are made, how the business is divided amongst members, and what happens if a member leaves the company.`,
        text2: `Many states require that a company have an operating agreement in place—it isn’t legally required in Texas, but it’s a good idea to have one nonetheless.`,
        button1: {
          text: `Learn More About Operating Agreements Here`,
          url: `https://www.incfile.com/blog/post/operating-agreement-llc/`,
        },
        cta: {
          title: `Receive a personalized <br>operating agreement`,
          subtitle: `when you select Incfile’s Gold package`,
          button: {
            text: `Form Your LLC Now`,
            url: `${process.env.ORDER_URL}/form-order-now.php?entityType=LLC&entityState=TX`,
          },
        },
      },
    },
    otherInfo: [
      {
        type: `heading`,
        size: 2,
        template: 3,
        marginBottom: 24,
        left: true,
        content: `Other Important Texas LLC Info`,
      },
      {
        type: `heading`,
        size: 3,
        content: `Special Types of LLCs in Texas`,
      },
      {
        type: `paragraph`,
        content: `A regular Texas LLC is suitable for most business needs, but you also have a few other options to incorporate a special type of LLC.`,
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
        type: "arrow-links",
        content: [
          {
            text: `Decide if a Texas Series LLC is right for your new business.`,
            url: `https://www.incfile.com/blog/post/series-llc-why-need-one/`,
          },
          {
            text: `What Is a Series LLC in Texas and Why Might You Need One?`,
            url: `https://www.incfile.com/blog/post/series-llc-in-texas/`,
          },
        ],
      },
      {
        type: `heading`,
        size: 4,
        content: `Professional LLCs`,
      },
      {
        type: `paragraph`,
        content: `Some states, including Texas, allow certain occupations to form “Professional LLCs.” These types of business typically have specialized requirements and licensing. Here are the occupations that the TX Secretary of State allows to form Texas professional LLCs:`,
      },
      {
        type: `list-dot`,
        content: {
          list: [
            `Doctors of medicine`,
            `Doctors of osteopathy`,
            `Podiatrists`,
            `Mental health professionals`,
            `Optometrists`,
            `Therapeutic optometrists`,
            `Chiropractors`,
            `Dentists`,
            `Veterinarians`,
          ],
        },
      },
      {
        type: `paragraph`,
        content: `A Professional LLC is also subject to a state franchise tax.`,
      },
      {
        type: `heading`,
        size: 4,
        content: `Out-of-State / Foreign LLCs`,
      },
      {
        type: `paragraph`,
        content: `If your business is already operating in another state and expanding to Texas, you’ll need to form a foreign LLC.`,
      },
      {
        type: "arrow-links",
        content: [
          {
            text: `More information on Texas filing and licensing requirements can be found here.`,
            url: `/texas-llc/fees-filing-requirements/`,
          },
        ],
      },
      // Helpful resource
      {
        type: `heading`,
        size: 3,
        content: `Helpful Resources from the Texas Secretary of State`,
      },
      {
        type: `paragraph`,
        content: `The TX Secretary of State has plenty of additional information on forming and running a business in Texas.`,
      },
      {
        type: "arrow-links",
        content: [
          {
            text: `Texas Secretary of State for forming and running your TX LLC`,
            url: `https://www.sos.state.tx.us/corp/index.shtml`,
          },
          {
            text: `Texas Workforce Commission for TX employers and hiring`,
            url: `https://www.twc.texas.gov/businesses`,
          },
          {
            text: `Texas Comptroller for TX taxes`,
            url: `https://comptroller.texas.gov/taxes/`,
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
            text: `Naming Your Texas LLC`,
            url: `/texas-llc/texas-business-names/`,
          },
        ],
      },
      {
        type: `paragraph`,
        content: `How to search the Texas business registry of the TX Secretary of State and find the right name. Includes information on naming rules, fictitious names, reserving a Texas LLC name and more.`,
      },
      {
        type: "modal-trigger",
        theme: `secondary56`,
        content: {
          text: `Search For Your texas LLC Name`,
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
            text: `Texas Registered Agents`,
            url: `/texas-llc/registered-agents-texas-llc/`,
          },
        ],
      },
      {
        type: `paragraph`,
        content: `How to appoint a Texas Registered Agent to your new LLC or change to a different Registered Agent. Includes information on Registered Agent rules and searching for Texas Registered Agents.`,
      },
      {
        type: "arrow-links",
        content: [
          {
            style: {
              marginBottom: `24px`,
            },
            text: `Fees and Requirements for Your Texas LLC`,
            url: `/texas-llc/fees-filing-requirements/`,
          },
        ],
      },
      {
        type: `paragraph`,
        content: `How to understand the various fees you’ll need to pay and the requirements you’ll need to meet for both federal and Texas rules. Includes details of Employer Identification Numbers (EINs), Texas and federal business licenses, Texas annual reports and more.`,
      },
      {
        type: "arrow-links",
        content: [
          {
            style: {
              marginBottom: `24px`,
            },
            text: `Business Taxes for Your Texas LLC`,
            url: `/texas-llc/business-taxes/`,
          },
        ],
      },
      {
        type: `paragraph`,
        content: `How to understand the various taxes you will need to pay to the federal and Texas government. Includes details of federal taxes like income and self-employment and Texas taxes like sales tax and income tax.`,
      },
    ],
  },
};

export const hsForm = {
  header: "Please enter the business name information",
  header2:
    "Let us know where we can let you know if your business name is available",
  hs_form_id: `7d5d3157-09f4-40f0-bfee-eff448ed0e24`,
  fileDownload: ``, // TODO: Add the correct file for download
  button: {
    text: "Download now",
    url: "/",
  },
};
