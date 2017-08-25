We wanted to make something that could be used autonomously once deployed. Additionally, we wanted to create
an application that carried a little more weight in terms of making a societal difference. Something that 
fell right in the bailiwick for us was helping animals get adopted. After comparing a few different API's, we 
settled on Petfinder, which would allow us to search through pets as well as shelters.

The ultimate goal was to allow users to search through the API and find animals that fit their preference. To 
make it easier on the user, we allowed them to input the Zip Code as the main search but also broke it down
by animal, breed and gender. In order to allow users to also quickly identify nearby shelters, we set up a 
search function based off of Zip Code.

We felt to make the site useful, we would need to allow users to save pets under their account. Typically pet
adoption is not a quick transaction so allowing users to come back and review pets that peaked their interest
was crucial. We were able to achieve this by grabbing the current user from the session controller and pushing
the pulled API data into an array. You can see this functionality on the member's show page. 

In addition to making an autonomous site, we wanted to make something that was visually pleasing. To do this, 
we went for a color scheme that we thought fit the type of data we were displaying. We also wanted to additional
information so users could learn more about the adoption process. We placed this in both the drop downs and 
in the pop-ups connected to the pictures at the bottom of the screen. 

Overall, we feel that we've made a tool that can help users through the pet adoption process. We also feel 
that our site is pretty intuitive and should be easy to navigate. 

While we are happy with the site itself, there are some things we would be interested in addressing if given 
more time.

1. The register function is not directly tied to the login function. Because of that, some of the functionality
that should be accessible after registration doesn't work. For the time being, we combatted that by sending
the user directly to the login page after registration. Given more time, we would have liked to created a 
function that fed the registration through the login function.

2. We know that being able to save preferable pets is an important function. We also recognize that you need 
to be able to keep an organized list to choose which pet is right for you. Unfortunately we weren't able to 
create a delete function on the pets users saved. Given more time, this would be high on our list.

3. In addition to being able to find shelters close to a given zip code, we wanted to provide a map so users
could see exactly where they are. The find shelters function provides latitude and longitude data that can be
added to a Google Maps API to display a map with a pin. If time had allowed this, we wanted to implement that 
feature for our users.

4. To give users more data, we also wanted to implement a modal that popped up when they clicked on the pictures
of the animals in the search. This would allow for more information on just one page. While this was somewhat
remedied by allowing users to add their favorite pets, we feel it could have been a nice feature to lead to 
more saved pets.

5. The drop down menues are very stylistic and we're happy that we were able to implement them. However, we 
understand they currently overlap one another. Given more time, we would alleviate that issue.

6. While the login function is great, we would have preferred to restrict some of the functions of the sites
to just logged in users. We've noticed that some of these features break the page when not logged in. This is
something we feel we could fix given time. At the very least, we would be able to implement Passport to allow
for a more secure network.
