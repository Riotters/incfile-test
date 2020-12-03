import {color} from "../../components/styles/colors";
import Tab1Icon from "../../images/icons/coaching-business.inline.svg";
import Tab2Icon from "../../images/icons/light.inline.svg";
import Tab3Icon from "../../images/icons/series-is-this-business-for-you.inline.svg";

export const adventages = {
    items: [
        {
            circleText: 1,
            imageName: "family-baby-and-pet-photography",
            headline: "Family and Relationship Coaching",
            text: "This type of life coaching focuses on helping clients deal with family matters and improve their interpersonal relationships. There’s likely to be a fair amount of counseling involved."
        },
        {
            circleText: 2,
            imageName: "value-nobody-gives-you-more-for-less-01",
            headline: "Life Potential Coaching",
            text: "People seeking out this type of coaching want to build a strong foundation to improve their future opportunities and prospects. It provides advice on realizing strengths, overcoming weaknesses and giving people the self-confidence to achieve their goals."
        },
        {
            circleText: 3,
            imageName: "fitness-and-lifestyle-coaching",
            headline: "Fitness and Lifestyle Coaching",
            text: "You can help your clients change their attitude to food, nutrition, exercise and healthy living. This type of coaching requires a good understanding of exercise science, in addition to helping clients make everyday healthy choices."
        },
        {
            circleText: 4,
            imageName: "we-make-it-easy-01",
            headline: "Executive Productivity Coaching",
            text: "Executive Productivity Coaching"
        },
        {
            circleText: 5,
            imageName: "total-revenue-from-sales",
            headline: "Business Financial Coaching",
            text: "This type of coaching requires a good understanding of accounting and finance, and it can be focused on various areas like profit margins, cost reduction and changing perspectives about money."
        },
        {
            circleText: 6,
            imageName: "executive-relationship-and-culture-coaching",
            headline: "Executive Relationship and Culture Coaching",
            text: "Another specialized type of business coaching, this focuses on strengthening interpersonal relationships, enhancing management styles and building organizational strength and culture."
        },
    ]
}

export const adventages2 = {
    items: [
        {
            circleText: 1,
            headline: "File an Annual Report",
            text: "Depending on the state you’re located in, you will probably have to file a report every year. This report tells the state about any major changes to your daycare business, and we can file your Annual Report on your behalf.",
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
            text: "Your federal, state, regional and city licenses and permits may need to be renewed on a regular basis, typically once a year."
        },
        {
            circleText: 4,
            headline: "File your taxes",
            text: "You will need to file your taxes once a year."
        },
        {
            circleText: 5,
            headline: "Pay payroll and sales taxes",
            text: "If applicable, you will need to make payroll and sales tax payments on a regular basis."
        },
        {
            circleText: 6,
            headline: "Prepare Your Taxes",
            text: "You will need to work with your accountant to prepare all the taxes you need to pay."
        },
    ]
};

export const InfoCards = {
    title: `Insurance for Your Professional Coaching Organization`,
    description: `Most life or business coaching organizations should have comprehensive business insurance. There are various types.`,
    items: [
        {
            backgroundColor: color.babyblue3,
            roundTopLeft: true,
            roundBottomLeft: true,
            imageName: "workers-compensation-insurance",
            title: "Workers Compensation Insurance",
            content: "Workers’ compensation insurance provides coverage for job-related illnesses, disabilities or injuries that affect employees. Regulations for this insurance vary from state to state. It typically covers areas like medical costs, loss of earnings, compensation and retraining."
        },
        {
            backgroundColor: color.green3,
            imageName: "shield-icon",
            title: "General Liability Insurance",
            content: "This insurance protects your coaching business from claims due to being sued. This may include injury to members of the public, property damage, personal liabilities, legal defense and more. It can help protect your business from financial penalties and bankruptcy."
        },
        {
            backgroundColor: color.red3,
            roundTopRight: true,
            roundBottomRight: true,
            imageName: "home-and-auto-insurance",
            title: "Home and Auto Insurance",
            content: "If you are working from home on the administration of your coaching business or driving a vehicle for work, check whether your existing home and auto policies cover you for work use of your home or car. If not, you should either expand your policy so you’re covered or get dedicated business insurance."
        }
    ]
};

export const Tools = [
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
];

export const tabs = {
    panels: [
        {
            icon: Tab1Icon,
            name: `Coaching Business`
        },
        {
            icon: Tab2Icon,
            name: `Why This Industry`
        },
        {
            icon: Tab3Icon,
            name: `Is This Business For You?`
        },
    ]
}
