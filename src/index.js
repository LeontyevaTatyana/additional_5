module.exports = function check(str, bracketsConfig) {
 
  let stack = [];

  let map = {
    '{' : '}',
    '(' : ')',
    '|' : '|',
    '[' : ']',
    '1' : '2',
    '3' : '4',
    '5' : '6',
    '7' : '7',
    '8' : '8'
  }

  for (let i = 0; i < str.length; i++) {
    
    //явные открытые скобки
    if (str[i] === '{' || str[i] === '(' || str[i] === '['|| str[i] === '1' || str[i] === '3' || str[i] === '5') { 
      stack.push(str[i]);
    }
    else {
      //неявные открытые скобки
      if (str[i] === '|' || str[i] === '7' || str[i] === '8') { 
        if (stack.length == 0) stack.push(str[i]);
        else {
          let last = stack.pop();
          if (last !== str[i]) {
            stack.push(last);       
            stack.push(str[i]);
          }
        }
      }
      else
        if (str[i] !== map[stack.pop()]) return false;
    }
   
  }

  if (stack.length > 0) {return false};

  return true;
}
