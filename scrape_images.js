import https from 'https';
import fs from 'fs';

async function fetchHTML(url) {
    return new Promise((resolve, reject) => {
        https.get(url, (res) => {
            let data = '';
            res.on('data', (chunk) => data += chunk);
            res.on('end', () => resolve(data));
        }).on('error', reject);
    });
}

async function scrapeImages() {
    const urls = ['https://sniperoff-road.com/', 'https://sniperoff-road.com/gallery/'];
    const allImages = new Set();

    for (const url of urls) {
        console.log(`Fetching ${url}...`);
        try {
            const html = await fetchHTML(url);

            // Basic regex to find img src attributes
            const imgRegex = /<img[^>]+src="?([^"\s>]+)"?[^>]*>/gi;
            let match;
            while ((match = imgRegex.exec(html)) !== null) {
                let imgSrc = match[1];
                if (imgSrc.startsWith('/')) {
                    imgSrc = 'https://sniperoff-road.com' + imgSrc;
                } else if (!imgSrc.startsWith('http')) {
                    imgSrc = 'https://sniperoff-road.com/' + imgSrc;
                }
                allImages.add(imgSrc);
            }

            // Also look for background images
            const bgRegex = /background-image:\s*url\(['"]?([^'"]+)['"]?\)/gi;
            while ((match = bgRegex.exec(html)) !== null) {
                let bgSrc = match[1];
                if (bgSrc.startsWith('/')) {
                    bgSrc = 'https://sniperoff-road.com' + bgSrc;
                } else if (!bgSrc.startsWith('http')) {
                    bgSrc = 'https://sniperoff-road.com/' + bgSrc;
                }
                allImages.add(bgSrc);
            }
        } catch (e) {
            console.error(`Error fetching ${url}:`, e);
        }
    }

    console.log("Images found:");
    [...allImages].forEach(img => {
        // ignore icons and svg
        if (!img.includes('.svg') && !img.includes('favicon') && !img.includes('icon')) {
            console.log(img);
        }
    });
}

scrapeImages();
