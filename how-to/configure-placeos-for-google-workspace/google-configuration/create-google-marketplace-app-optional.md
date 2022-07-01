# Create Google Marketplace App (optional)

This only applies to organizations where a particular region or department will be using the application.&#x20;

This step is not applicable to most organizations.

## Prerequisites&#x20;

* Google Cloud Console Administrative Access or Permissions to:&#x20;
  * Create Marketplace Apps.
* Marketplace SDK Enabled

## Procedure

1. Navigate to Google Cloud Console
2. From the navigation menu select API Services then Dashboard
3. Scroll down and click GSuite Marketplace SDK\
   ![](https://lh3.googleusercontent.com/-hNwHQQ9VTBW8rUGnkcDhTR8h4DLBIuJ4fyOPARb3bxdxAR6vxPf8KmCmAjPhB\_XIv2Ih\_-fgVNkUg4mQukO7IUfTzlBc-wsz4dDBnuJeCviqQlWJtPVUrKV2P9F9X6vieBgNhlFEN73tKma)
4. Select Configuration\
   ![](https://lh6.googleusercontent.com/ChhEg2T9wbjI5thh2nux5-CILKwNgGU1iFXDKkGvfSEZwz2nKjxllkHhbgBFBOu-D6MmfanO8wsfzrz-WT6OEWLFrOh1dUH74xGL9xE\_Pdm8JkZ4jf9uJTl6BmHk7vLTpIcRjD9vwvacH25X)
5. Enter an App Name and Description
6. Uncheck Individual Install\
   ![](https://lh3.googleusercontent.com/JtYxF0h4FVILxbEOX7HnjmcKxR7uMdJGc56YZVwrTlljyJQqv\_o1lujBNMgIVujPIaZzkTvwZD7EYO2ZgpEWAz4GVhEB8EtA9vA\_25YkoMqbXnZOVBg4RJnxatant1o2DZxG53CzBwqQsiT2)
7. Upload Icons if required
8. Terms of Service URL is required, you can set this to your organisations homepage
9. Enter the Scope URL:
   * [https://www.googleapis.com/auth/calendar](https://www.googleapis.com/auth/calendar)
   * [https://www.googleapis.com/auth/admin.directory.user.readonly](https://www.googleapis.com/auth/admin.directory.user.readonly)
   * https://www.googleapis.com/auth/drive.file
10. Enable Drive Extension and click 'Configure drive SDK'\
    ![](https://lh4.googleusercontent.com/w7-x56AhQTVgPv9ar7ugx4YSq8cWJTTB3VAT2-8yjt4LwmrsrPzWyIN48--fC5WBEfghVCDWujtRvaLwhbBdDmhiUmf74KxShlsakgHlWtkLE9x4-QzGZN8VmNZIouragu1h1cQa5B1y5F0L)
11. Fill in the details and icons for the drive application. This is required to have the application deployed without going through the public marketplace store and onboarding process.
12. Once done and you're back on the marketplace application form, ensure visibility is set to 'My Domain'\
    ![](https://lh6.googleusercontent.com/7ArkpX4WRIS3cstBn4m1-Hp4zXGfkq3WEmip\_AWHKLh8dXt8OvnlktPh7\_eZzKc5zcNNa\_F8t7hnWmA\_UnlBOLruIFwOSJ0yfaQm9oAIUXd0DI0yeyTUuWBW-PoTMqyFgjRWiCtr65mnOTcW)
13. Click 'Save Changes'
14. You will now need to deploy the Marketplace App to the segment of the organisation that will be using the application, refer to these instructions: [https://support.google.com/a/answer/172482?hl=en](https://support.google.com/a/answer/172482?hl=en)
