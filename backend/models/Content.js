import mongoose from "mongoose";

const ContentSchema = new mongoose.Schema(
    {                     
        title: { type: String, required: true, unique: true },      
        description: { type: String, required: true },
        category: { type: String, required: true },
        img: { type: String, required: true },
        imgTitle: { type: String, required: true },
        imgThumb: { type: String, required: true },
        imgVertical: { type: String, required: true },
        trailer: { type: String},
        movie: { type: String},
        year: { type: String, },
        limit: { type: String, required: true },
        genre: { type: String, required: true },
        isSeries: { type: Boolean, required: true},     
    }
    
);

const Content = mongoose.model("Content", ContentSchema);
export default Content;