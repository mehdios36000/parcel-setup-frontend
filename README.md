# Introduction
This is  a quick starter project made and used by me to quickly experiment stuffs when I am trying to replicate cool effects that I see on the web.


# Installation
``` 
npm install
npm run start
```

And then go to `localhost:1234`

# Handling changes
If you need to change things such as navbar for example, you will find all the reusable component througout the pages in the folder : `/src/partials`.
Change the html here and modifiy the css in the good file in `/src/scss`.
That is almost everything you need to know.

If you have run : `npm run start`, parcels has an excellent hot reload except if you are on another page than index.html. There is a bug with parcels that requires you to manually refresh the page when you are not working on `index.html`.




# Alias to quickly upload the code on Codesandbox
You must install codesandbox command line on your computer. Then add this alias to your `.zshrc`:

```
alias share_code='rm -rf dist .cache && codesandbox ./'
```
