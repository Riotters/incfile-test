import { color } from "../../../components/styles/colors";

import BgBoxDBAName from "../../../images/icons/states/dba-name-01.png";
import BgBoxTrademark from "../../../images/icons/states/trademark-01.png";
import BgBoxBusinessNameIdea from "../../../images/icons/states/business-name-idea.inline.png";
import BgBoxIncorporationPaperWork from "../../../images/icons/states/incorporation-paperwork-01.png";
import BgBoxBusinessNameSearchTool from "../../../images/icons/states/business-name-search-tool.inline.png";

export const businessNamesContent = {
  header: {
    title: `New York Business Entity Searches and Naming Your LLC`,
    subline: `Learn how to conduct a business entity search with the New York Division of Corporations and register your LLC name.`,
    boxes: [
      {
        title: `Incorporate today for <span style="color:#FD8550">$0 + State fee.</span>`,
        desc: `Starting a New York LLC? Have Incfile do all the paperwork for you for free.`,
        button: {
          text: `Form Your LLC Now`,
          url: "/form-order-now.php?entityType=LLC&entityState=NY/",
        },
      },
    ],
  },
  content: [
    {
      type: `paragraph`,
      content: `Your New York business entity needs the perfect name, and we’re here to help. In this section we’ll guide you through searching the NY Department of State business registry, tell you about the rules for naming your business, explain “assumed names” and get you started with registering your LLC.`,
    },
    {
      type: `heading`,
      size: 3,
      content: `Business Name Rules for New York LLCs`,
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
              content: `The business name you have chosen cannot be used by any other LLC or corporation in the state of New York. This is why you should check business name availability on the NY Department of State website.`,
            },
          ],
        },
        {
          count: 2,
          question: `Your LLC Business Name Must Not Be Confusable With Another Business Name`,
          answer: [
            {
              type: `paragraph`,
              content: `It’s not enough for your LLC name to be unique. It also cannot be similar to the name of a corporation or LLC in New York. For example, you cannot use the following factors to say your name is different from the name of another business:`,
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
              content: `All LLCs must have the words “Limited Liability Company,” “L.L.C.” or “LLC” in their name. These words should normally come at the end of the name.`,
            },
          ],
        },
        {
          count: 4,
          question: `Your LLC Business Name May Have Other General Restrictions`,
          answer: [
            {
              type: `paragraph`,
              content: `Most states will not allow you to form LLCs with names that:`,
            },
            {
              type: `list-dot-without-bg`,
              content: [
                `Are very similar to the name of a federal or NY agency or organization (e.g. FBI, FDA, New York Department of Taxation and Finance, New York Police, Treasury, etc.)`,
                `Suggest affiliation with a federal or state agency or organization`,
                `Use the term “Olympic” or any terms that are trademarks of the Olympic organization`,
                `Imply a purpose that it would be illegal for your business to carry out`,
              ],
            },
          ],
        },
        {
            count: 5,
            question: `Avoid Using Words That Are Restricted or Prohibited by the NY DOS`,
            answer: [
              {
                type: `list-dot-without-bg`,
                content: [
                  `<b>Restricted words for New York LLCs include:</b> "America Espirito Sport Fraternite," "Citius Altius Fortius," academy, acceptance, annuity, arboretum, assurance, bank, benefit, blind, bond, casualty, college, conservatory, council, doctor, education, elementary, endowment, exchange, fidelity, finance, guaranty, handicapped, historical, historical society, history, indemnity, industrial organization, industrial organization, institute, insurance, investment, kindergarten, labor, lawyer, library, loan, mortgage, museum, Olympiad, prekindergarten, preschool, savings, school, secondary, surety, title, trust, underwriter, union, United Nations, university`,
                  `<b>Prohibited words for New York LLCs include:</b> attorney, board of trade, chamber of commerce, community, cooperation, cooperative, corporation, incorporated, partnership, redevelopment, state police, state trooper, tenant relocation, urban development, urban relocation`,
                ],
              },
            ],
          },
      ],
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
      content: [`Appeal to your customers`, `Be memorable enough to stand out`, `Best represent your product or services`, `Not be used by another business`],
    },
    {
      type: `button`,
      theme: `secondary56`,
      width: `450px`,
      content: {
        text: `Incfile Guide To Choosing A Business Name`,
        url: `https://www.incfile.com/blog/post/llc-name-search-50-states/`,
      },
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
          url: `/business-name-generator/`,
        },
      },
    },
    // Business name search
    {
      type: `heading`,
      size: 3,
      content: `New York Business Entity Searches`,
    },
    {
      type: `paragraph`,
      content: `Once you’ve narrowed it down to a few name options, it’s important to check with the New York Department of State to make sure your preferred business name isn’t already taken by another New York business.`,
    },
    {
      type: `paragraph`,
      styles: { marginTop: `42px` },
      content: `The Incfile Business Name Search tool lets you effortlessly search for your business name in New York and any other state. Our tool integrates with New York’s Corporation and Business Entity Database to find out if your name is available.`,
    },
    {
      type: `box-cta`,
      color: color.purple3,
      styles: { fontSize: `clamp(1.5rem, 5vw, 1.2rem)` },
      bgImage: [BgBoxBusinessNameSearchTool],
      content: {
        title: `Find out if your preferred business name is available in New York with Incfile’s free tool.`,
        button: {
          text: `Check Your New York LLC Name`,
          url: `/new-york-entity-search/?open=true/`,
        },
      },
    },
    // Assumed Name
    {
      type: `heading`,
      size: 3,
      content: `DBAs/Assumed Names for New York LLCs`,
    },
    {
      type: `paragraph`,
      content: `You might choose to do business under a different name from your legal LLC name. Often this is called a “DBA” name. In New York, doing business under a different name is known as an “assumed name.” You might choose to use a different name from your formal LLC name for a variety of reasons.`,
    },
    {
      type: `paragraph`,
      content: `For example, your LLC might be called “New York Real Estate Holding Company LLC,” and you have a chain of properties called “East Side Luxury Apartments.” You should file an assumed name to let the New York Department of State know. In New York, you do that through a Certificate of Assumed Name form, or you can have Incfile do it on your behalf through our Assumed Business Name service.`,
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
          url: `/fictitious-business-or-trade-name/`,
        },
      },
    },
    // Register Your Business Name With the Texas Secretary of State
    {
      type: `heading`,
      size: 3,
      content: `Register Your Business Name`,
    },
    {
      type: `paragraph`,
      content: `Once you’ve <a href="/business-name-search/">searched for your New York business name</a>, checked availability, followed the naming rules and decided whether you need an assumed name, you can register your LLC name with New York State. There are a couple of ways to do this.`,
    },
    {
      type: `numberBoxList`,
      styles: { marginBottom: `55px` },
      content: [
        {
          text: `If you don’t want to form your New York LLC right now, you can reserve the business name with the New York Department of State. You will need to complete an Application for Reservation of Name and file it with the DOS. You do not need to reserve a name if you are forming your business right away.`,
          button: {
            text: `New York SOS LLC Name Reservation Form`,
            theme: `secondary56`,
            width: `385px`,
            url: `/https://www.dos.ny.gov/corps/buscorp.html/`,
          },
        },
        `If you’re ready to start your LLC, you can file your Articles of Organization with the New York DOS, or let Incfile take care of it for you for free.`,
      ],
    },
    {
      type: `box-cta`,
      color: color.blue3,
      styles: { fontSize: `clamp(1rem, 5vw, 1.5rem)` },
      bgImage: [BgBoxIncorporationPaperWork],
      content: {
        title: `Incfile can handle all your incorporation paperwork with the New York Department of State for you — and we’ll do it for free!`,
        subtitle: `Incorporate in New York for $0 + State Fee ($300)`,
        button: {
          text: `Start Your LLC Now`,
          url: `/form-order-now.php?entityType=LLC&entityState=NY/`,
        },
      },
    },
    // Faqs section
    {
      type: `heading`,
      size: 3,
      content: `FAQs About Naming Your New York LLC`,
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
            question: `How Do I Search for My New York LLC Business Name?`,
            answer: `You can use Incfile’s <a href="/new-york-entity-search/?open=true">Business Name Search tool</a> or search the New York business registry yourself on the <a href="https://www.dos.ny.gov/corps/index.html" target="_blank" rel="noopener noreferrer"> Division of Corporations website</a>. Just go to the business name search tool and enter your proposed business name.`,
          },
          {
            question: `Are There Any Rules on Naming My New York LLC?`,
            answer: `Yes. Most LLCs will be bound by general rules (applicable to all LLCs) and specific rules (applicable in the state of New York). We’ve detailed these rules above.`,
          },
          {
            question: `Can I Do Business Under a Different Name Than My LLC Name in New York?`,
            answer: `Yes. Known as “assumed names,” “fictitious names,” “doing business as names” or “trade names,” you can choose to conduct business under a different name. Details are above.`,
          },
          {
            question: `Can I Reserve a Name for My New York LLC?`,
            answer: `Yes. The New York Department of State allows you to reserve a name if you don’t want to start your business immediately. Details are above. If you are ready to start your business now, you do not need to reserve a name.`,
          },
        ],
      },
    },
    // Trademark section
    {
      type: `heading`,
      size: 3,
      content: `Trademarks and Service Marks`,
    },
    {
      type: `paragraph`,
      content: `You must be careful that your New York LLC name does not infringe on the trademark or service mark of another business. The easiest way to make sure your proposed business name does not infringe is to carry out a trademark search through Incfile. If it doesn’t infringe, you can even register it as a trademark yourself.`,
    },
    {
      type: `box-cta`,
      color: color.blue3,
      styles: { fontSize: `clamp(1rem, 5vw, 1.5rem)` },
      bgImage: [BgBoxTrademark],
      content: {
        title: `Make sure your business is starting off on the right foot when it comes to intellectual property.`,
        subtitle: `Have Incfile run a trademark search for you.`,
        button: {
          text: `Incfile’s Trademark & Registration Service`,
          url: `/trademark-name-search/`,
        },
      },
    },
  ],
};
