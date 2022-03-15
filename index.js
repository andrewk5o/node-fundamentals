const Application = require('./framework/Application.js');
const userRouter = require('./src/user-router.js');
const jsonParser = require('./framework/parseJson.js');
const parseUrl = require("./framework/parseUrl.js");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 5000;

const app = new Application();

app.use(jsonParser);
app.use(parseUrl("http://localhost:5000"));

app.addRouter(userRouter);

// app.listen(PORT, () => console.log(`Server is running at port ${PORT}`));

const start = () => {
  try {
    mongoose.connect("mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000");
    app.listen(PORT, () => console.log(`Server is running at port ${PORT}`));
  } catch (e) {
    console.log(e)
  }
};

start();