## Notes

> _Please do not supply your name or email address in this document. We're doing our best to remain unbiased._

### Date

> The date you're submitting this.

Sunday, April 18, 2021, 6:30 PM (PDT)

### Location of deployed application

> If applicable, please provide the url where we can find and interact with your running application.

[Heroku Application](https://weather-thinkific.herokuapp.com/)
**NOTE:** Please note that it is on a free Heroku account. So, the first time you open the URL will take more because it sleeps after 30 minutes of inactivity and may take around a minute to wake up again.

### Time spent

> How much time did you spend on the assignment? Normally, this is expressed in hours.

I spent about 10 hours on the assignment:

- Reading Open Weather Map APIs: ~0.5h
- Thinking and researching about the app features and UI: ~1h
- Thinking and deciding about tools and technology: ~0.5h
- Installing NextJs and preparing the project: ~0.5h
- Adding first backend API to get weather details: ~1.5h
- Handling data fetching in client: ~0.5h
- Adding main page components: ~2h
- Thinking and adding the responsive design: 1h
- Adding city edit feature: ~2h
- Deploying on Heroku: ~0.5h

### Assumptions made

> Use this section to tell us about any assumptions that you made when creating your solution.

- I assumed the Frontend part of the code is more important to you, so decided to use NextJs that does not need too much Backend experience.
- I assumed that I can use other existing APIs, so I used geo API to search for cities and another API to get the current weather condition.

### Shortcuts/Compromises made

> If applicable. Did you do something that you feel could have been done better in a real-world application? Please let us know.

Of course, there are a lot of parts that could be better if it was a real-world application. Here are some of the enhancements I would do if I had more time:

- Add tests!
- Add specific route for cities so that users can share a city with its URL. It can also be serve rendered for SEO improvements.
- I used a UTF-8 character instead of icon and I know that it looks different on different devices. I usually use [webfont-webpack-plugin](https://www.npmjs.com/package/webfont-webpack-plugin) to generate a web-font from my SVG files.
- Add auto-complete for city search. The current version requires the user to write the full name of a city, but we can change the `/api/cities` so that it can query the existing cities. I could not find an API in the Open Weather Map APIs for this feature, but we could move the [cities list](http://bulk.openweathermap.org/sample/city.list.json.gz) to a DB and use that to implement this feature.

### Stretch goals attempted

> If applicable, use this area to tell us what stretch goals you attempted. What went well? What do you wish you could have done better? If you didn't attempt any of the stretch goals, feel free to let us know why.

I did all of them. I used this [dribbble design](https://dribbble.com/shots/6932038-Mobile-application-Weather-Forecast) to implement the mobile version, but I didn't have enough time to think about a good design for the desktop version. So, I think the desktop version could be done better.

### Instructions to run assignment locally

> If applicable, please provide us with the necessary instructions to run your solution.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). Follow these steps to run the project on your local machine:

1. Copy the `.env.sample` file to `.env.local` and replace the value for `OPEN_WEATHER_API_KEY` with your own Open Weather Map API key.
2. Install dependencies: `npm install`.
3. Run the development server: `npm run dev`.
4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### What did you not include in your solution that you want us to know about?

> Were you short on time and not able to include something that you want us to know about? Please list it here so that we know that you considered it.

These are some features I wish I could add to this application:

- Showing `My Location` as the first item on the city selection form and getting the user's permission for using the browser's Geolocation API if a user selected that. Then, we could get show the user their current city.
- The ability to switch the measurement unit between `metric` and `imperial`.
- Cache assets in the service-worker so that it can show the latest fetched information when user is offline.
- Fetch the data periodically to always show the up-to-date data.
- Add some [shortcuts](https://developer.mozilla.org/en-US/docs/Web/Manifest/shortcuts) for the app in the `site.webmanifest` file.

### Other information about your submission that you feel it's important that we know if applicable.

### Your feedback on this technical challenge

> Have feedback for how we could make this assignment better? Please let us know.

I really enjoyed working on this challenge and think it is a great way to assess candidates' technical skills.
