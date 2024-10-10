import express from "express";
import { connectDB } from "./config/config.js";
import dotenv from "dotenv";
import cors from "cors"
import Items from "./models/Items.js";

dotenv.config();

const app = express();
app.use(express.json());



app.use(cors({
  origin: '*',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true // Enable set cookies for cross-origin requests
}));

// Routes
app.post("/additem", async (req, res) => {
  try {
    const { title, category, quantity, price } = req.body;

    // Validate input
    if (!title || !category || !quantity || !price) {
      return res.status(400).json({ message: "Please fill in all the fields." });
    }

    // Create a new item instance
    const item = new Items({
      title,
      category,
      quantity,
      price,
    });

    // Save the item to the database
    await item.save();
    res.status(201).json({ message: "Item added successfully." });

  } catch (err) {
    // Catch any errors and return a 500 status
    console.error("Error adding item:", err);
    res.status(500).json({ message: "An error occurred while adding the item." });
  }
});

app.get("/search", async (req, res) => {
  try {
    const { query } = req.query; 
    const items = await Items.find({
      title: { $regex: `^${query}`, $options: "i" } // Search by title, matching only the first three characters
    }).limit(10); // Optionally limit results for better performance

    res.status(200).json(items);
  } catch (error) {
    console.error("Error searching items:", error);
    res.status(500).json({ message: "Internal server error." });
  }
});

// app.get("/search", async (req, res) => {
//   try {
//     const { query } = req.query;  
//     const items = await Items.find({
//       title: { $regex: query, $options: "i" } // Search only by title
//     });
//     res.status(200).json(items);
//   } catch (error) {
//     console.error("Error searching items:", error);
//     res.status(500).json({ message: "Internal server error." });
//   }
// });


app.get("/", (req, res) => {
  res.send("Hello universe.");
});

// DATABASE CONNECTION
connectDB()
  .then(() => {
    console.log("Database is successfully connected");

    app.listen(process.env.PORT, () => {
      console.log(`Server is listening at port ${process.env.PORT}...`);
    });
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
    process.exit(1);
  });
