import "dotenv/config";
import express from 'express';
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
    try {
        res.status(200).send("Server is running");
    }
    catch(error) {
        res.status(500).send({message: "Error server not running"});
        console.error(error);
    }
});

app.listen(PORT,() => {
    console.log(`Server is running on port: http://localhost:${PORT}`);
})