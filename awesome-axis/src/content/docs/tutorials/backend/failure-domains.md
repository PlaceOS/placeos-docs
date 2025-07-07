---
title: Troubleshooting Backend Failures
sidebar_position: 3
description: This document outlines possible areas of failure and how they impact users
---

# Troubleshooting Backend Failures

### Points of failure

#### etcd Failure

etcd is used by API and Core to determine the addresses of running Core services.\
As well as to determine where a module is executing in a cluster.

* Some drivers may not function as the API won't be able to reach them
* Core instances won't be able to join the cluster and won't launch drivers
* Most API requests will continue to work, execute and WebSocket requests will fail
* Triggers will fail

#### RethinkDB Failure

RethinkDB holds cluster configuration, primarily used by core during initialization.

* Most API requests will stop functioning, including authentication
* Existing WebSocket requests will continue to function

#### Redis Failure

Redis holds the runtime state of the cluster, such as module metadata and module status

* Status changes and signals will stop functioning
* Errors raised in modules may prevent some execute requests from functioning properly
* Execute APIs and cross driver communication will be effected as module metadata will be unavailable

#### Elasticsearch failure

* API index / listing / searching requests will fail - this will be mostly apparent when using Backoffice
* All other aspects of the system will continue functioning

#### Driver compilation issue / crash

* Executes directed at a module running on the driver will fail

### Troubleshooting

In the event of a failure, being able to isolate which aspect of the system is not functioning is key to a quick recovery.

* Can you log-in? If not it's probably a _RethinkDB Failure_ or load balancer issue (check if requests are hitting the services)
* Does Backoffice list the systems? If not it's probably an _Elasticsearch failure_

If you can login and see systems:

* Select a system you can safely use for testing
  * Does the list of modules and module functions load? If not it's probably a _Redis Failure_
  * Does executing a function work from Backoffice? View the response to see the error:
    * If the error says `no core instances` then _core_ might be down or unable to connect to _etcd_
    * If the error says `unable to connect to etcd` then _etcd_ might be down or the _API_ can't connect to etcd

This should help you identify the cause of most issues.

### Enable debug logs

All the services support being toggled to output more verbose logs which might help shed light on an issue.

To toggle log levels you send a signal to the service: `kill -USR1 <process_pid>`

As you typically cannot shell into the containers, you'll have to run this command from the host.\
You must be running as root and you can find the process pid by running:\
`ps aux | grep <staff|api|triggers|etc>`
