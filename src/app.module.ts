import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookingEntity } from './entities/booking.entity';
import { CustomerEntity } from './entities/customer.entity';
import { HistoryEntity } from './entities/history.entity';
import { JobEntity } from './entities/job.entity';
import { PortfolioEntity } from './entities/portfolio.entity';
import { ScheduleEntity } from './entities/schedule.entity';
import { ServiceItemEntity } from './entities/service-item.entity';

import { ServiceEntity } from './entities/service.entity';
import { TagEntity } from './entities/tag.entity';
import { UserEntity } from './entities/user.entity';
import { WorkerEntity } from './entities/worker.entity';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DATABASE_HOST,
      port: parseInt(process.env.DATABASE_PORT),
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PWD,
      database: process.env.DATABASE_NAME,
      entities: [
        UserEntity,
        JobEntity,
        ServiceEntity,
        PortfolioEntity,
        TagEntity,
        WorkerEntity,
        ServiceItemEntity,
        ScheduleEntity,
        BookingEntity,
        CustomerEntity,
        HistoryEntity
      ],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
