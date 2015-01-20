describe('Thermostat', function() {

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  describe('by default', function() {

    it('starts at 20 degrees', function() {
      expect(thermostat.temperature).toEqual(20);
    });

  });

  describe('changing temperature', function() {

    it('can increase', function() {
      thermostat.increaseTemperature(1);
      expect(thermostat.temperature).toEqual(21);
    });

    it('can decrease', function() {
      thermostat.decreaseTemperature(1);
      expect(thermostat.temperature).toEqual(19);
    });

  });

  describe('temperate limit', function() {

    it('has a minimum of 10 degrees', function() {
      expect(thermostat.minimum).toEqual(10);
    });

    // it('not allow thermostat temp to be below 10 degrees', function(){
    //   thermostat.decreaseTemperature(11);
    //   expect(thermostat.temperature).toEqual(10);
    // });

    //If power saving mode is on, the maximum temperature is 25 degrees

  });

  describe('power save', function(){

    it('should be on by default', function() {
      expect(thermostat.powerSave).toBe(true);
    });

    it('should set the maximum temperature to 25 degrees', function() {
      expect(thermostat.maximum).toEqual(25);
    });

  });

});
