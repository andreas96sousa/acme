import prisma from '@/lib/prisma';
import {
  User,
  CreateUserData,
  UpdateUserData,
  ResponseUser,
  PaginatedResponse,
  FindAllUsersParams,
} from '@/types';

const SORTABLE_FIELDS = ['name', 'email'] as const;

type SortableFields = (typeof SORTABLE_FIELDS)[number];

function isSortableFields(value: string): value is SortableFields {
  return (SORTABLE_FIELDS as readonly string[]).includes(value);
}

export async function findAllUsers(
  params: FindAllUsersParams = {},
): Promise<PaginatedResponse<User>> {
  const {
    search,
    page = 1,
    limit = 10,
    sortBy = 'name',
    order = 'asc',
  } = params;

  const safePage = Math.max(1, page);
  const safeLimit = Math.min(Math.max(1, limit), 100);
  const skip = (safePage - 1) * safeLimit;

  const safeSortBy = isSortableFields(sortBy) ? sortBy : 'name';

  const conditions: object[] = [];


export async function findUserById(id: string): Promise<User | null> {
  const user = await prisma.user.findUnique({
    where: { id },
  });

  return user;
}

export async function createUser(data: CreateUserData): Promise<User> {
  const user = await prisma.user.create({
    data,
  });
  return user;
}

export async function updateUser(
  data: UpdateUserData,
  id: string,
): Promise<User> {
  const user = await prisma.user.update({
    where: { id },
    data,
  });
  return user;
}

export async function deleteUser(id: string): Promise<void> {
  await prisma.user.delete({
    where: { id },
  });
}
