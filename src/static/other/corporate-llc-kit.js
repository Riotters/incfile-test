import { color } from "../../atomic/atoms/styles/colors";

export const unboxing = {
  header: `Unboxing Your Business Formation Kit`,
  header2: "Platinum Kit",
  text: `Your official state documents will be delivered in a high quality and professional kit with your company name stamped along the spine of the book.`,
  boxes: {
    top: [
      {
        question: `Binder & Slip Case`,
        answer: `Our standard LLC incorporation or corporate kits are Handcrafted in the traditional bookbinding method and constructed with heavier materials extra durability and long life. The three-ring mechanisms with double opening and closing boosters allow pages to lie flat and turn easily.`,
      },
      {
        question: `20 Member of Stock Certificates`,
        answer: `These elegantly designed numbered security certificates contain your company name and state of incorporation and are printed on the finest security paper available.`,
      },
      {
        question: `Corporate Forms/Documents`,
        answer: `At no extra charge, your personalized binder will include printed minutes and bylaws or an operating agreement.`,
      },
      {
        question: `Corporate Embossing Seal`,
        answer: `Custom 1 5/8 metal die cast pocket seal embosser personalized with your company name , state of formation and date of formation.`,
      },
    ],
    bottom: [
      {
        question: `Personalized Business Name on Kit`,
        answer: `Each quality binder is personalized in gold with your organization name and comes with a matching slipcase.`,
      },
      {
        question: `Transfer Ledger`,
        answer: `8-page alphabetized transfer ledger.`,
      },
      {
        question: `Index Tabs`,
        answer: `Mylar-coated, easy-to-use tabs for your Corporate or LLC Kit.`,
      },
    ],
  },
};

export const getFormationKit = {
  header: "Review the features of your Business Formation Kit",
  text: "Our binder are made of high quality two-toned, textured vinyl. The three-ring mechanisms with double opening and closing boosters allow pages to lie flat \n" + "and turn easily",
  tableScheme: "green3",
  table: {
    headers: [
      {
        label: "What’s included with the kits?",
        type: "label",
        header: true,
        style: {
          "align-items": "flex-start",
        },
      },
      {
        label: "Gold Kit",
        textCenter: true,
        type: "label",
        header: true,
      },
      {
        label: "Platinum Kit",
        textCenter: true,
        type: "label",
        header: true,
      },
    ],
    rows: [
      [
        /// Available types (expected values):
        /// icon-cell (icon, label, variant: Boolean)
        /// checkbox (value, label, productName)
        /// checkmark
        /// label-boxed (label)
        /// label (label)
        /// minus
        /// list
        {
          icon: "formation-documents-icon-6504",
          label: "Formation documents",
          type: "icon",
        },
        {
          label: "Formation Documents",
          type: "label",
        },
        {
          type: "true",
        },
        {
          type: "true",
        },
      ],
      [
        /// Available types (expected values):
        /// icon-cell (icon, label, variant: Boolean)
        /// checkbox (value, label, productName)
        /// checkmark
        /// label-boxed (label)
        /// label (label)
        /// minus
        /// list
        {
          icon: "transfer-ledgers-6522",
          label: "Transfer Ledgers",
          type: "icon",
        },
        {
          label: "Transfer Ledgers",
          type: "label",
        },
        {
          type: "true",
        },
        {
          type: "true",
        },
      ],
      [
        /// Available types (expected values):
        /// icon-cell (icon, label, variant: Boolean)
        /// checkbox (value, label, productName)
        /// checkmark
        /// label-boxed (label)
        /// label (label)
        /// minus
        /// list
        {
          icon: "personalized-business-name-7041",
          label: "Personalized Business Name on Kit",
          type: "icon",
        },
        {
          label: "Personalized Business Name on Kit",
          type: "label",
        },
        {
          type: "true",
        },
        {
          type: "true",
        },
      ],
      [
        /// Available types (expected values):
        /// icon-cell (icon, label, variant: Boolean)
        /// checkbox (value, label, productName)
        /// checkmark
        /// label-boxed (label)
        /// label (label)
        /// minus
        /// list
        {
          icon: "20-member-or-stock-certificate-0491",
          label: "20 Member or Stock Certificate",
          type: "icon",
        },
        {
          label: "20 Member or stock certificate",
          type: "label",
        },
        {
          type: "true",
        },
        {
          type: "true",
        },
      ],
      [
        /// Available types (expected values):
        /// icon-cell (icon, label, variant: Boolean)
        /// checkbox (value, label, productName)
        /// checkmark
        /// label-boxed (label)
        /// label (label)
        /// minus
        /// list
        {
          icon: "corporate-embossing-seal-5041",
          label: "Corporate Embossing Seal",
          type: "icon",
        },
        {
          label: "Corporate Embossing Seal",
          type: "label",
        },
        {
          type: "true",
        },
        {
          type: "true",
        },
      ],
      [
        /// Available types (expected values):
        /// icon-cell (icon, label, variant: Boolean)
        /// checkbox (value, label, productName)
        /// checkmark
        /// label-boxed (label)
        /// label (label)
        /// minus
        /// list
        {
          icon: "enclosed-box-case-4031",
          label: "Enclosed Box Case",
          type: "icon",
        },
        {
          label: "Enclosed Box Case",
          type: "label",
        },
        {
          type: "false",
        },
        {
          type: "true",
        },
      ],
    ],
    headerColumnsDef: "5fr 150px 150px",
    rowColumnsDef: "100px 5fr 150px 150px",
  },
  standard: {
    header: "Standard Kit (non - branded kit)",
    header2: "A non - branded kit is available for our commercial business clients.",
    text: "This corporate book is useful for safely storing formal company documents and serves as a formality of your newly formed business entity.",
  },
  faq: {
    header: "Frequently Asked Questions",
    items: [
      {
        question: `How long will it take to receive my Kit?`,
        answer: `All kits are mailed next day using FedEx ground shipping and will typically arrive anywhere in the continental United States within 3 to 4 business days.`,
      },
      {
        question: `What is the customized Business Formation Kit?`,
        answer: `The Business Formation Kit is a professional binder enclosed in a matching slip case, customized with the name of your company on the spine insert. It comes with a metal die-cast corporate embossing seal with its own carrying pouch, customized with the name of your company and the date and state of formation. It has a set of 6 Mylar Reinforced Index Tabs, 20 custom printed stock or membership certificates with 20 full page stubs.`,
      },
      {
        question: `What is a corporate seal?`,
        answer: `A corporate seal is a customized embossing stamp that contains the name, date and state of formation of your company. It is used to create a raised emblem on paper documents. It is typically used on company documents to mark them as official. The Corporate Seal is included in the Business Formation Kit.`,
      },
      {
        question: `Is a corporate seal a requirement?`,
        answer: `While we believe that every corporation should have this accessory, the corporate seal is not a requirement in every state, either by law or by Incfile. It is, however, a valuable item to have in one's hands when the legitimacy and formality of your company needs to be expressed. In some jurisdictions a corporate Seal can be required to open a company bank account. Check with your particular secretary of state for any possibility that a corporate seal will be required in your locale.`,
      },
    ],
  },
};
