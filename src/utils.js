export function row1(content, style='') {
    return `<div id="row1" class="row" style="${style}">${content}</div>`
}


export function row2(content, style='') {
    return `<div id="row2" class="row" style="${style}">${content}</div>`
}


export function col(content, style='') {
    return `<div class="col" style="${style}">${content}</div>`
}


export function col9(content) {
    return `<div class="col-9">${content}</div>`
}


export function css(style = {}) {
    const toString = key => `${key}: ${style[key]}`
    return Object.keys(style).map(toString).join(';')
}