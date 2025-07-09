import mongoose from 'mongoose';

const hospitalSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  addressLine1: {
    type: String,
    required: true,
  },
  addressLine2: {
    type: String,
  },
  city: {
    type: String,
    required: true,
  },
  pinCode: {
    type: String,
    required: true,
  },
  specialization: [
    {
      type: String,
    }
  ],
  phone: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
},
{
  timestamps: true,
})

export const Hospital = mongoose.model('Hospital', hospitalSchema);