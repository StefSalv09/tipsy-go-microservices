// import { NestFactory } from '@nestjs/core';
// import { BookstoreApiGatewayModule } from './bookstore-api-gateway.module';
// import { ENV } from 'apps/config';
// import { transports, format } from 'winston';
// import { utilities as nestWinstonModuleUtilities, WinstonModule } from 'nest-winston';
// import 'winston-daily-rotate-file';

// async function bootstrap() {
//   const app = await NestFactory.create(BookstoreApiGatewayModule);
//   await app.listen(ENV.PORT ?? 3000);
// }
// bootstrap();
import { NestFactory } from '@nestjs/core';
import { BookstoreApiGatewayModule } from './bookstore-api-gateway.module';
import { ENV } from 'apps/config';
import { transports, format } from 'winston';
import { utilities as nestWinstonModuleUtilities, WinstonModule } from 'nest-winston';
import 'winston-daily-rotate-file';
import { BadRequestException, ValidationPipe } from '@nestjs/common';
import { ValidationError } from 'class-validator';

async function bootstrap() {
  const app = await NestFactory.create(BookstoreApiGatewayModule, {
    logger: WinstonModule.createLogger({
      transports: [
        new transports.File({
          dirname: ENV.LOG_DIR,
          filename: `%DATE%-error.log`,
          level: 'error',
          zippedArchive: false,
        }),
        new transports.Console({
          format: format.combine(
            format.timestamp(),
            format.ms(),
            format.errors({ stack: true }),
            nestWinstonModuleUtilities.format.nestLike('Nest', {
              colors: true,
              prettyPrint: true,
            }),
          ),
        }),
      ],
    }),
  });
  const validationRecursion = (validationErrors: ValidationError[] = []) => {
    for (const errorObj of validationErrors) {
      if (errorObj['constraints'] && Object.keys(errorObj['constraints']).length > 0) {
        return new BadRequestException(Object.values(errorObj['constraints'])[Object.keys(errorObj['constraints']).length - 1]);
      } else if (errorObj['children'] && errorObj['children'].length > 0) {
        return validationRecursion(errorObj['children']);
      } else {
        return new BadRequestException('something went wrong');
      }
    }
  };
  // handle all user input validation globally
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      skipNullProperties: false,
      skipUndefinedProperties: false,
      disableErrorMessages: true,
      transformOptions: { enableImplicitConversion: true },
      forbidNonWhitelisted: true,
      exceptionFactory: (validationErrors: ValidationError[]) => validationRecursion(validationErrors),
    }),
  );
  await app.listen(ENV.PORT);
}
bootstrap();
