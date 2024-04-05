// middleware/redirectMissingCustomer.js

import { NextApiResponse, NextApiRequest } from 'next';

export default function redirectMissingCustomer(req, res) {
    const siteStatus = process.env.SITE_STATUS;

    if (siteStatus === 'maintenance' && req.url !== '/missing-customer') {
        res.writeHead(307, { Location: '/missing-customer' });
        res.end();
    }
}

