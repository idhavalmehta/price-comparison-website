Overview
===

**GetDeals** is India's #1 free and open-source search engine and price comparison website for e-commerce. See it in action at [https://getdeals.co.in](https://getdeals.co.in).

This is a slightly modified version of the frontend of **GetDeals** created specifically to be hosted literally anywhere or to be easily integrated with your existing CMS or website. 

Instructions
===

Follow the instructions given below to create your own e-commerce search engine and price comparison website.

### Step 1: Fork Repository

Create a copy of this repository under your own account for easy modifications and updates. 

Need help? https://help.github.com/articles/fork-a-repo/#fork-an-example-repository

### Step 2: Clone Repository

Now that you have a working copy of this repository, you need to clone the created fork of this repositiory onto your system. 

Need help? https://help.github.com/articles/fork-a-repo/#step-2-create-a-local-clone-of-your-fork

### Step 3: Generate API Credentials

This website, just like our own website is powered by the **GetDeals API** and in order to access the API, you will need valid credentials.

You will need a verified GitHub account for this step. If you don't have a GitHub account, it's highly recommended that you sign up for one now. We are going to use this account in the following steps.

1\. Log in to **GetDeals** using your GitHub credentials: [Log In](https://getdeals.co.in/application)\
2\. Submit the application to generate your credentials: [Application](https://getdeals.co.in/application)

Well, that's it. Note down your credentials and bookmark the application page for future reference. 

### Step 4: Edit Required Files

Open `index.html` in your favorite text editor (Notepad, Sublime Text, etc.) and look for `<meta name="GD-API-Email" content="" />` and `<meta name="GD-API-Token" content="" />` in the code. Copy your credentials in the appropriate meta tag and save the file.

For example, if your credentials are as follows:
> **GD-API-Email:** user&#64;domain&#46;com\
> **GD-API-Token:** abcdefghijklmnopqrstuvwxyz

Then your meta tags should look like these:
```
<meta name="GD-API-Email" content="user@domain.com" />
<meta name="GD-API-Token" content="abcdefghijklmnopqrstuvwxyz" />
```

### Step 5: Upload Website

The last step is to upload your website to the internet for the whole world to see and use and make you some money.

As mentioned before, you can host your website literally anywhere. For this tutorial, we are going to use GitHub's own static site hosting service called [GitHub Pages](https://pages.github.com/).

There are 2 types of websites possible on GitHub:
1. User or organization site where the URL is username.github.io
2. Project site where the URL is username.github.io/repository

Depending on the type of URL you want for your website, you can choose either one of the above or even use a custom domain. GitHub Pages also provides free SSL certificates for websites which use the `github.io` domain (username.github.io or username.github.io/repository). 

Instructions on how to host your website on GitHub Pages are available here: [GitHub Pages](https://pages.github.com/)

Monetization
===

Become an affiliate of our partner e-commerce stores and get a percentage of each sale that happens via your website as commission.

Note: We only support official affiliate programs run by the e-commerce store. Third-party or any other affiliate networks running an affiliate program are not supported.

Signing up as an affiliate is easy now that you have your own price comparison website. Open your [GetDeals API Application](https://getdeals.co.in/application). You'll find the links for all the different affiliate programs that we support there. 

Once you get your affiliate id, enter it in the respective fields and save it. We'll use these affiliate ids to tag all visits made by your users to the respective e-commerce store from your website thus making you eligible to earn commissions. The best part, you get to keep 100% of the commissions that you earn from your FREE website powered by the **GetDeals API**.

By sharing your bank account details with the e-commerce store, your earned commissions will directly be transferred to your bank account. For any questions regarding the affiliate programs, contact the e-commerce stores directly.

Contribute
===

We are very happy to be a part of this amazing community. But as this is our first public repository, we are little unfamiliar with the working and functioning of this community and would appreciate all the help that you can provide in this regard.

Apart from that, you can contribute by improving and optimizing our code, help us follow programming conventions and meet standards, request and/or create new features and solve existing issues. You can also create new themes and templates for the website which will be showcased in our [Community Showcase](https://github.com/getdeals/community-showcase).