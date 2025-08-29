import { NextResponse } from 'next/server';

export async function GET() {
  try {
    console.log('Testing basic API functionality...');

    return NextResponse.json({
      message: 'API is working',
      timestamp: new Date().toISOString(),
      status: 'success',
    });
  } catch (error) {
    console.error('Test error:', error);
    return NextResponse.json(
      {
        error: `Test failed: ${
          error instanceof Error ? error.message : 'Unknown error'
        }`,
      },
      { status: 500 }
    );
  }
}
