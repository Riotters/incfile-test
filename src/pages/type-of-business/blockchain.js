import React from "react";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Button from "../../components/button";
import RatingRow from "../../atomic/atoms/boxes/rating-row";
import CartBlock from "../../atomic/molecules/blocks/cart-block";
import RatingBlock from "../../atomic/molecules/blocks/rating-block";
import Top from "../../atomic/partials/top";
import styled from "styled-components";
import TabHeading from "../../atomic/organisms/tabs/TabHeading";
import TabTitle from "../../atomic/molecules/tabs/tab-title";
import Tab2Icon from "../../images/icons/light.inline.svg";
import Tab3Icon from "../../images/icons/series-is-this-business-for-you.inline.svg";
import CollapseWrapper from "../../atomic/organisms/tabs/collapse";
import PanelWrapper from "../../atomic/organisms/tabs/panel";
import {Heading} from "../../atomic/atoms/typography/heading";
import {Paragraph} from "../../atomic/atoms/typography/paragraph";
import TabsSection from "../../atomic/partials/tabs";
import Colorbox from "../../components/color-box";
import Tab1Icon from "../../images/icons/blockchain-technology.inline.svg";
import MegafornIcon from "../../images/icons/megafon.inline.svg";
import {color} from "../../components/styles/colors";
import TypeBusiness from "../../atomic/sections/type-of-business/blockchain/type-business";
import Adventages from "../../components/adventages";
import TextBoxed from "../../atomic/molecules/text-blocks/text-boxed";
import CircleWithText from "../../atomic/molecules/blocks/circle-with-text-block";
import CircleSvg from "../../images/circle-graph.inline.svg";
import SettingBusiness from "../../atomic/sections/type-of-business/blockchain/setting-business";
import Rocket from "../../atomic/sections/type-of-business/blockchain/rocket";
import TabsOvalSvg from "../../images/ovals/bottom-left-transparent-pink.inline.svg";

const GymPersonalTraining = () => (
    <Layout>
        <SEO title="How to Make Your Businessa Blockchain Startup"
             description="Blockchain is one of the most popular buzzwords in business right now, but unless you have a good understanding of “immutable, publicly distributed ledgers,” it can be difficult to understand what it could do for you."/>

        <Top ovalColor="blue" imageName="blockchain-main" imageAlt="Mr Bulb with seedling" headlineWidth={700}>
            <h1>How to Make Your Businessa Blockchain Startup</h1>
            <p>
                Blockchain is one of the most popular buzzwords in business
                right now, but unless you have a good understanding
                of “immutable, publicly distributed ledgers,” it can be
                difficult to understand what it could do for you.
            </p>
            <ButtonsBox>
                <Button theme="primary56" marginMD="0 24px 0 0" arrow>
                    Start Now
                </Button>
            </ButtonsBox>

            <RatingRow>
                <CartBlock/>
                <RatingBlock/>
            </RatingRow>
        </Top>

        <TabsWrapper>
            <TabsOval>
                <TabsOvalSvg />
            </TabsOval>
            <TabsSection>
                <TabHeading>
                    <TabTitle title="Blockchain Technology " SvgIcon={Tab1Icon}/>
                    <TabTitle title="Why This Industry?" SvgIcon={Tab2Icon}/>
                    <TabTitle title="Is This Business For You?" SvgIcon={Tab3Icon}/>
                </TabHeading>

                <CollapseWrapper>
                    <PanelWrapper>
                        <Paragraph big>
                            We’ll cut through the hype and mystery, explain what blockchain is, and help you understand
                            if your business could benefit from becoming
                            a blockchain startup.
                        </Paragraph>
                        <Heading size={3}>
                            Blockchain Business Technology, Briefly Explained
                        </Heading>
                        <Paragraph big>
                            At its simplest, blockchain technology allows for the sharing of information and
                            transactions between multiple people, businesses, software and others. Blockchain technology
                            is exciting because it’s a digitized, decentralized, verifiable, immutable ledger. Let’s dig
                            into what each
                            of those terms means.
                        </Paragraph>

                        <div style={{marginBottom: "30px"}}>
                            <Adventages
                                headline="Digitized"
                                text="All blockchain frameworks run digitally, typically across the internet and cloud-based services. All the technology involved with a specific blockchain will send, receive, process and verify information digitally."
                                width="100%"
                            />
                        </div>

                        <div style={{marginBottom: "30px"}}>
                            <Adventages
                                headline="Decentralized"
                                text="Blockchain technology does not rely on the central control of one particular organization or technology setup. Instead, the blockchain can be accessed by any properly-authorized machines and users from anywhere. This means multiple computers contribute to the efficient running of the blockchain."
                                width="100%"
                            />
                        </div>

                        <div style={{marginBottom: "30px"}}>
                            <Adventages
                                headline="Verifiable"
                                text="A specific blockchain “ledger” contains a record of all the transactions and information that’s ever been shared across the blockchain network. All of this data is independently verified for truthfulness and accuracy by multiple computers. This means it’s practically impossible for an individual user or machine to try and “fool” a blockchain network by introducing fraudulent or erroneous information."
                                width="100%"
                            />
                        </div>

                        <div style={{marginBottom: "30px"}}>
                            <Adventages
                                headline="Immutable"
                                text="This means once a record has been written to the blockchain and verified, it can never be changed. Anything that’s recorded into a blockchain network is fixed at that moment in time. Although records can be amended subsequently, any changes would be captured as separate transactions. This makes it easy to audit blockchain information and transactions."
                                width="100%"
                            />
                        </div>

                        <div style={{marginBottom: "30px"}}>
                            <Adventages
                                headline="Ledger"
                                text="The ledger is simply the place where all your blockchain information and transactions are recorded. It’s the functional equivalent of a database, except built around blockchain technology. As new transactions and information are added, they are appended onto the end of the blockchain ledger, so any connected machines can get the latest information."
                                width="100%"
                            />
                        </div>

                        <Colorbox className="box" theme="icon" Icon={MegafornIcon} color={color.green3} curve
                                  curveColor={color.orange2}>
                            <Heading size={4}>
                                Where does the name blockchain come from?
                            </Heading>
                            <Paragraph bottomPadding={0} bottomMargin={0}>
                                Well, every time a transaction is captured, recorded and completed
                                it forms a new “block.” Each new block is connected to the previous one to create a
                                “chain,” hence “blockchain.”
                            </Paragraph>
                        </Colorbox>

                    </PanelWrapper>

                    <PanelWrapper>
                        <Heading size={3}>
                            Blockchain Businesses and Cryptocurrency
                        </Heading>
                        <Paragraph big>
                            It’s likely that you’ve heard blockchain mentioned in the same breath
                            as cryptocurrencies like Bitcoin. While blockchain is the underlying technology that powers
                            cryptocurrencies, blockchain has far wider utility and more use cases than virtual money. We
                            recommend staying away from cryptocurrency-related blockchain businesses for several
                            reasons:
                        </Paragraph>

                        <CircleWithText textInsideCircle="80"
                                        textLine="The cryptocurrency market is extremely volatile. Bitcoin alone fell in value by over 80% in a year, and other cryptocurrencies also saw massive devaluation."
                                        SvgChart={CircleSvg} withBg={true} symbol="%"/>

                        <div style={{marginBottom: "30px", marginTop: "80px"}}>
                            <Adventages
                                headline="Many Initial Coin Offerings (ICOs) used to start cryptocurrency and some blockchain businesses were identified as scams or fraudulent, meaning that potential investors have lost trust in ICOs as a way to get funding"
                                width="100%"
                            />
                        </div>

                        <div style={{marginBottom: "30px"}}>
                            <Adventages
                                headline="The Securities and Exchange Commission (SEC) in the U.S. and other regulatory agencies around the world are putting more controls in place around cryptocurrency assets"
                                width="100%"
                            />
                        </div>

                        <div style={{marginBottom: "30px"}}>
                            <Adventages
                                headline="Many cryptocurrencies have no “inherent value,” meaning that any changes in price are purely speculative and based on demand, rather than the revenue or profits generated by a well-run, underlying business"
                                width="100%"
                            />
                        </div>

                        <Paragraph big>
                            This combination of a lack of trust and legitimacy, unpredictable valuation and finances,
                            increasing regulatory controls and speculation means the cryptocurrency marketplace isn’t a
                            reliable way to build a blockchain business. Instead, we recommend building and using
                            business blockchain applications that have utility and value outside virtual currency.
                        </Paragraph>

                    </PanelWrapper>

                    <PanelWrapper>
                        <Heading size={3}>
                            Why You Should Consider Using Blockchain
                            for Your Startup
                        </Heading>
                        <Paragraph big style={{marginBottom: "48px"}}>
                            Although it can be exciting to form a planning business, there will
                            be significant demands on you as a small business owner. Here are some of the things you can
                            expect.
                        </Paragraph>
                        <Paragraph big>
                            Fortunately, blockchain technology and ledgers have plenty of value outside
                            cryptocurrencies. Using blockchain technology in your business could be right for you if:
                        </Paragraph>

                        <div style={{marginBottom: "10px"}}>
                            <TextBoxed>
                                <Paragraph big bottomMargin={0}>
                                    You’re primarily a business that manages or provides access to data and information
                                </Paragraph>
                            </TextBoxed>
                        </div>

                        <div style={{marginBottom: "10px"}}>
                            <TextBoxed>
                                <Paragraph big bottomMargin={0}>
                                    You need to verify, prove and audit the data you hold
                                </Paragraph>
                            </TextBoxed>
                        </div>

                        <div style={{marginBottom: "10px"}}>
                            <TextBoxed>
                                <Paragraph big bottomMargin={0}>
                                    You need to provide data to third parties
                                </Paragraph>
                            </TextBoxed>
                        </div>

                        <div style={{marginBottom: "24px"}}>
                            <TextBoxed>
                                <Paragraph big bottomMargin={0}>
                                    Blockchain technology makes a better solution for you than a customized database,
                                    software as a service or similar application
                                </Paragraph>
                            </TextBoxed>
                        </div>

                        <Paragraph big>
                            Software applications that you develop and use across the blockchain
                            are known as “Distributed Applications” or DAPPS.
                        </Paragraph>

                        <Heading size={3}>
                            Advantages of Using Blockchain Technology for Your Startup Business
                        </Heading>
                        <Paragraph big>
                            Blockchain technology does provide some advantages to a startup business, which can include:
                        </Paragraph>

                        <div style={{marginBottom: "10px"}}>
                            <TextBoxed>
                                <Paragraph big bottomMargin={0}>
                                    The ability to freely share data across the blockchain ledger, giving authorized
                                    users easy, rapid access to the latest information
                                </Paragraph>
                            </TextBoxed>
                        </div>

                        <div style={{marginBottom: "10px"}}>
                            <TextBoxed>
                                <Paragraph big bottomMargin={0}>
                                    The fact that blockchain applications are secure, transparent and accessible to
                                    large numbers of users
                                </Paragraph>
                            </TextBoxed>
                        </div>

                        <div style={{marginBottom: "10px"}}>
                            <TextBoxed>
                                <Paragraph big bottomMargin={0}>
                                    A strong, verifiable audit trail so you can trust the information in the blockchain
                                    and see a history of how it’s been entered, tracked, managed and accessed
                                </Paragraph>
                            </TextBoxed>
                        </div>

                        <div style={{marginBottom: "10px"}}>
                            <TextBoxed>
                                <Paragraph big bottomMargin={0}>
                                    The fact that blockchain technology is “hot” right now, which might help attract
                                    investors, clients or suppliers
                                </Paragraph>
                            </TextBoxed>
                        </div>

                        <div style={{marginBottom: "24px"}}>
                            <TextBoxed>
                                <Paragraph big bottomMargin={0}>
                                    An expanding range of blockchain technologies, developers and frameworks so you can
                                    find the right type of blockchain solution for your business
                                </Paragraph>
                            </TextBoxed>
                        </div>

                        <Paragraph big>
                            There’s still plenty of room for innovation in the blockchain space,
                            and your business could take advantage.
                        </Paragraph>

                        <Heading size={3}>
                            Disadvantages of Using Blockchain Technology
                            for Your Startup Business
                        </Heading>
                        <Paragraph big>
                            Though there are many ways blockchain can help your business,
                            it’s important to consider the disadvantages of blockchain technology when deciding if it's
                            right for your company. Here are some examples:
                        </Paragraph>

                        <div style={{marginBottom: "10px"}}>
                            <TextBoxed>
                                <Paragraph big bottomMargin={0}>
                                    There may be a better solution for sharing information among multiple parties, such
                                    as a secure database or a software as a service application
                                </Paragraph>
                            </TextBoxed>
                        </div>

                        <div style={{marginBottom: "10px"}}>
                            <TextBoxed>
                                <Paragraph big bottomMargin={0}>
                                    Everything about your business will need to be engineered to support
                                    a blockchain application, as it’s a different approach to software development and
                                    usage
                                </Paragraph>
                            </TextBoxed>
                        </div>

                        <div style={{marginBottom: "10px"}}>
                            <TextBoxed>
                                <Paragraph big bottomMargin={0}>
                                    Distributed applications on the blockchain are still in an early, nascent stage, so
                                    it may be hard to get buy-in from all parties to use these applications
                                </Paragraph>
                            </TextBoxed>
                        </div>

                        <div style={{marginBottom: "10px"}}>
                            <TextBoxed>
                                <Paragraph big bottomMargin={0}>
                                    Due to the fact that every computer on a blockchain has to verify every transaction,
                                    blockchain applications can be slower than other software
                                </Paragraph>
                            </TextBoxed>
                        </div>

                        <div style={{marginBottom: "24px"}}>
                            <TextBoxed>
                                <Paragraph big bottomMargin={0}>
                                    Developing a blockchain application can be costly, as there are not a huge number of
                                    skilled blockchain developers at present
                                </Paragraph>
                            </TextBoxed>
                        </div>

                        <Paragraph big>
                            It’s best to choose a blockchain solution for your business startup if there are not already
                            other better options.
                        </Paragraph>

                    </PanelWrapper>
                </CollapseWrapper>
            </TabsSection>
        </TabsWrapper>

        <TypeBusiness/>

        <SettingBusiness/>

        <Rocket/>
    </Layout>
);

const ButtonsBox = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 769px) {
    flex-direction: row;
  }
`;

const TabsOval = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    
    @media (min-width: 420px){
        width: 420px;
    }
`;

const TabsWrapper = styled.div`
    position: relative;
    margin-top: 100px;
`;

export default GymPersonalTraining;
