const footerPlaceholder = document.querySelector("[data-site-footer]");
const footerScriptUrl = new URL(document.currentScript.src);

if (footerPlaceholder) {
  const footerUrl = new URL("footer-licence.html", footerScriptUrl);

  fetch(footerUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Failed to load site footer (${response.status} ${response.statusText})`);
      }

      return response.text();
    })
    .then((html) => {
      const template = document.createElement("template");
      template.innerHTML = html;
      footerPlaceholder.replaceWith(template.content);
    })
    .catch((error) => {
      console.error("Could not load the site footer.", error);
    });
}
