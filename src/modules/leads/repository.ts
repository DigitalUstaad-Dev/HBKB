// src/modules/leads/repository.ts

import { CrudRepository } from "../../core/repo/baseRepository";
import { Lead } from "./model";
import { CreateLeadDto, UpdateLeadDto } from "./dto";
import { randomUUID } from "crypto";

const leadsStore: Lead[] = [];

class InMemoryLeadRepository
  implements CrudRepository<Lead, CreateLeadDto, UpdateLeadDto>
{
  async list(): Promise<Lead[]> {
    return leadsStore;
  }

  async findById(id: string): Promise<Lead | null> {
    return leadsStore.find((lead) => lead.id === id) ?? null;
  }

  async create(data: CreateLeadDto): Promise<Lead> {
    const now = new Date().toISOString();
    const lead: Lead = {
      id: randomUUID(),
      createdAt: now,
      updatedAt: now,
      status: data.status ?? "new",
      tags: data.tags ?? [],
      notes: data.notes ?? "",
      ...data,
    };
    leadsStore.push(lead);
    return lead;
  }

  async update(id: string, data: UpdateLeadDto): Promise<Lead | null> {
    const index = leadsStore.findIndex((lead) => lead.id === id);
    if (index === -1) return null;

    const updated: Lead = {
      ...leadsStore[index],
      ...data,
      updatedAt: new Date().toISOString(),
    };

    leadsStore[index] = updated;
    return updated;
  }

  async delete(id: string): Promise<boolean> {
    const index = leadsStore.findIndex((lead) => lead.id === id);
    if (index === -1) return false;

    leadsStore.splice(index, 1);
    return true;
  }
}

export const leadRepository: CrudRepository<
  Lead,
  CreateLeadDto,
  UpdateLeadDto
> = new InMemoryLeadRepository();
