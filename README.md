# Task Monitor System

# Description

Modern day-to-day life of people in major cities is very demanding and schedules are very hectic. Many a times people tend to miss important tasks like; attending a meeting, returning library books, taking medicines, paying bills etc. In such times, its impossible to keep track of all activities/appointments. The human mind isn't designed to multitask, hence needs to do tasks one at a time. To address this issue, we have come up with a _Task Monitor System_ that gives the user a weekly alert of the task planned for the week.The app monitors your activities to help ensure that tasks set are performed, hence creating a more productive version of yourself as you progress through the day.

## System Requirements

For this app to run in your system your system should meet the following requirements:

- Operating system (Windows, Linux (Ubuntu), MacOS)
- Processor (Core i5 +)
- Storage space (8GB RAM +)
- Text editor that can support Visual Studio Code

## Pre-requisite Data

You can use the provided JSON file (`http://localhost:3000/`) for your server's database. Ensure your local JSON server is set up and running before proceeding.

## Project Setup

To set up the project:

1.  Create a new project folder on your local machine.

        `mkdir [folder]`

2.  Initialize a new Git repository for version control.

        `git init`

3.  Create a new GitHub repository (private / public) and add your teaching mentor (TM) as a contributor for grading purposes.
4.  Commit your code regularly to the repository to track your progress.

## Project Guidelines

In order to create this app you need to :

1. Your app must be a HTML/CSS/JS frontend that accesses data from a public API or from a db.json file using json-server. Your API or db.json should return a collection of at least 5 objects with each object having at least 3 attributes. All interactions between the client and the API should be handled asynchronously and use JSON as the communication format. Try to avoid using an API that requires a key. APIs that are free and require no authorization will be easiest to use.
2. Your entire app must run on a single page. There should be NO redirects or reloads.
3. Use at least 3 distinct event listeners that enable interactivity.
4. Your project must implement at least one instance of array iteration using available array methods (map, forEach, filter, etc).
5. Follow good coding practices. Keep your code DRY (Do not repeat yourself) by utilizing functions to abstract repetitive code.

## Core Delivarables

As a user, I can:

- See a menu of tasks initally added and those completed when the page loads.
- Add a task of choice. After clicking the `Add` button, the user will see the task added as a list.
- Delete a task added. When you click the `Delete` button, you will notice that the task you had initially added has been removed from the page.

## Bonus Features

- Allows user to edit existing list items.
- Implement persistence using local storage to save the list even after page reloads.

## Application Outcomes:

- User will easily track his/her weekly programs
- The user will be able to create a more productive version of themselves as they work through there daily tasks.
- The user saves time and delegates duties properly.

## _Installation_

To acquire/clone this repo on your machine, you should:

- Open the command line interface on your computer.
- Clone the repo through:

  `git@github.com:ohnoitsmoraa/Task-Monitor-System.git`

- Open the folder where the repository has been cloned through:

  `cd [folder]`

- Open the folder in Visual Studio Code / text editor of preference through:

  `code .`

  ## Running the application

To run the application,

- Install json-server:

There are no external dependencies for this project apart from a local JSON server. Ensure you have json-server installed globally or locally.

    `npm install -g json-server`

- Start JSON server

Run the JSON server using the provided db.json file.

    `json-server --watch db.json`

## Live Link

To view this project through a link, click open the following link:

    `https://ohnoitsmoraa.github.io/Task-Monitor-System/`

### _Authors_

This website was contributed to by:

- Maureen Nyanamba[https://github.com/ohnoitsmoraa]

And influenced by:

- Titus Ouko[https://github.com/costamay]

- Bob Oyier[https://github.com/oyieroyier/]
