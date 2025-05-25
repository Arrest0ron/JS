import { Injectable } from '@nestjs/common';
import { CreateTrackDto } from './dto/create-track.dto';
import { UpdateTrackDto } from './dto/update-track.dto';
import { Track } from './entities/track.entity';
import { FileService } from 'src/file.service';


@Injectable()
export class TracksService {
  constructor(private fileService: FileService<Track[]>) {}

  findAll(title?: string): Track[] {
    const tracks = this.fileService.read();

    return title
      ? tracks.filter((track) =>
          track.title.toLowerCase().includes(title.toLowerCase()),
        )
      : tracks;
  }
create(createTrackDto: CreateTrackDto) {
    const tracks = this.fileService.read();

    // Найди максимальный id среди всех треков
    const maxId = tracks.reduce((max, track) => {
        return track.id > max ? track.id : max;
    }, 0);

    // Создай новый трек с уникальным id
    const track = { ...createTrackDto, id: maxId + 1 };

    this.fileService.add(track);
}

  findOne(id: number): Track | null {
    const tracks = this.fileService.read();

    return tracks.find((track) => track.id === id) ?? null;
  }

  update(id: number, updateTrackDto: UpdateTrackDto): void {
    const tracks = this.fileService.read();

    const updatedTracks = tracks.map((track) =>
      track.id === id ? { ...track, ...updateTrackDto } : track,
    );

    this.fileService.write(updatedTracks);
  }

  remove(id: number): void {
    const filteredTracks = this.fileService
      .read()
      .filter((track) => track.id !== id);

    this.fileService.write(filteredTracks);
  }
}