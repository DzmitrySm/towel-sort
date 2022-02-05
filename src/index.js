
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (!matrix) {
    return []
  }
   let result = matrix.map((x, i) => i % 2 === 0 ? matrix[i]:matrix[i].reverse())
      
  return result.flat()
  }
   
  
  
  

