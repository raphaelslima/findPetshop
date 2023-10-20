import * as mongoose from 'mongoose';

export const PetshopSchema = new mongoose.Schema({
  name: String,
  distance: Number,
  priceOfWeekToLittleDogs: Number,
  priceOfWeekToBigDogs: Number,
  priceOfWeekeendToLittleDogs: Number,
  priceOfWeekeendToBigDogs: Number,
});
