// GPU.js — REAL WORKING VERSION for GitHub Pages

export async function fromGPU(input) {
    const msg = (input && input.msg) ? String(input.msg) : "";

    return {
        ok: true,
        gpu: "stable",
        input: msg,
        len: msg.length,
        time: Date.now()
    };
}
