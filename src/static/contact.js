import {
    color
} from "../atomic/atoms/styles/colors";

export const existing = {
    header: `Using your Client Dashboard`,
    text: `Your client dashboard will become the central document repository and management tool that will allow you to actively
    manage your entity. You can always access your client dashboard by using the order number and email address associated
    with your order. Below are some helpful links provided to orient you with the features of the client dashboard.`,
    button: {
        text: `Check my order status`,
        url: `${process.env.ORDER_URL}/dashboard`,
    },
    phone: {
        phone1: `844.830.8267`,
        phone2: `877.919.2613`,
    },
    cards: [{
            content: {
                header: `<a href='${process.env.ORDER_URL}/dashboard'>Login</a>`,
                text: "Use this link to access your the client dashboard directly from our site. The login credentials will always be the associated email address and order number.",
                imgAlt: `login dashboard`,
            },
            image: "icon-login-4503",
            color: color.blue3,
        },
        {
            content: {
                header: `<a href='${process.env.ORDER_URL}/dashboard'>Company Information</a>`,
                text: "Review and obtain pertinent company information. (Please remember to always keep a valid email address on file as this will be the primary method of contact)",
                imgAlt: `company information`,
            },
            image: "icon-company-information-2201",
            color: color.orange3,
        },
        {
            content: {
                header: `<a href='${process.env.ORDER_URL}/dashboard'>Order History & Receipts</a>`,
                text: "Use this tab to review company order history and to access associated receipts.",
                imgAlt: `order history and receipt`,
            },
            image: "icon-order-history-and-receipts-9940",
            color: color.yellow3,
        },
        {
            content: {
                header: `<a href='${process.env.ORDER_URL}/dashboard'>Track Status</a>`,
                text: "You can always check the progress of your order or review any pending issues form this tab.",
                imgAlt: `track status`,
            },
            image: "icon-track-status-2295",
            color: color.purple3,
        },
        {
            content: {
                header: `<a href='${process.env.ORDER_URL}/dashboard'>Registered Agent</a>`,
                text: "Obtain the name and address of your designated registered agent and review important documents. (<strong>Documents received by the your agent will be uploaded to the registered agent tab and a corresponding notification email will be deployed.</strong>)",
                imgAlt: `registered agent`,
            },
            image: "icon-change-registered-agent-7749",
            color: color.green3,
        },
        {
            content: {
                header: `<a href='/compliance-filing-requirement/'>Ongoing Requirements</a>`,
                text: "Always be in the know of the ongoing requirements such as annual reports or other obligatory filing requirements associated with your entity. A documents tab will also be available to you upon the completion of the order.",
                imgAlt: `ongoing requirement`,
            },
            image: "icon-ongoing-filling-requirements-9483",
            color: color.babyblue3,
        },
    ],
};

export const newSales = {
    header: `We've put together the following resources to help answer our most common questions.`,
    button: {
        text: `Start your business with us, today!`,
        url: `${process.env.ORDER_URL}/form-order-now.php`,
    },
    phone: {
        phone1: `855.829.9090`,
        phone2: `877.919.2613`,
    },
    articles: [{
            icon: `chair-01`,
            title: `Choose the right type of entity for starting your new company!`,
            desc: `Regardless of the industry or nature of business, Incfile can help you form your new business.`,
            url: `/start-your-company/`,
            imageAlt: `Choose the right type of entity for starting your new company!`
        },
        {
            icon: `newspaper`,
            title: `Understanding the differences between LLC vs. C Corporation | Archive articles.`,
            desc: `We'll tackle those questions so you have all the information you need to start an LLC or Corporation.`,
            url: `https://www.incfile.com/blog/post/incorporation-versus-limited-liability-company/`,
            imageAlt: `Understanding the differences between LLC vs. Corporation`
        },
        {
            icon: `wave-01`,
            title: `What is the Best State to Start My LLC?`,
            desc: `Here’s our handly guide to choosing the perfect state depending on various legal issues, market demand, taxation rates, job
            markets and more.`,
            url: `https://www.incfile.com/blog/post/best-state-to-start-llc/`,
            imageAlt: `what is best state for llc`
        },
        {
            icon: `bike`,
            title: `Are Non-U.S. Residents Allowed to Own a Corporation or LLC?`,
            desc: `Regardless of the industry or nature of business, Incfile can help you form your new business.`,
            url: `https://www.incfile.com/blog/post/are-non-u-s-residents-allowed-to-own-a-corporation-or-llc/`,
            imageAlt: `non-u.s resident allowed to own a ccorporation or llc`
        },
    ],
};