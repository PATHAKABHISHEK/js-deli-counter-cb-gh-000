var katzDeliLine = [];

var takeANumber = (line,person) =>{
  line.push(person);
  return "Welcome, "+person+"."+(line.index(person)+1)" You are number "+" in line."
}
