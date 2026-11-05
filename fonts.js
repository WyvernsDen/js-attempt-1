class LocalTypefaceSearch {
    constructor() {
        this.tfsets = {
            shellMono: [
                'Menlo',
                'JetBrains Mono',
                'Noto Mono',
                'SF Mono',
                'Roboto Mono',
                // 'monospace'
            ],
            geoSans: [
                'Avenir Next',
                'Avenir',
                'HarmonyOS Sans',
                'DIN 1451',
                'Neuzeit S',
                'Montserrat',
                // 'sans-serif'
            ],
            appleSerif: [
                '-apple-system-ui-serif',
                'ui-serif',
                'New York',
                'Georgia',
                // 'serif'
            ]
        };
    }
    getTF(query) {
        const foundTypeface = this.tfsets[query];
        if (!foundTypeface) {
            console.warn(`No compatible typefaces available locally. Fallback: \'sans-serif\'.`);
            return 'sans-serif'
        }
        return foundTypeface
            .map(tf => tf.includes(' ') && !tf.startsWith('-') ? `"${tf}"` : tf)
            // .join(', ');
    }
    exportTypeface(selector, query) {
        const elements = document.querySelectorAll(selector);
        const foundLocal = this.getTF(query);
        // console.warn(`${foundLocal}`)
        elements.forEach(el=> el.style.fontFamily = foundLocal);
        return foundLocal
    }
}

export const local = new LocalTypefaceSearch();