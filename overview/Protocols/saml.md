---
title: SAML
description: SAML Standard
sidebar_position: 3
---

## Overview

Security Assertion Markup Language (SAML) is an open standard that allows Identity Providers (IdP) to pass authorization credentials to Service Providers (SP).

SAML is an umbrella standard that covers federation, identity management and SSO.

The SAML specification defines three roles: 
- The principal (typically a human user) 
- The Service Provider (SP)
- The Identity Provider (IdP)

In the primary use case addressed by SAML, the principal requests a service from the Service Provider.
The Service Provider requests and obtains an authentication assertion from the Identity Provider.

## SAML in PlaceOS

By default, PlaceOS uses a local authentication method.
PlaceOS also supports Federated Authentication via SAML as the advised method of user authentication.

Under this configuration, by the SAML Standard, PlaceOS is the Service Provider (SP).

Authentication providers can be associated with [Domains](../../how-to/add-domain.md) in PlaceOS.

- [Configure SAML in PlaceOS](../../how-to/authentication/configure-saml.md)
- [Add Domains in PlaceOS](../../how-to/add-domain.md)

## Resources

- [Security Assertion Markup Language (SAML) V2.0 Technical Overview](http://docs.oasis-open.org/security/saml/Post2.0/sstc-saml-tech-overview-2.0.html)


*[IdP]: Identity Provider
*[SAML]: Security Assertion Markup Language
*[SSO]: Single Sign-On
