---
description: Overview of the PlaceOS Workplace App
---

# Workplace App

The Workplace App is the primary user interface for end users to interact with the PlaceOS Platform and facilitates a range of functions, including:

* Room Booking
* Desk Booking
* Locker Booking
* Car Park Booking
* Building Floor Plans
* Real Time Location
* Room Status
* Your Bookings

## Deployment

The Workplace app is typically configured at the base route of your PlaceOS Deployment i.e. `https://yourdomain.placeos.run` it may also be accessed via `https://yourdomain.placeos.run/workplace`&#x20;

This is configured by the directory of the application configured for the relevant domain per the [Deploy a Frontend Interface](../deploy-frontend.md) guide.

Some instances may also have a development interface, pulling from the development branch, this is typically configured as `https://yourdomain.placeos.run/workplace-dev`

### Set The Base Route

If you would like the Workplace App to be the default base route of your deployment, you must configure a default app on the domain.

1\. Navigate to PlaceOS Backoffice

2\. Click on Domains

![Step 2 screenshot](https://images.tango.us/workflows/c6ab9ee6-6558-4856-8c44-4741d474640b/steps/ec34eb0a-f844-4db3-8c2b-85532de94c6e/85b36e68-68f6-49b3-a301-efbdfd3518db.png?crop=focalpoint\&fit=crop\&fp-x=0.0628\&fp-y=0.5160\&fp-z=2.4320\&w=1200\&border=2%2CF4F2F7\&border-radius=8%2C8%2C8%2C8\&border-radius-inner=8%2C8%2C8%2C8\&blend-align=bottom\&blend-mode=normal\&blend-x=0\&blend-w=1200\&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n\&mark-x=21\&mark-y=286\&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTglMkNGRjc0NDImdz0zMjQmaD04NSZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw)

3\. Select your Domain

![Step 3 screenshot](https://images.tango.us/workflows/c6ab9ee6-6558-4856-8c44-4741d474640b/steps/d68f0272-acf1-43ce-b046-7869efaca131/d38ae4a9-5e0e-483f-a627-145afb83aae4.png?crop=focalpoint\&fit=crop\&fp-x=0.2423\&fp-y=0.4598\&fp-z=1.8968\&w=1200\&border=2%2CF4F2F7\&border-radius=8%2C8%2C8%2C8\&border-radius-inner=8%2C8%2C8%2C8\&blend-align=bottom\&blend-mode=normal\&blend-x=0\&blend-w=1200\&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n\&mark-x=293\&mark-y=279\&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTglMkNGRjc0NDImdz01MTcmaD05OSZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw)

4\. Click into the Config Metadata

![Step 4 screenshot](https://images.tango.us/workflows/c6ab9ee6-6558-4856-8c44-4741d474640b/steps/c29d1656-d0c2-4c32-8f35-f3cc54ecdcf6/a5dd5fd7-ec48-4c44-a69e-f976d5d154bc.png?crop=focalpoint\&fit=crop\&fp-x=0.6622\&fp-y=0.5347\&fp-z=1.3319\&w=1200\&border=2%2CF4F2F7\&border-radius=8%2C8%2C8%2C8\&border-radius-inner=8%2C8%2C8%2C8\&blend-align=bottom\&blend-mode=normal\&blend-x=0\&blend-w=1200\&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n\&mark-x=249\&mark-y=79\&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTglMkNGRjc0NDImdz04MjMmaD01MDAmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D)

5\. Add the `default_app` parameter

Configure the `default_app` parameter to the folder for the workplace app, typically `/workplace/` \


<figure><img src="https://images.tango.us/workflows/c6ab9ee6-6558-4856-8c44-4741d474640b/steps/8d0c3769-2375-4a64-a5c5-6fc6ed472a8f/1237d673-30fa-46d5-b7a8-e8f8b2e14d98.png?crop=focalpoint&#x26;fit=crop&#x26;fp-x=0.5550&#x26;fp-y=0.3032&#x26;fp-z=3.0426&#x26;w=1200&#x26;border=2%2CF4F2F7&#x26;border-radius=8%2C8%2C8%2C8&#x26;border-radius-inner=8%2C8%2C8%2C8&#x26;blend-align=bottom&#x26;blend-mode=normal&#x26;blend-x=0&#x26;blend-w=1200&#x26;blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&#x26;mark-x=590&#x26;mark-y=300&#x26;m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTglMkNGRjc0NDImdz0yMCZoPTU3JmZpdD1jcm9wJmNvcm5lci1yYWRpdXM9MTA%3D" alt=""><figcaption></figcaption></figure>

***
