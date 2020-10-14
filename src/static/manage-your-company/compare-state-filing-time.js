import {color} from "../../atomic/atoms/styles/colors";

export const rocket = {
    header: "Launch",
    header2: "your business with Incfile",
    text: "No Contracts. No Surprise.",
    text2: "Only $0 + State Fee to Launch Your Business.",
    button: {
        text: "Launch your business",
        url: `${process.env.ORDER_URL}/form-order-now.php`,
    }
};

export const states = {
    header: "Which States Are Fast?",
    tabs: {
        headers: [ "Filling Times", "Expedited Time", "Expedited Price" ],
        panels: [
            [
                {
                    title: '1 Business Day',
                    percent: '80',
                    states: ['Alaska', 'Illinois', 'Kansas', 'Minnesota', 'Missouri', 'New Jersey', 'Rhode Island', 'Tennessee', 'Wisconsin']
                }, {
                    title: '2 Business Days',
                    percent: '40',
                    states: ['Colorado']
                }, {
                    title: '2 Business Days',
                    percent: '40',
                    states: ['Indiana', 'Massachusetts', 'Mississippi']
                }
            ],
            [
                {
                    title: '1 Business Day',
                    percent: '80',
                    states: ['Alaska', 'Illinois', 'Kansas', 'Minnesota', 'Missouri', 'New Jersey', 'Rhode Island', 'Tennessee', 'Wisconsin']
                }, {
                    title: '2 Business Days',
                    percent: '40',
                    states: ['Colorado']
                }, {
                    title: '2 Business Days',
                    percent: '40',
                    states: ['Indiana', 'Massachusetts', 'Mississippi']
                }
            ],
            [
                {
                    title: '1 Business Day',
                    percent: '80',
                    states: ['Alaska', 'Illinois', 'Kansas', 'Minnesota', 'Missouri', 'New Jersey', 'Rhode Island', 'Tennessee', 'Wisconsin']
                }, {
                    title: '2 Business Days',
                    percent: '40',
                    states: ['Colorado']
                }, {
                    title: '2 Business Days',
                    percent: '40',
                    states: ['Indiana', 'Massachusetts', 'Mississippi']
                }
            ]
        ]
    }
};

export const compare = {
    announcement: {
        content: {
            text: "The option to expedite your Business filing with the Secretary of State will be presented within the first page of the order process. ",
            link: {
                text: "Learn more",
                url: `${process.env.ORDER_URL}/form-order-now.php`
            },
            color: color.blue3
        }
    },
    headers: ['State', 'Normal processing time', 'Expedited processing time', 'Expedited Price'],
    // entries: [{
    //     state: 'Alaska',
    //     normalProcessingTime: '5 Bussiness Days',
    //     expeditedProcessingTime: '1 Business Day',
    //     expeditedPrice: '$50',
    //     selected: true
    // }, {
    //     state: 'Alabama',
    //     normalProcessingTime: '4 Weeks',
    //     expeditedProcessingTime: '15 Business Days',
    //     expeditedPrice: '$50',
    //     selected: true
    // }, {
    //     state: 'Arizona',
    //     normalProcessingTime: '15 Business Days',
    //     expeditedProcessingTime: '5 Business Days',
    //     expeditedPrice: '$50',
    //     selected: false
    // }, {
    //     state: 'Arkansaas',
    //     normalProcessingTime: '5 Bussiness Days',
    //     expeditedProcessingTime: '1 Business Day',
    //     expeditedPrice: '$50',
    //     selected: false
    // }, {
    //     state: 'California',
    //     normalProcessingTime: '4 Weeks',
    //     expeditedProcessingTime: '15 Business Days',
    //     expeditedPrice: '$50',
    //     selected: false
    // }, {
    //     state: 'Delaware',
    //     normalProcessingTime: '15 Business Days',
    //     expeditedProcessingTime: '5 Business Days',
    //     expeditedPrice: '$50',
    //     selected: true
    // }, {
    //     state: 'Georgia',
    //     normalProcessingTime: '5 Business Days',
    //     expeditedProcessingTime: '1 Business Days',
    //     expeditedPrice: '$50',
    //     selected: false
    // }]
};

export const top = {
  header: "Easily Compare State Filing Times",
  text: "Use our comparison tool to help you evaluate the processing times \n" +
      "of each state."
};