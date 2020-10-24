import { color } from "../../../components/styles/colors";

import BgBoxDBAName from "../../../images/icons/states/dba-name-01.png";
import BgBoxTrademark from "../../../images/icons/states/trademark-01.png";
import BgBoxBusinessNameIdea from "../../../images/icons/states/business-name-idea.inline.png";
import BgBoxIncorporationPaperWork from "../../../images/icons/states/incorporation-paperwork-01.png";
import BgBoxBusinessNameSearchTool from "../../../images/icons/states/business-name-search-tool.inline.png";

export const businessNamesContent = {
  header: {
    title: `Georgia Business Searches and Naming Your LLC`,
    subline: `Learn how to conduct a business entity search with the Georgia Secretary of State and register your LLC name.`,
    boxes: [
      {
        title: `Incorporate today for <span style="color:#FD8550">$0 + State fee.</span>`,
        desc: `Starting a Georgia LLC? Have Incfile do all the paperwork for you for free.`,
        button: {
          text: `Form Your LLC Now`,
          url: `${process.env.ORDER_URL}/form-order-now.php?entityType=LLC&entityState=GA`,
        },
      },
    ],
  },
  content: [
    {
      type: `paragraph`,
      content: `We’re here to help you find the right business name for your Georgia LLC. From searching for a business name with the GA Secretary of State to understanding naming rules or creating a “Doing Business As” name to register your entity, you’re in the right place.`,
    },
    {
      type: `heading`,
      size: 3,
      content: `Georgia LLC Business Name Rules`,
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
              content: `The business name you have chosen cannot be used by any other LLC or corporation in the state of Georgia. This is why you should check business name availability using the Georgia SOS website or Incfile’s free Business Name Search tool.`,
            },
          ],
        },
        {
          count: 2,
          question: `Your LLC Business Name Must Not Be Confusable With Another Business Name`,
          answer: [
            {
              type: `paragraph`,
              content: `It’s not enough for your LLC name to be unique. It also cannot be similar to the name of a corporation or LLC in Georgia. For example, you cannot use the following factors to say your name is different from the name of another business:`,
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
                `Are very similar to the name of a federal or GA agency or organization (e.g., FBI, FDA, Georgia Department of Taxation and Finance, Georgia Police, Treasury, etc.)`,
                `Suggest affiliation with a federal or state agency or organization`,
                `Use the term “Olympic” or any terms that are trademarks of the Olympic organization`,
                `Imply a purpose that it would be illegal for your business to carry out`,
              ],
            },
          ],
        },
        {
          count: 5,
          question: `Avoid Using Words That Are Restricted by the Georgia Secretary of State`,
          answer: [
            {
              type: `list-dot-without-bg`,
              content: [
                `Use of the following terms in an entity name requires the written approval of the Office of Insurance and Safety Fire Commissioner: “insurance,” “assurance,” “surety,” “fidelity,” “reinsurance,” “reassurance” or “indemnity”`,
                `Use of the following terms or any variation of the word “bank” in an entity name requires the written approval of the Department of Banking and Finance: "bank," “banc,” “banque,” “banker,” “banking company,” “banking house,” “bancorp,” “bankruptcy,” “credit union,” “savings & loan,” “trust” or “trust company”`,
                `Use of the following terms in an entity name requires the written approval of the Georgia Nonpublic Postsecondary Education Commission: “college” or “university”`,
              ],
            },
          ],
        },
      ],
    },
    {
      type: `paragraph`,
      styles: { marginTop: `40px` },
      content: `<a href="https://sos.ga.gov/index.php/corporations/name_availability_standards" target="_blank" rel="noopener noreferrer">Read More About Georgia Business Naming Rules</a>`,
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
        url: `/blog/post/llc-name-search-50-states/`,
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
      content: `Georgia Business Entity Searches`,
    },
    {
      type: `paragraph`,
      content: `Once you’ve narrowed it down to a few name options, the next step is to complete a business entity search with the Georgia Secretary of State. Incfile provides an easy-to-use Business Name Search tool that will look up your proposed business name in the Georgia business registry. You can also use the business search feature on the <a href="https://ecorp.sos.ga.gov/BusinessSearch"target="_blank" rel="noopener noreferrer">Secretary of State website</a> yourself.`,
    },
    {
      type: `paragraph`,
      styles: { marginTop: `42px` },
      content: `If the business name is already used, that means it’s not available and you won’t be able to register it. Try searching for a different business name instead.`,
    },
    {
      type: `box-cta`,
      color: color.purple3,
      styles: { fontSize: `clamp(1.5rem, 5vw, 1.2rem)` },
      bgImage: [BgBoxBusinessNameSearchTool],
      content: {
        title: `Find out if your preferred business name is available in Georgia with Incfile’s free tool.`,
        button: {
          text: `Check Your Georgia LLC Name`,
          url: `/business-name-generator/`,
        },
      },
    },
    // Assumed Name
    {
      type: `heading`,
      size: 3,
      content: `DBA/Assumed Names for Georgia LLCs`,
    },
    {
      type: `paragraph`,
      content: `You might choose to do business under a different name from your legal LLC name. In Georgia, doing business under a different name is known as a “fictitious” or “Doing Business As (DBA)” name. You might choose to use a different name from your GA formal LLC name for a variety of reasons.`,
    },
    {
      type: `paragraph`,
      content: `For example, your LLC might be called Georgia Orchards Holding Company LLC and you have a chain called The Peach Pit Stop. You should file a fictitious/DBA name form. You should register a fictitious name with the Clerk of the Superior Court in the county where you conduct business, or you can have Incfile file it on your behalf through our Fictitious Business Name service.`,
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
    // Register Your Business Name With the Georgia Secretary of State
    {
      type: `heading`,
      size: 3,
      content: `Registering Your Business Name`,
    },
    {
      type: `paragraph`,
      content: `Once you’ve searched for your Georgia business name, checked availability, followed the naming rules and decided whether you need a fictitious name, you can register your LLC name with Georgia. There are a couple of ways to do this.`,
    },
    {
      type: `numberBoxList`,
      styles: { marginBottom: `55px` },
      content: [
        {
          text: `If you don’t want to form your Georgia LLC right now, you can reserve the business name with the Georgia Secretary of State. You will need to complete a <a href="https://sos.ga.gov/corporations/acrobat/applications/Form%20-%20Name%20Reservation.pdf"target="_blank" rel="noopener noreferrer">Name Reservation Request</a> and file it with the GA SOS. You do not need to reserve a name if you are forming your business right away.`,
        },
        `If you’re ready to start your Georgia LLC, you can <a href="https://ecorp.sos.ga.gov/Account"target="_blank" rel="noopener noreferrer">formally file</a> your Articles of Organization with the Georgia Secretary of State, or let Incfile do it for you for free.`,
      ],
    },
    {
      type: `box-cta`,
      color: color.blue3,
      styles: { fontSize: `clamp(1rem, 5vw, 1.5rem)` },
      bgImage: [BgBoxIncorporationPaperWork],
      content: {
        title: `Incfile can handle all your incorporation paperwork with the State of Georgia for you—and we’ll do it for free!`,
        subtitle: `Incorporate in Georgia for $0 + State Fee ($100)`,
        button: {
          text: `Start Your LLC Now`,
          url: `/`,
        },
      },
    },
    // Faqs section
    {
      type: `heading`,
      size: 3,
      content: `FAQs About Naming Your Georgia LLC`,
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
            question: `How Do I Search for My Georgia LLC Business Name?`,
            answer: `You can use Incfile’s <a href="/business-name-search/">Business Name Search tool</a> or search the Georgia business registry yourself on the Secretary of State website. Just go to the Business Name Search tool and enter your proposed business name.`,
          },
          {
            question: `Are There Any Rules on Naming My Georgia LLC?`,
            answer: `Yes. Most LLCs will be bound by general rules (applicable to all LLCs) and specific rules (applicable in the state of Georgia). We’ve detailed these rules above.`,
          },
          {
            question: `Can I Do Business Under a Different Name Than My LLC Name in Georgia?`,
            answer: `Yes. Known as “assumed names,” “fictitious names,” “doing business as names” or “trade names,” you can choose to conduct business under a different name. Details are above.`,
          },
          {
            question: `Can I Reserve a Name for My Georgia LLC?`,
            answer: `Yes. The Georgia Secretary of State allows you to reserve a name if you don’t want to start your business immediately. Details are above. If you are ready to start your business now, you do not need to reserve a name.`,
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
      content: `You must be careful that your Georgia LLC name does not infringe on the trademark or service mark of another business. The easiest way to make sure your proposed business name does not infringe is to carry out a trademark search through Incfile. If it doesn’t infringe, you can even register it as a trademark yourself.`,
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
