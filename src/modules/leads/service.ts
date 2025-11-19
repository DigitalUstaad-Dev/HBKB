// src/modules/leads/service.ts

import { createCrudService } from "../../core/service/baseService";
import { Lead } from "./model";
import { CreateLeadDto, UpdateLeadDto } from "./dto";
import { leadRepository } from "./repository";

export const leadService = createCrudService<Lead, CreateLeadDto, UpdateLeadDto>(
  leadRepository
);
