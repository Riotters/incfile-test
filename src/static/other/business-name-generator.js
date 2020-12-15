export const seo = {
    title: `Business Name Generator - Find Creative Brand Name Ideas`,
    desc: `Looking for a unique business name? Our company name generator creates short, branded names that are relevant to your business idea. Try it now.`,
}

export const top = {
    header: `Business Name Generator`,
    text: `Generate a short, brandable business name using artificial intelligence`,
}

export const whyBrandName = {
    header: `Why a Branded Name?`,
    text1: `For new businesses, naming options can seem quite limited. Short domains are very expensive, yet longer multi-word names don’t inspire confidence.`,
    text2: `In 2021 many startups are choosing a short, branded name that is unique, memorable and affordable.`,
    lists: [
        {
            hasCircle: true,
            icon: `bulb385`,
            header: `Get name ideas`,
            text: `We create short, punchy, memorable brand names using a combination of your keywords and artificial intelligence. The more specific you are, the better the result.`
        },
        {
            hasCircle: true,
            icon: `buttons695 2`,
            header: `Build a Brand`,
            text: `The perfect name is a great first step. Use it as a foundation for your entire brand and approach to get recognition across all your marketing channels.`
        },
        {
            hasCircle: false,
            icon: `confirm-that-a-blockchain-application-is-the-best-for-your-need`,
            header: `Create a Visual Identity`,
            text: `Our Business Name Generator creates results in a wide variety of colors, fonts and backgrounds. Use these as inspiration for the ideal design that represents your brand.`
        },
    ]
}

export const resultLists = {
    text1: `9 business name results with keyword "apple"`,
    text2: `Display options`,
    results: [`viralert.com`, `messagesignal.com`, `messagebunny.com`, `aaa`, `bbb`, `ccc`, `ddd`],
}

export const formCheck = {
    header: `We'll Take Care of the Entity Name Search`,
    text: `We'll tell you if your business name is available with the Secretary of State. Just fill in your proposed business name, and we'll search the company registrat for you.`,
    form: {
        header1: `Please enter the business name information`,
        field1: {
          label: `Entity Name*`,
        },
        field2: {
          label: `Entity Type`,
          options: [`LLC`, `CCorporation`, `SCorporation`, 'Nonprofit'],
        },
        field3: {
            label: `Entity State`,
            link: {
              text: `Not sure?`,
              url: `/business-entity-comparison/`,
            },
            options: [`Alabama`, `Arizona`],
          },
        header2: `Let us know where we can let you know if your business name is available`,
        field4: {
          label: `First Name*`,
        },
        field5: {
          label: `Last Name*`,
        },
        field6: {
          label: `Email*`,
        },
        button: {
          text: `Check Name Availability`,
          url: `/`,
        },
      },
};

export const brainstorm = {
    header: "How to Brainstorm Company Names",
    text: "The Business Name Generator uses the keywords you provide us with, then sprinkles on a little AI magic to create dozens of possible business names. You can start simply, with just one or two keywords, and then enter additional words to fine-tune your results. There are plenty of ways to create the initial keywords. Brainstorm words associated with: ",
    advantages: [
        {
            content: {
                text: "The specific niche for your business"
            },
        },
        {
            content: {
                text: "The types of products and services you offer"
            },
        },
        {
            content: {
                text: "Who your ideal audience is"
            },
        },
        {
            content: {
                text: "The goals you have for your business"
            },
        },
    ],
    image: "your-name-signboard-5502",
    text2: "For more inspiration, <a href='https://www.thesaurus.com/' rel='nofollow'>use a thesaurus</a> to find and include similar words.",
    header2: "The Characteristics of a Great Business or Brand Name",
    text3: "<a href='http://faculty.baruch.cuny.edu/dluna/consling/brandart.pdf' rel='nofollow'>Research tells us</a> that the most successful <a href='https://www.incfile.com/blog/post/what-best-brand-names-have-common/'>ways to name a business</a> are to use some combination of the following principles:",
    list: [
        "Use simple and distinctive words",
        "Use meaningful and emotional words",
        "Use words that create a verbal or sound association",
        "Use words that create a mental image",
        "Use techniques like alliteration, assonance and rhythm",
    ],
    header3: "What to Avoid in a Business Name",
    text4: "You’ll also want to be wary of the following",
    list2: [
        "Names that are long or cumbersome",
        "Names that are dull or boring",
        "Names that are hard to pronounce or remember",
        "Names that are already in use by another business in your state",
        "Names that are <a href='https://www.incfile.com/blog/post/trademark-business-name/'>trademarked</a> or otherwise protected",
        "Names that may be offensive in a different language",
        "Names where you can’t get naming rights on various social media platforms",
        "Names where the website domain isn’t available",
    ],
    header4: "Once You’ve Chosen a Brand Name...",
    accordion: {
        items: [
            {
                count: "1",
                question: "Check If the Business Name Is Already in Use",
                answer: " Before you commit to a business name, check to see if it’s legally available and not taken by another company in your state. Incfile’s Business Name Generator allows you to search name availability straight from the results page, making it easy.<br /><br />You can also go directly to Incfile’s free <a href='/business-name-search/'>Business Name Search tool</a> to check your state’s business registry. ",
            },
            {
                count: "2",
                question: "See If You Can Get the Domain Name and Social Media Accounts",
                answer: " Almost every business will need an online presence and that means the <a href='https://www.incfile.com/post/business-domain-name-email/'>right website</a>, email and social media. To start, <a href='https://incfile.web.com/business-email/?trkID=PTNd237b3W'>check to see if the domain name is available</a>. If it is, you should quickly acquire the domain name to ensure it’s not taken by someone else. If you can get the domain, the associated email domain should be available as well.<br /><br />You will also want to use a business name that’s available on social media platforms like Facebook, Twitter, Instagram and YouTube. We recommend services like <a href='https://www.namecheckr.com/' rel='nofollow'>Namecheckr</a> and <a href='https://namechk.com/' rel='nofollow'>Namechk</a> to see what’s available. ",
            },
            {
                count: "3",
                question: "Form Your LLC and Register Your Business Name",
                answer: `Once you’ve found the perfect name, it’s time to make it official. You can <a href='${process.env.ORDER_URL}/form-order-now.php'>start your LLC with Incfile today</a>. Filing your paperwork reserves your business name in your state. If you want to protect the name across the U.S., we can <a href="/trademark-name-search/">complete a trademark search and registration</a> on your behalf. If you already have a business and you want to use a new name as a trade or assumed name, <a href="/fictitious-business-or-trade-name/">we’ve got you covered there, too</a>.`,
            },
        ]
    }
};