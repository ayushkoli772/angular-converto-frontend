# Converto - Code Format Converter

## Overview

Converto is a web-based application that allows users to convert code between various formats easily. This Angular project offers a seamless user interface for interacting with the backend API, providing users the ability to paste or input code, choose their desired format, and get the output quickly.

## Demo

[Live Link](converto-v2.netlify.app/)

## Features
- **Code Input and Conversion**: Users can input their code in one format and convert it into another format with ease.
- **Responsive Layout**: The app is designed to work smoothly across devices with a modern, responsive UI.
- **Integration with Backend**: The frontend is integrated with a Spring Boot backend that handles code format conversions via REST APIs.

## Installation

1. Clone the repository locally:

```bash
git clone https://github.com/ayushkoli772/angular-converto-frontend.git
```
2. Navigate to the project directory:
```
cd converto-frontend
```
3. Install dependencies:
```
npm install
```
4. Build the project:
```
ng build
```
5. Run the development server:
```
ng serve -o
```
6. Open [http://localhost:4200](http://localhost:4200) in your browser to view the application.

## Technologies Used
- **Frontend:** Angular, TypeScript, Codemirror (for code editing)
- **Backend:** Spring Boot (REST API for handling code conversion)
- **Styling:** CSS3 for custom styles
- **Hosting:** Netlify (Frontend), Render (Backend)

## Future Improvements
- **Additional Code Formats:** Expand the supported formats for code conversion.
- **User Authentication:** Implement user accounts to save conversion histories.
- **Real-time Collaboration:** Allow users to collaborate on code conversions in real-time.
