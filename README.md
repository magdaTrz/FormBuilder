
# Profil Software Recruitment Task

Hi! This is the task in the recruitment process for the position of Intern JS Developer at Profil Software. Read the instructions carefully.  Good luck!


## Background

The goal of this project is to build a simple form builder that will generate a form for users to fill out.


## Specification

[Form Builder](./formbuilder.pdf)

The wireframe from the link above shows 3 types of form inputs. Each of these can also have sub-inputs which will only show when the parent input is answered a certain way. 

The types of conditions are as follows
* Text
    * Equals - Text entered is equal to this value
* Number
    * Equals - Number entered is equal to this value
    * Greater than - Number entered is greater than this value
    * Less than - Number entered is less than this value
* Yes / No (radio)
    * Equals - Radio selected is equal to this value (either yes or no)

The user should be able to keep creating sub-inputs with conditions to as many levels deep as they would like. Each sub-input’s condition will correspond to the value of the parent input. By default, the create tab should start out blank with just the Add Input button there for the user to create their first input.

## Note

The project should store a persistent state for the form objects in the browser storage as the entire app should live on the front-end without a backend.


## Nice to have
*  Unit tests
*  TypeScript

## Rules

1) The application should be written in VanillaJS. Do not use any frameworks, we want to test your JS knowledge.
2) Do not use libraries (e.g. Bootstrap) for styling. You can use CSS / SCSS / SASS.
3) We do not expect the app to look outstanding, but we want to see your styling skills.
4) The application should be responsive to all resolutions.
5) Tests are much appreciated, but not necessary.
6) You can use TypeScript, but it is not required
7) It is allowed to use NodeJS and NPM for setting up local hosting and / or compiling SASS / SCSS files.
8) Please put your solution in a private repository on Github and invite reviewer@profil-software.com as a collaborator (any role with at least read-only access to code) -> https://docs.github.com/en/github/setting-up-and-managing-your-github-user-account/inviting-collaborators-to-a-personal-repository
