import { color } from '../../../components/styles/colors';

import BgBoxDBAName from '../../../images/icons/states/dba-name-01.png';

export const agentPageContent = {
    header: {
        title: `Georgia Registered Agents for LLCs`,
        subline: `Every business entity formed in Georgia needs to formally appoint a person or business to act as an official agent. In Georgia, this is called a “Registered Agent.”`,
        boxes: [
            {
                title: `Start your LLC today for <span style="color:#FD8550">$0 + State fee.</span>`,
                desc: `Get your first year of Registered Agent Service for free <br>when you incorporate with Incfile.`,
                button: {
                text: `Form Your LLC Now`,
                url: '/'
                },
            },
        ]
    },
    content: [
        {
            type: `paragraph`,
            content: `Your Georgia Registered Agent provides various services to GA LLCs, including the acceptance of formal documents and correspondence from the Georgia Secretary of State.`
        },
        {
            type: `paragraph`,
            content: `Your LLC must have a Georgia Registered Agent at all times. You can appoint a Registered Agent when you first start your business, and you can also replace your existing GA Registered Agent at a later date, provided there is a smooth transition between the old and new Registered Agent service.`
        },
        {
            type: `paragraph`,
            content: `<iframe width="720" height="350" src="https://www.youtube.com/watch?v=wSsZAvrT-IU&feature=emb_logo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen> </iframe>`
        },
        {
            type: `heading`,
            size: 2,
            content: `What the Georgia Secretary of State Says About Registered Agents`
        },
        {
            type: `paragraph`,
            content: `Here’s some important information from the Georgia Secretary of State on Registered Agent services:`
        },
        {
            type: `paragraph`,
            content: `<ul>
                      <li>The registered agent is the ‘mailbox’ for the corporation. The registered agent is the person or entity located in this state designated by the entity to receive any service of process, documents or other official communication on its behalf.</li>
                      <li>The registered agent may or may not be an owner, shareholder or officer of the entity. Many entities use their attorney or a professional corporate service company for this service.</li>
                      <li>The registered agent’s address must be a street address in Georgia, and the agent must be located at that address. A post office box or “mail drop” may not be used as the registered agent address.</li>
                      </ul>`
        },

        // Rules for agents
        {
            type: `heading`,
            size: 3,
            content: `Rules for Georgia Registered Agents`,
        },
        {
            type: `paragraph`,
            content: `You must follow certain rules when you’re appointing a Georgia Registered Agent for your business.`
        },
        {
            type: `iconListColorBox`,
            boxColor: color.blue3,
            content: {
                header: `They are:`,
                list: [
                    `If the Registered Agent is a person, they must reside in Georgia`,
                    `If the Registered Agent is a business, they must be able to conduct business in Georgia`,
                    `The Registered Agent must have a physical street address in Georgia, not a P.O. Box`,
                    `The GA Registered Agent must be available in person during normal business hours to sign for any correspondence`,
                ],
            }
        },
        {
            type: `paragraph`,
            styles: {marginTop: `42px`},
            content: `Note that the GA Registered Agent address does not need to be the same as your Georgia LLC business address.`
        },

        // What a TX Registered Agent Does
        {
            type: `heading`,
            size: 2,
            content: `The Purpose of a Georgia Registered Agent`,
        },
        {
            type: `paragraph`,
            content: `What can you expect from your Georgia Registered Agent? Their main function is to accept official documents and correspondence from the GA Secretary of State.`
        },
        {
            type: `iconListColorBox`,
            boxColor: color.orange3,
            content: {
                header: `This includes:`,
                list: [
                   `Correspondence from the Georgia Secretary of State`,
                    `Service of process notices (e.g., if your GA LLC is sued or required to appear in court)`,
                    `Official Georgia state and federal government correspondence and notifications`,
                    `Tax forms and requests to complete permits, company filings and reports`,
                ],
            }
        },

        //Incfile Provides a Free Texas Registered Agent Service for the First Year
        {
            type: `heading`,
            size: 3,
            content: `Incfile Provides a Free Georgia Registered Agent Service for the First Year`,
        },
        {
            type: `paragraph`,
            content: `We are authorized to conduct business in Georgia and can legally act as your Registered Agent.`
        },
        {
            type: `iconListColorBox`,
            boxColor: color.purple3,
            content: {
                header: `Here’s what you get with Incfile’s Registered Agent service:`,
                list: [
                    `An always-available Georgia Registered Agent who can receive correspondence, documents and legal proceedings on your LLC’s behalf`,
                    `A digital dashboard where you can access, store and retrieve any information we’ve received for your Georgia business`,
                    `Email notification whenever we receive documents for your Georgia business`,
                    `Automatic forwarding of all legal correspondence, documentation and information directly to you`,
                    `If you incorporate with us, your Registered Agent is free for the first year ($119 a year after)`,
                ],
            }
        },
        {
            type: `button`,
            theme: `primary56`,
            width: `350px`,
            content: {
                text: `Incfile's Registered Agent Service`,
                url: `/manage-your-company/registered-agent/`
            }
        },

        //Appointing a TX Registered Agent Service for Your Texas LLC
        {
            type: `heading`,
            size: 3,
            content: `Appointing a Registered Agent in Georgia`,
        },
        {
            type: `paragraph`,
            content: `You appoint a Registered Agent when you first incorporate your Georgia LLC and can change Registered Agents at any point after that. Here’s how to go about it.`
        },
        {
            type: `heading`,
            size: 4,
            content: `Appoint a Registered Agent When You Create Your Georgia LLC`,
        },
        {
            type: `paragraph`,
            content: `Your business needs to have a Georgia Registered Agent as soon as it’s formed. You can achieve this through one of the following methods.`
        },
        {
            type: `accordionWithCounting`,
            content: [
                {
                    count: 1,
                    question: `File Articles of Organization with the Georgia Secretary of State`,
                    answer: [
                        {
                            type: `paragraph`,
                            content: `You will need to include details of your Registered Agent in your Articles of Organization. This is the form that you file with the GA Secretary of State to formally create your business.`
                        }
                    ]
                },
                {
                    count: 2,
                    question: `Incorporate Through Incfile and Get a Free Georgia Registered Agent`,
                    answer: [
                        {
                            type: `paragraph`,
                            content: `When you incorporate through us, we complete and file your Certificate of Formation based on the information you’ve provided. Additionally, we give you a free Georgia Registered Agent Service for the first year and we’ll include details of your GA Registered Agent in the form that we file. `
                        }
                    ]
                },
            ],
        },
        {
            type: `button`,
            theme: `primary56`,
            width: `380px`,
            content: {
                text: `Incorporate Your business Through Incfile`,
                url: `/form-order-now.php?entityType=LLC&entityState=GA`
            }
        },

        // Assign a Different Texas Registered Agent Service After Incorporation
        {
            type: `heading`,
            size: 4,
            content: `Assign a Different Georgia Registered Agent After Incorporation`,
        },
        {
            type: `paragraph`,
            content: `You can also change your GA Registered Agent service after you’ve formed your LLC. There are a couple of ways to achieve this.`
        },
        {
            type: `accordionWithCounting`,
            content: [
                {
                    count: 1,
                    question: `Choose a Registered Agent and File a Form with the Georgia Secretary of State`,
                    answer: [
                        {
                            type: `paragraph`,
                            content: `Once you’ve chosen a new Georgia Registered Agent, you can note the change on your Annual Registration through the GA Secretary of State website. If you’ve already filed your Annual Registration, you’ll need to file Form CD 920, the Amended Annual Registration. Both forms are available to fill out online via the Secretary of State website, and both include a small fee.`
                        }
                    ]
                },
                {
                    count: 2,
                    question: `Sign Up for Incfile’s Georgia Registered Agent Service and We’ll File the Change on Your Behalf`,
                    answer: [
                        {
                            type: `paragraph`,
                            content: `When you choose to use our GA Registered Agent service, we take care of all the form filling and filing for you. We’ll collect important information about your business, complete the required forms on your behalf and send them to the Georgia Secretary of State. We’ll let you know once we officially become your Registered Agent. Note that any fees charged by the Georgia SOS will be passed on to you.`
                        }
                    ]
                },
            ],
        },
        {
            type: `button`,
            theme: `primary56`,
            width: `450px`,
            content: {
                text: `Order Incfile’s Georgia registered Agent Service`,
                url: `/`
            }
        },

        // Texas Registered Agent Search
        {
            type: `heading`,
            size: 3,
            content: `Georgia Registered Agent Search`,
        },
        {
            type: `paragraph`,
            content: `In some situations, you might want to know the name of the Registered Agent that represents another Georgia LLC. If you do, you can search the business database of the Georgia Secretary of State, which will often provide details of a specific business’s Registered Agent.`
        },
        {
            type: `paragraph`,
            content: `If the Registered Agent isn’t available from the searchable business registry, contact the Georgia Secretary of State requesting the information.`
        },

        // What Happens if You Don’t Have a Registered Agent?
        {
            type: `heading`,
            size: 3,
            content: `What Happens if You Don’t Have a Registered Agent?`,
        },
        {
            type: `paragraph`,
            content: `What happens if you choose not to assign or provide details of a Registered Agent to the Georgia Secretary of State?`
        },
        {
            type: `iconListColorBox`,
            boxColor: color.green3,
            content: {
                header: `There are several possible ramifications, including:`,
                list: [
                    `<b>Getting served or sued and not finding out about it:</b>If your LLC is sued and you don’t know about it, you could lose to a default judgment in your absence.`,
                    `<b>Falling out of good standing with the Georgia Secretary of State:</b> If you don’t respond to certain correspondence (like the request for your annual report), certain states may revoke your right to do business.`,
                    `<b>Losing your status as a Georgia LLC:</b> A GA Registered Agent “proves” to the state that your business exists. Without it, you could lose your business entity protections and your Georgia LLC may be dissolved.`,
                ],
            }
        },

        // Acting as Your Own Registered Agent for Your TX LLC
        {
            type: `heading`,
            size: 3,
            content: `Acting as Your Own Registered Agent for Your GA LLC`,
        },
        {
            type: `paragraph`,
            content: `If you have an address in Georgia, you can choose to be the Registered Agent for your LLC. We don’t recommend this approach as there can be some drawbacks:`
        },
        {
            type: `iconListColorBox`,
            boxColor: color.blue3,
            content: {
                header: ``,
                list: [
                    `The GA Registered Agent must have a physical street address in Georgia. If you’re forming an LLC outside GA, you will need to use an in-state Registered Agent.`,
                    `You always need to have someone on hand during business hours at the Georgia address to sign for important documents.`,
                    `The GA Registered Agent’s name and address are part of the public record and available through the Georgia Secretary of State's website. If you would prefer your name and address aren’t published, you might choose a Registered Agent service.`,
                    `If you change your Georgia business address or move out of state, you would need to file additional documentation with the GA Secretary of State for the new address if you act as your own Registered Agent. This would not be the case if you use a Registered Agent service, making a move or address change much simpler.`
                ],
            }
        },

        // Faqs section
        {
            type: `heading`,
            size: 3,
            content: `FAQs About Georgia Registered Agents`,
        },
        {
            type: `accordion`,
            content: {
                items: [
                    {
                        question: `Do I Need to Appoint a Georgia Registered Agent?`,
                        answer: `Yes. All GA LLCs are required to have a Registered Agent. This is mandated by the Georgia Secretary of State.`,
                    },
                    {
                        question: `When Can I Assign a Georgia Registered Agent Service?`,
                        answer: `You need to assign a Registered Agent when you incorporate your Georgia business through paperwork filed with the Secretary of State. You can change your agent afterward by filing the correct form. If you form your business through Incfile, we will file all necessary forms on your behalf.`,
                    },
                    {
                        question: `Can I Be My Own Registered Agent in Georgia?`,
                        answer: `Yes, but we don’t recommend it, for the reasons listed above. If you still want to be your own Registered Agent, you just need to fill in the correct forms and pay a fee to the Georgia Secretary of State.`,
                    },
                    {
                        question: `Does My GA Registered Agent Need to Have an Address in Georgia?`,
                        answer: `Yes. Additionally, if they are a business providing Registered Agent services, they must be legally able to conduct business in your state.`,
                    },
                ]
            }
        },

        // Other resources
        {
            type: `heading`,
            size: 3,
            content: `Other Useful Resources`,
        },
        {
            type: `paragraph`,
            content: `You might find these resources helpful:`
        },
        {
            type: `arrow-links`,
            content: [
                {
                    text: `The Main Functions of a Georgia Registered Agent`,
                    url: `https://www.incfile.com/research-topics/registered-agent-help/what-is-the-main-function-of-the-registered-agent/`,
                },
                {
                    text: `Changing Your Georgia Registered Agent`,
                    url: `https://www.incfile.com/manage-your-company/change-of-registered-agent/`,
                },
                {
                    text: `What a Georgia Registered Agent Does`,
                    url: `https://www.incfile.com/research-topics/registered-agent-help/what-does-a-registered-agent-do/`,
                },
            ]
        }
    ]
};