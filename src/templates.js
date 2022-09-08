import {row, col, css, col6} from './utils'

function title(block) {
    const {tag, style} = block.options
    const html1 = col6(block.value[1])
    const html2 = col(block.value[0])
    const html3 = col(block.value[2])
    return row(html2, css(style), html1, html3)
}


function text(block) {
    const {tag, style} = block.options
    return row(col(`<${tag}>${block.value}<${tag}>`), css(style))
}


function columns(block) {
    const {tag, style} = block.options
    const html = block.value.map(item => col(`<${tag}>${item}</${tag}>`)).join('')
    return row(html)
}


// function menu(block) {
//     const {tag, style} = block.options
//     return row(col(`<${tag}>${block.value}</${tag}>`), css(style))
// }


export const templates = {
    title,
    text,
    columns,
    // menu
}