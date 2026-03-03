export default async function handler(req, res) {
    // CORS Headers strictly set
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
    );

    // Handle OPTIONS request for CORS preflight
    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    const { q } = req.query;
    const query = q || 'piano';
    const API_TOKEN = "fiDIveMwSjYVUgpYRP48ILz3PZNbvAwAhYjYPfVV";
    const freesoundUrl = `https://freesound.org/apiv2/search/text/?query=${query}&token=${API_TOKEN}&fields=name,previews,images`;

    try {
        const response = await fetch(freesoundUrl);
        const data = await response.json();

        // Sirf wahi credits jo aapne diye hain
        const finalResponse = {
            credits: {
                toolkit: "https://ftgmtools.pages.dev",
                youtube: "https://youtube.com/@ftgmtech",
                contact: "https://wa.me/+923104882921?text=Hi+FTGM",
                whatsapp_channel: "https://whatsapp.com/channel/0029VbAzazM2kNFp4p1qIZ2P",
                telegram: "https://t.me/FTGMHACKS"
            },
            ...data
        };

        res.status(200).json(finalResponse);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch data from ftgm tools" });
    }
}
