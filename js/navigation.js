function loadContent() {
    const service = document.getElementById("serviceSelect").value;
    const section = document.getElementById("sectionSelect").value;

    if (!service || !section) return;

    const fileName = `${service}${section}.html`;
    const path = `sections/${fileName}`;
    const iframe = document.getElementById("contentFrame");

    // Verificar si existe el archivo
    fetch(path, { method: "HEAD" })
        .then(response => {
            if (response.ok) {
                iframe.src = path;
            } else {
                iframe.src = "sections/default.html";
            }
        })
        .catch(() => {
            iframe.src = "sections/default.html";
        });
}
