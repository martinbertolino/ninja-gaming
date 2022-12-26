// this code can run on the server and on the browser!
// server side rendering and client side rendering
export async function load({ fetch }) {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const guides = await response.json();

    if (response.ok) {
        return {
            guides
        }
    } else {
        return {
            status: response.status,
            error: new Error("could not fetch the guides.")
        }
    }
}