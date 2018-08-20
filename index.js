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
  delete copy.key;
  return copy;
}

/*describe('deleteFromDriverByKey(driver, key)', function () {
    it('deletes `key` from a clone of driver and returns the new driver (it is non-destructive)', function () {
      let newdriver = deleteFromDriverByKey(driver, 'name');

      expect(newdriver['name']).to.equal(undefined);
    });

    it('does not modify the original driver (it is non-destructive)', function () {
      deleteFromDriverByKey(driver, 'name');

      expect(driver['name']).to.equal('Sam');
    });
  });
*/




