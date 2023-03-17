<script lang="ts">
    import Icon from '@iconify/svelte';

    var data: WeatherData = {
        "coord": {
            "lon": 10.8833, "lat": 48.3667
        },
        "weather": [{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],
        "base": "stations",
        "main": {"temp":281.31,"feels_like":281.31,"temp_min":277.6,"temp_max":284.6,"pressure":1014,"humidity":65}, 
        "visibility": 10000,
        "wind": {"speed":0.51,"deg":0},
        "clouds": {"all":0},
        "dt":1679045034,
        "sys": {"type":1,"id":1308,"country":"DE","sunrise":1679030798,"sunset":1679073799},
        "timezone": 3600,
        "id": 2954172,
        "name": "Augsburg",
        "cod": 200
    };
    var city: string;

    async function fetchWeather(city: string) {
        const response = await fetch("/actions/weather-" + city, {
            method: "GET",
            headers: new Headers({
                "Content-Type": "application/json",
                "Accepts": "application/json"
            })
        })

        if (response.ok) {
            const json = await response.json();
            data = json.data;
        }
    }
</script>

<main class="bg-slate-800 text-white container mx-auto">
    <input type="text" placeholder="City" class="p-3 text-lg rounded-md bg-zinc-50 text-black" bind:value={city} />
    {#if data.weather}
        
    {/if}
    <button class="rounded-md py-3 px-5 bg-zinc-50 text-black text-4xl" on:click={() => fetchWeather(city)}>
        <Icon icon="material-symbols:sound-detection-dog-barking"></Icon>
    </button>
</main>