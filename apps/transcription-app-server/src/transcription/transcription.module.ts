import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { TranscriptionModuleBase } from "./base/transcription.module.base";
import { TranscriptionService } from "./transcription.service";
import { TranscriptionController } from "./transcription.controller";
import { TranscriptionResolver } from "./transcription.resolver";

@Module({
  imports: [TranscriptionModuleBase, forwardRef(() => AuthModule)],
  controllers: [TranscriptionController],
  providers: [TranscriptionService, TranscriptionResolver],
  exports: [TranscriptionService],
})
export class TranscriptionModule {}
