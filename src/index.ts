import express from "express";
import cors from "cors";
import router from "./routes";
import { errorHandler } from "./middleware/errorHandler";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(router);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is runing on ${PORT}`);
});
