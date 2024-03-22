import mongoose from 'mongoose';

const mailSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
});

export default mongoose.model('Mail', mailSchema);
