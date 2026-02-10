import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TreatmentSessionsService } from './treatment-sessions.service';
import { TreatmentSessionsController } from './treatment-sessions.controller';
import { TreatmentSession, TreatmentSessionSchema } from './schemas/treatment-session.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: TreatmentSession.name, schema: TreatmentSessionSchema }])],
  controllers: [TreatmentSessionsController],
  providers: [TreatmentSessionsService],
  exports: [TreatmentSessionsService],
})
export class TreatmentSessionsModule {}