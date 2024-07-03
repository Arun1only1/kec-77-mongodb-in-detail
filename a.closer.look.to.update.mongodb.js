use("kec-crud");

// db.scores.find();

// ? $set

// db.scores.updateOne(
//   { name: "Subham" },
//   {
//     $set: {
//       name: "Rajan",
//     },
//   }
// );

// db.scores.updateMany(
//   {},
//   {
//     $set: {
//       age: 21,
//     },
//   }
// );

// ? $unset => removes that field
// db.scores.updateOne(
//   {
//     name: "Rajan",
//   },
//   {
//     $unset: {
//       age: "",
//     },
//   }
// );

// ? update age of Rajan to 30
// ? update age of Suyasha to 40

// ? $inc => increases field value by provided value

// db.scores.updateMany(
//   {},
//   {
//     $inc: {
//       age: 19,
//     },
//   }
// );

// db.scores.insertOne({
//   name: "Smarika",
//   scores: [42, 65, 88],
//   points: [
//     {
//       sub: "Social",
//       point: 67,
//     },
//     {
//       sub: "Science",
//       point: 89,
//     },
//   ],
//   age: 30,
// });

// db.scores.updateMany(
//   { name: "Smarika" },
//   {
//     $inc: {
//       age: -10,
//     },
//   }
// );

//  TODO: research objectid
// ? $mul => multiply
// db.scores.updateOne(
//   { _id: ObjectId("66828d276eddb3b108b2dfc8") },
//   {
//     $mul: {
//       age: 2,
//     },
//   }
// );

// ? divide age of Suyasha by 2
// db.scores.updateOne(
//   { _id:  ObjectId("66828d276eddb3b108b2dfc7") },
//   {
//     $mul: {
//       age: 1 / 2,
//     },
//   }
// );

// ? $rename => renames field
// db.scores.updateMany(
//     {},
//     {
//         $rename: {
//             scores: "marks",
//             },
//   }
//   );

// ? $min, $max

// ? $min => if field value is more than specified value, it sets min value to that field
// db.scores.updateMany(
//   {},
//   {
//     $min: {
//       age: 16,
//     },
//   }
// );

// ? $max => if field value is less than specified value, it sets max value to that field
// db.scores.updateMany(
//   {},
//   {
//     $max: {
//       age: 50,
//     },
//   }
// );

// db.scores.updateMany(
//   {},
//   {
//     $set: {
//       luckyThings: {
//         number: 7,
//         color: "green",
//       },
//     },
//   }
// );

// ? update lucky color of Suyasha to "Blue"

// ? update lucky number of Smarika to 8
// ? increase lucky number of Rajan by 3
// db.scores.updateOne(
//   { name: "Rajan" },
//   {
//     $inc: {
//       "luckyThings.number":3
//     },
//   }
// );

// db.scores.updateMany(
//   { name: "Suyasha" },
//   {
//     $set: {
//       "luckyThings.color": "blue",
//     },
//   }
// );
// db.scores.find();
