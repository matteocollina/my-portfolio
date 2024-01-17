import { NextRequest, NextResponse } from "next/server";

export default function handler(req: NextRequest, res: NextResponse) {
    try {
        throw new Error("Errore di test")
        return NextResponse.json({successMsg: "ok nice!"});
    } catch (error) {
        return NextResponse.json({errorMsg:"msg di test err"}, {status: 500});
    }
}