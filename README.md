#  Daily Challenge Day 3 bootstrap-boilerplate

Testing out Bootstrap 4.5.3 Boilerplate Template CDN and only uses 1 bootstap link in the head tag & 1 script tag at the end of the body.
 
## &#128198; Daily Challenge

- Create a new repository named "bootstrap-boilerplate"
- Clone your repository
- Create a new branch called "starter-files"
- Create your project directory
    - Copy starter template to index.html
    -  Add CSS folder with stylesheet
    - Link your custom stylesheet in your index.html
        - Add (empty) JS folder-. Add (empty) IMG folder
- Push your changes to your starter-files branch

## &#127381; Create a New Repository

- Go to [GitHub](http:github.com)
- Under Repositories, select new
- Enter the required information


In GitBash enter the following codes into your terminal.
- `git clone git@github.com:shintakuson/bootstrap-boilerplategit`
- `git add .`
- `git commit -m “init commit”`
- `git push -u origin main`
## &#8826; Create New Branch

In GitBash enter the following codes into your terminal.

- `git branch starter-files` 
>create branch called "starter-files"
- `git checkout starter-files`
>switch to the starter-files branch
## &#128189; Create Project Directory

In GitBash enter the following codes into your terminal.

In this step we are going to do a shortcut. We will create the Folders together then the Files together. We will also add the starter template to index.html.

- `mkdir CSS JS IMG`
>mkdir (make directory) allows you to add more then one folder when you enter a space between the new folder names. **This just added Empty CSS JS IMG folders to our directory.**
- `touch index.html CSS/style.css`
>creates the index.html and creates the style.css file in the CSS folder

## &#128458; Copy Starter Template

- Go to  [Boostrap Starter Template](https://getbootstrap.com/docs/4.5/getting-started/introduction/#starter-template) and find the Starter Template section. Click on Copy.
- Go into your VS studio and open the index.html file. Paste the template into the Empty index.html.

## &#128279; Link CSS to index.html

- While we are in there, Locate the Link to Bootstrap  in the "Head" section.
    - Underneath the Bootstrap Link, Link your style.css sheet.
    >This allows our styles in style.css to overwrite Bootstrap css codes.

## &#128228; Push Changes to your starter-files Branch

In GitBash enter the following codes into your terminal.
- `git add .`
> Adds all changes to the staging area.
- `git commit -m "i dont know what i am doing"`
> After review, we are committed to our change. Although our -m (message) is not really incouraging..
-   `git push origin readme`
> This will push our changes to GitHub. It just works!

## &#128230; What is included?

1. index.html
2. css folder
   - styles.css
3. js folder
    - Empty folder, does not show in Github.
4. img folder
    - Empty folder, does not show in Github.`
___
Contributor:

Angel Ramirez

Student @ Bitwise
Email@somefakeEmailSite.com