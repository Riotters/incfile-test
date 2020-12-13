import BusinessSVG from "../images/icons/start-a-business-color-why-this-industry.inline.svg";
import AvailabilitySVG from "../images/icons/star-magnifing-glass.inline.svg";
import SecuritySVG from "../images/icons/security-pad.inline.svg";
import EntitySVG from "../images/icons/note-magnifing-glass.inline.svg";
import DIYSVG from "../images/icons/little-pinky.inline.svg";
import AfterSVG from "../images/icons/twinkle-gold-document.inline.svg";
import NotepadSVG from "../images/icons/notepad.inline.svg";
import CertificateSVG from "../images/icons/certificate-l.inline.svg";
import HeadquartersSVG from "../images/icons/company-headquarters.inline.svg";
import EmailSVG from "../images/icons/icon-email.inline.svg";
import CalendarSVG from "../images/icons/icon-calendar.inline.svg";
import RocketSVG from "../images/icons/icon-rocket.inline.svg";
import { Link } from "gatsby";
import React from "react";
import { color } from "../atomic/atoms/styles/colors";

export const tabPages = {
	pages: [
		{
			name: `Business name`,
			path: `/diy-business-course/choose-business-name/`,
			icon: BusinessSVG,
		},
		{
			name: `Availability of the name`,
			path: `/diy-business-course/name-availability/`,
			icon: AvailabilitySVG,
		},
		{
			name: `Security`,
			path: `/diy-business-course/digital-footprint/`,
			icon: SecuritySVG,
		},
		{
			name: `Entity type`,
			path: `/diy-business-course/entity-type/`,
			icon: EntitySVG,
		},
		{
			name: `DIY Your LLC`,
			path: `/diy-business-course/lc-formation/`,
			icon: DIYSVG,
		},
		{
			name: `After filing`,
			path: `/diy-business-course/before-after/`,
			icon: AfterSVG,
		},
	],
};

export const top = {
	before_after: {
		header: `After Filing & Before You Do Business`,
	},
	entity_type: {
		header: `Choosing the Right Entity Type`,
	},
	choose_business_name: {
		header: `Choosing a Business Name`,
	},
	business_name_available: {
		header: `Is Your Business Name Available`,
	},
	lc_formation: {
		header: `DIY Your LLC`,
	},
	footprint: {
		header: `Securing Your Digital Footprint`,
	},
};

export const choseNameGuide = [
	{
		type: "header",
		content: "The perfect name is out there — here’s how to find it",
		size: 2,
		template: 4,
		marginBottom: 24,
	},
	{
		type: "text",
		content:
			"You might be one of those people who’ve had a name in their heads from day one. Sometimes it just clicks — the perfect name. Or, like many, you might be struggling with how to best represent what you do in a catchy, concise way.",
		marginBottom: 24,
	},
	{
		type: "text",
		content:
			"Choosing the perfect name is a process and one that requires some forethought (even if you already think that “Blurp Inc.” is a winner). We’ve got you covered, so let’s walk through this process together.",
		marginBottom: 48,
	},
	{
		type: "header",
		content: "Business Name Checklist",
		size: 3,
		template: 4,
		marginBottom: 24,
	},
	{
		type: "text",
		content:
			"Even if you already have a name, you’ll need to consider it from all angles. The name you choose will be seen in many places. Can you picture it on signs and billboards? Stationery and email signatures? How about name tags for trade shows or conferences? You’ll want to make sure that your name represents your business in the best way possible and works from \n" +
			"a visual perspective when displayed.",
		marginBottom: 48,
	},
	{
		type: "header",
		content: "Here’s a quick checklist to help direct your focus:",
		size: 3,
		template: 4,
		marginBottom: 24,
	},
	{
		type: "tabbed-checklist",
		content: [
			{
				question: "Is it unique?",
				answer: [
					{
						type: "paragraph",
						content: "",
					},
				],
			},
			{
				question: "Is it easy to pronounce?",
				answer: [
					{
						type: "paragraph",
						content: "",
					},
				],
			},
			{
				question: "Is it short and sweet?",
				answer: [
					{
						type: "paragraph",
						content: "",
					},
				],
			},
			{
				question: "Does it make sense?",
				answer: [
					{
						type: "paragraph",
						content:
							"You‘d probably be surprised if Vance Refrigeration was the name \n" +
							"of a company that sold popsicles. Make sure that the name you choose accurately represents what your business is all about. This will make it easy for the right people to find you.",
					},
				],
			},
			{
				question: "Does it serve your audience?",
				answer: [
					{
						type: "paragraph",
						content: "",
					},
				],
			},
		],
		curve: true,
		curveRight: true,
		listColor: color.orange3,
		marginBottom: 56,
	},
	{
		type: "header",
		content: "Keep Your Options Open",
		size: 3,
		template: 4,
		marginBottom: 24,
	},
	{
		type: "text",
		content:
			"When thinking about your business name, an important point to consider is that you’ll need to make sure that there is room to grow as your company evolves to meet the needs of your customers. You may have found the perfect name for right now, but will it make sense in the future if you offer additional products or services?\n",
		marginBottom: 24,
	},
	{
		type: "text",
		content:
			"As an example, let’s say that you’re a graphic designer who creates assets such as logos, postcards, flyers, etc. A great name might be “Thompson Designs LLC”. But as your company grows and you advance your skills — maybe you hire a few other designers — you might want to start offering website design, media buying/advertising, and other marketing services. Planning for future growth allows you to consider names from a different angle. Instead of “Thompson Designs LLC” you might go with “Thompson Media LLC” instead because it allows you to add those additional services under the umbrella of your original business name.",
		marginBottom: 24,
	},
	{
		type: "text",
		content:
			"In the construction trade, many business owners will choose these types of “umbrella” names for that reason. Construction workers are often capable of completing various types of projects, so they typically use words like “construction” or “contracting” in their names.",
		marginBottom: 48,
	},
	{
		type: "header",
		content: "Acronyms FTW (For the Win)",
		size: 3,
		template: 4,
		marginBottom: 24,
	},
	{
		type: "text",
		content:
			"If you’re planning to use a longer name, or feel that snappy, one-word business names are too constricting, going with an acronym can be an excellent solution. There are numerous examples of companies that have used acronyms for their business name because when used correctly they can be quite memorable.",
		marginBottom: 24,
	},
	{
		type: "text",
		content:
			"You’ve probably heard of JBL, a popular speaker manufacturer. When spelled out, JBL stands for James Bullough Lansing, the founder of the company. Now, “James Bullough Lansing” might not be a memorable household name, but JBL certainly is.",
		marginBottom: 24,
	},
	{
		type: "text",
		content:
			"If you’re planning to use your own name or even a combination of two or more names in the case of a partnership, choosing an acronym might be a smart move — especially if you’re having trouble agreeing on a name with those involved. There’s almost a sense of importance with an acronym...an allure, perhaps. Be careful, though, “Sam Howard Information Technologies” might be best left alone.",
		marginBottom: 48,
	},
	{
		type: "header",
		content: "Put It to a Poll",
		size: 3,
		template: 4,
		marginBottom: 24,
	},
	{
		type: "text",
		content:
			"If you have a few ideas, share them with people you know to get some feedback. Your friends, family and business connections may be able \n" +
			"to give you some helpful information, such as positive or negative associations that didn’t cross your mind. If you think that your name accurately represents what your business does, ask them what first comes to mind when you tell them the name. You can then use their responses \n" +
			"to determine which names might work best, and which would be more recognizable or memorable to your potential customers. This is a great way to trim down your list and maybe even decide on that perfect name.",
		marginBottom: 48,
	},
	{
		type: "header",
		content: "Your Homework",
		marginBottom: 24,
		size: 3,
		template: 4,
	},
	{
		type: "text",
		content:
			"Now’s the time to put some of these tools into action by coming up with five business name ideas that you think would label your brand \n" +
			"as a strong, trustworthy entity. Decide on five, and run them through the checklist above. Do they work? If so, you’re that much closer to starting your own business.",
		marginBottom: 56,
	},
	{
		type: "button",
		content: {
			text: "Start chapter 2",
			url: "/diy-business-course/name-availability/",
		},
		theme: "primary56",
	},
];

export const nameAvailability = [
	{
		type: "header",
		content: "Perform a search to see if you can snag that \n" + "perfect name",
		size: 2,
		template: 4,
		marginBottom: 24,
	},
	{
		type: "text",
		content:
			"Once you’ve whittled down your list of potential business names to a final few, it’s time to start searching the company registrar to see if the names on your list can be claimed and used legally. If you choose a name that’s too close to another business identity, how will your customers know who is who? By checking with the Secretary of State, you can find out which names are available in your formation state – this should help you make the final choice and officially register your business name.",
		marginBottom: 48,
	},
	{
		type: "header",
		_no_parse: true,
		content: (
			<span>
				<span>We’ve made this process as simple as possible with the </span>
				<Link to="/business-name-search/">
					Incfile Business Name Search Tool
				</Link>
				<span> which is packed with some helpful features:</span>
			</span>
		),
		size: 3,
		template: 4,
	},
	{
		type: "boxes",
		content: [
			{
				icon: DIYSVG,
				text: "Search the business registry of your specific state",
			},
			{
				icon: AvailabilitySVG,
				text:
					"See if your proposed business name is already in use by another entity",
			},
			{
				icon: NotepadSVG,
				text: "View the most current information on registered businesses",
			},
			{
				icon: CertificateSVG,
				text: "Search for both corporation and LLC names",
			},
		],
		marginBottom: 24,
	},
	{
		type: "header",
		size: 3,
		template: 4,
		content: "And the big one,",
		marginBottom: 24,
	},
	{
		type: "boxes",
		content: [
			{
				icon: HeadquartersSVG,
				text: "Form your business quickly if your perfect name is available",
			},
		],
		marginBottom: 56,
	},
	{
		type: "business-name-search",
		content: {
			header: "Please enter the business name information",
			field: {
				label: "Entity Name*",
			},
			field2: {
				label: "Select Entity Type*",
				radio: "LLC",
				radio2: "Corporation",
			},
			field3: {
				label: "State of Incorporation",
			},
			field4: {
				label: "First Name*",
			},
			field5: {
				label: "Last Name*",
			},
			field6: {
				label: "Email*",
			},
			header2:
				"Let us know where we can let you know if your business name is available",
			link: {
				text: "Not sure?",
				url: "/",
			},
			button: {
				text: "Check Name Availability",
				url: "/",
			},
			noFullName: true,
		},
		marginBottom: 56,
	},
	{
		type: "text",
		content:
			"This is where you make the final decision on the name of your business. \n" +
			"If the name you’ve landed on is available, great! Registering it will make \n" +
			"it yours, and it will become unavailable to anyone else who is searching.",
		marginBottom: 56,
	},
	{
		type: "buttons",
		content: [
			{
				content: {
					text: "Prev chapter 1",
					url: "/diy-business-course/choose-business-name/",
				},
				theme: "secondary56",
				arrow: false,
			},
			{
				content: {
					text: "Start Chapter 3",
					url: "/diy-business-course/digital-footprint/",
				},
				theme: "primary56",
			},
		],
	},
];

export const security = [
	{
		type: "header",
		content: "Your keys to the online world of new customers",
		size: 2,
		template: 4,
		marginBottom: 24,
	},
	{
		type: "text",
		content:
			"The digital world – this is where things happen. Just about every business has a website, and most have made social media a top priority over the last decade as customers flock to new digital content. Maintaining \n" +
			"a current website and a strong presence on social media platforms enables you to reach your customers where they are, and gives your customers the ability to reach you, too. By extending your brand through your website, email address and social media accounts, you create \n" +
			"a consistency that is easy for your customers and prospects to follow.",
		marginBottom: 24,
	},
	{
		type: "text",
		content:
			"An important first step is securing your domain name so that your website and email address identify your business to the market.",
		marginBottom: 48,
	},
	{
		type: "header",
		content: "Securing Your Domain & Business Email Address",
		size: 3,
		template: 4,
		marginBottom: 24,
	},
	{
		type: "text",
		content:
			"Want to increase credibility with your audience? One of the most common ways is to send business emails from an “@yourcompany.com” address. This shows that you’ve dedicated the time to present your business formally instead of slapping components together and sticking \n" +
			"a cardboard sign out front.",
		marginBottom: 24,
	},
	{
		type: "text",
		content:
			"We provide you with an easy way to claim your business domain and create a familiar “yourname@yourbusiness.com” address. You’ll be able \n" +
			"to use this address to send professional emails and set up your social accounts as well.",
		marginBottom: 48,
	},
	{
		type: "header",
		content: "Useful features include:",
		size: 3,
		template: 4,
		marginBottom: 24,
	},
	{
		type: "boxes",
		content: [
			{
				icon: EmailSVG,
				text: "Branded Email that promotes your company with every email sent",
			},
			{
				icon: CalendarSVG,
				text:
					"Calendar, Contacts and Tasks that allow you to track your appointments and access your business contacts from any device",
			},
			{
				icon: RocketSVG,
				text:
					"Cloud File Storage so you can store and access your files from any device",
			},
		],
		marginBottom: 32,
	},
	{
		type: "arrow-link",
		content: {
			text: "Click here to snag the promotional offer ",
			url: "https://xoopah.com/landing-page/?ref=INCFILE",
		},
		marginBottom: 32,
	},
	{
		type: "text",
		content:
			"Next, we’ll walk through the setup of four different social media platforms – Facebook, Instagram, Twitter and LinkedIn – so that you can begin building trust with new customers through online content.",
		marginBottom: 48,
	},
	{
		type: "header",
		content: "Facebook",
		size: 3,
		template: 4,
		marginBottom: 24,
	},
	{
		type: "text",
		content:
			"Facebook is a great place to post everyday content focused around your business. Hours of operation, customer reviews and special sales events are commonly searched for, and you can engage directly with customers as they request information from you. Plus, you can showcase photos and video of your products and services in action to boost interest.",
		marginBottom: 24,
	},
	{
		type: "text",
		content: "Here’s how to set up a Facebook Page for your business:",
		marginBottom: 56,
	},
	{
		type: "numeric-list",
		noBox: true,
		marginBottom: 32,
		content: [
			{
				number: "1",
				text:
					"First, visit <a href='https://facebook.com/' rel='nofollow' target='_blank'>Facebook</a>. Below the big green “Sign Up” button is “<strong>Create a Page</strong>” That’s what you’ll want to click on. On mobile, you’ll tap the menu icon (or, “hamburger”, as some like to call it), and then <strong>Pages</strong>.",
			},
		],
	},
	{
		type: "image",
		content: "fb-create-a-page-4059",
		marginBottom: 24,
	},
	{
		type: "image",
		content: "fb-mobile-create-a-page-5602",
		marginBottom: 56,
	},
	{
		type: "numeric-list",
		noBox: true,
		marginBottom: 32,
		content: [
			{
				number: "2",
				text:
					"Here you’ll be able to <strong>Get Started</strong> (desktop) or <strong>Create</strong> (mobile). You’ll have to sign in at this point, or you can create a new Facebook account \n" +
					"if you don’t have one.",
			},
		],
	},
	{
		type: "image",
		content: "fb-create-page-2-5069",
		marginBottom: 24,
	},
	{
		type: "image",
		content: "fb-mobile-create-page-2-5114",
		marginBottom: 56,
	},
	{
		type: "numeric-list",
		noBox: true,
		marginBottom: 56,
		content: [
			{
				number: "3",
				text:
					"Once you’ve logged in, you can enter your business name and some details about your location and contact information. After you’re finished, tap or click <strong>Next</strong> to continue to your new page.",
			},
		],
	},
	{
		type: "image",
		content: "fb-create-a-page-3-4502",
		marginBottom: 24,
	},
	{
		type: "image",
		content: "fb-create-a-page-7921",
		marginBottom: 56,
	},
	{
		type: "numeric-list",
		noBox: true,
		marginBottom: 56,
		content: [
			{
				number: "4",
				text:
					"Once your business page is created you can add your profile and cover photos, edit Messenger settings, add services, and create your first post! Don’t forget to invite your Facebook friends to “Like” your page to get your first few followers.",
			},
		],
	},
	{
		type: "image",
		content: "fb-after-created-page-1195",
		marginBottom: 24,
	},
	{
		type: "image",
		content: "fbm-after-created-page-1052",
		marginBottom: 104,
	},
	{
		type: "header",
		content: "Instagram",
		size: 3,
		template: 4,
		marginBottom: 24,
	},
	{
		type: "text",
		content:
			"Instagram is one of the most popular platforms today, mainly because it’s all about photos and video. Hashtags are used to tag media so that other users can easily find content that appeals to them and have that content displayed on their feed. As a business, you can utilize hashtags to get your products and services in front of more people and begin growing your very own online following with quality content.",
		marginBottom: 24,
	},
	{
		type: "text",
		content: "Here’s how to set up an Instagram account for your business:",
		marginBottom: 56,
	},
	{
		type: "numeric-list",
		noBox: true,
		marginBottom: 56,
		content: [
			{
				number: "1",
				text:
					"First, visit <a href='https://instagram.com/' target='_blank' rel='nofollow'>Instagram</a>. Tap or click <strong>Sign Up</strong> to get started.",
			},
		],
	},
	{
		type: "image",
		content: "instagram-signup-4459",
		marginBottom: 24,
	},
	{
		type: "image",
		content: "instagram-m-sign-up-3811",
		marginBottom: 56,
	},
	{
		type: "numeric-list",
		noBox: true,
		marginBottom: 56,
		content: [
			{
				number: "2",
				text:
					"Type in your information and click <strong>Sign Up</strong> (desktop) or <strong>Next</strong> (mobile). Instagram prefers a phone number to sign up, but you can use your email as well. On mobile, you’ll see another screen where you can enter your desired password and confirm your account name.",
			},
		],
	},
	{
		type: "image",
		content: "instagram-signup-2-4502",
		marginBottom: 24,
	},
	{
		type: "image",
		content: "instagram-signup-2-5445",
		marginBottom: 56,
	},
	{
		type: "numeric-list",
		noBox: true,
		marginBottom: 56,
		content: [
			{
				number: "3",
				text:
					"Once inside your brand-new account, you can tap or click on your profile icon to add a profile photo and some information about your company. Once you’re finished, just click <strong>Submit</strong> and you’re done!",
			},
		],
	},
	{
		type: "image",
		content: "instagram-fill-out-4525",
		marginBottom: 56,
	},
	{
		type: "numeric-list",
		noBox: true,
		marginBottom: 24,
		content: [
			{
				number: "4",
				text:
					"Now, to switch your Instagram account from personal to business, you’ll have to proceed on a mobile device. Tap the menu icon (mmm… burgers) and then tap <strong>Settings</strong> to access additional options.",
			},
		],
	},
	{
		type: "image",
		content: "instagram-m-settings-4577",
		marginBottom: 56,
	},
	{
		type: "numeric-list",
		noBox: true,
		marginBottom: 56,
		content: [
			{
				number: "5",
				text:
					"Near the bottom, tap <strong>Switch to Professional Account</strong>. There are a few options to select, and once you make the switch, you’ll be able to access data such as how your posts are performing and insights about your followers. This allows you to create paid promotions that really hit home with your target audience. You’ll also have the option to add a “Contact” button to your profile to make it easier for customers to connect with you.",
			},
		],
	},
	{
		type: "image",
		content: "instagram-switch-personal-4593",
		marginBottom: 104,
	},
	{
		type: "header",
		content: "Twitter",
		size: 3,
		template: 4,
		marginBottom: 24,
	},
	{
		type: "text",
		content:
			"Twitter is intended for shorter posts that can feature photos or video \n" +
			"to introduce new ideas, share relevant content, and it allows direct communication between businesses and their customers. You can begin by following relevant companies or public figures who relate to what your business provides and grow your following by posting regularly (often multiple posts per day).",
		marginBottom: 24,
	},
	{
		type: "text",
		content: "Here’s how to set up a Twitter account for your business:",
		marginBottom: 56,
	},
	{
		type: "numeric-list",
		noBox: true,
		marginBottom: 56,
		content: [
			{
				number: "1",
				text:
					"First, visit <a href='https://twitter.com/' rel='nofollow'>Twitter</a>. Tap or click <strong>Sign Up</strong> and you’ll be prompted to input your information.",
			},
		],
	},
	{
		type: "image",
		content: "twitter-signup-3465",
		marginBottom: 56,
	},
	{
		type: "numeric-list",
		noBox: true,
		marginBottom: 56,
		content: [
			{
				number: "2",
				text:
					"Enter your business name and the email address you wish to use for it. \n" +
					"It’s probably a good idea to use your business address (yourname@yourcompany.com). Be sure to read the section below to see how you can secure your domain name and create a branded email address with Web.com if you don’t have one just yet.",
			},
		],
	},
	{
		type: "image",
		content: "twitter-setup-account-5698",
		marginBottom: 56,
	},
	{
		type: "numeric-list",
		noBox: true,
		marginBottom: 56,
		content: [
			{
				number: "3",
				text:
					"On the desktop site, you’ll be asked to enter some additional information about your company. This information will be displayed at the top of your profile, so be sure to tell people what you do and what you’re all about before you click <strong>Next!</strong>",
			},
		],
	},
	{
		type: "image",
		content: "twitter-fill-out-profile-3480",
		marginBottom: 56,
	},
	{
		type: "numeric-list",
		noBox: true,
		marginBottom: 56,
		content: [
			{
				number: "4",
				text:
					"Once inside your account you can see your timeline, which will be empty. This would be a good time to follow some individuals and businesses that share your passion, so you can see what they’re up to. To edit your profile, tap or click on your profile icon.",
			},
		],
	},
	{
		type: "image",
		content: "twitter-edi-t-profile-3376",
		marginBottom: 56,
	},
	{
		type: "numeric-list",
		noBox: true,
		marginBottom: 56,
		content: [
			{
				number: "5",
				text:
					"Inside your profile you can tap or click <strong>Edit profile</strong> to add a photo of your logo, set a cover photo image, and change settings. The only thing left to do is to start tweeting quality content that engages your target audience.",
			},
		],
	},
	{
		type: "image",
		content: "twitter-edit-profile-2-4555",
		marginBottom: 104,
	},
	{
		type: "header",
		content: "LinkedIn",
		size: 3,
		template: 4,
		marginBottom: 24,
	},
	{
		type: "text",
		content:
			"LinkedIn is a must for the savvy entrepreneur looking to make connections. This is a space to showcase your company’s professionalism, knowledge, and expertise with regards to your products and services. It’s a place for you to connect with others in your industry and build strong relationships that can benefit you down the road. Generally, LinkedIn posts should be light and informative, providing readers with new knowledge and creative business concepts.",
		marginBottom: 24,
	},
	{
		type: "text",
		content: "Here’s how to set up a LinkedIn company page for your business:",
		marginBottom: 56,
	},
	{
		type: "numeric-list",
		noBox: true,
		marginBottom: 56,
		content: [
			{
				number: "1",
				text:
					"First, visit <a href='https://linkedin.com/' rel='nofollow' target='_blank'>LinkedIn</a>. This will have to be done on desktop, as LinkedIn doesn’t offer the ability to <strong>create business pages</strong> on mobile. Click Create your page to get started.",
			},
		],
	},
	{
		type: "image",
		content: "linkedin-setup-account-3498",
		marginBottom: 56,
	},
	{
		type: "numeric-list",
		noBox: true,
		marginBottom: 56,
		content: [
			{
				number: "2",
				text:
					"You’ll need to either sign in or create a new account if you aren’t already \n" +
					"a LinkedIn user.",
			},
		],
	},
	{
		type: "image",
		content: "linkedin-login-4509",
		marginBottom: 56,
	},
	{
		type: "numeric-list",
		noBox: true,
		marginBottom: 56,
		content: [
			{
				number: "3",
				text:
					"After you log in, you’ll see four options for creating a company page. Click <strong>Small business</strong> to continue.",
			},
		],
	},
	{
		type: "image",
		content: "linkedin-small-busines-3498",
		marginBottom: 56,
	},
	{
		type: "numeric-list",
		noBox: true,
		marginBottom: 56,
		content: [
			{
				number: "4",
				text:
					"Here you can input your business name and some additional information about the size and type of business that you’re operating. This helps people find you and discover more about what you offer. Once you’re finished, verify your authority to represent your company and click <strong>Create page</strong> to continue to your new page.",
			},
		],
	},
	{
		type: "image",
		content: "linkedin-fillout-profile-3782",
		marginBottom: 56,
	},
	{
		type: "numeric-list",
		noBox: true,
		marginBottom: 56,
		content: [
			{
				number: "5",
				text:
					"There you go – your business is now represented with its own LinkedIn company page that users can access to see your activity and find information about what your business does.",
			},
		],
	},
	{
		type: "image",
		content: "linkedin-finish-4509",
		marginBottom: 56,
	},
	{
		type: "text",
		content:
			"Once you have each of your social accounts secured with your new business name, you can link to them on your business website so that customers have easy access to your content. Creating these accounts serves as a big addition to your brand that will pay dividends as you grow your business and nurture your online reputation. Complete that, and we can move on to Chapter 4!",
		marginBottom: 56,
	},
	{
		type: "buttons",
		content: [
			{
				content: {
					text: "Prev chapter 2",
					url: "/diy-business-course/name-availability/",
				},
				theme: "secondary56",
				arrow: false,
			},
			{
				content: {
					text: "Start chapter 4",
					url: "/diy-business-course/entity-type/",
				},
				theme: "primary56",
			},
		],
	},
];

export const entityType = [
	{
		type: "header",
		content: "Taxation, liability, regulations and more",
		size: 2,
		template: 4,
	},
	{
		type: "text",
		content:
			"Starting a new business is exciting and there are many things that run through your mind. One important aspect that might not, however, is what type of business entity you should form as. The rules are different, the taxes are different, and it makes a difference – so we’re going to take you on a tour of each of the four business entity types to cover what each one represents and the key factors that you should consider. Buckle up!",
		marginBottom: 48,
	},
	{
		type: "header",
		content: "The Limited Liability Company (LLC)",
		size: 3,
		template: 4,
	},
	{
		type: "text",
		content:
			"LLCs are by far the most popular type of entity and are extremely beneficial for small businesses. The setup is quick and easy, they have \n" +
			"a simple business structure, and perhaps most importantly, they are usually inexpensive to get going. In addition:",
		marginBottom: 49,
	},
	{
		type: "list-dot",
		content: {
			list: [
				"They are easier than running a C-Corp or S-Corp",
				"They have fewer rules, regulations and legal compliance issues",
				"They are formed and regulated on a state level",
			],
		},
		color: color.blue3,
		marginBottom: 32,
		curve: true,
		curveColor: color.blue1,
	},
	{
		type: "text",
		content:
			"Just like C-Corps and S-Corps, LLC owners are protected with limited liability. This means that business assets are owned by the company itself. As an owner, your personal assets are not affected by any liability that your business incurs (debt, equipment costs, depreciation, lawsuits, etc.).",
		marginBottom: 24,
	},
	{
		type: "text",
		content:
			"When it comes to taxes, LLCs are similar to sole-proprietorships and partnerships. An LLC doesn’t pay federal income taxes itself, but instead any net profit or loss is passed through to the personal tax returns of the owner(s). The IRS then taxes this as personal income.",
		marginBottom: 24,
	},
	{
		type: "text",
		content:
			"LLCs themselves are liable for specific types of taxes so it’s crucial to have your paperwork in tip-top shape. These taxes are typically written off as business expenses and don’t actually affect your personal bottom line. \n" +
			"If you’re considering forming an LLC, here’s what we’re talking about:",
		marginBottom: 48,
	},
	{
		type: "list-dot",
		content: {
			list: [
				"Payroll tax on salaries paid to employees (not you – owners pay self-employment tax on their personal tax returns)",
				"Sales tax on goods purchased by and for the business",
				"Property taxes on property that the business owns",
			],
		},
		color: color.orange3,
		marginBottom: 48,
		curve: false,
	},
	{
		type: "header",
		content: "The C-Corporation (C-Corp)",
		size: 3,
		template: 4,
	},
	{
		type: "text",
		content:
			"On the other end of the spectrum, we have the C-Corp which is the most formal type of business entity. These are larger companies with many moving parts that issue stock. They are regulated at a state level and formed by filing “Articles of Incorporation” with the secretary of state within the state of incorporation. These are the details:",
		marginBottom: 49,
	},
	{
		type: "list-dot",
		content: {
			list: [
				"A C-Corp must have a board of directors and hold an Annual General Meeting",
				"A C-Corp has limited liability, so the investors and owners of a C-Corp are not generally liable for business debts or other liabilities Ownership of a C-Corp is determined by who owns stock in the company",
				"C-Corps MUST issue stock, and these stocks can be bought and sold on a public stock market if the C-Corp holds an Initial Public Offering, or “IPO”",
				"These companies can raise more finances by issuing stock",
				"The ownership can be fluid and transferred depending on who holds stock at a particular time",
				"C-Corps must meet numerous rules and regulations",
				"C-Corps file corporate tax returns and pay taxes on their profits unlike LLCs and S-Corps, so money earned may be subject to double taxation. This means that shareholder dividends have personal income tax deducted even though the C-Corp itself has already paid taxes on its annual earnings.",
			],
		},
		color: color.blue3,
		marginBottom: 32,
		curve: true,
		curveColor: color.blue1,
	},
	{
		type: "text",
		content: "Here’s what C-Corporation tax rates look like at a glance:",
		marginBottom: 24,
	},
	{
		type: "taxes",
		useListType: true,
		content: [
			{
				text1: "Up to $50,000",
				text2: "15%",
			},
			{
				text1: "50 000-75 000 USD",
				text2: "25%",
			},
			{
				text1: "75 000–100 000 USD",
				text2: "34%",
			},
			{
				text1: "100 000 - 335 000 USD",
				text2: "39%",
			},
			{
				text1: "335 000–10 000 000 USD",
				text2: "34%",
			},
			{
				text1: "10 000 000 - 15 000 000 USD",
				text2: "35%",
			},
			{
				text1: "15 000 000 $ - 18 333 333 $",
				text2: "38%",
			},
			{
				text1: "More than $18,333,333",
				text2: "35%",
			},
		],
		marginBottom: 48,
	},
	{
		type: "header",
		content: "The Subchapter or Small Business Corporation (S-Corp)",
		size: 3,
		template: 4,
	},
	{
		type: "text",
		content:
			"S-Corps are similar to C-Corps as you may expect, but they’re a little simpler and easier to run. They are formed at a state level and were enacted into law in 1958 to encourage the creation of small and family businesses – without the double taxation element. That sounds great, right? Here are some of the conditions and qualities of an S-Corp:",
		marginBottom: 49,
	},
	{
		type: "list-dot",
		content: {
			list: [
				"Owners and investors have personal liability that is separate from the S-Corp’s liability, and the owner’s personal liability is limited to the value of their investment (same goes for investors)",
				"The owners aren’t personally liable for business debts, claims, or other liabilities",
				"Compared to an LLC, there are more legalities, rules, and compliance requirements for an S-Corp",
				"The corporate structure is more complex",
				"S-Corps are capped at 100 shareholders and cannot exceed this limit",
			],
		},
		color: color.green3,
		marginBottom: 48,
		curve: false,
	},
	{
		type: "text",
		content:
			"S-Corps don’t need to pay corporate income taxes like C-Corps do. S-Corps fall under a different designation with the IRS that is similar to that of an LLC. The net profit or loss generated by an S-Corp will flow through to the owners and shareholders who will file personal returns and pay income tax on these amounts.",
		marginBottom: 24,
	},
	{
		type: "text",
		content:
			"Now, if you form an LLC, you can choose to be treated as an S-Corp for tax purposes. This results in the best of both worlds to an extent:",
		marginBottom: 49,
	},
	{
		type: "list-dot",
		content: {
			list: [
				"The rules for LLCs are less of a burden than the rules of an S-Corp",
				"There may be advantages to being taxed as an S-Corp with regards to owners and members taking money out of the business",
				"You can choose to pay yourself a modest salary and deduct anything above that amount as share dividend income – income that isn’t reduced by self-employment tax,but personal income tax instead.",
			],
		},
		color: color.orange3,
		marginBottom: 56,
		curve: false,
	},
	{
		type: "header",
		content: "The Nonprofit Corporation",
		size: 3,
		template: 4,
	},
	{
		type: "text",
		content:
			"Nonprofits are exactly what they sound like – companies that don’t intend to profit but are working to achieve a specific goal that’s of public interest. This means that any revenue generated by Nonprofits goes straight to that goal. They are still allowed to create profit through their efforts, but that profit must go towards the preservation and expansion of the corporation. Nonprofits have the same rights and privileges as other business types as a legal entity is still being formed at a state level.",
		marginBottom: 24,
	},
	{
		type: "text",
		content:
			"Nonprofit corporations are exempt from federal, sales, and property taxes. They still need to pay payroll taxes, though, and can be taxed if they make money from activities that aren’t related to their main goal. \n" +
			"To get this sort of tax treatment from the IRS, the majority of Nonprofit corporations will file a 501c3 form.",
		marginBottom: 48,
	},
	{
		type: "header",
		content: "Which Entity Type is Right for Your Business?",
		size: 3,
		template: 4,
	},
	{
		type: "text",
		content:
			"Forming a legal business entity separates you from your business and there are significant perks that come with doing so. For homework, take the Business Type Quiz to determine the best entity option for your new company. We’ll then provide some tailored information based on your results!",
		marginBottom: 36,
	},
	{
		type: "button",
		content: {
			text: "Business Type Quiz Info",
			url: "/business-entity-quiz/explain/",
		},
		theme: "primary56",
	},
	{
		type: "header",
		content: "A Word to All the Sole Proprietors and Partners",
		size: 3,
		template: 4,
	},
	{
		type: "text",
		content:
			"Right now, your business is really just you (and your partners if you have any). The IRS sees you as an individual, so any revenue that your company generates is essentially personal income that is taxed normally. When you form a legal business entity, you separate your company from yourself and any partners and remove the liability that comes with typical business operations. Think of it this way; if someone wanted to file a lawsuit against your business, they would be filing it against you if you are a sole proprietor. Any loses that your company takes are your losses.",
		marginBottom: 80,
	},
	{
		type: "buttons",
		content: [
			{
				content: {
					text: "Prev chapter 3",
					url: "/diy-business-course/digital-footprint/",
				},
				theme: "secondary56",
				arrow: false,
			},
			{
				content: {
					text: "Start chapter 5",
					url: "/diy-business-course/lc-formation/",
				},
				theme: "primary56",
			},
		],
	},
];

export const diyLLC = [
	{
		type: "header",
		content: "Take the Reins and Prepare your Documents",
		size: 2,
		template: 4,
	},
	{
		type: "text",
		content:
			"The time has come to start making things official for your new business, and there are specific documents that need to be prepared based on your state of incorporation. To begin this process, you’ll select your state, get access to the Articles of Organization that apply to your business and then submit these documents to the state. It’s beginning to feel real now, right? That’s great! Plow ahead with these steps and your brand-new business will be up and running in no time.",
		marginBottom: 48,
	},
	{
		type: "header",
		content: "Select Your State",
		size: 3,
		template: 4,
	},
	{
		type: "text",
		content:
			"Each state has different regulations and requirements for LLC formation, and you’ll want to make sure that you choose the correct state where your business will be physically located. If your business is online, choose the state where you permanently reside. Some states require you to have \n" +
			"a Registered Agent, while others don’t, and each state will have unique paperwork that will make a difference when forming your new business.",
		marginBottom: 48,
	},
	{
		type: "header",
		content: "Obtain a Copy of the Articles of Organization",
		size: 3,
		template: 4,
	},
	{
		type: "text",
		content:
			"Once you’ve provided your company name, address and details about the members of your new LLC, you’ll receive the Articles of Organization paperwork to complete and submit to the Secretary of State. Some states might use a different name for these, such as Certificate of Organization or Certificate of Formation, but they serve the same purpose in the formation of your business.",
		marginBottom: 48,
	},
	{
		type: "header",
		content: "Fill Out the Articles of Organization",
		size: 3,
		template: 4,
	},
	{
		type: "text",
		content:
			"You’ll need to have all of your information handy to complete the required forms. <a href='/'>Articles of Organization</a> ask for specific details, such as:",
		marginBottom: 24,
	},
	{
		type: "list-dot",
		content: {
			list: [
				"Your business name and address",
				"Details of your Registered Agent",
				"Who the governing authority is",
				"Purpose of the LLC",
				"Supplemental provisions",
				"Name of the organizer",
				"Whether your LLC will be <a href='/'>member-managed or manager-managed</a>",
			],
		},
		color: color.orange3,
		marginBottom: 32,
		curve: true,
		curveColor: color.orange1,
	},
	{
		type: "text",
		content:
			"Once you have completed the forms, you can pay the fee and file your documents with the Secretary of State. If you partner with Incfile, we’ll handle the completion and filing of these documents on your behalf and track their status to let you know of any notifications.",
		marginBottom: 48,
	},
	{
		type: "header",
		content: "Publish a Formation Notice in the Newspaper",
		size: 3,
		template: 4,
	},
	{
		type: "text",
		content:
			"If you plan to operate your business in either Arizona, Nebraska or New York, it is required to declare your new LLC to the public by posting a notice of formation advertisement in the local paper (make sure that the paper operates in the same county). Your ad will need to run three times within 60 days of your LLC being approved. This isn’t a requirement for other states, but it’s good to have an understanding of individual requirements in case you ever expand your business outside of your home state.",
		marginBottom: 48,
	},
	{
		type: "header",
		content: "Choose a Registered Agent",
		size: 3,
		template: 4,
	},
	{
		type: "text",
		content:
			"When completing your Articles of Organization, you’ll need to name your designated Registered Agent. Incfile provides you with a free Registered Agent for your first year of business as part of our service, but if you’re using a third party, they’ll be the ones who receive and pass on any official tax or legal correspondence to your provided business address. Your company isn’t allowed to act as its own agent, but you can designate a member within your company to <a href='/'>act as your agent at an individual capacity.</a>",
		marginBottom: 24,
	},
	{
		type: "text",
		content:
			"Besides it being a requirement, having a Registered Agent is actually quite desirable as they enable you to focus all of your energy into building and scaling your business while they act as a gatekeeper for state and legal information that can cause distractions from your work.",
		marginBottom: 48,
	},
	{
		type: "header",
		content: "Draft an Operating Agreement",
		size: 3,
		template: 4,
	},
	{
		type: "text",
		content:
			"For many businesses, their <a href='/'>Operating Agreement</a> is one of the most important documents to have in their arsenal. Your Operating Agreement outlines the roles and responsibilities of each owner and member of your LLC and acts as the final word when there are any discrepancies within your business. Operating Agreements aren’t required by the state, but any LLC with two or more members is highly encouraged to draft one to avoid complications down the road.",
		marginBottom: 24,
	},
	{
		type: "text",
		content:
			"Operating Agreements can include information about specific responsibilities, as well as protocol for when a member or owner wants to disassociate themselves with the LLC (like an exit strategy). Whenever there’s a question about the mechanics of the company, you can consult your Operating Agreement — signed by all owners and members — to determine the steps to take in various business situations.",
		marginBottom: 48,
	},
	{
		type: "header",
		content: "Obtain an EIN",
		size: 3,
		template: 4,
	},
	{
		type: "text",
		content:
			"If you’re a solopreneur, you may not think that an EIN is required for your business. Perhaps you don’t plan to be an employer or have employees. But an Employer Identification Number provides more benefits than just the ability to hire subordinates. Your EIN enables you to <a href='/'>open company bank accounts</a>, build business credit and apply for corporate loans. If your LLC will have more than one member or is set up as a partnership, you’ll be required to have an EIN for filing business taxes.",
		marginBottom: 24,
	},
	{
		type: "text",
		content:
			"To obtain your EIN, you’ll complete form SS-4 and submit it to the IRS. Incfile can handle this process for you, and can even provide you with your EIN in as little as one business day!",
		marginBottom: 48,
	},
	{
		type: "header",
		content: "Putting It All Together",
		size: 3,
		template: 4,
	},
	{
		type: "text",
		marginBottom: 24,
		content:
			"Gathering the right forms and ensuring everything is completed properly can be a daunting task, but this is where your business really becomes official. Once you submit your paperwork to your state, it’s time to play the waiting game! Depending on your state, it could take several days or even weeks to receive the approval for your new LLC. You always have the option to expedite the filing for a fee, which may be ideal, depending on your schedule needs.",
	},
	{
		type: "text",
		content:
			"When you work with Incfile to form your LLC, our team takes care of all the paperwork listed above, files your Articles of Organization and obtains your EIN all on your behalf. It’s handy to have a partner that can look after the boring stuff, and we’ll do it for as little as $0 + state filing fee.",
		marginBottom: 24,
	},
	{
		type: "buttons",
		content: [
			{
				content: {
					text: "Prev chapter 4",
					url: "/diy-business-course/entity-type/",
				},
				theme: "secondary56",
				arrow: false,
			},
			{
				content: {
					text: "Start chapter 6",
					url: "/diy-business-course/before-after/",
				},
				theme: "primary56",
			},
		],
	},
];

export const afterFilling = [
	{
		type: "header",
		content:
			"Hold your horses for just a moment, there’s a little more to be done!",
		size: 2,
		template: 4,
		marginBottom: 24,
	},
	{
		type: "text",
		content:
			"First of all...you did it! Congratulations on entering this exciting chapter — you probably feel proud, motivated and perhaps a little nervous, and there’s nothing wrong with that. You are in control now, and as you ramp up to start doing business, we want to make sure that you’re equipped to take on your first few customers. Here are some steps to take now that you’ve filed your new business:",
		marginBottom: 48,
	},
	{
		type: "header",
		content: "<a href='/business-license-tool/'>Obtain Your Permits and Licenses</a>",
		size: 3,
		template: 4,
		marginBottom: 24,
	},
	{
		type: "text",
		content:
			"Depending on the nature of your business, you may be required to apply for and obtain permits that are specific to your business operation. Permits for liquor or other controlled products may be an obviously necessary step for some, but most municipalities also require business licenses for all companies that wish to operate within city limits. If you’re planning to run everything from your home and host clients on your own property, you may be required to obtain a permit for a <a href='/blog/post/how-start-home-business/'>home-based business</a> and make alterations to your home to meet bylaw requirements for public access.",
		marginBottom: 24,
	},
	{
		type: "text",
		content:
			"The best way to ensure that your business is ticking all of the right boxes and avoids getting into trouble with your municipality is to contact them directly to speak with their business licensing office. This way you can get the right information straight from the horse’s mouth and deal with any necessary permits while you’re awaiting your LLC approval.",
		marginBottom: 48,
	},
	{
		type: "header",
		content: "Get a Business Bank Account",
		size: 3,
		template: 4,
		marginBottom: 24,
	},
	{
		type: "text",
		content:
			"If you haven’t obtained your EIN yet, it’s time to get into gear! You’ll need to provide your EIN when setting up business accounts with your local bank so that everything is tied to your LLC and not to you. Incfile can help by handling the EIN paperwork and obtaining an EIN within just one day on your behalf.",
		marginBottom: 24,
	},
	{
		type: "text",
		content:
			"A business bank account will allow your LLC to issue and cash checks and also simplify the accounting process since business expenses can be paid for by the business via a <a href='http://t.tihop.com/cgi/r?;n=203;c=1666272;s=7273;x=7936;f=201908011042310;u=j;z=TIMESTAMP;src=663024'>business credit or debit card</a>. Once your LLC is approved, it will create a lot more work if you are constantly spending from your personal account to purchase supplies and assets for your business — remember, a big reason for the LLC is to separate you from your company!",
		marginBottom: 24,
	},
	{
		type: "text",
		content:
			"You’ll also want to complete a Banking Resolution, and file a “Statement and Resignation of the Organizer.” These documents aren’t required by the state but will help your bank verify your authorization to control the accounts.",
		marginBottom: 48,
	},
	{
		type: "list-dot",
		content: {
			list: [
				"<span style='margin-bottom: 8px;'>Banking Resolution</span><br /> Authorizes bank accounts to be opened and determines who will have signing authority for each account.",
				"<span style='margin-bottom: 8px;'>Statement and Resignation of the Organizer</span><br /> A letter from your designated organizer or agent naming you and other members as official owners of the LLC and resigning themselves from any ownership. This shows the bank that you are the real owner and that they can deal directly with you for the management of your LLC’s business accounts.",
			],
		},
		curve: true,
		curveColor: color.orange1,
		color: color.orange3,
		marginBottom: 48,
	},
	{
		type: "header",
		content: "Meet with an Accountant",
		size: 3,
		template: 4,
		marginBottom: 24,
	},
	{
		type: "text",
		content:
			"The final step to take while awaiting the approval of your LLC is to meet with an accountant to determine your tax structure and discuss necessary steps that will simplify your accounting process and aid in the financial success of your new business. Our Incfile formation service offers a free tax consultation call that can help you get started and provide answers to some of your initial questions. Diving in deeper can help you get a handle on how to manage your accounting as you continue to grow.",
		marginBottom: 48,
	},
	{
		type: "header",
		content: "A Little Preparation Goes a Long Way",
		size: 3,
		template: 4,
		marginBottom: 24,
	},
	{
		type: "text",
		content:
			"We know that you’re excited to get moving and serve your first customers, and by following these steps, you’ll be fully equipped to begin your business on a solid footing. The effort that you put into preparation now will help save you from a rough start and set you on a course for stable success.",
		marginBottom: 24,
	},
	{
		type: "text",
		content:
			"Incfile is always here to provide support and help you navigate the LLC formation process. If you’re ever feeling stuck, reach out to us! We’re never more than a click or a phone call away.",
		marginBottom: 56,
	},
	{
		type: "button",
		content: {
			text: "Prev chapter 5",
			url: "/diy-business-course/lc-formation/",
		},
		theme: "secondary56",
		arrow: false,
	},
];
