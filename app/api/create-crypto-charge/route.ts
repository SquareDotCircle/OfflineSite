import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { amount, productName, productDescription } = await request.json();

    // Validate environment variable
    const apiKey = process.env.COINBASE_COMMERCE_API_KEY;
    if (!apiKey) {
      console.error('COINBASE_COMMERCE_API_KEY is not set');
      return NextResponse.json(
        { error: 'Cryptocurrency payment system is not configured' },
        { status: 500 }
      );
    }

    // Validate origin (CSRF protection)
    const origin = request.headers.get('origin');
    const allowedOrigins = [
      'http://localhost:3000',
      'https://offline.io',
      'https://www.offline.io',
      process.env.NEXT_PUBLIC_SITE_URL,
    ].filter(Boolean);

    if (origin && !allowedOrigins.includes(origin)) {
      console.warn(`Rejected request from unauthorized origin: ${origin}`);
      return NextResponse.json({ error: 'Unauthorized' }, { status: 403 });
    }

    // Validate amount
    if (!amount || amount < 100) {
      return NextResponse.json(
        { error: 'Invalid amount' },
        { status: 400 }
      );
    }

    // Convert cents to dollars for Coinbase
    const priceInUSD = (amount / 100).toFixed(2);

    // Create charge using Coinbase Commerce API
    const chargeResponse = await fetch('https://api.commerce.coinbase.com/charges', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CC-Api-Key': apiKey,
        'X-CC-Version': '2018-03-22',
      },
      body: JSON.stringify({
        name: productName || 'Offline Product',
        description: productDescription || 'Offline Intelligence Product Purchase',
        pricing_type: 'fixed_price',
        local_price: {
          amount: priceInUSD,
          currency: 'USD',
        },
        metadata: {
          customer_source: 'offline_website',
          product_name: productName,
        },
        redirect_url: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/checkout-success`,
        cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/checkout`,
      }),
    });

    if (!chargeResponse.ok) {
      const errorData = await chargeResponse.json();
      console.error('Coinbase API error:', errorData);
      return NextResponse.json(
        { error: 'Failed to create crypto charge' },
        { status: 500 }
      );
    }

    const chargeData = await chargeResponse.json();

    return NextResponse.json({
      hostedUrl: chargeData.data.hosted_url,
      chargeCode: chargeData.data.code,
      chargeId: chargeData.data.id,
      addresses: chargeData.data.addresses,
      pricing: chargeData.data.pricing,
    });
  } catch (error) {
    console.error('Error creating crypto charge:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

