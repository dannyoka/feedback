# Feedback Project

This app has an Express backend with a frontend built in React.

# Spinning it up

The easiest way to demo this is to run a `docker-compose up` from the root directory. The backend also has its own `docker-compose.yaml` that can be used to spin up the backend with a MongoDB instance. From there, you can develop against the frontend. I'm not exactly sure why, but the frontend takes a long time before it's ready.

# Notes

As far as the assignment goes, I believe I satisfied all requirements with the exception of the Thank You page giving you the option to close the window or navigate back to the previous page. There is an option to navigate back to the previous page, but apparently it is quite tricky to use Javascript to close a window, so I willingly accept any point deductions from that.

Aside from that, in the dashboard, I did include an "Origin URL" card. It wasn't listed in the requirement, however, I figured since we were tracking that information, it would just make sense to have that report be made visible.

Also, all backend report aggregation is performed at the DB level, rather than using `filter` and `reduce` functions at the API or frontend.

Were I to continue building this out, I would add more comments in the code for future developers, and implement testing.
