---
title: Adding Drivers & Modules
description: Steps and Advice on using Drivers and Modules with PlaceOS.
---

# Adding Drivers & Modules

PlaceOS uses drivers to communicate with third party systems and integrations.

A driver should be considered the parent and only needs to be loaded once.&#x20;

A driver should not have any specific configuration attached, this will be done once the driver is instantiated as a module in a system.

<!-- TODO: Add diagram showing the relationship between drivers and modules -->

For More Information you can read the key concepts of [Drivers](../../overview/key-concepts/drivers.md) and [Modules](../../overview/key-concepts/modules.md).

## How to add a Driver

1\. Navigate to PlaceOS Backoffice

2\. Click on Drivers

![Step 2 screenshot](https://images.tango.us/workflows/0db975fc-400c-4523-bc4f-9b6592b3f0e9/steps/6d39977a-b142-4b7e-a109-ca13ad9ae401/1d93e225-eeef-4bc5-97c8-31f4b2fd26a2.png?crop=focalpoint\&fit=crop\&fp-x=0.0658\&fp-y=0.2676\&fp-z=2.4016\&w=1200\&blend-align=bottom\&blend-mode=normal\&blend-x=800\&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmsucG5n)

3\. Click Add New Driver

![Step 3 screenshot](https://images.tango.us/workflows/0db975fc-400c-4523-bc4f-9b6592b3f0e9/steps/6b6b1ff7-9b70-4aae-8dc6-9c128ef68204/51827ed4-643d-4031-bf89-1b0e76d0817d.png?crop=focalpoint\&fit=crop\&fp-x=0.5000\&fp-y=0.5000\&w=1200\&blend-align=bottom\&blend-mode=normal\&blend-x=800\&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmsucG5n\&mark-x=833\&mark-y=1187\&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTglMkNGRjc0NDImdz01NiZoPTU2JmZpdD1jcm9wJmNvcm5lci1yYWRpdXM9MTA%3D)

4\. Select the Repository you want to add the driver from

In most cases this will be preconfigured as the PlaceOS Drivers Repo. ![Step 4 screenshot](https://images.tango.us/workflows/0db975fc-400c-4523-bc4f-9b6592b3f0e9/steps/7c58f212-a6d7-4c91-b2cd-545a412d16a4/b38d2ddd-6197-4c70-815e-b8ff4e221957.png?crop=focalpoint\&fit=crop\&fp-x=0.5003\&fp-y=0.5493\&fp-z=1.4939\&w=1200\&blend-align=bottom\&blend-mode=normal\&blend-x=800\&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmsucG5n)

5\. Search for and select the required driver

![Step 5 screenshot](https://images.tango.us/workflows/0db975fc-400c-4523-bc4f-9b6592b3f0e9/steps/35f291ce-50b1-43ca-b21c-38af714a0599/94327003-2031-44fd-b14b-0edb94a702b2.png?crop=focalpoint\&fit=crop\&fp-x=0.5003\&fp-y=0.7207\&fp-z=1.4939\&w=1200\&blend-align=bottom\&blend-mode=normal\&blend-x=800\&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmsucG5n)

6\. Select a driver commit

It is recommended to select the most recent commit \


<figure><img src="https://images.tango.us/workflows/0db975fc-400c-4523-bc4f-9b6592b3f0e9/steps/bf560995-4cd0-425c-858c-b43d4d97947a/8335fd1a-a57e-4755-a11c-6a66ad769ce6.png?crop=focalpoint&#x26;fit=crop&#x26;fp-x=0.5003&#x26;fp-y=0.6667&#x26;fp-z=1.4939&#x26;w=1200&#x26;blend-align=bottom&#x26;blend-mode=normal&#x26;blend-x=800&#x26;blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmsucG5n" alt=""><figcaption></figcaption></figure>

7\. Click on Save…

![Step 7 screenshot](https://images.tango.us/workflows/0db975fc-400c-4523-bc4f-9b6592b3f0e9/steps/4d260850-41cf-48e6-9b60-067db8367d68/f3c6ce0a-083d-4d19-a6e9-d0cda636ddcf.png?crop=focalpoint\&fit=crop\&fp-x=0.5383\&fp-y=0.8580\&fp-z=2.6603\&w=1200\&blend-align=bottom\&blend-mode=normal\&blend-x=800\&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmsucG5n)

## How to add a New Module

A module is an instantiation of a driver for use with a specific system, or collection of systems.

For modules that will be added to multiple systems, it is recommended to create a parent system that contains all the necessary service modules.&#x20;

Specific configuration of the driver such as API Key's and other relevant configuration will be applied to the module.&#x20;

1\. Navigate to PlaceOS Backoffice

2\. Click on Systems

![Step 2 screenshot](https://images.tango.us/workflows/b9212ed6-0904-4a81-84b6-7be1cf5031ed/steps/3f4da07f-474a-4724-bdce-3757115043dd/61f34fa9-9ae3-4d7c-a6c0-38e869f319ed.png?crop=focalpoint\&fit=crop\&fp-x=0.0528\&fp-y=0.0986\&fp-z=2.8993\&w=1200\&blend-align=bottom\&blend-mode=normal\&blend-x=800\&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmsucG5n)

3\. Select your System

If configuring a global module, add it to your services system so it can easily be added to other room systems. \


<figure><img src="https://images.tango.us/workflows/b9212ed6-0904-4a81-84b6-7be1cf5031ed/steps/723c9829-b032-4140-8b51-fec82163d2d7/f9e6b1ac-329d-4822-8c1d-339796825737.png?crop=focalpoint&#x26;fit=crop&#x26;fp-x=0.2536&#x26;fp-y=0.8263&#x26;fp-z=1.8593&#x26;w=1200&#x26;blend-align=bottom&#x26;blend-mode=normal&#x26;blend-x=800&#x26;blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmsucG5n" alt=""><figcaption></figcaption></figure>

4\. Click the Modules Tab

![Step 4 screenshot](https://images.tango.us/workflows/b9212ed6-0904-4a81-84b6-7be1cf5031ed/steps/6f920940-35c8-4d61-b067-182138660542/c9597895-ee0c-4fb7-b42a-9b3d8c8e7f41.png?crop=focalpoint\&fit=crop\&fp-x=0.5269\&fp-y=0.1127\&fp-z=2.4615\&w=1200\&blend-align=bottom\&blend-mode=normal\&blend-x=800\&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmsucG5n)

5\. Click on Add new

![Step 5 screenshot](https://images.tango.us/workflows/b9212ed6-0904-4a81-84b6-7be1cf5031ed/steps/4c497785-a883-4596-a419-d36c255d87be/538f4d82-43b3-4f71-b216-6cc58dd2ffb2.png?crop=focalpoint\&fit=crop\&fp-x=0.9494\&fp-y=0.1854\&fp-z=2.7698\&w=1200\&blend-align=bottom\&blend-mode=normal\&blend-x=800\&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmsucG5n)

6\. Select the Driver you want to add from the List

![Step 6 screenshot](https://images.tango.us/workflows/b9212ed6-0904-4a81-84b6-7be1cf5031ed/steps/8b751282-9c54-49cf-8625-6d1b96b33b31/d73b8f1d-437a-4653-bbba-e68490425df7.png?crop=focalpoint\&fit=crop\&fp-x=0.5003\&fp-y=0.5516\&fp-z=1.4939\&w=1200\&blend-align=bottom\&blend-mode=normal\&blend-x=800\&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmsucG5n)

7\. Click on Save…

![Step 7 screenshot](https://images.tango.us/workflows/b9212ed6-0904-4a81-84b6-7be1cf5031ed/steps/41b6145f-8f7c-46c8-93d7-33a296b20088/e5bd10ab-d22c-402d-a871-3c57e727fa73.png?crop=focalpoint\&fit=crop\&fp-x=0.5383\&fp-y=0.8580\&fp-z=2.6603\&w=1200\&blend-align=bottom\&blend-mode=normal\&blend-x=800\&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmsucG5n)

8\. Click on the new module to configure

![Step 8 screenshot](https://images.tango.us/workflows/b9212ed6-0904-4a81-84b6-7be1cf5031ed/steps/0209f4ca-6979-4602-b122-66dba14451f7/4d318492-a1af-4f40-8b33-c55195674ee5.png?crop=focalpoint\&fit=crop\&fp-x=0.5171\&fp-y=0.5129\&fp-z=2.2416\&w=1200\&blend-align=bottom\&blend-mode=normal\&blend-x=800\&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmsucG5n)

9\. Select the appropriate tab for your configuration

![Step 9 screenshot](https://images.tango.us/workflows/b9212ed6-0904-4a81-84b6-7be1cf5031ed/steps/1d06795d-2344-4db6-af7a-02f294945b59/beea2ed9-d360-4a31-92a2-b6bb7e7bfe12.png?crop=focalpoint\&fit=crop\&fp-x=0.5370\&fp-y=0.4519\&fp-z=2.4615\&w=1200\&blend-align=bottom\&blend-mode=normal\&blend-x=800\&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmsucG5n)

10\. Enter the required configuration

This might include API keys and other relevant information for that particular driver&#x20;

<figure><img src="https://images.tango.us/workflows/b9212ed6-0904-4a81-84b6-7be1cf5031ed/steps/aefa7425-2790-4876-856a-00957e35d44d/669a1014-d502-416e-a4ea-8b9160d676bb.png?crop=focalpoint&#x26;fit=crop&#x26;fp-x=0.5335&#x26;fp-y=0.5141&#x26;fp-z=3.0256&#x26;w=1200&#x26;blend-align=bottom&#x26;blend-mode=normal&#x26;blend-x=800&#x26;blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmsucG5n" alt=""><figcaption></figcaption></figure>

11\. Click on Save

![Step 11 screenshot](https://images.tango.us/workflows/b9212ed6-0904-4a81-84b6-7be1cf5031ed/steps/c3b89828-f8a5-4d01-9d8b-8665c95f6b25/4cad8b10-397d-45c1-ab28-58b985b38ee3.png?crop=focalpoint\&fit=crop\&fp-x=0.7356\&fp-y=0.3955\&fp-z=2.8249\&w=1200\&blend-align=bottom\&blend-mode=normal\&blend-x=800\&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmsucG5n)

## Add an Existing Module to a System

There are specific applications where you would instantiate a driver in the Services system then re-use this module in additional systems.

Most common use cases for this method is creating bookable room systems, where each room system requires the driver to integrate with the Graph API (in the case of Microsoft 365) or where you have rooms with AV Control.

For the purposes of this demo, we will create a new bookable room system and add the existing calendar module from the tracking system.

1\. Navigate to PlaceOS Backoffice

2\. Click on Systems

![Step 2 screenshot](https://images.tango.us/workflows/02ee646d-6675-4f8f-8bf5-367577ed7860/steps/224f7244-b595-499c-91a3-d14f4bade413/358768ce-db51-4a6c-b076-0e2e9450f6a1.png?crop=focalpoint\&fit=crop\&fp-x=0.0658\&fp-y=0.0986\&fp-z=2.4016\&w=1200\&blend-align=bottom\&blend-mode=normal\&blend-x=800\&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmsucG5n)

3\. Click New System

![Step 3 screenshot](https://images.tango.us/workflows/02ee646d-6675-4f8f-8bf5-367577ed7860/steps/56b3013f-44ce-43ac-8933-6cf30ebbcac6/c3063c12-08d0-4bb0-9fa9-a68a404024d2.png?crop=focalpoint\&fit=crop\&fp-x=0.5000\&fp-y=0.5000\&w=1200\&blend-align=bottom\&blend-mode=normal\&blend-x=800\&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmsucG5n\&mark-x=854\&mark-y=1217\&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTglMkNGRjc0NDImdz01OCZoPTU4JmZpdD1jcm9wJmNvcm5lci1yYWRpdXM9MTA%3D)

4\. Select the required Zone

![Step 4 screenshot](https://images.tango.us/workflows/02ee646d-6675-4f8f-8bf5-367577ed7860/steps/32af6a24-4dba-4a36-9209-21c8c3ddce71/dbf270bb-bc1a-49ca-ba3b-eedeaf099f52.png?crop=focalpoint\&fit=crop\&fp-x=0.5003\&fp-y=0.5552\&fp-z=1.4939\&w=1200\&blend-align=bottom\&blend-mode=normal\&blend-x=800\&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmsucG5n)

5\. Enter a System Name

![Step 5 screenshot](https://images.tango.us/workflows/02ee646d-6675-4f8f-8bf5-367577ed7860/steps/a2c072ba-903b-4142-87a4-b12b0c2e7ee7/8d47a0ef-42ce-4c05-be05-fdad3b26c810.png?crop=focalpoint\&fit=crop\&fp-x=0.4080\&fp-y=0.3862\&fp-z=2.1299\&w=1200\&blend-align=bottom\&blend-mode=normal\&blend-x=800\&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmsucG5n)

6\. Enter the Resource Address

![Step 6 screenshot](https://images.tango.us/workflows/02ee646d-6675-4f8f-8bf5-367577ed7860/steps/0b397a8f-92cb-4923-91de-3e6c1ea79146/1ebb187b-b393-4b11-b7e2-5c235b9d2c98.png?crop=focalpoint\&fit=crop\&fp-x=0.5927\&fp-y=0.3862\&fp-z=2.1299\&w=1200\&blend-align=bottom\&blend-mode=normal\&blend-x=800\&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmsucG5n)

7\. Enter a Display Name

![Step 7 screenshot](https://images.tango.us/workflows/02ee646d-6675-4f8f-8bf5-367577ed7860/steps/289abce9-c49f-4a9d-9717-ce7c498d65b3/83646c61-2d93-4578-b53f-e628080a3ea3.png?crop=focalpoint\&fit=crop\&fp-x=0.4080\&fp-y=0.5176\&fp-z=2.1299\&w=1200\&blend-align=bottom\&blend-mode=normal\&blend-x=800\&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmsucG5n)

8\. Click on Save…

![Step 8 screenshot](https://images.tango.us/workflows/02ee646d-6675-4f8f-8bf5-367577ed7860/steps/c464807c-c61c-477a-b8d1-55788b7278b5/96e9e575-1236-446a-844f-3c61a44ef699.png?crop=focalpoint\&fit=crop\&fp-x=0.5383\&fp-y=0.8580\&fp-z=2.6603\&w=1200\&blend-align=bottom\&blend-mode=normal\&blend-x=800\&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmsucG5n)

9\. Click Modules

![Step 9 screenshot](https://images.tango.us/workflows/02ee646d-6675-4f8f-8bf5-367577ed7860/steps/4cfaf35c-bd77-45e5-b597-88c295fd15f3/15b4908d-8f4a-4d7c-9237-86f4a23987ea.png?crop=focalpoint\&fit=crop\&fp-x=0.5269\&fp-y=0.1127\&fp-z=2.4615\&w=1200\&blend-align=bottom\&blend-mode=normal\&blend-x=800\&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmsucG5n)

10\. Select the Existing Module from the dropdown menu

![Step 10 screenshot](https://images.tango.us/workflows/02ee646d-6675-4f8f-8bf5-367577ed7860/steps/9d859b71-5c75-475a-a04b-5d458dd0539f/4e06aa02-7dc2-4b67-940a-a12357f2d84e.png?crop=focalpoint\&fit=crop\&fp-x=0.6015\&fp-y=0.3028\&fp-z=1.6199\&w=1200\&blend-align=bottom\&blend-mode=normal\&blend-x=800\&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmsucG5n)

11\. Click on Add existing

![Step 11 screenshot](https://images.tango.us/workflows/02ee646d-6675-4f8f-8bf5-367577ed7860/steps/79d11729-a973-4bf5-8f99-12a1d865daf1/5ab63f58-cb56-4aff-8965-3cd8d94928cf.png?crop=focalpoint\&fit=crop\&fp-x=0.8634\&fp-y=0.1854\&fp-z=2.7698\&w=1200\&blend-align=bottom\&blend-mode=normal\&blend-x=800\&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmsucG5n)

12\. Your existing module will now be added to the new system

![Step 12 screenshot](https://images.tango.us/workflows/02ee646d-6675-4f8f-8bf5-367577ed7860/steps/4b596c58-987a-46ef-841b-5a1b0fc3a09d/7ffd7844-6a17-44f0-8e9f-c84236a6f96c.png?crop=focalpoint\&fit=crop\&fp-x=0.6888\&fp-y=0.4865\&fp-z=1.6199\&w=1200\&blend-align=bottom\&blend-mode=normal\&blend-x=800\&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmsucG5n)

***

