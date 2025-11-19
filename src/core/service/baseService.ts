// src/core/service/baseService.ts

import { CrudRepository } from "../repo/baseRepository";

export interface CrudService<T, TCreate, TUpdate> {
  list(): Promise<T[]>;
  get(id: string): Promise<T | null>;
  create(data: TCreate): Promise<T>;
  update(id: string, data: TUpdate): Promise<T | null>;
  remove(id: string): Promise<boolean>;
}

export function createCrudService<T, TCreate, TUpdate>(
  repo: CrudRepository<T, TCreate, TUpdate>
): CrudService<T, TCreate, TUpdate> {
  return {
    list: () => repo.list(),
    get: (id) => repo.findById(id),
    create: (data) => repo.create(data),
    update: (id, data) => repo.update(id, data),
    remove: (id) => repo.delete(id),
  };
}
