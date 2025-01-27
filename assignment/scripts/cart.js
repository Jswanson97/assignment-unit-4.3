console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
var basket = [];

console.log(`Basket is ${basket}`);

function addItem(item){
    console.log('in addItem');
    basket.push(item);
    return true;
}
console.log('Adding apples (expect true)', addItem('apples'));
console.log('Adding bananas (expect true)', addItem('bananas'));

function listItems(){
    basket.forEach((element) => console.log(element));
}
console.log(`Basket is now ${basket}`);

function empty(){
    console.log(`Basket before empty ${basket}`);
    basket.length = 0;
    console.log(`Basket after empty ${basket}`);
}
empty();




// DO NOT MODIFY
// Used for automated testing
try {
    module.exports = {
        basket: typeof basket !== 'undefined' ? basket : undefined,
        addItem: typeof addItem !== 'undefined' ? addItem : undefined,
        listItems: typeof listItems !== 'undefined' ? listItems : undefined,
        maxItems: typeof maxItems !== 'undefined' ? maxItems : undefined,
        empty: typeof empty !== 'undefined' ? empty : undefined,
        isFull: typeof isFull !== 'undefined' ? isFull : undefined,
        removeItem: typeof removeItem !== 'undefined' ? removeItem : undefined,
    };
} catch(e) {
    // Do nothing
}
