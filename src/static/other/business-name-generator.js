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
    text2: `In 2020 many startups are choosing a short, branded name that is unique, memorable and affordable.`,
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
}