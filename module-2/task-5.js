const checkForSpam = function (message) {
  const words = message.toLowerCase();
  const spamSaleCheck = words.includes("sale") || words.includes("spam");

  return spamSaleCheck;
};

console.log(checkForSpam("Latest technology news")); // false

console.log(checkForSpam("JavaScript weekly newsletter")); // false

console.log(checkForSpam("Get best sale offers now!")); // true

console.log(checkForSpam("[SPAM] How to earn fast money?")); // true
