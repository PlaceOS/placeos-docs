---
title: System Requirements
description: Recommended Minimum System Requirements
---

# Infrastructure Requirements

### Production Environment

#### Kubernetes Deployment

See [PlaceOS Kubernetes Terraform](https://github.com/place-labs/k8s-terraform/) and [PlaceOS Kubernetes Helm Charts](https://github.com/place-labs/k8s-helm/) for reference.

* Supported Kubernetes platforms:
  * AWS EKS
  * AWS EKS on Fargate
  * Google Cloud GKE
  * Azure AKS
  * Bare metal: Kubernetes, k3D
* Required Kubernetes features
  * Persistent storage
* Clusters: 1
* Regions: 1
* Availability Zones: 1 or more (3 recommended)
* Nodes: 3 or more
* Minimum node size:
  * 4 cores
  * 8 GB RAM
* Persistent Volumes utilized:
  * 10 x 1 GB
  * 1x 20GB
  * 1x 100GB

### Non-Production Environment

#### Kubernetes Deployment

* Clusters: 1
* Regions: 1
* Availability Zones: 1 or more
* Nodes: 2 or more
* Minimum node size:
  * 4 cores
  * 8 GB RAM
* Persistent Volumes utilized:
  * 10 x 1 GB
  * 1x 20GB
  * 1x 100GB

#### OR Linux VM based Deploymentm for development/testing purposes

* `docker-compose`
* Minimum node size:
  * 8 cores
  * 16 GB RAM
  * 100 GB storage
