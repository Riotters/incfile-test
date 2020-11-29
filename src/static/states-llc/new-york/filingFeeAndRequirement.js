import { color } from "../../../components/styles/colors";

import SCN from "../../../images/search-for-name-7560.png";
import BgBoxAnnualReport from "../../../images/box-cta-ar-01.png";
import BgBoxLLCOA from "../../../images/box-cta-llc-oa-01.png";
import BgBoxTradeName from "../../../images/box-cta-trade-name-01.png";
import BgBoxCGS from "../../../images/box-cta-gsd-01.png";
import BgBoxRA from "../../../images/icons/states/mrs-bulb-thumb-up-left-color-01.png";
import BgBoxPaperWork from "../../../images/icons/states/handle-paperwork.inline.png";

export const filingFeeAndRequirementContent = {
  header: {
    title: `New York LLC Fees & Filing Requirements`,
    subline: `Depending on the specifics of your New York business, you’ll be required to pay certain fees and fulfill different filing requirements.`,
    boxes: [
      {
        title: `Start your LLC today for <span style="color:#FD8550">$0 + State fee.</span>`,
        desc: `Starting a New York LLC? Have Incfile do all the paperwork for you for free.`,
        button: {
          text: `Form Your LLC Now`,
          url: `${process.env.ORDER_URL}/form-order-now.php?entityType=LLC&entityState=NY`,
        },
      },
    ],
  },
  content: [
    {
      type: `heading`,
      styles: { marginTop: `0` },
      size: 2,
      content: `How Much Does it Cost to Start an LLC in New York?`,
    },
    {
      type: `paragraph`,
      content: `Legal business registration—and keeping your business in good standing—involves some necessary expenses. Some of these costs are payable to the New York Department of State, while others are due to the federal or New York government. We’ve summarized the most common requirements and fees here.`,
    },
    {
      type: `paragraph`,
      content: `Note that New York business licenses and permits might need to be paid when you first form your business, on an ongoing schedule or on an ad hoc basis. Find more details below.`,
    },

    ////////////////
    {
      type: `heading`,
      styles: { marginTop: `0` },
      size: 2,
      content: `Initial Filing and Fees for Forming a New York LLC`,
    },
    {
      type: `paragraph`,
      content: `To create your business in New York, you’ll file an LLC with the NY Department of State and pay an associated LLC formation fee. Every state has different LLC filing fees and filing times. Here is the current information for New York:`,
    },
    {
      type: `dynamic_ar_box`,
    },
    {
      type: `arrow-links`,
      content: [
        {
          text: `Compare State Filing Times`,
          url: `/state-filing-times/`,
        },
        {
          text: `Compare State Filing Prices`,
          url: `/state-filing-fees/`,
        },
      ],
    },
    {
      type: `paragraph`,
      styles: { marginTop: `16px`, },
      content: `When you incorporate through Incfile, we charge the state fee to you and pay the New York Department of State on your behalf when we file your paperwork. Note that New York State does offer expedited filing for an extra fee.`,
    },
    {
      type: `box-cta`,
      color: color.orange3,
      styles: { fontSize: `25px` },
      bgImage: [BgBoxPaperWork],
      content: {
        title: `Incfile can file your incorporation paperwork for you for free - just pay your required state fee.`,
        button: {
          text: `Incorporate Your New York LLC Today`,
          url: `${process.env.ORDER_URL}/form-order-now.php?entityType=LLC&entityState=NY`,
        },
      },
    },
    {
      type: `box-cta`,
      color: color.green3,
      styles: { fontSize: `25px` },
      bgImage: [SCN],
      content: {
        title: `Incfile can help you form your LLC more quickly by paying a rush fee.`,
        button: {
          text: `View Expedited Fees For New York`,
          url: `/state-filing-times/`,
        },
      },
    },

    //////////////
    {
      type: `heading`,
      size: 2,
      content: `Costs for an Employer Identification Number`,
    },
    {
      type: `paragraph`,
      content: `Every New York LLC should have a unique employer identification number (EIN). These are provided by the Internal Revenue Service and you use them when filing taxes, opening a business bank account and paying employees. You can get one yourself at no cost from the IRS or have Incfile obtain one on your behalf.`,
    },
    {
      type: `button`,
      theme: `secondary56`,
      width: "440px",
      content: {
        text: `Get An EIN For Your New York LLC Through Incfile`,
        url: `/manage-your-company/tax-id-ein/`,
      },
    },

    ////////////////
    {
      type: `heading`,
      size: 2,
      content: `Application for Authority to Operate Outside New York`,
    },
    {
      type: `paragraph`,
      content: `If you’re expanding your New York LLC beyond the borders of the state, you will need a Foreign Qualification or Certificate of Authority to operate in another state. These are typically necessary if you have a physical presence, employees or banking in a different state than New York. Fees and requirements for foreign qualifications depend on each state’s rules. Incfile provides a complete Foreign Qualification service for any state.`,
    },
    {
      type: `button`,
      theme: `secondary56`,
      width: "600px",
      content: {
        text: `Get A Foreign Qualification/Certificate Of Authority Through Incfile`,
        url: `/manage-your-company/foreign-qualification/`,
      },
    },

    ////////////////
    {
      type: `heading`,
      size: 2,
      content: `Biennial Reporting for Your New York LLC`,
    },
    {
      type: `paragraph`,
      content: `Most states require some form of regular reporting with their Department of State. New York requires a biennial LLC report with an associated filing fee. Here are the current biennial filing requirements for New York:`,
    },
    {
      type: `dynamic_filing_requirement`,
    },
    {
      type: `box-cta`,
      color: color.green3,
      styles: { fontSize: `25px` },
      bgImage: [BgBoxAnnualReport],
      content: {
        title: `Incfile can also complete and file your New York Public Information Report on your behalf.`,
        button: {
          text: `Incfile’s New York Annual Report Filing Service`,
          url: `/manage-your-company/annual-report/`,
        },
      },
    },
    {
      type: `heading`,
      size: 2,
      content: `New York LLC Publication Requirements`,
    },
    {
      type: `paragraph`,
      content: `New York State has a special requirement for LLCs in which an LLC must publish a copy of its Articles of Organization or a notice related to the formation of the LLC in two different newspapers. Section 206 of the New York State Limited Liability Company Law requires that this be done within 120 days of when the initial Articles of Organization are official.`,
    },
    {
      type: `paragraph`,
      content: `The newspapers must be designated by the County Clerk of the county in which the office of the LLC is located, as stated in the Articles of Organization. After publication, the printer or publisher of each newspaper will provide you with an affidavit of publication. A Certificate of Publication, with the affidavits of publication of the newspapers attached, must then be submitted to the New York Department of State, Division of Corporations.`,
    },
    {
      type: `paragraph`,
      content: `You can see step-by-step instructions for this process in our <a href="/research-topics/state-info/ny-publication-requirement/"> “How to Meet New York LLC Publication Requirements”</a> guide. Note that Incfile does not assist in the filing of the Publication Requirement.`,
    },

    //////////////////
    {
      type: `heading`,
      size: 2,
      content: `New York Business Licenses and Permits`,
    },
    {
      type: `paragraph`,
      content: `Some NY LLCs will need certain business licenses and permits from federal, state and regional organizations. These permits and licenses will have associated fees that you should pay on a one-off or regular basis.`,
    },
    {
      type: `iconListColorBox`,
      styles: { marginBottom: `55px` },
      boxColor: color.blue3,
      content: {
        header: `Permits and licenses vary based on:`,
        list: [
          `The industry your New York LLC operates in (e.g., restaurants will need health permits)`,
          `The location of your New York LLC (state, county or city) (e.g., a license to conduct business from the city of Buffalo)`,
          `The type of business that you run (e.g., healthcare providers must meet HIPAA requirements)`,
        ],
      },
    },
    {
      type: `paragraph`,
      content: `Remember that operating your business without the required licenses can expose you to risks and fines from federal, New York and local governments.`,
    },
    {
      type: `paragraph`,
      content: `You can research these permits and licenses yourself or use Incfile’s Business License Research Package, which includes:`,
    },
    {
      type: `textBoxWithCheckIcon`,
      content: [`A complete report on all the licenses, permits and tax registrations your New York LLC will need`, `The application forms you will need to file with the New York, regional and federal licensing authorities`],
    },
    {
      type: `button`,
      theme: `primary56`,
      width: "480px",
      content: {
        text: `Incfile’s New York Busiess License Research Package`,
        url: `/business-license-research-package/`,
      },
    },

    /////////////////
    {
      type: `heading`,
      size: 2,
      content: `Operating Agreement Requirements in New York`,
    },
    {
      type: `paragraph`,
      content: `An Operating Agreement is a business document that covers how the business will be run, how managers and members are chosen, rights and duties of members and several other key areas.`,
    },
    {
      type: `paragraph`,
      content: `New York State requires LLCs to have an Operating Agreement, but you do not need to officially file it with the Department of State.`,
    },
    {
      type: `box-cta`,
      color: color.orange3,
      styles: { fontSize: `25px` },
      bgImage: [BgBoxLLCOA],
      content: {
        title: `If you’re interested in having your Operating Agreement created for you, Incfile can draft a general Operating Agreement template when you choose to form your New York business.`,
        subtitle: `You can choose to make changes to the template based on your unique requirements.`,
        button: {
          text: `Lear About Operating Agreemets`,
          url: `/research-topics/llc-info/llc-operating-agreement/`,
        },
      },
    },

    ////////////////
    {
      type: `heading`,
      size: 2,
      content: `Other Potential LLC Fees or Requirements in New York`,
    },
    {
      type: `paragraph`,
      content: `There are several other fees or requirements that you may need to meet during the life of your New York LLC. These ad hoc fees will only be payable in specific circumstances, which we’ve listed below.`,
    },

    //////////////
    {
      type: `heading`,
      size: 3,
      content: `To Obtain a Fictitious/DBA Name for Your New York LLC`,
    },
    {
      type: `paragraph`,
      content: `If you want your NY business to trade under a different name, you can file a form with the New York Department of State. You will need to pay a New York filing fee.`,
    },
    {
      type: `box-cta`,
      color: color.blue3,
      styles: { fontSize: `25px` },
      bgImage: [BgBoxTradeName],
      content: {
        title: `Incfile can file your fictitious name / DBA forms on your behalf.`,
        button: {
          text: `Incfile’s New York Fictious Name Service`,
          url: `/fictitious-business-or-trade-name/`,
        },
      },
    },

    //////////////
    {
      type: `heading`,
      size: 3,
      content: `To Change the New York Registered Agent for Your NY LLC`,
    },
    {
      type: `paragraph`,
      content: `Your New York LLC needs a Registered Agent, which must be appointed when you first incorporate your LLC. You can also switch to a new NY Registered Agent later.`,
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
          text: `Incfile’s New York Fictious Name Service`,
          url: `/manage-your-company/registered-agent/`,
        },
      },
    },

    //////////////
    {
      type: `heading`,
      size: 3,
      content: `To Reserve a Name for Your New york LLC`,
    },
    {
      type: `paragraph`,
      content: `If you don’t want to form your NY business right away, you can reserve a name with the New York Department of State. You will need to pay a small fee to do this.`,
    },

    //////////////
    {
      type: `heading`,
      size: 3,
      content: `To Amend Certain Facts About Your New York LLC`,
    },
    {
      type: `paragraph`,
      content: `Your business formation documents state certain facts about your New York business when it was originally formed. Over time, these facts might change — if they do, you need to file a “Articles of Amendment” with the New York Department of State. You can do this yourself or have Incfile complete the filing on your behalf.`,
    },
    {
      type: `iconListColorBox`,
      styles: { marginBottom: `55px` },
      boxColor: color.blue3,
      content: {
        header: `Areas you might want to file a New York Articles of Amendment for include: `,
        list: [`Adding, removing or changing a New York LLC member or manager`, `Changing the business address of your LLC`, `Altering the stated business activities of your New York LLC`],
      },
    },
    {
      type: `button`,
      theme: `secondary56`,
      width: "480px",
      content: {
        text: `Incfile’s New York Articles Of Amendment Service`,
        url: `/manage-your-company/amendment/`,
      },
    },

    //////////////
    {
      type: `heading`,
      size: 3,
      content: `To Get a Certificate of Good Standing for Your New York LLC`,
    },
    {
      type: `paragraph`,
      content: `Some organizations will request that you prove your New York LLC’s compliance with laws and tax requirements. If you need to prove you have met your commitments, you will need a “Certificate of Good Standing” from the New York Department of State.`,
    },
    {
      type: `box-cta`,
      color: color.orange3,
      styles: { fontSize: `25px` },
      bgImage: [BgBoxCGS],
      content: {
        title: `Incfile can obtain a certificate of good standing on your behalf.`,
        button: {
          text: `Incfile’s New York Certificate Of Good Standing Service`,
          url: `/manage-your-company/certificate-of-good-standing/`,
        },
      },
    },
    {
      type: `paragraph`,
      content: `The fees listed above detail all the charges that a standard NY LLC will be required to pay. In some unusual circumstances, there may be other one-off, periodic or ad hoc fees not listed above.`,
    },
    {
      type: `paragraph`,
      content: `Of course, your New York LLC will also probably need to pay self-employment, payroll, federal, state and sales taxes, but we will cover that when we talk about taxes for NY LLCs.`,
    },

    /////////////
    {
      type: `heading`,
      size: 2,
      content: `FAQs About New York LLC Fees`,
    },
    {
      type: `accordion`,
      content: {
        items: [
          {
            question: `What Happens to the State Fees That I Am Charged When Forming My New York LLC?`,
            answer: `We charge you for this fee at cost and then pay the fee to the Department of State on your behalf when forming your New York business.`,
          },
          {
            question: `Do I Need to Pay an Annual Report Fee Every Year?`,
            answer: `Usually, yes. Most states require you file a report for your LLC every year. Some states require filing biennially (every other year), though a handful don’t require annual reports. You can find out more on the <a href="/compliance-filing-requirement/">compliance page for your state.</a>`,
          },
          {
            question: `Who Will I Need to Get Business Licenses and Permits From for My New York LLC?`,
            answer2: [
              {
                type: `paragraph`,
                content: `It depends on various factors including:`,
              },
              {
                type: `list-dot-without-bg`,
                color: color.blue3,
                content: [`The type of business you run`, `Where you are located`, `Governing organizations in your industry`, `Federal, state and local regulations`],
              },
              {
                type: `paragraph`,
                content: `That’s why our <a href="/business-license-research-package/">business license research package</a> is so useful. It explores all of these areas for you and provides a comprehensive overview of exactly what your New York LLC needs to be compliant.`,
              },
            ],
          },
        ],
      },
    },
  ],
};
