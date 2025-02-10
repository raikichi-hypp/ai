function shareOnTwitter() {
    const url = window.location.href;
    window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}`, "_blank");
}

function shareOnFacebook() {
    const url = window.location.href;
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, "_blank");
}
 
