import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Prescription, PrescriptionDocument } from './schemas/prescription.schema';
import { CreatePrescriptionDto } from './dto/create-prescription.dto';
import { UpdatePrescriptionDto } from './dto/update-prescription.dto';

@Injectable()
export class PrescriptionsService {
  constructor(@InjectModel(Prescription.name) private model: Model<PrescriptionDocument>) { }

  async create(createDto: CreatePrescriptionDto) {
    const newItem = new this.model(createDto);
    return await newItem.save();
  }

  async findBySessionId(sessionId: string) {
    return this.model.find({ treatmentSessionId: sessionId } as any)
      .populate('medicineId')
      .exec();
  }

  async findAll() {
    return this.model.find().populate('medicineId').exec();
  }

  async findOne(id: string) {
    const item = await this.model.findById(id).populate('medicineId').exec();
    if (!item) throw new NotFoundException('Không tìm thấy đơn thuốc');
    return item;
  }

  async update(id: string, updateDto: UpdatePrescriptionDto) {
    const updated = await this.model.findByIdAndUpdate(id, updateDto, { new: true }).exec();
    if (!updated) throw new NotFoundException('Không tìm thấy để cập nhật');
    return updated;
  }

  async remove(id: string) {
    const deleted = await this.model.findByIdAndDelete(id).exec()
    if (!deleted) {
      throw new NotFoundException(`Không tìm thấy để xóa`);
    }
    return deleted;
  }
}