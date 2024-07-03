use("kec-crud");

// * array operators
// ? $all
// ? $elemMatch
// ? $size

// ? find movies whose genre includes both "Drama" and "Comedy"

// db.movies.find({ $and: [{ genres: "Drama" }, { genres: "Comedy" }] });

// ? same field ma "$and" use bhairako xa ra tyo field array ho bhane
// ? we can use $all

// db.movies.find({ genres: { $all: ["Drama", "Comedy"] } });

// db.movies.find({ genres: ["Drama", "Comedy"] });

// *$size
// ? we cannot provide range to size
// ? must provide concrete value

// ? find movies whose genre size is 3

// db.movies.find({ genres: { $size: 3 } });

// * elemMatch
// ? array must contain at least one element which matches all conditions
// db.scores.insertMany([
//   {
//     name: "Subham",
//     scores: [82, 85, 88],
//     points: [
//       {
//         sub: "Social",
//         point: 82,
//       },
//       {
//         sub: "Science",
//         point: 65,
//       },
//     ],
//   },
//   {
//     name: "Suyasha",
//     scores: [75, 88, 89],
//     points: [
//       {
//         sub: "Social",
//         point: 75,
//       },
//       {
//         sub: "Science",
//         point: 84,
//       },
//     ],
//   },

//   {
//     name: "Smarika",
//     scores: [42, 65, 88],
//     points: [
//       {
//         sub: "Social",
//         point: 67,
//       },
//       {
//         sub: "Science",
//         point: 89,
//       },
//     ],
//   },
// ]);

// db.scores.find({ "points.sub": "Social", "points.point": { $gt: 80 } });

// db.scores.find({
//   points: { $elemMatch: { sub: "Social", point: { $gt: 80 } } },
// });

// ? find students whose scores is greater than 80 and less than 85

db.scores.find({ scores: { $elemMatch: { $gt: 80, $lt: 85 } } });
