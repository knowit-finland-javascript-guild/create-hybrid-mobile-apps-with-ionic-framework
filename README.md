## Create hybrid mobile apps with the Ionic framework

# Ionic React ScreenScore App


## Getting started
To begin, follow these steps:

1. If you haven't already, install the Ionic CLI:

    ``npm install -g @ionic/cli``

    (Check if intalled with ``ionic -v``)

2. Clone this Git repository

3. Start the development server by running the following command in your terminal:

    `ionic serve`

4. Open http://localhost:8100 in your web browser to view your app.

5. If you want to use your browser to code, we recommend using the device emulation mode. Press F12 and then Toggle device emulation (Ctrl + Shift + M) and choose an emulated phone device.

![image](https://user-images.githubusercontent.com/16801415/230067428-53aa32a9-10d6-4d04-afd0-34d96a3ff293.png)



## Android build (optional)

 1. First, ensure that you have the Android Studio installed.
 
 2. Add the Android platform to your Ionic project by running the following commands in your project directory:
 
    ``ionic cap add android``
 
3. Then build the Android app: ``ionic cap build android`` (do this every time you make changes)

    Android Studio should open. 

4. After the Gradle build is ready, press "Run 'app'" in the Android studio. You need to have a emulated device and the correct app selected.

 ![image](https://user-images.githubusercontent.com/16801415/230074674-ae1b2214-ea91-4be2-874d-7bd59835664f.png)

Alternatively, you can run your app using the Ionic CLI with the command:
    
``ionic capacitor run android``

Note: If you encounter any issues running your app, try running `ionic capacitor sync android` to sync your Android app.


## iOS build (optional)

1. Xcode must be installed, and for this you need to have a mac laptop

2. Add the iOS platform to your Ionic project by running the following commands in your project directory:

    ``ionic cap add ios``

3. Then build the iOS app: ``ionic cap build ios`` (do this every time you make changes)

4. Xcode should open. Select a simulator and press start in the Xcode. 
    Alternatively, you can run ``ionic cap run ios``

Note: If you encounter any issues running your app, try running `ionic capacitor sync ios` to sync your iOS app.


# Excercises
Currently there is only app that list ratings from the sample data.
## Adding new ratings
Lets add form using Ionic and react-hook-form to add new ratings.
1. Modal
Go to file "AddRatingForm.tsx" and add there [IonModal](https://ionicframework.com/docs/api/modal) that opens when the button is clicked.
Add modal:
Header, Toolbar IonTittle "Add a new rating", and IonButton "Close" that sets the isOpen to false.
Also add IonContent.
Take example from this: https://stackblitz.com/edit/angular-pfw55s?file=src%2Fmain.tsx
2. Form inputs
Here is base for the form:
       ``
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
       ``
This form is missing input for the score. Create this using [IonInput](https://ionicframework.com/docs/api/input). Take example from title input.

Score input should have type "number". Add also min=0 and max=5 values and step="0.1" [step](https://ionicframework.com/docs/api/input#step). (Note that register name should be "score")
Add IonLabel for the score input.
## View a rating
Go to file App.tsx. Add there route for path "/rating/:id", containing component ViewRating.

Add Router link to raiting items listed in the Home page. Note that the Item component in the RatingListItem.tsx file. You can give IonItem a property "routerLink":
routerLink={`/rating/${rating.id}`}

Now you should be able to click rating items in the Home page and you are directed to a rating page.

It is not very easy to back to Home page currently if we use mobile,so to fix this add IonBackButton in VieWRating.tsx -file, same way that in this example: https://stackblitz.com/run?file=src%2Fpage-two.tsx


# Extra Excercises
## Sort
Add to Home page buttons that use would use sortByTitle and sortByScore, to sort the 
If you have time try to make the buttons look better using Ionic API https://ionicframework.com/docs/api/button

## Theme
Navigate to theme folder and change the --ion-color-primary.
Then add to Home.css:
``
#home-page ion-title {
    color: var(--ion-color-primary);
    font-size: large;
}
``


If you get stuck ask help or you can look solutions in the solution folder.
At the end the App should look somethig like this:

<img src="https://user-images.githubusercontent.com/16801415/233607926-6053f850-a3c7-45ad-8863-aafd9c3588cf.png" height="500"><img src="https://user-images.githubusercontent.com/16801415/233607874-2382b10c-19ff-411f-b092-245eba4028e9.png" height="500"><img src="https://user-images.githubusercontent.com/16801415/233607805-32a555a2-0054-40f2-975c-f18d01cb5bb9.png" height="500">

Note that this might look different with ios and android.
## How to Create a New Project with Ionic

1. To create a new project, run the command ``ionic start``.

    (Alternatively, you can use the command ``ionic start ScreenScore list --type=react --capacitor``, to skip steps 2-5. [Learn how to use this command](https://ionicframework.com/docs/cli/commands/start) )

2. When the Ionic CLI asks "Use the app creation wizard?", select "n", if you want to use the CLI to create your project. Note that to use Ionic's wizard, you need to have or create an Ionic account.

![image](https://user-images.githubusercontent.com/16801415/230063847-f699f107-b445-4a33-b049-53b4cfad13c8.png)

3. Select the JavaScript framework you want to use.

4. Give your project a name, such as "ScreenScore".

![image](https://user-images.githubusercontent.com/16801415/230065085-c9e130f4-6b42-462d-ada0-13431c71d28b.png)

5. Choose a preferred starter template.

6. The project creation process will take some time. Once it's done, navigate to your project folder by running the following command in your terminal:

    `cd .\ScreenScore\`

Here are the complete guides available on the Ionic website for each JavaScript framework: [Build your first APP](https://ionicframework.com/docs/intro/next#build-your-first-app)
