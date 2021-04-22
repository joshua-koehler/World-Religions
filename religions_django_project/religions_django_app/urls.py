from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('visualize/', views.visualize, name='visualize'),
    path('predict_protestant/<int:year>/', views.predict_protestant_percentage_at_year, name='predict_protestant'),
]

