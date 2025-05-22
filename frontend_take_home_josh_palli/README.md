# Junior Frontend Engineer Take-Home Assignment

## Overview
Thank you for your interest in joining our team! As part of the interview process, we ask you to complete this take-home assignment to demonstrate your frontend development skills.

## Getting Started
### 1. Clone this repository
```sh
git clone <your-repository-url>
cd <your-repository-folder>
```

### 2. Install dependencies
Ensure you have Yarn installed. If you need to set it up, follow the instructions here: [Install Yarn](https://classic.yarnpkg.com/lang/en/docs/install/)

```sh
yarn install
```

### 3. Run the application
```sh
yarn start
```

Open `http://localhost:3000` in your browser. If everything is set up correctly, you should see a simple "Hello, world!" styled with Tailwind CSS.

### 3. Run the tests
```sh
yarn test
```

You should see a single test for the `App` component passing -- its source code is located at `src/App.test.js`.

NOTE: If you are having trouble installing dependencies (yarn, yarn install, etc), please reach out to your recruiter. The point of this take-home is to assess your skills with css/Tailwind and React -- not to wrestle with javascript tooling issues. :-)

## Assignment Details
Your task is to build a simple TODOs app based on the [provided Figma design](https://www.figma.com/design/5RT4wkKtnFMdKimX0963YA/Shiplify-Interview-Task).

Note that the checkmark icon can be exported from Figma. In the left sidebar, drill down until you get to the <code>✓ Vector</code> component. Then in the right sidebar, see the "Export" section at the bottom.

Figma's right sidebar also contains some css hints (colors, padding, etc).

The font used (Work Sans) [is available from Google Fonts](https://fonts.google.com/specimen/Work+Sans).

### Guidelines
- **Time Limit:** Spend a maximum of **4 hours** on this assignment. Prioritize the features that best demonstrate your skills.
- **State Management:** Use in-memory [React state](https://react.dev/reference/react/useState) to manage the list of TODOs. No need for a backend or local storage.
- **Component Structure:** Design modular React components. Avoid implementing the entire app in a single component.
- **Functional Components:** Use [Functional Components](https://www.twilio.com/en-us/blog/react-choose-functional-components), not Class Components.
- **Tailwind CSS Organization:** Pretend this will evolve into a large application. Structure your Tailwind styles thoughtfully. Bonus points for using **CSS Modules**.
- **Figma Accuracy:** Pay close attention to design details and ensure your implementation closely matches the provided Figma design.
- **Responsive Design:** Ensure the page adapts well to different screen sizes and handles large numbers of TODOs.
- **No Deployment Required:** We are only assessing frontend implementation.
- **Testing:** Bonus points for adding meaningful tests for your React components. We've included a basic Jest test for the header component.
- **Git History:** Bonus points for maintaining a clean and logical commit history, breaking changes into meaningful, atomic commits.

### Design Improvisation
The Figma design contains a placeholder labeled **"YOUR 'ADD' INTERFACE HERE"**. This is your chance to be creative! Design an "Add" interface that looks good and is cohesive with the rest of the design.

### Functional Requirements
- Display the **empty state** message (`"All items completed!"`) when the list of incomplete TODO items is empty.
- A text field with placeholder text **"Add a thing to do..."** for entering TODO items.
- Clicking the **"Add"** button adds the item to the TODO list and clears the input field.
- Each **incomplete** TODO item should be displayed in the TODO list.
- TODO items should only contain **the text of the TODO** (no due dates, priorities, etc.).
- Clicking the **checkmark button** next to a TODO removes it from the list. No need to track completed items.

## Submission
Once you have completed the assignment:
1. Push your code to the GitHub repository.
2. Email your recruiter to notify them of your submission.

## Next Steps
If your submission meets our criteria, we will invite you to a **live-coding interview** with members of our Engineering Team. In this session, you will extend your TODO app by implementing a few small additional features to your take-home submission.

We look forward to seeing your work!

