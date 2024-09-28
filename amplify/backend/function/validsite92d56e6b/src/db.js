const AWS = require("aws-sdk");
const dotenv = require("dotenv");

// Load environment variables from .env file
dotenv.config();
// Set the region for DynamoDB
AWS.config.update({
  accessKeyId: process.env.DB_ACCESS_KEY_ID,
  secretAccessKey: process.env.DB_SECRET_ACCESS_KEY,
  region: process.env.REGION, // Replace with your desired region
});

// Create a new instance of the DynamoDB DocumentClient
const dynamodb = new AWS.DynamoDB.DocumentClient();

// Example function to query a DynamoDB table
async function queryTable(tableName, key, value) {
  const params = {
    TableName: tableName,
    KeyConditionExpression: "#pk = :pk",
    ExpressionAttributeNames: {
      "#pk": "partitionKey",
    },
    ExpressionAttributeValues: {
      ":pk": "example",
    },
  };

  try {
    const result = await dynamodb.query(params).promise();
    console.log("Query result:", result);
  } catch (error) {
    console.error("Error querying DynamoDB table:", error);
  }
}

// Example function to get all posts from DynamoDB table
async function getPosts() {
  const tableName = "Post-" + process.env.DYNAMO_DB_SUFFIX; // Replace with your table name
  const params = {
    TableName: tableName,
  };
  try {
    const result = await dynamodb.scan(params).promise();
    console.log("Posts:", result.Items);
    return result.Items;
  } catch (error) {
    console.error("Error getting posts from DynamoDB table:", error);
    return [];
  }
}

module.exports = { queryTable, getPosts };
