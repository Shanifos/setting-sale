
function selectSaleItems(items) {

  return items.discount > 0
}

const printSaleItems = (items) => items.filter(selectSaleItems)

// function printSaleItems(items) {
//   return items.filter(selectSaleItems)
// }

module.exports = printSaleItems
