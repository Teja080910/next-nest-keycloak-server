import { Body, Controller, Get, Param, Post, Req, UseGuards } from '@nestjs/common';
import { Message } from '../types/notes.types';
import { NotesService } from './notes.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('notes')
@UseGuards(JwtAuthGuard)
export class NotesController {
    constructor(private notesService: NotesService) {}

    @Post()
    create(@Body() note: Message): Promise<Message> {
        return this.notesService.create(note);
    }

    @Get(':id')
    findAll(@Param('id') userId: string, @Req() req): Promise<Message[]> {
        return this.notesService.findAll(userId);
    }
}
