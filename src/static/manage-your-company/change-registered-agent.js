export const top = {
    header: 
      `Registered Agent Services: Change of Registered Agent`,
    text: 
      `Incfile is a nationwide registered agent service provider you can trust.`,
    button: [
      {
        text: 'Order Now',
        url: `${process.env.ORDER_URL}/change-agent.php`,
      }
    ]
}
  
export const about = {
    text:
      `
      If you have an LLC, then you have a registered agent since it is a requirement when forming your business entity. However, sometimes conflicts arise, life events happen or reorganizing your business structure requires a change of registered agent.`,
    box: {
      header:
        `How to change a registered agent?`,
      text:
        `The process in changing your registered agent is fairly simple, requiring you to fill out a "Change of Registered Agent" form in your particular state. 
        The form used to process the order, the processing fee and information needed varies by state so be sure to adhere the specific requirements listed by your secretary of state.`,
    },
    header: 
      `What is a Registered Agent?`,
    text2: 
      `A registered agent is someone who is registered to do business in the same state in which a business entity is established and who is appointed to receive service of process notices, 
      correspondence from the secretary of state and other official government notifications including tax forms or potential lawsuits. All LLCs are required to choose a registered agent when filing with their secretary of state.`,
    header2: 
      `What is Required of a Registered Agent?`,
    text3: 
      `A registered agent receives tax and legal documents for your business and ensures that you don't miss important notifications regarding tax payments, lawsuits or legal activities involving your business. However, 
      a registered agent may or may not have a role in the operation of the business itself.`,
    header3: 
      `What Happens if I Don't Appoint Or Report a Change in Registered Agents?`,
    text4: 
      `All LLCs are required to designate a registered agent when they file with their secretary of state. Failing to do so will cause you to fall out of good standing with the state causing hefty fines. 
      If you change your registered agent without notifying the secretary of state, penalties can include license revocation, fines, and your right to enter into legal contracts and/or gain access to the state court system could be revoked. 
      Reinstatement proceedings could also include additional financial and legal hardships.`,
}

export const help = {
    header:
      `Help file my Change of Agent`,
    header2:
      `Save your time. We'll handle the paperwork.`,
    text:
      `In order to change Registered Agents, you must first complete and submit a change of Registered Agent filing. This filing will allow you to stop using your current Registered Agent service and elect a new Registered Agent.`,
}

export const faq = {
    header: 
        `Common questions about filing a Change of Registered Agent`,
    cards: [
        {
            header: `Will filing a change of agent require me to sign any documents?`,
            text: `Some states require that a member or director of the entity sign the document required to change the registered agent. If your state requires a signature we will email you a copy of the documents for signature.`,
        },
        {
            header: `How much does it cost to file a Change of Agent?`,
            text: `The state fee varies by state. Our service fee to change the agent is $0. To review the fee in your state click on the “order now” button and select the state and entity type.`,
        },
        {
            header: `Do I need to explain why I am changing registered agents?`,
            text: `No. Most states just require the name of the business entity, the current registered agent name and address, the name and address of the new registered agent, and the name and information of the authorized person 
            filling out the form on behalf of the entity.`,
        },
        {
            header: `Can I choose a new registered agent from outside of my state?`,
            text: `Most states require that the registered agent be a resident of the state who is authorized to do business in the state. However, most states allow businesses to hire "service companies" (such as an attorney or accountant) 
            to provide registered agent services on their behalf.`,
        },
        {
            header: `Is there anyway to expedite the process?`,
            text: `The price quickly increases from $100 to $2,000 depending on how fast you need this paperwork filed. In some states, you can complete it in as little as an hour.`,
        },
        {
            header: `How do I resign my position as an LLC registered agent?`,
            text: `Registered agent may resign by sending notice to the business entity and the secretary of state.`,
        },
        {
            header: `How Long does it take to file an Annual Report?`,
            text: `The filing time is dependent on the governing state agency and varies by state. In general, non-expedited filings takes about two to three weeks.`,
        },
        {
            header: `What will I receive when the Change of Agent is completed?`,
            text: `The governing state agency will typically return a copy of the filed document which is then mailed to the client.`,
        },
    ]
}