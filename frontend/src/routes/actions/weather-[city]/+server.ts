import { error, json } from '@sveltejs/kit';
import { OPENWEATHERMAP_API_KEY } from "$env/static/private"; 

/** @type {import('./$types').RequestHandler} */
export async function GET({ params }) {
    const city: string = params.city

    //https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&appid=${OPENWEATHERMAP_API_KEY}
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${OPENWEATHERMAP_API_KEY}`, {
        method: "GET",
        headers: new Headers({
            "Content-Type": "application/json",
            "Accepts": "application/json"
        })
    })
    
    if (response.ok) {
        const data = await response.json();
        
        return json({
            data
        })
    }

    throw error(400, "There was a problem fetching data!")
}