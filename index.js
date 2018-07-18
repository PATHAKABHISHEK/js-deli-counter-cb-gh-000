var katzDeliLine = [];

var takeANumber = (line,person) =>{
  line.push(person);
  return "Welcome, "+person+"."+(line.index(person)+1)" You are number "+" in line."
}

var nowServing = (line) =>{
  if(line[0] != undefined)
  {
    return "Currently serving " + line[0]+"."
}
else{
  return "There is nobody waiting to be served!"
}
}
