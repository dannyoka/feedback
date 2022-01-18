# Feedback Project

This app has an Express backend with a frontend built in React.

# Spinning it up

The easiest way to demo this is to run a `docker-compose up` from the root directory. The backend also has its own `docker-compose.yaml` that can be used to spin up the backend with a MongoDB instance. From there, you can develop against the frontend. I'm not exactly sure why, but the frontend takes a long time before it's ready.

The frontend spins up and can be viewed at `localhost:3000`

# Using the App

A user can write feedback in the feedback modal on any page using the floating action button in the bottom right corner. An admin can view all feedback and a report on the feedback page viewable from the link in the toolbar. While each comment does have all info available, I've only displayed the name, suggestion and rating in the UI.

# Notes

As far as the assignment goes, I believe I satisfied all requirements with the exception of the Thank You page giving you the option to close the window or navigate back to the previous page. There is an option to navigate back to the previous page, but apparently it is quite tricky to use Javascript to close a window, so I willingly accept any point deductions from that.

Aside from that, in the dashboard, I did include an "Origin URL" card. It wasn't listed in the requirement, however, I figured since we were tracking that information, it would just make sense to have that report be made visible.

Also, all backend report aggregation is performed at the DB level, rather than using `filter` and `reduce` functions at the API or frontend.

Were I to continue building this out, I would add more comments in the code for future developers, and implement testing and implement more modular CSS, rather than using inline styling. Obviously, the content is lacking and devoid of styling, but that was a conscious choice, since I felt the focus was to make the feedback app functional and usable from any page in the app.
