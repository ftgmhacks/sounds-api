export default async function handler(req, res) {
    // --- EXACT DOMAIN PRIVACY ---
    const allowedOrigin = "https://ftgm-sfx-api.vercel.app"; 
    const requestOrigin = req.headers.origin;

    // Check if the request is coming from your specific Vercel domain
    if (requestOrigin === allowedOrigin) {
        res.setHeader('Access-Control-Allow-Origin', allowedOrigin);
    } else {
        // Agar koi aur website use karegi to block ho jayegi
        return res.status(403).json({ 
            error: "Access Denied: FTGM Private API",
            credits: {
                tiktok: "https://www.tiktok.com/@r.faisalali",
                youtube: "https://youtube.com/@ftgmtech",
                contact: "https://wa.me/+923104882921?text=Hi+FTGM",
                whatsapp_channel: "https://whatsapp.com/channel/0029VbAzazM2kNFp4p1qIZ2P",
                telegram: "https://t.me/FTGMHACKS"
            }
        });
    }

    // Standard CORS Headers
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

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

        const finalResponse = {
            credits: {
                tiktok: "https://ftgmtools.pages.dev",
                youtube: "https://youtube.com/@ftgmtech",
                contact: "https://wa.me/+923104882921?text=Hi+FTGM",
                whatsapp_channel: "https://whatsapp.com/channel/0029VbAzazM2kNFp4p1qIZ2P",
                telegram: "https://t.me/FTGMHACKS"
            },
            ...data
        };

        res.status(200).json(finalResponse);
    } catch (error) {
        res.status(500).json({ error: "API Fetch Error" });
    }
    }
