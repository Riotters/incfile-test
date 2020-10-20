import { color } from '../../../components/styles/colors';

import SCN from '../../../images/search-for-name-7560.png';
import BgBoxAnnualReport from '../../../images/box-cta-ar-01.png';
import BgBoxLLCOA from '../../../images/box-cta-llc-oa-01.png';
import BgBoxTradeName from '../../../images/box-cta-trade-name-01.png';
import BgBoxCGS from '../../../images/box-cta-gsd-01.png';
import BgBoxRA from '../../../images/icons/states/mrs-bulb-thumb-up-left-color-01.png';
import BgBoxPaperWork from '../../../images/icons/states/handle-paperwork.inline.png';

export const filingFeeAndRequirementContent = {
    header: {
        title: `Illinois LLC Legal Requirements & Fees`,
        subline: `Depending on the specifics of your Illinois business, you’ll be required to pay certain fees and fulfill different filing requirements.`,
        boxes: [{
            title: `Start your LLC today for <span style="color:#FD8550">$0 + State fee.</span>`,
            desc: `Starting a Illinois LLC? Have Incfile do all the paperwork for you for free.`,
            button: {
                text: `Form Your LLC Now`,
                url: '/'
            }
        }, ]
    },
    content: [
        {
            type: `heading`,
            styles: {marginTop: `0`},
            size: 2,
            content: `How Much Does it Cost to Start an LLC in Illinois?`,
        },
        {
            type: `paragraph`,
            content: `Legal business registration—and keeping your business in good standing—involves some necessary expenses. Some of these costs are payable to the Illinois Secretary of State, while others are due to the federal or Illinois government. We’ve summarized the most common requirements and fees here.`,
        },
        {
            type: `paragraph`,
            content: `Note that Illinois business licenses and permits might need to be paid when you first form your business, on an ongoing schedule or on an ad hoc basis. Find more details below.`,
        },

        ////////////////
        {
            type: `heading`,
            styles: {marginTop: `0`},
            size: 2,
            content: `Initial Filing and Fees for Forming a Illinois LLC`,
        },
        {
            type: `paragraph`,
            content: `To create your business in Illinois, you’ll file an LLC with the IL Secretary of State and pay an associated LLC formation fee. Every state has different LLC filing fees and filing times. Here is the current information for Illinois:`,
        },
        {
            type: `gridTable`,
            headerSize: `5`,
            columns: `3`,
            content: {
                headers: [
                    `State Fee`,
                    `State Filing Time`,
                    `Expedited Filing Time`
                ],
                rows: [
                    [`$154`, `2 Weeks`, `1 Business Day`],
                ]
            }
        },
        {
            type: `arrow-links`,
            content: [
                {
                    text: `Compare State Filing Times`,
                    url: `/state-filing-times/`
                },
                {
                    text: `Compare State Filing Prices`,
                    url: `/state-filing-fees/`
                },
            ],
        },
        {
            type: `paragraph`,
            content: `When you form your IL LLC through Incfile, we automatically charge you this fee and forward it to the Illinois Secretary of State when we file your incorporation paperwork.`,
        },
        {
            type: `box-cta`, 
            color: color.orange3,
            styles: { fontSize: `25px` },
            bgImage: [BgBoxPaperWork],
            content: {
                title: `Incfile can file your incorporation paperwork for you for free - just pay your required state fee.`,
                button: {
                    text: `Incorporate Your Illinois LLC Today`,
                    url: `/form-order-now.php?entityType=LLC&entityState=IL`
                }
            }
        },
        {
            type: `box-cta`, 
            color: color.green3,
            styles: { fontSize: `25px` },
            bgImage: [SCN],
            content: {
                title: `Some states allow you to form your LLC more quickly by paying a rush fee.`,
                button: {
                    text: `View Expedited Fees For Illinois`,
                    url: `/form-order-now.php?entityType=LLC&entityState=IL`
                }
            }
        },

        //////////////
        {
            type: `heading`,
            size: 2,
            content: `Costs for an Employer Identification Number`,
        },
        {
            type: `paragraph`,
            content: `Every Illinois LLC should have a unique employer identification number (EIN). These are provided by the Internal Revenue Service and you use them when filing taxes, opening a business bank account and paying employees. You can get one yourself at no cost from the IRS or have Incfile obtain one on your behalf.`,
        },
        {
            type: `button`,
            theme: `secondary56`,
            width: '440px',
            content: {
                text: `Get An EIN For Your Illinois LLC Through Incfile`,
                url: `/manage-your-company/tax-id-ein/`,
            }
        },

        ////////////////
        {
            type: `heading`,
            size: 2,
            content: `Foreign Qualification to Operate in a State Outside Illinois`,
        },
        {
            type: `paragraph`,
            content: `If you’re expanding your Illinois LLC beyond the borders of the state, you will need a Foreign Qualification or Certificate of Authority to operate in another state. These are typically necessary if you have a physical presence, employees or banking in a different state than Illinois. You will also need to complete an “Application for Authority to Transact Business in Illinois” (<a href="https://cyberdriveillinois.com/publications/pdf_publications/bca1315.pdf" rel="noopener nofollow noreferrer">Form BCA 13.15</a>). There may be a filing fee and a franchise tax fee. Incfile provides a complete Foreign Qualification service for any state.`,
        },
        {
            type: `button`,
            theme: `secondary56`,
            width: '600px',
            content: {
                text: `Get A Foreign Qualification/Certificate Of Authority Through Incfile`,
                url: `/manage-your-company/foreign-qualification/`,
            }
        },

        ////////////////
        {
            type: `heading`,
            size: 2,
            content: `Annual Report Requirements for Illinois`,
        },
        {
            type: `paragraph`,
            content: `Most states need to file an annual (or other periodic) report with their department of state. When you file your IL LLC annual report, you may need to pay a fee. Here are the annual filing requirements for Illinois:`,
        },
        {
            title: `Public Information & Franchise Tax Report`,
            items: [{
                    text1: `Frequency:`,
                    text2: `Annually`,
                },
                {
                    text1: `Due Date:`,
                    text2: `Within 60 days immediately preceding first day of anniversary month.`,
                },
                {
                    text1: `Filing Fee:`,
                    text2: `$78`,
                },
            ],
        },
        {
            type: `box-cta`, 
            color: color.green3,
            styles: { fontSize: `25px` },
            bgImage: [BgBoxAnnualReport],
            content: {
                title: `Incfile can also complete and file your Illinois Public Information Report on your behalf.`,
                button: {
                    text: `Incfile’s Illinois Annual Report Filing Service`,
                    url: `/manage-your-company/annual-report/`
                }
            }
        },

        //////////////////
        {
            type: `heading`,
            size: 2,
            content: `Illinois Business Licenses and Permits`,
        },
        {
            type: `paragraph`,
            content: `Your Illinois LLC may need certain licenses and permits to comply with specific requirements. These business permits and licenses might be issued by Illinois , regional or federal organizations. Some of the associated fees only need to be paid once, while others have ongoing charges.`,
        },
        {
            type: `iconListColorBox`,
            styles: {marginBottom: `55px`},
            boxColor: color.blue3,
            content: {
                header: `Permits and licenses vary based on:`,
                list: [
                    `The industry your Illinois LLC operates in (e.g., restaurants will need health permits)`,
                    `The location of your Illinois LLC (state, county or city) (e.g., a license to conduct business from the city of Chicago)`,
                    `The type of business that you run (e.g., healthcare providers must meet HIPAA requirements)`,
                ]
            },
        },
        {
            type: `paragraph`,
            content: `Remember that operating your business without the required licenses can expose you to risks and fines from federal, Illinois and local governments.`,
        },
        {
            type: `paragraph`,
            content: `You can research these permits and licenses yourself or use Incfile’s Business License Research Package, which includes:`,
        },
        {
            type: `textBoxWithCheckIcon`,
            content: [
                `A complete report on all the licenses, permits and tax registrations your Illinois LLC will need`,
                `The application forms you will need to file with the Illinois, regional and federal licensing authorities`,
            ]
        },
        {
            type: `button`,
            theme: `primary56`,
            width: '480px',
            content: {
                text: `Incfile’s Illinois Busiess License Research Package`,
                url: `/business-license-research-package/`,
            }
        },

        /////////////////
        {
            type: `heading`,
            size: 2,
            content: `Operating Agreements for Illinois LLCs`,
        },
        {
            type: `paragraph`,
            content: `An Operating Agreement is a business document that covers how the business will be run, how managers and members are chosen, rights and duties of members and several other key areas.`,
        },
        {
            type: `paragraph`,
            content: `Illinois is one of the states that does not require you to have an operating agreement—but it can still be extremely helpful in making sure you’re organized and prepared.`,
        },
        {
            type: `box-cta`, 
            color: color.orange3,
            styles: { fontSize: `25px` },
            bgImage: [BgBoxLLCOA],
            content: {
                title: `If you’re interested in having your Operating Agreement created for you, Incfile can draft a general Operating Agreement template when you choose to form your Illinois business.`,
                subtitle: `You can choose to make changes to the template based on your unique requirements.`,
                button: {
                    text: `Lear About Operating Agreemets`,
                    url: `https://www.incfile.com/research-topics/llc-info/llc-operating-agreement/`
                }
            }
        },

        ////////////////
        {
            type: `heading`,
            size: 2,
            content: `Other Potential LLC Fees or Requirements in Illinois`,
        },
        {
            type: `paragraph`,
            content: `There are several other fees or requirements that you may need to meet during the life of your Illinois LLC. These ad hoc fees will only be payable in specific circumstances, which we’ve listed below.`,
        },

        //////////////
        {
            type: `heading`,
            size: 3,
            content: `Obtaining an Assumed Name/DBA Name for Your Illinois LLC`,
        },
        {
            type: `paragraph`,
            content: `If you want your IL business to trade under a different name, you can file a form with the Illinois Secretary of State. You will need to pay a Illinois filing fee.`,
        },
        {
            type: `box-cta`, 
            color: color.blue3,
            styles: { fontSize: `25px` },
            bgImage: [BgBoxTradeName],
            content: {
                title: `Incfile can file your fictitious name / DBA forms on your behalf.`,
                button: {
                    text: `Incfile’s Illinois Fictious Name Service`,
                    url: `/fictitious-business-or-trade-name/`
                }
            }
        },

        //////////////
        {
            type: `heading`,
            size: 3,
            content: `To Change Your Illinois Registered Agent`,
        },
        {
            type: `paragraph`,
            content: `Your Illinois LLC needs a Registered Agent, which must be appointed when you first incorporate your LLC. You can also switch to a new IL Registered Agent later.`,
        },
        {
            type: `box-cta`, 
            color: color.orange3,
            styles: { fontSize: `25px` },
            bgImage: [BgBoxRA],
            content: {
                title: `Have Incfile serve as your Registered Agent for you.`,
                subtitle: `It’s free for the first year if you incorporate with us, and $119 a year after.`,
                button: {
                    text: `Incfile’s Illinois Fictious Name Service`,
                    url: `/manage-your-company/registered-agent/`
                }
            }
        },

        //////////////
        {
            type: `heading`,
            size: 3,
            content: `Reserving a Name for Your Illinois LLC`,
        },
        {
            type: `paragraph`,
            content: `If you don’t want to form your IL business right away, you can reserve a name for 90 days with the Illinois Secretary of State. You will need to pay a small fee of $25 to do this.`,
        },

        //////////////
        {
            type: `heading`,
            size: 3,
            content: `To Amend Certain Facts About Your Illinois LLC`,
        },
        {
            type: `paragraph`,
            content: `our business formation documents state certain facts about your Illinois business when it was originally formed. Over time, these facts might change — if they do, you need to file “Articles of Amendment” (<a href="https://cyberdriveillinois.com/publications/pdf_publications/bca1315.pdf" rel="noopener nofollow noreferrer">Form BCA 13.15</a>) with the Illinois Secretary of State. You can do this yourself or have Incfile complete the filing on your behalf.`,
        },
        {
            type: `iconListColorBox`,
            styles: {marginBottom: `55px`},
            boxColor: color.blue3,
            content: {
                header: `Areas you might want to file a Illinois Certificate of Amendment for include:`,
                list: [
                    `Adding, removing or changing a Illinois LLC member or manager`,
                    `Changing the business address of your LLC`,
                    `Altering the stated business activities of your Illinois LLC`,
                ]
            },
        },
        {
            type: `button`,
            theme: `secondary56`,
            width: '480px',
            content: {
                text: `Incfile’s Illinois Certificate Of Amendment Service`,
                url: `/manage-your-company/amendment/`,
            }
        },

         //////////////
         {
            type: `heading`,
            size: 3,
            content: `To Get a Certificate of Good Standing for Your Illinois LLC`,
        },
        {
            type: `paragraph`,
            content: `Some organizations will request that you prove your Illinois LLC’s compliance with laws and tax requirements. If you need to prove you have met your commitments, you will need a “Certificate of Good Standing” from the Illinois Secretary of State.`,
        },
        {
            type: `box-cta`, 
            color: color.orange3,
            styles: { fontSize: `25px` },
            bgImage: [BgBoxCGS],
            content: {
                title: `Incfile can obtain a certificate of good standing on your behalf.`,
                button: {
                    text: `Incfile’s Illinois Certificate `,
                    url: `/manage-your-company/certificate-of-good-standing/`
                }
            }
        },
        {
            type: `paragraph`,
            content: `The fees listed above detail all the charges that a standard IL LLC will be required to pay. In some unusual circumstances, there may be other one-off, periodic or ad hoc fees not listed above.`,
        },
        {
            type: `paragraph`,
            content: `Of course, your Illinois LLC will also probably need to pay self-employment, payroll, federal, state and sales taxes, but we will cover that when we talk about taxes for IL LLCs.`,
        },

        /////////////
        {
            type: `heading`,
            size: 2,
            content: `FAQs About Illinois LLC Fees`,
        },
        {
            type: `accordion`,
            content: {
                items: [
                    {
                        question: `What Happens to the State Fees That I Am Charged When Forming My Illinois LLC?`,
                        answer: `We charge you for this fee at cost and then pay the fee to the Secretary of State on your behalf when forming your Illinois business.`,
                    },
                    {
                        question: `Do I Need to Pay a Franchise Tax Report Fee Every Year?`,
                        answer: `Usually, yes. Most states require you file a report for your LLC every year. You can find out more on the <a href="/compliance-filing-requirement/">compliance page for your state.</a>`,
                    },
                    {
                        question: `Who Will I Need to Get Business Licenses and Permits From for My Illinois LLC?`,
                        answer2: [
                            {
                                type: `paragraph`,
                                content: `It depends on various factors including:`,
                            },
                            {
                                type: `list-dot-without-bg`,
                                color: color.blue3,
                                content: [
                                    `The type of business you run`,
                                    `Where you are located`,
                                    `Governing organizations in your industry`,
                                    `Federal, state and local regulations`,
                                ]
                            },
                            {
                                type: `paragraph`,
                                content: `That’s why our <a href="/business-license-research-package/">business license research package</a> is so useful. It explores all of these areas for you and provides a comprehensive overview of exactly what your Illinois LLC needs to be compliant.`,
                            },
                        ],
                    },
                ]
            }
        },
    ],
}