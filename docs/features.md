# Portfolio Backend Development Roadmap

## Overview

Backend development should follow dependency order:

**Foundation → Core Content → Timeline → Interaction → Admin**

Stack:

- Next.js Frontend
- NestJS Backend
- Prisma ORM
- PostgreSQL

---

# Phase 1: Foundation

## 1. Auth (`User`)

Implement first because the admin panel requires authentication.

Structure:

```text
auth/
├── auth.module.ts
├── auth.controller.ts
├── auth.service.ts
├── jwt.strategy.ts
├── guards/
└── dto/
```

API:

```text
POST /auth/login
GET  /auth/me
POST /auth/logout
```

Database:

```text
User
```

---

## 2. Media (`Media`)

Implement second because many entities depend on media.

Dependencies:

```text
Profile
 └ avatar

Project
 ├ thumbnail
 └ images

Experience
 └ logo

Education
 └ logo

Certification
 └ image
```

API:

```text
POST   /media/upload
GET    /media
DELETE /media/:id
```

Upload flow:

```text
FE
 |
upload file
 |
BE
 |
Cloud storage
 |
save Media
 |
return mediaId
```

---

# Phase 2: Core Content

## 3. Profile

Models:

```text
Profile
SocialLink
SiteSetting
```

API:

```text
GET /profile
PUT /profile
```

Used for:

```text
Home page
Hero section
About section
Social links
SEO metadata
```

---

## 4. Project System

Most important portfolio feature.

Models:

```text
Skill
ProjectCategory
Project
ProjectImage
```

Recommended order:

```text
Skill
 ↓
ProjectCategory
 ↓
Project
 ↓
ProjectImage
```

API:

```text
GET    /projects
GET    /projects/:slug

POST   /projects
PUT    /projects/:id
DELETE /projects/:id
```

Public pages:

```text
/projects
/projects/[slug]
```

Admin:

```text
/admin/projects
```

---

# Phase 3: Timeline

## 5. Experience

Model:

```text
Experience
```

API:

```text
GET
POST
PUT
DELETE
```

---

## 6. Education

Model:

```text
Education
```

---

## 7. Certification

Model:

```text
Certification
```

---

# Phase 4: Interaction

## 8. Contact Message

Public:

```text
POST /contact
```

Admin:

```text
GET /contact/messages
PATCH /contact/:id/status
```

---

# Phase 5: Admin Dashboard

After APIs are completed:

```text
/admin

/dashboard

/projects
/skills
/experience
/education
/certifications
/media
/messages
/settings
```

---

# Recommended NestJS Module Order

```text
src/modules/

1. auth
2. media
3. profile
4. social-link
5. site-setting

6. skill
7. project-category
8. project

9. experience
10. education
11. certification

12. contact
```

---

# Migration Plan

Split migrations:

```text
001_init_auth_media
002_profile_settings
003_project_system
004_resume_sections
005_contact
```

---

# Seed Data

After implementing core modules:

Create:

```text
prisma/seed.ts
```

Seed:

- Skills
- Project categories
- Projects
- Experience
- Education

Example:

```text
Skills:
- React
- NestJS
- PostgreSQL
- Docker

Projects:
- FHIR Converter
- Portfolio CMS

Experience:
- TMA Solutions Internship

Education:
- HCMUT
```

---

# Priority Summary

Recommended order:

```text
1. Auth
2. Media
3. Profile
4. Skill
5. Project
6. Experience
7. Education
8. Certification
9. Contact
10. Admin Dashboard
```

Completing the first five items provides most of the portfolio value.