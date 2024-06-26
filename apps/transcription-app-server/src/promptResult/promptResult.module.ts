import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PromptResultModuleBase } from "./base/promptResult.module.base";
import { PromptResultService } from "./promptResult.service";
import { PromptResultController } from "./promptResult.controller";
import { PromptResultResolver } from "./promptResult.resolver";

@Module({
  imports: [PromptResultModuleBase, forwardRef(() => AuthModule)],
  controllers: [PromptResultController],
  providers: [PromptResultService, PromptResultResolver],
  exports: [PromptResultService],
})
export class PromptResultModule {}
