// Dropix Engine v1.0.8 - Advanced Hardware Telemetry
async function checkHumanScore(event) {
    let score = 0;

    // 1. A PROVA REAL: O clique é confiável? (isTrusted)
    // Se o evento foi gerado por um humano, isTrusted é true.
    if (event && event.isTrusted) {
        score += 50;
    } else {
        console.warn("Alerta: Clique de software detectado.");
        return 0; // Se não for isTrusted, já mata o score aqui.
    }

    // 2. Check de Coordenadas (Robôs clicam no centro perfeito ou 0,0)
    // Humanos clicam em pixels quebrados (ex: 142.54, 31.12)
    if (event.clientX !== 0 && event.clientY !== 0) {
        const isTooPerfect = Number.isInteger(event.clientX) && Number.isInteger(event.clientY);
        if (!isTooPerfect) {
            score += 20;
        }
    }

    // 3. Check de GPU (Hardware Real)
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl');
    if (gl) {
        const debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
        const renderer = gl.getParameter(debugInfo.UNMASKED_RENDERER_ID);
        if (!/swiftshader|google|llvmpipe/i.test(renderer)) {
            score += 30;
        }
    }

    return score;
}

console.log("Módulo de Autenticação Dropix Ativo.");
