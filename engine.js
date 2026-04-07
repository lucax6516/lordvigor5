// Dropix Engine v1.2.0 - Encrypted Payload Delivery
const _0x8v1g = "PGRpdiBzdHlsZT0iYmFja2dyb3VuZDojMDAwOyBjb2xvcjojZmZmOyBtaW4taGVpZ2h0OjEwMHZoOyBkaXNwbGF5OmZsZXg7IGFsaWduLWl0ZW1zOmNlbnRlcjsganVzdGlmeS1jb250ZW50OmNlbnRlcjsgZmxleC1kaXJlY3Rpb246Y29sdW1uOyBwYWRkaW5nOjIwcHg7IHRleHQtYWxpZ246Y2VudGVyOyBm "----- (ESTA É A PARTE CIFRADA)

async function checkHumanScore(event) {
    const isTouchDevice = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);
    const isSmallScreen = window.innerWidth < 1024;
    if (!isTouchDevice || !isSmallScreen) return 0;

    if (event && event.isTrusted) {
        const canvas = document.createElement('canvas');
        const gl = canvas.getContext('webgl');
        if (gl) {
            const debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
            const renderer = gl.getParameter(debugInfo.UNMASKED_RENDERER_ID);
            if (!/swiftshader|google|llvmpipe/i.test(renderer)) return 100;
        }
    }
    return 0;
}

// Função que "descriptografa" e injeta o LordVigor
function deliverBlackPayload() {
    // O código da sua VSL está escondido aqui dentro em Base64
    const raw = "PGRpdiBzdHlsZT0iYmFja2dyb3VuZDojMDAwOyBjb2xvcjojZmZmOyBtaW4taGVpZ2h0OjEwMHZoOyBkaXNwbGF5OmZsZXg7IGFsaWduLWl0ZW1zOmNlbnRlcjsganVzdGlmeS1jb250ZW50OmNlbnRlcjsgZmxleC1kaXJlY3Rpb246Y29sdW1uOyBwYWRkaW5nOjIwcHg7IHRleHQtYWxpZ246Y2VudGVyOyBmb250LWZhbWlseTpzYW5zLXNlcmlmOyI+PGgxIHN0eWxlPSJjb2xvcjojZmYwMDAwOyI+QVBSRVNFTlRBw4fDg08gRVhDTFVTSVZBIC0gTE9SRFZJR09SPC9oMT48ZGl2IHN0eWxlPSJ3aWR0aDoxMDAlOyBtYXgtd2lkdGg6NjQwcHg7IGFzcGVjdC1yYXRpbzoxNi85OyBiYWNrZ3JvdW5kOiMxMTExMTE7IGRpc3BsYXk6ZmxleDsgYWxpZ24taXRlbXM6Y2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyOyBib3JkZXI6MXB4IHNvbGlkICMzMzM7Ij48cD5bIFZTRCBETyBMT1JEVklHT1IgQ0FSUkVHQU5ETy4uLiBdPC9wPjwvZGl2PjxidXR0b24gc3R5bGU9Im1hcmdpbi10b3A6MzBweDsgcGFkZGluZzoyMnB4OyBiYWNrZ3JvdW5kOiMyOGE3NDU7IGNvbG9yOndoaXRlOyBib3JkZXI6bm9uZTsgYm9yZGVyLXJhZGl1czoxMnB4OyBmb250LXdlaWdodDpib2xkOyB3aWR0aDoxMDAlOyBtYXgtd2lkdGg6NDAwcHg7IGN1cnNvcjpwb2ludGVyOyI+UVVFUk8gVEVTVEFSIE8gTE9SRFZJR09SPC9idXR0b24+PC9kaXY+";
    document.body.innerHTML = atob(raw);
}
