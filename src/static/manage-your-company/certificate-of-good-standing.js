export const top = {
    header: 
        `Filing Your Certificate of Good Standing`,
    // text: 
    //     `$0 + State Fee & FREE Registered Agent.`,
    button: [
        {
        text: 'Order now',
        url: `${process.env.ORDER_URL}/cert-good-standing.php`,
        }
    ]
}
  
export const about = {
    header: 
        `What is a Certificate of Good Standing?`,
    text:
        `A Certificate of Good Standing is an official document issued by your state’s secretary of state office to verify that your business is compliant within the state of incorporation and therefore is in “good standing.” 
        Just like having a driver’s license or other forms of personal ID, a Certificate of Good Standing proves that your LLC or corporation is officially registered and authorized to operate in your home state.`,
    header2: 
        `Other names for a Certificate of Good Standing`,

    text2: 
        `Also known as a Certificate of Existence, Certificate of Authorization, or a Certificate of Status, the Good Standing Certificate is a one-page document provided by the secretary of state and provides 
        conclusive evidence of the status of your business entity. In many cases it can be valid up to three months.`,
    header3: 
        `When do you need a Certificate of Good Standing?`,
    text3: 
        `In certain situations, you may be required to prove that your business exists and is in compliance with relevant laws and regulations. A Certificate of Good Standing from your state serves as this proof. 
        A Certificate of Good Standing is often required in order to obtain a loan, renew a business license or to file your business taxes. There are a few key reasons why your company might need a Certificate of Good Standing.`,
    box: {
        header:
            `Sometimes this document is requested by:`,
        list: [
        `Other state governments as part of the process of applying for <a href="/manage-your-company/foreign-qualification/">Foreign Qualification</a> for your business to register to do business in states other than your home state`,
        `Lenders or banks that want to get proof of your business’s existence and business history as part of evaluating your creditworthiness for a loan or when carrying out certain types of transactions`,
        `Investors or business partners who want to make sure your business is legitimate and in compliance with laws and regulations`,
        `Licensing agencies and regulators — in order to renew or obtain certain permits and licenses`,
        `Business brokers or buyers — if you are seeking to sell your business and need to show proof of its existence, history and compliance`,
        ],
    },
    text4: 
        `Simply put, the Certificate of Good Standing helps you prove that your business exists, and that you are a law-abiding business owner who complies with the rules. 
        It helps enhance your trustworthiness and credibility with potential partners, investors and lenders. 
        Obtaining a Certificate of Good Standing is a simple but sometimes necessary step in maintaining your business’s good reputation and branching out your business operations into new areas.`,
    header4: 
        `How do I get a Certificate of Good Standing?`,
    text5: 
        `After you form your LLC or corporation, it’s important to stay up-to-date on filing your annual report, biennial report, or other required forms and compliance paperwork. 
        To stay in good standing, your business needs to meet a few key requirements, depending on your company’s home state. `,
    box2: {
        header:
            `These typically include:`,
        list: [
            `Being up-to-date on annual or biennial fees to the secretary of state to register or renew your business`,
            `Filing annual or biennial reports`,
            `Paying any other necessary business fees or franchise taxes to state regulators`,
        ],
    }, 
    text6: 
        `To get a Certificate of Good Standing, you’ll need to file the appropriate form with your state, or you can have Incfile file for you.`,
}

export const help = {
    header:
      `Help to Obtain a Certificate of Good Standing`,
    header2:
      `Save your time. We'll handle the paperwork.`,
    text:
      `To obtain a Good Standing Certificate, the business entity must be registered as a legal entity with the secretary of state, and cannot be in default of corporate regulations, suspended or revoked by the state.`,
    link: {
        text:
            `We can handle the paperwork`,
        url:
        `${process.env.ORDER_URL}/cert-good-standing.php`,
    },
    card: {
        price: `49`,
        fee: `+ $10 State Fee`,
        button: {
            text: `Order Now`,
            url: `/`
        }
    },
}

export const faq = {
    header:
        `Common questions about filing a Certificate of Good Standing`,
    faq: {
        items: [
            {
                question:
                    `Why do I need a Certificate of Good Standing?`,
                answer:
                    `A Certificate of Good Standing is typically needed in the normal course of business by another organization (business partner, bank, lender, investor or regulatory authority) to prove that your business entity is legally 
                    registered with the state and is in good standing. The Certificate of Good Standing proves that you have paid any necessary fees and filed required paperwork to keep your business chartered, registered and in compliance with your state authorities.`,
            },
            {
                question:
                    `How long is a Certificate of Good Standing valid?`,
                answer:
                    `The validity of a certificate in terms of age is determined by the organization that has requested it. Under most circumstances a requesting organization will require that the document is not older than 30 days.`,
            },
            {
                question:
                    `What will happen if my entity is not in good standing?`,
                answer:
                    `If the entity that the certificate is being requested for is not in good standing, we will contact you and provide details as to the status of 
                    the corporation or LLC and issue a full refund or provide assistance in bringing the entity back to good standing. This process is usually referred to as reinstatement.`,
            },
            {
                question:
                    `How long does it take to obtain a Certificate of Good Standing?`,
                answer:
                    `The filing time depends on the governing state agency and varies by state.`,
            },
        ],
    },
}