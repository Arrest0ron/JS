import { Module } from '@nestjs/common';
import { TracksController } from './tracks.controller';
import { TracksService } from './tracks.service';
import { FileService } from '../file.service';
import { Track } from './entities/track.entity';

@Module({
  controllers: [TracksController],
  providers: [
    {
      provide: 'TRACK_FILE_SERVICE', // Уникальный токен
      useFactory: () => new FileService<Track[]>('assets/tracks.json'),
    },
    {
      provide: TracksService,
      useFactory: (fileService: FileService<Track[]>) =>
        new TracksService(fileService),
      inject: ['TRACK_FILE_SERVICE'], // Инжектируем наш кастомный сервис
    },
  ],
})
export class TracksModule {}