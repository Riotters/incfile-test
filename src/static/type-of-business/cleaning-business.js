import {color} from "../../components/styles/colors";
import Tab1Icon from "../../images/icons/cleaning-business.inline.svg";
import Tab2Icon from "../../images/icons/light.inline.svg";
import Tab3Icon from "../../images/icons/series-is-this-business-for-you.inline.svg";

export const LicensesAccordionContent = {
    items: [
        {
            question: "Local",
            answer: `Your region, county or city may require you to have licenses or permits to operate a business. Talk to your city’s Chamber of Commerce to learn about your local licensing and permit requirements.`
        },
        {
            question: "State",
            answer: [
                {
                    text: `You can find all the information you need on statewide licenses and permits on the website for your Secretary of State. You can find all those details in our`
                },
                {
                    text: `state-by-state guides to company formation`,
                    url: `/llc-state-information/`
                },
                {
                    text: `Alternatively, the Small Business Administration website has a`
                },
                {
                    text: `list of licenses and permits by state`,
                    url: `https://www.sba.gov/starting-business/business-licenses-permits/state-licenses-permits`
                }
            ]
        },
        {
            question: "Federal",
            answer: [
                {
                    text: `The Small Business Administration provides`
                },
                {
                    text: `details of any national or federal licenses and permits`,
                    url: `https://www.sba.gov/business-guide/launch-your-business/apply-licenses-permits`
                },
                {
                    text: `you might need.`
                }
            ]
        }
    ]
}

export const BusinessInsuranceAccordionContent = {
    items: [
        {
            question: "Workers compensation insurance",
            answer: [
                {
                    text: `Workers’ compensation insurance`,
                    url: `https://www.incfile.com/blog/post/forming-an-llc-with-employees-means-purchasing-workers-compensation/`
                },
                {
                    text: `provides coverage for job-related illnesses, disabilities or injuries that affect employees. Regulations for this insurance vary from state to state. It typically covers areas like medical costs, loss of earnings, compensation and retraining.`
                }
            ]
        },
        {
            question: "General Liability Insurance",
            answer: `This insurance protects your business from claims due to being sued. This may include injury to members of the public, property damage, personal liabilities, legal defense and more. It can help protect your business from financial penalties and bankruptcy.`
        },
        {
            question: "Professional Liability/Indemnity Insurance",
            answer: `If you provide professional services, professional liability insurance can protect you from malpractice allegations and other issues as a result of providing work.`
        },
        {
            question: "Home and Auto Insurance",
            answer: `If you are working from home or driving a vehicle for work, check whether your existing home and auto policies cover you for work use of your home or car. If not, you should either expand your policy so you’re covered or get dedicated business insurance.`
        }
    ]
}

export const TaxesAccordionContent = {
    items: [
        {
            question: "File with the IRS",
            answer: `Let the IRS know you are setting up a business.`
        },
        {
            question: "Payroll tax",
            answer: `If you pay employees, you will be liable for payroll tax.`
        },
        {
            question: "Self-employment tax",
            answer: `Unlike employees, the earnings from your beauty salon business will be taxed under a self-employment tax (FICA and Medicaid). This is just over 15 percent of your earnings.`
        },
        {
            question: "State tax",
            answer: "Most states have a state income tax. If yours does, you will be taxed on your earnings as normal. To register for state tax, see your Secretary of State website."
        },
        {
            question: "Federal income tax",
            answer: `You will need to pay income tax on any profits or earnings you take from your beauty salon business. In most cases, profits from the business will “flow through” to your individual tax return and you will be taxed there.`
        },
        {
            question: "Sales tax",
            answer: `If you’re selling locally, you may also be liable for collecting and paying sales tax. To register for sales tax, see your Secretary of State website.`
        },
        {
            question: "Corporate tax",
            answer: `If you incorporate as a C Corporation, you will also need to pay corporation tax — you will be taxed both on your profits as a business and when you extract earnings from your company. This “double taxation” is one of the reasons we normally recommend LLCs as a good business structure, since they avoid this.`
        },
        {
            question: "Other taxes",
            answer: `In certain circumstances you may need to pay some other types of taxes. Talk to your accountant to find out what else you may be liable for.`
        }
    ]
}

export const MaintainingAccordionContent = {
    items: [
        {
            question: "File an Annual Report",
            answer: [
                {
                    text: `Most states require all businesses to file a report once a year. This report has details of any major changes to who owns a business and other major impacts on a business’ legal status.`
                },
                {
                    text: `We can file your Annual Report on your behalf.`,
                    url: `/manage-your-company/annual-report/`
                }
            ]
        },
        {
            question: "Pay estimated taxes",
            answer: "You will be expected to pay estimated taxes on what you plan to earn in the current business year. Typically, you will need to pay estimated taxes in April, June, September and January (of the following year)."
        },
        {
            question: "Renew Business Permits and Licenses",
            answer: `Your federal, state, regional and city licenses and permits may need to be renewed on a regular basis, typically once a year.`
        },
        {
            question: "File your taxes",
            answer: `You will need to file your taxes once a year.`
        },
        {
            question: "Pay Payroll and Sales Taxes",
            answer: `If applicable, you will need to make payroll and sales tax payments on a regular basis.`
        },
        {
            question: "Prepare Your Taxes",
            answer: `You will need to work with your accountant to prepare all the taxes you need to pay.`
        }
    ]
}

export const toolsList = {
    headlineText: "Useful Online Tools for Your Cleaning Business",
    description: "Here are some really great online tools for managing your cleaning business. They will reduce the time you spend on administration, help you to collaborate with others and free up your time to grow and manage your new venture.",
    tools: [
        {
            title: "Project Management",
            tools: ["Asana", "Basecamp", "Trello"]
        },
        {
            title: "Productivity",
            tools: ["Todoist", "Evernote"]
        },
        {
            title: "Collaboration",
            tools: ["Google Docs", "Dropbox", "Box"]
        },
        {
            title: "Social Media Management",
            tools: ["Hootsuite", "Buffer", "Sprout Social", "BuzzSumo"]
        },
        {
            title: "Communication",
            tools: ["Skype", "Grasshopper", "Slack", "Yammer"]
        },
        {
            title: "Email Marketing",
            tools: ["MailChimp", "CampaignMonitor"]
        },
        {
            title: "Advertising",
            tools: ["Google AdWords", "Bing Ads"]
        },
        {
            title: "Marketing Automation",
            tools: ["Hubspot", "Hatchbuck"]
        },
        {
            title: "Customer Relationship Management (CRM)",
            tools: ["SalesForce", "Insightly", "Zoho CRM"]
        },
        {
            title: "Customer Support",
            tools: ["ZenDesk", "GetSatisfaction", "SurveyMonkey"]
        },
        {
            title: "Human Resources",
            tools: ["Gusto", "Hire Athena"]
        },
        {
            title: "Legal",
            tools: ["DocuSign", "RightSignature"]
        },
        {
            title: "Ecommerce",
            tools: ["Shopify", "Recurly", "Vendio", "Square"]
        },
        {
            title: "Website Development",
            tools: ["SnapWeb", "Squarespace", "Jira", "Wordpress"]
        },
        {
            title: "Analytics",
            tools: ["Google Analytics", "SumAll"]
        },
        {
            title: "SEO",
            tools: ["SemRush", "KWFinder", "Moz", "AHREFS"]
        }
    ]
}

export const RingText = {
    title: "The industry breaks down...",
    list: [
        {
            color: color.blue1,
            boldText: "77%",
            text: "Commercial"
        },
        {
            color: color.green1,
            boldText: "10%",
            text: "Other"
        },
        {
            color: color.red1,
            boldText: "7%",
            text: "Damage Restoration"
        },
        {
            color: color.purple1,
            boldText: "5%",
            text: "Residential"
        }
    ]
}

export const adventages = {
    items: [
        {
            circleText: 1,
            imageName: "starting-a-home-business",
            headline: "Residential",
            text: "Cleaning people’s homes and private residences"
        },
        {
            circleText: 2,
            imageName: "commercial-office",
            headline: "Commercial Office",
            text: "Cleaning offices and similar work spaces"
        },
        {
            circleText: 3,
            imageName: "retail-construction-02",
            headline: "Commercial Retail",
            text: "Cleaning shops and other retail spaces"
        },
        {
            circleText: 4,
            imageName: "forming-a-corporation",
            headline: "Commercial Other",
            text: "Other commercial areas and businesses"
        },
        {
            circleText: 5,
            imageName: "industrial",
            headline: "Industrial",
            text: "Cleaning factories, warehouses and other industrial areas"
        },
        {
            circleText: 6,
            imageName: "municipal",
            headline: "Municipal",
            text: "Government, education and other publicly-funded facilities"
        },
        {
            circleText: 7,
            imageName: "specialist-building",
            headline: "Specialist",
            text: "Cleaning that requires slightly more special attention, including medical and healthcare facilities"
        }
    ]
}

export const adventages2 = {
    items: [
        {
            circleText: 1,
            imageName: "real-estate",
            headline: "Real estate",
            text: "Cleaning premises that are being put up for sale or rent, or cleaning homes or apartments in preparation for move in/out."
        },
        {
            circleText: 2,
            imageName: "upholstery-and-carpets",
            headline: "Upholstery and Carpets",
            text: "Removing stains and dirt from soft furnishings"
        },
        {
            circleText: 3,
            imageName: "outdoor",
            headline: "Outdoor",
            text: "Cleaning home exteriors, driveways, and other surfaces using pressure washing and similar techniques"
        },
        {
            circleText: 4,
            imageName: "blinds-and-curtains",
            headline: "Blinds and Curtains",
            text: "Cleaning all types of window treatments and finishes"
        }
    ]
}

export const AccordionCounting = {
    items: [
        {
            count: 1,
            question: "Get an Employer Identification Number (EIN)",
            answer: [
                {
                    text: `Contact the IRS and let them know you will need an EIN for your beauty salon business. This is a number you will use to file and pay your taxes. We put together this`
                },
                {
                    text: `guide to getting your EIN.`,
                    url: `/manage-your-company/tax-id-ein/`
                }
            ]
        },
        {
            count: 2,
            question: "Make Sure Your Employees Can Work in the U.S.",
            answer: "Your employees must be legally able to work here. Carry out background checks and ensure they have all necessary legal documentation."
        },
        {
            count: 3,
            question: "Report Employees as “New Hires”",
            answer: "In most cases you will need to report the hiring of employees to your state."
        },
        {
            count: 4,
            question: "Withhold Income and Payroll Taxes",
            answer: "You will need to calculate and keep back income tax so you can pay the appropriate bodies. You will also need to pay the employer portion of the payroll tax."
        },
        {
            count: 5,
            question: "Get Workers’ Compensation Insurance in Place",
            answer: "As listed above, you will need to make sure you have proper workers’ compensation insurance to cover injuries, illness, medical costs and the like."
        },
        {
            count: 6,
            question: "Pay Employees on a Regular Basis",
            answer: "You will need to run payroll and compensate your employees on a regular frequency. Your state may mandate how often employees need to be paid."
        },
        {
            count: 7,
            question: "Learn About Legal Requirements and Responsibilities to Employees",
            answer: "You do have certain responsibilities and requirements for hiring employees. In addition to getting a proper employment contract in place with them, you have a duty to provide them with a safe working environment, proper training, regular pay and certain other criteria. <a href='https://www.osha.gov/as/opa/worker/employer-responsibility.html'>OSHA</a> covers your health and safety requirements, while the <a href='https://www.dol.gov/general/topics'>U.S. Department of Labor</a> provides information on other responsibilities."
        }
    ]
}

export const tabs = {
    panels: [
        {
            icon: Tab1Icon,
            name: `Cleaning Business`
        },
        {
            icon: Tab2Icon,
            name: `Why This Industry`
        },
        {
            icon: Tab3Icon,
            name: `Is This Business For You?`
        },
    ]
}
