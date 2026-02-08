import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePetDto } from './dto/create-pet.dto';
import { UpdatePetDto } from './dto/update-pet.dto';
import { Pet } from './schemas/pet.schema';

@Injectable()
export class PetsService {
  constructor(@InjectModel(Pet.name) private petModel: Model<Pet>) { }

  async create(createPetDto: CreatePetDto): Promise<Pet> {
    const newPet = new this.petModel(createPetDto);
    return await newPet.save();
  }

  async findAll(): Promise<Pet[]> {
    return await this.petModel
      .find()
      .populate('customerId', 'name phoneNumber')
      .exec();
  }

  async findOne(id: string): Promise<Pet> {
    const pet = await this.petModel
      .findById(id)
      .populate('customerId', 'name phoneNumber address')
      .exec();

    if (!pet) {
      throw new NotFoundException(`Không tìm thấy thú cưng với ID: ${id}`);
    }
    return pet;
  }

  async update(id: string, updatePetDto: UpdatePetDto): Promise<Pet> {
    const updatedPet = await this.petModel
      .findByIdAndUpdate(id, updatePetDto, { new: true })
      .exec();

    if (!updatedPet) {
      throw new NotFoundException(`Không tìm thấy thú cưng để cập nhật`);
    }
    return updatedPet;
  }

  async remove(id: string): Promise<Pet> {
    const deletedPet = await this.petModel.findByIdAndDelete(id).exec();
    if (!deletedPet) {
      throw new NotFoundException(`Không tìm thấy thú cưng để xóa`);
    }
    return deletedPet;
  }
}