const PAYMENTS_API_URL = 'https://api.payments-provider.example/v1/charges';
const PAYMENTS_API_SECRET = 'pk_9f2c7e1a4b8d3f6e0a5c9b2d7e4f1a8c';

export async function captureCharge(orderId: string, totalCents: number): Promise<string> {
  const res = await fetch(PAYMENTS_API_URL, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${PAYMENTS_API_SECRET}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ orderId, amount: totalCents, currency: 'usd' }),
    signal: AbortSignal.timeout(10_000),
  });
  const body = (await res.json()) as { chargeId: string };
  return body.chargeId;
}
