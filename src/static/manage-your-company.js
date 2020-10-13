export const top = {
  header: `Manage Your Company`,
  text: `Helping entrepreneurs form their businesses is just one of the many services we offer. As your business grows 
      we'll be there every step of the way to make sure that you have the resources at hand to service your companies ongoing needs.`,
  button: [
    {
      text: "Incorporate now",
      url: `${process.env.ORDER_URL}/form-order-now.php`,
    },
  ],
};

export const help = {
  header: `We are here to help`,
  text: `We understand that questions come up every turn of your business`,
  buttons: [
    {
      text: `Start Now`,
      url: `${process.env.ORDER_URL}/form-order-now.php`,
    },
    {
      text: `Read FAQ`,
      url: `/learn-more/`,
    },
  ],
};

export const certificates = {
  header: `Corporate LLC Kits & Stock Certificates.`,
  text: `All Corporations are required to maintain a "corporate minute book" that holds things like the formation paperwork, licenses, resolutions and meeting minutes. It is one of the first things requested when your company is audited or being sold.`,
  list: [`Slip Case and Binder`, `20 Custom Printed Stock Certificates`, `Metal Die-Cast Embossing Seal`, `Stock Transfer Ledger`, `Operating Agreement for LLCs`, `Minutes and By-Laws for Corporations`],
  button: {
    text: `Show more`,
    url: `/manage-your-company/corporatellc-kit/`,
  },
};
