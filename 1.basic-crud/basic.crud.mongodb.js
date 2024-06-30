use("kec-crud");

// to insert data
// ? insertOne
// ? insertMany

// db.student.insertOne({
//   name: "Unik",
//   address: "Imadol",
// });

// db.student.insertOne({
//   _id: 101,
//   name: "Smarika",
//   address: "Imadol",
// });

// db.student.insertMany([
//   {
//     name: "Samundra",
//     address: "Dhapakhel",
//   },

//   {
//     name: "Prashant",
//     address: "Balaju",
//   },
// ]);

// ? read operation
// ? findOne
// ? find
// db.student.find({});

// db.student.find({ address: "Imadol" });

// db.student.findOne({ name: "Samundra" });

// db.student.findOne({ address: "Imadol" });

// db.student.find({ _id: 101 });

// db.student.find({ _id: ObjectId("667e97d907826fa10308f8ad") });

// ? delete => remove data
// ? deleteOne
// ? deleteMany

// db.student.deleteOne({ address: "Balaju" });

// db.student.deleteMany({ address: "Imadol" });

// ? update => to change field data(s)
// ? updateOne
// ? updateMany

// db.student.updateOne(
//   {
//     name: "Samundra",
//   },
//   {
//     $set: {
//       name: "Siddhant",
//     },
//   }
// );

// db.student.updateMany(
//   { address: "Dhapakhel" },
//   {
//     $set: {
//       address: "Nakipot",
//     },
//   }
// );

// db.student.updateOne(
//   { name: "Saugat" },
//   {
//     $set: {
//       address: "New York",
//     },
//   }
// );

// db.student.updateOne(
//   { name: "Saugat" },
//   {
//     $set: {
//       address: "Boston",
//     },
//   }
// );

// db.student.find();
