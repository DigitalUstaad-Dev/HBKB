// src/core/repo/baseRepository.ts

export interface CrudRepository<T, TCreate, TUpdate> {
  list(): Promise<T[]>;
  findById(id: string): Promise<T | null>;
  create(data: TCreate): Promise<T>;
  update(id: string, data: TUpdate): Promise<T | null>;
  delete(id: string): Promise<boolean>;
}
