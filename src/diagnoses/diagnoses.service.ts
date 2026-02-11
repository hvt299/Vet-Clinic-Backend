import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Diagnosis, DiagnosisDocument } from './schemas/diagnosis.schema';
import { CreateDiagnosisDto } from './dto/create-diagnosis.dto';
import { UpdateDiagnosisDto } from './dto/update-diagnosis.dto';

@Injectable()
export class DiagnosesService {
  constructor(@InjectModel(Diagnosis.name) private model: Model<DiagnosisDocument>) { }

  async create(createDto: CreateDiagnosisDto) {
    const newItem = new this.model(createDto);
    return await newItem.save();
  }

  async findBySessionId(sessionId: string) {
    return this.model.find({ treatmentSessionId: sessionId } as any).exec();
  }

  async findAll() {
    return this.model.find().exec();
  }

  async findOne(id: string) {
    const item = await this.model.findById(id).exec();
    if (!item) throw new NotFoundException('Không tìm thấy chẩn đoán');
    return item;
  }

  async update(id: string, updateDto: UpdateDiagnosisDto) {
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