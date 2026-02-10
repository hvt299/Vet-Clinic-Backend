import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Vaccine, VaccineDocument } from './schemas/vaccine.schema';
import { CreateVaccineDto } from './dto/create-vaccine.dto';
import { UpdateVaccineDto } from './dto/update-vaccine.dto';

@Injectable()
export class VaccinesService {
  constructor(@InjectModel(Vaccine.name) private vaccineModel: Model<VaccineDocument>,
  ) { }

  async create(createVaccineDto: CreateVaccineDto): Promise<Vaccine> {
    const newVaccine = new this.vaccineModel(createVaccineDto);
    return await newVaccine.save();
  }

  async findAll(): Promise<Vaccine[]> {
    return await this.vaccineModel.find().exec();
  }

  async findOne(id: string): Promise<Vaccine> {
    const vaccine = await this.vaccineModel.findById(id).exec();
    if (!vaccine) {
      throw new NotFoundException(`Không tìm thấy vắc-xin có ID: ${id}`);
    }
    return vaccine;
  }

  async update(id: string, updateVaccineDto: UpdateVaccineDto): Promise<Vaccine> {
    const updatedVaccine = await this.vaccineModel
      .findByIdAndUpdate(id, updateVaccineDto, { new: true })
      .exec();

    if (!updatedVaccine) {
      throw new NotFoundException(`Không tìm thấy vắc-xin để cập nhật`);
    }
    return updatedVaccine;
  }

  async remove(id: string): Promise<Vaccine> {
    const deletedVaccine = await this.vaccineModel.findByIdAndDelete(id).exec();
    if (!deletedVaccine) {
      throw new NotFoundException(`Không tìm thấy vắc-xin để xóa`);
    }
    return deletedVaccine;
  }
}