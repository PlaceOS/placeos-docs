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
  * 2 cores
  * 16 GB RAM
* Persistent Volumes utilized:
  * 7 x 8 GB
  * 8 x 100 MB
  * 2 x 50 GB

### Non-Production Environment

#### Kubernetes Deployment

* Clusters: 1
* Regions: 1
* Availability Zones: 1 or more
* Nodes: 2 or more
* Minimum node size:
  * 2 cores
  * 8 GB RAM
* Persistent Volumes utilized:
  - 3 x 8 GB
  - 3 x 100 MB

#### OR Linux VM based Deploymentm for development/testing purposes

* `docker-compose`
* Minimum node size:
  * 8 cores
  * 16 GB RAM
  * 100 GB storage
