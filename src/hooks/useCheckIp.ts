"use client";
import { useEffect, useState } from "react";

export type IpLocation = {
    region: string;
    city: string;
    countryCode: string;
};

let cached: Promise<IpLocation | null> | null = null;

// one request per page load, shared by every component that uses the hooks
function fetchIpLocation(): Promise<IpLocation | null> {
    if (!cached) {
        cached = fetch("/api/geo")
            .then((res) => (res.ok ? (res.json() as Promise<IpLocation>) : null))
            .catch((err) => {
                console.error("Failed to fetch IP location", err);
                return null;
            })
            .then((result) => {
                if (!result) cached = null; // allow a retry on failure
                return result;
            });
    }
    return cached;
}

export function useIpLocation() {
    const [location, setLocation] = useState<IpLocation | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let cancelled = false;
        fetchIpLocation().then((result) => {
            if (cancelled) return;
            setLocation(result);
            setLoading(false);
        });
        return () => {
            cancelled = true;
        };
    }, []);

    return { location, loading };
}

export function useCheckIp(defaultCountryCode = "in") {
    const { location } = useIpLocation();
    return location?.countryCode || defaultCountryCode;
}