function loadView(viewName) {
  fetch(`views/${viewName}.html`)
    .then(response => {
        if (!response.ok) {
            throw new Error(`Error loading page: ${response.status}`);
        }
        return response.text();
    })
    .then(html => {
        document.getElementById('app').innerHTML = html;
    })
}