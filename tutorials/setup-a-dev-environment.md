---
description: >-
  For use when testing, improving or experimenting with PlaceOS on a local
  machine. Use it for driver, frontend, api and infra development.
---

# Setup a dev environment

### Prerequisites

* [WSL2](https://www.windowscentral.com/how-install-wsl2-windows-10) if running Windows
* [GIT installed](https://git-scm.com)
* [Docker installed](https://docs.docker.com/get-docker/)
* [Crystal lang](https://crystal-lang.org/install/)

#### Windows

When running on windows ensure docker desktop is linked to your WSL2 shell

![Docker WSL2 integration](<../.gitbook/assets/image (8).png>)

Ensure git is using unix line endings. In powershell you can run the following command:

`git config --global core.autocrlf false`

Set your default terminal in VS Code to your linux shell

1. Press `control -> shift -> P`
2. Type `Terminal: Select Default Profile`
3. select your WSL2 terminal from the dropdown

You will then want to ensure there enough resources allocated to the Linux VM

[https://docs.microsoft.com/en-us/windows/wsl/wsl-config#example-wslconfig-file](https://docs.microsoft.com/en-us/windows/wsl/wsl-config#example-wslconfig-file)

#### Map a network drive for GUI access

In windows it's better that GUI editors are remotely accessing the linux filesystem, versus linux being mapped to windows as the file permissions will prevent some posix actions.

1. In Windows Explorer you can browse to `\\wsl$\`
2. Then you should see the available Linux environments i.e. `\\wsl$\Ubuntu`
3. You can then map this to a drive letter in windows

![Map a network drive](<../.gitbook/assets/image (9).png>)

![](<../.gitbook/assets/image (6).png>)

Once mapped, place all your crystal lang projects in your Linux home folder

#### Launch VS Code from linux

Edit your code in windows but run extensions on linux (such as your crystal tool formatter)

1. Install the [Remote - WSL](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-wsl) extension in VS Code
2. In a linux terminal, browse to the folder with your project files
3. run the following command: `code .`
4. This will launch VS code in windows, however the bulk of operations are occurring in linux

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

![Developing drivers](<../.gitbook/assets/image (9) (1) (1).png>)

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
