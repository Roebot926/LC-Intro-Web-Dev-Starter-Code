// launchcode.spec.js code:
const launchcode = require('../launchcode.js');

describe("Testing launchcode", function(){

  it('value of organization(key) is = to nonprofit', function(){
    let output = launchcode.organization;
    expect(output).toEqual('nonprofit');
  });

  it('value of executiveDirector is = to Jeff', function(){
    let output = launchcode.executiveDirector;
    expect(output).toEqual('Jeff')
  });

  it('value of percentageCoolEmployees is = to num(100)', function(){
    let output = launchcode.percentageCoolEmployees;
    expect(output).toEqual(100)
  });
});

describe('Testing launchOutput', function(){
  it(`programsOffered should list as array "LC101", "LaunchCode Women+", 'CodeCamp'`, function(){
    expect(launchcode.programsOffered).toContain('LC101');
    expect(launchcode.programsOffered).toContain('LaunchCode Women+');
    expect(launchcode.programsOffered).toContain('CodeCamp');
    expect(launchcode.programsOffered.length).toEqual(3);
  });
  
  it('when passing a number through launchOutput that is divisible by 2 return Launch!', function(){
    let output = launchcode.launchOutput(2)
    expect(output).toEqual('Launch!')
  });

  it('when passing a number through launchOutput that is divisible by 3 return Code!', function(){
    let output = launchcode.launchOutput(3)
    expect(output).toEqual('Code!')
  });

  it('when passing a number through launchOutput that is divisible by 2 return Rocks!', function(){
    let output = launchcode.launchOutput(5)
    expect(output).toEqual('Rocks!')
  });

  it('when passing a number through launchOutput that is divisible by 2 AND 3 return LaunchCode!', function(){
    let output = launchcode.launchOutput(6)
    expect(output).toEqual('LaunchCode!')
  });

  it('when passing a number through launchOutput that is divisible by 3 AND 5 return Code Rocks!', function(){
    let output = launchcode.launchOutput(15)
    expect(output).toEqual('Code Rocks!')
  });

  it('when passing a number through launchOutput that is divisible by 2 AND 5 return Launch Rocks! (CRASH!!!!)', function(){
    let output = launchcode.launchOutput(10)
    expect(output).toEqual('Launch Rocks! (CRASH!!!!)')
  });

  it('when passing a number through launchOutput that is divisible by 2, 3 AND 5 return LaunchCode Rocks!', function(){
    let output = launchcode.launchOutput(30)
    expect(output).toEqual('LaunchCode Rocks!')
  });

  it(`when passing a number through launchOutput that is NOT divisible by 2, 3 AND 5 return Rutabagas! That doesn't work.`, function(){
    let output = launchcode.launchOutput(11)
    expect(output).toEqual(`Rutabagas! That doesn't work.`)
  });

});