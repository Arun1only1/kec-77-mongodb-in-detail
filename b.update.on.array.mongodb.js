use("kec-crud");

// ? update on array

// ? $push, $pop

// ? $push => adds item to end of array
// ? add 92 on marks of Rajan
// db.scores.updateOne(
//   { name: "Rajan" },
//   {
//     $push: {
//       marks: 92,
//     },
//   }
// );

// ? add 87 and 93 to marks of Suyasha

// db.scores.updateOne(
//   { name: "Smarika" },
//   {
//     $push: {
//       marks: { $each: [87, 93] },
//     },
//   }
// );

// ? $pop
// ? 1 => removes item from end of array(last item)
// ? -1 => removes item from starting of array(first item)

// db.scores.updateOne(
//   { name: "Suyasha" },
//   {
//     $pop: {
//       marks: 1,
//     },
//   }
// );

// db.scores.updateOne(
//   { name: "Suyasha" },
//   {
//     $pop: {
//       marks: -1,
//     },
//   }
// );

// ? $pull => removes item based upon condition

// db.scores.updateOne(
//   { name: "Smarika" },
//   {
//     $pull: {
//       marks: { $lt: 70 },
//     },
//   }
// );

// db.scores.updateOne(
//   { name: "Smarika" },
//   {
//     $pull: {
//       points: { sub: "Science" },
//     },
//   }
// );

// ?pull item which has sub "Science" and marks less than 88 from Rajan's data

// db.scores.updateOne(
//   { name: "Suyasha", "points.sub": "Science" },
//   {
//     $set: {
//       "points.$.sub": "Maths",
//     },
//   }
// );
db.scores.find();
