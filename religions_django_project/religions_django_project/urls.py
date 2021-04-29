"""religions_django_project URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from rest_framework_jwt.views import obtain_jwt_token

urlpatterns = [
    path('admin/', admin.site.urls),
    path('religions/', include('religions_django_app.urls')),
    path('', include('religions_django_app.urls')),  # TODO change this to login page template? if only api then no
    path('token-auth/', obtain_jwt_token), # DRF JWT package provides this default view for decoding received JWT
    # Not necessary? path('', include('frontend.urls')), # TODO fix conflict between here and 2 lines above '' duplicate path
]
