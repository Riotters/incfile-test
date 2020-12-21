export const tools = {
    header: `Helpful tools for decision making`,
    text: `Select your business type to see how Incfile can work for you.`,
    buttons: [{
            header: `Corporation State Information`,
            url: `/corporation-state-information/`,
            imageAlt: `corporation state information`
        },
        {
            header: `Corporation Tax Calculator`,
            url: `/s-corporation-tax-calculator/`,
            imageAlt: `corporation tax calculator`
        },
        {
            header: `Entity Comparison Chart`,
            url: `/business-entity-comparison/`,
            imageAlt: `comparison entity`
        },
        {
            header: `State Filing Fees`,
            url: `/state-filing-fees/`,
            imageAlt: `state filing fees`
        },
        {
            header: `Ongoing Filing Requirements`,
            url: `/compliance-filing-requirement/`,
            imageAlt: `ongoing filing requirements`
        },
        {
            header: `State Filing Times`,
            url: `/state-filing-times/`,
            imageAlt: `state filing times`
        },
    ],
};

export const help = {
    header: `We are here to help`,
    text: `We understand that questions come up every turn of your business`,
    buttons: [{
            text: `Start Now`,
            url: `${process.env.ORDER_URL}/form-order-now.php`,
        },
        {
            text: `Read FAQ`,
            url: `/help-center/`,
        },
    ],
};