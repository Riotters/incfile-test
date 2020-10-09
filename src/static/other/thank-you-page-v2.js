import {color} from "../../atomic/atoms/styles/colors";

export const top = {
    header: "Congratulations!",
    text: "Your Order No: QRT23953569703",
    text2: "Total package price: $79",
    button: {
        text: "View Order Details",
        url: "/"
    },
    header2: "Recommendations to help \n" +
        "you get started",
    cards: [
        {
            image: "branching-5491",
            header: "Want to Use a Different Name Than \n" +
                "Your LLC?",
            title: "Branching",
            text: "If so, you need a Doing Business As (DBA) name. This is a marketing name that can be used on business cards and more.",
            link: {
                text: "Learn more",
                url: "/"
            }
        },
        {
            image: "handshake-0492",
            header: "Get a Dedicated Business Banking Specialist.",
            title: "Handshake",
            text: "Our partnership with Bank of America gives you access to a dedicated specialist to setup your business bank account by phone.",
            link: {
                text: "Learn more",
                url: "/"
            }
        }
    ]
};

export const start = {
  header: "The Complete \"Start \n" +
      "Your Business\" Checklist",
  text: "A Clear and Comprehensive Guide \n" +
      "to Starting Your Business the Right Way",
  image: "after-formation-8034",
  button: {
      text: "Business Checklist",
      url: "/"
  }
};

export const dashboard = {
    header: "Using your Client Dashboard",
    text: "Twój pulpit stanie się centralnym repozytorium dokumentów i narzędziem do zarządzania, które pozwoli Ci aktywnie zarządzać swoją jednostką. Poniżej znajdują się pomocne linki do orientacji w funkcjach pulpitu.",
    items: [
        {
            backgroundColor: color.purple2,
            header: "Order History & Receipts",
            text: "Use this tab to review company order history and to access associated receipts.",
            shadowColor: color.purple2
        },
        {
            backgroundColor: color.orange2,
            header: "Track Status",
            text: "You can always check the progress of your order or review any pending issues form this tab.",
            shadowColor: color.orange2
        },
        {
            backgroundColor: color.blue2,
            header: "Login",
            text: "Use this link to access your the client dashboard directly from our site. The login credentials will always be the associated email address and order number.",
            shadowColor: color.blue2
        },
        {
            backgroundColor: color.red2,
            header: "Company Information",
            text: "Review and obtain pertinent company information. (Please remember to always keep a valid email address on file as this will be the primary method \n" +
                "of contact)",
            shadowColor: color.red2
        },
        {
            backgroundColor: color.yellow2,
            header: "Registered Agent",
            text: "Obtain the name and address of your designated registered agent and review important documents. (Documents received by the your agent will be uploaded to the registered agent tab and \n" +
                "a corresponding notification email will be deployed.)",
            shadowColor: color.yellow2
        },
        {
            backgroundColor: color.babyblue2,
            header: "Ongoing Requirements",
            text: "Always be in the know of the ongoing requirements such as annual reports or other obligatory filing requirements associated with your entity. \n" +
                "A documents tab will also be available to you upon the completion of the order. Use this tab to access any of your filed or internal documents wherever or whenever you may need them.",
            shadowColor: color.babyblue2
        }
    ],
    header2: "Frequently Asked Questions",
    faq: {
        items: [
            {
                question: "Can I make changes to my order after it has been received?",
                answer: "We typically file your order next business day therefore we urge our clients to carefully review the information submitted on the order review tab of the client dashboard and update information if changes are required. Upon forwarding the documents to the state it is impossible for us to make changes to an existing order."
            },
            {
                question: "Where can I review the information provided?",
                answer: ""
            },
            {
                question: "What is the best method of contact if I need to reach a representative?",
                answer: ""
            },
            {
                question: "If an issue with my filing should occur how will it be handled?",
                answer: ""
            }
        ]
    }
};