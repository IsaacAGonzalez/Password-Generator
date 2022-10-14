# Password-Generator

![Screenshot of website](/assets/Screenshot1.png)

In this project we are adding the JavaScript to create a password generator that takes in an integer value between 8 and 128 and returns a password of random alphas, numbers, and symbols on our webpage.

![Screenshot of website](/assets/Screenshot2.png)

The JavaScript code does this by prompting the user for an integer value to define the length of the generated password

![Screenshot of website](/assets/Screenshot3.png)

Then asks the user to confirm if they want numbers included in the password

![Screenshot of website](/assets/Screenshot4.png)

Followed by a confirm asking for whether special symbols should be used

![Screenshot of website](/assets/Screenshot5.png)

Once the user has inputed all the necessary confirms and checks, a password is generated based on the users inputed arguments. 

Logic checks are also implemented to ensure that valid arguments are selected.
If the user enters a value asides from an integer an error message will appear and the user will start over.

![Screenshot of website](/assets/Screenshot6.png)

Similarly if the number is lower than 8 or greater than 128, the user will again receive an error and be asked to start over. 

![Screenshot of website](/assets/Screenshot7.png)
![Screenshot of website](/assets/Screenshot8.png)

Please check the sourcecode on how the logic handles these checks and how it allows which characters to be used in the password generator.

Check it out yourself [here!](https://isaacagonzalez.github.io/Password-Generator/) Enjoy!