import { color } from "../../../components/styles/colors";
import BgBoxGetHelpTaxes from "../../../images/get-help-taxes-01.png";
import BgBoxTreatAsAnScorp from "../../../images/treating-llc-as-an-scorp-01.png";

export const businessTaxesPageContent = {
  header: {
    title: `Business Taxes for Florida LLCs`,
    subline: `Business taxes are a fact of life, and your FL LLC will need to pay a varietyof taxes to both the federal and Florida governments.`,
    boxes: [
      {
        title: `Incorporate today for <span style="color:#FD8550">$0 + State fee.</span>`,
        desc: `Starting a Florida LLC? All of our incorporation packages include <br>a FREE business tax consultation.`,
        button: {
          text: `Form Your LLC Now`,
          url: `${process.env.ORDER_URL}/form-order-now.php?entityType=LLC&entityState=FL`,
        },
      },
    ],
  },
  content: [
    {
      type: `heading`,
      styles: { marginTop: `0` },
      size: 2,
      content: `How Your Florida LLC Will Be Taxed`,
    },
    {
      type: `paragraph`,
      content: `In this guide, we’ll cover all the main business taxes required in Florida, including self-employment, payroll, federal and Florida sales tax. The profits of a Florida LLC are not taxed at the business level like those of C Corporations. Instead, tax for a Florida LLC works as follows:`,
    },
    {
      type: `numberBoxList`,
      styles: { marginBottom: `55px` },
      content: [
        `Florida LLC owners pay self-employment tax on business profits`,
        `All LLC owners pay federal income tax on any profits less federal allowances or deductions`,
        `Some FL LLCs pay Florida sales tax on products`,
        `Employers pay payroll tax on any salaries they pay to employees`,
        `Employees pay federal and and payroll tax on their earnings`,
      ],
    },
    {
      type: `paragraph`,
      content: `Items 1 and 2 are taxed as “pass-through” income for any LLC owners, managers or members who receive profits from the business. Any profits are reported on federal and Florida personal tax returns and that’s where you will pay those taxes.`,
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
          url: `/business-accounting/`,
        },
      },
    },

    {
      type: `heading`,
      size: 2,
      content: `Florida State Business Taxes`,
    },
    {
      type: `paragraph`,
      content: `Unlike most other states, Florida does not have a state income tax. This means the main type of tax you will likely pay to the Florida Department of Revenue is Florida state sales tax.`,
    },
    {
      type: `heading`,
      size: 3,
      content: `Florida Sales Taxes on LLC Sales`,
    },
    {
      type: `paragraph`,
      content: `If you sell physical products or certain types of services, you may need to collect sales tax (also known as sales and use tax) and then pay it to the FL Department of Revenue. Florida sales tax is collected at the point of purchase. Florida sales tax rates do vary depending on the region, county or city where you are located. You will typically need to collect Florida sales tax on:`,
    },
    {
      type: `iconListColorBox`,
      boxColor: color.green3,
      styles: { margin: `56px 0` },
      content: {
        list: [
          `Tangible, personal property and goods that you sell like furniture, cars, electronics, appliances, books, raw materials, etc.`,
          `Certain services that your Florida business might provide`,
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
          text: `Get details of the Florida sales tax online here.`,
          url: `https://floridarevenue.com/taxes/taxesfees/Pages/sales_tax.aspx`,
        },
      ],
    },

    /////////////
    {
      type: `heading`,
      styles: { marginTop: `56px` },
      size: 3,
      content: `Sales Tax Rates in Florida`,
    },
    {
      type: `paragraph`,
      content: `Sales tax rates do vary between states, counties and cities. Typically, the state will set a base sales tax rate, then specific counties and cities may levy small additional sales tax amounts on top of that. Here are the sales tax rates for the major cities in Florida:`,
    },
    {
      type: `iconListColorBox`,
      boxColor: color.blue3,
      styles: { margin: `56px 0` },
      content: {
        list: [
          `<strong>Jacksonville, FL</strong> sales tax rate is <strong>7%</strong>`,
          `<strong>Miami, FL</strong> sales tax rate is <strong>7%</strong>`,
          `<strong>Tampa, FL</strong> sales tax rate is <strong>8.5%</strong>`,
          `<strong>Orlando, FL</strong> sales tax rate is <strong>6.5%</strong>`,
        ],
      },
    },

    /////////////////////
    {
      type: `heading`,
      size: 2,
      content: `Federal Taxes for Florida LLCs`,
    },
    {
      type: `paragraph`,
      content: `There are a couple different federal taxes that every LLC will need to pay, including Florida LLCs. These are self-employment tax and federal income tax, which are taxed as “pass-through” income via your tax return forms.`,
    },
    {
      type: `heading`,
      size: 3,
      content: `Florida LLC Federal Self-Employment Tax`,
    },
    {
      type: `paragraph`,
      content: `All Florida LLC business members or managers who take profits out of the LLC will need to pay self-employment tax. This tax is also known as FICA, Social Security or Medicare tax. It applies to all the earnings you withdraw from your Florida business. The current self-employment tax rate is 15.3%.`,
    },
    {
      type: `paragraph`,
      content: `You will be able to deduct your business expenses from your income when working out how much self-employment tax you owe. Here are some examples of how much self-employment tax you may need to pay, depending on your earnings:`,
    },
    {
      type: `iconListColorBox`,
      boxColor: color.green3,
      styles: { margin: `56px 0` },
      content: {
        list: [
          `On profits of <strong>$30,000</strong>, you would pay self-employment tax of <strong>$4,590</strong>`,
          `On profits of <strong>$70,000</strong>, you would pay self-employment tax of <strong>$10,710</strong>`,
          `On profits of <strong>$100,000</strong>, you would pay self-employment tax of <strong>$15,300</strong>`,
          `On profits of <strong>$160,000</strong>, you would pay self-employment tax of <strong>$24,480</strong>`,
        ],
      },
    },

    {
      type: `heading`,
      size: 3,
      content: `Pay Less Self-Employment Tax by Treating Your Florida LLC as an S Corporation`,
    },
    {
      type: `paragraph`,
      content: `The Internal Revenue Service allows LLCs to ask to be treated as an S Corporation for tax purposes. This can help you reduce the amount of self-employment tax that you pay by declaring some of your income as salary and other income as distributions or withdrawals. Speak to your accountant for more information on reducing your Florida LLC self-employment tax through an S Corporation tax election.`,
    },
    {
      type: `box-cta`,
      color: color.blue3,
      styles: { fontSize: `25px` },
      bgImage: [BgBoxTreatAsAnScorp],
      content: {
        title: `Treating your LLC as an S Corp can help you save money.`,
        subtitle: `You can do this by making an “S Corporation Tax Election” with the IRS using a form known as Form 2553. We can file your Form 2553 with the IRS on your behalf.`,
        button: {
          text: `Get My LLC Treated As An S Corp`,
          url: `/llc-s-corp-election/`,
        },
      },
    },

    {
      type: `heading`,
      styles: { marginTop: `48px` },
      size: 3,
      content: `Florida LLC Federal Income Tax`,
    },
    {
      type: `paragraph`,
      content: `You must also pay regular federal income tax on any earnings you take out of your Florida LLC. The amount of income tax you pay depends on your earnings, current income tax brackets, deductions and how you file.`,
    },
    {
      type: `paragraph`,
      content: `You only pay federal income tax on your Florida LLC profits that you take out of the business, less certain deductions and allowances. This includes your tax-free amount, plus LLC business expenses and other deductions for areas such as healthcare and some retirement plans. Speak to your accountant for more information.`,
    },

    ////////////////////////
    {
      type: `heading`,
      size: 2,
      content: `Employee and Employer Taxes for Your Florida LLC`,
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
            question: `Florida LLC Employer Payroll Tax Withholding`,
            answer: `All employers must collect and withhold payroll tax from their employees when they receive their salaries. You would normally withhold 7.65 percent of the taxable salary that you pay to your employees.`,
          },
          {
            question: `Employees May Need to File Tax Returns`,
            answer: `Regardless of whether you withhold federal and Florida state income tax, your employees may need to file their own tax returns.`,
          },
          {
            question: `Florida LLC Employee Insurance and Other Requirements`,
            answer2: [
              {
                type: `paragraph`,
                content: `You may also need to pay insurance for any employees, like employee compensation insurance or unemployment tax. There will also be other requirements you have for employees.`,
              },
              {
                type: `arrow-links`,
                content: [
                  {
                    styles: { marginTop: `24px` },
                    text: `Get more requirements from the Florida Workforce Commission website.`,
                    url: `http://www.floridajobs.org/`,
                  },
                ],
              },
            ],
          },
          {
            question: `Other Taxes and Duties for Your Florida LLC`,
            answer: `Depending on the industry you are in, your Florida LLC may be liable for certain other taxes and duties. For example, if you sell gasoline you may need to pay a tax on any fuel you sell. Likewise, if you import or export goods you may need to pay certain duties. Speak to your accountant about any other taxes you may need to withhold or pay.`,
          },
          {
            question: `Estimated Taxes for Your Florida LLC`,
            answer2: [
              {
                type: `paragraph`,
                content: `Most Florida LLCs will need to pay estimated taxes throughout the year, depending on the amount of income and profit you expect to make. The most common types of estimated tax are:`,
              },
              {
                type: `list-dot-without-bg`,
                color: color.orange3,
                content: [`Federal income tax`, `Federal self-employment tax`],
              },
              {
                type: `paragraph`,
                content: `Most Florida LLCs will pay estimated taxes four times a year. Speak to your accountant for more information.`,
              },
            ],
          },
        ],
      },
    },

    ///////////////////
    {
      type: `heading`,
      size: 2,
      content: `FAQs on Florida LLC Business Taxes`,
    },
    {
      type: `accordion`,
      content: {
        items: [
          {
            question: `Does Florida Have Sales Tax?`,
            answer: `Yes. Florida does have a sales tax, which may vary among cities and counties. You can find more information above.`,
          },
          {
            question: `Does Florida Have a State Tax?`,
            answer: `No. Florida does not have a general state income tax.`,
          },
          {
            question: `What Is the Sales Tax Rate in Florida?`,
            answer: `We have listed common sales tax rates in Florida cities above.`,
          },
          {
            question: `Do I Need to Pay Estimated Taxes?`,
            answer: `Yes. In most cases you must pay estimated taxes on your Florida tax, federal income tax and self-employment tax. Speak to your accountant for more information.`,
          },
        ],
      },
    },
  ],
};
