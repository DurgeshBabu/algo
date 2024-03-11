// Initialize an object to store reward points for each commodity
let rewardPoints = {};
const rewardPercentage = 0.01; // Example reward percentage

// Function to calculate reward for each purchase
function calculateReward(purchaseAmount) {
    return purchaseAmount * rewardPercentage;
}

// Function to handle customer purchases
function handlePurchase(commodity, purchaseAmount) {
    let reward = calculateReward(purchaseAmount);

    if (!rewardPoints.hasOwnProperty(commodity)) {
        rewardPoints[commodity] = 0;
    }

    rewardPoints[commodity] += reward;

    console.log(`You earned a reward of ${reward.toFixed(2)} for purchasing ${commodity}.`);
    console.log(`Your total reward balance for ${commodity}: ${rewardPoints[commodity].toFixed(2)}`);
}

// Function to use rewards for a purchase of a specific commodity
function useRewards(commodity, amountToUse) {
    if (rewardPoints.hasOwnProperty(commodity) && rewardPoints[commodity] >= amountToUse) {
        rewardPoints[commodity] -= amountToUse;
        console.log(`You used ${amountToUse.toFixed(2)} of your reward for purchasing ${commodity}.`);
    } else {
        console.log(`You either don't have enough reward for ${commodity} or you haven't earned any reward for it.`);
    }
}

// Hardcoded purchase amount and reward usage
let commodityToBuy = "Food";
let purchaseAmount = 1000;
let amountToUse = 5; // Example amount to use
handlePurchase(commodityToBuy, purchaseAmount);
useRewards(commodityToBuy, amountToUse);
