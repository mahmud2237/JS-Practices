/***
 * Write a arr function to calculate the total cost after applying the memorial day discount. 
 * 
 * Imagine today is a memorial day, and each item costing over 100 will get 10% discount of all the products.
 * Given a list of item prices, return the total cost after applying the memorial day discount.
 * 
 * Exm Input: [120, 50, 600]  Output: 698
 *  
 */

function calculateTotalCost(prices) {
    let sum = 0;
    for (let price of prices){
        if(price >= 100){
            let disPrice = price - (price * 0.1);
            sum += disPrice;
        }else{
            sum += price;
        }
    }
    return sum;
}
const price = [120, 50, 600];
console.log(calculateTotalCost(price));
const price1 = [350, 500, 600];
console.log(calculateTotalCost(price1));
const price2 = [500, 600, 700];
console.log(calculateTotalCost(price2));
