const fs = require('fs');
const cheerio = require('cheerio');

const html = fs.readFileSync('Code de la route.html', 'utf-8');
const $ = cheerio.load(html);

const signs = [];
let idCounter = 1;

$('#ch11 .card').each((i, card) => {
    const categoryTitle = $(card).find('h3').text().trim();
    
    // Determine category based on title
    let category = 'other';
    if (categoryTitle.includes('الخطر')) category = 'danger';
    else if (categoryTitle.includes('الأولوية')) category = 'priority';
    else if (categoryTitle.includes('المنع')) category = 'prohibition';
    else if (categoryTitle.includes('الإجبار')) category = 'obligation';
    else if (categoryTitle.includes('الإرشاد')) category = 'indication';

    $(card).find('div > div.bg-white').each((j, signDiv) => {
        const img = $(signDiv).find('img').attr('src');
        const label = $(signDiv).find('h4').text().trim();
        const description = $(signDiv).find('p').text().trim();
        
        if (img && label) {
            signs.push({
                id: 'sign_' + idCounter++,
                category,
                label,
                description,
                imageOrSvg: img
            });
        }
    });
});

const contentData = {
    signs
};

const tsContent = `export const CONTENT_DATA = ${JSON.stringify(contentData, null, 2)};\n`;
fs.writeFileSync('./src/app/data/content.data.ts', tsContent);
console.log('Successfully generated content.data.ts with', signs.length, 'signs');
