CBP3 Team 4 Project

# Problem Statement 
A responsive web app for scheduling employee cabs at Thoughtworks Gurgaon office that allows employees to book cabs for their daily commute. This project will allow you to practice building user interfaces, working with databases, and implementing authentication. If successful, the Gurgaon admin team will be able to use this in their day to day life as this is a problem statement they have been trying to solve for a while.

# Learning Opportunities 

1. UX Design
2. UI Development
3. DataBases
4. API Development
5. API Integration
6. Authentication
7. Error Handling
8. Testing

# Team Structure 

Team Members	Role
Hariom Sinha	Mentor
Deepak Jassi	Mentor
Akshit Batra	Mentee
Dhruva	Mentee
Gunjan Agarwal	Mentee
Nallu M	Mentee
Soumya Samanvaya	Mentee
Yeshna	BA
Priyanka	BA


[ We will keep updating the sections from here ][May 9, 2023]

Application Tech Architecture 
------------------------------------

react js
react query
styled components - ??
node js
react hook forms
react testing library using Jest


Stories we are covering 
------------------------------------

1. SIGNUP AND SIGNIN SCREEN - 

    Registration of passengers in the Application. Collect corresponding data from the user and save it in DB. We will use using these page as SignUps and will validate while
		signing in. For this use case, for now, we wont be using any JWT. We will simply do a user valdiation and sign in the user.

2. SEARCH A CAB SCREEN - 

		Show 2 Tabs - 
		
		Office Pickup - 
    -----------------

		PickUp Location - Always office location
		DropLocation - Defined DropPoints
    Date and Time
		Use dropdown data to show some dummy drop off points
    Show dummy available cabs. We will integrate this with Maps in next iteration.
    Confirm Booking - Use this Button to show a confirmation Message to the User.


    Office Drop - 
    -----------------

		PickUp Location - Defined PickUpPoints
		DropLocation - Always office location
    Date and Time
		Use dropdown data to show some dummy drop off points
    Show dummy available cabs. We will integrate this with Maps in next iteration.
    Confirm Booking - Use this Button to show a confirmation Message to the User.

3. SHOW CONFIRMATION SCREEN - 

    Once booking is confirmed, pass data from Search Screen to the Confirm screen. 
    Show respective data.
    Give Options for Cancel, Reschedule.

# Project Structure

## Frontend

1. pages - Here we will keep all the pages we are building. These pages will make use of the components.
2. components - Here, all reusable components will be written. These will be used by the pages for respective functionality.
3. styles - This will have styles written for pages and components in their respective folders.
4. tests - Here, we will write tests for the individual pages.

## Backend

1. config - Here we will keep config.json which is used by sequelize to connect to db on dev, test and production. Note: Do not push real credentials to repo (passwords/sensitive keys)
2. migrations - Here, all migrations will be stored which are responsible for CRUD operations on Database.
3. models - Here we will have all the class files which are used in order to perform operations on Database tables
4. seeders - Here, we will add seeders in case we need to create dummy data or prepopulate database.


## Running Ports

1. UI - 3000
2. Backend - 3001


Stack:
1. Node
2. Express
3. Sequelize (ORM)
4. Database - Sqlite(for now)
5. Migrations - Sequelize CLI