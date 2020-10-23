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
        title: `Georgia LLC Legal Requirements & Fees`,
        subline: `Depending on the specifics of your Georgia business, you’ll be required to pay certain fees and fulfill different filing requirements.`,
        boxes: [{
            title: `Start your LLC today for <span style="color:#FD8550">$0 + State fee.</span>`,
            desc: `Starting a Georgia LLC? Have Incfile do all the paperwork for you for free.`,
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
            content: `How Much Does it Cost to Start an LLC in Georgia?`,
        },
        {
            type: `paragraph`,
            content: `Legal business registration—and keeping your business in good standing—involves some necessary expenses. Some of these costs are payable to the Georgia Secretary of State, while others are due to the federal or Georgia government. We’ve summarized the most common requirements and fees here.`,
        },
        {
            type: `paragraph`,
            content: `Note that Georgia business licenses and permits might need to be paid when you first form your business, on an ongoing schedule or on an ad hoc basis. Find more details below.`,
        },

        ////////////////
        {
            type: `heading`,
            styles: {marginTop: `0`},
            size: 2,
            content: `Georgia LLC Incorporation Filing and Fees`,
        },
        {
            type: `paragraph`,
            content: `When you first incorporate your business in Georgia, you’ll need to file an LLC with the GA Secretary of State and pay a filing fee. Here are the current fees and filing times for Georgia:`,
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
                    [`$100`, `20 Business Days`, `5 Business Days`],
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
            content: `When you form your GA LLC through Incfile, we automatically charge you this fee and forward it to the Georgia Secretary of State when we file your incorporation paperwork.`,
        },
        {
            type: `paragraph`,
            content: `Incfile can help you form your LLC more quickly by paying a rush fee. You can <a href="/state-filing-times/">compare state filing times and fees here, including expedited fees for Georgia.</a>`,
        },
        {
            type: `box-cta`, 
            color: color.orange3,
            styles: { fontSize: `25px` },
            bgImage: [BgBoxPaperWork],
            content: {
                title: `Incfile can file your incorporation paperwork for you for free - just pay your required state fee.`,
                button: {
                    text: `Incorporate Your Georgia LLC Today`,
                    url: `/form-order-now.php?entityType=LLC&entityState=GA/`
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
                    text: `View Expedited Fees For Georgia`,
                    url: `/state-filing-times/`
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
            content: `Every Georgia LLC should have a unique employer identification number (EIN). These are provided by the Internal Revenue Service and you use them when filing taxes, opening a business bank account and paying employees. You can get one yourself at no cost from the IRS or have Incfile obtain one on your behalf.`,
        },
        {
            type: `button`,
            theme: `secondary56`,
            width: '440px',
            content: {
                text: `Get An EIN For Your Georgia LLC Through Incfile`,
                url: `/manage-your-company/tax-id-ein/`,
            }
        },

        ////////////////
        {
            type: `heading`,
            size: 2,
            content: `Certificate of Authority to Operate Outside Georgia`,
        },
        {
            type: `paragraph`,
            content: `If you’re expanding your Georgia LLC beyond the borders of the state, you will need a Foreign Qualification or Certificate of Authority to operate in another state. These are typically necessary if you have a physical presence, employees or banking in a different state than Georgia. Fees and requirements for foreign qualifications depend on each state’s rules. Incfile provides a complete Foreign Qualification service for any state.`,
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
            content: `Annual Reporting and Fees for Georgia LLCs`,
        },
        {
            type: `paragraph`,
            content: `Most states require that you file a periodic report with the secretary of state. Georgia requires an annual report for LLCs, with a required filing fee. Here are more specifics:`,
        },
        {
            type: `iconListColorBox`,
            styles: {marginBottom: `55px`},
            boxColor: color.blue3,
            content: {
                header: `Annual Report`,
                list: [
                    `<b>Frequency:</b> Annually`,
                    `<b>Due Date:</b> April 1st`,
                    `<b>Filing Fee:</b> $50`,
                ]
            },
        },
        {
            type: `box-cta`, 
            color: color.green3,
            styles: { fontSize: `25px` },
            bgImage: [BgBoxAnnualReport],
            content: {
                title: `Incfile can also complete and file your Georgia Public Information Report on your behalf.`,
                button: {
                    text: `Incfile’s Georgia Annual Report Filing Service`,
                    url: `/manage-your-company/annual-report/`
                }
            }
        },

        //////////////////
        {
            type: `heading`,
            size: 2,
            content: `Georgia Business Licenses and Permits`,
        },
        {
            type: `paragraph`,
            content: `Your Georgia LLC may need certain licenses and permits to comply with specific requirements. These business permits and licenses might be issued by Georgia , regional or federal organizations. Some of the associated fees only need to be paid once, while others have ongoing charges.`,
        },
        {
            type: `iconListColorBox`,
            styles: {marginBottom: `55px`},
            boxColor: color.blue3,
            content: {
                header: `Permits and licenses vary based on:`,
                list: [
                    `The industry your Georgia LLC operates in (e.g., restaurants will need health permits)`,
                    `The location of your Georgia LLC (state, county or city) (e.g., a license to conduct business from the city of Savannah)`,
                    `The type of business that you run (e.g., healthcare providers must meet HIPAA requirements)`,
                ]
            },
        },
        {
            type: `paragraph`,
            content: `Remember that operating your business without the required licenses can expose you to risks and fines from federal, Georgia and local governments.`,
        },
        {
            type: `paragraph`,
            content: `You can research these permits and licenses yourself or use Incfile’s Business License Research Package, which includes:`,
        },
        {
            type: `textBoxWithCheckIcon`,
            content: [
                `A complete report on all the licenses, permits and tax registrations your Georgia LLC will need`,
                `The application forms you will need to file with the Georgia, regional and federal licensing authorities`,
            ]
        },
        {
            type: `button`,
            theme: `primary56`,
            width: '480px',
            content: {
                text: `Incfile’s Georgia Busiess License Research Package`,
                url: `/business-license-research-package/`,
            }
        },

        /////////////////
        {
            type: `heading`,
            size: 2,
            content: `Operating Agreements for Georgia LLCs`,
        },
        {
            type: `paragraph`,
            content: `An Operating Agreement is a business document that covers how the business will be run, how managers and members are chosen, rights and duties of members and several other key areas.`,
        },
        {
            type: `paragraph`,
            content: `An Operating Agreement is not required for Georgia LLCs and does not need to be submitted to the GA Secretary of State, but it’s a good idea to have an agreement in place, regardless. This helps avoid conflict and confusion down the road.`,
        },
        {
            type: `box-cta`, 
            color: color.orange3,
            styles: { fontSize: `25px` },
            bgImage: [BgBoxLLCOA],
            content: {
                title: `If you’re interested in having your Operating Agreement created for you, Incfile can draft a general Operating Agreement template when you choose to form your Georgia business. You can choose to make changes to the template based on your unique requirements.`,
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
            content: `Other Potential LLC Fees or Requirements in Georgia`,
        },
        {
            type: `paragraph`,
            content: `There are several other fees or requirements that you may need to meet during the life of your Georgia LLC. These ad hoc fees will only be payable in specific circumstances, which we’ve listed below.`,
        },

        //////////////
        {
            type: `heading`,
            size: 3,
            content: `To Obtain a Fictitious/DBA Name for Your Georgia LLC`,
        },
        {
            type: `paragraph`,
            content: `If you want your GA business to operate under a different name, you can file a DBA” (“doing business as”) or “trade name” with the county in which your business is located. Each county in Georgia has different (although similar) requirements, so you will need to check with your county clerk for the appropriate procedures. You will likely need to pay a filing fee to register your DBA, and you may need to file publication of your DBA/trade name in your local newspaper. Check with your county clerk’s office for more details.`,
        },
        {
            type: `box-cta`, 
            color: color.blue3,
            styles: { fontSize: `25px` },
            bgImage: [BgBoxTradeName],
            content: {
                title: `Incfile can file your Assumed Name/DBA Name forms on your behalf.`,
                button: {
                    text: `Incfile’s Georgia Fictious Name Service`,
                    url: `/fictitious-business-or-trade-name/`
                }
            }
        },

        //////////////
        {
            type: `heading`,
            size: 3,
            content: `To Change Your Georgia Registered Agent`,
        },
        {
            type: `paragraph`,
            content: `Your Georgia LLC needs a Registered Agent, which must be appointed when you first incorporate your LLC and file your initial paperwork. If you want to switch to a different Registered Agent later, you’ll need to file the appropriate paperwork. Georgia lets you change your Registered Agent when you file your annual report, which simply costs the annual filing fee.`,
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
                    text: `Incfile’s Georgia Registered Agent Service`,
                    url: `/manage-your-company/registered-agent/`
                }
            }
        },

        //////////////
        {
            type: `heading`,
            size: 3,
            content: `To Reserve a Name for Your Georgia LLC`,
        },
        {
            type: `paragraph`,
            content: `If you don’t want to form your GA business right away, you can reserve a name with the Georgia Secretary of State. You can do this <a href="https://ecorp.sos.ga.gov/"target="_blank" rel="noopener noreferrer">online</a> for a $25 filing fee, or you can request the form be sent to you by filling out and mailing the <a href="https://sos.ga.gov/corporations/acrobat/applications/Form%20-%20Name%20Reservation.pdf"target="_blank" rel="noopener noreferrer" >Name Reservation Request form</a> with a $35 check or money order ($25 filing fee + $10 paper filing service charge).`,
        },
        {
            type: `paragraph`,
            content: `<b>Mail your Name Reservation Request to:</b></br></br>
            Office of Secretary of State</br>
            Corporations Division</br>
            Name Reservation Request</br>
            2 Martin Luther King Jr. Dr. SE</br>
            Suite 313 West Tower</br>
            Atlanta, GA 30334`,
        },

        //////////////
        {
            type: `heading`,
            size: 3,
            content: `To Change the Name of Your Georgia LLC`,
        },
        {
            type: `paragraph`,
            content: `Over time, you may want to change the name of your LLC — if you do, you need to file Articles of Amendment (<a href="https://sos.ga.gov/corporations/acrobat/applications/Filing%20Template%20-%20Name%20Change%20Amendment%20for%20LLC%20(CD%20115).pdf"target="_blank" rel="noopener noreferrer">Form CD 115</a>) with the Georgia Secretary of State. You can do this yourself either online ($20) or by mail ($20 + $10 paper filing service charge) or have Incfile complete the filing on your behalf.`,
        },
        {
            type: `paragraph`,
            content: `<b>Mail your Articles of Amendment Form to:</b></br></br>
            Corporations Division</br>
            2 Martin Luther King Jr. Dr. SE</br>
            Suite 313 West Tower</br>
            Atlanta, GA 30334`,
        },
        {
            type: `iconListColorBox`,
            styles: {marginBottom: `55px`},
            boxColor: color.blue3,
            content: {
                header: `Situations in which you might want to file Georgia Articles of Amendment:`,
                list: [
                    `Adding, removing or changing a Georgia LLC member or manager`,
                    `Changing the business address of your LLC`,
                    `Altering the stated business activities of your Georgia LLC`,
                    `Changing the management structure of your LLC`,
                    `Changing the name of your LLC`,
                ]
            },
        },
        {
            type: `button`,
            theme: `secondary56`,
            width: '480px',
            content: {
                text: `Incfile’s Articles Of Amendment Service`,
                url: `/manage-your-company/amendment/`,
            }
        },

         //////////////
         {
            type: `heading`,
            size: 3,
            content: `To Get a Certificate of Existence for Your Georgia LLC`,
        },
        {
            type: `paragraph`,
            content: `Some organizations will request that you prove your Georgia LLC’s compliance with laws and tax requirements. If you need to prove you have met your commitments, you will need a Certificate of Good Standing, called a “Certificate of Existence” in Georgia, from the Georgia Secretary of State. You can <a href="https://ecorp.sos.ga.gov/CertificateOfExistence"target="_blank" rel="noopener noreferrer">request this form online</a> or have Incfile fill out the paperwork for you.`,
        },
        {
            type: `box-cta`, 
            color: color.orange3,
            styles: { fontSize: `25px` },
            bgImage: [BgBoxCGS],
            content: {
                title: `Incfile can obtain a certificate of good standing on your behalf.`,
                button: {
                    text: `Get a certificate of good standing in Georgia `,
                    url: `/manage-your-company/certificate-of-good-standing/`
                }
            }
        },
        {
            type: `paragraph`,
            content: `The fees listed above detail all the charges that a standard GA LLC will be required to pay. In some unusual circumstances, there may be other one-off, periodic or ad hoc fees not listed above.`,
        },
        {
            type: `paragraph`,
            content: `Of course, your Georgia LLC will also probably need to pay self-employment, payroll, federal, state and sales taxes, but we will cover that when we talk about taxes for GA LLCs.`,
        },

        /////////////
        {
            type: `heading`,
            size: 2,
            content: `FAQs About Georgia LLC Fees`,
        },
        {
            type: `accordion`,
            content: {
                items: [
                    {
                        question: `What Happens to the State Fees That I Am Charged When Forming My Georgia LLC?`,
                        answer: `We charge you for this fee at cost and then pay the fee to the Secretary of State on your behalf when forming your Georgia business.`,
                    },
                    {
                        question: `Do I Need to Pay an Annual Report Fee Every Year?`,
                        answer: `Yes. Georgia requires you file an annual report and pay the associated fees for your LLC every year.`,
                    },
                    {
                        question: `Who Will I Need to Get Business Licenses and Permits From for My Georgia LLC?`,
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
                                content: `That’s why our <a href="/business-license-research-package/">business license research package</a> is so useful. It explores all of these areas for you and provides a comprehensive overview of exactly what your Georgia LLC needs to be compliant.`,
                            },
                        ],
                    },
                ]
            }
        },
    ],
}