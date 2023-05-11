#importing packages
import pandas as pd
import numpy as np
import sys
#import text blob
from textblob import TextBlob


#sentimental Analysis
def check_sentiment(text):
    blob = TextBlob(text)
    sentiment = blob.sentiment.polarity
    subjectivity = blob.sentiment.subjectivity
    if sentiment > 0.2 and subjectivity > 0.5:
        result = "Happiness"
    elif sentiment < -0.2 and subjectivity > 0.5:
        result = "Anger"
    elif sentiment < 0 and subjectivity > 0.5:
        result = "Sadness"
    elif sentiment > 0 and subjectivity <= 0.5:
        result = "Contentment"
    elif sentiment < 0 and subjectivity <= 0.5:
        result = "Fear"
    else:
        result = "Surprise"
    return result

inputText = sys.argv[1]

print(check_sentiment(inputText))