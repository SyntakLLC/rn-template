export default function safeTextDisplay(text) {
    if (typeof text != 'string' && isNaN(text)) return '...';
    if (text == undefined) return '...';
    if (text == null) return '...';

    return text;
}
