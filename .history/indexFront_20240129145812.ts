import { ColorPalette } from "./types/types";

async function getColors() {
    try {
        const res = await fetch("/getAll");
        const json = (await res.json()) as ColorPalette[];
        
    } catch {

    }
}