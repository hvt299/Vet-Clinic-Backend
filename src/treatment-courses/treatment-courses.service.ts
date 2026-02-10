import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TreatmentCourse, TreatmentCourseDocument } from './schemas/treatment-course.schema';
import { CreateTreatmentCourseDto } from './dto/create-treatment-course.dto';
import { UpdateTreatmentCourseDto } from './dto/update-treatment-course.dto';

@Injectable()
export class TreatmentCoursesService {
  constructor(@InjectModel(TreatmentCourse.name) private model: Model<TreatmentCourseDocument>) { }

  async create(createDto: CreateTreatmentCourseDto): Promise<TreatmentCourse> {
    const newItem = new this.model(createDto);
    return await newItem.save();
  }

  async findAll(): Promise<TreatmentCourse[]> {
    return this.model.find()
      .populate('customerId')
      .populate('petId')
      .sort({ createdAt: -1 })
      .exec();
  }

  async findOne(id: string): Promise<TreatmentCourse> {
    const item = await this.model.findById(id)
      .populate('customerId')
      .populate('petId')
      .exec();
    if (!item) throw new NotFoundException('Không tìm thấy đợt điều trị');
    return item;
  }

  async update(id: string, updateDto: UpdateTreatmentCourseDto): Promise<TreatmentCourse> {
    const updated = await this.model.findByIdAndUpdate(id, updateDto, { new: true }).exec();
    if (!updated) throw new NotFoundException('Không tìm thấy đợt điều trị để cập nhật');
    return updated;
  }

  async remove(id: string): Promise<TreatmentCourse> {
    const deleted = await this.model.findByIdAndDelete(id).exec();
    if (!deleted) throw new NotFoundException('Không tìm thấy đợt điều trị để xóa');
    return deleted;
  }
}