import { color } from '../../../components/styles/colors';
import BgBoxGetHelpTaxes from '../../../images/get-help-taxes-01.png';
import BgBoxTreatAsAnScorp from '../../../images/treating-llc-as-an-scorp-01.png';

export const businessTaxesPageContent = {
    header: {
        title: `Business Taxes for New York LLCs`,
        subline: `Business taxes are a fact of life, and your NY LLC will need to pay a variety of taxes to both the federal and New York governments.`,
        boxes: [{
            title: `Incorporate today for <span style="color:#FD8550">$0 + State fee.</span>`,
            desc: `Starting a New York LLC? All of our incorporation packages include <br>a FREE business tax consultation.`,
            button: {
                text: `Form Your LLC Now`,
                url: '/form-order-now.php?entityType=LLC&entityState=NY/'
            }
        }, ]
    },
    content: [{
        type: `heading`,
        styles: {marginTop: `0`},
            size: 2,
            content: `How Your New York LLC Will Be Taxed`,
        },
        {
            type: `paragraph`,
            content: `In this guide, we’ll cover all the main business taxes required in New York, including self-employment, payroll, federal and New York sales tax. The profits of a New York LLC are not taxed at the business level like those of C Corporations. Instead, tax for a New York LLC works as follows:`,
        },
        {
            type: `numberBoxList`,
            styles: {marginBottom: `55px`},
            content: [
                `New York LLC owners pay self-employment tax on business profits`,
                `New York LLC owners pay state tax on any profits, less state allowances or deductions.`,
                `All LLC owners pay federal income tax on any profits less federal allowances or deductions`,
                `Some NY LLCs pay New York sales tax on products`,
                `Employers pay payroll tax on any salaries they pay to employees`,
                `Employees pay federal and and payroll tax on their earnings`,
            ],
        },
        {
            type: `paragraph`,
            content: `Items 1, 2 and 3 are taxed as “pass-through” income for any LLC owners, managers or members who receive profits from the business. Any profits are reported on federal and New York tax personal tax returns, and that’s where you will pay those taxes.`,
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
            content: `New York State Business Taxes`,
        },
        {
            type: `paragraph`,
            content: `As a New York business owner, you will need to pay state tax on any money you pay to yourself. These earnings flow through to your personal tax return, which is where you will pay New York income tax. You will be taxed at the standard rates for New York state taxes, and you will also get to apply regular allowances and deductions.`,
        },
        {
            type: `paragraph`,
            content: `Any salaried employees will also need to pay personal New York state taxes.`,
        },
        {
            type: `paragraph`,
            content: `The New York state tax rates are:`,
        },
        {
            type: `paragraph`,
            content: `<b>New York Single Filer Tax Brackets:</b> </br></br>    
                      <ul>
                      <li>For tax bracket: <b>$0.00+</b>, tax rate is <b> 4% </b> </li>
                      <li>For tax bracket:<b> $8,500.00+</b>, tax rate is <b> 4.5% </b></li> 
                      <li>For tax bracket:<b> $11,700.00+</b>, tax rate is <b> 5.25% </b> </li> 
                      <li>For tax bracket:<b> $13,900.00+</b>, tax rate is <b> 5.9% </b></li> 
                      <li>For tax bracket:<b> $21,400.00+</b>, tax rate is <b> 6.21% </b></li> 
                      <li>For tax bracket:<b> $80,650.00+</b>, tax rate is<b> 6.49% </b></li> 
                      <li>For tax bracket:<b> $215,400.00+</b>, tax rate is <b> 6.85% </b></li> 
                      <li>For tax bracket:<b> $1,077,550.00+</b>, tax rate is <b> 8.82% </b></li> 
                      </ul>`,
        },
        
        {
            type: `paragraph`,
            content: `<a href=https://www.tax.ny.gov/pit/file/tax_tables.htm"> Get details on the New York state tax here.</a>`,
        },

        {
            type: `heading`,
            size: 3,
            content: `New York Sales Taxes on LLC Sales`,
        },
        {
            type: `paragraph`,
            content: `If you sell physical products or certain types of services, you may need to collect sales tax (also known as sales and use tax) and then pay it to the NY Department of Taxation and Finance. New York sales tax is collected at the point of purchase. New York sales tax rates do vary depending on the region, county or city where you are located.`,
        },
        {
            type: `iconListColorBox`,
            boxColor: color.green3,
            styles: {margin: `56px 0`},
            content: {
                header: `You will typically need to collect New York sales tax on:`,
                list: [
                    `Tangible, personal property and goods that you sell like furniture, cars, electronics, appliances, books, raw materials, etc.`,
                    `Certain services that your New York business might provide`,
                ],
            },
        },
        {
            type: `paragraph`,
            content: `Most states do not levy sales tax on goods that are considered necessities, like food, medications, clothing or gas.`,
        },
        {
            type: `arrow-links`,
            content: [
                {
                    text: `Get details of the New York sales tax online here.`,
                    url: `https://www1.nyc.gov/site/finance/taxes/business-nys-sales-tax.page/`,
                }
            ],
        },

        /////////////
        {
            type: `heading`,
            styles: {marginTop: `56px`},
            size: 3,
            content: `New York Sales Tax Rates`,
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
                header: `Here are the sales tax rates for the major cities in New York:`,
                list: [
                    `<strong>New York, NY</strong> sales tax rate is <strong>8.875%</strong>`,
                    `<strong>Buffalo, NY</strong> sales tax rate is <strong>8.75%</strong>`,
                    `<strong>Rochester, NY</strong> sales tax rate is <strong>8%</strong>`,
                    `<strong>Albany, NY</strong> sales tax rate is <strong>8%</strong>`,
                ],
            },
        },

        /////////////////////
        {
            type: `heading`,
            size: 2,
            content: `Federal Taxes for New York LLCs`,
        },
        {
            type: `paragraph`,
            content: `There are a couple different federal taxes that every LLC will need to pay, including New York LLCs. These are self-employment tax and federal income tax, which are taxed as “pass-through” income via your tax return forms.`,
        },

        {
            type: `heading`,
            size: 3,
            content: `Federal Self-Employment Tax`,
        },
        {
            type: `paragraph`,
            content: `All New York LLC business members or managers who take profits out of the LLC will need to pay self-employment tax. This tax is also known as FICA, Social Security or Medicare tax. It applies to all the earnings you withdraw from your New York business. The current self-employment tax rate is 15.3%.`,
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
                    `On profits of <strong>$30,000</strong>, you would pay self-employment tax of <strong>$4,590</strong>`,
                    `On profits of <strong>$60,000</strong>, you would pay self-employment tax of <strong>$9,180</strong>`,
                    `On profits of <strong>$100,000</strong>, you would pay self-employment tax of <strong>$15,300</strong>`,
                    `On profits of <strong>$160,000</strong>, you would pay self-employment tax of <strong>$24,480</strong>`,
                ],
            },
        },

        {
            type: `heading`,
            size: 3,
            content: `Pay Less Self-Employment Tax by Treating Your New York LLC as an S Corporation`,
        },
        {
            type: `paragraph`,
            content: `The Internal Revenue Service allows LLCs to ask to be treated as an S Corporation for tax purposes. This can help you reduce the amount of self-employment tax that you pay by declaring some of your income as salary and other income as distributions or withdrawals. Speak to your accountant for more information on reducing your New York LLC self-employment tax through an S Corporation tax election.`,
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
            content: `You must also pay regular federal income tax on any earnings you take out of your New York LLC. The amount of income tax you pay depends on your earnings, current income tax brackets, deductions and how you file.`,
        },
        {
            type: `paragraph`,
            content: `You only pay federal income tax on your New York LLC profits that you take out of the business, less certain deductions and allowances. This includes your tax-free amount, plus LLC business expenses and other deductions for areas such as healthcare and some retirement plans. Speak to your accountant for more information.`,
        },

        ////////////////////////
        {
            type: `heading`,
            size: 2,
            content: `Employee and Employer Taxes for Your New York LLC`,
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
                        question: `Employer Payroll Tax Withholding for Your New York LLC`,
                        answer: `All employers must collect and withhold payroll tax from their employees when they receive their salaries. You would normally withhold 7.65 percent of the taxable salary that you pay to your employees.`,
                    },
                    {
                        question: `New York LLC Federal Tax withholding`,
                        answer: `You may also choose to withhold federal income tax on the wages you pay to employees. Speak to your accountant for more information.`,
                    },
                    {
                        question: `Employees May Need to File Tax Returns`,
                        answer: `Regardless of whether you withhold federal and New York state income tax, your employees may need to file their own tax returns.`,
                    },
                    {
                        question: `New York LLC Employee Insurance and Other Requirements`,
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
                                        text: `Get more requirements from the New York Department of Labor website`,
                                        url: `https://dol.ny.gov/unemployment/employer-unemployment-insurance-information/`,
                                    },
                                ],
                            }
                        ]
                    },
                    {
                        question: `Other Taxes and Duties for Your New York LLC`,
                        answer: `Depending on the industry you are in, your New York LLC may be liable for certain other taxes and duties. For example, if you sell gasoline you may need to pay a tax on any fuel you sell. Likewise, if you import or export goods you may need to pay certain duties. Speak to your accountant about any other taxes you may need to withhold or pay.`,
                    },
                    {
                        question: `Estimated Taxes for Your New York LLC`,
                        answer2: [
                            {
                                type: `paragraph`,
                                content: `Most New York LLCs will need to pay estimated taxes throughout the year, depending on the amount of income and profit you expect to make. The most common types of estimated tax are:`,
                            },
                            {
                                type: `list-dot-without-bg`,
                                color: color.orange3,
                                content: [
                                    `Federal income tax`,
                                    `Federal self-employment tax`,
                                    `New York state tax`,
                        
                                ]
                            },
                            {
                                type: `paragraph`,
                                content: `Most New York LLCs will pay estimated taxes four times a year. Speak to your accountant for more information.`,
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
            content: `FAQs on New York LLC Business Taxes`,
        },
        {
            type: `accordion`,
            content: {
                items: [
                    {
                        question: `Does New York Have Sales Tax?`,
                        answer: `Yes. New York does have a sales tax, which may vary among cities and counties. You can find more information above.`,
                    },
                    {
                        question: `Does New York Have a State Tax?`,
                        answer: `Yes. New York does have a general state income tax. You can find more information above`,
                    },
                    {
                        question: `What Is the Sales Tax Rate in New York?`,
                        answer: `We have listed common sales tax rates in New York cities above.`,
                    },
                    {
                        question: `Do I Need to Pay Estimated Taxes?`,
                        answer: `Yes. In most cases you must pay estimated taxes on your New York tax, federal income tax and self-employment tax. Speak to your accountant for more information.`,
                    },
                ]
            }
        },
    ],
}