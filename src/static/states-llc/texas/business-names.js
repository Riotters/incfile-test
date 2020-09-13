import BgBoxBusinessNameIdea from '../../../images/icons/states/business-name-idea.inline.png'

export const businessNamesContent = {
    header: {
        title: `Naming Your Texas LLC`,
        subline: `Learn how to conduct a business entity search with the Texas Secretary of State and register your LLC name.`,
        boxes: [
            {
            title: `Incorporate today for <span style="color:#FD8550">$0 + State fee.</span>`,
            desc: `Starting a Texas LLC? Have Incfile do all the paperwork for you for free.`,
            button: {
                text: `Form Your LLC Now`,
                url: '/'
            },
            },
        ]
    },
    content: [
        {
            type: `paragraph`,
            content: `Whether you’re searching for the right Texas business name or registering your LLC with the TX Secretary of State, we can help. We’ve got all the information you need on Texas business entity searches, LLC naming rules, fictitious names and registering your business.`,
        },
        {
            type: `heading`,
            size: 3,
            content: `General Rules for LLC Names`,
        },
        {
            type: `paragraph`,
            content: `These rules typically apply to all LLCs, no matter what state they are formed in.`,
        },
        {
            type: `accordingTabWithCountingLeft`,
            content: [
                {
                    count: 1,
                    question: `Your LLC Business Name Must Be Unique`,
                    answer: [
                        {
                            type: `paragraph`,
                            content: `The business name you have chosen cannot be used by any other LLC or corporation in the state of Texas. This is why you should check business name availability on the TX SOS website.`
                        },
                    ],
                },
                {
                    count: 2,
                    question: `Your LLC Business Name Must Not Be Confusable With Another Business Name`,
                    answer: [
                        {
                            type: `paragraph`,
                            content: `It’s not enough for your TX LLC name to be unique. It also cannot be similar to the name of a corporation or LLC in Texas. For example, you cannot use the following factors to say your name is different from the name of another business:`
                        },
                        {
                            type: `list-dot-without-bg`,
                            content: [
                                `Suffixes, such as Corporation, Company, Incorporated, Incorporation, Limited, Corp., Co., Inc., Ltd., LLC, etc.`,
                                `Definite articles like “A,” “And,” “An,” “&,” “The,” etc.`,
                                `The singular, plural or possessive forms of a word`,
                                `Abbreviations, punctuation, symbols, fonts, typefaces, etc.`,
                            ],
                        },
                    ],
                },
                {
                    count: 3,
                    question: `Your LLC Business Name Must Contain Certain Words`,
                    answer: [
                        {
                            type: `paragraph`,
                            content: `All LLCs must have the words “Limited Liability Company,” “L.L.C.” or “LLC” in their name. These words should normally come at the end of the name.`
                        },
                    ],
                },
                {
                    count: 4,
                    question: `Your LLC Business Name May Have Other General Restrictions`,
                    answer: [
                        {
                            type: `paragraph`,
                            content: `Most states will not allow you to form LLCs with names that:`
                        },
                        {
                            type: `list-dot-without-bg`,
                            content: [
                                `Are very similar to the name of a federal or TX agency or organization (e.g., FBI, FDA, Texas Comptroller, Texas Police, Treasury, etc.)`,
                                `Suggest affiliation with a federal or state agency or organization`,
                                `Use the term “Olympic” or any terms that are trademarks of the Olympic organization`,
                                `Imply a purpose that it would be illegal for your business to carry out`,
                            ],
                        },
                    ],
                },
            ],
        },
        {
            type: `heading`,
            size: 3,
            content: `Specific Texas Rules for Business Names`,
        },
        {
            type: `paragraph`,
            content: `In addition to the general rules listed above, the Texas Secretary of State has some specific business naming rules for your LLC. You will need to follow these rules if you want to name your TX business appropriately. Here are some direct quotes from the Texas Secretary of State:`,
        },
        {
            type: `numberBoxList`,
            content: [
                `Where prohibited by §31.005 and §181.004 of the Texas Finance Code, an entity name cannot include the words "bank," "bank and trust," "trust," "trust company" or a similar term, phrase or foreign language word unless accompanied by a no objection letter from the Banking Commissioner`,
                `Where prohibited by §61.313 of the Texas Education Code, an entity name cannot include the words "College," "University," "School of Medicine," "Medical School," "Health Science Center," "School of Law," "Law Center," or "Law School," whether in English or in another language, unless accompanied by a no objection letter from the Texas Higher Education Coordinating Board`,
                `Where prohibited by §5.062 of the Texas Business Organizations Code, an entity name cannot include the words "Veteran," "Legion," "Foreign," "Spanish," "Disabled," "War," or "World War" if the name implies the entity is created for the benefit of war veterans and their families, without written approval issued from a veterans organization pursuant to §5.062 of the Texas Business Organizations Code.`,
                `The words "insurance" or "surety" must be accompanied by other words that remove the implication that the entity purpose is to be an insurer`,
            ],
        },
        {
            type: `paragraph`,
            styles: {marginTop: `40px`},
            content: `Read more about naming regulations from the <a href="https://direct.sos.state.tx.us/help/entitynames.pdf">Texas Secretary of State.</a>`,
        },
        {
            type: `heading`,
            size: 4,
            content: `Coming up with a Great Business Name`,
        },
        {
            type: `paragraph`,
            content: `The perfect business name can be elusive. We have a complete guide to choosing the right business name, but basically, you'll want to choose a name that will:`,
        },
        {
            type: `textBoxWithCheckIcon`,
            content: [
                `Appeal to your customers`,
                `Be memorable enough to stand out`,
                `Best represent your product or services`,
                `Not be used by another business`,
            ],
        },
        {
            type: `button`,
            theme: `secondary56`,
            width: `450px`,
            content: {
                text: `Incfile Guide To Choosing A Business Name`,
                url: `https://www.incfile.com/blog/post/llc-name-search-50-states/`,
            }
        },
        {
            type: `box-cta`, 
            color: `#faf2f8`,
            bgImage: [BgBoxBusinessNameIdea],
            content: {
                title: `Need help coming up with business name ideas?`,
                subtitle: `Try Incfile’s free Business Name Generator.`,
                button: {
                    text: `Get Business Name Ideas`,
                    url: `/business-name-generator/`
                }
            }
        }
    ],
};