const Application = require("./framework/Application");
const userRouter = require("./src/user-router");
const jsonParser = require("./framework/parseJson");
const PORT = process.env.PORT || 5000;

const app = new Application();

app.use(jsonParser);

app.addRouter(userRouter);

app.listen(PORT, () => console.log(`Server is running at port ${PORT}`));