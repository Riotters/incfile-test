import {color} from "../../components/styles/colors";
import Tab1Icon from "../../images/icons/amazon-business.inline.svg";
import Tab2Icon from "../../images/icons/light.inline.svg";
import Tab3Icon from "../../images/icons/series-is-this-business-for-you.inline.svg";

export const toolsList = {
    headlineText: "Useful Online Tools for Your Amazon Business",
    description: "In addition to the specialist Amazon seller tools listed above, there are some other really great online tools for managing your Amazon seller business. They will reduce the time you spend on administration, help you to collaborate with others and free up your time to grow and manage your new venture.",
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

export const RingText = {
    list: [
        {
            color: color.blue1,
            boldText: "80%",
            text: "of Amazon U.S. users purchase from the website at least once a month"
        },
        {
            color: color.green1,
            boldText: "80%",
            text: "Nearly of Amazon sellers use “Fulfilled by Amazon”"
        },
        {
            color: color.red1,
            boldText: "77%",
            text: "of Amazon sellers sell on multiple channels (ebay, their own ecommerce store, etc.)"
        },
        {
            color: color.purple1,
            boldText: "49%",
            text: "of Amazon sellers sell less than $100,000 of product through Amazon a year"
        },
        {
            color: color.yellow1,
            boldText: "36%",
            text: "sell between $100,000 and $1,000,000 of products a year through Amazon"
        },
        {
            color: color.babyblue1,
            boldText: "15%",
            text: "sell more than $1,000,000 of products a year through Amazon"
        }
    ]
}

export const hsForm = {
    header: `Download our "Guide to Starting an Amazon Business".`,
    text: `Not sure how to start your Amazon business? This guide has everything you'll need to know!`,
    hs_form_id: `6b612f34-bef3-4de5-a0ac-f82999d0dde8`,
    fileDownload: `https://cdn2.hubspot.net/hubfs/3787982/Content%20Repurpose%20PDFs/Incfile%20-%20How%20to%20Start%20an%20Amazon%20Business%20PDF.pdf`,
    button: {
        text: "Download now",
        url: "/",
    },
};

export const tabs = {
    panels: [
        {
            icon: Tab1Icon,
            name: `Amazon Business`
        },
        {
            icon: Tab2Icon,
            name: `Why this industry?`
        },
        {
            icon: Tab3Icon,
            name: `Is This Business For You?`
        },
    ]
}
