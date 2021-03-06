import { color } from "../../../components/styles/colors";

export const agentPageContent = {
  header: {
    title: `Illinois Registered Agents for LLCs`,
    subline: `Every business entity formed in Illinois needs to formally appoint a person or business to act as a Registered Agent.`,
    boxes: [
      {
        title: `Start your LLC today for <span style="color:#FD8550">$0 + State fee.</span>`,
        desc: `Get your first year of Registered Agent Service for free <br>when you incorporate with Incfile.`,
        button: {
          text: `Form Your LLC Now`,
          url: `${process.env.ORDER_URL}/form-order-now.php?entityType=LLC&entityState=IL`,
        },
      },
    ],
  },
  content: [
    {
      type: `paragraph`,
      content: `Your Illinois Registered Agent provides various services to IL LLCs, including the acceptance of formal documents and correspondence from the Illinois Secretary of State.`,
    },
    {
      type: `paragraph`,
      content: `Your LLC must have an Illinois Registered Agent at all times. You can appoint a Registered Agent when you first start your business. You can also replace your existing IL Registered Agent at a later date, provided there is a smooth transition between the old and new Registered Agent service.`,
    },
    {
      type: "video",
      url: "wSsZAvrT-IU",
      thumbnail: "what-is-a-registered-agent-7199",
    },
    {
      type: `heading`,
      size: 2,
      template: 3,
      left: true,
      content: `What the Illinois Secretary of State Says About Registered Agents`,
    },
    {
      type: `paragraph`,
      content: `Here’s some important information from the Illinois Secretary of State on Registered Agents.`,
    },
    {
      type: `iconListColorBox`,
      boxColor: color.orange3,
      content: {
        list: [
          `Every domestic and foreign corporation must, at all times, maintain a registered agent with a registered office within the State of Illinois`,
          `The registered agent can be either a natural person or a domestic or foreign (licensed to transact business in this State) artificial legal entity (Corporation, LLC, LP or LLP)`,
          `The Registered Office must be located at a street address (a P.O. Box alone is not acceptable) within the State of Illinois`,
        ],
      },
    },

    // Rules for agents
    {
      type: `heading`,
      size: 2,
      template: 3,
      left: true,
      content: `Rules for Illinois Registered Agents`,
    },
    {
      type: `paragraph`,
      content: `There are certain rules that you must follow when you’re appointing a Illinois Registered Agent service for your business. They are:`,
    },
    {
      type: `iconListColorBox`,
      boxColor: color.blue3,
      content: {
        list: [
          `If the Registered Agent is a person, they must reside in Illinois`,
          `If the Registered Agent is a business, they must be able to conduct business in Illinois`,
          `The Registered Agent must have a physical street address in Illinois, not a P.O. Box`,
          `The IL Registered Agent must be available in person during normal business hours to sign for any correspondence`,
        ],
      },
    },
    {
      type: `paragraph`,
      styles: { marginTop: `42px` },
      content: `Note that the IL Registered Agent address does not need to be the same as your Illinois LLC business address.`,
    },

    // What a IL Registered Agent Does
    {
      type: `heading`,
      size: 2,
      template: 3,
      left: true,
      content: `What a IL Registered Agent Does`,
    },
    {
      type: `paragraph`,
      content: `What can you expect from your Illinois Registered Agent? Their main function is to accept official documents and correspondence from the IL Secretary of State. This includes:`,
    },
    {
      type: `iconListColorBox`,
      boxColor: color.orange3,
      content: {
        list: [
          `Correspondence from the Illinois Secretary of State`,
          `Service of process notices (e.g., if your IL LLC is sued or required to appear in court)`,
          `Official Illinois state and federal government correspondence and notifications`,
          `Tax forms and requests to complete permits, company filings and reports`,
        ],
      },
    },

    //Incfile Provides a Free Illinois Registered Agent Service for the First Year
    {
      type: `heading`,
      size: 3,
      content: `Incfile Provides a Free Illinois Registered Agent Service for the First Year`,
    },
    {
      type: `paragraph`,
      content: `Incfile provides a complete Illinois Registered Agent service for any LLC that’s incorporated in IL. Even better, if you choose to incorporate your Illinois business through Incfile, your Registered Agent is completely free for the first year and only $119 a year after that. Incfile is authorized to conduct business in Illinois and can legally act as your Registered Agent. Here’s what the Incfile Illinois Registered Agent service provides for your IL LLC.`,
    },
    {
      type: `iconListColorBox`,
      boxColor: color.purple3,
      content: {
        list: [
          `An always-available Illinois Registered Agent who can receive correspondence, documents and legal proceedings on your LLC’s behalf`,
          `A digital dashboard where you can access, store and retrieve any information we’ve received for your Illinois business`,
          `Email notification whenever we receive documents for your Illinois business`,
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

    //Appointing a IL Registered Agent Service for Your Illinois LLC
    {
      type: `heading`,
      size: 2,
      template: 3,
      left: true,
      content: `Appointing a IL Registered Agent Service for Your Illinois LLC`,
    },
    {
      type: `paragraph`,
      content: `You must appoint a Registered Agent when you first incorporate your Illinois LLC, but you can change your Registered Agent after incorporation. Here’s how to go about it.`,
    },
    {
      type: `heading`,
      size: 3,
      template: 4,
      content: `Appoint a Registered Agent When You Create Your Illinois LLC`,
    },
    {
      type: `paragraph`,
      content: `Your business needs to have a Illinois Registered Agent Service as soon as it’s formed. You can achieve this through one of the following methods.`,
    },
    {
      type: `accordionWithCounting`,
      content: [
        {
          count: 1,
          question: `File Certificate of Formation With the Illinois Secretary of State`,
          answer: [
            {
              type: `paragraph`,
              content: `You will need to include details of your Registered Agent in your Certificate of Formation. This is the form that you file with the IL Secretary of State to formally create your business.`,
            },
          ],
        },
        {
          count: 2,
          question: `Incorporate Through Incfile and Get a Free Illinois Registered Agent`,
          answer: [
            {
              type: `paragraph`,
              content: `When you incorporate through us, we complete and file your Certificate of Formation based on the information you’ve provided. Additionally, we give you a free Illinois Registered Agent Service for the first year and we’ll include details of your IL Registered Agent in the form that we file.`,
            },
          ],
        },
      ],
      header: 4
    },
    {
      type: `button`,
      theme: `primary56`,
      width: `380px`,
      content: {
        text: `Incorporate Your business Through Incfile`,
        url: `${process.env.ORDER_URL}/form-order-now.php?entityType=LLC&entityState=IL`,
      },
    },

    // Assign a Different Illinois Registered Agent Service After Incorporation
    {
      type: `heading`,
      size: 3,
      template: 4,
      content: `Assign a Different Illinois Registered Agent Service After Incorporation`,
    },
    {
      type: `paragraph`,
      content: `You can also change your IL Registered Agent service after you’ve formed your LLC. There are a couple of ways to achieve this.`,
    },
    {
      type: `accordionWithCounting`,
      content: [
        {
          count: 1,
          question: `Choose a Registered Agent Service and File Form 401 With the Illinois Secretary of State`,
          answer: [
            {
              type: `paragraph`,
              content: `Once you’ve chosen a new Illinois Registered Agent, you can complete the form available on the <a href='https://www.cyberdriveillinois.com/departments/business_services/agent_change/corpagentchange.html'>Corporation Registered Agent or Address Change</a>” form that’s available on the IL Secretary of State website. Once you’ve filled it out, send it to the Secretary of State so they can update your records. The Illinois SOS will charge a fee of $25 to assign or change a Registered Agent.`,
            },
          ],
        },
        {
          count: 2,
          question: `Sign Up for Incfile’s Illinois Registered Agent Service and We’ll File the Change on Your Behalf`,
          answer: [
            {
              type: `paragraph`,
              content: `When you choose to use our IL Registered Agent service, we take care of all the form filling and filing for you. We’ll collect important information about your business, complete form 401 - Statement of Change of Registered Agent and/or Registered Office on your behalf and send it to the Illinois Secretary of State. We’ll let you know once we officially become your Registered Agent. Note that the Illinois SOS may charge a nominal fee to assign or change a Registered Agent, which will be passed on to you.`,
            },
          ],
        },
      ],
      header: 4
    },
    {
      type: `button`,
      theme: `primary56`,
      width: `450px`,
      content: {
        text: `Order Incfile’s Illinois registered Agent Service`,
        url: `/manage-your-company/registered-agent/`,
      },
    },

    // Illinois Registered Agent Search
    {
      type: `heading`,
      size: 2,
      template: 3,
      left: true,
      content: `Illinois Registered Agent Search`,
    },
    {
      type: `paragraph`,
      content: `In some situations, you might want to know the name of the Registered Agent that represents another Illinois LLC. If you do, you can search the <a href='https://www.cyberdriveillinois.com/departments/business_services/agent_change/corpagentchange.html'>business database</a> of the Illinois Secretary of State, as these will often provide details of a specific business’s Registered Agent.`,
    },
    {
      type: `paragraph`,
      content: `If the IL Registered Agent isn’t available from the searchable business registry, contact the Illinois Secretary of State requesting the information.`,
    },

    // What Happens if You Don’t Have a Registered Agent?
    {
      type: `heading`,
      size: 2,
      template: 3,
      left: true,
      content: `What Happens if You Don’t Have a Registered Agent?`,
    },
    {
      type: `paragraph`,
      content: `What happens if you choose not to assign or provide details of a Registered Agent to the Illinois Secretary of State? There are several possible ramifications, including:`,
    },
    {
      type: `iconListColorBox`,
      boxColor: color.green3,
      content: {
        list: [
          `Getting served or sued and not finding out about it: If your LLC is sued and you don’t know about it, you could lose to a default judgment in your absence.`,
          `Falling out of good standing with the Illinois Secretary of State: If you don’t respond to certain correspondence (like the request for your annual report), certain states may revoke your right to do business.`,
          `Losing your status as a Illinois LLC: A IL Registered Agent “proves” to the state that your business exists. Without it, you could lose your business entity protections and your Illinois LLC may be dissolved.`,
        ],
      },
    },

    // Acting as Your Own Registered Agent for Your IL LLC
    {
      type: `heading`,
      size: 2,
      template: 3,
      left: true,
      content: `Acting as Your Own Registered Agent for Your IL LLC`,
    },
    {
      type: `paragraph`,
      content: `If you have an address in Illinois, you can choose to be the Registered Agent for your LLC. We don’t recommend this approach as there can be some drawbacks:`,
    },
    {
      type: `iconListColorBox`,
      boxColor: color.blue3,
      content: {
        list: [
          `The IL Registered Agent must have a physical street address in Illinois. If you’re forming an LLC outside IL, you will need to use an in-state Registered Agent.`,
          `You always need to have someone on hand during business hours at the Illinois address to sign for important documents.`,
          `The IL Registered Agent’s name and address are part of the public record and available through the Illinois Secretary of State's website. If you would prefer your name and address aren’t published, you might choose a Registered Agent service.`,
          `If you change your Illinois business address or move out of state, you would need to file additional documentation with the IL Secretary of State for the new address if you act as your own Registered Agent. This would not be the case if you use a Registered Agent service, making a move or address change much simpler.`,
        ],
      },
    },

    // Faqs section
    {
      type: `heading`,
      size: 2,
      template: 3,
      left: true,
      content: `FAQs About Illinois Registered Agents`,
    },
    {
      type: `accordion`,
      content: {
        items: [
          {
            question: `Do I Need to Appoint a Illinois Registered Agent?`,
            answer: `Yes. All IL LLCs are required to have a Registered Agent. This is mandated by the Illinois Secretary of State.`,
          },
          {
            question: `When Can I Assign a Illinois Registered Agent Service?`,
            answer: `You must assign a Registered Agent when you incorporate your business through paperwork filed with the IL Secretary of State. You can change your Registered Agent anytime. If you form your business through Incfile, we will file all necessary forms on your behalf.`,
          },
          {
            question: `Can I Be My Own Registered Agent in Illinois?`,
            answer: `Yes, but we don’t recommend it, for the reasons listed above. If you still want to be your own Registered Agent, you just need to fill in the correct forms and pay a fee to the Illinois Secretary of State.`,
          },
          {
            question: `Does My IL Registered Agent Need to Have an Address in Illinois?`,
            answer: `Yes. Additionally, if they are a business providing Registered Agent services, they must be legally able to conduct business in your state.`,
          },
        ],
      },
    },

    // Other resources
    {
      type: `heading`,
      size: 2,
      template: 3,
      left: true,
      content: `Other Useful Resources`,
    },
    {
      type: `paragraph`,
      content: `You might find these resources helpful:`,
    },
    {
      type: `arrow-links`,
      content: [
        {
          text: `The Main Functions of a Illinois Registered Agent`,
          url: `/research-topics/registered-agent-help/what-is-the-main-function-of-the-registered-agent/`,
        },
        {
          text: `Changing Your Illinois Registered Agent`,
          url: `/manage-your-company/change-of-registered-agent/`,
        },
        {
          text: `What a Illinois Registered Agent Does`,
          url: `/research-topics/registered-agent-help/what-does-a-registered-agent-do/`,
        },
      ],
    },
  ],
};
