
// const strategies = {
//   isNameEmpty: function(value, errorMsg) {
//     if (value.trim() === '') {
//       return errorMsg
//     } 
//   },
//   isEmpty: function(value, errorMsg) {
//     if (value) {
//       return errorMsg
//     } 
//   },
//   minLength: function(value, len, errorMsg) {
//     if (value.trim().length < len) {
//       return errorMsg
//     }
//   },
//   maxLength: function(value, len, errorMsg) {
//     if (value.trim().length > len) {
//       return errorMsg
//     }
//   },
//   isMobilePhone: function(value, errorMsg) {
//     if (!/1[3456789][0-9]{9}/.test(value)) {
//       return  errorMsg
//     }
//   },
  
//   isEmail: function(value ,errorMsg) {
//     if (!/^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/.test(value)) {
//       return  errorMsg
//     }
//   }
// }




// function Validator() {
//   this.cache = [];
// }
// Validator.prototype={

//   add: function(dom,rule,errorMsg){
//       var ary = rule.split(':');
//       this.cache.push(function() {
//           var strategy = ary.shift();
//           ary.unshift(dom.value);
//           ary.push(errorMsg);
//           console.log(strategies[strategy].apply(dom,ary))
//           return strategies[strategy].apply(dom,ary)
//       })
//   },
//   start: function() {
//       for (var i = 0, validateFunc;validateFunc = this.cache[i++];){
//           var msg = validateFunc();
//           if(msg) {
//               return msg;
//           }
//       }
//   }
// }

// export default validateFunc 