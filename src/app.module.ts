import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { NotesModule } from './notes/notes.module';
import { MongooseModule } from '@nestjs/mongoose';
import 'dotenv/config'

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGO_URI),
    UserModule, AuthModule, NotesModule],
  
})
export class AppModule {}
