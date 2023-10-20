import { Document } from 'mongoose';

export class Petshop extends Document {
  name: string;
  distance: number;
  priceOfWeekToLittleDogs: number;
  priceOfWeekToBigDogs: number;
  priceOfWeekeendToLittleDogs: number;
  priceOfWeekeendToBigDogs: number;
}
