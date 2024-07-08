use("kec-crud");
// ?$lookup
// ? to query between collections

// db.person.insertMany([
//   {
//     firstName: "Rohan",
//     lastName: "Bhandari",
//     address: "Sydney",
//   },
//   {
//     firstName: "Rohil",
//     lastName: "Khadka",
//     address: "Udaypur",
//   },

//   {
//     firstName: "Enish",
//     lastName: "Shrestha",
//     address: "Kathmandu",
//   },
// ]);

// db.vehicle.insertMany([
//   {
//     model: "X",
//     brand: "Tesla",
//     builtYear: 2021,
//     ownerId: ObjectId("668bb30966b23abcd959e9fb"),
//   },
//   {
//     model: "Mustang",
//     brand: "Ford",
//     builtYear: 2023,
//     ownerId: ObjectId("668bb30966b23abcd959e9fc"),
//   },
//   {
//     model: "Creta",
//     brand: "Hyundai",
//     builtYear: 2024,
//     ownerId: ObjectId("668bb30966b23abcd959e9fd"),
//   },
// ]);

// db.vehicle.aggregate([
//   {
//     $match: {
//       model: "Mustang",
//     },
//   },
//   {
//     $lookup: {
//       from: "person",
//       localField: "ownerId",
//       foreignField: "_id",
//       as: "ownerDetails",
//     },
//   },
//   {
//     $project: {
//       model: 1,
//       brand: 1,

//       ownerFullName: {
//         $concat: [
//           { $first: "$ownerDetails.firstName" },
//           " ",
//           { $first: "$ownerDetails.lastName" },
//         ],
//       },
//     },
//   },
// ]);

// db.person.aggregate([
//   {
//     $match: {
//       firstName: "Enish",
//     },
//   },
//   {
//     $lookup: {
//       from: "vehicle",
//       localField: "_id",
//       foreignField: "ownerId",
//       as: "vehicleDetails",
//     },
//   },
//   {
//     $project: {
//       firstName: 1,
//       lastName: 1,
//       carModel: { $first: "$vehicleDetails.model" },
//     },
//   },
// ]);

// db.vehicle.insertOne({
//   model: "Y",
//   brand: "Tesla",
//   builtYear: 2020,
//   ownerId: ObjectId("668bb30966b23abcd959e9fd"),
// });

db.person.aggregate([
  {
    $match: {
      firstName: "Enish",
    },
  },
  {
    $lookup: {
      localField: "_id",
      from: "vehicle",
      foreignField: "ownerId",
      as: "vehicleData",
    },
  },
  {
    $project: {
      firstName: 1,
      lastName: 1,
      models: "$vehicleData.model",
      "vehicleData.model": 1,
      "vehicleData.brand": 1,
      lastCarBrand: { $last: "$vehicleData.brand" },
    },
  },
]);
