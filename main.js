// Function to paginate array items
function paginate(array, page, size) {

  // Calculate starting index of the requested page
  const startIndex = (page - 1) * size;

  // Calculate ending index (not inclusive)
  const endIndex = startIndex + size;

  // Return the sliced portion of the array
  return array.slice(startIndex, endIndex);
  
}