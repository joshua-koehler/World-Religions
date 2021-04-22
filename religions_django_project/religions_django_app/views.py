from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from . import data_analysis

def index(request):
    return HttpResponse("You've reached the religions_django_app index.")

def visualize(request):
    return HttpResponse("<h1>World Religions Visualizer</h1>")

def predict_protestant_percentage_at_year(request, year):
    ans = float(data_analysis.predict_protestant_percentage(year))
    data = [
        {
            "year": year,
            "percentage": ans,
        }
    ]
    return JsonResponse(data, safe=False)
