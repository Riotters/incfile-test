import { color } from '../../../components/styles/colors';
import BgBoxGetHelpTaxes from '../../../images/get-help-taxes-01.png';
import BgBoxTreatAsAnScorp from '../../../images/treating-llc-as-an-scorp-01.png';

export const businessTaxesPageContent = {
    header: {
        title: `Business Taxes for Illinois LLCs`,
        subline: `Business taxes are a fact of life, and your IL LLC will need to pay a variety of taxes to both the federal and Illinois governments.`,
        boxes: [{
            title: `Incorporate today for <span style="color:#FD8550">$0 + State fee.</span>`,
            desc: `Starting a Illinois LLC? All of our incorporation packages include a FREE business tax consultation.`,
            button: {
                text: `Form Your LLC Now`,
                url: '/'
            }
        }, ]
    },
    content: [{
        type: `heading`,
        styles: {marginTop: `0`},
            size: 2,
            content: `How Your Illinois LLC Will Be Taxed`,
        },
        {
            type: `paragraph`,
            content: `In this guide, we’ll cover all the main business taxes required in Illinois, including self-employment, payroll, federal and Illinois sales tax. The profits of a Illinois LLC are not taxed at the business level like those of C Corporations. Instead, tax for a Illinois LLC works as follows:`,
        },
        {
            type: `numberBoxList`,
            styles: {marginBottom: `55px`},
            content: [
                `Illinois LLC owners pay self-employment tax on business profits`,
                `Illinois LLC owners pay IL state tax on any profits, less state allowances or deductions.`,
                `All LLC owners pay federal income tax on any profits less federal allowances or deductions`,
                `Some IL LLCs pay Illinois sales tax on products`,
                `Employers pay payroll tax on any salaries they pay to employees`,
                `Employees pay federal and and payroll tax on their earnings`,
            ],
        },
        {
            type: `paragraph`,
            content: `Items 1, 2 and 3 are taxed as “pass-through” income for any LLC owners, managers or members who receive profits from the business. Any profits are reported on federal and Illinois personal tax returns, and that’s where you will pay those taxes.`,
        },
        {
            type: `box-cta`, 
            color: color.blue3,
            styles: { fontSize: `25px` },
            bgImage: [BgBoxGetHelpTaxes],
            content: {
                title: `Looking for someone to do your company’s taxes?`,
                subtitle: `Incfile provides a complete Business Tax Filing service.`,
                button: {
                    text: `Get Help With Taxes`,
                    url: `/business-accounting/`
                }
            }
        },

        {
            type: `heading`,
            size: 2,
            content: `State Taxes for Illinois LLCs`,
        },
        {
            type: `paragraph`,
            content: `There are two main types of tax that you will pay to the Illinois Department of Revenue: Illinois state income tax and Illinois state sales tax.`,
        },
        {
            type: `heading`,
            size: 3,
            content: `Illinois State Income Tax Payable on LLC Earnings`,
        },
        {
            type: `paragraph`,
            content: `As an Illinois business owner, you will need to pay IL state tax on any money you pay to yourself. These earnings flow through to your personal tax return, which is where you will pay Illinois income tax. You will be taxed at the standard rates for Illinois state taxes, and you will also get to apply regular allowances and deductions.`,
        },
        {
            type: `paragraph`,
            content: `Any salaried employees will also need to pay personal Illinois state taxes.`,
        },
        {
            type: `paragraph`,
            content: `The Illinois state tax rate is 4.95 percent of net income.`,
        },
        {
            type: `arrow-links`,
            content: [
                {
                    text: `Get details on Illinois state tax here.`,
                    url: `https://www2.illinois.gov/rev/questionsandanswers/Pages/604.aspx`,
                }
            ],
        },

        /////////////
        {
            type: `heading`,
            styles: {marginTop: `56px`},
            size: 3,
            content: `Illinois Sales Tax`,
        },
        {
            type: `paragraph`,
            content: `If you sell physical products or certain types of services, you may need to collect sales tax (also known as sales and use tax) and then pay it to the IL Department of Revenue. Illinois sales tax is collected at the point of purchase. Illinois sales tax rates do vary depending on the region, county or city where you are located.`,
        },
        {
            type: `list-dot`,
            content: {
                header: `You will typically need to collect Illinois sales tax on:`,
                list: [
                    `Tangible, personal property and goods that you sell like furniture, cars, electronics, appliances, books, raw materials, etc.`,
                    `Certain services that your Illinois business might provide`,
                ],
            },
        },
        {
            type: `paragraph`,
            content: `Most states do not levy sales tax on goods that are considered necessities, like food, medications, clothing or gas.`,
        },{
            type: `arrow-links`,
            content: [
                {
                    text: `Get details on Illinois state tax here.`,
                    url: `https://www2.illinois.gov/rev/questionsandanswers/Pages/604.aspx`,
                }
            ],
        },

        {
            type: `heading`,
            styles: {marginTop: `56px`},
            size: 3,
            content: `Illinois Sales Tax Rates`,
        },
        {
            type: `paragraph`,
            content: `Sales tax rates do vary between states, counties and cities. Typically, the state will set a base sales tax rate, then specific counties and cities may levy small additional sales tax amounts on top of that.`,
        },
        {
            type: `iconListColorBox`,
            boxColor: color.blue3,
            styles: {margin: `56px 0`},
            content: {
                header: `Here are the sales tax rates for the major cities in Illinois:`,
                list: [
                    `<strong>Chicago</strong> sales tax rate is <strong>10.25%</strong>`,
                    `<strong>Aurora</strong> sales tax rate is <strong>8.25%</strong>`,
                    `<strong>Rockford</strong> sales tax rate is <strong>8.75%</strong>`,
                    `<strong>Naperville</strong> sales tax rate is <strong>7.75%</strong>`,
                ],
            },
        },

        /////////////////////
        {
            type: `heading`,
            size: 2,
            content: `Federal Taxes for Illinois LLCs`,
        },
        {
            type: `paragraph`,
            content: `There are a couple different federal taxes that every LLC will need to pay, including Illinois LLCs. These are self-employment tax and federal income tax, which are taxed as “pass-through” income via your tax return forms.`,
        },

        {
            type: `heading`,
            size: 3,
            content: `Federal Self-Employment Tax`,
        },
        {
            type: `paragraph`,
            content: `All Illinois LLC business members or managers who take profits out of the LLC will need to pay self-employment tax. This tax is also known as FICA, Social Security or Medicare tax. It applies to all the earnings you withdraw from your Illinois business. The current self-employment tax rate is 15.3%.`,
        },
        {
            type: `paragraph`,
            content: `You will be able to deduct your business expenses from your income when working out how much self-employment tax you owe.`,
        },
        {
            type: `iconListColorBox`,
            boxColor: color.green3,
            styles: {margin: `56px 0`},
            content: {
                header: `Here are some examples of how much self-employment tax you may need to pay, depending on your earnings:`,
                list: [
                    `On profits of <strong>$20,000</strong>, you would pay self-employment tax of <strong>$3,060</strong>`,
                    `On profits of <strong>$50,000</strong>, you would pay self-employment tax of <strong>$7,650</strong>`,
                    `On profits of <strong>$90,000</strong>, you would pay self-employment tax of <strong>$13,770</strong>`,
                    `On profits of <strong>$120,000</strong>, you would pay self-employment tax of <strong>$18,360</strong>`,
                ],
            },
        },

        {
            type: `heading`,
            size: 3,
            content: `Pay Less Self-Employment Tax by Treating Your Illinois LLC as an S Corporation`,
        },
        {
            type: `paragraph`,
            content: `The Internal Revenue Service allows LLCs to ask to be treated as an S Corporation for tax purposes. This can help you reduce the amount of self-employment tax that you pay by declaring some of your income as salary and other income as distributions or withdrawals. Speak to your accountant for more information on reducing your Illinois LLC self-employment tax through an S Corporation tax election.`,
        },
        {
            type: `box-cta`, 
            color: color.blue3,
            styles: { fontSize: `25px` },
            bgImage: [BgBoxTreatAsAnScorp],
            content: {
                title: `Treating your LLC as an S Corp can help you save money.`,
                subtitle: `you can do this by making an “S Corporation Tax Election” with the IRS using a form known as Form 2553. We can file your Form 2553 with the IRS on your behalf.`,
                button: {
                    text: `Get My LLC Treated As An S Corp`,
                    url: `/business-accounting/`
                }
            }
        },

        {
            type: `heading`,
            styles: { marginTop: `48px` },
            size: 3,
            content: `Federal Income Tax`,
        },
        {
            type: `paragraph`,
            content: `You must also pay regular federal income tax on any earnings you take out of your Illinois LLC. The amount of income tax you pay depends on your earnings, current income tax brackets, deductions and how you file.`,
        },
        {
            type: `paragraph`,
            content: `You only pay federal income tax on your Illinois LLC profits that you take out of the business, less certain deductions and allowances. This includes your tax-free amount, plus LLC business expenses and other deductions for areas such as healthcare and some retirement plans. Speak to your accountant for more information.`,
        },

        ////////////////////////
        {
            type: `heading`,
            size: 2,
            content: `Employee and Employer Taxes for Your Illinois LLC`,
        },
        {
            type: `paragraph`,
            content: `If you pay employees, there are some slightly different tax implications. Speak to your accountant to get clear guidance for your own unique situation.`,
        },
        {
            type: `accordion`,
            content: {
                items: [
                    {
                        question: `Employer Payroll Tax Withholding`,
                        answer: `All employers must collect and withhold payroll tax from their employees when they receive their salaries. You would normally withhold 7.65 percent of the taxable salary that you pay to your employees.`,
                    },
                    {
                        question: `Federal Tax Withholding`,
                        answer: `You may also choose to withhold federal income tax on the wages you pay to employees. Speak to your accountant for more information.`,
                    },
                    {
                        question: `Employees May Need to File Tax Returns`,
                        answer: `Regardless of whether you withhold federal and Illinois state income tax, your employees may need to file their own tax returns.`,
                    },
                    {
                        question: `Employee Insurance and Other Requirements`,
                        answer2: [
                            {
                                type: `paragraph`,
                                content: `You may also need to pay insurance for any employees, like employee compensation insurance or unemployment tax. There will also be other requirements you have for employees.`,
                            },
                            {
                                type: `arrow-links`,
                                content: [
                                    {
                                        styles: {marginTop: `24px`},
                                        text: `Get more requirements from the Illinois Department of Labor website`,
                                        url: `https://www2.illinois.gov/idol/Pages/default.aspx`,
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        question: `Other Taxes and Duties for Your Illinois LLC`,
                        answer: `Depending on the industry you are in, your Illinois LLC may be liable for certain other taxes and duties. For example, if you sell gasoline you may need to pay a tax on any fuel you sell. Likewise, if you import or export goods you may need to pay certain duties. Speak to your accountant about any other taxes you may need to withhold or pay.`,
                    },
                    {
                        question: `Estimated Taxes for Your Illinois LLC`,
                        answer2: [
                            {
                                type: `paragraph`,
                                content: `Most Illinois LLCs will need to pay estimated taxes throughout the year, depending on the amount of income and profit you expect to make. The most common types of estimated tax are:`,
                            },
                            {
                                type: `list-dot-without-bg`,
                                color: color.orange3,
                                content: [
                                    `Federal income tax`,
                                    `Federal self-employment tax`,
                                    `Illinois state tax`,
                                ]
                            },
                            {
                                type: `paragraph`,
                                content: `Most Illinois LLCs will pay estimated taxes four times a year. Speak to your accountant for more information.`,
                            },
                        ]
                    },
                ]
            }
        },

        ///////////////////
        {
            type: `heading`,
            size: 2,
            content: `FAQs on Illinois LLC Business Taxes`,
        },
        {
            type: `accordion`,
            content: {
                items: [
                    {
                        question: `Does Illinois Have Sales Tax?`,
                        answer: `Yes. Illinois does have a sales tax, which may vary among cities and counties. You can find more information above.`,
                    },
                    {
                        question: `Does Illinois Have a State Tax?`,
                        answer: `Yes. Illinois does have a general state income tax. You can find more information above..`,
                    },
                    {
                        question: `What Is the Sales Tax Rate in Illinois?`,
                        answer: `We have listed common sales tax rates in Illinois cities above.`,
                    },
                    {
                        question: `Do I Need to Pay Estimated Taxes?`,
                        answer: `Yes. In most cases you must pay estimated taxes on your Illinois tax, federal income tax and self-employment tax. Speak to your accountant for more information.`,
                    },
                ]
            }
        },
    ],
}