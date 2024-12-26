project name : Volunteer

## Frontend (React)
 ## npm i axios, date-fns, swiper, fire-base, date-picker toast, motion react icon
1. Navbar:

Conditional Login/Logout with user photoURL & hover display name.
"My Profile" dropdown for routes (Add Post, Manage Posts).
Dark/Light theme toggle.
2. Authentication:

. Login/Register with email/password & optional Google/GitHub login.
. JWT token for authentication (private routes).
3. Home Page:

. Slider (3 slides minimum).
“Volunteer Needs Now” Section (6 cards, sorted by deadline, "See All" button).
Two extra meaningful sections.
4. Pages:

. Add Volunteer Need Post (private route, form with toast feedback).
. Volunteer Post Details (private route, "Be a Volunteer" button to open a modal).
. Manage My Posts:
.My Posts (table with Update/Delete).
.My Volunteer Requests (Cancel button).
. All Volunteer Needs:
Search by title.
Change layout (cards <-> table).
5. Additional:

Spinner for loading.
Dynamic page titles.
404 error page.
## Backend (Node.js + mongo)
Authentication:

Email/password login with JWT tokens.
Database (MongoDB):

CRUD for posts and requests.
$inc operator to reduce volunteer slots.
Search/filter by title.
API:

Secure private routes with JWT.
Handle CRUD with meaningful feedback.
Features
Confirmation modals for critical actions.
Toast notifications for all actions.
Responsive design with mobile-friendly layouts.
Deployment (e.g., Vercel for frontend, Render for backend).


