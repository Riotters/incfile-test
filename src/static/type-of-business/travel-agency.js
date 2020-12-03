import {color} from "../../components/styles/colors";
import Tab1Icon from "../../images/icons/travel-agency.inline.svg";
import Tab2Icon from "../../images/icons/light.inline.svg";
import Tab3Icon from "../../images/icons/series-is-this-business-for-you.inline.svg";

export const adventages = {
    items: [
        {
            circleText: 1,
            imageName: "specialize-in-travel-to-a-specific-destination",
            headline: "Specialize in Travel to a Specific Destination",
            text: "Some travel agents have deep expertise in a particular part of the world. For example, some travelers may want to go to Japan and will need an experienced guide who can explain all of the cultural differences and idiosyncrasies. Other travelers may want a specialized trip to the Baltics and Scandinavia."
        },
        {
            circleText: 2,
            imageName: "specialize-in-particular-type-of-vacationer-or-traveler",
            headline: "Specialize in a Particular Type of Vacationer or Traveler",
            text: "Some vacationers will seek out a travel agent that can help with their particular needs. For example, some travel agents may provide specialized services to people with disabilities, choosing locations and activities that can be enjoyed from a wheelchair."
        },
        {
            circleText: 3,
            imageName: "specialist-caterers",
            headline: "Specialize in Particular Dietary, Cultural or Other Needs",
            text: "Other travelers may have preferences when it comes to diet, culture, religion or other aspects. A travel agent may choose to specialize in vegan or artisanal food and tours, while another may focus on all-female tour groups."
        },
        {
            circleText: 4,
            imageName: "landscape-photography-02",
            headline: "Specialize in Types of Travel and Tourism Activities",
            text: "There’s another niche for catering to vacationers who want to experience specific activities. For example, some tourists may want high-adrenaline activities, while others will want a deeply artistic experience."
        }
    ]
}

export const InfoCards = {
    title: `Insurance for Your Travel Agency`,
    description: `Most travel agency businesses should have comprehensive business insurance. There are various types.`,
    items: [
        {
            backgroundColor: color.babyblue3,
            roundTopLeft: true,
            roundBottomLeft: true,
            imageName: "workers-compensation-insurance",
            title: "Workers Compensation Insurance",
            content: "Workers’ compensation insurance provides coverage for job-related illnesses, disabilities or injuries that affect employees. Regulations for this insurance vary from state to state. It typically covers areas like medical costs, loss of earnings, compensation and retraining. If you’re not employing others, you may not need this insurance."
        },
        {
            backgroundColor: color.green3,
            imageName: "shield-insurance",
            title: "General Liability Insurance",
            content: "This insurance protects your travel agency from claims due to being sued. This may include injury to members of the public, property damage, personal liabilities, legal defense and more. It can help protect your travel agency business from financial penalties and bankruptcy."
        },
        {
            backgroundColor: color.red3,
            roundTopRight: true,
            roundBottomRight: true,
            imageName: "home-and-auto-insurance",
            title: "Home and Auto Insurance",
            content: "If you are working from home on the administration of your travel agency or driving a vehicle for work, check whether your existing home and auto policies cover you for work use of your home or car. If not, you should either expand your policy so you’re covered or get dedicated business insurance."
        }
    ]
};

export const adventages2 = {
    items: [
        {
            circleText: 1,
            headline: "File an Annual Report",
            text: "Depending on the state you’re located in, you will probably have to file a report every year. This report tells the state about any major changes to your business, and we can file your Annual Report on your behalf.",
            url: "/manage-your-company/annual-report",
            urlText: "Annual Report"
        },
        {
            circleText: 2,
            headline: "Pay estimated taxes",
            text: "You will be expected to pay estimated taxes on what you plan to earn in the current business year. Typically, you will need to pay estimated taxes in April, June, September and January (of the following year)."
        },
        {
            circleText: 3,
            headline: "Renew Business Permits and Licenses",
            text: "Your travel agency business will probably have several licenses, permits and other regulations. These typically need to be renewed every year."
        },
        {
            circleText: 4,
            headline: "File your taxes",
            text: "You will need to work with your accountant to prepare all the taxes you need to pay."
        },
        {
            circleText: 5,
            headline: "Pay payroll and sales taxes",
            text: "If applicable, you will need to make payroll and sales tax payments on a regular basis."
        },
        {
            circleText: 6,
            headline: "File your taxes",
            text: "You will need to file your taxes once a year."
        },
    ]
};

export const toolsList = {
    headlineText: "Useful Online Tools for Your Travel Agency",
    description: "Here are some really great online tools for managing your travel agency business. They will reduce the time you spend on administration, help you to collaborate with others and free up your time to grow and manage your new venture.",
    tools: [
        {
            title: "Project Management",
            tools: ["Asana", "Basecamp", "Trello"]
        },
        {
            title: "Productivity",
            tools: ["Todoist", "Evernote"]
        },
        {
            title: "Collaboration",
            tools: ["Google Docs", "Dropbox", "Box"]
        },
        {
            title: "Social Media Management",
            tools: ["Hootsuite", "Buffer", "Sprout Social", "BuzzSumo"]
        },
        {
            title: "Communication",
            tools: ["Skype", "Grasshopper", "Slack", "Yammer"]
        },
        {
            title: "Email Marketing",
            tools: ["MailChimp", "CampaignMonitor"]
        },
        {
            title: "Advertising",
            tools: ["Google AdWords", "Bing Ads"]
        },
        {
            title: "Marketing Automation",
            tools: ["Hubspot", "Hatchbuck"]
        },
        {
            title: "Customer Relationship Management (CRM)",
            tools: ["SalesForce", "Insightly", "Zoho CRM"]
        },
        {
            title: "Customer Support",
            tools: ["ZenDesk", "GetSatisfaction", "SurveyMonkey"]
        },
        {
            title: "Human Resources",
            tools: ["Gusto", "Hire Athena"]
        },
        {
            title: "Legal",
            tools: ["DocuSign", "RightSignature"]
        },
        {
            title: "Ecommerce",
            tools: ["Shopify", "Recurly", "Vendio", "Square"]
        },
        {
            title: "Website Development",
            tools: ["SnapWeb", "Squarespace", "Jira", "Wordpress"]
        },
        {
            title: "Analytics",
            tools: ["Google Analytics", "SumAll"]
        },
        {
            title: "SEO",
            tools: ["SemRush", "KWFinder", "Moz", "AHREFS"]
        }
    ]
}

export const tabs = {
    panels: [
        {
            icon: Tab1Icon,
            name: `Travel Agency`
        },
        {
            icon: Tab2Icon,
            name: `Why This Industry?`
        },
        {
            icon: Tab3Icon,
            name: `Is This Business For You?`
        }
    ]
}
