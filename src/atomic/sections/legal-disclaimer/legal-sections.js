import React from "react";
import styled from "styled-components";
import ContentCenter from "../../partials/content-center";

const Wrapper = styled.section`
  position: relative;

  h2,
  h3,
  h4,
  h5 {
    text-align: left;
    align-self: flex-start;
    margin-bottom: 32px;
  }

  @media (min-width: 769px) {
    h2 {
      font-size: 32px;
      line-height: 48px;
      margin-bottom: 20px;
    }
  }

  ul {
    list-style: inside disc;
    margin-bottom: 42px;
    padding-left: 32px;
  }

  ul,
  p {
    align-self: flex-start;
  }
  p {
    font-family: Avenir, sans-serif;
    font-size: 20px;
    line-height: 32px;
    margin-bottom: 42px;
  }

  strong {
    color: rgb(29, 29, 29);
    font-family: Avenir;
    font-weight: 900;
  }
`;

const LegalSections = ({ className, content, contentWidth }) => (
  <Wrapper>
    <ContentCenter contentWidth={contentWidth}>
      <p>
        <strong>
          A visitor to the website, prospective customer or current customer is
          subject to this legal disclaimer and the terms and conditions set
          forth.
        </strong>
      </p>

      <p>
        The information provided in this site or via any other means of
        transmission form Incfile.com is not legal advice, but general
        information. The content contained on the website of Incfile.com or
        information contained in any other transmission from Incfile.com is
        subject to the following terms and conditions:
      </p>

      <h2>Informational Purposes Only</h2>
      <p>
        The purpose IncFile.com is to provide you with general information, and
        not to provide any specific advice. The information provided by
        IncFile.com is intended to provide information (not advice).
      </p>

      <p>
        The information presented is provided solely for informational purposes
        and constitutes an advertisement for services. IncFile.com does not wish
        to represent anyone desiring representation based upon viewing its web
        site or information provided via email, facsimile, phone conversation,
        or any other form of transmission. Visitors to its web site or
        recipients of this information should not act upon this information
        without consulting with legal counsel. None of the information on this
        site constitutes professional advice or a recommendation by IncFile.com,
        its representatives, agents, or otherwise.
      </p>

      <p>
        The transmission and receipt of materials provided by IncFile.com is not
        intended to and does not create an attorney-client relationship. Nor
        does any of the information made available at its web site or via other
        forms of transmission create a business or professional relationship.
      </p>

      <h2>Information Provided As-Is</h2>
      <p>
        Information obtained from IncFile.com should NOT be used as a substitute
        for legal advice from an attorney. It is provided “as is”, is not
        guaranteed to be correct, complete or up-to-date, and IncFile.com
        expressly disclaims all warranties and disclaims any and all liability
        of responsibility for loss, claim, liability, or damage that is a result
        of or in any manner related to errors or omissions in the content
        provided by IncFile.com.
      </p>

      <h2>Third-party Sites</h2>
      <p>
        IncFile.com’s web site contains links to servers maintained by other
        businesses and organizations, which exist independently from
        IncFile.com. IncFile.com cannot provide any warranty about the accuracy
        or source of the information contained on any of these servers or the
        content of any file the user might download from these sites. No such
        third party is endorsed or recommended by us by virtue of the fact that
        links to their servers appear on this site. All accessing and
        downloading of material from such third party sites is at the user’s own
        risk, for which IncFile.com is not responsible or liable in any way.
      </p>
      <p>
        <strong>
          All information is provided without any warranty, express or implied,
          as to its legal effect and completeness.
        </strong>
      </p>
      <p>
        For the avoidance of doubt, all charges imposed by such third parties -
        including but not limited to auto-renew fees for Registered Agent and/or
        any other services - cannot be reversed, discounted or in any way
        altered after those charges have been applied to your account.
      </p>
      <p>
        IncFile.com may, at its sole discretion, refuse or cancel existing
        service to any person or entity for any reason. IncFile.com is not
        responsible for any damage or loss that may result in IncFile.com’s
        refusal or cancellation of service.
      </p>

      <h2>Cancellation Policy</h2>
      <p>
        An order is refundable until payment is forwarded to the state
        (typically within twenty-four hours after order is placed), less a
        $30.00 cancellation fee and less any expenses which have been paid or
        incurred in furtherance of an order with any entities, including state
        agencies or third party vendors. Once payment has been forwarded to the
        state, IncFile.com cannot accept any cancellations or any other changes
        to the state filing. To request an order cancellation, your order must
        be in Review status. You must place your order on hold by clicking on
        the make changes button inside your order confirmation email.
        Instructions to cancel an order or any other changes to an order cannot
        be accepted by telephone or email. IncFile.com LLC operates exclusively
        at Customer’s direction and does not offer legal, tax or accounting
        advice or services, and no information provided by IncFile.com LLC
        constitutes legal, tax, or accounting advice.
      </p>
      <p>
        <strong>
          IncFile.com does not dispute legitimate charge backs. If, however, an
          illegitimate or improper charge back (e.g., a charge back requested
          after payment by IncFile.com for government fees associated with a
          transaction) is submitted, IncFile.com reserves the right to take any
          actions IncFile.com deems appropriate at IncFile.com’s sole
          discretion. Such actions by IncFile.com include, but are not limited
          to, cancelling subscriptions or other services and the dissolution of
          any entity formed. In such cases, if IncFile.com is unable or
          unwilling to dissolve such entity, Customer agrees to do so promptly
          at the request by IncFile.com or be liable to IncFile.com for
          liquidated damages in the amount of five hundred U.S. dollars (US$500)
          plus costs and legal fees for collection to the extent not prohibited
          by applicable law. IncFile.com reserves the right to dissolve any
          legal entity which is fraudulently formed by any person who uses a
          third party’s name without authorization from such third party to form
          the legal entity, and any person who forms such legal entity shall be
          liable to IncFile.com for liquidated damages in the amount of ten
          thousand U.S. dollars (US$10,000) plus costs and legal fees for
          collection to the extent not prohibited by applicable law.
        </strong>
      </p>

      <h2>Auto-renewal services and price changes</h2>
      <p>
        A service provided by IncFile.com may automatically renew to keep a
        company in compliance with state requirements. A current and active
        credit card on file will be charged by IncFile.com’s Registered Agent
        partner, LegalInc, for the annual renewal of the Registered Agent
        service. The current Registered Agent service annual renewal fee is
        available on this site and the Customer Dashboard. Customer has the
        option to cancel the Registered Agent service at any time by assigning a
        new Registered Agent with state and notifying IncFile.com of the change.
        If such notification is not provided to IncFile.com by the expiration
        date of the existing Registered Agent service, IncFile.com may
        automatically renewal the service. If IncFile.com is unable to complete
        an auto-renewal due to payment failure, IncFile.com may, at its sole
        discretion, cancel the Registered Agent service. Credit card information
        held for purposes of automatic renewal and subscription services is not
        used for purposes without Customer consent and permission. IncFile.com
        and LegalInc implement reasonable safeguards to protect Customers data
        pursuant to the Privacy Policy. All prices for services advertised on
        Incfile.com are subject to change at any time without notice.
      </p>

      <h2>Lawful Use</h2>
      <p>
        Customer hereby agrees, represents, and confirms that customer will not
        use the information presented, products, services or materials purchased
        from or provided by Incfile.com to commit fraud or any other illegal act
        or crime; to mispresent identity or legal purpose; to misrepresent,
        misstate, or falsify information on legal documentation; to misrepresent
        or mistake any fact; or in any other unlawful, illegal or improper
        manner. Customer hereby agrees to be responsible for any cost, legal
        fee, or representation required by IncFile.com in the event Customer
        fails to conform to this acknowledgement. Customer hereby accepts full
        liability and shall indemnify, defend and hold IncFile.com, its owners,
        agents, employees, representatives, and providers harmless from any and
        all damages, claims, demands, judgment, expense, and causes of action
        asserted against IncFile.com by any person or local, state or federal
        government agency arising from or out of any event, circumstance, act or
        incident resulting from Customer’s use or misuse of the information
        presented, products, services or materials provided by IncFile.com.
        Customer hereby agrees and confirms to give Incfile.com complete
        authority to sign documents on their behalf for the purpose of and not
        limited to completing any order or modification on costumers behalf.
      </p>
      <p>
        IncFile.com reserves the right to investigate complaints or reported
        violations of this Legal Disclaimer and these terms and conditions and
        to take any and all action it deems necessary or appropriate including
        the reporting of any suspicious, unlawful, or illegal activity or
        suspected unlawful or illegal activity to law enforcement, applicable
        regulators or other third-parties and IncFile.com may disclose any
        information necessary or appropriate including user-submitted
        information, profiles, email addresses, usage reports, IP addresses, and
        user traffic.
      </p>

      <h2>Surplus or Complimentary Information</h2>
      <p>
        Customer acknowledges that Customer is solely responsible for the
        post-formation maintenance, reporting, filings, and any other
        documentation required to maintain formation status and/or legal, tax or
        other required compliance with the applicable federal, state or local
        government agency or oversight commission. Customer acknowledges that
        IncFile.com may provide Customer with information regarding
        post-formation maintenance. Incfile.com may provide updates,
        notifications and/or reminders to the postal address or email address
        provided by customer or as a post or alert to customer's online account
        (if applicable){" "}
        <strong>
          Solely as a courtesy and such does not create any liability on the
          part of Incfile.com
        </strong>
        . Incfile.com is not responsible for: (i) Customer’s action or inaction
        based on any information provided via email, facsimile, phone
        conversation, website posting, alert, or any other form of transmission
        or communication; (ii) Customer’s failure or inability to receive or
        access the information; or (iii) IncFile.com’s decision, in its sole
        discretion, to cease providing such information.IncFile.com makes no
        representation or warranty as to the comprehensiveness or timeliness of
        the information.{" "}
        <strong>
          Customer acknowledges that it is customer's responsibility to comply
          with all applicable state, local, federal, or international laws.
        </strong>
      </p>

      <h2>Limitation of Liability</h2>
      <p>
        Customer hereby agrees that in no event shall Incfile.com be liable for{" "}
        <strong>
          any damage, loss, claim, injury, or liability resulting from your use
          Incfile.com or arising out of or in connection with the services or
          information provided by incfile.com
        </strong>{" "}
        (including, but not limited to, lost profits, special, direct, indirect,
        incidental, punitive, compensatory, or consequential damages).
      </p>

      <h2>Waiver and Release</h2>
      <p>
        Customer hereby waives, discharges, and releases Incfile.com of any and
        all claims, losses, demands, or liability of any kind against
        Incfile.com, its owners, partners, affiliates, representatives,
        employees, agents, licensors, suppliers, and any other third party
        providers, whether known, unknown, disclosed or undisclosed, arising out
        of or in any way connected with your use of the information or services
        of Incfile.com. Customer also acknowledges and agrees that when third
        parties provide fulfillment services on IncFile's behalf and such
        services have been appropriately charged to customer, including
        auto-renew fees, such fulfillment services cannot be subject to any type
        of refund and/or discount after charges for those services have been
        applied to the Customer's account.
      </p>

      <h2>Indemnification</h2>
      <p>
        Customer hereby agrees to indemnify, defend and hold harmless
        Incfile.com, its owners, partners, affiliates, representatives,
        employees, agents, licensors, suppliers, and any other third party
        providers, from and against all claims, losses, expenses, damages and
        costs, including but not limited to legal costs and fees, arising out of
        or in any way connected with your use of the information or services of
        incfile.com. Customer hereby agrees to indemnify, defend and hold
        harmless Incfile.com, its owners, representatives, and employees, from
        and against all claims, losses, expenses, damages and costs, including
        but not limited to legal costs and fees, arising out of or in any way
        connected to services provided by an affiliate, partner, supplier, third
        party provider or vendor including but not limited to any act, omission,
        negligence, or error by such affiliate, partner, supplier, third party
        provider or vendor.
      </p>
      <p>
        Incfile.com reserves the right to change or update this Legal Disclaimer
        at any time. Changes of updates to this Legal Disclaimer will appear on
        IncFile.com and are effective immediately. Use of IncFile.com after any
        such changes constitutes your consent to such changes and updates.
      </p>

      <h2>Binding arbitration for dispute and claim resolution</h2>
      <p>
        In the event of a dispute, please contact IncFile.com customer service
        for resolution. Any controversy or claim arising out of or relating to
        the use of this site, information provided in this site or via any other
        means of transmission from Incfile.com, advertisement for services. by
        IncFile.com or contract,{" "}
        <strong>
          the products, services or materials purchased from or provided by
          IncFile.com, or customer’s use of the information provided in this
          site or products, services or materials purchased from or provided by
          IncFile.com
        </strong>
        , shall be submitted for final and binding arbitration (or online
        dispute/arbitration resolution) to a single arbitrator, provided that:
        (1) the arbitrator has at least five (5) years of expertise in the field
        relevant to the nature of the dispute and; and (2) the arbitrator is not
        or has not been a contract agent or a former employee of either party.
        In the event the parties are unable to agree on a single arbitrator, one
        that meets the qualifications set forth above shall be appointed by the
        American Arbitration Association (“AAA”) within ten (10) days of the
        date on which a party seeks assistance from the AAA in selection of a
        neutral arbitrator. The arbitration shall be conducted in accordance
        with the Commercial Rules and procedures of the AAA, and shall take
        place in Houston, Texas or in a location otherwise mutually agreed upon
        by the parties or via an online forum pursuant to online dispute or
        arbitration resolution processes. The parties further agree that: (1)
        the arbitration shall not last more than three (3) days; (2) there shall
        be no discovery other than the exchange of information and materials
        provided to the arbitrator by each of the parties, for which there shall
        only be thirty (30) days to accomplish; (3) the arbitrator’s final
        decision shall be issued within ninety (90) days after the date of
        selection of the arbitrator or within such period as the parties may
        otherwise mutually agree; and (4) the arbitrator shall have the
        authority only to award equitable relief and direct, actual damages, and
        shall not have the authority to award punitive or consequential damages
        (including, but not limited to lost profits, special, indirect,
        incidental, or compensatory damages). Each party shall be responsible
        for an equal sharing of the fees, expenses and costs incurred by the
        arbitrator, and each party shall be responsible for their own costs and
        any fees of counsel they incur.{" "}
        <strong>
          The decision of the arbitrator shall be final and binding and may not
          be appealed.
        </strong>
      </p>
      <p>
        <strong>
          CUSTOMER HEREBY AGREES THAT CUSTOMER HAS READ THIS LEGAL DISCLAIMER
          AND THE TERMS AND CONDITIONS IN THEIR ENTIRETY AND CUSTOMER AGREES TO
          THE CONDITIONS OF SALE AND USE DESCRIBED HEREIN.{" "}
        </strong>
      </p>
    </ContentCenter>
  </Wrapper>
);

export default LegalSections;
