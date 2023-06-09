import { Injectable } from "@nestjs/common";
import { Content } from "@application/entities/content";
import { Notification } from "@application/entities/notification";
import { NotificationsRepository } from "@application/repositories/notifications-repository";

interface SendNotificationRequest {
  recipientId: string;
  content: string;
  category: string;
}

interface SendNoficationResponse {
  notification: Notification;
}

@Injectable()
export class SendNotification {
  constructor(private notificationsRepository: NotificationsRepository) { }

  async execute(request: SendNotificationRequest): Promise<SendNoficationResponse> {
    const { recipientId, content, category } = request;

    const notification = new Notification({
      recipientId,
      content: new Content(content),
      category,
    });

    await this.notificationsRepository.create(notification);

    return {
      notification,
    }
  }
}