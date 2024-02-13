import mongoose from 'mongoose';

const listSchema = new mongoose.Schema(
    {
        title: {type: String, required: true},
        content: {type: Array, required: true}
    }
);

const List = mongoose.model('List', listSchema);
export default List;