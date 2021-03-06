export const top = {
  header: `Should You Form a Limited Liability Company (LLC)?`,
  text: `For over 80% of small businesses, the right choice of business structure is a simple one: the LLC.`,
  button: [
    {
      text: "Form Your LLC Now",
      url: `${process.env.ORDER_URL}/form-order-now.php?entityType=LLC`,
    },
  ],
};

export const form = {
    header: "Download our Complete LLC Guide.",
    text: "The total who, what, where, when and how guide to forming & maintaining a LLC.",
    hs_form_id: `993baef6-066e-4d18-a813-c12bc3b3fff9`,
    button: {
        text: "Download now",
        url: "/"
    },
    fields: [
        {
            label: "Email",
            type: "email",
            name: 'email',
            required: 'required',
            placeholder: "",
        },
        {
            label: "First Name",
            name: 'firstname',
            required: 'required',
            type: "text",
            placeholder: "",
        },
        {
            label: "Last Name",
            name: 'lastname',
            required: 'required',
            type: "text",
            placeholder: "",
        },
        {
            label: "Phone number",
            name: 'phone',
            required: 'required',
            type: "text",
            placeholder: "",
        },
        {
            label: "I want to...",
            name: 'intent_path',
            required: 'required',
            type: "select",
            placeholder: "Please select",
            options: [
                "Start a Business Soon",
                "Start a Business Now",
                "Grow a Business",
            ]
        },
    ]
};

export const thanks_form = {
  header: "Thank you",
  text: "Thank you for your submission. Click below to download your guide!",
  button: {
    text: "Close",
    url: "#"
  }
};

export const about = {
  tabs: {
    panels: [`General Information`, `When choose an LLC?`, `Pros and cons of an LLC`, `LLC requirements`, `Types of LLCs`],
    content: [
      {
        text: `Now that your small business is growing, it’s important to protect both your company and your own assets. Forming an LLC can help do that — but is it the best business entity choice for you? We've written a complete guide to forming an LLC to help with your decision.`,
        box: {
          header: `What Does “LLC” Stand For?`,
          text: `The abbreviation "LLC" stands for limited liability company. The name refers to one of the primary benefits of this business entity type—LLCs allow business owners to keep their personal assets separate from those of the company. This effectively limits their own liability when it comes to company debts and responsibilities.`,
        },
        header: `What is an LLC?`,
        text2: `In the United States, a limited liability company is a business entity type that combines the pass-through taxation of a partnership or sole proprietorship with the limited liability of a corporation, creating the best of both worlds for business owners. LLCs have rapidly become one of the most popular business structures for new and small businesses, largely because they are considered to be simpler and more flexible than a corporation.`,
        boxes: [
          {
            header: `Pass-Through Taxation`,
            text: `of a sole proprietorship`,
          },
          {
            header: `Limited Liability`,
            text: `of a corporation`,
          },
        ],
        text3: `When you form an LLC, your business becomes its own legal entity, with separate debts and legal matters. However, LLCs are still tied to your personal taxes.`,
      },
      {
        header: `What Types of Businesses Should Choose an LLC?`,
        text: `If you don't plan on raising investment money for your business, think you might need asset protection and need flexible business management and taxes, then an LLC is likely the best choice for your business. Whether you are a sole proprietor, have a partner, or a multi-member corporation, the LLC is a great choice for small business owners, as it can provide the same limited liability protection as a corporation, without many of the complexities and formalities associated with them. At Incfile we see all sizes and verticals of businesses forming an LLC — from LLCs for real estate agents or financial advisors to solopreneurs such as personal trainers or even marijuana businesses. A number of entrepreneurs decide that an LLC is the business structure that fits their needs.`,
        text2: `Some businesses are prevented from forming an LLC, however. Typically financial companies such as banks, financial trust companies and insurance
        agencies can't file as an LLC. LLCs are sometimes limited for industries in certain states, too. For example, if you live in California, you
        can't form an LLC if you're an architect, accountant or licensed health care provider. Check out our <a href="/llc-state-information/" title="LLC information by state">LLC
        information by state</a> for more details on your state, or learn more about <a href="https://www.incfile.com/blog/tag/llcs/">LLCs on the
        blog.</a>`,
        button: {
          text: `Download our complete LLC guide`,
          url: `/`,
        },
      },
      {
        header: `The Advantages & Disadvantages of LLCs`,
        text: `The LLC structure has many benefits that make it perfect for a wide variety of companies. However, there are also some disadvantages to creating an LLC. Here are some of the biggest pros and cons to keep in mind.`,
        header2: `Advantages`,
        advantages: {
            items: [
              {
                question: `Limited Liability Protection`,
                answer: `By forming an LLC, only the LLC is liable for the debts and liabilities incurred by the business — not the members. The members liability is limited to the personal interest they have invested in the company thus protecting the personal assets of the individual member that are separate from the LLC.`,
              },
              {
                question: `Pass Through Taxation`,
                answer: `The LLC typically does not pay taxes for itself. Instead, the net income/loss is "passed through" to the personal income of the owner(s)/member(s), and is simply taxed as personal income. Federally, LLC taxation is handled very much the same as a partnership or sole proprietorship, in the case of a single member LLC.`,
              },
              {
                question: `Member-Managed LLC`,
                answer: `This type of LLC is where all owners (members) are operating the business themselves, equally. This is the most common type of LLC.`,
              },
              {
                question: `No Ownership Restrictions`,
                answer: `The LLC does not have any residency or citizenship restrictions, which allows foreign nationals to have ownership in an LLC, if desired.`,
                text: `In addition, other corporate entities may be LLC members which means that <a href="/research-topics/llc-info/can-another-business-entity-be-a-member-of-an-llc/">other corporations or LLCs (or other entities)</a> may be a member of the LLC, or may be the sole member (although an LLC with a sole member that is a corporation or LLC is treated for tax purposes as a partnership or multi-member LLC).`,
              },
              {
                question: `Versatile Tax Status`,
                answer: `One of the most advantageous aspects of the LLC is that it has the ability to choose how it is treated as a taxable entity. According to the IRS an LLC is, by default, federally taxed as a partnership (in the case of a multi-member LLC) or as a sole proprietor (in the case of a single member LLC). The LLC, however, may elect to be taxed as a C- or S-corporation at any time the members so choose.`,
              },
              {
                question: `Flexible Profit Distribution`,
                answer: `For an LLC, if the members choose, the net income/profits of the LLC may be allocated to the members in different proportions to their ownership percentage in the LLC. This is different from a corporation, as corporations are required to distribute profits exactly accordance with the proportion/percentage of ownership of each shareholder.`,
              },
              {
                question: `Minimal Compliance Requirements`,
                answer: `LLCs are subject to limited state mandated annual filing requirements and ongoing formalities. While corporations are typically required to have at least an annual meeting of directors and shareholders (and initial meeting of the same), adopt bylaws, and keep minutes of all meetings and all formal corporate resolutions, an LLC is not required to do any of those things (see the explanation of an operating agreement, above). The LLC members may have whatever meetings they wish and may document any such things as they wish, however they are not required to do so.`,
              },
            ],
        },
        header3: `Disadvantages`,
        disadvantages: {
            items: [
              {
                question: `Self Employment Taxes`,
                answer: `Although we listed Pass Through Taxation as an LLC benefit, it can also be a disadvantage. Oftentimes the taxes that are passed through and reported as personal income of LLC members will be higher than the taxes at a corporate level. You will also still pay for federal inclusions such as Medicare and Social Security. If you're confused if this business structure will be the right tax choice for you, it's a good idea to speak to your accountant or financial advisor.`,
              },
              {
                question: `Careful Personal Records`,
                answer: `As the owner of an LLC, you need to keep careful records of your business expenses — separate from your personal finances. This is the only way to ensure limited liability. Therefore, you should have separate bank accounts and cards to track business expenses.`,
              },
              {
                question: `LLC Termination`,
                answer: `Usually, if a member departs an LLC, then the LLC is terminated and ceases to exist. This is unlike a corporation where it still exists regardless of what shareholders come and go.`,
              },
              {
                question: `Banking`,
                answer: `Since it's required to keep your business finances separate from your personal finances, you'll need a business checking account. Banks usually charge a number of different fees and monthly expenses for these types of accounts. Also, If a check is made out to your LLC, then it is required to be deposited into a business bank account and cannot just be cashed. And some banks might charge extra for this type of deposit.
                `,
              },
            ],
        },
      },
      {
        header: `Understanding LLC Requirements`,
        text: `LLCs, unlike corporations, are not required to hold annual meetings and keep minutes, nor are they subject to the more stringent record keeping required of corporations. But there are certain LLC requirements you'll need to keep in mind.`,
        box: {
          header: `LLC Operating Agreements`,
          text: `The governing document of the LLC is called an operating agreement, and it is within this document that the members lay out all important provisions, such as standards for LLC governance, ownership parameters, and rules around member changes (adding or removing members, or what happens in case of death or incapacity of a member).`,
        },
        text2: `The operating agreement is an internal document and is an agreement amongst the members or owners, which means it is not recorded with the state.`,
        box2: {
          header: `LLC Annual Reports`,
          text: `In many states, LLCs must file an annual or biennial report with their Secretary of State. Failing to file can result in your business being dissolved.`,
        },
        text3: `To learn more about annual reports (or to have Incfile file yours for you), <a href="/manage-your-company/annual-report/">click here</a>, or view our LLC state guides to learn about specific requirements for your state.`,
        link: {
          text: `Learn about specific requirements for your state`,
          url: `/llc-state-information/`,
        },
      },
      {
        faq: {
          items: [
            {
              question: `Domestic LLC`,
              answer: `	A domestic LLC is one formed and operated within your state. Your state has the authority to govern your LLC if formed within their jurisdiction.`,
            },
            {
              question: `Foreign LLC`,
              answer: `A foregin LLC is one that operates in a different state than the state in which it was formed. For example, you might have formed your LLC in Texas, but you're operating your LLC in Georgia. This does not mean that the LLC was formed internationally.`,
            },
            {
              question: `Member-Managed LLC`,
              answer: `This type of LLC is where all owners (members) are operating the business themselves, equally. This is the most common type of LLC.`,
            },
            {
              question: `Manager-Managed LLC`,
              answer: `If some of your business partners want to remain passive in running the business, then this type of structure is a manager-managed LLC. Either members or nonmembers can be delegated as a manager.`,
            },
            {
              question: `Single-Member LLC`,
              answer: `	This is an LLC with only one member.`,
            },
            {
              question: `Multiple-Member LLC`,
              answer: `This is an LLC with multiple members. A multi-member LLC must be more careful in spelling out carefully with the LLC Operating Agreement the rights of each member in case the LLC folds or there is a death or disagreement.`,
            },
            {
              question: `Series LLC`,
              answer: `A Series LLC is a unique for of an LLC that acts as a master LLC or umbrella over a series of separate legal entities. This can be a series of members, assets, managers or interests. The series LLC started in Delaware and is now an option in only eight states: Delaware, Illinois, Iowa, Nevada, Oklahoma, Tennessee, Texas and Utah.`,
            },
            {
              question: `Restricted LLCs`,
              answer: `Restricted LLCs are a type of LLC available in Nevada only that were launched in 2009. These types of LLCs choose to be restricted within their Articles of Organization and therefore cannot make certain business distributions among members until 10 years after forming their LLC.`,
            },
            {
              question: `L3C`,
              answer: `An L3C company is a for-profit company with a stated philanthropic social purpose. This type of LLC is a hybrid business structure that uses the legal and tax flexibility of an LLC, the social benefits of a nonprofit organization, and the branding and market positioning advantages of a social enterprise.`,
            },
            {
              question: `Anonymous LLC`,
              answer: `An anonymous LLC is where the ownership details of the LLC is not made public by the state the LLC is registered. New Mexico is one of the only states that allows for truly anonymous LLCs.`,
            },
          ],
        },
      },
    ],
  },
};

export const faq = {
  header: `Other Frequently Asked Questions about LLCs`,
  faq: {
    items: [
      {
        question: `How does business asset protection work with LLCs?`,
        answer: `<p>The limited liability company structure, much like a corporation, provides LLC owners with limited liability asset protection. 
                  This means that the company assets are typically owned by the LLC and are separate from the personal assets from that of the LLC owner(s). 
                  Should there be a lawsuit aimed at the company, whether with or without merit, the LLC is the legal entity that would be sued. The assets of the LLC could be attacked, 
                  however that would be separate from the personal assets of the LLC owner(s), which would be protected.</br>
                  The potential liability of an LLC owner is limited only to whatever that owner has invested in the LLC, such as an initial, investment or any retained earnings. 
                  This is very much the same as if you had purchased shares of stock in a corporation. In most cases, the most you can lose is what you paid for the stock, but you typically will not lose more than that, 
                  no matter how much the company might potentially lose or for however much the company might be sued.</p>`,
      },
      {
        question: `What is an LLC member?`,
        answer: `If you are the owner of an LLC, you are referred to as a member, and LLCs can have a single member or multiple members — it's up to you.`,
      },
      {
        question: `How do I file an amendment for an LLC?`,
        answer: `<p>If you need to make a change to your LLC, you need to
        <a href="/manage-your-company/amendment/">file an amendment</a>
        with your secretary of state. Not all changes need to be amended, but generally anything within your LLC's Articles of Incorporation or Articles of Organization that is being changed needs to be filed.</p>`,
      },
      {
        question: `Can you start an LLC by yourself?`,
        answer: `Yes! In fact, LLCs are often the perfect structure for sole proprietors because they provide protection for your personal assets without the complexity and rigid regulations of a corporation.`,
      },
      {
        question: `How do LLC owners pay themselves?`,
        answer: `As the owner of your LLC, you do not receive a paycheck. Instead LLC members take "draws" or "distributions," which do not have any federal or state income taxes withheld. You are responsible for reporting your share of profits on your personal income tax returns.`,
      },
      {
        question: `How do LLC taxes work?`,
        answer: `LLCs can be taxed differently depending on whether they are sole proprietorships or have multiple members, and whether or not you elect to be taxes as a corporation. For more information, talk to your accountant.`,
      },
    ],
  },
  button: {
    text: `Download our complete LLC guide`,
    url: `/`,
  },
  text: `From developing your business idea to measuring success, our free guide has
    all the info you need to get your business off the ground.`,
};
