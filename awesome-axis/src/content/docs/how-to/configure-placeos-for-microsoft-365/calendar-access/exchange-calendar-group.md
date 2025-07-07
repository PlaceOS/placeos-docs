---
title: "Exchange Calendar Group"
---

# Exchange Calendar Group

In this step, we will create a group that will contain the room resources you would like PlaceOS to access. Following this, we will create a restricted access policy applied to the group.

This prevents the PlaceOS Application from reading all calendars in your organisation and negates some security concerns around the applications access to sensitive information such as the CEO’s calendar.

## Prerequisites

* Exchange Administrator Access

## Procedure

1. Navigate to the Exchange Admin Centre.
2. Click Recipients.
3. Click Groups.
4. Click 'Add a group'.
5. Select 'Mail-enabled Security'.\
   ![](https://lh5.googleusercontent.com/plO5HR1fvb89VexXXgey5jgFW8cOHzNC0O0\_DbOSl87xrEyEKUzcTUYg6DZujYQg21h4DrzsP06hCpRMteoU8DAzn0nj9YZ\_aK4A6r7EObPo5frb\_XGfjBD4SAWwj87eFF1wfE4cs8c7xpA8bw)
6. Click Next.
7. Name the group 'PlaceOS Room Booking' and optionally enter a group description.\
   ![](https://lh3.googleusercontent.com/RwQhK-AGZdXDqHHev7TQS4\_t2OwATmQ479oD2\_u7f0MOW3q7CM10IaFallqu6TdTOUetj\_BhxEs\_-IpK5DFPeBi1URSBapUiejTNqYX19ExSSZNF2okcdmOPsg\_xMGn-zhdzxRTuZOa2S7yTig)
8. Click Next.
9. Assign an Exchange Admin or Service User as the group owner. The group owner has no impact on PlaceOS integration and is entirely at the organisation's discretion.\
   ![](https://lh5.googleusercontent.com/9IGLDdedhVioeJb-nbqv3LnQhCEBsZaf5oDDIK54SWUJzLocNHSEUBu6ATS5e-y3sSHKRExvknnt\_WfCIxijLdfGOkJ9uwc0JyiLx2Ol4xnkYDnmLJnWynKwHMnkBBaoHfknduvRfZz9UImiJA)
10. Click Next.
11. Under Add members you will need to add the room resource calendars you would like PlaceOS to have access to, this can optionally be done later via PowerShell if you have a large number of rooms.\
    ![](https://lh6.googleusercontent.com/0blT69bWnUrRAsGX6tBke\_Y9AIxBU-0fAA6GJotSk3L\_d1pieUshLybfncgYkhTag5TBayG3V6hJ3A4psYsuIfPCiNe1CMFrrAn6Kq\_2-BIAXJOGzi1bfVfCB5vn3YBBABE0CALqrzpWc7QLQg)
12. Click Next.
13. Provide a group email address such as `placeosroombooking@yourdomain.com`\
    ![](https://lh4.googleusercontent.com/xbv7EXvtjlZOHuHnF9iitO1P668qhh\_hVlglQTSiJqRgaRg-ovpVFGQpaUJN4AJc82wlxyPdsU6vZQihQiYF1rAkPq611aLj1p85LF40JteQykxZymvpupyPP5D\_5TDCfKDn6PuuxIIcODhavA)
14. Click Next.
15. Click Finish.
16. Note down the group email address as this will be required in the next step.
