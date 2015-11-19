// var SpaceAge = function (seconds) {
//   this.seconds = seconds;
//   this.earthYears = 0;
// }


// SpaceAge.prototype.seconds = function () {
//   return this.seconds;
// }

// SpaceAge.prototype.onEarth = function () {
//   this.earthYears = ((((this.seconds / 60) /60) /24)/365.25);
//   return Number(this.earthYears.toFixed(2));
// }


// // var earthYears = SpaceAge.onEarth;
// // console.log(earthYears)

// // function something (number) {
// //   return Number((earthYears / number).toFixed(2));
// // }

// // slight refactor
// SpaceAge.prototype.onMercury = function () {
//   return Number((this.earthYears / 0.2408467).toFixed(2));

// }

// SpaceAge.prototype.onVenus = function () {
//   return Number((this.earthYears / 0.61519726).toFixed(2));
// }

// SpaceAge.prototype.onMars = function () {
//   this.marsYears = this.earthYears / 1.8808158;
//   return Number(this.marsYears.toFixed(2));
// }

// SpaceAge.prototype.onJupiter = function () {
//   this.jupiterYears = this.earthYears / 11.862615;
//   return Number(this.jupiterYears.toFixed(2));
// }

// SpaceAge.prototype.onSaturn = function () {
//   this.saturnYears = this.earthYears / 29.447498;
//   return Number(this.saturnYears.toFixed(2));
// }

// SpaceAge.prototype.onUranus = function () {
//   this.uranusYears = this.earthYears / 84.016846;
//   return Number(this.uranusYears.toFixed(2));
// }

// SpaceAge.prototype.onNeptune = function () {
//   this.neptuneYears = this.earthYears / 164.79132;
//   return Number(this.neptuneYears.toFixed(2));
// }


// module.exports = SpaceAge;

// this creates our base constructor which takes in seconds as a parameter
var SpaceAge = function (seconds) {
  // setting the number of seconds for an earth year to the the this.earthYEarInSeconds property
  this.earthYearInSeconds = 31557600;
  // setting this.seconds equal to the parameter we take in...
  this.seconds = seconds;

  // creating a this.roundDecimal property/method that takes in a number and returns the value at two decimal points...
  this.roundDec = function (num) {
    // see above
    return parseFloat(num.toFixed(2));
  }

  // Creating an object of all the key value pairs of each planet to the orbital period in comparison to earth's orbit (in seconds)...
  var planets = {
    onEarth: 1,
    onMercury: 0.2408467,
    onVenus: 0.61519726,
    onMars: 1.8808158,
    onJupiter: 11.862615,
    onSaturn: 29.447498,
    onUranus: 84.016846,
    onNeptune: 164.79132
  };

  // this constructFn takes in a function as it's parameter/argument and RETURNS....
  this.constructFn = function (fn) {
    // return calls this.roundDec which takes in this.seconds as it's argument/parameter.
      // first part of return is a function all to this.roundDec...
          // BUT we have to first concatenate and then divide this.seconds by this.earthYear in second


    return 'return this.roundDec(this.seconds ' +
        // we are taking the return value of the function argument which
           '/ (this.earthYearInSeconds * ' +
            // grabbing the planet object at the index of the function we pass in.
           planets[fn] +
           '));'
  }

  // looping through planet FnName in the planets object...
  for ( planetFnName in planets ) {
    // this. onEarth or this.onNeptune, etc... will equal a new function
    // this creates the protoypes by
    // setting this.planetFnName equal to a new Function
    this[planetFnName] = new Function('', this.constructFn(planetFnName));
  }
}

module.exports = SpaceAge;
