import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req, res) {
    return res.status(200).json({message: "okkkk"});
}