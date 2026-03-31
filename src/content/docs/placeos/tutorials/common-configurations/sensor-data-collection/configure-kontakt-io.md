---
title: Configure Kontakt IO
description: A guide on configuring Kontakt IO Integration with PlaceOS
---

# Configure Kontakt IO

Kontakt IO offer a range of sensors that can be integrated with PlaceOS to:

* Manage Room Auto-Release (no-show bookings).
* Presence detection.
* People Counting.
* Desk Occupancy.

Prerequisites

* KontaktIO API Key.
* Created a Service System for your Org.
* Added and configured the PlaceOS Location Services driver to your services system.
* Added and configured the PlaceOS Area Manager driver to your services system.

## Add Required Service Drivers

The first step in configuring Kontakt IO integration is to add the required drivers.

These drivers should be added to your services or tracking system, typically denoted by \`\*ORG Name Services\`.

#### 1. Select your Services System

![Step 1 screenshot](https://images.tango.us/workflows/a2022209-99f7-49a3-93e4-c5a939e1753d/steps/ad3cbde8-7976-4992-8e14-b496a764ab52/5a85e6e3-fa93-46c7-aa20-bfd14db9e3d2.png?crop=focalpoint\&fit=crop\&fp-x=0.2688\&fp-y=0.2129\&fp-z=1.8371\&w=1200\&border=2%2CF4F2F7\&border-radius=8%2C8%2C8%2C8\&border-radius-inner=8%2C8%2C8%2C8\&blend-align=bottom\&blend-mode=normal\&blend-x=0\&blend-w=1200\&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n\&mark-x=323\&mark-y=250\&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz01MzkmaD0xMDkmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D)

#### 2. Click on  Modules

![Step 2 screenshot](https://images.tango.us/workflows/a2022209-99f7-49a3-93e4-c5a939e1753d/steps/eba58808-e51c-4caa-8375-a2ac056c247e/212eecf4-e191-4ba1-8bf6-d1830cf82211.png?crop=focalpoint\&fit=crop\&fp-x=0.5836\&fp-y=0.1017\&fp-z=2.4060\&w=1200\&border=2%2CF4F2F7\&border-radius=8%2C8%2C8%2C8\&border-radius-inner=8%2C8%2C8%2C8\&blend-align=bottom\&blend-mode=normal\&blend-x=0\&blend-w=1200\&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n\&mark-x=433\&mark-y=135\&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0zMzQmaD0xMTEmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D)

#### 3. Click on Add new

![Step 3 screenshot](https://images.tango.us/workflows/a2022209-99f7-49a3-93e4-c5a939e1753d/steps/0b25e61e-7231-4091-930e-ab301784f15b/2b9fefc2-592f-47c7-bfc7-54f2f6224c6e.png?crop=focalpoint\&fit=crop\&fp-x=0.9449\&fp-y=0.1674\&fp-z=2.8162\&w=1200\&border=2%2CF4F2F7\&border-radius=8%2C8%2C8%2C8\&border-radius-inner=8%2C8%2C8%2C8\&blend-align=bottom\&blend-mode=normal\&blend-x=0\&blend-w=1200\&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n\&mark-x=856\&mark-y=307\&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0zMTYmaD0xMjEmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D)

#### 4. Search for the Kontakt IO Cloud API module

![Step 4 screenshot](https://images.tango.us/workflows/a2022209-99f7-49a3-93e4-c5a939e1753d/steps/2636e624-4755-43f4-bb8d-f2ddd9f2b04f/4a3e3381-1a0b-483e-8b97-97fda2bfb787.png?crop=focalpoint\&fit=crop\&fp-x=0.5003\&fp-y=0.5466\&fp-z=1.4273\&w=1200\&border=2%2CF4F2F7\&border-radius=8%2C8%2C8%2C8\&border-radius-inner=8%2C8%2C8%2C8\&blend-align=bottom\&blend-mode=normal\&blend-x=0\&blend-w=1200\&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n\&mark-x=256\&mark-y=357\&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz02ODgmaD02NiZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw)

#### 5. Click on Save…

![Step 5 screenshot](https://images.tango.us/workflows/a2022209-99f7-49a3-93e4-c5a939e1753d/steps/ce2bcc11-12df-44b0-a5f9-fc86cd373e1e/6c058102-db21-4350-9e35-55f79752990c.png?crop=focalpoint\&fit=crop\&fp-x=0.5416\&fp-y=0.8549\&fp-z=2.6138\&w=1200\&border=2%2CF4F2F7\&border-radius=8%2C8%2C8%2C8\&border-radius-inner=8%2C8%2C8%2C8\&blend-align=bottom\&blend-mode=normal\&blend-x=0\&blend-w=1200\&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n\&mark-x=470\&mark-y=434\&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0yNTkmaD05OSZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw)

#### 6. Click on Add new

![Step 6 screenshot](https://images.tango.us/workflows/a2022209-99f7-49a3-93e4-c5a939e1753d/steps/db6859fb-18be-45e1-8a6d-dbccab038837/cd8a4205-fb39-4b67-844b-8acb552b5148.png?crop=focalpoint\&fit=crop\&fp-x=0.9449\&fp-y=0.1674\&fp-z=2.8162\&w=1200\&border=2%2CF4F2F7\&border-radius=8%2C8%2C8%2C8\&border-radius-inner=8%2C8%2C8%2C8\&blend-align=bottom\&blend-mode=normal\&blend-x=0\&blend-w=1200\&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n\&mark-x=856\&mark-y=307\&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0zMTYmaD0xMjEmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D)

#### 7. Find the KontaktIO Sensor Service module

![Step 7 screenshot](https://images.tango.us/workflows/a2022209-99f7-49a3-93e4-c5a939e1753d/steps/7c8957eb-cc85-4a79-adc1-54d3eb0825bd/9e670540-ab73-4958-b209-c814ad76c2ad.png?crop=focalpoint\&fit=crop\&fp-x=0.5003\&fp-y=0.5975\&fp-z=1.4273\&w=1200\&border=2%2CF4F2F7\&border-radius=8%2C8%2C8%2C8\&border-radius-inner=8%2C8%2C8%2C8\&blend-align=bottom\&blend-mode=normal\&blend-x=0\&blend-w=1200\&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n\&mark-x=256\&mark-y=357\&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz02ODgmaD02NiZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw)

#### 8. Click on Save…

![Step 8 screenshot](https://images.tango.us/workflows/a2022209-99f7-49a3-93e4-c5a939e1753d/steps/fd0e9264-2b06-4339-af36-c0b2938fa3b8/c38e0da4-d206-4779-bb93-aa3c15636398.png?crop=focalpoint\&fit=crop\&fp-x=0.5416\&fp-y=0.8549\&fp-z=2.6138\&w=1200\&border=2%2CF4F2F7\&border-radius=8%2C8%2C8%2C8\&border-radius-inner=8%2C8%2C8%2C8\&blend-align=bottom\&blend-mode=normal\&blend-x=0\&blend-w=1200\&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n\&mark-x=470\&mark-y=434\&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0yNTkmaD05OSZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw)

### Configure Cloud API Module

#### 1. From the services system, click on Kontakt IO Cloud API module

![Step 1 screenshot](https://images.tango.us/workflows/b9fbd3e0-385a-4a49-8708-87756300343a/steps/c7b659d0-10ca-45b5-8eb4-422b115ae111/4bffb177-d89f-4514-9e26-0d39e4d369bb.png?crop=focalpoint\&fit=crop\&fp-x=0.5482\&fp-y=0.8485\&fp-z=2.1787\&w=1200\&border=2%2CF4F2F7\&border-radius=8%2C8%2C8%2C8\&border-radius-inner=8%2C8%2C8%2C8\&blend-align=bottom\&blend-mode=normal\&blend-x=0\&blend-w=1200\&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n\&mark-x=392\&mark-y=494\&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz00MTYmaD01OCZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw)

#### 2. Click Encrypted tab

![Step 2 screenshot](https://images.tango.us/workflows/b9fbd3e0-385a-4a49-8708-87756300343a/steps/39f7db02-e36c-46fe-aed5-9990797912ea/9defccce-f3f8-4585-9d28-f6aaf0b70c99.png?crop=focalpoint\&fit=crop\&fp-x=0.9002\&fp-y=0.4078\&fp-z=2.7830\&w=1200\&border=2%2CF4F2F7\&border-radius=8%2C8%2C8%2C8\&border-radius-inner=8%2C8%2C8%2C8\&blend-align=bottom\&blend-mode=normal\&blend-x=0\&blend-w=1200\&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n\&mark-x=674\&mark-y=325\&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0zODYmaD0xMjkmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D)

#### 3. Enter your Kontakt IO API Key as `kio_api_key:`

![Step 3 screenshot](https://images.tango.us/workflows/b9fbd3e0-385a-4a49-8708-87756300343a/steps/90234de9-a71b-4d19-861a-db342fd714b5/346500cc-47c0-45db-948f-49f7eedb6334.png?crop=focalpoint\&fit=crop\&fp-x=0.5964\&fp-y=0.4449\&fp-z=3.0530\&w=1200\&border=2%2CF4F2F7\&border-radius=8%2C8%2C8%2C8\&border-radius-inner=8%2C8%2C8%2C8\&blend-align=bottom\&blend-mode=normal\&blend-x=0\&blend-w=1200\&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n\&mark-x=589\&mark-y=357\&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0yMyZoPTY2JmZpdD1jcm9wJmNvcm5lci1yYWRpdXM9MTA%3D)

#### 4. Click on Save \[S]

![Step 4 screenshot](https://images.tango.us/workflows/b9fbd3e0-385a-4a49-8708-87756300343a/steps/48d40dfc-c938-4cee-8f5c-c9e7b71e4946/64ec2ea9-79e1-431a-b739-c0bf4c2e7d1d.png?crop=focalpoint\&fit=crop\&fp-x=0.7488\&fp-y=0.3570\&fp-z=2.8676\&w=1200\&border=2%2CF4F2F7\&border-radius=8%2C8%2C8%2C8\&border-radius-inner=8%2C8%2C8%2C8\&blend-align=bottom\&blend-mode=normal\&blend-x=0\&blend-w=1200\&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n\&mark-x=491\&mark-y=335\&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0yMTgmaD0xMDkmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D)

#### 5. Start the Kontakt API Module

![Step 5 screenshot](https://images.tango.us/workflows/b9fbd3e0-385a-4a49-8708-87756300343a/steps/fe9dada9-f065-4f2e-8cb4-8c02f068817c/ee0c62d7-7c91-4c67-ab85-92b49edf9448.png?crop=focalpoint\&fit=crop\&fp-x=0.9377\&fp-y=0.6409\&fp-z=2.7830\&w=1200\&border=2%2CF4F2F7\&border-radius=8%2C8%2C8%2C8\&border-radius-inner=8%2C8%2C8%2C8\&blend-align=bottom\&blend-mode=normal\&blend-x=0\&blend-w=1200\&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n\&mark-x=791\&mark-y=325\&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz00MDImaD0xMjkmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D)

#### 6. Under Execute Command select KontaktIO 1

![Step 6 screenshot](https://images.tango.us/workflows/b9fbd3e0-385a-4a49-8708-87756300343a/steps/f578e9f3-c5fe-4c96-ab6d-58f7ce77687b/f27aa28f-a72b-4945-9e77-72bc61e2ab8e.png?crop=focalpoint\&fit=crop\&fp-x=0.6968\&fp-y=0.2701\&fp-z=1.6644\&w=1200\&border=2%2CF4F2F7\&border-radius=8%2C8%2C8%2C8\&border-radius-inner=8%2C8%2C8%2C8\&blend-align=bottom\&blend-mode=normal\&blend-x=0\&blend-w=1200\&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n\&mark-x=5\&mark-y=312\&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0xMTg5Jmg9NzcmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D)

#### 7. Select the Rooms Method

![Step 7 screenshot](https://images.tango.us/workflows/b9fbd3e0-385a-4a49-8708-87756300343a/steps/e7f95f51-0f9c-486c-897f-1ea622641403/4df3907c-85a6-4e23-ae39-e114edd9ee9c.png?crop=focalpoint\&fit=crop\&fp-x=0.6968\&fp-y=0.4735\&fp-z=1.6644\&w=1200\&border=2%2CF4F2F7\&border-radius=8%2C8%2C8%2C8\&border-radius-inner=8%2C8%2C8%2C8\&blend-align=bottom\&blend-mode=normal\&blend-x=0\&blend-w=1200\&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n\&mark-x=5\&mark-y=351\&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0xMTg5Jmg9NzcmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D)

#### 8. Click on Execute

![Step 8 screenshot](https://images.tango.us/workflows/b9fbd3e0-385a-4a49-8708-87756300343a/steps/e6d922c3-6282-4860-b289-3c724d8b2eee/b9978fa3-d7f7-4c05-87ae-097a79576a37.png?crop=focalpoint\&fit=crop\&fp-x=0.8445\&fp-y=0.3718\&fp-z=2.8676\&w=1200\&border=2%2CF4F2F7\&border-radius=8%2C8%2C8%2C8\&border-radius-inner=8%2C8%2C8%2C8\&blend-align=bottom\&blend-mode=normal\&blend-x=0\&blend-w=1200\&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n\&mark-x=158\&mark-y=335\&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0xMDE0Jmg9MTA5JmZpdD1jcm9wJmNvcm5lci1yYWRpdXM9MTA%3D)

#### 9. Inspect the results, this should contain information about your Kontakt environment confirming you are now connected to the API Service.

![Step 9 screenshot](https://images.tango.us/workflows/b9fbd3e0-385a-4a49-8708-87756300343a/steps/3bc1865a-a54e-4d2e-8658-e475f29a849a/7da2f6d1-2662-456a-a83c-b12105660f14.png?crop=focalpoint\&fit=crop\&fp-x=0.5000\&fp-y=0.5000\&w=1200\&border=2%2CF4F2F7\&border-radius=8%2C8%2C8%2C8\&border-radius-inner=8%2C8%2C8%2C8\&blend-align=bottom\&blend-mode=normal\&blend-x=0\&blend-w=1200\&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n)

### Configure Kontakt Sensor Service

#### 1. In your Services System, Execute command on KontaktIO 1 Module

![Step 1 screenshot](https://images.tango.us/workflows/c3361c46-c001-47dd-afc2-15566e40b505/steps/d5645e8c-5f8a-4adc-91de-824bf9d025ba/cdeb02ee-78bf-4920-94f4-b765bb4a5bd0.png?crop=focalpoint\&fit=crop\&fp-x=0.6968\&fp-y=0.2701\&fp-z=1.6644\&w=1200\&border=2%2CF4F2F7\&border-radius=8%2C8%2C8%2C8\&border-radius-inner=8%2C8%2C8%2C8\&blend-align=bottom\&blend-mode=normal\&blend-x=0\&blend-w=1200\&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n\&mark-x=5\&mark-y=312\&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0xMTg5Jmg9NzcmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D)

#### 2. Select campuses method

![Step 2 screenshot](https://images.tango.us/workflows/c3361c46-c001-47dd-afc2-15566e40b505/steps/f555ae4a-c823-42b2-9e36-7abba408348d/f46e8465-2e55-4075-ae6a-0d75d561800f.png?crop=focalpoint\&fit=crop\&fp-x=0.6968\&fp-y=0.4227\&fp-z=1.6644\&w=1200\&border=2%2CF4F2F7\&border-radius=8%2C8%2C8%2C8\&border-radius-inner=8%2C8%2C8%2C8\&blend-align=bottom\&blend-mode=normal\&blend-x=0\&blend-w=1200\&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n\&mark-x=5\&mark-y=351\&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0xMTg5Jmg9NzcmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D)

#### 3. Click on Execute

![Step 3 screenshot](https://images.tango.us/workflows/c3361c46-c001-47dd-afc2-15566e40b505/steps/0fbbff30-6255-4bc9-8d0b-9bb236249df1/b127fbf6-d998-4d76-b5fd-719892e6624b.png?crop=focalpoint\&fit=crop\&fp-x=0.8445\&fp-y=0.3718\&fp-z=2.8676\&w=1200\&border=2%2CF4F2F7\&border-radius=8%2C8%2C8%2C8\&border-radius-inner=8%2C8%2C8%2C8\&blend-align=bottom\&blend-mode=normal\&blend-x=0\&blend-w=1200\&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n\&mark-x=158\&mark-y=335\&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0xMDE0Jmg9MTA5JmZpdD1jcm9wJmNvcm5lci1yYWRpdXM9MTA%3D)

#### 4. Click on View

![Step 4 screenshot](https://images.tango.us/workflows/c3361c46-c001-47dd-afc2-15566e40b505/steps/426cf5d5-6639-4c0a-add9-157d029065e3/f21fe1e8-6a7a-45aa-ad15-46b5b2a8ed13.png?crop=focalpoint\&fit=crop\&fp-x=0.5912\&fp-y=0.9386\&fp-z=2.8721\&w=1200\&border=2%2CF4F2F7\&border-radius=8%2C8%2C8%2C8\&border-radius-inner=8%2C8%2C8%2C8\&blend-align=bottom\&blend-mode=normal\&blend-x=0\&blend-w=1200\&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n\&mark-x=517\&mark-y=590\&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0xNjYmaD0xMDQmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D)

#### 5. Copy this data as you will require it in the next step.

![Step 5 screenshot](https://images.tango.us/workflows/c3361c46-c001-47dd-afc2-15566e40b505/steps/556f87b3-0e58-4809-a5ec-575c3dc82887/4f919485-91a2-461a-986a-20d85605c95f.png?crop=focalpoint\&fit=crop\&fp-x=0.5041\&fp-y=0.4243\&fp-z=2.1722\&w=1200\&border=2%2CF4F2F7\&border-radius=8%2C8%2C8%2C8\&border-radius-inner=8%2C8%2C8%2C8\&blend-align=bottom\&blend-mode=normal\&blend-x=0\&blend-w=1200\&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n\&mark-x=391\&mark-y=371\&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz00MTgmaD0zOCZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw)

#### 6. Click on close

![Step 6 screenshot](https://images.tango.us/workflows/c3361c46-c001-47dd-afc2-15566e40b505/steps/6747c41f-ebb5-4495-bee9-c075e0237e45/ce9e021f-13f6-483f-9cec-ff5e9c348e55.png?crop=focalpoint\&fit=crop\&fp-x=0.7398\&fp-y=0.2288\&fp-z=2.8502\&w=1200\&border=2%2CF4F2F7\&border-radius=8%2C8%2C8%2C8\&border-radius-inner=8%2C8%2C8%2C8\&blend-align=bottom\&blend-mode=normal\&blend-x=0\&blend-w=1200\&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n\&mark-x=544\&mark-y=333\&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0xMTMmaD0xMTMmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D)

#### 7. On the services system, click on KontaktIO Sensor Service module

![Step 7 screenshot](https://images.tango.us/workflows/c3361c46-c001-47dd-afc2-15566e40b505/steps/68b6ce43-4487-4aff-a3a0-983055a2f203/557b1970-2bac-4179-9b53-6fbeca120c6a.png?crop=focalpoint\&fit=crop\&fp-x=0.5482\&fp-y=0.8358\&fp-z=2.1787\&w=1200\&border=2%2CF4F2F7\&border-radius=8%2C8%2C8%2C8\&border-radius-inner=8%2C8%2C8%2C8\&blend-align=bottom\&blend-mode=normal\&blend-x=0\&blend-w=1200\&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n\&mark-x=392\&mark-y=472\&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz00MTYmaD01OCZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw)

#### 8. Click on Unecrypted

![Step 8 screenshot](https://images.tango.us/workflows/c3361c46-c001-47dd-afc2-15566e40b505/steps/9a0b3513-7178-43ea-a7c9-9141096e6645/c214ff07-c8ce-47f7-a89a-a842b8f839d2.png?crop=focalpoint\&fit=crop\&fp-x=0.5699\&fp-y=0.4396\&fp-z=2.4060\&w=1200\&border=2%2CF4F2F7\&border-radius=8%2C8%2C8%2C8\&border-radius-inner=8%2C8%2C8%2C8\&blend-align=bottom\&blend-mode=normal\&blend-x=0\&blend-w=1200\&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n\&mark-x=433\&mark-y=334\&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0zMzQmaD0xMTEmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D)

#### 9. under `floor_mappings`: insert the level id from the Kontakt IO data copied in Step 5. You will need to repeat this metadata key for each floor.

![Step 9 screenshot](https://images.tango.us/workflows/c3361c46-c001-47dd-afc2-15566e40b505/steps/a4ecac7a-d48a-41c1-8684-f5988e0a4ee5/f2113988-8375-4195-b54d-79989aea3578.png?crop=focalpoint\&fit=crop\&fp-x=0.6844\&fp-y=0.7373\&fp-z=1.8050\&w=1200\&border=2%2CF4F2F7\&border-radius=8%2C8%2C8%2C8\&border-radius-inner=8%2C8%2C8%2C8\&blend-align=bottom\&blend-mode=normal\&blend-x=0\&blend-w=1200\&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n\&mark-x=83\&mark-y=24\&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0xMDMzJmg9NzcyJmZpdD1jcm9wJmNvcm5lci1yYWRpdXM9MTA%3D)

#### 10. Enter your PlaceOS Building Zone ID

![Step 10 screenshot](https://images.tango.us/workflows/c3361c46-c001-47dd-afc2-15566e40b505/steps/6f2e5e2f-2247-4ca9-8dcb-bbe4d63ad997/1cf1defb-4241-49b9-ac1d-879dbc067fc5.png?crop=focalpoint\&fit=crop\&fp-x=0.6844\&fp-y=0.7373\&fp-z=1.8050\&w=1200\&border=2%2CF4F2F7\&border-radius=8%2C8%2C8%2C8\&border-radius-inner=8%2C8%2C8%2C8\&blend-align=bottom\&blend-mode=normal\&blend-x=0\&blend-w=1200\&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n\&mark-x=83\&mark-y=24\&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0xMDMzJmg9NzcyJmZpdD1jcm9wJmNvcm5lci1yYWRpdXM9MTA%3D)

#### 11. Enter your PlaceOS Level Zone ID

![Step 11 screenshot](https://images.tango.us/workflows/c3361c46-c001-47dd-afc2-15566e40b505/steps/a9457a2a-5750-4ff2-96a8-f48f76fc94ad/c0be1f0c-a3e1-42cd-9057-6748273e2462.png?crop=focalpoint\&fit=crop\&fp-x=0.6844\&fp-y=0.7373\&fp-z=1.8050\&w=1200\&border=2%2CF4F2F7\&border-radius=8%2C8%2C8%2C8\&border-radius-inner=8%2C8%2C8%2C8\&blend-align=bottom\&blend-mode=normal\&blend-x=0\&blend-w=1200\&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n\&mark-x=83\&mark-y=24\&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0xMDMzJmg9NzcyJmZpdD1jcm9wJmNvcm5lci1yYWRpdXM9MTA%3D)

#### 12. Enter a friendly name for the Level

![Step 12 screenshot](https://images.tango.us/workflows/c3361c46-c001-47dd-afc2-15566e40b505/steps/6c79a59d-4643-4223-9304-68039b25175c/601215d2-8471-4c56-afa1-b07bd3b102d8.png?crop=focalpoint\&fit=crop\&fp-x=0.6844\&fp-y=0.7373\&fp-z=1.8050\&w=1200\&border=2%2CF4F2F7\&border-radius=8%2C8%2C8%2C8\&border-radius-inner=8%2C8%2C8%2C8\&blend-align=bottom\&blend-mode=normal\&blend-x=0\&blend-w=1200\&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n\&mark-x=83\&mark-y=24\&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0xMDMzJmg9NzcyJmZpdD1jcm9wJmNvcm5lci1yYWRpdXM9MTA%3D)

## Add Room Sensor Drivers

Each room you would like to leverage occupancy and auto-release functionality will require the Kontakt IO Room Sensor Driver.

#### 1. Click on Systems

![Step 1 screenshot](https://images.tango.us/workflows/d523ec83-bd72-449f-8133-66269dbbdd92/steps/d25ddc66-ffb6-4cdd-ae91-6b7a17b30862/1627ff16-9055-4b00-a482-b98b0d7b18db.png?crop=focalpoint\&fit=crop\&fp-x=0.0716\&fp-y=0.0890\&fp-z=2.3439\&w=1200\&border=2%2CF4F2F7\&border-radius=8%2C8%2C8%2C8\&border-radius-inner=8%2C8%2C8%2C8\&blend-align=bottom\&blend-mode=normal\&blend-x=0\&blend-w=1200\&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n\&mark-x=23\&mark-y=116\&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0zNTYmaD05MyZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw)

#### 2. Select a Bookable Room system

![Step 2 screenshot](https://images.tango.us/workflows/d523ec83-bd72-449f-8133-66269dbbdd92/steps/cfd91e1a-de97-494f-8ebd-a59531fdba13/380ed5ae-a1ca-488b-9b6e-5083a11d626c.png?crop=focalpoint\&fit=crop\&fp-x=0.2688\&fp-y=0.5953\&fp-z=1.8371\&w=1200\&border=2%2CF4F2F7\&border-radius=8%2C8%2C8%2C8\&border-radius-inner=8%2C8%2C8%2C8\&blend-align=bottom\&blend-mode=normal\&blend-x=0\&blend-w=1200\&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n\&mark-x=323\&mark-y=335\&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz01MzkmaD0xMDkmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D)

#### 3. Click on Modules

![Step 3 screenshot](https://images.tango.us/workflows/d523ec83-bd72-449f-8133-66269dbbdd92/steps/c68bba96-301f-4628-b626-73ab892259d7/1bb8dcb9-a808-4142-bf5f-eb2a7acd68fb.png?crop=focalpoint\&fit=crop\&fp-x=0.5836\&fp-y=0.1017\&fp-z=2.4060\&w=1200\&border=2%2CF4F2F7\&border-radius=8%2C8%2C8%2C8\&border-radius-inner=8%2C8%2C8%2C8\&blend-align=bottom\&blend-mode=normal\&blend-x=0\&blend-w=1200\&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n\&mark-x=433\&mark-y=135\&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0zMzQmaD0xMTEmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D)

#### 4. Click on Add new

![Step 4 screenshot](https://images.tango.us/workflows/d523ec83-bd72-449f-8133-66269dbbdd92/steps/3e340934-e9b8-43c9-86b3-ee081f40f5c8/b5bf37c3-abbe-4ecd-b15a-45bb1c8b208c.png?crop=focalpoint\&fit=crop\&fp-x=0.9449\&fp-y=0.1674\&fp-z=2.8162\&w=1200\&border=2%2CF4F2F7\&border-radius=8%2C8%2C8%2C8\&border-radius-inner=8%2C8%2C8%2C8\&blend-align=bottom\&blend-mode=normal\&blend-x=0\&blend-w=1200\&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n\&mark-x=856\&mark-y=307\&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0zMTYmaD0xMjEmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D)

#### 5. Search for the KontaktIO Room Sensor Driver

![Step 5 screenshot](https://images.tango.us/workflows/d523ec83-bd72-449f-8133-66269dbbdd92/steps/6842fa33-8509-477f-9f76-089c0fdac884/7d1b729e-2aac-4882-8d24-1ecc1470a8b5.png?crop=focalpoint\&fit=crop\&fp-x=0.5003\&fp-y=0.6483\&fp-z=1.4273\&w=1200\&border=2%2CF4F2F7\&border-radius=8%2C8%2C8%2C8\&border-radius-inner=8%2C8%2C8%2C8\&blend-align=bottom\&blend-mode=normal\&blend-x=0\&blend-w=1200\&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n\&mark-x=256\&mark-y=357\&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz02ODgmaD02NiZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw)

#### 6. Click on Save…

![Step 6 screenshot](https://images.tango.us/workflows/d523ec83-bd72-449f-8133-66269dbbdd92/steps/2ad58642-db0b-4561-b4b3-8f4b70a87fd5/492cffa2-96a4-468e-a369-af53265fce9b.png?crop=focalpoint\&fit=crop\&fp-x=0.5416\&fp-y=0.8549\&fp-z=2.6138\&w=1200\&border=2%2CF4F2F7\&border-radius=8%2C8%2C8%2C8\&border-radius-inner=8%2C8%2C8%2C8\&blend-align=bottom\&blend-mode=normal\&blend-x=0\&blend-w=1200\&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n\&mark-x=470\&mark-y=434\&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0yNTkmaD05OSZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw)

#### 7. Start the Module

![Step 7 screenshot](https://images.tango.us/workflows/d523ec83-bd72-449f-8133-66269dbbdd92/steps/45cc7178-ec1b-475b-93cb-4d07001edb38/a8eac3ae-5de2-4eff-8bcf-793e53f88bb5.png?crop=focalpoint\&fit=crop\&fp-x=0.9377\&fp-y=0.7383\&fp-z=3.4327\&w=1200\&border=2%2CF4F2F7\&border-radius=8%2C8%2C8%2C8\&border-radius-inner=8%2C8%2C8%2C8\&blend-align=bottom\&blend-mode=normal\&blend-x=0\&blend-w=1200\&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n\&mark-x=695\&mark-y=310\&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz00OTYmaD0xNTkmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D)

#### 8. Navigate to the About tab

![Step 8 screenshot](https://images.tango.us/workflows/d523ec83-bd72-449f-8133-66269dbbdd92/steps/754e7a0a-fd12-43c7-b8ff-a5bd37fb6c53/fe010d7a-2ca7-423e-8625-dc4e819b8765.png?crop=focalpoint\&fit=crop\&fp-x=0.4735\&fp-y=0.1017\&fp-z=2.4060\&w=1200\&border=2%2CF4F2F7\&border-radius=8%2C8%2C8%2C8\&border-radius-inner=8%2C8%2C8%2C8\&blend-align=bottom\&blend-mode=normal\&blend-x=0\&blend-w=1200\&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n\&mark-x=433\&mark-y=135\&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0zMzQmaD0xMTEmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D)

#### 9. Add the `space_ref_id` element.

The `space_ref_id` element can be found by executing the rooms method on the Kontakt IO API Module in your services system. As this is a string, ensure it is wrapped in quotation marks.&#x20;

<figure><img src="https://images.tango.us/workflows/d523ec83-bd72-449f-8133-66269dbbdd92/steps/6ea10c72-8697-4a17-8fa9-0552a2b7cda5/a5e681ed-b9c3-4614-a9ae-3670ab9e1141.png?crop=focalpoint&#x26;fit=crop&#x26;fp-x=0.6844&#x26;fp-y=0.8305&#x26;fp-z=1.8050&#x26;w=1200&#x26;border=2%2CF4F2F7&#x26;border-radius=8%2C8%2C8%2C8&#x26;border-radius-inner=8%2C8%2C8%2C8&#x26;blend-align=bottom&#x26;blend-mode=normal&#x26;blend-x=0&#x26;blend-w=1200&#x26;blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&#x26;mark-x=83&#x26;mark-y=155&#x26;m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0xMDMzJmg9NzcyJmZpdD1jcm9wJmNvcm5lci1yYWRpdXM9MTA%3D" alt=""><figcaption></figcaption></figure>

## Configure Auto Release Rooms

We need to modify a couple of settings to ensure PlaceOS can release booked rooms when no presence is detected via the Kontakt IO Service.

Settings that are required:

<table><thead><tr><th>Setting</th><th width="113">Value</th><th>Description</th><th>Location</th></tr></thead><tbody><tr><td><code>pending_period</code></td><td><code>int</code> </td><td>Number of minutes the room will remain pending until the reservation is cancelled due to no presence.</td><td>Zone: Org, Building, Level</td></tr><tr><td><code>penidng_before</code></td><td><code>int</code></td><td>The number of minutes prior to a scheduled meeting it will show in the Pending state.</td><td>Zone: Org, Building, Level</td></tr><tr><td><code>disable_end_meeting</code></td><td><code>boolean</code></td><td>Allows PlaceOS to cancel meetings where no presence is detected.</td><td>Zone: Org, Building, Level</td></tr></tbody></table>
