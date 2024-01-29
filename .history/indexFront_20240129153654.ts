import { ColorPalette } from "./types/types";

async function getColors() {
    try {
        const res = await fetch("/getAll");
        const json = (await res.json()) as ColorPalette[];

        if(json && json.length > 0){
            const items = json.map((item) =>{
                const colorsContainer = document.createElement('div');
                colorsContainer.classList.add('colorContainer');

                const div1 = document.createElement("div");
                colorsContainer.classList.add("color");
                div1.textContent = item.color1;
                div1.style.backgroundColor = item.color1;

                const div2 = document.createElement("div");
                colorsContainer.classList.add("color");
                div1.textContent = item.color2;
                div1.style.backgroundColor = item.color2;

                const div3 = document.createElement("div");
                colorsContainer.classList.add("color");
                div1.textContent = item.color3;
                div1.style.backgroundColor = item.color3;

                const div4 = document.createElement("div");
                colorsContainer.classList.add("color");
                div1.textContent = item.color4;
                div1.style.backgroundColor = item.color4;

                const div5 = document.createElement("div");
                div5.textContent = item.title;
                colorsContainer.classList.add("title");

                const container = document.createElement('div');
                colorsContainer.append(div1, div)
            });
        }

    } catch (error) {}
}