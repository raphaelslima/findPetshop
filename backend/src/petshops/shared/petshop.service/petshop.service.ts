import { Injectable } from '@nestjs/common';
import { Petshop } from '../petshop/petshop';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ObjectId } from 'mongodb';

@Injectable()
export class PetshopService {
  constructor(
    @InjectModel('Petshop') private readonly petshopModel: Model<Petshop>,
  ) {}

  async getAll() {
    return await this.petshopModel.find().exec();
  }

  async getById(id: string) {
    return await this.petshopModel.findById(id).exec();
  }

  async create(petshop: Petshop) {
    const createdTask = new this.petshopModel(petshop);
    return await createdTask.save();
  }

  async update(id: string, petshop: Petshop) {
    await this.petshopModel
      .updateOne({ _id: new ObjectId(id) }, petshop)
      .exec();
    return this.getById(id);
  }

  async delete(id: string) {
    await this.petshopModel.deleteOne({ _id: id }).exec();
  }
}
