import { color } from "../../atomic/atoms/styles/colors";
import { shadow } from "../../atomic/atoms/styles/shadows";
import BusinessName from "../../images/icons/your-business-name.inline.svg";
import CompanyFormation from "../../images/icons/company-formation.inline.svg";
import Financials from "../../images/icons/financials.inline.svg";
import Operations from "../../images/icons/operations.inline.svg";
import Workforce from "../../images/icons/workforce.inline.svg";
import Marketing from "../../images/icons/marketing.inline.svg";

export const top = {
  header: `The Complete "Start Your Business" Checklist`,
  text: `A Clear and Comprehensive Guide to Starting Your Business the Right Way`,
  buttons: [
    {
      text: `See the checklist`,
      url: `/`,
    },
    {
      text: `Download a PDF Checklist`,
      url: `#`,
    },
  ],
};

export const hsForm = {
  header: "Download The Complete Starting a Business Checklist",
  text:
    "From developing your business idea to measuring success, our free guide has all the info you need to get your business off the ground.",
  hs_form_id: `d077bdb7-f266-4cc6-b69f-a8f4b53acf21`,
  button: {
    text: "Download now",
    url: "/",
  },
};

export const checks = {
  checklists: [
    {
      top: {
        header: "Your Business Name",
        background: color.orange2,
        shadow: shadow.orange2,
        icon: BusinessName,
      },
      items: [
        {
          isCompleted: false,
          id: 0,
          name:
            "Register Your Fictitious, Assumed or “Doing Business As” Name if Necessary",
          description:
            "<p>You might want to conduct business under a different name from your legal entity name. For example, your official business name might be “Northwest Restaurant Holdings LLC,” but you might run a restaurant called “Portland Plants and Whole Foods.” If that’s the case, you may want to register the new name as your assumed, fictitious or doing business as name.</p><p>This can be much easier than setting up a new business since there’s much less bookkeeping and administration, and you’ll have fewer challenges with bank accounts, finances and tax returns. We have a fictitious names service and are happy to register your assumed business name on your behalf.</p>",
          height: 80,
        },
        {
          isCompleted: false,
          id: 1,
          name: "Choose a business name",
          description: `<p>The perfect business name can be elusive! We have a <a href="https://www.incfile.com/blog/post/llc-name-search-50-states/" target="_blank">complete guide to choosing the right business name.</a> You will want to choose something that best represents your product or services while appealing to your customers and being memorable enough to stand out. You should also check that the business name isn’t used by anyone else in the state(s) where you want to conduct business. If you’re not ready to start your business yet but have the perfect name, you can normally reserve it with the business formation authority in your state.</p>`,
          height: 80,
        },
        {
          isCompleted: false,
          id: 2,
          name: "Make sure no other business in your state has your name",
          description: `<p>States do require that every incorporated business has a unique name that’s not used by any other formal business in the state. You will need to check if your business name is available by searching the company name database for your state. We’ve got links to <a href="https://www.incfile.com/blog/post/llc-name-search-50-states/">all the information you need,</a> and we’ve also got a specialized tool for searching your business name in the popular incorporation state of Delaware.</p>`,
          height: 80,
        },
        {
          isCompleted: false,
          id: 3,
          name: "Get social media accounts",
          description: `<p>Social media marketing and accounts are vital for any online business, so make sure you can get social media accounts in the name you choose before settling on a business name. The most important social media accounts are probably Facebook and Twitter, but depending on your field you may also want to get set up on LinkedIn, YouTube, Instagram, Pinterest, Reddit or other social media platforms. Namechk, Namecheckr and Check Usernames will all allow you to see whether social media accounts are available across various networks. If they are available, you should sign in and get the accounts as soon as possible.</p>`,
          height: 80,
        },
        {
          isCompleted: false,
          id: 4,
          name: "Get a Website Domain Name and Email",
          description: `<p>Most businesses need a website, even if they’re not selling online. Even if you don’t have a website, it’s still worth securing your domain name so no one else can use it. You can search for and register your domain name through various domain services like Google Domains, <a href="https://www.web.com/email-service/business-email" rel="noopener noreferrer nofollow" target="_blank">Web.com,</a> GoDaddy or another domain service. At the same time, you can set up your email account. Services like GSuite from Google or your web hosting provider will often allow you to use your domain name as part of your email address.</p>`,
          height: 80,
        },
      ],
    },
    {
      top: {
        header: "Company Formation",
        background: color.purple2,
        shadow: shadow.purple2,
        icon: CompanyFormation,
      },
      items: [
        {
          isCompleted: false,
          id: 0,
          name: "Get a Registered Agent for Your Business",
          description: `<p>If you've incorporated your business, you must have a “Registered Agent.” They’re chosen by you and can accept legal notices and other correspondence for your business on your behalf. If you’ve chosen a person as a Registered Agent, they must live in the same state where the business is incorporated. If you’ve chosen a business, they must be able to conduct business in that state. They must also have a physical street address and not a P.O. Box.</p><p>At Incfile, we provide a comprehensive <a href="/manage-your-company/registered-agent/" target="_blank">Registered Agent</a> service that’s free for the first year if you incorporate through us. Our Registered Agent service includes a dashboard where you can review documents received, get automatic notification of correspondence and get free forwarding of all official, legal correspondence.</p><p>Note that you can act as your own Registered Agent, but many business owners choose to have a professional Registered Agent service for privacy, availability or other concerns.</p>`,
          height: 80,
        },
        {
          isCompleted: false,
          id: 1,
          name:
            "Obtain a Federal Employer Identification Number (EIN)/Tax ID Number",
          description: `<p>Whether you intend to employ people or not, we recommend getting a Federal Employment Number (EIN) from the IRS. This unique number allows LLCs, corporations and sole proprietors to identify themselves for tax purposes.</p><p>Think of your EIN as a social security number for your business. You use it when paying wages, filing taxes and paying any money you owe to the IRS. Your state government may also use an EIN for certain tax-related administration or payment. Although you can get an EIN directly from the IRS, it will probably be easier for us to <a href="/manage-your-company/tax-id-ein/" target="_blank">get an EIN on your behalf.</a> For a single low fee, you can get your EIN when you’re incorporating your business with us.</p>`,
          height: 80,
        },
        {
          isCompleted: false,
          id: 2,
          name: "Trademark Your Business Name",
          description: `<p>Incorporating your business means that other businesses can’t incorporate with the same name in your state. If you want more protection than that, you can register your business name as an official trademark. We provide a <a href="/trademark-name-search/" target="_blank">complete trademark search and registration service</a> — we’ll check if your name is already registered with the U.S. Patent and Trademark Office, and then we’ll register it on your behalf if it's available.</p>`,
          height: 80,
        },
        {
          isCompleted: false,
          id: 3,
          name: "Satisfy All Business License and Permit Requirements",
          description: `<p>Depending on the type of business you run, you may need certain licenses from the city, county, region, state or federal government. These requirements do vary between industries. For example, to run a restaurant you will need food and hygiene certifications, and if you want to sell alcohol, you will need a liquor license.</p><p>The world of permits and licensing can be complex. While the Small Business Administration website is a useful resource, there are likely to be more local and regional licenses you’ll need. Here at Incfile, we provide a <a href="/business-license-research-package/" target="_blank">Business License Research Package</a> service to help. We’ll research all the permits and licenses you’re likely to need and tell you how to register for and obtain each one.</p>`,
          height: 80,
        },
        {
          isCompleted: false,
          id: 4,
          name: "Create an Operating Agreement or Corporate Bylaws",
          description: `<p>Most businesses have internal rules that state how they are run. This helps avoid confusion and makes sure that all the members, managers or directors understand how decisions are made. LLCs typically use a document called an “Operating Agreement” to define how the business should run, while corporations use “Corporate Bylaws.”</p><p>Although this might sound complicated, it’s not. We can provide you with <a href="/research-topics/llc-info/the-llc-operating-agreement/" target="_blank">Operating Agreements</a>or corporate bylaws that you can tweak to your exact needs. For corporations, after the corporation has been filed with the state, the directors of the corporation are required to have a meeting to take care of things such as issuing shares of stock, adopting bylaws, appointing officers, etc. You should also keep minutes of directors' meetings and corporate resolutions so you stay compliant with state rules.</p>`,
          height: 80,
        },
        {
          isCompleted: false,
          id: 5,
          name: "Establish a Company Address or Virtual Mailbox Address",
          description: `<p>You will need to list a company address when you form your business. If you work from home, this could be your home address, or it could be your main office address if you have a business headquarters. In some cases, you might even choose to use a Virtual Mailbox as your address. We provide a <a href="/virtual-mailbox/" target="_blank">Virtual Mailbox service</a> across several states.</p>`,
          height: 80,
        },
        {
          isCompleted: false,
          id: 6,
          name: "Get Business Insurance, If Needed",
          description: `<p>Most businesses should carry insurance to cover them in any unforeseen circumstances. Common types of business insurance include general liability, professional liability, business property, business vehicles, business interruption, product liability and various profession-based insurance types. If you have employees, you will also need to carry workers compensation insurance.</p><p>The <a href="https://www.sba.gov/business-guide/launch-your-business/get-business-insurance" rel="noopener noreferrer nofollow" target="_blank">U.S. Small Business Administration’s insurance resource</a> an help you understand the different types of business insurance and whether or not insurance is necessary for you. For comprehensive business insurance needs, you won’t go wrong with <a href="https://land.coverwallet.com/incfile" rel="noopener noreferrer nofollow" target="_blank">Cover Wallet.</a></p><p>For more information on how to form your business, see our specialized <a href="/starting-a-business-checklist/" target="_blank">Business Formation Checklist.</a></p>`,
          height: 80,
        },
        {
          isCompleted: false,
          id: 7,
          name: "Choose the Right State to Form Your Business",
          description: `<p>Before you form your business, you’ll need to choose what state you want to incorporate in. For most business owners, incorporating in your home state is the best idea. Although Delaware and Nevada are both popular states for incorporation due to legal and other benefits, many of those advantages won’t apply to most small businesses.</p><p>Typically, you will register in your own state as a “Domestic” business, and in other states where you want to operate as a “Foreign” business. We’ve got helpful, state-by-state information that guides you through <a href="/llc-state-information/">starting an LLC</a> or <a href="/corporation-state-information/">corporation in every state.</a></p>`,
          height: 80,
        },
      ],
    },
    {
      top: {
        header: "Financials",
        background: color.yellow2,
        shadow: shadow.yellow2,
        icon: Financials,
      },
      items: [
        {
          isCompleted: false,
          id: 0,
          name: "Open a Business Bank Account",
          description: `<p>If you’re an LLC or corporation, you must have a separate business bank account. Even if you’re not a legally-incorporated business, a separate business bank account is always a good idea. Managing your business finances in a different account will make it much easier to manage financial transactions, see when invoices have been paid, track expenses and reconcile against your accounting records.</p><p>Setting up a business bank account is easy. Every bank has its own requirements, but most will need the incorporation paperwork from your state (like your Articles of Organization) and your EIN. We can get all the information you need and send it to you.</p><p>When it comes to banks, choose one that works for you — whether it’s a large chain like <a href="https://utility.bankofamerica.com/alliance/?formid=IF1" rel="noopener noreferrer nofollow" target="_blank">Bank of America,</a> Wells Fargo or Chase, or a smaller local bank. Get in touch with your bank to see what their specific requirements are for opening up a business bank account. Most banks will provide checkbooks and business debit cards that are linked to your account.</p>`,
          height: 80,
        },
        {
          isCompleted: false,
          id: 1,
          name: "Get a Business Loan, Financing or Other Funding",
          description: `<p>If you don’t already have money to start your business, you may need to borrow funds. There are several ways to raise cash, including:</p>
          <ul>
              <li>Applying for a traditional loan</li>
              <li>Qualifying for a line of credit</li>
              <li>Raising capital from investors</li>
              <li>Using business credit cards</li>
              <li>Borrowing from people you know</li>
              <li>Applying for an SBA loan</li>
          </ul>
          <p>The <a href="https://www.sba.gov/node/13710" rel="noopener noreferrer nofollow" target="_blank">SBA Access Financing tool</a> will help you find out what government financing programs may be available to help you start or expand your business.</p>
          <p>If you’re after a great business loan from a specialized business loan provider, <a href="https://www.kabbage.com/?refid=krpecbf088e" rel="noopener noreferrer nofollow" target="_blank">we recommend Kabbage</a> for competitive rates and terms.</p>`,
          height: 80,
        },
        {
          isCompleted: false,
          id: 2,
          name: "Get a Business Credit Card",
          description: `<p>A business credit card gives your business a simple way to buy products and services now and pay them off when you have the cash. For a new business, a business credit card will mainly be issued based on your personal credit score, so you will need to make sure that’s in good shape. Remember to pay your business card off regularly so you don’t run up large interest fees.</p>`,
          height: 80,
        },
        {
          isCompleted: false,
          id: 3,
          name: "Get an Accountant or Bookkeeper",
          description: `<p>Good financial management is essential for any small business. You will want to hire an accountant or bookkeeper who can provide financial advice, help you with your taxes and file them on your behalf. You'll also need to understand cash flow statements, balance sheets and profit and loss reports so you can stay on top of your money. Typically, a bookkeeper will help you with financial record keeping and reconciliation, while an accountant will also assist with preparing and filing taxes and providing financial advice.</p>`,
          height: 80,
        },
        {
          isCompleted: false,
          id: 4,
          name:
            "Decide If You Want Your LLC Treated as an S Corporation for Tax Purposes",
          description: `<p>If you’re forming an LLC and want to reduce the amount of tax you pay, you might want to complete an <a href="/llc-s-corp-election/">S Corporation Tax Election.</a> This tells the Internal Revenue Service to treat your business like an S Corporation, which could reduce the amount of income on which you need to pay self-employment tax (Social Security, Medicare and FICA). This can substantially reduce your tax bill, with only a slight increase in administrative overhead for you and your accountant. We can file the S Corporation Tax Election on your behalf.</p>`,
          height: 80,
        },
        {
          isCompleted: false,
          id: 5,
          name: "Decide on Accounting and Invoicing Software",
          description: `<p>It will make your job (and your accountant’s job) much easier if you use accounting software to keep track of your finances on an ongoing basis. There are plenty of great online options for managing your invoices, expenses, transactions and reports. We recommend <a href="https://www.freshbooks.com/invoice?ref=10400&utm_source=sas&utm_medium=affiliate&utm_campaign=938781&sscid=b1k4_82jjj" rel="noopener noreferrer nofollow" target="_blank">Freshbooks,</a> Quickbooks, Zipbooks and Xero. You can also use an invoicing tool like Bonsai, And.co or Invoicely.</p>`,
          height: 80,
        },
        {
          isCompleted: false,
          id: 6,
          name: "Understand How to Track Expenses and What's Deductible",
          description: `<p>Every business has to spend money to operate. These payments for the necessary goods and services to run your business are “expenses.” Expenses are typically deducted from your business revenue when working out your profit, and you won’t typically need to pay taxes on your expenses.</p>
            <p>Expenses can be complex, so it’s worth speaking with your accountant about details, but here are some of the more common ones you can claim:</p>
            <ul>
                <li><b>Product costs</b> — Raw materials, manufacturing, shipping, etc.</li>
                <li><b>Office costs</b> — Rent, insurance, repairs, utilities, etc.</li>
                <li><b>Operational costs</b> — Software, hardware, furniture, accounting, hosting, miscellaneous, etc.</li>
                <li><b>Customer service cost</b> — Returns, repairs, refunds, customer service systems, etc.</li>
                <li><b>Marketing and sales costs</b> — Marketing, advertising, branding, etc.</li>
            </ul>
            <p>Transaction costs: Fees from processing payments via PayPal, Stripe or debit/credit cards</p>`,
          height: 80,
        },
        {
          isCompleted: false,
          id: 7,
          name: "Understand Taxes",
          description: `<p>There are plenty of taxes you will need to pay as a business owner. If you’re set up as an LLC, your business profits will flow through to your personal tax return, which is where you will pay taxes.</p>
              <p>The types of tax you will need to pay include:</p>
              <ul>
                  <li><b>Federal income tax</b> — You will need to pay income tax on any profits or earnings you take from your business.</li>
                  <li><b>Self-employment tax</b> — Unlike employees, the earnings from your business will be taxed under a self-employment tax (FICA and Medicaid). This is just over 15 percent of your profits.</li>
                  <li><b>State tax</b> — Most states do have a state income tax. If yours does, you will be taxed on your earnings as normal. To register for state tax, see your secretary of state's website.</li>
                  <li><b>Payroll tax</b> — If you pay employees, you will be liable for payroll tax.</li>
                  <li><b>Corporation tax</b> — If you incorporate as a C Corporation, you will also need to pay corporation tax; you will be taxed both on your profits as a business and when you extract earnings from your company. This “double taxation” is one of the reasons we normally recommend LLCs as a good business structure, since they avoid this.</li>
                  <li><b>Other taxes</b> — In certain circumstances you may need to pay some other types of taxes. Talk to your accountant to find out what else you may be liable for.</li>
              </ul>
              <p>Once you know what taxes you are likely to pay, you will need to pay estimated taxes to the federal and state government four times a year.</p>`,
          height: 80,
        },
        {
          isCompleted: false,
          id: 8,
          name: "Understand Sales Tax",
          description: `<p>If your business sells physical products or certain types of services, you may need to collect sales tax and pay it to your state’s department of revenue. Sales tax is typically collected at the point of purchase when you sell the product or service to your customer. Sales tax rates do vary slightly depending on the region, county or city your business is located in.</p>
              <p>The types of offerings you need to collect sales tax on typically include:</p>
              <ul>
                  <li>Goods you sell like books, cars, electronics, furniture, appliances, raw materials, etc.</li>
                  <li>Some services that you provide</li>
              </ul>
              <p>Most states do not levy sales tax on goods that are considered necessities, like food, medications, clothing or gas.</p>`,
          height: 80,
        },
        {
          isCompleted: false,
          id: 9,
          name: "Know About the Sales Tax Nexus",
          description:
            "<p>Another important concept for sales taxes is that of a “nexus.” A nexus, also known as a “sufficient physical presence” helps define whether you'll need to pay sales tax in a particular state. For example, if you have a nexus in North Carolina, you must pay NC sales taxes. For traditional brick and mortar businesses, the idea of a sales tax nexus is straightforward — if you have a physical store, office location or other presence, you will need to pay sales tax to the state government.</p><p>Where it gets more complicated is if you’re an online retailer or ecommerce website. Because you’re selling across state lines, whether you have a nexus or not is a little more confusing. Typically, you will be defined as having a nexus if you have an office, employee, warehouse or affiliate in a state. Some states may also define a sales tax nexus if you make a certain number or amount of sales, or if you are temporarily doing business in a state.</p><p>If you do have a nexus, you will need to collect sales tax and pay it to the state government. Because nexus rules can be confusing, we recommend seeking professional advice from your accountant.</p>",
          height: 80,
        },
        {
          isCompleted: false,
          id: 10,
          name: "Create Merchant Accounts to Accept Credit Card Payments",
          description:
            "<p>You may need a special merchant account to accept credit and debit card payments from your customers. Some accounting software, payment gateways and other setups let you accept cards automatically, especially if you just take payments online. If you take payments in person (like in a brick-and-mortar store), you might want to look into merchant account providers to get the best rates on your card transactions.</p>",
          height: 80,
        },
      ],
    },
    {
      top: {
        header: "Operations",
        background: color.babyblue2,
        shadow: shadow.babyblue2,
        icon: Operations,
      },
      items: [
        {
          isCompleted: false,
          id: 0,
          name: "Get Equipment",
          description:
            "<p>The equipment you need depends on your industry and the type of work you do. Will you need a laptop, computer, smartphone or tablet? Think also about your needs for transportation or specialized equipment. You might be able to lease certain equipment or buy used versions if you’re trying to keep costs down. Remember to record exactly what you’re spending so you can write it off as business expenses on your taxes.</p>",
          height: 80,
        },
        {
          isCompleted: false,
          id: 1,
          name: "Research and Choose the Best Vendors and Suppliers",
          description:
            "<p>If you’re selling a product, you will need to source it from somewhere. Choosing the right vendor or supplier is a vital part of managing your supply chain. Look at multiple suppliers, read reviews and speak to other people in the industry. Talk with your suppliers and understand the terms and conditions that you will both have to work with.</p><p>There are plenty of online vendor marketplaces where you can find and research products and suppliers, including Alibaba, ThomasNet, EC21 and more.</p>",
          height: 80,
        },
        {
          isCompleted: false,
          id: 2,
          name: "Get the Right Business Software",
          description: `<p>Good software is essential to reducing your administrative overhead so you can focus on business growth and success. Here are some ideas of various tools you might want to look into.</p>
            <p><b>Use Office Productivity Software</b> — Almost every business will need standard productivity software. Microsoft Office is the biggest vendor in the office space, and a low monthly subscription includes Word, Excel, Outlook, Powerpoint and more. GSuite from Google also provides multiple online office tools including Google Sheets, Google Docs, Gmail and Google Drive.</p>
            <p><b>Establish Business Communication Tools</b> — Real-time communication tools can make collaboration and joint projects much easier to manage and implement. Software like Slack, Hipchat, Gchat and Skype allow for immediate communication across multiple locations and time zones to keep everyone on the same page. For voice communications, a conference call platform like zoom or join.me can involve multiple people in audio meetings via VOIP, dial-in or other access methods.</p>
            <p><b>Manage Tasks and Projects With Project Management Tools</b> — If your team is working on a common initiative or making progress toward business goals, you may want to manage activities via a project management tool. These tools can be as simple or complex as you need, from relatively lightweight tools like Todoist or Trello all the way to the heavyweights like Asana or MS Project.</p>
            <p><b>Maximize Creativity Through Software</b> — If you’re in a freelance or creative industry, you will want software that streamlines the creative process and maximizes output. Tools like Adobe Creative Cloud or various creative software available from Apple can help.</p>
            <p>There are also dozens of other online software tools that can make business management much easier. Wunderlist or Microsoft To Do will help you with your to-do list, and you can get cloud storage through Google Drive, Dropbox or Box. You can manage customer relationships with SalesForce or Insightly, or launch an ecommerce store with Shopify. Most of these apps have free versions or trial periods so you can try them out and see if you like them before making a big investment.</p>`,
          height: 80,
        },
        {
          isCompleted: false,
          id: 3,
          name: "Get a Virtual Phone System",
          description: `<p>If you want your customers to call you, a virtual phone system is a good idea. It means you won’t have to share your personal number but can still take calls for your business on your landline or cell phone.</p><p>A virtual phone system lets you create a unique business phone number; when people call it, the calls are automatically forwarded to another phone that you specify. Most virtual phone systems come with other features like voicemail, answering rules, hold music, call direction and more. The <a href="http://shareasale.com/r.cfm?b=298050&u=938781&m=32163&urllink=&afftrack=" rel="noopener noreferrer nofollow" target="_blank">Grasshopper virtual phone system</a> has all the capabilities a business needs.</p>`,
          height: 80,
        },
        {
          isCompleted: false,
          id: 5,
          name:
            "Look Into Business Documents, Agreements and Contracts You Might Need",
          description: `<p>If there’s one truth of business, it’s that there’s always plenty of paperwork! With all of the effort you're putting into your new venture, you will want to have all the right agreements and contracts in place from the start. We offer a <a href="https://www.incfile.com/blog/post/25-lawyer-approved-legal-documents-incfiles-contract-library/" target="_blank">comprehensive range of agreements, contracts and documents</a> including:</p>
            <ul>
                <li>Operating Agreement</li>
                <li>Independent Agreement</li>
                <li>Non-Disclosure Agreement (NDA)</li>
                <li>Employment Agreement</li>
                <li>Non-Compete Agreement</li>
                <li>Service Agreement</li>
                <li>Bill of Sale</li>
                <li>Release of Liability</li>
                <li>Sales Agreement</li>
                <li>Consulting Agreement</li>
                <li>And more</li>
            </ul>`,
          height: 80,
        },
        {
          isCompleted: false,
          id: 6,
          name: "Connect With Other Entrepreneurs",
          description:
            "<p>Running a business can sometimes be lonely. That’s why we recommend joining local groups like meetups or your chamber of commerce. This lets you talk with other business owners who have faced similar challenges and can help you brainstorm solutions. You can also look at online networking through LinkedIn, professional Facebook groups or other dedicated business forums. Don’t be afraid to ask questions and share your expertise.</p>",
          height: 80,
        },
        {
          isCompleted: false,
          id: 7,
          name: "Find Office Space",
          description: `<p>Although entrepreneurs sometimes choose to work from home, you might need another location if you have a team or a slightly larger business. Of course, you could start by going down the traditional route and leasing out commercial office space, but that will probably tie you in for at least a year and may not be cost effective.</p><p>Instead, you might want to look into a co-working solution like WeWork or another business where you can rent space on a daily, weekly or monthly basis. This can be a great way to start, since you can expand your office space as you take on more staff while getting the other benefits of a co-working space.</p>`,
          height: 80,
        },
      ],
    },
    {
      top: {
        header: "Workforce",
        background: color.red2,
        shadow: shadow.red2,
        icon: Workforce,
      },
      items: [
        {
          isCompleted: false,
          id: 0,
          name: "Decide on a Payroll Service",
          description:
            "<p>If your business needs employees, you are going to have to pay them. The easiest way to do this is via a payroll service — these services will work out salaries, payments and benefits and help you with payroll taxes. We recommend Xero, Quickbooks Payroll or Paychex.</p>",
          height: 80,
        },
        {
          isCompleted: false,
          id: 1,
          name: "Create an Employee Benefits Program",
          description: `<p>Many employees will expect you to provide them with benefits like vacation time, health insurance, retirement contributions and other areas. Look into the total cost of employment to help you budget for employee benefits. The U.S. government provides small business health insurance options through the <a href="https://www.healthcare.gov/small-businesses/employers/" rel="noopener noreferrer nofollow" target="_blank">SHOP Marketplace.</a> You can look into retirement plan options through Vanguard, Fidelity Investments, Blackrock and other retirement and investment services.</p>`,
          height: 80,
        },
        {
          isCompleted: false,
          id: 2,
          name: "Establish Your Freelance and On-Demand Workforce Needs",
          description:
            "<p>Every business needs something different from the people who work for them. If you’re a solopreneur, freelancer, knowledge worker or you’ve started a business with a partner, you might not need employees. Most other businesses will probably need to build a workforce at some point. When it comes to hiring people to work with, you have a few different options.</p><p>If you’re looking for specialists and experts who can help you with specific tasks, you’re probably best off using a freelancer. There are plenty of freelance marketplaces like Freelancer, Upwork or Toptal — but if you just want straightforward, easy-to-use services, Fiverr is hard to beat. They’ve also launched Fiverr Pro, where you can find vetted freelancers for more demanding projects.</p><p>If you need help on a do basis but don’t want the expense and overhead of an employee, you could take advantage of virtual assistant and concierge services. They specialize in administrative tasks and can lessen the burden of your to-do list. One Concierge, Red Butler, Fancy Hands and Zirtual all provide virtual assistant services for business owners.</p>",
          height: 80,
        },
        {
          isCompleted: false,
          id: 3,
          name: "Establish Your Permanent Workforce Needs",
          description:
            "<p>Of course, you can also hire permanent employees. You might choose to go to a specialized staffing agency, or you can recruit employees yourself. Whatever route you use, you will need to advertise the role, find candidates, review resumes, shortlist applicants, interview them, agree on terms and hire the right people.</p>",
          height: 80,
        },
        {
          isCompleted: false,
          id: 4,
          name:
            "Learn About Legal Requirements and Responsibilities to Employees",
          description: `<p>You will need to make sure you have proper worker's compensation insurance to cover injuries, illness and medical costs. You should run payroll and compensate your employees on a regular frequency, which may be mandated by your state. You will also need to calculate and keep back income tax so you can pay the appropriate bodies including the employer portion of the payroll tax. If all this sounds like a lot, you could outsource your HR services to a third-party provider like Insperity, Oasis Outsourcing or ADP Total Source.</p><p>In addition to getting a proper employment contract in place with them, you have a duty to provide them with a safe working environment, proper training, regular pay and certain other criteria. <a href="https://www.osha.gov/as/opa/worker/employer-responsibility.html" rel="noopener noreferrer nofollow" target="_blank">OSHA</a> covers your health and safety requirements, while the <a href="https://www.dol.gov/general/topics" rel="noopener noreferrer nofollow" target="_blank">US Department of Labor</a> provides information on other responsibilities.</p>`,
          height: 80,
        },
      ],
    },
    {
      top: {
        header: "Marketing",
        background: color.green2,
        shadow: shadow.green2,
        icon: Marketing,
      },
      items: [
        {
          isCompleted: false,
          id: 0,
          name: "Get Business Cards",
          description: `<p>Once you have a logo, you can get custom business cards printed. It's easy to design your own cards using services like <a href="https://www.vistaprint.com/business-cards?txi=15626&%3bxnid=TopNav_Business+Cards&%3bxnav=TopNav&%3bGP=04%2f28%2f2017+14%3a14%3a22&%3bGPS=4378726571&%3bGNF=0&rd=1&GP=11%2f08%2f2020+05%3a49%3a00&GPS=5816176090&GNF=0" rel="noopener noreferrer nofollow" target="_blank">Vistaprint.</a>`,
          height: 80,
        },
        {
          isCompleted: false,
          id: 1,
          name: "Create a Branded Email Signature",
          description:
            "<p>One easy way to increase visibility of your business is by adding your logo or other branding to your email signature. This is easy to do in Gmail, Outlook and various other email clients. Make sure to include a link to your business website and give people a reason to click through.</p>",
          height: 80,
        },
        {
          isCompleted: false,
          id: 2,
          name: "Build a Company Website",
          description: `<p>If you’re an online-only business, your website is your window to the world. Even if you have a physical presence, your website is still a crucial destination for people who want to learn more about your products and services.</p><p>You will need a business website that’s tailored to your exact business needs. A website for a restaurant will be very different from a website for a freelance writer or accountant. You can find designers to create websites for you on marketplaces like Toptal, Fiverr Pro or Upwork.</p><p>Alternatively, if you don’t mind rolling your sleeves up and putting in some effort, you can use an online web builder to do it yourself. There are plenty of services available, but sites like <a href="https://xoopah.com/website-voucher-discount/?ref=INCFILE" rel="noopener noreferrer nofollow" target="_blank">Xoopah.com,</a> Squarespace, Wix or Weebly are all good options.</p><p>If you’re selling online, <a href="https://www.wix.com/mystunningwebsites/ecom-onlinestore?utm_medium=paid_referral&experiment_id=cake_73680325%5E88" rel="noopener noreferrer nofollow" target="_blank">Volusion provides powerful, easy-to-use ecommerce software.</a></p>`,
          height: 80,
        },
        {
          isCompleted: false,
          id: 3,
          name:
            "Use Google Analytics and Google Search Console on Your Website",
          description:
            "<p>Google Analytics and Google Search Console are two incredibly powerful tools that give you lots of insight into your website visitors. Google Analytics lets you understand how visitors are finding your website, what they do when they get there, popular pages, user demographics and much more.</p><p>Google Search Console shows how your pages are doing on organic Google searches. You can track the search queries your website pages are showing for and optimize them so you increase visibility in organic search. Use Google Analytics and Google Search Console together to optimize your website for user experience, conversions and sales.</p>",
          height: 80,
        },
        {
          isCompleted: false,
          id: 4,
          name: "Advertise Locally",
          description:
            "<p>If you’re a local business, it makes sense to get the word out in your community. You can try local advertising in papers, on billboards or through the radio. You could also sponsor local organizations or events and partner with other businesses to generate goodwill. Incentivizing customers through loyalty schemes will often build repeat business and help them spread the word about you through advocacy.</p>",
          height: 80,
        },
        {
          isCompleted: false,
          id: 5,
          name: "Create Your Google Business Profile and Google Maps Listing",
          description:
            "<p>Local Google search is a great way to let customers in your city know about your business. You can easily claim a business profile from Google and enter vital information about your business like opening hours, location, contact details and more. Combine this with a Google Maps listing that lets you appear in map searches to make it easy for customers to find you.</p>",
          height: 80,
        },
        {
          isCompleted: false,
          id: 6,
          name: "Advertise Online With Google Adwords",
          description: `<p>Google Adwords is a fast and easy way to advertise your business website. You just <a href="https://get.incpromote.com" rel="noopener noreferrer nofollow" target="_blank">sign up for an account,</a> enter a few details about your business, create some ads and keywords and away you go. Adwords is a powerful form of advertising known as “pay per click,” which can send interested customers directly to your website where they can buy products and services. As an Incfile customer, you can get a $200 credit for your advertising and start sending people to your website now.</p>`,
          height: 80,
        },
        {
          isCompleted: false,
          id: 7,
          name: "Try Social Media Advertising",
          description:
            "<p>Social media networks like Twitter, Facebook and Pinterest all provide advertising that helps you promote your services to potential customers. The trick with social media advertising is to carefully define your audience, then present your products in a way that will keep their interest. Make sure you carefully track what you’re spending so you get the best return on investment.</p>",
          height: 80,
        },
        {
          isCompleted: false,
          id: 8,
          name: "Get a Business Logo Designed",
          description: `<p>It’s time to get the word out! Networking isn’t just about meeting up and sharing business cards — this is your chance to connect with potential partners, customers, suppliers or other opportunities. Talk to past colleagues, ask for connections, join local meetup groups or see if there’s a WeWork location near you. You’ll be surprised at how powerful “chance encounters” can be.</p><p>We hope you’ve found this checklist helpful, and that it gives you everything you need to bring your business to life. Remember that we also have a <a href="/learn-more/" target="_blank">comprehensive help center</a> that contains dozens of articles on setting up and running your business.</p><p>That’s it. Follow this checklist, and your business can take on the world!</p>`,
          height: 80,
        },
      ],
    },
  ],
  button: {
    text: "Download a PDF Checklist",
    url: "#",
  },
  text: `<p>From developing your business idea to measuring success,</br>
    our free guide has all the info you need to get your business off the ground.</p>`,
};

export const about = {
  header: `Starting a Business 101`,
  text: `Starting a new business is one of the most powerful and exciting things you can do. You’ve got a great idea, unique products and valuable services that you want to share with the world. 
      There’s just one small problem — where do you begin? There seems to be an almost endless list of tasks to get your business off the ground and money in the bank.`,
  box: {
    header: `Relax, we’ve got you covered.`,
    text: `We’re experts at incorporating LLCs and corporations, and we’ve learned a thing or two about starting and running businesses. 
        That’s why we put together this complete and easy-to-understand business checklist — to make it faster and simpler for you to get stuff done. `,
  },
  text2: `The majority of larger businesses in the United States are structured as C Corporations, although a C Corp could, theoretically, consist of just one person. 
      The information below will help you decide if a C Corporation structure is right for your business.`,
  text3:
    "Whether you’re a new entrepreneur or a business veteran, use our start a business checklist to bring your ideas to life.",
  text4:
    "We’ve even got <a href='/start-a-business/'>specialized guides</a> depending on the type of business you’re building.",
};

export const help = {
  header: `Help File My Annual Report`,
  header2: `Save your time. We'll handle the paperwork.`,
  text: `If you would like to use our services to facilitate the filing of your annual report please place the order and a representative from Incfile will contact you to obtain specific information required to complete and file the annual report in your state of formation.`,
};

export const faq = {
  header: `Browse by Category`,
  cards: [
    {
      header: `How Long does it take to file an Annual Report?`,
      text: `The filing time is dependent on the governing state agency. Filing times vary by state it is therefore important that the report is filed well in advance of the due date in order to avoid any potential late filing fees.`,
    },
    {
      header: `What happens if the Annual Report cannot be filed?`,
      text: `In the event that the entity has been administratively revoked or otherwise dissolved or the report is not due within a close proximity to the order being placed our policy is to contact and inform the client and issue a full refund.`,
    },
    {
      header: `How much does it cost to file an Annual Report?`,
      text: `The state fee varies by state our service fee to file the report is $88. To review the fee in your state click on the “order now” button and select the state and entity type.`,
    },
    {
      header: `What will I receive when the Annual Report is filed?`,
      text: `The governing state agency will typically return a filed copy of the Annual Report which is then mailed to the client.`,
    },
  ],
};

export const rocket = {
  header: `Launch`,
  header2: `your business with Incfile`,
  text: `No Contracts. No Surprise.`,
  text2: `Only $0 + State Fee to Launch Your Business.`,
  button: {
    text: `Launch your business`,
    url: `${process.env.ORDER_URL}/form-order-now.php`,
  },
};

export const categories = {
  header: `Browse by Category`,
  lists: [
    {
      header: `General`,
      buttons: [
        {
          header: `Should I assume that if I form an LLC or incorporate that no…`,
          url: `/`,
        },
        {
          header: `What paperwork is required in order to open a business…`,
          url: `/`,
        },
        {
          header: `What paperwork is required in order to open a business…`,
          url: `/`,
        },
      ],
      link: {
        text: `see all 18 articles`,
        url: `/`,
      },
    },
    {
      header: `LLC`,
      buttons: [
        {
          header: `What Does LLC Mean?`,
          url: `/`,
        },
        {
          header: `Can an LLC be formed without listing the members on on…`,
          url: `/`,
        },
        {
          header: `Can another business entity be a member of an LLC?`,
          url: `/`,
        },
      ],
      link: {
        text: `see all 21 articles`,
        url: `/`,
      },
    },
    {
      header: `S Corporation`,
      buttons: [
        {
          header: `Can a foreign resident be a shareholder in an S Corporation?`,
          url: `/`,
        },
        {
          header: `Is there a limit to the amount of shareholders an S Corporat…`,
          url: `/`,
        },
        {
          header: `Which entity offers the best tax advantages?`,
          url: `/`,
        },
      ],
      link: {
        text: `see all 23 articles`,
        url: `/`,
      },
    },
    {
      header: `C Corporation`,
      buttons: [
        {
          header: `Which entity offers the best tax advantages?`,
          url: `/`,
        },
        {
          header: `The benefits of filing a C-corporation`,
          url: `/`,
        },
        {
          header: `LLCs vs C Corporation: Which Is Best for Your Business?`,
          url: `/`,
        },
      ],
      link: {
        text: `see all 16 articles`,
        url: `/`,
      },
    },
    {
      header: `Nonprofit`,
      buttons: [
        {
          header: `Forming a Nonprofit Corporation`,
          url: `/`,
        },
        {
          header: `Can a Nonprofit Corporation Make a Profit?`,
          url: `/`,
        },
        {
          header: `What is a Nonprofit Corporation?`,
          url: `/`,
        },
      ],
      link: {
        text: `see all 15 articles`,
        url: `/`,
      },
    },
    {
      header: `Registered Agent`,
      buttons: [
        {
          header: `What is the main function of the Registered Agent?`,
          url: `/`,
        },
        {
          header: `Can I Be My Own Registered Agent?`,
          url: `/`,
        },
        {
          header: `What happens if I require the signature of my Registered A…`,
          url: `/`,
        },
      ],
      link: {
        text: `see all 11 articles`,
        url: `/`,
      },
    },
    {
      header: `Business Tax`,
      buttons: [
        {
          header: `Which entity offers the best tax advantages?`,
          url: `/`,
        },
        {
          header: `Minimizing tax expenses`,
          url: `/`,
        },
        {
          header: `How is an S Corporation Taxed?`,
          url: `/`,
        },
      ],
      link: {
        text: `see all 5 articles`,
        url: `/`,
      },
    },
    {
      header: `Employer Identification Number (EIN)`,
      buttons: [
        {
          header: `Employer Identification Number`,
          url: `/`,
        },
      ],
      link: {
        text: `see all 1 articles`,
        url: `/`,
      },
    },
    {
      header: `Individual State Information`,
      buttons: [
        {
          header: `How To Publish Your Notice Of Incorporation In Georgia`,
          url: `/`,
        },
        {
          header: `Meeting the New York Publication Requirement`,
          url: `/`,
        },
        {
          header: `How To Publish Your Notice Of Incorporation In Georgia`,
          url: `/`,
        },
      ],
      link: {
        text: `see all 4 articles`,
        url: `/`,
      },
    },
    {
      header: `Video Library`,
      buttons: [
        {
          header: `What is the main function of the Registered Agent?`,
          url: `/`,
        },
        {
          header: `Can I Be My Own Registered Agent?`,
          url: `/`,
        },
        {
          header: `What happens if I require the signature of my Registered A...`,
          url: `/`,
        },
      ],
      link: {
        text: `see all 3 articles`,
        url: `/`,
      },
    },
  ],
  button: {
    header: `aaaa`,
    url: `/`,
  },
};

export const service = {
  header: `How our service works`,
  text: `Take a moment to view our instructional video and see how easy it can be to get your business incorporated.`,
};

export const tools = {
  header: `Helpful tools for decision making`,
  text: `Select your business type to see how Incfile can work for you.`,
  buttons: [
    {
      header: `Corporation State Information`,
      url: `/corporation-state-information/`,
    },
    {
      header: `Corporation Tax Calculator`,
      url: `/s-corporation-tax-calculator/`,
    },
    {
      header: `Entity Comparison Chart`,
      url: `/business-entity-comparison/`,
    },
    {
      header: `State Filing Fees`,
      url: `/state-filing-fees/`,
    },
    {
      header: `Ongoing Filing Requirements`,
      url: `/compliance-filing-requirement/`,
    },
    {
      header: `State Filing Times`,
      url: `/state-filings-times/`,
    },
  ],
};
