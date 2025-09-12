const transactions = [
  { id: "t1", userId: 101, category: "food",   amount: 120.5,  currency: "INR", ts: "2025-08-01T09:10:00Z" },
  { id: "t2", userId: 101, category: "travel", amount:  80.00, currency: "INR", ts: "2025-08-02T14:33:00Z" },
  { id: "t3", userId: 102, category: "food",   amount:  60.00, currency: "INR", ts: "2025-08-02T07:05:00Z" },
  { id: "t4", userId: 101, category: "food",   amount: -20.00, currency: "INR", ts: "2025-08-03T10:00:00Z" } // refund
];

function displayError(value){
    console.error(`Invalid input: ${value}`);
    return null;
}

function sortSummary(summary){

    for (let i=0;i<summary.length-1;i++){
        for (let j=0;j<summary.length-i-1;j++){
            if (summary[j].totalAmount<summary[j+1].totalAmount){
                let temp = summary[j];
                summary[j] = summary[j+1];
                summary[j+1] = temp;
            }
        }
    }
    return summary;
}

function prepareTransactionSummary(transactions){
    const userIds = new Set();
    for (let i=0;i<transactions.length;i++){
        userIds.add(transactions[i].userId);
    }

    let outputArray = [];
    for(const id of userIds){
        const summary = {
            key: id,                  
            totalAmount: 0,
            byCategory: {},
            count: 0,
            lastTransactionAt: "",
            currency: ""
        };
        for (let i=0;i<transactions.length;i++){
            if(transactions[i].userId === summary.key){
                if (transactions[i].amount === null) {
                    displayError(transactions[i].amount);
                    continue;
                }
                summary.totalAmount += transactions[i].amount;
                const currentCategory = transactions[i].category;
                const currentTransactionAmount = transactions[i].amount;
                if (summary.byCategory[currentCategory]){
                    summary.byCategory[currentCategory] += currentTransactionAmount;
                }else{
                    summary.byCategory[currentCategory] = currentTransactionAmount;
                }
                summary.count++;
                if (transactions[i].ts>summary.lastTransactionAt){
                    summary.lastTransactionAt = transactions[i].ts;
                }
                summary.currency = transactions[i].currency;
            }
        }
        outputArray.push(summary);
    }
    outputArray = sortSummary(outputArray);
    return outputArray;
}

console.log(prepareTransactionSummary(transactions));
