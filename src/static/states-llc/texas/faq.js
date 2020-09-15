import { color } from '../../../components/styles/colors';

import BgBoxDBAName from '../../../images/icons/states/dba-name-01.png';
import BgBoxTrademark from '../../../images/icons/states/trademark-01.png';
import BgBoxBusinessNameIdea from '../../../images/icons/states/business-name-idea.inline.png';
import BgBoxIncorporationPaperWork from '../../../images/icons/states/incorporation-paperwork-01.png';
import MrsLeftThumUp from '../../../images/icons/states/mrs-bulb-thumb-up-left-color-01.png';
import SCN from '../../../images/search-for-name-7560.png';

export const faqContent = {
    header: {
        title: `Frequently Asked Questions About Texas LLCs`,
        subline: `When you’re starting an LLC in the Lone Star state, you’ll have plenty of questions. We’ve gathered together all of the most frequently asked questions to help you get your Texas LLC up and running. From registering your company in Texas to business licenses and franchise taxes, we’ve got you covered. We’ve answered your questions below and linked extensively to our guides, tools and other services, which make everything fast and easy.`,
    },
    content: [
        {
            type: `heading`,
            size: 3,
            content: `How Do I Decide What the Best Legal Structure Is for My Business?`,
        },
        {
            type: `paragraph`,
            content: `You have a few options when it comes to starting a business in Texas. From a legal perspective, there are <a href="/start-your-company/">three main types</a> of Texas for-profit business entities: LLCs, S Corporations or C Corporations. For most entrepreneurs, we believe an LLC provides the right mix of liability protection and ease of administration.`,
        },
        {
            type: `heading`,
            size: 3,
            content: `What Do I Need to Start a Business in Texas?`,
        },
        {
            type: `paragraph`,
            content: `The bare minimum needed to start a TX LLC is a completed Certificate of Formation, a business name and a fee you pay to the Texas Secretary of State.`,
        },
        {
            type: `iconListColorBox`,
            boxColor: color.blue3,
            content: {
                header: `We recommend taking some other steps before formally starting your LLC:`,
                list: [
                    `<a href="https://www.incfile.com/blog/post/perform-market-research-assess-demand-before-you-start-business/">Research your target market</a> to make sure there’s a demand for the products and services you provide.`,
                    `<a href="https://www.incfile.com/blog/post/keys-successful-business-plan/">Create a comprehensive business plan</a> that defines the most important aspects of your Texas business.`,
                    `<a href="https://www.incfile.com/research-topics/llc-info/the-llc-operating-agreement/">Write an Operating Agreement</a> that covers how you will run your LLC.`,
                ]
            },
        },
        {
            type: `paragraph`,
            styles: {marginTop: `42px`},
            content: `<a href="/after-forming-llc/">After you’ve created your Texas LLC</a>, you will also need to review your business license requirements, understand ongoing filing needs, set up a separate business bank account and get an accountant.`,
        },

        // How Do I Register a Company in Texas?
        {
            type: `heading`,
            size: 3,
            content: `How Do I Register a Company in Texas?`,
        },
        {
            type: `paragraph`,
            content: `You register a business by completing and filing a Certificate of Formation (Form 205) with the Texas Secretary of State. You will need to gather information about your business, fill out the form and send it to the Secretary of State with your filing fee. This will formally create your LLC in Texas.`,
        },
        {
            type: `paragraph`,
            content: `You can file your Certificate of Formation on the Secretary of State website or mail it in. Alternatively, Incfile can <a href="/texas-llc/">guide you through every step of the process</a> by getting details from you and <a href="https://www.incfile.com/form-order-now.php?entityType=LLC&entityState=TX">filing the form</a> on your behalf — for free! There’s no additional charge for our basic LLC filing service, so all you need to do is pay the Texas state filing fee.`,
        },
        {
            type: `box-cta`, 
            color: color.orange3,
            styles: { fontSize: `25px` },
            bgImage: [MrsLeftThumUp],
            content: {
                title: `Incorporate through Incfile for $0 + the Texas state fee — and get a free Registered Agent for a year.`,
                button: {
                    text: `Incorporate Your Texas LLC Now`,
                    url: `/form-order-now.php?entityType=LLC&entityState=TX`
                }
            }
        },

        {
            type: `heading`,
            size: 3,
            content: `How Much Does It Cost to Form a Texas LLC?`,
        },
        {
            type: `paragraph`,
            content: `At the time of writing the fee charged by the Texas Secretary of State is $300. You can always check the latest Texas filing fees here. You can also pay an additional $50 for expedited filing through Incfile, which will create your LLC faster. Some LLC filing services do charge you extra to prepare and submit your filing documents, but at Incfile, we do this for free — so you only pay the state fee.`,
        },

        {
            type: `heading`,
            size: 3,
            content: `How Long Does It Take to Form an LLC in Texas?`,
        },
        {
            type: `paragraph`,
            content: `Once you’ve gathered together all of your information and filed your Certificate of Formation (or had Incfile do it for you), it can take up to a week for the Texas Secretary of State to legally create your LLC. If you pay an additional $50 expedited fee, your LLC can be formed in as few as two days.`,
        },

        {
            type: `heading`,
            size: 3,
            content: `How Do I Perform a Texas Business Search?`,
        },
        {
            type: `paragraph`,
            content: `Your Texas LLC name needs to be unique, so you’ll need to check if it’s already in use by another business. You can do that by searching the Texas Secretary of State website, or by using our fast and simple Business Name Search tool.`,
        },
        {
            type: `box-cta`, 
            color: color.green3,
            styles: { fontSize: `25px` },
            bgImage: [SCN],
            content: {
                title: `Is your business name available in your state?`,
                subtitle: `Find out using Incfile’s Business Name Search Tool.`,
                button: {
                    text: `Free Busineee name Search`,
                    url: `/`
                }
            }
        },
    ],
};