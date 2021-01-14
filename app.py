#!/usr/bin/env python
# coding: utf-8

# In[8]:


# Make sure that all the following modules are already installed for use.
from flask import Flask
from flask_cors import CORS
from flask_restful import Api, Resource, reqparse
import joblib
import numpy as np


# In[9]:


APP = Flask(__name__)
APP.config['CORS_HEADERS'] = 'Content-Type'
CORS(APP)
API = Api(APP)


# In[10]:


HEART_DIAGNOSIS_MODEL = joblib.load('heart-diagnosing-model')


# In[11]:


class Predict(Resource):

    @staticmethod
    def post():
        parser = reqparse.RequestParser()
        parser.add_argument('age')
        parser.add_argument('sex')
        parser.add_argument('cp')
        parser.add_argument('trestbps')
        parser.add_argument('chol')
        parser.add_argument('fbs')
        parser.add_argument('restecg')
        parser.add_argument('thalach')
        parser.add_argument('exang')
        parser.add_argument('oldpeak')
        parser.add_argument('slope')
        parser.add_argument('ca')
        parser.add_argument('thal')
       
        
        args = parser.parse_args()  # creates dictionary

        X_new = np.fromiter(args.values(), dtype=float)  # convert input to array

        categories = ["Negative", "Positive"]
        out = {'Prediction': categories[HEART_DIAGNOSIS_MODEL.predict([X_new])[0]]}

        return out, 200


# In[12]:


API.add_resource(Predict, '/predict')

if __name__ == '__main__':
    APP.run(debug=True, port=1080)


# In[15]:


import requests

URL = 'http://127.0.0.1:1080/predict'  # localhost and the defined port + endpoint

body = {
    "age": 44,
    "sex": 1,
    "cp": 5.5,
    "trestbps": 5.5,
    "chol": 5.5,
    "fbs": 5.5,
    "restecg": 5.3,
    "thalach": 1.3,
    "exang": 1.3,
    "oldpeak": 1.3,
    "slope": 5.6,
    "ca": 1.6,
    "thal": 1.6
}

response = requests.post(URL, data=body)
response.json()


# In[ ]:





# In[ ]:




