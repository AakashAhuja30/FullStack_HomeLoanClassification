from django.shortcuts import render
from django.http import JsonResponse
from django.core.files.storage import FileSystemStorage
import  joblib
import json
import pandas as pd
# Create your views here.

model = joblib.load('modelPipeline.pkl')


def scoreJson(request):
    data = json.loads(request.body)
    dataF=pd.DataFrame(data,index=[0])
    score = model.predict_proba(dataF)[:,-1]
    score = float(score)
    

    return JsonResponse({'score':score})

def scoreFile(request):

    fileObj = request.FILES['filePath']
    fs = FileSystemStorage()
    filePathName=fs.save(fileObj.name,fileObj)
    filePathName = fs.url(filePathName)
    filePath = '.' + filePathName
    data = pd.read_csv(filePath)
    loan_ids = data['Loan_ID']
    df1 = data.drop(['Loan_ID'], axis=1)
    #print(df1)
    score = model.predict_proba(df1)[:,-1]
    score = {j:k for j,k in zip(loan_ids,score)}
    result = sorted(score.items(), key=lambda el: el[1],reverse=True)
    #result = sorted(score.items())

    return JsonResponse({'score':result})