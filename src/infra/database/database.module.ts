import { Module } from "@nestjs/common";
import { PrismaService } from "./prisma/prisma.service";
import { NotificationsRepository } from "@application/repositories/notifications-repository";
import { PrismaNotificationsRepository } from "./prisma/prisma-notifications-repository";

@Module({
  providers: [
    PrismaService,
    {
      provide: NotificationsRepository,
      useClass: PrismaNotificationsRepository
    }
  ],
  exports: [
    NotificationsRepository
  ]
})
export class DatabaseModule { }