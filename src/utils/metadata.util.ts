/** Creates the `<meta>` tag when it does not exist yet and sets its content. */
export function setMeta(attribute: "name" | "property", key: string, content: string) {
    let element = document.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`);

    if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attribute, key);
        document.head.appendChild(element);
    }

    element.content = content;
}
