import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';

// 1 year
const MAX_AGE = 60 * 60 * 24 * 365;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { uuid } = body;

    const cookieStore = await cookies();

    // Check if the guest_id already exist
    const guest_id = cookieStore.get('guest_id');
    const guest_username = cookieStore.get('guest_username');
    if(guest_id && guest_username) {
        return NextResponse.json({success: true, guestId: guest_id.value, guestUsername: guest_username.value}, {status: 200})
    }

    // Set the guest_id and guest_username cookies
    if (!uuid || typeof uuid !== 'string') {
      return NextResponse.json({ error: 'Invalid UUID' }, { status: 400 });
    }

    const guestUsername = `Guest-${uuid.split('-')[0]}`;

    
    cookieStore.set({
      name: 'guest_id',
      value: uuid,
      httpOnly: true,
      maxAge: MAX_AGE,
      sameSite: 'lax',
      path: '/',
    });

    cookieStore.set({
      name: 'guest_username',
      value: guestUsername,
      httpOnly: false,
      maxAge: MAX_AGE,
      sameSite: 'lax',
      path: '/',
    });

    // Optional: Store guest in DB here

    return NextResponse.json({
      success: true,
      guestUsername,
    });
  } catch (error) {
    console.log(error)
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
  }
}
