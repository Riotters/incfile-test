import {color} from "../../atomic/atoms/styles/colors";

export const top = {
    header: "How to Decide What Business Structure is Right for You",
    text: "When you’re deciding to start a business, it’s critical to choose the right business structure or “legal entity.” As company formation specialists, one of the questions we get asked most often is “What is the right type of structure for my new business?” The answer isn’t always easy, because it depends so much on what you want to do with your new venture. That’s why we’ve created an easy-to-use, interactive quiz to suggest the type of legal entity that could work for your new business venture.",
    button: {
        text: "Take the quiz",
        url: "/business-entity-quiz/explain/"
    }
};

export const choose = {
    header: "Choose a Business Entity\n" +
        "Based on Specific Scenarios",
    text: "Before we get into the quiz itself, here’s a quick guide to business structures, and how your circumstances might influence you to choose one over another.",
    types: [
        {
            header: "Limited Liability Company (LLC)",
            text: "Should You Form a Limited Liability Company (LLC)? For over 80% of small businesses, the right choice of business structure is a simple one: the LLC.",
            color: color.blue3,
            image: "llc-cert-4502",
        },
        {
            header: "S - Corporation",
            text: "Want to keep more of your tax money? See \n" +
                "if an S Corporation could be the right choice to help your business save money on taxes each year.",
            color: color.purple3,
            image: "s-corp-cert-7631",
        },
        {
            header: "C - Corporation",
            text: "A C Corporation structure is generally better for larger businesses. Is it right for your business?",
            color: color.orange3,
            image: "c-corp-cert-5502",
        },
        {
            header: "Non-Profit",
            text: "Starting a nonprofit can truly help make the world a better place. Is a Nonprofit best for your business?",
            color: color.green3,
            image: "n-cert-6592",
        }
    ],
    header2: "The Four Main Types of Legal Business Structures",
    text2: "There are four main types of “business entities” \n" +
        "that you can create",
    image: "after-formation-9568",
    button: {
        text: "Take the quiz",
        url: "/business-entity-quiz/explain/"
    }
};