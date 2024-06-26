import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PromptResultService } from "./promptResult.service";
import { PromptResultControllerBase } from "./base/promptResult.controller.base";

@swagger.ApiTags("promptResults")
@common.Controller("promptResults")
export class PromptResultController extends PromptResultControllerBase {
  constructor(
    protected readonly service: PromptResultService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
