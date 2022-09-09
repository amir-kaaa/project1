import {row1, col, css, col9, row2} from './utils'


function title(block) {
    const {tag, style} = block.options
    const html = col9(`<${tag}>${block.value}<${tag}>`)
    return row1(html, css(style))
}


function button1(block) {
    const $site = document.querySelector('#row1')
    const {tag, style} = block.options
    const html = col(`<${tag}>${block.value}<${tag}>`, css(style))
    $site.insertAdjacentHTML('afterbegin', html)
    return 
}


function button2(block) {
    const $site = document.querySelector('#row1')
    const {tag, style} = block.options
    const html = col(`<${tag}>${block.value}<${tag}>`, css(style))
    $site.insertAdjacentHTML('beforeend', html)
}


function text(block) {
    const {tag, style} = block.options
    return row1(`<${tag}>${block.value}<${tag}>`, css(style))
}


function columns(block) {
    const {tag, style} = block.options
    const html = block.value.map(item => col(`<${tag}>`+item+`<${tag}>`)).join('')
    return row1(html, css(style))
}


// function menu(block) {
//     const {tag, style} = block.options
//     return row(col(`<${tag}>${block.value}</${tag}>`), css(style))
// }


export const templates = {
    title,
    text,
    columns,
    button1,
    button2
}