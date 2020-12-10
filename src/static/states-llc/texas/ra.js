import {
    color
} from "../../../components/styles/colors";

export const agentPageContent = {
    header: {
        title: `Texas Registered Agents for LLCs`,
        subline: `Every business entity formed in Texas needs to formally appoint a person or business to act as a Registered Agent.`,
        boxes: [{
            title: `Start your LLC today for <span style="color:#FD8550">$0 + State fee.</span>`,
            desc: `Get your first year of Registered Agent Service for free <br>when you incorporate with Incfile.`,
            button: {
                text: `Form Your LLC Now`,
                url: `${process.env.ORDER_URL}/form-order-now.php?entityType=LLC&entityState=TX`,
            },
        }, ],
    },
    content: [{
            type: `paragraph`,
            content: `Your Texas Registered Agent provides various services to TX LLCs, including the acceptance of formal documents and correspondence from the Texas Secretary of State.`,
        },
        {
            type: `paragraph`,
            content: `Your LLC must have a Texas Registered Agent at all times. You can appoint a Registered Agent when you first start your business. You can also replace your existing TX Registered Agent at a later date, provided there is a smooth transition between the old and new Registered Agent service.`,
        },
        {
            type: `video`,
            videoID: `wSsZAvrT-IU`,
            videoThumb: `what-is-a-registered-agent-7199`
        },
        {
            type: `heading`,
            size: 3,
            content: `Information from the SOS on TX Registered Agent Services`,
        },
        {
            type: `paragraph`,
            content: `Here’s some important information from the Texas Secretary of State on TX Registered Agent services:`,
        },
        {
            type: `paragraph`,
            content: `“The Texas Business Organizations Code (“BOC”) requires every domestic or foreign filing entity to maintain a registered agent and office in Texas. The BOC also permits the filing of an appointment of agent for service of process by an unincorporated nonprofit association. Additionally, the Texas Finance Code permits a Texas financial institution to appoint an agent for service of process.`,
        },
        {
            type: `paragraph`,
            content: `An entity’s registered agent is an agent of the entity on whom may be served any process, notice or demand required or permitted by law to be served on the entity.`,
        },
        {
            type: `paragraph`,
            content: `An entity’s registered office must be a physical address in Texas where the registered agent can be served with process during business hours. The registered office is also where the Office of the Secretary of State will mail correspondence. A registered office is the business office address of the registered agent and may be the same as the entity’s place of business. It cannot, however, be a post office box that is part of a commercial mail or message service unless that commercial enterprise is the registered agent.”`,
        },

        // Rules for agents
        {
            type: `heading`,
            size: 3,
            content: `Rules for Texas Registered Agents`,
        },
        {
            type: `paragraph`,
            content: `There are certain rules that you must follow when you’re appointing a Texas Registered Agent service for your business. They are:`,
        },
        {
            type: `iconListColorBox`,
            boxColor: color.blue3,
            content: {
                list: [
                    `If the Registered Agent is a person, they must reside in Texas`,
                    `If the Registered Agent is a business, they must be able to conduct business in Texas`,
                    `The Registered Agent must have a physical street address in Texas, not a P.O. Box`,
                    `The TX Registered Agent must be available in person during normal business hours to sign for any correspondence`,
                ],
            },
        },
        {
            type: `paragraph`,
            styles: {
                marginTop: `42px`
            },
            content: `Note that the TX Registered Agent address does not need to be the same as your Texas LLC business address.`,
        },

        // What a TX Registered Agent Does
        {
            type: `heading`,
            size: 2,
            content: `What a TX Registered Agent Does`,
        },
        {
            type: `paragraph`,
            content: `What can you expect from your Texas Registered Agent? Their main function is to accept official documents and correspondence from the TX Secretary of State. This includes:`,
        },
        {
            type: `iconListColorBox`,
            boxColor: color.orange3,
            content: {
                list: [
                    `Correspondence from the Texas Secretary of State`,
                    `Service of process notices (e.g., if your TX LLC is sued or required to appear in court)`,
                    `Official Texas state and federal government correspondence and notifications`,
                    `Tax forms and requests to complete permits, company filings and reports`,
                ],
            },
        },

        //Incfile Provides a Free Texas Registered Agent Service for the First Year
        {
            type: `heading`,
            size: 3,
            content: `Incfile Provides a Free Texas Registered Agent Service for the First Year`,
        },
        {
            type: `paragraph`,
            content: `Incfile provides a complete Texas Registered Agent service for any LLC that’s incorporated in TX. Even better, if you choose to incorporate your Texas business through Incfile, your Registered Agent is completely free for the first year and only $119 a year after that. Incfile is authorized to conduct business in Texas and can legally act as your Registered Agent. Here’s what the Incfile Texas Registered Agent service provides for your TX LLC.`,
        },
        {
            type: `iconListColorBox`,
            boxColor: color.purple3,
            content: {
                list: [
                    `An always-available Texas Registered Agent who can receive correspondence, documents and legal proceedings on your LLC’s behalf`,
                    `A digital dashboard where you can access, store and retrieve any information we’ve received for your Texas business`,
                    `Email notification whenever we receive documents for your Texas business`,
                    `Automatic forwarding of all legal correspondence, documentation and information directly to you`,
                ],
            },
        },
        {
            type: `button`,
            theme: `primary56`,
            width: `350px`,
            content: {
                text: `Incfile's Registered Agent Service`,
                url: `/manage-your-company/registered-agent/`,
            },
        },

        //Appointing a TX Registered Agent Service for Your Texas LLC
        {
            type: `heading`,
            size: 3,
            content: `Appointing a TX Registered Agent Service for Your Texas LLC`,
        },
        {
            type: `paragraph`,
            content: `You must appoint a Registered Agent when you first incorporate your Texas LLC, but you can change your Registered Agent after incorporation. Here’s how to go about it.`,
        },
        {
            type: `heading`,
            size: 4,
            content: `Assign Your Texas Registered Agent When You Form Your TX LLC`,
        },
        {
            type: `paragraph`,
            content: `Your business needs to have a Texas Registered Agent Service as soon as it’s formed. You can achieve this through one of the following methods.`,
        },
        {
            type: `accordionWithCounting`,
            content: [{
                    count: 1,
                    question: `File Certificate of Formation With the Texas Secretary of State`,
                    answer: [{
                        type: `paragraph`,
                        content: `You will need to include details of your Registered Agent in your Certificate of Formation. This is the form that you file with the TX Secretary of State to formally create your business.`,
                    }, ],
                },
                {
                    count: 2,
                    question: `Incorporate Through Incfile and Get a Free Texas Registered Agent`,
                    answer: [{
                        type: `paragraph`,
                        content: `When you incorporate through us, we complete and file your Certificate of Formation based on the information you’ve provided. Additionally, we give you a free Texas Registered Agent Service for the first year and we’ll include details of your TX Registered Agent in the form that we file.`,
                    }, ],
                },
            ],
        },
        {
            type: `button`,
            theme: `primary56`,
            width: `380px`,
            content: {
                text: `Incorporate Your business Through Incfile`,
                url: `/`,
            },
        },

        // Assign a Different Texas Registered Agent Service After Incorporation
        {
            type: `heading`,
            size: 4,
            content: `Assign a Different Texas Registered Agent Service After Incorporation`,
        },
        {
            type: `paragraph`,
            content: `You can also change your TX Registered Agent service after you’ve formed your LLC. There are a couple of ways to achieve this.`,
        },
        {
            type: `accordionWithCounting`,
            content: [{
                    count: 1,
                    question: `Choose a Registered Agent Service and File Form 401 With the Texas Secretary of State`,
                    answer: [{
                        type: `paragraph`,
                        content: `Once you’ve chosen a new Texas Registered Agent, you can complete form 401 - Statement of Change of Registered Agent and/or Registered Office, which is available on the TX Secretary of State website. Once you’ve filled it out, send it to the Secretary of State so they can update your records. The Texas SOS may charge a nominal fee to assign or change a Registered Agent.`,
                    }, ],
                },
                {
                    count: 2,
                    question: `Sign Up for Incfile’s Texas Registered Agent Service and We’ll File the Change on Your Behalf`,
                    answer: [{
                        type: `paragraph`,
                        content: `When you choose to use our TX Registered Agent service, we take care of all the form filling and filing for you. We’ll collect important information about your business, complete form 401 - Statement of Change of Registered Agent and/or Registered Office on your behalf and send it to the Texas Secretary of State. We’ll let you know once we officially become your Registered Agent. Note that the Texas SOS may charge a nominal fee to assign or change a Registered Agent, which will be passed on to you.`,
                    }, ],
                },
            ],
        },
        {
            type: `button`,
            theme: `primary56`,
            width: `450px`,
            content: {
                text: `Order Incfile’s Texas registered Agent Service`,
                url: `/`,
            },
        },

        // Texas Registered Agent Search
        {
            type: `heading`,
            size: 3,
            content: `Texas Registered Agent Search`,
        },
        {
            type: `paragraph`,
            content: `In some situations, you might want to know the name of the Registered Agent that represents another Texas LLC. If you do, you can search the business database of the Texas Secretary of State, as these will often provide details of a specific business’s Registered Agent.`,
        },
        {
            type: `paragraph`,
            content: `If the TX Registered Agent isn’t available from the searchable business registry, contact the Texas Secretary of State requesting the information.`,
        },

        // What Happens if You Don’t Have a Registered Agent?
        {
            type: `heading`,
            size: 3,
            content: `What Happens if You Don’t Have a Registered Agent?`,
        },
        {
            type: `paragraph`,
            content: `What happens if you choose not to assign or provide details of a Registered Agent to the Texas Secretary of State? There are several possible ramifications, including:`,
        },
        {
            type: `iconListColorBox`,
            boxColor: color.green3,
            content: {
                list: [
                    `Getting served or sued and not finding out about it: If your LLC is sued and you don’t know about it, you could lose to a default judgment in your absence.`,
                    `Falling out of good standing with the Texas Secretary of State: If you don’t respond to certain correspondence (like the request for your annual report), certain states may revoke your right to do business.`,
                    `Losing your status as a Texas LLC: A TX Registered Agent “proves” to the state that your business exists. Without it, you could lose your business entity protections and your Texas LLC may be dissolved.`,
                ],
            },
        },

        // Acting as Your Own Registered Agent for Your TX LLC
        {
            type: `heading`,
            size: 3,
            content: `Acting as Your Own Registered Agent for Your TX LLC`,
        },
        {
            type: `paragraph`,
            content: `If you have an address in Texas, you can choose to be the Registered Agent for your LLC. We don’t recommend this approach as there can be some drawbacks:`,
        },
        {
            type: `iconListColorBox`,
            boxColor: color.blue3,
            content: {
                list: [
                    `The TX Registered Agent must have a physical street address in Texas. If you’re forming an LLC outside TX, you will need to use an in-state Registered Agent.`,
                    `You always need to have someone on hand during business hours at the Texas address to sign for important documents.`,
                    `The TX Registered Agent’s name and address are part of the public record and available through the Texas Secretary of State's website. If you would prefer your name and address aren’t published, you might choose a Registered Agent service.`,
                    `If you change your Texas business address or move out of state, you would need to file additional documentation with the TX Secretary of State for the new address if you act as your own Registered Agent. This would not be the case if you use a Registered Agent service, making a move or address change much simpler.`,
                ],
            },
        },

        // Faqs section
        {
            type: `heading`,
            size: 3,
            content: `FAQs About Texas Registered Agents`,
        },
        {
            type: `accordion`,
            content: {
                items: [{
                        question: `Do I Need to Appoint a Texas Registered Agent?`,
                        answer: `Yes. All TX LLCs are required to have a Registered Agent. This is mandated by the Texas Secretary of State.`,
                    },
                    {
                        question: `When Can I Assign a Texas Registered Agent Service?`,
                        answer: `You must assign a Registered Agent when you incorporate your business through paperwork filed with the TX Secretary of State. You can change your Registered Agent anytime. If you form your business through Incfile, we will file all necessary forms on your behalf.`,
                    },
                    {
                        question: `Can I Be My Own Registered Agent in Texas?`,
                        answer: `Yes, but we don’t recommend it, for the reasons listed above. If you still want to be your own Registered Agent, you just need to fill in the correct forms and pay a fee to the Texas Secretary of State.`,
                    },
                    {
                        question: `Does My TX Registered Agent Need to Have an Address in Texas?`,
                        answer: `Yes. Additionally, if they are a business providing Registered Agent services, they must be legally able to conduct business in your state.`,
                    },
                ],
            },
        },

        // Other resources
        {
            type: `heading`,
            size: 3,
            content: `Other Useful Resources`,
        },
        {
            type: `paragraph`,
            content: `You might find these resources helpful:`,
        },
        {
            type: `arrow-links`,
            content: [{
                    text: `The Main Functions of a Texas Registered Agent`,
                    url: `/registered-agent-help/what-is-the-main-function-of-the-registered-agent/`,
                },
                {
                    text: `Changing Your Texas Registered Agent`,
                    url: `/manage-your-company/change-of-registered-agent/`,
                },
                {
                    text: `What a Texas Registered Agent Does`,
                    url: `/research-topics/registered-agent-help/what-does-a-registered-agent-do/`,
                },
            ],
        },
    ],
};