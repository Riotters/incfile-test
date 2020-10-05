import {color} from "../../atomic/atoms/styles/colors";
import {shadow} from "../../atomic/atoms/styles/shadows";

export const top = {
    header: `Virtual Address - 
    Virtual Mailbox And Mail
    Scanning Service from Incfile`,
    text: `Get a Fixed Street Address and Access to Your
Correspondence Anywhere.`,
    button: [
        {
        text: `Start now`,
        url: `/`
    }]
}

export const mailboxes = {
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et quam ipsum. Sed in fermentum purus. Curabitur vestibulum augue at tellus efficitur, in viverra nisi venenatis. Vestibulum efficitur luctus lacinia. Integer a euismod lectus, eu eleifend risus`,
    text2: "Until now.",
    box: {
        header: "Welcome to Incfile’s Virtual Address service.",
        text: "It gives you access to a genuine street address for your business, so you can enjoy the benefits of mail scanning and a virtual mailbox wherever you are."
    }
}

export const advantages = {
    header: "Advantages of a Virtual Address",
    text: "Our Virtual Address is easy to use, and there are several benefits for you and your business:",
    cards: [
        { header: "One address for all correspondence", text: "A single, stable street address you can give to suppliers, banks, customers, government agencies and more" },
        { header: "Review mail wherever you are", text: "All paper mail is scanned and uploaded to a secure, private portal where you can read and review correspondence at your convenience" },
        { header: "Professional image for your business", text: "A business address is more prestigious than a residential address and could enhance your reputation and marketing" },
        { header: "A low, fixed price regardless of mail volume", text: "Virtual Address is priced at just $29 per month" }
    ],
    header2: "Virtual Address Is Ideal for Entrepreneurs",
    text2: "Having a Virtual Address makes sense, whatever stage your business is in:",
    cards2: [
        {
            header: "Keep your real address private",
            text: "There’s no need to publicize your home address for business purposes.",
            image: "keep-your-real-adress-private",
            background: color.purple3
        },
        {
            header: "Relocating your business",
            text: "Don’t let anything get lost in the mail if you’re moving offices.",
            image: "relocating-your-business-0592",
            background: color.orange3
        },
        {
            header: "Digital nomads and remote work",
            text: "Traveling and working from other countries is an amazing experience. Now you never worry about missing important mail on the go.",
            image: "digital-nomad-5392",
            link: {
                url: "/",
                text: "Digital nomads"
            },
            background: color.purple3
        }
    ],
}

export const availability = {
    header: "States Where Virtual Address Service Is Available",
    text: "Incfile currently provides virtual mailboxes in 22 different states across the country, providing you with the flexibility you need to run your business in the location that makes the most sense for you.",
    form: {
        header: "Amendment",
        field: {
            label: "State",
            options: "Select style",
        },
        button: {
            text: "Order now",
            url: "/"
        }
    }
}

export const moreInfo = {
    header: "More Information on Virtual Address",
    text: "Here’s everything else you need to know:",
    items: [
        {
            header: "Complete Mail Scanning of All Correspondence",
            text: "We digitally scan all letters and other correspondence, and then upload it to your secure account within one business day.",
            backgroundColor: color.yellow2,
            shadowColor: shadow.yellow2
        },
        {
            header: "Worldwide Access Via Web Browser",
            text: "There's no software to install; you can read your mail from anywhere and any web browser via our confidential online portal - just log in.",
            backgroundColor: color.babyblue2,
            shadowColor: shadow.babyblue2
        },
        {
            header: "Security and Encryption",
            text: "All of your correspondence is encrypted and available only to you. Physical data stays protected in our secure facilities.",
            backgroundColor: color.orange2,
            shadowColor: shadow.orange2
        },
        {
            header: "Email Notification",
            text: "We contact you every time we scan and upload a piece of mail, so you’ll never miss time-sensitive information.",
            backgroundColor: color.blue2,
            shadowColor: shadow.blue2
        },
        {
            header: "Mobile Compatibility",
            text: "View correspondence on your desktop, laptop, smartphone or tablet.",
            backgroundColor: color.purple2,
            shadowColor: shadow.purple2
        }
    ]
}