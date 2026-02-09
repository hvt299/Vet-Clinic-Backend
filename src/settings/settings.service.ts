import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Setting, SettingDocument } from './schemas/setting.schema';
import { CreateSettingDto } from './dto/create-setting.dto';

@Injectable()
export class SettingsService {
  constructor(@InjectModel(Setting.name) private settingModel: Model<SettingDocument>) { }

  async getSettings() {
    let settings = await this.settingModel.findOne();
    if (!settings) {
      settings = await this.settingModel.create({
        clinicName: 'Phòng khám Thú Y',
        addresses: ['Chưa cập nhật địa chỉ'],
        phoneNumbers: [],
      });
    }
    return settings;
  }

  async update(updateSettingDto: CreateSettingDto) {
    const settings = await this.getSettings();
    return this.settingModel.findByIdAndUpdate(
      settings._id,
      { $set: updateSettingDto },
      { new: true },
    );
  }
}