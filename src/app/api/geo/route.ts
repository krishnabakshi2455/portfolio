import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

type Geo = { region: string; city: string; countryCode: string };

const providers: ((ip?: string) => Promise<Geo | null>)[] = [
    // 1. ipapi.co
    async (ip) => {
        const res = await fetch(`https://ipapi.co/${ip ? ip + "/" : ""}json/`);
        if (!res.ok) throw new Error(`ipapi.co ${res.status}`);
        const d = await res.json();
        if (d.error || !d.region) return null;
        return { region: d.region, city: d.city ?? "", countryCode: (d.country_code ?? "").toLowerCase() };
    },
    // 2. ipwho.is
    async (ip) => {
        const res = await fetch(`https://ipwho.is/${ip ?? ""}`);
        if (!res.ok) throw new Error(`ipwho.is ${res.status}`);
        const d = await res.json();
        if (!d.success || !d.region) return null;
        return { region: d.region, city: d.city ?? "", countryCode: (d.country_code ?? "").toLowerCase() };
    },
];

export async function GET(req: NextRequest) {
    console.log("x-forwarded-for:", req.headers.get("x-forwarded-for"));
    console.log("x-real-ip:", req.headers.get("x-real-ip"));
    console.log("cf-connecting-ip:", req.headers.get("cf-connecting-ip"));
    const raw = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
    const isPublic = !!raw && !["::1", "127.0.0.1"].includes(raw) && !raw.startsWith("192.168.");
    const ip = isPublic ? raw : undefined; // undefined = provider uses the requester's IP

    for (const lookup of providers) {
        try {
            const geo = await lookup(ip);
            if (geo) return NextResponse.json(geo);
        } catch (err) {
            console.warn("[api/geo] provider failed:", err);
        }
    }

    console.warn("[api/geo] all providers failed for", ip ?? "server IP");
    return NextResponse.json({ region: "", city: "", countryCode: "" });
}