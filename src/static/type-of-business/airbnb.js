import { color } from "../../components/styles/colors";
import Tab1Icon from "../../images/icons/airbnb.inline.svg";
import Tab2Icon from "../../images/icons/light.inline.svg";
import Tab3Icon from "../../images/icons/series-is-this-business-for-you.inline.svg";

export const InfoCards = {
  title: `Insurance for Your Airbnb Business`,
  description: `Most Airbnb businesses should have comprehensive business insurance. There are various types.`,
  items: [
    {
      backgroundColor: color.babyblue3,
      roundTopLeft: true,
      roundBottomLeft: true,
      imageName: "workers-compensation-insurance",
      title: "Workers Compensation Insurance",
      content:
        "Workers’ compensation insurance provides coverage for job-related illnesses, disabilities or injuries that affect employees. Regulations for this insurance vary from state to state. It typically covers areas like medical costs, loss of earnings, compensation and retraining.",
    },
    {
      backgroundColor: color.green3,
      imageName: "shield-icon",
      title: "General Liability Insurance",
      content:
        "This insurance protects your Airbnb business from claims due to being sued. This may include injury to members of the public, property damage, personal liabilities, legal defense and more. It can help protect your business from financial penalties and bankruptcy. This type of insurance is essential to your Airbnb business as you will be having people living in your properties.",
    },
    {
      backgroundColor: color.red3,
      roundTopRight: true,
      roundBottomRight: true,
      imageName: "home-and-auto-insurance",
      title: "Home and Auto Insurance",
      content:
        "If you are working from home, for example on the administration of your Airbnb business or driving a vehicle for work, check whether your existing home and auto policies cover you for work use of your home or car. If not, you should either expand your policy so you’re covered or get dedicated business insurance.",
    },
  ],
};

export const Tools = [
  {
    title: "Project Management",
    tools: ["Asana", "Basecamp", "Trello"],
  },
  {
    title: "Productivity",
    tools: ["Todoist", "Evernote"],
  },
  {
    title: "Collaboration",
    tools: ["Google Docs", "Dropbox", "Box"],
  },
  {
    title: "Social Media Management",
    tools: ["Hootsuite", "Buffer", "Sprout Social", "BuzzSumo"],
  },
  {
    title: "Communication",
    tools: ["Skype", "Grasshopper", "Slack", "Yammer"],
  },
  {
    title: "Email Marketing",
    tools: ["MailChimp", "CampaignMonitor"],
  },
  {
    title: "Advertising",
    tools: ["Google AdWords", "Bing Ads"],
  },
  {
    title: "Marketing Automation",
    tools: ["Hubspot", "Hatchbuck"],
  },
  {
    title: "Customer Relationship Management (CRM)",
    tools: ["SalesForce", "Insightly", "Zoho CRM"],
  },
  {
    title: "Customer Support",
    tools: ["ZenDesk", "GetSatisfaction", "SurveyMonkey"],
  },
  {
    title: "Human Resources",
    tools: ["Gusto", "Hire Athena"],
  },
  {
    title: "Legal",
    tools: ["DocuSign", "RightSignature"],
  },
  {
    title: "Ecommerce",
    tools: ["Shopify", "Recurly", "Vendio", "Square"],
  },
  {
    title: "Website Development",
    tools: ["SnapWeb", "Squarespace", "Jira", "Wordpress"],
  },
  {
    title: "Analytics",
    tools: ["Google Analytics", "SumAll"],
  },
  {
    title: "SEO",
    tools: ["SemRush", "KWFinder", "Moz", "AHREFS"],
  },
];

export const adventages = {
  items: [
    {
      circleText: 1,
      headline: "File an Annual Report",
      text:
        "Most states require all businesses to file a report once a year. This report has details of any major changes to who owns a business and other major impacts on a business’s legal status. We can file your Annual Report on your behalf.",
      url: "/manage-your-company/annual-report",
      urlText: "Annual Report",
    },
    {
      circleText: 2,
      headline: "Pay estimated taxes",
      text:
        "You will be expected to pay estimated taxes on what you plan to earn in the current business year. Typically, you will need to pay estimated taxes in April, June, September and January (of the following year).",
    },
    {
      circleText: 3,
      headline: "Renew Business Permits and Licenses",
      text:
        "Your business will probably have several licenses, permits and other regulations. These typically need to be renewed every year.",
    },
    {
      circleText: 4,
      headline: "File your taxes",
      text: "You will need to file your taxes once a year.",
    },
    {
      circleText: 5,
      headline: "Pay payroll and sales taxes",
      text:
        "If applicable, you will need to make payroll and sales tax payments on a regular basis.",
    },
    {
      circleText: 6,
      headline: "Prepare Your Taxes",
      text:
        "Most Airbnb businesses should have comprehensive business insurance. There are various types.",
    },
  ],
};

export const tabs = {
  panels: [
    {
      icon: Tab1Icon,
      name: `Airbnb Business`,
    },
    {
      icon: Tab2Icon,
      name: `Why This Industry`,
    },
    {
      icon: Tab3Icon,
      name: `Is This Business For You?`,
    },
  ],
};
