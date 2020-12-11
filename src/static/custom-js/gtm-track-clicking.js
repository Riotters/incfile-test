// Track the clicking on partner links
const linkPartners = document.querySelectorAll('a.partner_link');

linkPartners.forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        let partnerName = link.getAttribute('data-name');
        let url = link.getAttribute('href');

        dataLayer.push({
            partnerName: partnerName,
            event: 'partnerLinkClick'
        });
        window.open(url, '_blank');
    })
});

console.log('Custom file was loaded');