# CicloConecta Mobile App with Chatbot Maya (Prototype)

This is the source code for the prototype of the CicloConecta mobile app, developed with React Native and Expo. It includes the structure for the chatbot "Maya" with a (simulated) integration to Dialogflow ES.

## 🌟 Project Objective

The main goal of **CicloConecta** is to empower women and girls in vulnerable contexts, focusing on three pillars:

- **Reproductive Health:** Providing accurate and personalized information.
- **Service Connection:** Facilitating access to health professionals and services.
- **Socioeconomic Empowerment:** Offering financial education and skills training.

Additionally, the app aims to create a supportive community for experience sharing and combating stigma.

**Visual Style:**

- **Colors:** While the project does not specify a color palette, the prototype website uses shades of pink (from light to vibrant) combined with white and neutral gray tones. This combination conveys warmth, trust, and femininity—culturally appropriate for the target audience.
- **Logo:** No official logo exists yet. The prototype uses the stylized name “CicloConecta.”
- **Slogan:** The prototype's featured phrase is:  
  `"CicloConecta: Empowering your health and well-being."`
- **Style:** A modern, clean, minimalist, and illustrative visual approach was chosen to ensure clarity, trust, and accessibility.

---

## 📁 Project Structure

- `/screens`: Contains all app screens, including `ChatbotScreen.js`.
- `/navigation`: Contains navigation setup (`AppNavigator.js`).
- `/dialogflow_config`: Contains example JSON intent files for importing into Dialogflow ES.
- `App.js`: Main application entry point.
- `package.json`: Lists all project dependencies.

---

## ▶️ How to Run the App Locally

### 1. **Prerequisites:**

- Node.js (LTS version recommended)
- npm or Yarn
- Expo CLI: `npm install -g expo-cli`
- Android emulator (via Android Studio) or iOS simulator (via Xcode), or Expo Go installed on a physical device

### 2. **Unzip the Project:**

- Extract `cicloconecta-app.zip` contents into a folder on your machine.

### 3. **Install Dependencies:**

- Open a terminal in the root project folder (where `package.json` is located).
- Run:  
  `npm install`  
  or  
  `yarn install` (if using Yarn)

### 4. **Start Expo Development Server:**

- In the same terminal, run:  
  `npx expo start`
- This will launch Metro Bundler in your browser and display a QR code.

### 5. **Run on Emulator or Device:**

- **Android emulator:** Press `a` in the terminal where Metro is running.
- **iOS simulator:** Press `i` in the terminal.
- **Physical device:** Open the **Expo Go** app and scan the QR code shown in the terminal or browser.

---

## 🤖 Configuring Real Integration with Dialogflow ES

The screen `screens/ChatbotScreen.js` is prepared to communicate with a Dialogflow ES agent, but currently uses simulated responses.

### To connect to your real Dialogflow agent:

#### 1. **Create/Configure Your Dialogflow ES Agent:**

- Visit the [Dialogflow ES console](https://dialogflow.cloud.google.com/)
- Create a new agent or use an existing one
- You can import example JSON intents from `/dialogflow_config/intents` (e.g., Greeting, MenstrualCycleInfo, etc.)
- Train your agent after importing the intents

#### 2. **Get Service Account Credentials:**

- In Google Cloud Platform (GCP), go to "IAM & Admin" → "Service Accounts"
- Create or use an existing service account with the role `Dialogflow API Client`
- Generate a JSON key and download it

#### 3. **Update the App Code:**

- Open `/screens/ChatbotScreen.js` in your editor
- Replace:
  ```javascript
  const DIALOGFLOW_PROJECT_ID = 'YOUR_PROJECT_ID_HERE';
  const DIALOGFLOW_SERVICE_ACCOUNT_KEY_JSON = { /* ... JSON structure ... */ };
