# SocialSight - Social Media Performance Analysis

## Pre-Hackathon Assignment for Level SuperMind Hackathon

### Overview 
SocialSight is a basic analytics module designed to analyze engagement data from mock social media accounts. The project utilizes Langflow and DataStax Astra DB to fetch, store, and analyze engagement metrics, providing insightful performance insights using GPT integration. 📊✨


### Tools and Tech Stack
- **DataStax Astra DB**: For database operations to store and query social media engagement data.
- **Langflow**: For workflow creation and GPT integration to generate insights.
 

### Features
1. **Fetch Engagement Data**:
   - Create a dataset simulating social media engagement (likes, shares, comments, post types, etc.).
   - Store the dataset in DataStax Astra DB.

2. **Analyze Post Performance**:
   - Use Langflow to construct a flow that accepts post types (carousel, reels, static images) as input.
   - Query the Astra DB dataset to calculate average engagement metrics for each post type.

3. **Provide Insights**:
   - Utilize GPT integration (gpt-4o-mini) in Langflow to generate insights based on the engagement data, complete with helpful recommendations for the next viral post. ✨🚀

### Screenshots
- **Dataset Screenshot**: ![Dataset](Screenshots/dataset.png)
- **Langflow Agent Workflow**: ![Langflow Workflow](Screenshots/Adding_in_db.jpeg) ![Langflow Workflow](Screenshots/LLM_query.jpeg)
- **Sample Output**: ![Sample Output](Screenshots/Sample_output.jpeg)

### Installation and Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/violinadoley/SocialSight.git
   ```
2. cd into the social-sight repo
   ```bash
   cd SocialSight
   cd social-sight
   ```
   Yes, required twice to enter the src repo.

3. Install the required dependencies:
   ```bash
   npm install
   ```
4. Add .env file in the src directory and add these - 
 ```bash
   LANGFLOW_BASE_URL= 
   LANGFLOW_APP_TOKEN=
   ```
Get the Langflow base URL an the app token from your Langflow dashboard.

5. Run the project on Local host :
   ``` bash
   npm run dev
   ```
