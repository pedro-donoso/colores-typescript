import { ColorPalette } from "./types/types";

async function getColors() {
    try {
        const res = await fetch("/getAll");
        const json = (await res.json()) as ColorPalette[];

        if(json && json.length > 0){
            const items = json.map((item) =>{
                const colorsContainer = document.createElement('div');
                colorsContainer.classList.add('color')
            });
        }

    } catch (error) {}
}