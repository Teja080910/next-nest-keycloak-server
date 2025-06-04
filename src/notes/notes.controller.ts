import { Body, Controller, Get, Post } from '@nestjs/common';
import { Message } from '../types/notes.types';
import { NotesService } from './notes.service';

@Controller('notes')
export class NotesController {
    constructor(private notesService: NotesService) {}

    @Post()
    create(@Body() note: Message): Promise<Message> {
        return this.notesService.create(note);
    }

    @Get()
    findAll(): Promise<Message[]> {
        return this.notesService.findAll();
    }
}
