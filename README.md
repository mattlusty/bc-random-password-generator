# random-password-generator-bc

## Website

https://mattlusty.github.io/random-password-generator-bc

![Website Screenshot](images/screenshot.png)

## Description

Bootcamp (bc) - Module 5 Challenge.

Random Password Generator web app:

User can choose their options of length, and character types to generate their random password

## Features

1. Bootstrap styled form inputs to receive user password options
2. 3D effect button press effect using CSS
3. The generate password JS logic ensures every selected character type is used equally
4. Returns error messages if no user input provided

## Notes

I decided to use a carefully crafted user input form, leveraging bootstrap, instead of the simpler prompt method, for better user experience and also to provide myself more of a challenge. (Hope thats okay :)

## Appeal to down-marking due to not using explicit window.prompt

I would like to appeal the reasons given for not achieving full marks due to not using a window.prompt.

Reasons for deciding not to use window.prompt.

1. The criteria required "prompts" for users password criteria..

a) The acceptance criteria did not explicitly state prompts needed to be the built-in window.prompts.

b) I believe my design implementation is more than adequate and user friendly to act to prompt the user for the required user input. (I tried to convey this in the README notes).

c) In my implementation, if the users input for password criteria fails validation, or the user has not selected minimum input, then the password validation message is is displayed and "prompts" the user for required input.

d) Using explicit window.prompts would not be user friendly, as it would not allow the user to view the options and select what they want at their own pace.

e) If the course needs evidence that I can use window.prompt (please see below)

f) As you can see from the code example below, eveb if we were to use these jarring alert boxes (window.prompts, confirms, alerts) using window.prompts would be better than window confirms for accepting user's choice of password length, but window.confirm would be better than window.prompt for accepting whether user wants to use each certain character type. So would I even be allowed to use window.confirm or would I be expected to use only window.prompts?

g) I could have impleneted window.prompts in seconds if I did not want to improve the assignement, and challenge my limits. Instead I spent over 21 hours figuring out how best create user friendly, bootstrap styled form input-groups to serve to "prompt" the user.

g) Reiterating, using window.prompts or window.confirms I believe would not be user friendly. If the user selects to reject to all character types, they would then have to be asked again, until they pick at least one. When being asked for each one, they cannot make a well informed decision (because they may not no what every option is, until they are asked), and would be better if they were given all options on screen to study and select in their own time (hence my implementation)

Code Example explicitly using window.prompt and window.confirm ...

let length = prompt("Please choose (type) a password lenght (between 8-128 characters");

let uppercase = confirm("Do you want your password to contain uppercase characters?");

let lowercase = confirm("Do you want your password to contain lowercase characters?");

let numbers = confirm("Do you want your password to contain numbers?");

let special = confirm("Do you want your password to contain special characters?");
