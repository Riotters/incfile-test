import { color } from "../../../components/styles/colors";

export const agentPageContent = {
  header: {
    title: `California Registered Agents for LLCs`,
    subline: `Every business entity formed in California needs to formally appoint a person or business to act as a Registered Agent.`,
    boxes: [
      {
        title: `Start your LLC today for <span style="color:#FD8550">$0 + State fee.</span>`,
        desc: `Get your first year of Registered Agent Service for free <br>when you incorporate with Incfile.`,
        button: {
          text: `Form Your LLC Now`,
          url: `${process.env.ORDER_URL}/form-order-now.php?entityType=LLC&entityState=CA`,
        },
      },
    ],
  },
  content: [
    {
      type: `paragraph`,
      content: `A California Agent for Service of Process provides various services for your LLC, including the acceptance of formal documents and correspondence from the California Secretary of State. You will appoint an Agent for Service of Process when you first <a href="/blog/post/starting-a-small-business-in-california-is-easiest-with-incfile/">start your business</a> — you can change this agent later, but your LLC must have one at all times.`,
    },
    {
      type: "video",
      url: "wSsZAvrT-IU",
      thumbnail: "what-is-a-registered-agent-7199",
      schema: {
        name: "\"What is a Registered Agent?\" by Incfile",
        description: "\n" +
            "A Registered Agent is an individual or organization that receives legal documents like tax forms, subpoenas, lawsuits and summons for your business. They are required by every state if you form a business.\n" +
            "\n" +
            "Also known as an Agent for Service of Process, a Statutory Agent, or a Resident Agent, a Registered Agent receives important documents on your behalf so you don’t have to. \n" +
            "\n" +
            "You can choose to be your own Registered Agent, or you can put it in the hands of someone who is legally equipped to be your Registered Agent.\n" +
            "\n" +
            "Want to learn more about Registered Agents? Visit the links below: \n" +
            "- Incfile's Registered Agent Service (free for the first year when you incorporate with us): https://www.youtube.com/redirect?event=video_description&v=wSsZAvrT-IU&redir_token=QUFFLUhqbEJZQ3JXeERZYWtiRGt6MDNZNk0zZHk3dkNXUXxBQ3Jtc0tsVk9wX2dTZ1dISEIzWkJoU3pwd2ZaTzhzMmQxb2JpTmE4dnNfWXRxS2pveTU5Z0hhYlFjZDlWSTlrUVNBbDNXS0JSNF83WGVLeFp0c1V0WU1KUElJeWxYRDJXSjJPVlV0SUtVTkgyb2hwMlROWW5XQQ%3D%3D&q=https%3A%2F%2Fwww.incfile.com%2Fmanage-your-company%2Fregistered-agent%2F\n" +
            "- Everything You Need to Know About Registered Agents: https://www.youtube.com/redirect?event=video_description&v=wSsZAvrT-IU&redir_token=QUFFLUhqbXh0T1ZmMWhFUFZaRzZORnZJZl95bkstZTk2QXxBQ3Jtc0trb0JYLXAzTlhkbmJrQWhFYXBTb0t4dW5GWnB2T2dsYTMtX3pSS1h4bnNMU3AtZWdEcWsteE9JdzZBMkZVWVpBZXFkeHFZVkZPSEJySHlyTDBJczdzX3Z2UFNlNnc2elMyUk8wazNNZS1HMGMwX0dtSQ%3D%3D&q=https%3A%2F%2Fwww.incfile.com%2Fregistered-agents%2F\n" +
            "- Can I Act as My Own Registered Agent?: https://www.youtube.com/redirect?event=video_description&v=wSsZAvrT-IU&redir_token=QUFFLUhqbUgtdTgtZHpVUE1iMU9rT3ZhZ0xRSnRxYlZUQXxBQ3Jtc0trYTZ4OEdaLUZmX2ZTdVJod0ZYUFROanpSOFNPN1dzamNkeWFTOW0xQTYwbkFQbW1XVERVS0RjTkxjQXc3alR2Z0hRdEw5dHFfRnR2STNpeEIzSWRlNVlHNUZrWW9ER3QyU3RQOElWWjRBcUlfcXpfVQ%3D%3D&q=https%3A%2F%2Fwww.incfile.com%2Fresearch-topics%2Fregistered-agent-help%2Fcan-i-act-as-my-own-registered-agent%2F\n" +
            "- Filing a Change of Registered Agent: https://www.youtube.com/redirect?event=video_description&v=wSsZAvrT-IU&redir_token=QUFFLUhqbG9tVU1RRHE4WlRlYkx1NDF1TjdQSEpWZC1rZ3xBQ3Jtc0tudkV5bU10a1NvX3J6UXJQbFdleXZNbUxwbFpBLXJiUFdkX2lCRjFWSVpieEpKMnR0R2o2Wml6MzFkQS1MUWhqTTJpT19nVWF6cDV6QW8zdE5tcVVVU0FYWHFfd3FzcWlTV25oQldzRTlHRmhMcWlmRQ%3D%3D&q=https%3A%2F%2Fwww.incfile.com%2Fmanage-your-company%2Fchange-of-registered-agent%2F\n",
        uploadDate: "2020-06-05",
        duration: "1:16",
        interactionCount: "595760",
      },
    },

    // Rules for agents
    {
      type: `heading`,
      size: 3,
      content: `Rules for California Registered Agents`,
    },
    {
      type: `paragraph`,
      content: `There are certain rules that you must follow when you’re appointing a California Registered Agent service for your business. They are:`,
    },
    {
      type: `iconListColorBox`,
      boxColor: color.blue3,
      content: {
        list: [
          `If the Registered Agent is a person, they must reside in California`,
          `If the Registered Agent is a business, they must be able to conduct business in California`,
          `The Registered Agent must have a physical street address in California, not a P.O. Box`,
          `The CA Registered Agent must be available in person during normal business hours to sign for any correspondence`,
        ],
      },
    },
    {
      type: `paragraph`,
      styles: { marginTop: `42px` },
      content: `Note that the CA Registered Agent address does not need to be the same as your California LLC business address.`,
    },

    // What a CA Registered Agent Does
    {
      type: `heading`,
      size: 3,
      content: `What a CA Registered Agent Does`,
    },
    {
      type: `paragraph`,
      content: `What can you expect from your California Registered Agent? Their main function is to accept official documents and correspondence from the CA Secretary of State. This includes:`,
    },
    {
      type: `iconListColorBox`,
      boxColor: color.orange3,
      content: {
        list: [
          `Correspondence from the California Secretary of State`,
          `Service of process notices (e.g., if your CA LLC is sued or required to appear in court)`,
          `Official California state and federal government correspondence and notifications`,
        ],
      },
    },

    //Incfile Provides a Free California Registered Agent Service for the First Year
    {
      type: `heading`,
      size: 3,
      content: `Incfile Provides a Free California Registered Agent Service for the First Year`,
    },
    {
      type: `paragraph`,
      content: `If you have an LLC that’s incorporated in California and you need a Registered Agent, we can help. Incfile provides a complete Registered Agent service for any California business. If you form your business through Incfile, we’ll act as your Registered Agent free for your first year (normally a $119 annual cost).`,
    },
    {
      type: `paragraph`,
      content: `Incfile is authorized to conduct business in California and can legally act as your Registered Agent. Here’s what the Incfile California Registered Agent service provides for your CA LLC:`,
    },
    {
      type: `iconListColorBox`,
      boxColor: color.purple3,
      content: {
        list: [
          `The Registered Agent will always be available to accept documents and letters on your behalf.`,
          `We automatically notify you whenever we receive correspondence for your business from the California Secretary of State or anyone else.`,
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

    //Appointing a CA Registered Agent Service for Your California LLC
    {
      type: `heading`,
      size: 3,
      content: `Appointing a Registered Agent in California`,
    },
    {
      type: `paragraph`,
      content: `You appoint a Registered Agent when you first incorporate your California LLC and can change Registered Agents at any point after that. Here’s how to go about it.`,
    },
    {
      type: `heading`,
      size: 4,
      content: `Appoint an Agent When You Create Your California LLC`,
    },
    {
      type: `paragraph`,
      content: `Your business needs to have a California Registered Agent as soon as it’s formed. You can achieve this through one of the following methods.`,
    },
    {
      type: `accordionWithCounting`,
      content: [
        {
          count: 1,
          question: `File Articles of Incorporation with the California Secretary of State`,
          answer: [
            {
              type: `paragraph`,
              content: `You will need to include the details of your Agent for Service of Process in your Articles of Organization. This is the form that you file with the California Secretary of State to formally create your business.`,
            },
          ],
        },
        {
          count: 2,
          question: `Incorporate Through Incfile and Get a Free California Registered Agent`,
          answer: [
            {
              type: `paragraph`,
              content: `When you incorporate through us, we complete and file your Articles of Incorporation based on the information you’ve provided. Additionally, we give you a free California Agent for Service of Process for the first year, and we’ll include the details of your agent in the form that we file.`,
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
        url: `${process.env.ORDER_URL}/form-order-now.php?entityType=LLC&entityState=CA`,
      },
    },

    // Assign a Different California Registered Agent Service After Incorporation
    {
      type: `heading`,
      size: 4,
      content: `Assign a Different California Registered Agent Service After Incorporation`,
    },
    {
      type: `paragraph`,
      content: `You can also change your CA Registered Agent service after you’ve formed your LLC. There are a couple of ways to achieve this.`,
    },
    {
      type: `accordionWithCounting`,
      content: [
        {
          count: 1,
          question: `Choose a Registered Agent Service and File a Statement of Information (Form LLC-12) with the California Secretary of State`,
          answer: [
            {
              type: `paragraph`,
              content: `Once you’ve chosen a new California Registered Agent, you can complete form LLC-12, Statement of Information, which is available on the CA Secretary of State website. Once you’ve filled it out, send it to the Secretary of State so they can update your records. The SOS may charge a nominal fee to assign or change a Registered Agent.`,
            },
          ],
        },
        {
          count: 2,
          question: `Sign Up for Incfile’s Registered Agent Service and We’ll File the Change on Your Behalf`,
          answer: [
            {
              type: `paragraph`,
              content: `When you choose to use our CA Registered Agent service, we take care of all the form filling and filing for you. We’ll collect important information about your business, complete form LLC-12 on your behalf and send it to the California Secretary of State. We’ll let you know once we officially become your Agent for Service of Process. Note that the California SOS may charge a nominal fee to assign or change a Registered Agent, which will be passed on to you.`,
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
        text: `Order Incfile’s California registered Agent Service`,
        url: `/manage-your-company/registered-agent/`,
      },
    },

    // California Registered Agent Search
    {
      type: `heading`,
      size: 3,
      content: `California Registered Agent Search`,
    },
    {
      type: `paragraph`,
      content: `In some situations, you might want to know the name of the Registered Agent that represents another California LLC. If you do, you can search the <a href="https://businesssearch.sos.ca.gov/" target="_blank" rel="noopener noreferrer">business database</a> of the California Secretary of State, as these will often provide details of a specific business’s Registered Agent.`,
    },
    {
      type: `paragraph`,
      content: `If the CA Registered Agent isn’t available from the searchable business registry, contact the California Secretary of State requesting the information.`,
    },

    // What Happens if You Don’t Have a Registered Agent?
    {
      type: `heading`,
      size: 3,
      content: `What Happens If You Don’t Appoint a Registered Agent in California?`,
    },
    {
      type: `paragraph`,
      content: `What happens if you choose not to assign or provide details of a Registered Agent to the California Secretary of State? There are several possible ramifications, including:`,
    },
    {
      type: `iconListColorBox`,
      boxColor: color.green3,
      content: {
        list: [
          `Getting served or sued and not finding out about it: If your LLC is sued and you don’t know about it, you could lose to a default judgment in your absence.`,
          `Falling out of good standing with the California Secretary of State: If you don’t respond to certain correspondence (like the request for your annual report), certain states may revoke your right to do business.`,
          `Losing your status as a California LLC: A CA Registered Agent “proves” to the state that your business exists. Without it, you could lose your business entity protections and your California LLC may be dissolved.`,
        ],
      },
    },
    {
      type: `heading`,
      size: 3,
      content: `FAQs About California Registered Agents`,
    },
    {
      type: `accordion`,
      content: {
        items: [
          {
            question: `Do I Need to Appoint a California Registered Agent?`,
            answer: `Yes. All CA LLCs are required to have a Registered Agent. This is mandated by the California Secretary of State.`,
          },
          {
            question: `When Can I Assign a California Registered Agent Service?`,
            answer: `You must assign a Registered Agent when you incorporate your business through paperwork filed with the CA Secretary of State. You can change your Registered Agent anytime. If you form your business through Incfile, we will file all necessary forms on your behalf.`,
          },
          {
            question: `Can I Be My Own Registered Agent in California?`,
            answer: `Yes, but we don’t recommend it, for the reasons listed above. If you still want to be your own Registered Agent, you just need to fill in the correct forms and pay a fee to the California Secretary of State.`,
          },
          {
            question: `Does My CA Registered Agent Need to Have an Address in California?`,
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
      content: [
        {
          text: `The Main Functions of a California Registered Agent`,
          url: `/research-topics/general-research/registered-agent-function/`,
        },
        {
          text: `Changing Your California Registered Agent`,
          url: `/manage-your-company/change-of-registered-agent/`,
        },
        {
          text: `What a California Registered Agent Does`,
          url: `/research-topics/registered-agent/registered-agent-tasks/`,
        },
      ],
    },
  ],
};
