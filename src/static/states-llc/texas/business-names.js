import { color } from '../../../components/styles/colors';

import BgBoxDBAName from '../../../images/icons/states/dba-name-01.png';
import BgBoxTrademark from '../../../images/icons/states/trademark-01.png';
import BgBoxBusinessNameIdea from '../../../images/icons/states/business-name-idea.inline.png';
import BgBoxIncorporationPaperWork from '../../../images/icons/states/incorporation-paperwork-01.png';
import BgBoxBusinessNameSearchTool from '../../../images/icons/states/business-name-search-tool.inline.png';

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
            color: color.purple3,
            bgImage: [BgBoxBusinessNameIdea],
            content: {
                title: `Need help coming up with business name ideas?`,
                subtitle: `Try Incfile’s free Business Name Generator.`,
                button: {
                    text: `Get Business Name Ideas`,
                    url: `/business-name-generator/`
                }
            }
        },
        // Business name search
        {
            type: `heading`,
            size: 3,
            content: `Texas Business Entity Searches`,
        },
        {
            type: `paragraph`,
            content: `Once you have an idea what business name you’d like to use, you’ll need to complete a “Texas business entity search.” Incfile offers a fast, simple and convenient tool to look up your proposed business name. The Texas Comptroller also has a tool that lets you search the register of TX LLCs and corporations to see if someone already has your desired business name.`,
        },
        {
            type: `iconListColorBox`,
            boxColor: color.orange3,  
            content: {
                header: `The Texas Secretary of State search tool lets you enter details and search for your TX LLC by the following fields:`,
                list: [
                    `Tax ID`,
                    `Entity Name`,
                    `File Number`,
                ]
            }
        },
        {
            type: `paragraph`,
            styles: { marginTop: `42px`},
            content: `If the business name is already used, that means it’s not available and you won’t be able to register it. Try searching for a different business name instead.`,
        },
        {
            type: `box-cta`, 
            color: color.purple3,
            styles: { fontSize: `clamp(1.5rem, 5vw, 1.2rem)` },
            bgImage: [BgBoxBusinessNameSearchTool],
            content: {
                title: `Find out if your preferred business name is available in Texas with Incfile’s free tool.`,
                button: {
                    text: `Check Your Texas LLC Name`,
                    url: `/business-name-generator/`
                }
            }
        },
        // Assumed Name
        {
            type: `heading`,
            size: 3,
            content: `DBA / Assumed Names for Texas LLCs`,
        },
        {
            type: `paragraph`,
            content: `You might choose to do business under a different name from your legal LLC name. In Texas, doing business under a different name is known as an “Assumed Name.” You might choose to use a different name from your TX formal LLC name for a variety of reasons.`,
        },
        {
            type: `paragraph`,
            content: `For example, your LLC might be called Texas Alternative Power Holding Company LLC and you have a chain called Home Solar Energy Systems. You should file an assumed name to let the Texas Secretary of State know. In Texas, you do that through an “Assumed Name Certificate” form or you can have Incfile do it on your behalf through our Assumed Business Name service.`,
        },
        {
            type: `box-cta`, 
            color: color.orange3,
            styles: { fontSize: `clamp(1.5rem, 5vw, 1.2rem)` },
            bgImage: [BgBoxDBAName],
            content: {
                title: `Register and manage an assumed name or DBA name through our easy-to-use service.`,
                button: {
                    text: `Icfile’s Assumed Name Service`,
                    url: `/fictitious-business-or-trade-name/`
                }
            }
        },
        // Register Your Business Name With the Texas Secretary of State
        {
            type: `heading`,
            size: 3,
            content: `Register Your Business Name With the Texas Secretary of State`,
        },
        {
            type: `paragraph`,
            content: `Once you’ve searched for your Texas business name, checked availability, followed the naming rules and decided whether you need an assumed business name, you can register your TX LLC name. There are a couple of ways to do this.`,
        },
        {
            type: `numberBoxList`,
            styles: {marginBottom: `55px` },
            content: [
                {
                    text: `If you don’t want to form your Texas LLC right now, you can reserve the business name with the Texas Secretary of State. You will need to complete a Name Reservation form and file it with the TX SOS. You do not need to reserve a name if you are forming your business right away.`,
                    button: {
                        text: `Texas SOS LLC Name Reservation Form`,
                        theme: `secondary56`,
                        width: `385px`,
                        url: `/`,
                    }
                },
                `If you’re ready to start your Texas LLC, you can formally file your Certificate of Formation with the Texas Secretary of State, or have Incfile do it for you.`,
            ],
        },
        {
            type: `box-cta`, 
            color: color.blue3,
            styles: { fontSize: `clamp(1rem, 5vw, 1.5rem)`},
            bgImage: [BgBoxIncorporationPaperWork],
            content: {
                title: `Incfile can handle all your incorporation paperwork with the State of Texas for you—and we’ll do it for free!`,
                subtitle: `Incorporate in Texas for $0 + State Fee ($300)`,
                button: {
                    text: `Start Your LLC Now`,
                    url: `/`
                }
            }
        },
        // Faqs section
        {
            type: `heading`,
            size: 3,
            content: `FAQs About Naming Your Texas LLC`,
        },
        {
            type: `paragraph`,
            content: `You’ll find plenty more insight and guidance on the other pages of this guide, including:`,
        },
        {
            type: `accordion`,
            content: {
                items: [
                    {
                        question: `How Do I Search for My Texas LLC Business Name?`,
                        answer: `Just go to the business name search tool and enter your proposed business name. You can search the register of the Texas Secretary of State, which will tell you if there are any TX corporations or LLCs with that name.`,
                    },
                    {
                        question: `Are There Any Rules on Naming My Texas LLC?`,
                        answer: `Yes. Most LLCs will be bound by general rules (applicable to all LLCs) and specific rules (applicable in the state of Texas). We’ve detailed these rules above.`,
                    },
                    {
                        question: `Can I Do Business Under a Different Name Than My LLC Name in Texas?`,
                        answer: `Yes. Known as “assumed names,” “fictitious names,” “doing business as names” or “trade names,” you can choose to conduct business under a different name. Details are above.`,
                    },
                    {
                        question: `Can I Reserve a Name for My Texas LLC?`,
                        answer: `Yes. The Texas Secretary of State allows you to reserve a name if you don’t want to start your business immediately. Details are above. If you are ready to start your business now, you do not need to reserve a name.`,
                    },
                ]
            }
        },
        // Trademark section
        {
            type: `heading`,
            size: 3,
            content: `Trademarks and Service Marks`,
        },
        {
            type: `paragraph`,
            content: `You must be careful that your Texas LLC name does not infringe on the trademark or service mark of another business. The easiest way to make sure your proposed business name does not infringe is to carry out a trademark search through Incfile. If it doesn’t infringe, you can even register it as a trademark yourself.`,
        },
        {
            type: `box-cta`, 
            color: color.blue3,
            styles: { fontSize: `clamp(1rem, 5vw, 1.5rem)`},
            bgImage: [BgBoxTrademark],
            content: {
                title: `Make sure your business is starting off on the right foot when it comes to intellectual property.`,
                subtitle: `Have Incfile run a trademark search for you.`,
                button: {
                    text: `Incfile’s Trademark & Registration Service`,
                    url: `/trademark-name-search/`,
                }
            }
        },
    ],
};