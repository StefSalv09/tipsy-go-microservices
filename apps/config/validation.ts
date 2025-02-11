import { ServiceUnavailableException, ValidationError } from '@nestjs/common';

import { plainToInstance } from 'class-transformer';
import {
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsString,
  validateSync,
} from 'class-validator';

export enum Environment {
  Development = 'development',
  Production = 'production',
  Staging = 'staging',
}

export class EnvVariablesDto {
  @IsEnum(Environment)
  @IsNotEmpty()
  NODE_ENV: Environment;

  @IsNotEmpty()
  @IsString()
  APP_URL: string;

  @IsNumber()
  PORT: number;

  @IsNotEmpty()
  CREDENTIALS: boolean;

  @IsNotEmpty()
  @IsString()
  ORIGIN: string;

  @IsNotEmpty()
  @IsString()
  FORGET_PASSWORD_TOKEN_EXPIRATION: string;

  @IsNotEmpty()
  BOOKS_PORT: number

  @IsNotEmpty()
  @IsString()
  HOST: string;

  @IsNotEmpty()
  @IsString()
  ACCESS_TOKEN_EXPIRATION: string;

  @IsNotEmpty()
  @IsString()
  SECRET_KEY: string;

  @IsNotEmpty()
  @IsString()
  REACT_APP_URL: string;

  @IsNotEmpty()
  @IsString()
  LOG_FORMAT: string;

  @IsNotEmpty()
  @IsString()
  LOG_DIR: string;

  @IsNotEmpty()
  @IsString()
  FIREBASE_STORAGE_BUCKET: string;

  @IsNotEmpty()
  @IsString()
  FIREBASE_API_KEY: string;

  @IsNotEmpty()
  @IsString()
  FIREBASE_AUTH_DOMAIN: string;

  @IsNotEmpty()
  @IsString()
  FIREBASE_PROJECT_ID: string;

  @IsNotEmpty()
  @IsString()
  FIREBASE_MESSAGNGER_ID: string;

  @IsNotEmpty()
  @IsString()
  FIREBASE_APP_ID: string;

  @IsNotEmpty()
  @IsString()
  FIREBASE_MEASUREMENT_ID: string;

  @IsNotEmpty()
  @IsString()
  FIREBASE_DATABASE_NAME: string;

  @IsNotEmpty()
  @IsString()
  GOOGLE_CALLBACK_URL: string;

  @IsNotEmpty()
  @IsString()
  GOOGLE_CLIENT_SECRET: string;

  @IsNotEmpty()
  @IsString()
  GOOGLE_CLIENT_ID: string;

  @IsNotEmpty()
  @IsString()
  ALGOLIA_APP_ID: string;

  @IsNotEmpty()
  @IsString()
  ALGOLIA_API_KEY: string;

  @IsNotEmpty()
  @IsString()
  END_USER_PORT: number;
}

export function validate(config: Record<string, unknown>) {
  const validatedConfig = plainToInstance(EnvVariablesDto, config, {
    enableImplicitConversion: true,
  });

  const errors: ValidationError[] | any = ([] = validateSync(validatedConfig, {
    skipMissingProperties: false,
  }));
  if (errors.length > 0) {
    throw new ServiceUnavailableException(
      errors[0]['constraints'][Object.keys(errors[0]['constraints'])[0]],
    );
  }
  return validatedConfig;
}
