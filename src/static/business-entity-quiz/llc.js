import { color } from "../../atomic/atoms/styles/colors";
import { shadow } from "../../atomic/atoms/styles/shadows";

export const top = {
  header: "You Should Consider Forming an LLC!",
  text:
    "For over 80 percent of small businesses, the right choice of business structure is a simple one: the LLC",
  button: {
    text: "Form Your LLC Today For $0 + State Fee",
    url: `${process.env.ORDER_URL}/form-order-now.php?entityType=LLC&utm_campaign=Lead%20Gen%20-%20Business%20Entity%20Quiz&utm_source=On_Page_Click&utm_medium=LLC%20Results%20Page&utm_term=Order%20Form`,
  },
  link: {
    text: "Retake Quiz",
    url: "/business-entity-quiz/explain/",
  },
};

export const about = {
  text: `Now that your small business is growing, it’s important to protect both your company and your own assets. Forming an LLC can help do that — but is it the best business entity choice for you?.
    <span>We've written a complete guide to forming an LLC to help with your decision.</span>`,
  box: {
    header: `What Does “LLC” Stand For?`,
    text: `The abbreviation "LLC" stands for limited liability company. 
        The name refers to one of the primary benefits of this business
        entity type—LLCs allow business owners to keep their personal assets separate from those of the company. This effectively limits their own liability when it comes to company debts and responsibilities.`,
  },
};

export const types = {
  header: `What Types of Businesses Should Choose an LLC?`,
  text: `If you don't plan on raising investment money for your business, think you might need asset protection and need flexible business management and taxes, then an LLC is likely the best choice for your business. Whether you are a sole proprietor, have a partner, or a multi-member corporation, the LLC is a great choice for small business owners, as it can provide the same limited liability protection as a corporation, without many of the complexities and formalities associated with them. At Incfile we see all sizes and verticals of businesses forming an LLC — from LLCs for real estate agents or financial advisors to solopreneurs such as personal trainers or even marijuana businesses. A number of entrepreneurs decide that an LLC is the business structure that fits their needs.`,
  box: {
    header: "Some businesses are prevented from forming an LLC, however.",
    text: `Typically financial companies such as banks, financial trust companies and insurance agencies can't file as an LLC. LLCs are sometimes limited for industries in certain states, too. For example, if you live 
        in California, you can't form an LLC if you're an architect, accountant or licensed health care provider.`,
  },
  text2: `Check out our <a href="/llc-state-information/">LLC information by state</a> for more details on your state.`,
  button: {
    text: `Form Your LLC Today For $0 + State Fee`,
    url: `${process.env.ORDER_URL}/form-order-now.php?entityType=LLC&utm_campaign=Lead%20Gen%20-%20Business%20Entity%20Quiz&utm_source=On_Page_Click&utm_medium=LLC%20Results%20Page&utm_term=Order%20Form`,
  },
};

export const prosAndCons = {
  header: `The Advantages & Disadvantages of LLCs`,
  text: `The LLC structure has many benefits that make it perfect for a wide variety 
    of companies. However, there are also some disadvantages to creating an LLC. Here are some of the biggest pros and cons to keep in mind.`,
  boxes: [
    {
      disadventage: false,
      circleBackgroundColor: color.green1,
      circleBackgroundShadow: shadow.green1,
      text: `
            <ul>
                <li>
                    <span>Limited Liability Protection</span> By forming an LLC, only the LLC is liable for the debts and liabilities incurred by the business — not the members. The members liability is limited to the personal interest they have invested in the company thus protecting the personal assets of the individual member that are separate from the LLC.
                </li>
                <li>
                    <span>Pass Through Taxation</span> The LLC typically does not pay taxes for itself. Instead, the net income/loss is "passed through" to the personal income of the owner(s)
                    /member(s), and is simply taxed as personal income. Federally, LLC taxation is handled very much the same as a partnership or sole proprietorship, in the case of a single member LLC.
                </li>
                <li>
                    <span>No Ownership Restrictions</span> The LLC does not have any residency or citizenship restrictions, which allows foreign nationals to have ownership in an LLC, if desired. In addition, other corporate entities may be LLC members which means that other corporations or LLCs (or other entities) may be a member of the LLC, or may be the sole member (although an LLC with a sole member that is a corporation or LLC is treated for tax purposes as a partnership or multi-member LLC).
                </li>
                <li>
                    <span>Versatile Tax Status One</span> of the most advantageous aspects of the LLC is that it has the ability to choose how it is treated as a taxable entity. According to the IRS an LLC is, by default, federally taxed as a partnership (in the case of a multi-member LLC) or as a sole proprietor (in the case of a single member LLC). The LLC, however, may elect to be taxed as a C- or S-corporation at any time the members so choose.
                </li>
                <li>
                    <span>Flexible Profit Distribution</span> For an LLC, if the members choose, the net income/profits of the LLC may be allocated to the members in different proportions to their
                    ownership percentage in the LLC. This is different from a corporation, as corporations are required to distribute profits exactly accordance with the proportion/percentage of ownership of each shareholder.
                </li>
                <li>
                    <span>Minimal Compliance Requirements</span> LLCs are subject to limited state mandated annual filing requirements and ongoing formalities. While corporations are typically required to have at least an annual meeting of directors and shareholders (and initial meeting of the same), adopt bylaws, and keep minutes of all meetings and all formal corporate resolutions, an LLC is not required to do any of those things (see the explanation of an operating agreement, above). The LLC members may have whatever meetings they wish and may document any such things as they wish, however they are not required to do so.
                </li>
            </ul>
            `,
    },
    {
      disadventage: true,
      circleBackgroundColor: color.red1,
      circleBackgroundShadow: shadow.red1,
      text: `
            <ul>
                <li>
                    <span>Self Employment Taxes</span> Although we listed Pass Through Taxation as an LLC benefit, it can also be a disadvantage. Oftentimes the taxes that are passed through and reported as personal income of LLC members will be higher than the taxes at a corporate level. You will also still pay for federal inclusions such as Medicare and Social Security. If you're confused if this business structure will be the right tax choice for you, it's a good idea to speak to your accountant or financial advisor.
                </li>
                <li>
                    <span>Careful Personal Records</span> As the owner of an LLC, you need to keep careful records of your business expenses — separate from your personal finances. This is the only way to ensure limited liability. Therefore, you should have separate bank accounts and cards to track business expenses.
                </li>
                <li>
                    <span>LLC Termination</span> Usually, if a member departs an LLC, then the LLC is terminated and ceases to exist. This is unlike a corporation where it still exists regardless of what shareholders come and go.
                </li>
                <li>
                    <span>Banking</span> Since it's required to keep your business finances separate from your personal finances, you'll need a business checking account. Banks usually charge a number of different fees and monthly expenses for these types of accounts. Also, If a check is made out to your LLC, then it is required to be deposited into a business bank account and cannot just be cashed. And some banks might charge extra for this type of deposit.
                </li>
            </ul>
            `,
    },
  ],
};

export const faq = {
  header: `Other Frequently Asked Questions about LLCs`,
  items: [
    {
      question: `How does business asset protection work with LLCs?`,
      answer: `The limited liability company structure, much like a corporation, provides LLC owners with limited liability asset protection. This means that the company assets are typically owned by the LLC and are separate from the personal assets from that of the LLC owner(s). Should there be a lawsuit aimed at the company, whether with or without merit, the LLC is the legal entity that would be sued. The assets of the LLC could be attacked, however that would be separate from the personal assets of the LLC owner(s), which would be protected.
            <br><br>
            The potential liability of an LLC owner is limited only to whatever that owner has invested in the LLC, such as an initial, investment or any retained earnings. This is very much the same as if you had purchased shares of stock in a corporation. In most cases, the most you can lose is what you paid for the stock, but you typically will not lose more than that, no matter how much the company might potentially lose or for however much the company might be sued.`,
    },
    {
      question: `What is an LLC member?`,
      answer: `If you are the owner of an LLC, you are referred to as a member, and LLCs can have a single member or multiple members — it's up to you.`,
    },
    {
      question: `How do I file an amendment for an LLC?`,
      answer: `If you need to make a change to your LLC, you need to <a href="/manage-your-company/amendment/">
            file an amendment</a> with your secretary of state. Not all changes need to be amended, but generally anything within your
            LLC's Articles of Incorporation or Articles of Organization that is being changed needs to be filed.`,
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
};

export const choose = {
  header: "Some businesses are prevented from forming an LLC, however.",
  text: `Typically financial companies such as banks, financial trust companies and insurance agencies can't file as an LLC. LLCs are sometimes limited for industries in certain states, too. For example, if you live 
        in California, you can't form an LLC if you're an architect, accountant or licensed health care provider.`,
  types: [
    {
      header: "Limited Liability Company (LLC)",
      text:
        "Should You Form a Limited Liability Company (LLC)? For over 80 percent of small businesses, the right choice of business structure is a simple one: the LLC.",
      color: color.blue3,
      image: "llc-cert-4502",
    },
    {
      header: "S Corporation",
      text:
        "Want to keep more of your tax money? See \n" +
        "if an S Corporation could be the right choice to help your business save money on taxes each year.",
      color: color.purple3,
      image: "s-corp-cert-7631",
    },
    {
      header: "C Corporation",
      text:
        "A C Corporation structure is generally better for larger businesses. Is it right for your business?",
      color: color.orange3,
      image: "c-corp-cert-5502",
    },
    {
      header: "Nonprofit",
      text:
        "Starting a nonprofit can truly help make the world a better place. Is a Nonprofit best for your business?",
      color: color.green3,
      image: "n-cert-6592",
    },
  ],
  header2: "The Four Main Types of Legal Business Structures",
  text2:
    "There are four main types of “business entities” \n" +
    "that you can create",
  image: "after-formation-9568",
  button: {
    text: "Take the quiz",
    url: "/business-entity-quiz/explain/",
  },
};

export const rocket = {
  header: `Launch Your Business`,
  header2: ``,
  text: `Only $0 + State Fee.`,
  text2: ``,
  button: {
    text: `See Detailed Pricing`,
    url: `${process.env.ORDER_URL}/form-order-now.php?entityType=LLC&utm_campaign=Lead%20Gen%20-%20Business%20Entity%20Quiz&utm_source=On_Page_Click&utm_medium=LLC%20Results%20Page&utm_term=Order%20Form`,
  },
};
