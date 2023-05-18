---
description: Configure Catering and Catering Rules
---

# Catering

PlaceOS supports the implementation of catering, which can be included with room bookings.

The catering platform allows organisations to create a catering menu, set prices, create rules and make items available to order for users via the Workplace App.

Catering providers have access to a dashboard, displaying pending orders and allowing them to track the state of each order as it is processed.

All catering is implemented and managed via the Concierge Application.

## Catering Menus

The first step to implementing catering is to create a menu.

Organisations can create different menus for each building via Concierge.

A base menu is required, once this is complete we can restrict items to specific floors as required.

### Create a Menu Item

#### 1. Navigate to PlaceOS Concierge Interface

This is typically https://yourdomain.placeos.run/concierge

#### 2. Select your Building

Prior to creating your menu, ensure you have selected the relevant building if you have more than one.&#x20;

<figure><img src="https://images.tango.us/workflows/4a2b6203-1a04-4c5d-b328-0c6f219cf893/steps/f4c145fe-4ab5-4a68-b38c-34489e9eab9b/3c7b8be9-7070-46a2-b4d2-4bedb88450de.png?crop=focalpoint&#x26;fit=crop&#x26;fp-x=0.0662&#x26;fp-y=0.9192&#x26;fp-z=2.2840&#x26;w=1200&#x26;border=2%2CF4F2F7&#x26;border-radius=8%2C8%2C8%2C8&#x26;border-radius-inner=8%2C8%2C8%2C8&#x26;blend-align=bottom&#x26;blend-mode=normal&#x26;blend-x=0&#x26;blend-w=1200&#x26;blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&#x26;mark-x=-8&#x26;mark-y=551&#x26;m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTglMkNGRjc0NDImdz0zNzgmaD0xMDgmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D" alt=""><figcaption></figcaption></figure>

#### 3. Select Catering from the Navigation bar

![Step 3 screenshot](https://images.tango.us/workflows/4a2b6203-1a04-4c5d-b328-0c6f219cf893/steps/fbeccc87-52bd-44cc-8ba8-4274022c9959/82a2d4ad-147c-475f-9051-001e61fa4353.png?crop=focalpoint\&fit=crop\&fp-x=0.0662\&fp-y=0.2742\&fp-z=2.3430\&w=1200\&border=2%2CF4F2F7\&border-radius=8%2C8%2C8%2C8\&border-radius-inner=8%2C8%2C8%2C8\&blend-align=bottom\&blend-mode=normal\&blend-x=0\&blend-w=1200\&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n\&mark-x=8\&mark-y=326\&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTglMkNGRjc0NDImdz0zNTcmaD04OSZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw)

#### 4. Click the Menus and Pricing tile

![Step 4 screenshot](https://images.tango.us/workflows/4a2b6203-1a04-4c5d-b328-0c6f219cf893/steps/48e48089-4445-48ba-bfe1-4a225d2e4a46/eb9ef0a4-89ba-4535-85dc-eb19d261f184.png?crop=focalpoint\&fit=crop\&fp-x=0.4094\&fp-y=0.5452\&fp-z=1.6280\&w=1200\&border=2%2CF4F2F7\&border-radius=8%2C8%2C8%2C8\&border-radius-inner=8%2C8%2C8%2C8\&blend-align=bottom\&blend-mode=normal\&blend-x=0\&blend-w=1200\&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n\&mark-x=293\&mark-y=193\&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTglMkNGRjc0NDImdz02MTQmaD0zNTUmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D)

#### 5. Select All Levels from the Level Selector

The global menu must be created in the All Levels selection, this allows us to build the full menu and later restrict items to specific floors.&#x20;

<figure><img src="https://images.tango.us/workflows/4a2b6203-1a04-4c5d-b328-0c6f219cf893/steps/c6e3ed4d-9f93-4836-83cd-5d4e3fa90a3c/8aef2c2f-ebf0-4c36-8ed5-8fa54895a3ad.png?crop=focalpoint&#x26;fit=crop&#x26;fp-x=0.1875&#x26;fp-y=0.1059&#x26;fp-z=2.5398&#x26;w=1200&#x26;border=2%2CF4F2F7&#x26;border-radius=8%2C8%2C8%2C8&#x26;border-radius-inner=8%2C8%2C8%2C8&#x26;blend-align=bottom&#x26;blend-mode=normal&#x26;blend-x=0&#x26;blend-w=1200&#x26;blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&#x26;mark-x=428&#x26;mark-y=141&#x26;m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTglMkNGRjc0NDImdz0yODYmaD0xMTgmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D" alt=""><figcaption></figcaption></figure>

#### 6. Click on Add Item

![Step 6 screenshot](https://images.tango.us/workflows/4a2b6203-1a04-4c5d-b328-0c6f219cf893/steps/7447b20b-0d01-4897-bfe7-080416700312/1caafe3f-45ba-4fd0-9a24-d521dad695de.png?crop=focalpoint\&fit=crop\&fp-x=0.2712\&fp-y=0.0446\&fp-z=2.6756\&w=1200\&border=2%2CF4F2F7\&border-radius=8%2C8%2C8%2C8\&border-radius-inner=8%2C8%2C8%2C8\&blend-align=bottom\&blend-mode=normal\&blend-x=0\&blend-w=1200\&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n\&mark-x=482\&mark-y=31\&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTglMkNGRjc0NDImdz0yMzcmaD0xMTUmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D)

#### 7. Enter a name for your item

![Step 7 screenshot](https://images.tango.us/workflows/4a2b6203-1a04-4c5d-b328-0c6f219cf893/steps/502778d3-5a81-4e28-bef2-08f1d107d7e4/8ee38ae6-ded3-4669-ad99-0e243ef59c1f.png?crop=focalpoint\&fit=crop\&fp-x=0.3970\&fp-y=0.2453\&fp-z=2.3279\&w=1200\&border=2%2CF4F2F7\&border-radius=8%2C8%2C8%2C8\&border-radius-inner=8%2C8%2C8%2C8\&blend-align=bottom\&blend-mode=normal\&blend-x=0\&blend-w=1200\&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n\&mark-x=419\&mark-y=340\&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTglMkNGRjc0NDImdz0zNjImaD02MiZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw)

#### 8. Select an existing category or type in a new category

Categories are used to group catering items in the Workplace App.&#x20;

<figure><img src="https://images.tango.us/workflows/4a2b6203-1a04-4c5d-b328-0c6f219cf893/steps/7dcff514-d8de-4b30-911a-2b622fe1b314/fdef9c44-a18d-4678-b66a-9dc7d5491651.png?crop=focalpoint&#x26;fit=crop&#x26;fp-x=0.5486&#x26;fp-y=0.3077&#x26;fp-z=2.2143&#x26;w=1200&#x26;border=2%2CF4F2F7&#x26;border-radius=8%2C8%2C8%2C8&#x26;border-radius-inner=8%2C8%2C8%2C8&#x26;blend-align=bottom&#x26;blend-mode=normal&#x26;blend-x=0&#x26;blend-w=1200&#x26;blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&#x26;mark-x=399&#x26;mark-y=320&#x26;m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTglMkNGRjc0NDImdz00MDMmaD0xMDMmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D" alt=""><figcaption></figcaption></figure>

#### 9. Enter a item description

![Step 9 screenshot](https://images.tango.us/workflows/4a2b6203-1a04-4c5d-b328-0c6f219cf893/steps/2aab9275-dc2d-41c8-846e-dba7e2ba8172/dda86ba2-1020-41e8-bae4-a2e14cfb226d.png?crop=focalpoint\&fit=crop\&fp-x=0.5003\&fp-y=0.4705\&fp-z=1.5715\&w=1200\&border=2%2CF4F2F7\&border-radius=8%2C8%2C8%2C8\&border-radius-inner=8%2C8%2C8%2C8\&blend-align=bottom\&blend-mode=normal\&blend-x=0\&blend-w=1200\&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n\&mark-x=283\&mark-y=335\&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTglMkNGRjc0NDImdz02MzQmaD03MyZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw)

#### 10. Enter a price

The currency can be configured at the building level, so enter the relevant decimal number in your local currency. \


<figure><img src="https://images.tango.us/workflows/4a2b6203-1a04-4c5d-b328-0c6f219cf893/steps/a5201f76-6d94-43b9-883d-32be30e923fc/e58a789c-51e8-4f09-8cdc-0adab9d4b926.png?crop=focalpoint&#x26;fit=crop&#x26;fp-x=0.5003&#x26;fp-y=0.5897&#x26;fp-z=1.5715&#x26;w=1200&#x26;border=2%2CF4F2F7&#x26;border-radius=8%2C8%2C8%2C8&#x26;border-radius-inner=8%2C8%2C8%2C8&#x26;blend-align=bottom&#x26;blend-mode=normal&#x26;blend-x=0&#x26;blend-w=1200&#x26;blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&#x26;mark-x=283&#x26;mark-y=350&#x26;m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTglMkNGRjc0NDImdz02MzQmaD00MiZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw" alt=""><figcaption></figcaption></figure>

#### 11. Select dietary options if relevant

![Step 11 screenshot](https://images.tango.us/workflows/4a2b6203-1a04-4c5d-b328-0c6f219cf893/steps/442bac23-3596-45df-b3af-2e95aa194932/112af9cf-a057-404c-aed4-05553241fdb7.png?crop=focalpoint\&fit=crop\&fp-x=0.3432\&fp-y=0.5039\&fp-z=2.8288\&w=1200\&border=2%2CF4F2F7\&border-radius=8%2C8%2C8%2C8\&border-radius-inner=8%2C8%2C8%2C8\&blend-align=bottom\&blend-mode=normal\&blend-x=0\&blend-w=1200\&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n\&mark-x=544\&mark-y=315\&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTglMkNGRjc0NDImdz0xMTImaD0xMTImZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D)

#### 12. Optionally upload an image

The image will be displayed to users in the Workplace App \


<figure><img src="https://images.tango.us/workflows/4a2b6203-1a04-4c5d-b328-0c6f219cf893/steps/b0e2e0b1-a151-4483-a931-d96ec0a8838a/cd8b8bce-9553-4c45-a93b-b3bccbe3fc33.png?crop=focalpoint&#x26;fit=crop&#x26;fp-x=0.3694&#x26;fp-y=0.6332&#x26;fp-z=2.2594&#x26;w=1200&#x26;border=2%2CF4F2F7&#x26;border-radius=8%2C8%2C8%2C8&#x26;border-radius-inner=8%2C8%2C8%2C8&#x26;blend-align=bottom&#x26;blend-mode=normal&#x26;blend-x=0&#x26;blend-w=1200&#x26;blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&#x26;mark-x=473&#x26;mark-y=244&#x26;m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTglMkNGRjc0NDImdz0yNTQmaD0yNTQmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D" alt=""><figcaption></figcaption></figure>

#### 13. Click on Save

![Step 13 screenshot](https://images.tango.us/workflows/4a2b6203-1a04-4c5d-b328-0c6f219cf893/steps/918b0f69-c8f2-42bc-adb2-4798199d6f80/329f067c-13f1-487f-ac8e-25c3ff0524f3.png?crop=focalpoint\&fit=crop\&fp-x=0.5003\&fp-y=0.8573\&fp-z=2.8268\&w=1200\&border=2%2CF4F2F7\&border-radius=8%2C8%2C8%2C8\&border-radius-inner=8%2C8%2C8%2C8\&blend-align=bottom\&blend-mode=normal\&blend-x=0\&blend-w=1200\&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n\&mark-x=509\&mark-y=382\&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTglMkNGRjc0NDImdz0xODImaD0xMjImZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D)

### Restrict Menu Items to Levels

Once we have created our menu items, we can apply restrictions to these items so they may only be available on certain floors.

As an example, you may want hot and cold drinks available to your staff in all meeting rooms but wish to restrict food items to client facing meeting rooms only. This is achieved via Level Restrictions.

#### 1. Click on All Levels

![Step 1 screenshot](https://images.tango.us/workflows/512f3545-cfc0-45b2-a5ad-fb0dd3246e4b/steps/d8cddda9-5aca-4362-b8c9-bac0be56bde7/20153c1b-ae1a-4a90-8f6d-e132d56aa5e6.png?crop=focalpoint\&fit=crop\&fp-x=0.1875\&fp-y=0.0429\&fp-z=2.6905\&w=1200\&border=2%2CF4F2F7\&border-radius=8%2C8%2C8%2C8\&border-radius-inner=8%2C8%2C8%2C8\&blend-align=bottom\&blend-mode=normal\&blend-x=0\&blend-w=1200\&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n\&mark-x=484\&mark-y=49\&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTglMkNGRjc0NDImdz0yMzEmaD03MyZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw)

#### 2. Select a Level

![Step 2 screenshot](https://images.tango.us/workflows/512f3545-cfc0-45b2-a5ad-fb0dd3246e4b/steps/3f5bb5d5-87d3-45fc-a937-ce40e1605d5b/a4af2374-5227-4112-a15a-abe49e6649c2.png?crop=focalpoint\&fit=crop\&fp-x=0.1875\&fp-y=0.1594\&fp-z=2.5398\&w=1200\&border=2%2CF4F2F7\&border-radius=8%2C8%2C8%2C8\&border-radius-inner=8%2C8%2C8%2C8\&blend-align=bottom\&blend-mode=normal\&blend-x=0\&blend-w=1200\&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n\&mark-x=428\&mark-y=242\&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTglMkNGRjc0NDImdz0yODYmaD0xMTgmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D)

#### 3. Check or Uncheck catering items in the list to make them available for that level

<figure><img src="../../../.gitbook/assets/image (2).png" alt=""><figcaption></figcaption></figure>

### Restrict Catering to Rooms

Once we have restricted menu items to a level, we can also apply room restrictions. You may only want catering available in specific rooms, this can be achieved by applying room restrictions.

#### 1. Click on All Levels

![Step 1 screenshot](https://images.tango.us/workflows/b3c63cc6-b0e5-4339-adf0-b96dd8eff75f/steps/6d166f2f-0132-4e57-b1a5-b183a2ba800c/498567d3-f4fd-407a-9124-ac4bf828838a.png?crop=focalpoint\&fit=crop\&fp-x=0.1875\&fp-y=0.0429\&fp-z=2.6905\&w=1200\&border=2%2CF4F2F7\&border-radius=8%2C8%2C8%2C8\&border-radius-inner=8%2C8%2C8%2C8\&blend-align=bottom\&blend-mode=normal\&blend-x=0\&blend-w=1200\&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n\&mark-x=484\&mark-y=49\&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTglMkNGRjc0NDImdz0yMzEmaD03MyZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw)

#### 2. Select a Level

![Step 2 screenshot](https://images.tango.us/workflows/b3c63cc6-b0e5-4339-adf0-b96dd8eff75f/steps/38cde9cd-0763-453f-997c-67c7009dd14b/cb3f62b3-4761-4c1f-a68a-0f2bd6c57325.png?crop=focalpoint\&fit=crop\&fp-x=0.1875\&fp-y=0.1594\&fp-z=2.5398\&w=1200\&border=2%2CF4F2F7\&border-radius=8%2C8%2C8%2C8\&border-radius-inner=8%2C8%2C8%2C8\&blend-align=bottom\&blend-mode=normal\&blend-x=0\&blend-w=1200\&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n\&mark-x=428\&mark-y=242\&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTglMkNGRjc0NDImdz0yODYmaD0xMTgmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D)

#### 3. Click on Room Availability

![Step 3 screenshot](https://images.tango.us/workflows/b3c63cc6-b0e5-4339-adf0-b96dd8eff75f/steps/45a96cc1-43d1-46c1-8a7a-105038b91333/0ad7aaad-d972-4248-b5ae-4db4e70f2276.png?crop=focalpoint\&fit=crop\&fp-x=0.4669\&fp-y=0.0446\&fp-z=2.4171\&w=1200\&border=2%2CF4F2F7\&border-radius=8%2C8%2C8%2C8\&border-radius-inner=8%2C8%2C8%2C8\&blend-align=bottom\&blend-mode=normal\&blend-x=0\&blend-w=1200\&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n\&mark-x=435\&mark-y=28\&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTglMkNGRjc0NDImdz0zMzAmaD0xMDQmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D)

#### 4. Select the Rooms you want to disable/enable and click Disable or Enable

![Step 4 screenshot](https://images.tango.us/workflows/b3c63cc6-b0e5-4339-adf0-b96dd8eff75f/steps/8fc7e9b3-f8d5-47f9-8f37-9b83fede53b7/a04c95c6-01e4-4327-b8c8-040d5c617858.png?crop=focalpoint\&fit=crop\&fp-x=0.5000\&fp-y=0.5000\&w=1200\&border=2%2CF4F2F7\&border-radius=8%2C8%2C8%2C8\&border-radius-inner=8%2C8%2C8%2C8\&blend-align=bottom\&blend-mode=normal\&blend-x=0\&blend-w=1200\&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n\&mark-x=798\&mark-y=1053\&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTglMkNGRjc0NDImdz0zNjYmaD0xMTgmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D)

#### 5. Click on close

![Step 5 screenshot](https://images.tango.us/workflows/b3c63cc6-b0e5-4339-adf0-b96dd8eff75f/steps/f498ae3b-bdaf-476f-a9e2-cb616ac4bd79/a10233a4-32d1-424a-8a55-35404438aee4.png?crop=focalpoint\&fit=crop\&fp-x=0.6575\&fp-y=0.2464\&fp-z=2.8288\&w=1200\&border=2%2CF4F2F7\&border-radius=8%2C8%2C8%2C8\&border-radius-inner=8%2C8%2C8%2C8\&blend-align=bottom\&blend-mode=normal\&blend-x=0\&blend-w=1200\&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n\&mark-x=544\&mark-y=315\&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTglMkNGRjc0NDImdz0xMTImaD0xMTImZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D)

#### 6. If you open the Room Availability Dialog you will now see your disabled rooms

![Step 6 screenshot](https://images.tango.us/workflows/b3c63cc6-b0e5-4339-adf0-b96dd8eff75f/steps/62ec01f0-aee0-47de-916a-64e07e31d69a/38f3e761-d2b8-4202-8489-ed193de3be2d.png?crop=focalpoint\&fit=crop\&fp-x=0.5000\&fp-y=0.5000\&w=1200\&border=2%2CF4F2F7\&border-radius=8%2C8%2C8%2C8\&border-radius-inner=8%2C8%2C8%2C8\&blend-align=bottom\&blend-mode=normal\&blend-x=0\&blend-w=1200\&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n)

## Catering Rules

PlaceOS allows you to create a number of catering rules.

This may be to enforce a restriction on catering ordering for a certain period before a meeting i.e. only allow catering to be ordered up to 24hours prior to a meeting.

Catering rules may be applied to entire buildings or specific levels.

#### 1. Select a Level

You can apply catering rules to an entire building or specific levels of a building by first selecting the level. \


<figure><img src="https://images.tango.us/workflows/b9d1e37d-b5de-4c9f-982e-df569875382d/steps/5d4349e3-8d56-43a3-b2af-afbcb6d6b259/a1d8c605-3aed-4400-a408-91a441ed4a5a.png?crop=focalpoint&#x26;fit=crop&#x26;fp-x=0.1875&#x26;fp-y=0.0429&#x26;fp-z=2.6905&#x26;w=1200&#x26;border=2%2CF4F2F7&#x26;border-radius=8%2C8%2C8%2C8&#x26;border-radius-inner=8%2C8%2C8%2C8&#x26;blend-align=bottom&#x26;blend-mode=normal&#x26;blend-x=0&#x26;blend-w=1200&#x26;blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&#x26;mark-x=484&#x26;mark-y=49&#x26;m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTglMkNGRjc0NDImdz0yMzEmaD03MyZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw" alt=""><figcaption></figcaption></figure>

#### 2. Click on Edit Config

![Step 2 screenshot](https://images.tango.us/workflows/b9d1e37d-b5de-4c9f-982e-df569875382d/steps/eb939064-bf2d-4117-9912-783a3b7de432/011d6dc3-54e5-451e-b8f2-7f4a8e8780c3.png?crop=focalpoint\&fit=crop\&fp-x=0.3498\&fp-y=0.0446\&fp-z=2.6083\&w=1200\&border=2%2CF4F2F7\&border-radius=8%2C8%2C8%2C8\&border-radius-inner=8%2C8%2C8%2C8\&blend-align=bottom\&blend-mode=normal\&blend-x=0\&blend-w=1200\&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n\&mark-x=469\&mark-y=30\&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTglMkNGRjc0NDImdz0yNjEmaD0xMTImZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D)

#### 3. You will note the zone has been prefilled, in this case, the building zone is entered as we are editing all levels.

![Step 3 screenshot](https://images.tango.us/workflows/b9d1e37d-b5de-4c9f-982e-df569875382d/steps/70349a07-ef5d-436d-bbec-fb3656941f5c/331f56b2-3d81-4167-818a-522488c568a2.png?crop=focalpoint\&fit=crop\&fp-x=0.4590\&fp-y=0.5229\&fp-z=1.8812\&w=1200\&border=2%2CF4F2F7\&border-radius=8%2C8%2C8%2C8\&border-radius-inner=8%2C8%2C8%2C8\&blend-align=bottom\&blend-mode=normal\&blend-x=0\&blend-w=1200\&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n\&mark-x=339\&mark-y=346\&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTglMkNGRjc0NDImdz01MjMmaD01MCZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw)

#### 4. Click on add

![Step 4 screenshot](https://images.tango.us/workflows/b9d1e37d-b5de-4c9f-982e-df569875382d/steps/fa27be89-1e7a-4935-80b3-7ce80a14dbd2/f16fc664-3b13-41b0-b6b4-a94ffa393835.png?crop=focalpoint\&fit=crop\&fp-x=0.5968\&fp-y=0.5184\&fp-z=2.8288\&w=1200\&border=2%2CF4F2F7\&border-radius=8%2C8%2C8%2C8\&border-radius-inner=8%2C8%2C8%2C8\&blend-align=bottom\&blend-mode=normal\&blend-x=0\&blend-w=1200\&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n\&mark-x=544\&mark-y=315\&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTglMkNGRjc0NDImdz0xMTImaD0xMTImZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D)

#### 5. Select your Rule Condition

![Step 5 screenshot](https://images.tango.us/workflows/b9d1e37d-b5de-4c9f-982e-df569875382d/steps/76ea4964-2add-49cc-a390-17a5e204ed46/e7e9d59f-ab04-45e6-acea-720255cd6275.png?crop=focalpoint\&fit=crop\&fp-x=0.4108\&fp-y=0.7113\&fp-z=2.2416\&w=1200\&border=2%2CF4F2F7\&border-radius=8%2C8%2C8%2C8\&border-radius-inner=8%2C8%2C8%2C8\&blend-align=bottom\&blend-mode=normal\&blend-x=0\&blend-w=1200\&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n\&mark-x=403\&mark-y=319\&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTglMkNGRjc0NDImdz0zOTMmaD0xMDQmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D)

#### 6. Enter a value i.e. 24hours

![Step 6 screenshot](https://images.tango.us/workflows/b9d1e37d-b5de-4c9f-982e-df569875382d/steps/69ed03d5-7911-4723-90d9-e0332749c079/5e1a80b1-bbd7-41f9-a562-6a572d349824.png?crop=focalpoint\&fit=crop\&fp-x=0.5569\&fp-y=0.5173\&fp-z=2.3582\&w=1200\&border=2%2CF4F2F7\&border-radius=8%2C8%2C8%2C8\&border-radius-inner=8%2C8%2C8%2C8\&blend-align=bottom\&blend-mode=normal\&blend-x=0\&blend-w=1200\&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n\&mark-x=424\&mark-y=340\&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTglMkNGRjc0NDImdz0zNTEmaD02MiZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw)

#### 7. Click on Save Changes

![Step 7 screenshot](https://images.tango.us/workflows/b9d1e37d-b5de-4c9f-982e-df569875382d/steps/d13634d8-7b02-4cf1-90f5-5f70ed2b6b5b/54ba363b-aab4-4cac-b35f-d8ba87ea7921.png?crop=focalpoint\&fit=crop\&fp-x=0.5003\&fp-y=0.7191\&fp-z=2.5398\&w=1200\&border=2%2CF4F2F7\&border-radius=8%2C8%2C8%2C8\&border-radius-inner=8%2C8%2C8%2C8\&blend-align=bottom\&blend-mode=normal\&blend-x=0\&blend-w=1200\&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n\&mark-x=457\&mark-y=310\&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTglMkNGRjc0NDImdz0yODYmaD0xMjImZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D)

## Charge Codes

Charge Codes are often used by organisations to track catering expenses and charge them back to the appropriate business unit. If your organisation does not use a charge back system there is no requirement to input charge codes.&#x20;

Charge Codes belong to a building, noting each regional building may have a different set of organisational units within it.

#### 1. Click on All Levels

![Step 1 screenshot](https://images.tango.us/workflows/995cb2f4-1690-433f-9d5b-41390cba5b37/steps/10669f68-cbd8-4265-affb-1ec82e3f7718/d2579985-3ec0-45a7-9179-7c901ba9d9ac.png?crop=focalpoint\&fit=crop\&fp-x=0.1875\&fp-y=0.1059\&fp-z=2.5398\&w=1200\&border=2%2CF4F2F7\&border-radius=8%2C8%2C8%2C8\&border-radius-inner=8%2C8%2C8%2C8\&blend-align=bottom\&blend-mode=normal\&blend-x=0\&blend-w=1200\&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n\&mark-x=428\&mark-y=141\&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTglMkNGRjc0NDImdz0yODYmaD0xMTgmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D)

#### 2. Click on Charge Codes

![Step 2 screenshot](https://images.tango.us/workflows/995cb2f4-1690-433f-9d5b-41390cba5b37/steps/5a0dec40-bbad-4e78-bf4a-ec8fe7beb7d5/c63a5323-fbb4-48f1-8764-0f518f13d52a.png?crop=focalpoint\&fit=crop\&fp-x=0.6475\&fp-y=0.0446\&fp-z=2.5004\&w=1200\&border=2%2CF4F2F7\&border-radius=8%2C8%2C8%2C8\&border-radius-inner=8%2C8%2C8%2C8\&blend-align=bottom\&blend-mode=normal\&blend-x=0\&blend-w=1200\&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n\&mark-x=450\&mark-y=29\&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTglMkNGRjc0NDImdz0zMDAmaD0xMDgmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D)

#### 3. Click on Add Code

![Step 3 screenshot](https://images.tango.us/workflows/995cb2f4-1690-433f-9d5b-41390cba5b37/steps/587697ef-9eb4-41bf-9b21-1dfb74f8577d/b94e6cab-dfeb-40d3-af1c-aca5ffca6f25.png?crop=focalpoint\&fit=crop\&fp-x=0.5003\&fp-y=0.7113\&fp-z=2.2840\&w=1200\&border=2%2CF4F2F7\&border-radius=8%2C8%2C8%2C8\&border-radius-inner=8%2C8%2C8%2C8\&blend-align=bottom\&blend-mode=normal\&blend-x=0\&blend-w=1200\&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n\&mark-x=411\&mark-y=322\&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTglMkNGRjc0NDImdz0zNzgmaD05OCZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw)

#### 4. Enter your code or optionally import codes from a CSV

![Step 4 screenshot](https://images.tango.us/workflows/995cb2f4-1690-433f-9d5b-41390cba5b37/steps/02e5d7ae-8bd1-44a0-b67c-152b619e56bc/66e66da7-d5c1-4792-ade5-88ce3c2f5560.png?crop=focalpoint\&fit=crop\&fp-x=0.4838\&fp-y=0.4091\&fp-z=1.5189\&w=1200\&border=2%2CF4F2F7\&border-radius=8%2C8%2C8%2C8\&border-radius-inner=8%2C8%2C8%2C8\&blend-align=bottom\&blend-mode=normal\&blend-x=0\&blend-w=1200\&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n\&mark-x=273\&mark-y=351\&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTglMkNGRjc0NDImdz02NTMmaD00MCZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw)

#### 5. Click on Save Changes

![Step 5 screenshot](https://images.tango.us/workflows/995cb2f4-1690-433f-9d5b-41390cba5b37/steps/ebd83f19-fcbc-4201-955a-c1b4a7c35e12/cebe9813-654f-4529-9089-572d324c2bc4.png?crop=focalpoint\&fit=crop\&fp-x=0.6382\&fp-y=0.7113\&fp-z=2.3216\&w=1200\&border=2%2CF4F2F7\&border-radius=8%2C8%2C8%2C8\&border-radius-inner=8%2C8%2C8%2C8\&blend-align=bottom\&blend-mode=normal\&blend-x=0\&blend-w=1200\&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n\&mark-x=408\&mark-y=321\&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTglMkNGRjc0NDImdz0zODQmaD0xMDAmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D)
