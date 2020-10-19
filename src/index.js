
// You should implement your task here.
module.exports = function towelSort (matrix) {
  if(matrix===undefined)return [];
  let arr=[];
  for(let i=0;i<matrix.length;i++){
    
    if(i%2===0){
    for(let j=0;j<matrix[0].length;j++){
        arr.pop(matrix[i][j]);  
        console.log(matrix[i][j]); 
    }
  }
  else{
    for(let j=matrix[0].length-1;j>=0;j--){
      arr.pop(matrix[i][j]);   
      console.log(matrix[i][j]);
  }
  }
    
  }
  return arr;
}
