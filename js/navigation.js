function loadContent() {
    const service = document.getElementById("serviceSelect").value;
    const section = document.getElementById("sectionSelect").value;

    console.log("[loadContent] Evento disparado", {
        service,
        section,
        timestamp: new Date().toISOString()
    });

    if (!service || !section) {
        console.warn("[loadContent] Falta service o section");
        return;
    }

    const fileName = `${service}${section}.html`;
    const path = `sections/${fileName}`;
    const iframe = document.getElementById("contentFrame");

    console.log(`[loadContent] Intentando cargar: ${path}`);

    fetch(path, { method: "HEAD" })
        .then(response => {
            console.log("[loadContent] Respuesta HTTP:", response.status);

            if (response.ok) {
                iframe.src = path;
                console.info(`[loadContent] Archivo cargado correctamente: ${path}`);
            } else {
                iframe.src = "sections/default.html";
                console.warn(`[loadContent] Archivo no encontrado, usando default`);
            }
        })
        .catch(error => {
            console.error("[loadContent] Error al intentar cargar archivo:", error);
            iframe.src = "sections/default.html";
        });
}

