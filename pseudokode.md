Jeg har valgt at lave pseudokode for Teachers, men det er ens for dem alle. 

Repository:
// Starter med at impoterer forbindelsen til databasen (pgAdmin) fra db.js filen, så repository'et kan sende SQL forespørgelserne til databasen. 

// Get All Teachers //

// Laver / opretter getAllTeachers funktionen fra index. 
// Beder om at sende en GET sql forespørgsel til databasen om at sende Alle rækker fra Teachers tilbage til os. 
// Venter på svar fra databasen.
// console logger hele resultatet i terminallen, så vi kan fange potentielle fejl.
// returnerer rækkerne fra tabellen (som en liste) videre til controller. 

// Get Single Teacher //

// Laver / opretter getTeacherById funktionen fra index og sender ID med som parameter fra controlleren, som kommer fra URL'en. 
// Beder om at sende en GET sql forespørgsel til databasen om at sende den specifikke teacher med det specifikke id som matcher. 
// Venter på svar fra databsen. 
// Hvis IKKE databasen finder en række med det specifikke id, returneres NULL (ikke fundet).
// Hvis Id findes, returneres den specifikke række fra teacheren med det specifikke id. 

// Create New Teacher //

// Laver / opretter createTeacher functionen fra index. 
// Beder om at sende en POST sql forespørgsel til databasen om at oprette en ny teacher med de specifikke rækker tabellen i databasen består af. 
// Venter på svar fra databasen med await. 
// Bruger returning som får databasen til at sende os den nye teacher tilbage. 
// Returnerer den nye oprettede teacher til controlleren. 

// Delete Single Teacher //

// Laver / opretter deleteTeacher funktionen fra index og sender ID med som parameter fra controlleren, som kommer fra URL'en. 
// Beder om at sende en DELETE sql forespørgsel til databasen om at slette den specifikke teacher med det specifikke id som matcher. 
// Venter på svar fra databsen. 
// Hvis IKKE databasen finder en række med det specifikke id, returneres NULL (ikke fundet).
// Hvis Id findes, returneres id'et fra den slettede teacher videre til controlleren.

Controller:
// Importerer alle funktionerne fra teachersRepository for at controlleren kan kalde de gældne funktioner. 

// Get All Teachers //

// opretter / laver getAllTeachers funtionen med request og respons som parametre. 
// Laver en PRØV til hvis alt virker uden fejl. 
// Kalder allTeachers fra repository og venter på svar med listen af alle teachers. 
// console logger alle teachers i terminalen for at se om det rigtige data modtages. Listen af alle teachers gemmes i variablen "allTeachers". 
// Sender respons med listen af alle teachers til klienten i json format. (svarer til status kode 200 hvis alt virker). 
// Hvis der opstår en fejl i "try", kører catch som fortæller, at der er internal error (status kode 500) med en error besked "Database error".      

// Get Single Teacher //

// Opretter / laver getSingleTeacher funktinen med request og respons son parametre som henter én specifik teacher. 
// laver en PRØV til hvis alt virker uden fejl. 
// Henter id'et fra URL'en
// Vi sender id'et videre til repository som her spørger databasen om den specifikke teacher. 
// Hvis id'et findes sendes en statuskode (200) tilbage med OK alt virker. Vi får her teacheren i json format. 
// Hvis ikke id'et findes i databasen sendes en 404 statuskode (not found) som indikerer at id ik findes
// Hvis der opstår en fejl i "try", kører catch som fortæller, at der er internal error (status kode 500) med en error besked "Database error".  

// Create New Teacher //

// Opretter / laver createTeacher funktinen med request og respons son parametre. 
// laver en PRØV til hvis alt virker uden fejl. 
// Henter en bestemt teacher ud fra det specifikt Id fra URL'en i repository. 
// Henter id'et fra URL'en. 
// Vi sender id'et videre til repository som herefter spørger databasen efter den nye teacher (newTeacher). 
// Vi venter på svar fra databasen med await. 
// Hvis teacheren findes (altså er oprettet), sendes en statuskode med 201 (created), og vi får den nye teacher tilbage i json format. 
// Hvis der opstår en fejl i "try", kører catch som fortæller, at der er internal error (status kode 500) med en error besked "Database error".  
// console logger i terminalen så vi kan se fejlen. 

// Delete Single Teacher //

// Opretter / laver deleteTeacher funktinen med request og respons son parametre som sletter én specifik teacher. 
// laver en PRØV til hvis alt virker uden fejl. 
// Henter id'et fra URL'en
// Vi sender id'et videre til repository som her beder databasen om at slette den specifikke teacher. 
// Vi venter på svar fra databasen med await. 
// Hvis id'et findes og teacheren er slettet, sendes en statuskode (204) tilbage med no content. 
// Hvis ikke id'et findes i databasen sendes en 404 statuskode (not found) som indikerer at id ik findes
// Hvis der opstår en fejl i "try", kører catch som fortæller, at der er internal error (status kode 500) med en error besked "Database error".

Route:
// Importerer express som bruges til at lave router. 
// Importerer alle funktioner fra controlleren samlet, så de kan tilgås i router og sendes til index. 

// Her oprettes en ny router som samler alle routes for teachers. 

//// TEACHERS //// 

// Get All Teachers // 

// Når klienten sender GET med '/teachers' kører getAllTeachers fra controlleren, og de modtager dermed alle teachers. 

// Get Sinlge Teacher //

// Når klienten sender GET "/teachers/:id" kører getSingleTeacher fra controlleren og modtager dermed den enkelte teacher. 

// Create New Teacher //

// Når klienten sender en POST med '/teachers', kører createTeacher fra controlleren og modtager dermed den nye oprettede teacher. 

// Update Existing Teacher //

// Når klienten sender en PUT med "/teachers/:id", kører updateTeacher fra controlleren og modtager dermed den opdaterede teacher.  

// Delete Single Teacher //

// Når klienten sender en delete med "/teachers/:id", kører deleteTeacher fra controlleren og modtager dermed en besked på, at den gældende teacher er slettet. 

// Eksporterer routeren som default så index kan importere og tilgå den.