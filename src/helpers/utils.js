export const scrollToElement = (e, element) => {
    e.preventDefault();
    const el = document.getElementById(element);
    el.scrollIntoView();
}