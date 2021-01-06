import React from "react";
import { color } from "../../components/styles/colors";
import Tab1Icon from "../../images/icons/moving-company.inline.svg";
import Tab2Icon from "../../images/icons/light.inline.svg";
import Tab3Icon from "../../images/icons/series-is-this-business-for-you.inline.svg";

export const adventages = {
  items: [
    {
      circleText: 1,
      imageName: "franchise-purple",
      headline: "Start a Franchise Moving Business",
      text:
        "Franchises can have several advantages for moving business owners. You’ll get help with branding, promotions and marketing, together with support and guidance on setting up your relocation company. You will need to pay a franchise fee, possibly on both a one-time and ongoing basis. You’ll also need to meet the licensing requirements of the franchisor.",
    },
    {
      circleText: 2,
      imageName: "start-a-local-moving-business",
      headline: "Start a Local Moving Business",
      text:
        "To begin with, you might want to just do small, local moves within your city and the surrounding area. This will help you resolve issues early on and will reduce the costs of buying equipment and hiring employees. You can build a name for yourself in the local market.",
    },
    {
      circleText: 3,
      imageName: "start-regional-or-interstate-moving-business",
      headline: "Start a Regional or Interstate Moving Business",
      text:
        "If you’ve got plenty of ambition and capital, then it might be worth starting up a slightly bigger moving business that does interstate and long distance relocation. You will probably need to buy more vehicles and hire more employees, but you can also charge higher fees.",
    },
    {
      circleText: 4,
      imageName: "supply-chain-startup-business",
      headline: "Start a Commercial Moving Business",
      text:
        "It’s not just individuals that want to relocate — commercial businesses need to move too. You could start a specialized office moving company that helps move office furniture, equipment and other items. This may be a less crowded niche in your local area, but there’s also a smaller customer base, so it's important to do your research.",
    },
  ],
};

export const adventages2 = {
  items: [
    {
      circleText: 1,
      headline: "File an Annual Report",
      text:
        "Most states require all businesses to file a report once a year. This report has details of any major changes to who owns a business and other major impacts on a business’ legal status. We can file your Annual Report on your behalf.",
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
        "You will need to work with your accountant to prepare all the taxes you need to pay.",
    },
  ],
};

export const InfoCards = {
  title: `Insurance for Your Moving Business`,
  description: `All moving businesses should have comprehensive business insurance. There are various types.`,
  items: [
    {
      backgroundColor: color.babyblue3,
      roundTopLeft: true,
      roundBottomLeft: true,
      imageName: "workers-compensation-insurance",
      title: "Workers Compensation Insurance",
      content:
        "Workers’ compensation insurance provides coverage for job-related illnesses, disabilities or injuries that affect employees. Regulations for this insurance vary from state to state. It typically covers areas like medical costs, loss of earnings, compensation and retraining. This is essential for a moving business as handling large, heavy and awkward items could expose your employees to risk of injury.",
    },
    {
      backgroundColor: color.green3,
      imageName: "shield-icon",
      title: "General Liability Insurance",
      content:
        "This insurance protects your moving business from claims due to being sued. This may include injury to members of the public, property damage, personal liabilities, legal defense and more. It can help protect your business from financial penalties and bankruptcy. This type of insurance is essential to your moving business as you will be going into and out of homes, and moving large items invites risks. You will also need to arrange to have your clients' property insured while you’re holding or transporting it.",
    },
    {
      backgroundColor: color.red3,
      roundTopRight: true,
      roundBottomRight: true,
      imageName: "home-and-auto-insurance",
      title: "Specialized Office and Auto Insurance for Your Moving Business",
      content:
        "You will want commercial office and vehicle insurance to cover your assets.",
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

export const tabs = {
  panels: [
    {
      icon: Tab1Icon,
      name: `Moving Company`,
    },
    {
      icon: Tab2Icon,
      name: `Why This Industry?`,
    },
    {
      icon: Tab3Icon,
      name: `Is This Business For You?`,
    },
  ],
};

export const CircleText = (
  <p
    style={{
      fontFamily: "Avenir",
      fontWeight: "bold",
      fontSize: "18px",
      color: "#1d1d1d",
    }}
  >
    The main customers of moving companies are individuals at{" "}
    <span style={{ color: "#5089fd" }}>44 percent</span>, followed by
    corporations at <span style={{ color: "#97e0c7" }}>38 percent</span>;
    military and other moves make up the remainder
  </p>
);
