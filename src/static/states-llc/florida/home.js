export const HomePageContent = {
  header: {
    title: `How to Start an LLC in Florida`,
    subline: ``,
    boxes: [
      {
        title: `Learn How to Form a <br> Florida LLC Yourself`,
        desc: `Read our DIY guide to Florida LLC formation, with information on Registered Agents, naming rules, business licenses, and more.`,
        button: {
          text: `Read The Guide`,
          url: "#video",
        },
      },
      {
        title: `Have Incfile Do the Work for You <br><span style="color:#FD8550">$0 + State Fee</span>`,
        desc: `Incfile can take care of all your LLC formation paperwork—and we’ll do it for free. Just pay the required Florida state fee ($[STATE_FEE]).`,
        button: {
          text: `Form Your LLC Now`,
          url: `${process.env.ORDER_URL}/form-order-now.php?entityType=LLC&entityState=FL`,
        },
      },
    ],
  },
  content: {
    whyChoose: {
      heading: "Why Incorporate Your LLC in Florida?",
      text1:
        "Florida is a great place to start a business. A rich culture, beautiful cities like Miami and Orlando and access to many of the world’s best transport networks make the state home to some of the biggest businesses in the U.S. Companies like Publix, Tupperware, Burger King and more are proud to call Florida home. Disney, one of the world’s largest entertainment companies, is famous for its Disney World theme park in Orlando.",
      text2: `For most business owners, the fastest and easiest way to start a business in Florida is by creating a Florida LLC. A limited liability company (LLC) is a type of <a href="/florida-entity-search/">business entity</a> that’s ideal for startups and small- to medium-sized businesses. You get the advantages and protections of larger Florida corporations, but with much simpler rules and regulations.`,
      text3: `To summarize, the benefits of starting a Florida LLC include:`,
      lists: [
        `Separating and limiting your personal liability from your business liability and debts`,
        `Quick and simple filing, management, compliance, regulations and administration of your Florida LLC`,
        `Easy tax filing and potential advantages for tax treatment`,
        `There are no state taxes in Florida, so you get to keep more of your LLC earnings`,
      ],
      learnmore: `Learn more about the <a href="/limited-liability-company/">benefits of the LLC business structure.</a>`,
      text4: `In this guide you’ll find information on starting your Florida business, searching for and naming your LLC, registering your business, getting a Florida Registered Agent, the fees you’ll need to pay, business taxes and much more.`,
    },
    mainSteps: {
      heading3: `Forming Your Florida LLC Yourself: 6 Main Steps`,
      navSteps: [
        {
          text: `<b>Step 1</b> - Complete a Florida LLC Search and Choose a Unique Business Name`,
          blockID: `step1`,
        },
        {
          text: `<b>Step 2</b> - Provide an Official Business Address for Your FL LLC`,
          blockID: `step2`,
        },
        {
          text: `<b>Step 3</b> - Assign a Florida Registered Agent`,
          blockID: `step3`,
        },
        {
          text: `<b>Step 4</b> - File Your Articles of Incorporation with the Florida Division of Corporations`,
          blockID: `step4`,
        },
        {
          text: `<b>Step 5</b> - Get an Employer Identification Number (EIN) from the Internal Revenue Service`,
          blockID: `step5`,
        },
        {
          text: `<b>Step 6</b> - Create a Florida LLC Operating Agreement`,
          blockID: `step6`,
        },
      ],
      step1: {
        heading1: `Complete a Florida LLC Search and Choose a Unique Business Name`,
        text1: `You will need a distinctive and original name for your Florida LLC that’s not used by any other business in FL. If you’re having trouble coming up with a name, try out Incfile’s <a href="/business-name-generator/">Business Name Generator</a> to brainstorm ideas. There are also a few naming rules you’ll need to follow, which you can read about in detail on our section on <a href="/florida-llc/florida-business-names/">Florida LLC Business Names.</a>`,
        text2: `To find out if another company is using your chosen business name, you can carry out a Florida business entity name search using Incfile’s comprehensive Business Name Search tool, or you can use the Florida Division of Corporation’s Sunbiz website.`,
        cta: {
          title: `Incfile’s Business <br>Name Search Tool`,
          subtitle: `We’ll search the Florida Division <br>of Corporations registry for you.`,
          button: {
            text: `Check Availability`,
            url: `/business-name-search/`,
          },
        },
      },
      step2: {
        heading1: `Provide an Official Business Address for Your FL LLC`,
        text1: `Every Florida LLC must have a designated street address. That could be your home address (if you’re running the company from your residence), your company’s office building or any physical address of your preference. The address can be outside the state of Florida, but it cannot be a P.O. Box.`,
      },
      step3: {
        heading1: `Assign a Registered Agent for Your Florida LLC`,
        text1: `Every FL LLC must have a Registered Agent. This is an official position; the Registered Agent is someone who receives official legal and tax correspondence and has responsibility for filing reports with the Florida Department of State.`,
        text2: `This position can be filled by you, another manager in the business or a dedicated Registered Agent service. Your Registered Agent must have a physical street address in Florida and must be present to receive important documents for your company during business hours.`,
        text3: `At Incfile, all of our packages include a Florida Registered Agent service that is free for the first year and just $119 per year afterward. We also have a dashboard where you can log in and easily view any document your Registered Agent has received on your behalf.`,
        groupBtn1: [
          {
            header: `Learn More About Florida Registered Agents`,
            url: `/florida-llc/registered-agents-florida-llc/`,
          },
          {
            header: `Get a Free Registered Agent When You Incorporate with Incfile`,
            url: `${process.env.ORDER_URL}/form-order-now.php?entityType=LLC&entityState=FL`,
          },
        ],
      },
      step4: {
        heading1: `File Your Certificate of Formation (Form 205) with the Florida Secretary of State`,
        text1: `Once you've gathered all the information for your Florida LLC, you’ll need to file a formal document with the FL Department of State. This document is known as your Articles of Organization, and filing the document creates your Florida LLC. Here’s what is typically included:`,
        lists: {
          list: [
            `A cover letter with your name, address and daytime phone number`,
            `Your business name and address`,
            `Details of your Registered Agent`,
            `Names of managers or members of the LLC at the time of filing`,
            `Addresses of managers or members of the LLC at the time of filing`,
          ],
        },
        dowload_205_button: {
          text: `Download Form 205`,
          url: `https://www.sos.state.tx.us/corp/forms/205_boc.pdf`,
        },
        text2: `You can file your Articles of Organization online on the <a href="https://dos.myflorida.com/sunbiz/start-business/efile/fl-llc/">Sunbiz.org website</a>, mail in a form or have Incfile do it on your behalf for free. The State of Florida charges a $125 fee to file and start an LLC in Florida, but you only need to file your Articles of Organization once.`,
        certificate_info: [
          {
            text1: `File by Mail:`,
            text2: `New Filing Section <br>Division of Corporations <br>P.O. Box 6327 <br>Tallahassee, FL 32314`,
          },
          {
            text1: `Submit in Person:`,
            text2: `New Filing Section Division<br> The Centre of Tallahassee <br>2415 N. Monroe Street, Suite 810 <br> Tallahassee, FL 32303`,
          },
        ],

        text3: `You only need to file your Articles of Organization with the State of Florida once, but every year after you will need to file an annual report for your LLC, which has its own fees. This is also something Incfile can remind you to do or do for you if you choose to have us handle the paperwork.`,
        cta: {
          title: `Have Incfile Handle <br>All the Paperwork for You`,
          subtitle: `For $0 + the Florida State fee.`,
          button: {
            text: `Form Your LLC Now for Free`,
            url: `${process.env.ORDER_URL}/form-order-now.php?entityType=LLC&entityState=FL`,
          },
        },
        heading2: `Can I Expedite the Formation of My Business in Florida?`,
        text4: `The State of Florida does not offer expedited filing for LLCs and will process online filings in the order in which they are received. Incfile can internally expedite your order to ensure the fastest delivery to the state for filing.`,
      },
      step5: {
        heading1: `STEP 5: Get an Employer Identification Number (EIN) from the Internal Revenue Service`,
        text1: `You will need an EIN to identify your business to the IRS. You use this number when filing and paying taxes or when submitting payroll information and payments for your employees. You can obtain one directly from the IRS, or we can get one for you as part of the Florida LLC business formation process.`,
      },
      step6: {
        heading1: `STEP 6: Create a Florida LLC Operating Agreement`,
        text1: `An Operating Agreement is a kind of “instruction manual” that outlines how you will run your business. It includes how decisions are made, how the business is divided amongst members and what happens if a member leaves the company.`,
        text2: `Many states require that a company have an Operating Agreement in place — it isn’t legally required in Florida, but it’s a good idea to have one nonetheless.`,
        button1: {
          text: `Learn More About Operating Agreements Here`,
          url: `https://www.incfile.com/blog/post/operating-agreement-llc/`,
        },
        cta: {
          title: `Receive a Personalized <br>Operating Agreement`,
          subtitle: `When you select Incfile’s Gold package.`,
          button: {
            text: `Form Your LLC Now`,
            url: `${process.env.ORDER_URL}/form-order-now.php?entityType=LLC&entityState=FL`,
          },
        },
      },
    },
    otherInfo: [
      {
        type: `heading`,
        size: 2,
        template: 3,
        left: true,
        content: `Other Important Florida LLC Info`,
      },
      {
        type: `heading`,
        size: 3,
        template: 4,
        content: `Special Types of LLCs in Florida`,
      },
      {
        type: `paragraph`,
        content: `A regular Florida LLC is suitable for most business needs, but you also have a couple other options to incorporate a special type of LLC.`,
      },
      {
        type: `accordion`,
        header: 3,
        content: {
          items: [
            {
              question: `Professional LLCs`,
              answer: `<p>Some states, including Florida, allow certain occupations to form “Professional LLCs.” These types of business typically have specialized requirements and licensing. Here are the occupations that the FL Secretary of State allows to form Florida professional LLCs:</p></br>
                <p><ul>
                <li>Certified public accountants</li>
                <li>Public accountants</li>
                <li>Chiropractic physicians</li>
                <li>Dentists</li>
                <li>Osteopathic physicians</li>
                <li>Physicians and surgeons</li>
                <li>Doctors of medicine</li>
                <li>Doctors of dentistry</li>
                <li>Podiatric physicians</li>
                <li>Chiropodists</li>
                <li>Architects</li>
                <li>Veterinarians</li>
                <li>Attorneys at law</li>
                <li>Life insurance agents</li>
                </ul></p>`,
            },
            {
              question: `Foreign LLCs in Florida`,
              answer: `<p>If your business is already operating in another state and expanding to Florida, you’ll need to form a Foreign LLC.</p></br>
                <p><a href="/florida-llc/fees-filing-requirements/">More information on Florida filing and licensing requirements can be found here.</a></p>`,
            },
          ],
        },
        marginBottom: 48,
      },

      // Helpful resource
      {
        type: `heading`,
        size: 3,
        template: 4,
        content: `Read More Information from the Florida Department of State`,
      },
      {
        type: `paragraph`,
        content: `The FL Department of State has plenty of information on forming and running a business in Florida.`,
      },
      {
        type: "arrow-links",
        content: [
          {
            text: `Florida Department of State for forming and running your LLC`,
            url: `https://dos.myflorida.com/sunbiz/start-business/know-before-starting/`,
          },
          {
            text: `Florida Department of Economic Opportunity for employers and hiring`,
            url: `http://www.floridajobs.org/`,
          },
          {
            text: `Florida Department of Revenue for taxes`,
            url: `https://floridarevenue.com/Pages/info_business.aspx`,
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
            text: `Naming Your Florida LLC`,
            url: `/florida-llc/florida-business-names/`,
          },
        ],
      },
      {
        type: `paragraph`,
        content: `How to search the Florida business registry of the FL Secretary of State and find the right name. Includes information on naming rules, fictitious names, reserving a Florida LLC name and more.`,
      },
      {
        type: "modal-trigger",
        theme: `secondary56`,
        content: {
          text: `Search for Your Florida LLC Name`,
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
            text: `Florida Registered Agents`,
            url: `/florida-llc/registered-agents-florida-llc/`,
          },
        ],
      },
      {
        type: `paragraph`,
        content: `How to appoint a Florida Registered Agent to your new LLC or change to a different Registered Agent. Includes information on Registered Agent rules and searching for Florida Registered Agents.`,
      },
      {
        type: "arrow-links",
        content: [
          {
            style: {
              marginBottom: `24px`,
            },
            text: `Fees and Requirements for Your Florida LLC`,
            url: `/florida-llc/fees-filing-requirements/`,
          },
        ],
      },
      {
        type: `paragraph`,
        content: `How to understand the various fees you’ll need to pay and the requirements you’ll need to meet for both federal and Florida rules. Includes details of Employer Identification Numbers (EINs), Florida and federal business licenses, Florida annual reports and more.`,
      },
      {
        type: "arrow-links",
        content: [
          {
            style: {
              marginBottom: `24px`,
            },
            text: `Business Taxes for Your Florida LLC`,
            url: `/florida-llc/business-taxes/`,
          },
        ],
      },
      {
        type: `paragraph`,
        content: `How to understand the various taxes you will need to pay to the federal and Florida government. Includes details of federal taxes like income and self-employment and Florida taxes like sales tax and income tax.`,
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
