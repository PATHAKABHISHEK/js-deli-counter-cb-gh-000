var katzDeliLine = [];

var takeANumber = (line,person) =>{
  line.push(person);
  return "Welcome, "+person+"."+(line.index(person)+1)" You are number "+" in line."
}

var nowServing = (line) =>{
  if(line[0] != undefined)
  {
    line.shift()
    return "Currently serving " + line[0]+"."
}
else{
  return "There is nobody waiting to be served!"
}
}

var currentLine = (line) =>{
  if(line.length != 0){
return "The line is currently: "+

  }
else{
  return "The line is currently empty."

}
}
