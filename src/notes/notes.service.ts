import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Message } from '../types/notes.types';

@Injectable()
export class NotesService {
    constructor(
        @InjectRepository(Message) // Assuming Message is the entity you want to use
        private notesRepository: Repository<Message>,
    ) { }

    create(note: Message): Promise<Message> {
        const newNotes = this.notesRepository.create(note);
        return this.notesRepository.save(newNotes);
    }

    async findAll(userId: string): Promise<Message[]> {
        return this.notesRepository.find({ where: { userId } });
    }
}
