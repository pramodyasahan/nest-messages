import { Body, Controller, Get, Param, Post } from '@nestjs/common';

type createMessageProps = {
  content: string
}

@Controller('/messages')
export class MessagesController {
  @Get()
  listMessages() {
    return 'Hi';
  }

  @Post()
  createMessage(@Body() body: createMessageProps) {
    return `${body.content}`;
  }

  @Get('/:id')
  getMessage(@Param('id') id: string) {
    return `${id}`;
  }

}
