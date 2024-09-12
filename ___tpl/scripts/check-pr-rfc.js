module.exports = ({ github, core, context }) => {
  let jsonRfcRegistry;

  try {
    jsonRfcRegistry = require('.repo/rfc-registry.json');
  } catch (e) {
    core.setFailed("RFC registry file is missing");
    return;
  }

  const { rfcPRsRegistered } = jsonRfcRegistry;
  if (!Array.isArray(rfcPRsRegistered)) {
    core.setFailed("RFC PR registery entry is missing!");
    return;
  }

  const currentPrNumber = context.payload.pull_request.number;
  const foundCurrentPRidx = rfcPRsRegistered.findIndex((registeredPR) => registeredPR === currentPrNumber);



  // TODO: Do the RFC PR validation elsewhere?

  // const prTitle = context.payload.pull_request.title;
  // const VALID_RFC_TITLE_REGEX = /^(rfc\(([a-z]|\-)+\))\:\s(\w|\s)+$/;

  // if (!VALID_RFC_TITLE_REGEX.test(prTitle)) {
  //   // TODO: Not valid RFC PR title, skip all checks
  //   return;
  // }

  // // TODO: Check if RFC directorate is valid or not

  // const currentPrNumber = context.payload.pull_request.number;
  // const foundCurrentPRidx = rfcPRsRegistered.findIndex((registeredPR) => registeredPR === currentPrNumber);

  // if (foundCurrentPRidx < 0) {
  //   // handle registration make commit IF this is an RFC PR
  //   return;
  // }

}