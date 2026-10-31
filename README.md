# Hogwarts API

## Endpoints – Teachers og er også gældende for houses, students og courses 

- **GET** /teachers – Get all teachers
- **GET** /teachers/:id – Get single teacher
- **POST** /teachers – Create new teacher
- **PUT** /teachers/:id - Update existing teacher (som ikke virker i min kode)
- **DELETE** /teachers/:id – Delete teacher

## Sådan bruges endpoint-testene

- Start serveren med `npm start` (kører på http://localhost:3000).
- Ved routes skal `:id` udskiftes med et id, der findes i databasen.
- Ved POST sendes en body i JSON med `name` og `house`.