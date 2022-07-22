import pymongo
import auth

#create a mongodb client
conn_str = "mongodb://dbUser:dbUser@ac-rgg55lo-shard-00-00.ymbl9km.mongodb.net:27017,ac-rgg55lo-shard-00-01.ymbl9km.mongodb.net:27017,ac-rgg55lo-shard-00-02.ymbl9km.mongodb.net:27017/?ssl=true&replicaSet=atlas-122d02-shard-0&authSource=admin&retryWrites=true&w=majority"
try:
    client = pymongo.MongoClient(conn_str)
except Exception:
    print("Error:" + str(Exception))

#create a DB
db = client['hackathon']
 
#create a collection
collectionUser = db.userRecord # Collection name is userRecord


class systemUser():

    def __init__(self, email, password, nric):
        collectionUser.insert_one({"email": email, "password": password, "nric": nric})

    def getUserEmail(email):
        filter = {}
        filter["email"] = email

        aCursor = collectionUser.find(filter).limit(1)

        if collectionUser.count_documents(filter) == 1:
            return auth.User(email, aCursor.next())
        else: 
            return None




