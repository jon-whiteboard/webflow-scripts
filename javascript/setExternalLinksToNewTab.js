// Sets external links to open in a new tab, with rel noopener and noreferrer if not already added. Ignores non-URL links like mailto, and relative links.

document.querySelectorAll('a[href]').forEach(link => {
    const url = new URL(link.href, window.location.origin);
    if (url.protocol.startsWith('http') && url.origin !== window.location.origin) {
        link.setAttribute('target', '_blank');
        if (!link.hasAttribute('rel')) {
            link.setAttribute('rel', 'noopener noreferrer');
        }
    }
});
