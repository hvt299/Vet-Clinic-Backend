import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Medicine, MedicineDocument } from './schemas/medicine.schema';
import { CreateMedicineDto } from './dto/create-medicine.dto';
import { UpdateMedicineDto } from './dto/update-medicine.dto';

@Injectable()
export class MedicinesService {
  constructor(
    @InjectModel(Medicine.name) private medicineModel: Model<MedicineDocument>,
  ) { }

  async create(createMedicineDto: CreateMedicineDto): Promise<Medicine> {
    const newMedicine = new this.medicineModel(createMedicineDto);
    return await newMedicine.save();
  }

  async findAll(): Promise<Medicine[]> {
    return await this.medicineModel.find().exec();
  }

  async findOne(id: string): Promise<Medicine> {
    const medicine = await this.medicineModel.findById(id).exec();
    if (!medicine) {
      throw new NotFoundException(`Không tìm thấy thuốc có ID: ${id}`);
    }
    return medicine;
  }

  async update(id: string, updateMedicineDto: UpdateMedicineDto): Promise<Medicine> {
    const updatedMedicine = await this.medicineModel
      .findByIdAndUpdate(id, updateMedicineDto, { new: true })
      .exec();

    if (!updatedMedicine) {
      throw new NotFoundException(`Không tìm thấy thuốc để cập nhật`);
    }
    return updatedMedicine;
  }

  async remove(id: string): Promise<Medicine> {
    const deletedMedicine = await this.medicineModel.findByIdAndDelete(id).exec();
    if (!deletedMedicine) {
      throw new NotFoundException(`Không tìm thấy thuốc để xóa`);
    }
    return deletedMedicine;
  }
}