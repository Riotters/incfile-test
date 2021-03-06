import { color } from "../../../components/styles/colors";

export const agentPageContent = {
  header: {
    title: `New York Registered Agents for LLCs`,
    subline: `Every business entity formed in New York needs to formally appoint a person or business to act as a Registered Agent.`,
    boxes: [
      {
        title: `Start your LLC today for <span style="color:#FD8550">$0 + State fee.</span>`,
        desc: `Get your first year of Registered Agent Service for free <br>when you incorporate with Incfile.`,
        externalLink: true,
        button: {
          text: `Form Your LLC Now`,
          url: `${process.env.ORDER_URL}/form-order-now.php?entityType=LLC&entityState=NY`,
        },
      },
    ],
  },
  content: [
    {
      type: `paragraph`,
      content: `A New York Registered Agent provides various services for your LLC, including the acceptance of formal documents and correspondence from the New York Department of State. You will appoint a Registered Agent when you first start your business — you can change this Registered Agent later, but your LLC must have a New York Registered Agent at all times.`,
    },

    {
      type: `video`,
      videoID: `wSsZAvrT-IU`,
      videoThumb: `what-is-a-registered-agent-7199`,
    },

    // Rules for agents
    {
      type: `heading`,
      size: 2,
      template: 3,
      bottomMargin: 24,
      content: `Rules for New York Registered Agents`,
    },
    {
      type: `paragraph`,
      content: `There are certain rules that you must follow when you’re appointing a New York Registered Agent service for your business. They are:`,
    },
    {
      type: `iconListColorBox`,
      boxColor: color.blue3,
      content: {
        list: [
          `If the Registered Agent is a person, they must reside in New York`,
          `If the Registered Agent is a business, they must be able to conduct business in New York`,
          `The Registered Agent must have a physical street address in New York, not a P.O. Box`,
          `The NY Registered Agent must be available in person during normal business hours to sign for any correspondence`,
        ],
      },
    },
    {
      type: `paragraph`,
      styles: {
        marginTop: `42px`,
      },
      content: `Note that the NY Registered Agent address does not need to be the same as your New York LLC business address.`,
    },

    // What a NY Registered Agent Does
    {
      type: `heading`,
      size: 2,
      template: 3,
      bottomMargin: 24,
      left: true,
      content: `What a NY Registered Agent Does`,
    },
    {
      type: `paragraph`,
      content: `Your Registered Agent carries out several valuable services for your business. They accept official communications and documents from the NY Department of State on your behalf. This includes:`,
    },
    {
      type: `iconListColorBox`,
      boxColor: color.orange3,
      content: {
        list: [
          `Correspondence from the New York Department of State, such as a notice to file reports and other forms`,
          `Service of process documents (for example, if your New York LLC has legal proceedings issued against it)`,
          `Official New York and federal government documents, form filings and requests for information (including taxes, permits and company filings)`,
        ],
      },
    },

    //Incfile Provides a Free Texas Registered Agent Service for the First Year
    {
      type: `heading`,
      size: 3,
      bottomMargin: 24,
      topMargin: 24,
      content: `Incfile Provides a Free New York Registered Agent Service for the First Year`,
    },
    {
      type: `paragraph`,
      content: `If you have an LLC that’s incorporated in New York and you need a Registered Agent, we can help. Incfile provides a complete Registered Agent service for any New York business. If you form your business through Incfile, we’ll act as your Registered Agent free for your first year (normally a $119 annual cost). Incfile is authorized to conduct business in New York and can legally act as your Registered Agent. Here’s what the Incfile Texas Registered Agent service provides for your NY LLC.`,
    },
    {
      type: `iconListColorBox`,
      boxColor: color.purple3,
      content: {
        list: [
          `The Registered Agent will always be available to accept documents and letters on your behalf.`,
          `We automatically notify you whenever we receive correspondence for your business from the New York Department of State or anyone else.`,
          `We scan your correspondence and upload it to a dashboard, so you can review it when convenient.`,
          `We forward all correspondence to an address you choose.`,
          `If you incorporate with us, your Registered Agent is free for the first year ($119 a year after).`,
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
      marginBottom: 24,
      left: true,
      content: `Appointing a Registered Agent in New York`,
    },
    {
      type: `paragraph`,
      content: `You appoint a Registered Agent when you first incorporate your New York LLC and can change Registered Agents at any point after that. Here’s how to go about it.`,
    },
    {
      type: `heading`,
      size: 3,
      content: `Appoint a Registered Agent When You Create Your New York LLC`,
    },
    {
      type: `paragraph`,
      content: `Your business needs to have a New York Registered Agent as soon as it’s formed. You can achieve this through one of the following methods.`,
    },
    {
      type: `accordionWithCounting`,
      header: 4,
      content: [
        {
          count: 1,
          question: `File Articles of Organization with the New York Division of Corporations`,
          answer: [
            {
              type: `paragraph`,
              content: `You will need to include details of your Registered Agent in your Articles of Organization. This is the form that you file with the NY Department of State/Division of Corporations to formally create your business.`,
            },
          ],
        },
        {
          count: 2,
          question: `Incorporate Through Incfile and Get a Free New York Registered Agent`,
          answer: [
            {
              type: `paragraph`,
              content: `When you incorporate through us, we complete and file your Certificate of Formation based on the information you’ve provided. Additionally, we give you a free New York Registered Agent Service for the first year and we’ll include details of your NY Registered Agent in the form that we file.`,
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
        url: `${process.env.ORDER_URL}/form-order-now.php?entityType=LLC&entityState=NY`,
      },
    },

    // Assign a Different Texas Registered Agent Service After Incorporation
    {
      type: `heading`,
      size: 3,
      content: `Assign a Different New York Registered Agent Service After Incorporation`,
    },
    {
      type: `paragraph`,
      content: `You can also change your NY Registered Agent service after you’ve formed your LLC. There are a couple of ways to achieve this.`,
    },
    {
      type: `accordionWithCounting`,
      header: 4,
      content: [
        {
          count: 1,
          question: `Choose a Registered Agent and File a Form with the New York Department of State`,
          answer: [
            {
              type: `paragraph`,
              content: `Once you’ve chosen a new New York Registered Agent, you can complete a <a href="https://www.os.ny.gov/forms/corporations/1359-f.pdf" target="_blank" rel="noopener noreferrer" >Certificate of Change</a> form that’s available on the NY Department of State website. Once you’ve filled it out, send it to the Department of State so they can update your records. The New York DOS charges $30 to change a Registered Agent.`,
            },
          ],
        },
        {
          count: 2,
          question: `Sign Up for Incfile’s New York Registered Agent Service and We’ll File the Change on Your Behalf`,
          answer: [
            {
              type: `paragraph`,
              content: `When you choose to use our NY Registered Agent service, we take care of all the form filling and filing for you. We’ll collect important information about your business, complete the Certificate of Change on your behalf and send it to the New York Department of State. We’ll let you know once we officially become your Registered Agent.`,
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
        text: `Order Incfile’s New York registered Agent Service`,
        url: `/manage-your-company/registered-agent/`,
      },
    },

    // Texas Registered Agent Search
    {
      type: `heading`,
      size: 2,
      template: 3,
      marginBottom: 24,
      left: true,
      content: `New York Registered Agent Search`,
    },
    {
      type: `paragraph`,
      content: `In some situations, you might want to know the name of the Registered Agent that represents another New York LLC. If you do, you can search the business database of the New York Department of State, as these will often provide details of a specific business’s Registered Agent.`,
    },
    {
      type: `paragraph`,
      content: `If the NY Registered Agent isn’t available from the searchable business registry, contact the New York Department of State requesting the information.`,
    },

    // What Happens if You Don’t Have a Registered Agent?
    {
      type: `heading`,
      size: 2,
      template: 3,
      marginBottom: 24,
      left: true,
      content: `What Happens if You Don’t Have a Registered Agent in New York?`,
    },
    {
      type: `paragraph`,
      content: `What happens if you choose not to assign or provide details of a Registered Agent to the New York Department of State? There are several possible ramifications, including:`,
    },
    {
      type: `iconListColorBox`,
      boxColor: color.green3,
      content: {
        list: [
          `<b>Getting served or sued and not finding out about it:</b> If your LLC is sued and you don’t know about it, you could lose to a default judgment in your absence.`,
          `<b>Falling out of good standing with the New York Department of State: </b>If you don’t respond to certain correspondence (like the request for your annual report), certain states may revoke your right to do business.`,
          `<b>Losing your status as a New York LLC:</b>  A NY Registered Agent “proves” to the state that your business exists. Without it, you could lose your business entity protections and your New York LLC may be dissolved.`,
        ],
      },
    },

    // Acting as Your Own Registered Agent for Your TX LLC
    {
      type: `heading`,
      size: 2,
      template: 3,
      marginBottom: 24,
      topMargin: 32,
      left: true,
      content: `Naming Yourself as Your Own Registered Agent`,
    },
    {
      type: `paragraph`,
      content: `If you have an address in New York, you can choose to be the Registered Agent for your LLC. We don’t recommend this approach as there can be some drawbacks:`,
    },
    {
      type: `iconListColorBox`,
      boxColor: color.blue3,
      content: {
        list: [
          `The Registered Agent must have a physical street address in New York. If you’re forming an LLC outside NY, you will need to use an in-state Registered Agent.`,
          `You always need to have someone on hand during business hours at the New York address to sign for important documents.`,
          `The NY Registered Agent’s name and address are part of the public record and available through the New York Department of State's website. If you would prefer your name and address aren’t published, you might choose a Registered Agent service.`,
          `If you change your New York business address or move out of state, you would need to file additional documentation with the NY Department of State for the new address if you act as your own Registered Agent. This would not be the case if you use a Registered Agent service, making a move or address change much simpler.`,
        ],
      },
    },

    // Faqs section
    {
      type: `heading`,
      size: 2,
      template: 3,
      marginBottom: 24,
      topMargin: 32,
      left: true,
      content: `FAQs About New York Registered Agents`,
    },
    {
      type: `accordion`,
      header: 3,
      content: {
        items: [
          {
            question: `Do I Need to Appoint a New York Registered Agent?`,
            answer: `Yes. All NY LLCs are required to have a Registered Agent. This is mandated by the New York Department of State.`,
          },
          {
            question: `When Can I Assign a New York Registered Agent Service?`,
            answer: `You need to do so when you incorporate your New York business through paperwork filed with the NY Department of State. You can change your Registered Agent at a later date by filing the correct form. If you form your business through Incfile, we will file all necessary forms on your behalf.`,
          },
          {
            question: `Can I Be My Own Registered Agent in New York?`,
            answer: `Yes, but we don’t recommend it, for the reasons listed above. If you still want to be your own Registered Agent, you need to fill in the correct forms and pay a fee to the New York Department of State.`,
          },
          {
            question: `Does My NY Registered Agent Need to Have an Address in New York?`,
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
      marginBottom: 24,
      topMargin: 32,
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
          text: `The Main Functions of a New York Registered Agent`,
          url: `/research-topics/registered-agent-help/what-is-the-main-function-of-the-registered-agent/`,
        },
        {
          text: `Changing Your New York Registered Agent`,
          url: `/manage-your-company/change-of-registered-agent/`,
        },
        {
          text: `What a New York Registered Agent Does`,
          url: `/research-topics/registered-agent-help/what-does-a-registered-agent-do/`,
        },
      ],
    },
  ],
};
