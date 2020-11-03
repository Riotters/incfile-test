import { color } from "../../atomic/atoms/styles/colors";
import { shadow } from "../../atomic/atoms/styles/shadows";
import BusinessName from "../../images/icons/your-business-name.inline.svg";
import CompanyFormation from "../../images/icons/company-formation.inline.svg";
import Financials from "../../images/icons/financials.inline.svg";
import Operations from "../../images/icons/operations.inline.svg";
import Workforce from "../../images/icons/workforce.inline.svg";
import Marketing from "../../images/icons/marketing.inline.svg";

export const top = {
  header: `The Complete "Start Your Business" Checklist`,
  text: `A Clear and Comprehensive Guide to Starting Your Business the Right Way`,
  buttons: [
    {
      text: `See the checklist`,
      url: `/`,
    },
    {
      text: `Download a PDF Checklist`,
      url: `#`,
    },
  ],
};
export const thanks_form = {
  header: "Thank you",
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis lacus vitae mi rutrum eleifend nec in nisi. Pellentesque ac neque fringilla, vehicula augue vitae, convallis libero.",
  button: {
    text: "Close",
    url: "#",
  },
};

export const form = {
  header: "Download The Complete Starting a Business Checklist",
  text: "From developing your business idea to measuring success, our free guide has all the info you need to get your business off the ground.",
  button: {
    text: "Download now",
    url: "#",
  },
  fields: [
    {
      label: "Email",
      type: "email",
      placeholder: "",
    },
    {
      label: "First Name",
      type: "text",
      placeholder: "",
    },
    {
      label: "Last Name",
      type: "text",
      placeholder: "",
    },
    {
      label: "Phone number",
      type: "text",
      placeholder: "",
    },
    {
      label: "I want to...",
      type: "select",
      placeholder: "Please select",
      options: ["Start a Business Soon", "Start a Business Now", "Grow a Business"],
    },
  ],
};

export const checks = {
  checklists: [
    {
      top: {
        header: "Your Business Name",
        background: color.orange2,
        shadow: shadow.orange2,
        icon: BusinessName,
      },
      items: [
        {
          isCompleted: false,
          id: 0,
          name: "Register Your Fictitious, Assumed or “Doing Business As” Name if Necessary",
          description: "test",
          height: 80,
        },
        {
          isCompleted: false,
          id: 1,
          name: "Choose a business name",
          description: "test",
          height: 80,
        },
        {
          isCompleted: false,
          id: 2,
          name: "Make sure no other business in your state has your name",
          description: "test",
          height: 80,
        },
        {
          isCompleted: false,
          id: 3,
          name: "Get social media accounts",
          description: "test",
          height: 80,
        },
        {
          isCompleted: false,
          id: 4,
          name: "Get a Website Domain Name and Email",
          description: "test",
          height: 80,
        },
      ],
    },
    {
      top: {
        header: "Company Formation",
        background: color.purple2,
        shadow: shadow.purple2,
        icon: CompanyFormation,
      },
      items: [
        {
          isCompleted: false,
          id: 0,
          name: "Get a Registered Agent for Your Business",
          description: "test",
          height: 80,
        },
        {
          isCompleted: false,
          id: 1,
          name: "Obtain a Federal Employer Identification Number (EIN)/Tax ID Number",
          description: "test",
          height: 80,
        },
        {
          isCompleted: false,
          id: 2,
          name: "Trademark Your Business Name",
          description: "test",
          height: 80,
        },
        {
          isCompleted: false,
          id: 3,
          name: "Satisfy All Business License and Permit Requirements",
          description: "test",
          height: 80,
        },
        {
          isCompleted: false,
          id: 4,
          name: "Create an Operating Agreement or Corporate Bylaws",
          description: "test",
          height: 80,
        },
        {
          isCompleted: false,
          id: 5,
          name: "Establish a Company Address or Virtual Mailbox Address",
          description: "test",
          height: 80,
        },
        {
          isCompleted: false,
          id: 6,
          name: "Get Business Insurance, If Needed",
          description: "test",
          height: 80,
        },
        {
          isCompleted: false,
          id: 7,
          name: "Choose the Right State to Form Your Business",
          description: "test",
          height: 80,
        },
      ],
    },
    {
      top: {
        header: "Financials",
        background: color.yellow2,
        shadow: shadow.yellow2,
        icon: Financials,
      },
      items: [
        {
          isCompleted: false,
          id: 0,
          name: "Open a Business Bank Account",
          description: "test",
          height: 80,
        },
        {
          isCompleted: false,
          id: 1,
          name: "Get a Business Loan, Financing or Other Funding",
          description: "test",
          height: 80,
        },
        {
          isCompleted: false,
          id: 2,
          name: "Get a Business Credit Card",
          description: "test",
          height: 80,
        },
        {
          isCompleted: false,
          id: 3,
          name: "Get an Accountant or Bookkeeper",
          description: "test",
          height: 80,
        },
        {
          isCompleted: false,
          id: 4,
          name: "Decide If You Want Your LLC Treated as an S Corporation for Tax Purposes",
          description: "test",
          height: 80,
        },
        {
          isCompleted: false,
          id: 5,
          name: "Decide on Accounting and Invoicing Software",
          description: "test",
          height: 80,
        },
        {
          isCompleted: false,
          id: 6,
          name: "Understand How to Track Expenses and What's Deductible",
          description: "test",
          height: 80,
        },
        {
          isCompleted: false,
          id: 7,
          name: "Understand Taxes",
          description: "test",
          height: 80,
        },
        {
          isCompleted: false,
          id: 8,
          name: "Understand Sales Tax",
          description: "test",
          height: 80,
        },
        {
          isCompleted: false,
          id: 9,
          name: "Know About the Sales Tax Nexus",
          description: "test",
          height: 80,
        },
        {
          isCompleted: false,
          id: 10,
          name: "Create Merchant Accounts to Accept Credit Card Payments",
          description: "test",
          height: 80,
        },
      ],
    },
    {
      top: {
        header: "Operations",
        background: color.babyblue2,
        shadow: shadow.babyblue2,
        icon: Operations,
      },
      items: [
        {
          isCompleted: false,
          id: 0,
          name: "Get Equipment",
          description: "test",
          height: 80,
        },
        {
          isCompleted: false,
          id: 1,
          name: "Research and Choose the Best Vendors and Suppliers",
          description: "test",
          height: 80,
        },
        {
          isCompleted: false,
          id: 2,
          name: "Get the Right Business Software",
          description: "test",
          height: 80,
        },
        {
          isCompleted: false,
          id: 3,
          name: "Get a Virtual Phone System",
          description: "test",
          height: 80,
        },
        {
          isCompleted: false,
          id: 4,
          name: "Understand How to Track Expenses and What's Deductible",
          description: "test",
          height: 80,
        },
        {
          isCompleted: false,
          id: 5,
          name: "Look Into Business Documents, Agreements and Contracts You Might Need",
          description: "test",
          height: 80,
        },
        {
          isCompleted: false,
          id: 6,
          name: "Connect With Other Entrepreneurs",
          description: "test",
          height: 80,
        },
        {
          isCompleted: false,
          id: 7,
          name: "Find Office Space",
          description: "test",
          height: 80,
        },
      ],
    },
    {
      top: {
        header: "Workforce",
        background: color.red2,
        shadow: shadow.red2,
        icon: Workforce,
      },
      items: [
        {
          isCompleted: false,
          id: 0,
          name: "Decide on a Payroll Service",
          description: "test",
          height: 80,
        },
        {
          isCompleted: false,
          id: 1,
          name: "Create an Employee Benefits Program",
          description: "test",
          height: 80,
        },
        {
          isCompleted: false,
          id: 2,
          name: "Establish Your Freelance and On-Demand Workforce Needs",
          description: "test",
          height: 80,
        },
        {
          isCompleted: false,
          id: 3,
          name: "Establish Your Permanent Workforce Needs",
          description: "test",
          height: 80,
        },
        {
          isCompleted: false,
          id: 4,
          name: "Learn About Legal Requirements and Responsibilities to Employees",
          description: "test",
          height: 80,
        },
      ],
    },
    {
      top: {
        header: "Marketing",
        background: color.green2,
        shadow: shadow.green2,
        icon: Marketing,
      },
      items: [
        {
          isCompleted: false,
          id: 0,
          name: "Get Business Cards",
          description: "test",
          height: 80,
        },
        {
          isCompleted: false,
          id: 1,
          name: "Create a Branded Email Signature",
          description:
            "In oculis quidem faciunt, ut labore et via procedat oratio quaerimus igitur, quid bonum esse ratione intellegi posse et molestiae non recusandae itaque negat opus esse appetendum, alterum aspernandum sentiamus alii autem, quibus ego assentior, cum a philosophis compluribus permulta dicantur, cur verear, ne ferae.",
        },
        {
          isCompleted: false,
          id: 2,
          name: "Build a Company Website",
          description: "test",
          height: 80,
        },
        {
          isCompleted: false,
          id: 3,
          name: "Use Google Analytics and Google Search Console on Your Website",
          description: "test",
          height: 80,
        },
        {
          isCompleted: false,
          id: 4,
          name: "Advertise Locally",
          description: "test",
          height: 80,
        },
        {
          isCompleted: false,
          id: 5,
          name: "Create Your Google Business Profile and Google Maps Listing",
          description: "test",
          height: 80,
        },
        {
          isCompleted: false,
          id: 6,
          name: "Advertise Online With Google Adwords",
          description: "test",
          height: 80,
        },
        {
          isCompleted: false,
          id: 7,
          name: "Try Social Media Advertising",
          description: "test",
          height: 80,
        },
        {
          isCompleted: false,
          id: 8,
          name: "Get a Business Logo Designed",
          description: "test",
          height: 80,
        },
      ],
    },
  ],
  button: {
    text: "Download a PDF Checklist",
    url: "#",
  },
};

export const about = {
  header: `Starting a Business 101`,
  text: `Starting a new business is one of the most powerful and exciting things you can do. You’ve got a great idea, unique products and valuable services that you want to share with the world. 
      There’s just one small problem — where do you begin? There seems to be an almost endless list of tasks to get your business off the ground and money in the bank.`,
  box: {
    header: `Relax, we’ve got you covered.`,
    text: `We’re experts at incorporating LLCs and corporations, and we’ve learned a thing or two about starting and running businesses. 
        That’s why we put together this complete and easy-to-understand business checklist — to make it faster and simpler for you to get stuff done. `,
  },
  text2: `The majority of larger businesses in the United States are structured as C Corporations, although a C Corp could, theoretically, consist of just one person. 
      The information below will help you decide if a C Corporation structure is right for your business.`,
  link: {
    text: `View our specialized guidelines`,
    url: `/`,
  },
};

export const help = {
  header: `Help File My Annual Report`,
  header2: `Save your time. We'll handle the paperwork.`,
  text: `If you would like to use our services to facilitate the filing of your annual report please place the order and a representative from IncFile will contact you to obtain specific information required to complete and file the annual report in your state of formation.`,
};

export const faq = {
  header: `Browse by Category`,
  cards: [
    {
      header: `How Long does it take to file an Annual Report?`,
      text: `The filing time is dependent on the governing state agency. Filing times vary by state it is therefore important that the report is filed well in advance of the due date in order to avoid any potential late filing fees.`,
    },
    {
      header: `What happens if the Annual Report cannot be filed?`,
      text: `In the event that the entity has been administratively revoked or otherwise dissolved or the report is not due within a close proximity to the order being placed our policy is to contact and inform the client and issue a full refund.`,
    },
    {
      header: `How much does it cost to file an Annual Report?`,
      text: `The state fee varies by state our service fee to file the report is $88. To review the fee in your state click on the “order now” button and select the state and entity type.`,
    },
    {
      header: `What will I receive when the Annual Report is filed?`,
      text: `The governing state agency will typically return a filed copy of the Annual Report which is then mailed to the client.`,
    },
  ],
};

export const rocket = {
  header: `Launch`,
  header2: `your business with Incfile`,
  text: `No Contracts. No Surprise.`,
  text2: `Only $0 + State Fee to Launch Your Business.`,
  button: {
    text: `launch your business`,
    url: `/`,
  },
};

export const categories = {
  header: `Browse by Category`,
  lists: [
    {
      header: `General`,
      buttons: [
        {
          header: `Should I assume that if I form an LLC or incorporate that no…`,
          url: `/`,
        },
        {
          header: `What paperwork is required in order to open a business…`,
          url: `/`,
        },
        {
          header: `What paperwork is required in order to open a business…`,
          url: `/`,
        },
      ],
      link: {
        text: `see all 18 articles`,
        url: `/`,
      },
    },
    {
      header: `LLC`,
      buttons: [
        {
          header: `What Does LLC Mean?`,
          url: `/`,
        },
        {
          header: `Can an LLC be formed without listing the members on on…`,
          url: `/`,
        },
        {
          header: `Can another business entity be a member of an LLC?`,
          url: `/`,
        },
      ],
      link: {
        text: `see all 21 articles`,
        url: `/`,
      },
    },
    {
      header: `S-Corporation`,
      buttons: [
        {
          header: `Can a foreign resident be a shareholder in an S Corporation?`,
          url: `/`,
        },
        {
          header: `Is there a limit to the amount of shareholders an S Corporat…`,
          url: `/`,
        },
        {
          header: `Which entity offers the best tax advantages?`,
          url: `/`,
        },
      ],
      link: {
        text: `see all 23 articles`,
        url: `/`,
      },
    },
    {
      header: `C-Corporation`,
      buttons: [
        {
          header: `Which entity offers the best tax advantages?`,
          url: `/`,
        },
        {
          header: `The benefits of filing a C-corporation`,
          url: `/`,
        },
        {
          header: `LLCs vs C-Corporation: Which Is Best for Your Business?`,
          url: `/`,
        },
      ],
      link: {
        text: `see all 16 articles`,
        url: `/`,
      },
    },
    {
      header: `Nonprofit`,
      buttons: [
        {
          header: `Forming a Nonprofit Corporation`,
          url: `/`,
        },
        {
          header: `Can a Nonprofit Corporation Make a Profit?`,
          url: `/`,
        },
        {
          header: `What is a Nonprofit Corporation?`,
          url: `/`,
        },
      ],
      link: {
        text: `see all 15 articles`,
        url: `/`,
      },
    },
    {
      header: `Registered Agent`,
      buttons: [
        {
          header: `What is the main function of the Registered Agent?`,
          url: `/`,
        },
        {
          header: `Can I Be My Own Registered Agent?`,
          url: `/`,
        },
        {
          header: `What happens if I require the signature of my Registered A…`,
          url: `/`,
        },
      ],
      link: {
        text: `see all 11 articles`,
        url: `/`,
      },
    },
    {
      header: `Business Tax`,
      buttons: [
        {
          header: `Which entity offers the best tax advantages?`,
          url: `/`,
        },
        {
          header: `Minimizing tax expenses`,
          url: `/`,
        },
        {
          header: `How is an S Corporation Taxed?`,
          url: `/`,
        },
      ],
      link: {
        text: `see all 5 articles`,
        url: `/`,
      },
    },
    {
      header: `Employer Identification Number (EIN)`,
      buttons: [
        {
          header: `Employer Identification Number`,
          url: `/`,
        },
      ],
      link: {
        text: `see all 1 articles`,
        url: `/`,
      },
    },
    {
      header: `Individual State Information`,
      buttons: [
        {
          header: `How To Publish Your Notice Of Incorporation In Georgia`,
          url: `/`,
        },
        {
          header: `Meeting the New York Publication Requirement`,
          url: `/`,
        },
        {
          header: `How To Publish Your Notice Of Incorporation In Georgia`,
          url: `/`,
        },
      ],
      link: {
        text: `see all 4 articles`,
        url: `/`,
      },
    },
    {
      header: `Video Library`,
      buttons: [
        {
          header: `What is the main function of the Registered Agent?`,
          url: `/`,
        },
        {
          header: `Can I Be My Own Registered Agent?`,
          url: `/`,
        },
        {
          header: `What happens if I require the signature of my Registered A...`,
          url: `/`,
        },
      ],
      link: {
        text: `see all 3 articles`,
        url: `/`,
      },
    },
  ],
  button: {
    header: `aaaa`,
    url: `/`,
  },
};

export const service = {
  header: `How our service works`,
  text: `Take a moment to view our instructional video and see how easy it can be to get your business incorporated.`,
};

export const tools = {
  header: `Helpful tools for decision making`,
  text: `Select your business type to see how Incfile can work for you.`,
  buttons: [
    {
      header: `Corporation State Information`,
      url: `/`,
    },
    {
      header: `Corporation Tax Calculator`,
      url: `/`,
    },
    {
      header: `Entity Comparison Chart`,
      url: `/`,
    },
    {
      header: `State Filing Fees`,
      url: `/`,
    },
    {
      header: `Ongoing Filing Requirements`,
      url: `/`,
    },
    {
      header: `State Filing TImes`,
      url: `/`,
    },
  ],
};
