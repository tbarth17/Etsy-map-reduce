/*average price*/
avgPrice = items.map(function(sort) {
  return sort.price;
}).reduce(function(a, b){
  return a + b;
}) / items.length;
truncAvgPrice = avgPrice.toFixed(2);
console.log("The average price is $" + truncAvgPrice + ".");


/*priced between*/
var pricedBetween = items.filter(function(between) {
  return between.price < 18 && between.price > 14 && between.currency_code == "USD";
});
console.log('Items that cost between 18 and 14 USD:', pricedBetween);


/*Schlitz Glass*/
items.filter(function(getcode) {
return getcode.currency_code == 'GBP';
}).forEach(function(pull) {
  console.log(pull.title + " costs £" + pull.price + '.');
});


/*made of wood*/
items.filter(function(getwood) {
  return (getwood.materials.indexOf("wood") != -1);
}).forEach(function(log) {
  console.log(log.title + " is made of wood.");
});


/*eight or more materials*/
items.filter(function(eightmore) {
  return (eightmore.materials.length >=8);
}).forEach(function(log){
  console.log(log.title + log.materials);
});

/*made by sellers*/
var madeBySeller = items.map(function(madeby) {
  return ((madeby.who_made) === "i_did");
}).filter(function(choose) {
  return choose === true;
}).length;
console.log(madeBySeller + " were made by their sellers.");
