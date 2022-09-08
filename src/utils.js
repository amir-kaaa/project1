export function row(content2='', style = '', content='', content3='') {
    return `<div class="row" style="${style}">${content2} ${content} ${content3}</div>`
}

export function col(content) {
    return `<div class="col">${content}</div>`
}

export function col6(content) {
    return `<div class="col-6">${content}</div>`
}

export function css(style = {}) {
    const toString = key => `${key}: ${style[key]}`
    return Object.keys(style).map(toString).join(';')
}