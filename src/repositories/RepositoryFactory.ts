import CustomerRepository from './CustomerRepository'

type Repository = typeof CustomerRepository

type Repositories = {
  [key: string]: Repository
}

const repositories: Repositories = {
  customers: CustomerRepository,
}

export const RepositoryFactory = {
  get: (name: string): Repository => repositories[name],
}
