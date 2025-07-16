// Function to paginate array items
function paginate(array, page, size) {

  // Calculate starting index of the requested page
  const startIndex = (page - 1) * size;

  // Calculate ending index (not inclusive)
  const endIndex = startIndex + size;

  // Return the sliced portion of the array
  return array.slice(startIndex, endIndex);

}

// Example usage
const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const page = 3;
const size = 3;

const result = paginate(data, page, size);

// Print the result with explanation
console.log(`Items on page ${page} with page size ${size}:`, result);
