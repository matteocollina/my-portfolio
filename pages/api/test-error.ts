import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req, res) {
    try {
        throw new Error("Errore di test")
        return res.status(200).json({});
    } catch (error) {
        return res.status(500).json({message:"msg di test err"});
    }
}