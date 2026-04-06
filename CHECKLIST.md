# Checklist - Backend

## Project Overview
**Project:** MyCyberLab (MYCL) - A cybersecurity learning platform
**Tech Stack:** Next.js 16.2.2, React 19.2.4, TypeScript, Tailwind CSS
**Frontend Status:** Mostly UI mockups with client-side state management (no backend integration yet)

---

## Core Features & Entities Requiring Backend APIs

### 1. **Authentication & User Management**
- [ ] **User Registration** - Store username, email, password (hash), role
- [ ] **User Login** - Authentication, JWT/session token generation
- [ ] **Password Reset** - Email-based password recovery flow
- [ ] **User Roles** - Regular user, admin, moderator
- [ ] **User Profiles** - Store user stats, achievements, profile data
- [ ] **Admin User Management** - Create/manage/delete users and roles

**Database Tables Needed:**
- `users` (id, username, email, password_hash, role, created_at, updated_at)
- `user_profile` (user_id, bio, avatar, stats, rank, points)

---

### 2. **Learning Modules & Courses**
**Modules mentioned:**
- Intro to Network Security (Beginner)
- Web App Penetration Testing (Intermediate)
- Reverse Engineering Basics (Advanced)
- Active Directory Exploitation (Advanced)
- Linux Privilege Escalation (Intermediate)
- Cryptography 101 (Beginner)

- [ ] **Module CRUD** - Create, read, update, delete learning modules
- [ ] **Module Progress Tracking** - Store user progress percentage per module
- [ ] **Module Content Delivery** - Lesson videos, documents, resources
- [ ] **Difficulty Levels** - Filter by Beginner, Intermediate, Advanced

**Database Tables Needed:**
- `modules` (id, title, description, difficulty_level, icon, created_by, created_at)
- `module_content` (id, module_id, order, content_type, data, resources)
- `user_module_progress` (user_id, module_id, progress_percentage, completed_at)

---

### 3. **Chatbot/AI Assistant**
- [ ] **Chat API** - Send/receive messages with AI
- [ ] **Message History** - Store conversation history per user
- [ ] **Rate Limiting** - Free users limited to 5 messages (registered users unlimited)
- [ ] **Response Generation** - AI backend to generate replies

**Database Tables Needed:**
- `chat_messages` (id, user_id, role, content, created_at)

---

### 4. **Real-time Chat/Messaging**
**Contacts mentioned:** CipherMaster, RedTeamOps, NullByte

- [ ] **Direct Messaging** - Send/receive private messages between users
- [ ] **Message Storage** - Persist all messages
- [ ] **Online Status** - Track user online/offline status in real-time
- [ ] **Contact List** - Fetch user's contacts/friends
- [ ] **Contact Management** - Add, remove, block users

**Database Tables Needed:**
- `contacts` (id, user_id, contact_user_id, status)
- `messages` (id, sender_id, receiver_id, content, read_at, created_at)

---

### 5. **Team/Group Management**
- [ ] **Create Team** - Allow users to create teams
- [ ] **Join Team** - Join via invite code
- [ ] **Team Invite Codes** - Generate and validate invite codes
- [ ] **Team Members** - Manage team roster
- [ ] **Team Leave/Delete** - Leave or disband team
- [ ] **Team Statistics** - Aggregate stats, rankings

**Database Tables Needed:**
- `teams` (id, name, description, leader_id, avatar, created_at)
- `team_members` (id, team_id, user_id, role, joined_at)
- `team_invite_codes` (id, team_id, code, expires_at, used_at)

---

### 6. **Leaderboards & Rankings**
- [ ] **Global Rankings** - Sort users by points/achievements
- [ ] **Team Rankings** - Sort teams by performance
- [ ] **CTF Tournament Rankings** - Store tournament scores
- [ ] **Real-time Updates** - Push updates for live rankings
- [ ] **User Badges/Achievements** - Award and track achievements

**Database Tables Needed:**
- `leaderboard` (user_id, rank, points, achievements_count, updated_at)
- `achievements` (id, name, description, icon_url, criteria)
- `user_achievements` (id, user_id, achievement_id, earned_at)

---

### 7. **Admin Dashboard**
- [ ] **Concurrent Users Analytics** - Real-time user count
- [ ] **User Management** - View/manage all users
- [ ] **Content Management** - Upload/manage modules and resources
- [ ] **System Monitoring** - Analytics and statistics
- [ ] **User Activity Logs** - Track user actions

**Database Tables Needed:**
- `admin_logs` (id, admin_id, action, target, details, created_at)
- `analytics` (date, concurrent_users, total_logins, active_modules)

---

## Technical Requirements

### API Architecture
- [ ] **RESTful API** or **GraphQL** endpoints
- [ ] **Authentication Middleware** - JWT/session validation on protected routes
- [ ] **Error Handling** - Standardized error responses
- [ ] **Rate Limiting** - Prevent abuse, especially on chat endpoints
- [ ] **Input Validation** - Validate all user inputs
- [ ] **CORS Configuration** - Allow frontend domain

### Database
- [ ] **Database Choice** - PostgreSQL (recommended), MySQL, or MongoDB
- [ ] **Connection Pool** - Manage concurrent connections
- [ ] **Migrations** - Version control for schema changes
- [ ] **Indexes** - Optimize frequently queried fields (user_id, team_id, etc.)
- [ ] **Backups** - Regular automated backups

### Real-time Features
- [ ] **WebSocket Server** - For live chat, online status, leaderboard updates
- [ ] **Message Broadcasting** - Notify multiple clients of changes

### File Storage
- [ ] **Module Resources** - Store PDFs, videos, documents
- [ ] **User Avatars** - Store user profile pictures
- [ ] **Module Icons** - Store module thumbnails
- [ ] **Cloud Storage** - S3, Google Cloud Storage, or similar

### Security
- [ ] **Password Hashing** - bcrypt or Argon2
- [ ] **SQL Injection Prevention** - Parameterized queries/ORM
- [ ] **CSRF Protection** - Token-based protection
- [ ] **XSS Prevention** - Input sanitization
- [ ] **Rate Limiting** - Prevent brute force attacks
- [ ] **Invite Code Validation** - Prevent code reuse/guessing

---

## Suggested Backend Stack

### Option 1: **Node.js + Express** (Best for Next.js integration)
- Node.js + Express.js
- PostgreSQL + Prisma ORM
- Socket.io for WebSS
- JWT for authentication
- Firebase or AWS S3 for file storage

### Option 2: **Python + FastAPI** (Modern, fast, good for AI)
- FastAPI
- PostgreSQL + SQLAlchemy
- WebSockets for real-time
- JWT authentication
- S3 for file storage

### Option 3: **Go + Gin** (High performance)
- Go + Gin framework
- PostgreSQL
- WebSockets
- JWT authentication

---

## API Endpoints Summary (To Be Implemented)

### Auth
- POST `/api/auth/register`
- POST `/api/auth/login`
- POST `/api/auth/logout`
- POST `/api/auth/refresh-token`
- POST `/api/auth/forgot-password`
- POST `/api/auth/reset-password`

### Users
- GET `/api/users/:id`
- PUT `/api/users/:id`
- GET `/api/users/:id/profile`
- GET `/api/leaderboard`

### Modules
- GET `/api/modules`
- GET `/api/modules/:id`
- GET `/api/modules/:id/content`
- POST `/api/modules/:id/progress`
- GET `/api/users/:id/modules/progress`

### Chat (AI)
- POST `/api/chat/send`
- GET `/api/chat/history`

### Messaging
- POST `/api/messages/send`
- GET `/api/messages/:user_id`
- GET `/api/contacts`
- PUT `/api/contacts/:contact_id`

### Teams
- POST `/api/teams`
- GET `/api/teams/:id`
- POST `/api/teams/:id/invite`
- POST `/api/teams/:id/join`
- POST `/api/teams/:id/leave`
- PUT `/api/teams/:id/members/:user_id`

### Admin
- GET `/api/admin/users`
- GET `/api/admin/analytics`
- POST `/api/admin/modules`
- PUT `/api/admin/users/:id/role`

---

## Frontend Integration Notes

### Current State
- All forms are **UI-only** (no backend integration yet)
- Chat widget simulates responses (doesn't call API)
- Module progress is hardcoded (0% or 40%)
- Online status is mocked
- No persistence - all state resets on page reload

### Next Steps for Frontend Integration
1. Replace form submissions with API calls
2. Add loading/error states
3. Implement JWT token storage (localStorage/cookies)
4. Connect chat widget to real API
5. Subscribe to WebSocket events for real-time updates
6. Add proper error handling and user feedback

---

## Important Notes for Backend Dev

1. **Invite Codes:** Generate 6-8 character alphanumeric codes, store expiration time (e.g., 7 days)
2. **Chat Limit:** Enforce 5-message limit for unregistered/free users at backend level
3. **User Rankings:** Update rankings periodically (cron job) or on real-time events
4. **Module Progress:** Store as percentage 0-100
5. **Admin Permissions:** Ensure role-based access control on all sensitive endpoints
6. **Real-time:** Use WebSockets for online status, new messages, leaderboard updates
7. **Email Verification:** Consider email verification for signup
8. **2FA:** Optional but recommended for security-focused platform

---

## Node.js + Express Development Roadmap
**Order: Simplest → Hardest | Shortest Duration → Longest Duration**

### Phase 1: Foundation (Week 1-2) - **Shortest Duration**

#### 1.1 Project Setup (2-3 days)
- [X] Initialize Node.js project: `npm init`
- [X] Install core dependencies:
  - `express` - Web framework
  - `dotenv` - Environment variables
  - `cors` - Cross-origin requests
  - `helmet` - Security headers
  - `morgan` - Request logging
- [X] Setup folder structure:
  ```
  src/
  ├── server.js          (entry point)
  ├── config/            (database, env configs)
  ├── routes/            (API routes)
  ├── controllers/       (business logic)
  ├── models/            (database models - Prisma)
  ├── middleware/        (auth, error handling, validation)
  ├── utils/             (helpers, constants)
  └── services/          (business logic services)
  ```
- [X] Setup `.env` file with DB_URL, JWT_SECRET, PORT
- [ ] Create basic Express server with health check endpoint

#### 1.2 Database Setup with Prisma (2-3 days)
- [X] Install Prisma: `npm install @prisma/client prisma`
- [ ] Setup PostgreSQL locally or cloud (Neon, Railway, Render)
- [ ] Initialize Prisma: `npx prisma init`
- [ ] Define initial schema (`prisma/schema.prisma`):
  - `User` model (id, username, email, password_hash, role, createdAt)
  - Basic migrations setup
- [ ] Run first migration: `npx prisma migrate dev`
- [ ] Setup seed script for testing data

#### 1.3 Basic Middleware & Error Handling (1-2 days)
- [ ] Global error handling middleware
- [ ] Request validation middleware (express-validator)
- [ ] CORS configuration
- [ ] 404 handler
- [ ] Logging setup (morgan)

---

### Phase 2: Authentication (Week 2-3)

#### 2.1 User Authentication System (3-4 days)
- [ ] Install auth dependencies:
  - `bcryptjs` - Password hashing
  - `jsonwebtoken` - JWT tokens
  - `express-jwt` or custom JWT middleware
- [ ] Update User model with password_hash field
- [ ] Create auth controller:
  - `POST /api/auth/register` - Hash password, create user
  - `POST /api/auth/login` - Validate credentials, return JWT
  - `POST /api/auth/refresh-token` - Refresh JWT
- [ ] Create JWT middleware for protected routes
- [ ] Setup JWT token strategy (httpOnly cookies or Authorization header)
- [ ] Test with Postman/Insomnia

#### 2.2 User Profile Management (2-3 days)
- [ ] Add UserProfile model to Prisma schema
- [ ] Create user controller:
  - `GET /api/users/:id` - Get user profile
  - `PUT /api/users/:id` - Update profile
  - `GET /api/users/:id/profile` - Full profile with stats
- [ ] Protect endpoints with JWT middleware
- [ ] Test authenticated routes

---

### Phase 3: Core Features - Simple Endpoints (Week 3-4)

#### 3.1 Learning Modules - CRUD (3-4 days)
- [ ] Add Module schema to Prisma:
  - id, title, description, difficulty_level, icon, created_by
- [ ] Create module controller:
  - `GET /api/modules` - List all modules (no auth required)
  - `GET /api/modules/:id` - Get single module
  - `POST /api/modules` - Create (admin only)
  - `PUT /api/modules/:id` - Update (admin only)
  - `DELETE /api/modules/:id` - Delete (admin only)
- [ ] Add role-based access control middleware
- [ ] Seed database with 6 modules

#### 3.2 Module Progress Tracking (2-3 days)
- [ ] Add UserModuleProgress model to Prisma
- [ ] Create progress controller:
  - `POST /api/modules/:id/progress` - Update progress (0-100%)
  - `GET /api/users/:id/modules/progress` - Get all user progress
- [ ] Validate progress value (0-100)
- [ ] Track completion timestamp

#### 3.3 Simple Chat Messages Storage (2-3 days)
- [ ] Add ChatMessage model to Prisma
- [ ] Create chat controller:
  - `POST /api/chat/send` - Store message, enforce 5-message limit for free users
  - `GET /api/chat/history` - Retrieve user's chat history
- [ ] Add user role check for rate limiting
- [ ] Add created_at timestamp to messages

---

### Phase 4: Intermediate Features (Week 4-5)

#### 4.1 Direct Messaging (3-4 days)
- [ ] Add Message model (sender_id, receiver_id, content, read_at, created_at)
- [ ] Create messaging controller:
  - `POST /api/messages/send` - Send message between users
  - `GET /api/messages/:user_id` - Get conversation with user
  - `PUT /api/messages/:id/read` - Mark as read
- [ ] Verify both users exist
- [ ] Add pagination to message history

#### 4.2 Contact List Management (2-3 days)
- [ ] Add Contact model (user_id, contact_user_id, blocked)
- [ ] Create contacts controller:
  - `GET /api/contacts` - List user's contacts
  - `POST /api/contacts` - Add new contact
  - `DELETE /api/contacts/:contact_id` - Remove contact
  - `POST /api/contacts/:contact_id/block` - Block user
- [ ] Prevent adding yourself as contact
- [ ] Handle blocked users

#### 4.3 Team Management - CRUD (3-4 days)
- [ ] Add Team model (id, name, description, leader_id, avatar, created_at)
- [ ] Add TeamMember model (team_id, user_id, role, joined_at)
- [ ] Create team controller:
  - `POST /api/teams` - Create team
  - `GET /api/teams/:id` - Get team details
  - `PUT /api/teams/:id` - Update team (leader only)
  - `DELETE /api/teams/:id` - Delete team (leader only)
  - `GET /api/teams/:id/members` - List team members
- [ ] Validate team name uniqueness
- [ ] Set creator as leader

#### 4.4 Team Invite System (2-3 days)
- [ ] Add TeamInviteCode model (team_id, code, created_by, expires_at, used_count)
- [ ] Create invite controller:
  - `POST /api/teams/:id/invite` - Generate invite code (leader only)
  - `POST /api/teams/:id/join` - Join team with code
  - `DELETE /api/teams/:id/invite/:code` - Revoke invite (leader only)
- [ ] Generate random 8-char alphanumeric codes
- [ ] Set expiration (7 days default)
- [ ] Validate code before joining

---

### Phase 5: Advanced Features - Complexity Increases (Week 5-7)

#### 5.1 Leaderboards System (4-5 days)
- [ ] Add Achievement model (id, name, description, icon_url, criteria)
- [ ] Add UserAchievement model (user_id, achievement_id, earned_at)
- [ ] Create achievement logic:
  - Award achievements based on user actions
  - Track points per achievement
- [ ] Create leaderboard controller:
  - `GET /api/leaderboard` - Global rankings sorted by points
  - `GET /api/teams/:id/leaderboard` - Team rankings
  - `GET /api/users/:id/rank` - User's current rank
- [ ] Implement point system (module completion = X points, etc.)
- [ ] Cache leaderboard (update every 5-10 minutes)

#### 5.2 Admin Dashboard Endpoints (3-4 days)
- [ ] Add AdminLog model (admin_id, action, target, details, created_at)
- [ ] Create admin controller (all require admin role):
  - `GET /api/admin/users` - List all users with filters
  - `PUT /api/admin/users/:id/role` - Change user role
  - `DELETE /api/admin/users/:id` - Delete user
  - `GET /api/admin/modules` - List all modules
  - `POST /api/admin/modules` - Create module
  - `GET /api/admin/activity-logs` - View admin actions
- [ ] Log all admin actions to database
- [ ] Add pagination and filters

#### 5.3 Analytics Endpoint (2-3 days)
- [ ] Add Analytics model (date, concurrent_users, total_logins, active_modules)
- [ ] Create analytics controller:
  - `GET /api/admin/analytics` - Get analytics data
  - Track daily metrics (cron job to run at midnight)
- [ ] Store simple metrics:
  - Total registered users
  - Daily active users
  - Most popular modules
  - Average module completion rate

---

### Phase 6: Real-time Features (Week 7-9) - **LONGEST DURATION**

#### 6.1 WebSocket Setup (2-3 days)
- [ ] Install Socket.io: `npm install socket.io`
- [ ] Setup Socket.io server integrated with Express
- [ ] Create socket middleware for JWT authentication
- [ ] Setup socket event handlers structure
- [ ] Test connection with frontend

#### 6.2 Real-time Online Status (3-4 days)
- [ ] Add online_status field to User model
- [ ] Socket events:
  - `user:online` - User comes online
  - `user:offline` - User goes offline
  - `users:online-list` - Broadcast online users
- [ ] Store user socket sessions
- [ ] Handle disconnects/reconnects gracefully
- [ ] Update contact list with online status

#### 6.3 Real-time Messaging (3-4 days)
- [ ] Socket events for direct messages:
  - `message:send` - User sends message
  - `message:new` - Broadcast new message to recipient
  - `message:typing` - Show typing indicator
  - `message:delivered` - Confirm delivery
- [ ] Sync with database (store message, then broadcast)
- [ ] Handle offline users (store for later delivery)
- [ ] Add message read receipts

#### 6.4 Real-time Chat (Chatbot AI Integration) (3-4 days)
- [ ] Socket events for AI chat:
  - `chat:message` - User sends message
  - `chat:response` - AI responds (simulated or real AI API)
- [ ] Enforce rate limit at Socket level
- [ ] Store all messages in database
- [ ] Consider AI service integration (OpenAI, Hugging Face, etc.)

#### 6.5 Real-time Leaderboard Updates (2-3 days)
- [ ] Emit leaderboard changes when:
  - User completes module
  - Achievement earned
  - Team scores change
- [ ] Broadcast top 10 changes
- [ ] Update when user points change
- [ ] Handle large number of concurrent watchers

---

### Phase 7: File Storage & Polish (Week 9-10)

#### 7.1 File Upload Integration (2-3 days)
- [ ] Install file upload package: `multer`
- [ ] Setup S3 or local file storage
- [ ] Create endpoints:
  - `POST /api/upload/avatar` - Upload user avatar
  - `POST /api/upload/module-resource` - Upload module file
- [ ] Add file validation (type, size)
- [ ] Store file URLs in database

#### 7.2 Email Service (Optional but recommended) (2-3 days)
- [ ] Install `nodemailer` or use SendGrid
- [ ] Create email templates
- [ ] Implement:
  - Welcome email on signup
  - Password reset email
  - Achievement notifications
- [ ] Setup email verification flow

#### 7.3 Testing & Optimization (2-3 days)
- [ ] Write unit tests for critical functions
- [ ] Setup API documentation (Swagger/OpenAPI)
- [ ] Database query optimization
- [ ] Add database indexes on frequently queried fields
- [ ] Performance testing under load

---

## Implementation Checklist by Phase

### Phase 1 ✓ Foundation
- [ ] Express server setup
- [ ] PostgreSQL + Prisma connected
- [ ] Basic middleware in place
- [ ] Health check endpoint working

### Phase 2 ✓ Authentication
- [ ] Register endpoint working
- [ ] Login endpoint working with JWT
- [ ] Protected routes accessible with token
- [ ] User profiles retrievable

### Phase 3 ✓ Core Features
- [ ] Module CRUD working
- [ ] Module progress tracking working
- [ ] Chat message storage working
- [ ] Basic role-based access control

### Phase 4 ✓ Intermediate Features
- [ ] Direct messaging working
- [ ] Contact management working
- [ ] Team creation and management working
- [ ] Invite code system working

### Phase 5 ✓ Advanced Features
- [ ] Leaderboard system working
- [ ] Admin endpoints working
- [ ] Analytics tracking working

### Phase 6 ✓ Real-time Features
- [ ] WebSockets connected
- [ ] Online status working
- [ ] Real-time messaging working
- [ ] Real-time leaderboards working

### Phase 7 ✓ Polish
- [ ] File uploads working
- [ ] Email notifications working
- [ ] Tests written
- [ ] Documentation complete

---

## Estimated Timeline

| Phase | Duration | Priority | Difficulty |
|-------|----------|----------|-----------|
| 1. Foundation | 2 weeks | 🔴 Critical | ⭐ Easy |
| 2. Authentication | 1 week | 🔴 Critical | ⭐ Easy |
| 3. Core Features | 2 weeks | 🔴 Critical | ⭐⭐ Medium |
| 4. Intermediate | 2 weeks | 🟡 High | ⭐⭐ Medium |
| 5. Advanced | 2 weeks | 🟡 High | ⭐⭐⭐ Hard |
| 6. Real-time | 3 weeks | 🟡 High | ⭐⭐⭐ Hard |
| 7. Polish | 2 weeks | 🟢 Nice-to-have | ⭐⭐ Medium |

**Total Estimated Time: 14 weeks (3.5 months)**

---

## Quick Start Commands

```bash
# Initialize project
npm init -y

# Install core dependencies
npm install express dotenv cors helmet morgan

# Install database
npm install @prisma/client prisma
npx prisma init

# Install auth
npm install bcryptjs jsonwebtoken express-validator

# Install real-time (later)
npm install socket.io

# Install file upload (later)
npm install multer

# Run dev server
npm install -D nodemon
npm run dev
```

Add to `package.json` scripts:
```json
"scripts": {
  "dev": "nodemon src/server.js",
  "start": "node src/server.js",
  "prisma:migrate": "prisma migrate dev",
  "prisma:seed": "node prisma/seed.js"
}
```

