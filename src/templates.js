import {row, col, css, col9} from './utils'

function title(block) {
    const {tag, style} = block.options
    const html1 = col9(`<h1>`+block.value[1]+`</h1>`)
    const html2 = col(`<${tag}>`+block.value[0]+`<${tag}>`)
    const html3 = col(`<${tag}>`+block.value[2]+`<${tag}>`)
    return row(html2, css(style), html1, html3)
}


function text(block) {
    const {tag, style} = block.options
    return row(`<${tag}>${block.value}<${tag}>`, css(style))
}


function columns(block) {
    const {tag, style} = block.options
    const html = block.value.map(item => col(`<${tag}>`+item+`<${tag}>`)).join('')
    return row(html, css(style))
}


// function menu(block) {
//     const {tag, style} = block.options
//     return row(col(`<${tag}>${block.value}</${tag}>`), css(style))
// }


export const templates = {
    title,
    text,
    columns
    // menu
}