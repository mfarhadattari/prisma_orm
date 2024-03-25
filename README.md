# Prisma ORM

## Prisma CMD

- Set up a new Prisma project

```cmd
  prisma init
```

- Generate artifacts (e.g. Prisma Client)

```cmd
  prisma generate
```

- Browse your data

```cmd
prisma studio
```

- Create migrations from your Prisma schema, apply them to the database, generate artifacts (e.g. Prisma Client)

```cmd
prisma migrate dev
```

- Pull the schema from an existing database, updating the Prisma schema

```cmd
prisma db pull
```

- Push the Prisma schema state to the database

```cmd
prisma db push
```

- Validate your Prisma schema

```cmd
prisma validate
```

- Format your Prisma schema

```cmd
prisma format
```

- Display Prisma version info

```cmd
prisma version
```

- Display Prisma debug info

```cmd
prisma debug
```
