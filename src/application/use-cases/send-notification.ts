import { Content } from "../entities/content";
import { Notification } from "../entities/notification";

interface SendNotificationRequest {
  recipientId: string;
  content: string;
  category: string;
}

interface SendNoficationResponse {
  notification: Notification;
}

export class SendNotification {
  async execute(request: SendNotificationRequest): Promise<SendNoficationResponse> {
    const { recipientId, content, category } = request;

    const notification = new Notification({
      recipientId,
      content: new Content(content),
      category,
    });

    return {
      notification,
    }
  }
}