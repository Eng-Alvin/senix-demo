import { createOrder, getOrder } from './orders';

export function handleCheckout(userId: string, totalCents: number): string {
  const order = createOrder(userId, totalCents);
  return order.id;
}

export function handleLookup(id: string): number | null {
  return getOrder(id)?.totalCents ?? null;
}
