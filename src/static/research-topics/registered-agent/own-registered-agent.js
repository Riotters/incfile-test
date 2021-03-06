export const about = {
  links: [
    {
      text: `View All Topics`,
      url: `/help-center/`,
    },
    {
      text: `Registered Agent`,
      url: `/research-topics/registered-agent-help/`,
    },
  ],
  header: `Can I Be My Own Registered Agent?`,
  text: `You can act as your own Registered Agent for a corporation or LLC as long as you have a physical street address in the state where your corporation or LLC is formed. The actual corporation or LLC being formed, however, cannot name itself as its own Registered Agent.`,
  header2: `Should I Be My Own Registered Agent?`,
  text2: `Although becoming a Registered Agent for your LLC or corporation will save you the cost of a professional Registered Agent Service, there are some things you’ll need to consider:`,
  list: {
    list: [
      `The Registered Agent must have a physical street address (not a P.O. Box) in the state where the company is operating. If you’re forming an LLC outside your home state, you will need to use an in-state Registered Agent.`,
      `The Registered Agent’s name and address are part of the public record and available through the secretary of state’s website. If you would prefer your name and address aren’t published, you might choose to use a
          <a href="/manage-your-company/registered-agent/">Registered Agent service</a>
          instead.`,
      `You always need to have someone on hand during business hours at the Registered Agent address to sign for important documents.`,
      `If you change your business address or move out of state, you would need to file additional documentation with the secretary of state for the new address if you act as your own Registered Agent. This would not be the case if you use a Registered Agent service, making a move or address change much simpler.`,
    ],
  },
  header3: `Can an LLC or Corporation Act as Its Own Registered Agent?`,
  text3: `An LLC or corporation cannot name itself as its own Registered Agent. Typically, if you do not use a Registered Agent Service, you would give your personal name as the Registered Agent for your business entity.`,
  header4: `Using a Registered Agent Service`,
  text4: `If you choose not to be your own Registered Agent for your company, you can select a Registered Agent service to act as a Registered Agent for your corporation or LLC. They will accept documents on your behalf and forward them to you as required. This includes:`,
  list2: {
    list: [`Correspondence from the secretary of state`, `Service of process notices (e.g., if your business is sued or required to appear in court)`, `Official state and federal government correspondence and notifications`, `Tax forms and requests to complete permits, company filings and reports`],
  },
  text5: `Incfile offers comprehensive
      <a href="${process.env.ORDER_URL}/ra-form.php" target="_blank">Registered Agent services</a>
      across all 50 states — and if you
      <a href="${process.env.ORDER_URL}/form-order-now.php" target="_blank">incorporate through us</a>
      we’ll provide the service for free for the first year.`,
  button: {
    text: `Learn More About Registered Agents`,
    url: `/registered-agents/`,
  },
};