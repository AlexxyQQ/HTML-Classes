// // var sts = [
// //   { name: "Alexxy", age: 20, city: "New York" },
// //   { name: "John", age: 30, city: "New York" },
// //   { name: "Kate", age: 25, city: "Paris" },
// //   { name: "Sam", age: 35, city: "London" },
// // ];

// // let filtered = sts.filter(function (item) {
// //   return item.age > 20;
// // });

// // let mapped = sts.map(function (item) {
// //   return item.age + 1;
// // });
// // console.log(filtered);
// // console.log(mapped);

// var objs = { name: "Ass", age: 20, city: "New York" }; //objects
// console.log(Object.keys(objs));
// console.log(Object.keys(objs).length);
// console.log(Object.values(objs));
// console.log(Object.values(objs).length);

// var sal = { salary: 25000 };

// // combine objects
// console.log(Object.assign(objs, sal));

// // freeze objects from change
// const a = Object.freeze({ val: 2 });
// a.val = 5;
// console.log(a);
// // loop
// let arr = [1, 2, 3, 4, 5];
// for (const o in objs) {
//   console.log(objs[o]);
// }

// for (const a of arr) {
//   console.log(a);
// }

// // closer
// let o = {
//   val: 5,
//   setData: function (val) {
//     this.val = val;
//   },
//   getData: function () {
//     return this.val;
//   },
// };
// o.setData(9);
// console.log(o.getData());

var btnclick = 0;
var gg = 0;
function clicked() {
  if (btnclick > 4) {
    let btn = document.getElementById("login");
    btn.setAttribute("disabled", true);
    aaa = setInterval(function () {
      gg++;
      let c = document.getElementById("timer");
      c.innerHTML = gg;
    }, 1000);
    setTimeout(function () {
      btn.removeAttribute("disabled");
      btnclick = 0;
      clearInterval(aaa);
    }, 5000);
  }

  let a = document.getElementById("clicked");
  a.innerText = btnclick;
  btnclick++;
}
