'use server'
import { getUser } from "./getUser";
export const handleComment = async(paper_id?: string | string[], comment?: string) => {
        const user_id = await getUser();
        const guest_id = user_id?.guestId;
        console.log(guest_id)
        const res = await fetch('https://scholar-flow-ruddy.vercel.app//api/users/log-activity',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({user_id: guest_id, paper_id, action: "COMMENTED", comment: comment}),
        })
        const data = await res.json();
        console.log(data)
    }