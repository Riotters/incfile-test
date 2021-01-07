import { color } from "../../../components/styles/colors";
import BgBoxGetHelpTaxes from "../../../images/get-help-taxes-01.png";
import BgBoxTreatAsAnScorp from "../../../images/treating-llc-as-an-scorp-01.png";

export const businessTaxesPageContent = {
	header: {
		title: `Business Taxes for Texas LLCs`,
		subline: `Business taxes are a fact of life, and your TX LLC will need to pay a variety <br>of taxes to both the federal and Texas governments`,
		boxes: [
			{
				title: `Incorporate today for <span style="color:#FD8550">$0 + State fee.</span>`,
				desc: `Starting a Texas LLC? All of our incorporation packages include <br>a FREE business tax consultation.`,
				button: {
					text: `Form Your LLC Now`,
					url: `${process.env.ORDER_URL}/form-order-now.php?entityType=LLC&entityState=TX`,
				},
			},
		],
	},
	content: [
		{
			type: `heading`,
			size: 2,
			template: 3,
			marginBottom: 24,
			left: true,
			content: `How Your Texas LLC Will Be Taxed`,
		},
		{
			type: `paragraph`,
			content: `In this guide, we’ll cover all the main business taxes required in Texas, including self-employment, payroll, federal and Texas sales tax. The profits of a Texas LLC are not taxed at the business level like those of C Corporations. Instead, tax for a Texas LLC works as follows:`,
		},
		{
			type: `numberBoxList`,
			styles: { marginBottom: `55px` },
			content: [
				`Texas LLC owners pay self-employment tax on business profits`,
				`All LLC owners pay federal income tax on any profits less federal allowances or deductions`,
				`Some TX LLCs pay Texas sales tax on products`,
				`Employers pay payroll tax on any salaries they pay to employees`,
				`Employees pay federal and and payroll tax on their earnings`,
			],
		},
		{
			type: `paragraph`,
			content: `Items 1 and 2 are taxed as “pass-through” income for any LLC owners, managers or members who receive profits from the business. Any profits are reported on federal and Texas personal tax returns and that’s where you will pay those taxes.`,
		},
		{
			type: `paragraph`,
			content: `To pay Texas taxes, you’ll need a Texas Tax ID. You can apply for this online via the Texas Comptroller’s website.`,
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
			template: 3,
			marginBottom: 24,
			left: true,
			content: `Taxes Payable to the Texas Comptroller`,
		},
		{
			type: `paragraph`,
			content: `Unlike most other states, Texas does not have a state income tax. Therefore, there is no Texas state income tax to pay on your LLC earnings. There is one main type of tax that you will pay to the Texas Comptroller: Texas state sales tax.`,
		},

		{
			type: `heading`,
			size: 3,
			content: `Texas Sales Taxes on LLC Sales`,
		},
		{
			type: `paragraph`,
			content: `If you sell physical products or certain types of services, you may need to collect sales tax (also known as sales and use tax) and then pay it to the TX Comptroller. Texas sales tax is collected at the point of purchase. Texas sales tax rates do vary depending on the region, county or city where you are located. You will typically need to collect Texas sales tax on:`,
		},
		{
			type: `iconListColorBox`,
			boxColor: color.green3,
			styles: { margin: `56px 0` },
			content: {
				list: [
					`Tangible, personal property and goods that you sell like furniture, cars, electronics, appliances, books, raw materials, etc.`,
					`Certain services that your Texas business might provide`,
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
					text: `Get details of the Texas sales tax online here.`,
					url: `https://comptroller.texas.gov/taxes/sales/`,
				},
			],
		},

		/////////////
		{
			type: `heading`,
			styles: { marginTop: `56px` },
			size: 3,
			content: `Sales Tax Rates for Your Texas LLC`,
		},
		{
			type: `paragraph`,
			content: `Sales tax rates do vary between states, counties and cities. Typically, the state will set a base sales tax rate, then specific counties and cities may levy small additional sales tax amounts on top of that. Here are the sales tax rates for the major cities in Texas:`,
		},
		{
			type: `iconListColorBox`,
			boxColor: color.blue3,
			styles: { margin: `56px 0` },
			content: {
				list: [
					`<strong>Houston, TX</strong> sales tax rate is <strong>8.25%</strong>`,
					`<strong>San Antonio, TX</strong> sales tax rate is <strong>8.25%</strong>`,
					`<strong>Dallas, TX</strong> sales tax rate is <strong>8.25%</strong>`,
					`<strong>Austin, TX</strong> sales tax rate is <strong>8.25%</strong>`,
				],
			},
		},

		/////////////////////
		{
			type: `heading`,
			size: 2,
			template: 3,
			marginBottom: 24,
			left: true,
			content: `Federal Taxes for Texas LLCs`,
		},
		{
			type: `paragraph`,
			content: `There are a couple different federal taxes that every LLC will need to pay, including Texas LLCs. These are self-employment tax and federal income tax, which are taxed as “pass-through” income via your tax return forms.`,
		},

		{
			type: `heading`,
			size: 3,
			content: `Texas LLC Federal Self-Employment Tax`,
		},
		{
			type: `paragraph`,
			content: `All Texas LLC business members or managers who take profits out of the LLC will need to pay self-employment tax. This tax is also known as FICA, Social Security or Medicare tax. It applies to all the earnings you withdraw from your Texas business. The current self-employment tax rate is 15.3%.`,
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
			content: `Pay Less Self-Employment Tax by Treating Your Texas LLC as an S Corporation`,
		},
		{
			type: `paragraph`,
			content: `The Internal Revenue Service allows LLCs to ask to be treated as an S Corporation for tax purposes. This can help you reduce the amount of self-employment tax that you pay by declaring some of your income as salary and other income as distributions or withdrawals. Speak to your accountant for more information on reducing your Texas LLC self-employment tax through an S Corporation tax election.`,
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
					url: `/llc-s-corp-election/`,
				},
			},
		},

		{
			type: `heading`,
			styles: { marginTop: `48px` },
			size: 3,
			content: `Texas LLC Federal Income Tax`,
		},
		{
			type: `paragraph`,
			content: `You must also pay regular federal income tax on any earnings you take out of your Texas LLC. The amount of income tax you pay depends on your earnings, current income tax brackets, deductions and how you file.`,
		},
		{
			type: `paragraph`,
			content: `You only pay federal income tax on your Texas LLC profits that you take out of the business, less certain deductions and allowances. This includes your tax-free amount, plus LLC business expenses and other deductions for areas such as healthcare and some retirement plans. Speak to your accountant for more information.`,
		},

		////////////////////////
		{
			type: `heading`,
			size: 2,
			template: 3,
			marginBottom: 24,
			left: true,
			content: `Employee and Employer Taxes for Your Texas LLC`,
		},
		{
			type: `paragraph`,
			content: `If you pay employees, there are some slightly different tax implications. Speak to your accountant to get clear guidance for your own unique situation.`,
		},
		{
			type: `accordion`,
			header: 3,
			content: {
				items: [
					{
						question: `Employer Payroll Tax Withholding for Your Texas LLC`,
						answer: `All employers must collect and withhold payroll tax from their employees when they receive their salaries. You would normally withhold 7.65 percent of the taxable salary that you pay to your employees.`,
					},
					{
						question: `Texas LLC Federal Tax withholding`,
						answer: `You may also choose to withhold federal income tax on the wages you pay to employees. Speak to your accountant for more information.`,
					},
					{
						question: `Employees May Need to File Tax Returns`,
						answer: `Regardless of whether you withhold federal and Texas state income tax, your employees may need to file their own tax returns.`,
					},
					{
						question: `Texas LLC Employee Insurance and Other Requirements`,
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
										text: `Get more requirements from the Texas Workforce Commission website.`,
										url: `https://www.twc.texas.gov/businesses`,
									},
								],
							},
						],
					},
					{
						question: `Other Taxes and Duties for Your Texas LLC`,
						answer: `Depending on the industry you are in, your Texas LLC may be liable for certain other taxes and duties. For example, if you sell gasoline you may need to pay a tax on any fuel you sell. Likewise, if you import or export goods you may need to pay certain duties. Speak to your accountant about any other taxes you may need to withhold or pay.`,
					},
					{
						question: `Estimated Taxes for Your Texas LLC`,
						answer2: [
							{
								type: `paragraph`,
								content: `Most Texas LLCs will need to pay estimated taxes throughout the year, depending on the amount of income and profit you expect to make. The most common types of estimated tax are:`,
							},
							{
								type: `list-dot-without-bg`,
								color: color.orange3,
								content: [`Federal income tax`, `Federal self-employment tax`],
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
			template: 3,
			marginBottom: 24,
			left: true,
			content: `FAQs on Texas LLC Business Taxes`,
		},
		{
			type: `accordion`,
			header: 3,
			content: {
				items: [
					{
						question: `Does Texas Have Sales Tax?`,
						answer: `Yes. Texas does have a sales tax, which may vary among cities and counties. You can find more information above.`,
					},
					{
						question: `Does Texas Have a State Tax?`,
						answer: `No. Texas does not have a general state income tax.`,
					},
					{
						question: `What Is the Sales Tax Rate in Texas?`,
						answer: `We have listed common sales tax rates in Texas cities above.`,
					},
					{
						question: `Do I Need to Pay Estimated Taxes?`,
						answer: `Yes. In most cases you must pay estimated taxes on your Texas tax, federal income tax and self-employment tax. Speak to your accountant for more information.`,
					},
				],
			},
		},
	],
};
