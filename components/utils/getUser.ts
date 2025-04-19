'use server'
import { cookies } from "next/headers";

export async function getUser() {
    const cookieStore = await cookies();
    const guest_id = cookieStore.get("guest_id");
    const guest_username = cookieStore.get("guest_username");
    
    if (guest_id && guest_username) {
        return { guestId: guest_id.value, guestUsername: guest_username.value };
    } else {
        return null;
    }
}