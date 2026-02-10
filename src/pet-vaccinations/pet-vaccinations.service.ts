import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PetVaccination, PetVaccinationDocument } from './schemas/pet-vaccination.schema';
import { CreatePetVaccinationDto } from './dto/create-pet-vaccination.dto';
import { UpdatePetVaccinationDto } from './dto/update-pet-vaccination.dto';

@Injectable()
export class PetVaccinationsService {
  constructor(
    @InjectModel(PetVaccination.name) private petVaccinationModel: Model<PetVaccinationDocument>,
  ) { }

  async create(createPetVaccinationDto: CreatePetVaccinationDto): Promise<PetVaccination> {
    const newRecord = new this.petVaccinationModel(createPetVaccinationDto);
    return await newRecord.save();
  }

  async findAll(): Promise<PetVaccination[]> {
    return await this.petVaccinationModel.find()
      .populate('vaccineId')
      .populate('customerId')
      .populate('petId')
      .populate('doctorId')
      .exec();
  }

  async findOne(id: string): Promise<PetVaccination> {
    const record = await this.petVaccinationModel.findById(id)
      .populate('vaccineId')
      .populate('customerId')
      .populate('petId')
      .populate('doctorId')
      .exec();

    if (!record) {
      throw new NotFoundException(`Không tìm thấy lịch tiêm chủng có ID: ${id}`);
    }
    return record;
  }

  async update(id: string, updatePetVaccinationDto: UpdatePetVaccinationDto): Promise<PetVaccination> {
    const updatedRecord = await this.petVaccinationModel
      .findByIdAndUpdate(id, updatePetVaccinationDto, { new: true })
      .exec();

    if (!updatedRecord) {
      throw new NotFoundException(`Không tìm thấy lịch tiêm chủng để cập nhật`);
    }
    return updatedRecord;
  }

  async remove(id: string): Promise<PetVaccination> {
    const deletedRecord = await this.petVaccinationModel.findByIdAndDelete(id).exec();
    if (!deletedRecord) {
      throw new NotFoundException(`Không tìm thấy lịch tiêm chủng để xóa`);
    }
    return deletedRecord;
  }
}