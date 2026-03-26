const axios = require('axios');
const cors = require('cors');

// CORS middleware setup
const corsHandler = cors({ origin: true });

module.exports = async (req, res) => {
    // CORS handle karne ke liye
    return corsHandler(req, res, async () => {
        const { url } = req.query;

        if (!url) {
            return res.status(400).json({ error: "Please provide a TikTok URL" });
        }

        const targetApi = `https://api.siputzx.my.id/api/d/tiktok/v2?url=${encodeURIComponent(url)}`;

        try {
            const response = await axios.get(targetApi);
            
            const finalData = {
                credits: "●▬▬▬▬๑۩۩๑▬▬▬▬▬● 𝗗𝗲𝘃 : 𝗥𝗮𝗻𝗮 𝗙𝗮𝗶𝘀𝗮𝗹 𝗔𝗹𝗶 𝗩𝗶𝘀𝗶𝘁 : https://ftgmtools.pages.dev 𝗡𝗮𝗺𝗲 : 𝗙𝗧𝗚𝗠 𝗛𝗔𝗖𝗞𝗦 𝗖𝗼𝗻𝘁𝗮𝗰𝘁 : 923104882921 𝗩𝗶𝘀𝗶𝘁 \"𝗙𝗧𝗚𝗠 𝗧𝗢𝗢𝗟𝗦\" 𝗼𝗻 𝗴𝗼𝗼𝗴𝗹𝗲! ~~••~~••~~••~~••~~••~~~~••~~••~~••",
                status: true,
                result: response.data
            };

            // Pretty JSON output
            res.setHeader('Content-Type', 'application/json');
            return res.status(200).send(JSON.stringify(finalData, null, 4));

        } catch (error) {
            return res.status(500).json({ error: "API Fetching Error", message: error.message });
        }
    });
};
const axios = require('axios');
const cors = require('cors');

// CORS middleware setup
const corsHandler = cors({ origin: true });

module.exports = async (req, res) => {
    // CORS handle karne ke liye
    return corsHandler(req, res, async () => {
        const { url } = req.query;

        if (!url) {
            return res.status(400).json({ error: "Please provide a TikTok URL" });
        }

        const targetApi = `https://api.siputzx.my.id/api/d/tiktok/v2?url=${encodeURIComponent(url)}`;

        try {
            const response = await axios.get(targetApi);
            
            const finalData = {
                credits: "●▬▬▬▬๑۩۩๑▬▬▬▬▬● 𝗗𝗲𝘃 : 𝗥𝗮𝗻𝗮 𝗙𝗮𝗶𝘀𝗮𝗹 𝗔𝗹𝗶 𝗩𝗶𝘀𝗶𝘁 : https://ftgmtools.pages.dev 𝗡𝗮𝗺𝗲 : 𝗙𝗧𝗚𝗠 𝗛𝗔𝗖𝗞𝗦 𝗖𝗼𝗻𝘁𝗮𝗰𝘁 : 923104882921 𝗩𝗶𝘀𝗶𝘁 \"𝗙𝗧𝗚𝗠 𝗧𝗢𝗢𝗟𝗦\" 𝗼𝗻 𝗴𝗼𝗼𝗴𝗹𝗲! ~~••~~••~~••~~••~~••~~~~••~~••~~••",
                status: true,
                result: response.data
            };

            // Pretty JSON output
            res.setHeader('Content-Type', 'application/json');
            return res.status(200).send(JSON.stringify(finalData, null, 4));

        } catch (error) {
            return res.status(500).json({ error: "API Fetching Error", message: error.message });
        }
    });
};
