// src/modules/leads/model.ts

import { BaseEntity } from "../../core/domain/baseEntity";

export type LeadStatus = "new" | "contacted" | "qualified" | "lost";
export type LeadSource = "microsite" | "manual" | "ads";

export interface Lead extends BaseEntity {
  name: string;
  email: string;
  phone?: string;
  source: LeadSource;
  status: LeadStatus;
  tags?: string[];
  notes?: string;
}
