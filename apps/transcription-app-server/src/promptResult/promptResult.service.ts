import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PromptResultServiceBase } from "./base/promptResult.service.base";

@Injectable()
export class PromptResultService extends PromptResultServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
