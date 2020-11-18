import { color } from "../../components/styles/colors";

export const seo = {
  title: `Read reviews & testimonials for Incfile | Incfile Reviews`,
  desc: `Incfile Customer Reviews & Testimonials`,
};

export const top = {
  header: `Incfile.com Reviews`,
  text: `<p>We've been trusted by 250,000+ business owners worldwide since 2004. </br>See what your fellow entrepreneurs are saying about Incfile.</p>`,
  box1: {
    text1: `4.8`,
    text2: `Out of 5.0`,
    color: color.green3,
  },
  box2: [
    {
      name: `5 star`,
      total: `10,900`,
      percent: `90`,
    },
    {
      name: `4 star`,
      total: `1662`,
      percent: `50`,
    },
    {
      name: `3 star`,
      total: `500`,
      percent: `20`,
    },
    {
      name: `2 star`,
      total: `48`,
      percent: `10`,
    },
    {
      name: `1 star`,
      total: `2`,
      percent: `1`,
    },
  ],
  box3: {
    text1: `Overall Rating`,
  },
  box4: {
    text1: `96%`,
    text2: `of customers that buy from this merchant give them a 4 or 5 Star rating`,
  },
};

export const reviews = [
  {
    rate: 5,
    verified: true,
    author: `John Doe`,
    date: `2019-07-06`,
    address: `VA, United State`,
    text: `Easy-to-follow dashboard experience. Easy way to pay with no worries.`,
  },
  {
    rate: 5,
    verified: true,
    author: `John Doe 2`,
    date: `2019-08-06`,
    address: `VA, United State`,
    text: `aaa`,
  },
  {
    rate: 5,
    verified: false,
    author: `John Doe 3`,
    date: `2019-09-16`,
    address: `CA, United State`,
    text: `Easy-to-follow dashboard experience. Easy way to pay with no worries.`,
  },
  {
    rate: 3,
    verified: true,
    author: `John Doe 4`,
    date: `2020-07-06`,
    address: `FL, United State`,
    text: `Easy-to-follow dashboard experience. Easy way to pay with no worries.`,
  },
  {
    rate: 2,
    verified: false,
    author: `John Doe 5`,
    date: `2020-03-15`,
    address: `TX, United State`,
    text: `Easy-to-follow dashboard experience. Easy way to pay with no worries.`,
  },
  {
    rate: 5,
    verified: true,
    author: `John Doe 6`,
    date: `2020-09-29`,
    address: `DE, United State`,
    text: `Easy-to-follow dashboard experience. Easy way to pay with no worries.`,
  },
  {
    rate: 1,
    verified: true,
    author: `John Doe 7`,
    date: `2019-08-06`,
    address: `VA, United State`,
    text: `Easy-to-follow dashboard experience. Easy way to pay with no worries.`,
  },
  {
    rate: 4,
    verified: true,
    author: `John Doe 8`,
    date: `2018-07-06`,
    address: `VA, United State`,
    text: `Easy-to-follow dashboard experience. Easy way to pay with no worries.`,
  },
  {
    rate: 3,
    verified: true,
    author: `John Doe 9`,
    date: `2017-10-06`,
    address: `GA, United State`,
    text: `Easy-to-follow dashboard experience. Easy way to pay with no worries.`,
  },
  {
    rate: 5,
    verified: false,
    author: `John Doe 10`,
    date: `2019-11-20`,
    address: `VA, United State`,
    text: `Easy-to-follow dashboard experience. Easy way to pay with no worries.`,
  },
];

export const trust = {
  header: `Trusted by over <span style="color:#fd8550">500,000</span> business owners worldwide since 2004!`,
  button1: {
    text: `See Plans & Pricing`,
    url: `${process.env.ORDER_URL}/form-order-now.php`,
  },
  button2: {
    text: `Explore more benefits`,
    url: `/why-choose-incfile/`,
  },
};
