import mongoose from "mongoose";

const ItemSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title is required"],
    minlength: [3, "Title must be at least 3 characters long"],
    trim: true 
  },
  category: {  
    type: String,
    required: [true, "Category is required"],
    minlength: [3, "Category must be at least 3 characters long"],
    trim: true  
  },
  quantity: {
    type: Number,
    required: [true, "Quantity is required"],
    min: [1, "Quantity must be at least 1"],
    validate: {
      validator: Number.isInteger,
      message: "Quantity must be an integer"
    }
  },
  price: {
    type: Number,
    required: [true, "Price is required"],
    min: [0, "Price cannot be negative"],
    validate: {
      validator: function(value) {
        return Number.isFinite(value) && value >= 0;
      },
      message: "Price must be a positive number"
    }
  }
},{timestamps: true});

const Items = mongoose.model("Item", ItemSchema);
export default Items;
