const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

const mongoDB = "mongodb://127.0.0.1/my_database";

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(mongoDB);

  const Schema = mongoose.Schema;

  const SomeModelSchema = new Schema({
    a_string: String,
    a_date: Date,
  });

  const SomeModel = mongoose.model("some model", SomeModelSchema);

  // Use await inside an asynchronous function
  await SomeModel.create({ name: "also awesome" });

  // Console log might not work as expected because the operation is asynchronous
  console.log("Document created successfully");
}

