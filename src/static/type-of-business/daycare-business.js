import { color } from "../../components/styles/colors";
import Tab1Icon from "../../images/icons/daycare.inline.svg";
import Tab2Icon from "../../images/icons/light.inline.svg";
import Tab3Icon from "../../images/icons/series-is-this-business-for-you.inline.svg";

export const typeBusiness = {
  items: [
    {
      circleText: 1,
      imageName: "we-doubled-the-size-of-customer-service",
      headline: "Employer-Sponsored Childcare",
      text:
        "Many large employers provide daycare services to their employees, either onsite or remotely. Understanding the services that employers need and getting in touch with their HR departments could be a great way to get a foot in the door.",
    },
    {
      circleText: 2,
      imageName: "daycare-6328",
      headline: "Specialized Daycare for Children With Unique Needs",
      text:
        "You might consider running a specialized daycare center for particular children. For example, you might offer daycare for children with special dietary needs like being gluten-intolerant or vegetarian. You could also offer daycare services for children with mild learning or physical disabilities, if you have the right training.",
    },
    {
      circleText: 3,
      imageName: "franchise-purple",
      headline: "Franchise Daycare Businesses",
      text:
        "Some large daycare businesses have franchise opportunities. In these circumstances, you pay a franchise fee but get brand recognition, support and advice on how to set up and manage your daycare business.",
    },
  ],
};

export const InfoCards = {
  title: `Insurance for Your Daycare Business`,
  description: `Most daycare businesses should have comprehensive business insurance. There are various types.`,
  items: [
    {
      backgroundColor: color.babyblue3,
      roundTopLeft: true,
      roundBottomLeft: true,
      imageName: "workers-compensation-insurance",
      title: "Workers Compensation Insurance",
      content:
        "Workers’ compensation insurance provides coverage for job-related illnesses, disabilities or injuries that affect employees. Regulations for this insurance vary from state to state. It typically covers areas like medical costs, loss of earnings, compensation and retraining. If you do not have employees, you may not need this insurance.",
    },
    {
      backgroundColor: color.green3,
      imageName: "shield-icon",
      title: "General Liability Insurance",
      content:
        "This insurance protects your daycare business from claims due to being sued. This may include injury to children or members of the public, property damage, personal liabilities, legal defense and more. It can help protect your business from financial penalties and bankruptcy. This type of insurance could be essential to your daycare business, as you will be looking after small children and will need the reassurance of a good insurance policy.",
    },
    {
      backgroundColor: color.red3,
      roundTopRight: true,
      roundBottomRight: true,
      imageName: "home-and-auto-insurance",
      title: "Home and Auto Insurance",
      content:
        "If you are working from home on the administration of your daycare business or driving a vehicle for work, check whether your existing home and auto policies cover you for work use of your home or car. If not, you should either expand your policy so you’re covered or get dedicated business insurance.",
    },
  ],
};

export const adventages2 = {
  items: [
    {
      circleText: 1,
      headline: "File an Annual Report",
      text: `Depending on the state you’re located in, you will probably have to file a report every year. This report tells the state about any major changes to your business, and <a href="/manage-your-company/annual-report/">we can file your Annual Report on your behalf.</a>`,
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
        "Your federal, state, regional and city licenses and permits may need to be renewed on a regular basis, typically once a year.",
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
        "You will need to work with your accountant to prepare all the taxes you need to pay.",
    },
  ],
};

export const toolsList = {
  headlineText: "Useful Online Tools for Your Daycare Business",
  description:
    "Here are some really great online tools for managing your daycare business. They will reduce the time you spend on administration, help you to collaborate with others and free up your time to grow and manage your new venture.",
  tools: [
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
  ],
};

export const tabs = {
  panels: [
    {
      icon: Tab1Icon,
      name: `Daycare`,
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
