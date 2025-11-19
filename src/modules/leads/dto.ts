// src/modules/leads/dto.ts

import type { LeadStatus, LeadSource } from "./model";

export interface CreateLeadDto {
  name: string;
  email: string;
  phone?: string;
  source: LeadSource;
  status?: LeadStatus;
  tags?: string[];
  notes?: string;
}

export interface UpdateLeadDto {
  name?: string;
  email?: string;
  phone?: string;
  source?: LeadSource;
  status?: LeadStatus;
  tags?: string[];
  notes?: string;
}
