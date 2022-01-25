# Testing Internal Builds

Internal builds for all product service images are available on [ghcr.io](http://ghcr.io). These publish on every push to our service repos on GitHub and are tagged with the associated branch name.

Access is restricted to the outside world to help prevent accidental use. To authenticate:

1. [Create a Personal Access Token (PAT)](https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token) with `read:packages` access only.
2. Run `docker login ghcr.io` on your machine. This will prompt you for your GitHub username, and a password. Use the PAT you created above.

Dev builds will now be available by prefixing the image name with `ghcr.io`. For example, if you would like to test branch `foo` from `core`, the image tag is `ghcr.io/placeos/core:foo`.

These _must not_ be used on external infrastructure, but are suitable for internal testing and experimentation. For external development use, platform `nightly` builds are available on Docker Hub. Extending the example above, `core` can be accessed there via `placeos/core:nightly`. Similarly the latest stable build can be found simply as `placeos/core`.
