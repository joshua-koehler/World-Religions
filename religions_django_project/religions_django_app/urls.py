from django.urls import include, path
from rest_framework import routers
from . import views
from .views import CombinedDataPointViewSet, ProtestantPointViewSet, PapistPointViewSet

router = routers.DefaultRouter()
router.register(r'combined', CombinedDataPointViewSet)
router.register(r'protestant', ProtestantPointViewSet)
router.register(r'papist', PapistPointViewSet)

urlpatterns = [
    path('', views.index, name='index'),
    path('visualize/', views.visualize, name='visualize'),
    path('predict_protestant/<int:year>/', views.predict_protestant_percentage_at_year, name='predict_protestant'),
    path('predict_papist/<int:year>/', views.predict_papist_percentage_at_year, name='predict_papist'),
    path('predict_all/', views.predict_all, name='predict_all'),
    path('api/', include(router.urls)),
]

