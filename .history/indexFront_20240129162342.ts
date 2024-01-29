import { ColorPalette } from "./types/types";

getColors();

async function getColors() {
    try {
        const res = await fetch("/getAll");
        const json = (await res.json()) as ColorPalette[];

        if(json && json.length > 0){
            const items:HTMLDivElement[] = json.map((item) =>{
                const colorsContainer = document.createElement('div');
                colorsContainer.classList.add('colorContainer');

                const div1 = document.createElement("div");
                div1.classList.add("color");
                div1.textContent = item.color1;
                div1.style.backgroundColor = item.color1;

                const div2 = document.createElement("div");
                div2.classList.add("color");
                div2.textContent = item.color2;
                div2.style.backgroundColor = item.color2;

                const div3 = document.createElement("div");
                div3.classList.add("color");
                div3.textContent = item.color3;
                div3.style.backgroundColor = item.color3;

                const div4 = document.createElement("div");
                colorsContainer.classList.add("color");
                div1.textContent = item.color4;
                div1.style.backgroundColor = item.color4;

                const div5 = document.createElement("div");
                div5.textContent = item.title;
                colorsContainer.classList.add("title");

                const container = document.createElement('div');
                colorsContainer.append(div1, div2, div3, div4);
                container.append(div5, colorsContainer);

                return container;
            });

            document.querySelector("#items")?.append(...items);
        }
    } catch (error) {}
}