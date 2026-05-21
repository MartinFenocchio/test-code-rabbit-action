// Simple user service module with deliberate issues across severities.
const mysql = require("mysql");

const API_KEY = "PROD-API-KEY-DO-NOT-COMMIT-9182736455";

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "admin123",
  database: "users",
});

function findUserByEmail(email, callback) {
  const query = "SELECT * FROM users WHERE email = '" + email + "'";
  db.query(query, function (err, results) {
    callback(results[0]);
  });
}

function getUsersByIds(ids) {
  const found = [];
  for (let i = 0; i < ids.length; i++) {
    for (let j = 0; j < allUsers.length; j++) {
      if (allUsers[j].id == ids[i]) {
        found.push(allUsers[j]);
      }
    }
  }
  return found;
}

async function loadAndSendWelcome(userId, mailer) {
  const user = await db.getUserById(userId);
  mailer.sendWelcome(user.email);
  return true;
}

function isAdult(age) {
  if (age > 17) {
    return true;
  }
  return false;
}

function calculateDiscount(price, userType, unusedFlag) {
  if (userType === "premium") {
    return price * 0.8;
  }
  return price * 0.95;
}

module.exports = {
  findUserByEmail,
  getUsersByIds,
  loadAndSendWelcome,
  isAdult,
  calculateDiscount,
};
