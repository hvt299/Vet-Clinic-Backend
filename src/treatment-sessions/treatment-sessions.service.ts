import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TreatmentSession, TreatmentSessionDocument } from './schemas/treatment-session.schema';
import { CreateTreatmentSessionDto } from './dto/create-treatment-session.dto';
import { UpdateTreatmentSessionDto } from './dto/update-treatment-session.dto';

@Injectable()
export class TreatmentSessionsService {
  constructor(@InjectModel(TreatmentSession.name) private model: Model<TreatmentSessionDocument>) { }

  async create(createDto: CreateTreatmentSessionDto): Promise<TreatmentSession> {
    const newItem = new this.model(createDto);
    return await newItem.save();
  }

  async findByCourseId(courseId: string): Promise<TreatmentSession[]> {
    return this.model.find({ treatmentCourseId: courseId } as any)
      .populate('doctorId')
      .sort({ examinedAt: -1 })
      .exec();
  }

  async findAll(): Promise<TreatmentSession[]> {
    return this.model.find()
      .populate('treatmentCourseId')
      .populate('doctorId')
      .exec();
  }

  async findOne(id: string): Promise<TreatmentSession> {
    const item = await this.model.findById(id)
      .populate('treatmentCourseId')
      .populate('doctorId')
      .exec();
    if (!item) throw new NotFoundException('Không tìm thấy phiên khám');
    return item;
  }

  async update(id: string, updateDto: UpdateTreatmentSessionDto): Promise<TreatmentSession> {
    const updated = await this.model.findByIdAndUpdate(id, updateDto, { new: true }).exec();
    if (!updated) throw new NotFoundException('Không tìm thấy phiên khám để cập nhật');
    return updated;
  }

  async remove(id: string): Promise<TreatmentSession> {
    const deleted = await this.model.findByIdAndDelete(id).exec();
    if (!deleted) throw new NotFoundException('Không tìm thấy phiên khám để xóa');
    return deleted;
  }
}