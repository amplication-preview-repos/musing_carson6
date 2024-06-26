/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { PromptWhereUniqueInput } from "../../prompt/base/PromptWhereUniqueInput";
import {
  ValidateNested,
  IsOptional,
  IsString,
  MaxLength,
} from "class-validator";
import { Type } from "class-transformer";
import { TranscriptionWhereUniqueInput } from "../../transcription/base/TranscriptionWhereUniqueInput";

@InputType()
class PromptResultCreateInput {
  @ApiProperty({
    required: false,
    type: () => PromptWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => PromptWhereUniqueInput)
  @IsOptional()
  @Field(() => PromptWhereUniqueInput, {
    nullable: true,
  })
  prompt?: PromptWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  result?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  status?: string | null;

  @ApiProperty({
    required: false,
    type: () => TranscriptionWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => TranscriptionWhereUniqueInput)
  @IsOptional()
  @Field(() => TranscriptionWhereUniqueInput, {
    nullable: true,
  })
  transcription?: TranscriptionWhereUniqueInput | null;
}

export { PromptResultCreateInput as PromptResultCreateInput };