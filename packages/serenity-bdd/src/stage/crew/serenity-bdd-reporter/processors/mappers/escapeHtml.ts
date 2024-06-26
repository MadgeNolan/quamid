/**
 * @package
 * @param text
 */
export function escapeHtml(text: string): string {
    const replacements = {
        '&': '&amp;',
        '"': '&quot;',
        '\'': '&apos;',
        '<': '&lt;',
        '>': '&gt;'
    };

    return text.replace( /["&'<>]/g, character => replacements[character] );
}
