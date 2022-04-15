{
  let a = 10;
  {
    console.log(a); //ReferenceError: Cannot access 'a' before initialization
    let a = 20;
  }
}

{
  {
    console.log(a); 
    let a = 20;
    let a = 10;//SyntaxError: Identifier 'a' has already been declared
  }
}
