from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
import json
from rest_framework import viewsets
from . import data_analysis

from .serializers import CombinedDataPointSerializer, ProtestantPointSerializer, PapistPointSerializer
from .models import *

class CombinedDataPointViewSet(viewsets.ModelViewSet):
    queryset = CombinedDataPoint.objects.all()
    serializer_class = CombinedDataPointSerializer


class ProtestantPointViewSet(viewsets.ModelViewSet):
    queryset = ProtestantPoint.objects.all()
    serializer_class = ProtestantPointSerializer


class PapistPointViewSet(viewsets.ModelViewSet):
    queryset = PapistPoint.objects.all()
    serializer_class = PapistPointSerializer


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

def predict_papist_percentage_at_year(request, year):
    ans = float(data_analysis.predict_papist_percentage(year))
    data = [
        {
            "year": year,
            "percentage": ans,
        }
    ]
    return JsonResponse(data, safe=False)

def predict_all(request):
    protestant_percent_values, papist_percent_values, years = data_analysis.get_protestant_and_papist_percentages_through_2050()
    data = []

    print(years[15])

    for i in range(len(protestant_percent_values)):
        print(i)
        print(protestant_percent_values[i])
        datum = {
            "year": years[i][0],
            "protestant": float(protestant_percent_values[i][0]),
            "papist": float(papist_percent_values[i][0]),
        }
        data.append(datum)

    # convert to json
    json_data = json.dumps(data)
    return JsonResponse(json_data, safe=False)


