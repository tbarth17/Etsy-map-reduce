/*average price*/
avgPrice = items.map(function(sort) {
  return sort.price;
}).reduce(function(a, b){
  return a + b;
}) / items.length;
truncAvgPrice = avgPrice.toFixed(2);
console.log("The average price is $" + truncAvgPrice + ".");


/*priced between*/
var pricedBetween = items.filter(function(butts) {
  return butts.price < 18 && butts.price > 14 && butts.currency_code == "USD";
});
console.log('Items that cost between 18 and 14 USD:', pricedBetween);


/*Schlitz Glass*/
items.filter(function(butts) {
return butts.currency_code == 'GBP';
}).forEach(function(butts) {
  console.log(butts.title + " costs £" + butts.price + '.');
});


/*made of wood*/
items.filter(function(butts) {
  return (butts.materials.indexOf("wood") != -1);
}).forEach(function(butts) {
  console.log(butts.title + " is made of wood.");
});


/*eight or more materials*/
items.filter(function(butts) {
  return (butts.materials.length >=8);
}).forEach(function(butts){
  console.log(butts.title + butts.materials)
});

/*made by sellers*/
var madeBySeller = items.map(function(butts) {
  return ((butts.who_made) === "i_did");
}).filter(function(butts) {
  return butts === true;
}).length;
console.log(madeBySeller + " were made by their sellers.");
