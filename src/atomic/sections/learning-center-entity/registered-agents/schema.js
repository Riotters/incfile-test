import React from 'react';
import { Helmet } from 'react-helmet';

const RASchema = () => (
    <Helmet>
        <script type="application/ld+json">
            {`{
                "@context": "http://schema.org",
                "@type": "VideoObject",
                "name": "What is a Registered Agent? by Incfile",
                "description": "A Registered Agent is an individual or organization that receives legal documents like tax forms, subpoenas, lawsuits and summons for your business. They are required by every state if you form a business.  Also known as an Agent for Service of Process, a Statutory Agent, or a Resident Agent, a Registered Agent receives important documents on your behalf so you don’t have to.  You can choose to be your own Registered Agent, or you can put it in the hands of someone who is legally equipped to be your Registered Agent.  Want to learn more about Registered Agents? Visit the links below:  - Incfile's Registered Agent Service (free for the first year when you incorporate with us): https://www.incfile.com/manage-your-company/registered-agent/ - Everything You Need to Know About Registered Agents: https://www.incfile.com/registered-agents/ - Can I Act as My Own Registered Agent?: https://www.incfile.com/research-topics/registered-agent-help/can-i-act-as-my-own-registered-agent/ - Filing a Change of Registered Agent: https://www.incfile.com/manage-your-company/change-of-registered-agent/",
                "thumbnailUrl": "https://i.ytimg.com/vi/wSsZAvrT-IU/default.jpg",
                "uploadDate": "2020-06-05T15:35:20Z",
                "duration": "PT1M17S",
                "embedUrl": "https://www.youtube.com/embed/wSsZAvrT-IU",
                "interactionCount": "8"
            }`}
        </script>


        {/* FAQ */}
        <script type="application/ld+json">
            {`{
                "@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What Is a Registered Agent?","acceptedAnswer":{"@type":"Answer","text":"<p>A Registered Agent is an individual or business that receives important information, official documents and correspondence from the state government, federal governments and other agencies. They forward that information on to your LLC or corporation so you can respond to it appropriately.</p>"}},{"@type":"Question","name":"What Does a Registered Agent Do?","acceptedAnswer":{"@type":"Answer","text":"<p>A Registered Agent must be available to receive and sign for official correspondence during normal business hours. They will receive documents from official bodies and notify you, forwarding the information. The type of correspondence they receive includes:</p><ul><li>Official letters and correspondence from your Secretary of State, Division of Corporations or other state government agency esponsible for LLCs and corporations</li><li>Service of process notices (if your corporation or LLC is sued or needs to appear in court, for example)</li><li>Official federal government correspondence, information and notifications</li><li>Tax forms and requests for payment</li><li>Requests to complete permits, company filings or reports</li></ul> "}},{"@type":"Question","name":"Are There Other Names for a Registered Agent?","acceptedAnswer":{"@type":"Answer","text":"<p>Registered Agents can be known by various names in each state. These names include:</p><ul><li>Agent for Service of Process Statutory Agent</li><li>Commercial Registered Agent</li><li>Resident Agent</ul>"}},{"@type":"Question","name":"Do I Need a Registered Agent?","acceptedAnswer":{"@type":"Answer","text":"<p>All businesses that are formed as legal entities are required to name a Registered Agent. These types of businesses are:</p><ul><li>Limited Liability Company (LLC)</li><li>S CorporationC Corporation</li><li>Limited Partnership (LP)</li><li>Limited Liability Partnership (LLP)</li><li>Nonprofit corporation, including a corporation using a 501(c)(3)</li></ul>"}},{"@type":"Question","name":"What Are the Requirements for a Registered Agent?","acceptedAnswer":{"@type":"Answer","text":"<p>Your secretary of state or division of corporations has certain requirements that apply to Registered Agents. Typically, they are:</p> <ul><li>If the Registered Agent is an individual, they must reside in the same state where your organization conducts business.</li><li>If the Registered Agent is a business, they must be legally able to conduct business in the same state where your organization conducts business.</li><li>The Registered Agent must have a physical street address in the state (not a P.O. Box).</li><li>Your Registered Agent must be available during normal business hours to receive and sign for any correspondence.</li></ul>"}},{"@type":"Question","name":"What Happens If I Don’t Have a Registered Agent?","acceptedAnswer":{"@type":"Answer","text":"<p>If you do not assign or provide details of your organization's Registered Agent to the secretary of state, you could face significant problems, including:</p> <ul><li>Being served to appear in court and not knowing about it, resulting in a default judgment in your absence and other legal problems</li><li>A loss of standing with the secretary of state that results in your business being dissolved due to failure to file official correspondence(like an Annual Report)</li><li>Losing your status as a legal business, since a Registered Agent “proves” to the state that your business exists</li></ul>"}},{"@type":"Question","name":"Who Can Be a Registered Agent?","acceptedAnswer":{"@type":"Answer","text":"<p>In addition to a formal Registered Agent service, anyone associated with your business who wants to take on the responsibility can be your Registered Agent. They will need to understand the legal requirements and implications of performing the role. Note that your company cannot act as its own Registered Agent.</p>"}},{"@type":"Question","name":"How Do I Submit My Choice of Registered Agent to the Secretary of State?","acceptedAnswer":{"@type":"Answer","text":"<p>When you <a href='https://www.incfile.com/form-order-now.php'>incorporate your business through Incfile</a>, we will automatically provide a <a href='https://www.incfile.com/manage-your-company/registered-agent/'>free Registered Agent service</a> for your LLC or corporation for the first year and will pass that information on to your secretary of state. If you form your business yourself, you can provide details of the Registered Agent when you file your company formation documents, like your Articles of Organization or Articles of Incorporation.<p>"}},{"@type":"Question","name":"Can I Change the Registered Agent for My LLC or Corporation After the Business Is Formed?","acceptedAnswer":{"@type":"Answer","text":"<p>Your business can <a href='https://www.incfile.com/manage-your-company/change-of-registered-agent/'>change your Registered Agent service at any time</a>. Some Registered Agents will file the necessary forms with the secretary of state — if they don't, you can file the relevant forms yourself. Full details of how to do so will be listed on the LLC and corporation pages of your secretary of state’s website.</p>"}},{"@type":"Question","name":"How Do I Find and Choose a Registered Agent for My Own Business?","acceptedAnswer":{"@type":"Answer","text":"<p>There are many ways to find a Registered Agent service. Some secretary of state websites provide lists, or you can search for one on your own. We recommend the <a href='https://www.incfile.com/manage-your-company/registered-agent/'>Incfile Registered Agent service</a>, which operates in all U.S. states and provides a complete set of Registered Agent tools at a reasonable price.</p>"}},{"@type":"Question","name":"How Do I Find the Registered Agent for Another Business?","acceptedAnswer":{"@type":"Answer","text":"<p>If you need to find the Registered Agent for a business other than your own, these names are available in the public record of your state’s secretary of state. You can typically find these on the business entity search page on the secretary of state website. If Registered Agent details are not available from the searchable business registry, contact the secretary of state requesting the information.</p>"}}]
            }`}
        </script>
    </Helmet>
);

export default RASchema;