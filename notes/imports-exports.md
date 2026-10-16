1. sually we import javascript code using script tags in the html, but in react-app we don't include script rather react uses a build processes. (react-scripts package)

- your code is transformed before it's handed-off to the browser
- why do we need to transform?
  1. unprocesses React code won't be executed in the browser because react code which is stored in .jsx that's not a default javascript feature. (or default broswer understable extension)
  - even try to include only html code in the app.js file and execute it, will throw an error

2. your code won't be optimized for production (or minified)

if you're using create-react-app or vite, you no need to do build processes.

# import and export syntax

3. While importing files from another module, no need to import files with extension because react build processes does this for us
4. if you're using named import/export you should include type="module" in the script tag or package.json
5. if you see the auto-generated .js file in the browser, which will not have type="module" because react-scripts build process makes all the different files into a single big file and place the code with the old syntax in the right order in the html file.

6. export default - exports the value of the variable or function or classes
   example: export default "keerthivasan"
   export default (a,b)=> a+b
   import firstname from ".temp.js"

7. To group all the named export into a single name
   Example: import \* as util from "util.js" -> util.x, util.y...