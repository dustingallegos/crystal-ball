## Overview
In this sample we demonstrated how a third party API can be called from inside an Office 365 Outlook add-in to display information about the email sender. 

### Note 
IE or Edge's security requirements prevent the add-in from being loaded. So this sample only works with Chrome. 

## Technologies
### Back-end
- Node.JS 
- BlackBaud's SKY API

### Front-end
- JavaScript
- HTML5 
- Angular

## Pre-requisities
1. Have Node.js installed 
2. Register as a developer in Blackbaud to obtain keys and create app see [Getting Started](https://apidocs.sky.blackbaud.com/docs/getting-started/) guide.  

## Instructions
### Running the add-in
1. Enter the information for the empty parameters in sky.env file
2. Navigate to the working directory of this app with Git's command window and enter 'npm install' to install all dependencies
3. Run the application with the following command in the command prompt: 'npm start'
4. The app will now be available on https://localhost:5000/

### Installing the add-in 
1. Open Chrome (this would only work with this browser now) and go to [Outlook.com](https://outlook.office365.com/), to sign into your outlook email
2. Once in Outlook.com, go to the Settings by clicking on the wheel on the top right corner, and on the bottom in the My App Settings section select Mail, then in the General section select Manage Add-ins. 
3. Select the + sign on the top of the pane, and use the Add From File Option, which will prompt you to load the manifest.xml file in this project. 
4. The add-in should now be installed and ready to use

### Using the add-in
1. Go to the add-ins local site and log in with your Blackbaud's developer account. 
2. Go to Outlook online in your browser and select any mail. You should see this add-in's name "Crystal Ball" show up as one of the add-in options on the top of the reading pane - select it.
3. The add-in will load, showing you more information on the person that emailed you, if the person is present in Blackbaud's database. 
