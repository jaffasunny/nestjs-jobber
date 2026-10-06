import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { GraphQLModule } from '@nestjs/graphql';
import {
  ApolloFederationDriverConfig,
} from '@nestjs/apollo';
import { ApolloDriver } from '@nestjs/apollo';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    PrismaModule,
    GraphQLModule.forRoot<ApolloFederationDriverConfig>({
      driver: ApolloDriver,
      // decorator based schema generation
      autoSchemaFile: true,
    }),
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
