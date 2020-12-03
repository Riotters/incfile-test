import React from 'react';
import { Helmet } from 'react-helmet';


const RASchemaFL = () => {
    return (
        <Helmet>
            {/* Video */}
            <script type="application/ld+json">{`
                {
                "@context": "http://schema.org",
                "@type": "VideoObject",
                "name": "What is a Registered Agent? by Incfile",
                "description": "A Registered Agent is an individual or organization that receives legal documents like tax forms, subpoenas, lawsuits and summons for your business. They are required by every state if you form a business.  Also known as an Agent for Service of Process, a Statutory Agent, or a Resident Agent, a Registered Agent receives important documents on your behalf so you don’t have to.   You can choose to be your own Registered Agent, or you can put it in the hands of someone who is legally equipped to be your Registered Agent.  Want to learn more about Registered Agents? Visit the links below:  - Incfile's Registered Agent Service (free for the first year when you incorporate with us): https://www.incfile.com/manage-your-company/registered-agent/ - Everything You Need to Know About Registered Agents: https://www.incfile.com/registered-agents/ - Can I Act as My Own Registered Agent?: https://www.incfile.com/research-topics/registered-agent-help/can-i-act-as-my-own-registered-agent/ - Filing a Change of Registered Agent: https://www.incfile.com/manage-your-company/change-of-registered-agent/",
                "thumbnailUrl": "https://i.ytimg.com/vi/wSsZAvrT-IU/default.jpg",
                "uploadDate": "2020-06-05T15:35:20Z",
                "duration": "PT1M17S",
                "embedUrl": "https://www.youtube.com/embed/wSsZAvrT-IU",
                "interactionCount": "11782"
                }
            `}</script>

            {/* FAQs */}
            <script type="application/ld+json">{`
                {
                    "@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Do I Need to Appoint a Florida Registered Agent?","acceptedAnswer":{"@type":"Answer","text":"<p>Yes. All FL LLCs are required to have a Registered Agent. This is mandated by the Florida Department of State.</p>"}},{"@type":"Question","name":"When Can I Assign a Florida Registered Agent Service?","acceptedAnswer":{"@type":"Answer","text":"<p>You must assign a Registered Agent when you incorporate your business through paperwork filed with the FL Department of State. You can change your Registered Agent anytime. If you form your business through Incfile, we will file all necessary forms on your behalf.</p>"}},{"@type":"Question","name":"Can I Be My Own Registered Agent in Florida?","acceptedAnswer":{"@type":"Answer","text":"<p>Yes, but we don’t recommend it, for the reasons listed above. If you still want to be your own Registered Agent, you just need to fill in the correct forms and pay a fee to the Florida Department of State.</p>"}},{"@type":"Question","name":"Does My FL Registered Agent Need to Have an Address in Florida?","acceptedAnswer":{"@type":"Answer","text":"<p>Yes. Additionally, if they are a business providing Registered Agent services, they must be legally able to conduct business in your state.</p>"}}]
                }
            `}</script>
        </Helmet>
    )
}

export default RASchemaFL