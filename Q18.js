/*.Seeing the World: Think of at least five places in the world
 you’d like to visit.
• Store the locations in a array. Make sure the array is not in
alphabetical order.
• Print your array in its original order.
• Print your array in alphabetical order without modifying the
actual list.
• Show that your array is still in its original order by printing
 it.
• Print your array in reverse alphabetical order without changing
 the order of the original list.
• Show that your array is still in its original order by printing
 it again.
• Reverse the order of your list. Print the array to show that
its order has changed.
• Reverse the order of your list again. Print the list to show
it’s back to its original order.
• Sort your array so it’s stored in alphabetical order. Print the
 array to show that its order has been changed.
• Sort to change your array so it’s stored in reverse
alphabetical order. Print the list to show that its order has
changed.*/
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Step 1: Countries to Visit:
var visitCountries = ["Turkey", "London", "Saudia Arabia", "Switzerland", "Maldives"];
// Step 2: In Original Order:
console.log(visitCountries);
// Step 3: In Alphabetical Order:
console.log(__spreadArray([], visitCountries, true).sort());
// Step 4:  Array still in its Original Order:
console.log(visitCountries);
// Step 5: Reverse the Order of list:
console.log(__spreadArray([], visitCountries, true).sort().reverse());
// Step 6: Back to it's Original Order:
console.log(visitCountries);
// Step 7: Reverse the Order of List:
visitCountries.reverse();
console.log(visitCountries);
// Step 8: Reverse the Order of your List Again and Bring Back to its Original control:
visitCountries.reverse();
console.log(visitCountries);
// Step 9: Sort the Array in an Alphabetical Order:
visitCountries.sort();
console.log(visitCountries);
// Step 10: Sort to Change an Array in Reverse Alphabetical Order:
var sortedArray = [
    "Turkey", "London", "Saudia Arabia", "Switzerland", "Maldives",
];
sortedArray.sort();
console.log(sortedArray);
sortedArray.reverse();
console.log(sortedArray);
