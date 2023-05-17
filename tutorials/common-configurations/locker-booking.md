---
description: Steps to Configure Locker Booking for PlaceOS
---

# Locker Booking

PlaceOS is able to support locker bookings via supported Locker Hardware Integrations.

The features available PlaceOS for Locker Booking are dependant on those available via the hardware integration. For example, some lockers will allow remote unlock functionality while others will not.&#x20;

## Add Locker Zone Metadata

For lockers to function, much like desks, we must add metadata that contains the relevant data for the lockers.

Once the metadata is configured, the locker interface will be dynamically rendered on the frontend applications for end users.

#### 1. Navigate to PlaceOS Backoffice

#### 2. Click on Zones

![Step 2 screenshot](https://images.tango.us/workflows/e7eb7639-3b10-4802-a84d-0e9e74df7536/steps/d6e658b0-1455-4833-947c-959196f8edc7/26213ca9-9eed-458e-9331-d90248784ff4.png?crop=focalpoint\&fit=crop\&fp-x=0.0628\&fp-y=0.1985\&fp-z=2.4320\&w=1200\&border=2%2CF4F2F7\&border-radius=8%2C8%2C8%2C8\&border-radius-inner=8%2C8%2C8%2C8\&blend-align=bottom\&blend-mode=normal\&blend-x=0\&blend-w=1200\&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n\&mark-x=21\&mark-y=275\&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTglMkNGRjc0NDImdz0zMjQmaD04NSZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw)

#### 3. Select a Level Zone

Locker data must reside in the relevant level zone, locate the level zone you would like to add lockers to and select it. \


<figure><img src="https://images.tango.us/workflows/e7eb7639-3b10-4802-a84d-0e9e74df7536/steps/d6900850-eb87-48cf-90ea-30096b19bf7e/b5a0eee7-dad6-4041-a6b6-a6ba305c7853.png?crop=focalpoint&#x26;fit=crop&#x26;fp-x=0.2423&#x26;fp-y=0.7045&#x26;fp-z=1.8968&#x26;w=1200&#x26;border=2%2CF4F2F7&#x26;border-radius=8%2C8%2C8%2C8&#x26;border-radius-inner=8%2C8%2C8%2C8&#x26;blend-align=bottom&#x26;blend-mode=normal&#x26;blend-x=0&#x26;blend-w=1200&#x26;blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&#x26;mark-x=293&#x26;mark-y=279&#x26;m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTglMkNGRjc0NDImdz01MTcmaD05OSZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw" alt=""><figcaption></figcaption></figure>

#### 4. Click on  the Metadata tab

![Step 4 screenshot](https://images.tango.us/workflows/e7eb7639-3b10-4802-a84d-0e9e74df7536/steps/37eb5e72-6eaf-4e93-9e19-5ca605ce91b2/416bde68-8120-4e20-a107-6bc08a86fcad.png?crop=focalpoint\&fit=crop\&fp-x=0.7184\&fp-y=0.1147\&fp-z=2.7644\&w=1200\&border=2%2CF4F2F7\&border-radius=8%2C8%2C8%2C8\&border-radius-inner=8%2C8%2C8%2C8\&blend-align=bottom\&blend-mode=normal\&blend-x=0\&blend-w=1200\&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n\&mark-x=432\&mark-y=152\&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTglMkNGRjc0NDImdz0zMzcmaD0xMTImZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D)

#### 5. Click on Add new Metadata Field

![Step 5 screenshot](https://images.tango.us/workflows/e7eb7639-3b10-4802-a84d-0e9e74df7536/steps/2c8115ae-ff80-4bfd-a3a2-a2bc47ae9451/ddc41027-024f-4632-a661-86cd24d975a2.png?crop=focalpoint\&fit=crop\&fp-x=0.4242\&fp-y=0.1797\&fp-z=2.3968\&w=1200\&border=2%2CF4F2F7\&border-radius=8%2C8%2C8%2C8\&border-radius-inner=8%2C8%2C8%2C8\&blend-align=bottom\&blend-mode=normal\&blend-x=0\&blend-w=1200\&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n\&mark-x=431\&mark-y=243\&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTglMkNGRjc0NDImdz0zMzcmaD04MCZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw)

#### 6. Edit the new metadata field

![Step 6 screenshot](https://images.tango.us/workflows/e7eb7639-3b10-4802-a84d-0e9e74df7536/steps/f654cd24-c2d2-4beb-9579-38c1b54dce06/f051330f-bb54-499c-a691-7053b881aa76.png?crop=focalpoint\&fit=crop\&fp-x=0.9492\&fp-y=0.4564\&fp-z=2.9826\&w=1200\&border=2%2CF4F2F7\&border-radius=8%2C8%2C8%2C8\&border-radius-inner=8%2C8%2C8%2C8\&blend-align=bottom\&blend-mode=normal\&blend-x=0\&blend-w=1200\&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n\&mark-x=984\&mark-y=294\&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTglMkNGRjc0NDImdz02OSZoPTY5JmZpdD1jcm9wJmNvcm5lci1yYWRpdXM9MTA%3D)

#### 7. Name the metadata field 'lockers'

![Step 7 screenshot](https://images.tango.us/workflows/e7eb7639-3b10-4802-a84d-0e9e74df7536/steps/bbe3ed4f-f7a5-4e17-a645-76e2d062ea4d/88dea75f-752c-45a7-b5a4-9d63125a5fc8.png?crop=focalpoint\&fit=crop\&fp-x=0.5003\&fp-y=0.3109\&fp-z=1.7231\&w=1200\&border=2%2CF4F2F7\&border-radius=8%2C8%2C8%2C8\&border-radius-inner=8%2C8%2C8%2C8\&blend-align=bottom\&blend-mode=normal\&blend-x=0\&blend-w=1200\&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n\&mark-x=310\&mark-y=313\&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTglMkNGRjc0NDImdz01ODAmaD0zMiZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw)

#### 8. Click Update

![Step 8 screenshot](https://images.tango.us/workflows/e7eb7639-3b10-4802-a84d-0e9e74df7536/steps/e0e85c88-7a7d-4363-9884-276005ebe75f/5c180503-3a92-4dad-8f80-dfcc03bedc3a.png?crop=focalpoint\&fit=crop\&fp-x=0.5000\&fp-y=0.7949\&fp-z=2.8363\&w=1200\&border=2%2CF4F2F7\&border-radius=8%2C8%2C8%2C8\&border-radius-inner=8%2C8%2C8%2C8\&blend-align=bottom\&blend-mode=normal\&blend-x=0\&blend-w=1200\&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n\&mark-x=511\&mark-y=282\&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTglMkNGRjc0NDImdz0xNzkmaD05NSZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw)

#### 9. Expand the new lockers metadata field by clicking on it

![Step 9 screenshot](https://images.tango.us/workflows/e7eb7639-3b10-4802-a84d-0e9e74df7536/steps/04c36aee-5863-46b8-8054-034ddd2fa5da/3d6d2983-6901-468f-bf1d-5954e1b9d3f6.png?crop=focalpoint\&fit=crop\&fp-x=0.6792\&fp-y=0.2977\&fp-z=1.5762\&w=1200\&border=2%2CF4F2F7\&border-radius=8%2C8%2C8%2C8\&border-radius-inner=8%2C8%2C8%2C8\&blend-align=bottom\&blend-mode=normal\&blend-x=0\&blend-w=1200\&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n\&mark-x=7\&mark-y=277\&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTglMkNGRjc0NDImdz0xMTg2Jmg9NjQmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D)

#### 10. Once you have completed entering the metadata into the field, click Save.

![Step 10 screenshot](https://images.tango.us/workflows/e7eb7639-3b10-4802-a84d-0e9e74df7536/steps/57dad425-006b-4a72-9518-4a6e013ed2ac/98662473-26a5-4a7f-be97-792640f70775.png?crop=focalpoint\&fit=crop\&fp-x=0.8937\&fp-y=0.3241\&fp-z=2.8693\&w=1200\&border=2%2CF4F2F7\&border-radius=8%2C8%2C8%2C8\&border-radius-inner=8%2C8%2C8%2C8\&blend-align=bottom\&blend-mode=normal\&blend-x=0\&blend-w=1200\&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n\&mark-x=759\&mark-y=283\&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTglMkNGRjc0NDImdz0xNTAmaD05MiZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw)

## Configuring the Locker Metadata

The locker metadata is detailed below, for each locker a single array of data is required as a child of the locker bank identifier:

````
```json
{
        "id": "bank-1",
        "name": "Bank 1",
        "height": 3,
        "map_id": "table-01.017",
        "lockers": [
            {
                "id": "locker-1",
                "name": "L1-01",
                "size": [
                    1,
                    3
                ],
                "bookable": true,
                "position": [
                    0,
                    0
                ],
                "accessible": true
            }
}
```
````

### Locker Bank Metadata:

This data relates to the locker bank, a locker bank consists of multiple lockers. A level may have more than 1 locker bank.

| Field   | Value                                                             | Type    |
| ------- | ----------------------------------------------------------------- | ------- |
| id      | System ID for the locker bank (required for hardware integration) | string  |
| name    | User facing name for the locker bank.                             | string  |
| height  | Number of lockers high in the bank.                               | integer |
| map\_id | SVG Map ID of the locker bank.                                    | string  |

Configuration of this data will allow the Workplace App to return available locker banks:

<figure><img src="../../.gitbook/assets/image (1).png" alt=""><figcaption></figcaption></figure>



### Locker Metadata

This data relates to the individual lockers in the locker bank.

| Field      | Value                                                                             | Type              |
| ---------- | --------------------------------------------------------------------------------- | ----------------- |
| id         | Hardware Locker ID                                                                | string            |
| name       | User facing name for the locker.                                                  | string            |
| size       | <p>Height,<br>Width</p>                                                           | array of integers |
| bookable   | Bookable State                                                                    | boolean           |
| position   | Offset from top left for UI Rendering                                             | array of integers |
| accessible | Is the locker accessible for users in wheelchairs or other physical disabilities. | boolean           |

Configuring this metadata correctly will allow the Workplace App to render a visual representation of the locker bank.&#x20;

In this example L1-01 is at position:

```
"position": [
                    0,
                    0
                ],
```

While L1-05 has a size configuration of:

````
```json
"size": [
                    1, //width
                    1 //height
                ],
```
````

Where L1-01 has a size configuration of:

````
```json
"size": [
                    1, //width
                    3 //height
                ],
```
````

<figure><img src="../../.gitbook/assets/image.png" alt=""><figcaption></figcaption></figure>

## Enabling the Locker Booking

After configuring the locker metadata, for users to book lockers the locker booking feature must be enabled in the Workplace Application Metadata.

Locker booking may be enabled at any level in the organisational zone structure. Either at the ORG level where it would be enabled for all buildings, or individual Building zones.

This is achieved by applying a `workplace_app` metadata field to the relevant zone.

To enable the Locker Booking option in the menu bar, add `lockers` to the `features` array:

````
```json
"features": [
        "spaces",
        "explore",
        "help",
        "schedule",
        "parking",
        "desks",
        "visitor-invite",
        "lockers"
    ],
```
````
