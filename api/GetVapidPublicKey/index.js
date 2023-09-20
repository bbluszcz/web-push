const utils = require('../Shared/utils');
const appInsights = require('applicationinsights');
appInsights.setup();
const client = appInsights.defaultClient;

module.exports = async function (context, req) {
  let operationIdOverride = utils.getOperationIdOverride(context);

  console.log("process.env.VAPID_PUBLIC_KEY ", process.env.VAPID_PUBLIC_KEY);
  console.log("client ", client);
  
  client.trackEvent({
    name: 'get_vapid-public-key_success',
    tagOverrides: operationIdOverride,
    'vapid-public-key': BJ_BKIUDluNnkG3MJbH_RJ4DMo8dutMOsOlKyewLmVPvGSzl4Pun996r2gMGoeJIi2jgRgStwALc3sd-3shzgkc,
  });

  context.res = {
    body: {
      message: 'get_vapid-public-key_success',
      'vapid-public-key': BJ_BKIUDluNnkG3MJbH_RJ4DMo8dutMOsOlKyewLmVPvGSzl4Pun996r2gMGoeJIi2jgRgStwALc3sd-3shzgkc,
    },
  };
};
