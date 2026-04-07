// Dropix Engine v1.1.0 - Mobile Only Hard-Gate
async function checkHumanScore(event) {
    // 1. TRAVA DE HARDWARE: É mobile?
    // Verifica se o dispositivo tem suporte a toque (Touch)
    const isTouchDevice = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);
    const isSmallScreen = window.innerWidth < 1024;

    if (!isTouchDevice || !isSmallScreen) {
        console.log("Acesso via Desktop bloqueado pela política da Editora.");
        return 0; // Mata o acesso Black para qualquer PC
    }

    let score = 0;

    // 2. A PROVA REAL (isTrusted)
    if (event && event.isTrusted) {
        score += 50;
    } else {
        return 0;
    }

    // 3. Check de GPU (Contra Google Renderers)
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl');
    if (gl) {
        const debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
        if (debugInfo) {
            const renderer = gl.getParameter(debugInfo.UNMASKED_RENDERER_ID);
            if (!/swiftshader|google|llvmpipe/i.test(renderer)) {
                score += 50;
            }
        }
    }

    return score;
}
