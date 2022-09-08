import {row, col, css} from './utills'

function title(block) {
    const {tag, style} = block.options
    return row(col(`<${tag}>${block.value}</${tag}>`), css(style))
}

function text(block) {
    const {tag, style} = block.options
    return row(col(`<${tag}>${block.value}<${tag}>`), css(style))
}

function columns(block) {
    const html = block.value.map(col).join('')
    return row(html)
}

export const templates = {
    title,
    text,
    columns
}