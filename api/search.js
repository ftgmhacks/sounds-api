export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const { number } = req.query;

  const baseResponse = {
    Credits: "Rana Faisal Ali",
    Main_Site: "https://ftgmtools.pages.dev"
  };

  if (!number) {
    return res.status(400).json({ 
      success: false, 
      error: "Please provide a number. Example: ?number=03035992121",
      ...baseResponse
    });
  }

  const targetUrl = 'https://xcyber.gt.tc/database?i=1';
  const myCookie = process.env.SITE_COOKIE || '__test=d089630bde43066866fea01229cdaff0';

  try {
    const response = await fetch(targetUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': '*/*',
        'Referer': 'https://xcyber.gt.tc/database?i=2',
        'User-Agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Mobile Safari/537.36',
        'Cookie': myCookie
      },
      body: JSON.stringify({ number })
    });

    if (!response.ok) {
      return res.status(response.status).json({ 
        success: false, 
        error: `Server Error: ${response.status}`,
        ...baseResponse
      });
    }

    const data = await response.json();
    
    const finalData = {
      ...data,
      ...baseResponse
    };

    return res.status(200).json(finalData);

  } catch (error) {
    return res.status(500).json({ 
      success: false, 
      error: error.message,
      ...baseResponse
    });
  }
}