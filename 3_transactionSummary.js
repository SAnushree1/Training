const transactions = [
  { id: "t1", userId: 101, category: "food",   amount: 120.5,  currency: "INR", ts: "2025-08-01T09:10:00Z" },
  { id: "t2", userId: 101, category: "travel", amount:  80.00, currency: "INR", ts: "2025-08-02T14:33:00Z" },
  { id: "t3", userId: 102, category: "food",   amount:  600.00, currency: "INR", ts: "2025-08-02T07:05:00Z" },
  { id: "t4", userId: 101, category: "food",   amount: -20.00, currency: "INR", ts: "2025-08-03T10:00:00Z" } // refund
];

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
        const summary = {};
        const key = id;
        let totalAmount = 0;
        let byCategory = {};
        let count = 0;
        let lastTransactionAt = "";
        let currency = "";
        for (let i=0;i<transactions.length;i++){
            if(transactions[i].userId === key){
                totalAmount += transactions[i].amount;
                if (byCategory[transactions[i].category]){
                    byCategory[transactions[i].category] += transactions[i].amount;
                }else{
                    byCategory[transactions[i].category] = transactions[i].amount;
                }
                count++;
                if (transactions[i].ts>lastTransactionAt){
                    lastTransactionAt = transactions[i].ts;
                }
                currency = transactions[i].currency;
            }
        }
        
        summary["key"] = key;
        summary["totalAmount"] = totalAmount;
        summary["byCategory"] = byCategory;
        summary["count"] = count;
        summary["lastTransactionAt"] = lastTransactionAt;
        summary["currency"] = currency;
        outputArray.push(summary);
    }
    outputArray = sortSummary(outputArray);
    return outputArray;
}

console.log(prepareTransactionSummary(transactions));