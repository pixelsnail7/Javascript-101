01. Create all basic file {index.html, style.css, app.js, project.md}
02. Setup basic files
03. Create *Base app* and `main()` function in *app.js*
04. Create a *Nav* component in components folder
05. *Nav* is a simple function that return an *object*
06. Object have some properties 
    - template -> give *html* elements to *app* 
    - dateSearch, dateInput, searchInput
    - `dateInputFunc()` -> give functionality to *app*

# dateInputFunc()
When dateSearch is clicked, display the date picker. Save the user's input to the date variable and trigger an alert

07. in *app.js* import Nav and render it `Nav().template` to display it
08. In `main()` function add Nav date input functionality `Nav().dateInputFunc();` to get its functionality
09. Now it's time to add functionality to *searchInput*
10. Create a new property name `searchInputFunc()` to get searchInput value

# searchInputFunc()
When user input anything, the value save to search variable, log it and end it return search value

11. Remember, Always add new functionality to `main()` for working.