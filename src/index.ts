import { createOrder, getOrder } from './orders';
import { captureCharge } from './payments';

export async function handleCheckout(userId: string, totalCents: number): Promise<string> {
  const order = createOrder(userId, totalCents);
  await captureCharge(order.id, order.totalCents);
  return order.id;
}

export function handleLookup(id: string): number | null {
  return getOrder(id)?.totalCents ?? null;
}
