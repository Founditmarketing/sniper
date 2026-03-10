import https from 'https';
import fs from 'fs';
import path from 'path';

const downloadFile = (url, dest) => {
    return new Promise((resolve, reject) => {
        const file = fs.createWriteStream(dest);
        https.get(url, (response) => {
            response.pipe(file);
            file.on('finish', () => {
                file.close(resolve(true));
            });
        }).on('error', (err) => {
            fs.unlink(dest, () => reject(err));
        });
    });
};

async function downloadImages() {
    const imagesToDownload = [
        { url: 'https://sniperoff-road.com/wp-content/uploads/2024/01/IMG_9414-400x284.jpg', name: 'real_gallery_1.jpg' },
        { url: 'https://sniperoff-road.com/wp-content/uploads/2024/01/IMG_1969-400x284.jpg', name: 'real_gallery_2.jpg' },
        { url: 'https://sniperoff-road.com/wp-content/uploads/2024/01/IMG_1616-400x284.jpg', name: 'real_gallery_3.jpg' },
        { url: 'https://sniperoff-road.com/wp-content/uploads/2024/01/IMG_1443-400x284.jpg', name: 'real_gallery_4.jpg' },
        { url: 'https://sniperoff-road.com/wp-content/uploads/2024/01/IMG_0894-400x284.jpg', name: 'real_gallery_5.jpg' },
        { url: 'https://sniperoff-road.com/wp-content/uploads/2024/01/IMG_0813-400x284.jpg', name: 'real_gallery_6.jpg' },
        { url: 'https://sniperoff-road.com/wp-content/uploads/2024/01/IMG_0066-400x284.jpg', name: 'real_gallery_7.jpg' },
        { url: 'https://sniperoff-road.com/wp-content/uploads/2024/01/IMG_0071-400x284.jpg', name: 'real_gallery_8.jpg' },
        { url: 'https://sniperoff-road.com/wp-content/uploads/2024/01/2-1.png', name: 'real_services_1.png' },
        { url: 'https://sniperoff-road.com/wp-content/uploads/2024/01/3.png', name: 'real_services_2.png' },
        { url: 'https://sniperoff-road.com/wp-content/uploads/2024/01/1-1.png', name: 'real_services_3.png' }
    ];

    const destFolder = './public/images';
    if (!fs.existsSync(destFolder)) {
        fs.mkdirSync(destFolder, { recursive: true });
    }

    for (const img of imagesToDownload) {
        console.log(`Downloading ${img.name}...`);
        // Try to get hi-res version by removing the WordPress dimensions
        let hiResUrl = img.url.replace(/-\d+x\d+/, '');
        try {
            await downloadFile(hiResUrl, path.join(destFolder, img.name));
            console.log(`Done downloading ${img.name} (Hi-Res)`);
        } catch (e) {
            console.log(`Hi-Res failed for ${img.name}, trying original URL...`);
            try {
                await downloadFile(img.url, path.join(destFolder, img.name));
                console.log(`Done downloading ${img.name} (Low-Res)`);
            } catch (err2) {
                console.error(`Failed completely for ${img.name}`, err2);
            }
        }
    }
}

downloadImages();
