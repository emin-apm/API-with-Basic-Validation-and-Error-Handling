import express from "express";
import cors from "cors";
import router from "./routes";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(router);

app.get("/", (req, res) => {
  res.send("Server is on !");
});

app.listen(PORT, () => {
  console.log(`Server is runing on ${PORT}`);
});
