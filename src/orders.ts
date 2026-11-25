export interface Order {
  id: string;
  userId: string;
  totalCents: number;
}

const orders = new Map<string, Order>();

export function createOrder(userId: string, totalCents: number): Order {
  if (totalCents <= 0) {
    throw new Error('Order total must be positive');
  }
  const order: Order = { id: crypto.randomUUID(), userId, totalCents };
  orders.set(order.id, order);
  return order;
}

export function getOrder(id: string): Order | undefined {
  return orders.get(id);
}
