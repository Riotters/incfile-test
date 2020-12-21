export const top = {
    header: `Federal Employer Identification Number (EIN) / Tax ID Number`,
    text: `Understanding What, Where, When & Hows of Your Business EIN`,
    button: [{
        text: "Order now",
        url: `${process.env.ORDER_URL}/ein-form.php`,
    }, ],
};

export const about = {
    text: `The SS4 is the IRS form required to obtain an EIN (Employer Identification Number, frequently called a Tax ID number). The EIN/Tax ID number can be thought of as a Social Security Number for your business. 
      It is usually required to open a bank account in the name of the business and to properly pay and account for any wage/payroll employees of your company. 
      Incfile will obtain your federal EIN electronically and have it back to you via email within one business day.`,
    box: {
        header: `What is an Employer Identification Number (EIN)?`,
        text: `Also known as a “Tax ID number,” the EIN is a business federal tax ID that works like a Social Security Number for your business. 
        Your EIN helps you file tax returns for your business, is typically required to open a business bank account under the name of your business, helps you properly pay and account for wages and payroll for your company’s employees, 
        and otherwise helps establish credit for your business and maintain your business’s official standing as a legal business entity.`,
    },
    header: `Do You Need a Federal EIN for Your Business Entity?`,
    text2: `In general, unless your business is a sole proprietorship with no employees and no separate legal entity for your business, you need to get an EIN. Sometimes if you own an LLC and it is a single-member LLC with simple accounting, 
      you can get by just using your personal Social Security Number for tax purposes and for receiving payments from clients. 
      But even the simplest businesses can generally benefit from using an EIN – the EIN serves as a tax ID for your LLC or other corporate entity.`,
    box2: {
        header: `The following business entities should get an EIN:`,
        list: [
            `Partnerships: an EIN is required for all general partnerships and limited partnerships.`,
            `Multiple-member LLCs: This type of business entity needs an EIN regardless of whether you have employees.`,
            `Single-member LLCs: If you plan to hire employees within the next 12 months, you will need to get an EIN. And even if your single-member LLC has no employees, 
        and even if you can get by with using your own individual Social Security Number for tax purposes, it’s still a good idea to get an EIN because many banks and lenders will prefer to use an EIN to do business with you.`,
            `LLC taxed as a Corporation: If your LLC chooses to be taxed as a Corporation (for example, by electing to be treated as an S-Corporation for tax purposes), you will need to get an EIN.`,
            `Sole proprietorship with employees: Even if you do not have an LLC or any other legal entity for your business and you run a simple sole proprietorship, you still need to get an EIN if you have employees or plan to hire employees in the next 12 months.`,
        ],
    },
    header2: `Where & When You'll Use an EIN`,
    text3: `Your EIN is necessary for several situations in running your business. You will need to use your EIN for certain tax forms, such as filing your tax returns for your business, and filling out W9 forms for clients (if you run a service business), 
      and other forms related to managing payroll for your employees. Your EIN is also necessary to set up a business bank account and apply for business loans. 
      The same types of reasons for needing a Social Security Number in your personal life are also the reasons to use an EIN in managing your business.`,
    header3: `How Do You Get an EIN? Apply for an EIN Online`,
    text4: `Business owners can get an EIN by filing IRS Form SS-4. Incfile offers a convenient service to help you apply for an EIN online to obtain your EIN number quickly and efficiently. 
      If you're looking for a way to get an EIN, whether in Texas, Florida, Michigan or anywhere in the United States, Incfile can provide one for you in one day. Apply for an EIN online with Incfile, 
      and we'll obtain your federal tax ID electronically and have your new EIN back to you via email within one business day.`,
    link: {
        text: "Apply for an EIN online to obtain your EIN number quickly",
        url: `${process.env.ORDER_URL}/ein-form.php`,
        externalLink: true
    },
};

export const help = {
    header: `Help Obtain a EIN / Tax ID Number`,
    header2: `Save your time. We'll handle the paperwork.`,
    text: `If you would like to use our services to facilitate the filing of your Tax ID / EIN please place the order and a representative from Incfile will contact you to 
      obtain specific information required to complete and file the Tax ID / EIN in your state of formation.`,
    card: {
        price: `70`,
        fee: `Total price`,
        button: {
            text: "Order Now",
            url: `/`,
        },
    },
};

export const faq = {
    header: `Common questions about obtaining an EIN / Tax ID Number`,
    faq: {
        items: [{
                question: `Will I need an EIN in order to obtain a business account with a bank??`,
                answer: `Yes, under most circumstances business entities other than DBA's must present an EIN along with the filed Articles of Organization or Incorporation in order for an account to be opened.`,
            },
            {
                question: `What circumstances require me to change my EIN?`,
                answer: `If you already have an EIN, and the organization or ownership of your business changes, you may need to apply for a new number. Some of the circumstances under which a new number is required are as follows:`,
                list: [
                    "An existing business is purchased or inherited by an individual who will operate it as a sole proprietorship.",
                    "A sole proprietorship changes to an LLC, corporation, or partnership.",
                    "A partnership changes to an LLC, corporation, or sole proprietorship.",
                    "A corporation changes to an LLC, partnership, or sole proprietorship.",
                    "An LLC changes to a corporation, partnership, or sole proprietorship.",
                    "An individual owner dies, and the estate takes over the business.",
                ],
            },
            {
                question: `When will I receive my Federal Employer Identification Number?`,
                answer: `If it is a stand alone order for an existing entity we can obtain and email the EIN within 1 business day.`,
            },
            {
                question: `What is the SS4/EIN/Tax ID Number?`,
                answer: `The SS4 is the IRS form required to obtain an EIN (Employer Identification Number, frequently called a Tax ID number). The EIN/Tax ID number can be thought of as a Social Security Number for your business. 
                    It is usually required to open a bank account in the name of the business and to properly pay and account for any wage/payroll employees of your company.`,
            },
        ],
    },
};