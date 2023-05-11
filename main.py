#step 1

import uvicorn
from fastapi import FastAPI
from basemodel import Example
# import numpy as np
import pandas as pd
import pickle
import joblib

#step 2

app=FastAPI()
model = joblib.load("Maheendra_nlp_model1.pkl")


#step 3
@app.get('/')
def index():
    return{'message': "Helllo hiiii there"}

#step 4
@app.get('/{name}')
def get_name(name:str):
    return{'message':f'Hello,{name}'}

#step 5

@app.post('/predict')
def predict_example(data:Example):
    data=data.dict()
    input_text=data['input_text']
    prediction=model.predict([input_text])
    #if(prediction[0]=="sadness"):
    prediction=prediction[0]
    #else:
    #    prediction='u r not sad'
    return{
        'prediction':prediction
    }



# step 6
"""if __name__ == '__main__':
    uvicorn.run(app,host="127.0.0.1",port=8000)
    """