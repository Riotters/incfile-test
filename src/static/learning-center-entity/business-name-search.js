export const top = {
  header: `Business Name Search`,
  text: `Find Out If Your Company Name Is Available Using ncfile’s Business Name Lookup Tool`,
  buttons: [
    {
      text: `Search Business Name`,
      url: `/`,
    },
  ],
};

export const about = {
  text: `Your business needs a great name — one that is unique and memorable while telling customers what you do and strengthening your brand. The question is: How do you find the perfect name while making sure it’s different from any other business name in your formation state?`,
  header2: `The answer is simple: With Incfile’s business name search and lookup tool.`,
  text2: `We’ve made it fast and easy to look up LLC and corporation names in some of the most popular U.S. states for LLC formation, so you can easily see if your proposed business name is available. And the best part is you can do it all from one place.`,
};

export const care = {
  header: `We’ll Take Care of the Entity Search.`,
  text: `We’ll tell you if your business name is available with the Secretary of State. Just fill in your proposed business name, and we’ll search the company registrar for you.`,
  form: {
    header: `Please enter the business name information`,
    field: {
      label: `Entity Name*`,
    },
    field2: {
      label: `Select Entity Type*`,
      radio: `LLC`,
      radio2: `Corporation`,
    },
    link: {
      text: `Not sure?`,
      url: `/business-entity-comparison/`,
    },
    field3: {
      label: `Entity State*`,
    },
    header2: `Where we can let you about your business name?`,
    field4: {
      label: `Full Name*`,
    },
    field5: {
      label: `Email*`,
    },
    button: {
      text: `Check Name Avaliability`,
      url: `/`,
    },
  },
};

export const features = {
  header: `Features of the Incfile Business Name Search and Lookup Tool`,
  text: `We’ve made our tool simple and quick, with the features you need, including the ability to:`,
  header2: `Search the business registry of the given U.S. state`,
  header3: `See if your proposed business name is already in use`,
  header4: `Query the most up-to-date information available`,
  header5: `Search for both corporation and LLC names`,
  header6: `Choose to form your business immediately if the name you want is available`,
};

export const faq = {
  header: `Business Name Searches and Availability: Your Questions Answered`,
  faq: {
    items: [
      {
        question: `Do I Need to Have a Distinctive Name for My Business?`,
        answer: `Every business formed in your state must have a unique business name. This name cannot be similar to any other business name in the state.`,
      },
      {
        question: `Are There Rules on What Makes a Business Name Unique?`,
        answer: `Typically, the following factors cannot be used to say your business name is different from another business name:
        <ul>
            <li>Suffixes, such as Corporation, Company, Incorporated, Incorporation, Limited, Corp., Co., Inc., Ltd., LLC, etc.</li>
            <li>Definite articles like “A,” “And,” “An,” “&amp;,” “The,” etc.</li>
            <li>The singular, plural or possessive forms of a word</li>
            <li>Abbreviations, punctuation, symbols, fonts, typefaces, etc.</li>
        </ul>`,
      },
      {
        question: `Are There Rules on What I Can Name My Business?`,
        answer: `The following rules typically apply across all states for naming a business:
        <ul>
            <li>Your entity name needs to be unique and should not be similar to or confusable with another business name in the
            state.</li>
            <li>Your name must contain certain words, depending on the type of entity you’re creating.
                <ul>
                    <li>If your entity is an LLC, it must contain the words “Limited Liability Company” or an abbreviation.</li>
                    <li>If your entity is a corporation, it must contain a word like “Incorporated” or “Corporation.”</li>
                </ul>
            </li>
            <li>The name should not imply an association or connection with a state entity, agency or body.</li>
            <li>The name should not imply you are carrying out a service or business operations that you are not legally able to provide.</li>
        </ul>
        Additionally, most states will have other, more specific naming rules. You can find those on the individual state business name search
        pages above, or in our state-by-state<a href="/llc-state-information/"> guides to LLCs</a> and<a href="corporation-state-information/"> corporations</a>.`,
      },
      {
        question: `How Do I Lookup My Proposed LLC or Corporation Business Name?`,
        answer: `It’s easy: just use the Business Name Search Tool and enter your proposed LLC or corporation name. We’ll search the business
        name registry for your desired state and tell you if there are any matches. If not, good news — you can form a business with that name,
        and<a href="${process.env.ORDER_URL}/form-order-now.php"> we’ll help you get started</a>.`,
      },
      {
        question: `What Happens If I Don't Want to Do Business Under My Legal Entity Name?`,
        answer: `Most states allow you to conduct business under a different name. Depending on your state’s rules, this could be known as an
        “assumed name,” “fictitious name,” “doing business as name” or “trade name.” We can file your<a href="/fictitious-business-or-trade-name/"> Fictitious Business Name</a> with your state on your behalf.`,
      },
      {
        question: `How Can I Change My Legal Business Name?`,
        answer: `You can file an amendment to your Articles of Incorporation or Articles of Organization with your state. We can take care of
        this and<a href="/manage-your-company/amendment/"> file the amendment on your behalf</a> to change the name of
        your LLC or corporation.`,
      },
      {
        question: `How Do I Find the Right Business Name?`,
        answer: `We can help. We have a<a href="/blog/post/llc-name-search-50-states/"> complete guide to choosing the
        right [state abbr] business name</a> — you'll want to choose a name that will mean something to your customers, explain what you do,
        help people remember who you are, strengthen your brand and be unique to your vision.`,
      },
      {
        question: `Can I Protect the Name of My LLC or Corporation?`,
        answer: `Once you have filed and formed your business legally, nobody else can form a business with the same name in that state. If you
        want extra protection, you could consider<a href="/trademark-name-search/"> registering your [state] business
        name as a trademark</a>. Note that filing a fictitious or “doing business as" (DBA) name will not be sufficient to protect your
        business name.`,
      },
    ],
  },
};
