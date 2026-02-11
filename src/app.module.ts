import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { CustomersModule } from './customers/customers.module';
import { PetsModule } from './pets/pets.module';
import { AuthModule } from './auth/auth.module';
import { SettingsModule } from './settings/settings.module';
import { DoctorsModule } from './doctors/doctors.module';
import { MedicinesModule } from './medicines/medicines.module';
import { VaccinesModule } from './vaccines/vaccines.module';
import { PetVaccinationsModule } from './pet-vaccinations/pet-vaccinations.module';
import { TreatmentCoursesModule } from './treatment-courses/treatment-courses.module';
import { TreatmentSessionsModule } from './treatment-sessions/treatment-sessions.module';
import { DiagnosesModule } from './diagnoses/diagnoses.module';
import { PrescriptionsModule } from './prescriptions/prescriptions.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        uri: configService.get<string>('MONGO_URI'),
      }),
    }),
    UsersModule,
    CustomersModule,
    PetsModule,
    AuthModule,
    SettingsModule,
    DoctorsModule,
    MedicinesModule,
    VaccinesModule,
    PetVaccinationsModule,
    TreatmentCoursesModule,
    TreatmentSessionsModule,
    DiagnosesModule,
    PrescriptionsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
