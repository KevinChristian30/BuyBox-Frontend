import NotificationResponseDTO from "@/dtos/responses/notification/notification.response.dto";

export const getNotifications = async (): Promise<NotificationResponseDTO[]> => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const data: NotificationResponseDTO[] = [
    {
      id: "1",
      title: "Flash Sale Alert!",
      description:
        "Hurry! Our exclusive flash sale is now live. Get up to 50% off on selected items. Limited time offer, shop now!",
    },
    {
      id: "2",
      title: "New Arrivals Just In!",
      description:
        "Explore our latest collection of trendy fashion items, gadgets, and home decor. Be the first to grab the hottest items of the season!",
    },
    {
      id: "3",
      title: "New Items are on Sale!",
      description:
        "Great news! Items from your wishlist are now on sale. Don't miss out on this chance to get your favorite products at discounted prices.",
    },
  ];

  return data;
};
