//! Для визначення кольору фону картки в залежності від значення "year"
export function getBgColor(year) {
    let bgColor = '#ffdb92';
    if (year > 1945) bgColor = '#d2fdbd';
    if (year > 1999) bgColor = '#d6f1ff';
    return bgColor;
};