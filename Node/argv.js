let argv = process.argv.slice(2).reduce((memo,current,index,arr)=>{
  if(current.startsWith('--')){
      memo[current.slice(2)] = arr[index+1]
  }
  return memo;
},{});
console.log(argv)
