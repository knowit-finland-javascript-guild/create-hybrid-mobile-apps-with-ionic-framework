## Create hybrid mobile apps with the Ionic framework

# Ionic React ScreenScore App

Thank you for participating in this workshop! As part of my master thesis, I have created a survey to collect feedback on the workshop and the Ionic framework. I would be grateful if you could take a few minutes to complete the survey after you have finished the workshop exercises and any other related tasks. 
[Survey](https://forms.office.com/Pages/ResponsePage.aspx?id=nJI1Z7-dO0efxl-9zSyfxNTaqbpUJNVEk7M4YjQLI45UNU9WSk8wVVlFTjVXRUcxQUJTRFo2SlNMRy4u)

## Getting started
To begin, follow these steps:

1. If you haven't already, install the Ionic CLI:

    ``npm install -g @ionic/cli``

    (Check if installed with ``ionic -v``)

2. Clone this Git repository, go to the project folder `cd .\create-hybrid-mobile-apps-with-ionic-framework\`, and run `npm install`. (If you don't want to use React you can follow these tutorial for Angular and Vue: [Build your first APP](https://ionicframework.com/docs/intro/next#build-your-first-app))

3. Start the development server by running the following command:

  `ionic serve`

4. Open http://localhost:8100 in your web browser to view your app.

5. If you want to use your browser to code, we recommend using the device emulation mode. Press F12 and then Toggle device emulation (Ctrl + Shift + M or Cmd + Opt + M) and choose an emulated phone device.

![image](https://user-images.githubusercontent.com/16801415/230067428-53aa32a9-10d6-4d04-afd0-34d96a3ff293.png)


## Android build (optional)

 1. First, ensure that you have the Android Studio installed.
 
 2. Add the Android platform to your Ionic project by running the following commands in your project directory:
 
    ``ionic cap add android``
    
    This should add folder "android" to your project.
 
3. Then build the Android app: ``ionic cap build android`` (run this again after you make changes, you can add --watch to )

    Android Studio should open. You might need to a new add device emulator.

4. Press "Run 'app'" in the Android studio after the Gradle build is ready. You need to have an emulated device and the correct app selected.

 ![image](https://user-images.githubusercontent.com/16801415/230074674-ae1b2214-ea91-4be2-874d-7bd59835664f.png)

Alternatively, you can run your app using the Ionic CLI with the command:
    
``ionic capacitor run android``

Note: If you encounter any issues running your app, try running `ionic capacitor sync android` to sync your Android app.


## iOS build (optional)

1. Xcode must be installed, and for this, you need to have a Mac laptop

2. Add the iOS platform to your Ionic project by running the following commands in your project directory:

    ``ionic cap add ios``
    
    This should add folder "ios" to your project.
    
3. Then build the iOS app: ``ionic cap build ios`` (do this every time you make changes)

4. Xcode should open. Select a simulator and press start in the Xcode.  You might need to add a new device simulator.
    Alternatively, you can run ``ionic cap run ios``

Note: If you encounter any issues running your app, try running `ionic capacitor sync ios` to sync your iOS app.


# Exercises
This is an app called ScreenScore, where you can browse and add ratings for all your favorite films and shows. Currently, the app only lists ratings from sample data. Let's add functionality to allow users to add new ratings and view existing ones. If you get stuck, don't hesitate to ask for help or look to the solutions folder for guidance.
## 1. Adding new ratings
To add a form for adding new ratings, follow these steps:
1. Add an IonModal

Take an example from this: https://stackblitz.com/edit/angular-pfw55s?file=src%2Fmain.tsx.
Go to file "AddRatingForm.tsx" and add there [IonModal](https://ionicframework.com/docs/api/modal) that opens when the button is clicked. Add the following components to the modal:
Header, Toolbar, IonTittle "Add a new rating", IonButton "Close" that sets the isOpen to false, and IonContent.

2. Add a form to save new ratings

Now, let's create a form using Ionic and React Hook Form to add new ratings to our app. Here's the base for the form:

```javascript
       <form onSubmit={handleSubmit(submitForm)}>
            <IonItem>
              <IonInput
                label="Title"
                labelPlacement="stacked"
                type="text"
                {...register("title", { required: true })}
              />
            </IonItem>
            {/* Add Score input here */}
            <IonItem>
              <textarea
                placeholder="Write a review"
                {...register("review", { required: true })}
                className="custom-textarea"
              />
            </IonItem>
            <IonButton type="submit" disabled={!formState.isValid}>
              Save
            </IonButton>
          </form>       
```

This form is missing input for the score. Create this input using [IonInput](https://ionicframework.com/docs/api/input). Take an example from title input.

Score input should have type "number", and add min=0 and max=5 attributes. Also, add a step="0.1" to be able to use decimals. [Step](https://ionicframework.com/docs/api/input#step). 

(Note that the register name should be "score")

## 2. View a rating
1. Go to file App.tsx and add a route for path "/rating/:id", containing component ViewRating. Take an example from the home-path.
https://ionicframework.com/docs/react/navigation#ionreactrouter

2. In the RatingListItem.tsx file, add to the IonItem component a "routerLink" property with the value /rating/${rating.id}. This will create a link to the rating page.

Now you should be able to click rating items on the Home page, and you will be directed to a rating page.

3. To make it easy to navigate back to the Home page, add an IonBackButton component to the ViewRating.tsx file. Follow this example:
[IonBackButton](https://ionicframework.com/docs/api/back-button#basic-usage) (Select React and src/page-two.tsx)


# 3. Extra Exercises
If you have extra time, try adding the following features to the app:
## Sort
Add buttons to the Home page that allow users to sort the ratings by title or score. You can use the sortByTitle and sortByScore functions for this. To make the buttons look better, test different styles from the Ionic API to them. https://ionicframework.com/docs/api/button

## Theme
Navigate to the theme folder and change the --ion-color-primary. 
Then add to Home.css:
``
#home-page ion-title {
    color: var(--ion-color-primary);
    font-size: large;
}
``
Look how the app looks now.

Don't forget to take [the survey](https://forms.office.com/Pages/ResponsePage.aspx?id=nJI1Z7-dO0efxl-9zSyfxNTaqbpUJNVEk7M4YjQLI45UNU9WSk8wVVlFTjVXRUcxQUJTRFo2SlNMRy4u)!

Once you have completed these exercises, the App should look something like this:

<img src="https://user-images.githubusercontent.com/16801415/233607926-6053f850-a3c7-45ad-8863-aafd9c3588cf.png" height="500"> <img src="https://user-images.githubusercontent.com/16801415/233607874-2382b10c-19ff-411f-b092-245eba4028e9.png" height="500"> <img src="https://user-images.githubusercontent.com/16801415/233607805-32a555a2-0054-40f2-975c-f18d01cb5bb9.png" height="500">

Note that this might look different with iOS and Android.

If you want to take your Ionic skills to the next level, I encourage you to try creating your own app using the instructions below. Good luck!

## How to Create a New Project with Ionic

1. To create a new project, run the command ``ionic start``.

    (Alternatively, you can use the command ``ionic start ScreenScore list --type=react --capacitor``, to skip steps 2-5. [Learn how to use this command](https://ionicframework.com/docs/cli/commands/start) )

2. When the Ionic CLI asks, "Use the app creation wizard?" select "n" if you want to use the CLI to create your project. Note that you need to have or create an Ionic account to use Ionic's wizard.

![image](https://user-images.githubusercontent.com/16801415/230063847-f699f107-b445-4a33-b049-53b4cfad13c8.png)

3. Select the JavaScript framework you want to use.

4. Give your project a name, such as "ScreenScore".

![image](https://user-images.githubusercontent.com/16801415/230065085-c9e130f4-6b42-462d-ada0-13431c71d28b.png)

5. Choose a preferred starter template.

6. The project creation process will take some time. Once it's done, navigate to your project folder by running the following command in your terminal:

    `cd .\ScreenScore\`

Here are the complete guides available on the Ionic website for each JavaScript framework: [Build your first APP](https://ionicframework.com/docs/intro/next#build-your-first-app)
