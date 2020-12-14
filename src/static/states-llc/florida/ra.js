import { color } from "../../../components/styles/colors";

const ORDER_URL = `${process.env.ORDER_URL}/form-order-now.php?entityType=LLC&entityState=FL`;

export const agentPageContent = {
  header: {
    title: `Florida Registered Agents for LLCs`,
    subline: `Every business entity formed in Florida needs to formally appoint a person or business to act as a Registered Agent.`,
    boxes: [
      {
        title: `Get your first year of Registered Agent Service for free when you incorporate with Incfile.`,
        desc: `<span style="color:#FD8550">Start your LLC today for $0 + State fee.</span>`,
        button: {
          text: `Form Your LLC Now`,
          url: ORDER_URL,
        },
      },
    ],
  },
  content: [
    {
      type: `paragraph`,
      content: `Your LLC must assign a Florida Registered Agent. This is a formally recognized person or business who can receive business correspondence and other documents from the Florida Department of State. Assigning a Registered Agent is a legal requirement, and your LLC must have a Registered Agent at all times.`,
    },
    {
      type: `paragraph`,
      content: `You should appoint a Registered Agent when you first start your Florida business, but you can always change your Registered Agent at a later date, provided there is a smooth transition between the old and new Registered Agent service.`,
    },

    // Rules for agents
    {
      type: `heading`,
      size: 2,
      template: 3,
      left: true,
      content: `Rules for Florida Registered Agents`,
    },
    {
      type: `paragraph`,
      content: `There are certain rules that you must follow when you’re appointing a Florida Registered Agent service for your business. They are:`,
    },
    {
      type: `iconListColorBox`,
      boxColor: color.blue3,
      content: {
        list: [
          `If the Registered Agent is a person, they must reside in Florida`,
          `If the Registered Agent is a business, they must be able to conduct business in Florida`,
          `The Registered Agent must have a physical street address in Florida, not a P.O. Box`,
          `The FL Registered Agent must be available in person during normal business hours to sign for any correspondence`,
        ],
      },
    },
    {
      type: `paragraph`,
      styles: { marginTop: `42px` },
      content: `Note that the FL Registered Agent address does not need to be the same as your Florida LLC business address.`,
    },

    // What a TX Registered Agent Does
    {
      type: `heading`,
      size: 2,
      template: 3,
      left: true,
      content: `What a FL Registered Agent Does`,
    },
    {
      type: `paragraph`,
      content: `Your Registered Agent carries out several valuable services for your business. They accept official communications and documents from the FL Department of State on your behalf. This includes:`,
    },
    {
      type: `iconListColorBox`,
      boxColor: color.orange3,
      content: {
        list: [
          `Correspondence from the Florida Department of State, such as a notice to file reports and other forms`,
          `Service of process documents (for example, if your Florida LLC has legal proceedings issued against it)`,
          `Official Florida and federal government documents, form filings and requests for information (including taxes, permits and company filings)`,
        ],
      },
    },

    //Incfile Provides a Free Texas Registered Agent Service for the First Year
    {
      type: `heading`,
      size: 3,
      content: `Incfile Provides a Free Florida Registered Agent Service for the First Year`,
    },
    {
      type: `paragraph`,
      content: `If you have an LLC that’s incorporated in Florida and you need a Registered Agent, we can help. Incfile provides a complete Registered Agent service for any Florida business. If you form your business through Incfile, we’ll act as your Registered Agent free for your first year (normally a $119 annual cost).`,
    },
    {
      type: `paragraph`,
      content: `We are authorized to conduct business in Florida and can legally act as your Registered Agent. Here’s what you need to know about Incfile’s Registered Agent service. Incfile is authorized to conduct business in Texas and can legally act as your Registered Agent. Here’s what the Incfile Texas Registered Agent service provides for your FL LLC.`,
    },
    {
      type: `iconListColorBox`,
      boxColor: color.purple3,
      content: {
        list: [
          `The Registered Agent will always be available to accept documents and letters on your behalf.`,
          `We automatically notify you whenever we receive correspondence for your business from the Florida Department of State or anyone else.`,
          `We scan your correspondence and upload it to a dashboard, so you can review it when convenient.`,
          `We forward all correspondence to an address you choose.`,
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
      size: 2,
      template: 3,
      left: true,
      content: `Appointing a FL Registered Agent Service for Your Florida LLC`,
    },
    {
      type: `paragraph`,
      content: `You appoint a Registered Agent when you first incorporate your Florida LLC and can change Registered Agents at any point after that. Here’s how to go about it.`,
    },
    {
      type: `heading`,
      size: 3,
      template: 4,
      content: `Appoint a Registered Agent When You Create Your Florida LLC`,
    },
    {
      type: `paragraph`,
      content: `Your business needs to have a Florida Registered Agent as soon as it’s formed. You can achieve this through one of the following methods.`,
    },
    {
      type: `accordionWithCounting`,
      header: 4,
      content: [
        {
          count: 1,
          question: `File Articles of Organization with the Florida Department of State`,
          answer: [
            {
              type: `paragraph`,
              content: `You will need to include details of your Registered Agent in your Articles of Organization. This is the form that you file with the FL Department of State/Division of Corporations to formally create your business.`,
            },
          ],
        },
        {
          count: 2,
          question: `Incorporate Through Incfile and Get a Free Florida Registered Agent`,
          answer: [
            {
              type: `paragraph`,
              content: `When you incorporate through us, we complete and file your Certificate of Formation based on the information you’ve provided. Additionally, we give you a free Florida Registered Agent Service for the first year and we’ll include details of your FL Registered Agent in the form that we file.`,
            },
          ],
        },
      ],
    },
    {
      type: `button`,
      theme: `primary56`,
      width: `380px`,
      content: {
        text: `Incorporate Your business Through Incfile`,
        url: ORDER_URL,
      },
    },

    // Assign a Different Texas Registered Agent Service After Incorporation
    {
      type: `heading`,
      size: 3,
      template: 4,
      content: `Assign a Different Florida Registered Agent Service After Incorporation`,
    },
    {
      type: `paragraph`,
      content: `You can also change your FL Registered Agent service after you’ve formed your LLC. There are a couple of ways to achieve this.`,
    },
    {
      type: `accordionWithCounting`,
      header: 4,
      content: [
        {
          count: 1,
          question: `Choose a Registered Agent and File a Form with the Florida Division of Corporations`,
          answer: [
            {
              type: `paragraph`,
              content: `Once you’ve chosen a new Florida Registered Agent, you can complete the form available on the
                                <a href="/limited-liability-company/">FL Department of State website</a>
                                called a “Statement of Registered Agent/Registered Office Change.” Once you’ve filled it out, send it to the Division of Corporations at the address on the form so they can update your records. The Florida DOS charges a $25 filing fee to assign or change a Registered Agent.`,
            },
          ],
        },
        {
          count: 2,
          question: `Sign Up for Incfile’s Florida Registered Agent Service and We’ll File the Change on Your Behalf`,
          answer: [
            {
              type: `paragraph`,
              content: `When you choose to use our FL Registered Agent service, we take care of all the form filling and filing for you. We’ll collect important information about your business, complete the required forms on your behalf and send it to the Florida Division of Corporations. We’ll let you know once we officially become your Registered Agent. Note that the Florida DOS charges a $25 filing fee to assign or change a Registered Agent.`,
            },
          ],
        },
      ],
    },
    {
      type: `button`,
      theme: `primary56`,
      width: `450px`,
      content: {
        text: `Order Incfile’s Florida registered Agent Service`,
        url: `/manage-your-company/registered-agent/`,
      },
    },

    // Texas Registered Agent Search
    {
      type: `heading`,
      size: 2,
      template: 3,
      left: true,
      content: `Florida Registered Agent Search`,
    },
    {
      type: `paragraph`,
      content: `In some situations, you might want to know the name of the Registered Agent that represents another Florida LLC. If you do, you can search the business database of the Florida Department of State, as these will often provide details of a specific business’s Registered Agent.`,
    },
    {
      type: `paragraph`,
      content: `If the FL Registered Agent isn’t available from the searchable business registry, contact the Florida Department of State requesting the information.`,
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
      content: `What happens if you choose not to assign or provide details of a Registered Agent to the Florida Department of State? There are several possible ramifications, including:`,
    },
    {
      type: `iconListColorBox`,
      boxColor: color.green3,
      content: {
        list: [
          `Getting served or sued and not finding out about it: If your LLC is sued and you don’t know about it, you could lose to a default judgment in your absence.`,
          `Falling out of good standing with the Florida Department of State: If you don’t respond to certain correspondence (like the request for your annual report), certain states may revoke your right to do business.`,
          `Losing your status as a Florida LLC: A FL Registered Agent “proves” to the state that your business exists. Without it, you could lose your business entity protections and your Florida LLC may be dissolved.`,
        ],
      },
    },

    // Acting as Your Own Registered Agent for Your TX LLC
    {
      type: `heading`,
      size: 2,
      template: 3,
      left: true,
      content: `Acting as Your Own Registered Agent for Your FL LLC`,
    },
    {
      type: `paragraph`,
      content: `If you have an address in Florida, you can choose to be the Registered Agent for your LLC. We don’t recommend this approach as there can be some drawbacks:`,
    },
    {
      type: `iconListColorBox`,
      boxColor: color.blue3,
      content: {
        list: [
          `The FL Registered Agent must have a physical street address in Florida. If you’re forming an LLC outside FL, you will need to use an in-state Registered Agent.`,
          `You always need to have someone on hand during business hours at the Florida address to sign for important documents.`,
          `The FL Registered Agent’s name and address are part of the public record and available through the Florida Department of State's website. If you would prefer your name and address aren’t published, you might choose a Registered Agent service.`,
          `If you change your Florida business address or move out of state, you would need to file additional documentation with the FL Department of State for the new address if you act as your own Registered Agent. This would not be the case if you use a Registered Agent service, making a move or address change much simpler.`,
        ],
      },
    },

    // Faqs section
    {
      type: `heading`,
      size: 2,
      template: 3,
      left: true,
      content: `FAQs About Florida Registered Agents`,
    },
    {
      type: `accordion`,
      content: {
        items: [
          {
            question: `Do I Need to Appoint a Florida Registered Agent?`,
            answer: `Yes. All FL LLCs are required to have a Registered Agent. This is mandated by the Florida Department of State.`,
          },
          {
            question: `When Can I Assign a Florida Registered Agent Service?`,
            answer: `You must assign a Registered Agent when you incorporate your business through paperwork filed with the FL Department of State. You can change your Registered Agent anytime. If you form your business through Incfile, we will file all necessary forms on your behalf.`,
          },
          {
            question: `Can I Be My Own Registered Agent in Florida?`,
            answer: `Yes, but we don’t recommend it, for the reasons listed above. If you still want to be your own Registered Agent, you just need to fill in the correct forms and pay a fee to the Florida Department of State.`,
          },
          {
            question: `Does My FL Registered Agent Need to Have an Address in Florida?`,
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
          text: `The Main Functions of a Florida Registered Agent`,
          url: `/research-topics/registered-agent-help/what-is-the-main-function-of-the-registered-agent/`,
        },
        {
          text: `Changing Your Florida Registered Agent`,
          url: `/manage-your-company/change-of-registered-agent/`,
        },
        {
          text: `What a Florida Registered Agent Does`,
          url: `/research-topics/registered-agent-help/what-does-a-registered-agent-do/`,
        },
      ],
    },
  ],
};
