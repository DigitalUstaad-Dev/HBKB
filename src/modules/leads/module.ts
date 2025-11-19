import { Request, Response } from "express";

export async function listLeads(req: Request, res: Response) {
    return res.json([]);
}

export async function getLead(req: Request, res: Response) {
    return res.json({});
}

export async function createLead(req: Request, res: Response) {
    return res.json({ success: true });
}

export async function updateLead(req: Request, res: Response) {
    return res.json({ success: true });
}

export async function deleteLead(req: Request, res: Response) {
    return res.json({ success: true });
}
