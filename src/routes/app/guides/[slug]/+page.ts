// this code can run on the server and on the browser!
// server side rendering and client side rendering

import { error } from '@sveltejs/kit';

export async function load({ fetch, params }) {
    console.log(params);
    const slug = params.slug;
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`);
    const guide = await response.json();

    console.log(guide);

    if (response.ok) {
        return {
            guide
        }
    } else {
        throw error(404, { message: `Could not fetch the guide '${slug}'.` })
        // return {
        //     status: response.status,
        //     error: new Error("could not fetch the guide.")
        // }
    }
}