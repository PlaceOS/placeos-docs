---
description: >-
  For use when testing, improving or experimenting with PlaceOS on a local
  machine. Use it for driver, frontend, api and infra development.
---

# Setup a dev environment

### Prerequisites

* WSL2 if running Windows
* [GIT installed](https://git-scm.com)
* [Docker installed](https://docs.docker.com/get-docker/)
* [Crystal lang](https://crystal-lang.org/install/)

### Configure the partner environment

If you are only looking to develop drivers then you probably don't need the full partner environment and can skip to the next section.\
Have a look at the [readme on the repository](https://github.com/place-labs/partner-environment) then run following commands.

1. `git clone` [`https://github.com/place-labs/partner-environment`](https://github.com/place-labs/partner-environment)``
2. `cd partner-environment`
3. `./placeos start`
4. note the credentials output by the CLI

You can now browse to [https://localhost:8443/backoffice](https://localhost:8443/backoffice) which is full functional instance of PlaceOS running on your machine.

This is good for testing drivers end to end or connecting to real devices or services.

### Developing Drivers

Driver development can be performed with a [lightweight spec runner](https://github.com/PlaceOS/drivers#development)

1. `git clone` [`https://github.com/PlaceOS/drivers`](https://github.com/PlaceOS/drivers#development)``
2. `cd drivers`
3. `./harness up` (starts the testing UI)
4. `./harness down` (to terminate the docker containers)

Once up you can browse to [http://localhost:8085/](http://localhost:8085) to start running specs against drivers.

![Developing drivers](<../.gitbook/assets/image (9) (1).png>)

#### Private / 3rd party repositories

By default the spec runner is looking at public PlaceOS drivers (Feel free to contribute).\
However you might want to develop some private drivers for a client or manage your own repository. To do this:

1. In the PlaceOS/drivers repo there is a `repositories` folder.\
   Clone any 3rd party driver repository in this location.
2. If you would like to create a new repo for a project, create a fork of our [private-drivers repo](https://github.com/PlaceOS/private-drivers)\
   this is a template repository for drivers.

Once the repository is cloned into the `repositories` folder it will be available in the repository selection dropdown.

#### Development

Please see the following resources on driver development

* [Writing a driver](backend/write-a-driver/)
* [Writing a spec](backend/write-a-driver/testing-drivers.md)

It's worth mentioning that drivers are applications in their own right and it's important to update dependencies.\
Before starting your development, in the repository folder you are working on it's worth running\
`shards update`