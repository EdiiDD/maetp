db.getCollection("goals").aggregate([
  {
    "$match": {
      "goal": {
        "$elemMatch": {
          "language": "es"
        }
      }
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