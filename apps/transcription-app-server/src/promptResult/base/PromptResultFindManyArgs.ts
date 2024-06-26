/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { PromptResultWhereInput } from "./PromptResultWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { PromptResultOrderByInput } from "./PromptResultOrderByInput";

@ArgsType()
class PromptResultFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => PromptResultWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => PromptResultWhereInput, { nullable: true })
  @Type(() => PromptResultWhereInput)
  where?: PromptResultWhereInput;

  @ApiProperty({
    required: false,
    type: [PromptResultOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [PromptResultOrderByInput], { nullable: true })
  @Type(() => PromptResultOrderByInput)
  orderBy?: Array<PromptResultOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { PromptResultFindManyArgs as PromptResultFindManyArgs };