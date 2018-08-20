// Write your solution in this file!
const driver = {
  firstName:'Neha',
  lastName:'Chopade',
  age:25,
  city:'Delhi'
}

function updateDriverWithKeyAndValue(driver, key, value)
{
  const copy = Object.assign ({}, driver,{[key]:value});
  return copy;
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value)
{  driver[key]=value;
   return driver;
  
}
function deleteFromDriverByKey(driver,key) 
{
  const copy = Object.assign({},driver);
  delete copy[key];
  return copy;
}
function destructivelyDeleteFromDriverByKey(driver, key){
  delete driver[key];
  return driver;
}





