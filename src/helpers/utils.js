export const scrollToElement = (e, element) => {
    e.preventDefault();
    const el = document.getElementById(element);
    el.scrollIntoView();
}

export const replaceStr = (newValue, currentValue, string) => {
    return string.replace(currentValue, newValue);
}