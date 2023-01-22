db.getCollection("goals").aggregate([
  {
    "$match": {
     "_id": ObjectId("63cc160254bf517b178dcbb7")
    }
  },
  {
    "$project": {
      "goal": {
        "$arrayElemAt": [
          {
            "$filter": {
              "input": "$goal",
              "as": "goal",
              "cond": {
                "$eq": [
                  "$$goal.language",
                  "es"
                ]
              }
            }
          },
          0
        ]
      }
    }
  }
])