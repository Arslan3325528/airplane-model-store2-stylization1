//! Для визначення кольору фону картки в залежності від значення "year"
export function getBgColorBuiltInStyles(year) {
    let bgColor = '#ffdb92';
    if (year > 1945) bgColor = '#d2fdbd';
    if (year > 1999) bgColor = '#d6f1ff';
    return bgColor;
};

export function getBgColorVanillaCSS(year) {
    const classNames = ["planesItem"];
    if (year > 1945) classNames.push("last");
    if (year > 1999) classNames.push("current");
    console.log("classNames:", classNames); //!
    return classNames;
};