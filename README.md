# WelcomeHub 🌐

WelcomeHub is a **static website** hosted on **AWS S3** and deployed using **AWS CodePipeline**. This project demonstrates how to automate the deployment of a static website using a CI/CD pipeline, ensuring seamless updates whenever changes are pushed to the repository.


## Features ✨

- **Interactive Greeting**: Enter your name and get a personalized greeting message.
- **Automated Deployment**: Changes pushed to the `main` branch are automatically deployed to AWS S3.
- **Hosted on AWS S3**: The website is hosted on an S3 bucket with public access enabled.
- **Optional Enhancements**:
  - **CloudFront**: For faster global content delivery.
  - **SNS Notifications**: To receive notifications about deployment success or failure.


## Project Structure 📂
WelcomeHub/
├── home.html # Main HTML file for the website
├── style.css # Stylesheet for styling the website
├── script.js # JavaScript for interactive features
├── README.md # Project documentation (you're here!)
└── .gitignore # Specifies files to be ignored by Git



## Technologies Used 💻

- **HTML/CSS/JavaScript**: For building the static website.
- **AWS S3**: For hosting the website.
- **AWS CodePipeline**: For CI/CD automation.
- **GitHub**: For version control and collaboration.


## Setup Instructions 🛠️

Follow these steps to set up and deploy the WelcomeHub project:

### **1. Create an S3 Bucket**
1. Go to the **AWS S3 Console**.
2. Click **Create bucket**.
3. Enter a unique bucket name (e.g., `my-static-website-welcomehome`).
4. Select the region closest to your users (e.g., `us-east-1`).
5. Under **Block Public Access settings**, uncheck **Block all public access** and acknowledge the warning.
6. Enable **Static Website Hosting**:
   - Go to the **Properties** tab.
   - Scroll down to **Static website hosting** and click **Edit**.
   - Select **Enable**.
   - Set `home.html` as the **Index document**.
   - Save changes and note the **Endpoint URL** (e.g., `http://my-static-website-welcomehome.s3-website-us-east-1.amazonaws.com`).
7. Update the bucket policy to allow public access:
   - Go to the **Permissions** tab and click **Bucket Policy**.
   - Add the following policy:
     ```json
     {
         "Version": "2012-10-17",
         "Statement": [
             {
                 "Sid": "PublicReadGetObject",
                 "Effect": "Allow",
                 "Principal": "*",
                 "Action": "s3:GetObject",
                 "Resource": "arn:aws:s3:::my-static-website-welcomehome/*"
             }
         ]
     }
     ```
   - Replace `my-static-website-welcomehome` with your bucket name.
   - Click **Save changes**.



### **2. Set Up AWS CodePipeline**
1. Go to the **AWS CodePipeline Console**.
2. Click **Create pipeline**.
3. Enter a pipeline name (e.g., `WelcomeHubPipeline`).
4. Under **Service role**, select **New service role** (AWS will create a role with the necessary permissions).
5. Click **Next**.
6. **Source Stage**:
   - **Source provider**: Select **GitHub (Version 2)**.
   - **Connection**: Connect your GitHub account if you haven’t already.
   - **Repository**: Select your GitHub repository (e.g., `Hemanth216-b/WelcomeHub`).
   - **Branch**: Select the branch (e.g., `main`).
   - Click **Next**.
7. **Build Stage**: Skip this stage (since it’s a static website).
8. **Deploy Stage**:
   - **Deploy provider**: Select **Amazon S3**.
   - **Region**: Select the region where your S3 bucket is located (e.g., `us-east-1`).
   - **Bucket**: Select your S3 bucket (e.g., `my-static-website-welcomehome`).
   - **Extract file before deploy**: Check this box.
   - Click **Next**.
9. Review your pipeline configuration and click **Create pipeline**.



### **3. Optional Enhancements**
#### **Add CloudFront for Improved Performance**
1. Go to the **AWS CloudFront** service.
2. Create a distribution with your S3 bucket as the origin.
3. Use the CloudFront URL to access your website for faster global delivery.

#### **Add SNS Notifications**
1. Go to the **AWS SNS** service.
2. Create a topic (e.g., `WelcomeHubDeployments`).
3. Subscribe your email to the topic.
4. In CodePipeline, add an action to send notifications to the SNS topic for success/failure events.



## Congratulations 🎉

WelcomeHub is a simple yet powerful example of how to automate the deployment of a static website using modern cloud technologies. By leveraging **AWS S3** for hosting and **AWS CodePipeline** for CI/CD, this project demonstrates how to streamline the deployment process, making it efficient and reliable. Whether you're a beginner exploring AWS or an experienced developer looking for a quick reference, WelcomeHub serves as a practical guide to building and deploying static websites with ease.

